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
  /**
   * @example
   * account
   */
  effectiveType?: string;
  /**
   * @example
   * [20003]
   */
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
   * @example
   * 2018-06-06T11:34Z
   */
  createTime?: string;
  /**
   * @example
   * 1533773400000
   */
  createTimestamp?: number;
  /**
   * @example
   * SOAR
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
  effectiveScopes?: DescribeRecursionZoneResponseBodyEffectiveScopes;
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
   * test
   */
  remark?: string;
  /**
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @example
   * 2018-01-03T08:57Z
   */
  updateTime?: string;
  /**
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @example
   * 1527690629357
   */
  userId?: string;
  /**
   * @example
   * 169438909000011
   */
  zoneId?: string;
  /**
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

