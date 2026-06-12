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
   * Database B
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B is an open-source distributed relational database independently designed and developed by Company A.
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
   * The deployment configuration of the service. The configuration varies based on the deployment type. The data is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - ros: The service is deployed using ROS.
   * 
   * - terraform: The service is deployed using Terraform.
   * 
   * - ack: The service is deployed using ACK.
   * 
   * - spi: The service is deployed using SPI.
   * 
   * - operation: The service is deployed using Alibaba Cloud Managed Services.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether PrivateLink is enabled. Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enablePrivateVpcConnection?: boolean;
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
   * The service information.
   */
  serviceInfos?: ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - private: The service is deployed in the user\\"s account.
   * 
   * - managed: The service is deployed in the service provider\\"s account.
   * 
   * - operation: The service is an Alibaba Cloud Managed Service.
   * 
   * - poc: The service instance is a trial instance.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the source service provider that distributes the service.
   * 
   * @example
   * Company A Ltd.
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The status of the service.
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
   * Company A Ltd.
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
   * The version of the service.
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
   * Version A
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      enablePrivateVpcConnection: 'EnablePrivateVpcConnection',
      publishTime: 'PublishTime',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceType: 'ServiceType',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      enablePrivateVpcConnection: 'boolean',
      publishTime: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos },
      serviceType: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
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
   * The business status of the service instance. Valid values:
   * 
   * - Normal: The service instance is normal.
   * 
   * - Renewing: The service instance is being renewed.
   * 
   * - RenewFoiled: The renewal of the service instance failed.
   * 
   * - Expired: The service instance has expired.
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
   * Indicates whether the service instance supports Alibaba Cloud Managed Services. Valid values:
   * 
   * - true: The service instance supports Alibaba Cloud Managed Services.
   * 
   * - false: The service instance does not support Alibaba Cloud Managed Services.
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
   * Indicates whether Alibaba Cloud Managed Services are enabled for the service instance. Valid values:
   * 
   * - true: Alibaba Cloud Managed Services are enabled for the service instance.
   * 
   * - false: Alibaba Cloud Managed Services are not enabled for the service instance.
   * 
   * @example
   * true
   */
  isOperated?: boolean;
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
   * The ID of the service instance that is managed.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The time when the Alibaba Cloud Managed Services end.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The time when the Alibaba Cloud Managed Services start.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
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
   * - Permanent: The service is permanently purchased.
   * 
   * - Subscription: The service is a subscription service from the Alibaba Cloud Marketplace.
   * 
   * - PayAsYouGo: The service is a pay-as-you-go service from the Alibaba Cloud Marketplace.
   * 
   * - CustomFixTime: The service has a custom fixed duration.
   * 
   * @example
   * Subscription
   */
  payType?: string;
  policyNames?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: %.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * si-d6ab3a63ccxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service.
   */
  service?: ListServiceInstancesResponseBodyServiceInstancesService;
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
   * The service type. Valid values:
   * 
   * - private: The service instance is deployed in the user\\"s account.
   * 
   * - managed: The service instance is deployed in the service provider\\"s account.
   * 
   * - operation: The service instance is an Alibaba Cloud Managed Service instance.
   * 
   * - poc: The service instance is a trial instance.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source from which the service instance was created.
   * 
   * @example
   * Supplier
   */
  source?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * - Created: The service instance is created.
   * 
   * - Deploying: The service instance is being deployed.
   * 
   * - DeployedFailed: The service instance failed to be deployed.
   * 
   * - Deployed: The service instance is deployed.
   * 
   * - Upgrading: The service instance is being upgraded.
   * 
   * - Deleting: The service instance is being deleted.
   * 
   * - Deleted: The service instance is deleted.
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
   * The custom tags.
   */
  tags?: ListServiceInstancesResponseBodyServiceInstancesTags[];
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Template 1
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
  /**
   * @remarks
   * The user\\"s Alibaba Cloud account ID.
   * 
   * @example
   * 1234567
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      endTime: 'EndTime',
      grantedPermission: 'GrantedPermission',
      isOperated: 'IsOperated',
      name: 'Name',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      parameters: 'Parameters',
      payType: 'PayType',
      policyNames: 'PolicyNames',
      progress: 'Progress',
      resourceGroupId: 'ResourceGroupId',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      endTime: 'string',
      grantedPermission: ListServiceInstancesResponseBodyServiceInstancesGrantedPermission,
      isOperated: 'boolean',
      name: 'string',
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      parameters: 'string',
      payType: 'string',
      policyNames: 'string',
      progress: 'number',
      resourceGroupId: 'string',
      service: ListServiceInstancesResponseBodyServiceInstancesService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      tags: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstancesTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
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
   * The number of entries returned per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
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
   * The information about the service instances.
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

