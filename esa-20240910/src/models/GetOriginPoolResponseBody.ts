// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginPoolResponseBodyOriginsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID. This parameter is required if `AuthType` is set to `private_cross_account` or `private`.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * - public: Public access. For OSS or S3 origins with public read access.
   * 
   * - private_same_account: Private, same account. For private OSS origins in the same account.
   * 
   * - private_cross_account: Private, cross-account. For private OSS origins in a different account.
   * 
   * - private: Private. For private S3 origins.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The AWS Region of the origin. Required if the origin is an AWS S3 bucket.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The AccessKey secret. This parameter is required if `AuthType` is set to `private_cross_account` or `private`.
   * 
   * @example
   * yourAccessKeySecret
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature version. Required if the origin is an AWS S3 bucket.
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

export class GetOriginPoolResponseBodyOrigins extends $dara.Model {
  /**
   * @remarks
   * The origin address. For example, www\\.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * The authentication configuration. This parameter is required if the origin is an OSS or S3 bucket that requires authentication.
   */
  authConf?: GetOriginPoolResponseBodyOriginsAuthConf;
  /**
   * @remarks
   * Specifies if the origin is enabled.
   * 
   * - true: The origin is enabled.
   * 
   * - false: The origin is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header to include in origin requests. Only the Host header is supported.
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
   * The origin ID.
   * 
   * @example
   * 99750209487****
   */
  id?: number;
  /**
   * @remarks
   * The IP version policy for origin requests.
   * 
   * - round_robin: Default policy. Routes requests to IPv4 and IPv6 origins on a round-robin basis.
   * 
   * - ipv4_first: Prioritizes IPv4. Routes requests to IPv4 origins first.
   * 
   * - ipv6_first: Prioritizes IPv6. Routes requests to IPv6 origins first.
   * 
   * - follow: Matches the client\\"s IP version. The origin request uses the same IP version as the incoming request.
   * 
   * @example
   * round_robin
   */
  ipVersionPolicy?: string;
  /**
   * @remarks
   * The origin name.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin.
   * 
   * - ip_domain: An IP address or a domain name.
   * 
   * - OSS: An OSS bucket.
   * 
   * - S3: An AWS S3 bucket.
   * 
   * @example
   * ip_domain
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin. Must be an integer from 0 to 100.
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
      id: 'Id',
      ipVersionPolicy: 'IpVersionPolicy',
      name: 'Name',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authConf: GetOriginPoolResponseBodyOriginsAuthConf,
      enabled: 'boolean',
      header: 'any',
      id: 'number',
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

export class GetOriginPoolResponseBodyReferencesDnsRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 104285288635****
   */
  id?: number;
  /**
   * @remarks
   * The name of the record.
   * 
   * @example
   * www.example.com
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginPoolResponseBodyReferencesIPARecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 104285288635****
   */
  id?: number;
  /**
   * @remarks
   * The name of the record.
   * 
   * @example
   * ipa.example.com
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginPoolResponseBodyReferencesLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer.
   * 
   * @example
   * 99874066052****
   */
  id?: number;
  /**
   * @remarks
   * The name of the load balancer.
   * 
   * @example
   * lb1.example.com
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginPoolResponseBodyReferences extends $dara.Model {
  /**
   * @remarks
   * The Layer 7 records that use this origin pool as their origin.
   */
  dnsRecords?: GetOriginPoolResponseBodyReferencesDnsRecords[];
  /**
   * @remarks
   * The Layer 4 records that use this origin pool as their origin.
   */
  IPARecords?: GetOriginPoolResponseBodyReferencesIPARecords[];
  /**
   * @remarks
   * The load balancers that use this origin pool.
   */
  loadBalancers?: GetOriginPoolResponseBodyReferencesLoadBalancers[];
  static names(): { [key: string]: string } {
    return {
      dnsRecords: 'DnsRecords',
      IPARecords: 'IPARecords',
      loadBalancers: 'LoadBalancers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecords: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyReferencesDnsRecords },
      IPARecords: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyReferencesIPARecords },
      loadBalancers: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyReferencesLoadBalancers },
    };
  }

  validate() {
    if(Array.isArray(this.dnsRecords)) {
      $dara.Model.validateArray(this.dnsRecords);
    }
    if(Array.isArray(this.IPARecords)) {
      $dara.Model.validateArray(this.IPARecords);
    }
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies if the origin pool is enabled.
   * 
   * - true: The origin pool is enabled.
   * 
   * - false: The origin pool is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The origin pool ID.
   * 
   * @example
   * 103852052519****
   */
  id?: number;
  /**
   * @remarks
   * The name of the origin pool. The name must be unique within a site.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * The origins in the origin pool.
   */
  origins?: GetOriginPoolResponseBodyOrigins[];
  /**
   * @remarks
   * The domain name assigned to the origin pool. It serves as the origin address for records within the site.
   * 
   * @example
   * pool1.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The number of load balancers that reference this origin pool.
   * 
   * @example
   * 5
   */
  referenceLBCount?: number;
  /**
   * @remarks
   * Resources that reference the origin pool. An origin pool is referenced if a load balancer or record uses it as an origin.
   */
  references?: GetOriginPoolResponseBodyReferences;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the site that contains the origin pool.
   * 
   * @example
   * 21655860979****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      origins: 'Origins',
      recordName: 'RecordName',
      referenceLBCount: 'ReferenceLBCount',
      references: 'References',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      origins: { 'type': 'array', 'itemType': GetOriginPoolResponseBodyOrigins },
      recordName: 'string',
      referenceLBCount: 'number',
      references: GetOriginPoolResponseBodyReferences,
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.origins)) {
      $dara.Model.validateArray(this.origins);
    }
    if(this.references && typeof (this.references as any).validate === 'function') {
      (this.references as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

