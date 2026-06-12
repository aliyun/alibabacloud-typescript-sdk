// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceResponseBodyGrantedPermission extends $dara.Model {
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

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs extends $dara.Model {
  /**
   * @remarks
   * The bandwidth throttling for the connection that is established using the internal network of Compute Nest. Unit: Mbps.
   * 
   * @example
   * 1536Mbps
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the endpoint for the PrivateLink connection.
   */
  endpointIps?: string[];
  /**
   * @remarks
   * The status of the Ingress endpoint. Valid values:
   * 
   * - Ready: The endpoint is connected.
   * 
   * - Pending: The endpoint is being connected.
   * 
   * - Failed: The endpoint failed to be connected.
   * 
   * - Deleted: The endpoint is deleted.
   * 
   * - Deleting: The endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  ingressEndpointStatus?: string;
  /**
   * @remarks
   * The status of the network service. Valid values:
   * 
   * - Ready: The endpoint is connected.
   * 
   * - Pending: The endpoint is being connected.
   * 
   * - Failed: The endpoint failed to be connected.
   * 
   * - Deleted: The endpoint is deleted.
   * 
   * - Deleting: The endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  networkServiceStatus?: string;
  /**
   * @remarks
   * The name of the security group.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The name of the virtual switch.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      connectBandwidth: 'ConnectBandwidth',
      domainName: 'DomainName',
      endpointIps: 'EndpointIps',
      ingressEndpointStatus: 'IngressEndpointStatus',
      networkServiceStatus: 'NetworkServiceStatus',
      securityGroups: 'SecurityGroups',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectBandwidth: 'number',
      domainName: 'string',
      endpointIps: { 'type': 'array', 'itemType': 'string' },
      ingressEndpointStatus: 'string',
      networkServiceStatus: 'string',
      securityGroups: { 'type': 'array', 'itemType': 'string' },
      vSwitches: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointIps)) {
      $dara.Model.validateArray(this.endpointIps);
    }
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The network configuration. This is mainly used for PrivateLink connections.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The ID of the endpoint for the PrivateLink connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the PrivateLink connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateZoneName: 'PrivateZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      endpointServiceId: 'string',
      privateZoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionConfigs)) {
      $dara.Model.validateArray(this.connectionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the reverse PrivateLink connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the PrivateLink connection.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint for the PrivateLink connection.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the endpoint service for the PrivateLink connection.
   * 
   * > This parameter is deprecated.
   * 
   * @example
   * epsrv-5ei07324541816bxxxx
   */
  endpointServiceId?: string;
  /**
   * @remarks
   * The information about the PrivateLink connection.
   */
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  /**
   * @remarks
   * The information about the reverse PrivateLink connection.
   */
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      endpointServiceId: 'EndpointServiceId',
      privateVpcConnections: 'PrivateVpcConnections',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      endpointServiceId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      reversePrivateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections },
    };
  }

  validate() {
    if(Array.isArray(this.privateVpcConnections)) {
      $dara.Model.validateArray(this.privateVpcConnections);
    }
    if(Array.isArray(this.reversePrivateVpcConnections)) {
      $dara.Model.validateArray(this.reversePrivateVpcConnections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyServiceServiceInfos extends $dara.Model {
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
   * The service name.
   * 
   * @example
   * B数据库
   */
  name?: string;
  /**
   * @remarks
   * A short description of the service.
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

export class GetServiceInstanceResponseBodyServiceUpgradableServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The service version to which the service can be upgraded.
   * 
   * @example
   * 4
   */
  version?: string;
  /**
   * @remarks
   * The name of the service version to which the service can be upgraded.
   * 
   * @example
   * New parameter management feature
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceResponseBodyService extends $dara.Model {
  /**
   * @remarks
   * The deployment configuration of the service. The data format varies based on the deployment type. The value is a JSON string.
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
   * The time when the service was published.
   * 
   * @example
   * 2021-05-21T00:00:00Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The URL of the documentation for the service.
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
   * The service information.
   */
  serviceInfos?: GetServiceInstanceResponseBodyServiceServiceInfos[];
  /**
   * @remarks
   * The URL of the product page for the service.
   * 
   * @example
   * https://service-info-private.oss-cn-hangzhou.aliyuncs.com
   */
  serviceProductUrl?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - private: The service is deployed in the user\\"s account.
   * 
   * - managed: The service is deployed in the service provider\\"s account.
   * 
   * - operation: The service is an Alibaba Cloud Managed Services.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * Draft: The service is pending registration.
   * 
   * Submitted: The service is submitted for registration.
   * 
   * Approved: The registration is approved.
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
   * Company A
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
   * The information about the service versions to which the service can be upgraded.
   */
  upgradableServiceInfos?: GetServiceInstanceResponseBodyServiceUpgradableServiceInfos[];
  /**
   * @remarks
   * The service versions to which the service can be upgraded.
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
   * The custom version name specified by the service provider.
   * 
   * @example
   * Version A
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

export class GetServiceInstanceResponseBodyTags extends $dara.Model {
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

export class GetServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status of the service instance. Valid values:
   * 
   * - Normal: The service instance is normal.
   * 
   * - Renewing: The service instance is being renewed.
   * 
   * - RenewFoiled: The service instance failed to be renewed.
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
   * Indicates whether Prometheus is enabled for the user.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the Grafana dashboard.
   * 
   * @example
   * https://g.xxxxxx.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxxxx-quickstart-and-dashboard?orgId=355401&refresh=10s
   */
  grafanaDashBoardUrl?: string;
  grantedPermission?: GetServiceInstanceResponseBodyGrantedPermission;
  /**
   * @remarks
   * Indicates whether Alibaba Cloud Managed Services is enabled for the service instance. Valid values:
   * 
   * - true: Alibaba Cloud Managed Services is enabled for the service instance.
   * 
   * - false: Alibaba Cloud Managed Services is not enabled for the service instance.
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The license metadata.
   * 
   * @example
   * {"renewType":"MONTHLY"}
   */
  licenseMetadata?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * Database B
   */
  name?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * > This parameter is deprecated.
   */
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  /**
   * @remarks
   * The ID of the service instance that is managed by Alibaba Cloud Managed Services.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The end time of the Alibaba Cloud Managed Services.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The additional information about Alibaba Cloud Managed Services.
   * 
   * @example
   * 6cc5ce3590ed7f5529e85fec
   */
  operationExtraInfo?: string;
  /**
   * @remarks
   * The start time of the Alibaba Cloud Managed Services.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The output fields that are returned after the service instance is created.
   * 
   * - In ROS mode, all output fields of the template are returned.
   * 
   * - In SPI mode, the output fields of the ISV and the output fields of the additional features of Compute Nest are returned.
   * 
   * @example
   * {
   *       "InstanceIds": [
   *             "i-hp38ofxl0dsyfi7z****"
   *       ]
   * }
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters that are entered for deploying the service instance.
   * 
   * @example
   * {
   *       "param": "value"
   * }
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - Permanent: The service is permanently purchased.
   * 
   * - Subscription: The service is a subscription service from Alibaba Cloud Marketplace.
   * 
   * - PayAsYouGo: The service is a pay-as-you-go service from Alibaba Cloud Marketplace.
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
   * The package name.
   * 
   * @example
   * Package 1
   */
  predefinedParameterName?: string;
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
   * The logon URL for the member in the resource directory that corresponds to the service instance.
   * 
   * @example
   * https://signin.aliyun.com/switchRole.htm?parentAlias=1307782318217247.onaliyun.com&roleName=ResourceDirectoryAccountAccessRole
   */
  rdAccountLoginUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resources.
   * 
   * @example
   * [
   *       {
   *             "StackId": "stack-xxx"
   *       }
   * ]
   */
  resources?: string;
  /**
   * @remarks
   * The service details.
   */
  service?: GetServiceInstanceResponseBodyService;
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
   * The service type. Valid values:
   * 
   * - private: a service instance that is deployed in the user\\"s account.
   * 
   * - managed: a service instance that is deployed in the service provider\\"s account.
   * 
   * - operation: an Alibaba Cloud Managed Services instance
   * 
   * - poc: a trial service instance.
   * 
   * @example
   * private
   */
  serviceType?: string;
  /**
   * @remarks
   * The source of the service instance. Valid values:
   * 
   * - User: a Compute Nest user.
   * 
   * - Market: Alibaba Cloud Marketplace.
   * 
   * - Supplier: a Compute Nest service provider.
   * 
   * @example
   * User
   */
  source?: string;
  /**
   * @remarks
   * The deployment status of the service instance. Valid values:
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
   * - DeletedFailed: The service instance failed to be deleted.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment status of the instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The service provider\\"s Alibaba Cloud account ID.
   * 
   * @example
   * 1964460391538545
   */
  supplierUid?: number;
  /**
   * @remarks
   * The custom tags.
   */
  tags?: GetServiceInstanceResponseBodyTags[];
  /**
   * @remarks
   * The template name.
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
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      grantedPermission: 'GrantedPermission',
      isOperated: 'IsOperated',
      licenseMetadata: 'LicenseMetadata',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationExtraInfo: 'OperationExtraInfo',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      policyNames: 'PolicyNames',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
      rdAccountLoginUrl: 'RdAccountLoginUrl',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      service: 'Service',
      serviceInstanceId: 'ServiceInstanceId',
      serviceType: 'ServiceType',
      source: 'Source',
      status: 'Status',
      statusDetail: 'StatusDetail',
      supplierUid: 'SupplierUid',
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
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      grantedPermission: GetServiceInstanceResponseBodyGrantedPermission,
      isOperated: 'boolean',
      licenseMetadata: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationExtraInfo: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      policyNames: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
      rdAccountLoginUrl: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      service: GetServiceInstanceResponseBodyService,
      serviceInstanceId: 'string',
      serviceType: 'string',
      source: 'string',
      status: 'string',
      statusDetail: 'string',
      supplierUid: 'number',
      tags: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyTags },
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.grantedPermission && typeof (this.grantedPermission as any).validate === 'function') {
      (this.grantedPermission as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
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

