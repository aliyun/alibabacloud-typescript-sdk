// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schema extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * The schema ID. For more information, see [Concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${Instance ID or escaped URL}:${Catalog name}:${Database name}`. Use empty strings as placeholders for levels that do not exist.
   * 
   * >  For the MaxCompute type, the instance ID level is represented by an empty string. The database name is the name of the MaxCompute project, which has enabled the schema feature.
   * 
   * Examples of common ID formats
   * 
   * `maxcompute-project:::project_name` (For MaxCompute projects schema enabled)
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * > \\
   * `instance_id`: The Hologres instance ID\\
   * . `database_name`: The database name\\
   * . `project_name`: The MaxCompute project name\\
   * . `schema_name`: The schema name.
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project:default
   * holo-schema:h-abc123xxx::test_db:test_schema
   */
  id?: string;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test_db
   */
  name?: string;
  /**
   * @remarks
   * The parent entity ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format: `${EntityType}:${Instance ID or escaped URL}:${Catalog name}:${Database name}`. Use empty strings as placeholders for levels that do not exist.
   * 
   * >  For the MaxCompute type, the instance ID level is represented by an empty string. The database name is the name of the MaxCompute project with schema enabled.
   * 
   * Examples of common ParentMetaEntityId formats
   * 
   * `maxcompute-project:::project_name` (For MaxCompute projects with schema enabled)
   * 
   * `holo-database:instance_id::database_name`
   * 
   * > \\
   * `instance_id`: The Hologres instance ID\\
   * . `database_name`: The database name\\
   * . `project_name`: The MaxCompute project name.
   * 
   * @example
   * maxcompute-project:123456XXX::test_project
   * holo-database:h-abc123xxx::test_db
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * MANAGED
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

