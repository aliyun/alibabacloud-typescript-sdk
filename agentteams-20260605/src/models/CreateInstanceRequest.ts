// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestZones extends $dara.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
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
  zones?: CreateInstanceRequestZones[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      networkType: 'NetworkType',
      paymentType: 'PaymentType',
      vpcId: 'VpcId',
      zones: 'Zones',
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
      zones: { 'type': 'array', 'itemType': CreateInstanceRequestZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

