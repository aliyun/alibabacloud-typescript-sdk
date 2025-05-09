// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLineageRelationshipsResponseBodyPagingInfo } from "./ListLineageRelationshipsResponseBodyPagingInfo";


export class ListLineageRelationshipsResponseBody extends $dara.Model {
  pagingInfo?: ListLineageRelationshipsResponseBodyPagingInfo;
  /**
   * @example
   * SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF
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
      pagingInfo: ListLineageRelationshipsResponseBodyPagingInfo,
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

