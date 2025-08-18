// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginPoolResponseBodyOriginsAuthConf extends $dara.Model {
  /**
   * @remarks
   * The AccessKey required when AuthType is set to private_cross_account or private.
   * 
   * @example
   * yourAccessKeyID
   */
  accessKey?: string;
  /**
   * @remarks
   * The type of authentication:
   * 
   * - public: Public read/write, used when the origin is OSS or S3 and is publicly readable/writable;
   * - private_same_account: Private same account, used when the origin is OSS and the authentication type is private within the same account;
   * - private_cross_account: Private cross account, used when the origin is OSS and the authentication type is private across accounts;
   * - private: Used when the origin is S3 and the authentication type is private.
   * 
   * @example
   * public
   */
  authType?: string;
  /**
   * @remarks
   * The source Region to be passed when the origin is AWS S3.
   * 
   * @example
   * us-east-1
   */
  region?: string;
  /**
   * @remarks
   * The SecretKey required when AuthType is set to private_cross_account or private.
   * 
   * @example
   * yourAccessKeySecret
   */
  secretKey?: string;
  /**
   * @remarks
   * The signature version required when the origin is an AWS S3.
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
   * The address of the origin, e.g., www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * Authentication information. When the origin is an OSS or S3, and authentication is required, you need to provide the relevant configuration information.
   */
  authConf?: GetOriginPoolResponseBodyOriginsAuthConf;
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
   * The request header to be included when fetching from the origin, only supports Host.
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
   * 99750209487****
   */
  id?: number;
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
   * The type of the origin:
   * 
   * - ip_domain: IP or domain type origin;
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
      id: 'Id',
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
   * Record ID.
   * 
   * @example
   * 104285288635****
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

export class GetOriginPoolResponseBodyReferencesIPARecords extends $dara.Model {
  /**
   * @remarks
   * 记录ID。
   * 
   * @example
   * 104285288635****
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

export class GetOriginPoolResponseBodyReferencesLoadBalancers extends $dara.Model {
  /**
   * @remarks
   * ID of the load balancer.
   * 
   * @example
   * 99874066052****
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

export class GetOriginPoolResponseBodyReferences extends $dara.Model {
  /**
   * @remarks
   * List of layer 7 records using this origin pool as the origin.
   */
  dnsRecords?: GetOriginPoolResponseBodyReferencesDnsRecords[];
  /**
   * @remarks
   * List of layer 4 records using this origin pool as the origin.
   */
  IPARecords?: GetOriginPoolResponseBodyReferencesIPARecords[];
  /**
   * @remarks
   * List of load balancers using this origin pool.
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
   * Origin pool ID.
   * 
   * @example
   * 103852052519****
   */
  id?: number;
  /**
   * @remarks
   * Name of the origin pool. The name is unique under a single site.
   * 
   * @example
   * pool1
   */
  name?: string;
  /**
   * @remarks
   * Information about the origins added to the origin pool.
   */
  origins?: GetOriginPoolResponseBodyOrigins[];
  /**
   * @remarks
   * The domain name assigned to the origin pool, which can be used as the origin address for records under the site.
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
   * Reference information for the origin pool. The origin pool is considered referenced when it is configured in a load balancer or set as the origin for a record.
   */
  references?: GetOriginPoolResponseBodyReferences;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * ID of the site to which the origin pool belongs.
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

