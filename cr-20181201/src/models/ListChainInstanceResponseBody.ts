// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChainInstanceResponseBodyChainInstances } from "./ListChainInstanceResponseBodyChainInstances";


export class ListChainInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   */
  chainInstances?: ListChainInstanceResponseBodyChainInstances[];
  /**
   * @remarks
   * The version of the delivery chain.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution record of the delivery chain.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * 30
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * 838D1602-6D8F-47FB-B60A-656645D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chainInstances: 'ChainInstances',
      code: 'Code',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainInstances: { 'type': 'array', 'itemType': ListChainInstanceResponseBodyChainInstances },
      code: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chainInstances)) {
      $dara.Model.validateArray(this.chainInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

