// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecordsOperator extends $dara.Model {
  /**
   * @remarks
   * The ID of the RAM entity.
   * 
   * @example
   * 277401963826235***
   */
  principalId?: string;
  /**
   * @remarks
   * The name RAM entity that servers as the operator.
   * 
   * @example
   * approver
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the RAM entity. Valid values:
   * 
   * *   RamUser: a RAM user.
   * *   RamRole: a RAM role.
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecords extends $dara.Model {
  /**
   * @remarks
   * The operation that is performed by the operator on the plan. Valid values:
   * 
   * *   Submit: submits the plan.
   * *   Cancel: cancels the plan.
   * *   Approve: approves the plan.
   * *   reject: rejectes the plan.
   * 
   * @example
   * Approve
   */
  approvalAction?: string;
  /**
   * @remarks
   * The approval comment of the operator.
   * 
   * @example
   * Agreed.
   */
  comment?: string;
  /**
   * @remarks
   * The time when the operation was performed.
   * 
   * @example
   * 2022-03-22T05:56:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The RAM entities that have performed operations on the plan.
   */
  operator?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecordsOperator;
  static names(): { [key: string]: string } {
    return {
      approvalAction: 'ApprovalAction',
      comment: 'Comment',
      createTime: 'CreateTime',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalAction: 'string',
      comment: 'string',
      createTime: 'string',
      operator: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecordsOperator,
    };
  }

  validate() {
    if(this.operator && typeof (this.operator as any).validate === 'function') {
      (this.operator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasksOperator extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM entity.
   * 
   * @example
   * approver
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the RAM entity. Valid values:
   * 
   * *   RamUser: a RAM user.
   * *   RamRole: a RAM role.
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasks extends $dara.Model {
  /**
   * @remarks
   * The RAM entities that can perform operations on the plan.
   */
  operator?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasksOperator;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasksOperator,
    };
  }

  validate() {
    if(this.operator && typeof (this.operator as any).validate === 'function') {
      (this.operator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivities extends $dara.Model {
  /**
   * @remarks
   * The name of the operation that is being performed by the plan.
   * 
   * @example
   * ApproverNode-1
   */
  activityName?: string;
  /**
   * @remarks
   * The tasks that are pending for review.
   */
  tasks?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasks[];
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      tasks: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetail extends $dara.Model {
  /**
   * @remarks
   * The operation records.
   */
  operationRecords?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecords[];
  /**
   * @remarks
   * The operations that are being performed by the plan.
   */
  todoTaskActivities?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivities[];
  static names(): { [key: string]: string } {
    return {
      operationRecords: 'OperationRecords',
      todoTaskActivities: 'TodoTaskActivities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationRecords: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecords },
      todoTaskActivities: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivities },
    };
  }

  validate() {
    if(Array.isArray(this.operationRecords)) {
      $dara.Model.validateArray(this.operationRecords);
    }
    if(Array.isArray(this.todoTaskActivities)) {
      $dara.Model.validateArray(this.todoTaskActivities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailAssignedApprovers extends $dara.Model {
  /**
   * @remarks
   * The name of the RAM entity of the plan approver.
   * 
   * @example
   * approver
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the Resource Access Management (RAM) entity of the plan approver. Valid values:
   * 
   * *   RamUser: a RAM user.
   * *   RamRole: a RAM role.
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the input parameter for the template.
   * 
   * @example
   * instance_type
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the input parameter for the template.
   * 
   * @example
   * ecs.s6-c1m1.small
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

export class GetProvisionedProductPlanResponseBodyPlanDetailTags extends $dara.Model {
  /**
   * @remarks
   * The key of the custom tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom tag.
   * 
   * @example
   * v1
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

export class GetProvisionedProductPlanResponseBodyPlanDetail extends $dara.Model {
  /**
   * @remarks
   * The approval details of the plan.
   */
  approvalDetail?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetail;
  /**
   * @remarks
   * An array that consists of reviewers.
   */
  assignedApprovers?: GetProvisionedProductPlanResponseBodyPlanDetailAssignedApprovers[];
  /**
   * @remarks
   * The time when the plan was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-23T09:46:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the plan.
   * 
   * @example
   * Create an ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The purpose of the plan. Valid values:
   * 
   * *   LaunchProduct: launches the product.
   * *   UpdateProvisionedProduct: updates the information about the product instance.
   * *   TerminateProvisionedProduct: terminates the product instance.
   * 
   * @example
   * LaunchProduct
   */
  operationType?: string;
  /**
   * @remarks
   * The ID of the RAM entity to which the plan belongs.
   * 
   * @example
   * 27740196382623****
   */
  ownerPrincipalId?: string;
  /**
   * @remarks
   * The name of the RAM entity to which the plan belongs.
   * 
   * @example
   * endUser
   */
  ownerPrincipalName?: string;
  /**
   * @remarks
   * The type of the RAM entity to which the plan belongs. Valid values:
   * 
   * *   RamUser: a RAM user
   * *   RamRole: a RAM role
   * 
   * @example
   * RamUser
   */
  ownerPrincipalType?: string;
  /**
   * @remarks
   * An array that consists of the parameters in the template.
   */
  parameters?: GetProvisionedProductPlanResponseBodyPlanDetailParameters[];
  /**
   * @remarks
   * The ID of the plan.
   * 
   * @example
   * plan-bp1jvmdk2k****
   */
  planId?: string;
  /**
   * @remarks
   * The name of the plan.
   * 
   * @example
   * DEMO-ECS instance
   */
  planName?: string;
  /**
   * @remarks
   * The type of the plan.
   * 
   * The value is fixed as Ros, which indicates Resource Orchestration Service (ROS).
   * 
   * @example
   * Ros
   */
  planType?: string;
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The ID of the product instance.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  /**
   * @remarks
   * The name of the product instance.
   * 
   * @example
   * DEMO-ECS instance
   */
  provisionedProductName?: string;
  /**
   * @remarks
   * The ID of the ROS stack.
   * 
   * @example
   * 137e31df-3754-40b4-be2f-c793ad84****
   */
  stackId?: string;
  /**
   * @remarks
   * The ID of the region to which the ROS stack belongs.
   * 
   * @example
   * cn-hangzhou
   */
  stackRegionId?: string;
  /**
   * @remarks
   * The state of the plan. Valid values:
   * 
   * *   PreviewInProgress: The plan is being prechecked.
   * *   PreviewSuccess: The precheck is successful.
   * *   PreviewFailed: The precheck fails.
   * *   ApplicationInProgress: The plan is being approved.
   * *   ApplicationApproved: The plan is approved.
   * *   ApplicationRejected: The approval is rejected.
   * *   ExecuteInProgress: The plan is being run.
   * *   ExecuteSuccess: The plan is run.
   * *   ExecuteFailed: The plan fails to be run.
   * *   Canceled: The plan is canceled.
   * 
   * @example
   * PreviewSuccess
   */
  status?: string;
  /**
   * @remarks
   * The message returned for the state.
   * 
   * > This parameter is returned only when PreviewFailed or ExecuteFailed is returned for Status.
   * 
   * @example
   * Create stack failed: Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...
   */
  statusMessage?: string;
  /**
   * @remarks
   * An array that consists of custom tags.
   */
  tags?: GetProvisionedProductPlanResponseBodyPlanDetailTags[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the plan belongs.
   * 
   * @example
   * 146611588617****
   */
  uid?: string;
  /**
   * @remarks
   * The last time when the task was modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-23T09:47:29Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      assignedApprovers: 'AssignedApprovers',
      createTime: 'CreateTime',
      description: 'Description',
      operationType: 'OperationType',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalName: 'OwnerPrincipalName',
      ownerPrincipalType: 'OwnerPrincipalType',
      parameters: 'Parameters',
      planId: 'PlanId',
      planName: 'PlanName',
      planType: 'PlanType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      stackId: 'StackId',
      stackRegionId: 'StackRegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      uid: 'Uid',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetail,
      assignedApprovers: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailAssignedApprovers },
      createTime: 'string',
      description: 'string',
      operationType: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalName: 'string',
      ownerPrincipalType: 'string',
      parameters: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailParameters },
      planId: 'string',
      planName: 'string',
      planType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailTags },
      uid: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.approvalDetail && typeof (this.approvalDetail as any).validate === 'function') {
      (this.approvalDetail as any).validate();
    }
    if(Array.isArray(this.assignedApprovers)) {
      $dara.Model.validateArray(this.assignedApprovers);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
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

export class GetProvisionedProductPlanResponseBodyProductDetail extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-12T06:10:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the product.
   * 
   * @example
   * This is a product description.
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the product.
   * 
   * @example
   * acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****
   */
  productArn?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * DEMO-Create an ECS instance
   */
  productName?: string;
  /**
   * @remarks
   * The type of the product.
   * 
   * The value is fixed as Ros, which indicates ROS.
   * 
   * @example
   * Ros
   */
  productType?: string;
  /**
   * @remarks
   * The provider of the product.
   * 
   * @example
   * IT team
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyProductVersionDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the product version is visible to end users. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The time when the product version was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-12T06:10:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the product version.
   * 
   * @example
   * The description of the product version.
   */
  description?: string;
  /**
   * @remarks
   * The recommendation information. Valid values:
   * 
   * *   Default: No recommendation information is provided. This is the default value.
   * *   Recommended: the recommendation version.
   * *   Latest: the latest version.
   * *   Deprecated: the version that is about to be deprecated.
   * 
   * @example
   * Default
   */
  guidance?: string;
  /**
   * @remarks
   * The ID of the product to which the product version belongs.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The name for the version of the product.
   * 
   * @example
   * 1.0.0
   */
  productVersionName?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * The value is fixed as RosTerraformTemplate, which indicates that the Terraform template is supported by ROS.
   * 
   * @example
   * RosTerraformTemplate
   */
  templateType?: string;
  /**
   * @remarks
   * The URL of the template.
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      createTime: 'CreateTime',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      createTime: 'string',
      description: 'string',
      guidance: 'string',
      productId: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      templateType: 'string',
      templateUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyResourceChanges extends $dara.Model {
  /**
   * @remarks
   * The action that is performed on the resource. Valid values:
   * 
   * *   Add
   * *   Modify
   * *   Remove
   * *   None
   * 
   * @example
   * Add
   */
  action?: string;
  /**
   * @remarks
   * The logical ID of the resource.
   * 
   * @example
   * instance
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * >  This parameter is returned if the value of Action is Modify or Remove.
   * 
   * @example
   * i-bp13lmam3qd9q6il****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * Indicates whether a replacement update is performed on the template. Valid values:
   * 
   * *   True: A replacement update is performed on the template.
   * *   False: A change is made on the template.
   * *   Conditional: A replacement update may be performed on the template. You can check whether a replacement update is performed when the template is in use.
   * 
   * >  This parameter is returned if the value of Action is Modify.
   * 
   * @example
   * True
   */
  replacement?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * alicloud_instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      replacement: 'Replacement',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      replacement: 'string',
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

export class GetProvisionedProductPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the plan.
   */
  planDetail?: GetProvisionedProductPlanResponseBodyPlanDetail;
  /**
   * @remarks
   * The details of the product.
   */
  productDetail?: GetProvisionedProductPlanResponseBodyProductDetail;
  /**
   * @remarks
   * The details of the product version.
   */
  productVersionDetail?: GetProvisionedProductPlanResponseBodyProductVersionDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the resources to be changed in the plan.
   */
  resourceChanges?: GetProvisionedProductPlanResponseBodyResourceChanges[];
  static names(): { [key: string]: string } {
    return {
      planDetail: 'PlanDetail',
      productDetail: 'ProductDetail',
      productVersionDetail: 'ProductVersionDetail',
      requestId: 'RequestId',
      resourceChanges: 'ResourceChanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planDetail: GetProvisionedProductPlanResponseBodyPlanDetail,
      productDetail: GetProvisionedProductPlanResponseBodyProductDetail,
      productVersionDetail: GetProvisionedProductPlanResponseBodyProductVersionDetail,
      requestId: 'string',
      resourceChanges: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyResourceChanges },
    };
  }

  validate() {
    if(this.planDetail && typeof (this.planDetail as any).validate === 'function') {
      (this.planDetail as any).validate();
    }
    if(this.productDetail && typeof (this.productDetail as any).validate === 'function') {
      (this.productDetail as any).validate();
    }
    if(this.productVersionDetail && typeof (this.productVersionDetail as any).validate === 'function') {
      (this.productVersionDetail as any).validate();
    }
    if(Array.isArray(this.resourceChanges)) {
      $dara.Model.validateArray(this.resourceChanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

