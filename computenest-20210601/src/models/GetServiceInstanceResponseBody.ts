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
   * The bandwidth limit for the private connection established based on the private network interconnection mode of Compute Nest.
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
   * ie-569a9be34f5534f6bc6559b5c1xxxxxx.service-51f80502802e48xxxxxx.cn-hangzhou.computenest.aliyuncs.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IP addresses of the endpoints of the private connections.
   */
  endpointIps?: string[];
  /**
   * @remarks
   * The state of the ingress endpoint. Valid values:
   * 
   * *   Ready: The ingress endpoint is connected.
   * *   Pending: The ingress endpoint is being connected.
   * *   Failed: The ingress endpoint fails to be connected.
   * *   Deleted: The ingress endpoint is deleted.
   * *   Deleting: The ingress endpoint is being deleted.
   * 
   * @example
   * Ready
   */
  ingressEndpointStatus?: string;
  /**
   * @remarks
   * The state of the network service. Valid values:
   * 
   * *   Ready: The network service is connected.
   * *   Pending: The network service is being connected.
   * *   Failed: The network service fails to be connected.
   * *   Deleted: The network service is deleted.
   * *   Deleting: The network service is being deleted.
   * 
   * @example
   * Ready
   */
  networkServiceStatus?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the endpoint of the private connection established based on the private network interconnection mode of Compute Nest belongs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The names of the security groups.
   */
  securityGroups?: string[];
  /**
   * @remarks
   * The names of the vSwitches.
   */
  vSwitches?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
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
      regionId: 'RegionId',
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
      regionId: 'string',
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
   * The network configurations, which are mainly used for private connections.
   */
  connectionConfigs?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs[];
  /**
   * @remarks
   * The endpoint ID of the private connection.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the private zone of the custom private domain name.
   * 
   * @example
   * cb7f214f80ac348d87daaeac1f35****
   */
  privateZoneId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.computenest.aliyuncs.com
   */
  privateZoneName?: string;
  /**
   * @remarks
   * The region ID of the endpoint of the PrivateLink connection.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionConfigs: 'ConnectionConfigs',
      endpointId: 'EndpointId',
      privateZoneId: 'PrivateZoneId',
      privateZoneName: 'PrivateZoneName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionConfigs: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnectionsConnectionConfigs },
      endpointId: 'string',
      privateZoneId: 'string',
      privateZoneName: 'string',
      regionId: 'string',
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
   * The endpoint ID of the reverse private connection.
   * 
   * @example
   * ep-m5ei42370541816b****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
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
   * The ID of the endpoint for the private connection.
   * 
   * >  This parameter is discontinued.
   * 
   * @example
   * ep-m5ei37240541816b****
   */
  endpointId?: string;
  /**
   * @remarks
   * The information about private connections.
   */
  privateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections[];
  /**
   * @remarks
   * The PrivateZone ID.
   * 
   * @example
   * cb7f214f80ac348d87daaeac1f35****
   */
  privateZoneId?: string;
  /**
   * @remarks
   * The information about the reverse private connection.
   */
  reversePrivateVpcConnections?: GetServiceInstanceResponseBodyNetworkConfigReversePrivateVpcConnections[];
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      privateVpcConnections: 'PrivateVpcConnections',
      privateZoneId: 'PrivateZoneId',
      reversePrivateVpcConnections: 'ReversePrivateVpcConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      privateVpcConnections: { 'type': 'array', 'itemType': GetServiceInstanceResponseBodyNetworkConfigPrivateVpcConnections },
      privateZoneId: 'string',
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
   * The name of the service.
   * 
   * @example
   * Docker Community Edition
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * Docker Community Edition (CE) is a free version of the Docker project, aimed at developers, enthusiasts, and individuals and organizations who want to use container technology.
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
   * The service version.
   * 
   * @example
   * draft
   */
  version?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * 0.1.0
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
   * Parameters related to O\\&M operations, including configuration change, prometheus, and log configurations.
   * 
   * @example
   * {"SupportBackup":false,"PrometheusConfigMap":{},"ModifyParametersConfig":[{"TemplateName":"Chinese mainland version","Operation":[{"Name":"Change Plan","Description":"Change Plan","Type":"Custom","SupportPredefinedParameters":true,"EnableLogging":false},{"Name":"Parameter configuration change","Description":"Parameter configuration change","Type":"Custom","SupportPredefinedParameters":false,"EnableLogging":false,"Parameters":["DataDiskSize"]}]}}
   */
  operationMetadata?: string;
  /**
   * @remarks
   * The time when the service version was published.
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
   * *   Draft
   * *   Submited
   * *   Approved
   * *   Online
   * *   Offline
   * *   Deleted
   * *   Launching
   * *   Beta
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
   * The service versions that can be updated.
   */
  upgradableServiceInfos?: GetServiceInstanceResponseBodyServiceUpgradableServiceInfos[];
  /**
   * @remarks
   * The service version that can be updated.
   */
  upgradableServiceVersions?: string[];
  /**
   * @remarks
   * The metadata about the upgrade.
   * 
   * @example
   * {\\"Description\\":\\"Allowed Upgrade 11\\",\\"SupportRollback\\":true,\\"SupportUpgradeFromVersions\\":[],\\"UpgradeComponents\\":[\\"Configuration\\",\\"Resource\\"]}
   */
  upgradeMetadata?: string;
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
   * 1.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      deployMetadata: 'DeployMetadata',
      deployType: 'DeployType',
      operationMetadata: 'OperationMetadata',
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
      upgradeMetadata: 'UpgradeMetadata',
      version: 'Version',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMetadata: 'string',
      deployType: 'string',
      operationMetadata: 'string',
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
      upgradeMetadata: 'string',
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
   * Cloud Marketplace additional billing items.
   * 
   * @example
   * {"TiKVServerCount":"3","package_version":"yuncode5398300001","PDServerCount":"3","TiDBServerCount":"2"}
   */
  components?: string;
  /**
   * @remarks
   * The time when the serviceInstance was created.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the service instance supports the operation feature. Valid values:
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
   * Whether to enable Prometheus monitoring.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The expiration time of service instance.
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
   * https://g.console.aliyun.com/d/xxxxxxxx-cn-mariadb/mysql-xxxxxx-xxxxxxxx-and-dashboard?orgId=355401&refresh=10s
   */
  grafanaDashBoardUrl?: string;
  grantedPermission?: GetServiceInstanceResponseBodyGrantedPermission;
  /**
   * @remarks
   * Indicates whether the hosted O\\&M feature is enabled for the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isOperated?: boolean;
  /**
   * @remarks
   * The expiration time of licence.
   * 
   * @example
   * 2022-01-01T12:00:00
   */
  licenseEndTime?: string;
  /**
   * @remarks
   * The market Instance ID.
   * 
   * @example
   * 704***59
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
   * The network configurations.
   * 
   * >  This parameter is discontinued.
   */
  networkConfig?: GetServiceInstanceResponseBodyNetworkConfig;
  /**
   * @remarks
   * The serviceInstance  to be operated.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  operatedServiceInstanceId?: string;
  /**
   * @remarks
   * The operation end time.
   * 
   * @example
   * 2022-01-28T06:48:56Z
   */
  operationEndTime?: string;
  /**
   * @remarks
   * The operation start time.
   * 
   * @example
   * 2021-12-29T06:48:56Z
   */
  operationStartTime?: string;
  /**
   * @remarks
   * The outputs returned from creating the service instance.
   * 
   * *   If the service is deployed by using a ROS template, all output fields of the template are returned.
   * *   If the service is deployed by calling an SPI operation, the output fields of the service provider and for the Compute Nest additional features are returned.
   * 
   * @example
   * {"InstanceIds":["i-hp38ofxl0dsyfi7z****"]}
   */
  outputs?: string;
  /**
   * @remarks
   * The parameters configured for the service instance.
   * 
   * @example
   * {"param":"value"}
   */
  parameters?: string;
  /**
   * @remarks
   * The billing method of the instance for market. Valid values:
   * 
   * *   Permanent: Permanent purchase
   * *   Subscription: Subscription.
   * *   PayAsYouGo: Pay-as-you-go.
   * *   CustomFixTime: Merchant custom fixed duration.
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
   * Package one
   */
  predefinedParameterName?: string;
  /**
   * @remarks
   * The deployment progress of the service instance. Unit: percentage.
   * 
   * @example
   * 90
   */
  progress?: number;
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
   * rg-bp67acfmxazb4p****
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
   * The service details.
   */
  service?: GetServiceInstanceResponseBodyService;
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
   * The source of the serviceInstance. Valid values:
   * - User
   * - Market
   * - Supplier
   * 
   * @example
   * User
   */
  source?: string;
  /**
   * @remarks
   * The deploy status of the serviceInstance. Valid values:
   * - Created
   * - Deploying
   * - DeployedFailed
   * - Deployed
   * - Upgrading
   * - Deleting
   * - Deleted
   * - DeletedFailed
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The description of the deployment state of the service instance.
   * 
   * @example
   * deploy successfully
   */
  statusDetail?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the service provider.
   * 
   * @example
   * 158927391332*****
   */
  supplierUid?: number;
  /**
   * @remarks
   * Is it supported to convert from trial to private
   */
  supportTrialToPrivate?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetServiceInstanceResponseBodyTags[];
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one
   */
  templateName?: string;
  /**
   * @remarks
   * The time when the serviceInstance  was last updated.
   * 
   * @example
   * 2021-05-20T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The AliUid of the user.
   * 
   * @example
   * 130920852836****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      bizStatus: 'BizStatus',
      components: 'Components',
      createTime: 'CreateTime',
      enableInstanceOps: 'EnableInstanceOps',
      enableUserPrometheus: 'EnableUserPrometheus',
      endTime: 'EndTime',
      grafanaDashBoardUrl: 'GrafanaDashBoardUrl',
      grantedPermission: 'GrantedPermission',
      isOperated: 'IsOperated',
      licenseEndTime: 'LicenseEndTime',
      marketInstanceId: 'MarketInstanceId',
      name: 'Name',
      networkConfig: 'NetworkConfig',
      operatedServiceInstanceId: 'OperatedServiceInstanceId',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      outputs: 'Outputs',
      parameters: 'Parameters',
      payType: 'PayType',
      policyNames: 'PolicyNames',
      predefinedParameterName: 'PredefinedParameterName',
      progress: 'Progress',
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
      supportTrialToPrivate: 'SupportTrialToPrivate',
      tags: 'Tags',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizStatus: 'string',
      components: 'string',
      createTime: 'string',
      enableInstanceOps: 'boolean',
      enableUserPrometheus: 'boolean',
      endTime: 'string',
      grafanaDashBoardUrl: 'string',
      grantedPermission: GetServiceInstanceResponseBodyGrantedPermission,
      isOperated: 'boolean',
      licenseEndTime: 'string',
      marketInstanceId: 'string',
      name: 'string',
      networkConfig: GetServiceInstanceResponseBodyNetworkConfig,
      operatedServiceInstanceId: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      outputs: 'string',
      parameters: 'string',
      payType: 'string',
      policyNames: 'string',
      predefinedParameterName: 'string',
      progress: 'number',
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
      supportTrialToPrivate: 'boolean',
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

