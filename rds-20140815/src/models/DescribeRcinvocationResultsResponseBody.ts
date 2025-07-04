// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInvocationResultsResponseBodyInvocationResults } from "./DescribeRcinvocationResultsResponseBodyInvocationResults";


export class DescribeRCInvocationResultsResponseBody extends $dara.Model {
  invocationResults?: DescribeRCInvocationResultsResponseBodyInvocationResults[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @example
   * 49BC2500-8078-5AC4-A545-20AA5945B0E6
   */
  requestId?: string;
  /**
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
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResults: { 'type': 'array', 'itemType': DescribeRCInvocationResultsResponseBodyInvocationResults },
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.invocationResults)) {
      $dara.Model.validateArray(this.invocationResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

