// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSchemasResponseBodyPagingInfo } from "./ListSchemasResponseBodyPagingInfo";


export class ListSchemasResponseBody extends $dara.Model {
  pagingInfo?: ListSchemasResponseBodyPagingInfo;
  /**
   * @example
   * 235BBA5E-3428-XXXXXX
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
      pagingInfo: ListSchemasResponseBodyPagingInfo,
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

