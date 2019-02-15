import * as puppeteer from "puppeteer";
import { Request, Response } from "express";

/**
 * @link https://cloud.google.com/functions/docs/writing/http
 *
 * @param req req Cloud Function request context based Express Request Object.
 * @param res res Cloud Function request context based Express Response Object.
 */
export const crawl = async (_: Request, res: Response) => {
  const url = "https://www.4gamer.net/indextop/index_dailyranking.html";
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });

  const titles = await page.$$eval(".top_container h2", list => {
    return list.map(el => el.textContent);
  });

  res.status(200).json({ titles });
};
