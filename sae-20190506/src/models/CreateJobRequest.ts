// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is required to pull images across accounts. For more information, see [Grant permissions to pull images across Alibaba Cloud accounts by using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ID of the Container Registry (ACR) Enterprise Edition instance. This parameter is required when **ImageUrl** points to an image in an ACR Enterprise Edition instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The description of the job template. It cannot exceed 1,024 characters.
   * 
   * @example
   * This is a test description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The name of the job template. The name can contain letters, digits, and hyphens (-). It must start with a letter and be no longer than 36 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * Specifies whether to automatically configure the network environment. Valid values:
   * 
   * - **true**: SAE automatically configures the network environment when you create the job template. The values of **NamespaceId**, **VpcId**, **vSwitchId**, and **SecurityGroupId** are ignored.
   * 
   * - **false**: You must manually configure the network environment.
   * 
   * @example
   * false
   */
  autoConfig?: boolean;
  /**
   * @remarks
   * The maximum number of retries for a task before it is marked as failed.
   * 
   * @example
   * 3
   */
  backoffLimit?: number;
  /**
   * @remarks
   * The BestEffort policy.
   */
  bestEffortType?: string;
  /**
   * @remarks
   * The entrypoint command for the container. The command must be an executable inside the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * 
   * For the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * Arguments for the entrypoint command (**Command**). The format is as follows:
   * 
   * `["a","b"]`
   * 
   * In the example for the `Command` parameter, the value for `CommandArgs` is `["abc", ">", "file0"]`. This value must be a string that contains a JSON array. If the command takes no arguments, you can omit this parameter.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The concurrency policy for the task. Valid values:
   * 
   * - **Forbid**: Prohibits concurrent runs. A new task is not created if the previous one is not complete.
   * 
   * - **Allow**: Allows concurrent running.
   * 
   * - **Replace**: If a previous task is still running when the next one is scheduled, the new task replaces the old one.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The **ConfigMap** mount description. Use a ConfigMap created in the namespace to inject configurations into the container. The parameters are described as follows:
   * 
   * - **configMapId**: The ID of the ConfigMap. You can call the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain this ID.
   * 
   * - **key**: The key.
   * 
   * > You can pass the `sae-sys-configmap-all` parameter to mount all keys.
   * 
   * - **mountPath**: The mount path in the container.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The CPU required for each instance, in millicores. This value cannot be 0. Only the following fixed specifications are currently supported:
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
   * The host alias that maps a hostname to an IP address in the container. The parameters are described as follows:
   * 
   * - **hostName**: The domain name or hostname.
   * 
   * - **ip**: The IP address.
   * 
   * @example
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The version of the HSF runtime environment for the task, such as an Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable image acceleration. Valid values:
   * 
   * - **true**: Enables image acceleration.
   * 
   * - **false**: Disables image acceleration.
   * 
   * @example
   * false
   */
  enableImageAccl?: boolean;
  /**
   * @remarks
   * Environment variables to set in the container. To reference variables, the ConfigMap must already exist. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). The value can be configured in one of the following ways:
   * 
   * - Specify custom variables
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable.
   * 
   * - Reference a ConfigMap
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter a value in the `sae-sys-configmap-all-<ConfigMap name>` format. Example: `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The source of the environment variable. Set the value to `configMapRef`.
   * 
   *   - **configMapId**: The ID of the ConfigMap.
   * 
   *   - **key**: The key to reference. If you want to reference all key-value pairs, do not specify this parameter.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  /**
   * @remarks
   * The ID of the secret used to pull the image.
   * 
   * @example
   * 10
   */
  imagePullSecrets?: string;
  /**
   * @remarks
   * The URL of the image. This parameter is required when **PackageType** is set to **Image**.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The startup arguments for the JAR package. The default startup command is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package. The default startup command is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-option
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
   * This parameter is not supported when **PackageType** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The memory required for each instance, in MB. This value cannot be 0. CPU and memory specifications are coupled. The following specifications are currently supported:
   * 
   * - **1024**: corresponds to 500 or 1,000 millicores of CPU.
   * 
   * - **2048**: corresponds to 500, 1,000, or 2,000 millicores of CPU.
   * 
   * - **4096**: corresponds to 1,000, 2,000, or 4,000 millicores of CPU.
   * 
   * - **8192**: corresponds to 2,000, 4,000, or 8,000 millicores of CPU.
   * 
   * - **12288**: corresponds to 12,000 millicores of CPU.
   * 
   * - **16384**: corresponds to 4,000, 8,000, or 16,000 millicores of CPU.
   * 
   * - **24576**: corresponds to 12,000 millicores of CPU.
   * 
   * - **32768**: corresponds to 16,000 millicores of CPU.
   * 
   * - **65536**: corresponds to 8,000, 16,000, or 32,000 millicores of CPU.
   * 
   * - **131072**: corresponds to 32,000 millicores of CPU.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The NAS mount description. If this configuration does not change in subsequent deployments, you can omit this parameter. To clear the NAS configuration, set this parameter to an empty string ("").
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * The NAS mount target in the VPC of the job template. If this configuration does not change in subsequent deployments, you can omit this parameter. To clear the NAS configuration, set this parameter to an empty string ("").
   * 
   * @example
   * 10d3b4bc9****.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The ID of the SAE namespace. The namespace name can contain only lowercase letters and hyphens (-), and must start with a letter.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configurations for mounting a NAS file system.
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The ID of the NAS file system. If this configuration does not change in subsequent deployments, you can omit this parameter. To clear the NAS configuration, set this parameter to an empty string ("").
   * 
   * @example
   * 10d3b4****
   */
  nasId?: string;
  /**
   * @remarks
   * The AccessKey ID for reading from and writing to OSS.
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey secret for reading from and writing to OSS.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The description of the Object Storage Service (OSS) mount. The parameters are described as follows:
   * 
   * - **bucketName**: The name of the bucket.
   * 
   * - **bucketPath**: The directory or object in OSS. If the specified directory or object does not exist, an exception is thrown.
   * 
   * - **mountPath**: The path in the SAE container. If the path exists, it is overwritten. If the path does not exist, it is created.
   * 
   * - **readOnly**: Specifies whether the container has read-only access to the resources in the mount directory. Valid values:
   * 
   *   - **true**: read-only permission.
   * 
   *   - **false**: read and write permissions.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * - For Java applications, valid values are **FatJar**, **War**, and **Image**.
   * 
   * - For PHP applications, the valid values are:
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
   * - For **Python** applications, valid values are **PythonZip** and **Image**.
   * 
   * This parameter is required.
   * 
   * @example
   * FatJar
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required when **PackageType** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required when **PackageType** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.1
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
   * The mount path of the startup configuration file for a PHP task. You must make sure that the PHP server uses this configuration file on startup.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * A PostStart hook. This script runs immediately after the container is created. The value must be a JSON string, for example: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * A PreStop hook. This script runs immediately before the container is stopped. The value must be a JSON string, for example: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language. Valid values: **java**, **php**, **python**, and **shell**.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * The Python environment. **PYTHON 3.9.15** is supported.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * Python dependencies to install by using pip. If you do not set this parameter, SAE installs dependencies from the \\"requirements.txt\\" file in the root directory of your project.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The ID of the referenced job.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  refAppId?: string;
  /**
   * @remarks
   * The number of concurrent task instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
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
   * Specifies whether to enable task sharding.
   * 
   * @example
   * true
   */
  slice?: boolean;
  /**
   * @remarks
   * The parameters for task sharding.
   * 
   * @example
   * [0,1,2]
   */
  sliceEnvs?: string;
  /**
   * @remarks
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - To use SLS resources that are automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - To use your own SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The parameters are described as follows:
   * 
   * - **projectName**: The name of the SLS Project.
   * 
   * - **logDir**: The path of the log file.
   * 
   * - **logType**: The log type. **stdout** indicates the standard output of the container. You can specify only one standard output. If you do not set this parameter, file logs are collected.
   * 
   * - **logstoreName**: The name of the Logstore in SLS.
   * 
   * - **logtailName**: The name of the Logtail in SLS. If you do not specify this parameter, a new Logtail is created.
   * 
   * If the log collection configuration does not change during subsequent deployments, you do not need to set this parameter (the request does not need to include the **SlsConfigs** field). If you no longer need to use the log collection feature, set the value of this parameter to an empty string ("") in your request.
   * 
   * > SAE deletes a project that it automatically created when you delete the corresponding job template. Therefore, if you specify an existing project, do not use one that was automatically created by SAE.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The graceful shutdown timeout, in seconds. The value must be an integer from 1 to 300. Default: 30.
   * 
   * @example
   * 10
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The task timeout, in seconds.
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
   * The Tomcat configuration. To delete the configuration, set this parameter to `""` or `{}`. The parameters are described as follows:
   * 
   * - **port**: The port number. The valid range is 1024 to 65535. Ports below 1024 require root permissions. Because the container is configured with administrator permissions, specify a port number greater than 1024. If this parameter is not configured, the default port 8080 is used.
   * 
   * - **contextPath**: The context path. Default value: /.
   * 
   * - **maxThreads**: The maximum number of threads in the connection pool. Default value: 400.
   * 
   * - **uriEncoding**: The URI encoding scheme for Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If this parameter is not set, the default value **ISO-8859-1** is used.
   * 
   * - **useBodyEncodingForUri**: Specifies whether to use the encoding specified in `request.getCharacterEncoding()` to decode the request URI. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  triggerConfig?: string;
  /**
   * @remarks
   * The ID of the vSwitch for the elastic network interface of the task instance. The vSwitch must be located in the specified VPC. The vSwitch is also bound to the SAE namespace. If you do not specify this parameter, the ID of the vSwitch that is bound to the namespace is used by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC for the SAE namespace. In SAE, a namespace can be bound to only one VPC, and this binding cannot be changed. The binding is established when you create the first SAE job template in the namespace. A single VPC can be associated with multiple namespaces. If you do not specify this parameter, the ID of the VPC that is bound to the namespace is used by default.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
  vpcId?: string;
  /**
   * @remarks
   * The startup command for a WAR package deployment. The configuration steps are the same as for an image-based deployment. For more information, see [Set a startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version that the deployment package requires. The following versions are supported:
   * 
   * - **apache-tomcat-7.0.91**
   * 
   * - **apache-tomcat-8.5.42**
   * 
   * This parameter is not supported when **PackageType** is set to **Image**.
   * 
   * @example
   * apache-tomcat-7.0.91
   */
  webContainer?: string;
  /**
   * @remarks
   * The workload. Set the value to `job`.
   * 
   * This parameter is required.
   * 
   * @example
   * job
   */
  workload?: string;
  static names(): { [key: string]: string } {
    return {
      acrAssumeRoleArn: 'AcrAssumeRoleArn',
      acrInstanceId: 'AcrInstanceId',
      appDescription: 'AppDescription',
      appName: 'AppName',
      autoConfig: 'AutoConfig',
      backoffLimit: 'BackoffLimit',
      bestEffortType: 'BestEffortType',
      command: 'Command',
      commandArgs: 'CommandArgs',
      concurrencyPolicy: 'ConcurrencyPolicy',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableImageAccl: 'EnableImageAccl',
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
      python: 'Python',
      pythonModules: 'PythonModules',
      refAppId: 'RefAppId',
      replicas: 'Replicas',
      securityGroupId: 'SecurityGroupId',
      slice: 'Slice',
      sliceEnvs: 'SliceEnvs',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timeout: 'Timeout',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      triggerConfig: 'TriggerConfig',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appDescription: 'string',
      appName: 'string',
      autoConfig: 'boolean',
      backoffLimit: 'number',
      bestEffortType: 'string',
      command: 'string',
      commandArgs: 'string',
      concurrencyPolicy: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableImageAccl: 'boolean',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      memory: 'number',
      mountDesc: 'string',
      mountHost: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageType: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      python: 'string',
      pythonModules: 'string',
      refAppId: 'string',
      replicas: 'number',
      securityGroupId: 'string',
      slice: 'boolean',
      sliceEnvs: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timeout: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      triggerConfig: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
      workload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

