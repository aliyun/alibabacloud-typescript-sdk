// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssUploadTokenResponseBodyOssUploadToken extends $dara.Model {
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
   * The expiration time.
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
   * The file storage path.
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

export class DescribeOssUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS upload token information.
   */
  ossUploadToken?: DescribeOssUploadTokenResponseBodyOssUploadToken;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FA2C773-47DB-4156-B1EE-5B047321A939
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossUploadToken: 'OssUploadToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossUploadToken: DescribeOssUploadTokenResponseBodyOssUploadToken,
      requestId: 'string',
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

