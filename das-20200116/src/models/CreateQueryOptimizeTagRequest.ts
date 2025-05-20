// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQueryOptimizeTagRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * The remarks can be 1 to 300 characters in length.
   * 
   * @example
   * Slow SQL queries of offline synchronization. No optimization is required.
   */
  comments?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**: ApsaraDB RDS for MySQL
   * *   **PolarDBMySQL**: PolarDB for MySQL
   * *   **PostgreSQL**: ApsaraDB RDS for PostgreSQL
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
   * The SQL template IDs. You can call the [GetQueryOptimizeExecErrorStats](https://help.aliyun.com/document_detail/405261.html) operation to obtain the SQL template ID. Separate multiple SQL template IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 6068ce044e3dc9b903979672fb0b69df,d12515c015fc9f41a0778a9e1de0e941
   */
  sqlIds?: string;
  /**
   * @remarks
   * The status of **Tags**. Valid values:
   * 
   * *   **0**: removes all tags added to the SQL templates that are specified by **SqlIds** and leaves **Tags** empty.
   * *   **1**: adds the tags specified by **Tags** to the SQL templates that are specified by **SqlIds**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The SQL tags. Separate multiple SQL tags with commas (,). Valid values:
   * 
   * *   **DAS_IMPORTANT**: The SQL template is important.
   * *   **DAS_NOT_IMPORTANT**: The SQL template is unimportant.
   * *   **USER_IGNORE**: The scheduling of the SQL template does not need to be optimized.
   * *   **DAS_IN_PLAN**: The scheduling of the SQL template needs to be optimized.
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

