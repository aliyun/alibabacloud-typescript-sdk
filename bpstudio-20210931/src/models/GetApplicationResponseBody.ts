// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyDataChecklist extends $dara.Model {
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The message returned for verification.
   * 
   * @example
   * The ID of the region.
   */
  remark?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * vpc
   */
  resourceCode?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * vpc
   */
  resourceName?: string;
  /**
   * @remarks
   * The verification result.
   * 
   * @example
   * Finish
   */
  result?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 192.168.0.0/16
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      lifecycle: 'Lifecycle',
      region: 'Region',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      resourceName: 'ResourceName',
      result: 'Result',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycle: 'string',
      region: 'string',
      remark: 'string',
      resourceCode: 'string',
      resourceName: 'string',
      result: 'string',
      specification: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataComplianceListRules extends $dara.Model {
  ruleDetail?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleDetail: 'ruleDetail',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleDetail: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataComplianceList extends $dara.Model {
  resourceCode?: string;
  resourceName?: string;
  rules?: GetApplicationResponseBodyDataComplianceListRules[];
  static names(): { [key: string]: string } {
    return {
      resourceCode: 'ResourceCode',
      resourceName: 'ResourceName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCode: 'string',
      resourceName: 'string',
      rules: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataComplianceListRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataPriceList extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs
   */
  instanceName?: string;
  /**
   * @remarks
   * Resource Fill Labels.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  /**
   * @remarks
   * The unit price of the instance.
   * 
   * @example
   * 0.01
   */
  onePrice?: number;
  /**
   * @remarks
   * The original price of the instance.
   * 
   * @example
   * 3.570
   */
  originalPrice?: number;
  /**
   * @remarks
   * The service duration.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The total price.
   * 
   * @example
   * 0.01
   */
  price?: number;
  /**
   * @remarks
   * Unit: USD per hour
   * 
   * @example
   * The service duration.
   */
  priceUnit?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The error message that is returned when a price query fails.
   * 
   * @example
   * ecs.e3.large
   */
  remark?: string;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * ecs
   */
  resourceCode?: string;
  /**
   * @remarks
   * The instance type. This parameter indicates the information about the instance type. For example, 192.168.0.0/16 may be returned for a Virtual Private Cloud (VPC) instance, ecs.g5.large may be returned for an Elastic Compute Service (ECS) instance, and slb.s1.small may be returned for a Server Load Balancer (SLB) instance. If the resource does not have a specific type, an empty value is returned.
   * 
   * @example
   * The billing method.
   */
  specification?: string;
  /**
   * @remarks
   * The creation mode. Valid values:\\
   * 1: creates a new instance.\\
   * 2: imports an instance.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      count: 'Count',
      instanceName: 'InstanceName',
      lifecycle: 'Lifecycle',
      onePrice: 'OnePrice',
      originalPrice: 'OriginalPrice',
      period: 'Period',
      price: 'Price',
      priceUnit: 'PriceUnit',
      region: 'Region',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      specification: 'Specification',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      count: 'number',
      instanceName: 'string',
      lifecycle: 'string',
      onePrice: 'number',
      originalPrice: 'number',
      period: 'number',
      price: 'number',
      priceUnit: 'string',
      region: 'string',
      remark: 'string',
      resourceCode: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  nodeLabel?: string;
  /**
   * @remarks
   * The deployment result.
   * 
   * @example
   * {"hostName":"iZ2zehnzxqixu1pywsfbx1Z","memory":32768.0,"creationTime":"2021-09-28T11:23:46Z","instanceName":"ecs","internetMaxBandwidthOut":0.0,"description":"","clusterId":"","private_ip":"192.168.0.247","instanceId":"i-2zehnzxqixu1pywsfbx1","requestId":"F1C64344-3723-51A0-855B-5F08B5634323","zoneId":"cn-beijing-b","ioOptimized":"optimized","id":"i-2zehnzxqixu1pywsfbx1","instanceNetworkType":"vpc","instanceChargeType":"PostPaid","imageId":"centos_8_4_x64_20G_alibase_20210824.vhd","serialNumber":"cee246c4-38f3-4bf3-950b-c17e88ff6527","vlanId":"","instanceType":"ecs.e3.large","cpu":4.0,"creditSpecification":"","internetMaxBandwidthIn":-1.0,"expiredTime":"2099-12-31T15:59Z","internetChargeType":"PayByTraffic","regionId":"cn-beijing","refId":"79224644_0","stoppedMode":"Not-applicable","status":"Running"}
   */
  remark?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * ecs
   */
  resourceCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2zehnzxqixu1pywsfbx1
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ecs
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource deployment result.
   * 
   * @example
   * Finish
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      lifecycle: 'Lifecycle',
      nodeLabel: 'NodeLabel',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      lifecycle: 'string',
      nodeLabel: 'string',
      remark: 'string',
      resourceCode: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * App ID
   * 
   * @example
   * VVK605ZH00OA4MRT
   */
  applicationId?: string;
  /**
   * @remarks
   * The resource tag.
   */
  checklist?: GetApplicationResponseBodyDataChecklist[];
  complianceList?: GetApplicationResponseBodyDataComplianceList[];
  /**
   * @remarks
   * The time when the app was created
   * 
   * @example
   * 2021-08-09 14:37:16
   */
  createTime?: string;
  deployPercent?: number;
  /**
   * @remarks
   * Application description
   * 
   * @example
   * remark
   */
  description?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Success
   */
  error?: string;
  /**
   * @remarks
   * The URL of the image in the database.
   * 
   * @example
   * The details of the application.
   */
  imageURL?: string;
  /**
   * @remarks
   * App name
   * 
   * @example
   * 1411182597819805/sr-8DWU4RUS49NIDII0.png
   */
  name?: string;
  /**
   * @remarks
   * The billing results.
   */
  priceList?: GetApplicationResponseBodyDataPriceList[];
  /**
   * @remarks
   * The ID of the resource group to which the app belongs
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specification.
   */
  resourceList?: GetApplicationResponseBodyDataResourceList[];
  /**
   * @remarks
   * Verification passed
   * 
   * @example
   * Deployed_Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template associated with the application
   * 
   * @example
   * FYS9VZ535U20V7HT
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      checklist: 'Checklist',
      complianceList: 'ComplianceList',
      createTime: 'CreateTime',
      deployPercent: 'DeployPercent',
      description: 'Description',
      error: 'Error',
      imageURL: 'ImageURL',
      name: 'Name',
      priceList: 'PriceList',
      resourceGroupId: 'ResourceGroupId',
      resourceList: 'ResourceList',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      checklist: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataChecklist },
      complianceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataComplianceList },
      createTime: 'string',
      deployPercent: 'number',
      description: 'string',
      error: 'string',
      imageURL: 'string',
      name: 'string',
      priceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPriceList },
      resourceGroupId: 'string',
      resourceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataResourceList },
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checklist)) {
      $dara.Model.validateArray(this.checklist);
    }
    if(Array.isArray(this.complianceList)) {
      $dara.Model.validateArray(this.complianceList);
    }
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the application.
   */
  data?: GetApplicationResponseBodyData;
  /**
   * @remarks
   * Reason for the request failure
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApplicationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

