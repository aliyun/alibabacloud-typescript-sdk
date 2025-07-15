// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig extends $dara.Model {
  /**
   * @remarks
   * The AccessKey of the RAM user that has the resource management permissions on Microservices Engine (MSE).
   * 
   * @example
   * A5FIDxxxxxx
   */
  accessKey?: string;
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * PASSWORD
   */
  authType?: string;
  /**
   * @remarks
   * The name of the cluster to which the microservice belongs.
   * 
   * @example
   * cluster1
   */
  clusters?: string;
  /**
   * @remarks
   * The name of the group to which the microservice that is registered with Nacos belongs.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the namespace where the microservice that is registered with Nacos resides.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The SecretKey of the RAM user that has the resource management permissions on MSE.
   * 
   * @example
   * dl5loxxxxxx
   */
  secretKey?: string;
  /**
   * @remarks
   * The Nacos service address.
   * 
   * @example
   * http://1xx.2xx.3xx.4xx:8848
   */
  serverAddress?: string;
  /**
   * @remarks
   * The microservice name.
   * 
   * @example
   * service-provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      authType: 'AuthType',
      clusters: 'Clusters',
      groupName: 'GroupName',
      namespace: 'Namespace',
      password: 'Password',
      secretKey: 'SecretKey',
      serverAddress: 'ServerAddress',
      serviceName: 'ServiceName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      authType: 'string',
      clusters: 'string',
      groupName: 'string',
      namespace: 'string',
      password: 'string',
      secretKey: 'string',
      serverAddress: 'string',
      serviceName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig extends $dara.Model {
  /**
   * @remarks
   * The connection URL of the ZooKeeper server.
   * 
   * @example
   * http://192.168.1.xxx:2181
   */
  connectString?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * provider
   */
  namespace?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      namespace: 'Namespace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      namespace: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig extends $dara.Model {
  /**
   * @remarks
   * The Nacos configurations.
   */
  nacosConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig;
  /**
   * @remarks
   * The registry type.
   * 
   * @example
   * NACOS
   */
  rcType?: string;
  /**
   * @remarks
   * The ZooKeeper configuration.
   */
  zookeeperConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig;
  static names(): { [key: string]: string } {
    return {
      nacosConfig: 'NacosConfig',
      rcType: 'RcType',
      zookeeperConfig: 'ZookeeperConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nacosConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigNacosConfig,
      rcType: 'string',
      zookeeperConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig,
    };
  }

  validate() {
    if(this.nacosConfig && typeof (this.nacosConfig as any).validate === 'function') {
      (this.nacosConfig as any).validate();
    }
    if(this.zookeeperConfig && typeof (this.zookeeperConfig as any).validate === 'function') {
      (this.zookeeperConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig extends $dara.Model {
  /**
   * @remarks
   * The EDAS application ID.
   * 
   * @example
   * 6cd0c599-dxxx-496d-b3d5-6a71c657xxxxx
   */
  edasAppId?: string;
  /**
   * @remarks
   * The ID of the microservices namespace in EDAS.
   * 
   * @example
   * cn-hangzhou:edasNacos
   */
  microserviceNamespace?: string;
  /**
   * @remarks
   * The ID of the microservices namespace in EDAS.
   * 
   * @example
   * cn-hangzhou:edasNacos
   */
  microserviceNamespaceId?: string;
  /**
   * @remarks
   * The name of the microservices namespace in EDAS.
   * 
   * @example
   * Edas-Nacos
   */
  microserviceNamespaceName?: string;
  /**
   * @remarks
   * The MSE instance ID.
   * 
   * @example
   * mse-cn-jia3n1rxxxx
   */
  mseInstanceId?: string;
  /**
   * @remarks
   * The registration type.
   * 
   * @example
   * EDAS
   */
  registryType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      microserviceNamespace: 'MicroserviceNamespace',
      microserviceNamespaceId: 'MicroserviceNamespaceId',
      microserviceNamespaceName: 'MicroserviceNamespaceName',
      mseInstanceId: 'MseInstanceId',
      registryType: 'RegistryType',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      microserviceNamespace: 'string',
      microserviceNamespaceId: 'string',
      microserviceNamespaceName: 'string',
      mseInstanceId: 'string',
      registryType: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig extends $dara.Model {
  /**
   * @remarks
   * The region ID of the event bus in EventBridge.
   * 
   * @example
   * cn-hangzhou
   */
  eventBridgeRegionId?: string;
  /**
   * @remarks
   * The event bus.
   * 
   * @example
   * testBus
   */
  eventBus?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * dds_driver
   */
  eventSource?: string;
  /**
   * @remarks
   * The ARN of the RAM role to be assumed by API Gateway to access EventBridge.
   * 
   * @example
   * acs:ram::1975133748561***:role/aliyunserviceroleforiotlogexport
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      eventBridgeRegionId: 'EventBridgeRegionId',
      eventBus: 'EventBus',
      eventSource: 'EventSource',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBridgeRegionId: 'string',
      eventBus: 'string',
      eventSource: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig extends $dara.Model {
  /**
   * @remarks
   * The root path of the Function Compute service.
   * 
   * @example
   * https://t*******.ap-*****.fcapp.run/
   */
  fcBaseUrl?: string;
  /**
   * @remarks
   * The region ID of the Function Compute service.
   * 
   * @example
   * cn-hangzhou
   */
  fcRegionId?: string;
  /**
   * @remarks
   * The type of the service in Function Compute.
   * 
   * @example
   * HttpTrigger
   */
  fcType?: string;
  /**
   * @remarks
   * The function name that is defined in Function Compute.
   * 
   * @example
   * edge_function
   */
  functionName?: string;
  /**
   * @remarks
   * Indicates whether the backend service receives only the service path.
   * 
   * @example
   * false
   */
  onlyBusinessPath?: boolean;
  /**
   * @remarks
   * The alias of the function.
   * 
   * @example
   * testQualifier
   */
  qualifier?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is assumed by API Gateway to access Function Compute.
   * 
   * @example
   * acs:ram::31985*:role/aliyunserviceroleforbastionhostpam
   */
  roleArn?: string;
  /**
   * @remarks
   * The service name that is defined in Function Compute.
   * 
   * @example
   * myservice
   */
  serviceName?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * You can specify the TriggerName or TriggerUrl parameter. The TriggerName parameter is optional.
   * 
   * @example
   * test1
   */
  triggerName?: string;
  static names(): { [key: string]: string } {
    return {
      fcBaseUrl: 'FcBaseUrl',
      fcRegionId: 'FcRegionId',
      fcType: 'FcType',
      functionName: 'FunctionName',
      onlyBusinessPath: 'OnlyBusinessPath',
      qualifier: 'Qualifier',
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      triggerName: 'TriggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcBaseUrl: 'string',
      fcRegionId: 'string',
      fcType: 'string',
      functionName: 'string',
      onlyBusinessPath: 'boolean',
      qualifier: 'string',
      roleArn: 'string',
      serviceName: 'string',
      triggerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders extends $dara.Model {
  /**
   * @remarks
   * The header name.
   * 
   * @example
   * test
   */
  headerName?: string;
  /**
   * @remarks
   * The header value.
   * 
   * @example
   * 123
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'HeaderName',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig extends $dara.Model {
  /**
   * @remarks
   * The header in the mocked response.
   */
  mockHeaders?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders[];
  /**
   * @remarks
   * The mocked response.
   * 
   * @example
   * test
   */
  mockResult?: string;
  /**
   * @remarks
   * The status code in the mocked response.
   * 
   * @example
   * 200
   */
  mockStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeaders: { 'type': 'array', 'itemType': DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders },
      mockResult: 'string',
      mockStatusCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mockHeaders)) {
      $dara.Model.validateArray(this.mockHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * my_bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket.
   * 
   * @example
   * cn-hangzhou
   */
  ossRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      ossRegionId: 'OssRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      ossRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Elastic Compute Service (ECS) or Server Load Balancer (SLB) instance in the VPC.
   * 
   * @example
   * i-uf6iaale3gfef9t9cb41
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the VPC configuration.
   * 
   * @example
   * dypls-cn-beijing-slb-pre
   */
  name?: string;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The ID of the VPC access authorization.
   * 
   * @example
   * 2zej3ehuzg9m77kvwnfpn
   */
  vpcAccessId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9v96hqi6d14744sxqmx
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether HTTP or HTTPS is used.
   * 
   * @example
   * http
   */
  vpcScheme?: string;
  /**
   * @remarks
   * The host of the VPC backend service.
   * 
   * @example
   * openapi.alipan.com
   */
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
      vpcScheme: 'VpcScheme',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      port: 'number',
      vpcAccessId: 'string',
      vpcId: 'string',
      vpcScheme: 'string',
      vpcTargetHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the backend service when the backend service is of the Service Discovery type.
   */
  discoveryConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig;
  /**
   * @remarks
   * The EDAS configuration.
   */
  edasConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig;
  /**
   * @remarks
   * The information about the backend service whose type is EventBridge.
   */
  eventBridgeConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig;
  /**
   * @remarks
   * The information about the backend service whose type is Function Compute.
   */
  functionComputeConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig;
  /**
   * @remarks
   * The host of the HTTP backend service.
   * 
   * @example
   * www.host.com
   */
  httpTargetHostName?: string;
  /**
   * @remarks
   * The information about the backend service when the backend service is of the Mock type.
   */
  mockConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig;
  /**
   * @remarks
   * The information about the backend service whose type is Object Storage Service (OSS).
   */
  ossConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig;
  /**
   * @remarks
   * The URL of the backend service.
   * 
   * @example
   * 10.0.0.1
   */
  serviceAddress?: string;
  /**
   * @remarks
   * The timeout period of the backend service, in millisecond.
   * 
   * @example
   * 10000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * The information about the backend service when the backend service is of the VPC type.
   */
  vpcConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      discoveryConfig: 'DiscoveryConfig',
      edasConfig: 'EdasConfig',
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      httpTargetHostName: 'HttpTargetHostName',
      mockConfig: 'MockConfig',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      serviceTimeout: 'ServiceTimeout',
      type: 'Type',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveryConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig,
      edasConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig,
      eventBridgeConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig,
      functionComputeConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig,
      httpTargetHostName: 'string',
      mockConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig,
      ossConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig,
      serviceAddress: 'string',
      serviceTimeout: 'number',
      type: 'string',
      vpcConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig,
    };
  }

  validate() {
    if(this.discoveryConfig && typeof (this.discoveryConfig as any).validate === 'function') {
      (this.discoveryConfig as any).validate();
    }
    if(this.edasConfig && typeof (this.edasConfig as any).validate === 'function') {
      (this.edasConfig as any).validate();
    }
    if(this.eventBridgeConfig && typeof (this.eventBridgeConfig as any).validate === 'function') {
      (this.eventBridgeConfig as any).validate();
    }
    if(this.functionComputeConfig && typeof (this.functionComputeConfig as any).validate === 'function') {
      (this.functionComputeConfig as any).validate();
    }
    if(this.mockConfig && typeof (this.mockConfig as any).validate === 'function') {
      (this.mockConfig as any).validate();
    }
    if(this.ossConfig && typeof (this.ossConfig as any).validate === 'function') {
      (this.ossConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfoBackendModels extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations.
   */
  backendConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig;
  /**
   * @remarks
   * The ID of the backend service in the environment.
   * 
   * @example
   * 5c4995d08e8b4954b0f326e8e4f2b97d
   */
  backendModelId?: string;
  /**
   * @remarks
   * The description of the backend service.
   * 
   * @example
   * testDvs 1
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend service was created.
   * 
   * @example
   * 2021-12-20T03:22:03.000+0000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the backend service was modified.
   * 
   * @example
   * 2021-12-20T03:22:03.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * 6fc978bb63574146b766863dd7bdf661
   */
  stageModeId?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'BackendConfig',
      backendModelId: 'BackendModelId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      stageModeId: 'StageModeId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig,
      backendModelId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      stageModeId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBodyBackendInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 6fc978bb63574146b766863dd7bdf661
   */
  backendId?: string;
  /**
   * @remarks
   * The configurations of the backend service in the environment.
   */
  backendModels?: DescribeBackendInfoResponseBodyBackendInfoBackendModels[];
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * testoss2
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @remarks
   * The time when the backend service was created.
   * 
   * @example
   * 2021-11-22T11:10:46+08:00
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the backend service.
   * 
   * @example
   * add
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend service was modified.
   * 
   * @example
   * 2017-12-11T15:18:09+08:00
   */
  modifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModels: 'BackendModels',
      backendName: 'BackendName',
      backendType: 'BackendType',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModels: { 'type': 'array', 'itemType': DescribeBackendInfoResponseBodyBackendInfoBackendModels },
      backendName: 'string',
      backendType: 'string',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backendModels)) {
      $dara.Model.validateArray(this.backendModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackendInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backend service.
   */
  backendInfo?: DescribeBackendInfoResponseBodyBackendInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AA90E87-3506-5AA6-AFFB-A4D53B4F6231
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backendInfo: 'BackendInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendInfo: DescribeBackendInfoResponseBodyBackendInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backendInfo && typeof (this.backendInfo as any).validate === 'function') {
      (this.backendInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

