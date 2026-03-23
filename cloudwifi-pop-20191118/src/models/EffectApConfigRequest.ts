// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EffectApConfigRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      apMac: 'ApMac',
      appCode: 'AppCode',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apMac: 'string',
      appCode: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

