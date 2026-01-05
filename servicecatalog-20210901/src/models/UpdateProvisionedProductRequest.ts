// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProvisionedProductRequestParameters extends $dara.Model {
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

export class UpdateProvisionedProductRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the custom tag.
   * 
   * The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the custom tag.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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

export class UpdateProvisionedProductRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters of the template.
   * 
   * You can specify up to 200 parameters.
   * 
   * > - This parameter is optional. If you specify the Parameters parameter, you must specify the ParameterKey and ParameterValue parameters.
   * > - If the values of the ProductVersionId and Parameters parameters are not changed, you are not allowed to update the information about the product instance.
   */
  parameters?: UpdateProvisionedProductRequestParameters[];
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * > The PortfolioId parameter is not required if the default launch option exists. The PortfolioId parameter is required if the default launch option does not exist. For more information about how to obtain the value of the PortfolioId parameter, see [ListLaunchOptions](~~ListLaunchOptions~~).
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
   * > If the values of the ProductVersionId and Parameters parameters are not changed, the information about the product instance cannot be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The ID of the product instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  /**
   * @remarks
   * The input custom tags.
   * 
   * Maximum value of N: 20.
   * 
   * > - The Tags parameter is optional. If you need to specify the Tags parameter, you must specify the Tags.N.Key and Tags.N.Value parameters.
   * > - The tag is propagated to each stack resource that supports the tag feature.
   */
  tags?: UpdateProvisionedProductRequestTags[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductId: 'ProvisionedProductId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': UpdateProvisionedProductRequestParameters },
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateProvisionedProductRequestTags },
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

