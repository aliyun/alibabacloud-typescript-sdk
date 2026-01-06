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
   * The unique identifier of the Data Studio node.
   * 
   * >  Prior to SDK version 8.0.0, this field is of type Long. In SDK version 8.0.0 and later, it is of type String. This change does not affect the normal use of the SDK. The parameter is returned based on the type defined in the SDK. Compilation failures caused by the type change may occur only when you upgrade the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
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
   * The ID of the corresponding scheduling task after the node is published.
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
      id: 'string',
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

export class GetNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data Studio node details.
   */
  node?: GetNodeResponseBodyNode;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: GetNodeResponseBodyNode,
      requestId: 'string',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

