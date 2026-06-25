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
   * The key of the key-value pair.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The mount path of the container.
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
   * The name of the temporary storage.
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
   * The key of the key-value pair.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The mount path of the container.
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
   * The path on which the volume is mounted in the container.
   */
  mountPath?: string;
  /**
   * @remarks
   * The name of the temporary storage.
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
   * The ID of the secret instance.
   */
  secretId?: number;
  /**
   * @remarks
   * The name of the secret instance.
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
   * Based on the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * /bin/sh
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup command. The arguments are required by the preceding startup command **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`. The value `["abc", ">", "file0"]` must be converted into a string in the JSON array format. If this parameter is not required, you do not need to specify it.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The configurations of the ConfigMap.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigConfigMapMountDesc[];
  /**
   * @remarks
   * The shared temporary storage.
   */
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataInitContainersConfigEmptyDirDesc[];
  /**
   * @remarks
   * The environment variables of the container. You can customize environment variables or reference a ConfigMap. To reference a ConfigMap, you must first create a ConfigMap instance. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * - Custom configuration
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable. This parameter takes precedence over valueFrom.
   * 
   * - Reference a configuration item (valueFrom)
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, for example, `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The reference of the environment variable. Set the value to `configMapRef`.
   * 
   *   - **configMapId**: The ID of the ConfigMap.
   * 
   *   - **key**: The key. If you want to reference all keys, do not specify this parameter.
   * 
   * - Reference a secret (valueFrom)
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-secret-all-<Secret name>`, for example, `sae-sys-secret-all-test1`.
   * 
   *   - **valueFrom**: The reference of the environment variable. Set the value to `secretRef`.
   * 
   *   - **secretId**: The ID of the secret.
   * 
   *   - **key**: The key. If you want to reference all keys, do not specify this parameter.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The URL of the image that is used by the init container.
   * 
   * @example
   * registry.cn-shenzhen.aliyuncs.com/sae-serverless-demo/sae-demo:microservice-java-provider-v1.0
   */
  imageUrl?: string;
  /**
   * @remarks
   * The name of the init container.
   * 
   * @example
   * init-container
   */
  name?: string;
  /**
   * @remarks
   * The description of the secret that you want to mount.
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
   * The mount path of the container.
   * 
   * @example
   * /tmp
   */
  mountPath?: string;
  /**
   * @remarks
   * The path of the NAS file system.
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
   * The directory or object that you created in OSS. An error occurs if the mount directory does not exist.
   * 
   * @example
   * data/user.data
   */
  bucketPath?: string;
  /**
   * @remarks
   * The path of the container in SAE. If the path exists, the path is overwritten. If the path does not exist, a new path is created.
   * 
   * @example
   * /usr/data/user.data
   */
  mountPath?: string;
  /**
   * @remarks
   * Specifies whether the container has the read-only permission on the mount directory resources. Valid values:
   * 
   * - **true**: The read-only permission.
   * 
   * - **false**: The read and write permissions.
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
   * The key of the data value that is encoded in Base64.
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
   * The ID of the queried secret instance.
   * 
   * @example
   * 520
   */
  secretId?: number;
  /**
   * @remarks
   * The name of the secret instance.
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
   * The ID of the ConfigMap instance.
   * 
   * @example
   * 7361
   */
  configMapId?: number;
  /**
   * @remarks
   * The name of the ConfigMap.
   * 
   * @example
   * ConfigMap-test
   */
  configMapName?: string;
  /**
   * @remarks
   * The key of the ConfigMap.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The mount path of the container.
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
   * The path on which the volume is mounted in the container.
   * 
   * @example
   * /mnt/cache
   */
  mountPath?: string;
  /**
   * @remarks
   * The name of the temporary storage.
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
   * The key of the data value that is encoded in Base64.
   */
  key?: string;
  /**
   * @remarks
   * The mount path.
   */
  mountPath?: string;
  /**
   * @remarks
   * The ID of the secret instance.
   */
  secretId?: number;
  /**
   * @remarks
   * The name of the secret instance.
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
   * The ID of the Container Registry Enterprise Edition instance. This parameter is required if **ImageUrl** is set to an image in Container Registry Enterprise Edition.
   * 
   * @example
   * cri-fhzlneorxala66ip
   */
  acrInstanceId?: string;
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
   * Based on the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * /bin/sh
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup command. The arguments are required by the preceding startup command **Command**. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, `CommandArgs=["abc", ">", "file0"]`. The value `["abc", ">", "file0"]` must be converted into a string in the JSON array format. If this parameter is not required, you do not need to specify it.
   * 
   * @example
   * [\\"-c\\",\\"echo \\\\\\"test\\\\\\" > /home/nas/test.log && sleep 10000000s\\"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The description of the ConfigMap that you want to mount. Use the configuration item that you created on the Namespace Configuration Items page to inject configuration information into the container. The parameters are described as follows:
   * 
   * - **configMapId**: The ID of the ConfigMap instance. You can call the [ListNamespacedConfigMaps](https://help.aliyun.com/document_detail/176917.html) operation to obtain the ID.
   * 
   * - **key**: The key.
   * 
   * > You can pass the `sae-sys-configmap-all` parameter to mount all keys.
   * 
   * - **mountPath**: The mount path.
   * 
   * - **ConfigMapName**: The name of the ConfigMap.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigConfigMapMountDesc[];
  /**
   * @remarks
   * The maximum CPU resources that the sidecar container can use from the main container.
   * 
   * @example
   * 500
   */
  cpu?: number;
  /**
   * @remarks
   * The shared temporary storage. Set a temporary storage directory and mount it to the main container and the sidecar container.
   */
  emptyDirDesc?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfigEmptyDirDesc[];
  /**
   * @remarks
   * The environment variables of the container. You can customize environment variables or reference a ConfigMap. To reference a ConfigMap, you must first create a ConfigMap instance. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * - Custom configuration
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable. This parameter takes precedence over valueFrom.
   * 
   * - Reference a configuration item (valueFrom)
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, for example, `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The reference of the environment variable. Set the value to `configMapRef`.
   * 
   *     - **configMapId**: The ID of the ConfigMap.
   * 
   *     - **key**: The key. If you want to reference all keys, do not specify this parameter.
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
   * The health check on the container.
   */
  liveness?: string;
  /**
   * @remarks
   * The maximum memory resources that the sidecar container can use from the main container.
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
  postStart?: string;
  preStop?: string;
  /**
   * @remarks
   * The check on the application startup status.
   */
  readiness?: string;
  /**
   * @remarks
   * The description of the secret that you want to mount.
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
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is required to pull images across accounts. For more information, see [Pull images across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/190675.html) and [Use a RAM role to grant permissions across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/223585.html).
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
   * The agent version.
   */
  agentVersion?: string;
  /**
   * @remarks
   * The configuration of the Application Load Balancer (ALB) gateway readiness gate.
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
   * The type of the SAE application.
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
   * Specifies whether to bind an elastic IP address (EIP). Valid values:
   * 
   * - **true**: Bind an EIP.
   * 
   * - **false**: Do not bind an EIP.
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
  /**
   * @remarks
   * The Cloud Monitor service ID.
   */
  cmsServiceId?: string;
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
   * Based on the preceding example, `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments of the image startup command. The arguments are required by the **Command** parameter. Format:
   * 
   * `["a","b"]`
   * 
   * In the example of the **Command** parameter, `CommandArgs=["abc", ">", "file0"]`. The value `["abc", ">", "file0"]` must be converted into a string in the JSON array format. If this parameter is not required, you do not need to specify it.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The configurations of the ConfigMap.
   */
  configMapMountDesc?: DescribeApplicationConfigResponseBodyDataConfigMapMountDesc[];
  /**
   * @remarks
   * The CPU required by each instance. Unit: millicores. The value cannot be 0. The following specifications are supported:
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
   * The custom mapping between a domain name and an IP address in the container. Valid values:
   * 
   * - **hostName**: The domain name or hostname.
   * 
   * - **ip**: The IP address.
   * 
   * @example
   * [{"hostName":"test.host.name","ip":"0.0.0.0"}]
   */
  customHostAlias?: string;
  /**
   * @remarks
   * The type of the custom image. If you do not use a custom image, set this parameter to an empty string. Valid values:
   * 
   * - internet: a public image
   * 
   * - intranet: a private image
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
   * The disk storage size. Unit: GB.
   * 
   * @example
   * 20
   */
  diskSize?: number;
  /**
   * @remarks
   * The version of the .NET framework:
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
   * .NET 8.0
   */
  dotnet?: string;
  /**
   * @remarks
   * The version of the application runtime environment in the High-Speed Service Framework (HSF), such as an Ali-Tomcat container.
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
   * Specifies whether to enable Application High Availability Service (AHAS). Valid values:
   * 
   * - **true**: Enable AHAS.
   * 
   * - **false**: Disable AHAS.
   * 
   * @example
   * true
   */
  enableAhas?: string;
  /**
   * @remarks
   * Specifies whether to enable the CPU burst feature:
   * 
   * - true: Enable
   * 
   * - false: Disable
   * 
   * @example
   * true
   */
  enableCpuBurst?: string;
  /**
   * @remarks
   * Specifies whether to enable the canary release rule. This rule is applicable only to applications that use the Spring Cloud and Dubbo frameworks. Valid values:
   * 
   * - **true**: Enable the canary release rule.
   * 
   * - **false**: Disable the canary release rule.
   * 
   * @example
   * false
   */
  enableGreyTagRoute?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the idle mode:
   * 
   * - true: Enable
   * 
   * - false: Disable
   * 
   * @example
   * false
   */
  enableIdle?: boolean;
  /**
   * @remarks
   * Specifies whether to reuse the agent version configuration of the namespace.
   */
  enableNamespaceAgentVersion?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the new ARMS feature:
   * 
   * - true: Enable
   * 
   * - false: Disable
   * 
   * @example
   * false
   */
  enableNewArms?: boolean;
  /**
   * @remarks
   * Specifies whether to enable custom metric collection for Prometheus.
   */
  enablePrometheus?: boolean;
  /**
   * @remarks
   * The environment variables for the container. You can customize environment variables or reference a ConfigMap. To reference a ConfigMap, you must first create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * - Custom configuration
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable.
   * 
   * - Reference a configuration item
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, enter `sae-sys-configmap-all-<ConfigMap name>`, for example, `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The reference of the environment variable. Set the value to `configMapRef`.
   * 
   *   - **configMapId**: The ID of the ConfigMap.
   * 
   *   - **key**: The key. If you want to reference all keys, do not specify this parameter.
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
   * The GPU card type.
   */
  gpuType?: string;
  headlessPvtzDiscovery?: string;
  html?: string;
  idleHour?: string;
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
   * The URL of the image. This parameter is required when **Package Type** is set to **Image**.
   * 
   * @example
   * docker.io/library/nginx:1.14.2
   */
  imageUrl?: string;
  /**
   * @remarks
   * The configurations of the init container.
   */
  initContainersConfig?: DescribeApplicationConfigResponseBodyDataInitContainersConfig[];
  /**
   * @remarks
   * Specifies whether the application is a stateful application.
   */
  isStateful?: boolean;
  /**
   * @remarks
   * The arguments for starting the JAR package. The default startup command is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * start
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The options for starting the JAR package. The default startup command is: `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * -Dtest=true
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The version of the Java Development Kit (JDK) that the deployment package requires. The following versions are supported:
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
   * The configurations for collecting logs to Kafka. Valid values:
   * 
   * - **kafkaEndpoint**: The endpoint of the Kafka API.
   * 
   * - **kafkaInstanceId**: The ID of the Kafka instance.
   * 
   * - **kafkaConfigs**: The configurations of one or more logs. For more information about the example and parameters, see the **kafkaConfigs** request parameter in this topic.
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
   * The liveness probe of the container. A container that fails the health check is shut down and restored. The following methods are supported:
   * 
   * - **exec**: example: `{"exec":{"command":["sh","-c","cat/home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}`
   * 
   * - **httpGet**: example:`{"httpGet":{"path":"/","port":18091,"scheme":"HTTP","isContainKeyWord":true,"keyWord":"SAE"},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * - **tcpSocket**: example:`{"tcpSocket":{"port":18091},"initialDelaySeconds":11,"periodSeconds":10,"timeoutSeconds":1}`
   * 
   * > You can use only one method for a health check.
   * 
   * The parameters are described as follows:
   * 
   * - **exec.command**: The command that is used for the health check.
   * 
   * - **httpGet.path**: The request path.
   * 
   * - **httpGet.scheme**: **HTTP** or **HTTPS**.
   * 
   * - **httpGet.isContainKeyWord**: Specifies whether the response must contain a keyword. A value of **true** indicates that the response must contain the keyword. A value of **false** indicates that the response does not need to contain the keyword. If you do not specify this parameter, this advanced feature is not used.
   * 
   * - **httpGet.keyWord**: The custom keyword. This parameter is required if you set the **isContainKeyWord** parameter.
   * 
   * - **tcpSocket.port**: The port that is used for the TCP connection check.
   * 
   * - **initialDelaySeconds**: The delay for the health check. Default value: 10. Unit: seconds.
   * 
   * - **periodSeconds**: The interval for the health check. Default value: 30. Unit: seconds.
   * 
   * - **timeoutSeconds**: The timeout period for the health check. Default value: 1. Unit: seconds. If you set this parameter to 0 or do not specify this parameter, the default value is used.
   * 
   * @example
   * {"exec":{"command":["curl http://localhost:8080"]},"initialDelaySeconds":20,"timeoutSeconds":3}
   */
  liveness?: string;
  /**
   * @remarks
   * The Loki configurations.
   */
  lokiConfigs?: string;
  /**
   * @remarks
   * The maximum surge instance ratio.
   */
  maxSurgeInstanceRatio?: number;
  /**
   * @remarks
   * The maximum number of surge instances.
   */
  maxSurgeInstances?: number;
  /**
   * @remarks
   * The memory required by each instance. Unit: MB. The value cannot be 0. This parameter corresponds to the \\`Cpu\\` parameter. The following specifications are supported:
   * 
   * - **1024**: corresponds to 500 millicores and 1,000 millicores.
   * 
   * - **2048**: corresponds to 500, 1,000, and 2,000 millicores.
   * 
   * - **4096**: corresponds to 1,000, 2,000, and 4,000 millicores.
   * 
   * - **8192**: corresponds to 2,000, 4,000, and 8,000 millicores.
   * 
   * - **12288**: corresponds to 12,000 millicores.
   * 
   * - **16384**: corresponds to 4,000, 8,000, and 16,000 millicores.
   * 
   * - **24576**: corresponds to 12,000 millicores.
   * 
   * - **32768**: corresponds to 16,000 millicores.
   * 
   * - **65536**: corresponds to 8,000, 16,000, and 32,000 millicores.
   * 
   * - **131072**: corresponds to 32,000 millicores.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * The Nacos registry. Valid values:
   * 
   * - **0**: SAE built-in Nacos.
   * 
   * - **1**: User-created Nacos.
   * 
   * - **2**: MSE Nacos.
   * 
   * @example
   * "0"
   */
  microRegistration?: string;
  /**
   * @remarks
   * The configuration of the registry. This parameter takes effect only when the registry is MSE Nacos Enterprise Edition.
   * 
   * @example
   * {\\"instanceId\\":\\"mse-cn-1ls43******\\",\\"namespace\\":\\"62ee12fb-c279-4da4-be96-21**********\\"}
   */
  microRegistrationConfig?: string;
  /**
   * @remarks
   * The configurations of microservice governance.
   * 
   * - Specifies whether to enable microservice governance (enable):
   * 
   *   - true: Enable
   * 
   *   - false: Disable
   * 
   * - The configuration of graceful start and shutdown (mseLosslessRule):
   * 
   *   - delayTime: The delay time.
   * 
   *   - enable: Specifies whether to enable graceful start. true indicates that graceful start is enabled. false indicates that graceful start is not enabled.
   * 
   *   - notice: Specifies whether to enable notifications. true indicates that notifications are enabled. false indicates that notifications are not enabled.
   * 
   *   - warmupTime: The warm-up duration for a small amount of traffic. Unit: seconds.
   * 
   * @example
   * {\\"Enable\\":true,\\"MseLosslessRule\\":{\\"enable\\":true,\\"notice\\":true,\\"delayTime\\":10,\\"warmupTime\\":120,\\"funcType\\":2,\\"aligned\\":false,\\"related\\":false,\\"lossLessDetail\\":false}}
   */
  microserviceEngineConfig?: string;
  /**
   * @remarks
   * The percentage of the minimum number of ready instances. Valid values:
   * 
   * - -1: The default value. This value indicates that the percentage is not used. If you do not specify this parameter, the system uses the default value **-1**.
   * 
   * - **0 to 100**: The percentage of the minimum number of ready instances. The value is rounded up. For example, if you set this parameter to **50**%, and you have five instances, the minimum number of ready instances is 3.
   * 
   * > If you specify both \\`MinReadyInstances\\` and **MinReadyInstanceRatio**, and the value of **MinReadyInstanceRatio** is not **-1**, the value of **MinReadyInstanceRatio** takes precedence. For example, if **MinReadyInstances** is set to **5** and **MinReadyInstanceRatio** is set to **50**, the minimum number of ready instances is calculated based on the value of **MinReadyInstanceRatio**.
   * 
   * @example
   * -1
   */
  minReadyInstanceRatio?: number;
  /**
   * @remarks
   * The minimum number of ready instances. Valid values:
   * 
   * - If you set this parameter to **0**, the application may be interrupted during an upgrade.
   * 
   * - If you set this parameter to -1, the system uses a recommended value, which is 25% of the total number of instances. For example, if you have five instances, the minimum number of ready instances is 2 after the value is rounded up.
   * 
   * > We recommend that you set the minimum number of ready instances to a value of 1 or greater to ensure that the application is not interrupted during a rolling update.
   * 
   * @example
   * 1
   */
  minReadyInstances?: number;
  /**
   * @remarks
   * The mount description.
   */
  mountDesc?: DescribeApplicationConfigResponseBodyDataMountDesc[];
  /**
   * @remarks
   * The mount target of the Apsara File Storage NAS file system in the application VPC. If you do not change the NAS configuration during a deployment, you do not need to specify this parameter. If you want to clear the NAS configuration, set this parameter to an empty string ("").
   * 
   * @example
   * example.com
   */
  mountHost?: string;
  /**
   * @remarks
   * The ID of the application in Microservices Engine (MSE).
   * 
   * @example
   * xxxxxxx@xxxxx
   */
  mseApplicationId?: string;
  /**
   * @remarks
   * The name of the application after the SAE service is registered with MSE.
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
   * The configurations for mounting a NAS file system.
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
   * AKSN****
   */
  nasId?: string;
  /**
   * @remarks
   * The application version.
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
   * The RAM role for identity authentication.
   * 
   * > You must create an OpenID Connect (OIDC) identity provider (IdP) and a RAM role for the IdP in the same region beforehand. For more information, see [Create an OIDC IdP](https://help.aliyun.com/document_detail/2331022.html) and [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/2331016.html).
   * 
   * @example
   * sae-test
   */
  oidcRoleName?: string;
  /**
   * @remarks
   * The AccessKey ID that is used to read data from and write data to Object Storage Service (OSS).
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
   * The description of the OSS mount.
   */
  ossMountDescs?: DescribeApplicationConfigResponseBodyDataOssMountDescs[];
  /**
   * @remarks
   * The type of the application package. Valid values:
   * 
   * - If you deploy the application using Java, valid values are **FatJar**, **War**, and **Image**.
   * 
   * - If you deploy the application using PHP, the following values are supported:
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
   * @example
   * War
   */
  packageType?: string;
  /**
   * @remarks
   * The URL of the deployment package. If you upload the deployment package using SAE, note the following:
   * 
   * - You cannot download the package from this URL. Call the \\`GetPackageVersionAccessableUrl\\` operation to obtain a download URL that is valid for 10 minutes.
   * 
   * - SAE stores the package for a maximum of 90 days. After 90 days, the URL is not returned and you cannot download the package.
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
   * The PHP version required for the deployment package. This parameter is not supported for images.
   * 
   * @example
   * PHP-FPM 7.0
   */
  php?: string;
  /**
   * @remarks
   * The mount path of the Application Real-Time Monitoring Service (ARMS) configuration file for a PHP application. Make sure that the PHP server loads the configuration file from this path.
   * 
   * SAE automatically renders the correct configuration file. You do not need to manage the content of the configuration file.
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
   * The mount path of the PHP application startup configuration file. Make sure that the PHP server uses this configuration file to start.
   * 
   * @example
   * /usr/local/etc/php/php.ini
   */
  phpConfigLocation?: string;
  /**
   * @remarks
   * The script that runs after the container starts. The script runs immediately after the container is created. Example: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The script that runs before the container is stopped. The script runs before the container is deleted. Example: `{"exec":{"command":["cat","/etc/group"]}}`
   * 
   * @example
   * {"exec":{"command":["cat","/etc/group"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The programming language of the application. Valid values:
   * 
   * - **java**: Java
   * 
   * - **php**: PHP
   * 
   * - **other**: other languages, such as Python, C++, Go, .NET, and Node.js.
   * 
   * @example
   * java
   */
  programmingLanguage?: string;
  /**
   * @remarks
   * Enables service registration and discovery for a Kubernetes Service.
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
   * The dependencies for custom installation modules. By default, the dependencies that are defined in the requirements.txt file in the root directory are installed. If no software package is configured or a custom software package is used, you can specify the dependencies to be installed.
   * 
   * @example
   * Flask==2.0
   */
  pythonModules?: string;
  /**
   * @remarks
   * The readiness probe of the application. A container that fails the health check multiple times is shut down and restarted. A container that fails the health check does not receive traffic from a Server Load Balancer (SLB) instance. You can perform the health check using the **exec**, **httpGet**, or **tcpSocket** method. For more information, see the **Liveness** parameter.
   * 
   * > You can use only one method for a health check.
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
   * The description of the secret that you want to mount.
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
   * The canary release tags of the application configuration.
   */
  serviceTags?: { [key: string]: string };
  /**
   * @remarks
   * The configurations of the sidecar container.
   */
  sidecarContainersConfig?: DescribeApplicationConfigResponseBodyDataSidecarContainersConfig[];
  /**
   * @remarks
   * The configurations for collecting logs to Simple Log Service (SLS).
   * 
   * - To use an SLS resource that is automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - To use a custom SLS resource: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The parameters are described as follows:
   * 
   * - **projectName**: The name of the SLS project.
   * 
   * - **logDir**: The log path.
   * 
   * - **logType**: The log type. **stdout** indicates the standard output log of the container. You can specify only one log of this type. If you do not specify this parameter, file logs are collected.
   * 
   * - **logstoreName**: The name of the Logstore in SLS.
   * 
   * - **logtailName**: The name of the Logtail configuration in SLS. If you do not specify this parameter, a new Logtail configuration is created.
   * 
   * If you do not change the log collection configuration during a deployment, you do not need to specify this parameter. If you no longer need to use the log collection feature, set this parameter to an empty string ("") in the request.
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The environment tags for SLS logs.
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
   * The configuration for service registration and discovery based on a Kubernetes Service and for end-to-end canary release.
   * 
   * @example
   * {\\"enable\\":\\"false\\",\\"namespaceId\\":\\"cn-beijing:test\\",\\"portAndProtocol\\":{\\"2000:TCP\\":\\"18081\\"},\\"portProtocols\\":[{\\"port\\":2000,\\"protocol\\":\\"TCP\\",\\"targetPort\\":18081}],\\"pvtzDiscoveryName\\":\\"cn-beijing-1421801774382676\\",\\"serviceId\\":\\"3513\\",\\"serviceName\\":\\"demo-gray.test\\"}
   */
  swimlanePvtzDiscovery?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeApplicationConfigResponseBodyDataTags[];
  /**
   * @remarks
   * The timeout period for a graceful shutdown. Default value: 30. Unit: seconds. The value can range from 1 to 300.
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
   * The Tomcat configuration. To delete the configuration, set this parameter to "" or "{}".
   * 
   * - **port**: The port number. The port number can range from 1024 to 65535. A port number smaller than 1024 requires the root permission to be operated. Because the container is configured with the administrator permission, specify a port number that is greater than 1024. If you do not configure this parameter, the default port 8080 is used.
   * 
   * - **contextPath**: The access path. The default value is the root directory "/".
   * 
   * - **maxThreads**: The maximum number of connections in the connection pool. Default value: 400.
   * 
   * - **uriEncoding**: The URI encoding scheme of Tomcat. Valid values: **UTF-8**, **ISO-8859-1**, **GBK**, and **GB2312**. If you do not set this parameter, the default value **ISO-8859-1** is used.
   * 
   * - **useBodyEncoding**: Specifies whether to use **BodyEncoding for URL**. Default value: **true**.
   * 
   * @example
   * {"port":8080,"contextPath":"/","maxThreads":400,"uriEncoding":"ISO-8859-1","useBodyEncodingForUri":true}
   */
  tomcatConfig?: string;
  /**
   * @remarks
   * The deployment policy. If the minimum number of ready instances is 1, the value of the **UpdateStrategy** parameter is "". If the minimum number of ready instances is greater than 1, see the following examples:
   * 
   * - Canary release of one instance, phased release in two batches, automatic batching, and a 1-minute interval between batches: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}`
   * 
   * - Canary release of one instance and phased release in two batches with manual batching: `{"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"manual"},"grayUpdate":{"gray":1}}`
   * 
   * - Phased release in two batches, automatic batching, and a 0-minute interval between batches: `{"type":"BatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":0}}`
   * 
   * The parameters are described as follows:
   * 
   * - **type**: The type of the release policy. Valid values: **GrayBatchUpdate** (canary release) and **BatchUpdate** (phased release).
   * 
   * - **batchUpdate**: The phased release policy.
   * 
   *   - **batch**: The number of release batches.
   * 
   *   - **releaseType**: The processing method for batches. Valid values: **auto** and **manual**.
   * 
   *   - **batchWaitTime**: The interval between batches. Unit: seconds.
   * 
   * - **grayUpdate**: The number of batches for the remaining instances after the canary release. This parameter is required when **type** is set to **GrayBatchUpdate**.
   * 
   * @example
   * {"type":"GrayBatchUpdate","batchUpdate":{"batch":2,"releaseType":"auto","batchWaitTime":1},"grayUpdate":{"gray":1}}
   */
  updateStrategy?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
   * The options for starting the WAR package. The default startup command is: `java $JAVA_OPTS $CATALINA_OPTS -Options org.apache.catalina.startup.Bootstrap "$@" start`.
   * 
   * @example
   * custom-option
   */
  warStartOptions?: string;
  /**
   * @remarks
   * The Tomcat version that the deployment package requires. The following versions are supported:
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
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: The request is invalid.
   * 
   * - **5xx**: A server error occurs.
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
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - If the request fails, this parameter is returned. For more information, see the "Error codes" section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information that is returned.
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
   * Indicates whether the application configuration was retrieved. Valid values:
   * 
   * - **true**: The configuration was retrieved.
   * 
   * - **false**: The configuration failed to be retrieved.
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

