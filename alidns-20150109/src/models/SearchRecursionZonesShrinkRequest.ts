// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionZonesShrinkRequest extends $dara.Model {
  /**
   * @example
   * asc
   */
  direction?: string;
  effectiveScopesShrink?: string;
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

