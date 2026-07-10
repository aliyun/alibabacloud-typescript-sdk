// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitContainerConfig } from "./InitContainerConfig";
import { SidecarContainerConfig } from "./SidecarContainerConfig";


export class CreateApplicationRequestRaspConfig extends $dara.Model {
  enableRasp?: boolean;
  raspAppKey?: string;
  raspAppName?: string;
  static names(): { [key: string]: string } {
    return {
      enableRasp: 'EnableRasp',
      raspAppKey: 'RaspAppKey',
      raspAppName: 'RaspAppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRasp: 'boolean',
      raspAppKey: 'string',
      raspAppName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role required for cross-account image pulling. For more information, see [Grant permissions across Alibaba Cloud accounts by using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The instance ID of the Container Registry Enterprise instance. This parameter is required when **ImageUrl** is set to a Container Registry Enterprise Edition image.
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
   * The application description. The description can be up to 1024 characters in length.
   * 
   * @example
   * This is a test description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The application name. The name can contain digits, letters, and hyphens (-). The name must start with a letter and cannot end with a hyphen (-). The name can be up to 36 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * Set this parameter to micro_service to create a microservice application.
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * Specifies whether to associate an EIP. Valid values:
   * 
   * - **true**: associate an EIP.
   * - **false**: do not associate an EIP.
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
   * > If this parameter is set to **true**, any other **NamespaceId** value that is passed is ignored.
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
   * The command that is used to start the image. The command must be an executable object in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * In the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * 
   * >Notice: This parameter is required when PackageType is set to DotnetZip.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup command. These are the arguments required by the startup command specified in **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`, where `["abc", ">", "file0"]` must be converted to the String type. The internal format is a JSON array. If this parameter is not required, leave it empty.
   * >Notice: This parameter is required when PackageType is set to DotnetZip.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The **ConfigMap** mount description. Use a ConfigMap created on the namespace configuration items page to inject configuration information into the container. Parameter description:
   * 
   * - **configMapId**: the ConfigMap instance ID. You can obtain the ID by invoking the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation.
   * - **key**: the key.
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
   * The CPU specifications required for each instance, in millicores. This parameter cannot be set to 0. Only the following defined specifications are supported:
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
   * The custom image type. Set this parameter to an empty string if the image is not a custom image:
   * 
   * - internet: public image
   * - intranet: private image
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * Specifies whether to immediately deploy the application. Valid values:
   * 
   * - **true**: default value. The application is deployed immediately.
   * - **false**: the application is deployed later.
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
   * The version of the .NET framework:
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
   * Specifies whether to enable the CPU Burst feature:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableCpuBurst?: boolean;
  /**
   * @remarks
   * Specifies whether to enable application monitoring for non-Java applications based on eBPF technology. Valid values:
   * - **true**: enabled.
   * - **false**: disabled. This is the default value.
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
   * Specifies whether to reuse the namespace SLS log configuration.
   * 
   * @example
   * true
   */
  enableNamespaceSlsConfig?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the new ARMS feature:
   * 
   * - true: Enabled.
   * - false: Disabled.
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
   * - true: Isolated.
   * - false: Not isolated.
   * 
   * @example
   * true
   */
  enableSidecarResourceIsolated?: boolean;
  /**
   * @remarks
   * The container environment variable parameters. You can customize environment variables or reference a ConfigMap. To reference a ConfigMap, create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable. This takes priority over valueFrom.
   * - Reference a ConfigMap (valueFrom)
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, such as `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: the environment variable reference. Set the value to `configMapRef`.
   *         - **configMapId**: the ConfigMap ID.
   *         - **key**: the key. If you reference all keys, do not set this field.
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
   * The K8s Headless Service-based service registration and discovery.
   * - serviceName: the service name.
   * - namespaceId: the namespace ID.
   * 
   * @example
   * {\\"serviceName\\":\\"leaf-test-headless\\",\\"namespaceId\\":\\"cn-zhangjiakou:prod\\"}
   */
  headlessPvtzDiscoverySvc?: string;
  /**
   * @remarks
   * The Nginx version.
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
   * The corresponding secret ID.
   * 
   * @example
   * 10
   */
  imagePullSecrets?: string;
  /**
   * @remarks
   * The image address. This parameter is required when **Package Type** is set to **Image**.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The init container configuration.
   */
  initContainersConfig?: InitContainerConfig[];
  /**
   * @remarks
   * Specifies whether the application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The arguments for starting the JAR package application. The default startup command for the application: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The options for starting the JAR package application. The default startup command for the application: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
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
   * This parameter is not supported when **Package Type** is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The summary of configurations for log collection to Kafka. Valid values:
   * 
   * - **kafkaEndpoint**: the service registration address of the Kafka API.
   * - **kafkaInstanceId**: the Kafka instance ID.
   * - **kafkaConfigs**: the summary of configurations for one or more log entries. For more information about the valid values, see the **kafkaConfigs** request parameter in this topic.
   * 
   * @example
   * {"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}
   */
  kafkaConfigs?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The container health check. Containers that fail the health check are shutdown and recovered. The following methods are supported:
   * 
   * - **exec**: for example, `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
   * - **httpGet**: for example, `{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * - **tcpSocket**: for example, `{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * > You can use only one method for health checks.
   * 
   * Parameter description:
   * 
   * - **exec.command**: the health check command.
   * - **httpGet.path**: the access path.
   * - **httpGet.scheme**: **HTTP** or **HTTPS**.
   * - **httpGet.isContainKeyWord**: **true** indicates that the keyword is included. **false** indicates that the keyword is not included. If this field is missing, the advanced feature is not used.
   * - **httpGet.keyWord**: the custom keyword. The **isContainKeyWord** field must be present when this field is used.
   * - **tcpSocket.port**: the port for TCP connection detection.
   * - **initialDelaySeconds**: the health check delay detection time. Default value: 10. Unit: seconds.
   * - **periodSeconds**: the health check period. Default value: 30. Unit: seconds.
   * - **timeoutSeconds**: the health check timeout period. Default value: 1. Unit: seconds. If this parameter is set to 0 or is not set, the default timeout period is 1 second.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  liveness?: string;
  lokiConfigs?: string;
  /**
   * @remarks
   * The memory required for each instance, in MB. This parameter cannot be set to 0. The memory has a one-to-one mapping with CPU. Only the following defined specifications are supported:
   * - **1024**: corresponds to 500 and 1000 millicores of CPU.
   * - **2048**: corresponds to 500, 1000, and 2000 millicores of CPU.
   * - **4096**: corresponds to 1000, 2000, and 4000 millicores of CPU.
   * - **8192**: corresponds to 2000, 4000, and 8000 millicores of CPU.
   * - **12288**: corresponds to 12000 millicores of CPU.
   * - **16384**: corresponds to 4000, 8000, and 16000 millicores of CPU.
   * - **24576**: corresponds to 12000 millicores of CPU.
   * - **32768**: corresponds to 16000 millicores of CPU.
   * - **65536**: corresponds to 8000, 16000, and 32000 millicores of CPU.
   * - **131072**: corresponds to 32000 millicores of CPU.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * Specifies the Nacos registry. Valid values:
   * - **0**: SAE built-in Nacos.
   * - **1**: self-managed Nacos.
   * - **2**: MSE commercial edition Nacos.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The registry configuration.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-zvp2bh6h70r\\",\\"namespace\\":\\"4c0aa74f-57cb-423c-b6af-5d9f2d0e3dbd\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * Configures the microservice governance feature.
   * 
   * - Specifies whether to enable microservice governance (enable):
   * 
   *    - true: Enabled.
   * 
   *   - false: Disabled.
   * 
   * - Configures lossless online/offline (mseLosslessRule):
   * 
   *   - delayTime: the delay time.
   * 
   *   - enable: specifies whether to enable the lossless online feature. true indicates enabled. false indicates disabled.
   * 
   *   - notice: specifies whether to enable the notification feature. true indicates enabled. false indicates disabled.
   * 
   *   - warmupTime: the warm-up duration for traffic ramping, in seconds.
   * 
   * @example
   * {"enable": true,"mseLosslessRule": {"delayTime": 0,"enable": false,"notice": false,"warmupTime": 120}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * We recommend that you do not set this parameter. Set **NasConfigs** instead. The NAS mount description. If the configuration does not change during deployment, you do not need to set this parameter (that is, the **MountDesc** field does not need to be included in the request). To clear the NAS configuration, set the value of this field to an empty string (that is, set the value of the **MountDesc** field to "" in the request).
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * We recommend that you do not set this parameter. Set **NasConfigs** instead. The mount target of the NAS file system in the VPC of the application. If the configuration does not change during deployment, you do not need to set this parameter (that is, the **MountHost** field does not need to be included in the request). To clear the NAS configuration, set the value of this field to an empty string (that is, set the value of the **MountHost** field to "" in the request).
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The SAE namespace ID. Only namespaces whose names contain lowercase letters and hyphens (-) are supported. The name must start with a letter.
   * You can obtain namespaces by calling the [DescribeNamespaceList](https://help.aliyun.com/document_detail/126547.html) operation.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The NAS mount configuration. Valid values:
   * 
   * - **mountPath**: the container mount path.
   * - **readOnly**: set to **false** to grant read and write permission.
   * - **nasId**: the NAS ID.
   * - **mountDomain**: the container mount target address. For more information, see [DescribeMountTargets](https://help.aliyun.com/document_detail/62626.html).
   * - **nasPath**: the NAS relative file directory.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * We recommend that you do not set this parameter. Set **NasConfigs** instead. The ID of the mounted NAS file system. The NAS file system must be in the same region as the cluster. The NAS file system must have available mount target creation quota, or its mount target must already be on a vSwitch in the VPC. If this parameter is left empty and the **mountDescs** field exists, a NAS file system is automatically purchased and mounted to a vSwitch in the VPC.
   * 
   * If the configuration does not change during deployment, you do not need to set this parameter (that is, the **NASId** field does not need to be included in the request). To clear the NAS configuration, set the value of this field to an empty string (that is, set the value of the **NASId** field to "" in the request).
   * 
   * @example
   * KSAK****
   */
  nasId?: string;
  /**
   * @remarks
   * The application version:
   * 
   * - lite: Lite Edition
   * - std: Standard Edition
   * - pro: Professional Edition
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * Specifies the RAM role for identity authentication.
   * > Create an OIDC identity provider and an identity provider role in the same region in advance. For more information, see <props="china">[CreateOIDCProvider](https://www.alibabacloud.com/help/en/ram/developer-reference/api-ims-2019-08-15-createoidcprovider) and [CreateSAMLProvider](https://www.alibabacloud.com/help/en/ram/developer-reference/api-ims-2019-08-15-createsamlprovider)<props="intl">[CreateOIDCProvider](https://www.alibabacloud.com/help/zh/ram/developer-reference/api-ims-2019-08-15-createoidcprovider) and [CreateSAMLProvider](https://www.alibabacloud.com/help/zh/ram/developer-reference/api-ims-2019-08-15-createsamlprovider).
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
   * The OSS mount description. Parameter description:
   * 
   * - **bucketName**: the bucket name.
   * - **bucketPath**: the folder or object that you created in OSS. If the OSS mount folder does not exist, an exception is triggered.
   * - **mountPath**: the container path in SAE. If the path already exists, it is an overwrite relationship. If the path does not exist, it is created.
   * - **readOnly**: specifies whether the container path has read-only permission on the mounted folder resources. Valid values:
   *     - **true**: read-only permission.
   *     - **false**: read and write permission.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The type of the application deployment package. Valid values:
   * 
   * - If you use Java for deployment, **FatJar**, **War**, and **Image** are supported.
   * - If you use PHP for deployment, the following types are supported:
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
   * - If you use Python for deployment, **PythonZip** and **Image** are supported.
   * 
   * - If you use .NET Core for deployment, **DotnetZip** and **Image** are supported.
   *   > 
   *   > When DotnetZip is selected, Dotnet specifies the version of the .NET Core runtime. .NET 3.1, .NET 5.0, .NET 6.0, .NET 7.0, and .NET 8.0 are supported. The Dotnet, Command, and CommandArgs parameters are required.
   * 
   * This parameter is required.
   * 
   * @example
   * FatJar
   */
  packageType?: string;
  /**
   * @remarks
   * The address of the deployment package. This parameter is required when **Package Type** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * http://myoss.oss-cn-****.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required when **Package Type** is set to **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The PHP version on which the deployment package depends. Not supported for images.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The mount path for PHP application monitoring. Make sure that the PHP server loads the configuration file from this path.
   * You do not need to manage the configuration content. SAE automatically renders the correct configuration file.
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
   * The mount path for the PHP application startup configuration. Make sure that the PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script that is run after the container is started. A script is triggered and run immediately after the container is created. Format: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is run before the container is stopped. A script is triggered and run before the container is deleted. Format: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language of the technology stack used to create the application. Valid values:
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
   * Enables K8s Service-based service registration and discovery. Valid values:
   * 
   * - **serviceName**: the service name. Format: `custom name-namespace ID`. The suffix `-namespace ID` cannot be customized and must be set based on the namespace of the application. For example, if you select the default namespace in the China (Beijing) region, the suffix is `-cn-beijing-default`.
   * - **namespaceId**: the namespace ID.
   * - **portProtocols**: the port and protocol. Valid port values: [1,65535]. Valid protocol values: **TCP** and **UDP**.
   * - **portAndProtocol**: the port and protocol. Valid port values: [1,65535]. Valid protocol values: **TCP** and **UDP**. **portProtocols is recommended. If portProtocols is set, only portProtocols takes effect**.
   * - **enable**: enables K8s Service-based service registration and discovery.
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
   * The custom installation module dependencies. By default, the dependencies defined in the requirements.txt file in the root folder are installed. If the file is not configured or you need custom packages, specify the dependencies to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  raspConfig?: CreateApplicationRequestRaspConfig;
  /**
   * @remarks
   * The application startup status check. Containers that fail multiple health checks are shut down and restarted. Containers that do not pass the health check do not receive SLB traffic. The **exec**, **httpGet**, and **tcpSocket** methods are supported. For specific examples, see the **Liveness** parameter.
   * 
   * > You can use only one method for health checks.
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
   * The resource type. Valid values: NULL (default), default, and haiguang (Hygon server).
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
   * The **Secret** mount description. Use a secret created on the namespace secrets page to inject sensitive information into the container. Parameter description:
   * 
   * - **secretId**: the secret instance ID. You can obtain the ID by calling the ListSecrets operation.
   * - **key**: the key.
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
   * The security group ID.
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
   * The sidecar container configuration.
   */
  sidecarContainersConfig?: SidecarContainerConfig[];
  /**
   * @remarks
   * The configurations for log collection to Simple Log Service.
   * 
   * - Use SLS resources that are automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - Use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameter description:
   * 
   * - **projectName**: the Project name in Simple Log Service.  
   * - **logDir**: the log path.
   * - **logType**: the log type. **stdout** indicates container standard output logs. You can configure only one entry for this type. If this parameter is not set, file logs are collected.
   * - **logstoreName**: the Logstore name in Simple Log Service.
   * - **logtailName**: the Logtail name in Simple Log Service. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection configuration does not change during multiple deployments, you do not need to set this parameter (that is, the **SlsConfigs** field does not need to be included in the request). If you no longer need the SLS collection feature, set the value of this field to an empty string (that is, set the value of the **SlsConfigs** field to "" in the request).
   * 
   * > Projects that are automatically created with the application are deleted when the application is deleted. Therefore, do not select a project that is automatically created by SAE when you select an existing project.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * sls log tags
   */
  slsLogEnvTags?: string;
  /**
   * @remarks
   * Enables the application startup probe.
   * 
   * - Check succeeded: indicates that the application started successfully. If you configured Liveness and Readiness checks, they are performed after the application starts successfully.
   * - Check failed: indicates that the application failed to start. An exception is reported and the application is automatically restarted.
   * > 
   * > - The exec, httpGet, and tcpSocket methods are supported. For specific examples, see the Liveness parameter.
   * > - You can use only one method for health checks.
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
   * The Tomcat configuration. Set this parameter to "" or "{}" to delete the configuration:
   * 
   * - **port**: the port number. Valid values: 1024 to 65535. Ports less than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. Default value: 8080.
   * - **contextPath**: the access path. Default value: root directory "/".
   * - **maxThreads**: the maximum number of connections in the connection pool. Default value: 400.
   * - **uriEncoding**: the encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default value: **ISO-8859-1**.
   * - **useBodyEncodingForUri**: specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The vSwitch where the elastic network interface controller (NIC) of the application instance resides. The vSwitch must be in the specified VPC. The vSwitch also has a binding relationship with the SAE namespace. If you leave this parameter empty, the vSwitch attached to the namespace is used by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC that corresponds to the SAE namespace. In SAE, a namespace can correspond to only one VPC, and the mapping cannot be modified. The binding relationship is established when the first SAE application is created in the namespace. Multiple namespaces can correspond to the same VPC. If you leave this parameter empty, the VPC bound to the namespace is used by default.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1q****
   */
  vpcId?: string;
  /**
   * @remarks
   * The startup command for deploying a WAR package application. The configuration procedure is the same as that for the startup command of an image deployment. For more information, see [Configure a startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The version of Tomcat on which the WebContainer deployment package depends. Valid values:
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
      raspConfig: 'RaspConfig',
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
      raspConfig: CreateApplicationRequestRaspConfig,
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
    if(this.raspConfig && typeof (this.raspConfig as any).validate === 'function') {
      (this.raspConfig as any).validate();
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

