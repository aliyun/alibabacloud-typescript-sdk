// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. Valid values of N: 1 to 20. The tag key cannot be an empty string.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count of resources that are attached to all specified tags cannot exceed 1000. If the resource count exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * Environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestValue
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

export class DescribeVscsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the cloud disk or local disk that is attached.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 10 to 500. Default value: If the value is not specified or is less than 10, the default value is 10. If the value is greater than 500, the default value is 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned by this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000. Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the VSCs to query. If you do not specify this parameter, VSCs in all states are returned. Valid values:
   * 
   * - In_use: in use.
   * - Attaching: being attached.
   * - Detaching: being detached.
   * - AttachFailed: failed to attach.
   * - DetachFailed: failed to detach.
   * - All (default): all states.
   * 
   * Default value: All.
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeVscsRequestTag[];
  /**
   * @remarks
   * The IDs of the VSCs to query.
   * 
   * We recommend that you specify no more than 100 VSC IDs.
   */
  vscIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      tag: 'Tag',
      vscIds: 'VscIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVscsRequestTag },
      vscIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vscIds)) {
      $dara.Model.validateArray(this.vscIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

