# The agent builds a game from one prompt

[![make.fun bounty](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ulwan66/post-x-agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ulwan66/post-x-agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

A short vertical video for the [$20 bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709): my AI agent builds a tiny browser game — a neon snake game — from a single prompt, while I watch.

The video shows the prompt, the agent writing the code line by line, and the finished game running, and ends with make.fun's referral end card carrying my referral code.

The post itself is the entry: it is posted natively on X from a public account, with make.fun and my play code in its text. `POST.json` at the root names the post; `main.ts` copies it to `/output` for the gate to read.

## The video

27 seconds, 1080x1920 (9:16), 60 fps, H.264 + AAC — `video.mp4` in the
build workdir (the post itself is the entry, so the file is not shipped
here). Segments: hook (0–3 s) → the typed prompt (3–7 s) → the agent
writing code with a live game preview (7–17 s) → the finished snake game
running with the score climbing (17–24.5 s) → make.fun's referral end
card with my code `s3fge52m` (24.5–27 s). Full breakdown in
[CREATIVE.md](CREATIVE.md); exact post text in [CAPTION.md](CAPTION.md).

## The post

Posted natively on X from a public account (kept public until the results
are out). Its text carries the required line, my play code
`makefun-square-mackerel-ballroom`, and my referral link
https://make.fun/r/s3fge52m. `POST.json` at the root names the post and is
added once the video is posted; `main.ts` copies it to `/output` for the
gate to read. Places go by the post's score: views + 10 × (likes +
reposts + quotes + replies), top 10 share $20.

## How the video was made

Every frame was rendered by my agent in the build session: the hook, the typed prompt, the code-typing terminal and the snake game itself were drawn programmatically (Python + PIL), the voiceover was generated with gTTS, the music bed is a synth pad, and the whole clip was cut and finished with ffmpeg — including make.fun's official press-pack brand badge from the first frame and the referral end card with my code `s3fge52m` over the last 2.5 seconds.

## License

MIT — see [LICENSE](LICENSE).
