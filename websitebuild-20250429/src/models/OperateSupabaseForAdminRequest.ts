// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSupabaseForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @example
   * select * from profiles
   */
  executeSql?: string;
  /**
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @example
   * null
   */
  orderByClause?: string;
  /**
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * default.ai_advertising_material_rec_train_v1103
   */
  tableName?: string;
  /**
   * @example
   * 111
   */
  userId?: string;
  /**
   * @example
   * null
   */
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
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

