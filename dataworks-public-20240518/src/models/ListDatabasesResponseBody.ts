// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabasesResponseBodyPagingInfo } from "./ListDatabasesResponseBodyPagingInfo";


export class ListDatabasesResponseBody extends $dara.Model {
  pagingInfo?: ListDatabasesResponseBodyPagingInfo;
  /**
   * @example
   * 9DD08926-38B9-XXXXXXX
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
      pagingInfo: ListDatabasesResponseBodyPagingInfo,
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

