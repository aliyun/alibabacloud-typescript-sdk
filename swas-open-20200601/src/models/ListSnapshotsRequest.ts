// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot. The tag key must be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot. The tag value must be 1 to 64 characters in length. Valid values of N: 1 to 20.
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

export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp14wq0149cpp2xy****
   */
  diskId?: string;
  /**
   * @remarks
   * The instance ID of the simple application server.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the snapshot list.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server to which the snapshot belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot IDs. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ["s-bp16oazlsold4dks****", "s-bp16oazlsold4abc****"]
   */
  snapshotIds?: string;
  /**
   * @remarks
   * The type of the source cloud disk for the snapshot. Valid values:
   * - System: system cloud disk.
   * - Data: data cloud disk.
   * 
   * @example
   * Data
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The tags of the snapshot.
   */
  tag?: ListSnapshotsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotIds: 'SnapshotIds',
      sourceDiskType: 'SourceDiskType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotIds: 'string',
      sourceDiskType: 'string',
      tag: { 'type': 'array', 'itemType': ListSnapshotsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

