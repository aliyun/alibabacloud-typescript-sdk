// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScenarioRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
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

