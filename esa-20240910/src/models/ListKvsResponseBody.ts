// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListKvsResponseBodyKeys } from "./ListKvsResponseBodyKeys";


export class ListKvsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs.
   */
  keys?: ListKvsResponseBodyKeys[];
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 100
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1024
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': ListKvsResponseBodyKeys },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

