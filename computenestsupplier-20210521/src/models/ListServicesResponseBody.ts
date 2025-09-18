// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyServicesCommodity extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration metadata related to Saas Boost.
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
   * *   SaasBoost: Saas Boost.
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
   * http://img.tidb.oss.url
   */
  image?: string;
  /**
   * @remarks
   * The language of the service. Valid values:
   * 
   * *   zh-CN: Chinese.
   * *   en-US: English.
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
   * SpringBoot-ECS容器版
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
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
  enValue?: string;
  originalValue?: string;
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
   * The approval type for applications for using the service. Valid values:
   * 
   * *   Manual: The applications are manual reviewed.
   * *   AutoPass: The applications are automatically approved.
   * 
   * @example
   * AutoPass
   */
  approvalType?: string;
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * artifact-21ca53ac16a643xxxxxx
   */
  artifactId?: string;
  /**
   * @remarks
   * The version of the artifact.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The informathon for build service.
   * 
   * @example
   * { "RepoUrl": "https://github.com/user/repo.git", "Brancn": "main"}
   */
  buildInfo?: string;
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * OpenSource
   */
  categories?: string;
  /**
   * @remarks
   * The commodity details.
   */
  commodity?: ListServicesResponseBodyServicesCommodity;
  /**
   * @remarks
   * The commodity code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
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
   * Indicates whether the version is the default version. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   spi: The service is deployed by calling the Service Provider Interface (SPI).
   * *   operation: The service is deployed by using a hosted O\\&M service.
   * *   container: The service is deployed by using a container.
   * *
   * 
   * @example
   * ros
   */
  deployType?: string;
  /**
   * @remarks
   * Indicates whether the service has a beta version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasBeta?: boolean;
  /**
   * @remarks
   * Indicates whether the service has a draft version. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  hasDraft?: boolean;
  /**
   * @remarks
   * The latest version of the distribution source service.
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
   * The purpose of the artifact. Valid values:
   * 
   * *   ServiceDeployment: The artifact is used to create service instances.
   * *   ServiceUpgrade: The artifact is used to upgrade service instances.
   * 
   * @example
   * ServiceDeployment
   */
  relationType?: string;
  /**
   * @remarks
   * The state of distribution authorization of the service. Valid values:
   * 
   * *   CanApply: Distributors can apply for distribution permissions.
   * *   Applied: The application for distribution permissions is submitted.
   * *   Approved: The application for distribution permissions is approved.
   * 
   * @example
   * CanApply
   */
  resellApplyStatus?: string;
  /**
   * @remarks
   * The ID of the distribution service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  resellServiceId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz5b555xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the service is visible. Valid values:
   * 
   * *   INVISIBLE
   * *   DISCOVERABLE
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
   * service-70a3b15bb62643xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  serviceLocaleConfigs?: ListServicesResponseBodyServicesServiceLocaleConfigs[];
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
   * The permission type of the deployment URL. Valid values:
   * 
   * *   Public: All users can go to the URL to create a formal service instance or a trial service instance.
   * *   Restricted: Only users in the whitelist can go to the URL to create a formal service instance or a trial service instance.
   * *   OnlyFormalRestricted: Only users in the whitelist can go to the URL to create a formal service instance.
   * *   OnlyTrailRestricted: Only users in the whitelist can go to the URL to create a trial service instance.
   * *   Hidden: Users not in the whitelist cannot see the service details page when they go to the URL and cannot request deployment permissions.
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
   * The ID of the distribution source service.
   * 
   * @example
   * service-70a3b15bb62643xxxxxx
   */
  sourceServiceId?: string;
  /**
   * @remarks
   * The version of the distribution source service.
   * 
   * @example
   * 1
   */
  sourceServiceVersion?: string;
  /**
   * @remarks
   * The name of the distribution source service provider.
   * 
   * @example
   * SourceSupplier
   */
  sourceSupplierName?: string;
  /**
   * @remarks
   * The state of the service. Valid values:
   * 
   * *   Draft: The service is a draft.
   * *   Submitted: The service is submitted for review. You cannot modify services in this state.
   * *   Approved: The service is approved. You cannot modify services in this state. You can publish services in this state.
   * *   Launching: The service is being published.
   * *   Online: The service is published.
   * *   Offline: The service is unpublished.
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
   * The service tags.
   */
  tags?: ListServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * The tenant type of the managed service. Valid values:
   * 
   * *   SingleTenant
   * *   MultiTenant
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The time when the service was modified.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  updateTime?: string;
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
   * v2.0.0
   */
  versionName?: string;
  /**
   * @remarks
   * Indicates whether the service is a virtual Internet service. Valid values:
   * 
   * *   false
   * *   true
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 1
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
   * 51945B04-6AA6-410D-93BA-236E0248B104
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: ListServicesResponseBodyServices[];
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

