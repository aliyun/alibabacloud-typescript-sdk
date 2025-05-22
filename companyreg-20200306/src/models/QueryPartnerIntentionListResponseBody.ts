// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPartnerIntentionListResponseBodyData } from "./QueryPartnerIntentionListResponseBodyData";


export class QueryPartnerIntentionListResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  currentPageNum?: number;
  data?: QueryPartnerIntentionListResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 78E9DC76-7DFD-5975-99B0-4A95E8A92F5D
   */
  requestId?: string;
  /**
   * @example
   * 319
   */
  totalItemNum?: number;
  /**
   * @example
   * 13
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': QueryPartnerIntentionListResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

