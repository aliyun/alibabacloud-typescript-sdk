// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf extends $dara.Model {
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
   * - public: public read/write. Used when the origin server is an OSS or S3 origin server with public read/write permissions.
   * - private_same_account: private within the same account. Used when the origin server is an OSS origin server and the authentication type is private authentication within the same account.
   * - private_cross_account: private across accounts. Used when the origin server is an OSS origin server and the authentication type is private authentication across accounts.
   * - private: private. Used when the origin server is an S3 origin server and the authentication type is private.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The region of the origin server required when the origin server is an AWS S3 origin server.
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
   * The signature version required when the origin server is an AWS S3 origin server.
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
   * The addresses of the origin server, such as www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * The authentication information. If the origin server is an OSS or S3 origin server that requires authentication, you must provide the authentication configuration information.
   */
  authConf?: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf;
  /**
   * @remarks
   * Indicates whether the origin server is enabled. Valid values:
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header included in back-to-origin requests. Only the Host header is supported.
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
   * The origin server ID.
   * 
   * @example
   * 997502094872132
   */
  id?: number;
  /**
   * @remarks
   * The IP protocol version used for back-to-origin requests. Valid values:
   * - round_robin: the default policy. Randomly polls IPv4 or IPv6 origin servers.
   * - ipv4_first: prioritizes IPv4 origin servers.
   * - ipv6_first: prioritizes IPv6 origin servers.
   * - follow: prioritizes the IP version used by the client.
   * 
   * @example
   * round_robin
   */
  ipVersionPolicy?: string;
  /**
   * @remarks
   * The origin server name.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The origin server type. Valid values:
   * - ip_domain: an origin server that uses an IP address or a domain name.
   * - OSS: an OSS origin server.
   * - S3: an AWS S3 origin server.
   * 
   * @example
   * S3
   */
  type?: string;
  /**
   * @remarks
   * The weight. The value must be an integer from 0 to 100.
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
   * The record ID.
   * 
   * @example
   * 1042852886352704
   */
  id?: number;
  /**
   * @remarks
   * The record name.
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
   * The record ID.
   * 
   * @example
   * 1042852886352704
   */
  id?: number;
  /**
   * @remarks
   * The record name.
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
   * The load balancing instance ID.
   * 
   * @example
   * 998740660522624
   */
  id?: number;
  /**
   * @remarks
   * The name of the load balancing instance.
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
   * The list of Layer 7 records that use this origin address pool as the origin server.
   */
  dnsRecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords[];
  /**
   * @remarks
   * The list of Layer 4 records that use this origin address pool as the origin server.
   */
  IPARecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords[];
  /**
   * @remarks
   * The list of load balancing instances that use this origin IPAM pool.
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
   * Indicates whether the origin address pool is enabled. Valid values:
   * - true: enabled.
   * - false: disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The origin address pool ID.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * The name of the origin address pool. The name must be unique within a site.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * The origin server information added to the origin address pool.
   */
  origins?: ListOriginPoolsResponseBodyOriginPoolsOrigins[];
  /**
   * @remarks
   * The domain name allocated to the origin IPAM pool. It can be used as the addresses of the origin server for records under the site.
   * 
   * @example
   * pool1.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * The number of load balancing instances that reference this origin IPAM pool.
   * 
   * @example
   * 5
   */
  referenceLBCount?: number;
  /**
   * @remarks
   * The reference information of the origin IPAM pool. An origin IPAM pool is considered referenced when it is configured for load balancing or configured as an origin server in a record.
   */
  references?: ListOriginPoolsResponseBodyOriginPoolsReferences;
  /**
   * @remarks
   * The ID of the site to which the origin address pool belongs.
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
   * The list of origin address pools.
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
   * The number of entries per page.
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
   * The total number of entries.
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

