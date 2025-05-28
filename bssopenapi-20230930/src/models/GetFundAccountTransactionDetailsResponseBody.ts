// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFundAccountTransactionDetailsResponseBodyData } from "./GetFundAccountTransactionDetailsResponseBodyData";


export class GetFundAccountTransactionDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: GetFundAccountTransactionDetailsResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': GetFundAccountTransactionDetailsResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

