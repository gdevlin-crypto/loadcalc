# Kato Electrical — Load Calc SOP

**Tool:** `https://gdevlin-crypto.github.io/loadcalc/`

This is the standard procedure for capturing a residential service load calculation in the field and producing the AHJ permit form. Follow it on every job to keep results consistent across techs and to give the office a clean filed PDF.

## One-time setup (per phone)

Open the URL above in Safari or Chrome on the device you'll use in the field. Tap the browser's share or menu button and choose **Add to Home Screen** (iOS) or **Install app** (Android). A Kato icon appears on the home screen and the tool then opens like a regular app.

In the Permit & contractor section, confirm that Contractor, Contractor license #, FSR name, FSR reg #, Email, and Phone are pre-filled with Kato shop info. Enter your own initials in the Tech field. These values stick on the device — you won't re-enter them again. If anything looks wrong, contact the office before you start a calc.

## Per-job workflow

When you arrive at a new job, tap **New calc** in the top right of the tool. That clears the project address, permit numbers, and all calc inputs but keeps the shop info and your tech initials.

Enter the project address and any permit numbers you have. Pick the correct **Jurisdiction** — Vancouver, Surrey, City of North Vancouver, District of North Vancouver, West Vancouver, or Burnaby. This is the AHJ form you'll fill at the end, so picking the wrong one wastes time later.

In Service characteristics, fill the existing service and the proposed new service if upgrading. Set the orientation (overhead or underground) and the number of BC Hydro meters.

In Building configuration, choose how many dwellings the calc covers — Principal only, Principal + Suite, or all three units (Principal + Suite + Laneway). Pick the metering — combined service runs the 8-202(3) cascade across all units; separately metered gives each unit its own service.

Two settings worth a second look every job: the **Heat & A/C interlock** defaults to NOT interlocked, which means heat + AC both add into the calculated demand. Only change to Interlocked if the equipment is physically locked out from running together. The other is **EVSE / EVEMS** — set it to EVEMS controlled when load monitoring is installed, and enter the EVEMS-limited value (not the EVSE nameplate) in the EV field.

For each dwelling, walk the rooms and capture nameplates honestly. Use the in-tool helpers — they exist to keep the calc consistent across techs:

The **baseboard builder** tallies heaters by standard size (500/750/1000/1250/1500/1750/2000/2500 W). Tap the +/− buttons as you walk the house. Use 250 W/ft for standard residential or 375 W/ft for Dimplex Linear Convectors. Hit **Use this total ↑** when done. Do not use breaker rating × 80% to estimate baseboard load — that overstates the connected load and gives the wrong demand factor.

For **A/C and heat pumps** use the FLA × V helper rather than guessing wattage. Enter FLA from the nameplate and the watts populate automatically.

For the **range**, "Single electric range (6000 W applied)" is the default — 6000 W demand auto-applies as soon as that mode is selected, no nameplate entry needed for any range up to 12 kW. Only enter a nameplate value if the range exceeds 12 kW. For separate cooktop + wall oven, pick that mode and enter both nameplates. For gas ranges, induction with gas backup, or no installed cooking, pick **No electric range** — this flips the (vii) calc from 25%-per-load to the no-range formula.

For **other loads ≥ 1500 W**, only enter the dryer, HWT, dishwasher, hot tub, pool, sauna, and custom loads if each individual load is 1500 W or more. Loads under 1500 W are excluded by code and don't go into the (vii) line.

Check the running totals on screen. The Service result card shows per-unit tiles (each unit's amps + recommended breaker) and the consumer's service total. If anything looks wildly different from what you'd estimate by hand, recheck before generating the PDF.

## Generating the AHJ PDF

Scroll to **Export to AHJ form**. Tap the button for the right jurisdiction. The tool fetches the blank PDF from the Kato repo automatically and produces a filled copy named `<jurisdiction>_LoadCalc_<address>.pdf`. It saves to your device's Downloads or Files.

If the auto-fetch fails (offline, or the AHJ posted a new revision), the file picker opens — pick the blank PDF you carry locally and the fill proceeds.

Open the filled PDF and check the totals row against what the tool showed on screen. If they don't match, something went wrong — capture a screenshot and send it to the office before submitting.

## Sending the calc

Email the filled PDF to the office at `info@katoelectrical.com` with the job address in the subject line. The office reviews, gets FSR sign-off if needed, and submits to the AHJ.

## Common mistakes to avoid

Using breaker × 80% for baseboard load instead of nameplate sum.

Leaving the interlock toggle on Interlocked when heat and AC can run together (rare, but check the install).

Picking "Single electric range" for a gas range — that triggers the wrong (vii) treatment. Pick "No electric range" for gas.

Forgetting to switch Building configuration to "Principal + Suite" or "All three units" when a suite or laneway is present. The result tile and cascade only consider configured units.

Entering EVSE nameplate when EVEMS is in use. Enter the EVEMS-limited value in the EV field, not the EVSE rating.

## When to escalate to the office

Send the calc to the office for FSR review before submitting if any of the following are true:

The recommended service exceeds 200 A.

The service is three-phase or there's a non-standard interlock arrangement.

The calc involves more than three dwellings (the tool currently supports up to three; Surrey Townhouse forms accept up to six but our tool doesn't yet).

The AHJ pushes back on a previously-submitted load calc — send the original calc data back to the office before re-filing.

Anything you're not sure about. Better to send a question than to file a calc you can't defend.

---

*Revised 2026. Tool source and updates at github.com/gdevlin-crypto/loadcalc.*
