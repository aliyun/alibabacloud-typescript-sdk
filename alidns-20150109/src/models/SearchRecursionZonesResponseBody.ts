// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScopeScopes extends $dara.Model {
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

export class SearchRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScope extends $dara.Model {
  /**
   * @example
   * account
   */
  effectiveType?: string;
  /**
   * @example
   * [20003]
   */
  scopes?: SearchRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScopeScopes;
  static names(): { [key: string]: string } {
    return {
      effectiveType: 'EffectiveType',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveType: 'string',
      scopes: SearchRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScopeScopes,
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

export class SearchRecursionZonesResponseBodyZonesZoneEffectiveScopes extends $dara.Model {
  effectiveScope?: SearchRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScope[];
  static names(): { [key: string]: string } {
    return {
      effectiveScope: 'EffectiveScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveScope: { 'type': 'array', 'itemType': SearchRecursionZonesResponseBodyZonesZoneEffectiveScopesEffectiveScope },
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

export class SearchRecursionZonesResponseBodyZonesZone extends $dara.Model {
  /**
   * @example
   * 2022-10-17T06:13Z
   */
  createTime?: string;
  /**
   * @example
   * 1749694625000
   */
  createTimestamp?: number;
  /**
   * @example
   * ***
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
  effectiveScopes?: SearchRecursionZonesResponseBodyZonesZoneEffectiveScopes;
  /**
   * @example
   * record
   */
  proxyPattern?: string;
  /**
   * @example
   * 20
   */
  recordCount?: number;
  /**
   * @example
   * 107
   */
  remark?: string;
  /**
   * @example
   * 2024-08-13T01:44Z
   */
  updateTime?: string;
  /**
   * @example
   * 1639621006000
   */
  updateTimestamp?: number;
  /**
   * @example
   * 169439170000011
   */
  zoneId?: string;
  /**
   * @example
   * ixiqiu.cn
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
      effectiveScopes: SearchRecursionZonesResponseBodyZonesZoneEffectiveScopes,
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

export class SearchRecursionZonesResponseBodyZones extends $dara.Model {
  zone?: SearchRecursionZonesResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': SearchRecursionZonesResponseBodyZonesZone },
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

export class SearchRecursionZonesResponseBody extends $dara.Model {
  /**
   * @example
   * 20
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @example
   * 11
   */
  totalItems?: number;
  /**
   * @example
   * 123
   */
  totalPages?: number;
  zones?: SearchRecursionZonesResponseBodyZones;
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
      zones: SearchRecursionZonesResponseBodyZones,
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

