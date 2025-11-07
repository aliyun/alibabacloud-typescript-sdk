// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssStatusV2ResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Bucket name.
   * 
   * @example
   * cn-hangzhou-aliyun-cloudauth-20250516xxxxxx
   */
  bucketName?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * User activation status, **SUCCESS** indicates activated.
   * 
   * @example
   * SUCCESS
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      region: 'Region',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      region: 'string',
      userStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssStatusV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
   */
  resultObject?: DescribeOssStatusV2ResponseBodyResultObject;
  /**
   * @remarks
   * Whether the response was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeOssStatusV2ResponseBodyResultObject,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

