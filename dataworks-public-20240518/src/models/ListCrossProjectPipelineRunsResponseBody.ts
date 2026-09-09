// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossProjectPipelineRunsResponseBodyDataPipelineRuns extends $dara.Model {
  /**
   * @remarks
   * The termination time. This value is a UNIX timestamp in milliseconds. This parameter is returned only after the pipeline is terminated.
   * 
   * @example
   * 1788739260000
   */
  abolishTime?: number;
  /**
   * @remarks
   * The user who terminated the pipeline.
   * 
   * @example
   * operator
   */
  abolisher?: string;
  /**
   * @remarks
   * The change type.
   * 
   * @example
   * ADD
   */
  changeType?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788739200000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * creator
   */
  creator?: string;
  /**
   * @remarks
   * The cross-workspace publish environment ID.
   * 
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @remarks
   * The description of the publish operation.
   * 
   * @example
   * Publish objects that have been published in the source project to the target project
   */
  description?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DeploymentFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Deployment failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The execution time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788739260000
   */
  executeTime?: number;
  /**
   * @remarks
   * The executor.
   * 
   * @example
   * executor
   */
  executor?: string;
  /**
   * @remarks
   * The completion time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788739320000
   */
  finishTime?: number;
  /**
   * @remarks
   * The publish object ID.
   * 
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the published object.
   * 
   * @example
   * object-1
   */
  objectName?: string;
  /**
   * @remarks
   * The publish object type.
   * 
   * @example
   * ODPS_SQL
   */
  objectType?: string;
  /**
   * @remarks
   * The version of the published object.
   * 
   * @example
   * 7
   */
  objectVersion?: string;
  /**
   * @remarks
   * The ID of the cross-workspace publish pipeline.
   * 
   * @example
   * fcfd4160-e2ff-4603-9719-09128fe733df
   */
  pipelineRunId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * The publish flow status. Valid values:
   * - Building: Building.
   * - Ready: Ready and waiting for execution.
   * - Running: Running.
   * - Termination: Terminated.
   * - Success: Succeeded.
   * - Fail: Failed.
   * 
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      abolishTime: 'AbolishTime',
      abolisher: 'Abolisher',
      changeType: 'ChangeType',
      createTime: 'CreateTime',
      creator: 'Creator',
      deploymentEnvironmentId: 'DeploymentEnvironmentId',
      description: 'Description',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      executor: 'Executor',
      finishTime: 'FinishTime',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      pipelineRunId: 'PipelineRunId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abolishTime: 'number',
      abolisher: 'string',
      changeType: 'string',
      createTime: 'number',
      creator: 'string',
      deploymentEnvironmentId: 'number',
      description: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      executor: 'string',
      finishTime: 'number',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      pipelineRunId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectPipelineRunsResponseBodyData extends $dara.Model {
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
   * The list of cross-workspace publish pipelines that match the query conditions.
   * 
   * @example
   * [{"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PipelineRunId":"fcfd4160-e2ff-4603-9719-09128fe733df","DeploymentEnvironmentId":101,"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","Status":"Ready","Description":"Publish objects that have been published in the source project to the target project","Creator":"creator","CreateTime":1788739200000}]
   */
  pipelineRuns?: ListCrossProjectPipelineRunsResponseBodyDataPipelineRuns[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRuns: 'PipelineRuns',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRuns: { 'type': 'array', 'itemType': ListCrossProjectPipelineRunsResponseBodyDataPipelineRuns },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRuns)) {
      $dara.Model.validateArray(this.pipelineRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectPipelineRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response data.
   * 
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PageNumber":1,"PageSize":10,"TotalCount":1,"PipelineRuns":[{"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PipelineRunId":"fcfd4160-e2ff-4603-9719-09128fe733df","DeploymentEnvironmentId":101,"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","Status":"Ready","Description":"Publish objects that have been published in the source project to the target project","Creator":"creator","CreateTime":1788739200000}]}
   */
  data?: ListCrossProjectPipelineRunsResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot this API call.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCrossProjectPipelineRunsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

