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
   * The list of specified header fields.
   * > When XffStatus is set to 1, the first IP address in the specified header field is used as the originating IP address of the client to prevent XFF spoofing. If multiple headers are specified, the system attempts to obtain the originating IP address in sequence. If the first header does not contain an IP address, the system checks the second header, and so on. If no IP address is found in any of the specified headers, the first IP address in the X-Forwarded-For header is used. When XffStatus is set to 1, it indicates that the first IP address is obtained.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description of the protected object.
   * 
   * @example
   * ResourceTest
   */
  description?: string;
  /**
   * @remarks
   * The detailed parameter information of the protected object, which is converted into a JSON string constructed from a series of parameters.
   * 
   * > The specific parameters involved vary depending on the specified **cloud service** (**Product**) and **protection mode** (**Pattern**). For more information, see **Parameter description of Detail for protected objects**.
   * 
   * >Notice: When **Product** is set to **ecs**, **clb4**, **clb7**, or **nlb**, domain names that are connected to regions in the Chinese mainland must have an ICP filing.</notice>
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
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-4xl*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account to which the protected object belongs in a multi-account scenario. By default, the protected object belongs to the WAF administrator account.
   * 
   * @example
   * 123221XXX
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection mode of the protected object. Valid values:
   * 
   * - **domain**: domain name-based protection.
   * 
   * - **multi_service**: hybrid cloud service-based protection.
   * 
   * > Currently, only the following combinations are supported: When **Product** is set to **alb**, **ecs**, **clb4**, **clb7**, or **nlb**, **Pattern** must be set to **domain**. When **Product** is set to **waf**, **Pattern** must be set to **multi_service**.
   * 
   * This parameter is required.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The name of the cloud service. Valid values:
   * 
   * - **alb**: ALB.
   * 
   * - **ecs**: ECS.
   * 
   * - **clb4**: CLB Layer 4.
   * 
   * - **clb7**: CLB Layer 7.
   * 
   * - **nlb**: NLB.
   * 
   * - **waf**: WAF.
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
   * > 
   * > - Only protected objects in hybrid cloud service mode support custom protected object names.
   * 
   * @example
   * abctest.com
   */
  resource?: string;
  /**
   * @remarks
   * The name of the protection group to which the protected object is added. This parameter is optional.
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
   * The source of the protected object. Valid values:
   * 
   * - **custom**: user-defined.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tag?: CreateDefenseResourceRequestTag[];
  /**
   * @remarks
   * Specifies whether to enable the X-Forwarded-For (XFF) proxy for the protected object. Valid values:
   * 
   * - **0**: disabled (default).
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

