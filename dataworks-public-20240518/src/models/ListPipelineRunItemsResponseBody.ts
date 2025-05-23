// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPipelineRunItemsResponseBodyPagingInfo } from "./ListPipelineRunItemsResponseBodyPagingInfo";


export class ListPipelineRunItemsResponseBody extends $dara.Model {
  pagingInfo?: ListPipelineRunItemsResponseBodyPagingInfo;
  /**
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
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
      pagingInfo: ListPipelineRunItemsResponseBodyPagingInfo,
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

