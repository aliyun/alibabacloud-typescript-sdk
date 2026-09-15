// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticBucketVolumeConfig extends $dara.Model {
  /**
   * @remarks
   * AgenticBucket
   * 
   * @example
   * absx9f61c8a-1311999136518149-cn-hangzhou-ab-apsr
   */
  agenticBucket?: string;
  /**
   * @remarks
   * The BucketSpace of the agentic child.
   * 
   * @example
   * bs429pop1-1311999136518149-cn-hangzhou-bs-apsr
   */
  bucketName?: string;
  /**
   * @remarks
   * The file path under the BucketSpace.
   * 
   * @example
   * /test/
   * 
   * **if can be null:**
   * true
   */
  bucketPath?: string;
  /**
   * @remarks
   * Agentic Bucket Endpoint
   * 
   * @example
   * https://oss-cn-hangzhou-internal.aliyuncs.com"
   */
  endpoint?: string;
  /**
   * @remarks
   * Indicates whether the bucket is read-only.
   * 
   * @example
   * false
   * 
   * **if can be null:**
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

