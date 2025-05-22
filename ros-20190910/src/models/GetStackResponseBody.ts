// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackResponseBodyLog } from "./GetStackResponseBodyLog";
import { GetStackResponseBodyOperationInfo } from "./GetStackResponseBodyOperationInfo";
import { GetStackResponseBodyParameters } from "./GetStackResponseBodyParameters";
import { GetStackResponseBodyResourceProgress } from "./GetStackResponseBodyResourceProgress";
import { GetStackResponseBodyTags } from "./GetStackResponseBodyTags";


export class GetStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of resources on which drift detection was performed.
   * 
   * >  This parameter is returned only if the most recent drift detection on the stack was successful.
   * 
   * @example
   * 1
   */
  checkedStackResourceCount?: number;
  /**
   * @remarks
   * The time when the stack was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2020-09-16T08:21:40
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the stack. Valid values:
   * 
   * *   Enabled: Deletion protection is enabled for the stack.
   * *   Disabled: Deletion protection is disabled for the stack. You can delete the stack by using the ROS console or by calling the DeleteStack operation.
   * 
   * >  Deletion protection of a nested stack is the same as deletion protection of its root stack.
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
   * 2020-09-16T09:21:40
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The description of the console user interface (UI).
   * 
   * @example
   * {}
   */
  interface?: string;
  /**
   * @remarks
   * The log of the stack.
   */
  log?: GetStackResponseBodyLog;
  /**
   * @remarks
   * The number of resources on which drift detection was not performed.
   * 
   * >  This parameter is returned only if the most recent drift detection on the stack was successful.
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
   * The supplementary information that is returned if an error occurs on a stack operation.
   * 
   * >  This parameter is returned together with at least one sub-parameter and only under specific conditions. For example, the supplementary information is returned when an API operation of another Alibaba Cloud service fails to be called.
   */
  operationInfo?: GetStackResponseBodyOperationInfo;
  /**
   * @remarks
   * The order IDs. This parameter is returned only if you configured manual payment when you created a subscription stack.
   */
  orderIds?: string[];
  /**
   * @remarks
   * The outputs of the stack.
   */
  outputs?: { [key: string]: any }[];
  /**
   * @remarks
   * The parameters of the stack.
   */
  parameters?: GetStackResponseBodyParameters[];
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
   * The name of the Resource Access Management (RAM) role. ROS assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the RAM role to perform operations on the stack. If you have permissions to perform operations on the stack, ROS assumes the RAM role even if you do not have permissions to use the RAM role. You must make sure that permissions are granted to the RAM role based on the principle of least privilege.\\
   * If this parameter is not specified, ROS uses the existing role that is associated with the stack. If no roles are available, ROS uses a temporary credential that is generated from the credentials of your account.\\
   * The RAM role name can be up to 64 characters in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
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
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource creation progress.
   */
  resourceProgress?: GetStackResponseBodyResourceProgress;
  /**
   * @remarks
   * 当资源栈状态为回滚失败时，该字段展示导致回滚的前一阶段执行失败的原因。
   * 
   * @example
   * Resource UPDATE failed: Exception: resources.FailToCreate: FailToCreate: reason
   */
  rollbackFailedRootReason?: string;
  /**
   * @remarks
   * The ID of the root stack. This parameter is returned if the specified stack is a nested stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf692****
   */
  rootStackId?: string;
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
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or letter.
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
   * The state of the stack. Valid values:
   * 
   * *   CREATE_IN_PROGRESS: The stack is being created.
   * *   CREATE_FAILED: The stack failed to be created.
   * *   CREATE_COMPLETE: The stack is created.
   * *   UPDATE_IN_PROGRESS: The stack is being updated.
   * *   UPDATE_FAILED: The stack failed to be updated.
   * *   UPDATE_COMPLETE: The stack is updated.
   * *   DELETE_IN_PROGRESS: The stack is being deleted.
   * *   DELETE_FAILED: The stack failed to be deleted.
   * *   CREATE_ROLLBACK_IN_PROGRESS: The resources are being rolled back after the stack failed to be created.
   * *   CREATE_ROLLBACK_FAILED: The resources failed to be rolled back after the stack failed to be created.
   * *   CREATE_ROLLBACK_COMPLETE: The resources are rolled back after the stack failed to be created.
   * *   ROLLBACK_IN_PROGRESS: The resources of the stack are being rolled back.
   * *   ROLLBACK_FAILED: The resources of the stack failed to be rolled back.
   * *   ROLLBACK_COMPLETE: The resources of the stack are rolled back.
   * *   CHECK_IN_PROGRESS: The stack is being validated.
   * *   CHECK_FAILED: The stack failed to be validated.
   * *   CHECK_COMPLETE: The stack is validated.
   * *   REVIEW_IN_PROGRESS: The stack is being reviewed.
   * *   IMPORT_CREATE_IN_PROGRESS: The stack is being created by using imported resources.
   * *   IMPORT_CREATE_FAILED: The stack failed to be created by using imported resources.
   * *   IMPORT_CREATE_COMPLETE: The stack is created by using imported resources.
   * *   IMPORT_CREATE_ROLLBACK_IN_PROGRESS: The resources are being rolled back after the stack failed to be created by using imported resources.
   * *   IMPORT_CREATE_ROLLBACK_FAILED: The resources failed to be rolled back after the stack failed to be created by using imported resources.
   * *   IMPORT_CREATE_ROLLBACK_COMPLETE: The resources are rolled back after the stack failed to be created by using imported resources.
   * *   IMPORT_UPDATE_IN_PROGRESS: The stack is being updated by using imported resources.
   * *   IMPORT_UPDATE_FAILED: The stack failed to be updated by using imported resources.
   * *   IMPORT_UPDATE_COMPLETE: The stack is updated by using imported resources.
   * *   IMPORT_UPDATE_ROLLBACK_IN_PROGRESS: The resources are being rolled back after the stack failed to be updated by using imported resources.
   * *   IMPORT_UPDATE_ROLLBACK_FAILED: The resources failed to be rolled back after the stack failed to be updated by using imported resources.
   * *   IMPORT_UPDATE_ROLLBACK_COMPLETE: The resources are rolled back after the stack failed to be updated by using imported resources.
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
   * The description of the template.
   * 
   * @example
   * Create a VPC.
   */
  templateDescription?: string;
  /**
   * @remarks
   * The template ID. This parameter is returned only if the current stack template is a custom template or shared template.
   * 
   * If the template is a shared template, the value of this parameter is the same as the value of TemplateARN.
   * 
   * @example
   * a52f81be-496f-4e1c-a286-8852ab54****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the resource scenario. This parameter is returned only if the current template of the stack is generated from a resource scenario.
   * 
   * @example
   * ts-7f7a704cf71c49a6****
   */
  templateScratchId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. This parameter is returned only if the current template of the stack is from a URL. The URL can point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter is returned only if the current stack template is a custom template or shared template.
   * 
   * If the template is a shared template, this parameter is returned only if VersionOption is set to AllVersions.
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
   * The time when the stack was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
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

