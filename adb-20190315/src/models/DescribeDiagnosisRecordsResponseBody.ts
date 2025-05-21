// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosisRecordsResponseBodyQuerys } from "./DescribeDiagnosisRecordsResponseBodyQuerys";


export class DescribeDiagnosisRecordsResponseBody extends $dara.Model {
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
   * The queried SQL statements.
   */
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 109462AF-B5FA-3D5A-9377-B27E5B******
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
      querys: 'Querys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      querys: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.querys)) {
      $dara.Model.validateArray(this.querys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

