// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrossProjectPipelineRunResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The termination time. This value is a UNIX timestamp in milliseconds. This parameter is returned only after the flow is terminated.
   * 
   * @example
   * 1788739260000
   */
  abolishTime?: number;
  /**
   * @remarks
   * The user who terminated the flow.
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
   * The cross-workspace deployment environment ID.
   * 
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @remarks
   * The deployment description.
   * 
   * @example
   * Publish objects that are published in the source project to the target project
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
   * The ID of the deployment object.
   * 
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the deployment object.
   * 
   * @example
   * object-1
   */
  objectName?: string;
  /**
   * @remarks
   * The object type of the publish object.
   * 
   * @example
   * ODPS_SQL
   */
  objectType?: string;
  /**
   * @remarks
   * The version of the deployment object.
   * 
   * @example
   * 7
   */
  objectVersion?: string;
  /**
   * @remarks
   * The cross-workspace deployment flow ID.
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
   * The status of the deployment flow. Valid values:
   * - Building: Building.
   * - Ready: Ready and waiting for execution.
   * - Running: Running.
   * - Termination: Terminated.
   * - Success: Execution succeeded.
   * - Fail: Execution failed.
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

export class GetCrossProjectPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response.
   * 
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PipelineRunId":"fcfd4160-e2ff-4603-9719-09128fe733df","DeploymentEnvironmentId":101,"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","Status":"Ready","Description":"Publish objects that are published in the source project to the target project","Creator":"creator","CreateTime":1788739200000}
   */
  data?: GetCrossProjectPipelineRunResponseBodyData;
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
      data: GetCrossProjectPipelineRunResponseBodyData,
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

