// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExecutionsResponseBodyExecutions } from "./ListExecutionsResponseBodyExecutions";


export class ListExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task executions.
   */
  executions?: ListExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A074-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the executions.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

