// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFootprintListResponseBodyDataRecords } from "./GetFootprintListResponseBodyDataRecords";


export class GetFootprintListResponseBodyData extends $dara.Model {
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
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Product Detail List.
   */
  records?: GetFootprintListResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  total?: number;
  /**
   * @remarks
   * Total Pages
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      total: 'total',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetFootprintListResponseBodyDataRecords },
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

