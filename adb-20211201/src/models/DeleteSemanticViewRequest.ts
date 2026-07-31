// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSemanticViewRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the semantic view.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_sv_name
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
      viewName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

