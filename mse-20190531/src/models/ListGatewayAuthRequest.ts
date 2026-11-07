// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayAuthRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The whitelist mode.
   * 
   * @example
   * true
   */
  isWhite?: boolean;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * rutain-test
   */
  name?: string;
  /**
   * @remarks
   * The enabling status.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      name: 'string',
      status: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (default): Chinese, en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * The filter conditions. Refer to the examples.
   */
  filterParams?: ListGatewayAuthRequestFilterParams;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * {}
   */
  orderItem?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page.
   * 
   * @example
   * 10
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
      filterParams: ListGatewayAuthRequestFilterParams,
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

