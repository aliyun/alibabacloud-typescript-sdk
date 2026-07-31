// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSemanticViewRequest extends $dara.Model {
  /**
   * @remarks
   * ADB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp198m028ih55****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * YAML definition of the semantic view.
   * 
   * This parameter is required.
   * 
   * @example
   * YAML 内容
   */
  definition?: string;
  /**
   * @remarks
   * Schema name.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * Semantic view name.
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
      definition: 'Definition',
      schemaName: 'SchemaName',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      definition: 'string',
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

