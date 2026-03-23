// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepairApRadioRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apMac?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  radioIndex?: string;
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      appCode: 'AppCode',
      appName: 'AppName',
      radioIndex: 'RadioIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      appCode: 'string',
      appName: 'string',
      radioIndex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

