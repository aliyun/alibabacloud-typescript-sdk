// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientProblemTypeResponseBodyProblemTypes extends $dara.Model {
  /**
   * @remarks
   * The description of the diagnostic issue category.
   * 
   * @example
   * Server Guard Agent Offline
   */
  problemDetail?: string;
  /**
   * @remarks
   * The ID of the diagnostic issue category.
   * 
   * @example
   * 4
   */
  problemId?: string;
  /**
   * @remarks
   * The name of the diagnostic issue category.
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
   * The number of entries on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The current page number displayed in the returned results.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of diagnostic types.
   */
  problemTypes?: DescribeClientProblemTypeResponseBodyProblemTypes[];
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53CXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the client issue list.
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

