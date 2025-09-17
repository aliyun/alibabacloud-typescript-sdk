// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSourceServersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is attached to the SMC resource. Valid values of N: 1 to 20.
   * 
   * You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is attached to the SMC resource. Valid values of N: 1 to 20.
   * 
   * You can specify an empty string as a tag key. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeSourceServersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration job.
   * 
   * @example
   * j-bp19vlwm0tyigbmj****
   */
  jobId?: string;
  /**
   * @remarks
   * The name of the migration source. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testSourceServerName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of migration job that is associated with the migration source.
   */
  relatedJobType?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmw3ty5y7****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The migration source ID. You can specify multiple IDs.
   * 
   * @example
   * s-bp1e2fsl57knvuug****
   */
  sourceId?: string[];
  /**
   * @remarks
   * The state of the migration source. Valid values:
   * 
   * *   Unavailable: The migration source is inactive, or an error occurs in the migration source.
   * *   Available: The migration source is active.
   * *   InUse: The migration source is being migrated.
   * *   Deleting: The migration source is being deleted from Server Migration Center (SMC).
   * 
   * @example
   * Available
   */
  state?: string;
  /**
   * @remarks
   * The tag.
   */
  tag?: DescribeSourceServersRequestTag[];
  /**
   * @remarks
   * The workgroup ID.
   * 
   * @example
   * w-bp1ja22kdqphehlj****
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      relatedJobType: 'RelatedJobType',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
      state: 'State',
      tag: 'Tag',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      relatedJobType: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      sourceId: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSourceServersRequestTag },
      workgroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedJobType)) {
      $dara.Model.validateArray(this.relatedJobType);
    }
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
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

