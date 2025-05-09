// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityResultsResponseBodyPagingInfoDataQualityResults } from "./ListDataQualityResultsResponseBodyPagingInfoDataQualityResults";


export class ListDataQualityResultsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data quality check results.
   */
  dataQualityResults?: ListDataQualityResultsResponseBodyPagingInfoDataQualityResults[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 219
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataQualityResults: 'DataQualityResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityResults: { 'type': 'array', 'itemType': ListDataQualityResultsResponseBodyPagingInfoDataQualityResults },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityResults)) {
      $dara.Model.validateArray(this.dataQualityResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

