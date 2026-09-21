// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticBucketVolumeConfig extends $dara.Model {
  /**
   * @example
   * workspace01
   */
  agenticBucket?: string;
  /**
   * @example
   * sandbox-test
   */
  bucketName?: string;
  /**
   * @example
   * /
   */
  bucketPath?: string;
  /**
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      agenticBucket: 'agenticBucket',
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      endpoint: 'endpoint',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticBucket: 'string',
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

