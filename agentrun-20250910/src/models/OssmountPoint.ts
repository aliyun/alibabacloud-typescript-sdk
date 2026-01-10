// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSMountPoint extends $dara.Model {
  /**
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @example
   * /my-dir
   */
  bucketPath?: string;
  /**
   * @example
   * http://oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * /mnt/dir
   */
  mountDir?: string;
  /**
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

