// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationConfigResponseBodyDataConfigMapMountDesc extends $dara.Model {
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
   * The ConfigMap name.
   * 
   * @example
   * test
   */
  configMapName?: string;
  /**
   * @remarks
   * The ConfigMap key-value pair.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The container mount path.
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

export class DescribeApplicationConfigResponseBodyDataEmptyDirDesc extends $dara.Model {
  /**
   * @remarks
   * The mount path.
   */
  mountPath?: string;
  /**
   * @remarks
   * The temporary storage name.
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
   * The ConfigMap name.
   * 
   * @example
   * test
   */
  configMapName?: string;
  /**
   * @remarks
   * The ConfigMap key-value pair.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The container mount path.
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

export class DescribeApplicationConfigResponseBodyDataInitContainersConfigEmptyDirDesc extends $dara.Model {
  /**
   * @remarks
   * The mount path of the data volume in the container.
   */
  mountPath?: string;
  /**
   * @remarks
   * The temporary storage name.
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

export class DescribeApplicationConfigResponseBodyDataInitContainersConfigSecretMountDesc extends $dara.Model {
  /**
   * @remarks
   * The key.
   */
  key?: string;
  /**
   * @remarks
   * The mount path.
   */
  mountPath?: string;
  /**
   * @remarks
   * The Secret instance ID.
   */
  secretId?: number;
  /**
   * @remarks
   * The Secret instance name.
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

export class DescribeApplicationConfigResponseBodyDataInitContainersConfig extends $dara.Model {
  /**
   * @remarks
   * The image startup command. This command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * Based on the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * /bin/sh
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the image startup command. These are the arguments required by the startup command **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`, where `["abc", ">", "file0"]` must be converted to the String type and the internal format is a JSON array. If this parameter is not required, leave it empty.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The ConfigMap information.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc[];
  /**
   * @remarks
   * The shared temporary storage.
   */
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigEmptyDirDesc[];
  /**
   * @remarks
   * The container environment variable parameters. You can customize environment variables or reference ConfigMap instances. To reference a ConfigMap instance, create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable. This takes priority over valueFrom.
   * - Reference a ConfigMap instance (valueFrom)
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, such as `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   *     - **configMapId**: the ID of the ConfigMap instance.
   *     - **key**: the key. Do not set this field if you want to reference all keys.
   * - Reference a secret (valueFrom)
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-secret-all-<secret name>`, such as `sae-sys-secret-all-test1`.
   *     - **valueFrom**: the reference of the environment variable. Set the value to `secretRef`.
   *     - **secretId**: the ID of the secret.
   *     - **key**: the key. Do not set this field if you want to reference all keys.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The image URL used by the init container.
   * [_single.resp.200.props.Data.InitContainersConfig.items.Env
   * 
   * @example
   * registry.cn-shenzhen.aliyuncs.com/sae-serverless-demo/sae-demo:microservice-java-provider-v1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * The init container name.
   * 
   * @example
   * init-container
   */
  name?: string;
  /**
   * @remarks
   * The Secret mount description.
   */
  secretMountDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigSecretMountDesc[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      name: 'Name',
      secretMountDesc: 'SecretMountDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc },
      emptyDirDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfigEmptyDirDesc },
      envs: 'string',
      imageUrl: 'string',
      name: 'string',
      secretMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfigSecretMountDesc },
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    if(Array.isArray(this.emptyDirDesc)) {
      $dara.Model.validateArray(this.emptyDirDesc);
    }
    if(Array.isArray(this.secretMountDesc)) {
      $dara.Model.validateArray(this.secretMountDesc);
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
   * The container mount path.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  /**
   * @remarks
   * The NAS relative file directory.
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
   * The bucket name.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The directory or OSS object that you created in OSS. If the OSS mount directory does not exist, an exception is triggered.
   * 
   * @example
   * data/user.data
   */
  bucketPath?: string;
  /**
   * @remarks
   * The container path in SAE. If the path already exists, it is overwritten. If the path does not exist, it is created.
   * 
   * @example
   * /usr/data/user.data
   */
  mountPath?: string;
  /**
   * @remarks
   * Indicates whether the container path has read-only permission to the mounted directory resources. Valid values:
   * 
   * - **true**: Read-only permission.
   * - **false**: Read and write permission.
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

export class DescribeApplicationConfigResponseBodyDataRaspConfig extends $dara.Model {
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

export class DescribeApplicationConfigResponseBodyDataSecretMountDesc extends $dara.Model {
  /**
   * @remarks
   * The key with Base64-encoded data value.
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
   * The queried Secret instance ID.
   * 
   * @example
   * 520
   */
  secretId?: number;
  /**
   * @remarks
   * The Secret instance name.
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
   * The ConfigMap instance ID.
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
   * The ConfigMap key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The container mount path.
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
   * The mount path of the data volume in the container.
   * 
   * @example
   * /mnt/cache
   */
  mountPath?: string;
  /**
   * @remarks
   * The temporary storage name.
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

export class DescribeApplicationConfigResponseBodyDataSidecarContainersConfigSecretMountDesc extends $dara.Model {
  /**
   * @remarks
   * The key with Base64-encoded data value.
   */
  key?: string;
  /**
   * @remarks
   * The mount path.
   */
  mountPath?: string;
  /**
   * @remarks
   * The Secret instance ID.
   */
  secretId?: number;
  /**
   * @remarks
   * The Secret instance name.
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

export class DescribeApplicationConfigResponseBodyDataSidecarContainersConfig extends $dara.Model {
  /**
   * @remarks
   * The ACR Enterprise instance ID. This parameter is required when **ImageUrl** is from ACR Enterprise Edition.
   * 
   * @example
   * cri-fhzlneorxala66ip
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image startup command. This command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * Based on the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * /bin/sh
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the image startup command. These are the arguments required by the startup command **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`, where `["abc", ">", "file0"]` must be converted to the String type and the internal format is a JSON array. If this parameter is not required, leave it empty.
   * 
   * @example
   * [\\"-c\\",\\"echo \\\\\\"test\\\\\\" > /home/nas/test.log && sleep 10000000s\\"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The ConfigMap mount description. Use the configuration items created on the namespace configuration page to inject configuration information into the container. Parameter descriptions:
   * - **configMapId**: The ConfigMap instance ID. You can obtain this ID by calling the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation.
   * - **key**: The key-value pair.
   * > You can mount all keys by passing the `sae-sys-configmap-all` parameter.
   * - **mountPath**: The mount path.
   * - **ConfigMapName**: The ConfigMap name.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc[];
  /**
   * @remarks
   * The maximum CPU resources of the primary container that the sidecar container can use.
   * 
   * @example
   * 500
   */
  cpu?: number;
  /**
   * @remarks
   * The shared temporary storage. Sets a temporary storage directory and mounts it to the primary container and sidecar container.
   */
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc[];
  /**
   * @remarks
   * The container environment variable parameters. Custom values or references to configuration items are supported. To reference a configuration item, create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: The environment variable name.
   *     - **value**: The environment variable value. This value takes precedence over valueFrom.
   * - Reference to a configuration item (valueFrom)
   *     - **name**: The environment variable name. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, such as `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: The environment variable reference. Set the value to `configMapRef`.
   *         - **configMapId**: The ConfigMap ID.
   *         - **key**: The key. If all keys are referenced, do not set this field.
   * 
   * @example
   * [{\\"name\\":\\"k1\\",\\"value\\":\\"c8e3a815-e5d3-4adf-abb3-98b106a607c4\\"}]
   */
  envs?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry.cn-beijing.aliyuncs.com/sae-dev-test/nginx:stable
   */
  imageUrl?: string;
  /**
   * @remarks
   * The container health check.
   */
  liveness?: string;
  /**
   * @remarks
   * The maximum memory resources of the primary container that the sidecar container can use.
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
  /**
   * @remarks
   * The script that is run after the container starts.
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is run before the container stops.
   */
  preStop?: string;
  /**
   * @remarks
   * The application startup status check.
   */
  readiness?: string;
  /**
   * @remarks
   * The Secret mount description.
   */
  secretMountDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigSecretMountDesc[];
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
      liveness: 'Liveness',
      memory: 'Memory',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      secretMountDesc: 'SecretMountDesc',
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
      liveness: 'string',
      memory: 'number',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      secretMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfigSecretMountDesc },
    };
  }

  validate() {
    if(Array.isArray(this.configMapMountDesc)) {
      $dara.Model.validateArray(this.configMapMountDesc);
    }
    if(Array.isArray(this.emptyDirDesc)) {
      $dara.Model.validateArray(this.emptyDirDesc);
    }
    if(Array.isArray(this.secretMountDesc)) {
      $dara.Model.validateArray(this.secretMountDesc);
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
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The ARN of the RAM role required for pulling images across accounts. For more information, see [Pull Alibaba Cloud images across accounts](https://help.aliyun.com/document_detail/190675.html) and [Grant cross-account permissions by using RAM roles](https://help.aliyun.com/document_detail/223585.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  acrAssumeRoleArn?: string;
  /**
   * @remarks
   * The ACR Enterprise instance ID.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The agent version.
   */
  agentVersion?: string;
  /**
   * @remarks
   * The ALB gateway ReadinessGate configuration.
   */
  albIngressReadinessGate?: string;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Sample application
   */
  appDescription?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @remarks
   * The SAE application type.
   * 
   * - micro_service
   * 
   * - web
   * 
   * - job
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * Specifies whether to associate an EIP. Valid values:
   * 
   * - **true**: Associated.
   * - **false**: Not associated.
   * 
   * @example
   * true
   */
  associateEip?: boolean;
  /**
   * @remarks
   * The ID of the baseline application.
   * 
   * @example
   * 8c573618-8d72-4407-baf4-f7b64b******
   */
  baseAppId?: string;
  /**
   * @remarks
   * The wait time between batches during a phased release, in seconds.
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
  /**
   * @remarks
   * The CloudMonitor service ID.
   */
  cmsServiceId?: string;
  /**
   * @remarks
   * The image startup command. This command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * Based on the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the image startup command. These are the arguments required by the startup command **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the example for the **Command** parameter, `CommandArgs=["abc", ">", "file0"]`, where `["abc", ">", "file0"]` must be converted to the String type and the internal format is a JSON array. If this parameter is not required, leave it empty.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The ConfigMap information.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataConfigMapMountDesc[];
  /**
   * @remarks
   * The CPU required by each instance, in millicores. This value cannot be 0. Only the following defined specifications are supported:
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
   * - **hostName**: The domain name or hostname.
   * - **ip**: The IP address.
   * 
   * @example
   * [{"hostName":"test.host.name","ip":"0.0.0.0"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The type of the custom image. If the image is not a custom image, set this parameter to an empty string. Valid values:
   * 
   * - internet: public image
   * - intranet: internal image
   * 
   * @example
   * internet
   */
  customImageNetworkType?: string;
  /**
   * @remarks
   * The instance name of the application in the ASI cluster.
   * 
   * @example
   * demo-b0cdce9b-3d1f-4168-b206-b59f348f1a8a
   */
  deploymentName?: string;
  /**
   * @remarks
   * The disk storage size, in GB.
   * 
   * @example
   * 20
   */
  diskSize?: number;
  /**
   * @remarks
   * The .NET framework version:
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
   * The version of the application runtime environment in the HSF framework, such as the Ali-Tomcat container.
   * 
   * @example
   * 3.5.3
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * The shared temporary storage.
   */
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataEmptyDirDesc[];
  /**
   * @remarks
   * Specifies whether to connect to Application High Availability Service (AHAS). Valid values:
   * 
   * - **true**: Connected to AHAS.
   * - **false**: Not connected to AHAS.
   * 
   * @example
   * true
   */
  enableAhas?: string;
  /**
   * @remarks
   * Specifies whether to enable the CPU Burst feature. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enableCpuBurst?: string;
  /**
   * @remarks
   * Specifies whether to enable the traffic canary release rule. This rule applies only to applications that use the Spring Cloud and Dubbo frameworks. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableGreyTagRoute?: boolean;
  /**
   * @remarks
   * Specifies whether to enable idle mode. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * false
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * Indicates whether the namespace agent version configuration is reused.
   */
  enableNamespaceAgentVersion?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the new ARMS feature. Valid values:
   * 
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * false
   */
  enableNewArms?: boolean;
  /**
   * @remarks
   * Indicates whether Prometheus custom metric collection is enabled.
   */
  enablePrometheus?: boolean;
  /**
   * @remarks
   * The container environment variable parameters. Custom values or references to configuration items are supported. To reference a configuration item, create a ConfigMap instance first. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: The environment variable name.
   *     - **value**: The environment variable value.
   * - Reference to a configuration item
   *     - **name**: The environment variable name. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, such as `sae-sys-configmap-all-test1`.
   *     - **valueFrom**: The environment variable reference. Set the value to `configMapRef`.
   *     - **configMapId**: The ConfigMap ID.
   *     - **key**: The key. If all keys are referenced, do not set this field.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The number of GPUs.
   */
  gpuCount?: string;
  /**
   * @remarks
   * The GPU type.
   */
  gpuType?: string;
  headlessPvtzDiscovery?: string;
  html?: string;
  idleHour?: string;
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
   * The image URL. This parameter is required when **Package Type** is set to **Image**.
   * 
   * @example
   * docker.io/library/nginx:1.14.2
   */
  imageUrl?: string;
  /**
   * @remarks
   * The init container configuration.
   */
  initContainersConfig?: DescribeApplicationConfigResponseBodyDataInitContainersConfig[];
  /**
   * @remarks
   * Indicates whether the application is stateful.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The arguments for starting the JAR package application. The default startup command for the application: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * start
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The options for starting the JAR package application. The default startup command for the application: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Dtest=true
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
   * The summary of log collection configurations for Kafka. Valid values:
   * 
   * - **kafkaEndpoint**: The endpoint of the Kafka API.
   * - **kafkaInstanceId**: The Kafka instance ID.
   * - **kafkaConfigs**: The configuration summary for one or more log entries. For example values and parameter descriptions, see the **kafkaConfigs** request parameter in this topic.
   * 
   * @example
   * {"kafkaEndpoint":"10.0.X.XXX:XXXX,10.0.X.XXX:XXXX,10.0.X.XXX:XXXX","kafkaInstanceId":"alikafka_pre-cn-7pp2l8kr****","kafkaConfigs":[{"logType":"file_log","logDir":"/tmp/a.log","kafkaTopic":"test2"},{"logType":"stdout","logDir":"","kafkaTopic":"test"}]}
   */
  kafkaConfigs?: string;
  /**
   * @remarks
   * The labels.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The container health check settings. Containers that fail the health check are shut down and recovered. The following methods are supported:
   * 
   * - **exec**: For example, `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
   * - **httpGet**: For example, `{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * - **tcpSocket**: For example, `{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * > You can select only one method for health checks.
   * 
   * Parameter descriptions:
   * 
   * - **exec.command**: The health check command.
   * - **httpGet.path**: The access path.
   * - **httpGet.scheme**: **HTTP** or **HTTPS**.
   * - **httpGet.isContainKeyWord**: **true** indicates that the keyword is included. **false** indicates that the keyword is not included. If this field is missing, the advanced feature is not used.
   * - **httpGet.keyWord**: The custom keyword. The **isContainKeyWord** field must be present when this parameter is used.
   * - **tcpSocket.port**: The port for TCP connection detection.
   * - **initialDelaySeconds**: The initial delay for the health check. Default value: 10. Unit: seconds.
   * - **periodSeconds**: The health check period. Default value: 30. Unit: seconds.
   * - **timeoutSeconds**: The health check timeout period. Default value: 1. Unit: seconds. If this parameter is set to 0 or is not set, the default timeout period is 1 second.
   * 
   * @example
   * {"exec":{"command":["curl http://localhost:8080"]},"initialDelaySeconds":20,"timeoutSeconds":3}
   */
  liveness?: string;
  /**
   * @remarks
   * LokiConfigs
   */
  lokiConfigs?: string;
  /**
   * @remarks
   * The Peak Volume instance ratio.
   */
  maxSurgeInstanceRatio?: number;
  /**
   * @remarks
   * The Peak Volume of instances.
   */
  maxSurgeInstances?: number;
  /**
   * @remarks
   * The memory size required by each instance, in MB. This value cannot be 0. The memory size has a one-to-one mapping with CPU. Only the following defined specifications are supported:
   * - **1024**: Corresponds to 500 millicores and 1000 millicores of CPU.
   * - **2048**: Corresponds to 500, 1000, and 2000 millicores of CPU.
   * - **4096**: Corresponds to 1000, 2000, and 4000 millicores of CPU.
   * - **8192**: Corresponds to 2000, 4000, and 8000 millicores of CPU.
   * - **12288**: Corresponds to 12000 millicores of CPU.
   * - **16384**: Corresponds to 4000, 8000, and 16000 millicores of CPU.
   * - **24576**: Corresponds to 12000 millicores of CPU.
   * - **32768**: Corresponds to 16000 millicores of CPU.
   * - **65536**: Corresponds to 8000, 16000, and 32000 millicores of CPU.
   * - **131072**: Corresponds to 32000 millicores of CPU.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The Nacos registry. Valid values:
   * - **0**: SAE built-in Nacos.
   * - **1**: Self-managed Nacos.
   * - **2**: MSE commercial edition Nacos.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The registry configuration. This parameter takes effect only when the registry type is MSE Nacos Enterprise Edition.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-1ls43******\\",\\"namespace\\":\\"62ee12fb-c279-4da4-be96-21**********\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * The microservice governance configuration.
   * 
   * - Specifies whether to enable microservice governance (enable):
   * 
   *    - true: enabled
   * 
   *   - false: disabled
   * 
   * - Lossless rolling update configuration (mseLosslessRule):
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
   * {\\"Enable\\":true,\\"MseLosslessRule\\":{\\"enable\\":true,\\"notice\\":true,\\"delayTime\\":10,\\"warmupTime\\":120,\\"funcType\\":2,\\"aligned\\":false,\\"related\\":false,\\"lossLessDetail\\":false}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * The minimum percentage of available instances. Valid values:
   * 
   * - **-1**: The default value, which indicates that the percentage is not used. If this parameter is not specified, the system uses **-1** by default.
   * - **0~100**: The unit is percentage, rounded up. For example, if set to **50**%, and the current number of instances is 5, the minimum number of available instances is 3.
   * 
   * > When both **MinReadyInstance** and **MinReadyInstanceRatio** are specified and the value of **MinReadyInstanceRatio** is not **-1**, the **MinReadyInstanceRatio** parameter takes precedence. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, the system uses **MinReadyInstanceRatio** to calculate the minimum number of available instances.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of available instances. Valid values:
   * 
   * - If set to **0**, the application interrupts services during the upgrade process.
   * - If set to **-1**, the system-recommended value is used, which is 25% of the current number of instances. If the current number of instances is 5, 5 × 25% = 1.25, which is rounded up to 2.
   * 
   * > Set the minimum number of available instances to ≥ 1 for each rolling deployment to avoid service interruptions.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * The mount description information.
   */
  mountDesc?: DescribeApplicationConfigResponseBodyDataMountDesc[];
  /**
   * @remarks
   * The mount point of NAS within the application VPC. If the configuration has not changed during deployment, you do not need to set this parameter (that is, the **MountHost** field does not need to be included in the request). To clear the NAS configuration, set the value of this field to an empty string in the request (that is, set the value of the **MountHost** field to "").
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The application ID on the Microservices Engine (MSE) side.
   * 
   * @example
   * xxxxxxx@xxxxx
   */
  mseApplicationId?: string;
  /**
   * @remarks
   * The application name after the SAE service is registered with MSE.
   * 
   * @example
   * cn-shenzhen-alb-demo-5c****
   */
  mseApplicationName?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The NAS mount configurations.
   * 
   * @example
   * [{"mountPath":"/test1","readOnly":false,"nasId":"nasId1","mountDomain":"nasId1.cn-shenzhen.nas.aliyuncs.com","nasPath":"/test1"},{"nasId":"nasId2","mountDomain":"nasId2.cn-shenzhen.nas.aliyuncs.com","readOnly":false,"nasPath":"/test2","mountPath":"/test2"}]
   */
  nasConfigs?: string;
  /**
   * @remarks
   * NAS ID。
   * 
   * @example
   * AKSN****
   */
  nasId?: string;
  /**
   * @remarks
   * The application version. Valid values:
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
   * The RAM role for identity authentication.
   * > Create an OIDC identity provider and an identity provider role in the same region in advance. For more information, see [Create an OIDC identity provider](https://help.aliyun.com/document_detail/2331022.html) and [Create a role for SSO identity provider](https://help.aliyun.com/document_detail/2331016.html).
   * 
   * @example
   * sae-test
   */
  oidcRoleName?: string;
  /**
   * @remarks
   * The AccessKey ID for OSS read/write operations.
   * 
   * @example
   * xxxxxx
   */
  ossAkId?: string;
  /**
   * @remarks
   * The AccessKey Secret for OSS read/write operations.
   * 
   * @example
   * xxxxxx
   */
  ossAkSecret?: string;
  /**
   * @remarks
   * The OSS mount description.
   */
  ossMountDescs?: DescribeApplicationConfigResponseBodyDataOssMountDescs[];
  /**
   * @remarks
   * The application package type. Valid values:
   * 
   * - When you deploy with Java, **FatJar**, **War**, and **Image** are supported.
   * - When you deploy with PHP, the following types are supported:
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
   * 
   * @example
   * War
   */
  packageType?: string;
  /**
   * @remarks
   * The deployment package URL. If your deployment package is uploaded through SAE, note the following:
   * 
   * - This URL cannot be used for direct download. Use the GetPackageVersionAccessableUrl operation to obtain a downloadable URL (valid for 10 minutes).
   * - SAE retains the package for a maximum of 90 days. After 90 days, the URL is no longer returned and the package is no longer available for download.
   */
  packageUrl?: string;
  /**
   * @remarks
   * The version of the deployment package. This parameter is required when **Package Type** is set to **FatJar** or **War**.
   * 
   * @example
   * 1.0
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
   * The mount path for PHP application monitoring. Make sure that the PHP server loads the configuration file from this path.
   * 
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
   * The mount path of the PHP application startup configuration. Make sure that the PHP server uses this configuration file for startup.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script that is run after the container starts. A script is triggered immediately after the container is created. Format: `{"exec":{"command":["cat","/etc/group"\\]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script that is run before the container stops. A script is triggered before the container is deleted. Format: `{"exec":{"command":["cat","/etc/group"\\]}}`
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
   * - **other**: Other languages, such as Python, C++, Go, .NET, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * Enables K8s Service-based service registration and discovery.
   * 
   * @example
   * {     "serviceName": "bwm-poc-sc-gateway-cn-beijing-front",     "namespaceId": "cn-beijing:front",     "portAndProtocol": {         "18012": "TCP"     },     "portProtocols": [         {             "port": "18012",             "protocol": "TCP"         }     ],     "enable": true }
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
   * The custom installation module dependencies. By default, the dependencies defined in the requirements.txt file in the root directory are installed. If no dependencies are configured or custom packages are needed, you can specify the dependencies to install.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  raspConfig?: DescribeApplicationConfigResponseBodyDataRaspConfig[];
  /**
   * @remarks
   * The application startup status check. Containers that fail multiple health checks are shut down and restarted. Containers that do not pass the health check do not receive SLB traffic. The **exec**, **httpGet**, and **tcpSocket** methods are supported. For specific examples, see the **Liveness** parameter.
   * 
   * > You can select only one method for health checks.
   * 
   * @example
   * {"exec":{"command":["curl http://localhost:8080"]},"initialDelaySeconds":20,"timeoutSeconds":5}
   */
  readiness?: string;
  /**
   * @remarks
   * The region ID.
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
   * The resource type. Only `application` is supported.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The Secret mount description.
   */
  secretMountDesc?: DescribeApplicationConfigResponseBodyDataSecretMountDesc[];
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
   */
  serviceTags?: { [key: string]: string };
  /**
   * @remarks
   * The sidecar container configuration.
   */
  sidecarContainersConfig?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfig[];
  /**
   * @remarks
   * The settings for log collection to Simple Log Service (SLS).
   * 
   * - To use SLS resources that are automatically created by Serverless App Engine (SAE): `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - To use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Parameter descriptions:
   * 
   * - **projectName**: The name of the project in SLS.  
   * - **logDir**: The log path.
   * - **logType**: The log type. **stdout** indicates container standard output logs. You can set only one stdout entry. If this parameter is not set, file logs are collected.
   * - **logstoreName**: The name of the Logstore in SLS.
   * - **logtailName**: The name of the Logtail in SLS. If this parameter is not specified, a new Logtail is created through automatic creation.
   * 
   * If the SLS collection configuration has not changed during multiple deployments, you do not need to set this parameter (that is, the **SlsConfigs** field does not need to be included in the request). If you no longer need the SLS collection feature, set the value of this field to an empty string in the request (that is, set the value of the **SlsConfigs** field to "").
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * sls log env tags
   */
  slsLogEnvTags?: string;
  /**
   * @remarks
   * The startup probe of the application.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"/bin/sh\\",\\"-c\\",\\"#!Note: If microservice config is enabled, the application will be automatically injected with the prestop configuration for lossless offline. If you delete this prestop configuration, lossless offline will not be effective.\\\\n echo stop > /tmp/prestop; /home/admin/.tools/curl http://127.0.0.1:54199/offline; sleep 30\\"]}}
   */
  startupProbe?: string;
  /**
   * @remarks
   * Configures K8s Service-based service registration and discovery with end-to-end canary release.
   * 
   * @example
   * {\\"enable\\":\\"false\\",\\"namespaceId\\":\\"cn-beijing:test\\",\\"portAndProtocol\\":{\\"2000:TCP\\":\\"18081\\"},\\"portProtocols\\":[{\\"port\\":2000,\\"protocol\\":\\"TCP\\",\\"targetPort\\":18081}],\\"pvtzDiscoveryName\\":\\"cn-beijing-1421801774382676\\",\\"serviceId\\":\\"3513\\",\\"serviceName\\":\\"demo-gray.test\\"}
   */
  swimlanePvtzDiscovery?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeApplicationConfigResponseBodyDataTags[];
  /**
   * @remarks
   * The graceful shutdown timeout period. Default value: 30. Unit: seconds. Valid values: 1 to 300.
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
   * The Tomcat configuration. Set this parameter to "" or "{}" to delete the configuration:
   * 
   * - **port**: The port number. Valid values: 1024 to 65535. Ports smaller than 1024 require root permissions. Because the container is configured with admin permissions, specify a port greater than 1024. Default value: 8080.
   * - **contextPath**: The access path. Default value: root directory "/".
   * - **maxThreads**: The maximum number of connections in the connection pool. Default value: 400.
   * - **uriEncoding**: The encoding format of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. Default value: **ISO-8859-1**.
   * - **useBodyEncoding**: Specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The deployment policy. When the minimum number of available instances is 1, the value of the **UpdateStrategy** field is "". When the minimum number of available instances is greater than 1, examples are as follows:
   * 
   * - Canary release of 1 instance + 2 subsequent batches + automatic batching + 1-minute batch interval: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
   *  
   * - Canary release of 1 instance + 2 subsequent batches + manual batching: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
   * 
   * - 2 batches + automatic batching + 0-minute batch interval: `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
   * 
   * Parameter descriptions:
   * 
   * - **type**: The release policy type. Valid values: **GrayBatchUpdate** (grayscale batch release) and **BatchUpdate** (batch release).
   * - **batchUpdate**: The batch release policy.
   *     - **batch**: The number of release batches.
   *     - **releaseType**: The processing method between batches. Valid values: **auto** (automatic) and **manual** (manual).
   *     - **batchWaitTime**: The interval between deployments within a batch, in seconds.
   * - **grayUpdate**: The remaining batches after grayscale release. This parameter is required when **type** is set to **GrayBatchUpdate**.
   * 
   * @example
   * {"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}
   */
  updateStrategy?: string;
  /**
   * @remarks
   * vSwitch ID。
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The startup options for the WAR package application. The default startup command for the application: `java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.
   * 
   * @example
   * custom-option
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version on which the deployment package depends. Valid values:
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
      deploymentName: 'DeploymentName',
      diskSize: 'DiskSize',
      dotnet: 'Dotnet',
      edasContainerVersion: 'EdasContainerVersion',
      emptyDirDesc: 'EmptyDirDesc',
      enableAhas: 'EnableAhas',
      enableCpuBurst: 'EnableCpuBurst',
      enableGreyTagRoute: 'EnableGreyTagRoute',
      enableIdle: 'EnableIdle',
      enableNamespaceAgentVersion: 'EnableNamespaceAgentVersion',
      enableNewArms: 'EnableNewArms',
      enablePrometheus: 'EnablePrometheus',
      envs: 'Envs',
      gpuCount: 'GpuCount',
      gpuType: 'GpuType',
      headlessPvtzDiscovery: 'HeadlessPvtzDiscovery',
      html: 'Html',
      idleHour: 'IdleHour',
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
      raspConfig: 'RaspConfig',
      readiness: 'Readiness',
      regionId: 'RegionId',
      replicas: 'Replicas',
      resourceType: 'ResourceType',
      secretMountDesc: 'SecretMountDesc',
      securityGroupId: 'SecurityGroupId',
      serviceTags: 'ServiceTags',
      sidecarContainersConfig: 'SidecarContainersConfig',
      slsConfigs: 'SlsConfigs',
      slsLogEnvTags: 'SlsLogEnvTags',
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
      agentVersion: 'string',
      albIngressReadinessGate: 'string',
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
      deploymentName: 'string',
      diskSize: 'number',
      dotnet: 'string',
      edasContainerVersion: 'string',
      emptyDirDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataEmptyDirDesc },
      enableAhas: 'string',
      enableCpuBurst: 'string',
      enableGreyTagRoute: 'boolean',
      enableIdle: 'boolean',
      enableNamespaceAgentVersion: 'boolean',
      enableNewArms: 'boolean',
      enablePrometheus: 'boolean',
      envs: 'string',
      gpuCount: 'string',
      gpuType: 'string',
      headlessPvtzDiscovery: 'string',
      html: 'string',
      idleHour: 'string',
      imagePullSecrets: 'string',
      imageUrl: 'string',
      initContainersConfig: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataInitContainersConfig },
      isStateful: 'boolean',
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
      raspConfig: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataRaspConfig },
      readiness: 'string',
      regionId: 'string',
      replicas: 'number',
      resourceType: 'string',
      secretMountDesc: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSecretMountDesc },
      securityGroupId: 'string',
      serviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sidecarContainersConfig: { 'type': 'array', 'itemType': DescribeApplicationConfigResponseBodyDataSidecarContainersConfig },
      slsConfigs: 'string',
      slsLogEnvTags: 'string',
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
    if(Array.isArray(this.emptyDirDesc)) {
      $dara.Model.validateArray(this.emptyDirDesc);
    }
    if(Array.isArray(this.initContainersConfig)) {
      $dara.Model.validateArray(this.initContainersConfig);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.mountDesc)) {
      $dara.Model.validateArray(this.mountDesc);
    }
    if(Array.isArray(this.ossMountDescs)) {
      $dara.Model.validateArray(this.ossMountDescs);
    }
    if(Array.isArray(this.raspConfig)) {
      $dara.Model.validateArray(this.raspConfig);
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
   * The API status or POP error code. Valid values:
   * 
   * - **2xx**: success.
   * - **3xx**: redirection.
   * - **4xx**: request error.
   * - **5xx**: server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The application information.
   */
  data?: DescribeApplicationConfigResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information about the call result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01CF26C7-00A3-4AA6-BA76-7E95F2A3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application configuration information is retrieved. Valid values:
   * 
   * - **true**: Retrieved.
   * - **false**: Failed to retrieve.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to query the details of a call.
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

