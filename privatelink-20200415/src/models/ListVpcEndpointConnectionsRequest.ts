// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * - **Pending**: The endpoint connection is being modified.
   * 
   * - **Connecting**: The endpoint connection is being established.
   * 
   * - **Connected**: The endpoint is connected to the endpoint service.
   * 
   * - **Disconnecting**: The endpoint is being disconnected from the endpoint service.
   * 
   * - **Disconnected**: The endpoint is disconnected from the endpoint service.
   * 
   * - **Deleting**: The endpoint connection is being deleted.
   * 
   * - **ServiceDeleted**: The corresponding endpoint service is deleted.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the endpoint belongs.
   * 
   * @example
   * 25346073170691****
   */
  endpointOwnerId?: number;
  /**
   * @remarks
   * The endpoint elastic network interface (ENI) ID.
   * 
   * @example
   * eni-hp32lk0pyv6o94hs****
   */
  eniId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **1000**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * - You do not need to specify this parameter for the first query or if no next query is to be sent.
   * - If a next query is to be sent, set the value to the value of **NextToken** that is returned from the last API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the endpoint connections that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service resource that is replaced in the smooth migration scenario.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  replacedResourceId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the endpoint belongs.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service resource ID.
   * 
   * @example
   * lb-hp32z1wp5peaoox2q****
   */
  resourceId?: string;
  /**
   * @remarks
   * The endpoint service ID.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      endpointId: 'EndpointId',
      endpointOwnerId: 'EndpointOwnerId',
      eniId: 'EniId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      replacedResourceId: 'ReplacedResourceId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      endpointId: 'string',
      endpointOwnerId: 'number',
      eniId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      replacedResourceId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

