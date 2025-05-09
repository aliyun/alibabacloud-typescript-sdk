// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScenarioRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 12***
   */
  scenarioId?: string;
  /**
   * @remarks
   * The name of the business scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * Business scenario - test
   */
  scenarioName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      scenarioId: 'ScenarioId',
      scenarioName: 'ScenarioName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      scenarioId: 'string',
      scenarioName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

