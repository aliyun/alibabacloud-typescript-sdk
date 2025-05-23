// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems extends $dara.Model {
  /**
   * @remarks
   * 发布包创建时间戳
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * Error Message
   */
  message?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * { "version": "1.1.0", "kind": "Node", "spec": { "nodes": [ { "recurrence": "Normal", "id": "860438872620113XXXX", "timeout": 0, "instanceMode": "T+1", "rerunMode": "Allowed", "rerunTimes": 3, "rerunInterval": 180000, "datasource": { "name": "odps_test", "type": "odps" }, "script": { "language": "odps-sql", "path": "XX/OpenAPI_Test/ODPS_SQL_Test", "runtime": { "command": "ODPS_SQL", "commandTypeId": 10 }, "content": "select now();", "id": "853573334108680XXXX" }, "trigger": { "type": "Scheduler", "id": "543680677872062XXXX", "cron": "00 00 00 * * ?", "startTime": "1970-01-01 00:00:00", "endTime": "9999-01-01 00:00:00", "timezone": "Asia/Shanghai", "delaySeconds": 0 }, "runtimeResource": { "resourceGroup": "S_res_group_XXXX_XXXX", "id": "623731286945488XXXX", "resourceGroupId": "7201XXXX" }, "name": "ODPS_SQL_Test", "owner": "110755000425XXXX", "metadata": { "owner": "110755000425XXXX", "ownerName": "XXXXX@test.XXX.com", "projectId": "307XXX" }, "inputs": { "nodeOutputs": [ { "data": "lwttest_standard_root", "artifactType": "NodeOutput" } ] }, "outputs": { "nodeOutputs": [ { "data": "860438872620113XXXX", "artifactType": "NodeOutput", "refTableName": "ODPS_SQL_Test", "isDefault": true } ] } } ], "flow": [ { "nodeId": "860438872620113XXXX", "depends": [ { "type": "Normal", "output": "lwttest_standard_root" } ] } ] }, "metadata": { "uuid": "860438872620113XXXX" } }
   */
  spec?: string;
  /**
   * @remarks
   * 发布流程状态
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Node
   */
  type?: string;
  /**
   * @remarks
   * 项目Id
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      name: 'Name',
      spec: 'Spec',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'number',
      message: 'string',
      modifyTime: 'number',
      name: 'string',
      spec: 'string',
      status: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

