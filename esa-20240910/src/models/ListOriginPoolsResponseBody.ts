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
   * Authentication type.
   * 
   * - public: Public read/write, used when the origin is OSS or S3 and it is set to public read/write;
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
   * The Region of the origin required when the origin is AWS S3.
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

export class ListOriginPoolsResponseBodyOriginPoolsOrigins extends $dara.Model {
  /**
   * @remarks
   * Origin address, e.g., www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * Authentication information. When the origin is OSS or S3 and requires authentication, you need to provide related configuration information for authentication.
   */
  authConf?: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf;
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
   * The request header to be carried during back-to-origin, only supports Host.
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
   * Origin ID.
   * 
   * @example
   * 997502094872132
   */
  id?: number;
  ipVersionPolicy?: string;
  /**
   * @remarks
   * Origin name.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * Origin type:
   * - ip_domain: IP or domain type origin; 
   * - OSS: OSS address origin; 
   * - S3: AWS S3 origin.
   * 
   * @example
   * S3
   */
  type?: string;
  /**
   * @remarks
   * Weight, an integer between 0 and 100.
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
   * Record ID.
   * 
   * @example
   * 1042852886352704
   */
  id?: number;
  /**
   * @remarks
   * Record name.
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
   * Record ID.
   * 
   * @example
   * 1042852886352704
   */
  id?: number;
  /**
   * @remarks
   * Record name.
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
   * ID of the load balancer.
   * 
   * @example
   * 998740660522624
   */
  id?: number;
  /**
   * @remarks
   * Name of the load balancer.
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
   * 使用此源地址池为源站的七层记录列表。
   */
  dnsRecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords[];
  /**
   * @remarks
   * List of layer 4 records that use this origin pool as the origin.
   */
  IPARecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords[];
  /**
   * @remarks
   * List of load balancers using this origin pool.
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
   * Whether the origin pool is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * ID of the origin pool.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * Name of the origin pool, unique within a site.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Information about the origins added to the origin pool.
   */
  origins?: ListOriginPoolsResponseBodyOriginPoolsOrigins[];
  /**
   * @remarks
   * Domain name assigned to the origin pool, which can be used as the origin address for records under the site.
   * 
   * @example
   * pool1.example.com
   */
  recordName?: string;
  /**
   * @remarks
   * Number of load balancers that reference this origin pool.
   * 
   * @example
   * 5
   */
  referenceLBCount?: number;
  /**
   * @remarks
   * Reference information for the origin pool. The origin pool is considered referenced when it is configured in a load balancer or set as the origin for a record.
   */
  references?: ListOriginPoolsResponseBodyOriginPoolsReferences;
  /**
   * @remarks
   * ID of the site to which the origin pool belongs.
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
   * List of origin pools.
   */
  originPools?: ListOriginPoolsResponseBodyOriginPools[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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

