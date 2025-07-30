// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationConfigResponseBodyDataConfigMapMountDesc extends $dara.Model {
  /**
   * @remarks
   * The ID of the ConfigMap.
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
   * The key-value pair that is stored in the ConfigMap.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The path on which the ConfigMap is mounted.
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

export class DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc extends $dara.Model {
  /**
   * @remarks
   * ConfigMap ID。
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
   * The key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The mount path.
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

export class DescribeApplicationConfigResponseBodyDataInitContainersConfig extends $dara.Model {
  /**
   * @remarks
   * The command that is used to start the image. The command must be an existing executable object in the container. Sample statements:
   * 
   *     command:
   *           - echo
   *           - abc
   *           - >
   *           - file0
   * 
   * In this example, the Command parameter is set to `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * /bin/sh
   */
  command?: string;
  /**
   * @remarks
   * The parameters of the image startup command. The CommandArgs parameter specifies the parameters that are required for the **Command** parameter. You can specify the name in one of the following formats:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, the CommandArgs parameter is set to `CommandArgs=["abc", ">", "file0"]`. The data type of `["abc", ">", "file0"]` must be an array of strings in the JSON format. This parameter is optional.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The information of ConfigMap.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc[];
  /**
   * @remarks
   * The environment variables. You can configure custom environment variables or reference a ConfigMap. If you want to reference a ConfigMap, you must first create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Take note of the following rules:
   * 
   * *   Customize
   * 
   *     *   **name**: the name of the environment variable.
   *     *   **value**: the value of the environment variable.
   * 
   * *   Reference ConfigMap
   * 
   *     *   **name**: the name of the environment variable. You can reference one or all keys. If you want to reference all keys, specify `sae-sys-configmap-all-<ConfigMap name>`. Example: `sae-sys-configmap-all-test1`.
   *     *   **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   *     *   **configMapId**: the ConfigMap ID.
   *     *   **key**: the key. If you want to reference all keys, do not configure this parameter.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The image URL of the initialized container.
   * 
   * @example
   * registry.cn-shenzhen.aliyuncs.com/sae-serverless-demo/sae-demo:microservice-java-provider-v1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * The name of the initialized container.
   * 
   * @example
   * init-container
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc },
      envs: 'string',
      imageUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataMountDesc extends $dara.Model {
  /**
   * @remarks
   * The path on which the NAS file system is mounted.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  /**
   * @remarks
   * The directory in the NAS file system.
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

export class DescribeApplicationConfigResponseBodyDataOssMountDescs extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory or object in OSS. If the specified directory or object does not exist, an error is returned.
   * 
   * @example
   * data/user.data
   */
  bucketPath?: string;
  /**
   * @remarks
   * The path of the container in SAE. The parameter value that you specified overwrites the original value. If the specified path does not exist, SAE automatically creates the path.
   * 
   * @example
   * /usr/data/user.data
   */
  mountPath?: string;
  /**
   * @remarks
   * Indicates whether the application can use the container path to read data from or write data to resources in the directory of the OSS bucket. Valid values:
   * 
   * *   **true**: The application has the read-only permissions.
   * *   **false**: The application has the read and write permissions.
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

export class DescribeApplicationConfigResponseBodyDataSecretMountDesc extends $dara.Model {
  /**
   * @remarks
   * The key to Base64 encode values.
   * 
   * @example
   * task-center
   */
  key?: string;
  /**
   * @remarks
   * The mount path.
   * 
   * @example
   * /opt/www/runtime/logs
   */
  mountPath?: string;
  /**
   * @remarks
   * The secret ID of the instance.
   * 
   * @example
   * 520
   */
  secretId?: number;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * dummy-name-opaque-894
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      mountPath: 'MountPath',
      secretId: 'SecretId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      mountPath: 'string',
      secretId: 'number',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc extends $dara.Model {
  /**
   * @remarks
   * The ConfigMap ID.
   * 
   * @example
   * 7361
   */
  configMapId?: number;
  /**
   * @remarks
   * The ConfigMap name.
   * 
   * @example
   * ConfigMap-test
   */
  configMapName?: string;
  /**
   * @remarks
   * The ConfigMap key
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The mount path.
   * 
   * @example
   * /mnt/test
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

export class DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc extends $dara.Model {
  /**
   * @remarks
   * Mount path of the data volume within the container.
   * 
   * @example
   * /mnt/cache
   */
  mountPath?: string;
  /**
   * @remarks
   * The name of the shared temporary storage.
   * 
   * @example
   * sidecar-container
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataSidecarContainersConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of Container Registry Enterprise Edition instance. This parameter is required when the **ImageUrl** parameter is set to the URL of an image in an ACR Enterprise Edition instance.
   * 
   * @example
   * cri-fhzlneorxala66ip
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The command that is used to start the image. The command must be an existing executable object in the container. Sample statements:
   * 
   *     command:
   *           - echo
   *           - abc
   *           - >
   *           - file0
   * 
   * In this example, the Command parameter is set to `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * /bin/sh
   */
  command?: string;
  /**
   * @remarks
   * The parameters of the image startup command. The CommandArgs parameter specifies the parameters that are required for the **Command** parameter. You can specify the name in one of the following formats:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, the CommandArgs parameter is set to `CommandArgs=["abc", ">", "file0"]`. The data type of `["abc", ">", "file0"]` must be an array of strings in the JSON format. This parameter is optional.
   * 
   * @example
   * [\\"-c\\",\\"echo \\\\\\"test\\\\\\" > /home/nas/test.log && sleep 10000000s\\"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The description of the **ConfigMap** instance mounted to the application. Use configurations created on the Configuration Items page to configure containers. The following table describes the parameters that are used in the preceding statements.
   * 
   * *   **congfigMapId**: the ID of the ConfigMap instance. You can call the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the ID.
   * *   **key**: the key.
   * 
   * > You can use the `sae-sys-configmap-all` key to mount all keys.
   * 
   * *   **mountPath**: the mount path in the container.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc[];
  /**
   * @remarks
   * Set the CPU resource limit of the primary container that can be used by Sidecar container.
   * 
   * @example
   * 500
   */
  cpu?: number;
  /**
   * @remarks
   * Shared temporary storage mounted to the primary container and the Sidecar container.
   */
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc[];
  /**
   * @remarks
   * The environment variables. You can configure custom environment variables or reference a ConfigMap. If you want to reference a ConfigMap, you must first create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Take note of the following rules:
   * 
   * *   Customize
   * 
   *     *   **name**: the name of the environment variable.
   *     *   **value**: the value of the environment variable.
   * 
   * *   Reference ConfigMap
   * 
   *     *   **name**: the name of the environment variable. You can reference one or all keys. If you want to reference all keys, specify `sae-sys-configmap-all-<ConfigMap name>`. Example: `sae-sys-configmap-all-test1`.
   *     *   **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   *     *   **configMapId**: the ConfigMap ID.
   *     *   **key**: the key. If you want to reference all keys, do not configure this parameter.
   * 
   * @example
   * [{\\"name\\":\\"k1\\",\\"value\\":\\"c8e3a815-e5d3-4adf-abb3-98b106a607c4\\"}]
   */
  envs?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/sae-dev-test/nginx:stable
   */
  imageUrl?: string;
  /**
   * @remarks
   * Set the memory limit of the primary container that can be used by Sidecar container.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'AcrInstanceId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc },
      cpu: 'number',
      emptyDirDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc },
      envs: 'string',
      imageUrl: 'string',
      memory: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    if(Array.isArray(this.emptyDirDesc)) {
      $dara.Model.validateArray(this.emptyDirDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class DescribeApplicationConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is used to pull images across accounts. For more information, see [Pull images across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/190675.html) and [Grant permissions across Alibaba Cloud accounts by using a RAM role](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * The application description.
   */
  appDescription?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The SAE application type.
   * 
   * *   micro_service
   * *   web
   * *   job
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * Indicates whether an elastic IP address (EIP) is associated with the application instance. Valid values:
   * 
   * *   **true**: The EIP is associated with the application instance.
   * *   **false**: The EIP is not associated with the application instance.
   * 
   * @example
   * true
   */
  associateEip?: boolean;
  /**
   * @remarks
   * The base app ID.
   * 
   * @example
   * 8c573618-8d72-4407-baf4-f7b64b******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The interval between batches in a phased release. Unit: seconds.
   * 
   * @example
   * 10
   */
  batchWaitTime?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 495fc79c-ae61-4600-866d-a09d68******
   */
  clusterId?: string;
  cmsServiceId?: string;
  /**
   * @remarks
   * The command that is used to start the image. The command must be an existing executable object in the container. Example:
   * 
   * ```
   * 
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * 
   * In this example, the Command parameter is set to `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The parameters of the image startup command. The CommandArgs parameter contains the parameters that are required for the **Command** parameter. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding **Command** example, the CommandArgs parameter is set to `CommandArgs=["abc", ">", "file0"]`. The data type of `["abc", ">", "file0"]` must be an array of strings in the JSON format. You do not need to configure this parameter if it does not exist in the Command parameter.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The details of the ConfigMap.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataConfigMapMountDesc[];
  /**
   * @remarks
   * The CPU specifications that are required for each instance. Unit: millicores. You cannot set this parameter to 0. Valid values:
   * 
   * *   **500**
   * *   **1000**
   * *   **2000**
   * *   **4000**
   * *   **8000**
   * *   **16000**
   * *   **32000**
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The custom mappings between hostnames and IP addresses in the container. Valid values:
   * 
   * *   **hostName**: the domain name or hostname.
   * *   **ip**: the IP address.
   * 
   * @example
   * [{"hostName":"test.host.name","ip":"0.0.0.0"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The type of custom image. Set to empty string if using pre-built image.
   * 
   * - internet: public network image.
   * 
   * - intranet: private network image.
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 20
   */
  diskSize?: number;
  /**
   * @remarks
   * The version of .NET.
   * 
   * - .NET 3.1
   * - .NET 5.0
   * - .NET 6.0
   * - .NET 7.0
   * - .NET 8.0
   * 
   * @example
   * .NET 8.0
   */
  dotnet?: string;
  /**
   * @remarks
   * The version of the container, such as Ali-Tomcat, in which an application developed based on High-speed Service Framework (HSF) is deployed.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Indicates whether access to Application High Availability Service (AHAS) is enabled. Valid values:
   * 
   * *   **true**: Access to AHAS is enabled.
   * *   **false**: Access to AHAS is disabled.
   * 
   * @example
   * true
   */
  enableAhas?: string;
  /**
   * @remarks
   * Enable CPU Burst.
   * 
   * - true: enable
   * 
   * - false: disable
   * 
   * @example
   * true
   */
  enableCpuBurst?: string;
  /**
   * @remarks
   * Indicates whether canary release rules are enabled. Canary release rules apply only to applications in Spring Cloud and Dubbo frameworks. Valid values:
   * 
   * *   **true**: The canary release rules are enabled.
   * *   **false**: The canary release rules are disabled.
   * 
   * @example
   * false
   */
  enableGreyTagRoute?: boolean;
  /**
   * @remarks
   * Enable idle mode.
   * 
   * - true: enable
   * 
   * - false: disable
   * 
   * @example
   * false
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * Enable new ARMS feature.
   * 
   * - true: enable
   * 
   * - false: disable
   * 
   * @example
   * false
   */
  enableNewArms?: boolean;
  enablePrometheus?: boolean;
  /**
   * @remarks
   * The environment variables. Variable description:
   * 
   * *   **name**: the name of the environment variable.
   * *   **value**: the value or reference of the environment variable.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  gpuCount?: string;
  gpuType?: string;
  headlessPvtzDiscovery?: string;
  html?: string;
  /**
   * @remarks
   * The ID of the corresponding secret dictionary.
   * 
   * @example
   * 10
   */
  imagePullSecrets?: string;
  /**
   * @remarks
   * The URL of the image. This parameter is returned only if the **PackageType** parameter is set to **Image**.
   * 
   * @example
   * docker.io/library/nginx:1.14.2
   */
  imageUrl?: string;
  /**
   * @remarks
   * Initialize container configuration.
   */
  initContainersConfig?: DescribeApplicationConfigResponseBodyDataInitContainersConfig[];
  isStateful?: boolean;
  /**
   * @remarks
   * The arguments in the JAR package. The arguments are used to start the application container. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * start
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The option settings in the JAR package. The settings are used to start the application container. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * -Dtest=true
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The version of the Java development kit (JDK) on which the deployment package of the application depends. The following versions are supported:
   * 
   * *   **Open JDK 8**
   * *   **Open JDK 7**
   * *   **Dragonwell 11**
   * *   **Dragonwell 8**
   * *   **openjdk-8u191-jdk-alpine3.9**
   * *   **openjdk-7u201-jdk-alpine3.9**
   * 
   * This parameter is not returned if the **PackageType** parameter is set to **Image**.
   * 
   * @example
   * Open JDK 8
   */
  jdk?: string;
  /**
   * @remarks
   * The logging configurations of Message Queue for Apache Kafka. The following parameters are involved:
   * 
   * *   **KafkaConfigs**: the configurations of Message Queue for Apache Kafka.
   * 
   * *   **createTime**: the time when the Message Queue for Apache Kafka instance was created.
   * 
   * *   **kafkaTopic**: the message topic that is used to classify messages.
   * 
   * *   **logDir**: the path in which logs are stored.
   * 
   * *   **logType**: the type of collected logs. Valid values:
   * 
   *     *   **file_log**: the file log that is stored in the container. The path of the file logs in the container is returned.
   *     *   **stdout**: the standard output log of the container. You can specify only one stdout value.
   * 
   * *   **kafkaEndpoint**: the endpoint of the Message Queue for Apache Kafka service.
   * 
   * *   **kafkaInstanceId**: the ID of the Message Queue for Apache Kafka instance.
   * 
   * *   **region**: the region where the Message Queue for Apache Kafka instance resides.
   */
  kafkaConfigs?: string;
  /**
   * @remarks
   * The details of the availability check that was performed on the container. If the container fails this health check multiple times, the system disables and restarts the container. You can use one of the following methods to perform the health check:
   * 
   * *   Sample code of the **exec** method: `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
   * *   Sample code of the **httpGet** method: `{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * *   Sample code of the **tcpSocket** method: `{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * >  You can use only one method to perform the health check.
   * 
   * The following parameters are involved:
   * 
   * *   **exec.command**: the health check command.
   * *   **httpGet.path**: the request path.
   * *   **httpGet.scheme**: the protocol that is used to perform the health check. Valid values: **HTTP** and **HTTPS**.
   * *   **httpGet.isContainKeyWord**: indicates whether the response contains keywords. Valid values: **true** and **false**. If this field is not returned, the advanced settings are not used.
   * *   **httpGet.keyWord**: the custom keyword. This parameter is available only if the **isContainKeyWord** field is returned.
   * *   **tcpSocket.port**: the port that is used to check the status of TCP connections.
   * *   **initialDelaySeconds**: the delay of the health check. Default value: 10. Unit: seconds.
   * *   **periodSeconds**: the interval at which health checks are performed. Default value: 30. Unit: seconds.
   * *   **timeoutSeconds**: the timeout period of the health check. Default value: 1. Unit: seconds. If you set this parameter to 0 or leave this parameter empty, the timeout period is automatically set to 1 second.
   * 
   * @example
   * {"exec":{"command":["curl http://localhost:8080"]},"initialDelaySeconds":20,"timeoutSeconds":3}
   */
  liveness?: string;
  /**
   * @remarks
   * The size of memory required by each instance. Unit: MB. You cannot set this parameter to 0. The values of this parameter correspond to the values of the Cpu parameter:
   * 
   * *   This parameter is set to **1024** if the Cpu parameter is set to 500 or 1000.
   * *   This parameter is set to **2048** if the Cpu parameter is set to 500, 1000, or 1000.
   * *   This parameter is set to **4096** if the Cpu parameter is set to 1000, 2000, or 4000.
   * *   This parameter is set to **8192** if the Cpu parameter is set to 2000, 4000, or 8000.
   * *   This parameter is set to **12288** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **16384** if the Cpu parameter is set to 4000, 8000, or 16000.
   * *   This parameter is set to **24567** if the Cpu parameter is set to 12000.
   * *   This parameter is set to **32768** if the Cpu parameter is set to 16000.
   * *   This parameter is set to **65536** if the Cpu parameter is set to 8000, 16000, or 32000.
   * *   This parameter is set to **131072** if the Cpu parameter is set to 32000.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The Nacos registry. Valid values:
   * 
   * *   **0**: SAE built-in Nacos registry
   * *   **1**: self-managed Nacos registry
   * *   **2** : MSE Nacos registry
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The configuration of registration center. Takes effect only the type of registration center is MSE enterprise Nacos.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-1ls43******\\",\\"namespace\\":\\"62ee12fb-c279-4da4-be96-21**********\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * Configure microservices governance
   * 
   * enable: Whether to enable microservices governance
   * 
   * - true: Enable
   * - false: Disable
   * 
   * mseLosslessRule: Configure lossless online/offline deployment
   * 
   * - delayTime: Delay duration (unit: seconds)
   * - enable: Whether to enable lossless deployment. Set to "true" to enable; set to "false" to disable.
   * - notice: Whether to enable notifications. Set to "true" to enable; set to "false" to disable.
   * - warmupTime: Small-traffic warm-up duration (unit: seconds)
   * 
   * @example
   * {\\"Enable\\":true,\\"MseLosslessRule\\":{\\"enable\\":true,\\"notice\\":true,\\"delayTime\\":10,\\"warmupTime\\":120,\\"funcType\\":2,\\"aligned\\":false,\\"related\\":false,\\"lossLessDetail\\":false}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * The percentage of the minimum number of available instances. Valid values:
   * 
   * *   **-1**: the default value. This value indicates that the minimum number of available instances is not measured by percentage. If you do not configure this parameter, the default value **-1** is used.
   * *   **0 to 100**: indicates that the minimum number of available instances is calculated by using the following formula: Current number of instances × (Value of MinReadyInstanceRatio × 100%). If the calculated result is not an integer, the result is rounded up to the nearest integer. For example, if the percentage is set to **50**% and five instances are available, the minimum number of available instances is 3.
   * 
   * >  If the **MinReadyInstance** and **MinReadyInstanceRatio** parameters are returned and the value of the **MinReadyInstanceRatio** parameter is not **-1**, the value of the **MinReadyInstanceRatio** parameter takes effect. If the **MinReadyInstances** parameter is set to **5** and the **MinReadyInstanceRatio** parameter is set to **50**, the value of the **MinReadyInstanceRatio** parameter determines the minimum number of available instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of available instances. Valid values:
   * 
   * *   If you set the value to **0**, business interruptions occur when the application is updated.
   * *   If you set the value to **-1**, the minimum number of available instances is automatically set to a system-recommended value. The value is the nearest integer to which the calculated result of the following formula is rounded up: Current number of instances × 25%. For example, if five instances are available, the minimum number of available instances is calculated by using the following formula: 5 × 25% = 1.25. In this case, the minimum number of available instances is 2.
   * 
   * >  Make sure that at least one instance is available during application deployment and rollback to prevent business interruptions.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * The details of the mounted NAS file system.
   */
  mountDesc?: DescribeApplicationConfigResponseBodyDataMountDesc[];
  /**
   * @remarks
   * The mount target of the NAS file system in the VPC where the application is deployed. If you do not need to modify this configuration during the deployment, configure the **MountHost** parameter only in the first request. You do not need to include this parameter in subsequent requests. If you need to remove this configuration, leave the **MountHost** parameter empty in the request.
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The ID of the microservice application.
   * 
   * @example
   * xxxxxxx@xxxxx
   */
  mseApplicationId?: string;
  /**
   * @remarks
   * The application name of SAE service registered in MSE.
   * 
   * @example
   * cn-shenzhen-alb-demo-5c****
   */
  mseApplicationName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configurations for mounting the NAS file system.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * The ID of the NAS file system.
   * 
   * @example
   * AKSN89**
   */
  nasId?: string;
  /**
   * @remarks
   * The SAE application edition.
   * 
   * - lite: The lightweight edition.
   * - std: The standard edition.
   * - pro: The professional edition.
   * 
   * @example
   * pro
   */
  newSaeVersion?: string;
  /**
   * @remarks
   * The name of the RAM role used to authenticate the user identity.
   * 
   * >  You need to create an OpenID Connect (OIDC) identity provider (IdP) and an identity provider (IdP) for role-based single sign-on (SSO) in advance. For more information, see [Creates an OpenID Connect (OIDC) identity provider (IdP)](https://help.aliyun.com/document_detail/2331022.html) and [Creates an identity provider (IdP) for role-based single sign-on (SSO)](https://help.aliyun.com/document_detail/2331016.html).
   * 
   * @example
   * sae-test
   */
  oidcRoleName?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to read data from and write data to Object Storage Service (OSS) buckets.
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey secret that is used to read data from and write data to OSS buckets.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The description of the mounted OSS bucket.
   */
  ossMountDescs?: DescribeApplicationConfigResponseBodyDataOssMountDescs[];
  /**
   * @remarks
   * The type of the deployment package. Valid values:
   * 
   * *   If you deploy the application by using a Java Archive (JAR) package, you can set this parameter to **FatJar**, **War**, or **Image**.
   * 
   * *   If you deploy the application by using a PHP package, you can set this parameter to one of the following values:
   * 
   *     *   **PhpZip**
   *     *   **IMAGE_PHP_5_4**
   *     *   **IMAGE_PHP_5_4_ALPINE**
   *     *   **IMAGE_PHP_5_5**
   *     *   **IMAGE_PHP_5_5_ALPINE**
   *     *   **IMAGE_PHP_5_6**
   *     *   **IMAGE_PHP_5_6_ALPINE**
   *     *   **IMAGE_PHP_7_0**
   *     *   **IMAGE_PHP_7_0_ALPINE**
   *     *   **IMAGE_PHP_7_1**
   *     *   **IMAGE_PHP_7_1_ALPINE**
   *     *   **IMAGE_PHP_7_2**
   *     *   **IMAGE_PHP_7_2_ALPINE**
   *     *   **IMAGE_PHP_7_3**
   *     *   **IMAGE_PHP_7_3_ALPINE**
   * 
   * @example
   * War
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is returned only if the **PackageType** parameter is set to **FatJar** or **War**.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is returned only if the **PackageType** parameter is set to **FatJar** or **War**.
   * 
   * @example
   * 1.0
   */
  packageVersion?: string;
  /**
   * @remarks
   * The version of PHP supporting PHP deployment packages. Image is not supported.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The path on which the PHP configuration file for application monitoring is mounted. Make sure that the PHP server loads the configuration file.
   * 
   * SAE automatically generates the corresponding configuration file. No manual operations are required.
   * 
   * @example
   * /usr/local/etc/php/conf.d/arms.ini
   */
  phpArmsConfigLocation?: string;
  /**
   * @remarks
   * The details of the PHP configuration file.
   * 
   * @example
   * k1=v1
   */
  phpConfig?: string;
  /**
   * @remarks
   * The path on which the PHP configuration file for application startup is mounted. Make sure that the PHP server uses this configuration file during the startup.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script that is run immediately after the container is started. Example: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is run before the container is stopped. Example: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language that is used to create the application. Valid values:
   * 
   * *   **java**: Java
   * *   **php**: PHP
   * *   **other**: Other programming languages, such as Python, C++, Go, .NET, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * Enable K8s Service discovery and registration.
   * 
   * @example
   * {"serviceName":"bwm-poc-sc-gateway-cn-beijing-front","namespaceId":"cn-beijing:front","portAndProtocol":{"18012":"TCP"},"enable":true}
   */
  pvtzDiscovery?: string;
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
   * The configurations for installing custom module dependencies. By default, the dependencies defined by the requirements.txt file in the root directory are installed. If no software package is configured, you can specify dependencies based on your business requirements.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The details of the health check that was performed on the container. If the container fails this health check multiple times, the system disables and restarts the container. Containers that fail health checks cannot receive traffic from Server Load Balancer (SLB) instances. You can use the **exec**, **httpGet**, or **tcpSocket** method to perform health checks. For more information, see the description of the **Liveness** parameter.
   * 
   * >  You can use only one method to perform the health check.
   * 
   * @example
   * {"exec":{"command":["curl http://localhost:8080"]},"initialDelaySeconds":20,"timeoutSeconds":5}
   */
  readiness?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The type of the resource. Set the value to `application`.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * Secret mount description.
   */
  secretMountDesc?: DescribeApplicationConfigResponseBodyDataSecretMountDesc[];
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
   * The canary tag configured for the application.
   */
  serviceTags?: { [key: string]: string };
  /**
   * @remarks
   * The configuration of the Sidecar container.
   */
  sidecarContainersConfig?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfig[];
  /**
   * @remarks
   * The logging configurations of Log Service.
   * 
   * *   To use Log Service resources that are automatically created by SAE, set this parameter to `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * *   To use custom Log Service resources, set this parameter to `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The following parameters are involved:
   * 
   * *   **projectName**: the name of the Log Service project.
   * *   **logDir**: the path in which logs are stored.
   * *   **logType**: the log type. **stdout**: the standard output log of the container. You can specify only one stdout value for this parameter. If you leave this parameter empty, file logs are collected.
   * *   **logstoreName**: the name of the Logstore in Log Service.
   * *   **logtailName**: the name of the Logtail configuration in Log Service. If you do not configure this parameter, a new Logtail configuration is created.
   * 
   * If you do not need to modify the logging configurations when you deploy the application, configure the **SlsConfigs** parameter only in the first request. You do not need to include this parameter in subsequent requests. If you no longer need to use Log Service, leave the **SlsConfigs** parameter empty in the request.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * Enable startup probe.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"/bin/sh\\",\\"-c\\",\\"#!Note: If microservice config is enabled, the application will be automatically injected with the prestop configuration for lossless offline. If you delete this prestop configuration, lossless offline will not be effective.\\\\n echo stop > /tmp/prestop; /home/admin/.tools/curl http://127.0.0.1:54199/offline; sleep 30\\"]}}
   */
  startupProbe?: string;
  /**
   * @remarks
   * Configuration of K8s Service discovery and registration, and full-chain gray-release feature.
   * 
   * @example
   * {\\"enable\\":\\"false\\",\\"namespaceId\\":\\"cn-beijing:test\\",\\"portAndProtocol\\":{\\"2000:TCP\\":\\"18081\\"},\\"portProtocols\\":[{\\"port\\":2000,\\"protocol\\":\\"TCP\\",\\"targetPort\\":18081}],\\"pvtzDiscoveryName\\":\\"cn-beijing-1421801774382676\\",\\"serviceId\\":\\"3513\\",\\"serviceName\\":\\"demo-gray.test\\"}
   */
  swimlanePvtzDiscovery?: string;
  /**
   * @remarks
   * The details of the tags.
   */
  tags?: DescribeApplicationConfigResponseBodyDataTags[];
  /**
   * @remarks
   * The timeout period for a graceful shutdown. Default value: 30. Unit: seconds. Valid values: 1 to 300.
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
   * The Tomcat configuration. If you want to delete the configuration, set this parameter to {} or leave this parameter empty. The following parameters are involved:
   * 
   * *   **port**: the port number. Valid values: 1024 to 65535. The root permissions are required to perform operations on ports whose number is smaller than 1024. Enter a value that ranges from 1025 to 65535 because the container has only the admin permissions. If you do not configure this parameter, the default port number 8080 is used.
   * *   **contextPath**: the path. Default value: /. This value indicates the root directory.
   * *   **maxThreads**: the maximum number of connections in the connection pool. Default value: 400.
   * *   **uriEncoding**: the URI encoding scheme in the Tomcat container. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If you do not configure this parameter, the default value **ISO-8859-1** is used.
   * *   **useBodyEncoding**: indicates whether to use the encoding scheme that is specified by **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The deployment policy. If the minimum number of available instances is 1, the value of the **UpdateStrategy** parameter is an empty string (""). If the minimum number of available instances is greater than 1, the following strategies can be configured:
   * 
   * *   The application is deployed on an instance. The remaining instances are automatically classified into two release batches whose interval is set to 1. In this case, the parameter is set to `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`.
   * *   The application is deployed on an instance. The remaining instances are manually classified into two release batches. In this case, the parameter is set to `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`.
   * *   All instances are automatically classified into two release batches. The application is deployed on the instances of the two batches in parallel. In this case, the parameter is set to `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
   * 
   * The following parameters are involved:
   * 
   * *   **type**: the type of the release policy. Valid values: **GrayBatchUpdate** and **BatchUpdate**.
   * 
   * *   **batchUpdate**: the phased release policy.
   * 
   *     *   **batch**: the number of release batches.
   *     *   **releaseType**: the processing method for the batches. Valid values: **auto** and **manual**.
   *     *   **batchWaitTime**: the interval between release batches. Unit: seconds.
   * 
   * *   **grayUpdate**: the number of release batches in the phased release after a canary release. This parameter is returned only if the **type** parameter is set to **GrayBatchUpdate**.
   * 
   * @example
   * {"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}
   */
  updateStrategy?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The option settings in the WAR package. The settings are used to start the application container. The default startup command is `java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.
   * 
   * @example
   * custom-option
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The version of the Tomcat container on which the deployment package depends. Valid values:
   * 
   * *   **apache-tomcat-7.0.91**
   * *   **apache-tomcat-8.5.42**
   * 
   * This parameter is not returned if the **PackageType** parameter is set to **Image**.
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
      appSource: 'AppSource',
      associateEip: 'AssociateEip',
      baseAppId: 'BaseAppId',
      batchWaitTime: 'BatchWaitTime',
      clusterId: 'ClusterId',
      cmsServiceId: 'CmsServiceId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      customHostAlias: 'CustomHostAlias',
      customImageNetworkType: 'CustomImageNetworkType',
      diskSize: 'DiskSize',
      dotnet: 'Dotnet',
      edasContainerVersion: 'EdasContainerVersion',
      enableAhas: 'EnableAhas',
      enableCpuBurst: 'EnableCpuBurst',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      enableIdle: 'EnableIdle',
      enableNewArms: 'EnableNewArms',
      enablePrometheus: 'EnablePrometheus',
      envs: 'Envs',
      gpuCount: 'GpuCount',
      gpuType: 'GpuType',
      headlessPvtzDiscovery: 'HeadlessPvtzDiscovery',
      html: 'Html',
      imagePullSecrets: 'ImagePullSecrets',
      imageUrl: 'ImageUrl',
      initContainersConfig: 'InitContainersConfig',
      isStateful: 'IsStateful',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      jdk: 'Jdk',
      kafkaConfigs: 'KafkaConfigs',
      liveness: 'Liveness',
      memory: 'Memory',
      microRegistration: 'MicroRegistration',
      microRegistrationConfig: 'MicroRegistrationConfig',
      microserviceEngineConfig: 'MicroserviceEngineConfig',
      minReadyInstanceRatio: 'MinReadyInstanceRatio',
      minReadyInstances: 'MinReadyInstances',
      mountDesc: 'MountDesc',
      mountHost: 'MountHost',
      mseApplicationId: 'MseApplicationId',
      mseApplicationName: 'MseApplicationName',
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
      pvtzDiscovery: 'PvtzDiscovery',
      python: 'Python',
      pythonModules: 'PythonModules',
      readiness: 'Readiness',
      regionId: 'RegionId',
      replicas: 'Replicas',
      resourceType: 'ResourceType',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfig: 'SidecarContainersConfig',
      slsConfigs: 'SlsConfigs',
      startupProbe: 'StartupProbe',
      swimlanePvtzDiscovery: 'SwimlanePvtzDiscovery',
      tags: 'Tags',
      terminationGracePeriodSeconds: 'TerminationGracePeriodSeconds',
      timezone: 'Timezone',
      tomcatConfig: 'TomcatConfig',
      updateStrategy: 'UpdateStrategy',
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
      appDescription: 'string',
      appId: 'string',
      appName: 'string',
      appSource: 'string',
      associateEip: 'boolean',
      baseAppId: 'string',
      batchWaitTime: 'number',
      clusterId: 'string',
      cmsServiceId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataConfigMapMountDesc },
      cpu: 'number',
      customHostAlias: 'string',
      customImageNetworkType: 'string',
      diskSize: 'number',
      dotnet: 'string',
      edasContainerVersion: 'string',
      enableAhas: 'string',
      enableCpuBurst: 'string',
      enableGreyTagRoute: 'boolean',
      enableIdle: 'boolean',
      enableNewArms: 'boolean',
      enablePrometheus: 'boolean',
      envs: 'string',
      gpuCount: 'string',
      gpuType: 'string',
      headlessPvtzDiscovery: 'string',
      html: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      initContainersConfig: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfig },
      isStateful: 'boolean',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      jdk: 'string',
      kafkaConfigs: 'string',
      liveness: 'string',
      memory: 'number',
      microRegistration: 'string',
      microRegistrationConfig: 'string',
      microserviceEngineConfig: 'string',
      minReadyInstanceRatio: 'number',
      minReadyInstances: 'number',
      mountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataMountDesc },
      mountHost: 'string',
      mseApplicationId: 'string',
      mseApplicationName: 'string',
      namespaceId: 'string',
      nasConfigs: 'string',
      nasId: 'string',
      newSaeVersion: 'string',
      oidcRoleName: 'string',
      ossAkId: 'string',
      ossAkSecret: 'string',
      ossMountDescs: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataOssMountDescs },
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
      pvtzDiscovery: 'string',
      python: 'string',
      pythonModules: 'string',
      readiness: 'string',
      regionId: 'string',
      replicas: 'number',
      resourceType: 'string',
      secretMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSecretMountDesc },
      securityGroupId: 'string',
      serviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sidecarContainersConfig: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfig },
      slsConfigs: 'string',
      startupProbe: 'string',
      swimlanePvtzDiscovery: 'string',
      tags: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataTags },
      terminationGracePeriodSeconds: 'number',
      timezone: 'string',
      tomcatConfig: 'string',
      updateStrategy: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      warStartOptions: 'string',
      webContainer: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    if(Array.isArray(this.initContainersConfig)) {
      $dara.Model.validateArray(this.initContainersConfig);
    }
    if(Array.isArray(this.mountDesc)) {
      $dara.Model.validateArray(this.mountDesc);
    }
    if(Array.isArray(this.ossMountDescs)) {
      $dara.Model.validateArray(this.ossMountDescs);
    }
    if(Array.isArray(this.secretMountDesc)) {
      $dara.Model.validateArray(this.secretMountDesc);
    }
    if(this.serviceTags) {
      $dara.Model.validateMap(this.serviceTags);
    }
    if(Array.isArray(this.sidecarContainersConfig)) {
      $dara.Model.validateArray(this.sidecarContainersConfig);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the application.
   */
  data?: DescribeApplicationConfigResponseBodyData;
  /**
   * @remarks
   * The returned error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the "**Error codes**" section of this topic.
   * 
   * @example
   * Null
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the configurations of an application were obtained. Valid values:
   * 
   * *   **true**: The configurations were obtained.
   * *   **false**: The configurations failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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
      data: DescribeApplicationConfigResponseBodyData,
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

