// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot-consistent group. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot-consistent group. Valid values of N: 1 to 20.
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

export class DescribeSnapshotGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  additionalAttributes?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-j6ca469urv8ei629****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the snapshot-consistent group.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
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
   * The ID of the resource group to which the snapshot-consistent group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot-consistent group. Valid values of N: 1 to 10.
   * 
   * @example
   * ssg-j6ciyh3k52qp7ovm****
   */
  snapshotGroupId?: string[];
  /**
   * @remarks
   * The status of the snapshot-consistent group. Valid values of N: 1 to 3. Valid values:
   * 
   * - progressing: being created.
   * 
   * - accomplished: created.
   * 
   * - failed: failed to be created.
   * 
   * @example
   * accomplished
   */
  status?: string[];
  /**
   * @remarks
   * The tag key-value pairs of the snapshot-consistent group.
   */
  tag?: DescribeSnapshotGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      additionalAttributes: 'AdditionalAttributes',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotGroupId: 'SnapshotGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalAttributes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotGroupId: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeSnapshotGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.additionalAttributes)) {
      $dara.Model.validateArray(this.additionalAttributes);
    }
    if(Array.isArray(this.snapshotGroupId)) {
      $dara.Model.validateArray(this.snapshotGroupId);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

