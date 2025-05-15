// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServicesResponseBodyServicesCommodity } from "./ListServicesResponseBodyServicesCommodity";
import { ListServicesResponseBodyServicesServiceInfos } from "./ListServicesResponseBodyServicesServiceInfos";
import { ListServicesResponseBodyServicesTags } from "./ListServicesResponseBodyServicesTags";


export class ListServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The category of the service.
   * 
   * @example
   * cloud_ssd
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
   * Service deployment approach. Valid values:
   * - NoWhere
   * 
   * - Marketplace
   * 
   * - ComputeNest
   * 
   * @example
   * ComputeNest
   */
  deployFrom?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
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
   * Service recommendation score.
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
   * The information about the service.
   */
  serviceInfos?: ListServicesResponseBodyServicesServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * http://example1.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * - private: The service is a private service and is deployed within the account of a customer.
   * - managed: The service is a fully managed service and is deployed within the account of a service provider.
   * - operation: The service is a hosted O&M service.
   * 
   * @example
   * private
   */
  serviceType?: string;
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
   * The name of service provider.
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
   * The URL of the service provider.
   * 
   * @example
   * http://example.com
   */
  supplierUrl?: string;
  /**
   * @remarks
   * The tags.
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
   * The trial duration. Unit: day. The maximum trial duration cannot exceed 30 days.
   * 
   * @example
   * 7
   */
  trialDuration?: string;
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
   * The version of the service.
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
   * *   false
   * *   true
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

