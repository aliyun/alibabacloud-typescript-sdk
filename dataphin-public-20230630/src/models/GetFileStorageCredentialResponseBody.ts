// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileStorageCredentialResponseBodyStorageCredential extends $dara.Model {
  /**
   * @remarks
   * The temporary AccessKey ID.
   * 
   * @example
   * temp.akId
   */
  accessId?: string;
  /**
   * @remarks
   * The temporary AccessKey ID.
   * 
   * @example
   * temp.akKey
   */
  accessKey?: string;
  /**
   * @remarks
   * The file storage bucket.
   * 
   * @example
   * dataphin
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 17343434343434
   */
  expiration?: number;
  /**
   * @remarks
   * The storage object.
   * 
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
   * @remarks
   * The temporary security token.
   * 
   * @example
   * temp.token
   */
  securityToken?: string;
  /**
   * @remarks
   * The storage cluster type. Valid values: oss and ceph.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
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
  /**
   * @remarks
   * The details of the temporary read/write authorization.
   */
  storageCredential?: GetFileStorageCredentialResponseBodyStorageCredential;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

