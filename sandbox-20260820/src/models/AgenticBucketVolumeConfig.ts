// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticBucketVolumeConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the AgenticBucket.
   * 
   * @example
   * workspace01
   */
  agenticBucket?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * sandbox-test
   */
  bucketName?: string;
  /**
   * @remarks
   * The path of the mounted OSS bucket.
   * 
   * @example
   * /
   */
  bucketPath?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Specifies whether the access permissions of the mounted directory are read-only after the OSS bucket is mounted. Valid values:
   * - true: Read-only.
   * - false: Read and write.
   * 
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

