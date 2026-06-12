// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable automatic payment for the order. Valid values:
   * 
   * - **true**: Enable automatic payment.
   * 
   * - **false**: Disable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Indicates whether to enable auto-renewal. Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 302070970220
   */
  couponId?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - **Year**: Year.
   * 
   * - **Month**: Month.
   * 
   * - **Day**: Day.
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  /**
   * @remarks
   * The ID of the private offer in Alibaba Cloud Marketplace.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxx
   */
  quotationId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
      quotationId: 'QuotationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      couponId: 'string',
      payPeriod: 'number',
      payPeriodUnit: 'string',
      quotationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestOperationMetadata extends $dara.Model {
  /**
   * @remarks
   * The end time of the O\\&M window. This parameter is valid only in managed O\\&M mode.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  endTime?: string;
  /**
   * @remarks
   * Additional information about the managed O\\&M service.
   * 
   * @example
   * ```json
   *   {
   *     "vncInfo": [
   *       {
   *         "instanceId": "i-001",
   *         "username": "admin",
   *         "password": "******",
   *         "vncPassword": "******"
   *       }
   *     ]
   *   }
   *   ```
   */
  extraInfo?: string;
  /**
   * @remarks
   * The list of imported resources.
   * 
   * @example
   * {   "RegionId": "cn-hangzhou",   "Type": "ResourceIds",   "ResourceIds": {     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]   } }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the imported service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The start time of the O\\&M window. This parameter is valid only in managed O\\&M mode.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extraInfo: 'ExtraInfo',
      resources: 'Resources',
      serviceInstanceId: 'ServiceInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extraInfo: 'string',
      resources: 'string',
      serviceInstanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceInstanceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class CreateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated, unique token that ensures the idempotence of the request. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the Alibaba Cloud Marketplace purchase order. You do not need to specify this parameter if the service is not listed in Alibaba Cloud Marketplace or if you use the pay-as-you-go billing method.
   */
  commodity?: CreateServiceInstanceRequestCommodity;
  /**
   * @remarks
   * The CloudMonitor alert contact group that receives alerts.
   * 
   * @example
   * Cloud account alert contact
   */
  contactGroup?: string;
  /**
   * @remarks
   * Indicates whether to perform a dry run for the request. The dry run checks for permissions and instance status. Valid values:
   * 
   * - **true**: Sends the request without creating the service instance.
   * 
   * - **false**: Sends the request and creates the service instance after the check is passed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Indicates whether the service instance has the O\\&M feature. Valid values:
   * 
   * - **true**: The service instance has the O\\&M feature.
   * 
   * - **false**: The service instance does not have the O\\&M feature.
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Indicates whether to enable Prometheus monitoring. Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the service instance. The name must meet the following requirements:
   * 
   * - The name can be up to 64 characters in length.
   * 
   * - It must start with a letter or a digit and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The O\\&M configuration.
   */
  operationMetadata?: CreateServiceInstanceRequestOperationMetadata;
  /**
   * @remarks
   * The parameters for deploying the user instance.
   * 
   * > If the service instance contains deployment region information, you must specify the region in the deployment parameters.
   * 
   * @example
   * {
   *       "RegionId": "cn-hangzhou"
   *       "NodeCount": 3,
   *       "SystemDiskSize": 40,
   *       "InstancePassword": "******"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * - cn-hangzhou: China (Hangzhou).
   * 
   * - ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether to automatically deduct the payment from your account balance. Valid values:
   * 
   * - **true**: Enable automatic payment.
   * 
   * - **false**: Disable automatic payment.
   * 
   * @example
   * true
   */
  resourceAutoPay?: boolean;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The ID of the service instance to convert to a paid instance.
   * 
   * @example
   * si-d32fbcef30664721b785
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The commodity specification code.
   * 
   * @example
   * yuncode5425200001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: CreateServiceInstanceRequestTag[];
  /**
   * @remarks
   * The template name. You must specify this parameter if the service supports multiple templates.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the service instance. Valid values:
   * 
   * - **Trial**: The service instance supports trial.
   * 
   * - **NotTrial**: The service instance does not support trial.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      contactGroup: 'ContactGroup',
      dryRun: 'DryRun',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      name: 'Name',
      operationMetadata: 'OperationMetadata',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceAutoPay: 'ResourceAutoPay',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      tag: 'Tag',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: CreateServiceInstanceRequestCommodity,
      contactGroup: 'string',
      dryRun: 'boolean',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      name: 'string',
      operationMetadata: CreateServiceInstanceRequestOperationMetadata,
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceAutoPay: 'boolean',
      resourceGroupId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationCode: 'string',
      specificationName: 'string',
      tag: { 'type': 'array', 'itemType': CreateServiceInstanceRequestTag },
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.operationMetadata && typeof (this.operationMetadata as any).validate === 'function') {
      (this.operationMetadata as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
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

