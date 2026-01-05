// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductAsEndUserResponseBodyProductSummary extends $dara.Model {
  /**
   * @remarks
   * The time when the product was created.
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
   * The description of the product.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the default launch option exists. Valid values:
   * 
   * *   true: The default launch option exists. In this case, the PortfolioId parameter is not required when the product is launched or when the information about the product instance is updated.
   * *   false: The default launch option does not exist. In this case, the PortfolioId parameter is required when the product is launched or when the information about the product instance is updated. For more information about how to obtain the value of the PortfolioId parameter, see [ListLaunchOptions](~~ListLaunchOptions~~).
   * 
   * > If the product is added to only one product portfolio, the default launch option exists. If the product is added to multiple product portfolios, multiple launch options exist at the same time. However, no default launch options exist.
   * 
   * @example
   * true
   */
  hasDefaultLaunchOption?: boolean;
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
   * DEMO-Create an ECS instance.
   */
  productName?: string;
  /**
   * @remarks
   * The type of the product.
   * 
   * The value is fixed as Ros, which indicates Resource Orchestration Service (ROS).
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
  /**
   * @remarks
   * The type of the product template. Valid values:
   * 
   * *   RosTerraformTemplate: The Terraform template that is supported by Resource Orchestration Service (ROS).
   * *   RosStandardTemplate: The standard ROS template.
   * 
   * @example
   * RosTerraformTemplate
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      hasDefaultLaunchOption: 'HasDefaultLaunchOption',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      hasDefaultLaunchOption: 'boolean',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsEndUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the product.
   */
  productSummary?: GetProductAsEndUserResponseBodyProductSummary;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productSummary: 'ProductSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSummary: GetProductAsEndUserResponseBodyProductSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.productSummary && typeof (this.productSummary as any).validate === 'function') {
      (this.productSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

