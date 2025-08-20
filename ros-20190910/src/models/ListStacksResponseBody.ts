// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStacksResponseBodyStacksOperationInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation that belongs to another Alibaba Cloud service.
   * 
   * @example
   * DeleteSecurityGroup
   */
  action?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DependencyViolation
   */
  code?: string;
  /**
   * @remarks
   * The logical ID of the resource on which the operation error occurred.
   * 
   * @example
   * EcsSecurityGroup
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * There is still instance(s) in the specified security group.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request that is initiated to call the API operation of another Alibaba Cloud service.
   * 
   * @example
   * 071D6166-3F6B-5C7B-A1F0-0113FBB643A8
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the resource on which the operation error occurred.
   * 
   * @example
   * ALIYUN::ECS::SecurityGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      requestId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponseBodyStacksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack.
   * 
   * @example
   * acs:rm:rgId
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack.
   * 
   * @example
   * rg-aek2frunvw7****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListStacksResponseBody extends $dara.Model {
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
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBAC80B4-9C27-529D-BC9C-4155FA5CD7A7
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the stacks.
   */
  stacks?: ListStacksResponseBodyStacks[];
  /**
   * @remarks
   * The total number of stacks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stacks: 'Stacks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stacks: { 'type': 'array', 'itemType': ListStacksResponseBodyStacks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stacks)) {
      $dara.Model.validateArray(this.stacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

