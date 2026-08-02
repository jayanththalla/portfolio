import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST() {
  if (!redis) return NextResponse.json({ count: 0 });
  const count = await redis.incr("portfolio-visitors");
  return NextResponse.json({ count });
}

export async function GET() {
  if (!redis) return NextResponse.json({ count: 0 });
  const count = (await redis.get<number>("portfolio-visitors")) ?? 0;
  return NextResponse.json({ count });
}
