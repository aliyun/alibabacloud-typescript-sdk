// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The schema ID. You can call the ListSchemas operation to query the ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}`. If a level does not exist, specify an empty string as a placeholder.
   * 
   * >  For MaxCompute tables, specify an empty string at the Instance ID level and a MaxCompute project name at the Database name level. Make sure that the three-layer model is enabled for the MaxCompute project.
   * 
   * You can configure this parameter in one of the following formats based on your data source type:
   * 
   * `maxcompute-schema:::project_name:schema_name` (Three-layer model is enabled for the MaxCompute project.)
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * > \\
   * `instance_id`: the ID of a Hologres instance\\
   * `database_name`: the name of a database\\
   * `project_name`: the name of a MaxCompute project\\
   * `schema_name`: the name of a schema
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project:default
   * holo-schema:h-abc123xxx::test_db:test_schema
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

