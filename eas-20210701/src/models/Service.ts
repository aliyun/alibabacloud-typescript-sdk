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
  labelKey?: string;
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
  accessToken?: string;
  appConfig?: string;
  appSpecName?: string;
  appType?: string;
  appVersion?: string;
  autoscalerEnabled?: boolean;
  callerUid?: string;
  cpu?: number;
  createTime?: string;
  cronscalerEnabled?: boolean;
  currentVersion?: number;
  extraData?: string;
  GPUCorePercentage?: number;
  GPUMemory?: number;
  gateway?: string;
  gpu?: number;
  image?: string;
  instanceCountInResource?: ServiceInstanceCountInResource;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  labels?: ServiceLabels[];
  latestVersion?: number;
  memory?: number;
  message?: string;
  namespace?: string;
  parentUid?: string;
  pendingInstance?: number;
  quotaId?: string;
  reason?: string;
  region?: string;
  requestId?: string;
  resource?: string;
  resourceAlias?: string;
  resourceBurstable?: boolean;
  role?: string;
  roleAttrs?: string;
  runningInstance?: number;
  safetyLock?: string;
  secondaryInternetEndpoint?: string;
  secondaryIntranetEndpoint?: string;
  serviceConfig?: string;
  serviceGroup?: string;
  serviceId?: string;
  serviceName?: string;
  serviceUid?: string;
  source?: string;
  status?: string;
  totalInstance?: number;
  trafficState?: string;
  updateTime?: string;
  weight?: number;
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

