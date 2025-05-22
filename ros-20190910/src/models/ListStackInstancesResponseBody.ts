// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackInstancesResponseBodyStackInstances } from "./ListStackInstancesResponseBodyStackInstances";


export class ListStackInstancesResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 85DE34BD-7FF9-480F-8C21-556E9DA93ACD
   */
  requestId?: string;
  /**
   * @remarks
   * The stacks.
   */
  stackInstances?: ListStackInstancesResponseBodyStackInstances[];
  /**
   * @remarks
   * The total number of stacks.
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
      stackInstances: 'StackInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackInstances: { 'type': 'array', 'itemType': ListStackInstancesResponseBodyStackInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackInstances)) {
      $dara.Model.validateArray(this.stackInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

