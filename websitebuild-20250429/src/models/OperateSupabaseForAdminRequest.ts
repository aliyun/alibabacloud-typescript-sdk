// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSupabaseForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * This parameter is required.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  env?: string;
  /**
   * @remarks
   * SQL statement
   * 
   * @example
   * select * from profiles
   */
  executeSql?: string;
  /**
   * @remarks
   * Operation Type
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * ORDER BY clause
   * 
   * @example
   * null
   */
  orderByClause?: string;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type: ASC|DESC
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Table name
   * 
   * @example
   * default.ai_advertising_material_rec_train_v1103
   */
  tableName?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 111
   */
  userId?: string;
  /**
   * @remarks
   * WHERE clause
   * 
   * @example
   * null
   */
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      env: 'Env',
      executeSql: 'ExecuteSql',
      operateType: 'OperateType',
      orderByClause: 'OrderByClause',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tableName: 'TableName',
      userId: 'UserId',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      env: 'string',
      executeSql: 'string',
      operateType: 'string',
      orderByClause: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tableName: 'string',
      userId: 'string',
      whereClause: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

