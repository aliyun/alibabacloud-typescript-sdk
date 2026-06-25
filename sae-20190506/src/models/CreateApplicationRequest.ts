// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitContainerConfig } from "./InitContainerConfig";
import { SidecarContainerConfig } from "./SidecarContainerConfig";


export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role required to pull images across Alibaba Cloud accounts. For more information, see [Authorize cross-account access using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The Container Registry Enterprise Edition (ACR Enterprise Edition) instance ID. This parameter is required when **ImageUrl** is a Container Registry Enterprise Edition image.
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
   * The application description. It cannot exceed 1024 characters.
   * 
   * @example
   * This is a test description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The application name. It can contain digits, letters, and hyphens (-). It must start with a letter and cannot end with a hyphen (-). The name cannot exceed 36 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * Select micro_service for a microservice application.
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * Whether to bind an Elastic IP address (EIP). Valid values:
   * 
   * - **true**: Bind.
   * 
   * - **false**: Do not bind.
   * 
   * @example
   * true
   */
  associateEip?: boolean;
  /**
   * @remarks
   * Whether to automatically configure the network environment. Valid values:
   * 
   * - **true**: SAE automatically configures the network environment when creating an application. The values of **NamespaceId**, **VpcId**, **vSwitchId**, and **SecurityGroupId** are ignored.
   * 
   * - **false**: SAE manually configures the network environment when creating an application.
   * 
   * > If you select **true**, other **NamespaceId** values passed are ignored.
   * 
   * @example
   * true
   */
  autoConfig?: boolean;
  /**
   * @remarks
   * The base application ID.
   * 
   * @example
   * ee99cce6-1c8e-4bfa-96c3-3e2fa9de8a41
   */
  baseAppId?: string;
  /**
   * @remarks
   * The image start command. This command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * 
   * Based on the example, Command="echo" and `CommandArgs=["abc", ">", "file0"]`.
   * 
   * >Notice: 
   * 
   * This option is required when PackageType is DotnetZip.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The image start command parameters. These are the parameters required by the **Command** parameter. Format:
   * 
   * `["a","b"]`
   * 
   * In the example, `CommandArgs=["abc", ">", "file0"]`. Convert `["abc", ">", "file0"]` to a string type, with the format as a JSON array. If this parameter is not needed, do not specify it.
   * >Notice: This option is required when PackageType is DotnetZip.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The **ConfigMap** mount description. Use configuration items created on the namespace configuration item page to inject configuration information into the container. Parameter description:
   * 
   * - **configMapId**: The ConfigMap instance ID. Obtain it by calling the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) API operation.
   * 
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
   * The CPU required for each instance, in millicores. It cannot be 0. Currently, only the following defined specifications are supported:
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
   * Custom Host mapping within the container. Valid values:
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
   * The custom image type. If it is not a custom image, set it to an empty string:
   * 
   * - internet: Public network image.
   * 
   * - intranet: Private network image.
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * Whether to deploy immediately. Valid values:
   * 
   * - **true**: Default value. Deploy immediately.
   * 
   * - **false**: Deploy later.
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
   * 
   * - .NET 5.0
   * 
   * - .NET 6.0
   * 
   * - .NET 7.0
   * 
   * - .NET 8.0
   * 
   * @example
   * .NET 3.1
   */
  dotnet?: string;
  /**
   * @remarks
   * The application runtime environment version in the HSF framework, such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Shared temporary storage configuration.
   * 
   * @example
   * [{\\"name\\":\\"workdir\\",\\"mountPath\\":\\"/usr/local/tomcat/webapps\\"}]
   */
  emptyDirDesc?: string;
  /**
   * @remarks
   * Whether to enable the CPU Burst feature:
   * 
   * - true: Enable.
   * 
   * - false: Do not enable.
   * 
   * @example
   * true
   */
  enableCpuBurst?: boolean;
  /**
   * @remarks
   * Enable application monitoring for non-Java applications based on eBPF technology. Valid values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable. Default value.
   * 
   * @example
   * false
   */
  enableEbpf?: string;
  /**
   * @remarks
   * Whether to reuse the namespace Agent version configuration.
   * 
   * @example
   * true
   */
  enableNamespaceAgentVersion?: boolean;
  /**
   * @remarks
   * Whether to reuse the namespace SLS log configuration.
   * 
   * @example
   * true
   */
  enableNamespaceSlsConfig?: boolean;
  /**
   * @remarks
   * Whether to enable new ARMS features:
   * 
   * - true: Enable.
   * 
   * - false: Do not enable.
   * 
   * @example
   * false
   */
  enableNewArms?: boolean;
  /**
   * @remarks
   * Whether to enable Prometheus custom metric collection.
   * 
   * @example
   * false
   */
  enablePrometheus?: boolean;
  /**
   * @remarks
   * Whether to enable Sidecar resource isolation:
   * 
   * - true: Enable isolation.
   * 
   * - false: Do not enable isolation.
   * 
   * @example
   * true
   */
  enableSidecarResourceIsolated?: boolean;
  /**
   * @remarks
   * Container environment variable parameters. Support custom configurations or referencing configuration items. To reference a configuration item, create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * - Custom configuration
   * 
   *   - **name**: The environment variable name.
   * 
   *   - **value**: The environment variable value. This has a higher priority than valueFrom.
   * 
   * - Reference configuration item (valueFrom)
   * 
   *   - **name**: The environment variable name. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<configuration item name>`, for example, `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The environment variable reference. Set this to `configMapRef`.
   * 
   *     - **configMapId**: The configuration item ID.
   * 
   *     - **key**: The key. If you reference all key-values, do not set this field.
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
  gpuConfig?: string;
  /**
   * @remarks
   * K8s Headless Service service discovery.
   * 
   * - serviceName: The service name.
   * 
   * - namespaceId: The namespace ID.
   * 
   * @example
   * {\\"serviceName\\":\\"leaf-test-headless\\",\\"namespaceId\\":\\"cn-zhangjiakou:prod\\"}
   */
  headlessPvtzDiscoverySvc?: string;
  /**
   * @remarks
   * The Nginx version.
   * 
   * - nginx 1.20
   * 
   * - nginx 1.22
   * 
   * - nginx 1.24
   * 
   * - nginx 1.26
   * 
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
   * The image address. This parameter is required when **Package Type** is **Image**.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * Initialization container configuration.
   */
  initContainersConfig?: InitContainerConfig[];
  /**
   * @remarks
   * Whether it is a stateful application.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * JAR package startup parameters for the application. The application\\"s default start command is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * JAR package startup options for the application. The application\\"s default start command is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The JDK version that the deployment package depends on. Supported versions:
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
   * This parameter is not supported when **Package Type** is **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The summary configuration for collecting logs to Kafka. Valid values:
   * 
   * - **kafkaEndpoint**: The service registration address for the Kafka API.
   * 
   * - **kafkaInstanceId**: The Kafka instance ID.
   * 
   * - **kafkaConfigs**: The summary configuration for single or multiple logs. For valid values, see the **kafkaConfigs** request parameter in this topic.
   * 
   * @example
   * {"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}
   */
  kafkaConfigs?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * Container health check. Containers that fail the health check are shut down and recovered. Supported methods:
   * 
   * - **exec**: For example, `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
   * 
   * - **httpGet**: For example, `{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * - **tcpSocket**: For example, `{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * > Select only one method for the health check.
   * 
   * Parameter description:
   * 
   * - **exec.command**: Set the health check command.
   * 
   * - **httpGet.path**: The access path.
   * 
   * - **httpGet.scheme**: **HTTP** or **HTTPS**.
   * 
   * - **httpGet.isContainKeyWord**: **true** means the keyword is included, **false** means the keyword is not included. If this field is missing, advanced features are not used.
   * 
   * - **httpGet.keyWord**: The custom keyword. Do not omit the **isContainKeyWord** field when using it.
   * 
   * - **tcpSocket.port**: The port for TCP connection detection.
   * 
   * - **initialDelaySeconds**: Set the health check delay detection time. Default is 10 seconds.
   * 
   * - **periodSeconds**: Set the health check period. Default is 30 seconds.
   * 
   * - **timeoutSeconds**: Set the health check timeout duration. Default is 1 second. If you set it to 0 or do not set it, the default timeout is 1 second.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  liveness?: string;
  lokiConfigs?: string;
  /**
   * @remarks
   * The memory required for each instance, in MB. It cannot be 0. It has a one-to-one correspondence with CPU. Currently, only the following defined specifications are supported:
   * 
   * - **1024**: Corresponds to 500 millicores and 1000 millicores CPU.
   * 
   * - **2048**: Corresponds to 500, 1000 millicores, and 2000 millicores CPU.
   * 
   * - **4096**: Corresponds to 1000, 2000 millicores, and 4000 millicores CPU.
   * 
   * - **8192**: Corresponds to 2000, 4000 millicores, and 8000 millicores CPU.
   * 
   * - **12288**: Corresponds to 12000 millicores CPU.
   * 
   * - **16384**: Corresponds to 4000, 8000 millicores, and 16000 millicores CPU.
   * 
   * - **24576**: Corresponds to 12000 millicores CPU.
   * 
   * - **32768**: Corresponds to 16000 millicores CPU.
   * 
   * - **65536**: Corresponds to 8000, 16000, and 32000 millicores CPU.
   * 
   * - **131072**: Corresponds to 32000 millicores CPU.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * Select the Nacos registry. Valid values:
   * 
   * - **0**: SAE built-in Nacos.
   * 
   * - **1**: User-managed Nacos.
   * 
   * - **2**: MSE Professional Edition Nacos.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The registry configuration information.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-zvp2bh6h70r\\",\\"namespace\\":\\"4c0aa74f-57cb-423c-b6af-5d9f2d0e3dbd\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * Configure microservice administration features.
   * 
   * - Whether to enable microservice administration (enable):
   * 
   *   - true: Enable.
   * 
   *   - false: Do not enable.
   * 
   * - Configure graceful start and graceful shutdown (mseLosslessRule):
   * 
   *   - delayTime: The delay time.
   * 
   *   - enable: Whether to enable the graceful start feature. true means enabled, false means not enabled.
   * 
   *   - notice: Whether to enable the notification feature. true means enabled, false means enabled.
   * 
   *   - warmupTime: The duration of traffic prefetch, in seconds.
   * 
   * @example
   * {"enable": true,"mseLosslessRule": {"delayTime": 0,"enable": false,"notice": false,"warmupTime": 120}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * Do not configure this field; configure **NasConfigs** instead. The NAS mount description. If the configuration has not changed during deployment, you do not need to set this parameter (that is, the request does not need to include the **MountDesc** field). To clear the NAS configuration, set the value of this field to an empty string in the request (that is, the value of the **MountDesc** field in the request is "").
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * Do not configure this field; configure **NasConfigs** instead. The NAS mount target within the application VPC. If the configuration has not changed during deployment, you do not need to set this parameter (that is, the request does not need to include the **MountHost** field). To clear the NAS configuration, set the value of this field to an empty string in the request (that is, the value of the **MountHost** field in the request is "").
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The SAE namespace ID. Only namespaces with names consisting of lowercase letters and hyphens (-) are supported. The name must start with a letter. Obtain the namespace by calling the [DescribeNamespaceList](https://help.aliyun.com/document_detail/126547.html) API operation.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configuration for mounting NAS. Valid values:
   * 
   * - **mountPath**: The container mount path.
   * 
   * - **readOnly**: If the value is **false**, it indicates read and write permission.
   * 
   * - **nasId**: The NAS ID.
   * 
   * - **mountDomain**: The container mount target address. For more information, see [DescribeMountTargets](https://help.aliyun.com/document_detail/62626.html).
   * 
   * - **nasPath**: The relative file directory of NAS.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * Do not configure this field; configure **NasConfigs** instead. The ID of the mounted NAS. It must be in the same region as the cluster. It must have available mount target creation quotas, or its mount target must already be on a vSwitch within the VPC. If you do not specify this parameter and the **mountDescs** field exists, the system automatically purchases a NAS and mounts it to a vSwitch within the VPC by default.
   * 
   * If the configuration has not changed during deployment, you do not need to set this parameter (that is, the request does not need to include the **NASId** field). To clear the NAS configuration, set the value of this field to an empty string in the request (that is, the value of the **NASId** field in the request is "").
   * 
   * @example
   * KSAK****
   */
  nasId?: string;
  /**
   * @remarks
   * The application version:
   * 
   * - lite: Lightweight Edition
   * 
   * - std: Standard Edition
   * 
   * - pro: Professional Edition
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * Set the identity authentication service RAM role.
   * 
   * > Create an OpenID Connect (OIDC) identity provider and an identity provider role in the same region beforehand. For more information, see<props="china">[Create an OIDC identity provider](https://help.aliyun.com/zh/ram/developer-reference/api-ims-2019-08-15-createoidcprovider?spm=a2c4g.11186623.help-menu-28625.d_4_1_0_3_2_7.7f0443efmdpxa3) and[Create a role SSO identity provider](https://help.aliyun.com/zh/ram/developer-reference/api-ims-2019-08-15-createsamlprovider?spm=a2c4g.11186623.help-menu-28625.d_4_1_0_3_2_2.632244b1s8QbQt)<props="intl">[Create an OIDC identity provider](https://www.alibabacloud.com/help/zh/ram/developer-reference/api-ims-2019-08-15-createoidcprovider) and[Create a role SSO identity provider](https://www.alibabacloud.com/help/zh/ram/developer-reference/api-ims-2019-08-15-createsamlprovider).
   * 
   * @example
   * sae-test
   */
  oidcRoleName?: string;
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
   * OSS mount description. Parameter description:
   * 
   * - **bucketName**: The Bucket name.
   * 
   * - **bucketPath**: The directory or OSS object you created in OSS. If the OSS mount directory does not exist, an exception is triggered.
   * 
   * - **mountPath**: The container path in SAE. If the path exists, it is overwritten. If the path does not exist, it is created.
   * 
   * - **readOnly**: Whether the container path has read permission for the mounted directory resource. Valid values:
   * 
   *   - **true**: Read-only permission.
   * 
   *   - **false**: Read and write permission.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The application package type. Valid values:
   * 
   * - If you deploy with Java, supported types are **FatJar**, **War**, and **Image**.
   * 
   * - If you deploy with PHP, supported types are:
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
   * - If you deploy with Python, supported types are **PythonZip** and **Image**.
   * 
   * - If you deploy with .NET Core, supported types are **DotnetZip** and **Image**.
   * 
   *   > When you select DotnetZip, Dotnet is the version number of the .NET Core environment. Supported versions are .NET 3.1, .NET 5.0, .NET 6.0, .NET 7.0, and .NET 8.0. The Dotnet, Command, and CommandArgs options are required.
   * 
   * This parameter is required.
   * 
   * @example
   * FatJar
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required when **Package Type** is **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of the deployment package. This parameter is required when **Package Type** is **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The PHP version that the PHP deployment package depends on. Images do not support this.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The mount path for PHP application monitoring. Ensure that the PHP server loads the configuration file from this path. You do not need to focus on the configuration content; SAE automatically renders the correct configuration file.
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
   * The mount path for PHP application startup configuration. Ensure that the PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script to execute after the container starts. A script is triggered immediately after the container is created. Format: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script to execute before the container stops. A script is triggered before the container is deleted. Format: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The technology stack language for creating the application. Valid values:
   * 
   * - **java**: Java language.
   * 
   * - **php**: PHP language.
   * 
   * - **python**: Python language.
   * 
   * - **dotnet**: .NET Core language.
   * 
   * - **other**: Multi-language, such as C++, Go, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * Enable K8s Service service discovery. Valid values:
   * 
   * - **serviceName**: The service name. Format: `custom-namespace ID`. The suffix `-namespace ID` cannot be customized; specify it based on the application\\"s namespace. For example, if you select the default namespace in the China (Beijing) region, it is `-cn-beijing-default`.
   * 
   * - **namespaceId**: The namespace ID.
   * 
   * - **portProtocols**: The port and protocol. The port range is [1, 65535]. Supported protocols are **TCP** and **UDP**.
   * 
   * - portAndProtocol: The port and protocol. The port range is [1, 65535]. Supported protocols are TCP and **UDP**. **portProtocols** is recommended. If **portProtocols** is set, only **portProtocols** takes effect.
   * 
   * - **enable**: Enable K8s Service service discovery.
   * 
   * @example
   * {"serviceName":"bwm-poc-sc-gateway-cn-beijing-front","namespaceId":"cn-beijing:front","portAndProtocol":{"18012":"TCP"},"enable":true,"portProtocols":[{"port":18012,"protocol":"TCP"}]}
   */
  pvtzDiscoverySvc?: string;
  /**
   * @remarks
   * The Python environment. Supports **PYTHON 3.9.15**.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * Custom installation of module dependencies. By default, the system installs dependencies defined in requirements.txt in the root directory. If you do not configure or customize packages, you can specify the dependencies to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * Application startup status check. Containers that fail multiple health checks are shut down and restarted. Containers that do not pass the health check will not receive SLB traffic. Supported methods are **exec**, **httpGet**, and **tcpSocket**. For examples, see the **Liveness** parameter.
   * 
   * > Select only one method for the health check.
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
   * The resource type. Supports NULL (default), default, and haiguang (Haiguang server) types.
   * 
   * @example
   * NULL
   */
  resourceType?: string;
  /**
   * @remarks
   * The SAE version. Supported versions:
   * 
   * - **v1**
   * 
   * - **v2**
   * 
   * @example
   * v1
   */
  saeVersion?: string;
  /**
   * @remarks
   * The **Secret** mount description. Use secrets created on the namespace secret page to inject secret information into the container. Parameter description:
   * 
   * - **secretId**: The secret instance ID. Obtain it by calling the ListSecrets API operation.
   * 
   * - **key**: The key value.
   * 
   * > You can mount all keys by passing the `sae-sys-secret-all` parameter.
   * 
   * - **mountPath**: The mount path.
   * 
   * @example
   * [{“secretId":10,”key":"test","mountPath":"/tmp"}]
   */
  secretMountDesc?: string;
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
   * The grayscale tags for application configuration.
   * 
   * @example
   * {\\"alicloud.service.tag\\":\\"g1\\"}
   */
  serviceTags?: string;
  /**
   * @remarks
   * Container configuration information.
   */
  sidecarContainersConfig?: SidecarContainerConfig[];
  /**
   * @remarks
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - Use SLS resources automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - Use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameter description:
   * 
   * - **projectName**: The name of the Project on SLS.
   * 
   * - **logDir**: The log path.
   * 
   * - **logType**: The log type. **stdout** indicates container standard output logs; you can set only one such entry. If you do not set this, the system collects file logs.
   * 
   * - **logstoreName**: The name of the Logstore on SLS.
   * 
   * - **logtailName**: The name of the Logtail on SLS. If you do not specify this, the system creates a new Logtail.
   * 
   * If the SLS collection configuration has not changed during multiple deployments, you do not need to set this parameter (that is, the request does not need to include the **SlsConfigs** field). If you no longer need the SLS collection feature, set the value of this field to an empty string in the request (that is, the value of the **SlsConfigs** field in the request is "").
   * 
   * > Projects automatically created with an application are deleted when the application is deleted. Therefore, when selecting an existing Project, do not select a Project automatically created by SAE.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * SLS log tags.
   */
  slsLogEnvTags?: string;
  /**
   * @remarks
   * Enable application startup probes.
   * 
   * - Successful check: Indicates that the application started successfully. If you configured Liveness and Readiness checks, the system performs Liveness and Readiness checks after the application starts successfully.
   * 
   * - Failed check: Indicates that the application failed to start. The system reports an exception and automatically restarts the application.
   * 
   * > * Supported methods are exec, httpGet, and tcpSocket. For examples, see the Liveness parameter.
   * >
   * > * Select only one method for the health check.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  startupProbe?: string;
  /**
   * @remarks
   * The graceful shutdown timeout duration. Default is 30 seconds. Valid values are 1 to 300.
   * 
   * @example
   * 30
   */
  terminationGracePeriodSeconds?: number;
  /**
   * @remarks
   * The time zone. Default is **Asia/Shanghai**.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * Tomcat file configuration. Set to "" or "{}" to delete the configuration:
   * 
   * - **port**: The port range is 1024 to 65535. Ports less than 1024 require root permissions to operate. Because the container is configured with Admin permissions, specify a port greater than 1024. If you do not configure this, the default is 8080.
   * 
   * - **contextPath**: The access path. Default is the root directory "/".
   * 
   * - **maxThreads**: Configure the connection pool size. Default is 400.
   * 
   * - uriEncoding: The encoding format for Tomcat, including **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If you do not set this, the default is **ISO-8859-1**.
   * 
   * - **useBodyEncodingForUri**: Whether to use **BodyEncoding for URL**. Default is **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The virtual switch (vSwitch) where the application instance\\"s Elastic Network Interface (ENI) is located. This vSwitch must be within the specified VPC. This vSwitch also has a binding relationship with the SAE namespace. If you do not specify this parameter, the system uses the vSwitch ID bound to the namespace by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC corresponding to the SAE namespace. In SAE, a namespace can only correspond to one VPC, and you cannot change it. The first time you create an SAE application in a namespace, a binding relationship forms. Multiple namespaces can correspond to one VPC. If you do not specify this parameter, the system uses the VPC ID bound to the namespace by default.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
  vpcId?: string;
  /**
   * @remarks
   * Set the startup command for WAR package deployed applications. The procedure is the same as configuring the startup command for image deployments. For more information, see [Set the startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version that the WebContainer deployment package depends on. Supported versions:
   * 
   * - **apache-tomcat-7.0.91**
   * 
   * - **apache-tomcat-8.5.42**
   * 
   * This parameter is not supported when **Package Type** is **Image**.
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
      initContainersConfig: 'InitContainersConfig',
      isStateful: 'IsStateful',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      labels: 'Labels',
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
      readiness: 'Readiness',
      replicas: 'Replicas',
      resourceType: 'ResourceType',
      saeVersion: 'SaeVersion',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfig: 'SidecarContainersConfig',
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
      initContainersConfig: { 'type': 'array', 'itemType': InitContainerConfig },
      isStateful: 'boolean',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
      readiness: 'string',
      replicas: 'number',
      resourceType: 'string',
      saeVersion: 'string',
      secretMountDesc: 'string',
      securityGroupId: 'string',
      serviceTags: 'string',
      sidecarContainersConfig: { 'type': 'array', 'itemType': SidecarContainerConfig },
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
    if(Array.isArray(this.initContainersConfig)) {
      $dara.Model.validateArray(this.initContainersConfig);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
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

