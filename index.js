import { USERNAME, USER_ID, PEN_ID } from "./constant.js";
import { fetchPen, fetchProfile, fetchPensByUserId } from 'codepen-fetcher';

async function main() {
  console.log('Starting tests...');
  console.log('-----------------------------------');

  const pass1 = await testFetchPen();
  const pass2 = await testFetchProfile();
  const pass3 = await testFetchPensByUserId();

  console.log('-----------------------------------');

  if (pass1 && pass2 && pass3) {
    console.log('All tests passed.');
  } else {
    console.log('Some tests failed. Please check the logs above for details.');
    process.exit(1);
  }
}

main();

async function testFetchPen() {
  try {
    const pen = await fetchPen(PEN_ID);

    if (!pen || pen.id !== PEN_ID) {
      throw new Error(`Pen with ID '${PEN_ID}' not found.`, { cause: { pen } });
    }

    console.log(`Test fetchPen(${PEN_ID}) passed.`);
    return true;
  } catch (error) {
    console.error(`Test fetchPen(${PEN_ID}) failed:`, error);
    return false;
  }
}

async function testFetchProfile() {
  try {
    const profile = await fetchProfile(USERNAME);

    if (!profile || profile.username !== USERNAME) {
      throw new Error(`Profile for '${USERNAME}' not found.`, { cause: { profile } });
    }

    console.log(`Test fetchProfile(${USERNAME}) passed.`);
    return true;
  } catch (error) {
    console.error(`Test fetchProfile(${USERNAME}) failed:`, error);
    return false;
  }
}

async function testFetchPensByUserId() {
  try {
    const options = { limit: 5 };
    const pens = await fetchPensByUserId(USER_ID, options);

    if (!pens) {
      throw new Error(`No pens found for user ID '${USER_ID}'.`, { cause: { pens } });
    } else if (pens.length !== 5) {
      throw new Error(`Expected 5 pens, but got ${pens.length}.`, { cause: { pens } });
    }

    console.log(`Test fetchPensByUserId(${USER_ID}) passed.`);
    return true;
  } catch (error) {
    console.error(`Test fetchPensByUserId(${USER_ID}) failed:`, error);
    return false;
  }
}
