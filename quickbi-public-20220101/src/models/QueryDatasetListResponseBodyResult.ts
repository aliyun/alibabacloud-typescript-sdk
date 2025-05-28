// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDatasetListResponseBodyResultData } from "./QueryDatasetListResponseBodyResultData";


export class QueryDatasetListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Returns the pagination results of the dataset list. The detailed information of the dataset list is stored in the response parameter Data.
   */
  data?: QueryDatasetListResponseBodyResultData[];
  /**
   * @remarks
   * The number of rows per page in a paged query.
   * 
   * *   Default value: 10.
   * *   Maximum value: 1,000.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Current page number for dataset list:
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDatasetListResponseBodyResultData },
      pageNum: 'number',
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

