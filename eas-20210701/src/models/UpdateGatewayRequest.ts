// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Internet access. Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable private access. Default value: true.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP to HTTPS redirection. Default value: false.
   * 
   * @example
   * false
   */
  enableSSLRedirection?: boolean;
  /**
   * @remarks
   * The instance type used by the private gateway. Valid values:
   * 
   * *   2c4g
   * *   4c8g
   * *   8c16g
   * *   16c32g
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      enableSSLRedirection: 'EnableSSLRedirection',
      instanceType: 'InstanceType',
      isDefault: 'IsDefault',
      name: 'Name',
      replicas: 'Replicas',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      enableSSLRedirection: 'boolean',
      instanceType: 'string',
      isDefault: 'boolean',
      name: 'string',
      replicas: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

