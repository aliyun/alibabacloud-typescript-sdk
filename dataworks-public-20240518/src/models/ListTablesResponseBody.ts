// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTablesResponseBodyPagingInfo } from "./ListTablesResponseBodyPagingInfo";


export class ListTablesResponseBody extends $dara.Model {
  pagingInfo?: ListTablesResponseBodyPagingInfo;
  /**
   * @example
   * E25887B7-579C-54A5-9C4F-83A****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListTablesResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

