// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseResourceShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TagValue1
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

export class CreateDefenseResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The custom header fields used to obtain the actual client IP address when XFF proxy is enabled.
   * 
   * > If XffStatus is set to 1, WAF uses the first IP address from the specified header field as the client IP address to prevent XFF forgery. If you specify multiple header fields, WAF reads them in order. If no valid client IP address is found in the specified header fields, WAF falls back to the first IP address in the X-Forwarded-For header field.
   */
  customHeadersShrink?: string;
  /**
   * @remarks
   * The description of the protected object.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The configuration details of the protected object, in JSON format.
   * 
   * > The required parameters vary based on the values of **Product** and **Pattern**. For more information, see the **Description of the Detail parameter** section.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"domain\\": \\"zhhclb4test096-05111.test.com\\"}
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-4xl*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the protected object belongs. This parameter is required only in multi-account scenarios. By default, the protected object belongs to the WAF administrator account.
   * 
   * @example
   * 123221XXX
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The type of the protected object. Valid values:
   * 
   * - **domain**: domain name.
   * 
   * - **multi_service**: hybrid cloud deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service. Valid values:
   * 
   * - **alb**: Application Load Balancer (ALB).
   * 
   * - **ecs**: Elastic Compute Service (ECS).
   * 
   * - **clb4**: Layer 4 Classic Load Balancer (CLB).
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * - **waf**: Web Application Firewall (WAF).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  product?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * > - Only protected objects of hybrid cloud deployments support custom names.
   * 
   * @example
   * abctest.com
   */
  resource?: string;
  /**
   * @remarks
   * The name of the protection group to which the protected object is added.
   * 
   * @example
   * testGroup
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The origin type of the protected object. Valid values:
   * 
   * - **custom**: a user-defined protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * A list of tags. You can add up to 20 tags.
   */
  tag?: CreateDefenseResourceShrinkRequestTag[];
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For (XFF) proxy feature is enabled. Valid values:
   * 
   * - **0** (default): disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      customHeadersShrink: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      tag: 'Tag',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeadersShrink: 'string',
      description: 'string',
      detail: 'string',
      instanceId: 'string',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      regionId: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      tag: { 'type': 'array', 'itemType': CreateDefenseResourceShrinkRequestTag },
      xffStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

