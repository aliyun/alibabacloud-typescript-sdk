// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * `instanceName`: `string`, required.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-demo
   */
  instanceName?: string;
  /**
   * @remarks
   * `instanceSpec`: `string`, optional, default `SMALL_X1`
   * 
   * This parameter is required.
   * 
   * @example
   * SMALL_X1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * `networkType`: `string`, optional, default `PRIVATE_NET`  
   * Valid values:
   * 
   * *   `PRIVATE_PUBNET`
   * *   `PRIVATE_NET`
   * *   `PUB_NET`
   * 
   * This parameter is required.
   * 
   * @example
   * PRIVATE_NET
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * `vpcId`: `string`, required.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zones.
   * 
   * @example
   * []
   */
  zonesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      networkType: 'NetworkType',
      paymentType: 'PaymentType',
      vpcId: 'VpcId',
      zonesShrink: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      networkType: 'string',
      paymentType: 'string',
      vpcId: 'string',
      zonesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

