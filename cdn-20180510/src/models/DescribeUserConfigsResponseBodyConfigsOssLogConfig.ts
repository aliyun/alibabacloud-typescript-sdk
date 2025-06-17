// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConfigsResponseBodyConfigsOssLogConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * Buckettest
   */
  bucket?: string;
  /**
   * @remarks
   * Indicates whether the OSS bucket is enabled.
   * 
   * @example
   * off
   */
  enable?: string;
  /**
   * @remarks
   * The prefix.
   * 
   * @example
   * test
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      enable: 'Enable',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      enable: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

