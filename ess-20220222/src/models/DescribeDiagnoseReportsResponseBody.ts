// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnoseReportsResponseBodyReports } from "./DescribeDiagnoseReportsResponseBodyReports";


export class DescribeDiagnoseReportsResponseBody extends $dara.Model {
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
   * The diagnostic reports.
   */
  reports?: DescribeDiagnoseReportsResponseBodyReports[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ECA123C6-107B-5F70-A177-740A7224C996
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of diagnostic reports.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reports: 'Reports',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      reports: { 'type': 'array', 'itemType': DescribeDiagnoseReportsResponseBodyReports },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

