// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordRequestAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key of the account to which the origin server belongs. This parameter is required when the SourceType is OSS, and AuthType is private_same_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * VIxuvJSA2S03f******kp208dy5w7
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type of the origin server. Different origins support different authentication types. The type of origin refers to the SourceType parameter in this operation. If the type of origin is OSS or S3, you must specify the authentication type of the origin. Valid values:
   * 
   * *   **public**: public read. Select this value when the origin type is OSS or S3 and the origin access is public read.
   * *   **private**: private read. Select this value when the origin type is S3 and the origin access is private read.
   * *   **private_same_account**: private read under the same account. Select this value when the origin type is OSS, the origins belong to the same Alibaba Cloud account, and the origins have private read access.
   * 
   * @example
   * private
   */
  authType?: string;
  /**
   * @remarks
   * The version of the signature algorithm. This parameter is required when the origin type is S3 and AuthType is private. The following two types are supported:
   * 
   * *   **v2**
   * *   **v4**
   * 
   * If you leave this parameter empty, the default value v4 is used.
   * 
   * @example
   * v2
   */
  region?: string;
  /**
   * @remarks
   * The secret access key of the account to which the origin server belongs. This parameter is required when the SourceType is OSS, and AuthType is private_same_account, or when the SourceType is S3 and AuthType is private.
   * 
   * @example
   * u0Nkg5gBK*******QF5wvKMM504JUHt
   */
  secretKey?: string;
  /**
   * @remarks
   * The region of the origin. If the origin type is S3, you must specify this value. You can get the region information from the official website of S3.
   * 
   * @example
   * us-east-1
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

