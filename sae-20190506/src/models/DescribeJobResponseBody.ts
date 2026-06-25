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
   * The key of the key-value pair in the ConfigMap.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The container mount path.
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
   * The container mount path.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  /**
   * @remarks
   * The directory in the Apsara File Storage NAS file system.
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
   * The directory or object that you created in the OSS bucket. An exception is returned if the specified mount directory does not exist.
   * 
   * @example
   * data/user.data
   */
  bucketPath?: string;
  /**
   * @remarks
   * The path in your SAE container. If the path exists, it is overwritten. If the path does not exist, a new path is created.
   * 
   * @example
   * /usr/data/user.data
   */
  mountPath?: string;
  /**
   * @remarks
   * Specifies whether the container has read-only access to the mounted resources. Valid values:
   * 
   * - **true**: The path has read-only permissions.
   * 
   * - **false**: The path has read and write permissions.
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
   * The ARN of the RAM role that is required to pull images across accounts. For more information, see [Pull images across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/190675.html) and [Grant permissions across Alibaba Cloud accounts by using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ID of the Container Registry (ACR) Enterprise Edition instance.
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
   * The maximum number of retries for a failed job.
   * 
   * @example
   * 3
   */
  backoffLimit?: number;
  /**
   * @remarks
   * The Best-Effort policy.
   */
  bestEffortType?: string;
  /**
   * @remarks
   * The image startup command. The command must be an executable that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * 
   * In this example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup command. The arguments are passed to the **Command** parameter. Format:
   * 
   * `["a","b"]`
   * 
   * In the example of the **Command** parameter, `CommandArgs=["abc", ">", "file0"]`. In this case, `["abc", ">", "file0"]` must be converted to a string in the format of a JSON array. If this parameter is not specified, you do not need to configure it.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The concurrency policy for the job. Valid values:
   * 
   * - **Forbid**: Forbids concurrent runs. A new job is not created if the previous one has not completed.
   * 
   * - **Allow**: Allows concurrent runs.
   * 
   * - **Replace**: If the previous job has not completed, the new job replaces it.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The information about the mounted ConfigMap.
   */
  configMapMountDesc?: DescribeJobResponseBodyDataConfigMapMountDesc[];
  /**
   * @remarks
   * The number of CPU cores that are required by each instance. Unit: millicores. This parameter cannot be set to 0. Only the following fixed specifications are supported:
   * 
   * - **500**
   * 
   * - **1000**
   * 
   * - **2000**
   * 
   * - **4000**
   * 
   * - **8000**
   * 
   * - **16000**
   * 
   * - **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The custom host mapping in the container. The parameters are described as follows:
   * 
   * - **hostName**: The domain name or hostname.
   * 
   * - **ip**: The IP address.
   * 
   * @example
   * [{"hostName":"test.host.name","ip":"0.0.0.0"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The version of the runtime environment in the HSF framework, such as an Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The container environment variables. You can define custom variables or reference a ConfigMap. To reference a ConfigMap, you must first create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). The following formats are supported:
   * 
   * - Define custom variables
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable.
   * 
   * - Reference a ConfigMap
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, for example, `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The source of the environment variable. Set the value to `configMapRef`.
   * 
   *   - **configMapId**: The ID of the ConfigMap.
   * 
   *   - **key**: The key of the key-value pair. If you reference all keys in the ConfigMap, you do not need to specify this parameter.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The ID of the Secret.
   * 
   * @example
   * 10
   */
  imagePullSecrets?: string;
  /**
   * @remarks
   * The image URL. This parameter is required if **Package Type** is set to **Image**.
   * 
   * @example
   * docker.io/library/nginx:1.14.2
   */
  imageUrl?: string;
  /**
   * @remarks
   * The arguments for the startup of a JAR package. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * start
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The options for the startup of a JAR package. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * -Dtest=true
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The JDK version that the deployment package requires. The following versions are supported:
   * 
   * - **Open JDK 8**
   * 
   * - **Open JDK 7**
   * 
   * - **Dragonwell 11**
   * 
   * - **Dragonwell 8**
   * 
   * - **openjdk-8u191-jdk-alpine3.9**
   * 
   * - **openjdk-7u201-jdk-alpine3.9**
   * 
   * This parameter is not applicable if **Package Type** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The memory required by each instance, in MB. This value cannot be 0. CPU and memory resources are allocated in fixed ratios. The following combinations are supported:
   * 
   * - **1024**: corresponds to 500 millicores and 1,000 millicores.
   * 
   * - **2048**: corresponds to 500, 1,000, and 2,000 millicores.
   * 
   * - **4096**: corresponds to 1,000, 2,000, and 4,000 millicores.
   * 
   * - **8192**: corresponds to 2,000, 4,000, and 8,000 millicores.
   * 
   * - **12288**: corresponds to 12,000 millicores.
   * 
   * - **16384**: corresponds to 4,000, 8,000, and 16,000 millicores.
   * 
   * - **24576**: corresponds to 12,000 millicores.
   * 
   * - **32768**: corresponds to 16,000 millicores.
   * 
   * - **65536**: corresponds to 8,000, 16,000, and 32,000 millicores.
   * 
   * - **131072**: corresponds to 32,000 millicores.
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
   * The mount target of the Apsara File Storage NAS file system in the job template\\"s VPC. You can omit this parameter if the NAS configuration is unchanged during redeployment. To clear the NAS configuration, set this parameter to an empty string (`""`).
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
   * The configuration for mounting an Apsara File Storage NAS file system.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The ID of the Apsara File Storage NAS file system.
   * 
   * @example
   * AKSN89**
   */
  nasId?: string;
  /**
   * @remarks
   * The AccessKey ID for accessing Object Storage Service (OSS) buckets.
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey secret for accessing OSS buckets.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The description of the mounted OSS bucket.
   */
  ossMountDescs?: DescribeJobResponseBodyDataOssMountDescs[];
  /**
   * @remarks
   * The type of the job package. Valid values:
   * 
   * - For Java deployments, **FatJar**, **War**, and **Image** are supported.
   * 
   * - For PHP deployments, the following package types are supported:
   * 
   *   - **PhpZip**
   * 
   *   - **IMAGE_PHP_5_4**
   * 
   *   - **IMAGE_PHP_5_4_ALPINE**
   * 
   *   - **IMAGE_PHP_5_5**
   * 
   *   - **IMAGE_PHP_5_5_ALPINE**
   * 
   *   - **IMAGE_PHP_5_6**
   * 
   *   - **IMAGE_PHP_5_6_ALPINE**
   * 
   *   - **IMAGE_PHP_7_0**
   * 
   *   - **IMAGE_PHP_7_0_ALPINE**
   * 
   *   - **IMAGE_PHP_7_1**
   * 
   *   - **IMAGE_PHP_7_1_ALPINE**
   * 
   *   - **IMAGE_PHP_7_2**
   * 
   *   - **IMAGE_PHP_7_2_ALPINE**
   * 
   *   - **IMAGE_PHP_7_3**
   * 
   *   - **IMAGE_PHP_7_3_ALPINE**
   * 
   * - For Python deployments, **PythonZip** and **Image** are supported.
   * 
   * @example
   * War
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the package. This parameter is required if **Package Type** is set to **FatJar** or **War**.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the package. This parameter is required if **Package Type** is set to **FatJar** or **War**.
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
   * The mount path of the PHP job startup configuration. Make sure that the PHP server uses this configuration to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script to execute after the container starts. This script runs immediately after the system creates the container. Example: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. This script runs before the system deletes the container. Example: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language that is used for the job template. Valid values:
   * 
   * - **java**: Java
   * 
   * - **php**: PHP
   * 
   * - **python**: Python
   * 
   * - **other**: Other languages, such as C++, Go, .NET, and Node.js.
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
   * The Python environment. PYTHON 3.9.15 is supported.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * The Python module dependencies to install. By default, SAE installs dependencies from a `requirements.txt` file in the package\\"s root directory. Use this parameter to specify dependencies if a `requirements.txt` file is not present or to add extra modules.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The ID of the referenced job template.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  refAppId?: string;
  /**
   * @remarks
   * The IDs of job templates that reference this template.
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
   * The security group ID.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable job sharding.
   * 
   * @example
   * true
   */
  slice?: boolean;
  /**
   * @remarks
   * The parameters for job sharding.
   * 
   * @example
   * SliceEnvs
   */
  sliceEnvs?: string;
  /**
   * @remarks
   * The configuration for collecting logs to Log Service (SLS).
   * 
   * - Use an SLS resource that SAE automatically creates: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - Use a custom SLS resource: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The parameters are described as follows:
   * 
   * - **projectName**: The name of the SLS project.
   * 
   * - **logDir**: The log path.
   * 
   * - **logType**: The log type. **stdout** specifies the container\\"s standard output logs. You can specify only one log of the stdout type. If this parameter is omitted, file logs are collected.
   * 
   * - **logstoreName**: The name of the Logstore in SLS.
   * 
   * - **logtailName**: The name of the Logtail configuration in SLS. If you do not specify this parameter, a new Logtail configuration is created.
   * 
   * You can omit this parameter if the Log Service configuration is unchanged during redeployment. To disable log collection, set this parameter to an empty string (`""`).
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * Specifies whether to suspend the job template.
   * 
   * @example
   * false
   */
  suspend?: boolean;
  /**
   * @remarks
   * The tags of the job template.
   */
  tags?: DescribeJobResponseBodyDataTags[];
  /**
   * @remarks
   * The timeout for a graceful stop, in seconds. Default: 30. Valid values: 1 to 300.
   * 
   * @example
   * 10
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The timeout period for the job. Unit: seconds.
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
   * The Tomcat file configuration. To delete the configuration, set this parameter to "" or "{}".
   * 
   * - **port**: The port number. Valid values: 1024 to 65535. Ports below 1024 are reserved. If you do not specify a port, the default value is 8080.
   * 
   * - **contextPath**: The access path. Default value: /.
   * 
   * - **maxThreads**: The maximum number of connections in the connection pool. Default value: 400.
   * 
   * - **uriEncoding**: The URI encoding scheme for Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If you do not specify this parameter, the default value **ISO-8859-1** is used.
   * 
   * - **useBodyEncodingForUri**: Specifies whether to use the character encoding from the request body for the URI. Default value: **true**.
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
   * The list of private request URLs for the one-time task.
   */
  vpcWebHookUrls?: string[];
  /**
   * @remarks
   * The options for the startup of a WAR package. The default startup command is `java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.
   * 
   * @example
   * custom-option
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The version of the Tomcat container on which the package depends. The following versions are supported:
   * 
   * - **apache-tomcat-7.0.91**
   * 
   * - **apache-tomcat-8.5.42**
   * 
   * This parameter is not supported when **Package Type** is set to **Image**.
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
   * The HTTP status code or POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The job template information.
   */
  data?: DescribeJobResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - The **ErrorCode** parameter is returned only if the request fails.
   * 
   * - For a list of possible **ErrorCode** values, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information about the call result.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query the details of a request.
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

