// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountBillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account are queried by default.
   * 
   * @example
   * 122
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2021-06-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills by month. The data queried is consistent with the data that is displayed for the specified billing cycle on the Billing Details tab of the Bill Details page in User Center.
   * *   DAILY: queries bills by day. The data queried is consistent with the data that is displayed for the specified day on the Billing Details tab of the Bill Details page in User Center.
   * 
   * You must set the BillingDate parameter before you can set the Granularity parameter to DAILY.
   * 
   * @example
   * Monthly
   */
  granularity?: string;
  /**
   * @remarks
   * Specifies whether to summarize bills based on service codes. Valid values:
   * 
   * *   true: summarizes bills based on service codes.
   * *   false: does not summarize bills based on service codes.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isGroupByProduct?: boolean;
  ownerID?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      isGroupByProduct: 'IsGroupByProduct',
      ownerID: 'OwnerID',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      isGroupByProduct: 'boolean',
      ownerID: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

