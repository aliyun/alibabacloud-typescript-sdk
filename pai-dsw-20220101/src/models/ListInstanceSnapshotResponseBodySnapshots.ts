// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceSnapshotResponseBodySnapshotsLabels } from "./ListInstanceSnapshotResponseBodySnapshotsLabels";


export class ListInstanceSnapshotResponseBodySnapshots extends $dara.Model {
  /**
   * @example
   * ["/path1","/path2"]
   */
  excludePaths?: string[];
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-05cefd0be2exxxx
   */
  imageId?: string;
  /**
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu
   */
  imageUrl?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * {\\"foo\\": \\"bar\\"}
   */
  labels?: ListInstanceSnapshotResponseBodySnapshotsLabels[];
  /**
   * @example
   * Internal Error
   */
  reasonCode?: string;
  /**
   * @example
   * ImagePullBackOff
   */
  reasonMessage?: string;
  /**
   * @example
   * snp-05cexxxxxxxxx
   */
  snapshotId?: string;
  /**
   * @example
   * training_data_env
   */
  snapshotName?: string;
  /**
   * @example
   * Pushing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      labels: 'Labels',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': ListInstanceSnapshotResponseBodySnapshotsLabels },
      reasonCode: 'string',
      reasonMessage: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludePaths)) {
      $dara.Model.validateArray(this.excludePaths);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

