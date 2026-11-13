// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSMountPoint extends $dara.Model {
  /**
   * @remarks
   * The mounted OSS bucket.
   * 
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The mounted OSS bucket path.
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
   * The mount directory.
   * 
   * @example
   * /mnt/dir
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies whether to allow mounting OSS to a local directory that contains existing files or subdirectories.
   */
  nonempty?: boolean;
  /**
   * @remarks
   * Specifies whether the mount is read-only.
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
      nonempty: 'nonempty',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      mountDir: 'string',
      nonempty: 'boolean',
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

