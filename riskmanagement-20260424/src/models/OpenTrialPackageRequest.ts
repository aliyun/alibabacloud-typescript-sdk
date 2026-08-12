// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenTrialPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically disable the trial plan when it expires.
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  autoCloseSwitch?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCloseSwitch: 'AutoCloseSwitch',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCloseSwitch: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

