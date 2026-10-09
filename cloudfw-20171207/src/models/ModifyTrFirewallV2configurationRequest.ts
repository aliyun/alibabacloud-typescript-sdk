// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2ConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall. You can call DescribeTrFirewallsV2List to obtain the ID.
   * 
   * > Note: FirewallId and FirewallName are jointly required. Both parameters must be provided at the same time. If either parameter is missing, the operation returns a 400 error.
   * 
   * @example
   * vfw-tr-bcdf89d405ce4bd2****
   */
  firewallId?: string;
  /**
   * @remarks
   * The instance name of the VPC firewall.
   * 
   * > Note: FirewallId and FirewallName are jointly required. Both parameters must be provided at the same time. If either parameter is missing, the operation returns a 400 error.
   * 
   * @example
   * vpc-firewall
   */
  firewallName?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
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

