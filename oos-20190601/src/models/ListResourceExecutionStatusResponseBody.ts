// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceExecutionStatusResponseBodyResourceExecutionStatus } from "./ListResourceExecutionStatusResponseBodyResourceExecutionStatus";


export class ListResourceExecutionStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
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
   * ED571CBD-9F96-419D-B919-CF340BBCA157
   */
  requestId?: string;
  /**
   * @remarks
   * The execution information of the resource.
   */
  resourceExecutionStatus?: ListResourceExecutionStatusResponseBodyResourceExecutionStatus[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceExecutionStatus: 'ResourceExecutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceExecutionStatus: { 'type': 'array', 'itemType': ListResourceExecutionStatusResponseBodyResourceExecutionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.resourceExecutionStatus)) {
      $dara.Model.validateArray(this.resourceExecutionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

