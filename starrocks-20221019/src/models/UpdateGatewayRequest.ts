// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The number of gateway nodes.
   * 
   * @example
   * 3
   */
  feNodeNumber?: number;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * dg-65u7d65p5960fjq7
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * polar-byd-glm-47
   */
  gatewayName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      feNodeNumber: 'FeNodeNumber',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feNodeNumber: 'number',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

