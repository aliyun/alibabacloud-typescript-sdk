// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScopeScopes extends $dara.Model {
  scope?: string[];
  static names(): { [key: string]: string } {
    return {
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scope: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScope extends $dara.Model {
  /**
   * @example
   * account
   */
  effectiveType?: string;
  scopes?: ListRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScopeScopes;
  static names(): { [key: string]: string } {
    return {
      effectiveType: 'EffectiveType',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveType: 'string',
      scopes: ListRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScopeScopes,
    };
  }

  validate() {
    if(this.scopes && typeof (this.scopes as any).validate === 'function') {
      (this.scopes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecursionZonesResponseBodyZonesZoneEffectiveScopes extends $dara.Model {
  effectiveScope?: ListRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScope[];
  static names(): { [key: string]: string } {
    return {
      effectiveScope: 'EffectiveScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveScope: { 'type': 'array', 'itemType': ListRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScope },
    };
  }

  validate() {
    if(Array.isArray(this.effectiveScope)) {
      $dara.Model.validateArray(this.effectiveScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecursionZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @example
   * 2021-03-08T05:45Z
   */
  createTime?: string;
  /**
   * @example
   * 1729674680000
   */
  createTimestamp?: number;
  /**
   * @example
   * 218497924149333932
   */
  creator?: string;
  /**
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @example
   * USER
   */
  creatorType?: string;
  effectiveScopes?: ListRecursionZonesResponseBodyZonesZoneEffectiveScopes;
  /**
   * @example
   * record
   */
  proxyPattern?: string;
  /**
   * @example
   * 8
   */
  recordCount?: number;
  /**
   * @example
   * 107
   */
  remark?: string;
  /**
   * @example
   * 2024-11-12T04:30Z
   */
  updateTime?: string;
  /**
   * @example
   * 1707189878000
   */
  updateTimestamp?: number;
  /**
   * @example
   * 173671468000011
   */
  zoneId?: string;
  /**
   * @example
   * dfsdfsd
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      effectiveScopes: 'EffectiveScopes',
      proxyPattern: 'ProxyPattern',
      recordCount: 'RecordCount',
      remark: 'Remark',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      effectiveScopes: ListRecursionZonesResponseBodyZonesZoneEffectiveScopes,
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(this.effectiveScopes && typeof (this.effectiveScopes as any).validate === 'function') {
      (this.effectiveScopes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecursionZonesResponseBodyZones extends $dara.Model {
  zone?: ListRecursionZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': ListRecursionZonesResponseBodyZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecursionZonesResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  zones?: ListRecursionZonesResponseBodyZones;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
      zones: ListRecursionZonesResponseBodyZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

