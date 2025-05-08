// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayBlackWhiteListRequestFilterParams } from "./GatewayBlackWhiteListRequestFilterParams";


export class GatewayBlackWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  descSort?: boolean;
  /**
   * @remarks
   * The filter parameters.
   */
  filterParams?: GatewayBlackWhiteListRequestFilterParams;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  orderItem?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 1.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParams: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParams: GatewayBlackWhiteListRequestFilterParams,
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filterParams && typeof (this.filterParams as any).validate === 'function') {
      (this.filterParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

