// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group. For more information, see the ResourceName field that is returned by the [ListResources](https://help.aliyun.com/document_detail/412133.html) operation when ResourceType is SelfManaged.
   * 
   * @example
   * eas-r-4gt8twzwllfo******
   */
  resourceName?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - false (default): Auto-renewal is disabled.
   * 
   * - true: Auto-renewal is enabled.
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PrePaid: subscription.
   * 
   * - PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
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
   * Specifies whether to enable internal network access. The default value is true.
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  gatewayType?: string;
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
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes for the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      gatewayType: 'GatewayType',
      instanceType: 'InstanceType',
      name: 'Name',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      autoRenewal: 'boolean',
      chargeType: 'string',
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      gatewayType: 'string',
      instanceType: 'string',
      name: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

