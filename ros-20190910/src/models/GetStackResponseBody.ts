// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResponseBodyLogResourceLogsLogs extends $dara.Model {
  /**
   * @remarks
   * The content of a log entry associated with the resource.
   * 
   * @example
   * []
   */
  content?: string;
  /**
   * @remarks
   * The list of keywords for a log entry associated with the resource.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogResourceLogs extends $dara.Model {
  /**
   * @remarks
   * All logs associated with the resource.
   */
  logs?: GetStackResponseBodyLogResourceLogsLogs[];
  /**
   * @remarks
   * The resource name defined in the template.
   * 
   * @example
   * MyResourceCleaner
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogsLogs },
      resourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogTerraformLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * - apply
   * 
   * - plan
   * 
   * - destroy
   * 
   * - version
   * 
   * For more information about the commands, see [Command](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content that is output by the current command in the current output stream.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * - stdout: standard output.
   * 
   * - stderr: standard error.
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLog extends $dara.Model {
  /**
   * @remarks
   * The resource output logs. This parameter is returned when LogOption is set to Resource or All.
   * 
   * > Only certain resource types return resource logs, such as `ALIYUN::ROS::ResourceCleaner`.
   */
  resourceLogs?: GetStackResponseBodyLogResourceLogs[];
  /**
   * @remarks
   * The Terraform output logs. This parameter is returned only for Terraform stacks.
   * This parameter is returned when LogOption is not specified, or when LogOption is set to Stack or All.
   * 
   * > This parameter is not returned for stacks that are running. This parameter indicates the logs of the most recent operation (creation, continued creation, update, or deletion) on the stack.
   */
  terraformLogs?: GetStackResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      resourceLogs: 'ResourceLogs',
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogs },
      terraformLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogTerraformLogs },
    };
  }

  validate() {
    if(Array.isArray(this.resourceLogs)) {
      $dara.Model.validateArray(this.resourceLogs);
    }
    if(Array.isArray(this.terraformLogs)) {
      $dara.Model.validateArray(this.terraformLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyOperationInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation called on another cloud service.
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
   * The request ID of the API call to another cloud service.
   * 
   * @example
   * 071D6166-3F6B-5C7B-A1F0-0113FBB643A8
   */
  requestId?: string;
  /**
   * @remarks
   * The resource type on which the operation error occurred.
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

export class GetStackResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * ALIYUN::Region
   */
  parameterKey?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * cn-hangzhou
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyResourceProgressInProgressResourceDetails extends $dara.Model {
  /**
   * @remarks
   * The target progress value of the resource.
   * 
   * @example
   * 10
   */
  progressTargetValue?: number;
  /**
   * @remarks
   * The current progress value of the resource.
   * 
   * @example
   * 5
   */
  progressValue?: number;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * WaitCondition
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ROS::WaitCondition
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      progressTargetValue: 'ProgressTargetValue',
      progressValue: 'ProgressValue',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progressTargetValue: 'number',
      progressValue: 'number',
      resourceName: 'string',
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

export class GetStackResponseBodyResourceProgress extends $dara.Model {
  /**
   * @remarks
   * The number of resources that failed to be processed.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to EnabledIfCreateStack.
   * 
   * @example
   * 0
   */
  failedResourceCount?: number;
  /**
   * @remarks
   * The number of resources that are being processed.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to EnabledIfCreateStack.
   * 
   * @example
   * 1
   */
  inProgressResourceCount?: number;
  /**
   * @remarks
   * The list of progress details for resources that are being processed.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to EnabledIfCreateStack.
   */
  inProgressResourceDetails?: GetStackResponseBodyResourceProgressInProgressResourceDetails[];
  /**
   * @remarks
   * The number of resources that are pending processing.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to EnabledIfCreateStack.
   * 
   * @example
   * 0
   */
  pendingResourceCount?: number;
  /**
   * @remarks
   * The stack action progress percentage. Value range: 0 to 100.
   * 
   * Example: During stack creation, the value starts from 0 and increases. If the creation succeeds, the value reaches 100. If the creation fails and rollback begins, the value starts from another value (100 minus the progress value when the resource creation failed) and increases. When the rollback succeeds, the value reaches 100. During stack creation, this parameter indicates the progress of the creation action. During stack rollback, this parameter indicates the progress of the rollback action.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to PercentageOnly.
   * 
   * @example
   * 100
   */
  stackActionProgress?: number;
  /**
   * @remarks
   * The stack operation progress percentage. Value range: 0 to 100.
   * 
   * Example: During stack creation, the value starts from 0 and increases. If the creation succeeds, the value reaches 100. If the creation fails and rollback begins, the value decreases. When the rollback succeeds, the value reaches 0. This parameter indicates the overall progress of the creation operation, regardless of whether the stack status is creating or rolling back.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to PercentageOnly.
   * 
   * @example
   * 100
   */
  stackOperationProgress?: number;
  /**
   * @remarks
   * The number of resources that are successfully processed.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to EnabledIfCreateStack.
   * 
   * @example
   * 1
   */
  successResourceCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * > This parameter is returned only when ShowResourceProgress is set to EnabledIfCreateStack.
   * 
   * @example
   * 2
   */
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedResourceCount: 'FailedResourceCount',
      inProgressResourceCount: 'InProgressResourceCount',
      inProgressResourceDetails: 'InProgressResourceDetails',
      pendingResourceCount: 'PendingResourceCount',
      stackActionProgress: 'StackActionProgress',
      stackOperationProgress: 'StackOperationProgress',
      successResourceCount: 'SuccessResourceCount',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceCount: 'number',
      inProgressResourceCount: 'number',
      inProgressResourceDetails: { 'type': 'array', 'itemType': GetStackResponseBodyResourceProgressInProgressResourceDetails },
      pendingResourceCount: 'number',
      stackActionProgress: 'number',
      stackOperationProgress: 'number',
      successResourceCount: 'number',
      totalResourceCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inProgressResourceDetails)) {
      $dara.Model.validateArray(this.inProgressResourceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack.
   * 
   * @example
   * test
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

export class GetStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of resources on which drift detection has been performed.
   * > This parameter is returned only when the most recent drift detection on the stack was successful.
   * 
   * @example
   * 1
   */
  checkedStackResourceCount?: number;
  /**
   * @remarks
   * The time when the stack was created. The time is displayed in UTC+0 and follows the ISO 8601 standard without the trailing Z. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2020-09-16T08:21:40
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the stack. Valid values:
   * - Enabled: Deletion protection is enabled.
   * - Disabled: Deletion protection is disabled. In this case, you can release the stack by using the console or by calling the DeleteStack operation.
   * 
   * > The deletion protection mechanism of a nested stack is the same as that of the root stack.
   * 
   * @example
   * Disabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * Create a VPC.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether rollback is disabled when the stack fails to be created. Valid values:
   * 
   * - true: Rollback is disabled. No rollback is performed when the stack fails to be created.
   * - false (default): Rollback is enabled. Rollback is performed when the stack fails to be created.
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
   * 2020-09-16T09:21:40
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The interface description.
   * 
   * @example
   * {}
   */
  interface?: string;
  /**
   * @remarks
   * The stack-related output logs.
   */
  log?: GetStackResponseBodyLog;
  /**
   * @remarks
   * The number of resources on which drift detection has not been performed.
   * > This parameter is returned only when the most recent drift detection on the stack was successful.
   * 
   * @example
   * 1
   */
  notCheckedStackResourceCount?: number;
  /**
   * @remarks
   * The callback URLs for receiving stack events.
   */
  notificationURLs?: string[];
  /**
   * @remarks
   * The supplementary information that is returned when an error occurs during a stack operation.
   * 
   * > This property is returned only in specific cases and contains at least one sub-property. For example, an error occurs when another cloud service API is called.
   */
  operationInfo?: GetStackResponseBodyOperationInfo;
  /**
   * @remarks
   * The list of order IDs. This parameter is returned only when manual payment for subscription orders is configured during stack creation.
   */
  orderIds?: string[];
  /**
   * @remarks
   * The list of stack outputs.
   */
  outputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The stack parameters.
   */
  parameters?: GetStackResponseBodyParameters[];
  /**
   * @remarks
   * The parent stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  parentStackId?: string;
  /**
   * @remarks
   * The RAM role name. Resource Orchestration Service (ROS) assumes this role to create the stack and calls API operations on behalf of the user by using the credentials of the role.   
   * ROS always uses this role for all operations that are performed on the stack. As long as the user has the permission to perform operations on the stack, ROS uses this role even if the user does not have the permission to use the role. This ensures that the role grants the least privilege.  
   * If no value is specified, ROS uses the role that was previously associated with the stack. If no role is available, ROS uses a temporary credential generated from the user credentials.  
   * The RAM role name can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource processing progress.
   */
  resourceProgress?: GetStackResponseBodyResourceProgress;
  /**
   * @remarks
   * When the stack status is rollback failed, this field displays the root cause of the failure in the previous phase that triggered the rollback.
   * 
   * @example
   * Resource UPDATE failed: Exception: resources.FailToCreate: FailToCreate: reason
   */
  rollbackFailedRootReason?: string;
  /**
   * @remarks
   * The root stack ID. This parameter is returned only when the stack is a nested stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  rootStackId?: string;
  /**
   * @remarks
   * Indicates whether the stack is a managed stack. Valid values:  
   * 
   * - true: The stack is a managed stack.  
   * 
   * - false: The stack is not a managed stack.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The service name to which the managed stack belongs.
   * 
   * @example
   * ACVS
   */
  serviceName?: string;
  /**
   * @remarks
   * The drift status of the stack in the most recent successful drift detection. Valid values:
   * - DRIFTED: The stack has drifted.
   * - NOT_CHECKED: No successful drift detection has been performed on the stack.
   * - IN_SYNC: The stack is in sync.
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
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.   
   * The name can be up to 255 characters in length and must start with a digit or letter. It can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * @example
   * MyStack
   */
  stackName?: string;
  /**
   * @remarks
   * The stack type. Valid values:
   * - ROS: The stack uses an ROS template.
   * - Terraform: The stack uses a Terraform template.
   * 
   * @example
   * ROS
   */
  stackType?: string;
  /**
   * @remarks
   * The stack status. Valid values:  
   * - CREATE_IN_PROGRESS: The stack is being created.
   * - CREATE_FAILED: The stack failed to be created.
   * - CREATE_COMPLETE: The stack is created.
   * - UPDATE_IN_PROGRESS: The stack is being updated.
   * - UPDATE_FAILED: The stack failed to be updated.
   * - UPDATE_COMPLETE: The stack is updated.
   * - DELETE_IN_PROGRESS: The stack is being deleted.
   * - DELETE_FAILED: The stack failed to be deleted.
   * - DELETE_COMPLETE: The stack is deleted.
   * - CREATE_ROLLBACK_IN_PROGRESS: The stack creation is being rolled back.
   * - CREATE_ROLLBACK_FAILED: The stack creation failed to be rolled back.
   * - CREATE_ROLLBACK_COMPLETE: The stack creation is rolled back.
   * - ROLLBACK_IN_PROGRESS: The stack is being rolled back.
   * - ROLLBACK_FAILED: The stack failed to be rolled back.
   * - ROLLBACK_COMPLETE: The stack is rolled back.
   * - CHECK_IN_PROGRESS: The stack is being validated.
   * - CHECK_FAILED: The stack failed to be validated.
   * - CHECK_COMPLETE: The stack is validated.
   * - REVIEW_IN_PROGRESS: The stack is being reviewed.
   * - IMPORT_CREATE_IN_PROGRESS: The stack is being created through resource import.
   * - IMPORT_CREATE_FAILED: The stack failed to be created through resource import.
   * - IMPORT_CREATE_COMPLETE: The stack is created through resource import.
   * - IMPORT_CREATE_ROLLBACK_IN_PROGRESS: The stack creation through resource import is being rolled back.
   * - IMPORT_CREATE_ROLLBACK_FAILED: The stack creation through resource import failed to be rolled back.
   * - IMPORT_CREATE_ROLLBACK_COMPLETE: The stack creation through resource import is rolled back.
   * - IMPORT_UPDATE_IN_PROGRESS: The stack is being updated through resource import.
   * - IMPORT_UPDATE_FAILED: The stack failed to be updated through resource import.
   * - IMPORT_UPDATE_COMPLETE: The stack is updated through resource import.
   * - IMPORT_UPDATE_ROLLBACK_IN_PROGRESS: The stack update through resource import is being rolled back.
   * - IMPORT_UPDATE_ROLLBACK_FAILED: The stack update through resource import failed to be rolled back.
   * - IMPORT_UPDATE_ROLLBACK_COMPLETE: The stack update through resource import is rolled back.
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
  tags?: GetStackResponseBodyTags[];
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Create a VPC.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The template ID. This parameter is returned only when the template used by the stack is a private template or a shared template.
   * 
   * If the template is a shared template, the returned value is the same as the TemplateARN of the template.
   * 
   * @example
   * a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateId?: string;
  /**
   * @remarks
   * The resource scenario ID. This parameter is returned only when the template used by the stack is generated from a resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. This parameter is returned only when the template used by the stack is from a URL, including a web server (HTTP or HTTPS) or an Alibaba Cloud OSS bucket.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The template version. This parameter is returned only when the template used by the stack is a private template or a shared template.
   * 
   * If the template is a shared template, this parameter is returned only when VersionOption is set to AllVersions during sharing.
   * 
   * Valid values: v1 to v100.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The timeout period for creating the stack. Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  /**
   * @remarks
   * The time when the stack was last updated. The time is displayed in UTC+0 and follows the ISO 8601 standard without the trailing Z. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2020-09-17T08:21:40
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      checkedStackResourceCount: 'CheckedStackResourceCount',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      disableRollback: 'DisableRollback',
      driftDetectionTime: 'DriftDetectionTime',
      interface: 'Interface',
      log: 'Log',
      notCheckedStackResourceCount: 'NotCheckedStackResourceCount',
      notificationURLs: 'NotificationURLs',
      operationInfo: 'OperationInfo',
      orderIds: 'OrderIds',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentStackId: 'ParentStackId',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceProgress: 'ResourceProgress',
      rollbackFailedRootReason: 'RollbackFailedRootReason',
      rootStackId: 'RootStackId',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
      stackName: 'StackName',
      stackType: 'StackType',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedStackResourceCount: 'number',
      createTime: 'string',
      deletionProtection: 'string',
      description: 'string',
      disableRollback: 'boolean',
      driftDetectionTime: 'string',
      interface: 'string',
      log: GetStackResponseBodyLog,
      notCheckedStackResourceCount: 'number',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      operationInfo: GetStackResponseBodyOperationInfo,
      orderIds: { 'type': 'array', 'itemType': 'string' },
      outputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameters: { 'type': 'array', 'itemType': GetStackResponseBodyParameters },
      parentStackId: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceProgress: GetStackResponseBodyResourceProgress,
      rollbackFailedRootReason: 'string',
      rootStackId: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
      stackName: 'string',
      stackType: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': GetStackResponseBodyTags },
      templateDescription: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(Array.isArray(this.notificationURLs)) {
      $dara.Model.validateArray(this.notificationURLs);
    }
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(this.resourceProgress && typeof (this.resourceProgress as any).validate === 'function') {
      (this.resourceProgress as any).validate();
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

