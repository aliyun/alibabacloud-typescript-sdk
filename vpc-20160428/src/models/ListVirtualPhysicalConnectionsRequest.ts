// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualPhysicalConnectionsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tags. The tag key cannot be an empty string.
   * 
   * The key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tags. The tag value can be an empty string.
   * 
   * The value can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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

export class ListVirtualPhysicalConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tenant has accepted the virtual physical connection. Valid values:
   * 
   * - **true**: The connection has been accepted.
   * 
   * - **false**: The connection has not been accepted.
   * 
   * @example
   * true
   */
  isConfirmed?: boolean;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Valid values:
   * 
   * - Leave this parameter empty for the first request.
   * 
   * - For subsequent requests, set this parameter to the `NextToken` value returned from the previous request.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the physical connection associated with the virtual physical connection.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region where the virtual physical connection is located.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the latest list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the virtual physical connection belongs.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVirtualPhysicalConnectionsRequestTags[];
  /**
   * @remarks
   * The Alibaba Cloud accounts that own the virtual physical connections.
   * 
   * @example
   * 189xxx
   */
  virtualPhysicalConnectionAliUids?: string[];
  /**
   * @remarks
   * The business status of the virtual physical connection. Valid values:
   * 
   * - **Normal**: The connection is operating normally.
   * 
   * - **FinancialLocked**: The connection is locked due to an overdue payment.
   * 
   * - **SecurityLocked**: The connection is locked for security reasons.
   * 
   * @example
   * Normal
   */
  virtualPhysicalConnectionBusinessStatus?: string;
  /**
   * @remarks
   * The IDs of the virtual physical connections.
   * 
   * @example
   * pc-xxx
   */
  virtualPhysicalConnectionIds?: string[];
  /**
   * @remarks
   * The business statuses of the virtual physical connections.
   * 
   * @example
   * pc-xxx
   */
  virtualPhysicalConnectionStatuses?: string[];
  /**
   * @remarks
   * The VLAN IDs of the virtual physical connections.
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

