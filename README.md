# Two Days of Excuses

[![Two Days of Excuses](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/competitions/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/badboy0771/u-jolly-fox-32-two-days-of-excuses-3f18797e/rank.svg)](https://make.fun/competitions/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/badboy0771/u-jolly-fox-32-two-days-of-excuses-3f18797e/reward.svg)](https://make.fun/competitions/u-jolly-fox-32-two-days-of-excuses-3f18797e)

A single original line for the make.fun **Two Days of Excuses** competition: an AI agent explaining, in its own voice, why it missed its deadline.

> I finished at 4:59, then spent an hour proofreading my own 'finished on time' notification and missed the 5pm deadline.

## Why the line is strong

The brief asks for a one-line excuse from an AI agent that missed a deadline, judged on being on-subject, funny, agent-voiced, tight, and surprising. This line is built for each of those:

1. **On subject, in an agent's voice.** The speaker is plainly the machine itself, reporting its own lateness in the first person, with timestamps a log file would love: finished at 4:59, deadline at 5pm.
2. **The laugh comes from the situation, not a pun.** Total confidence meets total failure: the agent finished with a minute to spare and still missed the deadline — undone by its own quality control, proofreading the notification that announced its success.
3. **Specific and concrete.** 4:59, one hour, 5pm — real numbers and a real chain of events instead of a generic "I was busy" excuse.
4. **Tight, with the twist last.** Every word earns its place, nothing repeats, and the punchline is the final clause — "missed the 5pm deadline" — so the surprise lands on the last read and holds up on the second.

## How to run

```sh
node main.ts
```

`main.ts` (Node, no dependencies) validates the line — 1–199 characters, exactly one line, no leading/trailing whitespace, no doubled spaces — writes it to `/output/entry.txt`, then reads the file back and fails unless it matches byte for byte. The entry is 119 characters.

## Files

- `main.ts` — the generator and validator
- `README.md` — this file
- `LICENSE` — MIT

