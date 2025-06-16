// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIpv4GatewayAttributeResponseBodyTags } from "./GetIpv4gatewayAttributeResponseBodyTags";


export class GetIpv4GatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the IPv4 gateway was created.
   * 
   * @example
   * 2022-02-24T09:02:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the IPv4 gateway is activated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The description of the IPv4 gateway.
   * 
   * @example
   * new
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
   * The request ID.
   * 
   * @example
   * 7F79A919-6FE9-50C4-967B-45705E1F9C38
   */
  requestId?: string;
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
   * *   **Activating**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetIpv4GatewayAttributeResponseBodyTags[];
  /**
   * @remarks
   * The ID of the VPC with which the IPv4 gateway is associated.
   * 
   * @example
   * vpc-5tsrxlw7dv074gci4****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enabled: 'Enabled',
      ipv4GatewayDescription: 'Ipv4GatewayDescription',
      ipv4GatewayId: 'Ipv4GatewayId',
      ipv4GatewayName: 'Ipv4GatewayName',
      ipv4GatewayRouteTableId: 'Ipv4GatewayRouteTableId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enabled: 'boolean',
      ipv4GatewayDescription: 'string',
      ipv4GatewayId: 'string',
      ipv4GatewayName: 'string',
      ipv4GatewayRouteTableId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetIpv4GatewayAttributeResponseBodyTags },
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

