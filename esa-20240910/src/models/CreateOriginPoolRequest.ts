// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginPoolRequestOriginsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key required for private authentication.
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
   * The secret key required for private authentication.
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

export class CreateOriginPoolRequestOrigins extends $dara.Model {
  /**
   * @remarks
   * The address of the origin, e.g., www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * Authentication information, required when the origin is OSS or S3 and needs authentication, including related configuration details.
   */
  authConf?: CreateOriginPoolRequestOriginsAuthConf;
  /**
   * @remarks
   * Whether the origin is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header to be included when fetching from the origin, only Host is supported.
   * 
   * @example
   * {
   *         "Host": [
   *           "example.com"
   *         ]
   *       }
   */
  header?: any;
  /**
   * @remarks
   * The name of the origin, which must be unique within an origin address.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin:
   * 
   * - ip_domain: IP or domain name type origin;
   * - OSS: OSS address origin;
   * - S3: AWS S3 origin.
   * 
   * @example
   * ip_domain
   */
  type?: string;
  /**
   * @remarks
   * The weight, an integer between 0 and 100.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authConf: 'AuthConf',
      enabled: 'Enabled',
      header: 'Header',
      name: 'Name',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authConf: CreateOriginPoolRequestOriginsAuthConf,
      enabled: 'boolean',
      header: 'any',
      name: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.authConf && typeof (this.authConf as any).validate === 'function') {
      (this.authConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOriginPoolRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the origin address pool is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the origin address pool, which must be unique within a site.
   * 
   * This parameter is required.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Information about the origins added to the origin address pool, with multiple origins passed as an array.
   */
  origins?: CreateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 21655860979****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      name: 'Name',
      origins: 'Origins',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      name: 'string',
      origins: { 'type': 'array', 'itemType': CreateOriginPoolRequestOrigins },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.origins)) {
      $dara.Model.validateArray(this.origins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

