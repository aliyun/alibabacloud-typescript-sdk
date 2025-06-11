// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutlineBindingResponseBodyOutlineBinding extends $dara.Model {
  /**
   * @remarks
   * The bound index.
   * 
   * @example
   * PRIMARY
   */
  bindIndex?: string;
  /**
   * @remarks
   * The bound plan.
   * 
   * @example
   * PHY_TABLE_SCAN | bmsql_order_line | 40 ******
   */
  bindPlan?: string;
  /**
   * @remarks
   * The maximum number of concurrent tasks.
   * 
   * @example
   * 2
   */
  maxConcurrent?: number;
  /**
   * @remarks
   * OutlineID.
   * 
   * @example
   * -1
   */
  outlineId?: number;
  sqlText?: string;
  sqlTextConcurrentNum?: number;
  /**
   * @remarks
   * The name of the tenant. The tenant name must start with a letter or an underscore (_), and contain 2 to 20 characters, which can be uppercase letters, lowercase letters, digits, and underscores (_). It cannot be set to sys.
   * 
   * @example
   * cluster_info
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      bindIndex: 'BindIndex',
      bindPlan: 'BindPlan',
      maxConcurrent: 'MaxConcurrent',
      outlineId: 'OutlineId',
      sqlText: 'SqlText',
      sqlTextConcurrentNum: 'SqlTextConcurrentNum',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindIndex: 'string',
      bindPlan: 'string',
      maxConcurrent: 'number',
      outlineId: 'number',
      sqlText: 'string',
      sqlTextConcurrentNum: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

