// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSVolumeConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to mount as a storage volume.
   * 
   * @example
   * sandbox-shared-data
   */
  bucketName?: string;
  /**
   * @remarks
   * The path prefix within the bucket to use as the mount source. If this parameter is not specified, the entire bucket is mounted.
   * 
   * @example
   * /workspace/
   */
  bucketPath?: string;
  /**
   * @remarks
   * The OSS service registration address used to access the bucket. Use an internal network address in the same region as the sandboxed container.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Specifies whether the storage volume is mounted as read-only in the sandboxed container.
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      endpoint: 'endpoint',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

