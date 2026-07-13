// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecursionZoneResponseBodyEffectiveScopesEffectiveScopeScopes extends $dara.Model {
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

export class DescribeRecursionZoneResponseBodyEffectiveScopesEffectiveScope extends $dara.Model {
  effectiveType?: string;
  scopes?: DescribeRecursionZoneResponseBodyEffectiveScopesEffectiveScopeScopes;
  static names(): { [key: string]: string } {
    return {
      effectiveType: 'EffectiveType',
      scopes: 'Scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveType: 'string',
      scopes: DescribeRecursionZoneResponseBodyEffectiveScopesEffectiveScopeScopes,
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

export class DescribeRecursionZoneResponseBodyEffectiveScopes extends $dara.Model {
  effectiveScope?: DescribeRecursionZoneResponseBodyEffectiveScopesEffectiveScope[];
  static names(): { [key: string]: string } {
    return {
      effectiveScope: 'EffectiveScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveScope: { 'type': 'array', 'itemType': DescribeRecursionZoneResponseBodyEffectiveScopesEffectiveScope },
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

export class DescribeRecursionZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the zone was created.
   * 
   * @example
   * 2018-06-06T11:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the zone was created.
   * 
   * @example
   * 1533773400000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * SOAR
   */
  creator?: string;
  /**
   * @remarks
   * The subtype of the creator.
   * 
   * @example
   * SUB
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The type of the creator.
   * 
   * @example
   * USER
   */
  creatorType?: string;
  effectiveScopes?: DescribeRecursionZoneResponseBodyEffectiveScopes;
  /**
   * @remarks
   * Indicates whether recursive proxy for subdomains is enabled. Valid values:
   * 
   * zone: Disabled. If a non-existent subdomain is requested, an NXDOMAIN response is returned to indicate that the subdomain does not exist.
   * record: Enabled. If a non-existent subdomain is requested, the system queries the forwarding and recursion modules in sequence. The final query result is used to respond to the DNS request.
   * 
   * @example
   * record
   */
  proxyPattern?: string;
  /**
   * @remarks
   * The number of DNS records in the zone.
   * 
   * @example
   * 8
   */
  recordCount?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the zone was last updated.
   * 
   * @example
   * 2018-01-03T08:57Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the zone was last updated.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1527690629357
   */
  userId?: string;
  /**
   * @remarks
   * The zone ID. This is the unique identifier of the zone.
   * 
   * @example
   * 169438909000011
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * cheng.suow.cc
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
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      userId: 'UserId',
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
      effectiveScopes: DescribeRecursionZoneResponseBodyEffectiveScopes,
      proxyPattern: 'string',
      recordCount: 'number',
      remark: 'string',
      requestId: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      userId: 'string',
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

