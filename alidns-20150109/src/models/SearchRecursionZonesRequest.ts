// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionZonesRequestEffectiveScopes extends $dara.Model {
  /**
   * @example
   * account
   */
  effectiveType?: string;
  /**
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
   * @example
   * asc
   */
  direction?: string;
  effectiveScopes?: SearchRecursionZonesRequestEffectiveScopes[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @example
   * default
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
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

