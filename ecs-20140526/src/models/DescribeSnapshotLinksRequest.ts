// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotLinksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of disks. You can specify up to 100 disk IDs at a time. The DiskIds parameter is a JSON array. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["d-bp1d6tsvznfghy7y****", "d-bp1ippxbaql9zet7****", … "d-bp1ib7bcz07lcxa9****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1h6jmbefj2cyqs****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 100.
   * Default value:
   * - If this parameter is not specified or is set to a value less than 10, the default value is 10.
   * - If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the disk status list. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 50
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
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of snapshot chains. You can specify up to 100 snapshot chain IDs at a time. The SnapshotLinkIds parameter is a JSON array. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["sl-bp1grgphbcc9brb5****", "sl-bp1c4izumvq0i5bs****", … "sl-bp1akk7isz866dds****"]
   */
  snapshotLinkIds?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotLinkIds: 'SnapshotLinkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotLinkIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

