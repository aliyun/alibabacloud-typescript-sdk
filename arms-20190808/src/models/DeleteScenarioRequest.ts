// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScenarioRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjaikou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the business monitoring job. You can obtain the ID by calling the ListScenario operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 132
   */
  scenarioId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenarioId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

