// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSemanticViewNamesRequest extends $dara.Model {
  /**
   * @remarks
   * The ADB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the schema to which the semantic view belongs.
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

