// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChainResponseBodyChains } from "./ListChainResponseBodyChains";


export class ListChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of delivery chains.
   */
  chains?: ListChainResponseBodyChains[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85A99B10-3926-5201-958E-C06FA47F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of delivery chains.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chains: 'Chains',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chains: { 'type': 'array', 'itemType': ListChainResponseBodyChains },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chains)) {
      $dara.Model.validateArray(this.chains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

