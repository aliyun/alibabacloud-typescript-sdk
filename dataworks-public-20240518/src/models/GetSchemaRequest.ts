// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The schema ID. You can call the ListSchemas operation to query schema IDs. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * Configure this parameter in the `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}` format. If a level does not exist, leave the level empty.
   * 
   * >  If you want to query the information about a MaxCompute schema, specify an empty string at the Instance ID level as a placeholder and a MaxCompute project name at the Database name level. Make sure that the schema feature is enabled for the MaxCompute project.
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

