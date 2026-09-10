// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticBucketVolumeConfig extends $dara.Model {
  /**
   * @example
   * absx9f61c8a-1311999136518149-cn-hangzhou-ab-apsr
   */
  agenticBucket?: string;
  /**
   * @example
   * bs429pop1-1311999136518149-cn-hangzhou-bs-apsr
   */
  bucketName?: string;
  /**
   * @example
   * /test/
   * 
   * **if can be null:**
   * true
   */
  bucketPath?: string;
  /**
   * @example
   * https://oss-cn-hangzhou-internal.aliyuncs.com"
   */
  endpoint?: string;
  /**
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

