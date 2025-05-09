// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about the workflow. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow/).
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "CycleWorkflow",
   *     "spec": {
   *         "name": "Asynchronous_Workflow_Creation_Test",
   *         "id": "632647691239009XXXX",
   *         "type": "CycleWorkflow",
   *         "workflows": [
   *             {
   *                 "script": {
   *                     "path": "XX/OpenAPI_Test/Workflow_Test/Asynchronous_Workflow_Creation_Test",
   *                     "runtime": {
   *                         "command": "WORKFLOW"
   *                     }
   *                 },
   *                 "id": "632647691239009XXXX",
   *                 "trigger": {
   *                     "type": "Scheduler",
   *                     "cron": "00 03 00 * * ?",
   *                     "startTime": "1970-01-01 00:00:00",
   *                     "endTime": "9999-01-01 00:00:00",
   *                     "timezone": "Asia/Shanghai",
   *                     "delaySeconds": 0
   *                 },
   *                 "strategy": {
   *                     "timeout": 0,
   *                     "instanceMode": "T+1",
   *                     "rerunMode": "Allowed",
   *                     "rerunTimes": 3,
   *                     "rerunInterval": 180000,
   *                     "failureStrategy": "Break"
   *                 },
   *                 "name": "Asynchronous_Workflow_Creation_Test",
   *                 "inputs": {},
   *                 "outputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "632647691239009XXXX",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "Asynchronous_Workflow_Creation_Test"
   *                         }
   *                     ]
   *                 },
   *                 "nodes": [
   *                     {
   *                         "recurrence": "Normal",
   *                         "id": "742981001612325XXXX",
   *                         "timeout": 0,
   *                         "instanceMode": "T+1",
   *                         "rerunMode": "Allowed",
   *                         "rerunTimes": 3,
   *                         "rerunInterval": 180000,
   *                         "script": {
   *                             "path": "XX/OpenAPI_Test/Workflow_Test/Asynchronous_Workflow_Creation_Test/111",
   *                             "runtime": {
   *                                 "command": "ODPS_SQL"
   *                             },
   *                             "content": "select now();\\n"
   *                         },
   *                         "trigger": {
   *                             "type": "Scheduler",
   *                             "cron": "00 24 00 * * ?",
   *                             "startTime": "1970-01-01 00:00:00",
   *                             "endTime": "9999-01-01 00:00:00",
   *                             "timezone": "Asia/Shanghai",
   *                             "delaySeconds": 0
   *                         },
   *                         "name": "111",
   *                         "inputs": {},
   *                         "outputs": {
   *                             "nodeOutputs": [
   *                                 {
   *                                     "data": "742981001612325XXXX",
   *                                     "artifactType": "NodeOutput",
   *                                     "refTableName": "111"
   *                                 }
   *                             ]
   *                         }
   *                     },
   *                     {
   *                         "recurrence": "Normal",
   *                         "id": "595182137303408XXXX",
   *                         "timeout": 0,
   *                         "instanceMode": "T+1",
   *                         "rerunMode": "Allowed",
   *                         "rerunTimes": 3,
   *                         "rerunInterval": 180000,
   *                         "script": {
   *                             "path": "XX/OpenAPI_Test/Workflow_Test/Asynchronous_Workflow_Creation_Test/222",
   *                             "runtime": {
   *                                 "command": "ODPS_SQL"
   *                             },
   *                             "content": "select now();\\n select 1;"
   *                         },
   *                         "trigger": {
   *                             "type": "Scheduler",
   *                             "cron": "00 00 00 * * ?",
   *                             "startTime": "1970-01-01 00:00:00",
   *                             "endTime": "9999-01-01 00:00:00",
   *                             "timezone": "Asia/Shanghai",
   *                             "delaySeconds": 0
   *                         },
   *                         "name": "222",
   *                         "inputs": {},
   *                         "outputs": {
   *                             "nodeOutputs": [
   *                                 {
   *                                     "data": "595182137303408XXXX",
   *                                     "artifactType": "NodeOutput",
   *                                     "refTableName": "222"                                
   *                                 }
   *                             ]
   *                         }
   *                     }
   *                 ],
   *                 "dependencies": [
   *                     {
   *                         "nodeId": "595182137303408XXXX",
   *                         "depends": [
   *                             {
   *                                 "type": "Normal",
   *                                 "output": "742981001612325XXXX",
   *                                 "refTableName": "111"
   *                             }
   *                         ]
   *                     }
   *                 ]
   *             }
   *         ]
   *     }
   * }
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

