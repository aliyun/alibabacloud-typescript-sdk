// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackGroupOperationResultsResponseBodyStackGroupOperationResults } from "./ListStackGroupOperationResultsResponseBodyStackGroupOperationResults";


export class ListStackGroupOperationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the results of the operation.
   */
  stackGroupOperationResults?: ListStackGroupOperationResultsResponseBodyStackGroupOperationResults[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperationResults: 'StackGroupOperationResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperationResults: { 'type': 'array', 'itemType': ListStackGroupOperationResultsResponseBodyStackGroupOperationResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackGroupOperationResults)) {
      $dara.Model.validateArray(this.stackGroupOperationResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

