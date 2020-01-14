/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Selector } from 'testcafe';
import { waitForAngular } from '../../utils';

const tagList = Selector('#tagList');

fixture('Selection Area')
  .page('http://localhost:4200/chart/selection-area')
  .beforeEach(async (testController: TestController) => {
    await testController.resizeWindow(1200, 800);
    await waitForAngular();
  });

test("should not display '0 More...'", async (testController: TestController) => {
  await testController.expect(tagList.textContent).notContains('0 More...');
});
