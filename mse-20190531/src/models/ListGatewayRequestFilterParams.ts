// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The type of the gateway.
   * 
   * @example
   * Ingress
   */
  gatewayType?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse_ingresspre-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The tag of the instance.
   * 
   * @example
   * [{"key":"tagkey","value":"tagvalue"}]
   */
  mseTag?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * rutain-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-7y2uye*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp13hhyjntbab7w****
   */
  vpc?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'GatewayType',
      gatewayUniqueId: 'GatewayUniqueId',
      instanceId: 'InstanceId',
      mseTag: 'MseTag',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      gatewayUniqueId: 'string',
      instanceId: 'string',
      mseTag: 'string',
      name: 'string',
      resourceGroupId: 'string',
      vpc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

