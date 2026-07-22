// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2DetailRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * > FirewallId is required. If this parameter is not specified, ErrorParameters(400) is returned. You can call DescribeTrFirewallsV2List to query existing FirewallId values. If no VPC firewall exists, create a CEN instance and a transit router first, and then call CreateTrFirewallV2 to obtain a FirewallId.
   * 
   * @example
   * vfw-tr-a5a6b89f46764928****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
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
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
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

