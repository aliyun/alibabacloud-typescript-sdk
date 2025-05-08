// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceInstanceResponseBodyServiceServiceInfos } from "./GetServiceInstanceResponseBodyServiceServiceInfos";
import { GetServiceInstanceResponseBodyServiceUpgradableServiceInfos } from "./GetServiceInstanceResponseBodyServiceUpgradableServiceInfos";


export class GetServiceInstanceResponseBodyService extends $dara.Model {
  /**
   * @remarks
   * The storage configurations of the service. The format in which the deployment information of a service is stored varies based on the deployment type of the service. In this case, the deployment information is stored in the JSON string format.
   */
  deployMetadata?: string;
  /**
   * @remarks
   * The deployment type of the service. Valid values:
   * 
   * *   ros: The service is deployed by using Resource Orchestration Service (ROS).
   * *   terraform: The service is deployed by using Terraform.
   * *   ack: The service is deployed by using Container Service for Kubernetes (ACK).
   * *   spi: The service is deployed by calling a service provider interface (SPI).
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
   * The URL of the service documentation.
   * 
   * @example
   * http://example.com
   */
  serviceDocUrl?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-9c8a3522528b4fe8****
   */
  serviceId?: string;
  /**
   * @remarks
   * The information about the service.
   */
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  /**
   * @remarks
   * The URL of the service page.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com
   */
  serviceProductUrl?: string;
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
   * The status of the service. Valid values:
   * 
   * Draft: The registration request of the service is pending to be submitted.
   * 
   * Submitted: The registration request of the service is submitted.
   * 
   * Approved: The registration request of the service is approved.
   * 
   * Online: The service is published.
   * 
   * Offline: The service is unpublished.
   * 
   * Deleted: The service is deleted.
   * 
   * Launching: The service is being published.
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
   * The upgradable service Info.
   */
  upgradableServiceInfos?: GetServiceInstanceResponseBodyServiceUpgradableServiceInfos[];
  /**
   * @remarks
   * The service versions that can be updated.
   */
  upgradableServiceVersions?: string[];
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  version?: string;
  /**
   * @remarks
   * The custom version name defined by the service provider.
   * 
   * @example
   * 20231127020225
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      publishTime: 'PublishTime',
      serviceDocUrl: 'ServiceDocUrl',
      serviceId: 'ServiceId',
      serviceInfos: 'ServiceInfos',
      serviceProductUrl: 'ServiceProductUrl',
      serviceType: 'ServiceType',
      status: 'Status',
      supplierName: 'SupplierName',
      supplierUrl: 'SupplierUrl',
      upgradableServiceInfos: 'UpgradableServiceInfos',
      upgradableServiceVersions: 'UpgradableServiceVersions',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      publishTime: 'string',
      serviceDocUrl: 'string',
      serviceId: 'string',
      serviceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceServiceInfos },
      serviceProductUrl: 'string',
      serviceType: 'string',
      status: 'string',
      supplierName: 'string',
      supplierUrl: 'string',
      upgradableServiceInfos: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyServiceUpgradableServiceInfos },
      upgradableServiceVersions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    if(Array.isArray(this.upgradableServiceInfos)) {
      $dara.Model.validateArray(this.upgradableServiceInfos);
    }
    if(Array.isArray(this.upgradableServiceVersions)) {
      $dara.Model.validateArray(this.upgradableServiceVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

