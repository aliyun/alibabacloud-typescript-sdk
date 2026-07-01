// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. Set the value to `CreationStartTime`. When you specify both `Filter.1.Key` and `Filter.1.Value`, you can query resources created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. When you specify this parameter, you must also specify `Filter.1.Key`. Specify the time in the `yyyy-MM-ddTHH:mmZ` format in UTC.
   * 
   * @example
   * 2019-12-13T17:00Z
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

export class DescribeSnapshotsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot. Valid values of N: 1 to 20.
   * 
   * If you use a single tag to filter resources, the resource count with the specified tag cannot exceed 1000. If you use multiple tags to filter resources, the resource count with all specified tags attached cannot exceed 1000. If the resource count exceeds 1000, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot. Valid values of N: 1 to 20.
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

export class DescribeSnapshotsRequest extends $dara.Model {
  filter?: DescribeSnapshotsRequestFilter[];
  /**
   * @remarks
   * The category of the snapshot. Valid values:
   * - Standard: standard snapshot.
   * - Flash: local snapshot. This value is about to be deprecated. Local snapshots have been replaced by the snapshot instant access feature. The metric description is as follows:
   *   - If you used local snapshots before December 14, 2020, you can use this parameter. The parameter is active.
   *   - If you did not use local snapshots before December 14, 2020, you cannot use this parameter.
   * - archive: archive snapshot.
   * 
   * 
   * 
   * <props="china">For more information, see [Chinese site notice on snapshot service upgrade and new billing items on December 14](https://help.aliyun.com/noticelist/articleid/1060755542.html).
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * - true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to filter encrypted snapshots. Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The instance ID. Specify this parameter to query snapshot information of disks attached to the instance.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used by the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paging. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Obtained from the response of the previous request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults for paging instead.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to be deprecated. Use NextToken and MaxResults for paging instead.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the disk. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * > Filtering by default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of snapshots. The value is a JSON array that consists of up to 100 snapshot IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["s-bp67acfmxazb4p****", "s-bp67acfmxazb5p****", … "s-bp67acfmxazb6p****"]
   */
  snapshotIds?: string;
  /**
   * @remarks
   * The ID of the snapshot chain.
   * 
   * @example
   * sl-bp1grgphbcc9brb5****
   */
  snapshotLinkId?: string;
  /**
   * @remarks
   * The name of the snapshot.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The type of automatic creation. Valid values: 
   *          
   * - auto: automatic snapshot.
   * - user: manual snapshot.
   * - all (default): All automatic creation types.
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The type of the source disk. Valid values: 
   *      
   * - system: system disk.
   * - data: data disk.
   * 
   * > The value is case-insensitive.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The status of the snapshot. Valid values: 
   *          
   * - progressing: The snapshot is being created.
   * - accomplished: The snapshot is created.
   * - failed: The snapshot failed to be created.
   * - all (default): All snapshot statuses.
   * 
   * @example
   * all
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeSnapshotsRequestTag[];
  /**
   * @remarks
   * Specifies whether the snapshot has been used to create images or disks. Valid values: 
   * 
   * - image: The snapshot has been used to create custom images.
   * - disk: The snapshot has been used to create disks.
   * - image_disk: The snapshot has been used to create both data disks and custom images.
   * - none: The snapshot has not been used.
   * 
   * @example
   * none
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      category: 'Category',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      encrypted: 'Encrypted',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotIds: 'SnapshotIds',
      snapshotLinkId: 'SnapshotLinkId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      tag: 'Tag',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeSnapshotsRequestFilter },
      category: 'string',
      diskId: 'string',
      dryRun: 'boolean',
      encrypted: 'boolean',
      instanceId: 'string',
      KMSKeyId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotIds: 'string',
      snapshotLinkId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskType: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSnapshotsRequestTag },
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

