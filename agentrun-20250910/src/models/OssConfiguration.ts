// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a-test-oss
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /mnt/oss1
   */
  mountPoint?: string;
  /**
   * @example
   * READ_WRITE
   */
  permission?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /
   */
  prefix?: string;
  /**
   * @example
   * ch-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      mountPoint: 'mountPoint',
      permission: 'permission',
      prefix: 'prefix',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
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

