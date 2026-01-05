// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductShrinkRequest extends $dara.Model {
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
  productVersionParametersShrink?: string;
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
      productVersionParametersShrink: 'ProductVersionParameters',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productName: 'string',
      productType: 'string',
      productVersionParametersShrink: 'string',
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

