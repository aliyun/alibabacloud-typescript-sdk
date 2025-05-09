// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCatalogsResponseBodyPagingInfo } from "./ListCatalogsResponseBodyPagingInfo";


export class ListCatalogsResponseBody extends $dara.Model {
  pagingInfo?: ListCatalogsResponseBodyPagingInfo;
  /**
   * @example
   * 317CD7D0-AB36-XXXXXX
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
      pagingInfo: ListCatalogsResponseBodyPagingInfo,
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

