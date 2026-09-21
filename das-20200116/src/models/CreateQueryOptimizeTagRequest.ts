// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueryOptimizeTagRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * The value must be 1 to 300 characters in length.
   * 
   * @example
   * Slow SQL from offline synchronization. No optimization needed.
   */
  comments?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**: RDS MySQL
   * - **PolarDBMySQL**: PolarDB for MySQL
   * - **PostgreSQL**: RDS PostgreSQL
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The SQL template ID. You can call the [GetQueryOptimizeDataStats](https://help.aliyun.com/document_detail/405261.html) operation to query SQL template IDs. You can specify multiple template IDs separated by commas (,) to add tags in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * 6068ce044e3dc9b903979672fb0b69df,d12515c015fc9f41a0778a9e1de0****
   */
  sqlIds?: string;
  /**
   * @remarks
   * The status of the **Tags** request parameter.
   * 
   * - **0**: Clears all tags for the SQL template IDs specified by **SqlIds** and ignores the **Tags** parameter.
   * - **1**: Sets the tags for the SQL template IDs specified by **SqlIds** to the values specified by **Tags**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The SQL tag. You can specify multiple values separated by commas (,).
   * 
   * - **DAS_IMPORTANT**: important SQL.
   * - **DAS_NOT_IMPORTANT**: unimportant SQL.
   * - **USER_IGNORE**: optimization not required.
   * - **DAS_IN_PLAN**: scheduled for optimization.
   * 
   * This parameter is required.
   * 
   * @example
   * DAS_IN_PLAN,DAS_NOT_IMPORTANT
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      engine: 'Engine',
      instanceId: 'InstanceId',
      sqlIds: 'SqlIds',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      engine: 'string',
      instanceId: 'string',
      sqlIds: 'string',
      status: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

