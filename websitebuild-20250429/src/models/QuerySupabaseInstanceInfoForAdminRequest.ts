// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupabaseInstanceInfoForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * The business instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The environment identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      env: 'Env',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      env: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

