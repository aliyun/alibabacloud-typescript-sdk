// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataLoadBalancersPorts extends $dara.Model {
  /**
   * @remarks
   * Port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * Protocol:
   * - TCP
   * - UDP
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

