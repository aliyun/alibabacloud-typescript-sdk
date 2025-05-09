// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2ConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-bcdf89d405ce4bd2****
   */
  firewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * @example
   * Test instance
   */
  firewallName?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      firewallName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

