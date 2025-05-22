// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackGroupOperationsResponseBodyStackGroupOperations } from "./ListStackGroupOperationsResponseBodyStackGroupOperations";


export class ListStackGroupOperationsResponseBody extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The stack group operations.
   */
  stackGroupOperations?: ListStackGroupOperationsResponseBodyStackGroupOperations[];
  /**
   * @remarks
   * The total number of stack group operations.
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
      stackGroupOperations: 'StackGroupOperations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperations: { 'type': 'array', 'itemType': ListStackGroupOperationsResponseBodyStackGroupOperations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackGroupOperations)) {
      $dara.Model.validateArray(this.stackGroupOperations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

