// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApiDatasourceResponseBodyResultData } from "./ListApiDatasourceResponseBodyResultData";


export class ListApiDatasourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of API data sources that were queried.
   */
  data?: ListApiDatasourceResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when the interface is requested.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApiDatasourceResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
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

