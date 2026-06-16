// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenTrialPackageRequest extends $dara.Model {
  autoCloseSwitch?: number;
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

