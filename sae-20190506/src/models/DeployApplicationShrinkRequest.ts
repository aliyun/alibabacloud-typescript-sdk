// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role required to pull images across accounts. For more information, see [Use RAM roles to authorize access across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ACR Enterprise instance ID. This parameter is required when **ImageUrl** is set to an ACR Enterprise instance image.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The AliyunAgent version.
   * 
   * @example
   * 4.4.2
   */
  agentVersion?: string;
  /**
   * @remarks
   * The Application Load Balancer (ALB) gateway readiness gate configuration.
   * 
   * @example
   * default
   */
  albIngressReadinessGate?: string;
  /**
   * @remarks
   * The ID of the application to be deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to associate an elastic IP address (EIP). Valid values:
   * 
   * - **true**: associates an EIP.
   * - **false**: does not associate an EIP.
   * 
   * @example
   * true
   */
  associateEip?: boolean;
  /**
   * @remarks
   * Specifies whether the elastic scaling policy for the application is automatically enabled. Valid values:
   * - **true**: enables the policy.
   * - **false**: shutdown.
   * 
   * @example
   * true
   */
  autoEnableApplicationScalingRule?: boolean;
  /**
   * @remarks
   * The interval between deployment batches. Unit: seconds.
   * 
   * @example
   * 10
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The description of the change order.
   * 
   * @example
   * Start application
   */
  changeOrderDesc?: string;
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
   * The arguments for the image startup command. These are the arguments required by the **Command** startup command. Format:
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
   * The mount description of the **ConfigMap**. Uses the configuration item created on the configuration item page of the namespace to inject configuration information into the container. Parameter description:
   * 
   * - **configMapId**: the instance ID of the ConfigMap instance. You can invoke the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the instance ID.
   * - **key**: the key value.
   * 
   * > You can mount all keys by passing the `sae-sys-configmap-all` parameter.
   * 
   * - **mountPath**: the mount path.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The CPU required for each instance. Unit: millicores. The value cannot be 0. Only the following defined specifications are supported:
   * - **500**
   * - **1000**
   * - **2000**
   * - **4000**
   * - **8000**
   * - **12000**
   * - **16000**
   * - **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The custom host mappings in the container. Valid values:
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
   * The custom image network type. If the image is not a custom image, set this parameter to an empty string. Valid values:
   * - internet: public image.
   * - intranet: private image.
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * This parameter takes effect only for applications in the stopped state. If a running application calls the **DeployApplication** operation, the application is immediately redeployed. Valid values:
   * - **true**: the default value. Deploys the application immediately, applies the new deployment configurations, and immediately starts the instances.
   * - **false**: applies only the new deployment configurations without starting the application instances.
   * 
   * @example
   * true
   */
  deploy?: string;
  /**
   * @remarks
   * The version of the .NET framework. Valid values: 
   * 
   * - .NET 3.1
   * - .NET 5.0
   * - .NET 6.0
   * - .NET 7.0
   * - .NET 8.0
   * 
   * @example
   * .NET 3.1
   */
  dotnet?: string;
  /**
   * @remarks
   * The version of the application runtime environment in the HSF framework, such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The shared ephemeral storage configuration.
   * 
   * @example
   * [{\\"name\\":\\"workdir\\",\\"mountPath\\":\\"/usr/local/tomcat/webapps\\"}]
   */
  emptyDirDesc?: string;
  /**
   * @remarks
   * Specifies whether to connect to AHAS. Valid values:
   * 
   * - **true**: connects to AHAS.
   * - **false**: does not connect to AHAS.
   * 
   * @example
   * false
   */
  enableAhas?: string;
  /**
   * @remarks
   * Specifies whether to enable the CPU Burst feature. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature.
   * 
   * @example
   * true
   */
  enableCpuBurst?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the canary release rules for traffic. This rule applies only to applications that use the Spring Cloud and Dubbo frameworks. Valid values:
   * 
   * - **true**: enables the canary release rules.
   * - **false**: disables the canary release rules.
   * 
   * @example
   * false
   */
  enableGreyTagRoute?: boolean;
  /**
   * @remarks
   * Specifies whether to reuse the agent version configuration of the namespace.
   * 
   * @example
   * true
   */
  enableNamespaceAgentVersion?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the new ARMS features. Valid values:
   * 
   * - true: enables the features.
   * - false: disables the features.
   * 
   * @example
   * true
   */
  enableNewArms?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Prometheus custom metric collection.
   * 
   * @example
   * false
   */
  enablePrometheus?: boolean;
  /**
   * @remarks
   * Specifies whether to enable sidecar resource isolation. Valid values:
   * 
   * - true: enables isolation.
   * - false: disables isolation.
   * 
   * @example
   * true
   */
  enableSidecarResourceIsolated?: boolean;
  /**
   * @remarks
   * The environment variables for the container. You can specify custom environment variables or reference ConfigMaps. To reference a ConfigMap, you must create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom environment variables
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable. This parameter has a higher priority than valueFrom.
   * - Reference a ConfigMap (valueFrom)
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, such as `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   *     - **configMapId**: the ID of the ConfigMap.
   *     - **key**: the key. If you reference all key-value pairs, do not set this field.
   * - Reference a secret (valueFrom)
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-secret-all-<secret name>`, such as `sae-sys-secret-all-test1`.
   *     - **valueFrom**: the reference of the environment variable. Set the value to `secretRef`.
   *     - **secretId**: the ID of the secret.
   *     - **key**: the key. If you reference all key-value pairs, do not set this field.
   * 
   * @example
   * [ { "name": "sae-sys-configmap-all-hello", "valueFrom": { "configMapRef": { "configMapId": 100, "key": "" } } }, { "name": "hello", "valueFrom": { "configMapRef": { "configMapId": 101, "key": "php-fpm" } } }, { "name": "sae-sys-secret-all-hello", "valueFrom": { “secretRef": { “secretId": 100, "key": "" } } }, { "name": “password”, "valueFrom": { “secretRef": { “secretId": 101, "key": “password” } } }, { "name": "envtmp", "value": "newenv" } ]
   */
  envs?: string;
  /**
   * @remarks
   * The GPU configuration.
   * 
   * @example
   * {
   * "gpuType":"PPU810E",
   * "gpuCount":"1"
   * }
   */
  gpuConfig?: string;
  /**
   * @remarks
   * The NGINX version. Valid values:
   * - nginx 1.20
   * - nginx 1.22
   * - nginx 1.24
   * - nginx 1.26
   * - nginx 1.28
   * 
   * @example
   * nginx 1.28
   */
  html?: string;
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
   * The init container configuration.
   */
  initContainersConfigShrink?: string;
  /**
   * @remarks
   * The startup arguments for the JAR package. Default startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package. Default startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
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
   * The summary of configurations for collecting logs to Kafka. Valid values:
   * 
   * - **kafkaEndpoint**: the service registration address of the Kafka API.
   * - **kafkaInstanceId**: the Kafka instance ID.
   * - **kafkaConfigs**: the summary of configurations for one or more logs. For example values and parameter description, see the **kafkaConfigs** request parameter in this topic.
   * 
   * @example
   * {"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}
   */
  kafkaConfigs?: string;
  /**
   * @remarks
   * The application labels. Both keys and values are strings.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The liveness probe for the container. Containers that fail the health check are shutdown and recovered. Valid values:
   * 
   * - **exec**: Example: `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`.
   * - **httpGet**: Example: `{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`.
   * - **tcpSocket**: Example: `{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`.
   * 
   * > You can select only one method for the health check.
   * 
   * Parameter description:
   * 
   * - **exec.command**: Settings for the health check command.
   * - **httpGet.path**: the access path.
   * - **httpGet.scheme**: **HTTP** or **HTTPS**.
   * - **httpGet.isContainKeyWord**: **true** indicates that the keyword is included, and **false** indicates that the keyword is not included. If this field is missing, the advanced feature is not used.
   * - **httpGet.keyWord**: the custom keyword. The **isContainKeyWord** field is required when this field is used.
   * - **tcpSocket.port**: the port for TCP connection detection.
   * - **initialDelaySeconds**: Settings for the health check delay detection time. Default value: 10. Unit: seconds.
   * - **periodSeconds**: Settings for the health check epoch. Default value: 30. Unit: seconds.
   * - **timeoutSeconds**: Settings for the health check timeout waiting time. Default value: 1. Unit: seconds. If this parameter is set to 0 or not set, the default timeout waiting time is 1 second.
   * 
   * @example
   * {"exec":{"command":["sleep","5s"]},"initialDelaySeconds":10,"timeoutSeconds":11}
   */
  liveness?: string;
  /**
   * @remarks
   * LokiConfigs
   * 
   * @example
   * []
   */
  lokiConfigs?: string;
  /**
   * @remarks
   * The maximum surge instance ratio. Note the following rules:
   * 
   * If the minimum number of available instances is 100%, the Peak Volume Settings cannot be 0. If the Settings are **-1**, the system uses the recommended value of 30%, which is 30% of the current number of instances. For example, if the current number of instances is 10, the maximum number of surge instances is 10 × 30% = 3.
   * 
   * @example
   * -1
   */
  maxSurgeInstanceRatio?: number;
  /**
   * @remarks
   * The maximum number of surge instances. Note the following rules:
   * 
   * If the minimum number of available instances is 100%, the Peak Volume Settings cannot be 0.
   * If the Settings are **-1**, the maximum number of surge instances uses the recommended Peak Volume ratio of 30%, which is 30% of the current number of instances. For example, if the current number of instances is 10, the maximum number of surge instances is 10 × 30% = 3.
   * 
   * @example
   * -1
   */
  maxSurgeInstances?: number;
  /**
   * @remarks
   * The memory required for each instance. Unit: MB. The value cannot be 0. The memory has a one-to-one mapping with the CPU. Only the following defined specifications are supported:
   * - **1024**: corresponds to 500 and 1000 millicores.
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
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The Nacos registry. Valid values:
   * - **0**: the built-in Nacos of SAE.
   * - **1**: a self-managed Nacos.
   * - **2**: Microservices Engine (MSE) Nacos Commercial Edition.
   * 
   * > If you select the built-in Nacos of SAE, you cannot obtain the configurations of the built-in Nacos.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The registry configurations. This parameter takes effect only when the registry type is MSE Nacos Enterprise Edition.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-zvp2bh6h70r\\",\\"namespace\\":\\"4c0aa74f-57cb-423c-b6af-5d9f2d0e3dbd\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * Configures microservice governance features.
   * - enable: Specifies whether to enable microservice governance. Valid values:
   *   - true: Enabled.
   *   - false: Disabled.
   * - mseLosslessRule: Configures lossless online and offline rules.
   *   - delayTime: The delay time.
   *   - enable: Specifies whether to enable the lossless online feature. Valid values:
   *     - true: Enabled.
   *     - false: Disabled.
   *   - notice: Specifies whether to enable the notification feature. Valid values:
   *     - true: Enabled.
   *     - false: Disabled.
   *   - warmupTime: The warm-up duration for low traffic, in seconds.
   * 
   * @example
   * {"enable": true,"mseLosslessRule": {"delayTime": 0,"enable": false,"notice": false,"warmupTime": 120}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * The percentage of the minimum number of ready instances. Valid values:
   * 
   *  - **-1**: the initial value, which indicates that the percentage is not used.
   *  - **0~100**: the percentage, rounded up. For example, if you set this parameter to **50** and the current number of instances is 5, the minimum number of ready instances is 3.
   * 
   * > When both **MinReadyInstance** and **MinReadyInstanceRatio** are passed and the value of **MinReadyInstanceRatio** is not **-1**, the **MinReadyInstanceRatio** parameter prevails. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, **50** is used to calculate the minimum number of ready instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances. Valid values:
   * 
   * - If you set this parameter to **0**, services are interrupted during the application upgrade.
   * - If you set this parameter to **-1**, the system recommended value is used, which is 25% of the current number of instances. For example, if the current number of instances is 5, 5 × 25% = 1.25. After rounding up, the minimum number of ready instances is 2.
   * 
   * > Set the minimum number of ready instances to a value greater than or equal to 1 for each rolling deployment to ensure service continuity.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * This field is not recommended. Configure **NasConfigs** instead. The description of the NAS mount. If the configurations remain unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **MountDesc** field in the request. If you need to clear the NAS configurations, you must set the value of this field to an empty string in the request. That is, set the **MountDesc** field to "".
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * This field is not recommended. Configure **NasConfigs** instead. The mount target of the NAS file system in the VPC of the application. If the configurations remain unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **MountHost** field in the request. If you need to clear the NAS configurations, you must set the value of this field to an empty string in the request. That is, set the **MountHost** field to "".
   * 
   * @example
   * 10d3b4bc9****.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The configurations for mounting a NAS file system. Valid values:
   * - **mountPath**: the mount path in the container.
   * - **readOnly**: A value of **false** indicates read and write permissions.
   * - **nasId**: the ID of the NAS file system.
   * - **mountDomain**: the mount target address of the container. For more information, see [DescribeMountTargets](https://help.aliyun.com/document_detail/62626.html).
   * - **nasPath**: the relative file directory of the NAS file system.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * This field is not recommended. Configure **NasConfigs** instead. The ID of the NAS file system. If the configurations remain unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **NasId** field in the request. If you need to clear the NAS configurations, you must set the value of this field to an empty string in the request. That is, set the **NasId** field to "".
   * 
   * @example
   * 10d3b4****
   */
  nasId?: string;
  /**
   * @remarks
   * The application edition. Valid values:
   * - lite: Lite Edition.
   * - std: Standard Edition.
   * - pro: Professional Edition.
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The RAM role for the identity authentication service.
   * 
   * 
   * > You must create an OIDC identity provider and an identity provider role in the same region in advance. For more information, see [Create an OIDC identity provider](https://help.aliyun.com/document_detail/2331022.html) and [Create an IdP for role-based SSO](https://help.aliyun.com/document_detail/2331016.html).
   * 
   * @example
   * sae-test
   */
  oidcRoleName?: string;
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
   * The OSS mount description. Parameter description:
   * 
   * - **bucketName**: the name of the bucket.
   * - **bucketPath**: the folder or object that you created in OSS. If the OSS mount folder does not exist, an exception is triggered.
   * - **mountPath**: the container path in SAE. If the path already exists, it is an overwrite relationship. If the path does not exist, it is created.
   * - **readOnly**: specifies whether the container path has read permissions on the mount directory resources. Valid values:
   *     - **true**: read-only permissions.
   *     - **false**: read and write permissions.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The type of the application package. Valid values:
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
   * - If you use Python for deployment, valid values are **PythonZip** and **Image**.
   * 
   * @example
   * FatJar
   */
  packageType?: string;
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
   * The PHP version required by the PHP deployment package. Images are not supported.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The mount path for PHP application monitoring. You must ensure that the PHP server loads the configuration file in this path. You do not need to pay attention to the configuration content. SAE automatically renders the correct configuration file.
   * 
   * @example
   * /usr/local/etc/php/conf.d/arms.ini
   */
  phpArmsConfigLocation?: string;
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
   * The mount path for the PHP application startup configuration. You must ensure that the PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script to execute after the container starts. A script is triggered immediately after the container is created. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`.
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. A script is triggered before the container is deleted. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`.
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * Enables service registration and discovery for Kubernetes Services. Valid values:
   * 
   * - **portProtocols**: the port and protocol. Valid values for the port: 1 to 65535. Valid values for the protocol: **TCP** and **UDP**.
   * - **portAndProtocol**: the port and protocol. Valid values for the port: 1 to 65535. Valid values for the protocol: **TCP** and **UDP**. **Use portProtocols instead. If portProtocols is set, only portProtocols takes effect**.
   * - **enable**: enables service registration and discovery for Kubernetes Services.
   * 
   * @example
   * {"portProtocols":[{"port":18012,"protocol":"TCP"}],"portAndProtocol":{"18012":"TCP"},"enable":true}
   */
  pvtzDiscoverySvc?: string;
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
   * The custom installation module dependencies. By default, the dependencies defined in the requirements.txt file in the root folder are installed. If this parameter is not configured or a custom software package is used, you can specify the dependencies to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The application runtime security protection (RASP) configuration.
   */
  raspConfigShrink?: string;
  /**
   * @remarks
   * The readiness probe for the application. Containers that fail multiple health checks are stopped and restarted. Traffic from the SLB instance is not routed to containers that fail the health check. The **exec**, **httpGet**, and **tcpSocket** methods are supported. For specific examples, see the **Liveness** parameter.
   * 
   * > You can select only one method for the health check.
   * 
   * @example
   * {"exec":{"command":["sleep","6s"]},"initialDelaySeconds":15,"timeoutSeconds":12}
   */
  readiness?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The mount description of the **Secret**. Uses the secret created on the Secret page of the namespace to inject confidential information into the container. Parameter description:
   * 
   * - **secretId**: the instance ID of the secret instance. You can obtain the instance ID by calling the ListSecrets operation.
   * - **key**: the key value.
   * 
   * > You can mount all keys by passing the `sae-sys-secret-all` parameter.
   * 
   * - **mountPath**: the mount path.
   * 
   * @example
   * [{“secretId":10,”key":"test","mountPath":"/tmp"}]
   */
  secretMountDesc?: string;
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
   * The canary tags configured for the application.
   * 
   * @example
   * {\\"alicloud.service.tag\\":\\"g1\\"}
   */
  serviceTags?: string;
  /**
   * @remarks
   * The container configuration information.
   */
  sidecarContainersConfigShrink?: string;
  /**
   * @remarks
   * The Settings for collecting logs to Simple Log Service (SLS).
   * 
   * - Use SLS resources automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - Use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameter description:
   * 
   * - **projectName**: the name of the SLS project.  
   * - **logDir**: the log path.
   * - **logType**: the log type. **stdout** indicates container standard output logs. You can set only 1 standard output log. If this parameter is not set, file logs are collected.
   * - **logstoreName**: the name of the SLS Logstore.
   * - **logtailName**: the name of the SLS Logtail. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection Settings remain unchanged during multiple deployments, you do not need to set this parameter. That is, you do not need to include the **SlsConfigs** field in the request. If you no longer need the SLS collection feature, you must set the value of this field to an empty string in the request. That is, set the **SlsConfigs** field to "".
   * 
   * > Projects that are automatically created with the application are deleted when the application is deleted. Therefore, when you select an existing project, you cannot select a project that is automatically created by SAE.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * sls log tags
   * 
   * @example
   * []
   */
  slsLogEnvTags?: string;
  /**
   * @remarks
   * Enables application startup probing.
   * - Check succeeded: indicates that the application is started. If you configure liveness and readiness probes, the liveness and readiness probes are executed after the application is started.
   * - Check failed: indicates that the application fails to start. An exception is reported and the application is automatically restarted.
   * 
   * > Note
   * > - The exec, httpGet, and tcpSocket methods are supported. For specific examples, refer to the Liveness parameter.
   * > - You can select only one method for health checks.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  startupProbe?: string;
  /**
   * @remarks
   * Configures service registration and discovery and end-to-end canary release based on Kubernetes Services:
   * 
   * - enable: specifies whether to enable the end-to-end canary release feature based on Kubernetes Services.
   *   - true: enables the feature.
   *   - false: disables the feature.
   * - namespaceId: the ID of the namespace.
   * - portAndProtocol: the listening port and protocol. Format: {"port:protocol type":"container port"}.
   * - portProtocols: defines the port and protocol of the service.
   *   - port: the port.
   *   - protocol: the protocol.
   *   - targetPort: the container port.
   * - pvtzDiscoveryName: service name of the service discovery.
   * - serviceId: the ID of the service.
   * - serviceName: service name of the service.
   * 
   * @example
   * {\\"enable\\":\\"false\\",\\"namespaceId\\":\\"cn-beijing:test\\",\\"portAndProtocol\\":{\\"2000:TCP\\":\\"18081\\"},\\"portProtocols\\":[{\\"port\\":2000,\\"protocol\\":\\"TCP\\",\\"targetPort\\":18081}],\\"pvtzDiscoveryName\\":\\"cn-beijing-1421801774382676\\",\\"serviceId\\":\\"3513\\",\\"serviceName\\":\\"demo-gray.test\\"}
   */
  swimlanePvtzDiscoverySvc?: string;
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
   * - **port**: the port range is 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. If this parameter is not configured, the default value is 8080.
   * - **contextPath**: the access path. Default value: the root directory "/".
   * - **maxThreads**: the maximum number of connections in the connection pool. Default value: 400.
   * - **uriEncoding**: the encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If this parameter is not set, the default value is **ISO-8859-1**.
   * - **useBodyEncodingForUri**: specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The deployment policy. When the minimum number of ready instances is 1, the value of the **UpdateStrategy** field is "". When the minimum number of ready instances is greater than 1, examples are as follows:
   *  
   *  - grayscale 1 instance + 2 subsequent batches + automatic batching + 1-minute interval between batches: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
   *   - grayscale 1 instance + 2 subsequent batches + manual batching: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
   *   - 2 batches + automatic batching + 0-minute interval between batches: `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
   * 
   * Parameter description:
   *   - **type**: the type of the publish policy. Valid values: **GrayBatchUpdate** for grayscale publish and **BatchUpdate** for batch publish.
   *   - **batchUpdate**: the batch publish policy.
   *     - **batch**: the number of publish batches.
   *     - **releaseType**: the processing method between batches. Valid values: **auto** for automatic and **manual** for manual.
   *     - **batchWaitTime**: the interval between batches. Unit: minutes.
   * 
   *   - **grayUpdate**: the number of grayscale instances. This parameter is required when **type** is set to **GrayBatchUpdate**.
   * 
   * @example
   * {"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}
   */
  updateStrategy?: string;
  /**
   * @remarks
   * The vSwitch where the network interface controller (NIC) of the application instance resides. The vSwitch must be located in the preceding VPC.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The startup command for the application deployed by using a WAR package. The procedure is the same as that for configuring the startup command for image deployment. For more information, see [Configure a startup command](https://help.aliyun.com/document_detail/96677.html).
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
      agentVersion: 'AgentVersion',
      albIngressReadinessGate: 'AlbIngressReadinessGate',
      appId: 'AppId',
      associateEip: 'AssociateEip',
      autoEnableApplicationScalingRule: 'AutoEnableApplicationScalingRule',
      batchWaitTime: 'BatchWaitTime',
      changeOrderDesc: 'ChangeOrderDesc',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      customImageNetworkType: 'CustomImageNetworkType',
      deploy: 'Deploy',
      dotnet: 'Dotnet',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirDesc: 'EmptyDirDesc',
      enableAhas: 'EnableAhas',
      enableCpuBurst: 'EnableCpuBurst',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      enableNamespaceAgentVersion: 'EnableNamespaceAgentVersion',
      enableNewArms: 'EnableNewArms',
      enablePrometheus: 'EnablePrometheus',
      enableSidecarResourceIsolated: 'EnableSidecarResourceIsolated',
      envs: 'Envs',
      gpuConfig: 'GpuConfig',
      html: 'Html',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      initContainersConfigShrink: 'InitContainersConfig',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      labelsShrink: 'Labels',
      liveness: 'Liveness',
      lokiConfigs: 'LokiConfigs',
      maxSurgeInstanceRatio: 'MaxSurgeInstanceRatio',
      maxSurgeInstances: 'MaxSurgeInstances',
      memory: 'Memory',
      microRegistration: 'MicroRegistration',
      microRegistrationConfig: 'MicroRegistrationConfig',
      microserviceEngineConfig: 'MicroserviceEngineConfig',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
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
      pvtzDiscoverySvc: 'PvtzDiscoverySvc',
      python: 'Python',
      pythonModules: 'PythonModules',
      raspConfigShrink: 'RaspConfig',
      readiness: 'Readiness',
      replicas: 'Replicas',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfigShrink: 'SidecarContainersConfig',
      slsConfigs: 'SlsConfigs',
      slsLogEnvTags: 'SlsLogEnvTags',
      startupProbe: 'StartupProbe',
      swimlanePvtzDiscoverySvc: 'SwimlanePvtzDiscoverySvc',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      updateStrategy: 'UpdateStrategy',
      vSwitchId: 'VSwitchId',
      warStartOptions: 'WarStartOptions',
      webContainer: 'WebContainer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrAssumeRoleArn: 'string',
      acrInstanceId: 'string',
      agentVersion: 'string',
      albIngressReadinessGate: 'string',
      appId: 'string',
      associateEip: 'boolean',
      autoEnableApplicationScalingRule: 'boolean',
      batchWaitTime: 'number',
      changeOrderDesc: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      customHostAlias: 'string',
      customImageNetworkType: 'string',
      deploy: 'string',
      dotnet: 'string',
      edasContainerVersion: 'string',
      emptyDirDesc: 'string',
      enableAhas: 'string',
      enableCpuBurst: 'boolean',
      enableGreyTagRoute: 'boolean',
      enableNamespaceAgentVersion: 'boolean',
      enableNewArms: 'boolean',
      enablePrometheus: 'boolean',
      enableSidecarResourceIsolated: 'boolean',
      envs: 'string',
      gpuConfig: 'string',
      html: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      initContainersConfigShrink: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      labelsShrink: 'string',
      liveness: 'string',
      lokiConfigs: 'string',
      maxSurgeInstanceRatio: 'number',
      maxSurgeInstances: 'number',
      memory: 'number',
      microRegistration: 'string',
      microRegistrationConfig: 'string',
      microserviceEngineConfig: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      mountDesc: 'string',
      mountHost: 'string',
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
      pvtzDiscoverySvc: 'string',
      python: 'string',
      pythonModules: 'string',
      raspConfigShrink: 'string',
      readiness: 'string',
      replicas: 'number',
      secretMountDesc: 'string',
      securityGroupId: 'string',
      serviceTags: 'string',
      sidecarContainersConfigShrink: 'string',
      slsConfigs: 'string',
      slsLogEnvTags: 'string',
      startupProbe: 'string',
      swimlanePvtzDiscoverySvc: 'string',
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      updateStrategy: 'string',
      vSwitchId: 'string',
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

