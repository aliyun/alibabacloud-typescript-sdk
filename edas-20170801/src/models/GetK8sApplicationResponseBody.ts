// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sApplicationResponseBodyApplcationAppCmdArgs extends $dara.Model {
  cmdArg?: string[];
  static names(): { [key: string]: string } {
    return {
      cmdArg: 'CmdArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdArg: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cmdArg)) {
      $dara.Model.validateArray(this.cmdArg);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationAppEnvListEnv extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class GetK8sApplicationResponseBodyApplcationAppEnvList extends $dara.Model {
  env?: GetK8sApplicationResponseBodyApplcationAppEnvListEnv[];
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: { 'type': 'array', 'itemType': GetK8sApplicationResponseBodyApplcationAppEnvListEnv },
    };
  }

  validate() {
    if(Array.isArray(this.env)) {
      $dara.Model.validateArray(this.env);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationApp extends $dara.Model {
  /**
   * @remarks
   * The annotations of the application pod.
   * 
   * @example
   * {"test-annokey":"test-annovalue"}
   */
  annotations?: string;
  /**
   * @remarks
   * The ID of the application. You can call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation to obtain the application ID.
   * 
   * @example
   * 00ee517d-dd7d-4d4e-****-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  applicationName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * War
   */
  applicationType?: string;
  /**
   * @remarks
   * The ID of the application build type.
   * 
   * @example
   * 57
   */
  buildpackId?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c37aec2a-bcca-4ec1-****-****
   */
  clusterId?: string;
  /**
   * @remarks
   * The startup command.
   * 
   * @example
   * ls
   */
  cmd?: string;
  cmdArgs?: GetK8sApplicationResponseBodyApplcationAppCmdArgs;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c383bc813c1974e****451b50c0c8****
   */
  csClusterId?: string;
  /**
   * @remarks
   * The deployment type. The value is Image.
   * 
   * @example
   * Image
   */
  deployType?: string;
  /**
   * @remarks
   * The application type:
   * 
   * - General: a native Java application.
   * 
   * - Pandora: a Pandora application.
   * 
   * - Multilingual: a multilingual application.
   * 
   * @example
   * General
   */
  developType?: string;
  /**
   * @remarks
   * The version of the EDAS container.
   * 
   * @example
   * 3.60.0
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Indicates whether empty-push protection is enabled for the application.
   * 
   * @example
   * true
   */
  enableEmptyPushReject?: boolean;
  /**
   * @remarks
   * Indicates whether graceful start is enabled for the application.
   * 
   * @example
   * true
   */
  enableLosslessRule?: boolean;
  envList?: GetK8sApplicationResponseBodyApplcationAppEnvList;
  /**
   * @remarks
   * The tags of advanced configurations for the current application. This parameter indicates the features that are enabled. Valid values:
   * 
   * - base.combination.edas: the EDAS integrated management solution.
   * 
   * - base.combination.arms: ARMS monitoring is enabled.
   * 
   * - base.combination.mse: MSE is enabled.
   * 
   * - base.combination.none: Only lifecycle management is enabled.
   * 
   * @example
   * base.combination.edas
   */
  featureAnnotations?: string;
  /**
   * @remarks
   * The number of application instances.
   * 
   * @example
   * 4
   */
  instances?: number;
  /**
   * @remarks
   * The number of application instances before the last scaling event.
   * 
   * @example
   * 10
   */
  instancesBeforeScaling?: number;
  /**
   * @remarks
   * The Kubernetes namespace.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The labels of the application pod.
   * 
   * @example
   * {"test-labelkey":"test-labelvalue"}
   */
  labels?: string;
  /**
   * @remarks
   * The CPU limit. Unit: millicores. 1,000 millicores are equal to one CPU core.
   * 
   * @example
   * 1000
   */
  limitCpuM?: number;
  /**
   * @remarks
   * The limit of ephemeral storage resources. Unit: GB. A value of 0 indicates that no limit is set.
   * 
   * @example
   * 4
   */
  limitEphemeralStorage?: string;
  /**
   * @remarks
   * The memory limit. Unit: MiB.
   * 
   * @example
   * 1024
   */
  limitMem?: number;
  /**
   * @remarks
   * Indicates whether the application, in graceful rolling deployment mode, is configured to complete service registration before it passes the readiness probe.
   * 
   * @example
   * true
   */
  losslessRuleAligned?: boolean;
  /**
   * @remarks
   * The duration of delayed service registration that is configured for the application. Unit: seconds.
   * 
   * @example
   * 120
   */
  losslessRuleDelayTime?: number;
  /**
   * @remarks
   * The service prefetch curve that is set for the application.
   * 
   * @example
   * 2
   */
  losslessRuleFuncType?: number;
  /**
   * @remarks
   * Indicates whether the application, in graceful rolling deployment mode, is configured to complete service prefetch before it passes the readiness probe.
   * 
   * @example
   * true
   */
  losslessRuleRelated?: boolean;
  /**
   * @remarks
   * The service prefetch duration that is set for the application. Unit: seconds.
   * 
   * @example
   * 120
   */
  losslessRuleWarmupTime?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested. Unit: millicores. 1,000 millicores are equal to one CPU core.
   * 
   * @example
   * 1000
   */
  requestCpuM?: number;
  /**
   * @remarks
   * The amount of ephemeral storage resources to reserve. Unit: GB. A value of 0 indicates that no limit is set.
   * 
   * @example
   * 2
   */
  requestEphemeralStorage?: string;
  /**
   * @remarks
   * The amount of memory that is reserved. Unit: MiB.
   * 
   * @example
   * 1024
   */
  requestMem?: number;
  /**
   * @remarks
   * The SecurityContext properties of the application pod container.
   * 
   * @example
   * {\\"runAsUser\\":0,\\"runAsGroup\\":0}
   */
  securityContext?: string;
  /**
   * @remarks
   * The SLB configurations.
   * 
   * @example
   * [
   *   {
   *     "addressType": "intranet",
   *     "externalTrafficPolicy": "Local",
   *     "ip": "192.168.254.***",
   *     "name": "intranet-testapp",
   *     "portMappings": [
   *       {
   *         "loadBalancerProtocol": "TCP",
   *         "servicePort": {
   *           "port": 8080,
   *           "protocol": "TCP",
   *           "targetPort": 18081,
   *           "vServerGroupName": "k8s/31414/intranet-testapp/default/cc90e0c9508a44667bdae2e83d3******"
   *         }
   *       }
   *     ],
   *     "scheduler": "rr",
   *     "serviceType": "LoadBalancer",
   *     "slbId": "lb-bp1ikoh3nrpgqsm******",
   *     "source": "create",
   *     "specification": "slb.s3.large"
   *   }
   * ]
   */
  slbInfo?: string;
  /**
   * @remarks
   * The version of Apache Tomcat.
   * 
   * @example
   * 8.5.55
   */
  tomcatVersion?: string;
  /**
   * @remarks
   * The type of the workload that is used to create the application. Valid values: Deployment and StatefulSet. If you leave this parameter empty, Deployment is used.
   * 
   * @example
   * Deployment
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      appId: 'AppId',
      applicationName: 'ApplicationName',
      applicationType: 'ApplicationType',
      buildpackId: 'BuildpackId',
      clusterId: 'ClusterId',
      cmd: 'Cmd',
      cmdArgs: 'CmdArgs',
      csClusterId: 'CsClusterId',
      deployType: 'DeployType',
      developType: 'DevelopType',
      edasContainerVersion: 'EdasContainerVersion',
      enableEmptyPushReject: 'EnableEmptyPushReject',
      enableLosslessRule: 'EnableLosslessRule',
      envList: 'EnvList',
      featureAnnotations: 'FeatureAnnotations',
      instances: 'Instances',
      instancesBeforeScaling: 'InstancesBeforeScaling',
      k8sNamespace: 'K8sNamespace',
      labels: 'Labels',
      limitCpuM: 'LimitCpuM',
      limitEphemeralStorage: 'LimitEphemeralStorage',
      limitMem: 'LimitMem',
      losslessRuleAligned: 'LosslessRuleAligned',
      losslessRuleDelayTime: 'LosslessRuleDelayTime',
      losslessRuleFuncType: 'LosslessRuleFuncType',
      losslessRuleRelated: 'LosslessRuleRelated',
      losslessRuleWarmupTime: 'LosslessRuleWarmupTime',
      regionId: 'RegionId',
      requestCpuM: 'RequestCpuM',
      requestEphemeralStorage: 'RequestEphemeralStorage',
      requestMem: 'RequestMem',
      securityContext: 'SecurityContext',
      slbInfo: 'SlbInfo',
      tomcatVersion: 'TomcatVersion',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      appId: 'string',
      applicationName: 'string',
      applicationType: 'string',
      buildpackId: 'number',
      clusterId: 'string',
      cmd: 'string',
      cmdArgs: GetK8sApplicationResponseBodyApplcationAppCmdArgs,
      csClusterId: 'string',
      deployType: 'string',
      developType: 'string',
      edasContainerVersion: 'string',
      enableEmptyPushReject: 'boolean',
      enableLosslessRule: 'boolean',
      envList: GetK8sApplicationResponseBodyApplcationAppEnvList,
      featureAnnotations: 'string',
      instances: 'number',
      instancesBeforeScaling: 'number',
      k8sNamespace: 'string',
      labels: 'string',
      limitCpuM: 'number',
      limitEphemeralStorage: 'string',
      limitMem: 'number',
      losslessRuleAligned: 'boolean',
      losslessRuleDelayTime: 'number',
      losslessRuleFuncType: 'number',
      losslessRuleRelated: 'boolean',
      losslessRuleWarmupTime: 'number',
      regionId: 'string',
      requestCpuM: 'number',
      requestEphemeralStorage: 'string',
      requestMem: 'number',
      securityContext: 'string',
      slbInfo: 'string',
      tomcatVersion: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    if(this.cmdArgs && typeof (this.cmdArgs as any).validate === 'function') {
      (this.cmdArgs as any).validate();
    }
    if(this.envList && typeof (this.envList as any).validate === 'function') {
      (this.envList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationConf extends $dara.Model {
  /**
   * @remarks
   * The pod affinity configuration.
   * 
   * @example
   * "{\\"nodeAffinity\\":{\\"requiredDuringSchedulingIgnoredDuringExecution\\":{\\"nodeSelectorTerms\\":[{\\"matchExpressions\\":[{\\"key\\":\\"beta.kubernetes.io/arch\\",\\"operator\\":\\"NotIn\\",\\"values\\":[\\"arm64\\",\\"arm32\\"]}]}]},\\"preferredDuringSchedulingIgnoredDuringExecution\\":[{\\"weight\\":5,\\"preference\\":{\\"matchExpressions\\":[{\\"key\\":\\"kubernetes.io/os\\",\\"operator\\":\\"In\\",\\"values\\":[\\"linux\\"]}]}}]},\\"podAffinity\\":{\\"requiredDuringSchedulingIgnoredDuringExecution\\":[{\\"labelSelector\\":{\\"matchExpressions\\":[{\\"key\\":\\"edas.oam.acname\\",\\"operator\\":\\"NotIn\\",\\"values\\":[\\"edas-test-app\\"]}]},\\"namespaces\\":[\\"default\\"],\\"topologyKey\\":\\"kubernetes.io/hostname\\"}]},\\"podAntiAffinity\\":{\\"preferredDuringSchedulingIgnoredDuringExecution\\":[{\\"weight\\":15,\\"podAffinityTerm\\":{\\"labelSelector\\":{\\"matchExpressions\\":[{\\"key\\":\\"edas.oam.acname\\",\\"operator\\":\\"In\\",\\"values\\":[\\"edas-test-app-2\\"]}]},\\"namespaces\\":[\\"default\\"],\\"topologyKey\\":\\"failure-domain.beta.kubernetes.io/zone\\"}}]}}"
   */
  affinity?: string;
  /**
   * @remarks
   * Indicates whether the application is connected to AHAS.
   * 
   * @example
   * true
   */
  ahasEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether to distribute application instances across multiple nodes:
   * 
   * - `true`: The application instances are distributed across multiple nodes.
   * 
   * - Other values: The application instances are not distributed across multiple nodes.
   * 
   * @example
   * true
   */
  deployAcrossNodes?: string;
  /**
   * @remarks
   * Indicates whether to distribute application instances across multiple zones:
   * 
   * - `true`: The application instances are distributed across multiple zones.
   * 
   * - Other values: The application instances are not distributed across multiple zones.
   * 
   * @example
   * true
   */
  deployAcrossZones?: string;
  /**
   * @remarks
   * The startup parameters of the JAR package. This parameter is deprecated.
   * 
   * @example
   * -lh
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options of the JAR package. This parameter is deprecated.
   * 
   * @example
   * -h
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The startup command.
   * 
   * @example
   * ls
   */
  k8sCmd?: string;
  /**
   * @remarks
   * The parameters of the startup command.
   * 
   * @example
   * -lh
   */
  k8sCmdArgs?: string;
  /**
   * @remarks
   * The local storage information.
   * 
   * @example
   * [{"type":"","nodePath":"/mnt/","mountPath":"/mnt/"}]
   */
  k8sLocalvolumeInfo?: string;
  /**
   * @remarks
   * The NAS storage information.
   * 
   * @example
   * [{"nasPath":"/mnt/","mountPath":"/mnt/"}]
   */
  k8sNasInfo?: string;
  /**
   * @remarks
   * The storage information.
   * 
   * @example
   * "{\\"hostPaths\\":\\"[]\\",\\"emptyDirs\\":\\"[]\\"}"
   */
  k8sVolumeInfo?: string;
  /**
   * @remarks
   * The information about the liveness probe of the Kubernetes container.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  liveness?: string;
  /**
   * @remarks
   * The information about the post-start execution of the Kubernetes container.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  postStart?: string;
  /**
   * @remarks
   * The information about the pre-stop execution of the Kubernetes container.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  preStop?: string;
  /**
   * @remarks
   * The information about the readiness probe of the Kubernetes container.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}\\]}}
   */
  readiness?: string;
  /**
   * @remarks
   * The pod runtime class. This parameter is applicable only to clusters that use sandboxed containers.
   * 
   * @example
   * runc
   */
  runtimeClassName?: string;
  /**
   * @remarks
   * The pod scheduling toleration configuration.
   * 
   * @example
   * "[{\\"key\\":\\"edas-taint-key2\\",\\"operator\\":\\"Exists\\",\\"effect\\":\\"NoExecute\\",\\"tolerationSeconds\\":50},{\\"key\\":\\"edas-taint-key\\",\\"operator\\":\\"Equal\\",\\"value\\":\\"edas-taint-value\\",\\"effect\\":\\"PreferNoSchedule\\"}]"
   */
  tolerations?: string;
  /**
   * @remarks
   * The URL of the base image. This parameter is configured when a custom OpenJDK runtime is used.
   * 
   * @example
   * openjdk:8u302
   */
  userBaseImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      ahasEnabled: 'AhasEnabled',
      deployAcrossNodes: 'DeployAcrossNodes',
      deployAcrossZones: 'DeployAcrossZones',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      k8sCmd: 'K8sCmd',
      k8sCmdArgs: 'K8sCmdArgs',
      k8sLocalvolumeInfo: 'K8sLocalvolumeInfo',
      k8sNasInfo: 'K8sNasInfo',
      k8sVolumeInfo: 'K8sVolumeInfo',
      liveness: 'Liveness',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      runtimeClassName: 'RuntimeClassName',
      tolerations: 'Tolerations',
      userBaseImageUrl: 'UserBaseImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      ahasEnabled: 'boolean',
      deployAcrossNodes: 'string',
      deployAcrossZones: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      k8sCmd: 'string',
      k8sCmdArgs: 'string',
      k8sLocalvolumeInfo: 'string',
      k8sNasInfo: 'string',
      k8sVolumeInfo: 'string',
      liveness: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      runtimeClassName: 'string',
      tolerations: 'string',
      userBaseImageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents extends $dara.Model {
  componentId?: string;
  componentKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentKey: 'ComponentKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentKey: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents extends $dara.Model {
  components?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents[];
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponentsComponents },
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroup extends $dara.Model {
  components?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents;
  env?: string;
  envFrom?: string;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      env: 'Env',
      envFrom: 'EnvFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents,
      env: 'string',
      envFrom: 'string',
    };
  }

  validate() {
    if(this.components && typeof (this.components as any).validate === 'function') {
      (this.components as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationDeployGroups extends $dara.Model {
  deployGroup?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroup[];
  static names(): { [key: string]: string } {
    return {
      deployGroup: 'DeployGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployGroup: { 'type': 'array', 'itemType': GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroup },
    };
  }

  validate() {
    if(Array.isArray(this.deployGroup)) {
      $dara.Model.validateArray(this.deployGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationImageInfo extends $dara.Model {
  /**
   * @remarks
   * The URL of the image.
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the region where the image is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * cn-hangzhou
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * 131****067006888_shared_repo
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * edas-server****-user
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The type of the source of the image repository.
   * 
   * @example
   * ALI_HUB
   */
  repoOriginType?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * 5a166fbd-9d76-4f98-****-781659d9f54c_1572485443282
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoOriginType: 'RepoOriginType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoOriginType: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcationLatestVersion extends $dara.Model {
  /**
   * @remarks
   * The version number of the deployment package.
   * 
   * @example
   * 20200720
   */
  packageVersion?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required for applications that are deployed using a FatJar or WAR package.
   * 
   * @example
   * https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar
   */
  url?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required for applications that are deployed using a FatJar or WAR package.
   * 
   * @example
   * https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar
   */
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      packageVersion: 'PackageVersion',
      url: 'Url',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageVersion: 'string',
      url: 'string',
      warUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBodyApplcation extends $dara.Model {
  /**
   * @remarks
   * The basic information about the application.
   */
  app?: GetK8sApplicationResponseBodyApplcationApp;
  /**
   * @remarks
   * The ID of the application. You can call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation to obtain the application ID.
   * 
   * @example
   * a5281053-****-47a5-b2ab-5c0323de****
   */
  appId?: string;
  /**
   * @remarks
   * The configuration information.
   */
  conf?: GetK8sApplicationResponseBodyApplcationConf;
  deployGroups?: GetK8sApplicationResponseBodyApplcationDeployGroups;
  /**
   * @remarks
   * The image information.
   */
  imageInfo?: GetK8sApplicationResponseBodyApplcationImageInfo;
  /**
   * @remarks
   * The information about the latest version.
   */
  latestVersion?: GetK8sApplicationResponseBodyApplcationLatestVersion;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      appId: 'AppId',
      conf: 'Conf',
      deployGroups: 'DeployGroups',
      imageInfo: 'ImageInfo',
      latestVersion: 'LatestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: GetK8sApplicationResponseBodyApplcationApp,
      appId: 'string',
      conf: GetK8sApplicationResponseBodyApplcationConf,
      deployGroups: GetK8sApplicationResponseBodyApplcationDeployGroups,
      imageInfo: GetK8sApplicationResponseBodyApplcationImageInfo,
      latestVersion: GetK8sApplicationResponseBodyApplcationLatestVersion,
    };
  }

  validate() {
    if(this.app && typeof (this.app as any).validate === 'function') {
      (this.app as any).validate();
    }
    if(this.conf && typeof (this.conf as any).validate === 'function') {
      (this.conf as any).validate();
    }
    if(this.deployGroups && typeof (this.deployGroups as any).validate === 'function') {
      (this.deployGroups as any).validate();
    }
    if(this.imageInfo && typeof (this.imageInfo as any).validate === 'function') {
      (this.imageInfo as any).validate();
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetK8sApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application information.
   */
  applcation?: GetK8sApplicationResponseBodyApplcation;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information.
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
   * 1053-08e4-47a5-b2ab-5c0323de7b5a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applcation: 'Applcation',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applcation: GetK8sApplicationResponseBodyApplcation,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.applcation && typeof (this.applcation as any).validate === 'function') {
      (this.applcation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

