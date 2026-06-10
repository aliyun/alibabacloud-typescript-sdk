// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupabaseAuthConfigsForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * Authentication type
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  authType?: string;
  /**
   * @remarks
   * Business ID
   * 
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  env?: string;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * gmtCreated
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type: ASC or DESC
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * Page number, default is 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size, default is 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
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
      authType: 'string',
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

