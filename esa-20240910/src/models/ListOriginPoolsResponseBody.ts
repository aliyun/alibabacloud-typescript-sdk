// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The Access Key ID required for private authentication.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - `public`: Public read/write. Use for OSS or AWS S3 origins that have public access permissions.
   * 
   * - `private_same_account`: Private, same account. Use for OSS origins that use private authentication within the same account.
   * 
   * - `private_cross_account`: Private, cross-account. Use for OSS origins that use private authentication from a different account.
   * 
   * - `private`: Private. Use for AWS S3 origins that require private authentication.
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
   * The Secret Access Key required for private authentication.
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

export class ListOriginPoolsResponseBodyOriginPoolsOrigins extends $dara.Model {
  /**
   * @remarks
   * The address of the origin, such as `www.example.com`.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * The authentication configuration. This parameter is required if the origin is an OSS or AWS S3 bucket that requires authentication.
   */
  authConf?: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf;
  /**
   * @remarks
   * Indicates whether the origin is enabled.
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header to include in origin fetches. Only the `Host` header is supported.
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
   * The ID of the origin.
   * 
   * @example
   * 997502094872132
   */
  id?: number;
  /**
   * @remarks
   * The IP protocol version used for origin fetch requests. Valid values:
   * 
   * - `round_robin`: Randomly selects an IPv4 or IPv6 origin.
   * 
   * - `ipv4_first`: Prioritizes IPv4 origins.
   * 
   * - `ipv6_first`: Prioritizes IPv6 origins.
   * 
   * - `follow`: Follows the IP version used by the client.
   * 
   * @example
   * round_robin
   */
  ipVersionPolicy?: string;
  /**
   * @remarks
   * The name of the origin.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin. Valid values:
   * 
   * - `ip_domain`: An origin with an IP address or domain name.
   * 
   * - `OSS`: An Alibaba Cloud Object Storage Service (OSS) origin.
   * 
   * - `S3`: An AWS S3 origin.
   * 
   * @example
   * S3
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin, an integer from 0 to 100.
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
      authConf: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf,
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

export class ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 1042852886352704
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

export class ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 1042852886352704
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

export class ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer.
   * 
   * @example
   * 998740660522624
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

export class ListOriginPoolsResponseBodyOriginPoolsReferences extends $dara.Model {
  /**
   * @remarks
   * A list of Layer 7 records that use this origin pool as an origin.
   */
  dnsRecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords[];
  /**
   * @remarks
   * A list of Layer 4 records that use this origin pool as an origin.
   */
  IPARecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords[];
  /**
   * @remarks
   * A list of load balancers that use this origin pool.
   */
  loadBalancers?: ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers[];
  static names(): { [key: string]: string } {
    return {
      dnsRecords: 'DnsRecords',
      IPARecords: 'IPARecords',
      loadBalancers: 'LoadBalancers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsRecords: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords },
      IPARecords: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords },
      loadBalancers: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsReferencesLoadBalancers },
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

export class ListOriginPoolsResponseBodyOriginPools extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the origin pool is enabled.
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the origin pool.
   * 
   * @example
   * 1038520525196928
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
  origins?: ListOriginPoolsResponseBodyOriginPoolsOrigins[];
  /**
   * @remarks
   * The domain name assigned to the origin pool. This can be used as the origin address for records within the site.
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
   * The resources that reference this origin pool. An origin pool is considered referenced when it is configured as an origin for a load balancer or a record.
   */
  references?: ListOriginPoolsResponseBodyOriginPoolsReferences;
  /**
   * @remarks
   * The ID of the site to which the origin pool belongs.
   * 
   * @example
   * 216558609793952
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
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      origins: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPoolsOrigins },
      recordName: 'string',
      referenceLBCount: 'number',
      references: ListOriginPoolsResponseBodyOriginPoolsReferences,
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

export class ListOriginPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of origin pools.
   */
  originPools?: ListOriginPoolsResponseBodyOriginPools[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of origin pools found.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      originPools: 'OriginPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originPools: { 'type': 'array', 'itemType': ListOriginPoolsResponseBodyOriginPools },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.originPools)) {
      $dara.Model.validateArray(this.originPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

