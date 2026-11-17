// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The validity status filter. Valid values: Permanent, InEffect, AboutToExpire, and Expired. You can specify multiple values separated by commas to form a union. If this parameter is not specified, all statuses are included and intersected with the name and display status filters.
   * 
   * @example
   * Expired,AboutToExpire
   */
  expireStatus?: string;
  /**
   * @remarks
   * The gateway type used for filtering. Currently, **AI** and **API** gateway types are supported.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * Specifies whether to return the full expiration reminder count. Default value: false. The statistical scope is limited only by the current account and gatewayType.
   * 
   * @example
   * true
   */
  includeExpirationSummary?: boolean;
  /**
   * @remarks
   * The keyword used for fuzzy search by API name.
   * 
   * @example
   * UI-test
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The display status filter. Valid values: Enabled (enabled and not expired), Disabled (disabled regardless of expiration), and Expired (enabled and expired). If this parameter is not specified, all statuses are included and intersected with other filter conditions.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      expireStatus: 'expireStatus',
      gatewayType: 'gatewayType',
      includeExpirationSummary: 'includeExpirationSummary',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireStatus: 'string',
      gatewayType: 'string',
      includeExpirationSummary: 'boolean',
      nameLike: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

