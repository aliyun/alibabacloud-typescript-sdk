// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionedProductPlansResponseBodyPlanDetailsAssignedApprovers extends $dara.Model {
  /**
   * @remarks
   * The RAM entity name of the reviewer.
   * 
   * @example
   * endUser
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the RAM entity of the reviewer. Valid values:
   * 
   * *   RamUser: a RAM user
   * *   RamRole: a RAM role
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

export class ListProvisionedProductPlansResponseBodyPlanDetailsParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter in the template.
   * 
   * @example
   * role_name
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter in the template.
   * 
   * @example
   * Test-8
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

export class ListProvisionedProductPlansResponseBodyPlanDetailsTags extends $dara.Model {
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

export class ListProvisionedProductPlansResponseBodyPlanDetails extends $dara.Model {
  /**
   * @remarks
   * An array that consists of reviewers.
   */
  assignedApprovers?: ListProvisionedProductPlansResponseBodyPlanDetailsAssignedApprovers[];
  /**
   * @remarks
   * The time when the plan was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-13T02:01:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the plan.
   * 
   * @example
   * For development team.
   */
  description?: string;
  /**
   * @remarks
   * The purpose of the plan. Valid values:
   * 
   * *   LaunchProduct: launches the product. This is the default value.
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
   * 24477111603637****
   */
  ownerPrincipalId?: string;
  /**
   * @remarks
   * The name of the RAM entity to which the plan belongs.
   * 
   * @example
   * enduser
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
  parameters?: ListProvisionedProductPlansResponseBodyPlanDetailsParameters[];
  /**
   * @remarks
   * The ID of the plan.
   * 
   * @example
   * plan-bp18mmdh2u****
   */
  planId?: string;
  /**
   * @remarks
   * The name of the plan.
   * 
   * @example
   * DEMO-Create an ECS instance-637\\*\\*\\*\\*
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
   * port-bp1438kf2j****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * prod-bp1rtrnh2c****
   */
  productId?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * Create an ECS instance
   */
  productName?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * @example
   * pv-bp19udk22v****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The ID of the product instance.
   * 
   * @example
   * pp-bp1c35162d****
   */
  provisionedProductId?: string;
  /**
   * @remarks
   * The name of the product instance.
   * 
   * @example
   * rds-MYSQL-875****
   */
  provisionedProductName?: string;
  /**
   * @remarks
   * The ID of the ROS stack.
   * 
   * @example
   * 2599090a-309e-4306-b989-17ba66a9****
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
   * *   ApplicationInProgress: The plan is being reviewed.
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
   * > This parameter is returned only when PreviewFailed or ExecuteFailed is returned for the Status parameter.
   * 
   * @example
   * Create stack failed: Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...
   */
  statusMessage?: string;
  /**
   * @remarks
   * An array that consists of custom tags.
   */
  tags?: ListProvisionedProductPlansResponseBodyPlanDetailsTags[];
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
   * 2022-07-18T06:02:35.075Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
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
      productName: 'ProductName',
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
      assignedApprovers: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetailsAssignedApprovers },
      createTime: 'string',
      description: 'string',
      operationType: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalName: 'string',
      ownerPrincipalType: 'string',
      parameters: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetailsParameters },
      planId: 'string',
      planName: 'string',
      planType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetailsTags },
      uid: 'string',
      updateTime: 'string',
    };
  }

  validate() {
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

export class ListProvisionedProductPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * Valid values: 1 to 100. Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * An array that consists of plans.
   */
  planDetails?: ListProvisionedProductPlansResponseBodyPlanDetails[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planDetails: 'PlanDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planDetails: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.planDetails)) {
      $dara.Model.validateArray(this.planDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

