// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualPhysicalConnectionsRequestTags } from "./ListVirtualPhysicalConnectionsRequestTags";


export class ListVirtualPhysicalConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the hosted connection is accepted by the tenant. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isConfirmed?: boolean;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit over which the hosted connections are created.
   * 
   * Express Connect circuits in this topic refer to Express Connect circuits over which hosted connections are created.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the hosted connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the hosted connection belongs.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListVirtualPhysicalConnectionsRequestTags[];
  /**
   * @remarks
   * The information about the Alibaba Cloud account that owns the hosted connection.
   * 
   * @example
   * 189xxx
   */
  virtualPhysicalConnectionAliUids?: string[];
  /**
   * @remarks
   * The business status of the hosted connection. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * *   **SecurityLocked**
   * 
   * @example
   * Normal
   */
  virtualPhysicalConnectionBusinessStatus?: string;
  /**
   * @remarks
   * The information about the hosted connection.
   * 
   * @example
   * pc-xxx
   */
  virtualPhysicalConnectionIds?: string[];
  /**
   * @remarks
   * The business status of the hosted connection.
   * 
   * @example
   * pc-xxx
   */
  virtualPhysicalConnectionStatuses?: string[];
  /**
   * @remarks
   * The VLAN ID of the hosted connection.
   * 
   * @example
   * pc-xxx
   */
  vlanIds?: string[];
  static names(): { [key: string]: string } {
    return {
      isConfirmed: 'IsConfirmed',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      virtualPhysicalConnectionAliUids: 'VirtualPhysicalConnectionAliUids',
      virtualPhysicalConnectionBusinessStatus: 'VirtualPhysicalConnectionBusinessStatus',
      virtualPhysicalConnectionIds: 'VirtualPhysicalConnectionIds',
      virtualPhysicalConnectionStatuses: 'VirtualPhysicalConnectionStatuses',
      vlanIds: 'VlanIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isConfirmed: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListVirtualPhysicalConnectionsRequestTags },
      virtualPhysicalConnectionAliUids: { 'type': 'array', 'itemType': 'string' },
      virtualPhysicalConnectionBusinessStatus: 'string',
      virtualPhysicalConnectionIds: { 'type': 'array', 'itemType': 'string' },
      virtualPhysicalConnectionStatuses: { 'type': 'array', 'itemType': 'string' },
      vlanIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.virtualPhysicalConnectionAliUids)) {
      $dara.Model.validateArray(this.virtualPhysicalConnectionAliUids);
    }
    if(Array.isArray(this.virtualPhysicalConnectionIds)) {
      $dara.Model.validateArray(this.virtualPhysicalConnectionIds);
    }
    if(Array.isArray(this.virtualPhysicalConnectionStatuses)) {
      $dara.Model.validateArray(this.virtualPhysicalConnectionStatuses);
    }
    if(Array.isArray(this.vlanIds)) {
      $dara.Model.validateArray(this.vlanIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

