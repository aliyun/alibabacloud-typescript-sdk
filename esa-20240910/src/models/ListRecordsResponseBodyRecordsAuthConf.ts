// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecordsResponseBodyRecordsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key of the account to which the origin server belongs. This value is returned when the SourceType is OSS, and AuthType is private_cross_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * u0Nkg5gBK***QF5wvKMM504JUHt
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type of the origin server. Different origins support different authentication types. The type of origin refers to the SourceType parameter in this operation. If the type of origin is OSS or S3, the authentication type of the origin must be specified. Valid values:
   * 
   * *   **public**: public read. This value is returned when the origin is a public OSS or S3 bucket.
   * *   **private**: private read. This value is returned when the origin is a private S3 bucket.
   * *   **private_same_account**: private read under the same account. This value is returned when the origin is a private OSS bucket in your Alibaba Cloud account.
   * *   **private_cross_account**: private read across accounts. This value is returned when the origin is a private OSS bucket in a different Alibaba Cloud account.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. This parameter is returned if the origin type is S3. You can get the region information from the official website of Amazon S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret access key of the account to which the origin server belongs. This value is returned when the SourceType is OSS, and AuthType is private_same_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * VIxuvJSA2S03f***kp208dy5w7
   */
  secretKey?: string;
  /**
   * @remarks
   * The version of the signature algorithm. This value is returned when the origin type is S3 and AuthType is private. Valid values:
   * 
   * *   **v2**
   * *   **v4**
   * 
   * If this parameter is left empty, the default value v4 is used.
   * 
   * @example
   * v4
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

