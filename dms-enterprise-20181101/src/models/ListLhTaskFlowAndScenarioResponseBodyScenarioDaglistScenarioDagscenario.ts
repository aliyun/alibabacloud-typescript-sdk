// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLhTaskFlowAndScenarioResponseBodyScenarioDAGListScenarioDAGScenario extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the business scenario.
   * 
   * @example
   * 51****
   */
  creatorId?: string;
  /**
   * @remarks
   * The description of the business scenario.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the business scenario.
   * 
   * @example
   * Scenario_2
   */
  scenarioName?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      description: 'Description',
      scenarioName: 'ScenarioName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      description: 'string',
      scenarioName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

