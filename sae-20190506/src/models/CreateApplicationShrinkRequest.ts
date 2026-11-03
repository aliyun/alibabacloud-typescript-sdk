// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationShrinkRequest extends $dara.Model {
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
   * The Container Registry ACR Enterprise instance ID. This parameter is required when **ImageUrl** is set to a Container Registry Enterprise instance image.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The Aliyun Agent version.
   * 
   * @example
   * 4.4.2
   */
  agentVersion?: string;
  /**
   * @remarks
   * The description of the application. The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is a test description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The name of the application. The name can contain digits, letters, and hyphens (-). It must start with a letter and cannot end with a hyphen (-). The name can be up to 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The source of the application. A value of micro_service indicates a microservice application.
   * 
   * @example
   * micro_service
   */
  appSource?: string;
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
   * Specifies whether to automatically configure the network environment. Valid values:
   * 
   * - **true**: SAE automatically configures the network environment when the application is created. The values of **NamespaceId**, **VpcId**, **vSwitchId**, and **SecurityGroupId** are ignored.
   * - **false**: SAE manually configures the network environment when the application is created.
   * 
   * > If you set this parameter to **true**, other **NamespaceId** values passed are ignored.
   * 
   * @example
   * true
   */
  autoConfig?: boolean;
  /**
   * @remarks
   * The ID of the base application.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9de8a41
   */
  baseAppId?: string;
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
   * Based on the preceding example, Command="echo", CommandArgs=["abc", ">", "file0"].
   * 
   * 
   * >Notice: This parameter is required when PackageType is set to DotnetZip.</notice>
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the image startup command, which are required by the startup command **Command**. The format is as follows:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`, where `["abc", ">", "file0"]` must be converted to a string in JSON array format. If no arguments are required, leave this parameter empty.
   * <notice>This parameter is required when PackageType is set to DotnetZip.</notice>
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The mount description of the **ConfigMap**. Uses the configuration item created on the configuration item page of the namespace to inject configuration information into the container. Parameter description:
   * 
   * - **configMapId**: instance ID of the ConfigMap instance. You can invoke the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the instance ID.
   * - **key**: the key value.
   * 
   * > You can mount all keys by passing the sae-sys-configmap-all parameter.
   * 
   * - **mountPath**: the mount path.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The number of CPU cores required for each instance. Unit: millicore. The value cannot be 0. Only the following defined specifications are supported:
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
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The custom image type. If the image is not a custom image, set this parameter to an empty string:
   * 
   * - internet: public network image.
   * - intranet: private network image.
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to deploy the application immediately. Valid values:
   * 
   * - **true**: deploys the application immediately. This is the default value.
   * - **false**: deploys the application later.
   * 
   * @example
   * true
   */
  deploy?: boolean;
  /**
   * @remarks
   * The disk storage size, in GB.
   * 
   * @example
   * 50
   */
  diskSize?: number;
  /**
   * @remarks
   * The version number of the .NET framework:
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
   * The version of the application runtime environment in the High-Speed Service Framework (HSF), such as the Ali-Tomcat container.
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
   * Specifies whether to enable the CPU Burst feature:
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
   * Specifies whether to enable application monitoring for non-Java applications based on eBPF technology. Valid values:
   * - **true**: enables the feature.
   * - **false**: disables the feature. This is the default value.
   * 
   * @example
   * false
   */
  enableEbpf?: string;
  /**
   * @remarks
   * Specifies whether to reuse the namespace agent version configuration.
   * 
   * @example
   * true
   */
  enableNamespaceAgentVersion?: boolean;
  /**
   * @remarks
   * Specifies whether to reuse the namespace Simple Log Service (SLS) log configuration.
   * 
   * @example
   * true
   */
  enableNamespaceSlsConfig?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the new Application Real-Time Monitoring Service (ARMS) features:
   * 
   * - true: enables the features.
   * - false: disables the features.
   * 
   * @example
   * false
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
   * Specifies whether to enable sidecar resource isolation:
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
   * The environment variables of the container. You can customize environment variables or reference ConfigMaps. To reference a ConfigMap, you must create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable. The priority of this parameter is higher than that of valueFrom.
   * - Reference a ConfigMap (valueFrom)
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter sae-sys-configmap-all-<ConfigMap name>, for example, sae-sys-configmap-all-test1.
   *     - **valueFrom**: the reference of the environment variable. Set the value to configMapRef.
   *         - **configMapId**: the ID of the ConfigMap.
   *         - **key**: the key. If you reference all key-value pairs, do not set this field.
   * 
   * @example
   * [
   *     {
   *         "name": "sae-sys-configmap-all-hello",
   *         "valueFrom": {
   *             "configMapRef": {
   *                 "configMapId": 100,
   *                 "key": ""
   *             }
   *         }
   *     },
   *     {
   *         "name": "hello",
   *         "valueFrom": {
   *             "configMapRef": {
   *                 "configMapId": 101,
   *                 "key": "php-fpm"
   *             }
   *         }
   *     },
   *     {
   *         "name": "envtmp",
   *         "value": "newenv"
   *     }
   * ]
   */
  envs?: string;
  /**
   * @remarks
   * The GPU configuration.
   * 
   * @example
   * {\\n\\"gpuType\\":\\"PPU810E\\",\\n\\"gpuCount\\":\\"1\\"\\n}
   */
  gpuConfig?: string;
  /**
   * @remarks
   * The Kubernetes headless service registration and discovery configuration.
   * - serviceName: The service name.
   * - namespaceId: The namespace ID.
   * 
   * @example
   * {\\"serviceName\\":\\"leaf-test-headless\\",\\"namespaceId\\":\\"cn-zhangjiakou:prod\\"}
   */
  headlessPvtzDiscoverySvc?: string;
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
   * The ID of the corresponding Secret.
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
   * The init container configuration.
   */
  initContainersConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether the application is stateful.
   * 
   * @example
   * true
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The startup arguments for the JAR package. Default startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package. Default startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The JDK version on which the deployment package depends. Valid values:
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
   * The summary configuration for collecting logs to Kafka. Valid values:
   * 
   * - **kafkaEndpoint**: the service registration address of the Kafka API.
   * - **kafkaInstanceId**: the Kafka instance ID.
   * - **kafkaConfigs**: the summary configuration for one or more logs. For value description, see the **kafkaConfigs** request parameter in this topic.
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
   * The liveness probe of the container. A container that failed the health check undergoes shutdown and recovers. The following methods are supported:
   * 
   * - **exec**: for example, {"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   * - **httpGet**: for example, {"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}
   * - **tcpSocket**: for example, {"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}
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
   * - **initialDelaySeconds**: Settings for the delay before the health check starts. Default value: 10. Unit: seconds.
   * - **periodSeconds**: Settings for the health check epoch. Default value: 30. Unit: seconds.
   * - **timeoutSeconds**: Settings for the timeout period of the health check. Default value: 1. Unit: seconds. If this parameter is set to 0 or not set, the default timeout period is 1 second.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
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
   * The memory size required for each instance. Unit: MB. The value cannot be 0. The memory size has a one-to-one correspondence with the number of CPU cores. Only the following defined specifications are supported:
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
   * The Nacos registry. Valid values:
   * - **0**: the built-in Nacos of SAE.
   * - **1**: a self-managed Nacos.
   * - **2**: Microservices Engine (MSE) Nacos.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The configuration of the registry.
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
   *   - enable: Specifies whether to enable the lossless online feature. Valid values: true (enabled) and false (disabled).
   *   - notice: Specifies whether to enable the notification feature. Valid values: true (enabled) and false (disabled).
   *   - warmupTime: The warm-up duration for low traffic, in seconds.
   * 
   * @example
   * {"enable": true,"mseLosslessRule": {"delayTime": 0,"enable": false,"notice": false,"warmupTime": 120}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * Do not configure this field. Configure **NasConfigs** instead. The mount description of the NAS file system. If the configuration remains unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **MountDesc** field in the request. If you need to clear the NAS configuration, set the value of this field to an empty string in the request. That is, set the **MountDesc** field to "".
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * Do not configure this field. Configure **NasConfigs** instead. The mount target of the NAS file system in the VPC of the application. If the configuration remains unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **MountHost** field in the request. If you need to clear the NAS configuration, set the value of this field to an empty string in the request. That is, set the **MountHost** field to "".
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The ID of the Serverless App Engine (SAE) namespace. Only namespaces whose names contain lowercase letters and hyphens (-) are supported. The name must start with a letter.
   * You can obtain the namespace by calling the [DescribeNamespaceList](https://help.aliyun.com/document_detail/126547.html) operation.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configuration for mounting the NAS file system. Valid values:
   * 
   * - **mountPath**: the mount path of the container.
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
   * Do not configure this field. Configure **NasConfigs** instead. The ID of the mounted Apsara File Storage NAS file system. The NAS file system must reside in the same region as the cluster. It must have an available quota for creating mount targets, or its mount targets must already exist on a vSwitch in the VPC. If you do not specify this parameter and the **mountDescs** field exists, a NAS file system is automatically purchased and mounted to a vSwitch in the VPC by default.
   * 
   * If the configuration remains unchanged during deployment, you do not need to set this parameter. That is, you do not need to include the **NASId** field in the request. If you need to clear the NAS configuration, set the value of this field to an empty string in the request. That is, set the **NASId** field to "".
   * 
   * @example
   * KSAK****
   */
  nasId?: string;
  /**
   * @remarks
   * The application version. Valid values:
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
   * > You must create an OIDC identity provider and an identity provider role in the same region in advance. For more information, see <props="china">[Create an OIDC identity provider](https://www.alibabacloud.com/help/en/ram/developer-reference/api-ims-2019-08-15-createoidcprovider) and [Create a role-based SSO identity provider](https://www.alibabacloud.com/help/en/ram/developer-reference/api-ims-2019-08-15-createsamlprovider)<props="intl">[Create an OIDC identity provider](https://www.alibabacloud.com/help/zh/ram/developer-reference/api-ims-2019-08-15-createoidcprovider) and [Create a role-based SSO identity provider](https://www.alibabacloud.com/help/zh/ram/developer-reference/api-ims-2019-08-15-createsamlprovider).
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
   * - **mountPath**: the container path in SAE. If the path already exists, it will overwrite the existing content. If the path does not exist, it is created.
   * - **readOnly**: specifies whether the container path has read permissions on the mounted folder resources. Valid values:
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
   * - When you deploy the application by using Java, **FatJar**, **War**, and **Image** are supported.
   * - When you deploy the application by using PHP, the following types are supported:
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
   * - When you deploy the application by using Python, **PythonZip** and **Image** are supported.
   * 
   * - When you deploy the application by using .NET Core, **DotnetZip** and **Image** are supported.
   *   > 
   *   > If you select DotnetZip, Dotnet specifies the version number of the .NET Core environment. .NET 3.1, .NET 5.0, .NET 6.0, .NET 7.0, and .NET 8.0 are supported. In this case, the Dotnet, Command, and CommandArgs parameters are required.
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
   * http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required when **PackageType** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The PHP version on which the PHP deployment package depends. Images are not supported.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The mount path for PHP application monitoring. You must ensure that the PHP server loads the configuration file in this path.
   * You do not need to pay attention to the configuration content. SAE automatically renders the correct configuration file.
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
   * The script to execute after the container starts. A script is triggered and executed immediately after the container is created. Format: {"exec":{"command":["cat","/etc/group"]}}
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. A script is triggered and executed before the container is deleted. Format: {"exec":{"command":["cat","/etc/group"]}}
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language used to create the application. Valid values:
   * 
   * - **java**: Java.
   * - **php**: PHP.
   * - **python**: Python.
   * - **dotnet**: .NET Core.
   * - **other**: multiple languages, such as C++, Go, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * Enables Kubernetes Service registration and discovery. Valid values:
   * 
   * - **serviceName**: the service name. The format is custom-namespace ID. The suffix -namespace ID cannot be customized and must be filled in based on the namespace where the application resides. For example, if you select the default namespace in the China (Beijing) region, the value is -cn-beijing-default.
   * - **namespaceId**: the ID of the namespace.
   * - **portProtocols**: the port and protocol. The port value ranges from 1 to 65535. The protocol supports **TCP** and **UDP**.
   * - **portAndProtocol**: the port and protocol. The port value ranges from 1 to 65535. The protocol supports **TCP** and **UDP**. **We recommend that you use portProtocols. If portProtocols Settings are configured, only portProtocols takes effect**.
   * - **enable**: enables Kubernetes Service registration and discovery.
   * 
   * @example
   * {"serviceName":"bwm-poc-sc-gateway-cn-beijing-front","namespaceId":"cn-beijing:front","portAndProtocol":{"18012":"TCP"},"enable":true,"portProtocols":[{"port":18012,"protocol":"TCP"}]}
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
   * The custom installation module dependencies. By default, the dependencies defined in the requirements.txt file in the root folder are installed. If no dependencies are configured or custom software packages are used, you can specify the dependencies to install.
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
   * The readiness probe of the application. A container that fails multiple health checks is stopped and restarted. Traffic from Server Load Balancer (SLB) is not routed to containers that fail the health check. The **exec**, **httpGet**, and **tcpSocket** methods are supported. For specific examples, see the **Liveness** parameter.
   * 
   * > You can select only one method for the health check.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  readiness?: string;
  /**
   * @remarks
   * The initial number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The resource type. Valid values: NULL (default), default (default), and haiguang (Hygon servers).
   * 
   * @example
   * NULL
   */
  resourceType?: string;
  /**
   * @remarks
   * The SAE version. Valid values:
   * 
   * - **v1**
   * - **v2**
   * 
   * @example
   * v1
   */
  saeVersion?: string;
  /**
   * @remarks
   * The mount description of the **Secret**. Uses the Secret created on the Secret page of the namespace to inject confidential information into the container. Parameter description:
   * 
   * - **secretId**: instance ID of the Secret instance. You can obtain the instance ID by invoking the ListSecrets operation.
   * - **key**: the key value.
   * 
   * > You can mount all keys by passing the sae-sys-secret-all parameter.
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
   * The canary release tags configured for the application.
   * 
   * @example
   * {\\"alicloud.service.tag\\":\\"g1\\"}
   */
  serviceTags?: string;
  /**
   * @remarks
   * The container configuration.
   */
  sidecarContainersConfigShrink?: string;
  /**
   * @remarks
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - Use SLS resources from automatic creation by SAE: [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}].
   * - Use custom SLS resources: [{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}].
   * 
   * Parameter description:
   * 
   * - **projectName**: the name of the SLS project.  
   * - **logDir**: the log path.
   * - **logType**: the log type. **stdout** indicates container standard output logs. Only one stdout log Settings can be configured. If Settings are not specified, file logs are collected.
   * - **logstoreName**: the name of the SLS Logstore.
   * - **logtailName**: the name of the SLS Logtail. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection configuration remains unchanged during multiple deployments, you do not need to set this parameter. That is, you do not need to include the **SlsConfigs** field in the request. If you no longer need the SLS collection feature, you must set the value of this field to an empty string in the request. That is, set the **SlsConfigs** field to "".
   * 
   * > Projects from automatic creation with the application are deleted when the application is deleted. Therefore, when selecting an existing project, you cannot select a project from automatic creation by SAE.
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
   * Enables application startup probes.
   * - Success: Indicates that the application is started. If you configure liveness and readiness probes, the liveness and readiness probes are executed after the application is started.
   * - Failure: Indicates that the application fails to start. An exception is reported and the application is automatically restarted.
   * > 
   * > - The exec, httpGet, and tcpSocket methods are supported. For specific examples, refer to the Liveness parameter.
   * > - You can select only one method for health checks.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  startupProbe?: string;
  /**
   * @remarks
   * The timeout period for graceful shutdown. Default value: 30. Unit: seconds. Valid values: 1 to 300.
   * 
   * @example
   * 30
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
   * The Tomcat file configuration. Set the value to "" or "{}" to delete the configuration:
   * 
   * - **port**: the port range is 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. If this parameter is not configured, the default value is 8080.
   * - **contextPath**: the access path. The default value is the root directory "/".
   * - **maxThreads**: the maximum number of connections in the connection pool. The default value is 400.
   * - **uriEncoding**: the encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If this parameter is not set, the default value is **ISO-8859-1**.
   * - **useBodyEncodingForUri**: specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the elastic network interface controllers (NICs) of the application instance belong. The vSwitch must reside in the preceding VPC. The vSwitch is also attached to the SAE namespace. If you do not specify this parameter, the ID of the vSwitch attached to the namespace is used by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) that corresponds to the SAE namespace. In SAE, a namespace can correspond to only one VPC, and the correspondence cannot be modified. The binding relationship is established when you create the first SAE application in the namespace. Multiple namespaces can correspond to one VPC. If you do not specify this parameter, the ID of the VPC bound to the namespace is used by default.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
  vpcId?: string;
  /**
   * @remarks
   * The startup command for the application deployed by using a WAR package. The procedure is the same as that for configuring the startup command for image deployment. For more information, see [Set a startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version on which the WebContainer deployment package depends. Valid values:
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
      agentVersion: 'AgentVersion',
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
      emptyDirDesc: 'EmptyDirDesc',
      enableCpuBurst: 'EnableCpuBurst',
      enableEbpf: 'EnableEbpf',
      enableNamespaceAgentVersion: 'EnableNamespaceAgentVersion',
      enableNamespaceSlsConfig: 'EnableNamespaceSlsConfig',
      enableNewArms: 'EnableNewArms',
      enablePrometheus: 'EnablePrometheus',
      enableSidecarResourceIsolated: 'EnableSidecarResourceIsolated',
      envs: 'Envs',
      gpuConfig: 'GpuConfig',
      headlessPvtzDiscoverySvc: 'HeadlessPvtzDiscoverySvc',
      html: 'Html',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      initContainersConfigShrink: 'InitContainersConfig',
      isStateful: 'IsStateful',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      labelsShrink: 'Labels',
      liveness: 'Liveness',
      lokiConfigs: 'LokiConfigs',
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
      raspConfigShrink: 'RaspConfig',
      readiness: 'Readiness',
      replicas: 'Replicas',
      resourceType: 'ResourceType',
      saeVersion: 'SaeVersion',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfigShrink: 'SidecarContainersConfig',
      slsConfigs: 'SlsConfigs',
      slsLogEnvTags: 'SlsLogEnvTags',
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
      agentVersion: 'string',
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
      emptyDirDesc: 'string',
      enableCpuBurst: 'boolean',
      enableEbpf: 'string',
      enableNamespaceAgentVersion: 'boolean',
      enableNamespaceSlsConfig: 'boolean',
      enableNewArms: 'boolean',
      enablePrometheus: 'boolean',
      enableSidecarResourceIsolated: 'boolean',
      envs: 'string',
      gpuConfig: 'string',
      headlessPvtzDiscoverySvc: 'string',
      html: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      initContainersConfigShrink: 'string',
      isStateful: 'boolean',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      labelsShrink: 'string',
      liveness: 'string',
      lokiConfigs: 'string',
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
      raspConfigShrink: 'string',
      readiness: 'string',
      replicas: 'number',
      resourceType: 'string',
      saeVersion: 'string',
      secretMountDesc: 'string',
      securityGroupId: 'string',
      serviceTags: 'string',
      sidecarContainersConfigShrink: 'string',
      slsConfigs: 'string',
      slsLogEnvTags: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

