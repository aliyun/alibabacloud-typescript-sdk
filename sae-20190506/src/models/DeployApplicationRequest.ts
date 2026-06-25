// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitContainerConfig } from "./InitContainerConfig";
import { SidecarContainerConfig } from "./SidecarContainerConfig";


export class DeployApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ARN of the RAM role required to pull images across accounts. For more information, see [Authorize cross-account image pulls using RAM roles](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The Container Registry Enterprise Edition instance ID. Required when **ImageUrl** is from Container Registry Enterprise Edition.
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
   * The ALB gateway readiness gate configuration.
   * 
   * @example
   * default
   */
  albIngressReadinessGate?: string;
  /**
   * @remarks
   * The ID of the application to deploy.
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * Whether to associate an EIP. Values:
   * 
   * - **true**: Associate.
   * 
   * - **false**: Do not associate.
   * 
   * @example
   * true
   */
  associateEip?: boolean;
  /**
   * @remarks
   * Whether to automatically enable application Auto Scaling rules. Values:
   * 
   * - **true**: Enable.
   * 
   * - **false**: Disable.
   * 
   * @example
   * true
   */
  autoEnableApplicationScalingRule?: boolean;
  /**
   * @remarks
   * The wait time between batches, in seconds.
   * 
   * @example
   * 10
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The description of the release task.
   * 
   * @example
   * Start application
   */
  changeOrderDesc?: string;
  /**
   * @remarks
   * The startup command for your image. This command must be an executable object inside the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * 
   * In this example, Command="echo" and `CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the startup command **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the earlier example, `CommandArgs=["abc", ">", "file0"]`. The value `["abc", ">", "file0"]` must be converted to a string in JSON array format. Leave this field empty if no arguments are needed.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The mount description for a **ConfigMap**. Use configuration items created on the namespace configuration page to inject configuration into your container. Parameters:
   * 
   * - **configMapId**: The ID of the ConfigMap instance. Get it by calling the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) API.
   * 
   * - **key**: The key.
   * 
   * > You can mount all keys by passing `sae-sys-configmap-all`.
   * 
   * - **mountPath**: The mount path.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The CPU required per instance, in milliCPU. Cannot be zero. Supported fixed specifications:
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
   * - **12000**
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
   * Custom host mappings inside your container. Values:
   * 
   * - **hostName**: A domain name or hostname.
   * 
   * - **ip**: An IP address.
   * 
   * @example
   * [{"hostName":"samplehost","ip":"127.0.0.1"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The custom image type. Set to an empty string for non-custom images:
   * 
   * - internet: Public network image
   * 
   * - intranet: Private network image
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * This parameter applies only to stopped applications. If you call **DeployApplication** on a running application, it deploys immediately.
   * 
   * - **true**: Default. Deploys immediately, applies the new configuration, and starts instances.
   * 
   * - **false**: Applies the new configuration only. Does not start application instances.
   * 
   * @example
   * true
   */
  deploy?: string;
  /**
   * @remarks
   * The .NET framework version:
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
   * The version of the application runtime environment for HSF applications, such as Ali-Tomcat containers.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The configuration for shared temporary storage.
   * 
   * @example
   * [{\\"name\\":\\"workdir\\",\\"mountPath\\":\\"/usr/local/tomcat/webapps\\"}]
   */
  emptyDirDesc?: string;
  /**
   * @remarks
   * Whether to integrate with AHAS. Values:
   * 
   * - **true**: Integrate with AHAS.
   * 
   * - **false**: Do not integrate with AHAS.
   * 
   * @example
   * false
   */
  enableAhas?: string;
  /**
   * @remarks
   * Whether to enable CPU Burst:
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
   * Whether to enable traffic canary rules. These rules apply only to Spring Cloud and Dubbo applications. Values:
   * 
   * - **true**: Enable canary rules.
   * 
   * - **false**: Disable canary rules.
   * 
   * @example
   * false
   */
  enableGreyTagRoute?: boolean;
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
   * Whether to enable the new ARMS feature:
   * 
   * - true: Enable.
   * 
   * - false: Do not enable.
   * 
   * @example
   * true
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
   * Whether to isolate sidecar resources:
   * 
   * - true: Isolate.
   * 
   * - false: Do not isolate.
   * 
   * @example
   * true
   */
  enableSidecarResourceIsolated?: boolean;
  /**
   * @remarks
   * The environment variables for your container. You can define custom variables or reference configuration items. To reference a configuration item, first create a ConfigMap instance. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Values:
   * 
   * - Custom configuration
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable. Takes precedence over valueFrom.
   * 
   * - Reference a configuration item (valueFrom)
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, use `sae-sys-configmap-all-<configmap-name>`, for example `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The reference type. Set to `configMapRef`.
   * 
   *   - **configMapId**: The ID of the ConfigMap instance.
   * 
   *   - **key**: The key. Omit this field if you reference all keys.
   * 
   * - Reference a secret (valueFrom)
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, use `sae-sys-secret-all-<secret-name>`, for example `sae-sys-secret-all-test1`.
   * 
   *   - **valueFrom**: The reference type. Set to `secretRef`.
   * 
   *   - **secretId**: The ID of the secret.
   * 
   *   - **key**: The key. Omit this field if you reference all keys.
   * 
   * @example
   * [ { "name": "sae-sys-configmap-all-hello", "valueFrom": { "configMapRef": { "configMapId": 100, "key": "" } } }, { "name": "hello", "valueFrom": { "configMapRef": { "configMapId": 101, "key": "php-fpm" } } }, { "name": "sae-sys-secret-all-hello", "valueFrom": { “secretRef": { “secretId": 100, "key": "" } } }, { "name": “password”, "valueFrom": { “secretRef": { “secretId": 101, "key": “password” } } }, { "name": "envtmp", "value": "newenv" } ]
   */
  envs?: string;
  gpuConfig?: string;
  /**
   * @remarks
   * The Nginx version:
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
   * The registry address of your image. Required when **Package Type** is **Image**.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * The initialization container configuration.
   */
  initContainersConfig?: InitContainerConfig[];
  /**
   * @remarks
   * Startup arguments for your JAR package. Default startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * Startup options for your JAR package. Default startup command: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-option
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The JDK version that your deployment package depends on. Supported versions include the following:
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
   * The configuration for collecting logs to Kafka. Values:
   * 
   * - **kafkaEndpoint**: The endpoint for the Kafka API.
   * 
   * - **kafkaInstanceId**: The Kafka instance ID.
   * 
   * - **kafkaConfigs**: The configuration for one or more log entries. For examples and details, see the \\*\\*kafkaConfigs\\*\\* request parameter in this topic.
   * 
   * @example
   * {"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}
   */
  kafkaConfigs?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * Health checks for your container. Containers that fail health checks are terminated and restarted. Supported methods:
   * 
   * - **exec**: For example, `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
   * 
   * - **httpGet**: For example, `{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * - **tcpSocket**: For example, `{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * > You can select only one health check method.
   * 
   * Parameters:
   * 
   * - **exec.command**: The health check command.
   * 
   * - **httpGet.path**: The path to access.
   * 
   * - **httpGet.scheme**: **HTTP** or **HTTPS**.
   * 
   * - **httpGet.isContainKeyWord**: **true** means the response contains a keyword. **false** means it does not. If omitted, advanced features are disabled.
   * 
   * - **httpGet.keyWord**: Your custom keyword. Include **isContainKeyWord** when using this field.
   * 
   * - **tcpSocket.port**: The port for TCP connection checks.
   * 
   * - **initialDelaySeconds**: The delay before the first health check, in seconds. Default is 10.
   * 
   * - **periodSeconds**: The interval between health checks, in seconds. Default is 30.
   * 
   * - **timeoutSeconds**: The timeout for each health check, in seconds. Default is 1. If set to 0 or omitted, the default is 1 second.
   * 
   * @example
   * {"exec":{"command":["sleep","5s"]},"initialDelaySeconds":10,"timeoutSeconds":11}
   */
  liveness?: string;
  lokiConfigs?: string;
  /**
   * @remarks
   * The maximum number of surge instances as a percentage of total instances. Values:
   * 
   * If the minimum available instances is 100%, the maximum surge cannot be set to 0. If set to -1, the system uses its recommended value: 30% of your current instance count. For example, with 10 instances, 10 × 30% = 3.
   * 
   * @example
   * -1
   */
  maxSurgeInstanceRatio?: number;
  /**
   * @remarks
   * The maximum number of surge instances during a rolling update. Values:
   * 
   * If the minimum available instances is 100%, the maximum surge cannot be set to 0. If set to -1, the system uses its recommended value: 30% of your current instance count. For example, with 10 instances, 10 × 30% = 3.
   * 
   * @example
   * -1
   */
  maxSurgeInstances?: number;
  /**
   * @remarks
   * The memory required per instance, in MB. Cannot be zero. Memory and CPU are paired. Supported fixed specifications:
   * 
   * - **1024**: Pairs with 500 and 1000 milliCPU.
   * 
   * - **2048**: Pairs with 500, 1000, and 2000 milliCPU.
   * 
   * - **4096**: Pairs with 1000, 2000, and 4000 milliCPU.
   * 
   * - **8192**: Pairs with 2000, 4000, and 8000 milliCPU.
   * 
   * - **12288**: Pairs with 12000 milliCPU.
   * 
   * - **16384**: Pairs with 4000, 8000, and 16000 milliCPU.
   * 
   * - **24576**: Pairs with 12000 milliCPU.
   * 
   * - **32768**: Pairs with 16000 milliCPU.
   * 
   * - **65536**: Pairs with 8000, 16000, and 32000 milliCPU.
   * 
   * - **131072**: Pairs with 32000 milliCPU.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * Select a Nacos registry center. Values:
   * 
   * - **0**: Built-in Nacos in SAE.
   * 
   * - **1**: Self-managed Nacos.
   * 
   * - **2**: MSE Nacos Commercial Edition.
   * 
   * > If you select built-in Nacos in SAE, you cannot retrieve its configuration.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The registry configuration. Applies only when the registry type is MSE Nacos Enterprise Edition.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-zvp2bh6h70r\\",\\"namespace\\":\\"4c0aa74f-57cb-423c-b6af-5d9f2d0e3dbd\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * Configure microservice governance features.
   * 
   * - Enable microservice governance (enable):
   * 
   *   - true: Enable
   * 
   *   - false: Disable
   * 
   * - Configure graceful start and shutdown (mseLosslessRule):
   * 
   *   - delayTime: Delay time
   * 
   *   - enable: Whether to enable graceful start. true enables it. false disables it.
   * 
   *   - notice: Whether to enable notifications. true enables them. false disables them.
   * 
   *   - warmupTime: Warm-up duration for small traffic, in seconds.
   * 
   * @example
   * {"enable": true,"mseLosslessRule": {"delayTime": 0,"enable": false,"notice": false,"warmupTime": 120}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * The minimum number of available instances as a percentage of total instances. Values:
   * 
   * - **-1**: Use the default value. No percentage is applied.
   * 
   * - **0–100**: Percentage value. Rounded up. For example, if set to **50**% and you have 5 instances, the minimum is 3.
   * 
   * > If both **MinReadyInstances** and **MinReadyInstanceRatio** are provided, and **MinReadyInstanceRatio** is not **-1**, then **MinReadyInstanceRatio** takes precedence. For example, if **MinReadyInstances** is **5** and **MinReadyInstanceRatio** is **50**, the system calculates the minimum based on 50%.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of instances that remain available during a rolling update. Values:
   * 
   * - If set to **0**, your application experiences downtime during updates.
   * 
   * - If set to -1, the system uses its recommended value: 25% of your current instance count. For example, with 5 instances, 5 × 25% = 1.25, rounded up to 2.
   * 
   * > We recommend setting this value to at least 1 to avoid service interruptions.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * We recommend using **NasConfigs** instead of this field. The NAS mount description. If your NAS configuration remains unchanged, omit this parameter. To clear your NAS configuration, set this field to an empty string.
   * 
   * @example
   * [{mountPath: "/tmp", nasPath: "/"}]
   */
  mountDesc?: string;
  /**
   * @remarks
   * We recommend using **NasConfigs** instead of this field. The mount target of the NAS in your application\\"s VPC. If your NAS configuration remains unchanged, omit this parameter. To clear your NAS configuration, set this field to an empty string.
   * 
   * @example
   * 10d3b4bc9****.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The configuration for mounting NAS. Values:
   * 
   * - **mountPath**: The mount path in the container.
   * 
   * - **readOnly**: Set to **false** for read and write permissions.
   * 
   * - **nasId**: The NAS ID.
   * 
   * - **mountDomain**: The mount target address. For more information, see [DescribeMountTargets](https://help.aliyun.com/document_detail/62626.html).
   * 
   * - **nasPath**: The relative directory in NAS.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * We recommend using **NasConfigs** instead of this field. The ID of the NAS file system. If your NAS configuration remains unchanged, omit this parameter. To clear your NAS configuration, set this field to an empty string.
   * 
   * @example
   * 10d3b4****
   */
  nasId?: string;
  /**
   * @remarks
   * The application version:
   * 
   * - lite: Lite Edition
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
   * The RAM role for identity authentication.
   * 
   * > Create an OIDC identity provider and an associated role in the same region before using this parameter. For more information, see [Create an OIDC identity provider](https://help.aliyun.com/document_detail/2331022.html) and [Create a role for SSO identity providers](https://help.aliyun.com/document_detail/2331016.html).
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
   * The AccessKey secret for OSS read and write operations.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The OSS mount description. Parameters:
   * 
   * - **bucketName**: The name of the bucket.
   * 
   * - **bucketPath**: The directory or object in OSS. If the directory does not exist, an error occurs.
   * 
   * - **mountPath**: The path in your SAE container. If the path exists, it is overwritten. If it does not exist, it is created.
   * 
   * - **readOnly**: Whether the container path has read-only access to the mounted resource. Values:
   * 
   *   - **true**: Read-only.
   * 
   *   - **false**: Read and write.
   * 
   * @example
   * [{"bucketName": "oss-bucket", "bucketPath": "data/user.data", "mountPath": "/usr/data/user.data", "readOnly": true}]
   */
  ossMountDescs?: string;
  /**
   * @remarks
   * The type of your application package. Values:
   * 
   * - For Java applications: **FatJar**, **War**, and **Image**.
   * 
   * - For PHP applications:
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
   * - For Python applications: **PythonZip** and **Image**.
   * 
   * @example
   * FatJar
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of your deployment package. Required when **Package Type** is **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * http://myoss.oss-cn-hangzhou.aliyuncs.com/my-buc/2019-06-30/****.jar
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version number of your deployment package. Required when **Package Type** is **FatJar**, **War**, or **PythonZip**.
   * 
   * @example
   * 1.0.1
   */
  packageVersion?: string;
  /**
   * @remarks
   * The PHP version that your PHP deployment package depends on. Not supported for images.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The mount path for PHP application monitoring. Ensure your PHP server loads the configuration file at this path. You do not need to manage the configuration content. SAE renders the correct configuration automatically.
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
   * The mount path for the PHP startup configuration. Ensure your PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * A script that runs after your container starts. It executes immediately after the container is created. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * A script that runs before your container stops. It executes just before the container is deleted. Format: `{"exec":{"command":["sh","-c","echo hello"]}}`
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * Enable K8s Service registration and discovery. Values:
   * 
   * - **portProtocols**: Port and protocol. Port range is [1,65535]. Protocols supported: **TCP** and **UDP**.
   * 
   * - portAndProtocol: Port and protocol. Port range is [1,65535]. Protocols supported: **TCP** and **UDP**. **portProtocols** takes precedence. If both are set, only **portProtocols** applies.
   * 
   * - **enable**: Enable K8s Service registration and discovery.
   * 
   * @example
   * {"portProtocols":[{"port":18012,"protocol":"TCP"}],"portAndProtocol":{"18012":"TCP"},"enable":true}
   */
  pvtzDiscoverySvc?: string;
  /**
   * @remarks
   * The Python runtime environment. Supported: **PYTHON 3.9.15**.
   * 
   * @example
   * PYTHON 3.9.15
   */
  python?: string;
  /**
   * @remarks
   * Custom module dependencies. By default, dependencies defined in requirements.txt in the root directory are installed. If no configuration or custom packages exist, specify the dependencies to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * Startup status checks for your application. Containers that repeatedly fail readiness checks are terminated and restarted. Containers that fail readiness checks receive no SLB traffic. Supports **exec**, **httpGet**, and **tcpSocket**. For examples, see the **Liveness** parameter.
   * 
   * > You can select only one health check method.
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
   * The mount description for a **Secret**. Use secrets created on the namespace secrets page to inject sensitive information into your container. Parameters:
   * 
   * - **secretId**: The ID of the secret instance. Get it by calling the ListSecrets API.
   * 
   * - **key**: The key.
   * 
   * > You can mount all keys by passing `sae-sys-secret-all`.
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
   * The canary tags configured for your application.
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
   * - Using SAE-managed SLS resources: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - Using custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameters:
   * 
   * - **projectName**: The name of the SLS project.
   * 
   * - **logDir**: The log file path.
   * 
   * - logType: The log type. **stdout** means standard output logs from the container. Only one **stdout** entry is allowed. If omitted, file logs are collected.
   * 
   * - **logstoreName**: The name of the SLS Logstore.
   * 
   * - **logtailName**: The name of the SLS Logtail. If omitted, a new Logtail is created.
   * 
   * If your SLS collection configuration remains unchanged across deployments, omit this parameter. To disable SLS collection, set this field to an empty string.
   * 
   * > Projects automatically created by SAE are deleted when the application is deleted. Do not select these projects when choosing an existing project.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The SLS log tags.
   */
  slsLogEnvTags?: string;
  /**
   * @remarks
   * Enable application startup probing.
   * 
   * - Success: The application starts successfully. If you configure Liveness and Readiness checks, they run after startup.
   * 
   * - Failure: The application fails to start. SAE reports an error and restarts the container automatically.
   * 
   * > Description
   * >
   * > - Supports exec, httpGet, and tcpSocket. For examples, see the Liveness parameter.
   * >
   * > - You can select only one health check method.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  startupProbe?: string;
  /**
   * @remarks
   * Configures service discovery and end-to-end canary release based on a Kubernetes Service:
   * 
   * - enable: Specifies whether to enable the end-to-end canary release feature.
   * 
   *   - true: Enables the feature.
   * 
   *   - false: Disables the feature.
   * 
   * - namespaceId: The namespace ID.
   * 
   * - portAndProtocol: The listening port and protocol. The format is {"\\<port>:\\<protocol>":"\\<target_port>"}.
   * 
   * - portProtocols: A list of ports and protocols for the service.
   * 
   *   - port: The port number.
   * 
   *   - protocol: The protocol.
   * 
   *   - targetPort: The container port.
   * 
   * - pvtzDiscoveryName: The service discovery name.
   * 
   * - serviceId: The service ID.
   * 
   * - serviceName: The service name.
   * 
   * @example
   * {\\"enable\\":\\"false\\",\\"namespaceId\\":\\"cn-beijing:test\\",\\"portAndProtocol\\":{\\"2000:TCP\\":\\"18081\\"},\\"portProtocols\\":[{\\"port\\":2000,\\"protocol\\":\\"TCP\\",\\"targetPort\\":18081}],\\"pvtzDiscoveryName\\":\\"cn-beijing-1421801774382676\\",\\"serviceId\\":\\"3513\\",\\"serviceName\\":\\"demo-gray.test\\"}
   */
  swimlanePvtzDiscoverySvc?: string;
  /**
   * @remarks
   * The graceful shutdown timeout, in seconds. Default is 30. Valid values: 1–300.
   * 
   * @example
   * 10
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
   * The Tomcat configuration. Set to an empty string or {} to delete the configuration. Values:
   * 
   * - **port**: Port range is 1024–65535. Ports below 1024 require root privileges. Because containers run with admin privileges, use ports above 1024. Default is 8080.
   * 
   * - **contextPath**: The access path. Default is the root directory /.
   * 
   * - **maxThreads**: The size of the connection pool. Default is 400.
   * 
   * - uriEncoding: The encoding format for Tomcat. Options include **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default is **ISO-8859-1**.
   * 
   * - **useBodyEncodingForUri**: Whether to use body encoding for URLs. Default is **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The release strategy. When MinReadyInstances equals 1, set UpdateStrategy to an empty string. When **MinReadyInstances** is greater than 1, examples include the following:
   * 
   * - Canary release with 1 instance, followed by 2 automatic batches with a 1-minute interval: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
   * 
   * - Canary release with 1 instance, followed by 2 manual batches: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
   * 
   * - Two automatic batches with a 0-minute interval: `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
   * 
   * Parameters:
   * 
   * - **type**: The release strategy type. Options are **GrayBatchUpdate** (canary release) or **BatchUpdate** (phased release).
   * 
   * - **batchUpdate**: The phased release strategy.
   * 
   *   - **batch**: The number of batches.
   * 
   *   - **releaseType**: How batches are processed. Options are **auto** (automatic) or **manual** (manual).
   * 
   *   - **batchWaitTime**: The wait time between batches, in minutes.
   * 
   * - **grayUpdate**: The number of canary instances. Required when **type** is **GrayBatchUpdate**.
   * 
   * @example
   * {"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}
   */
  updateStrategy?: string;
  /**
   * @remarks
   * The virtual switch where your application instance elastic network interfaces reside. This switch must be in the specified VPC.
   * 
   * @example
   * vsw-bp12mw1f8k3jgygk9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The startup command for your WAR package. Configure it the same way as the startup command for images. For more information, see [Set the startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version that your deployment package depends on. Supported versions include the following:
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
      initContainersConfig: 'InitContainersConfig',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      labels: 'Labels',
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
      readiness: 'Readiness',
      replicas: 'Replicas',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfig: 'SidecarContainersConfig',
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
      initContainersConfig: { 'type': 'array', 'itemType': InitContainerConfig },
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
      readiness: 'string',
      replicas: 'number',
      secretMountDesc: 'string',
      securityGroupId: 'string',
      serviceTags: 'string',
      sidecarContainersConfig: { 'type': 'array', 'itemType': SidecarContainerConfig },
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

