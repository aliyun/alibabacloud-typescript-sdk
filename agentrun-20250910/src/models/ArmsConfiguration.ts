// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ArmsConfiguration extends $dara.Model {
  /**
   * @remarks
   * 应用实时监控服务（ARMS）的许可证密钥
   * 
   * @example
   * arms-license-key-123456
   */
  armsLicenseKey?: string;
  /**
   * @remarks
   * 是否启用应用实时监控服务（ARMS）
   * 
   * @example
   * true
   */
  enableArms?: boolean;
  static names(): { [key: string]: string } {
    return {
      armsLicenseKey: 'armsLicenseKey',
      enableArms: 'enableArms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsLicenseKey: 'string',
      enableArms: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

