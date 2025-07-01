// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogAnalysisResponseBodyAnalyses } from "./DescribeLogAnalysisResponseBodyAnalyses";


export class DescribeLogAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of log dump information.
   */
  analyses?: DescribeLogAnalysisResponseBodyAnalyses;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * The number of log dump entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C84F77AF-3DE5-48F1-B19B-37FCBE24****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log dump entries in the region.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      analyses: 'Analyses',
      code: 'Code',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyses: DescribeLogAnalysisResponseBodyAnalyses,
      code: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.analyses && typeof (this.analyses as any).validate === 'function') {
      (this.analyses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

