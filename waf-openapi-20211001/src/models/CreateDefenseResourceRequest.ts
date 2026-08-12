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
   * > When XffStatus is set to 1, the first IP in the specified header field is used as the client source IP to prevent XFF spoofing. When multiple headers are specified, the system attempts to obtain the source IP from each header in order. If the first header does not contain an IP, the system tries the second header, and so on. If no specified header contains an IP, the first IP in the X-Forwarded-For header is used. When XffStatus is set to 1, the IP is obtained from the first available header.
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
   * The specific parameter information of the protected object, which is a string converted from a JSON object constructed with a series of parameters.
   * 
   * > The parameters vary depending on the specified **cloud product** (**Product**) and **protection mode** (**Pattern**). For more information, see **Detail parameter description for protected objects**.
   * 
   * >Notice: When **Product** is set to **ecs**, **clb4**, **clb7**, or **nlb**, domain names connected to regions in the Chinese mainland must have completed ICP filing.</notice>
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
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-4xl*******
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account to which the protected object belongs in multi-account scenarios. By default, the protected object belongs to the WAF administrator account.
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
   * > Currently, only the following combinations are supported: when **Product** is set to **alb**, **ecs**, **clb4**, **clb7**, or **nlb**, **Pattern** must be set to **domain**. When **Product** is set to **waf**, **Pattern** must be set to **multi_service**.
   * 
   * This parameter is required.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The cloud product name. Valid values:
   * 
   * - **alb**: Application Load Balancer (ALB).
   * 
   * - **ecs**: Elastic Compute Service (ECS).
   * 
   * - **clb4**: Classic Load Balancer (CLB) Layer 4 access.
   * 
   * - **clb7**: Classic Load Balancer (CLB) Layer 7 access.
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
   * The Alibaba Cloud resource group ID.
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
   * The tag list, which contains up to 20 items.
   */
  tag?: CreateDefenseResourceRequestTag[];
  /**
   * @remarks
   * Specifies whether XFF proxy is enabled for the protected object. Valid values:
   * 
   * - **0**: Disabled (default).
   * 
   * - **1**: Enabled.
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

