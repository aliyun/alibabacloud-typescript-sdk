// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResponseBodyDataConfigMapMountDesc extends $dara.Model {
  /**
   * @remarks
   * The ConfigMap ID.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The name of the ConfigMap.
   * 
   * @example
   * test
   */
  configMapName?: string;
  /**
   * @remarks
   * The key of the ConfigMap.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The mount path of the container.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      configMapName: 'ConfigMapName',
      key: 'Key',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      configMapName: 'string',
      key: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataMountDesc extends $dara.Model {
  /**
   * @remarks
   * The mount path of the container.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  /**
   * @remarks
   * The relative file directory of the NAS file system.
   * 
   * @example
   * /
   */
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      nasPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataOssMountDescs extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory or OSS object that you created in OSS. If the OSS mount directory does not exist, an exception is triggered.
   * 
   * @example
   * data/user.data
   */
  bucketPath?: string;
  /**
   * @remarks
   * The container path in SAE. If the path already exists, the existing path is overwritten. If the path does not exist, a new path is created.
   * 
   * @example
   * /usr/data/user.data
   */
  mountPath?: string;
  /**
   * @remarks
   * Specifies whether the container path has read permissions on the resources in the mount directory. Valid values:
   * 
   * - **true**: read-only permissions.
   * - **false**: read and write permissions.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      mountPath: 'mountPath',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      mountPath: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class DescribeJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role required to pull images across accounts. For more information, see [Pull Alibaba Cloud images across accounts](https://help.aliyun.com/document_detail/190675.html) and [Implement cross-account authorization by using RAM roles](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The instance ID of the ACR Enterprise instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The description of the task template.
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
   * The name of the task template.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The number of task retries.
   * 
   * @example
   * 3
   */
  backoffLimit?: number;
  /**
   * @remarks
   * The best-effort policy.
   * 
   * @example
   * besteffort
   */
  bestEffortType?: string;
  /**
   * @remarks
   * The image startup command. The command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * Based on the preceding example, `Command="echo"` and `CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The parameters for the image startup command. These are the parameters required by the **Command** startup command. Format:
   * 
   * `["a","b"]`
   * 
   * In the example of the **Command** parameter, `CommandArgs=["abc", ">", "file0"]`. The `["abc", ">", "file0"]` part must be converted to a string in JSON array format. If this parameter is not required, you do not need to specify it.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The task concurrency policy. Valid values:
   * 
   * - **Forbid**: forbids concurrent execution. A new task is not created if the previous task is not completed.
   * - **Allow**: allows concurrent execution of tasks.
   * - **Replace**: replaces the previous task with a new task if the previous task is not completed when the creation time of the new task arrives.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The ConfigMap information.
   */
  configMapMountDesc?: DescribeJobResponseBodyDataConfigMapMountDesc[];
  /**
   * @remarks
   * The CPU required for each instance. Unit: millicores. The value cannot be 0. Only the following defined specifications are supported:
   * 
   * - **500**
   * - **1000**
   * - **2000**
   * - **4000**
   * - **8000**
   * - **16000**
   * - **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The custom host mapping in the container. Valid values:
   * 
   * - **hostName**: the domain name or hostname.
   * - **ip**: the IP address.
   * 
   * @example
   * [{"hostName":"test.host.name","ip":"0.0.0.0"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The runtime environment version of the task in the HSF framework, such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The container environment variable parameters. You can customize environment variables or reference ConfigMaps. To reference a ConfigMap, create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration:
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable.
   * - Reference ConfigMap:
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, for example, `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: the environment variable reference. Set the value to `configMapRef`.
   *     - **configMapId**: the ConfigMap ID.
   *     - **key**: the key. If you reference all key-value pairs, do not set this field.
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
   * The image address. This parameter is required when **PackageType** is set to **Image**.
   * 
   * @example
   * docker.io/library/nginx:1.14.2
   */
  imageUrl?: string;
  /**
   * @remarks
   * The startup parameters for the JAR package task. Default task startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * start
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package task. Default task startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Dtest=true
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The JDK version required by the deployment package. Valid values:
   * 
   * - **Open JDK 8**
   * - **Open JDK 7**
   * - **Dragonwell 11**
   * - **Dragonwell 8**
   * - **openjdk-8u191-jdk-alpine3.9**
   * - **openjdk-7u201-jdk-alpine3.9**
   * 
   * This parameter is not supported when **PackageType** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The memory required for each instance. Unit: MB. The value cannot be 0. The memory has a one-to-one mapping with the CPU. Only the following defined specifications are supported:
   * - **1024**: corresponds to 500 millicores and 1000 millicores.
   * - **2048**: corresponds to 500, 1000, and 2000 millicores.
   * - **4096**: corresponds to 1000, 2000, and 4000 millicores.
   * - **8192**: corresponds to 2000, 4000, and 8000 millicores.
   * - **12288**: corresponds to 12000 millicores.
   * - **16384**: corresponds to 4000, 8000, and 16000 millicores.
   * - **24576**: corresponds to 12000 millicores.
   * - **32768**: corresponds to 16000 millicores.
   * - **65536**: corresponds to 8000, 16000, and 32000 millicores.
   * - **131072**: corresponds to 32000 millicores.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The mount description.
   */
  mountDesc?: DescribeJobResponseBodyDataMountDesc[];
  /**
   * @remarks
   * The mount target of the NAS file system in the VPC of the task template. If the configuration remains unchanged during deployment, you do not need to set this parameter (that is, the **MountHost** field is not required in the request). If you need to clear the NAS configuration, you must set the value of this field to an empty string (that is, set **MountHost** to "") in the request.
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
   * The configuration for mounting NAS.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The NAS ID.
   * 
   * @example
   * AKSN89**
   */
  nasId?: string;
  /**
   * @remarks
   * The AccessKey ID for OSS read and write operations.
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey Secret for OSS read and write operations.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The OSS mount description.
   */
  ossMountDescs?: DescribeJobResponseBodyDataOssMountDescs[];
  /**
   * @remarks
   * The task package type. Valid values:
   * 
   * - If you deploy the task by using Java, valid values are **FatJar**, **War**, and **Image**.
   * - If you deploy the task by using PHP, valid values are:
   *     - **PhpZip**
   *     - **IMAGE_PHP_5_4**
   *     - **IMAGE_PHP_5_4_ALPINE**
   *     - **IMAGE_PHP_5_5**
   *     - **IMAGE_PHP_5_5_ALPINE**
   *     - **IMAGE_PHP_5_6**
   *     - **IMAGE_PHP_5_6_ALPINE**
   *     - **IMAGE_PHP_7_0**
   *     - **IMAGE_PHP_7_0_ALPINE**
   *     - **IMAGE_PHP_7_1**
   *     - **IMAGE_PHP_7_1_ALPINE**
   *     - **IMAGE_PHP_7_2**
   *     - **IMAGE_PHP_7_2_ALPINE**
   *     - **IMAGE_PHP_7_3**
   *     - **IMAGE_PHP_7_3_ALPINE**
   * - If you deploy the task by using Python, valid values are **PythonZip** and **Image**.
   * 
   * @example
   * War
   */
  packageType?: string;
  /**
   * @remarks
   * The deployment package URL. This parameter is required when **PackageType** is set to **FatJar** or **War**.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required when **PackageType** is set to **FatJar** or **War**.
   * 
   * @example
   * 1.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The content of the PHP configuration file.
   * 
   * @example
   * k1=v1
   */
  phpConfig?: string;
  /**
   * @remarks
   * The mount path of the PHP task startup configuration. You must ensure that the PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script to execute after the container starts. A script is triggered and executed immediately after the container is created. Format: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. A script is triggered and executed before the container is deleted. Format: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language of the technology stack used to create the task template. Valid values:
   * 
   * - **java**: Java.
   * - **php**: PHP.
   * - **python**: Python.
   * - **other**: Multiple languages, such as C++, Go, .NET, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * The list of public request URLs for the one-time task.
   */
  publicWebHookUrls?: string[];
  /**
   * @remarks
   * The Python environment. Python 3.9.15 is supported.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * The module dependencies for custom installation. By default, the dependencies defined in the requirements.txt file in the root folder are installed. If no custom package is configured, you can specify the dependencies to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The ID of the referenced task template.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  refAppId?: string;
  /**
   * @remarks
   * The list of IDs of the referenced task targets.
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
   * The number of task instances.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable task slicing.
   * 
   * @example
   * true
   */
  slice?: boolean;
  /**
   * @remarks
   * The task slicing parameters.
   * 
   * @example
   * SliceEnvs
   */
  sliceEnvs?: string;
  /**
   * @remarks
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - To use SLS resources automatically created by Serverless App Engine (SAE): `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - To use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameter descriptions:
   * 
   * - **projectName**: the name of the SLS project.  
   * - **logDir**: the log path.
   * - **logType**: the log type. **stdout** indicates container standard output logs. Only one **stdout** log can be set. If this parameter is not set, file logs are collected.
   * - **logstoreName**: the name of the SLS Logstore.
   * - **logtailName**: the name of the SLS Logtail. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection configuration remains unchanged during multiple deployments, you do not need to set this parameter (that is, the **SlsConfigs** field is not required in the request). If you no longer need the SLS collection feature, you must set the value of this field to an empty string (that is, set **SlsConfigs** to "") in the request.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * Specifies whether to suspend the task template.
   * 
   * @example
   * false
   */
  suspend?: boolean;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeJobResponseBodyDataTags[];
  /**
   * @remarks
   * The graceful shutdown timeout period. Default value: 30. Unit: seconds. Valid values: 1 to 300.
   * 
   * @example
   * 10
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The task timeout period. Unit: seconds.
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
   * The Tomcat file configuration. Set this parameter to "" or "{}" to delete the configuration:
   * 
   * - **port**: the port range is 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. Default value: 8080.
   * - **contextPath**: the access path. Default value: the root directory "/".
   * - **maxThreads**: the maximum number of connections in the connection pool. Default value: 400.
   * - **uriEncoding**: the Tomcat encoding format. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default value: **ISO-8859-1**.
   * - **useBodyEncoding**: specifies whether to use **BodyEncoding for URL**. Default value: **true**.
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
   * The VPC ID.
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of internal request URLs for one-time tasks.
   */
  vpcWebHookUrls?: string[];
  /**
   * @remarks
   * The startup options for the WAR package task. Default task startup command: `java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.
   * 
   * @example
   * custom-option
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version required by the deployment package. Valid values:
   * 
   * - **apache-tomcat-7.0.91**
   * - **apache-tomcat-8.5.42**
   * 
   * This parameter is not supported when **PackageType** is set to **Image**.
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
      bestEffortType: 'BestEffortType',
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
      bestEffortType: 'string',
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

export class DescribeJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task template information.
   */
  data?: DescribeJobResponseBodyData;
  /**
   * @remarks
   * The error code. 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidAppId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the task template configuration was retrieved successfully. Valid values:
   * 
   * - **true**: Retrieved successfully.
   * - **false**: Failed to retrieve.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to accurately query call information.
   * 
   * @example
   * ac1a0b2215622246421415014e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeJobResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

