// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceShrinkRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agentteams-demo
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SMALL_X1
   */
  instanceSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PRIVATE_NET
   */
  networkType?: string;
  paymentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp1xxxx
   */
  vpcId?: string;
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

