// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsAsEndUserResponseBodyProductSummaries extends $dara.Model {
  /**
   * @remarks
   * The time when the product was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
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
   * *   false: The default launch option does not exist. In this case, the PortfolioId parameter is required when the product is launched or when the information about the product instance is updated. For more information about the PortfolioId parameter, see [ListLaunchOptions](~~ListLaunchOptions~~).
   * 
   * >  If the product is added to only one product portfolio, the default launch option exists. If the product is added to multiple product portfolios, multiple launch options exist at the same time. However, no default launch options exist.
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
   * The product ID.
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
   * The value is set to Ros, which indicates Resource Orchestration Service (ROS).
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
   * *   RosTerraformTemplate: the Terraform template that is supported by ROS.
   * *   RosStandardTemplate: the standard ROS template.
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

export class ListProductsAsEndUserResponseBody extends $dara.Model {
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
   * The products.
   */
  productSummaries?: ListProductsAsEndUserResponseBodyProductSummaries[];
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
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productSummaries: 'ProductSummaries',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      productSummaries: { 'type': 'array', 'itemType': ListProductsAsEndUserResponseBodyProductSummaries },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productSummaries)) {
      $dara.Model.validateArray(this.productSummaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

