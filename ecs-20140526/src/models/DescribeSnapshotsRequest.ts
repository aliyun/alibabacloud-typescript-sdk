// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key for querying resources. The value must be `CreationStartTime`. If you specify `Filter.1.Key` and `Filter.1.Value`, you can query for resources that were created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value. If you specify this parameter, you must also specify `Filter.1.Key`. The value must be in the `yyyy-MM-ddTHH:mmZ` format and in UTC.
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
   * The tag key.
   * 
   * > For better compatibility, use the `Tag.N.Key` parameter.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * 
   * - `Standard`: A standard snapshot.
   * 
   * - `Flash`: A local snapshot. This value is deprecated because the local snapshot feature has been replaced by the instant access feature.
   * 
   *   - If you have used local snapshots before December 14, 2020, you can continue to use this value.
   * 
   *   - If you have not used local snapshots before December 14, 2020, you cannot use this value.
   * 
   * - `archive`: An archive snapshot.
   * 
   * <props="china">
   * 
   * For more information, see [December 14: Alibaba Cloud snapshot service upgrade and new billing items notice](https://help.aliyun.com/noticelist/articleid/1060755542.html).
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * - `true`: Performs a dry run but does not query resources. The system checks the request for potential issues, including missing required parameters, invalid parameter values, and insufficient permissions. If the request is invalid, an error is returned. If the request is valid, the `DryRunOperation` error code is returned.
   * 
   * - `false` (Default): Sends a normal request. If the request is valid, the system returns a 2xx HTTP status code and the query results.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to return only encrypted snapshots. Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the instance. When you specify this ID, the operation returns snapshots of cloud disks attached to the instance.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the KMS key used to encrypt the snapshot.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next page of results. You can obtain this token from the response to a previous query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is deprecated. We recommend that you use the `NextToken` and `MaxResults` parameters for paged queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is deprecated. We recommend that you use the `NextToken` and `MaxResults` parameters for paged queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot belongs. When you filter by this parameter, the query can return a maximum of 1,000 snapshots.
   * 
   * > You cannot filter resources that are in the default resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A JSON array that contains the IDs of up to 100 snapshots to query.
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
   * The snapshot name.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The snapshot creation type. Valid values:
   * 
   * - `auto`: An automatically created snapshot.
   * 
   * - `user`: A manually created snapshot.
   * 
   * - `all` (Default): All snapshot creation types.
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The type of the source disk of the snapshot. Valid values:
   * 
   * - `system`: The snapshot was created from a system disk.
   * 
   * - `data`: The snapshot was created from a data disk.
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
   * - `progressing`: The snapshot is being created.
   * 
   * - `accomplished`: The snapshot is complete.
   * 
   * - `failed`: Snapshot creation failed.
   * 
   * - `all` (Default): All snapshot statuses.
   * 
   * @example
   * all
   */
  status?: string;
  /**
   * @remarks
   * The tags by which to filter snapshots.
   */
  tag?: DescribeSnapshotsRequestTag[];
  /**
   * @remarks
   * The usage of the snapshot. Valid values:
   * 
   * - `image`: The snapshot is used to create a custom image.
   * 
   * - `disk`: The snapshot is used to create a cloud disk.
   * 
   * - `image_disk`: The snapshot is used to create a custom image and a data disk.
   * 
   * - `none`: The snapshot is not used.
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

