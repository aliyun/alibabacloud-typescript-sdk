// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role required to pull images across accounts. For more information, see [Implement cross-account authorization by using RAM roles](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ACR Enterprise instance ID. This parameter is required when **ImageUrl** is a Container Registry Enterprise instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The ID of the job template to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
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
   * Based on the preceding example, `Command="echo"` and `CommandArgs=["abc", ">", "file0"]`.
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
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`. The `["abc", ">", "file0"]` part must be converted to a string in JSON array format. If this parameter is not required, leave it empty.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The concurrency policy of the job. Valid values:
   * 
   * - **Forbid**: Forbids concurrent execution. A new job is not created if the previous job is not completed.
   * - **Allow**: Allows concurrent execution of jobs.
   * - **Replace**: Replaces the previous job with a new job if the previous job is not completed when the new job is scheduled to be created.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The mount description of the **ConfigMap**. Use the ConfigMaps created on the namespace configuration item page to inject configuration information into the container. Parameter descriptions:
   * 
   * - **congfigMapId**: The instance ID of the ConfigMap instance. You can invoke the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the instance ID.
   * - **key**: The key value.
   * 
   * > You can mount all keys by passing the `sae-sys-configmap-all` parameter.
   * 
   * - **mountPath**: The mount path.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The custom host mappings in the container. Valid values:
   * 
   * - **hostName**: The domain name or hostname.
   * - **ip**: The IP address.
   * 
   * @example
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The runtime environment version for the job in the HSF framework, such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable image acceleration.
   */
  enableImageAccl?: boolean;
  /**
   * @remarks
   * The environment variables for the container. You can specify custom environment variables or reference ConfigMaps. To reference a ConfigMap, you must create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: The name of the environment variable.
   *     - **value**: The value of the environment variable.
   * - Reference a ConfigMap
   *     - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, for example, `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: The reference of the environment variable. Set the value to `configMapRef`.
   *     - **configMapId**: The ID of the ConfigMap.
   *     - **key**: The key. If you reference all key-value pairs, do not set this field.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
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
   * The URL of the image. This parameter is required when **Package Type** is set to **Image**.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The startup arguments for the JAR package job. Default job startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package job. Default job startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-option
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
   * This parameter is not supported when **Package Type** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The description of the NAS mount. If the configuration remains unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **MountDesc** field in the request. To clear the NAS configuration, you must set this field to an empty string in the request. That is, set the value of **MountDesc** to "".
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * The mount target of the NAS file system in the VPC of the job template. If the configuration remains unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **MountHost** field in the request. To clear the NAS configuration, you must set this field to an empty string in the request. That is, set the value of **MountHost** to "".
   * 
   * @example
   * 10d3b4bc9****.com
   */
  mountHost?: string;
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
   * The ID of the Apsara File Storage NAS file system. If the configuration remains unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **NasId** field in the request. To clear the NAS configuration, you must set this field to an empty string in the request. That is, set the value of **NasId** to "".
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
   * The OSS mount description. Parameter descriptions:
   * 
   * - **bucketName**: The name of the bucket.
   * - **bucketPath**: The folder or object that you created in OSS. If the OSS mount folder does not exist, an exception is triggered.
   * - **mountPath**: The container path in SAE. If the path already exists, it overwrites the existing content. If the path does not exist, it is created.
   * - **readOnly**: Specifies whether the container path has read permissions on the mount folder resources. Valid values:
   *     - **true**: Read-only permissions.
   *     - **false**: Read and write permissions.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required when **Package Type** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required when **Package Type** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.1
   */
  packageVersion?: string;
  /**
   * @remarks
   * The ACR Enterprise instance ID.
   * 
   * @example
   * cri-xxxxxx
   */
  php?: string;
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
   * The script to execute after the container starts. A script is executed immediately after the container is created. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. A script is executed before the container is deleted. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`
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
   * The Python environment. Supported version: **PYTHON 3.9.15**.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * The custom installation module dependencies. By default, the dependencies defined in the requirements.txt file in the root folder are installed. If the file is not configured or you use a custom software package, you can specify the dependencies to install.
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
   * The number of concurrent instances for the job.
   * 
   * @example
   * 3
   */
  replicas?: string;
  /**
   * @remarks
   * Specifies whether to enable job slicing.
   * 
   * @example
   * true
   */
  slice?: boolean;
  /**
   * @remarks
   * The job slicing parameters.
   * 
   * @example
   * [0,1,2]
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
   * - **projectName**: The name of the SLS project.  
   * - **logDir**: The log path.
   * - **logType**: The log type. **stdout** indicates container standard output logs. Only one entry is allowed. If no entry is specified, file logs are collected.
   * - **logstoreName**: The name of the SLS Logstore.
   * - **logtailName**: The name of the SLS Logtail. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection configuration remains unchanged during multiple deployments, you do not need to configure this parameter. That is, you do not need to include the **SlsConfigs** field in the request. If you no longer need the SLS collection feature, you must set the value of this field to an empty string in the request. That is, set the value of **SlsConfigs** to "".
   * 
   * > The project automatically created with the job template is deleted when the job template is deleted. Therefore, when selecting an existing project, you cannot select a project automatically created by SAE.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The timeout period for graceful shutdown. Unit: seconds. Default value: 30. Valid values: 1 to 300.
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
   * The Tomcat file configuration. Set the value to "" or "{}" to delete the configuration. Valid values:
   * 
   * - **port**: The port number. Valid values: 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. Default value: 8080.
   * - **contextPath**: The access path. Default value: the root directory "/".
   * - **maxThreads**: The maximum number of connections in the connection pool. Default value: 400.
   * - **uriEncoding**: The encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default value: **ISO-8859-1**.
   * - **useBodyEncoding**: Specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  triggerConfig?: string;
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
   * The Tomcat version required by the deployment package. Valid values:
   * 
   * - **apache-tomcat-7.0.91**
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
      appId: 'AppId',
      backoffLimit: 'BackoffLimit',
      bestEffortType: 'BestEffortType',
      command: 'Command',
      commandArgs: 'CommandArgs',
      concurrencyPolicy: 'ConcurrencyPolicy',
      configMapMountDesc: 'ConfigMapMountDesc',
      customHostAlias: 'CustomHostAlias',
      edasContainerVersion: 'EdasContainerVersion',
      enableImageAccl: 'EnableImageAccl',
      envs: 'Envs',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      nasConfigs: 'NasConfigs',
      nasId: 'NasId',
      ossAkId: 'OssAkId',
      ossAkSecret: 'OssAkSecret',
      ossMountDescs: 'OssMountDescs',
      packageUrl: 'PackageUrl',
      packageVersion: 'PackageVersion',
      php: 'Php',
      phpConfig: 'PhpConfig',
      phpConfigLocation: 'PhpConfigLocation',
      postStart: 'PostStart',
      preStop: 'PreStop',
      programmingLanguage: 'ProgrammingLanguage',
      python: 'Python',
      pythonModules: 'PythonModules',
      refAppId: 'RefAppId',
      replicas: 'Replicas',
      slice: 'Slice',
      sliceEnvs: 'SliceEnvs',
      slsConfigs: 'SlsConfigs',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timeout: 'Timeout',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      triggerConfig: 'TriggerConfig',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      appId: 'string',
      backoffLimit: 'number',
      bestEffortType: 'string',
      command: 'string',
      commandArgs: 'string',
      concurrencyPolicy: 'string',
      configMapMountDesc: 'string',
      customHostAlias: 'string',
      edasContainerVersion: 'string',
      enableImageAccl: 'boolean',
      envs: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      mountDesc: 'string',
      mountHost: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: 'string',
      packageUrl: 'string',
      packageVersion: 'string',
      php: 'string',
      phpConfig: 'string',
      phpConfigLocation: 'string',
      postStart: 'string',
      preStop: 'string',
      programmingLanguage: 'string',
      python: 'string',
      pythonModules: 'string',
      refAppId: 'string',
      replicas: 'string',
      slice: 'boolean',
      sliceEnvs: 'string',
      slsConfigs: 'string',
      terminationGracePeriodSeconds: 'number',
      timeout: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      triggerConfig: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

