// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTrFirewallV2Request extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-99bc4f0fc88b4d00****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
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

