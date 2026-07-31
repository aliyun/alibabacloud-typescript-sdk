// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceSemanticViewRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The definition of the semantic view.
   * 
   * This parameter is required.
   * 
   * @example
   * YAML 内容
   */
  definition?: string;
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
   * sales_sv
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

