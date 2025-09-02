// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTableRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique identifier (GUID) of the MaxCompute project. Specify the GUID in the odps.{projectName} format.
   * 
   * @example
   * odps.test
   */
  appGuid?: string;
  /**
   * @remarks
   * The type of the compute engine or data source. Valid values:
   * 
   * *   cdh
   * *   analyticdb_for_mysql
   * *   odps
   * *   emr
   * *   hadoop
   * *   holodb
   * *   hybriddb_for_postgresql
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The schema information of the table. You need to enter the schema information of the table if you enable the table schema in MaxCompute.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * true
   */
  schema?: string;
  /**
   * @remarks
   * The name of the MaxCompute table.
   * 
   * This parameter is required.
   * 
   * @example
   * table1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      appGuid: 'AppGuid',
      envType: 'EnvType',
      projectId: 'ProjectId',
      schema: 'Schema',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGuid: 'string',
      envType: 'number',
      projectId: 'number',
      schema: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

