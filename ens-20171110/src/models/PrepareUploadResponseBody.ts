// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareUploadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the physical storage. Pass this value when you use the OSS SDK.
   * 
   * @example
   * test-xxxxxx
   */
  bucketName?: string;
  /**
   * @remarks
   * The endpoint. Pass this value when you use the OSS SDK.
   * 
   * @example
   * eos.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6666C5A5-75ED-422E-A022-7121FA18C968
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

