// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryModelGroupListRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for fuzzy match by group name.
   * 
   * @example
   * Professional
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * An unused parameter.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The group type filter. Valid values: system, manual, and all. Default value: all.
   * 
   * @example
   * all
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

