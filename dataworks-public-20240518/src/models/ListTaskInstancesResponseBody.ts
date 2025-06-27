// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTaskInstancesResponseBodyPagingInfo } from "./ListTaskInstancesResponseBodyPagingInfo";


export class ListTaskInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination details.
   */
  pagingInfo?: ListTaskInstancesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListTaskInstancesResponseBodyPagingInfo,
      requestId: 'string',
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

