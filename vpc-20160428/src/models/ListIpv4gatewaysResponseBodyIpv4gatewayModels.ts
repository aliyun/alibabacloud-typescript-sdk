// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpv4GatewaysResponseBodyIpv4GatewayModelsTags } from "./ListIpv4gatewaysResponseBodyIpv4gatewayModelsTags";


export class ListIpv4GatewaysResponseBodyIpv4GatewayModels extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IPv4 gateway is activated. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when the IPv4 gateway was created.
   * 
   * @example
   * 2021-12-02T07:07:35Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The description of the IPv4 gateway.
   * 
   * @example
   * test
   */
  ipv4GatewayDescription?: string;
  /**
   * @remarks
   * The ID of the IPv4 gateway.
   * 
   * @example
   * ipv4gw-5tsnc6s4ogsedtp3k****
   */
  ipv4GatewayId?: string;
  /**
   * @remarks
   * The name of the IPv4 gateway.
   * 
   * @example
   * name
   */
  ipv4GatewayName?: string;
  /**
   * @remarks
   * The ID of the route table associated with the IPv4 gateway.
   * 
   * @example
   * vtb-5ts0ohchwkp3dydt2****
   */
  ipv4GatewayRouteTableId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPv4 gateway belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the IPv4 gateway. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The list of tags that are added to the resource group.
   */
  tags?: ListIpv4GatewaysResponseBodyIpv4GatewayModelsTags[];
  /**
   * @remarks
   * The ID of the VPC with which the IPv4 gateways are associated.
   * 
   * @example
   * vpc-5tsrxlw7dv074gci4****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      gmtCreate: 'GmtCreate',
      ipv4GatewayDescription: 'Ipv4GatewayDescription',
      ipv4GatewayId: 'Ipv4GatewayId',
      ipv4GatewayName: 'Ipv4GatewayName',
      ipv4GatewayRouteTableId: 'Ipv4GatewayRouteTableId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      gmtCreate: 'string',
      ipv4GatewayDescription: 'string',
      ipv4GatewayId: 'string',
      ipv4GatewayName: 'string',
      ipv4GatewayRouteTableId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListIpv4GatewaysResponseBodyIpv4GatewayModelsTags },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

