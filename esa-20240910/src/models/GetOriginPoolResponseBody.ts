// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginPoolResponseBodyOriginsAuthConf extends $dara.Model {
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

export class GetOriginPoolResponseBodyOrigins extends $dara.Model {
  address?: string;
  authConf?: GetOriginPoolResponseBodyOriginsAuthConf;
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

export class GetOriginPoolResponseBodyReferencesIPARecords extends $dara.Model {
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

export class GetOriginPoolResponseBodyReferencesLoadBalancers extends $dara.Model {
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

export class GetOriginPoolResponseBodyReferences extends $dara.Model {
  dnsRecords?: GetOriginPoolResponseBodyReferencesDnsRecords[];
  IPARecords?: GetOriginPoolResponseBodyReferencesIPARecords[];
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
  enabled?: boolean;
  id?: number;
  name?: string;
  origins?: GetOriginPoolResponseBodyOrigins[];
  recordName?: string;
  referenceLBCount?: number;
  references?: GetOriginPoolResponseBodyReferences;
  requestId?: string;
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

