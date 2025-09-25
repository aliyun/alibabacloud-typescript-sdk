// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssUploadTokenResponseBodyOssUploadToken extends $dara.Model {
  /**
   * @remarks
   * OSS bucket for file storage.
   * 
   * @example
   * cloudauth-zhangjiakou-external
   */
  bucket?: string;
  /**
   * @remarks
   * Access endpoint.
   * 
   * @example
   * https://oss-cn-zhangjiakou.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * Expiration time.
   * 
   * @example
   * 1582636610000
   */
  expired?: number;
  /**
   * @remarks
   * The Key required for file upload.
   * 
   * @example
   * STS.NU8rUBj****
   */
  key?: string;
  /**
   * @remarks
   * File storage path.
   * 
   * @example
   * prod/RdNLC@Ox2n-1s7NMt
   */
  path?: string;
  /**
   * @remarks
   * The Secret required for file upload.
   * 
   * @example
   * FwmnyoqT8dHj7nJLuM67T****
   */
  secret?: string;
  /**
   * @remarks
   * The Token required for file upload.
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
   * Information about the OSS upload Token.
   */
  ossUploadToken?: DescribeOssUploadTokenResponseBodyOssUploadToken;
  /**
   * @remarks
   * The ID of this request.
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

