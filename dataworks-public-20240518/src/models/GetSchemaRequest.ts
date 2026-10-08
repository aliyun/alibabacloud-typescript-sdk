// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID. You can refer to the ListSchemas operation and [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * 
   * 
   * 
   * The format is `${EntityType}:${Instance ID or escaped URL}:${Catalog ID}:${Database name}:${Schema name}`. Use empty strings as placeholders for missing levels.
   * 
   * 
   * 
   * 
   * > For the MaxCompute type, use an empty string as the placeholder for the instance ID level. The database name is the MaxCompute project name, and the project must have the three-level model enabled.
   * 
   * 
   * 
   * 
   * Examples:
   * 
   * 
   * 
   * 
   * `maxcompute-schema:::project_name:schema_name` (The three-level model is enabled for the MaxCompute project.)
   * 
   * 
   * 
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * 
   * 
   * 
   * > &lt;br&gt;`instance_id`: The Hologres instance ID&lt;br&gt;
   * > . `database_name`: The database name&lt;br&gt;
   * > . `project_name`: The MaxCompute project name&lt;br&gt;
   * > . `schema_name`: The schema name.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-schema:::project_name:schema_name
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

