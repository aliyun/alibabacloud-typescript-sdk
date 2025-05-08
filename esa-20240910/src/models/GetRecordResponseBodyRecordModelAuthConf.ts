// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordResponseBodyRecordModelAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key ID of the account to which the origin server belongs. This parameter is returned if the origin type is OSS and AuthType is set to private_cross_account, or the origin type is S3 and AuthType is set to private.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type of the origin server. Different origins support different authentication types. The origin type refers to the SourceType parameter in this operation. This parameter is returned if the origin type is OSS or S3Valid values:
   * 
   * *   **public**: public read. This value is returned when the origin is a public OSS or S3 bucket.
   * *   **private**: private read. This value is returned when the origin is a private S3 bucket.
   * *   **private_same_account**: private read in the same account. This value is returned when the origin is a private OSS bucket in your account.
   * *   **private_cross_account**: private read across accounts. This value is returned when the origin is a private OSS bucket in a different Alibaba Cloud account.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. If the origin type is S3, you must specify this value. You can obtain the region information from the official website of S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret access key of the account to which the origin server belongs. This parameter is returned if the origin type is OSS and AuthType is set to private_cross_account, or the origin type is S3 and AuthType is set to private.SecretKey
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The version of the signature algorithm. This parameter is returned when the origin type is S3 and AuthType is private. The following two types are supported:
   * 
   * *   **v2**
   * *   **v4**
   * 
   * If this parameter is left empty, the default value v4 is used.
   * 
   * @example
   * v2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      region: 'Region',
      secretKey: 'SecretKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      region: 'string',
      secretKey: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

