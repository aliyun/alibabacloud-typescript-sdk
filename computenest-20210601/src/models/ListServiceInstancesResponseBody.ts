// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesResponseBodyServiceInstancesGrantedPermission extends $dara.Model {
  operationEndTime?: string;
  policyNames?: string;
  static names(): { [key: string]: string } {
    return {
      operationEndTime: 'OperationEndTime',
      policyNames: 'PolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationEndTime: 'string',
      policyNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesServiceCommodity extends $dara.Model {
  /**
   * @remarks
   * The configuration metadata related to SaaS Boost.
   * 
   * @example
   * { // Specifies whether to associate the service with the SaaS Boost commodity. Default value: false. "Enabled":true/false // The public endpoint of the SaaS Boost instance. "PublicAccessUrl":"https://example.com" }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The platform type. Valid values:
   * 
   * *   marketplace: Alibaba Cloud Marketplace.
   * *   Css: Lingxiao.
   * *   SaasBoost: SaaS Boost.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saasBoostMetadata: 'string',
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

export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service instance.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * WordPress is a free and open-source website content management system (CMS).
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesService extends $dara.Model {
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: ListServiceInstancesResponseBodyServiceInstancesServiceCommodity;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Alibaba Cloud Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling the Service Provider Interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a54420****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierName?: string;
  /**
   * @remarks
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 1.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: ListServiceInstancesResponseBodyServiceInstancesServiceCommodity,
      deployType: 'string',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBodyServiceInstancesTags extends $dara.Model {
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

export class ListServiceInstancesResponseBodyServiceInstances extends $dara.Model {
  /**
   * @remarks
   * The business state of the service instance. Valid values:
   * 
   * *   Normal
   * *   Renewing
   * *   RenewFailed
   * *   Expired
   * 
   * @example
   * Normal
   */
  bizStatus?: string;
  /**
   * @remarks
   * The time when the service instance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the hosted O\\&M feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstanceOps?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  grantedPermission?: ListServiceInstancesResponseBodyServiceInstancesGrantedPermission;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Marketplace instance.
   * 
   * @example
   * 5827****
   */
  marketInstanceId?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the managed service instance.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range during which hosted O\\&M is implemented.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2306175xxxxxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The information returned after the service instance is created.
   * 
   * @example
   * {"managementUrl": "http://xx.xx"}
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters of the service instance.
   * 
   * @example
   * {"param":"value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Permanent: Once you purchase the service, you can use it permanently.
   * *   Subscription: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a subscription basis.
   * *   PayAsYouGo: You purchase the service from Alibaba Cloud Marketplace and are charged for the service on a pay-as-you-go basis.
   * *   CustomFixTime: You are charged for the service based on a custom duration fixed by the service provider.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  policyNames?: string;
  /**
   * @remarks
   * The deployment progress of the service instance, in percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz6scpcxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * [{"StackId": "stack-xxx"}]
   */
  resources?: string;
  /**
   * @remarks
   * The services.
   */
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   private: The service is a private service and is deployed within the account of a customer.
   * *   managed: The service is a fully managed service and is deployed within the account of a service provider.
   * *   operation: The service is a hosted O\\&M service.
   * *   poc: The service is a trial service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source from which the service instance is created.
   * 
   * @example
   * Supplier
   */
  source?: string;
  /**
   * @remarks
   * The state of the service instance. Valid values:
   * 
   * *   Created
   * *   Deploying
   * *   DeployedFailed
   * *   Deployed
   * *   Upgrading
   * *   Deleting
   * *   Deleted
   * *   DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * Is it supported to convert from trial to formal
   * 
   * @example
   * true
   */
  supportTrialToPrivate?: boolean;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Single ECS
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the service instance was updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      grantedPermission: 'GrantedPermission',
      marketInstanceId: 'MarketInstanceId',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      orderId: 'OrderId',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      policyNames: 'PolicyNames',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supportTrialToPrivate: 'SupportTrialToPrivate',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      grantedPermission: ListServiceInstancesResponseBodyServiceInstancesGrantedPermission,
      marketInstanceId: 'string',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      orderId: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      policyNames: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      resources: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supportTrialToPrivate: 'boolean',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.grantedPermission && typeof (this.grantedPermission as any).validate === 'function') {
      (this.grantedPermission as any).validate();
    }
    if(this.service && typeof (this.service as any).validate === 'function') {
      (this.service as any).validate();
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

export class ListServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50287CB-AABF-4877-92C0-289B339A1546
   */
  requestId?: string;
  /**
   * @remarks
   * The information about service instances.
   */
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstances: 'ServiceInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstances)) {
      $dara.Model.validateArray(this.serviceInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

