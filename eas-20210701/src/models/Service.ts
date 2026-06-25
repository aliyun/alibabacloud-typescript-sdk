// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceInstanceCountInResource extends $dara.Model {
  /**
   * @remarks
   * The number of instances that use dedicated or self-managed resource groups.
   * 
   * @example
   * 10
   */
  dedicated?: number;
  /**
   * @remarks
   * The number of instances that use public resource groups.
   * 
   * @example
   * 10
   */
  public?: number;
  /**
   * @remarks
   * The number of instances that use a Lingjun quota.
   * 
   * @example
   * 10
   */
  quota?: number;
  static names(): { [key: string]: string } {
    return {
      dedicated: 'Dedicated',
      public: 'Public',
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicated: 'number',
      public: 'number',
      quota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the service label.
   * 
   * @example
   * key1
   */
  labelKey?: string;
  /**
   * @remarks
   * The value of the service label.
   * 
   * @example
   * value1
   */
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $dara.Model {
  /**
   * @remarks
   * The access token for the service.
   * 
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  accessToken?: string;
  /**
   * @remarks
   * The application configuration for the service.
   * 
   * @example
   * {"ModelStorage":"oss"}
   */
  appConfig?: string;
  /**
   * @remarks
   * The application specification name for the service.
   * 
   * @example
   * llama_7b_fp16
   */
  appSpecName?: string;
  /**
   * @remarks
   * The application type of the service.
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application version of the service.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * Indicates whether auto scaling is enabled for the service.
   * 
   * @example
   * true
   */
  autoscalerEnabled?: boolean;
  /**
   * @remarks
   * The UID of the account that created the service.
   * 
   * @example
   * 20123*******
   */
  callerUid?: string;
  /**
   * @remarks
   * The number of CPU cores requested for each instance.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the service was created, in RFC 3339 format (UTC).
   * 
   * @example
   * 2021-01-29T11:13:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether scheduled scaling is enabled for the service.
   * 
   * @example
   * true
   */
  cronscalerEnabled?: boolean;
  /**
   * @remarks
   * The current version of the running model.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * Additional information about the service.
   * 
   * @example
   * {"blue_green_services":["test","testxxxx"]}
   */
  extraData?: string;
  /**
   * @remarks
   * The percentage of GPU computing power requested for each instance when GPU sharing is enabled.
   * 
   * @example
   * 50
   */
  GPUCorePercentage?: number;
  /**
   * @remarks
   * The amount of GPU memory requested for each instance when GPU sharing is enabled.
   * 
   * @example
   * 20
   */
  GPUMemory?: number;
  /**
   * @remarks
   * The ID of the dedicated gateway for the service. This field is returned only for services that are bound to a dedicated gateway.
   * 
   * @example
   * gw-xxxxxx
   */
  gateway?: string;
  /**
   * @remarks
   * The number of GPUs requested for each instance.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The image used by the service.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/eas/echo_cn-shanghai:v0.0.1-20210129111320
   */
  image?: string;
  /**
   * @remarks
   * A breakdown of the instance count by resource type.
   */
  instanceCountInResource?: ServiceInstanceCountInResource;
  /**
   * @remarks
   * The internet endpoint of the service. This field is returned only by the `DescribeService` operation.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The intranet endpoint of the service. This field is returned only by the `DescribeService` operation.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The labels of the service.
   */
  labels?: ServiceLabels[];
  /**
   * @remarks
   * The latest version of the service.
   * 
   * @example
   * 1
   */
  latestVersion?: number;
  /**
   * @remarks
   * The amount of memory requested for each instance, in MB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * A message that provides information about the service status.
   * 
   * @example
   * Service start successfully
   */
  message?: string;
  /**
   * @remarks
   * The namespace where the service is located.
   * 
   * @example
   * echo
   */
  namespace?: string;
  /**
   * @remarks
   * The UID of the primary account used to create the service.
   * 
   * @example
   * 11234*******
   */
  parentUid?: string;
  /**
   * @remarks
   * The number of pending instances for the service.
   * 
   * @example
   * 0
   */
  pendingInstance?: number;
  /**
   * @remarks
   * The quota ID of the service. This field is returned only for services that are deployed on a Lingjun resource quota.
   * 
   * @example
   * quotaxxxxx
   */
  quotaId?: string;
  /**
   * @remarks
   * The reason for the service status.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  /**
   * @remarks
   * The region where the service is deployed.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group to which the service belongs.
   * 
   * @example
   * eas-r-xxxxxxx
   */
  resource?: string;
  /**
   * @remarks
   * The alias of the resource group to which the service belongs.
   * 
   * @example
   * my_resource
   */
  resourceAlias?: string;
  /**
   * @remarks
   * Indicates whether a burstable resource pool is enabled for the service.
   * 
   * @example
   * true
   */
  resourceBurstable?: boolean;
  /**
   * @remarks
   * The role of the service.
   * 
   * @example
   * Queue
   */
  role?: string;
  /**
   * @remarks
   * Additional attributes of the service role. This field is returned only by the `DescribeService` operation.
   * 
   * @example
   * {"ApproxMaxLength":null,"Length":null,"MaxPayloadBytes":null}
   */
  roleAttrs?: string;
  /**
   * @remarks
   * The number of running instances of the service.
   * 
   * @example
   * 1
   */
  runningInstance?: number;
  /**
   * @remarks
   * The safety lock status of the service.
   * 
   * @example
   * dangerous
   */
  safetyLock?: string;
  /**
   * @remarks
   * The internet endpoint for synchronous requests to an asynchronous service. This field is returned only by the `DescribeService` operation.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/async_path.echo
   */
  secondaryInternetEndpoint?: string;
  /**
   * @remarks
   * The intranet endpoint for synchronous requests to an asynchronous service. This field is returned only by the `DescribeService` operation.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/async_path.echo
   */
  secondaryIntranetEndpoint?: string;
  /**
   * @remarks
   * The configuration of the service.
   * 
   * @example
   * {"metadata":{"cpu":1,"instance":1,"memory":1024},"name":"echo","processor_entry":"libecho.so","processor_path":"http://oss-cn-hangzhou-zmf.aliyuncs.com/059247/echo_processor_release.tar.gz","processor_type":"cpp"}
   */
  serviceConfig?: string;
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * my_group
   */
  serviceGroup?: string;
  /**
   * @remarks
   * The unique ID of the service.
   * 
   * @example
   * eas-m-xxasdat
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * echo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service ID. This value is the same as `ServiceId`.
   * 
   * @example
   * eas-m-xxasdat
   */
  serviceUid?: string;
  /**
   * @remarks
   * The deployment source of the service.
   * 
   * @example
   * dsw
   */
  source?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The total number of instances for the service.
   * 
   * @example
   * 1
   */
  totalInstance?: number;
  /**
   * @remarks
   * The traffic state of the service.
   * 
   * @example
   * standalone
   */
  trafficState?: string;
  /**
   * @remarks
   * The time when the service was last updated, in RFC 3339 format (UTC).
   * 
   * @example
   * 2021-01-29T11:13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The traffic weight for the canary release of the service.
   * 
   * @example
   * 100
   */
  weight?: number;
  workloadType?: string;
  /**
   * @remarks
   * The ID of the workspace to which the service belongs.
   * 
   * @example
   * 123445
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appConfig: 'AppConfig',
      appSpecName: 'AppSpecName',
      appType: 'AppType',
      appVersion: 'AppVersion',
      autoscalerEnabled: 'AutoscalerEnabled',
      callerUid: 'CallerUid',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      cronscalerEnabled: 'CronscalerEnabled',
      currentVersion: 'CurrentVersion',
      extraData: 'ExtraData',
      GPUCorePercentage: 'GPUCorePercentage',
      GPUMemory: 'GPUMemory',
      gateway: 'Gateway',
      gpu: 'Gpu',
      image: 'Image',
      instanceCountInResource: 'InstanceCountInResource',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      memory: 'Memory',
      message: 'Message',
      namespace: 'Namespace',
      parentUid: 'ParentUid',
      pendingInstance: 'PendingInstance',
      quotaId: 'QuotaId',
      reason: 'Reason',
      region: 'Region',
      requestId: 'RequestId',
      resource: 'Resource',
      resourceAlias: 'ResourceAlias',
      resourceBurstable: 'ResourceBurstable',
      role: 'Role',
      roleAttrs: 'RoleAttrs',
      runningInstance: 'RunningInstance',
      safetyLock: 'SafetyLock',
      secondaryInternetEndpoint: 'SecondaryInternetEndpoint',
      secondaryIntranetEndpoint: 'SecondaryIntranetEndpoint',
      serviceConfig: 'ServiceConfig',
      serviceGroup: 'ServiceGroup',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceUid: 'ServiceUid',
      source: 'Source',
      status: 'Status',
      totalInstance: 'TotalInstance',
      trafficState: 'TrafficState',
      updateTime: 'UpdateTime',
      weight: 'Weight',
      workloadType: 'WorkloadType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appConfig: 'string',
      appSpecName: 'string',
      appType: 'string',
      appVersion: 'string',
      autoscalerEnabled: 'boolean',
      callerUid: 'string',
      cpu: 'number',
      createTime: 'string',
      cronscalerEnabled: 'boolean',
      currentVersion: 'number',
      extraData: 'string',
      GPUCorePercentage: 'number',
      GPUMemory: 'number',
      gateway: 'string',
      gpu: 'number',
      image: 'string',
      instanceCountInResource: ServiceInstanceCountInResource,
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      labels: { 'type': 'array', 'itemType': ServiceLabels },
      latestVersion: 'number',
      memory: 'number',
      message: 'string',
      namespace: 'string',
      parentUid: 'string',
      pendingInstance: 'number',
      quotaId: 'string',
      reason: 'string',
      region: 'string',
      requestId: 'string',
      resource: 'string',
      resourceAlias: 'string',
      resourceBurstable: 'boolean',
      role: 'string',
      roleAttrs: 'string',
      runningInstance: 'number',
      safetyLock: 'string',
      secondaryInternetEndpoint: 'string',
      secondaryIntranetEndpoint: 'string',
      serviceConfig: 'string',
      serviceGroup: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceUid: 'string',
      source: 'string',
      status: 'string',
      totalInstance: 'number',
      trafficState: 'string',
      updateTime: 'string',
      weight: 'number',
      workloadType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.instanceCountInResource && typeof (this.instanceCountInResource as any).validate === 'function') {
      (this.instanceCountInResource as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

