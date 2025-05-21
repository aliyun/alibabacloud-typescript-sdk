// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSchemasResponseBodyItemsSchema extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

