// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyScenarioShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  scenario?: string;
  sign?: string;
  snDump?: boolean;
  snForce?: boolean;
  snStat?: boolean;
  snTransfer?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  updateOption?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      configShrink: 'Config',
      name: 'Name',
      regionId: 'RegionId',
      scenario: 'Scenario',
      sign: 'Sign',
      snDump: 'SnDump',
      snForce: 'SnForce',
      snStat: 'SnStat',
      snTransfer: 'SnTransfer',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      configShrink: 'string',
      name: 'string',
      regionId: 'string',
      scenario: 'string',
      sign: 'string',
      snDump: 'boolean',
      snForce: 'boolean',
      snStat: 'boolean',
      snTransfer: 'boolean',
      updateOption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

