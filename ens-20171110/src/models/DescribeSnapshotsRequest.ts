// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
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
   * The ID of the ENS node. You can query the node ID by calling the [DescribeEnsRegions](https://help.aliyun.com/document_detail/2637662.html) operation.
   * 
   * @example
   * cn-hangzhou
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The node information.
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the snapshot. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate the snapshot IDs with commas (,).
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      ensRegionId: 'string',
      ensRegionIds: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

