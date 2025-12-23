// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowRequest extends $dara.Model {
  /**
   * @example
   * ag-v7n2gp3vv3j****
   */
  alertGroupId?: string;
  /**
   * @example
   * NONE
   */
  alertStrategy?: string;
  taskDefinitionJsonValue?: string;
  taskRelationJsonValue?: string;
  /**
   * @example
   * 0 0 * * * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * PARALLEL
   */
  executionType?: string;
  /**
   * @example
   * END
   */
  failureStrategy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * wd-v7n2gp3vv3j****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * wg-acfmv4opbs****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleEndTime?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  scheduleStartTime?: string;
  /**
   * @example
   * OFFLINE
   */
  scheduleState?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"taskId":"t1","name":"t1","taskParams":{"rawScript":"echo 1"},"taskType":"SHELL"}]
   */
  taskDefinitionJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"preTaskId":"0", "postTaskId":"t1"}]
   */
  taskRelationJson?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * 10
   */
  timeout?: number;
  /**
   * @example
   * MEDIUM
   */
  workflowInstancePriority?: string;
  /**
   * @example
   * [{"prop":"key1","value":"value1"}]
   */
  workflowParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      alertGroupId: 'alertGroupId',
      alertStrategy: 'alertStrategy',
      taskDefinitionJsonValue: 'taskDefinitionJsonValue',
      taskRelationJsonValue: 'taskRelationJsonValue',
      cronExpr: 'cronExpr',
      description: 'description',
      executionType: 'executionType',
      failureStrategy: 'failureStrategy',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      resourceGroupId: 'resourceGroupId',
      scheduleEndTime: 'scheduleEndTime',
      scheduleStartTime: 'scheduleStartTime',
      scheduleState: 'scheduleState',
      taskDefinitionJson: 'taskDefinitionJson',
      taskRelationJson: 'taskRelationJson',
      timeZone: 'timeZone',
      timeout: 'timeout',
      workflowInstancePriority: 'workflowInstancePriority',
      workflowParams: 'workflowParams',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroupId: 'string',
      alertStrategy: 'string',
      taskDefinitionJsonValue: 'string',
      taskRelationJsonValue: 'string',
      cronExpr: 'string',
      description: 'string',
      executionType: 'string',
      failureStrategy: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      resourceGroupId: 'string',
      scheduleEndTime: 'string',
      scheduleStartTime: 'string',
      scheduleState: 'string',
      taskDefinitionJson: 'string',
      taskRelationJson: 'string',
      timeZone: 'string',
      timeout: 'number',
      workflowInstancePriority: 'string',
      workflowParams: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

