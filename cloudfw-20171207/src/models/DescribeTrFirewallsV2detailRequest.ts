// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2DetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPC firewall instance. This parameter is required. If this parameter is not specified, the ErrorMissingFirewallId (-360444, firewall id is required) error is returned.
   * 
   * > You can call DescribeTrFirewallsV2List to query existing FirewallIds (in the format of vfw-tr-*). If the firewall is not created, you must first create an Enterprise Edition transit router in CEN and then call CreateTrFirewallV2.
   * 
   * @example
   * vfw-tr-a5a6b89f46764928****
   */
  firewallId?: string;
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

