// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginPoolRequestOriginsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The access key for private authentication. Required for private origins.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - public: For public OSS or S3 origins.
   * 
   * - private_same_account: For private OSS origins in the same account.
   * 
   * - private_cross_account: For private OSS origins that use cross-account authentication.
   * 
   * - private: For private S3 origins.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin. This parameter is required if the origin type is S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The secret key for private authentication. Required for private origins.
   * 
   * @example
   * yourAccessKeySecret
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature version. This parameter is required if the origin type is S3.
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
   * The origin\\"s domain name or IP address.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * The authentication configuration. Required for private OSS or S3 origins.
   */
  authConf?: UpdateOriginPoolRequestOriginsAuthConf;
  /**
   * @remarks
   * Specifies whether to enable the origin:
   * 
   * - true: Enables the origin.
   * 
   * - false: Disables the origin.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header to add to back-to-origin requests. Only the Host header is supported.
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
   * The IP version policy for back-to-origin requests. Valid values:
   * 
   * - round_robin: (Default) Randomly selects an IPv4 or IPv6 origin.
   * 
   * - ipv4_first: Prioritizes IPv4 origins.
   * 
   * - ipv6_first: Prioritizes IPv6 origins.
   * 
   * - follow: Uses the same IP version as the client request.
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
   * The origin type. Valid values:
   * 
   * - ip_domain: An IP address or a domain name.
   * 
   * - OSS: An OSS origin.
   * 
   * - S3: An AWS S3 origin.
   * 
   * @example
   * OSS
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
   * Specifies whether to enable the origin pool:
   * 
   * - true: Enables the origin pool.
   * 
   * - false: Disables the origin pool.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The origin pool ID. Get this ID by calling the [ListOriginPools](~~ListOriginPools~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * An array of origin configurations.
   */
  origins?: UpdateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * The site ID. Get this ID by calling the [ListSites](~~ListSites~~) operation.
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

