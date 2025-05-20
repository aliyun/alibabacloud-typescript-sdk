// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeSolutionRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PolarDBMySQL**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance ID. You can call the [GetQueryOptimizeDataStats](https://help.aliyun.com/document_detail/405261.html) operation to query the instance ID.
   * 
   * @example
   * rm-bp1o3z6beqpej****
   */
  instanceId?: string;
  /**
   * @remarks
   * The tag ID. For more information, see [Query governance](https://help.aliyun.com/document_detail/290038.html).
   * 
   * This parameter is required.
   * 
   * @example
   * LARGE_ROWS_EXAMINED
   */
  ruleIds?: string;
  /**
   * @remarks
   * The SQL template ID. You can call the [GetQueryOptimizeDataStats](https://help.aliyun.com/document_detail/405261.html) operation to query the SQL template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 05fecf7e7b3efd123c4d5197035f****
   */
  sqlId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      instanceId: 'InstanceId',
      ruleIds: 'RuleIds',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      instanceId: 'string',
      ruleIds: 'string',
      sqlId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

