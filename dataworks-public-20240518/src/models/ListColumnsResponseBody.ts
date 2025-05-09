// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListColumnsResponseBodyPagingInfo } from "./ListColumnsResponseBodyPagingInfo";


export class ListColumnsResponseBody extends $dara.Model {
  pagingInfo?: ListColumnsResponseBodyPagingInfo;
  /**
   * @example
   * D1E2E5BC-xxxx-xxxx-xxxx-xxxxxx
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
      pagingInfo: ListColumnsResponseBodyPagingInfo,
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

