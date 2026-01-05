// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductAsAdminResponseBodyProductDetail extends $dara.Model {
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
   * *   RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
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

export class GetProductAsAdminResponseBodyTagOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag option is enabled. Valid values:
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
   * The key of the tag option.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The ID of the owner of the tag option.
   * 
   * @example
   * 133413081827****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * @example
   * tag-bp1q65xd3j****
   */
  tagOptionId?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
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

export class GetProductAsAdminResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the product.
   */
  productDetail?: GetProductAsAdminResponseBodyProductDetail;
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
   * The tag options associated with the product.
   */
  tagOptions?: GetProductAsAdminResponseBodyTagOptions[];
  static names(): { [key: string]: string } {
    return {
      productDetail: 'ProductDetail',
      requestId: 'RequestId',
      tagOptions: 'TagOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productDetail: GetProductAsAdminResponseBodyProductDetail,
      requestId: 'string',
      tagOptions: { 'type': 'array', 'itemType': GetProductAsAdminResponseBodyTagOptions },
    };
  }

  validate() {
    if(this.productDetail && typeof (this.productDetail as any).validate === 'function') {
      (this.productDetail as any).validate();
    }
    if(Array.isArray(this.tagOptions)) {
      $dara.Model.validateArray(this.tagOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

