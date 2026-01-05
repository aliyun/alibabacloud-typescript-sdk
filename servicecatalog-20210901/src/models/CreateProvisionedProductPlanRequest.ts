// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProvisionedProductPlanRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter in the template.
   * 
   * @example
   * instance_type
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter in the template.
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

export class CreateProvisionedProductPlanRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the custom tag.
   * 
   * The key can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom tag.
   * 
   * The value can be up to 128 characters in length, and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
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

export class CreateProvisionedProductPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the plan.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * Create an ECS instance.
   */
  description?: string;
  /**
   * @remarks
   * The type of the operation that you want the plan to perform. Valid values:
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
   * An array that consists of the parameters in the template.
   * 
   * You can specify up to 200 parameters.
   * 
   * > If you specify Parameters, you must specify ParameterKey and ParameterValue.
   */
  parameters?: CreateProvisionedProductPlanRequestParameters[];
  /**
   * @remarks
   * The plan name.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * DEMO-ECS instance
   */
  planName?: string;
  /**
   * @remarks
   * The plan type.
   * 
   * Set the value to Ros, which specifies Resource Orchestration Service (ROS).
   * 
   * This parameter is required.
   * 
   * @example
   * Ros
   */
  planType?: string;
  /**
   * @remarks
   * The product portfolio ID.
   * 
   * > If PortfolioId is not required, you do not need to specify PortfolioId. If PortfolioId is required, you must specify PortfolioId. For more information about how to obtain the value of PortfolioId, see [ListLaunchOptions](~~ListLaunchOptions~~).
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The product version ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The product instance name.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * DEMO-ECS instance
   */
  provisionedProductName?: string;
  /**
   * @remarks
   * The ID of the region to which the ROS stack belongs.
   * 
   * For more information about how to obtain the regions that are supported by ROS, see [DescribeRegions](https://help.aliyun.com/document_detail/131035.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  stackRegionId?: string;
  /**
   * @remarks
   * An array that consists of custom tags.
   * 
   * Maximum value of N: 20.
   * 
   * > 
   * *   If you specify Tags, you must specify Tags.N.Key and Tags.N.Value.
   * *   The tag of a stack is propagated to each resource that supports the tag feature in the stack.
   */
  tags?: CreateProvisionedProductPlanRequestTags[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      operationType: 'OperationType',
      parameters: 'Parameters',
      planName: 'PlanName',
      planType: 'PlanType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductName: 'ProvisionedProductName',
      stackRegionId: 'StackRegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      operationType: 'string',
      parameters: { 'type': 'array', 'itemType': CreateProvisionedProductPlanRequestParameters },
      planName: 'string',
      planType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductName: 'string',
      stackRegionId: 'string',
      tags: { 'type': 'array', 'itemType': CreateProvisionedProductPlanRequestTags },
    };
  }

  validate() {
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

