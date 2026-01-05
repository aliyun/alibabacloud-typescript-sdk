// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProvisionedProductsResponseBodyProvisionedProductDetails extends $dara.Model {
  /**
   * @remarks
   * The time when the product instance was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-23T09:46:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the task that was last run on the product instance.
   * 
   * The task can be one of the following types:
   * 
   * *   LaunchProduct: a task that launches the product.
   * *   UpdateProvisionedProduct: a task that updates the information about the product instance.
   * *   TerminateProvisionedProduct: a task that terminates the product instance.
   * 
   * @example
   * task-bp1dmg242c****
   */
  lastProvisioningTaskId?: string;
  /**
   * @remarks
   * The ID of the last task that was successfully run on the product instance.
   * 
   * The task can be one of the following types:
   * 
   * *   LaunchProduct: a task that launches the product.
   * *   UpdateProvisionedProduct: a task that updates the information about the product instance.
   * *   TerminateProvisionedProduct: a task that terminates the product instance.
   * 
   * @example
   * task-bp1dmg242c****
   */
  lastSuccessfulProvisioningTaskId?: string;
  /**
   * @remarks
   * The ID of the task that was last run.
   * 
   * @example
   * task-bp1dmg242c****
   */
  lastTaskId?: string;
  /**
   * @remarks
   * The ID of the RAM entity to which the product instance belongs.
   * 
   * @example
   * 24477111603637****
   */
  ownerPrincipalId?: string;
  /**
   * @remarks
   * The type of the Resource Access Management (RAM) entity to which the product instance belongs. Valid values:
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
   * The name of the product.
   * 
   * @example
   * DEMO-Create an ECS instance
   */
  productName?: string;
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
   * The name of the product version.
   * 
   * @example
   * 1.0
   */
  productVersionName?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the product instance.
   * 
   * @example
   * acs:servicecatalog:cn-hangzhou:146611588617****:provisionedproduct/pp-bp1ddg1n2a****
   */
  provisionedProductArn?: string;
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
   * The type of the product instance.
   * 
   * The value is fixed as RosStack, which indicates an ROS stack.
   * 
   * @example
   * RosStack
   */
  provisionedProductType?: string;
  /**
   * @remarks
   * The ID of the Resource Orchestration Service (ROS) stack.
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
   * The state of the product instance. Valid values:
   * 
   * *   Available: The product instance was available.
   * *   UnderChange: The information about the product instance was being changed.
   * *   Error: An exception occurred on the product instance.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The message that is returned for the status of the product instance.
   * 
   * > This parameter is returned only when Error is returned for the Status parameter.
   * 
   * @example
   * Resource CREATE failed: terraform stack sc-146611588617****-pp-bp1ddg1n2a**** failure...
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastProvisioningTaskId: 'LastProvisioningTaskId',
      lastSuccessfulProvisioningTaskId: 'LastSuccessfulProvisioningTaskId',
      lastTaskId: 'LastTaskId',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalType: 'OwnerPrincipalType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      provisionedProductArn: 'ProvisionedProductArn',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      provisionedProductType: 'ProvisionedProductType',
      stackId: 'StackId',
      stackRegionId: 'StackRegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastProvisioningTaskId: 'string',
      lastSuccessfulProvisioningTaskId: 'string',
      lastTaskId: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      provisionedProductArn: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      provisionedProductType: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product instances.
   */
  provisionedProductDetails?: ListProvisionedProductsResponseBodyProvisionedProductDetails[];
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provisionedProductDetails: 'ProvisionedProductDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      provisionedProductDetails: { 'type': 'array', 'itemType': ListProvisionedProductsResponseBodyProvisionedProductDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.provisionedProductDetails)) {
      $dara.Model.validateArray(this.provisionedProductDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

