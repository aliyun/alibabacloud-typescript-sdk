// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrFirewallV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-37e22bf0d9b34870****
   */
  firewallId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 822B9125-6E1A-551C-8EAF-6E7AE7444B00
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

