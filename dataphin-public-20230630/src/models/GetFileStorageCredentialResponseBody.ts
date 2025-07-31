// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileStorageCredentialResponseBodyStorageCredential extends $dara.Model {
  /**
   * @example
   * temp.akId
   */
  accessId?: string;
  /**
   * @example
   * temp.akKey
   */
  accessKey?: string;
  /**
   * @example
   * dataphin
   */
  bucket?: string;
  /**
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * 17343434343434
   */
  expiration?: number;
  /**
   * @example
   * 1023231111/abc
   */
  objectName?: string;
  /**
   * @remarks
   * region
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * temp.token
   */
  securityToken?: string;
  /**
   * @example
   * oss
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      endpoint: 'Endpoint',
      expiration: 'Expiration',
      objectName: 'ObjectName',
      region: 'Region',
      securityToken: 'SecurityToken',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      bucket: 'string',
      endpoint: 'string',
      expiration: 'number',
      objectName: 'string',
      region: 'string',
      securityToken: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileStorageCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  storageCredential?: GetFileStorageCredentialResponseBodyStorageCredential;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      storageCredential: 'StorageCredential',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      storageCredential: GetFileStorageCredentialResponseBodyStorageCredential,
      success: 'boolean',
    };
  }

  validate() {
    if(this.storageCredential && typeof (this.storageCredential as any).validate === 'function') {
      (this.storageCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

