// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameSemanticViewRequest extends $dara.Model {
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
   * The new schema name in which the semantic view resides.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_sv
   */
  newSchemaName?: string;
  /**
   * @remarks
   * The new name of the semantic view.
   * 
   * This parameter is required.
   * 
   * @example
   * new_sv_name
   */
  newViewName?: string;
  /**
   * @remarks
   * The original schema name in which the semantic view resides.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_sv_old
   */
  oldSchemaName?: string;
  /**
   * @remarks
   * The original name of the semantic view.
   * 
   * This parameter is required.
   * 
   * @example
   * old_sv_name
   */
  oldViewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      newSchemaName: 'NewSchemaName',
      newViewName: 'NewViewName',
      oldSchemaName: 'OldSchemaName',
      oldViewName: 'OldViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      newSchemaName: 'string',
      newViewName: 'string',
      oldSchemaName: 'string',
      oldViewName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

