// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test_bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * @example
   * http://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the OSS object.
   * 
   * @example
   * test.sql
   */
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      objectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

