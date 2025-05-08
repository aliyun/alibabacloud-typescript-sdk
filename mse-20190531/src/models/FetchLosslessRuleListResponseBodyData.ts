// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FetchLosslessRuleListResponseBodyDataResults } from "./FetchLosslessRuleListResponseBodyDataResults";


export class FetchLosslessRuleListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned data.
   */
  results?: FetchLosslessRuleListResponseBodyDataResults[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 36
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      results: { 'type': 'array', 'itemType': FetchLosslessRuleListResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

