// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExecutorsResponseBodyExecutors } from "./ListExecutorsResponseBodyExecutors";


export class ListExecutorsResponseBody extends $dara.Model {
  executors?: ListExecutorsResponseBodyExecutors[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @example
   * 40
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      executors: 'Executors',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executors: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutors },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executors)) {
      $dara.Model.validateArray(this.executors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

