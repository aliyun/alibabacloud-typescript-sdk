// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket for delivering authentication information.
   * 
   * @example
   * cn-hangzhou-aliyun-cloudauth-20250516xxxxxx
   */
  bucketName?: string;
  /**
   * @remarks
   * User activation status, SUCCESS indicates activated.
   * 
   * @example
   * SUCCESS
   */
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
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

export class DescribeOssStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: DescribeOssStatusResponseBodyData;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * F2DB870B-EEB7-51BD-9F0A-B5D8D3C79308
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeOssStatusResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

