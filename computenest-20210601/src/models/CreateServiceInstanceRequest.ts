// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the service instance. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * *   **Year**
   * *   **Month**
   * *   **Day**
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  /**
   * @remarks
   * privet offer Id
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
   * The operation end time.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  endTime?: string;
  /**
   * @remarks
   * The additional information.
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
   * Imported resource.
   * 
   * @example
   * {   "RegionId": "cn-hangzhou",   "Type": "ResourceIds",   "ResourceIds": {     "ALIYUN::ECS::INSTANCE": ["i-xxx", "i-yyy"],     "ALIYUN::RDS::INSTANCE": ["rm-xxx", "rm-yyy"],     "ALIYUN::VPC::VPC": ["vpc-xxx", "vpc-yyy"],     "ALIYUN::SLB::INSTANCE": ["lb-xxx", "lb-yyy"]   } }
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The operation start time.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace. You do not need to specify this parameter if the service is not published in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: CreateServiceInstanceRequestCommodity;
  /**
   * @remarks
   * The alert contact group.
   * 
   * @example
   * Default Group
   */
  contactGroup?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for the request to check information such as the permissions and instance status. Valid values:
   * 
   * *   **true**: performs a dry run for the request, but does not create a service instance.
   * *   **false**: performs a dry run for the request, and creates a service instance if the request passes the dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Prometheus monitoring feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The serviceInstance name.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The operation metadata.
   */
  operationMetadata?: CreateServiceInstanceRequestOperationMetadata;
  /**
   * @remarks
   * The parameters that the customer specifies to deploy the service instance.
   * 
   * >  If region information is required to create a service instance, you must specify the region ID in the value of Parameters.
   * 
   * @example
   * {"NodeCount": 3, "SystemDiskSize": 40, "InstancePassword": "******"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou).
   * *   ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to automatically deduct the resource fees from the account balance. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The trial service instance id witch you want to convert to formal
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
   * Specification code.
   * 
   * @example
   * yuncode5425200001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Default Ppackage
   */
  specificationName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateServiceInstanceRequestTag[];
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * ECS Template
   */
  templateName?: string;
  /**
   * @remarks
   * The trial type of the service instance. Valid values:
   * 
   * *   **Trial**: Trials are supported.
   * *   **NotTrial**: Trials are not supported.
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

