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
   * The authentication type. Valid values:
   * 
   * - `public`: Public read/write. Use this for public OSS or AWS S3 buckets.
   * 
   * - `private_same_account`: Private authentication for an OSS bucket in the same Alibaba Cloud account.
   * 
   * - `private_cross_account`: Private authentication for an OSS bucket in a different Alibaba Cloud account.
   * 
   * - `private`: Private authentication for an AWS S3 bucket.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. Required for AWS S3 origins.
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
   * The signature version. Required for AWS S3 origins.
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
   * The address of the origin. For example, www\\.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * The authentication configuration for the origin. Required if the origin is an OSS or AWS S3 bucket that requires authentication.
   */
  authConf?: CreateOriginPoolRequestOriginsAuthConf;
  /**
   * @remarks
   * Specifies whether the origin is enabled.
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header to include in back-to-origin requests. Only the `Host` header is supported.
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
   * The IP protocol version for back-to-origin requests. Valid values:
   * 
   * - `round_robin`: Default. Randomly selects an IPv4 or IPv6 origin.
   * 
   * - `ipv4_first`: Prioritizes IPv4 origins.
   * 
   * - `ipv6_first`: Prioritizes IPv6 origins.
   * 
   * - `follow`: Uses the same IP protocol version as the client\\"s request.
   * 
   * @example
   * round_robin
   */
  ipVersionPolicy?: string;
  /**
   * @remarks
   * The name of the origin. The name must be unique within the origin pool.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin. Valid values:
   * 
   * - `ip_domain`: An IP address or a domain name.
   * 
   * - `OSS`: An Alibaba Cloud OSS bucket.
   * 
   * - `S3`: An AWS S3 bucket.
   * 
   * @example
   * ip_domain
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin. The value must be an integer from 0 to 100.
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
      authConf: CreateOriginPoolRequestOriginsAuthConf,
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

export class CreateOriginPoolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the origin pool is enabled.
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the origin pool. The name must be unique within a site.
   * 
   * This parameter is required.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * The list of origins to add to the origin pool. Use an array to specify multiple origins.
   */
  origins?: CreateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * The site ID. To obtain this ID, call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
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

