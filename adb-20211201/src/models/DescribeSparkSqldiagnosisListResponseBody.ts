// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSparkSQLDiagnosisListResponseBodySQLDiagnosisList } from "./DescribeSparkSqldiagnosisListResponseBodySqldiagnosisList";


export class DescribeSparkSQLDiagnosisListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
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
   * The request ID.
   * 
   * @example
   * A91C9D07-7462-5F35-BB47-83629CE6CCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The queried diagnostic information.
   */
  SQLDiagnosisList?: DescribeSparkSQLDiagnosisListResponseBodySQLDiagnosisList[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1343
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      SQLDiagnosisList: 'SQLDiagnosisList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      SQLDiagnosisList: { 'type': 'array', 'itemType': DescribeSparkSQLDiagnosisListResponseBodySQLDiagnosisList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SQLDiagnosisList)) {
      $dara.Model.validateArray(this.SQLDiagnosisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

