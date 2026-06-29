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
   * The authentication type. Valid values:
   * 
   * - public: public read/write. Use this value when the origin server is OSS or S3 with public read/write access.
   * - private_same_account: private same-account. Use this value when the origin server is OSS with same-account private authentication.
   * - private_cross_account: private cross-account. Use this value when the origin server is OSS with cross-account private authentication.
   * - private: Use this value when the origin server is S3 with private authentication.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin server required when the origin server is AWS S3.
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
   * The signature version required when the origin server is AWS S3.
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
   * The addresses of the origin server, such as www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * The authentication information. This parameter is required when the origin server is OSS, S3, or another origin server that requires authentication.
   */
  authConf?: UpdateOriginPoolRequestOriginsAuthConf;
  /**
   * @remarks
   * Specifies whether the origin server is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header included in back-to-origin requests. Only Host is supported.
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
   * The IP protocol version used for back-to-origin requests. Valid values:
   * - round_robin: default policy. Randomly polls IPv4 or IPv6 origin servers.
   * - ipv4_first: preferentially uses IPv4 origin servers.
   * - ipv6_first: preferentially uses IPv6 origin servers.
   * - follow: preferentially follows the IP version used by the client.
   * 
   * @example
   * round_robin
   */
  ipVersionPolicy?: string;
  /**
   * @remarks
   * The origin server name. The name must be unique within an origin address pool.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The origin server type. Valid values:
   * 
   * - ip_domain: an IP address or domain name-based origin server.
   * - OSS: an OSS address-based origin server.
   * - S3: an AWS S3 origin server.
   * 
   * @example
   * OSS
   */
  type?: string;
  /**
   * @remarks
   * The weight. The value is an integer from 0 to 100.
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
   * Specifies whether the origin address pool is enabled. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The origin address pool ID. You can call the [ListOriginPools](~~ListOriginPools~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * The origin server information added to the origin address pool. Use an array to pass multiple origin servers.
   */
  origins?: UpdateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to obtain the ID.
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

