// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayLoadBalancersRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @example
   * lb-xxxx
   */
  loadBalancerId?: string;
  /**
   * @example
   * Internet
   */
  network?: string;
  /**
   * @example
   * false
   */
  related?: boolean;
  /**
   * @example
   * NLB
   */
  type?: string;
  /**
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      loadBalancerId: 'loadBalancerId',
      network: 'network',
      related: 'related',
      type: 'type',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      loadBalancerId: 'string',
      network: 'string',
      related: 'boolean',
      type: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

