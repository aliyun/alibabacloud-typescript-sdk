// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf extends $dara.Model {
  accessKey?: string;
  authType?: string;
  region?: string;
  secretKey?: string;
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
  address?: string;
  authConf?: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf;
  enabled?: boolean;
  header?: any;
  id?: number;
  ipVersionPolicy?: string;
  name?: string;
  type?: string;
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
  id?: number;
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
  id?: number;
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
  id?: number;
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
  dnsRecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesDnsRecords[];
  IPARecords?: ListOriginPoolsResponseBodyOriginPoolsReferencesIPARecords[];
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
  enabled?: boolean;
  id?: number;
  name?: string;
  origins?: ListOriginPoolsResponseBodyOriginPoolsOrigins[];
  recordName?: string;
  referenceLBCount?: number;
  references?: ListOriginPoolsResponseBodyOriginPoolsReferences;
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
  originPools?: ListOriginPoolsResponseBodyOriginPools[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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

