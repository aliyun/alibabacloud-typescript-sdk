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
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * @example
   * CATALINA_OPTS
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable.
   * 
   * @example
   * -Xmx 1024m -Dhsf.default.tid=false $(EDAS_CATALINA_OPTS)
   */
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
   * The annotation of an application pod.
   * 
   * @example
   * {"test-annokey":"test-annovalue"}
   */
  annotations?: string;
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
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
   * The type of the application.
   * 
   * @example
   * War
   */
  applicationType?: string;
  /**
   * @remarks
   * The build package number of Enterprise Distributed Application Service (EDAS) Container.
   * 
   * @example
   * 57
   */
  buildpackId?: number;
  /**
   * @remarks
   * The ID of the cluster.
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
  /**
   * @remarks
   * The list of commands.
   */
  cmdArgs?: GetK8sApplicationResponseBodyApplcationAppCmdArgs;
  /**
   * @remarks
   * The ID of the cluster to which the container belongs.
   * 
   * @example
   * c383bc813c1974e****451b50c0c8****
   */
  csClusterId?: string;
  /**
   * @remarks
   * The deployment type of the application. Example: Image.
   * 
   * @example
   * Image
   */
  deployType?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * *   General: native Java application
   * *   Pandora: Pandora application
   * *   Multilingual: multilingual application
   * 
   * @example
   * General
   */
  developType?: string;
  /**
   * @remarks
   * The version of EDAS Container.
   * 
   * @example
   * 3.60.0
   */
  edasContainerVersion?: string;
  /**
   * @remarks
   * Indicates whether the Empty List Protection feature is enabled for the application.
   * 
   * @example
   * true
   */
  enableEmptyPushReject?: boolean;
  /**
   * @remarks
   * Indicates whether the Graceful Release feature is enabled for the application.
   * 
   * @example
   * true
   */
  enableLosslessRule?: boolean;
  /**
   * @remarks
   * The list of environment variables.
   */
  envList?: GetK8sApplicationResponseBodyApplcationAppEnvList;
  /**
   * @remarks
   * The feature annotations. Possible values:
   * 
   * *   base.combination.edas: enables EDAS integrated management solution.
   * *   base.combination.arms: enables ARMS monitoring.
   * *   base.combination.mse: enables MSE microservices governance.
   * *   base.combination.none: enables lifecycle management.
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
   * The number of application instances before the last auto scaling operation.
   * 
   * @example
   * 10
   */
  instancesBeforeScaling?: number;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The label of an application pod.
   * 
   * @example
   * {"test-labelkey":"test-labelvalue"}
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of CPU cores allowed. Unit: millicores. 1,000 millicores equal one CPU core.
   * 
   * @example
   * 1000
   */
  limitCpuM?: number;
  /**
   * @remarks
   * The maximum size of space required by ephemeral storage. Unit: GB. Value 0 indicates that no limit is set on the space size.
   * 
   * @example
   * 4
   */
  limitEphemeralStorage?: string;
  /**
   * @remarks
   * The maximum size of the memory allowed. Unit: MiB.
   * 
   * @example
   * 1024
   */
  limitMem?: number;
  /**
   * @remarks
   * Indicates whether the Graceful Rolling Release and Configure Complete Service Registration before Readiness Probing feature is enabled for the application.
   * 
   * @example
   * true
   */
  losslessRuleAligned?: boolean;
  /**
   * @remarks
   * The delay of service registration. Unit: seconds.
   * 
   * @example
   * 120
   */
  losslessRuleDelayTime?: number;
  /**
   * @remarks
   * The number of prefetching curves.
   * 
   * @example
   * 2
   */
  losslessRuleFuncType?: number;
  /**
   * @remarks
   * Indicates whether the Graceful Rolling Release and Configure Complete Service Prefetching before Readiness Probing feature is enabled for the application.
   * 
   * @example
   * true
   */
  losslessRuleRelated?: boolean;
  /**
   * @remarks
   * The service prefetching duration. Unit: seconds.
   * 
   * @example
   * 120
   */
  losslessRuleWarmupTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of requested CPU cores. Unit: millicores. 1,000 millicores equal one CPU core.
   * 
   * @example
   * 1000
   */
  requestCpuM?: number;
  /**
   * @remarks
   * The size of space reserved for ephemeral storage resources. Unit: GB. Value 0 indicates that no limit is set on the space size.
   * 
   * @example
   * 2
   */
  requestEphemeralStorage?: string;
  /**
   * @remarks
   * The size of the reserved memory. Unit: MiB.
   * 
   * @example
   * 1024
   */
  requestMem?: number;
  securityContext?: string;
  /**
   * @remarks
   * The configuration information about the Server Load Balancer (SLB).
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
   * The workload type. Valid values: Deployment and StatefulSet. If you do not specify this parameter, Deployment is used.
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
   * The affinity configuration of the pod.
   * 
   * @example
   * "{\\"nodeAffinity\\":{\\"requiredDuringSchedulingIgnoredDuringExecution\\":{\\"nodeSelectorTerms\\":[{\\"matchExpressions\\":[{\\"key\\":\\"beta.kubernetes.io/arch\\",\\"operator\\":\\"NotIn\\",\\"values\\":[\\"arm64\\",\\"arm32\\"]}]}]},\\"preferredDuringSchedulingIgnoredDuringExecution\\":[{\\"weight\\":5,\\"preference\\":{\\"matchExpressions\\":[{\\"key\\":\\"kubernetes.io/os\\",\\"operator\\":\\"In\\",\\"values\\":[\\"linux\\"]}]}}]},\\"podAffinity\\":{\\"requiredDuringSchedulingIgnoredDuringExecution\\":[{\\"labelSelector\\":{\\"matchExpressions\\":[{\\"key\\":\\"edas.oam.acname\\",\\"operator\\":\\"NotIn\\",\\"values\\":[\\"edas-test-app\\"]}]},\\"namespaces\\":[\\"default\\"],\\"topologyKey\\":\\"kubernetes.io/hostname\\"}]},\\"podAntiAffinity\\":{\\"preferredDuringSchedulingIgnoredDuringExecution\\":[{\\"weight\\":15,\\"podAffinityTerm\\":{\\"labelSelector\\":{\\"matchExpressions\\":[{\\"key\\":\\"edas.oam.acname\\",\\"operator\\":\\"In\\",\\"values\\":[\\"edas-test-app-2\\"]}]},\\"namespaces\\":[\\"default\\"],\\"topologyKey\\":\\"failure-domain.beta.kubernetes.io/zone\\"}}]}}"
   */
  affinity?: string;
  /**
   * @remarks
   * Indicates whether the application is connected to Application High Availability Service (AHAS).
   * 
   * @example
   * true
   */
  ahasEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the application instances are deployed across nodes.
   * 
   * *   Value `true` indicates that the application instances are deployed across nodes.
   * *   Other values indicate that the application instances are not deployed across nodes.
   * 
   * @example
   * true
   */
  deployAcrossNodes?: string;
  /**
   * @remarks
   * Indicates whether the application instances are deployed across zones.
   * 
   * *   Value `true` indicates that the application instances are deployed across zones.
   * *   Other values indicate that the application instances are not deployed across zones.
   * 
   * @example
   * true
   */
  deployAcrossZones?: string;
  /**
   * @remarks
   * The startup parameters for a JAR application. This parameter is deprecated.
   * 
   * @example
   * -lh
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for a JAR application. This parameter is deprecated.
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
   * The information about the local storage.
   * 
   * @example
   * [{"type":"","nodePath":"/mnt/","mountPath":"/mnt/"}]
   */
  k8sLocalvolumeInfo?: string;
  /**
   * @remarks
   * The information about the File Storage NAS (NAS) storage.
   * 
   * @example
   * [{"nasPath":"/mnt/","mountPath":"/mnt/"}]
   */
  k8sNasInfo?: string;
  /**
   * @remarks
   * The information about the storage.
   * 
   * @example
   * "{\\"hostPaths\\":\\"[]\\",\\"emptyDirs\\":\\"[]\\"}"
   */
  k8sVolumeInfo?: string;
  /**
   * @remarks
   * The information about the liveness check on the container.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"tcpSocket":{"host":"", "port":8080}}
   */
  liveness?: string;
  /**
   * @remarks
   * The script executed after the container is started.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  postStart?: string;
  /**
   * @remarks
   * The script executed before the container is stopped.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"ls\\",\\"/\\"]}}"
   */
  preStop?: string;
  /**
   * @remarks
   * The information about the readiness check on the container.
   * 
   * @example
   * {"failureThreshold": 3,"initialDelaySeconds": 5,"successThreshold": 1,"timeoutSeconds": 1,"httpGet": {"path": "/consumer","port": 8080,"scheme": "HTTP","httpHeaders": [{"name": "test","value": "testvalue"}\\]}}
   */
  readiness?: string;
  /**
   * @remarks
   * The type of the container runtime. This parameter is applicable only to clusters that use sandboxed containers.
   * 
   * @example
   * runc
   */
  runtimeClassName?: string;
  /**
   * @remarks
   * The scheduling tolerance configuration of the pod.
   * 
   * @example
   * "[{\\"key\\":\\"edas-taint-key2\\",\\"operator\\":\\"Exists\\",\\"effect\\":\\"NoExecute\\",\\"tolerationSeconds\\":50},{\\"key\\":\\"edas-taint-key\\",\\"operator\\":\\"Equal\\",\\"value\\":\\"edas-taint-value\\",\\"effect\\":\\"PreferNoSchedule\\"}]"
   */
  tolerations?: string;
  /**
   * @remarks
   * The URL of the base image. If you use a custom Java Development Kit (JDK) runtime, you must specify this parameter.
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
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 5
   */
  componentId?: string;
  /**
   * @remarks
   * The keyword that is included in the component name.
   * 
   * @example
   * Open JDK 8
   */
  componentKey?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * @example
   * JDK
   */
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
  /**
   * @remarks
   * The information about the component.
   */
  components?: GetK8sApplicationResponseBodyApplcationDeployGroupsDeployGroupComponents;
  /**
   * @remarks
   * The environment variable. This parameter is different from the EnvList parameter. This parameter specifies the referenced configuration of the ConfigMap or Secret.
   * 
   * @example
   * "["{\\"name\\":\\"test1\\",\\"valueFrom\\":{\\"configMapKeyRef\\":{\\"name\\":\\"edas-demo-configmap\\",\\"key\\":\\"key1\\"}}}","{\\"name\\":\\"k2\\",\\"value\\":\\"v2\\"}","{\\"name\\":\\"s1\\",\\"valueFrom\\":{\\"secretKeyRef\\":{\\"name\\":\\"edas-demo-secret\\",\\"key\\":\\"k1\\"}}}"]"
   */
  env?: string;
  /**
   * @remarks
   * The source of the environment variable.
   * 
   * @example
   * [{"configMapRef":{"name":"test-cm"}}]
   */
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
   * The region ID of the image repository.
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
   * The namespace to which the image repository belongs.
   * 
   * @example
   * edas-server****-user
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The source type of the image repository.
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
   * The version of the deployment package.
   * 
   * @example
   * 20200720
   */
  packageVersion?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required if you use a FatJar or WAR package to deploy the application.
   * 
   * @example
   * https://e***.oss-cn-beijing.aliyuncs.com/s***-1.0-SNAPSHOT-spring-boot.jar
   */
  url?: string;
  /**
   * @remarks
   * The URL of the deployment package. This parameter is required if you use a FatJar or WAR package to deploy the application.
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
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * @example
   * a5281053-****-47a5-b2ab-5c0323de****
   */
  appId?: string;
  /**
   * @remarks
   * The configurations.
   */
  conf?: GetK8sApplicationResponseBodyApplcationConf;
  /**
   * @remarks
   * The information about the instance group in which the application is deployed.
   */
  deployGroups?: GetK8sApplicationResponseBodyApplcationDeployGroups;
  /**
   * @remarks
   * The information about the image.
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
   * The information about the application.
   */
  applcation?: GetK8sApplicationResponseBodyApplcation;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
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
   * The ID of the request.
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

