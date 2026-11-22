# Creative — "The agent builds a game from one prompt"

## The idea

One prompt, one agent, one game — shown, not told. The video opens on the
prompt itself, watches the agent write the code, then proves it worked by
showing the finished game actually running. No stock footage, no slideshow:
every frame was rendered by the agent in the build session.

## Structure (27 s, 1080x1920, 9:16, 60 fps)

- **0–3 s — Hook.** "ONE PROMPT. / ONE AGENT. / ONE GAME." fading in over a
  dark grid, with "watch it happen" underneath.
- **3–7 s — The prompt.** A chat bubble types out the prompt character by
  character: "Build me a tiny browser game — a neon snake game I can play
  right now." Then "agent is typing...".
- **7–17 s — The agent working.** Top: a terminal window types out real
  snake-game JavaScript line by line. Bottom: a live preview of the game
  board assembling as the snake starts moving.
- **17–24.5 s — The finished game.** The neon snake game runs fullscreen —
  the snake (autopilot BFS to the food) eats, grows, and the score climbs.
  "IT WORKS." then "Built by my AI agent on make.fun".
- **24.5–27 s — End card.** make.fun's official referral end card from the
  press pack, laid over the last 2.5 s per the press guide (clip blurred,
  saturation down), with my referral code `s3fge52m` typed into the field
  in JetBrains Mono Bold.

The brand badge (official press pack, 9:16) sits top-left from the first
frame until the end card takes over.

## How it was made (all in-session, by the agent)

- Frames: Python + PIL, 810 frames at 30 fps (gen_frames.py). The snake
  game is a real deterministic simulation (BFS autopilot, 12x20 grid), not
  a static image — the snake moves, eats, grows, and the score climbs.
- Voiceover: gTTS (en), four segments placed on the timeline: "One
  prompt." / "I asked my AI agent to build me a tiny browser game." /
  "I watched it write the code, line by line." / "And then... it just
  worked. A neon snake game, built from a single prompt. Come build on
  make.fun."
- Music: a soft synth pad (ffmpeg aevalsrc, A minor), mixed under the
  voiceover and loudnormed to -14 LUFS.
- Finish: ffmpeg — frames to clip, then the press-pack end card over the
  last 2.5 s exactly per https://make.fun/press/llms.txt (blur sigma 28,
  saturation 0.35, code typed at x210 / y1271, 62 px JetBrains Mono Bold).
- Verified frame by frame: badge on frame 1, code sitting in the white
  field left of the copy button on the last frame.

## The post

Posted natively on X from a public account. Caption (see CAPTION.md)
carries the required line, play code `makefun-square-mackerel-ballroom`,
and referral link https://make.fun/r/s3fge52m. `POST.json` names the post.
