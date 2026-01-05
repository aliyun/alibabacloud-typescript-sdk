// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateProductRequestProductVersionParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the product version. Valid values:
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
   * The description of the product version.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * The description of the product version.
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The recommended product version. Valid values:
   * 
   * *   Default (default): No product version is recommended.
   * *   Recommended: the stable version.
   * *   Latest: the latest version.
   * *   Deprecated: the version that is about to be deprecated.
   * 
   * @example
   * Default
   */
  guidance?: string;
  /**
   * @remarks
   * The name of the product version.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * 1.0
   */
  productVersionName?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * Set the value to RosTerraformTemplate, which indicates the Terraform template that is supported by Resource Orchestration Service (ROS).
   * 
   * @example
   * RosTerraformTemplate
   */
  templateType?: string;
  /**
   * @remarks
   * The URL of the template.
   * 
   * To obtain the URL of a template, you can call the [CreateTemplate](~~CreateTemplate~~) operation.
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      guidance: 'Guidance',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      guidance: 'string',
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

export class CreateProductRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the product.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * The description of the product.
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * DEMO-Create an ECS instance
   */
  productName?: string;
  /**
   * @remarks
   * The type of the product.
   * 
   * Set the value to Ros, which specifies Resource Orchestration Service (ROS).
   * 
   * This parameter is required.
   * 
   * @example
   * Ros
   */
  productType?: string;
  /**
   * @remarks
   * The information about the product version.
   */
  productVersionParameters?: CreateProductRequestProductVersionParameters;
  /**
   * @remarks
   * The provider of the product.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
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
      description: 'Description',
      productName: 'ProductName',
      productType: 'ProductType',
      productVersionParameters: 'ProductVersionParameters',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productName: 'string',
      productType: 'string',
      productVersionParameters: CreateProductRequestProductVersionParameters,
      providerName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(this.productVersionParameters && typeof (this.productVersionParameters as any).validate === 'function') {
      (this.productVersionParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

