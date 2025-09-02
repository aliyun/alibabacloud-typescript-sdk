// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIProjectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the destinations of the synchronization solutions. This parameter cannot be left empty. Valid values: analyticdb_for_mysql, odps, elasticsearch, holo, mysql, and polardb.
   * 
   * This parameter is required.
   * 
   * @example
   * odps
   */
  destinationType?: string;
  /**
   * @remarks
   * The new default global configuration of the synchronization solutions. The value indicates the processing rules of different types of DDL messages. The value must be in the JSON format. Example: {"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}.
   * 
   * Field description:
   * 
   * *   RENAMECOLUMN: renames a column.
   * *   DROPTABLE: deletes a table.
   * *   CREATETABLE: creates a table.
   * *   MODIFYCOLUMN: changes the data type of a column.
   * *   TRUNCATETABLE: clears a table.
   * *   DROPCOLUMN: deletes a column.
   * *   ADDCOLUMN: creates a column.
   * *   RENAMETABLE: renames a table.
   * 
   * DataWorks processes a DDL message of a specific type based on the following rules:
   * 
   * *   WARNING: ignores the message and records an alert in real-time synchronization logs. The alert contains information about the situation that the message is ignored because of an execution error.
   * *   IGNORE: discards the message and does not send it to the destination.
   * *   CRITICAL: terminates the real-time synchronization task and sets the node status to Failed.
   * *   NORMAL: sends the message to the destination to process the message. Each destination processes DDL messages based on its own business logic. If DataWorks adopts the NORMAL policy, DataWorks only forwards DDL messages.
   * 
   * This parameter is required.
   * 
   * @example
   * {"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}
   */
  projectConfig?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the sources of the synchronization solutions. Valid values: oracle, mysql, polardb, datahub, drds, and analyticdb_for_mysql. If you do not configure this parameter, DataWorks applies the default global configuration to all sources.
   * 
   * @example
   * mysql
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationType: 'DestinationType',
      projectConfig: 'ProjectConfig',
      projectId: 'ProjectId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationType: 'string',
      projectConfig: 'string',
      projectId: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

