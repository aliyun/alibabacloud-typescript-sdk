// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceInstanceCountInResource extends $dara.Model {
  dedicated?: number;
  public?: number;
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
   * The label key.
   * 
   * @example
   * key1
   */
  labelKey?: string;
  /**
   * @remarks
   * The label value.
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
   * The token that is used to access the service.
   * 
   * @example
   * MzJiMDI5MDliODc0MTlkYmI0ZDhlYmExYjczYTIyZTE3Zm********
   */
  accessToken?: string;
  /**
   * @remarks
   * The application service configuration.
   * 
   * @example
   * {"ModelStorage":"oss"}
   */
  appConfig?: string;
  /**
   * @remarks
   * The name of the application service specification.
   * 
   * @example
   * llama_7b_fp16
   */
  appSpecName?: string;
  /**
   * @remarks
   * The application service type.
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application service version.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  autoscalerEnabled?: boolean;
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account that is used to create the service.
   * 
   * @example
   * 20123*******
   */
  callerUid?: string;
  /**
   * @remarks
   * The number of CPU cores that you applied for each instance.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the service was created. The time is displayed in the UTC RFC3339 format.
   * 
   * @example
   * 2021-01-29T11:13:20Z
   */
  createTime?: string;
  cronscalerEnabled?: boolean;
  /**
   * @remarks
   * The version of the model that is running.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The additional information about the service.
   * 
   * @example
   * {\\"blue_green_services\\":[\\"test\\",\\"testxxxx\\"]}
   */
  extraData?: string;
  GPUCorePercentage?: number;
  GPUMemory?: number;
  /**
   * @remarks
   * The ID of the dedicated gateway for the service. This parameter is available only for services that are associated with dedicated gateways.
   * 
   * @example
   * gw-xxxxxx
   */
  gateway?: string;
  /**
   * @remarks
   * The number of GPUs that you applied for each instance.
   * 
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @remarks
   * The data image of the service.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/eas/echo_cn-shanghai:v0.0.1-20210129111320
   */
  image?: string;
  instanceCountInResource?: ServiceInstanceCountInResource;
  /**
   * @remarks
   * The public endpoint of the service. This parameter is returned only in the DescribeService API operation.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the service. This parameter is returned only in the DescribeService API operation.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The labels.
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
   * The memory size that you applied for each instance. Unit: MB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The service summary.
   * 
   * @example
   * Service start successfully
   */
  message?: string;
  /**
   * @remarks
   * The namespace in which the service resides.
   * 
   * @example
   * echo
   */
  namespace?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that is used to create the service.
   * 
   * @example
   * 11234*******
   */
  parentUid?: string;
  /**
   * @remarks
   * The number of instances for the pending service.
   * 
   * @example
   * 0
   */
  pendingInstance?: number;
  /**
   * @remarks
   * The quota ID for the service. This parameter is available only for services deployed by using Lingjun resource quotas.
   * 
   * @example
   * quotaxxxxx
   */
  quotaId?: string;
  /**
   * @remarks
   * The reason for which the service is in the current state.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  /**
   * @remarks
   * The region in which the service resides.
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
  resourceBurstable?: boolean;
  /**
   * @remarks
   * The service role.
   * 
   * @example
   * Queue
   */
  role?: string;
  /**
   * @remarks
   * The additional attributes of the service role. This parameter is returned only in the DescribeService API operation.
   * 
   * @example
   * "{\\"ApproxMaxLength\\":null,\\"Length\\":null,\\"MaxPayloadBytes\\":null}"
   */
  roleAttrs?: string;
  /**
   * @remarks
   * The number of instances for the running service.
   * 
   * @example
   * 1
   */
  runningInstance?: number;
  /**
   * @remarks
   * The security lock of the service.
   * 
   * Valid values:
   * 
   * *   all: forbids all operations.
   * *   dangerous: forbids the operation of deleting or stopping the service.
   * *   none: forbids no operations.
   * 
   * @example
   * dangerous
   */
  safetyLock?: string;
  /**
   * @remarks
   * The public endpoint that is used in the asynchronization request of the service. This parameter is returned only in the DescribeService API operation.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/async_path.echo
   */
  secondaryInternetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint that is used in the asynchronization request of the service. This parameter is returned only in the DescribeService API operation.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/async_path.echo
   */
  secondaryIntranetEndpoint?: string;
  /**
   * @remarks
   * The service configurations.
   * 
   * @example
   * {        "metadata": {             "cpu":1,             "instance":1,             "memory":1024           },         "name":"echo",         "processor_entry":"libecho.so",         "processor_path":"http://oss-cn-hangzhou-zmf.aliyuncs.com/059247/echo_processor_release.tar.gz",         "processor_type":"cpp"     }
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
   * The service name.
   * 
   * @example
   * echo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service ID. ServiceUid has the same meaning as ServiceId, and the values of the two parameters are the same.
   * 
   * @example
   * eas-m-xxasdat
   */
  serviceUid?: string;
  /**
   * @remarks
   * The source from which the service deployment request is initiated.
   * 
   * @example
   * dsw
   */
  source?: string;
  /**
   * @remarks
   * The service status.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Deploying
   * *   Stopped
   * *   Failed
   * *   Updating
   * *   Stopping
   * *   Waiting
   * *   HotUpdate
   * *   Starting
   * *   DeleteFailed
   * *   Running
   * *   Scaling
   * *   Pending
   * *   Deleting
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
   * The traffic state.
   * 
   * Valid values:
   * 
   * *   standalone: independent traffic.
   * *   grouping: grouped traffic.
   * 
   * @example
   * standalone
   */
  trafficState?: string;
  /**
   * @remarks
   * The time when the service was updated. The time is displayed in the UTC RFC3339 format.
   * 
   * @example
   * 2021-01-29T11:13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The weight of the service in canary release.
   * 
   * @example
   * 100
   */
  weight?: number;
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

