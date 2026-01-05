// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductVersionsResponseBodyProductVersionDetails extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the product version is enabled. Valid values:
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
   * The time when the product version was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-12T06:10:37Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the product version.
   * 
   * @example
   * The description of the product version.
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
   * The ID of the product to which the product version belongs.
   * 
   * @example
   * prod-bp18r7q127****
   */
  productId?: string;
  /**
   * @remarks
   * The product version ID.
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
   * The type of the product template. Valid values:
   * 
   * *   RosTerraformTemplate: the Terraform template that is supported by Resource Orchestration Service (ROS).
   * *   RosStandardTemplate: the standard ROS template.
   * 
   * @example
   * RosTerraformTemplate
   */
  templateType?: string;
  /**
   * @remarks
   * The URL of the template.
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      createTime: 'CreateTime',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      createTime: 'string',
      description: 'string',
      guidance: 'string',
      productId: 'string',
      productVersionId: 'string',
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

export class ListProductVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The versions of the product.
   */
  productVersionDetails?: ListProductVersionsResponseBodyProductVersionDetails[];
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
      productVersionDetails: 'ProductVersionDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionDetails: { 'type': 'array', 'itemType': ListProductVersionsResponseBodyProductVersionDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productVersionDetails)) {
      $dara.Model.validateArray(this.productVersionDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

