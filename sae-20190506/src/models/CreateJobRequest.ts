// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role required to pull images across accounts. For more information, see [Use a RAM role to authorize access across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The instance ID of the ACR Enterprise instance. This parameter is required when **ImageUrl** is set to an ACR Enterprise instance image.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The description of the job template. The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is a test description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The name of the job template. The name can contain digits, letters, and hyphens (-). It must start with a letter and can be up to 36 characters in length.
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
   * - **true**: SAE automatically configures the network environment when creating the job template. The values of **NamespaceId**, **VpcId**, **vSwitchId**, and **SecurityGroupId** are ignored.
   * - **false**: You manually configure the network environment when creating the job template.
   * 
   * @example
   * false
   */
  autoConfig?: boolean;
  /**
   * @remarks
   * The number of retries for the job.
   * 
   * @example
   * 3
   */
  backoffLimit?: number;
  /**
   * @remarks
   * The BestEffort policy.
   * 
   * @example
   * besteffort
   */
  bestEffortType?: string;
  /**
   * @remarks
   * The startup command of the image. The command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * Based on the preceding example, Command is set to echo and CommandArgs is set to ["abc", ">", "file0"].
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the image startup command. These are the arguments required by the **Command** parameter. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, CommandArgs is set to ["abc", ">", "file0"]. The value ["abc", ">", "file0"] must be converted to a string in JSON array format. If this parameter is not required, you do not need to specify it.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The concurrency policy of the job. Valid values:
   * 
   * - **Forbid**: forbids concurrent execution. A new job is not created if the previous job is not completed.
   * - **Allow**: allows concurrent execution of jobs.
   * - **Replace**: replaces the previous job with a new job if the previous job is not completed when the creation time of the new job arrives.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The mount description of the **ConfigMap**. Uses the configuration items created on the namespace configuration item page to inject configuration information into the container. The parameter descriptions are as follows:
   * 
   * - **congfigMapId**: the instance ID of the ConfigMap instance. You can invoke the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the instance ID.
   * - **key**: the key value.
   * 
   * > You can pass the sae-sys-configmap-all parameter to mount all keys.
   * 
   * - **mountPath**: the mount path.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The number of CPU cores required for each instance. Unit: millicores. The value cannot be 0. Only the following defined specifications are supported:
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
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The runtime environment version of the job in the High-Speed Service Framework (HSF), such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable image acceleration. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  enableImageAccl?: boolean;
  /**
   * @remarks
   * The environment variables for the container. You can customize environment variables or reference ConfigMaps. To reference a ConfigMap, you must create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable.
   * - Reference a ConfigMap
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter sae-sys-configmap-all-<ConfigMap name>, for example, sae-sys-configmap-all-test1.
   *     - **valueFrom**: the reference of the environment variable. Set the value to configMapRef.
   *     - **configMapId**: the ID of the ConfigMap.
   *     - **key**: the key. If you reference all key-value pairs, do not set this field.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  /**
   * @remarks
   * The ID of the secret.
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
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The startup arguments for the JAR package. Default job startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package. Default job startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-option
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The Java Development Kit (JDK) version on which the deployment package depends. Valid values:
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
   * The memory size required for each instance. Unit: MB. The value cannot be 0. The memory size has a one-to-one mapping with the number of CPU cores. Only the following defined specifications are supported:
   * - **1024**: corresponds to 500 and 1,000 millicores.
   * - **2048**: corresponds to 500, 1,000, and 2,000 millicores.
   * - **4096**: corresponds to 1,000, 2,000, and 4,000 millicores.
   * - **8192**: corresponds to 2,000, 4,000, and 8,000 millicores.
   * - **12288**: corresponds to 12,000 millicores.
   * - **16384**: corresponds to 4,000, 8,000, and 16,000 millicores.
   * - **24576**: corresponds to 12,000 millicores.
   * - **32768**: corresponds to 16,000 millicores.
   * - **65536**: corresponds to 8,000, 16,000, and 32,000 millicores.
   * - **131072**: corresponds to 32,000 millicores.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The description of the NAS mount. If the configuration remains unchanged during deployment, you do not need to set this parameter, which means the **MountDesc** field is not required in the request. To clear the NAS configuration, you must set this field to an empty string in the request, which means the value of the **MountDesc** field is "".
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * The mount target of the NAS file system in the VPC of the job template. If the configuration remains unchanged during deployment, you do not need to set this parameter, which means the **MountHost** field is not required in the request. To clear the NAS configuration, you must set this field to an empty string in the request, which means the value of the **MountHost** field is "".
   * 
   * @example
   * 10d3b4bc9****.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The ID of the Serverless App Engine (SAE) namespace. Only namespaces whose names contain lowercase letters and hyphens (-) are supported. The name must start with a letter.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configuration for mounting the NAS file system.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The ID of the Apsara File Storage NAS file system. If the configuration remains unchanged during deployment, you do not need to set this parameter, which means the **NasId** field is not required in the request. To clear the NAS configuration, you must set this field to an empty string in the request, which means the value of the **NasId** field is "".
   * 
   * @example
   * 10d3b4****
   */
  nasId?: string;
  /**
   * @remarks
   * The AccessKey ID used to read and write OSS data.
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey Secret used to read and write OSS data.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The OSS mount description. The parameter descriptions are as follows:
   * 
   * - **bucketName**: the name of the bucket.
   * - **bucketPath**: the folder or object that you created in OSS. If the OSS mount folder does not exist, an exception is triggered.
   * - **mountPath**: the container path in SAE. If the path already exists, it overwrites the existing content. If the path does not exist, it is created.
   * - **readOnly**: specifies whether the container path has read permissions on the mount folder resources. Valid values:
   *     - **true**: read-only permissions.
   *     - **false**: read and write permissions.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The type of the job package. Valid values:
   * 
   * - If you use Java for deployment, valid values are **FatJar**, **War**, and **Image**.
   * - If you use PHP for deployment, valid values are:
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
   * - If you use **Python** for deployment, valid values are **PythonZip** and **Image**.
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
   * The mount path for the PHP job startup configuration. You must ensure that the PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script to execute after the container starts. A script is triggered and executed immediately after the container is created. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. A script is triggered and executed before the container is deleted. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`
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
   * The Python environment. Valid value: **PYTHON 3.9.15**.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * The module dependencies for custom installation. By default, the dependencies defined in the requirements.txt file in the root folder are installed. If no dependencies are configured or custom packages are used, you can specify the dependencies for custom installation.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The ID of the referenced job target.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  refAppId?: string;
  /**
   * @remarks
   * The number of concurrent instances for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
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
   * Specifies whether to enable job sharding.
   * 
   * @example
   * true
   */
  slice?: boolean;
  /**
   * @remarks
   * The sharding parameters of the job.
   * 
   * @example
   * [0,1,2]
   */
  sliceEnvs?: string;
  /**
   * @remarks
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - To use SLS resources automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - To use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The parameter descriptions are as follows:
   * 
   * - **projectName**: the name of the SLS project.  
   * - **logDir**: the log path.
   * - **logType**: the log type. **stdout** indicates container standard output logs. You can configure only one such log source. If you do not configure this parameter, file logs are collected.
   * - **logstoreName**: the name of the SLS Logstore.
   * - **logtailName**: the name of the SLS Logtail. If you do not specify this parameter, a new Logtail is created.
   * 
   * If the SLS collection configuration remains unchanged during multiple deployments, you do not need to set this parameter (that is, the **SlsConfigs** field is not required in the request). If you no longer need the SLS collection feature, you must set this field to an empty string (a string with zero characters) in the request (that is, the value of the **SlsConfigs** field is "").
   * 
   * > The project automatically created with the job template is deleted when the job template is deleted. Therefore, when you select an existing project, you cannot select a project automatically created by SAE.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The timeout period for graceful shutdown. Default value: 30. Unit: seconds. Valid values: 1 to 300.
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
   * The Tomcat configuration. Set the value to "" or "{}" to delete the configuration. Valid values:
   * 
   * - **port**: the port range is 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. Default value: 8080.
   * - **contextPath**: the access path. Default value: the root directory "/".
   * - **maxThreads**: the maximum number of connections in the connection pool. Default value: 400.
   * - **uriEncoding**: the encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default value: **ISO-8859-1**.
   * - **useBodyEncoding**: specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  triggerConfig?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the elastic network interface controller (NIC) of the job instance belongs. The vSwitch must reside in the preceding VPC. The vSwitch is also associated with the SAE namespace. If you do not specify this parameter, the ID of the vSwitch that is associated with the namespace is used by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) that is associated with the SAE namespace. In SAE, a namespace can be associated with only one VPC, and the association cannot be modified. The association is established when you create the first SAE job template in the namespace. Multiple namespaces can be associated with the same VPC. If you do not specify this parameter, the ID of the VPC that is associated with the namespace is used by default.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
  vpcId?: string;
  /**
   * @remarks
   * The startup command for the WAR package deployment job. The procedure is the same as configuring the startup command for image deployment. For more information, see [Configure a startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version on which the deployment package depends. Valid values:
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
  /**
   * @remarks
   * The workload type. Set the value to `job`.
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

