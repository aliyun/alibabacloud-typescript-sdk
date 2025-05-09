// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScenarioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * 12***
   */
  scenarioId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      scenarioId: 'ScenarioId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioId: 'number',
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

