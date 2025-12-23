// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkflowInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * ag-n72kong0832****
   */
  alertGroupId?: string;
  /**
   * @example
   * NONE
   */
  alertStrategy?: string;
  /**
   * @example
   * c-047fa6bbe732****
   */
  emrClusterId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @example
   * false
   */
  isComplementData?: boolean;
  /**
   * @example
   * workflow_instance_name
   */
  name?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * wg-susqimrr649x****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  restartTime?: string;
  /**
   * @example
   * 1
   */
  runTimes?: number;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  scheduleTime?: string;
  /**
   * @example
   * 2024-03-27 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 0
   */
  timeout?: number;
  /**
   * @example
   * w-3q9jo749ne5****
   */
  workflowId?: string;
  /**
   * @example
   * wi-3q9jo749ne5****
   */
  workflowInstanceId?: string;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  /**
   * @example
   * 1
   */
  workflowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      emrClusterId: 'emrClusterId',
      endTime: 'endTime',
      failureStrategy: 'failureStrategy',
      isComplementData: 'isComplementData',
      name: 'name',
      requestId: 'requestId',
      resourceGroupId: 'resourceGroupId',
      restartTime: 'restartTime',
      runTimes: 'runTimes',
      scheduleTime: 'scheduleTime',
      startTime: 'startTime',
      status: 'status',
      timeout: 'timeout',
      workflowId: 'workflowId',
      workflowInstanceId: 'workflowInstanceId',
      workflowInstancePriority: 'workflowInstancePriority',
      workflowVersion: 'workflowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      emrClusterId: 'string',
      endTime: 'string',
      failureStrategy: 'string',
      isComplementData: 'boolean',
      name: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      restartTime: 'string',
      runTimes: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      timeout: 'number',
      workflowId: 'string',
      workflowInstanceId: 'string',
      workflowInstancePriority: 'string',
      workflowVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

