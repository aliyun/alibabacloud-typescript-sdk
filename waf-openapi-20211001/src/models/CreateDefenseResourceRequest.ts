// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefenseResourceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * demoTagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class CreateDefenseResourceRequest extends $dara.Model {
  /**
   * @remarks
   * A list of custom header fields.
   * 
   * > If you set XffStatus to 1, WAF uses the first IP address from the specified header field as the client IP address to prevent XFF forgery. If you specify multiple header fields, WAF tries to obtain the client IP address from the header fields in sequence. If WAF fails to obtain the client IP address from the specified header fields, it uses the first IP address in the X-Forwarded-For header field.
   */
  customHeaders?: string[];
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
   * The detailed parameters of the protected object. This parameter is a string that consists of a JSON struct.
   * 
   * > The parameters vary based on the values of **Product** and **Pattern**. For more information, see the "**Description of the Detail parameter**" section.
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
   * The ID of the account to which the protected object belongs. This parameter is used in multi-account scenarios. By default, the protected object belongs to the WAF administrator account.
   * 
   * @example
   * 123221XXX
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection mode of the protected object. Valid values:
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
   * The region where the WAF instance is deployed. Valid values:
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
   * The name of the protection group to which you want to add the protected object. This parameter is optional.
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
   * The source of the protected object. Only the following value is supported:
   * 
   * - **custom**: a custom object.
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
  tag?: CreateDefenseResourceRequestTag[];
  /**
   * @remarks
   * Specifies whether to enable the X-Forwarded-For (XFF) proxy. Valid values:
   * 
   * - **0**: disabled. This is the default value.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
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
      customHeaders: { 'type': 'array', 'itemType': 'string' },
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
      tag: { 'type': 'array', 'itemType': CreateDefenseResourceRequestTag },
      xffStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customHeaders)) {
      $dara.Model.validateArray(this.customHeaders);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

