// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitContainerConfig } from "./InitContainerConfig";
import { SidecarContainerConfig } from "./SidecarContainerConfig";


export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * acs:ram::123456789012\\*\\*\\*\\*:role/adminrole
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * cri-xxxxxx
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * This is a test description.
   * 
   * @example
   * This is a test description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The name of the application. The name can contain digits, letters, and hyphens (-). The name must start with a letter and cannot end with a hyphen (-). It cannot exceed 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * Select micro_service, which is the application.
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  associateEip?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically configure the network environment. Valid values:
   * 
   * *   **true**: SAE automatically configures the network environment when you create the application. If you set this parameter to true, the values of the **NamespaceId**, **VpcId**, **vSwitchId**, and **SecurityGroupId** parameters are ignored.
   * *   **false**: SAE configures the network environment based on your settings when you create the application.
   * 
   * >  If you select **true**, other **NamespaceId** will be ignored.
   * 
   * @example
   * true
   */
  autoConfig?: boolean;
  /**
   * @remarks
   * The ID of the basic application.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9de8a41
   */
  baseAppId?: string;
  /**
   * @remarks
   * sleep
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * 1d
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * 1000
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   * 
   * @example
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  deploy?: boolean;
  /**
   * @example
   * 50
   */
  diskSize?: number;
  /**
   * @remarks
   * . NET Framework version number:
   * 
   * *   .NET 3.1
   * *   .NET 5.0
   * *   .NET 6.0
   * *   .NET 7.0
   * *   .NET 8.0
   * 
   * @example
   * .NET 3.1
   */
  dotnet?: string;
  /**
   * @remarks
   * 3.5.3
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @example
   * true
   */
  enableCpuBurst?: boolean;
  /**
   * @example
   * false
   */
  enableEbpf?: string;
  /**
   * @remarks
   * Indicates whether to enable the new ARMS feature:
   * 
   * *   true: enables this parameter.
   * *   false: disables this parameter.
   * 
   * @example
   * false
   */
  enableNewArms?: boolean;
  enablePrometheus?: boolean;
  /**
   * @example
   * true
   */
  enableSidecarResourceIsolated?: boolean;
  /**
   * @remarks
   * The environment variables. You can configure custom environment variables or reference a ConfigMap. Before you can reference a ConfigMap, you must create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * *   Custom configuration
   * 
   *     *   **name**: the name of the environment variable.
   *     *   **value**: the value of the environment variable. The priority of the custom configuration is higher than valueFrom.
   * 
   * *   Reference a ConfigMap (valueFrom)
   * 
   *     *   **name**: the name of the environment variable. You can reference one or all keys. To reference all keys, specify `sae-sys-configmap-all-<ConfigMap name>`. Example: `sae-sys-configmap-all-test1`.
   *     *   **valueFrom**: the reference of the environment variable. Valid value: `configMapRef`.
   *     *   **configMapId**: the ID of the ConfigMap.
   *     *   **key**: the key. If you want to reference all key values, you do not need to configure this parameter.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  gpuConfig?: string;
  /**
   * @example
   * 10
   */
  imagePullSecrets?: string;
  /**
   * @remarks
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  initContainersConfig?: InitContainerConfig[];
  isStateful?: boolean;
  /**
   * @remarks
   * custom-args
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * \\-Xms4G -Xmx4G
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * Open JDK 8
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @example
   * {"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX\\","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}
   */
  kafkaConfigs?: string;
  /**
   * @remarks
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  liveness?: string;
  /**
   * @remarks
   * 1024
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The Registry configurations.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-zvp2bh6h70r\\",\\"namespace\\":\\"4c0aa74f-57cb-423c-b6af-5d9f2d0e3dbd\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @example
   * {"enable": true,"mseLosslessRule": {"delayTime": 0,"enable": false,"notice": false,"warmupTime": 120}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * [{mountPath: "/tmp", nasPath: "/"}]
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * example.com
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * cn-beijing:test
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * KSAK\\*\\*\\*\\*
   * 
   * @example
   * KSAK****
   */
  nasId?: string;
  /**
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @example
   * sae-test
   */
  oidcRoleName?: string;
  /**
   * @remarks
   * xxxxxx
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * xxxxxx
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * FatJar
   * 
   * This parameter is required.
   * 
   * @example
   * FatJar
   */
  packageType?: string;
  /**
   * @remarks
   * http://myoss.oss-cn-\\*\\*\\*\\*.aliyuncs.com/my-buc/2019-06-30/\\*\\*\\*\\*.jar
   * 
   * @example
   * http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * 1.0.0
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  /**
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * /usr/local/etc/php/conf.d/arms.ini
   * 
   * @example
   * /usr/local/etc/php/conf.d/arms.ini
   */
  phpArmsConfigLocation?: string;
  /**
   * @remarks
   * k1=v1
   * 
   * @example
   * k1=v1
   */
  phpConfig?: string;
  /**
   * @remarks
   * /usr/local/etc/php/php.ini
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * {"exec":{"command":["cat","/etc/group"]}}
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * {"exec":{"command":["cat","/etc/group"]}}
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @example
   * {"serviceName":"bwm-poc-sc-gateway-cn-beijing-front","namespaceId":"cn-beijing:front","portAndProtocol":{"18012":"TCP"},"enable":true}
   */
  pvtzDiscoverySvc?: string;
  /**
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  readiness?: string;
  /**
   * @remarks
   * 1
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @example
   * UNLL
   */
  resourceType?: string;
  /**
   * @remarks
   * The SAE version. Supported versions:
   * 
   * *   **v1**
   * *   **v2**
   * 
   * @example
   * v1
   */
  saeVersion?: string;
  /**
   * @example
   * [{“secretId":10,”key":"test","mountPath":"/tmp"}]
   */
  secretMountDesc?: string;
  /**
   * @remarks
   * sg-wz969ngg2e49q5i4\\*\\*\\*\\*
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The canary tag configured for the application.
   * 
   * @example
   * {\\"alicloud.service.tag\\":\\"g1\\"}
   */
  serviceTags?: string;
  sidecarContainersConfig?: SidecarContainerConfig[];
  /**
   * @remarks
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  startupProbe?: string;
  /**
   * @remarks
   * 30
   * 
   * @example
   * 30
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * Asia/Shanghai
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * vsw-bp12mw1f8k3jgygk9\\*\\*\\*\\*
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * vpc-bp1aevy8sofi8mh1q\\*\\*\\*\\*
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
  vpcId?: string;
  /**
   * @remarks
   * CATALINA_OPTS=\\\\"$CATALINA_OPTS $Options\\\\" catalina.sh run
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * apache-tomcat-7.0.91
   * 
   * @example
   * apache-tomcat-7.0.91
   */
  webContainer?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appName: 'AppName',
      appSource: 'AppSource',
      associateEip: 'AssociateEip',
      autoConfig: 'AutoConfig',
      baseAppId: 'BaseAppId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      customImageNetworkType: 'CustomImageNetworkType',
      deploy: 'Deploy',
      diskSize: 'DiskSize',
      dotnet: 'Dotnet',
      edasContainerVersion: 'EdasContainerVersion',
      enableCpuBurst: 'EnableCpuBurst',
      enableEbpf: 'EnableEbpf',
      enableNewArms: 'EnableNewArms',
      enablePrometheus: 'EnablePrometheus',
      enableSidecarResourceIsolated: 'EnableSidecarResourceIsolated',
      envs: 'Envs',
      gpuConfig: 'GpuConfig',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      initContainersConfig: 'InitContainersConfig',
      isStateful: 'IsStateful',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      liveness: 'Liveness',
      memory: 'Memory',
      microRegistration: 'MicroRegistration',
      microRegistrationConfig: 'MicroRegistrationConfig',
      microserviceEngineConfig: 'MicroserviceEngineConfig',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      namespaceId: 'NamespaceId',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      newSaeVersion: 'NewSaeVersion',
      oidcRoleName: 'OidcRoleName',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      php: 'Php',
      phpArmsConfigLocation: 'PhpArmsConfigLocation',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      pvtzDiscoverySvc: 'PvtzDiscoverySvc',
      python: 'Python',
      pythonModules: 'PythonModules',
      readiness: 'Readiness',
      replicas: 'Replicas',
      resourceType: 'ResourceType',
      saeVersion: 'SaeVersion',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfig: 'SidecarContainersConfig',
      slsConfigs: 'SlsConfigs',
      startupProbe: 'StartupProbe',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appName: 'string',
      appSource: 'string',
      associateEip: 'boolean',
      autoConfig: 'boolean',
      baseAppId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      customImageNetworkType: 'string',
      deploy: 'boolean',
      diskSize: 'number',
      dotnet: 'string',
      edasContainerVersion: 'string',
      enableCpuBurst: 'boolean',
      enableEbpf: 'string',
      enableNewArms: 'boolean',
      enablePrometheus: 'boolean',
      enableSidecarResourceIsolated: 'boolean',
      envs: 'string',
      gpuConfig: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      initContainersConfig: { 'type': 'array', 'itemType': InitContainerConfig },
      isStateful: 'boolean',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      liveness: 'string',
      memory: 'number',
      microRegistration: 'string',
      microRegistrationConfig: 'string',
      microserviceEngineConfig: 'string',
      mountDesc: 'string',
      mountHost: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      newSaeVersion: 'string',
      oidcRoleName: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      php: 'string',
      phpArmsConfigLocation: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      pvtzDiscoverySvc: 'string',
      python: 'string',
      pythonModules: 'string',
      readiness: 'string',
      replicas: 'number',
      resourceType: 'string',
      saeVersion: 'string',
      secretMountDesc: 'string',
      securityGroupId: 'string',
      serviceTags: 'string',
      sidecarContainersConfig: { 'type': 'array', 'itemType': SidecarContainerConfig },
      slsConfigs: 'string',
      startupProbe: 'string',
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.initContainersConfig)) {
      $dara.Model.validateArray(this.initContainersConfig);
    }
    if(Array.isArray(this.sidecarContainersConfig)) {
      $dara.Model.validateArray(this.sidecarContainersConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

