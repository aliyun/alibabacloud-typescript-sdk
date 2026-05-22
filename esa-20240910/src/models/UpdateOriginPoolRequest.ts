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

export class UpdateOriginPoolRequestOrigins extends $dara.Model {
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
   * Authentication information. When the origin is OSS or S3 and requires authentication, you need to pass the related configuration information for authentication.
   */
  authConf?: UpdateOriginPoolRequestOriginsAuthConf;
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
   * The request header to be included when fetching from the origin, supporting only Host.
   * 
   * @example
   * {
   *         "Host": [
   *           "example.com"
   *         ]
   *       }
   */
  header?: any;
  ipVersionPolicy?: string;
  /**
   * @remarks
   * The name of the origin, which must be unique under one origin pool.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin:
   * 
   * - ip_domain: IP or domain type origin;
   * - OSS: OSS address origin;
   * - S3: AWS S3 origin.
   * 
   * @example
   * OSS
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
      ipVersionPolicy: 'IpVersionPolicy',
      name: 'Name',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authConf: UpdateOriginPoolRequestOriginsAuthConf,
      enabled: 'boolean',
      header: 'any',
      ipVersionPolicy: 'string',
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

export class UpdateOriginPoolRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the origin pool is enabled:
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
   * The ID of the origin pool, which can be obtained by calling the [ListOriginPools](https://help.aliyun.com/document_detail/2863947.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * Information about the origins added to the origin pool. Multiple origins are passed as an array.
   */
  origins?: UpdateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 216558609793952
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      origins: 'Origins',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      origins: { 'type': 'array', 'itemType': UpdateOriginPoolRequestOrigins },
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

