// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionZonesShrinkRequest extends $dara.Model {
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
  effectiveScopesShrink?: string;
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
      effectiveScopesShrink: 'EffectiveScopes',
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
      effectiveScopesShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

