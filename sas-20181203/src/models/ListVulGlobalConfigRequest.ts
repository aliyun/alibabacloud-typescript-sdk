// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulGlobalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the configuration item. Valid values:
   * - **vul_scan_ip_list**: the collection of vulnerability scanning IP addresses.
   * 
   * @example
   * vul_scan_ip_list
   */
  configKey?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

