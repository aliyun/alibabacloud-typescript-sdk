// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvocationResultsResponseBodyInvocationInvocationResults } from "./DescribeInvocationResultsResponseBodyInvocationInvocationResults";


export class DescribeInvocationResultsResponseBodyInvocation extends $dara.Model {
  /**
   * @remarks
   * The execution results.
   */
  invocationResults?: DescribeInvocationResultsResponseBodyInvocationInvocationResults;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of the commands.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocationResults: 'InvocationResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResults: DescribeInvocationResultsResponseBodyInvocationInvocationResults,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.invocationResults && typeof (this.invocationResults as any).validate === 'function') {
      (this.invocationResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

