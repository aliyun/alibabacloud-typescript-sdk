// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChangeOrderResponseBodyDataPipelines } from "./DescribeChangeOrderResponseBodyDataPipelines";


export class DescribeChangeOrderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * bbbbb-3fd370b2-3646-4ba6-91f9-9423e19ab0cd-*****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * app-test
   */
  appName?: string;
  /**
   * @remarks
   * The approval ID of the change order.
   * 
   * @example
   * 67de0b39-a9d4-4c09-a170-cf438208****
   */
  approvalId?: string;
  /**
   * @remarks
   * Indicates whether SAE automatically releases the batches. Valid values:
   * 
   * *   **true**: SAE automatically releases the batches.
   * *   **false**: SAE does not automatically release the batches.
   * 
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @remarks
   * The number of release batches.
   * 
   * @example
   * 1
   */
  batchCount?: number;
  /**
   * @remarks
   * The processing method for the batches. Valid values:
   * 
   * *   **auto**: SAE automatically releases the batches.
   * *   **Manual**: You must manually release the batches.
   * 
   * @example
   * auto
   */
  batchType?: string;
  /**
   * @remarks
   * The interval between batches in a phased release. SAE automatically releases batches at the specified interval. Unit: minutes.
   * 
   * @example
   * 0
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The ID of the change order.
   * 
   * @example
   * 765fa5c0-9ebb-4bb4-b383-1f885447**
   */
  changeOrderId?: string;
  /**
   * @remarks
   * The change type, which corresponds to the **CoTypeCode** parameter.
   */
  coType?: string;
  /**
   * @remarks
   * The code of the change type. Valid values:
   * 
   * *   **CoBindSlb**: associates a Sever Load Balancer (SLB) instance with the application.
   * *   **CoUnbindSlb**: disassociates the SLB instance from the application.
   * *   **CoCreateApp**: creates the application.
   * *   **CoDeleteApp**: deletes the application.
   * *   **CoDeploy**: deploys the application.
   * *   **CoRestartApplication**: restarts the application.
   * *   **CoRollback**: rolls back the application.
   * *   **CoScaleIn**: scales in the application.
   * *   **CoScaleOut**: scales out the application.
   * *   **CoStart**: starts the application.
   * *   **CoStop**: stops the application.
   * *   **CoRescaleApplicationVertically**: modifies the instance type.
   * *   **CoDeployHistroy**: rolls back the application to a historical version.
   * *   **CoBindNas**: associates a NAS file system with the application.
   * *   **CoUnbindNas**: disassociates the NAS file system from the application.
   * *   **CoBatchStartApplication**: starts multiple applications concurrently.
   * *   **CoBatchStopApplication**: stops multiple applications concurrently.
   * *   **CoRestartInstances**: restarts the instances.
   * *   **CoDeleteInstances**: deletes the instances.
   * *   **CoScaleInAppWithInstances**: reduces the specified number of application instances.
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
   * *   **0**: The change order is being prepared.
   * *   **1**: The change order is being executed.
   * *   **2**: The change order was executed.
   * *   **3**: The change order failed to be executed.
   * *   **6**: The change order was terminated.
   * *   **8**: The execution process is pending. You must manually release the batches.
   * *   **9**: The execution process is pending. SAE will automatically release the batches.
   * *   **10**: The execution failed due to a system exception.
   * *   **11**: The change order is pending approval.
   * *   **12**: The change order is approved and is pending execution.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The substatus of the change order. This parameter indicates whether an exception occurred while the change order was being executed. Valid values:
   * 
   * *   **0**: No exception occurred.
   * *   **1**: An exception occurred. For example, if an error occurs during a phased release, you must manually roll back the application. In this case, the change order cannot be completed, so the Status parameter is still displayed as "1", which indicates that the change order is being executed. You can check the value of this parameter to determine whether an exception occurs.
   * 
   * @example
   * 0
   */
  subStatus?: number;
  /**
   * @remarks
   * Indicates whether the application can be rolled back. Valid values:
   * 
   * *   **true**: The application can be rolled back.
   * *   **false**: The application cannot be rolled back.
   * 
   * @example
   * false
   */
  supportRollback?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
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

