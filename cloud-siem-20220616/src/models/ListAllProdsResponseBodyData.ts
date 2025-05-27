// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllProdsResponseBodyDataProdList } from "./ListAllProdsResponseBodyDataProdList";


export class ListAllProdsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud services.
   * 
   * @example
   * 1
   */
  prodList?: ListAllProdsResponseBodyDataProdList[];
  /**
   * @remarks
   * The total number of logs.
   * 
   * @example
   * 19
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      prodList: 'ProdList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      prodList: { 'type': 'array', 'itemType': ListAllProdsResponseBodyDataProdList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prodList)) {
      $dara.Model.validateArray(this.prodList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

