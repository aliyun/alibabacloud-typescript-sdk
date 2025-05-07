// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGreyTagRouteResponseBodyDataResult } from "./ListGreyTagRouteResponseBodyDataResult";


export class ListGreyTagRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid value: **1**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListGreyTagRouteResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of canary release rules. Valid value: **1**.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListGreyTagRouteResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

