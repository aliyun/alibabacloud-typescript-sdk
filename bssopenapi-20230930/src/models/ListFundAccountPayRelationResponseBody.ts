// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFundAccountPayRelationResponseBodyData } from "./ListFundAccountPayRelationResponseBodyData";


export class ListFundAccountPayRelationResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListFundAccountPayRelationResponseBodyData[];
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
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * 50
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
      data: { 'type': 'array', 'itemType': ListFundAccountPayRelationResponseBodyData },
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

