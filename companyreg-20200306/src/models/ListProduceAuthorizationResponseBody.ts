// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProduceAuthorizationResponseBodyData } from "./ListProduceAuthorizationResponseBodyData";


export class ListProduceAuthorizationResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPageNum?: number;
  data?: ListProduceAuthorizationResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 10AAC56B-C512-5860-9A9E-B949431E7174
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 292
   */
  totalItemNum?: number;
  /**
   * @example
   * 27
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      data: { 'type': 'array', 'itemType': ListProduceAuthorizationResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
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

