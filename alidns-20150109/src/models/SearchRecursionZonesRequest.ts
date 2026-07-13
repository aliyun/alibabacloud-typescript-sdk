// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionZonesRequestEffectiveScopes extends $dara.Model {
  /**
   * @remarks
   * The type of the effective scope. Valid value: `account`.
   * 
   * @example
   * account
   */
  effectiveType?: string;
  /**
   * @remarks
   * A list of scope values that correspond to the specified `EffectiveType`. For example, if `EffectiveType` is set to `account`, this parameter contains a list of account IDs for users that use recursive resolution.
   * 
   * @example
   * [20003]
   */
  scope?: string[];
  static names(): { [key: string]: string } {
    return {
      effectiveType: 'EffectiveType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveType: 'string',
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

export class SearchRecursionZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order. Valid values: `asc`: ascending. `desc`: descending.
   * 
   * @example
   * asc
   */
  direction?: string;
  /**
   * @remarks
   * The list of effective scopes.
   */
  effectiveScopes?: SearchRecursionZonesRequestEffectiveScopes[];
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field. Valid values: `UpdateTime`: the update time of the zone. `RecordCount`: the number of DNS records.
   * 
   * @example
   * default
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start at **1**. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Valid values: 1 to 100. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The remark for the zone. Fuzzy search is supported.
   * 
   * @example
   * test
   */
  remark?: string;
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
      direction: 'Direction',
      effectiveScopes: 'EffectiveScopes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      effectiveScopes: { 'type': 'array', 'itemType': SearchRecursionZonesRequestEffectiveScopes },
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.effectiveScopes)) {
      $dara.Model.validateArray(this.effectiveScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

