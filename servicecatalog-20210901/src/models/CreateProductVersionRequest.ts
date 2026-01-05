// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the product version is active. Valid values:
   * 
   * *   true: The product version is active. This is the default value.
   * *   false: The product version is inactive.
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
   * The recommendation information. Valid values:
   * 
   * *   Default: No recommendation information is provided. This is the default value.
   * *   Recommended: the recommendation version.
   * *   Latest: the latest version.
   * *   Deprecated: the version that is about to be discontinued.
   * 
   * @example
   * Default
   */
  guidance?: string;
  /**
   * @remarks
   * The ID of the product to which the product version belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The name of the product version.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  productVersionName?: string;
  /**
   * @remarks
   * The type of the product template. Valid values:
   * 
   * *   RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
   * *   RosStandardTemplate: the standard ROS template.
   * 
   * This parameter is required.
   * 
   * @example
   * RosTerraformTemplate
   */
  templateType?: string;
  /**
   * @remarks
   * The URL of the template.
   * 
   * For more information about how to obtain the URL of a template, see [CreateTemplate](~~CreateTemplate~~).
   * 
   * This parameter is required.
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
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
      productId: 'string',
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

