// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScenariosResponseBodyScenarioList extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the business scenario.
   * 
   * @example
   * 23***
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
   * The ID of the business scenario.
   * 
   * @example
   * 41***
   */
  id?: number;
  /**
   * @remarks
   * The name of the business scenario.
   * 
   * @example
   * test
   */
  scenarioName?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      description: 'Description',
      id: 'Id',
      scenarioName: 'ScenarioName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      description: 'string',
      id: 'number',
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

