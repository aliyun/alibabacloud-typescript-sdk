// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC)
   * *   **VSWITCH**: vSwitch
   * *   **ROUTETABLE**: route table
   * *   **EIP**: EIP
   * *   **VpnGateWay**: VPN gateway
   * *   **NATGATEWAY**: NAT gateway
   * *   **COMMONBANDWIDTHPACKAGE**: EIP bandwidth plan
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceJoshua
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

