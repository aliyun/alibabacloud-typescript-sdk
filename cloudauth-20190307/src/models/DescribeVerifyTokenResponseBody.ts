// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyTokenResponseBodyOssUploadToken extends $dara.Model {
  /**
   * @example
   * cloudauth-zhangjiakou-external
   */
  bucket?: string;
  /**
   * @example
   * https://oss-cn-zhangjiakou.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @example
   * 1582636610000
   */
  expired?: number;
  /**
   * @example
   * STS.NU8rUBj****
   */
  key?: string;
  /**
   * @example
   * prod/RdNLC@Ox2n-1s7NMt
   */
  path?: string;
  /**
   * @example
   * FwmnyoqT8dHj7nJLuM67T****
   */
  secret?: string;
  /**
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
  ossUploadToken?: DescribeVerifyTokenResponseBodyOssUploadToken;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  verifyPageUrl?: string;
  /**
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

