// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Data Studio node.
   * 
   * >  This field is of the Long type in SDK versions prior to 8.0.0, and of the String type in SDK versions 8.0.0 and later. This change does not affect normal SDK usage; the parameter will still be returned according to the type defined in the SDK. However, compilation failures may occur due to the type change only when upgrading the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the Data Studio node.
   * 
   * >  This field is of the Long type in SDK versions prior to 8.0.0, and of the String type in SDK versions 8.0.0 and later. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "Node",
   *     "spec": {
   *         "nodes": [
   *             {
   *                 "id": "860438872620113XXXX",
   *                 "recurrence": "Normal",
   *                 "timeout": 0,
   *                 "instanceMode": "T+1",
   *                 "rerunMode": "Allowed",
   *                 "rerunTimes": 3,
   *                 "rerunInterval": 180000,
   *                 "datasource": {
   *                     "name": "odps_test",
   *                     "type": "odps"
   *                 },
   *                 "script": {
   *                     "path": "XX/OpenAPI_Test/odpsSQL_Test",
   *                     "runtime": {
   *                         "command": "ODPS_SQL"
   *                     },
   *                     "content": "select now();"
   *                 },
   *                 "trigger": {
   *                     "type": "Scheduler",
   *                     "cron": "00 00 00 * * ?",
   *                     "startTime": "1970-01-01 00:00:00",
   *                     "endTime": "9999-01-01 00:00:00",
   *                     "timezone": "Asia/Shanghai",
   *                     "delaySeconds": 0
   *                 },
   *                 "runtimeResource": {
   *                     "resourceGroup": "S_res_group_XXXX_XXXX"
   *                 },
   *                 "name": "odpsSQL_Test",
   *                 "inputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "lwttest_standard_root",
   *                             "artifactType": "NodeOutput"
   *                         }
   *                     ]
   *                 },
   *                 "outputs": {
   *                     "nodeOutputs": [
   *                         {
   *                             "data": "output_data",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "odpsSQL_Test"
   *                         }
   *                     ]
   *                 }
   *             }
   *         ],
   *         "flow": [
   *             {
   *                 "nodeId": "860438872620113XXXX",
   *                 "depends": [
   *                     {
   *                         "type": "Normal",
   *                         "output": "project_root"
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
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

