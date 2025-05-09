// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeResponseBodyNode extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * The time when the node was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  name?: string;
  /**
   * @remarks
   * The owner of the node.
   * 
   * @example
   * 196596664824XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The FlowSpec field information about this node. For more information, see [FlowSpec](https://github.com/aliyun/alibabacloud-dataworks-tool-dflow).
   * 
   * @example
   * {
   *     "version": "1.1.0",
   *     "kind": "Node",
   *     "spec": {
   *         "nodes": [
   *             {
   *                 "recurrence": "Normal",
   *                 "id": "860438872620113XXXX",
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
   *                     "language": "odps-sql",
   *                     "path": "XX/OpenAPI_Test/ODPS_SQL_Test",
   *                     "runtime": {
   *                         "command": "ODPS_SQL",
   *                         "commandTypeId": 10
   *                     },
   *                     "content": "select now();",
   *                     "id": "853573334108680XXXX"
   *                 },
   *                 "trigger": {
   *                     "type": "Scheduler",
   *                     "id": "543680677872062XXXX",
   *                     "cron": "00 00 00 * * ?",
   *                     "startTime": "1970-01-01 00:00:00",
   *                     "endTime": "9999-01-01 00:00:00",
   *                     "timezone": "Asia/Shanghai",
   *                     "delaySeconds": 0
   *                 },
   *                 "runtimeResource": {
   *                     "resourceGroup": "S_res_group_XXXX_XXXX",
   *                     "id": "623731286945488XXXX",
   *                     "resourceGroupId": "7201XXXX"
   *                 },
   *                 "name": "ODPS_SQL_Test",
   *                 "owner": "110755000425XXXX",
   *                 "metadata": {
   *                     "owner": "110755000425XXXX",
   *                     "ownerName": "XXXXX@test.XXX.com",
   *                     "projectId": "307XXX"
   *                 },
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
   *                             "data": "860438872620113XXXX",
   *                             "artifactType": "NodeOutput",
   *                             "refTableName": "ODPS_SQL_Test",
   *                             "isDefault": true
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
   *                         "output": "lwttest_standard_root"
   *                     }
   *                 ]
   *             }
   *         ]
   *     },
   *     "metadata": {
   *         "uuid": "860438872620113XXXX"
   *     }
   * }
   */
  spec?: string;
  /**
   * @remarks
   * The Id of the scheduled task after the node is published.
   * 
   * @example
   * 700006680527
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      spec: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

