// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLPatternsResponseBodyPatternDetails } from "./DescribeSqlpatternsResponseBodyPatternDetails";


export class DescribeSQLPatternsResponseBody extends $dara.Model {
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried SQL patterns.
   */
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BE0EDD1-0DE6-3EB6-81BF-BFE4F2******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      patternDetails: { 'type': 'array', 'itemType': DescribeSQLPatternsResponseBodyPatternDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.patternDetails)) {
      $dara.Model.validateArray(this.patternDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

