// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable public network access. The default value is false.
   * 
   * @example
   * false
   */
  enableInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intranet access. The default value is true.
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP to HTTPS redirection. The default value is false.
   * 
   * @example
   * false
   */
  enableSSLRedirection?: boolean;
  /**
   * @remarks
   * The instance type of the private gateway. Valid values:
   * 
   * - 2c4g
   * 
   * - 4c8g
   * 
   * - 8c16g
   * 
   * - 16c32g
   * 
   * @example
   * 2c4g
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the gateway is the default private gateway.
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
   * The number of private gateway nodes.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The list of vSwitches. This parameter applies only to application-type dedicated gateways.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC where the gateway resides. This parameter applies only to application-type dedicated gateways.
   * 
   * @example
   * vpc-bp1jkde2******3mew
   */
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

