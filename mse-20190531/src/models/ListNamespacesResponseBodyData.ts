// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespacesResponseBodyDataResult } from "./ListNamespacesResponseBodyDataResult";
import { ListNamespacesResponseBodyDataResults } from "./ListNamespacesResponseBodyDataResults";


export class ListNamespacesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  result?: ListNamespacesResponseBodyDataResult[];
  results?: ListNamespacesResponseBodyDataResults[];
  /**
   * @example
   * 7
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      results: 'Results',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataResult },
      results: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataResults },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

