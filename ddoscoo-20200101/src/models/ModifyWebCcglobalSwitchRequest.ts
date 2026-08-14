// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCCGlobalSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ccGlobalSwitch?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ccGlobalSwitch: 'CcGlobalSwitch',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ccGlobalSwitch: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

