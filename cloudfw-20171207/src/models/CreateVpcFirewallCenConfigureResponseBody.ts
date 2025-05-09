// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallCenConfigureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125h4j6
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

