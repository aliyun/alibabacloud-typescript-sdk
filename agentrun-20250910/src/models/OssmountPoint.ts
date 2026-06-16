// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSMountPoint extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket to mount.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory path within the bucket to mount.
   * 
   * @example
   * /my-dir
   */
  bucketPath?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * http://oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The local directory path where the bucket is mounted.
   * 
   * @example
   * /mnt/dir
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies whether to mount the OSS bucket as read-only.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      endpoint: 'endpoint',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      mountDir: 'string',
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

