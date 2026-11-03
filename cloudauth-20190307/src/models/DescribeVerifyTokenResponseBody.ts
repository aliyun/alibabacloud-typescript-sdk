// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyTokenResponseBodyOssUploadToken extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket for file storage.
   * 
   * @example
   * cloudauth-zhangjiakou-external
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * https://oss-cn-zhangjiakou.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The expiration time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1582636610000
   */
  expired?: number;
  /**
   * @remarks
   * The key required for file upload.
   * 
   * @example
   * STS.NU8rUBj****
   */
  key?: string;
  /**
   * @remarks
   * The storage path of the file.
   * 
   * @example
   * prod/RdNLC@Ox2n-1s7NMt
   */
  path?: string;
  /**
   * @remarks
   * The secret required for file upload.
   * 
   * @example
   * FwmnyoqT8dHj7nJLuM67T****
   */
  secret?: string;
  /**
   * @remarks
   * The token required for file upload.
   * 
   * @example
   * uWia500nTS5knZaDzq4/KqpvhcLnO****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endPoint: 'EndPoint',
      expired: 'Expired',
      key: 'Key',
      path: 'Path',
      secret: 'Secret',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endPoint: 'string',
      expired: 'number',
      key: 'string',
      path: 'string',
      secret: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS upload token information.
   */
  ossUploadToken?: DescribeVerifyTokenResponseBodyOssUploadToken;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The entry URL of the legacy H5 authentication solution. This solution has been retired and no longer supports new integrations. If you need to integrate an H5 authentication solution, we recommend that you use the [PC or mobile H5 web integration solution](https://help.aliyun.com/document_detail/173779.html) of Financial-grade ID Verification.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  verifyPageUrl?: string;
  /**
   * @remarks
   * The token for the authentication. The token is used to link all operations in the authentication request and is valid for 30 minutes.
   * 
   * @example
   * c302c0797679457685410ee51a5ba375
   */
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      ossUploadToken: 'OssUploadToken',
      requestId: 'RequestId',
      verifyPageUrl: 'VerifyPageUrl',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossUploadToken: DescribeVerifyTokenResponseBodyOssUploadToken,
      requestId: 'string',
      verifyPageUrl: 'string',
      verifyToken: 'string',
    };
  }

  validate() {
    if(this.ossUploadToken && typeof (this.ossUploadToken as any).validate === 'function') {
      (this.ossUploadToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

