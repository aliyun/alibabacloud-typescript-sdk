// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserSolutionsResponseBodyData } from "./ListUserSolutionsResponseBodyData";


export class ListUserSolutionsResponseBody extends $dara.Model {
  /**
   * @example
   * 8
   */
  currentPageNum?: number;
  data?: ListUserSolutionsResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 2174AA97-56FB-50FA-B243-0460B9E4CE0C
   */
  requestId?: string;
  /**
   * @example
   * 344
   */
  totalItemNum?: number;
  /**
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListUserSolutionsResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

