// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  feNodeNumber?: number;
  /**
   * @example
   * dg-65u7d65p5960fjq7
   */
  gatewayId?: string;
  /**
   * @example
   * polar-byd-glm-47
   */
  gatewayName?: string;
  /**
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

