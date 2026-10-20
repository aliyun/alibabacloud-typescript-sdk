// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the specified cloud disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone. You can call [DescribeEnsRegions](https://help.aliyun.com/document_detail/2637662.html) to query edge zone IDs.
   * 
   * @example
   * cn-hangzhou
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. Array length: 1 to 100.
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the current query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The snapshot ID. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * sp-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The display name of the snapshot. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-).
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

