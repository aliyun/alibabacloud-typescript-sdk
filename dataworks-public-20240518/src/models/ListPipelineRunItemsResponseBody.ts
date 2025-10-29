// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems extends $dara.Model {
  /**
   * @remarks
   * The deployment creation time.
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * The unique identifier of the deployment.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: number;
  /**
   * @remarks
   * The error message if the deployment failed.
   * 
   * @example
   * Error Message
   */
  message?: string;
  /**
   * @remarks
   * The time when the deployment was last modified.
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The deployment name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The FlowSpec information describing this deployment. For detailed specifications, see [FlowSpec](https://github.com/aliyun/dataworks-spec/blob/master/README_zh_CN.md).
   * 
   * @example
   * { "version": "1.1.0", "kind": "Node", "spec": { "nodes": [ { "recurrence": "Normal", "id": "860438872620113XXXX", "timeout": 0, "instanceMode": "T+1", "rerunMode": "Allowed", "rerunTimes": 3, "rerunInterval": 180000, "datasource": { "name": "odps_test", "type": "odps" }, "script": { "language": "odps-sql", "path": "XX/OpenAPI_Test/ODPS_SQL_Test", "runtime": { "command": "ODPS_SQL", "commandTypeId": 10 }, "content": "select now();", "id": "853573334108680XXXX" }, "trigger": { "type": "Scheduler", "id": "543680677872062XXXX", "cron": "00 00 00 * * ?", "startTime": "1970-01-01 00:00:00", "endTime": "9999-01-01 00:00:00", "timezone": "Asia/Shanghai", "delaySeconds": 0 }, "runtimeResource": { "resourceGroup": "S_res_group_XXXX_XXXX", "id": "623731286945488XXXX", "resourceGroupId": "7201XXXX" }, "name": "ODPS_SQL_Test", "owner": "110755000425XXXX", "metadata": { "owner": "110755000425XXXX", "ownerName": "XXXXX@test.XXX.com", "projectId": "307XXX" }, "inputs": { "nodeOutputs": [ { "data": "lwttest_standard_root", "artifactType": "NodeOutput" } ] }, "outputs": { "nodeOutputs": [ { "data": "860438872620113XXXX", "artifactType": "NodeOutput", "refTableName": "ODPS_SQL_Test", "isDefault": true } ] } } ], "flow": [ { "nodeId": "860438872620113XXXX", "depends": [ { "type": "Normal", "output": "lwttest_standard_root" } ] } ] }, "metadata": { "uuid": "860438872620113XXXX" } }
   */
  spec?: string;
  /**
   * @remarks
   * The deployment status. Valid values:
   * 
   * *   Init: Initializing
   * *   Running
   * *   Success
   * *   Fail
   * *   Termination
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * *   Node
   * *   WorkflowDefinition: Workflow definition.
   * *   Resource
   * *   Function: The object is a function.
   * 
   * @example
   * Node
   */
  type?: string;
  /**
   * @remarks
   * The deployment version.
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

export class ListPipelineRunItemsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of deployments.
   */
  pipelineRunItems?: ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems[];
  /**
   * @remarks
   * The total number of entries that match the conditions.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRunItems: 'PipelineRunItems',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRunItems: { 'type': 'array', 'itemType': ListPipelineRunItemsResponseBodyPagingInfoPipelineRunItems },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRunItems)) {
      $dara.Model.validateArray(this.pipelineRunItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination information.
   */
  pagingInfo?: ListPipelineRunItemsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use this ID to troubleshoot issues if errors occur.
   * 
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADE490
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListPipelineRunItemsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

