// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used to query resources. The value must be CreationStartTime. If you specify both Filter.1.Key and Filter.1.Value, you can query the resources created after the specified point in time.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used to query resources. If you specify this parameter, you must also specify the Filter.1.Key parameter. The value must be in the yyyy-MM-ddTHH:mmZ format and in UTC+0.
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
   * If you use a single tag to filter resources, the number of resources returned cannot exceed 1,000. If you use multiple tags to filter resources, the number of resources that are attached to all the specified tags cannot exceed 1,000. If the number of resources exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query the resources.
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
   * The snapshot type. Valid values:
   * - Standard: standard snapshot.
   * - Flash: local snapshot. This value will be deprecated soon. The local snapshot feature is replaced by the snapshot instant active feature. The parameter description is as follows:
   *   - If you used local snapshots before December 14, 2020, Normal use of this parameter is allowed.
   *   - If you did not use local snapshots before December 14, 2020, you cannot use this parameter.
   * - archive: archive snapshot.
   * 
   * 
   * 
   * <props="china">For more information, see [Notice on Alibaba Cloud Snapshot Service Upgrade and New billing Items on December 14](https://help.aliyun.com/noticelist/articleid/1060755542.html).
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
   * Specifies whether to only perform a dry run for this request. Valid values:
   * 
   * - true: The system performs a dry run without querying the resource status. The system checks whether your AccessKey pair is valid, the authorization of the Resource Access Management (RAM) user, and whether the required parameters are specified. If the dry run fails, the system returns an error. If the dry run succeeds, the system returns the error code DryRunOperation.
   * - false (default): The system sends a Normal request. If the dry run succeeds, the system returns a 2xx HTTP status code and queries the resource status.
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
   * The instance ID. This parameter specifies the instance whose cloud disk snapshots you want to query.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the KMS key that corresponds to the data cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The number of rows per page for paging in a paged query. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You can obtain the token from the response of the previous request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will be deprecated soon. We recommend that you use the NextToken and MaxResults parameters to perform paging for the paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will be deprecated soon. We recommend that you use the NextToken and MaxResults parameters to perform paging for the paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cloud disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple IDs with commas (,).
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
   * The automatic creation type. Valid values: 
   *          
   * - auto: The snapshot is automatically created.
   * - user: The snapshot is manually created.
   * - all (default): All automatic creation types.
   * 
   * @example
   * all
   */
  snapshotType?: string;
  /**
   * @remarks
   * The type of the source cloud disk of the snapshot. Valid values: 
   *      
   * - system: system cloud disk.
   * - data: data cloud disk.
   * 
   * > The values are not case-sensitive.
   * 
   * @example
   * system
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The snapshot status. Valid values: 
   *          
   * - progressing: The snapshot is being created.
   * - accomplished: The snapshot is successfully created.
   * - failed: The snapshot failed to be created.
   * - all (default): All snapshot statuses.
   * 
   * @example
   * all
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeSnapshotsRequestTag[];
  /**
   * @remarks
   * Specifies whether the snapshot is used to create an image or a cloud disk. Valid values: 
   * 
   * - image: The snapshot is used to create a custom image.
   * - disk: The snapshot is used to create a cloud disk.
   * - image_disk: The snapshot is used to create a data cloud disk and a custom image.
   * - none: The snapshot is not used.
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

