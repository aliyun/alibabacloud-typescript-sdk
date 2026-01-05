// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchProductRequestParameters extends $dara.Model {
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

export class LaunchProductRequestTags extends $dara.Model {
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

export class LaunchProductRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters of the template.
   * 
   * You can specify up to 200 parameters.
   * 
   * > This parameter is optional. If you specify the Parameters parameter, you must specify the ParameterKey and ParameterValue parameters.
   */
  parameters?: LaunchProductRequestParameters[];
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * > If the PortfolioId parameter is not required, you do not need to specify the PortfolioId parameter. If the PortfolioId parameter is required, you must specify the PortfolioId parameter. For more information about how to obtain the value of the PortfolioId parameter, see [ListLaunchOptions](~~ListLaunchOptions~~).
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
   * The name of the product instance.
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
   * The ID of the region to which the Resource Orchestration Service (ROS) stack belongs.
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
   * The custom tags that are specified by the end user.
   * 
   * Maximum value of N: 20.
   * 
   * > 
   * 
   * *   The Tags parameter is optional. If you specify the Tags parameter, you must specify the Tags.N.Key and Tags.N.Value parameters.
   * 
   * *   The tag is propagated to each stack resource that supports the tag feature.
   */
  tags?: LaunchProductRequestTags[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
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
      parameters: { 'type': 'array', 'itemType': LaunchProductRequestParameters },
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductName: 'string',
      stackRegionId: 'string',
      tags: { 'type': 'array', 'itemType': LaunchProductRequestTags },
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

