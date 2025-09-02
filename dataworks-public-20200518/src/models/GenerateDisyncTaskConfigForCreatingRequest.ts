// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateDISyncTaskConfigForCreatingRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. This parameter is used to prevent repeated operations that are caused by multiple calls.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The script for the synchronization task. DataWorks allows you to create the following types of synchronization tasks:
   * 
   * *   Synchronization task that is used to synchronize data from MySQL to MaxCompute
   * *   Synchronization task that is used to synchronize data from MySQL data to Kafka
   * *   Synchronization task that is used to synchronize data from MySQL to Hologres
   * 
   * The SelectedTables parameter is used to specify tables that you want to synchronize from multiple databases. The Tables parameter is used to specify tables that you want to synchronize from a single database.
   * 
   * *   If the script contains the SelectedTables parameter, the system synchronizes data from the tables that you specify in the SelectedTables parameter.
   * *   If the script contains the Tables parameter, the system synchronizes data from the tables that you specify in the Tables parameter.
   * 
   * The following sample code provides a script for data synchronization from MySQL to MaxCompute:
   * 
   *     {
   *       "type": "realtime",
   *       "version": "1.0",
   *       "setting": {
   *         "resourceGroup": "S_res_group_280749521950784_1623033752022",
   *         "taskType": "oneclick_to_odps"
   *       },
   *       "steps": [
   *         {
   *           "stepType": "mysql",
   *           "parameter": {
   *             "connection": [
   *               {
   *                 "datasourceType": "mysql",
   *                 "datasource": "mysql_pub1",
   *                 "selectedTables": [
   *                   {
   *                     "dbName": "mysql_db",
   *                     "schema": [
   *                       {
   *                         "tableInfos": [
   *                           {
   *                             "table": "molin_di_test_in_pk_v4"
   *                           }
   *                         ]
   *                       }
   *                     ]
   *                   }
   *                 ]
   *               }
   *             ]
   *           },
   *           "name": "Reader",
   *           "category": "reader"
   *         },
   *         {
   *           "stepType": "odps",
   *           "parameter": {
   *             "datasource": "odps_source"
   *           },
   *           "name": "Writer",
   *           "category": "writer"
   *         }
   *       ]
   *     }
   * 
   * The following sample code provides a script for data synchronization from MySQL to Kafka:
   * 
   *     {
   *       "type": "realtime",
   *       "version": "1.0",
   *       "setting": {
   *         "resourceGroup": "S_res_group_280749521950784_1623033752022",
   *         "taskType": "oneclick_to_kafka"
   *       },
   *       "steps": [
   *         {
   *           "stepType": "mysql",
   *           "parameter": {
   *             "connection": [
   *               {
   *                 "datasourceType": "mysql",
   *                 "datasource": "pkset_test",
   *                 "selectedTables": [
   *                   {
   *                     "dbName": "mysql_db",
   *                     "schema": [
   *                       {
   *                         "tableInfos": [
   *                           {
   *                             "table": "molin_di_test_in_pk_v4"
   *                           }
   *                         ]
   *                       }
   *                     ]
   *                   }
   *                 ]
   *               }
   *             ]
   *           },
   *           "name": "Reader",
   *           "category": "reader"
   *         },
   *         {
   *           "stepType": "kafka",
   *           "parameter": {
   *             "datasource": "azn_kafka"
   *           },
   *           "name": "Writer",
   *           "category": "writer"
   *         }
   *       ]
   *     }
   * 
   * The following sample code provides a script for data synchronization from MySQL to Hologres:
   * 
   *     {
   *       "type": "realtime",
   *       "version": "1.0",
   *       "setting": {
   *         "resourceGroup": "S_res_group_280749521950784_1623033752022",
   *         "taskType": "oneclick_to_holo"
   *       },
   *       "steps": [
   *         {
   *           "stepType": "mysql",
   *           "parameter": {
   *             "connection": [
   *               {
   *                 "datasourceType": "mysql",
   *                 "datasource": "mysql_pub",
   *                 "selectedTables": [
   *                   {
   *                     "dbName": "mysql_db",
   *                     "schema": [
   *                       {
   *                         "tableInfos": [
   *                           {
   *                             "table": "molin_di_test_in2_pk_v3"
   *                           }
   *                         ]
   *                       }
   *                     ]
   *                   }
   *                 ]
   *               }
   *             ]
   *           },
   *           "name": "Reader",
   *           "category": "reader"
   *         },
   *         {
   *           "stepType": "holo",
   *           "parameter": {
   *             "datasource": "holo"
   *           },
   *           "name": "Writer",
   *           "category": "writer"
   *         }
   *       ]
   *     }
   * 
   * This parameter is required.
   * 
   * @example
   * {    "type": "realtime",     "version": "1.0",        "setting": {       "resourceGroup":       "S_res_group_280749521950784_1623033752022",        "scheduleResgroupId": 30003913,       "name": "openapi_realtime_solution_0813_1739",       "taskType": "oneclick_to_odps"     },     "steps": [         {             "stepType": "mysql",             "parameter": {                 "connection": [                     {                        "datasourceType": "mysql",                         "datasource": "mysql_pub",                         "table": [                             "xyx"                         ]                     }                 ]             },             "name": "Reader",             "category": "reader"         },         {             "stepType": "odps",             "parameter": {                 "datasource": "odps_first"             },             "name": "Writer",             "category": "writer"         }     ] }
   */
  taskParam?: string;
  /**
   * @remarks
   * The type of task that you want to create in Data Integration in asynchronous mode. Valid values:
   * 
   * *   DI_REALTIME: real-time synchronization task
   * *   DI_SOLUTION: another type of synchronization task
   * 
   * DataWorks allows you to create real-time synchronization tasks and other types of synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * *   DI_OFFLINE
   * *   DI_REALTIME
   * *   DI_SOLUTION
   * 
   * This parameter is required.
   * 
   * @example
   * DI_REALTIME
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      taskParam: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

