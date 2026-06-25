// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChangeOrderResponseBodyDataPipelines extends $dara.Model {
  /**
   * @remarks
   * The batch type.
   * 
   * @example
   * 0
   */
  batchType?: number;
  /**
   * @remarks
   * The number of parallel tasks in a batch.
   * 
   * @example
   * 0
   */
  parallelCount?: number;
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 0e4acf82-c9b1-4c1e-ac28-55776338****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The batch name.
   * 
   * @example
   * Batch 1 Change
   */
  pipelineName?: string;
  /**
   * @remarks
   * The start time of the batch.
   * 
   * @example
   * 1562831689704
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the batch. Valid values:
   * 
   * - **0**: Preparing
   * 
   * - **1**: In progress
   * 
   * - **2**: Succeeded
   * 
   * - **3**: Failed
   * 
   * - **6**: Terminated
   * 
   * - **8**: Awaiting manual confirmation
   * 
   * - **9**: Awaiting automatic confirmation
   * 
   * - **10**: Failed due to a system error
   * 
   * - **11**: Pending approval
   * 
   * - **12**: Approved and pending execution
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The time when the batch was last updated.
   * 
   * @example
   * 1562847178007
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      parallelCount: 'ParallelCount',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      startTime: 'StartTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'number',
      parallelCount: 'number',
      pipelineId: 'string',
      pipelineName: 'string',
      startTime: 'number',
      status: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * bbbbb-3fd370b2-3646-4ba6-91f9-9423e19ab0cd-*****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * app-test
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether gray tag routing is enabled.
   */
  applicationEnableGreyTagRoute?: boolean;
  /**
   * @remarks
   * The update strategy for the application.
   */
  applicationUpdateStrategy?: string;
  /**
   * @remarks
   * The approval ID for the operation.
   * 
   * @example
   * 67de0b39-a9d4-4c09-a170-cf438208****
   */
  approvalId?: string;
  /**
   * @remarks
   * Indicates whether to automatically release the change in batches. Valid values:
   * 
   * - **true**: The change is automatically released.
   * 
   * - **false**: The change is not automatically released.
   * 
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @remarks
   * The number of batches.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The release mode for batches. Valid values:
   * 
   * - **auto**: Automatic release.
   * 
   * - **manual**: Manual release.
   * 
   * @example
   * auto
   */
  batchType?: string;
  /**
   * @remarks
   * The wait time, in minutes, between batches in an automatic release.
   * 
   * @example
   * 0
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The change order ID.
   * 
   * @example
   * 765fa5c0-9ebb-4bb4-b383-1f885447**
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The change type. This parameter is a description of `CoTypeCode`.
   * 
   * @example
   * Batch Restart Instances
   */
  coType?: string;
  /**
   * @remarks
   * The change type code. Valid values:
   * 
   * - **CoBindSlb**: Binds an SLB instance.
   * 
   * - **CoUnbindSlb**: Unbinds an SLB instance.
   * 
   * - **CoCreateApp**: Creates an application.
   * 
   * - **CoDeleteApp**: Deletes an application.
   * 
   * - **CoDeploy**: Deploys an application.
   * 
   * - **CoRestartApplication**: Restarts an application.
   * 
   * - **CoRollback**: Rolls back an application.
   * 
   * - **CoScaleIn**: Scales in an application.
   * 
   * - **CoScaleOut**: Scales out an application.
   * 
   * - **CoStart**: Starts an application.
   * 
   * - **CoStop**: Stops an application.
   * 
   * - **CoRescaleApplicationVertically**: Modifies instance specifications.
   * 
   * - **CoDeployHistroy**: Rolls back to a historical version.
   * 
   * - **CoBindNas**: Binds a NAS file system.
   * 
   * - **CoUnbindNas**: Unbinds a NAS file system.
   * 
   * - **CoBatchStartApplication**: Starts applications in batches.
   * 
   * - **CoBatchStopApplication**: Stops applications in batches.
   * 
   * - **CoRestartInstances**: Restarts instances.
   * 
   * - **CoDeleteInstances**: Deletes instances.
   * 
   * - **CoScaleInAppWithInstances**: Scales in an application by specifying instances.
   * 
   * @example
   * CoRestartInstances
   */
  coTypeCode?: string;
  /**
   * @remarks
   * The time when the change order was created.
   * 
   * @example
   * 2020-12-17 21:06:45
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the current batch.
   * 
   * @example
   * 0e4acf82-c9b1-4c1e-ac28-55776338****
   */
  currentPipelineId?: string;
  /**
   * @remarks
   * The description of the change order.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The batch information.
   */
  pipelines?: DescribeChangeOrderResponseBodyDataPipelines[];
  /**
   * @remarks
   * The status of the change order. Valid values:
   * 
   * - **0**: Preparing
   * 
   * - **1**: In progress
   * 
   * - **2**: Succeeded
   * 
   * - **3**: Failed
   * 
   * - **6**: Terminated
   * 
   * - **8**: Awaiting manual confirmation
   * 
   * - **9**: Awaiting automatic confirmation
   * 
   * - **10**: Failed due to a system error
   * 
   * - **11**: Pending approval
   * 
   * - **12**: Approved and pending execution
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The substatus of the release order. This parameter indicates whether an exception occurred during the release. Valid values:
   * 
   * - **0**: Normal.
   * 
   * - **1**: Abnormal. For example, if a batch release fails, you must manually perform a rollback, leaving the release order in the In Progress state.
   * 
   * @example
   * 0
   */
  subStatus?: number;
  /**
   * @remarks
   * Indicates whether rollback is supported. Valid values:
   * 
   * - **true**: Rollback is supported.
   * 
   * - **false**: Rollback is not supported.
   * 
   * @example
   * false
   */
  supportRollback?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      applicationEnableGreyTagRoute: 'ApplicationEnableGreyTagRoute',
      applicationUpdateStrategy: 'ApplicationUpdateStrategy',
      approvalId: 'ApprovalId',
      auto: 'Auto',
      batchCount: 'BatchCount',
      batchType: 'BatchType',
      batchWaitTime: 'BatchWaitTime',
      changeOrderId: 'ChangeOrderId',
      coType: 'CoType',
      coTypeCode: 'CoTypeCode',
      createTime: 'CreateTime',
      currentPipelineId: 'CurrentPipelineId',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      pipelines: 'Pipelines',
      status: 'Status',
      subStatus: 'SubStatus',
      supportRollback: 'SupportRollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      applicationEnableGreyTagRoute: 'boolean',
      applicationUpdateStrategy: 'string',
      approvalId: 'string',
      auto: 'boolean',
      batchCount: 'number',
      batchType: 'string',
      batchWaitTime: 'number',
      changeOrderId: 'string',
      coType: 'string',
      coTypeCode: 'string',
      createTime: 'string',
      currentPipelineId: 'string',
      description: 'string',
      errorMessage: 'string',
      pipelines: { 'type': 'array', 'itemType': DescribeChangeOrderResponseBodyDataPipelines },
      status: 'number',
      subStatus: 'number',
      supportRollback: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.pipelines)) {
      $dara.Model.validateArray(this.pipelines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChangeOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code or POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A client-side error occurred.
   * 
   * - **5xx**: A server-side error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the change order.
   */
  data?: DescribeChangeOrderResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, this parameter is not returned.
   * 
   * - If the request fails, this parameter is returned. For more information, see the **error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID of the request. This ID is used for troubleshooting.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeChangeOrderResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

