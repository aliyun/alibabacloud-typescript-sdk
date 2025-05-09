// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatabaseExportOrderRequestPluginParamConfig } from "./CreateDatabaseExportOrderRequestPluginParamConfig";


export class CreateDatabaseExportOrderRequestPluginParam extends $dara.Model {
  /**
   * @remarks
   * The reason for the database export.
   * 
   * This parameter is required.
   * 
   * @example
   * document_test
   */
  classify?: string;
  /**
   * @remarks
   * The configurations for database export.
   * 
   * This parameter is required.
   */
  config?: CreateDatabaseExportOrderRequestPluginParamConfig;
  /**
   * @remarks
   * The database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 17****
   */
  dbId?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test@xxx.xxx.xxx.xxx:3306
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      config: 'Config',
      dbId: 'DbId',
      instanceId: 'InstanceId',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      config: CreateDatabaseExportOrderRequestPluginParamConfig,
      dbId: 'number',
      instanceId: 'number',
      logic: 'boolean',
      searchName: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

