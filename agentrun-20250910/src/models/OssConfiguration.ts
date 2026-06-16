// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssConfiguration extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * a-test-oss
   */
  bucketName?: string;
  endpoint?: string;
  /**
   * @remarks
   * The mount point for the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/oss1
   */
  mountPoint?: string;
  /**
   * @remarks
   * The access permission for the mount point.
   * 
   * @example
   * READ_WRITE
   */
  permission?: string;
  /**
   * @remarks
   * The object prefix or path within the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * /
   */
  prefix?: string;
  /**
   * @remarks
   * The region where the OSS bucket is located.
   * 
   * @example
   * ch-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      endpoint: 'endpoint',
      mountPoint: 'mountPoint',
      permission: 'permission',
      prefix: 'prefix',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      mountPoint: 'string',
      permission: 'string',
      prefix: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

