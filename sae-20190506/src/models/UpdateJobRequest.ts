// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is required to pull images across accounts. For more information, see [Grant permissions across Alibaba Cloud accounts by using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance. This parameter is required if **ImageUrl** is set to an image in a Container Registry Enterprise Edition instance.
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
   * 
   * In this example, `Command="echo" and CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup **Command**. The value must be a JSON array that is converted to a string. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`. The `["abc", ">", "file0"]` array is converted to a string. This parameter is optional.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The policy of running concurrent jobs. Valid values:
   * 
   * - **Forbid**: A new job is not created if the previous job is not completed.
   * 
   * - **Allow**: Concurrent jobs are allowed.
   * 
   * - **Replace**: When the time to create a new job is reached, the new job replaces the previous job if the previous job is not completed.
   * 
   * @example
   * Allow
   */
  concurrencyPolicy?: string;
  /**
   * @remarks
   * The description of the **ConfigMap** instance that is mounted to the container. You can use the ConfigMap instance created on the Namespace Configurations page to inject configurations into the container. The value is a JSON string. The following fields are supported:
   * 
   * - **configMapId**: The ID of the ConfigMap instance. You can call the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the ID.
   * 
   * - **key**: The key of the key-value pair.
   * 
   * > You can pass the `sae-sys-configmap-all` parameter to mount all key-value pairs.
   * 
   * - **mountPath**: The mount path.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The custom mapping between a hostname and an IP address in the container. The value is a JSON string. The following fields are supported:
   * 
   * - **hostName**: the domain name or hostname.
   * 
   * - **ip**: the IP address.
   * 
   * @example
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The version of the application runtime environment in High-speed Service Framework (HSF), such as an Ali-Tomcat container.
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
   * The environment variables of the container. You can customize environment variables or reference variables from a ConfigMap. To reference a ConfigMap, you must create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). The value is a JSON string. The following fields are supported:
   * 
   * - Custom variables
   * 
   *   - **name**: the name of the environment variable.
   * 
   *   - **value**: the value of the environment variable.
   * 
   * - Reference variables from a ConfigMap
   * 
   *   - **name**: The name of the environment variable. You can reference a single key-value pair or all key-value pairs. To reference all key-value pairs, set the value to `sae-sys-configmap-all-<ConfigMap name>`. Example: `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   * 
   *   - **configMapId**: the ID of the ConfigMap.
   * 
   *   - **key**: The key of the key-value pair. If you want to reference all key-value pairs, do not configure this field.
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
   * The URL of the image. This parameter is required if **Package Type** is set to **Image**.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The arguments of the JAR package to start the application. The default startup command of the application is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The options of the JAR package to start the application. The default startup command of the application is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-option
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The Java Development Kit (JDK) version that the deployment package depends on. The following versions are supported:
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
   * This parameter is not supported when **Package Type** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The description of the NAS mount. If the configurations are not changed during a deployment, you do not need to configure this parameter. To clear the NAS configurations, set the value of this parameter to an empty string (`""`) in the request.
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * The mount target of the NAS file system in the virtual private cloud (VPC) where the job template is located. If the configurations are not changed during a deployment, you do not need to configure this parameter. To clear the NAS configurations, set the value of this parameter to an empty string (`""`).
   * 
   * @example
   * 10d3b4bc9****.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The configurations of mounting a NAS file system.
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The ID of the Apsara File Storage NAS file system. If the configurations are not changed during a deployment, you do not need to configure this parameter. To clear the NAS configurations, set the value of this parameter to an empty string (`""`).
   * 
   * @example
   * 10d3b4****
   */
  nasId?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to read data from and write data to OSS.
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
   * The description of the OSS mount. The value is a JSON string. The following parameters are supported:
   * 
   * - **bucketName**: the name of the bucket.
   * 
   * - **bucketPath**: the directory or object that you created in OSS. An exception occurs if the specified OSS mount directory does not exist.
   * 
   * - **mountPath**: The path in the SAE container. If the path exists, the new path overwrites the existing one. If the path does not exist, a new path is created.
   * 
   * - **readOnly**: specifies whether a container has the read-only permission on the resources in the mount directory.
   * 
   *   - **true**: The container has the read-only permission.
   * 
   *   - **false**: The container has the read and write permissions.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required if **Package Type** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required if **Package Type** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.1
   */
  packageVersion?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
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
   * The path on which the PHP application startup configuration file is mounted. Make sure that the PHP server uses this configuration file to start the application.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script that is executed after the container is started. Example: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is executed before the container is stopped. Example: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language. Supported values: **java**, **php**, **python**, and **shell**.
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
   * The custom module dependencies. By default, the dependencies that are defined in the requirements.txt file in the root directory of the package are installed. If you do not configure this parameter or the package does not have a requirements.txt file, you can specify the dependencies that you want to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The ID of the referenced application.
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
   * Enables job sharding.
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
   * [0,1,2]
   */
  sliceEnvs?: string;
  /**
   * @remarks
   * The configurations of collecting logs to Log Service.
   * 
   * - Use the Log Service resources that are automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - Use a custom Log Service resource: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The following fields are supported:
   * 
   * - **projectName**: The name of the Log Service project.
   * 
   * - **logDir**: The log path.
   * 
   * - **logType**: The log type. **stdout** indicates the standard output log of the container. You can specify only one standard output. If you do not configure this field, file logs are collected.
   * 
   * - **logstoreName**: The name of the Logstore in Log Service.
   * 
   * - **logtailName**: The name of the Logtail. If you do not specify this parameter, a new Logtail is created.
   * 
   * If the SLS configuration is not changed during a deployment, you do not need to configure this parameter. To stop using the log collection feature, set the value of this parameter to an empty string (`""`).
   * 
   * > Projects that are automatically created with a job template are deleted when the job template is deleted. Therefore, when you select an existing project, do not select a project that is automatically created by SAE.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The graceful timeout period. Default value: 30. Unit: seconds. Valid values: 1 to 300.
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
   * The configurations of the Tomcat file. If you set this parameter to "" or "{}", the configurations are deleted. The value is a JSON string. The following fields are supported:
   * 
   * - **port**: The port number. Valid values: 1024 to 65535. The root permission is required to perform operations on ports whose number is smaller than 1024. The container is configured with the administrator permission. Therefore, specify a port whose number is greater than 1024. If you do not configure this field, the default port 8080 is used.
   * 
   * - **contextPath**: The context path. Default value: /.
   * 
   * - **maxThreads**: The maximum number of connections in the connection pool. Default value: 400.
   * 
   * - **uriEncoding**: The URI encoding scheme in Tomcat. Supported values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If you do not set this parameter, the default value **ISO-8859-1** is used.
   * 
   * - **useBodyEncodingForUri**: Specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  triggerConfig?: string;
  /**
   * @remarks
   * The startup command for the application that is deployed in a WAR package. The procedure is the same as that for configuring the startup command for an image. For more information, see [Set a startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version that the deployment package depends on. The following versions are supported:
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

