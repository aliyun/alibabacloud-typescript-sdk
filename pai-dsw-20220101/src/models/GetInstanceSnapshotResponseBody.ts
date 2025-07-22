// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSnapshotResponseBodyLabels extends $dara.Model {
  /**
   * @example
   * stsTokenOwner
   */
  key?: string;
  /**
   * @example
   * 123xxxxxxxx
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

export class GetInstanceSnapshotResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  code?: string;
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
   * null
   */
  httpStatusCode?: number;
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
   * {\"foo\": \"bar\"}
   */
  labels?: GetInstanceSnapshotResponseBodyLabels[];
  /**
   * @example
   * "XXX"
   */
  message?: string;
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
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
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
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      excludePaths: 'ExcludePaths',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      httpStatusCode: 'HttpStatusCode',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      labels: 'Labels',
      message: 'Message',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      excludePaths: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      httpStatusCode: 'number',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      labels: { 'type': 'array', 'itemType': GetInstanceSnapshotResponseBodyLabels },
      message: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
      success: 'boolean',
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

