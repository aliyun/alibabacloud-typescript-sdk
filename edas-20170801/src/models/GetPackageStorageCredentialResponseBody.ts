// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPackageStorageCredentialResponseBodyCredential extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of your account.
   * 
   * @example
   * <yourAccessKeyId>
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret of your account.
   * 
   * @example
   * <yourAccessKeySecret>
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * edas-bj
   */
  bucket?: string;
  /**
   * @remarks
   * The time when the STS credential expires. Example: 2019-11-10T07:20:19Z.
   * 
   * @example
   * 2019-11-10T07:20:19Z
   */
  expiration?: string;
  /**
   * @remarks
   * The object key prefix in Object Storage Service (OSS).
   * 
   * @example
   * release-pkg/117274586608****
   */
  keyPrefix?: string;
  /**
   * @remarks
   * The private endpoint of OSS.
   * 
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  ossInternalEndpoint?: string;
  /**
   * @remarks
   * The public endpoint of OSS.
   * 
   * @example
   * oss-cn-beijing.aliyuncs.com
   */
  ossPublicEndpoint?: string;
  /**
   * @remarks
   * The VPC endpoint of OSS.
   * 
   * @example
   * oss-cn-beijing-internal.aliyuncs.com
   */
  ossVpcEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The security token issued by STS.
   * 
   * @example
   * <yourSecurityToken>
   */
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucket: 'Bucket',
      expiration: 'Expiration',
      keyPrefix: 'KeyPrefix',
      ossInternalEndpoint: 'OssInternalEndpoint',
      ossPublicEndpoint: 'OssPublicEndpoint',
      ossVpcEndpoint: 'OssVpcEndpoint',
      regionId: 'RegionId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucket: 'string',
      expiration: 'string',
      keyPrefix: 'string',
      ossInternalEndpoint: 'string',
      ossPublicEndpoint: 'string',
      ossVpcEndpoint: 'string',
      regionId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageStorageCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The STS credential.
   */
  credential?: GetPackageStorageCredentialResponseBodyCredential;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      credential: 'Credential',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      credential: GetPackageStorageCredentialResponseBodyCredential,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

