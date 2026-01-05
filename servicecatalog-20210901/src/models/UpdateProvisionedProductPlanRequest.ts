// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProvisionedProductPlanRequestParameters extends $dara.Model {
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

export class UpdateProvisionedProductPlanRequestTags extends $dara.Model {
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

export class UpdateProvisionedProductPlanRequest extends $dara.Model {
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
   * An array that consists of the parameters in the template.
   * 
   * Maximum value of N: 200.
   * 
   * > If you specify Parameters, you must specify ParameterKey and ParameterValue.
   */
  parameters?: UpdateProvisionedProductPlanRequestParameters[];
  /**
   * @remarks
   * The ID of the plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-bp1jvmdk2k****
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * > If the default launch option exists, you do not need to specify PortfolioId. If the default launch option does not exist, you must specify PortfolioId. For more information about how to obtain the value of PortfolioId, see [ListLaunchOptions](~~ListLaunchOptions~~).
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * This parameter is required.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
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
  tags?: UpdateProvisionedProductPlanRequestTags[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameters: 'Parameters',
      planId: 'PlanId',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateProvisionedProductPlanRequestParameters },
      planId: 'string',
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateProvisionedProductPlanRequestTags },
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

