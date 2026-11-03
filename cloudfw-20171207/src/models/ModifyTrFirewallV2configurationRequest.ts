// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2ConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPC firewall instance. You can obtain the ID by calling DescribeTrFirewallsV2List.
   * 
   * > Note: FirewallId and FirewallName are jointly required. You must specify both parameters. If either parameter is missing, the API operation returns a 400 error.
   * 
   * @example
   * vfw-tr-bcdf89d405ce4bd2****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the VPC firewall instance.
   * 
   * > Note: FirewallId and FirewallName are jointly required. You must specify both parameters. If either parameter is missing, the API operation returns a 400 error.
   * 
   * @example
   * vpc-firewall
   */
  firewallName?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
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

