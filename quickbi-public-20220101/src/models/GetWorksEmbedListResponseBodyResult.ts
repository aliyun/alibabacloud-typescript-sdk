// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorksEmbedListResponseBodyResultData } from "./GetWorksEmbedListResponseBodyResultData";


export class GetWorksEmbedListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of reports
   */
  data?: GetWorksEmbedListResponseBodyResultData[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 18
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetWorksEmbedListResponseBodyResultData },
      pageNo: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
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

