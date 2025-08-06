// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayConfigRequest extends $dara.Model {
  appId?: string;
  appName?: string;
  brand?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  configType?: string;
  OS?: string;
  OSVersion?: string;
  SDKVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      brand: 'Brand',
      configType: 'ConfigType',
      OS: 'OS',
      OSVersion: 'OSVersion',
      SDKVersion: 'SDKVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      brand: 'string',
      configType: 'string',
      OS: 'string',
      OSVersion: 'string',
      SDKVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

