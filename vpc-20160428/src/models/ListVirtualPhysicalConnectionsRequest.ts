// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualPhysicalConnectionsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The tag value cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * Indicates whether the shared Express Connect circuits have been confirmed and accepted by the tenant. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  isConfirmed?: boolean;
  /**
   * @remarks
   * The number of entries per page when you query results by page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether a next query token is available. Valid values:
   * - You do not need to specify this parameter for the first query or if no next query is available.
   * - If a next query is available, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit associated with the shared Express Connect circuits.
   * 
   * In the following content of this topic, the Express Connect circuit associated with the shared Express Connect circuits is referred to as the Express Connect circuit, to distinguish it from the shared Express Connect circuits.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region ID of the shared Express Connect circuits.
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the shared Express Connect circuits belong.
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
   * The Alibaba Cloud account information of the shared Express Connect circuits owner.
   * 
   * @example
   * 189xxx
   */
  virtualPhysicalConnectionAliUids?: string[];
  /**
   * @remarks
   * The business status of the shared Express Connect circuits. Valid values:
   * 
   * - **Normal**: Normal.
   * - **FinancialLocked**: financial lock.
   * - **SecurityLocked**: Locked for security reasons.
   * 
   * @example
   * Normal
   */
  virtualPhysicalConnectionBusinessStatus?: string;
  /**
   * @remarks
   * The shared Express Connect circuits information.
   * 
   * @example
   * pc-xxx
   */
  virtualPhysicalConnectionIds?: string[];
  /**
   * @remarks
   * The business status information of the shared Express Connect circuits.
   * 
   * @example
   * pc-xxx
   */
  virtualPhysicalConnectionStatuses?: string[];
  /**
   * @remarks
   * The VLAN ID of the shared Express Connect circuits.
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

