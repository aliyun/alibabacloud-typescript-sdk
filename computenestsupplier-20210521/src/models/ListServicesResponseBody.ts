// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyServicesCommodity extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The metadata of the SaaS Boost configuration.
   * 
   * @example
   * {
   *      //Enable/disable SaaS Boost binding
   *     "Enabled":true/false,default is false
   *     //Public access URL
   *     "PublicAccessUrl":"https://example.com"
   * }
   */
  saasBoostMetadata?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - Marketplace: Alibaba Cloud Marketplace.
   * 
   * - Css: Lingxiao.
   * 
   * - SaasBoost: SaaS Boost.
   * 
   * @example
   * Marketplace
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      saasBoostMetadata: 'SaasBoostMetadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
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

export class ListServicesResponseBodyServicesServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * http://img.example.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service configuration. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Database B
   */
  name?: string;
  /**
   * @remarks
   * A brief description of the service.
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

export class ListServicesResponseBodyServicesServiceLocaleConfigs extends $dara.Model {
  /**
   * @remarks
   * The English value of the business information.
   * 
   * @example
   * Service Name
   */
  enValue?: string;
  /**
   * @remarks
   * The original value of the business information.
   * 
   * @example
   * Service Name
   */
  originalValue?: string;
  /**
   * @remarks
   * The Chinese value of the business information.
   * 
   * @example
   * 服务名称
   */
  zhValue?: string;
  static names(): { [key: string]: string } {
    return {
      enValue: 'EnValue',
      originalValue: 'OriginalValue',
      zhValue: 'ZhValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enValue: 'string',
      originalValue: 'string',
      zhValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesTags extends $dara.Model {
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

export class ListServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The approval type for service usage requests. Valid values:
   * 
   * - Manual: Manual approval.
   * 
   * - AutoPass: Automatic approval.
   * 
   * @example
   * AutoPass
   */
  approvalType?: string;
  /**
   * @remarks
   * The artifact ID.
   * 
   * @example
   * artifact-21ca53ac16a643****
   */
  artifactId?: string;
  /**
   * @remarks
   * The artifact version.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The information about the service build.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/example.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The service category.
   * 
   * @example
   * OpenSource
   */
  categories?: string;
  /**
   * @remarks
   * The commodity specifications.
   */
  commodity?: ListServicesResponseBodyServicesCommodity;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service is the default version. Valid values:
   * 
   * - false: The service is not the default version.
   * 
   * - true: The service is the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - ros: The service is deployed using ROS.
   * 
   * - terraform: The service is deployed using Terraform.
   * 
   * - spi: The service is deployed by calling an SPI.
   * 
   * - operation: The service is deployed using Alibaba Cloud Managed Services.
   * 
   * - container: The service is deployed using a container.
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether the service has a beta version. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * true
   */
  hasBeta?: boolean;
  /**
   * @remarks
   * Indicates whether the service has a draft version. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * true
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * The latest version of the source service for distribution.
   * 
   * @example
   * 1
   */
  latestResellSourceServiceVersion?: string;
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
   * The artifact association type. Valid values:
   * 
   * - ServiceDeployment: Service deployment.
   * 
   * - ServiceUpgrade: Service upgrade.
   * 
   * @example
   * ServiceDeployment
   */
  relationType?: string;
  /**
   * @remarks
   * The distribution authorization status of the service. Valid values:
   * 
   * - CanApply: You can apply for authorization.
   * 
   * - Applied: An application has been submitted.
   * 
   * - Approved: The application is approved.
   * 
   * @example
   * CanApply
   */
  resellApplyStatus?: string;
  /**
   * @remarks
   * The ID of the distributed service.
   * 
   * @example
   * service-70a3b15bb62643****
   */
  resellServiceId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekz5b555****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the service is discoverable. Valid values:
   * 
   * - INVISIBLE: Not discoverable.
   * 
   * - DISCOVERABLE: Discoverable.
   * 
   * @example
   * INVISIBLE
   */
  serviceDiscoverable?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-70a3b15bb62643****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service information.
   */
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  /**
   * @remarks
   * The multi-language configurations of the service.
   */
  serviceLocaleConfigs?: ListServicesResponseBodyServicesServiceLocaleConfigs[];
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - private: The service is deployed in the user\\"s account.
   * 
   * - managed: The service is deployed in the service provider\\"s account.
   * 
   * - operation: It is an Alibaba Cloud Managed Service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The sharing type. Valid values:
   * 
   * - Public: Public. Official and trial deployments are not restricted.
   * 
   * - Restricted: Restricted. Official and trial deployments are restricted.
   * 
   * - OnlyFormalRestricted: Only official deployments are restricted.
   * 
   * - OnlyTrailRestricted: Only trial deployments are restricted.
   * 
   * - Hidden: Hidden. The service is not visible and you cannot request deployment permissions.
   * 
   * @example
   * Public
   */
  shareType?: string;
  /**
   * @remarks
   * The source image.
   * 
   * @example
   * centos_7
   */
  sourceImage?: string;
  /**
   * @remarks
   * The ID of the source service for distribution.
   * 
   * @example
   * service-70a3b15bb62643****
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The version of the source service for distribution.
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The name of the source service provider for distribution.
   * 
   * @example
   * SourceSupplier
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - Draft: The service is in the Draft state.
   * 
   * - Submitted: The service is submitted for review. Modifications are not allowed.
   * 
   * - Approved: The service is approved. Modifications are not allowed. The service can be published.
   * 
   * - Launching: The service is being published.
   * 
   * - Online: The service is published.
   * 
   * - Offline: The service is unpublished.
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
   * The service tags.
   */
  tags?: ListServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * The tenant type for the managed service. Valid values:
   * 
   * - SingleTenant: Single-tenant.
   * 
   * - MultiTenant: Multi-tenant.
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * - Trial: The service supports a trial.
   * 
   * - NotTrial: The service does not support a trial.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The time when the service was last updated.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  updateTime?: string;
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
   * v2.0.0
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether the service is a virtual Internet service. Valid values:
   * 
   * - false: No.
   * 
   * - true: Yes.
   * 
   * @example
   * false
   */
  virtualInternetService?: string;
  static names(): { [key: string]: string } {
    return {
      approvalType: 'ApprovalType',
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      buildInfo: 'BuildInfo',
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      defaultVersion: 'DefaultVersion',
      deployType: 'DeployType',
      hasBeta: 'HasBeta',
      hasDraft: 'HasDraft',
      latestResellSourceServiceVersion: 'LatestResellSourceServiceVersion',
      publishTime: 'PublishTime',
      relationType: 'RelationType',
      resellApplyStatus: 'ResellApplyStatus',
      resellServiceId: 'ResellServiceId',
      resourceGroupId: 'ResourceGroupId',
      serviceDiscoverable: 'ServiceDiscoverable',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceLocaleConfigs: 'ServiceLocaleConfigs',
      serviceType: 'ServiceType',
      shareType: 'ShareType',
      sourceImage: 'SourceImage',
      sourceServiceId: 'SourceServiceId',
      sourceServiceVersion: 'SourceServiceVersion',
      sourceSupplierName: 'SourceSupplierName',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialType: 'TrialType',
      updateTime: 'UpdateTime',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalType: 'string',
      artifactId: 'string',
      artifactVersion: 'string',
      buildInfo: 'string',
      categories: 'string',
      commodity: ListServicesResponseBodyServicesCommodity,
      commodityCode: 'string',
      createTime: 'string',
      defaultVersion: 'boolean',
      deployType: 'string',
      hasBeta: 'boolean',
      hasDraft: 'boolean',
      latestResellSourceServiceVersion: 'string',
      publishTime: 'string',
      relationType: 'string',
      resellApplyStatus: 'string',
      resellServiceId: 'string',
      resourceGroupId: 'string',
      serviceDiscoverable: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      serviceLocaleConfigs: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceLocaleConfigs },
      serviceType: 'string',
      shareType: 'string',
      sourceImage: 'string',
      sourceServiceId: 'string',
      sourceServiceVersion: 'string',
      sourceSupplierName: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesTags },
      tenantType: 'string',
      trialType: 'string',
      updateTime: 'string',
      version: 'string',
      versionName: 'string',
      virtualInternetService: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.serviceLocaleConfigs)) {
      $dara.Model.validateArray(this.serviceLocaleConfigs);
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

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
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
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The list of services.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries that meet the filter criteria.
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
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

