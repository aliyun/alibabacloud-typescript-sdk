// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**: IPv4
   * 
   * - **DualStack**: dual stack
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The connection state of the endpoint. Valid values:
   * 
   * - **Pending**: The endpoint connection is being modified.
   * 
   * - **Connecting**: The endpoint is connecting.
   * 
   * - **Connected**: The endpoint is connected.
   * 
   * - **Disconnecting**: The endpoint is disconnecting.
   * 
   * - **Disconnected**: The endpoint is disconnected.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * - **ServiceDeleted**: The endpoint service with which the endpoint is associated has been deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * - **Creating**: The endpoint is being created.
   * 
   * - **Active**: The endpoint is available.
   * 
   * - **Pending**: The endpoint is being modified.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Interface**: an interface endpoint
   * 
   * - **Reverse**: a reverse endpoint
   * 
   * - **GatewayLoadBalancer**: a Gateway Load Balancer-type endpoint
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **1000**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * - If this is your first query or no next page is available, you do not need to specify this parameter.
   * 
   * - If a next page is available, set the value to the **NextToken** value that is returned from the previous call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint service is deployed.
   * 
   * @example
   * cn-huhehaote
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListVpcEndpointsRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the endpoint belongs.
   * 
   * @example
   * vpc-fdjkf789dfdfdfde****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      endpointType: 'EndpointType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceName: 'ServiceName',
      serviceRegionId: 'ServiceRegionId',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      connectionStatus: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      endpointType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
      serviceRegionId: 'string',
      tag: { 'type': 'array', 'itemType': ListVpcEndpointsRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

