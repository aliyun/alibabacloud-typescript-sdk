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
   * test
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
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
   * true
   * 
   * @example
   * true
   */
  autoConfig?: boolean;
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
  customImageNetworkType?: string;
  /**
   * @remarks
   * true
   * 
   * @example
   * true
   */
  deploy?: boolean;
  diskSize?: number;
  dotnet?: string;
  /**
   * @remarks
   * 3.5.3
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  enableCpuBurst?: boolean;
  enableEbpf?: string;
  enableNewArms?: boolean;
  enableSidecarResourceIsolated?: boolean;
  /**
   * @remarks
   * [{"name":"envtmp","value":"0"}]
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
  microRegistrationConfig?: string;
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
  newSaeVersion?: string;
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
  resourceType?: string;
  saeVersion?: string;
  secretMountDesc?: string;
  /**
   * @remarks
   * sg-wz969ngg2e49q5i4\\*\\*\\*\\*
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
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
      enableSidecarResourceIsolated: 'EnableSidecarResourceIsolated',
      envs: 'Envs',
      gpuConfig: 'GpuConfig',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      initContainersConfig: 'InitContainersConfig',
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
      enableSidecarResourceIsolated: 'boolean',
      envs: 'string',
      gpuConfig: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      initContainersConfig: { 'type': 'array', 'itemType': InitContainerConfig },
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

