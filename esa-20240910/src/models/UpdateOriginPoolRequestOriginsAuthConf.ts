// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginPoolRequestOriginsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey required for private authentication.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The type of authentication.
   * 
   * - public: Public read/write, used when the origin is OSS or S3 and is set to public read/write;
   * - private_same_account: Private same account, used when the origin is OSS and the authentication type is private within the same account;
   * - private_cross_account: Private cross-account, used when the origin is OSS and the authentication type is private across accounts;
   * - private: Used when the origin is S3 and the authentication type is private.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin required when the origin is AWS S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey required for private authentication.
   * 
   * @example
   * yourAccessKeySecret
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature version required when the origin is AWS S3.
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

