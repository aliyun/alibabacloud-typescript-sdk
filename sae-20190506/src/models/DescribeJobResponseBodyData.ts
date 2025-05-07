// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeJobResponseBodyDataConfigMapMountDesc } from "./DescribeJobResponseBodyDataConfigMapMountDesc";
import { DescribeJobResponseBodyDataMountDesc } from "./DescribeJobResponseBodyDataMountDesc";
import { DescribeJobResponseBodyDataOssMountDescs } from "./DescribeJobResponseBodyDataOssMountDescs";
import { DescribeJobResponseBodyDataTags } from "./DescribeJobResponseBodyDataTags";


export class DescribeJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is used to pull images across accounts. For more information, see [Pull images across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/190675.html) and [Grant permissions across Alibaba Cloud accounts by using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The description of the job template.
   * 
   * @example
   * Sample application
   */
  appDescription?: string;
  /**
   * @remarks
   * The ID of the job template.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the job template.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The number of times that the job was retried.
   * 
   * @example
   * 3
   */
  backoffLimit?: number;
  /**
   * @remarks
   * The command that is used to start the image. The command must be an existing executable object in the container. Example:
   * 
   *     command:
   *           - echo
   *           - abc
   *           - >
   *           - file0
   * 
   * In this example, the Command parameter is set to `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup command. This parameter contains the arguments that are required for **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding **Command** example, the CommandArgs parameter is set to `CommandArgs=["abc", ">", "file0"]`. The data type of `["abc", ">", "file0"]` must be an array of strings in the JSON format. If this parameter does not exist in the Command parameter, you do not need to configure it.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The concurrency policy of the job. Valid values:
   * 
   * *   **Forbid**: Concurrent running is prohibited. If the previous job is not completed, no new job is created.
   * *   **Allow**: Concurrent running is allowed.
   * *   **Replace**: If the previous job is not completed when the time to create a new job is reached, the new job replaces the previous job.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The details of the ConfigMap.
   */
  configMapMountDesc?: DescribeJobResponseBodyDataConfigMapMountDesc[];
  /**
   * @remarks
   * The CPU specifications required for each instance. Unit: millicore. This parameter cannot be set to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **16000**
   * *   **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The custom mapping between the hostname and IP address in the container. Valid values:
   * 
   * *   **hostName**: the domain name or hostname.
   * *   **ip**: the IP address.
   * 
   * @example
   * [{"hostName":"test.host.name","ip":"0.0.0.0"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The version of the container, such as Ali-Tomcat, in which a job that is developed based on High-speed Service Framework (HSF) is deployed.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The environment variables. You can configure custom environment variables or reference a ConfigMap. If you want to reference a ConfigMap, you must first create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * *   Custom configuration
   * 
   *     *   **name**: the name of the environment variable.
   *     *   **value**: the value of the environment variable.
   * 
   * *   Reference a ConfigMap
   * 
   *     *   **name**: the name of the environment variable. You can reference one or all keys. To reference all keys, specify `sae-sys-configmap-all-<ConfigMap name>`. Example: `sae-sys-configmap-all-test1`.
   *     *   **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   *     *   **configMapId**: the ID of the ConfigMap.
   *     *   **key**: the key. If you want to reference all keys, you do not need to configure this parameter.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The ID of the corresponding secret.
   * 
   * @example
   * 10
   */
  imagePullSecrets?: string;
  /**
   * @remarks
   * The URL of the image. This parameter is returned only if **PackageType** is set to **Image**.
   * 
   * @example
   * docker.io/library/nginx:1.14.2
   */
  imageUrl?: string;
  /**
   * @remarks
   * The arguments in the JAR package. The arguments are used to start the job. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * start
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The option settings in the JAR package. The settings are used to start the job. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * -Dtest=true
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The version of the Java Development Kit (JDK) on which the deployment package of the application depends. The following versions are supported:
   * 
   * *   **Open JDK 8**
   * *   **Open JDK 7**
   * *   **Dragonwell 11**
   * *   **Dragonwell 8**
   * *   **openjdk-8u191-jdk-alpine3.9**
   * *   **openjdk-7u201-jdk-alpine3.9**
   * 
   * This parameter is not returned if **PackageType** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The size of memory that is required by each instance. Unit: MB. This parameter cannot be set to 0. The values of this parameter correspond to the values of the Cpu parameter:
   * 
   * *   This parameter is set to **1024** if the Cpu parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the Cpu parameter is set to 500, 1000, or 2000.
   * *   This parameter is set to **4096** if the Cpu parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the Cpu parameter is set to 2000, 4000, or 8000.
   * *   This parameter is set to **12288** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **16384** if the Cpu parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24567** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **32768** if the Cpu parameter is set to 16000.
   * *   This parameter is set to **65536** if the Cpu parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the Cpu parameter is set to 32000.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The details of the mounted NAS file system.
   */
  mountDesc?: DescribeJobResponseBodyDataMountDesc[];
  /**
   * @remarks
   * The mount target of the Apsara File Storage NAS (NAS) file system in the virtual private cloud (VPC) where the job template is deployed. If you do not need to modify the NAS configurations when you deploy the job template, configure the **MountHost** parameter only in the first request. You do not need to include this parameter in subsequent requests. If you no longer need to use NAS, leave the **MountHost** parameter empty in the request.
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configurations for mounting the NAS file system.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The ID of the NAS file system.
   * 
   * @example
   * AKSN89**
   */
  nasId?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to read data from and write data to Object Storage Service (OSS).
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey secret that is used to read data from and write data to OSS.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The description of mounted OSS buckets.
   */
  ossMountDescs?: DescribeJobResponseBodyDataOssMountDescs[];
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   If you deploy a Java job template, you can set this parameter to **FatJar**, **War**, or **Image**.
   * 
   * *   If you deploy a PHP job template, the following types are available:
   * 
   *     *   **PhpZip**
   *     *   **IMAGE_PHP_5_4**
   *     *   **IMAGE_PHP_5_4_ALPINE**
   *     *   **IMAGE_PHP_5_5**
   *     *   **IMAGE_PHP_5_5_ALPINE**
   *     *   **IMAGE_PHP_5_6**
   *     *   **IMAGE_PHP_5_6_ALPINE**
   *     *   **IMAGE_PHP_7_0**
   *     *   **IMAGE_PHP_7_0_ALPINE**
   *     *   **IMAGE_PHP_7_1**
   *     *   **IMAGE_PHP_7_1_ALPINE**
   *     *   **IMAGE_PHP_7_2**
   *     *   **IMAGE_PHP_7_2_ALPINE**
   *     *   **IMAGE_PHP_7_3**
   *     *   **IMAGE_PHP_7_3_ALPINE**
   * 
   * *   If you deploy a Python job template, you can set this parameter to **PythonZip** or **Image**.
   * 
   * @example
   * War
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is returned only if **PackageType** is set to **FatJar** or **War**.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required only if **PackageType** is set to **FatJar** or **War**.
   * 
   * @example
   * 1.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The details of the PHP configuration file.
   * 
   * @example
   * k1=v1
   */
  phpConfig?: string;
  /**
   * @remarks
   * The path on which the PHP configuration file for job startup is mounted. Make sure that the PHP server uses this configuration file during the startup.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script that is run immediately after the container is started. Example: `{"exec":{"command":["cat","/etc/group"\\]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is run before the container is stopped. Example: `{"exec":{"command":["cat","/etc/group"\\]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language in which the job template is created. Valid values:
   * 
   * *   **java**: Java
   * *   **php**: PHP
   * *   **python**: Python
   * *   **other**: other programming languages, such as C++, Go, .NET, and Node.js
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * The Internet request URLs of one-time jobs.
   */
  publicWebHookUrls?: string[];
  /**
   * @remarks
   * The Python environment. PYTHON 3.9.15 is supported.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * The configurations for installing custom module dependencies. By default, the dependencies defined by the requirements.txt file in the root directory are installed. If no software package is configured, you can specify dependencies based on your business requirements.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The ID of the job template that you reference.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  refAppId?: string;
  /**
   * @remarks
   * The IDs of the referenced job templates.
   */
  refedAppIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of job instances.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Indicates whether job sharding is enabled.
   * 
   * @example
   * true
   */
  slice?: boolean;
  /**
   * @remarks
   * The parameters of job sharding.
   * 
   * @example
   * SliceEnvs
   */
  sliceEnvs?: string;
  /**
   * @remarks
   * The logging configurations of Log Service.
   * 
   * *   To use Log Service resources that are automatically created by SAE, set this parameter to `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * *   To use custom Log Service resources, set this parameter to `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameter description:
   * 
   * *   **projectName**: the name of the Log Service project.
   * *   **logDir**: the path in which logs are stored.
   * *   **logType**: the log type. **stdout**: the standard output (stdout) log of the container. Only one stdout value for this parameter can be specified. If this parameter is not configured, file logs are collected.
   * *   **logstoreName**: the name of the Logstore in Log Service.
   * *   **logtailName**: the name of the Logtail in Log Service. If this parameter is not configured, a new Logtail is created.
   * 
   * If you do not need to modify the logging configurations when you deploy the application, configure **SlsConfigs** only in the first request. If you no longer need to use Log Service, leave **SlsConfigs** empty in the request.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * Indicates whether the job template is suspended.
   * 
   * @example
   * false
   */
  suspend?: boolean;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeJobResponseBodyDataTags[];
  /**
   * @remarks
   * The timeout period for a graceful shutdown. Default value: 30. Unit: seconds. Valid values: 1 to 300.
   * 
   * @example
   * 10
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The timeout period of the job. Unit: seconds.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The time zone. Default value: **Asia/Shanghai**.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The Tomcat configuration. If you want to delete the configuration, set this parameter to {} or leave this parameter empty. Parameter description:
   * 
   * *   **port**: the port number. Valid values: 1024 to 65535. The root permissions are required to perform operations on ports whose number is smaller than 1024. Enter a value that ranges from 1025 to 65535 because the container has only the admin permissions. If this parameter is not configured, the default value 8080 is used.
   * *   **contextPath**: the path. Default value: /. The value indicates the root directory.
   * *   **maxThreads**: the maximum number of connections in the connection pool. Default value: 400.
   * *   **uriEncoding**: the URI encoding scheme in the Tomcat container. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If this parameter is not configured, the default value **ISO-8859-1** is used.
   * *   **useBodyEncoding**: indicates whether to use the encoding scheme that is specified by **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  triggerConfig?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The internal request URLs for one-time jobs.
   */
  vpcWebHookUrls?: string[];
  /**
   * @remarks
   * The option settings in the WAR package. The settings are used to start the job. The default startup command is `java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.
   * 
   * @example
   * custom-option
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The version of the Tomcat container on which the deployment package depends. The following versions are supported:
   * 
   * *   **apache-tomcat-7.0.91**
   * *   **apache-tomcat-8.5.42**
   * 
   * This parameter is not returned if **PackageType** is set to **Image**.
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
      appId: 'AppId',
      appName: 'AppName',
      backoffLimit: 'BackoffLimit',
      command: 'Command',
      commandArgs: 'CommandArgs',
      concurrencyPolicy: 'ConcurrencyPolicy',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      memory: 'Memory',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      namespaceId: 'NamespaceId',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageType: 'PackageType',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      publicWebHookUrls: 'PublicWebHookUrls',
      python: 'Python',
      pythonModules: 'PythonModules',
      refAppId: 'RefAppId',
      refedAppIds: 'RefedAppIds',
      regionId: 'RegionId',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      slice: 'Slice',
      sliceEnvs: 'SliceEnvs',
      slsConfigs: 'SlsConfigs',
      suspend: 'Suspend',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timeout: 'Timeout',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      triggerConfig: 'TriggerConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcWebHookUrls: 'VpcWebHookUrls',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      backoffLimit: 'number',
      command: 'string',
      commandArgs: 'string',
      concurrencyPolicy: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataConfigMapMountDesc },
      cpu: 'number',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      memory: 'number',
      mountDesc: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataMountDesc },
      mountHost: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataOssMountDescs },
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      publicWebHookUrls: { 'type': 'array', 'itemType': 'string' },
      python: 'string',
      pythonModules: 'string',
      refAppId: 'string',
      refedAppIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      slice: 'boolean',
      sliceEnvs: 'string',
      slsConfigs: 'string',
      suspend: 'boolean',
      tags: { 'type': 'array', 'itemType': DescribeJobResponseBodyDataTags },
      terminationGracePeriodSeconds: 'number',
      timeout: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      triggerConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcWebHookUrls: { 'type': 'array', 'itemType': 'string' },
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    if(Array.isArray(this.mountDesc)) {
      $dara.Model.validateArray(this.mountDesc);
    }
    if(Array.isArray(this.ossMountDescs)) {
      $dara.Model.validateArray(this.ossMountDescs);
    }
    if(Array.isArray(this.publicWebHookUrls)) {
      $dara.Model.validateArray(this.publicWebHookUrls);
    }
    if(Array.isArray(this.refedAppIds)) {
      $dara.Model.validateArray(this.refedAppIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vpcWebHookUrls)) {
      $dara.Model.validateArray(this.vpcWebHookUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

