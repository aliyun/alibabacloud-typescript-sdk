// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesResponseBodyServicesCommodity extends $dara.Model {
  /**
   * @remarks
   * The commodity specification code.
   * 
   * @example
   * cmjj00****
   */
  commodityCode?: string;
  /**
   * @remarks
   * The deployment page.
   * 
   * @example
   * Order: Order page
   * Detail: Details page
   */
  deployPage?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      deployPage: 'DeployPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      deployPage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServicesServiceInfosSoftwares extends $dara.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 6.0.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
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
   * The service overview.
   * 
   * @example
   * B is an open-source distributed relational database independently designed and developed by Company A.
   */
  shortDescription?: string;
  /**
   * @remarks
   * The software information of the service.
   */
  softwares?: ListServicesResponseBodyServicesServiceInfosSoftwares[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
      softwares: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfosSoftwares },
    };
  }

  validate() {
    if(Array.isArray(this.softwares)) {
      $dara.Model.validateArray(this.softwares);
    }
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
   * The raw data value of the business information.
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
   * The category of the data disk. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * - cloud_ssd: standard SSD.
   * 
   * - cloud_essd: ESSD.
   * 
   * - cloud: basic disk.
   * 
   * @example
   * cloud_ssd
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
   * cmjj00xxxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * The deployment source of the service. Valid values:
   * 
   * - NoWhere: The service has no deployment source.
   * 
   * - Marketplace: The service is deployed from Alibaba Cloud Marketplace.
   * 
   * - ComputeNest: The service is deployed from Compute Nest.
   * 
   * @example
   * ComputeNest
   */
  deployFrom?: string;
  /**
   * @remarks
   * The deployment type. Valid values:
   * 
   * - ros: The service is deployed using ROS.
   * 
   * - terraform: The service is deployed using Terraform.
   * 
   * - spi: The service is deployed by calling SPI.
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
   * 2022-01-21T10:35:44Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The service score.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-6b5d632edd394dxxxxxx
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
   * The URL of the product page.
   * 
   * @example
   * http://example1.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - private: The service is deployed in the user\\"s account.
   * 
   * - managed: The service is hosted in the service provider\\"s account.
   * 
   * - operation: The service is an Alibaba Cloud Managed Service.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - Draft: The service is in the draft state.
   * 
   * - Submitted: The service is submitted for review. You cannot modify the service.
   * 
   * - Approved: The service is approved. You cannot modify the service, but you can publish it.
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
   * The service provider name.
   * 
   * @example
   * Company A Ltd.
   */
  supplierName?: string;
  /**
   * @remarks
   * The English name of the service provider.
   * 
   * @example
   * Alibaba Cloud
   */
  supplierNameEng?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 1436322xxxxx
   */
  supplierUid?: number;
  /**
   * @remarks
   * The service provider\\"s URL.
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
   * The tenant type. Valid values:
   * 
   * - SingleTenant: single-tenant.
   * 
   * - MultiTenant: multi-tenant.
   * 
   * @example
   * SingleTenant
   */
  tenantType?: string;
  /**
   * @remarks
   * The trial duration. Unit: days. The maximum trial duration is 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: string;
  /**
   * @remarks
   * The trial type. Valid values:
   * 
   * - Trial: The service supports trial.
   * 
   * - NotTrial: The service does not support trial.
   * 
   * @example
   * Trial
   */
  trialType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 4
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
      categories: 'Categories',
      commodity: 'Commodity',
      commodityCode: 'CommodityCode',
      deployFrom: 'DeployFrom',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      score: 'Score',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceLocaleConfigs: 'ServiceLocaleConfigs',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierNameEng: 'SupplierNameEng',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
      tags: 'Tags',
      tenantType: 'TenantType',
      trialDuration: 'TrialDuration',
      trialType: 'TrialType',
      version: 'Version',
      versionName: 'VersionName',
      virtualInternetService: 'VirtualInternetService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      commodity: ListServicesResponseBodyServicesCommodity,
      commodityCode: 'string',
      deployFrom: 'string',
      deployType: 'string',
      publishTime: 'string',
      score: 'number',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceInfos },
      serviceLocaleConfigs: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesServiceLocaleConfigs },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierNameEng: 'string',
      supplierUid: 'number',
      supplierUrl: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesResponseBodyServicesTags },
      tenantType: 'string',
      trialDuration: 'string',
      trialType: 'string',
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
   * The number of entries returned per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI41
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F976EF8-C10A-57DC-917C-BB7BEB508FFB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of services.
   */
  services?: ListServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
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

