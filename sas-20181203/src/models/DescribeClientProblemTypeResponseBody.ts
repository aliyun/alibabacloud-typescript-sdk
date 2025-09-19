// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientProblemTypeResponseBodyProblemTypes extends $dara.Model {
  /**
   * @remarks
   * The description of the issue type.
   * 
   * @example
   * other
   */
  problemDetail?: string;
  /**
   * @remarks
   * The ID of the issue type.
   * 
   * @example
   * 4
   */
  problemId?: string;
  /**
   * @remarks
   * The name of the issue type.
   * 
   * @example
   * high_cpu
   */
  problemType?: string;
  static names(): { [key: string]: string } {
    return {
      problemDetail: 'problemDetail',
      problemId: 'problemId',
      problemType: 'problemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemDetail: 'string',
      problemId: 'string',
      problemType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientProblemTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
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
   * The number of entries per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The issue types.
   */
  problemTypes?: DescribeClientProblemTypeResponseBodyProblemTypes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53CXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      problemTypes: 'ProblemTypes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      problemTypes: { 'type': 'array', 'itemType': DescribeClientProblemTypeResponseBodyProblemTypes },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.problemTypes)) {
      $dara.Model.validateArray(this.problemTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

