// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupabaseInstanceInfoForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * Business instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * Environment identity
   * 
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @remarks
   * Sorting field
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type: ASC or DESC
   */
  orderType?: string;
  /**
   * @remarks
   * Page number, default is 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size, default is 10
   */
  pageSize?: number;
  /**
   * @remarks
   * User ID
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

