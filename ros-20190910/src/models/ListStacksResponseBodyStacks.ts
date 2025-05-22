// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStacksResponseBodyStacksOperationInfo } from "./ListStacksResponseBodyStacksOperationInfo";
import { ListStacksResponseBodyStacksTags } from "./ListStacksResponseBodyStacksTags";


export class ListStacksResponseBodyStacks extends $dara.Model {
  /**
   * @remarks
   * The time when the stack was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-10T06:44:36
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the stack. Valid values:
   * 
   * *   Enabled: Deletion protection is enabled for the stack.
   * *   Disabled: Deletion protection is disabled for the stack. In this case, you can delete the stack by using the console or calling the [DeleteStack](https://help.aliyun.com/document_detail/610812.html) operation.
   * 
   * >  Deletion protection of a nested stack is the same as that of its root stack.
   * 
   * @example
   * Disabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled when the stack fails to be created. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  disableRollback?: boolean;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack.
   * 
   * @example
   * 2022-03-10T06:46:36
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The supplementary information that is returned if an error occurs on a stack operation.
   * 
   * >  This parameter is returned only under specific conditions, and is returned together with at least one sub-parameter. For example, an error occurred when an API operation of another Alibaba Cloud service was called.
   */
  operationInfo?: ListStacksResponseBodyStacksOperationInfo;
  /**
   * @remarks
   * The ID of the parent stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  parentStackId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2frunvw7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the stack is a managed stack. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The name of the service to which the managed stack belongs.
   * 
   * @example
   * ACVS
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stack on which the most recent successful drift detection was performed. Valid values:
   * 
   * *   DRIFTED: The stack has drifted.
   * *   NOT_CHECKED: No successful drift detection is performed on the stack.
   * *   IN_SYNC: The stack is being synchronized.
   * 
   * @example
   * IN_SYNC
   */
  stackDriftStatus?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 67805444-a605-45ee-a57f-83908ff6****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The stack type. Valid values:
   * 
   * *   ROS: ROS stack. The stack is created by using a ROS template.
   * *   Terraform: Terraform stack. The stack is created by using a Terraform template.
   * 
   * @example
   * ROS
   */
  stackType?: string;
  /**
   * @remarks
   * The state of the stack.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the stack is in its current state.
   * 
   * @example
   * Stack CREATE completed successfully
   */
  statusReason?: string;
  /**
   * @remarks
   * The tags of the stack.
   */
  tags?: ListStacksResponseBodyStacksTags[];
  /**
   * @remarks
   * The timeout period for creating the stack. Unit: minutes.
   * 
   * @example
   * 60
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * The time when the stack was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-10T07:44:36
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      disableRollback: 'DisableRollback',
      driftDetectionTime: 'DriftDetectionTime',
      operationInfo: 'OperationInfo',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
      stackName: 'StackName',
      stackType: 'StackType',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      timeoutInMinutes: 'TimeoutInMinutes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'string',
      disableRollback: 'boolean',
      driftDetectionTime: 'string',
      operationInfo: ListStacksResponseBodyStacksOperationInfo,
      parentStackId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
      stackName: 'string',
      stackType: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListStacksResponseBodyStacksTags },
      timeoutInMinutes: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

