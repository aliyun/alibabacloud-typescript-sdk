// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddClusterServiceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  comment?: string;
  clusterId?: string;
  service?: AddClusterServiceRequestService[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      comment: 'Comment',
      clusterId: 'ClusterId',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      comment: 'string',
      clusterId: 'string',
      service: { 'type': 'array', 'itemType': AddClusterServiceRequestService },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterServiceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddClusterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddClusterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScalingConfigItemV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  configItemInformation?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
      configItemInformation: 'ConfigItemInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
      configItemInformation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScalingConfigItemV2ResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScalingConfigItemV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: AddScalingConfigItemV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddScalingConfigItemV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  bizType?: string;
  bizContent?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      bizType: 'BizType',
      bizContent: 'BizContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      bizType: 'string',
      bizContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AuthorizeSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AuthorizeSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanupFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityIdList?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityIdList: 'EntityIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanupFlowEntitySnapshotResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CleanupFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CleanupFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CleanupFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityType?: string;
  entityId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityType: 'EntityType',
      entityId: 'EntityId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityType: 'string',
      entityId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CommitFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CommitFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  backupPlanId?: string;
  metadataType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      backupPlanId: 'BackupPlanId',
      metadataType: 'MetadataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      backupPlanId: 'string',
      metadataType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $tea.Model {
  triggerType?: string;
  endTime?: number;
  requestId?: string;
  gmtModified?: number;
  startTime?: number;
  taskStatus?: string;
  taskDetail?: string;
  triggerUser?: string;
  gmtCreate?: number;
  taskProcess?: number;
  clusterBizId?: string;
  taskType?: string;
  bizId?: string;
  dataSourceId?: number;
  hostName?: string;
  ecmTaskId?: number;
  taskResultDetail?: string;
  static names(): { [key: string]: string } {
    return {
      triggerType: 'TriggerType',
      endTime: 'EndTime',
      requestId: 'RequestId',
      gmtModified: 'GmtModified',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
      taskDetail: 'TaskDetail',
      triggerUser: 'TriggerUser',
      gmtCreate: 'GmtCreate',
      taskProcess: 'TaskProcess',
      clusterBizId: 'ClusterBizId',
      taskType: 'TaskType',
      bizId: 'BizId',
      dataSourceId: 'DataSourceId',
      hostName: 'HostName',
      ecmTaskId: 'EcmTaskId',
      taskResultDetail: 'TaskResultDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerType: 'string',
      endTime: 'number',
      requestId: 'string',
      gmtModified: 'number',
      startTime: 'number',
      taskStatus: 'string',
      taskDetail: 'string',
      triggerUser: 'string',
      gmtCreate: 'number',
      taskProcess: 'number',
      clusterBizId: 'string',
      taskType: 'string',
      bizId: 'string',
      dataSourceId: 'number',
      hostName: 'string',
      ecmTaskId: 'number',
      taskResultDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  description?: string;
  clusterId?: string;
  rootPath?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      clusterId: 'ClusterId',
      rootPath: 'RootPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      description: 'string',
      clusterId: 'string',
      rootPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponseBody extends $tea.Model {
  rootPath?: string;
  description?: string;
  requestId?: string;
  clusterId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      rootPath: 'RootPath',
      description: 'Description',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootPath: 'string',
      description: 'string',
      requestId: 'string',
      clusterId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterBootstrapActionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  bootstrapAction?: CreateClusterBootstrapActionRequestBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      bootstrapAction: { 'type': 'array', 'itemType': CreateClusterBootstrapActionRequestBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterBootstrapActionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterBootstrapActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterBootstrapActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterBootstrapActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  templateName?: string;
  regionId?: string;
  zoneId?: string;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  securityGroupName?: string;
  period?: number;
  autoRenew?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  emrVer?: string;
  clusterType?: string;
  highAvailabilityEnable?: boolean;
  useLocalMetaDb?: boolean;
  ioOptimized?: boolean;
  sshEnable?: boolean;
  instanceGeneration?: string;
  masterPwd?: string;
  keyPairName?: string;
  metaStoreType?: string;
  metaStoreConf?: string;
  configurations?: string;
  easEnable?: boolean;
  depositType?: string;
  machineType?: string;
  useCustomHiveMetaDb?: boolean;
  initCustomHiveMetaDb?: boolean;
  resourceGroupId?: string;
  optionSoftWareList?: string[];
  hostGroup?: CreateClusterTemplateRequestHostGroup[];
  bootstrapAction?: CreateClusterTemplateRequestBootstrapAction[];
  config?: CreateClusterTemplateRequestConfig[];
  tag?: CreateClusterTemplateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      securityGroupName: 'SecurityGroupName',
      period: 'Period',
      autoRenew: 'AutoRenew',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      useLocalMetaDb: 'UseLocalMetaDb',
      ioOptimized: 'IoOptimized',
      sshEnable: 'SshEnable',
      instanceGeneration: 'InstanceGeneration',
      masterPwd: 'MasterPwd',
      keyPairName: 'KeyPairName',
      metaStoreType: 'MetaStoreType',
      metaStoreConf: 'MetaStoreConf',
      configurations: 'Configurations',
      easEnable: 'EasEnable',
      depositType: 'DepositType',
      machineType: 'MachineType',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      resourceGroupId: 'ResourceGroupId',
      optionSoftWareList: 'OptionSoftWareList',
      hostGroup: 'HostGroup',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      templateName: 'string',
      regionId: 'string',
      zoneId: 'string',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      securityGroupName: 'string',
      period: 'number',
      autoRenew: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      emrVer: 'string',
      clusterType: 'string',
      highAvailabilityEnable: 'boolean',
      useLocalMetaDb: 'boolean',
      ioOptimized: 'boolean',
      sshEnable: 'boolean',
      instanceGeneration: 'string',
      masterPwd: 'string',
      keyPairName: 'string',
      metaStoreType: 'string',
      metaStoreConf: 'string',
      configurations: 'string',
      easEnable: 'boolean',
      depositType: 'string',
      machineType: 'string',
      useCustomHiveMetaDb: 'boolean',
      initCustomHiveMetaDb: 'boolean',
      resourceGroupId: 'string',
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      hostGroup: { 'type': 'array', 'itemType': CreateClusterTemplateRequestHostGroup },
      bootstrapAction: { 'type': 'array', 'itemType': CreateClusterTemplateRequestBootstrapAction },
      config: { 'type': 'array', 'itemType': CreateClusterTemplateRequestConfig },
      tag: { 'type': 'array', 'itemType': CreateClusterTemplateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateResponseBody extends $tea.Model {
  requestId?: string;
  clusterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterTemplateId: 'ClusterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2Request extends $tea.Model {
  resourceOwnerId?: number;
  name?: string;
  regionId?: string;
  zoneId?: string;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  securityGroupName?: string;
  chargeType?: string;
  period?: number;
  autoRenew?: boolean;
  autoPayOrder?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  emrVer?: string;
  clusterType?: string;
  highAvailabilityEnable?: boolean;
  useLocalMetaDb?: boolean;
  ioOptimized?: boolean;
  sshEnable?: boolean;
  instanceGeneration?: string;
  masterPwd?: string;
  keyPairName?: string;
  metaStoreType?: string;
  metaStoreConf?: string;
  clickHouseConf?: string;
  extraAttributes?: string;
  depositType?: string;
  machineType?: string;
  useCustomHiveMetaDB?: boolean;
  initCustomHiveMetaDB?: boolean;
  configurations?: string;
  easEnable?: boolean;
  relatedClusterId?: string;
  whiteListType?: string;
  authorizeContent?: string;
  resourceGroupId?: string;
  optionSoftWareList?: string[];
  userInfo?: CreateClusterV2RequestUserInfo[];
  hostComponentInfo?: CreateClusterV2RequestHostComponentInfo[];
  serviceInfo?: CreateClusterV2RequestServiceInfo[];
  promotionInfo?: CreateClusterV2RequestPromotionInfo[];
  hostGroup?: CreateClusterV2RequestHostGroup[];
  bootstrapAction?: CreateClusterV2RequestBootstrapAction[];
  config?: CreateClusterV2RequestConfig[];
  tag?: CreateClusterV2RequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      securityGroupName: 'SecurityGroupName',
      chargeType: 'ChargeType',
      period: 'Period',
      autoRenew: 'AutoRenew',
      autoPayOrder: 'AutoPayOrder',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      useLocalMetaDb: 'UseLocalMetaDb',
      ioOptimized: 'IoOptimized',
      sshEnable: 'SshEnable',
      instanceGeneration: 'InstanceGeneration',
      masterPwd: 'MasterPwd',
      keyPairName: 'KeyPairName',
      metaStoreType: 'MetaStoreType',
      metaStoreConf: 'MetaStoreConf',
      clickHouseConf: 'ClickHouseConf',
      extraAttributes: 'ExtraAttributes',
      depositType: 'DepositType',
      machineType: 'MachineType',
      useCustomHiveMetaDB: 'UseCustomHiveMetaDB',
      initCustomHiveMetaDB: 'InitCustomHiveMetaDB',
      configurations: 'Configurations',
      easEnable: 'EasEnable',
      relatedClusterId: 'RelatedClusterId',
      whiteListType: 'WhiteListType',
      authorizeContent: 'AuthorizeContent',
      resourceGroupId: 'ResourceGroupId',
      optionSoftWareList: 'OptionSoftWareList',
      userInfo: 'UserInfo',
      hostComponentInfo: 'HostComponentInfo',
      serviceInfo: 'ServiceInfo',
      promotionInfo: 'PromotionInfo',
      hostGroup: 'HostGroup',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      name: 'string',
      regionId: 'string',
      zoneId: 'string',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      securityGroupName: 'string',
      chargeType: 'string',
      period: 'number',
      autoRenew: 'boolean',
      autoPayOrder: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      emrVer: 'string',
      clusterType: 'string',
      highAvailabilityEnable: 'boolean',
      useLocalMetaDb: 'boolean',
      ioOptimized: 'boolean',
      sshEnable: 'boolean',
      instanceGeneration: 'string',
      masterPwd: 'string',
      keyPairName: 'string',
      metaStoreType: 'string',
      metaStoreConf: 'string',
      clickHouseConf: 'string',
      extraAttributes: 'string',
      depositType: 'string',
      machineType: 'string',
      useCustomHiveMetaDB: 'boolean',
      initCustomHiveMetaDB: 'boolean',
      configurations: 'string',
      easEnable: 'boolean',
      relatedClusterId: 'string',
      whiteListType: 'string',
      authorizeContent: 'string',
      resourceGroupId: 'string',
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      userInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestUserInfo },
      hostComponentInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestHostComponentInfo },
      serviceInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestServiceInfo },
      promotionInfo: { 'type': 'array', 'itemType': CreateClusterV2RequestPromotionInfo },
      hostGroup: { 'type': 'array', 'itemType': CreateClusterV2RequestHostGroup },
      bootstrapAction: { 'type': 'array', 'itemType': CreateClusterV2RequestBootstrapAction },
      config: { 'type': 'array', 'itemType': CreateClusterV2RequestConfig },
      tag: { 'type': 'array', 'itemType': CreateClusterV2RequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2ResponseBody extends $tea.Model {
  masterOrderId?: string;
  coreOrderId?: string;
  requestId?: string;
  emrOrderId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      masterOrderId: 'MasterOrderId',
      coreOrderId: 'CoreOrderId',
      requestId: 'RequestId',
      emrOrderId: 'EmrOrderId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterOrderId: 'string',
      coreOrderId: 'string',
      requestId: 'string',
      emrOrderId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterWithTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  templateBizId?: string;
  uniqueTag?: string;
  clusterName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      templateBizId: 'TemplateBizId',
      uniqueTag: 'UniqueTag',
      clusterName: 'ClusterName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      templateBizId: 'string',
      uniqueTag: 'string',
      clusterName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterWithTemplateResponseBody extends $tea.Model {
  masterOrderId?: string;
  coreOrderId?: string;
  requestId?: string;
  emrOrderId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      masterOrderId: 'MasterOrderId',
      coreOrderId: 'CoreOrderId',
      requestId: 'RequestId',
      emrOrderId: 'EmrOrderId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      masterOrderId: 'string',
      coreOrderId: 'string',
      requestId: 'string',
      emrOrderId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterWithTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterWithTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterWithTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  sourceType?: string;
  description?: string;
  conf?: string;
  clusterId?: string;
  navParentId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      sourceType: 'SourceType',
      description: 'Description',
      conf: 'Conf',
      clusterId: 'ClusterId',
      navParentId: 'NavParentId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      sourceType: 'string',
      description: 'string',
      conf: 'string',
      clusterId: 'string',
      navParentId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutionPlanRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  strategy?: string;
  timeInterval?: number;
  startTime?: number;
  timeUnit?: string;
  dayOfWeek?: string;
  dayOfMonth?: string;
  clusterId?: string;
  createClusterOnDemand?: boolean;
  clusterName?: string;
  zoneId?: string;
  logEnable?: boolean;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  emrVer?: string;
  clusterType?: string;
  highAvailabilityEnable?: boolean;
  useLocalMetaDb?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  ioOptimized?: boolean;
  instanceGeneration?: string;
  useCustomHiveMetaDB?: boolean;
  initCustomHiveMetaDB?: boolean;
  configurations?: string;
  easEnable?: boolean;
  workflowDefinition?: string;
  jobIdList?: string[];
  optionSoftWareList?: string[];
  ecsOrder?: CreateExecutionPlanRequestEcsOrder[];
  bootstrapAction?: CreateExecutionPlanRequestBootstrapAction[];
  config?: CreateExecutionPlanRequestConfig[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      strategy: 'Strategy',
      timeInterval: 'TimeInterval',
      startTime: 'StartTime',
      timeUnit: 'TimeUnit',
      dayOfWeek: 'DayOfWeek',
      dayOfMonth: 'DayOfMonth',
      clusterId: 'ClusterId',
      createClusterOnDemand: 'CreateClusterOnDemand',
      clusterName: 'ClusterName',
      zoneId: 'ZoneId',
      logEnable: 'LogEnable',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      useLocalMetaDb: 'UseLocalMetaDb',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      ioOptimized: 'IoOptimized',
      instanceGeneration: 'InstanceGeneration',
      useCustomHiveMetaDB: 'UseCustomHiveMetaDB',
      initCustomHiveMetaDB: 'InitCustomHiveMetaDB',
      configurations: 'Configurations',
      easEnable: 'EasEnable',
      workflowDefinition: 'WorkflowDefinition',
      jobIdList: 'JobIdList',
      optionSoftWareList: 'OptionSoftWareList',
      ecsOrder: 'EcsOrder',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      strategy: 'string',
      timeInterval: 'number',
      startTime: 'number',
      timeUnit: 'string',
      dayOfWeek: 'string',
      dayOfMonth: 'string',
      clusterId: 'string',
      createClusterOnDemand: 'boolean',
      clusterName: 'string',
      zoneId: 'string',
      logEnable: 'boolean',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      emrVer: 'string',
      clusterType: 'string',
      highAvailabilityEnable: 'boolean',
      useLocalMetaDb: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      ioOptimized: 'boolean',
      instanceGeneration: 'string',
      useCustomHiveMetaDB: 'boolean',
      initCustomHiveMetaDB: 'boolean',
      configurations: 'string',
      easEnable: 'boolean',
      workflowDefinition: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'string' },
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      ecsOrder: { 'type': 'array', 'itemType': CreateExecutionPlanRequestEcsOrder },
      bootstrapAction: { 'type': 'array', 'itemType': CreateExecutionPlanRequestBootstrapAction },
      config: { 'type': 'array', 'itemType': CreateExecutionPlanRequestConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutionPlanResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutionPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExecutionPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExecutionPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  description?: string;
  startSchedule?: number;
  endSchedule?: number;
  cronExpr?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  logArchiveLocation?: string;
  lifecycle?: string;
  application?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpr: 'CronExpr',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      logArchiveLocation: 'LogArchiveLocation',
      lifecycle: 'Lifecycle',
      application: 'Application',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpr: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      logArchiveLocation: 'string',
      lifecycle: 'string',
      application: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  type?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      type: 'Type',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      type: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityId: 'EntityId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityId: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockResponseBody extends $tea.Model {
  status?: string;
  entityId?: string;
  requestId?: string;
  ownerId?: string;
  userId?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      entityId: 'EntityId',
      requestId: 'RequestId',
      ownerId: 'OwnerId',
      userId: 'UserId',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      entityId: 'string',
      requestId: 'string',
      ownerId: 'string',
      userId: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowEditLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowEditLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowEditLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowForWebRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  description?: string;
  startSchedule?: number;
  endSchedule?: number;
  cronExpr?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  logArchiveLocation?: string;
  lifecycle?: string;
  graph?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpr: 'CronExpr',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      logArchiveLocation: 'LogArchiveLocation',
      lifecycle: 'Lifecycle',
      graph: 'Graph',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpr: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      logArchiveLocation: 'string',
      lifecycle: 'string',
      graph: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowForWebResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowForWebResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowForWebResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowForWebResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  name?: string;
  description?: string;
  type?: string;
  failAct?: string;
  maxRetry?: number;
  retryPolicy?: string;
  maxRunningTimeSec?: number;
  retryInterval?: number;
  params?: string;
  paramConf?: string;
  customVariables?: string;
  envConf?: string;
  runConf?: string;
  monitorConf?: string;
  mode?: string;
  parentCategory?: string;
  adhoc?: boolean;
  clusterId?: string;
  alertConf?: string;
  resourceList?: CreateFlowJobRequestResourceList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      description: 'Description',
      type: 'Type',
      failAct: 'FailAct',
      maxRetry: 'MaxRetry',
      retryPolicy: 'RetryPolicy',
      maxRunningTimeSec: 'MaxRunningTimeSec',
      retryInterval: 'RetryInterval',
      params: 'Params',
      paramConf: 'ParamConf',
      customVariables: 'CustomVariables',
      envConf: 'EnvConf',
      runConf: 'RunConf',
      monitorConf: 'MonitorConf',
      mode: 'Mode',
      parentCategory: 'ParentCategory',
      adhoc: 'Adhoc',
      clusterId: 'ClusterId',
      alertConf: 'AlertConf',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      description: 'string',
      type: 'string',
      failAct: 'string',
      maxRetry: 'number',
      retryPolicy: 'string',
      maxRunningTimeSec: 'number',
      retryInterval: 'number',
      params: 'string',
      paramConf: 'string',
      customVariables: 'string',
      envConf: 'string',
      runConf: 'string',
      monitorConf: 'string',
      mode: 'string',
      parentCategory: 'string',
      adhoc: 'boolean',
      clusterId: 'string',
      alertConf: 'string',
      resourceList: { 'type': 'array', 'itemType': CreateFlowJobRequestResourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  name?: string;
  description?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  defaultUser?: string;
  defaultQueue?: string;
  userList?: string[];
  queueList?: string[];
  hostList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      defaultUser: 'DefaultUser',
      defaultQueue: 'DefaultQueue',
      userList: 'UserList',
      queueList: 'QueueList',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      defaultUser: 'string',
      defaultQueue: 'string',
      userList: { 'type': 'array', 'itemType': 'string' },
      queueList: { 'type': 'array', 'itemType': 'string' },
      hostList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  user?: CreateFlowProjectUserRequestUser[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      user: { 'type': 'array', 'itemType': CreateFlowProjectUserRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  resourceOwnerId?: number;
  name?: string;
  regionId?: string;
  type?: string;
  runParameter?: string;
  failAct?: string;
  maxRetry?: number;
  retryInterval?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
      runParameter: 'RunParameter',
      failAct: 'FailAct',
      maxRetry: 'MaxRetry',
      retryInterval: 'RetryInterval',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      name: 'string',
      regionId: 'string',
      type: 'string',
      runParameter: 'string',
      failAct: 'string',
      maxRetry: 'number',
      retryInterval: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  type?: string;
  name?: string;
  libraryVersion?: string;
  sourceType?: string;
  sourceLocation?: string;
  scope?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      type: 'Type',
      name: 'Name',
      libraryVersion: 'LibraryVersion',
      sourceType: 'SourceType',
      sourceLocation: 'SourceLocation',
      scope: 'Scope',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      type: 'string',
      name: 'string',
      libraryVersion: 'string',
      sourceType: 'string',
      sourceLocation: 'string',
      scope: 'string',
      properties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLibraryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLibraryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLibraryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaTablePreviewTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  databaseId?: string;
  tableId?: string;
  user?: string;
  password?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      databaseId: 'DatabaseId',
      tableId: 'TableId',
      user: 'User',
      password: 'Password',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      databaseId: 'string',
      tableId: 'string',
      user: 'string',
      password: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaTablePreviewTaskResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetaTablePreviewTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateMetaTablePreviewTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateMetaTablePreviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNoteRequest extends $tea.Model {
  resourceOwnerId?: number;
  name?: string;
  regionId?: string;
  type?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      name: 'string',
      regionId: 'string',
      type: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNoteResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  paragraph?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
      paragraph: 'Paragraph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
      paragraph: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParagraphRequest extends $tea.Model {
  resourceOwnerId?: number;
  noteId?: string;
  regionId?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      noteId: 'NoteId',
      regionId: 'RegionId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      noteId: 'string',
      regionId: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParagraphResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParagraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateParagraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateParagraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePoolRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  clusterId?: string;
  poolType?: string;
  active?: boolean;
  note?: string;
  yarnSiteConfig?: string;
  config?: CreateResourcePoolRequestConfig[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      clusterId: 'ClusterId',
      poolType: 'PoolType',
      active: 'Active',
      note: 'Note',
      yarnSiteConfig: 'YarnSiteConfig',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      clusterId: 'string',
      poolType: 'string',
      active: 'boolean',
      note: 'string',
      yarnSiteConfig: 'string',
      config: { 'type': 'array', 'itemType': CreateResourcePoolRequestConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePoolResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceQueueRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  name?: string;
  qualifiedName?: string;
  clusterId?: string;
  parentQueueId?: number;
  leaf?: boolean;
  resourcePoolId?: number;
  config?: CreateResourceQueueRequestConfig[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      name: 'Name',
      qualifiedName: 'QualifiedName',
      clusterId: 'ClusterId',
      parentQueueId: 'ParentQueueId',
      leaf: 'Leaf',
      resourcePoolId: 'ResourcePoolId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      name: 'string',
      qualifiedName: 'string',
      clusterId: 'string',
      parentQueueId: 'number',
      leaf: 'boolean',
      resourcePoolId: 'number',
      config: { 'type': 'array', 'itemType': CreateResourceQueueRequestConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceQueueResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourceQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  name?: string;
  description?: string;
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      name: 'Name',
      description: 'Description',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      name: 'string',
      description: 'string',
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupV2ResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingGroupV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScalingGroupV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScalingGroupV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  ruleCategory?: string;
  ruleName?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  cooldown?: number;
  launchTime?: string;
  launchExpirationTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  recurrenceEndTime?: string;
  withGrace?: boolean;
  timeoutWithGrace?: number;
  schedulerTrigger?: CreateScalingRuleRequestSchedulerTrigger[];
  cloudWatchTrigger?: CreateScalingRuleRequestCloudWatchTrigger[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      ruleCategory: 'RuleCategory',
      ruleName: 'RuleName',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      cooldown: 'Cooldown',
      launchTime: 'LaunchTime',
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      recurrenceEndTime: 'RecurrenceEndTime',
      withGrace: 'WithGrace',
      timeoutWithGrace: 'TimeoutWithGrace',
      schedulerTrigger: 'SchedulerTrigger',
      cloudWatchTrigger: 'CloudWatchTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      ruleCategory: 'string',
      ruleName: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      cooldown: 'number',
      launchTime: 'string',
      launchExpirationTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      recurrenceEndTime: 'string',
      withGrace: 'boolean',
      timeoutWithGrace: 'number',
      schedulerTrigger: { 'type': 'array', 'itemType': CreateScalingRuleRequestSchedulerTrigger },
      cloudWatchTrigger: { 'type': 'array', 'itemType': CreateScalingRuleRequestCloudWatchTrigger },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      category: 'Category',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'number',
      name: 'string',
      category: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  aliyunUserId?: string;
  userName?: string;
  userType?: string;
  status?: string;
  description?: string;
  roleIdList?: number[];
  groupIdList?: number[];
  userAccountParamList?: CreateUserRequestUserAccountParamList[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aliyunUserId: 'AliyunUserId',
      userName: 'UserName',
      userType: 'UserType',
      status: 'Status',
      description: 'Description',
      roleIdList: 'RoleIdList',
      groupIdList: 'GroupIdList',
      userAccountParamList: 'UserAccountParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      aliyunUserId: 'string',
      userName: 'string',
      userType: 'string',
      status: 'string',
      description: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      userAccountParamList: { 'type': 'array', 'itemType': CreateUserRequestUserAccountParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
  requestId?: string;
  paging?: boolean;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      paging: 'Paging',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      paging: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  userInfo?: CreateUsersRequestUserInfo[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      userInfo: { 'type': 'array', 'itemType': CreateUsersRequestUserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecommissionHostComponentRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostInstanceId?: string;
  serviceName?: string;
  componentName?: string;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostInstanceId: 'HostInstanceId',
      serviceName: 'ServiceName',
      componentName: 'ComponentName',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostInstanceId: 'string',
      serviceName: 'string',
      componentName: 'string',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecommissionHostComponentResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecommissionHostComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DecommissionHostComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DecommissionHostComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  bizId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bizId: 'BizId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      bizId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterTemplateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionPlanRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionPlanResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExecutionPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExecutionPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $tea.Model {
  id?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryRequest extends $tea.Model {
  id?: string;
  regionId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowEditLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowEditLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowEditLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobRequest extends $tea.Model {
  resourceOwnerId?: number;
  id?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      id: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  libraryBizIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      libraryBizIdList: 'LibraryBizIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      libraryBizIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibrariesResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNoteRequest extends $tea.Model {
  resourceOwnerId?: number;
  id?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      id: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNoteResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNoteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNoteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNoteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourcePoolRequest extends $tea.Model {
  resourceOwnerId?: number;
  resourcePoolId?: string;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolId: 'ResourcePoolId',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      resourcePoolId: 'string',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourcePoolResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceQueueRequest extends $tea.Model {
  resourceOwnerId?: number;
  resourceQueueId?: string;
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      resourceQueueId: 'ResourceQueueId',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      resourceQueueId: 'string',
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceQueueResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteResourceQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteResourceQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      category: 'Category',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'number',
      name: 'string',
      category: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  userId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      userId: 'UserId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      userId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBody extends $tea.Model {
  clusterInfo?: DescribeClusterBasicInfoResponseBodyClusterInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterBasicInfoResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterBasicInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterBasicInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMetaCollectRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMetaCollectResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  clusterId?: string;
  metaStoreType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      metaStoreType: 'MetaStoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
      clusterId: 'string',
      metaStoreType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMetaCollectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterMetaCollectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterMetaCollectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperationHostTaskLogRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  hostId?: string;
  taskId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      hostId: 'HostId',
      taskId: 'TaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      hostId: 'string',
      taskId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperationHostTaskLogResponseBody extends $tea.Model {
  stderr?: string;
  requestId?: string;
  stdout?: string;
  static names(): { [key: string]: string } {
    return {
      stderr: 'Stderr',
      requestId: 'RequestId',
      stdout: 'Stdout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stderr: 'string',
      requestId: 'string',
      stdout: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterOperationHostTaskLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterOperationHostTaskLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterOperationHostTaskLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcePoolSchedulerTypeRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcePoolSchedulerTypeResponseBody extends $tea.Model {
  requestId?: string;
  currentSchedulerType?: string;
  supportSchedulerType?: string;
  defaultSchedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      currentSchedulerType: 'CurrentSchedulerType',
      supportSchedulerType: 'SupportSchedulerType',
      defaultSchedulerType: 'DefaultSchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      currentSchedulerType: 'string',
      supportSchedulerType: 'string',
      defaultSchedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcePoolSchedulerTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterResourcePoolSchedulerTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterResourcePoolSchedulerTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBody extends $tea.Model {
  serviceInfo?: DescribeClusterServiceResponseBodyServiceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceInfo: 'ServiceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfo: DescribeClusterServiceResponseBodyServiceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  configVersion?: string;
  groupId?: string;
  hostInstanceId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      configVersion: 'ConfigVersion',
      groupId: 'GroupId',
      hostInstanceId: 'HostInstanceId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      configVersion: 'string',
      groupId: 'string',
      hostInstanceId: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBody extends $tea.Model {
  requestId?: string;
  config?: DescribeClusterServiceConfigResponseBodyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      config: DescribeClusterServiceConfigResponseBodyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  configVersion?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      configVersion: 'ConfigVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      configVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponseBody extends $tea.Model {
  requestId?: string;
  config?: DescribeClusterServiceConfigHistoryResponseBodyConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      config: DescribeClusterServiceConfigHistoryResponseBodyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterServiceConfigHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterServiceConfigHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  configTag?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      configTag: 'ConfigTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      configTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagResponseBody extends $tea.Model {
  configTagList?: DescribeClusterServiceConfigTagResponseBodyConfigTagList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configTagList: 'ConfigTagList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTagList: DescribeClusterServiceConfigTagResponseBodyConfigTagList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterServiceConfigTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterServiceConfigTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  bizId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      bizId: 'BizId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      bizId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBody extends $tea.Model {
  templateInfo?: DescribeClusterTemplateResponseBodyTemplateInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      templateInfo: 'TemplateInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateInfo: DescribeClusterTemplateResponseBodyTemplateInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBody extends $tea.Model {
  clusterInfo?: DescribeClusterV2ResponseBodyClusterInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterV2ResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceResponseBody extends $tea.Model {
  status?: string;
  categoryId?: string;
  description?: string;
  conf?: string;
  requestId?: string;
  clusterId?: string;
  sourceType?: string;
  gmtModified?: number;
  creator?: string;
  createFrom?: string;
  name?: string;
  gmtCreate?: number;
  id?: string;
  modifier?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      categoryId: 'CategoryId',
      description: 'Description',
      conf: 'Conf',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      sourceType: 'SourceType',
      gmtModified: 'GmtModified',
      creator: 'Creator',
      createFrom: 'CreateFrom',
      name: 'Name',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      modifier: 'Modifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      categoryId: 'string',
      description: 'string',
      conf: 'string',
      requestId: 'string',
      clusterId: 'string',
      sourceType: 'string',
      gmtModified: 'number',
      creator: 'string',
      createFrom: 'string',
      name: 'string',
      gmtCreate: 'number',
      id: 'string',
      modifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBody extends $tea.Model {
  status?: string;
  workflowApp?: string;
  dayOfWeek?: string;
  timeInterval?: number;
  requestId?: string;
  clusterId?: string;
  dayOfMonth?: string;
  executionPlanVersion?: number;
  startTime?: number;
  name?: string;
  jobInfoList?: DescribeExecutionPlanResponseBodyJobInfoList;
  clusterInfo?: DescribeExecutionPlanResponseBodyClusterInfo;
  timeUnit?: string;
  strategy?: string;
  clusterName?: string;
  id?: string;
  createClusterOnDemand?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      workflowApp: 'WorkflowApp',
      dayOfWeek: 'DayOfWeek',
      timeInterval: 'TimeInterval',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      dayOfMonth: 'DayOfMonth',
      executionPlanVersion: 'ExecutionPlanVersion',
      startTime: 'StartTime',
      name: 'Name',
      jobInfoList: 'JobInfoList',
      clusterInfo: 'ClusterInfo',
      timeUnit: 'TimeUnit',
      strategy: 'Strategy',
      clusterName: 'ClusterName',
      id: 'Id',
      createClusterOnDemand: 'CreateClusterOnDemand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      workflowApp: 'string',
      dayOfWeek: 'string',
      timeInterval: 'number',
      requestId: 'string',
      clusterId: 'string',
      dayOfMonth: 'string',
      executionPlanVersion: 'number',
      startTime: 'number',
      name: 'string',
      jobInfoList: DescribeExecutionPlanResponseBodyJobInfoList,
      clusterInfo: DescribeExecutionPlanResponseBodyClusterInfo,
      timeUnit: 'string',
      strategy: 'string',
      clusterName: 'string',
      id: 'string',
      createClusterOnDemand: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExecutionPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExecutionPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  categoryId?: string;
  description?: string;
  gmtModified?: number;
  periodic?: boolean;
  cronExpr?: string;
  alertDingDingGroupBizId?: string;
  name?: string;
  alertUserGroupBizId?: string;
  logArchiveLocation?: string;
  endSchedule?: number;
  hostName?: string;
  status?: string;
  startSchedule?: number;
  requestId?: string;
  clusterId?: string;
  lifecycle?: string;
  editLockDetail?: string;
  namespace?: string;
  type?: string;
  gmtCreate?: number;
  graph?: string;
  id?: string;
  application?: string;
  createCluster?: boolean;
  alertConf?: string;
  parentFlowList?: DescribeFlowResponseBodyParentFlowList;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      description: 'Description',
      gmtModified: 'GmtModified',
      periodic: 'Periodic',
      cronExpr: 'CronExpr',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      name: 'Name',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      logArchiveLocation: 'LogArchiveLocation',
      endSchedule: 'EndSchedule',
      hostName: 'HostName',
      status: 'Status',
      startSchedule: 'StartSchedule',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      lifecycle: 'Lifecycle',
      editLockDetail: 'EditLockDetail',
      namespace: 'Namespace',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      graph: 'Graph',
      id: 'Id',
      application: 'Application',
      createCluster: 'CreateCluster',
      alertConf: 'AlertConf',
      parentFlowList: 'ParentFlowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      description: 'string',
      gmtModified: 'number',
      periodic: 'boolean',
      cronExpr: 'string',
      alertDingDingGroupBizId: 'string',
      name: 'string',
      alertUserGroupBizId: 'string',
      logArchiveLocation: 'string',
      endSchedule: 'number',
      hostName: 'string',
      status: 'string',
      startSchedule: 'number',
      requestId: 'string',
      clusterId: 'string',
      lifecycle: 'string',
      editLockDetail: 'string',
      namespace: 'string',
      type: 'string',
      gmtCreate: 'number',
      graph: 'string',
      id: 'string',
      application: 'string',
      createCluster: 'boolean',
      alertConf: 'string',
      parentFlowList: DescribeFlowResponseBodyParentFlowList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAgentTokenRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterBizId?: string;
  innerIP?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterBizId: 'ClusterBizId',
      innerIP: 'InnerIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterBizId: 'string',
      innerIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAgentTokenResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAgentTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowAgentTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowAgentTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAgentUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterBizId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterBizId: 'ClusterBizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterBizId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAgentUserResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAgentUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowAgentUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowAgentUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryResponseBody extends $tea.Model {
  parentId?: string;
  objectType?: string;
  type?: string;
  gmtCreate?: number;
  requestId?: string;
  objectId?: string;
  projectId?: string;
  gmtModified?: number;
  categoryType?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      parentId: 'ParentId',
      objectType: 'ObjectType',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      objectId: 'ObjectId',
      projectId: 'ProjectId',
      gmtModified: 'GmtModified',
      categoryType: 'CategoryType',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentId: 'string',
      objectType: 'string',
      type: 'string',
      gmtCreate: 'number',
      requestId: 'string',
      objectId: 'string',
      projectId: 'string',
      gmtModified: 'number',
      categoryType: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  type?: string;
  mode?: string;
  keyword?: string;
  categoryId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      type: 'Type',
      mode: 'Mode',
      keyword: 'Keyword',
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      type: 'string',
      mode: 'string',
      keyword: 'string',
      categoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowCategoryTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowCategoryTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowCategoryTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  committerId?: string;
  entityType?: string;
  entityGroupId?: string;
  entityId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      committerId: 'CommitterId',
      entityType: 'EntityType',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      committerId: 'string',
      entityType: 'string',
      entityGroupId: 'string',
      entityId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowEntitySnapshotResponseBody extends $tea.Model {
  entityId?: string;
  entityType?: string;
  active?: boolean;
  gmtCreate?: number;
  requestId?: string;
  message?: string;
  revision?: string;
  userId?: string;
  data?: string;
  entityGroupId?: string;
  committerId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      active: 'Active',
      gmtCreate: 'GmtCreate',
      requestId: 'RequestId',
      message: 'Message',
      revision: 'Revision',
      userId: 'UserId',
      data: 'Data',
      entityGroupId: 'EntityGroupId',
      committerId: 'CommitterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      active: 'boolean',
      gmtCreate: 'number',
      requestId: 'string',
      message: 'string',
      revision: 'string',
      userId: 'string',
      data: 'string',
      entityGroupId: 'string',
      committerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBody extends $tea.Model {
  status?: string;
  hasNodeFailed?: boolean;
  endTime?: number;
  requestId?: string;
  clusterId?: string;
  lifecycle?: string;
  projectId?: string;
  gmtModified?: number;
  startTime?: number;
  duration?: number;
  namespace?: string;
  flowId?: string;
  gmtCreate?: number;
  graph?: string;
  scheduleTime?: number;
  flowName?: string;
  cronExpression?: string;
  logArchiveLocation?: string;
  id?: string;
  nodeInstance?: DescribeFlowInstanceResponseBodyNodeInstance;
  dependencyFlowList?: DescribeFlowInstanceResponseBodyDependencyFlowList;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hasNodeFailed: 'HasNodeFailed',
      endTime: 'EndTime',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      lifecycle: 'Lifecycle',
      projectId: 'ProjectId',
      gmtModified: 'GmtModified',
      startTime: 'StartTime',
      duration: 'Duration',
      namespace: 'Namespace',
      flowId: 'FlowId',
      gmtCreate: 'GmtCreate',
      graph: 'Graph',
      scheduleTime: 'ScheduleTime',
      flowName: 'FlowName',
      cronExpression: 'CronExpression',
      logArchiveLocation: 'LogArchiveLocation',
      id: 'Id',
      nodeInstance: 'NodeInstance',
      dependencyFlowList: 'DependencyFlowList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hasNodeFailed: 'boolean',
      endTime: 'number',
      requestId: 'string',
      clusterId: 'string',
      lifecycle: 'string',
      projectId: 'string',
      gmtModified: 'number',
      startTime: 'number',
      duration: 'number',
      namespace: 'string',
      flowId: 'string',
      gmtCreate: 'number',
      graph: 'string',
      scheduleTime: 'number',
      flowName: 'string',
      cronExpression: 'string',
      logArchiveLocation: 'string',
      id: 'string',
      nodeInstance: DescribeFlowInstanceResponseBodyNodeInstance,
      dependencyFlowList: DescribeFlowInstanceResponseBodyDependencyFlowList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBody extends $tea.Model {
  failAct?: string;
  categoryId?: string;
  description?: string;
  gmtModified?: number;
  name?: string;
  paramConf?: string;
  mode?: string;
  adhoc?: string;
  requestId?: string;
  lastInstanceId?: string;
  params?: string;
  maxRetry?: number;
  maxRunningTimeSec?: number;
  editLockDetail?: string;
  type?: string;
  gmtCreate?: number;
  resourceList?: DescribeFlowJobResponseBodyResourceList;
  envConf?: string;
  monitorConf?: string;
  retryInterval?: number;
  runConf?: string;
  id?: string;
  retryPolicy?: string;
  customVariables?: string;
  alertConf?: string;
  static names(): { [key: string]: string } {
    return {
      failAct: 'FailAct',
      categoryId: 'CategoryId',
      description: 'Description',
      gmtModified: 'GmtModified',
      name: 'Name',
      paramConf: 'ParamConf',
      mode: 'mode',
      adhoc: 'Adhoc',
      requestId: 'RequestId',
      lastInstanceId: 'LastInstanceId',
      params: 'Params',
      maxRetry: 'MaxRetry',
      maxRunningTimeSec: 'MaxRunningTimeSec',
      editLockDetail: 'EditLockDetail',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      resourceList: 'ResourceList',
      envConf: 'EnvConf',
      monitorConf: 'MonitorConf',
      retryInterval: 'RetryInterval',
      runConf: 'RunConf',
      id: 'Id',
      retryPolicy: 'RetryPolicy',
      customVariables: 'CustomVariables',
      alertConf: 'AlertConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failAct: 'string',
      categoryId: 'string',
      description: 'string',
      gmtModified: 'number',
      name: 'string',
      paramConf: 'string',
      mode: 'string',
      adhoc: 'string',
      requestId: 'string',
      lastInstanceId: 'string',
      params: 'string',
      maxRetry: 'number',
      maxRunningTimeSec: 'number',
      editLockDetail: 'string',
      type: 'string',
      gmtCreate: 'number',
      resourceList: DescribeFlowJobResponseBodyResourceList,
      envConf: 'string',
      monitorConf: 'string',
      retryInterval: 'number',
      runConf: 'string',
      id: 'string',
      retryPolicy: 'string',
      customVariables: 'string',
      alertConf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceRequest extends $tea.Model {
  projectId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceResponseBody extends $tea.Model {
  failAct?: string;
  endTime?: number;
  nodeName?: string;
  gmtModified?: number;
  jobName?: string;
  externalStatus?: string;
  paramConf?: string;
  flowId?: string;
  externalInfo?: string;
  retries?: number;
  clusterName?: string;
  adhoc?: boolean;
  jobParams?: string;
  hostName?: string;
  jobId?: string;
  status?: string;
  requestId?: string;
  clusterId?: string;
  mode?: string;
  externalId?: string;
  projectId?: string;
  startTime?: number;
  flowInstanceId?: string;
  duration?: number;
  maxRetry?: string;
  externalSubId?: string;
  type?: string;
  gmtCreate?: number;
  envConf?: string;
  jobType?: string;
  externalChildIds?: string;
  monitorConf?: string;
  retryInterval?: string;
  runConf?: string;
  id?: string;
  retryPolicy?: string;
  pending?: boolean;
  static names(): { [key: string]: string } {
    return {
      failAct: 'FailAct',
      endTime: 'EndTime',
      nodeName: 'NodeName',
      gmtModified: 'GmtModified',
      jobName: 'JobName',
      externalStatus: 'ExternalStatus',
      paramConf: 'ParamConf',
      flowId: 'FlowId',
      externalInfo: 'ExternalInfo',
      retries: 'Retries',
      clusterName: 'ClusterName',
      adhoc: 'Adhoc',
      jobParams: 'JobParams',
      hostName: 'HostName',
      jobId: 'JobId',
      status: 'Status',
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      mode: 'Mode',
      externalId: 'ExternalId',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      flowInstanceId: 'FlowInstanceId',
      duration: 'Duration',
      maxRetry: 'MaxRetry',
      externalSubId: 'ExternalSubId',
      type: 'Type',
      gmtCreate: 'GmtCreate',
      envConf: 'EnvConf',
      jobType: 'JobType',
      externalChildIds: 'ExternalChildIds',
      monitorConf: 'MonitorConf',
      retryInterval: 'RetryInterval',
      runConf: 'RunConf',
      id: 'Id',
      retryPolicy: 'RetryPolicy',
      pending: 'Pending',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failAct: 'string',
      endTime: 'number',
      nodeName: 'string',
      gmtModified: 'number',
      jobName: 'string',
      externalStatus: 'string',
      paramConf: 'string',
      flowId: 'string',
      externalInfo: 'string',
      retries: 'number',
      clusterName: 'string',
      adhoc: 'boolean',
      jobParams: 'string',
      hostName: 'string',
      jobId: 'string',
      status: 'string',
      requestId: 'string',
      clusterId: 'string',
      mode: 'string',
      externalId: 'string',
      projectId: 'string',
      startTime: 'number',
      flowInstanceId: 'string',
      duration: 'number',
      maxRetry: 'string',
      externalSubId: 'string',
      type: 'string',
      gmtCreate: 'number',
      envConf: 'string',
      jobType: 'string',
      externalChildIds: 'string',
      monitorConf: 'string',
      retryInterval: 'string',
      runConf: 'string',
      id: 'string',
      retryPolicy: 'string',
      pending: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogRequest extends $tea.Model {
  offset?: number;
  length?: number;
  nodeInstanceId?: string;
  appId?: string;
  containerId?: string;
  logName?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      length: 'Length',
      nodeInstanceId: 'NodeInstanceId',
      appId: 'AppId',
      containerId: 'ContainerId',
      logName: 'LogName',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      length: 'number',
      nodeInstanceId: 'string',
      appId: 'string',
      containerId: 'string',
      logName: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBody extends $tea.Model {
  requestId?: string;
  logEnd?: boolean;
  logEntrys?: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logEnd: 'LogEnd',
      logEntrys: 'LogEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logEnd: 'boolean',
      logEntrys: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceContainerLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceContainerLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogRequest extends $tea.Model {
  start?: number;
  lines?: number;
  offset?: number;
  length?: number;
  reverse?: boolean;
  startTime?: number;
  endTime?: number;
  nodeInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      lines: 'Lines',
      offset: 'Offset',
      length: 'Length',
      reverse: 'Reverse',
      startTime: 'StartTime',
      endTime: 'EndTime',
      nodeInstanceId: 'NodeInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'number',
      lines: 'number',
      offset: 'number',
      length: 'number',
      reverse: 'boolean',
      startTime: 'number',
      endTime: 'number',
      nodeInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBody extends $tea.Model {
  requestId?: string;
  logEnd?: boolean;
  logEntrys?: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      logEnd: 'LogEnd',
      logEntrys: 'LogEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      logEnd: 'boolean',
      logEntrys: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowNodeInstanceLauncherLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowNodeInstanceLauncherLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectResponseBody extends $tea.Model {
  gmtCreate?: number;
  description?: string;
  requestId?: string;
  userId?: string;
  gmtModified?: number;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      description: 'Description',
      requestId: 'RequestId',
      userId: 'UserId',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      description: 'string',
      requestId: 'string',
      userId: 'string',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBody extends $tea.Model {
  gmtCreate?: number;
  defaultUser?: string;
  requestId?: string;
  defaultQueue?: string;
  clusterId?: string;
  projectId?: string;
  gmtModified?: number;
  hostList?: DescribeFlowProjectClusterSettingResponseBodyHostList;
  userList?: DescribeFlowProjectClusterSettingResponseBodyUserList;
  k8sClusterId?: string;
  queueList?: DescribeFlowProjectClusterSettingResponseBodyQueueList;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      defaultUser: 'DefaultUser',
      requestId: 'RequestId',
      defaultQueue: 'DefaultQueue',
      clusterId: 'ClusterId',
      projectId: 'ProjectId',
      gmtModified: 'GmtModified',
      hostList: 'HostList',
      userList: 'UserList',
      k8sClusterId: 'K8sClusterId',
      queueList: 'QueueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      defaultUser: 'string',
      requestId: 'string',
      defaultQueue: 'string',
      clusterId: 'string',
      projectId: 'string',
      gmtModified: 'number',
      hostList: DescribeFlowProjectClusterSettingResponseBodyHostList,
      userList: DescribeFlowProjectClusterSettingResponseBodyUserList,
      k8sClusterId: 'string',
      queueList: DescribeFlowProjectClusterSettingResponseBodyQueueList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobRequest extends $tea.Model {
  resourceOwnerId?: number;
  id?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      id: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBody extends $tea.Model {
  failAct?: string;
  type?: string;
  runParameter?: string;
  requestId?: string;
  retryInterval?: number;
  id?: string;
  maxRetry?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      failAct: 'FailAct',
      type: 'Type',
      runParameter: 'RunParameter',
      requestId: 'RequestId',
      retryInterval: 'RetryInterval',
      id: 'Id',
      maxRetry: 'MaxRetry',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failAct: 'string',
      type: 'string',
      runParameter: 'string',
      requestId: 'string',
      retryInterval: 'number',
      id: 'string',
      maxRetry: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryDetailRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  libraryBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      libraryBizId: 'LibraryBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      libraryBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryDetailResponseBody extends $tea.Model {
  sourceLocation?: string;
  type?: string;
  requestId?: string;
  scope?: string;
  userId?: string;
  createTime?: number;
  sourceType?: string;
  libraryVersion?: string;
  properties?: string;
  bizId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      sourceLocation: 'SourceLocation',
      type: 'Type',
      requestId: 'RequestId',
      scope: 'Scope',
      userId: 'UserId',
      createTime: 'CreateTime',
      sourceType: 'SourceType',
      libraryVersion: 'LibraryVersion',
      properties: 'Properties',
      bizId: 'BizId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceLocation: 'string',
      type: 'string',
      requestId: 'string',
      scope: 'string',
      userId: 'string',
      createTime: 'number',
      sourceType: 'string',
      libraryVersion: 'string',
      properties: 'string',
      bizId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLibraryDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLibraryDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryInstallTaskDetailRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  taskBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      taskBizId: 'TaskBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      taskBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryInstallTaskDetailResponseBody extends $tea.Model {
  taskId?: string;
  endTime?: number;
  requestId?: string;
  taskGroupId?: string;
  executeTime?: number;
  hostname?: string;
  startTime?: number;
  taskStatus?: string;
  libraryBizId?: string;
  taskProcess?: number;
  clusterBizId?: string;
  taskType?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      endTime: 'EndTime',
      requestId: 'RequestId',
      taskGroupId: 'TaskGroupId',
      executeTime: 'ExecuteTime',
      hostname: 'Hostname',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
      libraryBizId: 'LibraryBizId',
      taskProcess: 'TaskProcess',
      clusterBizId: 'ClusterBizId',
      taskType: 'TaskType',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      endTime: 'number',
      requestId: 'string',
      taskGroupId: 'string',
      executeTime: 'number',
      hostname: 'string',
      startTime: 'number',
      taskStatus: 'string',
      libraryBizId: 'string',
      taskProcess: 'number',
      clusterBizId: 'string',
      taskType: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLibraryInstallTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLibraryInstallTaskDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLibraryInstallTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  taskId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      taskId: 'TaskId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      taskId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBody extends $tea.Model {
  taskId?: string;
  endTime?: number;
  requestId?: string;
  taskProcess?: number;
  executeTime?: number;
  startTime?: number;
  data?: DescribeMetaTablePreviewTaskResponseBodyData;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      endTime: 'EndTime',
      requestId: 'RequestId',
      taskProcess: 'TaskProcess',
      executeTime: 'ExecuteTime',
      startTime: 'StartTime',
      data: 'Data',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      endTime: 'number',
      requestId: 'string',
      taskProcess: 'number',
      executeTime: 'number',
      startTime: 'number',
      data: DescribeMetaTablePreviewTaskResponseBodyData,
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetaTablePreviewTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetaTablePreviewTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      scalingActivityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityResponseBody extends $tea.Model {
  status?: string;
  description?: string;
  endTime?: number;
  requestId?: string;
  expectNum?: number;
  cause?: string;
  startTime?: number;
  scalingRuleId?: string;
  transition?: string;
  totalCapacity?: number;
  instanceIds?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      endTime: 'EndTime',
      requestId: 'RequestId',
      expectNum: 'ExpectNum',
      cause: 'Cause',
      startTime: 'StartTime',
      scalingRuleId: 'ScalingRuleId',
      transition: 'Transition',
      totalCapacity: 'TotalCapacity',
      instanceIds: 'InstanceIds',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      endTime: 'number',
      requestId: 'string',
      expectNum: 'number',
      cause: 'string',
      startTime: 'number',
      scalingRuleId: 'string',
      transition: 'string',
      totalCapacity: 'number',
      instanceIds: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingActivityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingActivityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingActivityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingCommonConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingCommonConfigResponseBody extends $tea.Model {
  autoScalingHookHeartbeatDefaultTime?: number;
  autoScalingRuleAlarmDelayLimit?: number;
  requestId?: string;
  autoScalingGroupMaxSizeLimit?: number;
  autoScalingMNSScalingThreadSleepTime?: number;
  autoScalingConfigDecommissionQueryInterval?: number;
  autoScalingCoolDownTime?: number;
  autoScalingRuleMinDelayLimit?: number;
  autoScalingRuleAlarmSilentTime?: number;
  autoScalingConfigSystemDiskSize?: number;
  autoScalingGroupMinSizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      autoScalingHookHeartbeatDefaultTime: 'AutoScalingHookHeartbeatDefaultTime',
      autoScalingRuleAlarmDelayLimit: 'AutoScalingRuleAlarmDelayLimit',
      requestId: 'RequestId',
      autoScalingGroupMaxSizeLimit: 'AutoScalingGroupMaxSizeLimit',
      autoScalingMNSScalingThreadSleepTime: 'AutoScalingMNSScalingThreadSleepTime',
      autoScalingConfigDecommissionQueryInterval: 'AutoScalingConfigDecommissionQueryInterval',
      autoScalingCoolDownTime: 'AutoScalingCoolDownTime',
      autoScalingRuleMinDelayLimit: 'AutoScalingRuleMinDelayLimit',
      autoScalingRuleAlarmSilentTime: 'AutoScalingRuleAlarmSilentTime',
      autoScalingConfigSystemDiskSize: 'AutoScalingConfigSystemDiskSize',
      autoScalingGroupMinSizeLimit: 'AutoScalingGroupMinSizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScalingHookHeartbeatDefaultTime: 'number',
      autoScalingRuleAlarmDelayLimit: 'number',
      requestId: 'string',
      autoScalingGroupMaxSizeLimit: 'number',
      autoScalingMNSScalingThreadSleepTime: 'number',
      autoScalingConfigDecommissionQueryInterval: 'number',
      autoScalingCoolDownTime: 'number',
      autoScalingRuleMinDelayLimit: 'number',
      autoScalingRuleAlarmSilentTime: 'number',
      autoScalingConfigSystemDiskSize: 'number',
      autoScalingGroupMinSizeLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingCommonConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingCommonConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingCommonConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigItemV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  scalingConfigItemId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
      scalingConfigItemId: 'ScalingConfigItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
      scalingConfigItemId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigItemV2ResponseBody extends $tea.Model {
  requestId?: string;
  scalingConfigItemBizId?: string;
  scalingGroupBizId?: string;
  configItemInformation?: string;
  configItemType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingConfigItemBizId: 'ScalingConfigItemBizId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemInformation: 'ConfigItemInformation',
      configItemType: 'ConfigItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingConfigItemBizId: 'string',
      scalingGroupBizId: 'string',
      configItemInformation: 'string',
      configItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingConfigItemV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingConfigItemV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingConfigItemV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  hostGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      hostGroupBizId: 'HostGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      hostGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBody extends $tea.Model {
  scalingConfig?: DescribeScalingGroupInstanceV2ResponseBodyScalingConfig;
  activeRuleCategory?: string;
  requestId?: string;
  timeoutWithGrace?: number;
  scalingGroupId?: string;
  maxSize?: number;
  multiAvailablePolicyParam?: string;
  minSize?: number;
  defaultCooldown?: number;
  hostGroupId?: string;
  withGrace?: boolean;
  multiAvailablePolicy?: string;
  scalingRuleList?: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleList;
  static names(): { [key: string]: string } {
    return {
      scalingConfig: 'ScalingConfig',
      activeRuleCategory: 'ActiveRuleCategory',
      requestId: 'RequestId',
      timeoutWithGrace: 'TimeoutWithGrace',
      scalingGroupId: 'ScalingGroupId',
      maxSize: 'MaxSize',
      multiAvailablePolicyParam: 'MultiAvailablePolicyParam',
      minSize: 'MinSize',
      defaultCooldown: 'DefaultCooldown',
      hostGroupId: 'HostGroupId',
      withGrace: 'WithGrace',
      multiAvailablePolicy: 'MultiAvailablePolicy',
      scalingRuleList: 'ScalingRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingConfig: DescribeScalingGroupInstanceV2ResponseBodyScalingConfig,
      activeRuleCategory: 'string',
      requestId: 'string',
      timeoutWithGrace: 'number',
      scalingGroupId: 'string',
      maxSize: 'number',
      multiAvailablePolicyParam: 'string',
      minSize: 'number',
      defaultCooldown: 'number',
      hostGroupId: 'string',
      withGrace: 'boolean',
      multiAvailablePolicy: 'string',
      scalingRuleList: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingGroupInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingGroupInstanceV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  hostGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      hostGroupBizId: 'HostGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      hostGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupV2ResponseBody extends $tea.Model {
  description?: string;
  hostGroupBizId?: string;
  requestId?: string;
  configState?: string;
  scalingInMode?: string;
  scalingGroupId?: string;
  scalingMaxSize?: number;
  scalingMinSize?: number;
  name?: string;
  activeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      hostGroupBizId: 'HostGroupBizId',
      requestId: 'RequestId',
      configState: 'ConfigState',
      scalingInMode: 'ScalingInMode',
      scalingGroupId: 'ScalingGroupId',
      scalingMaxSize: 'ScalingMaxSize',
      scalingMinSize: 'ScalingMinSize',
      name: 'Name',
      activeStatus: 'ActiveStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hostGroupBizId: 'string',
      requestId: 'string',
      configState: 'string',
      scalingInMode: 'string',
      scalingGroupId: 'string',
      scalingMaxSize: 'number',
      scalingMinSize: 'number',
      name: 'string',
      activeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingGroupV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingGroupV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRuleResponseBody extends $tea.Model {
  status?: string;
  timeoutWithGrace?: number;
  requestId?: string;
  cooldown?: number;
  cloudWatchTrigger?: DescribeScalingRuleResponseBodyCloudWatchTrigger;
  gmtModified?: string;
  adjustmentType?: string;
  gmtCreate?: string;
  adjustmentValue?: number;
  schedulerTrigger?: DescribeScalingRuleResponseBodySchedulerTrigger;
  withGrace?: boolean;
  id?: string;
  ruleName?: string;
  ruleCategory?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      timeoutWithGrace: 'TimeoutWithGrace',
      requestId: 'RequestId',
      cooldown: 'Cooldown',
      cloudWatchTrigger: 'CloudWatchTrigger',
      gmtModified: 'GmtModified',
      adjustmentType: 'AdjustmentType',
      gmtCreate: 'GmtCreate',
      adjustmentValue: 'AdjustmentValue',
      schedulerTrigger: 'SchedulerTrigger',
      withGrace: 'WithGrace',
      id: 'Id',
      ruleName: 'RuleName',
      ruleCategory: 'RuleCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      timeoutWithGrace: 'number',
      requestId: 'string',
      cooldown: 'number',
      cloudWatchTrigger: DescribeScalingRuleResponseBodyCloudWatchTrigger,
      gmtModified: 'string',
      adjustmentType: 'string',
      gmtCreate: 'string',
      adjustmentValue: 'number',
      schedulerTrigger: DescribeScalingRuleResponseBodySchedulerTrigger,
      withGrace: 'boolean',
      id: 'string',
      ruleName: 'string',
      ruleCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBody extends $tea.Model {
  requestId?: string;
  availableGroupList?: DescribeSecurityGroupAttributeResponseBodyAvailableGroupList;
  securityGroupAttributeList?: DescribeSecurityGroupAttributeResponseBodySecurityGroupAttributeList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      availableGroupList: 'AvailableGroupList',
      securityGroupAttributeList: 'SecurityGroupAttributeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      availableGroupList: DescribeSecurityGroupAttributeResponseBodyAvailableGroupList,
      securityGroupAttributeList: DescribeSecurityGroupAttributeResponseBodySecurityGroupAttributeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAndReleaseClusterEniRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  targetClusterId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      targetClusterId: 'TargetClusterId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      targetClusterId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAndReleaseClusterEniResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAndReleaseClusterEniResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachAndReleaseClusterEniResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachAndReleaseClusterEniResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiffFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityType?: string;
  entityId?: string;
  srcRevision?: string;
  dstRevision?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityType: 'EntityType',
      entityId: 'EntityId',
      srcRevision: 'SrcRevision',
      dstRevision: 'DstRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityType: 'string',
      entityId: 'string',
      srcRevision: 'string',
      dstRevision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiffFlowEntitySnapshotResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiffFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DiffFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DiffFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaDataSourceForOuterRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  dumpAllDatabase?: boolean;
  databaseId?: string;
  dumpAllTable?: boolean;
  tableId?: string;
  dumpAllPartition?: boolean;
  dumpLimit?: number;
  partitionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      dumpAllDatabase: 'DumpAllDatabase',
      databaseId: 'DatabaseId',
      dumpAllTable: 'DumpAllTable',
      tableId: 'TableId',
      dumpAllPartition: 'DumpAllPartition',
      dumpLimit: 'DumpLimit',
      partitionValues: 'PartitionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      dumpAllDatabase: 'boolean',
      databaseId: 'string',
      dumpAllTable: 'boolean',
      tableId: 'string',
      dumpAllPartition: 'boolean',
      dumpLimit: 'number',
      partitionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaDataSourceForOuterResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DumpMetaDataSourceForOuterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DumpMetaDataSourceForOuterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DumpMetaDataSourceForOuterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowEntityRelationGraphRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  entityType?: string;
  entityGroupId?: string;
  entityId?: string;
  relationship?: string;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      entityType: 'EntityType',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      relationship: 'Relationship',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      entityType: 'string',
      entityGroupId: 'string',
      entityId: 'string',
      relationship: 'string',
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowEntityRelationGraphResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowEntityRelationGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFlowEntityRelationGraphResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFlowEntityRelationGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHdfsCapacityStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHdfsCapacityStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  hdfsCapacityList?: GetHdfsCapacityStatisticInfoResponseBodyHdfsCapacityList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hdfsCapacityList: 'HdfsCapacityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hdfsCapacityList: GetHdfsCapacityStatisticInfoResponseBodyHdfsCapacityList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHdfsCapacityStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHdfsCapacityStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHdfsCapacityStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInputStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInputStatisticInfoResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  jobInputList?: GetJobInputStatisticInfoResponseBodyJobInputList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      jobInputList: 'JobInputList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      jobInputList: GetJobInputStatisticInfoResponseBodyJobInputList,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInputStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobInputStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobInputStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobOutputStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobOutputStatisticInfoResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  total?: number;
  jobOutputList?: GetJobOutputStatisticInfoResponseBodyJobOutputList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      jobOutputList: 'JobOutputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      total: 'number',
      jobOutputList: GetJobOutputStatisticInfoResponseBodyJobOutputList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobOutputStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobOutputStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobOutputStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunningTimeStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunningTimeStatisticInfoResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  total?: number;
  runningTimeList?: GetJobRunningTimeStatisticInfoResponseBodyRunningTimeList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      total: 'Total',
      runningTimeList: 'RunningTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      total: 'number',
      runningTimeList: GetJobRunningTimeStatisticInfoResponseBodyRunningTimeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunningTimeStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobRunningTimeStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobRunningTimeStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInputStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInputStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  queueInputList?: GetQueueInputStatisticInfoResponseBodyQueueInputList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queueInputList: 'QueueInputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queueInputList: GetQueueInputStatisticInfoResponseBodyQueueInputList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInputStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQueueInputStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQueueInputStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueOutputStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueOutputStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  queueOutputList?: GetQueueOutputStatisticInfoResponseBodyQueueOutputList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queueOutputList: 'QueueOutputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queueOutputList: GetQueueOutputStatisticInfoResponseBodyQueueOutputList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueOutputStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQueueOutputStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQueueOutputStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueSubmissionStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  applicationType?: string;
  finalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
      applicationType: 'ApplicationType',
      finalStatus: 'FinalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
      applicationType: 'string',
      finalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueSubmissionStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  queueSubmissionList?: GetQueueSubmissionStatisticInfoResponseBodyQueueSubmissionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      queueSubmissionList: 'QueueSubmissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      queueSubmissionList: GetQueueSubmissionStatisticInfoResponseBodyQueueSubmissionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueSubmissionStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQueueSubmissionStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQueueSubmissionStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInputStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInputStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  userInputList?: GetUserInputStatisticInfoResponseBodyUserInputList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInputList: 'UserInputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInputList: GetUserInputStatisticInfoResponseBodyUserInputList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInputStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserInputStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserInputStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOutputStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOutputStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  userOutputList?: GetUserOutputStatisticInfoResponseBodyUserOutputList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userOutputList: 'UserOutputList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userOutputList: GetUserOutputStatisticInfoResponseBodyUserOutputList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOutputStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserOutputStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserOutputStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSubmissionStatisticInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  fromDatetime?: string;
  toDatetime?: string;
  applicationType?: string;
  finalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      fromDatetime: 'FromDatetime',
      toDatetime: 'ToDatetime',
      applicationType: 'ApplicationType',
      finalStatus: 'FinalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      fromDatetime: 'string',
      toDatetime: 'string',
      applicationType: 'string',
      finalStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSubmissionStatisticInfoResponseBody extends $tea.Model {
  requestId?: string;
  userSubmissionList?: GetUserSubmissionStatisticInfoResponseBodyUserSubmissionList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userSubmissionList: 'UserSubmissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userSubmissionList: GetUserSubmissionStatisticInfoResponseBodyUserSubmissionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSubmissionStatisticInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserSubmissionStatisticInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserSubmissionStatisticInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  libraryBizId?: string;
  clusterBizIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      libraryBizId: 'LibraryBizId',
      clusterBizIdList: 'ClusterBizIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      libraryBizId: 'string',
      clusterBizIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLibrariesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  resourceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      resourceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JoinResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JoinResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JoinResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillExecutionJobInstanceRequest extends $tea.Model {
  resourceOwnerId?: number;
  jobInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      jobInstanceId: 'JobInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      jobInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillExecutionJobInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillExecutionJobInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillExecutionJobInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillExecutionJobInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdviceActionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  component?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      component: 'Component',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      component: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdviceActionResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: ListAdviceActionResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: ListAdviceActionResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdviceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAdviceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAdviceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmApplicationRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  startTimeFrom?: number;
  startTimeTo?: number;
  endTimeFrom?: number;
  endTimeTo?: number;
  clusterId?: string;
  appId?: string;
  state?: string;
  finalStatus?: string;
  user?: string;
  queue?: string;
  name?: string;
  jobType?: string;
  orderBy?: string;
  diagnoseResult?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      startTimeFrom: 'StartTimeFrom',
      startTimeTo: 'StartTimeTo',
      endTimeFrom: 'EndTimeFrom',
      endTimeTo: 'EndTimeTo',
      clusterId: 'ClusterId',
      appId: 'AppId',
      state: 'State',
      finalStatus: 'FinalStatus',
      user: 'User',
      queue: 'Queue',
      name: 'Name',
      jobType: 'JobType',
      orderBy: 'OrderBy',
      diagnoseResult: 'DiagnoseResult',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      startTimeFrom: 'number',
      startTimeTo: 'number',
      endTimeFrom: 'number',
      endTimeTo: 'number',
      clusterId: 'string',
      appId: 'string',
      state: 'string',
      finalStatus: 'string',
      user: 'string',
      queue: 'string',
      name: 'string',
      jobType: 'string',
      orderBy: 'string',
      diagnoseResult: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmApplicationResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  apmAppInfoList?: ListApmApplicationResponseBodyApmAppInfoList;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      apmAppInfoList: 'ApmAppInfoList',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      apmAppInfoList: ListApmApplicationResponseBodyApmAppInfoList,
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApmApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApmApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderMode?: string;
  id?: number;
  bizId?: string;
  metadataType?: string;
  serviceName?: string;
  backupPlanId?: string;
  clusterId?: string;
  status?: string;
  backupId?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderMode: 'OrderMode',
      id: 'Id',
      bizId: 'BizId',
      metadataType: 'MetadataType',
      serviceName: 'ServiceName',
      backupPlanId: 'BackupPlanId',
      clusterId: 'ClusterId',
      status: 'Status',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderMode: 'string',
      id: 'number',
      bizId: 'string',
      metadataType: 'string',
      serviceName: 'string',
      backupPlanId: 'string',
      clusterId: 'string',
      status: 'string',
      backupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: ListBackupsResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: ListBackupsResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostInstanceId?: string;
  hostGroupId?: string;
  hostName?: string;
  privateIp?: string;
  publicIp?: string;
  groupType?: string;
  componentName?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostInstanceId: 'HostInstanceId',
      hostGroupId: 'HostGroupId',
      hostName: 'HostName',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      groupType: 'GroupType',
      componentName: 'ComponentName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostInstanceId: 'string',
      hostGroupId: 'string',
      hostName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      groupType: 'string',
      componentName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  hostList?: ListClusterHostResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      hostList: ListClusterHostResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostInstanceId?: string;
  hostName?: string;
  serviceName?: string;
  componentName?: string;
  componentStatus?: string;
  hostRole?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostInstanceId: 'HostInstanceId',
      hostName: 'HostName',
      serviceName: 'ServiceName',
      componentName: 'ComponentName',
      componentStatus: 'ComponentStatus',
      hostRole: 'HostRole',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostInstanceId: 'string',
      hostName: 'string',
      serviceName: 'string',
      componentName: 'string',
      componentStatus: 'string',
      hostRole: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  componentList?: ListClusterHostComponentResponseBodyComponentList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      componentList: ListClusterHostComponentResponseBodyComponentList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterHostComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterHostComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  hostGroupType?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      hostGroupType: 'HostGroupType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      hostGroupType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostGroupResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusterId?: string;
  total?: number;
  hostGroupList?: ListClusterHostGroupResponseBodyHostGroupList;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusterId: 'ClusterId',
      total: 'Total',
      hostGroupList: 'HostGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusterId: 'string',
      total: 'number',
      hostGroupList: ListClusterHostGroupResponseBodyHostGroupList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBody extends $tea.Model {
  requestId?: string;
  clusterInstalledServiceList?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterInstalledServiceList: 'ClusterInstalledServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterInstalledServiceList: ListClusterInstalledServiceResponseBodyClusterInstalledServiceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterInstalledServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterInstalledServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponseBody extends $tea.Model {
  clusterOperationList?: ListClusterOperationResponseBodyClusterOperationList;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      clusterOperationList: 'ClusterOperationList',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperationList: ListClusterOperationResponseBodyClusterOperationList,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusterOperationHostList?: ListClusterOperationHostResponseBodyClusterOperationHostList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusterOperationHostList: 'ClusterOperationHostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusterOperationHostList: ListClusterOperationHostResponseBodyClusterOperationHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  hostId?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      hostId: 'HostId',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      hostId: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusterOperationHostTaskList?: ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusterOperationHostTaskList: 'ClusterOperationHostTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusterOperationHostTaskList: ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationHostTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationHostTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  operationId?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      operationId: 'OperationId',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      operationId: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationTaskResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusterOperationTaskList?: ListClusterOperationTaskResponseBodyClusterOperationTaskList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusterOperationTaskList: 'ClusterOperationTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusterOperationTaskList: ListClusterOperationTaskResponseBodyClusterOperationTaskList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterOperationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterOperationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  createType?: string;
  machineType?: string;
  isDesc?: boolean;
  depositType?: string;
  pageNumber?: number;
  pageSize?: number;
  defaultStatus?: boolean;
  name?: string;
  resourceGroupId?: string;
  clusterTypeList?: string[];
  statusList?: string[];
  tag?: ListClustersRequestTag[];
  expiredTagList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      createType: 'CreateType',
      machineType: 'MachineType',
      isDesc: 'IsDesc',
      depositType: 'DepositType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      defaultStatus: 'DefaultStatus',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      clusterTypeList: 'ClusterTypeList',
      statusList: 'StatusList',
      tag: 'Tag',
      expiredTagList: 'ExpiredTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      createType: 'string',
      machineType: 'string',
      isDesc: 'boolean',
      depositType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      defaultStatus: 'boolean',
      name: 'string',
      resourceGroupId: 'string',
      clusterTypeList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListClustersRequestTag },
      expiredTagList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusters?: ListClustersResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusters: ListClustersResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusterServiceList?: ListClusterServiceResponseBodyClusterServiceList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusterServiceList: 'ClusterServiceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusterServiceList: ListClusterServiceResponseBodyClusterServiceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  podName?: string;
  serviceName?: string;
  componentName?: string;
  componentStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      podName: 'PodName',
      serviceName: 'ServiceName',
      componentName: 'ComponentName',
      componentStatus: 'ComponentStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      podName: 'string',
      serviceName: 'string',
      componentName: 'string',
      componentStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  componentList?: ListClusterServiceComponentResponseBodyComponentList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      componentList: 'ComponentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      componentList: ListClusterServiceComponentResponseBodyComponentList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterServiceComponentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterServiceComponentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  healthInfoList?: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
      healthInfoList: 'HealthInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
      healthInfoList: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterServiceComponentHealthInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterServiceComponentHealthInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  configVersion?: string;
  hostGroupId?: string;
  hostInstanceId?: string;
  configFileName?: string;
  configItemKey?: string;
  author?: string;
  comment?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      configVersion: 'ConfigVersion',
      hostGroupId: 'HostGroupId',
      hostInstanceId: 'HostInstanceId',
      configFileName: 'ConfigFileName',
      configItemKey: 'ConfigItemKey',
      author: 'Author',
      comment: 'Comment',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      configVersion: 'string',
      hostGroupId: 'string',
      hostInstanceId: 'string',
      configFileName: 'string',
      configItemKey: 'string',
      author: 'string',
      comment: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBody extends $tea.Model {
  totalCount?: number;
  configHistoryList?: ListClusterServiceConfigHistoryResponseBodyConfigHistoryList;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      configHistoryList: 'ConfigHistoryList',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      configHistoryList: ListClusterServiceConfigHistoryResponseBodyConfigHistoryList,
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterServiceConfigHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterServiceConfigHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceQuickLinkRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  directType?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      directType: 'DirectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      directType: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceQuickLinkResponseBody extends $tea.Model {
  requestId?: string;
  quickLinkList?: ListClusterServiceQuickLinkResponseBodyQuickLinkList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      quickLinkList: 'QuickLinkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      quickLinkList: ListClusterServiceQuickLinkResponseBodyQuickLinkList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceQuickLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterServiceQuickLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterServiceQuickLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  bizId?: string;
  pageNumber?: number;
  pageSize?: number;
  productType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  templateInfoList?: ListClusterTemplatesResponseBodyTemplateInfoList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      templateInfoList: 'TemplateInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      templateInfoList: ListClusterTemplatesResponseBodyTemplateInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  id?: string;
  projectId?: string;
  name?: string;
  sourceType?: string;
  createFrom?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      id: 'Id',
      projectId: 'ProjectId',
      name: 'Name',
      sourceType: 'SourceType',
      createFrom: 'CreateFrom',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      id: 'string',
      projectId: 'string',
      name: 'string',
      sourceType: 'string',
      createFrom: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  dataSourceList?: ListDataSourceResponseBodyDataSourceList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      dataSourceList: 'DataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      dataSourceList: ListDataSourceResponseBodyDataSourceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBody extends $tea.Model {
  securityGroupList?: ListEmrAvailableConfigResponseBodySecurityGroupList;
  requestId?: string;
  keyPairNameList?: ListEmrAvailableConfigResponseBodyKeyPairNameList;
  vpcInfoList?: ListEmrAvailableConfigResponseBodyVpcInfoList;
  emrMainVersionList?: ListEmrAvailableConfigResponseBodyEmrMainVersionList;
  static names(): { [key: string]: string } {
    return {
      securityGroupList: 'SecurityGroupList',
      requestId: 'RequestId',
      keyPairNameList: 'KeyPairNameList',
      vpcInfoList: 'VpcInfoList',
      emrMainVersionList: 'EmrMainVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupList: ListEmrAvailableConfigResponseBodySecurityGroupList,
      requestId: 'string',
      keyPairNameList: ListEmrAvailableConfigResponseBodyKeyPairNameList,
      vpcInfoList: ListEmrAvailableConfigResponseBodyVpcInfoList,
      emrMainVersionList: ListEmrAvailableConfigResponseBodyEmrMainVersionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEmrAvailableConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEmrAvailableConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  destinationResource?: string;
  clusterType?: string;
  instanceChargeType?: string;
  spotStrategy?: string;
  zoneId?: string;
  netType?: string;
  instanceType?: string;
  systemDiskType?: string;
  dataDiskType?: string;
  depositType?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      destinationResource: 'DestinationResource',
      clusterType: 'ClusterType',
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
      netType: 'NetType',
      instanceType: 'InstanceType',
      systemDiskType: 'SystemDiskType',
      dataDiskType: 'DataDiskType',
      depositType: 'DepositType',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      destinationResource: 'string',
      clusterType: 'string',
      instanceChargeType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
      netType: 'string',
      instanceType: 'string',
      systemDiskType: 'string',
      dataDiskType: 'string',
      depositType: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  emrZoneInfoList?: ListEmrAvailableResourceResponseBodyEmrZoneInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      emrZoneInfoList: 'EmrZoneInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      emrZoneInfoList: ListEmrAvailableResourceResponseBodyEmrZoneInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEmrAvailableResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEmrAvailableResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  emrVersion?: string;
  stackName?: string;
  stackVersion?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      emrVersion: 'EmrVersion',
      stackName: 'StackName',
      stackVersion: 'StackVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      emrVersion: 'string',
      stackName: 'string',
      stackVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  emrMainVersionList?: ListEmrMainVersionResponseBodyEmrMainVersionList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      emrMainVersionList: 'EmrMainVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      emrMainVersionList: ListEmrMainVersionResponseBodyEmrMainVersionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEmrMainVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEmrMainVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlanInstancesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  onlyLastInstance?: boolean;
  isDesc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  executionPlanIdList?: string[];
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      onlyLastInstance: 'OnlyLastInstance',
      isDesc: 'IsDesc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      executionPlanIdList: 'ExecutionPlanIdList',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      onlyLastInstance: 'boolean',
      isDesc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      executionPlanIdList: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlanInstancesResponseBody extends $tea.Model {
  executionPlanInstances?: ListExecutionPlanInstancesResponseBodyExecutionPlanInstances;
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      executionPlanInstances: 'ExecutionPlanInstances',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionPlanInstances: ListExecutionPlanInstancesResponseBodyExecutionPlanInstances,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlanInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExecutionPlanInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExecutionPlanInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlansRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  jobId?: string;
  strategy?: string;
  isDesc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  queryType?: string;
  queryString?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      jobId: 'JobId',
      strategy: 'Strategy',
      isDesc: 'IsDesc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      queryString: 'QueryString',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      jobId: 'string',
      strategy: 'string',
      isDesc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      queryString: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlansResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  executionPlans?: ListExecutionPlansResponseBodyExecutionPlans;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      executionPlans: 'ExecutionPlans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      executionPlans: ListExecutionPlansResponseBodyExecutionPlans,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExecutionPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExecutionPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobId?: string;
  name?: string;
  id?: string;
  clusterId?: string;
  status?: string;
  periodic?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobId: 'JobId',
      name: 'Name',
      id: 'Id',
      clusterId: 'ClusterId',
      status: 'Status',
      periodic: 'Periodic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobId: 'string',
      name: 'string',
      id: 'string',
      clusterId: 'string',
      status: 'string',
      periodic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  flow?: ListFlowResponseBodyFlow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      flow: ListFlowResponseBodyFlow,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowCategoryRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  parentId?: string;
  root?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      parentId: 'ParentId',
      root: 'Root',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      parentId: 'string',
      root: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowCategoryResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  categories?: ListFlowCategoryResponseBodyCategories;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      categories: 'Categories',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      categories: ListFlowCategoryResponseBodyCategories,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusters?: ListFlowClusterResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusters: ListFlowClusterResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  clusters?: ListFlowClusterAllResponseBodyClusters;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      clusters: 'Clusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      clusters: ListFlowClusterAllResponseBodyClusters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterAllResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBody extends $tea.Model {
  requestId?: string;
  hostList?: ListFlowClusterAllHostsResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostList: ListFlowClusterAllHostsResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterAllHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterAllHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBody extends $tea.Model {
  requestId?: string;
  hostList?: ListFlowClusterHostResponseBodyHostList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      hostList: ListFlowClusterHostResponseBodyHostList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowClusterHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowClusterHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  committerId?: string;
  entityType?: string;
  entityGroupId?: string;
  entityId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      committerId: 'CommitterId',
      entityType: 'EntityType',
      entityGroupId: 'EntityGroupId',
      entityId: 'EntityId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      committerId: 'string',
      entityType: 'string',
      entityGroupId: 'string',
      entityId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: ListFlowEntitySnapshotResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: ListFlowEntitySnapshotResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceRequest extends $tea.Model {
  id?: string;
  flowId?: string;
  flowName?: string;
  owner?: string;
  instanceId?: string;
  nodeInstanceId?: string;
  timeRange?: string;
  orderBy?: string;
  orderType?: string;
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      flowId: 'FlowId',
      flowName: 'FlowName',
      owner: 'Owner',
      instanceId: 'InstanceId',
      nodeInstanceId: 'NodeInstanceId',
      timeRange: 'TimeRange',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      flowId: 'string',
      flowName: 'string',
      owner: 'string',
      instanceId: 'string',
      nodeInstanceId: 'string',
      timeRange: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBody extends $tea.Model {
  flowInstances?: ListFlowInstanceResponseBodyFlowInstances;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      flowInstances: 'FlowInstances',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstances: ListFlowInstanceResponseBodyFlowInstances,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  type?: string;
  adhoc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      adhoc: 'Adhoc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
      adhoc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  jobList?: ListFlowJobResponseBodyJobList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      jobList: 'JobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      jobList: ListFlowJobResponseBodyJobList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  jobType?: string;
  instanceId?: string;
  timeRange?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      jobType: 'JobType',
      instanceId: 'InstanceId',
      timeRange: 'TimeRange',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      jobType: 'string',
      instanceId: 'string',
      timeRange: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  nodeInstances?: ListFlowJobHistoryResponseBodyNodeInstances;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      nodeInstances: 'NodeInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      nodeInstances: ListFlowJobHistoryResponseBodyNodeInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowJobHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowJobHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  startTime?: number;
  orderBy?: string;
  orderType?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      startTime: 'number',
      orderBy: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  flowNodeInstances?: ListFlowNodeInstanceResponseBodyFlowNodeInstances;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      flowNodeInstances: 'FlowNodeInstances',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      flowNodeInstances: ListFlowNodeInstanceResponseBodyFlowNodeInstances,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  nodeInstanceId?: string;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      nodeInstanceId: 'NodeInstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      nodeInstanceId: 'string',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  containerStatusList?: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      containerStatusList: 'ContainerStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      containerStatusList: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeInstanceContainerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeInstanceContainerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultRequest extends $tea.Model {
  nodeInstanceId?: string;
  sqlIndex?: number;
  offset?: number;
  length?: number;
  projectId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeInstanceId: 'NodeInstanceId',
      sqlIndex: 'SqlIndex',
      offset: 'Offset',
      length: 'Length',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstanceId: 'string',
      sqlIndex: 'number',
      offset: 'number',
      length: 'number',
      projectId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBody extends $tea.Model {
  rowList?: ListFlowNodeSqlResultResponseBodyRowList;
  requestId?: string;
  headerList?: ListFlowNodeSqlResultResponseBodyHeaderList;
  end?: boolean;
  static names(): { [key: string]: string } {
    return {
      rowList: 'RowList',
      requestId: 'RequestId',
      headerList: 'HeaderList',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowList: ListFlowNodeSqlResultResponseBodyRowList,
      requestId: 'string',
      headerList: ListFlowNodeSqlResultResponseBodyHeaderList,
      end: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowNodeSqlResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowNodeSqlResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectRequest extends $tea.Model {
  productType?: string;
  regionId?: string;
  projectId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
      projectId: 'ProjectId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
      projectId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  projects?: ListFlowProjectResponseBodyProjects;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      projects: ListFlowProjectResponseBodyProjects,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBody extends $tea.Model {
  clusterSettings?: ListFlowProjectClusterSettingResponseBodyClusterSettings;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      clusterSettings: 'ClusterSettings',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSettings: ListFlowProjectClusterSettingResponseBodyClusterSettings,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  users?: ListFlowProjectUserResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      users: ListFlowProjectUserResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowProjectUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowProjectUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionInstancesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  executionPlanInstanceId?: string;
  isDesc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      executionPlanInstanceId: 'ExecutionPlanInstanceId',
      isDesc: 'IsDesc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      executionPlanInstanceId: 'string',
      isDesc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  jobInstances?: ListJobExecutionInstancesResponseBodyJobInstances;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      jobInstances: 'JobInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      jobInstances: ListJobExecutionInstancesResponseBodyJobInstances,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobExecutionInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobExecutionInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInstanceWorkersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  jobInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      jobInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInstanceWorkersResponseBody extends $tea.Model {
  requestId?: string;
  jobInstanceWorkers?: ListJobInstanceWorkersResponseBodyJobInstanceWorkers;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobInstanceWorkers: 'JobInstanceWorkers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobInstanceWorkers: ListJobInstanceWorkersResponseBodyJobInstanceWorkers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInstanceWorkersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobInstanceWorkersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobInstanceWorkersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  isDesc?: boolean;
  pageNumber?: number;
  pageSize?: number;
  queryType?: string;
  queryString?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      isDesc: 'IsDesc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      queryString: 'QueryString',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      isDesc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      queryString: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  jobs?: ListJobsResponseBodyJobs;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      jobs: ListJobsResponseBodyJobs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: ListLibrariesResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: ListLibrariesResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryInstallTasksRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  libraryBizId?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      libraryBizId: 'LibraryBizId',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      libraryBizId: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryInstallTasksResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: ListLibraryInstallTasksResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: ListLibraryInstallTasksResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryInstallTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLibraryInstallTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLibraryInstallTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  libraryBizId?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      libraryBizId: 'LibraryBizId',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      libraryBizId: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: ListLibraryStatusResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: ListLibraryStatusResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLibraryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLibraryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: ListMetaClusterResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: ListMetaClusterResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMetaClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMetaClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataSourceClusterForOuterRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  userId?: string;
  pageNumber?: number;
  pageSize?: number;
  dataSourceId?: string[];
  clusterId?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      userId: 'UserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      dataSourceId: 'DataSourceId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      userId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      dataSourceId: { 'type': 'array', 'itemType': 'string' },
      clusterId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataSourceClusterForOuterResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: ListMetaDataSourceClusterForOuterResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: ListMetaDataSourceClusterForOuterResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataSourceClusterForOuterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMetaDataSourceClusterForOuterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMetaDataSourceClusterForOuterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotesResponseBody extends $tea.Model {
  requestId?: string;
  notes?: ListNotesResponseBodyNotes;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      notes: 'Notes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      notes: ListNotesResponseBodyNotes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNotesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNotesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  poolType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      poolType: 'PoolType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      poolType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBody extends $tea.Model {
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  total?: number;
  poolInfoList?: ListResourcePoolResponseBodyPoolInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      total: 'Total',
      poolInfoList: 'PoolInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      total: 'number',
      poolInfoList: ListResourcePoolResponseBodyPoolInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  requestId?: string;
  paging?: boolean;
  data?: ListRolesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      paging: 'Paging',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      paging: 'boolean',
      data: ListRolesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  clusterBizId?: string;
  hostGroupId?: string;
  scalingGroupBizId?: string;
  scalingRuleName?: string;
  hostGroupName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      clusterBizId: 'ClusterBizId',
      hostGroupId: 'HostGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      scalingRuleName: 'ScalingRuleName',
      hostGroupName: 'HostGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      clusterBizId: 'string',
      hostGroupId: 'string',
      scalingGroupBizId: 'string',
      scalingRuleName: 'string',
      hostGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityV2ResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: ListScalingActivityV2ResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: ListScalingActivityV2ResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScalingActivityV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScalingActivityV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemV2ResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: ListScalingConfigItemV2ResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: ListScalingConfigItemV2ResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScalingConfigItemV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScalingConfigItemV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  limit?: number;
  pageNumber?: number;
  pageSize?: number;
  currentSize?: number;
  pageCount?: number;
  orderField?: string;
  orderMode?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      limit: 'Limit',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      currentSize: 'CurrentSize',
      pageCount: 'PageCount',
      orderField: 'OrderField',
      orderMode: 'OrderMode',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      limit: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      currentSize: 'number',
      pageCount: 'number',
      orderField: 'string',
      orderMode: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupV2ResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  items?: ListScalingGroupV2ResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      items: ListScalingGroupV2ResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListScalingGroupV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListScalingGroupV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupRequest extends $tea.Model {
  regionId?: string;
  netType?: string;
  vpcId?: string;
  depositType?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      netType: 'NetType',
      vpcId: 'VpcId',
      depositType: 'DepositType',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      netType: 'string',
      vpcId: 'string',
      depositType: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponseBody extends $tea.Model {
  securityGroupList?: ListSecurityGroupResponseBodySecurityGroupList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupList: 'SecurityGroupList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupList: ListSecurityGroupResponseBodySecurityGroupList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  stackName?: string;
  stackVersion?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      stackName: 'StackName',
      stackVersion: 'StackVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      stackName: 'string',
      stackVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  stackList?: ListStackResponseBodyStackList;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      stackList: 'StackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      stackList: ListStackResponseBodyStackList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  nextToken?: string;
  pageSize?: number;
  resourceType?: string;
  category?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      category: 'Category',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceType: 'string',
      category: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  message?: string;
  pageSize?: number;
  keys?: ListTagKeysResponseBodyKeys;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      keys: 'Keys',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      keys: ListTagKeysResponseBodyKeys,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  key?: string;
  nextToken?: string;
  pageSize?: number;
  resourceType?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      key: 'Key',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      key: 'string',
      nextToken: 'string',
      pageSize: 'number',
      resourceType: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  totalCount?: number;
  nextToken?: string;
  requestId?: string;
  message?: string;
  pageSize?: number;
  values?: ListTagValuesResponseBodyValues;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      message: 'Message',
      pageSize: 'PageSize',
      values: 'Values',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      message: 'string',
      pageSize: 'number',
      values: ListTagValuesResponseBodyValues,
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  requestId?: string;
  userList?: ListUsersResponseBodyUserList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userList: 'UserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userList: ListUsersResponseBodyUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchRequest extends $tea.Model {
  regionId?: string;
  vpcId?: string;
  zoneId?: string;
  depositType?: string;
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      depositType: 'DepositType',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      depositType: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponseBody extends $tea.Model {
  requestId?: string;
  vswitchList?: ListVswitchResponseBodyVswitchList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vswitchList: 'VswitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vswitchList: ListVswitchResponseBodyVswitchList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVswitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVswitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterBootstrapActionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  id?: string;
  bootstrapAction?: ModifyClusterBootstrapActionRequestBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      id: 'Id',
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      id: 'string',
      bootstrapAction: { 'type': 'array', 'itemType': ModifyClusterBootstrapActionRequestBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterBootstrapActionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterBootstrapActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterBootstrapActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterBootstrapActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterHostGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  hostGroupName?: string;
  securityGroupId?: string;
  vswitchId?: string;
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      securityGroupId: 'SecurityGroupId',
      vswitchId: 'VswitchId',
      comment: 'Comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      securityGroupId: 'string',
      vswitchId: 'string',
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterMetaCollectRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  switchOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      switchOn: 'SwitchOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      switchOn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterMetaCollectResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterMetaCollectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterMetaCollectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterMetaCollectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNameRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNameResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterSecurityGroupRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  modifyType?: string;
  nicType?: string;
  ipProtocol?: string;
  portRange?: string;
  whiteIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      modifyType: 'ModifyType',
      nicType: 'NicType',
      ipProtocol: 'IpProtocol',
      portRange: 'PortRange',
      whiteIp: 'WhiteIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      modifyType: 'string',
      nicType: 'string',
      ipProtocol: 'string',
      portRange: 'string',
      whiteIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterSecurityGroupRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterSecurityGroupRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterSecurityGroupRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterSecurityGroupRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterServiceConfigRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  serviceName?: string;
  comment?: string;
  configParams?: string;
  customConfigParams?: string;
  groupId?: string;
  hostInstanceId?: string;
  configType?: string;
  refreshHostConfig?: boolean;
  gatewayClusterIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      serviceName: 'ServiceName',
      comment: 'Comment',
      configParams: 'ConfigParams',
      customConfigParams: 'CustomConfigParams',
      groupId: 'GroupId',
      hostInstanceId: 'HostInstanceId',
      configType: 'ConfigType',
      refreshHostConfig: 'RefreshHostConfig',
      gatewayClusterIdList: 'GatewayClusterIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      serviceName: 'string',
      comment: 'string',
      configParams: 'string',
      customConfigParams: 'string',
      groupId: 'string',
      hostInstanceId: 'string',
      configType: 'string',
      refreshHostConfig: 'boolean',
      gatewayClusterIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterServiceConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterServiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterServiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterServiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequest extends $tea.Model {
  resourceOwnerId?: number;
  bizId?: string;
  templateName?: string;
  regionId?: string;
  zoneId?: string;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  securityGroupName?: string;
  chargeType?: string;
  period?: number;
  autoRenew?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  emrVer?: string;
  clusterType?: string;
  highAvailabilityEnable?: boolean;
  useLocalMetaDb?: boolean;
  ioOptimized?: boolean;
  sshEnable?: boolean;
  instanceGeneration?: string;
  masterPwd?: string;
  keyPairName?: string;
  metaStoreType?: string;
  metaStoreConf?: string;
  configurations?: string;
  easEnable?: boolean;
  depositType?: string;
  machineType?: string;
  useCustomHiveMetaDb?: boolean;
  initCustomHiveMetaDb?: boolean;
  resourceGroupId?: string;
  optionSoftWareList?: string[];
  hostGroup?: ModifyClusterTemplateRequestHostGroup[];
  bootstrapAction?: ModifyClusterTemplateRequestBootstrapAction[];
  config?: ModifyClusterTemplateRequestConfig[];
  tag?: ModifyClusterTemplateRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      bizId: 'BizId',
      templateName: 'TemplateName',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      securityGroupName: 'SecurityGroupName',
      chargeType: 'ChargeType',
      period: 'Period',
      autoRenew: 'AutoRenew',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      useLocalMetaDb: 'UseLocalMetaDb',
      ioOptimized: 'IoOptimized',
      sshEnable: 'SshEnable',
      instanceGeneration: 'InstanceGeneration',
      masterPwd: 'MasterPwd',
      keyPairName: 'KeyPairName',
      metaStoreType: 'MetaStoreType',
      metaStoreConf: 'MetaStoreConf',
      configurations: 'Configurations',
      easEnable: 'EasEnable',
      depositType: 'DepositType',
      machineType: 'MachineType',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      resourceGroupId: 'ResourceGroupId',
      optionSoftWareList: 'OptionSoftWareList',
      hostGroup: 'HostGroup',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      bizId: 'string',
      templateName: 'string',
      regionId: 'string',
      zoneId: 'string',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      securityGroupName: 'string',
      chargeType: 'string',
      period: 'number',
      autoRenew: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      emrVer: 'string',
      clusterType: 'string',
      highAvailabilityEnable: 'boolean',
      useLocalMetaDb: 'boolean',
      ioOptimized: 'boolean',
      sshEnable: 'boolean',
      instanceGeneration: 'string',
      masterPwd: 'string',
      keyPairName: 'string',
      metaStoreType: 'string',
      metaStoreConf: 'string',
      configurations: 'string',
      easEnable: 'boolean',
      depositType: 'string',
      machineType: 'string',
      useCustomHiveMetaDb: 'boolean',
      initCustomHiveMetaDb: 'boolean',
      resourceGroupId: 'string',
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      hostGroup: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestHostGroup },
      bootstrapAction: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestBootstrapAction },
      config: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestConfig },
      tag: { 'type': 'array', 'itemType': ModifyClusterTemplateRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateResponseBody extends $tea.Model {
  requestId?: string;
  clusterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterTemplateId: 'ClusterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExecutionPlanRequest extends $tea.Model {
  resourceOwnerId?: number;
  clusterName?: string;
  clusterId?: string;
  regionId?: string;
  zoneId?: string;
  logEnable?: boolean;
  logPath?: string;
  securityGroupId?: string;
  isOpenPublicIp?: boolean;
  createClusterOnDemand?: boolean;
  emrVer?: string;
  clusterType?: string;
  highAvailabilityEnable?: boolean;
  useLocalMetaDb?: boolean;
  vpcId?: string;
  vSwitchId?: string;
  netType?: string;
  userDefinedEmrEcsRole?: string;
  ioOptimized?: boolean;
  instanceGeneration?: string;
  easEnable?: boolean;
  workflowDefinition?: string;
  useCustomHiveMetaDB?: boolean;
  initCustomHiveMetaDB?: boolean;
  configurations?: string;
  id?: string;
  executionPlanVersion?: number;
  name?: string;
  strategy?: string;
  timeInterval?: number;
  startTime?: number;
  timeUnit?: string;
  dayOfWeek?: string;
  dayOfMonth?: string;
  optionSoftWareList?: string[];
  ecsOrder?: ModifyExecutionPlanRequestEcsOrder[];
  bootstrapAction?: ModifyExecutionPlanRequestBootstrapAction[];
  config?: ModifyExecutionPlanRequestConfig[];
  jobIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      logEnable: 'LogEnable',
      logPath: 'LogPath',
      securityGroupId: 'SecurityGroupId',
      isOpenPublicIp: 'IsOpenPublicIp',
      createClusterOnDemand: 'CreateClusterOnDemand',
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      useLocalMetaDb: 'UseLocalMetaDb',
      vpcId: 'VpcId',
      vSwitchId: 'VSwitchId',
      netType: 'NetType',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      ioOptimized: 'IoOptimized',
      instanceGeneration: 'InstanceGeneration',
      easEnable: 'EasEnable',
      workflowDefinition: 'WorkflowDefinition',
      useCustomHiveMetaDB: 'UseCustomHiveMetaDB',
      initCustomHiveMetaDB: 'InitCustomHiveMetaDB',
      configurations: 'Configurations',
      id: 'Id',
      executionPlanVersion: 'ExecutionPlanVersion',
      name: 'Name',
      strategy: 'Strategy',
      timeInterval: 'TimeInterval',
      startTime: 'StartTime',
      timeUnit: 'TimeUnit',
      dayOfWeek: 'DayOfWeek',
      dayOfMonth: 'DayOfMonth',
      optionSoftWareList: 'OptionSoftWareList',
      ecsOrder: 'EcsOrder',
      bootstrapAction: 'BootstrapAction',
      config: 'Config',
      jobIdList: 'JobIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      clusterName: 'string',
      clusterId: 'string',
      regionId: 'string',
      zoneId: 'string',
      logEnable: 'boolean',
      logPath: 'string',
      securityGroupId: 'string',
      isOpenPublicIp: 'boolean',
      createClusterOnDemand: 'boolean',
      emrVer: 'string',
      clusterType: 'string',
      highAvailabilityEnable: 'boolean',
      useLocalMetaDb: 'boolean',
      vpcId: 'string',
      vSwitchId: 'string',
      netType: 'string',
      userDefinedEmrEcsRole: 'string',
      ioOptimized: 'boolean',
      instanceGeneration: 'string',
      easEnable: 'boolean',
      workflowDefinition: 'string',
      useCustomHiveMetaDB: 'boolean',
      initCustomHiveMetaDB: 'boolean',
      configurations: 'string',
      id: 'string',
      executionPlanVersion: 'number',
      name: 'string',
      strategy: 'string',
      timeInterval: 'number',
      startTime: 'number',
      timeUnit: 'string',
      dayOfWeek: 'string',
      dayOfMonth: 'string',
      optionSoftWareList: { 'type': 'array', 'itemType': 'string' },
      ecsOrder: { 'type': 'array', 'itemType': ModifyExecutionPlanRequestEcsOrder },
      bootstrapAction: { 'type': 'array', 'itemType': ModifyExecutionPlanRequestBootstrapAction },
      config: { 'type': 'array', 'itemType': ModifyExecutionPlanRequestConfig },
      jobIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExecutionPlanResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExecutionPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyExecutionPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyExecutionPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  status?: string;
  description?: string;
  periodic?: boolean;
  startSchedule?: number;
  endSchedule?: number;
  cronExpr?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  logArchiveLocation?: string;
  lifecycle?: string;
  application?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      description: 'Description',
      periodic: 'Periodic',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpr: 'CronExpr',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      logArchiveLocation: 'LogArchiveLocation',
      lifecycle: 'Lifecycle',
      application: 'Application',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      description: 'string',
      periodic: 'boolean',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpr: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      logArchiveLocation: 'string',
      lifecycle: 'string',
      application: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  id?: string;
  name?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowCategoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowCategoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowCategoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  status?: string;
  description?: string;
  periodic?: boolean;
  startSchedule?: number;
  endSchedule?: number;
  cronExpr?: string;
  createCluster?: boolean;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  logArchiveLocation?: string;
  lifecycle?: string;
  graph?: string;
  alertConf?: string;
  alertUserGroupBizId?: string;
  alertDingDingGroupBizId?: string;
  parentFlowList?: string;
  parentCategory?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      description: 'Description',
      periodic: 'Periodic',
      startSchedule: 'StartSchedule',
      endSchedule: 'EndSchedule',
      cronExpr: 'CronExpr',
      createCluster: 'CreateCluster',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      logArchiveLocation: 'LogArchiveLocation',
      lifecycle: 'Lifecycle',
      graph: 'Graph',
      alertConf: 'AlertConf',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      parentFlowList: 'ParentFlowList',
      parentCategory: 'ParentCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      status: 'string',
      description: 'string',
      periodic: 'boolean',
      startSchedule: 'number',
      endSchedule: 'number',
      cronExpr: 'string',
      createCluster: 'boolean',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      logArchiveLocation: 'string',
      lifecycle: 'string',
      graph: 'string',
      alertConf: 'string',
      alertUserGroupBizId: 'string',
      alertDingDingGroupBizId: 'string',
      parentFlowList: 'string',
      parentCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowForWebResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowForWebResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowForWebResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  id?: string;
  name?: string;
  description?: string;
  failAct?: string;
  maxRetry?: number;
  retryPolicy?: string;
  maxRunningTimeSec?: number;
  retryInterval?: number;
  params?: string;
  paramConf?: string;
  customVariables?: string;
  envConf?: string;
  runConf?: string;
  monitorConf?: string;
  mode?: string;
  clusterId?: string;
  alertConf?: string;
  resourceList?: ModifyFlowJobRequestResourceList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      failAct: 'FailAct',
      maxRetry: 'MaxRetry',
      retryPolicy: 'RetryPolicy',
      maxRunningTimeSec: 'MaxRunningTimeSec',
      retryInterval: 'RetryInterval',
      params: 'Params',
      paramConf: 'ParamConf',
      customVariables: 'CustomVariables',
      envConf: 'EnvConf',
      runConf: 'RunConf',
      monitorConf: 'MonitorConf',
      mode: 'Mode',
      clusterId: 'ClusterId',
      alertConf: 'AlertConf',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      failAct: 'string',
      maxRetry: 'number',
      retryPolicy: 'string',
      maxRunningTimeSec: 'number',
      retryInterval: 'number',
      params: 'string',
      paramConf: 'string',
      customVariables: 'string',
      envConf: 'string',
      runConf: 'string',
      monitorConf: 'string',
      mode: 'string',
      clusterId: 'string',
      alertConf: 'string',
      resourceList: { 'type': 'array', 'itemType': ModifyFlowJobRequestResourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectRequest extends $tea.Model {
  projectId?: string;
  regionId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      regionId: 'RegionId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      regionId: 'string',
      name: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  clusterId?: string;
  defaultUser?: string;
  defaultQueue?: string;
  userList?: string[];
  queueList?: string[];
  hostList?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      clusterId: 'ClusterId',
      defaultUser: 'DefaultUser',
      defaultQueue: 'DefaultQueue',
      userList: 'UserList',
      queueList: 'QueueList',
      hostList: 'HostList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      clusterId: 'string',
      defaultUser: 'string',
      defaultQueue: 'string',
      userList: { 'type': 'array', 'itemType': 'string' },
      queueList: { 'type': 'array', 'itemType': 'string' },
      hostList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowProjectClusterSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowProjectClusterSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowProjectClusterSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobRequest extends $tea.Model {
  resourceOwnerId?: number;
  id?: string;
  name?: string;
  regionId?: string;
  type?: string;
  runParameter?: string;
  failAct?: string;
  maxRetry?: number;
  retryInterval?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
      runParameter: 'RunParameter',
      failAct: 'FailAct',
      maxRetry: 'MaxRetry',
      retryInterval: 'RetryInterval',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      id: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
      runParameter: 'string',
      failAct: 'string',
      maxRetry: 'number',
      retryInterval: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolRequest extends $tea.Model {
  regionId?: string;
  resourceOwnerId?: number;
  id?: string;
  active?: boolean;
  name?: string;
  clusterId?: string;
  yarnsiteconfig?: string;
  config?: ModifyResourcePoolRequestConfig[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      active: 'Active',
      name: 'Name',
      clusterId: 'ClusterId',
      yarnsiteconfig: 'Yarnsiteconfig',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceOwnerId: 'number',
      id: 'string',
      active: 'boolean',
      name: 'string',
      clusterId: 'string',
      yarnsiteconfig: 'string',
      config: { 'type': 'array', 'itemType': ModifyResourcePoolRequestConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolSchedulerTypeRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolSchedulerTypeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolSchedulerTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyResourcePoolSchedulerTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyResourcePoolSchedulerTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceQueueRequest extends $tea.Model {
  regionId?: string;
  resourceOwnerId?: number;
  id?: string;
  name?: string;
  qualifiedName?: string;
  clusterId?: string;
  parentQueueId?: number;
  leaf?: boolean;
  resourcePoolId?: number;
  config?: ModifyResourceQueueRequestConfig[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      name: 'Name',
      qualifiedName: 'QualifiedName',
      clusterId: 'ClusterId',
      parentQueueId: 'ParentQueueId',
      leaf: 'Leaf',
      resourcePoolId: 'ResourcePoolId',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceOwnerId: 'number',
      id: 'string',
      name: 'string',
      qualifiedName: 'string',
      clusterId: 'string',
      parentQueueId: 'number',
      leaf: 'boolean',
      resourcePoolId: 'number',
      config: { 'type': 'array', 'itemType': ModifyResourceQueueRequestConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceQueueResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyResourceQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyResourceQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigItemV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  configItemBizId?: string;
  configItemType?: string;
  configItemInformation?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemBizId: 'ConfigItemBizId',
      configItemType: 'ConfigItemType',
      configItemInformation: 'ConfigItemInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      configItemBizId: 'string',
      configItemType: 'string',
      configItemInformation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigItemV2ResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingConfigItemV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingConfigItemV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingConfigItemV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  name?: string;
  description?: string;
  scalingGroupBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      name: 'Name',
      description: 'Description',
      scalingGroupBizId: 'ScalingGroupBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      name: 'string',
      description: 'string',
      scalingGroupBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupV2ResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingGroupV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingGroupV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingGroupV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  scalingRuleId?: string;
  clusterId?: string;
  hostGroupId?: string;
  ruleName?: string;
  adjustmentType?: string;
  adjustmentValue?: number;
  cooldown?: number;
  launchTime?: string;
  launchExpirationTime?: number;
  recurrenceType?: string;
  recurrenceValue?: string;
  recurrenceEndTime?: string;
  withGrace?: boolean;
  timeoutWithGrace?: number;
  schedulerTrigger?: ModifyScalingRuleRequestSchedulerTrigger[];
  cloudWatchTrigger?: ModifyScalingRuleRequestCloudWatchTrigger[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      scalingRuleId: 'ScalingRuleId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      ruleName: 'RuleName',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      cooldown: 'Cooldown',
      launchTime: 'LaunchTime',
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      recurrenceEndTime: 'RecurrenceEndTime',
      withGrace: 'WithGrace',
      timeoutWithGrace: 'TimeoutWithGrace',
      schedulerTrigger: 'SchedulerTrigger',
      cloudWatchTrigger: 'CloudWatchTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      scalingRuleId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      ruleName: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      cooldown: 'number',
      launchTime: 'string',
      launchExpirationTime: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      recurrenceEndTime: 'string',
      withGrace: 'boolean',
      timeoutWithGrace: 'number',
      schedulerTrigger: { 'type': 'array', 'itemType': ModifyScalingRuleRequestSchedulerTrigger },
      cloudWatchTrigger: { 'type': 'array', 'itemType': ModifyScalingRuleRequestCloudWatchTrigger },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleResponseBody extends $tea.Model {
  requestId?: string;
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingTaskGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  minSize?: number;
  maxSize?: number;
  defaultCooldown?: number;
  activeRuleCategory?: string;
  withGrace?: boolean;
  timeoutWithGrace?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      minSize: 'MinSize',
      maxSize: 'MaxSize',
      defaultCooldown: 'DefaultCooldown',
      activeRuleCategory: 'ActiveRuleCategory',
      withGrace: 'WithGrace',
      timeoutWithGrace: 'TimeoutWithGrace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      minSize: 'number',
      maxSize: 'number',
      defaultCooldown: 'number',
      activeRuleCategory: 'string',
      withGrace: 'boolean',
      timeoutWithGrace: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingTaskGroupResponseBody extends $tea.Model {
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingTaskGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScalingTaskGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScalingTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmHistoryRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  startTimeStamp?: number;
  endTimeStamp?: number;
  cursor?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      cursor: 'Cursor',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      cursor: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmHistoryResponseBody extends $tea.Model {
  alarmHistoryList?: QueryAlarmHistoryResponseBodyAlarmHistoryList;
  requestId?: string;
  total?: string;
  cursor?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      requestId: 'RequestId',
      total: 'Total',
      cursor: 'Cursor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: QueryAlarmHistoryResponseBodyAlarmHistoryList,
      requestId: 'string',
      total: 'string',
      cursor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAlarmHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAlarmHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntityRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      category: 'Category',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'number',
      name: 'string',
      category: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntityResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: QueryEntityResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: QueryEntityResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTableDataRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTableDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTableDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTableDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTableDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  entityId?: string;
  entityType?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      entityId: 'EntityId',
      entityType: 'EntityType',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      entityId: 'string',
      entityType: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  items?: QueryTagResponseBodyItems;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      items: QueryTagResponseBodyItems,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrendDataRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrendDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTrendDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTrendDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTrendDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshClusterResourcePoolRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  resourcePoolId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      resourcePoolId: 'ResourcePoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      resourcePoolId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshClusterResourcePoolResponseBody extends $tea.Model {
  workFlowInstanceId?: string;
  requestId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      workFlowInstanceId: 'WorkFlowInstanceId',
      requestId: 'RequestId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowInstanceId: 'string',
      requestId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshClusterResourcePoolResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshClusterResourcePoolResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshClusterResourcePoolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  forceRelease?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      forceRelease: 'ForceRelease',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      forceRelease: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterByTemplateTagForInternalRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  templateTagSet?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      templateTagSet: 'TemplateTagSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      templateTagSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterByTemplateTagForInternalResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterByTemplateTagForInternalResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterByTemplateTagForInternalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterByTemplateTagForInternalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterHostGroupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostGroupId?: string;
  instanceIdList?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostGroupId: 'HostGroupId',
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostGroupId: 'string',
      instanceIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterHostGroupResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterHostGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseClusterHostGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseClusterHostGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScalingConfigItemV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingGroupBizId?: string;
  configItemType?: string;
  configItemBizId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemType: 'ConfigItemType',
      configItemBizId: 'ConfigItemBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingGroupBizId: 'string',
      configItemType: 'string',
      configItemBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScalingConfigItemV2ResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveScalingConfigItemV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveScalingConfigItemV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveScalingConfigItemV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  reRunFail?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
      reRunFail: 'ReRunFail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
      reRunFail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RerunFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RerunFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterV2Request extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  autoPayOrder?: boolean;
  vswitchId?: string;
  isOpenPublicIp?: boolean;
  hostComponentInfo?: ResizeClusterV2RequestHostComponentInfo[];
  hostGroup?: ResizeClusterV2RequestHostGroup[];
  promotionInfo?: ResizeClusterV2RequestPromotionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      autoPayOrder: 'AutoPayOrder',
      vswitchId: 'VswitchId',
      isOpenPublicIp: 'IsOpenPublicIp',
      hostComponentInfo: 'HostComponentInfo',
      hostGroup: 'HostGroup',
      promotionInfo: 'PromotionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      autoPayOrder: 'boolean',
      vswitchId: 'string',
      isOpenPublicIp: 'boolean',
      hostComponentInfo: { 'type': 'array', 'itemType': ResizeClusterV2RequestHostComponentInfo },
      hostGroup: { 'type': 'array', 'itemType': ResizeClusterV2RequestHostGroup },
      promotionInfo: { 'type': 'array', 'itemType': ResizeClusterV2RequestPromotionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterV2ResponseBody extends $tea.Model {
  requestId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeClusterV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeClusterV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreBackupRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  backupPlanId?: string;
  backupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      backupPlanId: 'BackupPlanId',
      backupId: 'BackupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      backupPlanId: 'string',
      backupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreBackupResponseBody extends $tea.Model {
  triggerType?: string;
  endTime?: number;
  requestId?: string;
  gmtModified?: number;
  startTime?: number;
  taskStatus?: string;
  taskDetail?: string;
  triggerUser?: string;
  gmtCreate?: number;
  taskProcess?: number;
  clusterBizId?: string;
  taskType?: string;
  bizId?: string;
  dataSourceId?: number;
  hostName?: string;
  ecmTaskId?: number;
  taskResultDetail?: string;
  static names(): { [key: string]: string } {
    return {
      triggerType: 'TriggerType',
      endTime: 'EndTime',
      requestId: 'RequestId',
      gmtModified: 'GmtModified',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
      taskDetail: 'TaskDetail',
      triggerUser: 'TriggerUser',
      gmtCreate: 'GmtCreate',
      taskProcess: 'TaskProcess',
      clusterBizId: 'ClusterBizId',
      taskType: 'TaskType',
      bizId: 'BizId',
      dataSourceId: 'DataSourceId',
      hostName: 'HostName',
      ecmTaskId: 'EcmTaskId',
      taskResultDetail: 'TaskResultDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerType: 'string',
      endTime: 'number',
      requestId: 'string',
      gmtModified: 'number',
      startTime: 'number',
      taskStatus: 'string',
      taskDetail: 'string',
      triggerUser: 'string',
      gmtCreate: 'number',
      taskProcess: 'number',
      clusterBizId: 'string',
      taskType: 'string',
      bizId: 'string',
      dataSourceId: 'number',
      hostName: 'string',
      ecmTaskId: 'number',
      taskResultDetail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreBackupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreBackupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreBackupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  operatorId?: string;
  entityType?: string;
  entityId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      operatorId: 'OperatorId',
      entityType: 'EntityType',
      entityId: 'EntityId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      operatorId: 'string',
      entityType: 'string',
      entityId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreFlowEntitySnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreFlowEntitySnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestoreFlowEntitySnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeExecutionPlanSchedulerRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeExecutionPlanSchedulerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeExecutionPlanSchedulerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeExecutionPlanSchedulerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeExecutionPlanSchedulerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryOperationRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryOperationResponseBody extends $tea.Model {
  requestId?: string;
  errMsg?: string;
  success?: string;
  errCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errMsg: 'ErrMsg',
      success: 'Success',
      errCode: 'ErrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errMsg: 'string',
      success: 'string',
      errCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RetryOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RetryOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterServiceActionRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostIdList?: string;
  serviceName?: string;
  serviceActionName?: string;
  customCommand?: string;
  componentNameList?: string;
  comment?: string;
  isRolling?: boolean;
  executeStrategy?: string;
  customParams?: string;
  interval?: number;
  nodeCountPerBatch?: number;
  totlerateFailCount?: number;
  onlyRestartStaleConfigNodes?: boolean;
  turnOnMaintenanceMode?: boolean;
  hostGroupIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostIdList: 'HostIdList',
      serviceName: 'ServiceName',
      serviceActionName: 'ServiceActionName',
      customCommand: 'CustomCommand',
      componentNameList: 'ComponentNameList',
      comment: 'Comment',
      isRolling: 'IsRolling',
      executeStrategy: 'ExecuteStrategy',
      customParams: 'CustomParams',
      interval: 'Interval',
      nodeCountPerBatch: 'NodeCountPerBatch',
      totlerateFailCount: 'TotlerateFailCount',
      onlyRestartStaleConfigNodes: 'OnlyRestartStaleConfigNodes',
      turnOnMaintenanceMode: 'TurnOnMaintenanceMode',
      hostGroupIdList: 'HostGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostIdList: 'string',
      serviceName: 'string',
      serviceActionName: 'string',
      customCommand: 'string',
      componentNameList: 'string',
      comment: 'string',
      isRolling: 'boolean',
      executeStrategy: 'string',
      customParams: 'string',
      interval: 'number',
      nodeCountPerBatch: 'number',
      totlerateFailCount: 'number',
      onlyRestartStaleConfigNodes: 'boolean',
      turnOnMaintenanceMode: 'boolean',
      hostGroupIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterServiceActionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunClusterServiceActionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunClusterServiceActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunClusterServiceActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExecutionPlanRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  arguments?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      arguments: 'Arguments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      arguments: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExecutionPlanShrinkRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  argumentsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      argumentsShrink: 'Arguments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      argumentsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExecutionPlanResponseBody extends $tea.Model {
  requestId?: string;
  executionPlanInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      executionPlanInstanceId: 'ExecutionPlanInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      executionPlanInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunExecutionPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunExecutionPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunExecutionPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScalingActionV2Request extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  scalingActionType?: string;
  scalingGroupBizId?: string;
  actionParam?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scalingActionType: 'ScalingActionType',
      scalingGroupBizId: 'ScalingGroupBizId',
      actionParam: 'ActionParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      scalingActionType: 'string',
      scalingGroupBizId: 'string',
      actionParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScalingActionV2ResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScalingActionV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: RunScalingActionV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunScalingActionV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchLogRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  clusterId?: string;
  hostInnerIp?: string;
  hostName?: string;
  logstoreName?: string;
  fromTimestamp?: number;
  toTimestamp?: number;
  slsQueryString?: string;
  offset?: number;
  line?: number;
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      hostInnerIp: 'HostInnerIp',
      hostName: 'HostName',
      logstoreName: 'LogstoreName',
      fromTimestamp: 'FromTimestamp',
      toTimestamp: 'ToTimestamp',
      slsQueryString: 'SlsQueryString',
      offset: 'Offset',
      line: 'Line',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      clusterId: 'string',
      hostInnerIp: 'string',
      hostName: 'string',
      logstoreName: 'string',
      fromTimestamp: 'number',
      toTimestamp: 'number',
      slsQueryString: 'string',
      offset: 'number',
      line: 'number',
      reverse: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchLogResponseBody extends $tea.Model {
  slsLogItemList?: SearchLogResponseBodySlsLogItemList;
  requestId?: string;
  completed?: boolean;
  static names(): { [key: string]: string } {
    return {
      slsLogItemList: 'SlsLogItemList',
      requestId: 'RequestId',
      completed: 'Completed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsLogItemList: SearchLogResponseBodySlsLogItemList,
      requestId: 'string',
      completed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowId?: string;
  conf?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowId: 'FlowId',
      conf: 'Conf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowId: 'string',
      conf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  jobId?: string;
  jobInstanceId?: string;
  clusterId?: string;
  hostName?: string;
  namespace?: string;
  conf?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      clusterId: 'ClusterId',
      hostName: 'HostName',
      namespace: 'Namespace',
      conf: 'Conf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      jobId: 'string',
      jobInstanceId: 'string',
      clusterId: 'string',
      hostName: 'string',
      namespace: 'string',
      conf: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobResponseBody extends $tea.Model {
  requestId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitFlowJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitFlowJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitFlowJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendExecutionPlanSchedulerRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendExecutionPlanSchedulerResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendExecutionPlanSchedulerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendExecutionPlanSchedulerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendExecutionPlanSchedulerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowRequest extends $tea.Model {
  regionId?: string;
  projectId?: string;
  flowInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      projectId: 'ProjectId',
      flowInstanceId: 'FlowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      projectId: 'string',
      flowInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SuspendFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SuspendFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  tagOwnerUid?: number;
  scope?: string;
  resourceId?: string[];
  tag?: TagResourcesSystemTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      tagOwnerUid: 'TagOwnerUid',
      scope: 'Scope',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      tagOwnerUid: 'number',
      scope: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesSystemTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesSystemTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesSystemTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLibrariesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  libraryBizId?: string;
  clusterBizIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      libraryBizId: 'LibraryBizId',
      clusterBizIdList: 'ClusterBizIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      libraryBizId: 'string',
      clusterBizIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLibrariesResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLibrariesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallLibrariesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallLibrariesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  resourceType?: string;
  tagOwnerUid?: number;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      tagOwnerUid: 'TagOwnerUid',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      resourceType: 'string',
      tagOwnerUid: 'number',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesSystemTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesSystemTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesSystemTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: string;
  name?: string;
  description?: string;
  conf?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      description: 'Description',
      conf: 'Conf',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'string',
      name: 'string',
      description: 'string',
      conf: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryInstallTaskStatusRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  taskBizId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      taskBizId: 'TaskBizId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      taskBizId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryInstallTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLibraryInstallTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLibraryInstallTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLibraryInstallTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      id: 'Id',
      name: 'Name',
      category: 'Category',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      id: 'number',
      name: 'string',
      category: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  resourceOwnerId?: number;
  regionId?: string;
  aliyunUserId?: string;
  userName?: string;
  userType?: string;
  status?: string;
  description?: string;
  roleIdList?: number[];
  groupIdList?: number[];
  userAccountParamList?: UpdateUserRequestUserAccountParamList[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      aliyunUserId: 'AliyunUserId',
      userName: 'UserName',
      userType: 'UserType',
      status: 'Status',
      description: 'Description',
      roleIdList: 'RoleIdList',
      groupIdList: 'GroupIdList',
      userAccountParamList: 'UserAccountParamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      regionId: 'string',
      aliyunUserId: 'string',
      userName: 'string',
      userType: 'string',
      status: 'string',
      description: 'string',
      roleIdList: { 'type': 'array', 'itemType': 'number' },
      groupIdList: { 'type': 'array', 'itemType': 'number' },
      userAccountParamList: { 'type': 'array', 'itemType': UpdateUserRequestUserAccountParamList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  requestId?: string;
  paging?: boolean;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      paging: 'Paging',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      paging: 'boolean',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddClusterServiceRequestService extends $tea.Model {
  serviceVersion?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceVersion: 'ServiceVersion',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceVersion: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterBootstrapActionRequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  multiInstanceTypes?: string;
  sysDiskType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  diskCapacity?: number;
  vSwitchId?: string;
  nodeCount?: number;
  hostGroupName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      multiInstanceTypes: 'MultiInstanceTypes',
      sysDiskType: 'SysDiskType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      vSwitchId: 'VSwitchId',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      multiInstanceTypes: 'string',
      sysDiskType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      diskCapacity: 'number',
      vSwitchId: 'string',
      nodeCount: 'number',
      hostGroupName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterTemplateRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestUserInfo extends $tea.Model {
  password?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestHostComponentInfo extends $tea.Model {
  componentNameList?: string[];
  hostName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      componentNameList: 'ComponentNameList',
      hostName: 'HostName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentNameList: { 'type': 'array', 'itemType': 'string' },
      hostName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestServiceInfo extends $tea.Model {
  serviceVersion?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceVersion: 'ServiceVersion',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceVersion: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestPromotionInfo extends $tea.Model {
  promotionOptionNo?: string;
  promotionOptionCode?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      promotionOptionNo: 'PromotionOptionNo',
      promotionOptionCode: 'PromotionOptionCode',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionOptionNo: 'string',
      promotionOptionCode: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  sysDiskType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  gpuDriver?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  diskCapacity?: number;
  vSwitchId?: string;
  nodeCount?: number;
  hostGroupName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      sysDiskType: 'SysDiskType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      gpuDriver: 'GpuDriver',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      vSwitchId: 'VSwitchId',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      sysDiskType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      gpuDriver: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      diskCapacity: 'number',
      vSwitchId: 'string',
      nodeCount: 'number',
      hostGroupName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterV2RequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutionPlanRequestEcsOrder extends $tea.Model {
  index?: number;
  diskCapacity?: number;
  nodeType?: string;
  nodeCount?: number;
  diskType?: string;
  instanceType?: string;
  diskCount?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      diskCapacity: 'DiskCapacity',
      nodeType: 'NodeType',
      nodeCount: 'NodeCount',
      diskType: 'DiskType',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      diskCapacity: 'number',
      nodeType: 'string',
      nodeCount: 'number',
      diskType: 'string',
      instanceType: 'string',
      diskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutionPlanRequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExecutionPlanRequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowJobRequestResourceList extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowProjectUserRequestUser extends $tea.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourcePoolRequestConfig extends $tea.Model {
  configType?: string;
  configValue?: string;
  targetId?: string;
  note?: string;
  category?: string;
  configKey?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      configValue: 'ConfigValue',
      targetId: 'TargetId',
      note: 'Note',
      category: 'Category',
      configKey: 'ConfigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      configValue: 'string',
      targetId: 'string',
      note: 'string',
      category: 'string',
      configKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceQueueRequestConfig extends $tea.Model {
  configValue?: string;
  note?: string;
  category?: string;
  configKey?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      note: 'Note',
      category: 'Category',
      configKey: 'ConfigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      note: 'string',
      category: 'string',
      configKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequestSchedulerTrigger extends $tea.Model {
  launchExpirationTime?: number;
  recurrenceValue?: string;
  recurrenceType?: string;
  recurrenceEndTime?: string;
  launchTime?: string;
  static names(): { [key: string]: string } {
    return {
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceValue: 'RecurrenceValue',
      recurrenceType: 'RecurrenceType',
      recurrenceEndTime: 'RecurrenceEndTime',
      launchTime: 'LaunchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchExpirationTime: 'number',
      recurrenceValue: 'string',
      recurrenceType: 'string',
      recurrenceEndTime: 'string',
      launchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScalingRuleRequestCloudWatchTrigger extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  evaluationCount?: string;
  threshold?: string;
  period?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      threshold: 'Threshold',
      period: 'Period',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      evaluationCount: 'string',
      threshold: 'string',
      period: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestUserAccountParamList extends $tea.Model {
  authType?: string;
  accountPassword?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      accountPassword: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequestUserInfo extends $tea.Model {
  type?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoRelateClusterInfo extends $tea.Model {
  status?: string;
  clusterName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clusterName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoFailReason extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware extends $tea.Model {
  displayName?: string;
  startTpe?: number;
  version?: string;
  onlyDisplay?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      startTpe: 'StartTpe',
      version: 'Version',
      onlyDisplay: 'OnlyDisplay',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      startTpe: 'number',
      version: 'string',
      onlyDisplay: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfoSoftwares extends $tea.Model {
  software?: DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware[];
  static names(): { [key: string]: string } {
    return {
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      software: { 'type': 'array', 'itemType': DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfo extends $tea.Model {
  emrVer?: string;
  clusterType?: string;
  softwares?: DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfoSoftwares;
  static names(): { [key: string]: string } {
    return {
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrVer: 'string',
      clusterType: 'string',
      softwares: DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfoSoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfoZKLinksZKLink extends $tea.Model {
  link?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfoZKLinks extends $tea.Model {
  ZKLink?: DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfoZKLinksZKLink[];
  static names(): { [key: string]: string } {
    return {
      ZKLink: 'ZKLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLink: { 'type': 'array', 'itemType': DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfoZKLinksZKLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfo extends $tea.Model {
  ZKLinks?: DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfoZKLinks;
  static names(): { [key: string]: string } {
    return {
      ZKLinks: 'ZKLinks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLinks: DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfoZKLinks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoBootstrapActionListBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeClusterBasicInfoResponseBodyClusterInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeClusterBasicInfoResponseBodyClusterInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo extends $tea.Model {
  status?: string;
  clusterName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clusterName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoGatewayClusterInfoList extends $tea.Model {
  gatewayClusterInfo?: DescribeClusterBasicInfoResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      gatewayClusterInfo: 'GatewayClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClusterInfo: { 'type': 'array', 'itemType': DescribeClusterBasicInfoResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfoHostPoolInfo extends $tea.Model {
  hpBizId?: string;
  hpName?: string;
  static names(): { [key: string]: string } {
    return {
      hpBizId: 'HpBizId',
      hpName: 'HpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpBizId: 'string',
      hpName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterBasicInfoResponseBodyClusterInfo extends $tea.Model {
  vpcId?: string;
  logEnable?: boolean;
  taskNodeInService?: number;
  autoScalingSpotWithLimitAllowed?: boolean;
  chargeType?: string;
  userId?: string;
  stopTime?: number;
  createType?: string;
  depositType?: string;
  relateClusterInfo?: DescribeClusterBasicInfoResponseBodyClusterInfoRelateClusterInfo;
  relateClusterId?: string;
  securityGroupName?: string;
  resizeDiskEnable?: boolean;
  imageId?: string;
  failReason?: DescribeClusterBasicInfoResponseBodyClusterInfoFailReason;
  clusterId?: string;
  userDefinedEmrEcsRole?: string;
  metaStoreType?: string;
  softwareInfo?: DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfo;
  startTime?: number;
  configurations?: string;
  logPath?: string;
  autoScalingVersion?: string;
  netType?: string;
  zoneId?: string;
  accessInfo?: DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfo;
  createResource?: string;
  status?: string;
  runningTime?: number;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  autoScalingAllowed?: boolean;
  masterNodeInService?: number;
  autoScalingEnable?: boolean;
  operationId?: string;
  autoScalingWithGraceAllowed?: boolean;
  showSoftwareInterface?: boolean;
  coreNodeInService?: number;
  autoScalingByLoadAllowed?: boolean;
  k8sClusterId?: string;
  localMetaDb?: boolean;
  bootstrapActionList?: DescribeClusterBasicInfoResponseBodyClusterInfoBootstrapActionList;
  gatewayClusterInfoList?: DescribeClusterBasicInfoResponseBodyClusterInfoGatewayClusterInfoList;
  instanceGeneration?: string;
  name?: string;
  easEnable?: boolean;
  machineType?: string;
  hostPoolInfo?: DescribeClusterBasicInfoResponseBodyClusterInfoHostPoolInfo;
  masterNodeTotal?: number;
  regionId?: string;
  period?: number;
  extraInfo?: string;
  ioOptimized?: boolean;
  vSwitchId?: string;
  expiredTime?: number;
  coreNodeTotal?: number;
  gatewayClusterIds?: string;
  bootstrapFailed?: boolean;
  taskNodeTotal?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      logEnable: 'LogEnable',
      taskNodeInService: 'TaskNodeInService',
      autoScalingSpotWithLimitAllowed: 'AutoScalingSpotWithLimitAllowed',
      chargeType: 'ChargeType',
      userId: 'UserId',
      stopTime: 'StopTime',
      createType: 'CreateType',
      depositType: 'DepositType',
      relateClusterInfo: 'RelateClusterInfo',
      relateClusterId: 'RelateClusterId',
      securityGroupName: 'SecurityGroupName',
      resizeDiskEnable: 'ResizeDiskEnable',
      imageId: 'ImageId',
      failReason: 'FailReason',
      clusterId: 'ClusterId',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      metaStoreType: 'MetaStoreType',
      softwareInfo: 'SoftwareInfo',
      startTime: 'StartTime',
      configurations: 'Configurations',
      logPath: 'LogPath',
      autoScalingVersion: 'AutoScalingVersion',
      netType: 'NetType',
      zoneId: 'ZoneId',
      accessInfo: 'AccessInfo',
      createResource: 'CreateResource',
      status: 'Status',
      runningTime: 'RunningTime',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      autoScalingAllowed: 'AutoScalingAllowed',
      masterNodeInService: 'MasterNodeInService',
      autoScalingEnable: 'AutoScalingEnable',
      operationId: 'OperationId',
      autoScalingWithGraceAllowed: 'AutoScalingWithGraceAllowed',
      showSoftwareInterface: 'ShowSoftwareInterface',
      coreNodeInService: 'CoreNodeInService',
      autoScalingByLoadAllowed: 'AutoScalingByLoadAllowed',
      k8sClusterId: 'K8sClusterId',
      localMetaDb: 'LocalMetaDb',
      bootstrapActionList: 'BootstrapActionList',
      gatewayClusterInfoList: 'GatewayClusterInfoList',
      instanceGeneration: 'InstanceGeneration',
      name: 'Name',
      easEnable: 'EasEnable',
      machineType: 'MachineType',
      hostPoolInfo: 'HostPoolInfo',
      masterNodeTotal: 'MasterNodeTotal',
      regionId: 'RegionId',
      period: 'Period',
      extraInfo: 'ExtraInfo',
      ioOptimized: 'IoOptimized',
      vSwitchId: 'VSwitchId',
      expiredTime: 'ExpiredTime',
      coreNodeTotal: 'CoreNodeTotal',
      gatewayClusterIds: 'GatewayClusterIds',
      bootstrapFailed: 'BootstrapFailed',
      taskNodeTotal: 'TaskNodeTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      logEnable: 'boolean',
      taskNodeInService: 'number',
      autoScalingSpotWithLimitAllowed: 'boolean',
      chargeType: 'string',
      userId: 'string',
      stopTime: 'number',
      createType: 'string',
      depositType: 'string',
      relateClusterInfo: DescribeClusterBasicInfoResponseBodyClusterInfoRelateClusterInfo,
      relateClusterId: 'string',
      securityGroupName: 'string',
      resizeDiskEnable: 'boolean',
      imageId: 'string',
      failReason: DescribeClusterBasicInfoResponseBodyClusterInfoFailReason,
      clusterId: 'string',
      userDefinedEmrEcsRole: 'string',
      metaStoreType: 'string',
      softwareInfo: DescribeClusterBasicInfoResponseBodyClusterInfoSoftwareInfo,
      startTime: 'number',
      configurations: 'string',
      logPath: 'string',
      autoScalingVersion: 'string',
      netType: 'string',
      zoneId: 'string',
      accessInfo: DescribeClusterBasicInfoResponseBodyClusterInfoAccessInfo,
      createResource: 'string',
      status: 'string',
      runningTime: 'number',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      autoScalingAllowed: 'boolean',
      masterNodeInService: 'number',
      autoScalingEnable: 'boolean',
      operationId: 'string',
      autoScalingWithGraceAllowed: 'boolean',
      showSoftwareInterface: 'boolean',
      coreNodeInService: 'number',
      autoScalingByLoadAllowed: 'boolean',
      k8sClusterId: 'string',
      localMetaDb: 'boolean',
      bootstrapActionList: DescribeClusterBasicInfoResponseBodyClusterInfoBootstrapActionList,
      gatewayClusterInfoList: DescribeClusterBasicInfoResponseBodyClusterInfoGatewayClusterInfoList,
      instanceGeneration: 'string',
      name: 'string',
      easEnable: 'boolean',
      machineType: 'string',
      hostPoolInfo: DescribeClusterBasicInfoResponseBodyClusterInfoHostPoolInfo,
      masterNodeTotal: 'number',
      regionId: 'string',
      period: 'number',
      extraInfo: 'string',
      ioOptimized: 'boolean',
      vSwitchId: 'string',
      expiredTime: 'number',
      coreNodeTotal: 'number',
      gatewayClusterIds: 'string',
      bootstrapFailed: 'boolean',
      taskNodeTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoNeedRestartHostIdList extends $tea.Model {
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryListClusterServiceSummary extends $tea.Model {
  key?: string;
  displayName?: string;
  status?: string;
  type?: string;
  value?: string;
  desiredStoppedValue?: number;
  alertInfo?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      displayName: 'DisplayName',
      status: 'Status',
      type: 'Type',
      value: 'Value',
      desiredStoppedValue: 'DesiredStoppedValue',
      alertInfo: 'AlertInfo',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      displayName: 'string',
      status: 'string',
      type: 'string',
      value: 'string',
      desiredStoppedValue: 'number',
      alertInfo: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryList extends $tea.Model {
  clusterServiceSummary?: DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryListClusterServiceSummary[];
  static names(): { [key: string]: string } {
    return {
      clusterServiceSummary: 'ClusterServiceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterServiceSummary: { 'type': 'array', 'itemType': DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryListClusterServiceSummary },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoServiceActionListServiceAction extends $tea.Model {
  displayName?: string;
  componentName?: string;
  command?: string;
  actionName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      componentName: 'ComponentName',
      command: 'Command',
      actionName: 'ActionName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      componentName: 'string',
      command: 'string',
      actionName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoServiceActionList extends $tea.Model {
  serviceAction?: DescribeClusterServiceResponseBodyServiceInfoServiceActionListServiceAction[];
  static names(): { [key: string]: string } {
    return {
      serviceAction: 'ServiceAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAction: { 'type': 'array', 'itemType': DescribeClusterServiceResponseBodyServiceInfoServiceActionListServiceAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfoNeedRestartComponentNameList extends $tea.Model {
  service?: string[];
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceResponseBodyServiceInfo extends $tea.Model {
  needRestartInfo?: string;
  needRestartHostIdList?: DescribeClusterServiceResponseBodyServiceInfoNeedRestartHostIdList;
  clusterServiceSummaryList?: DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryList;
  serviceActionList?: DescribeClusterServiceResponseBodyServiceInfoServiceActionList;
  needRestartNum?: number;
  needRestartComponentNameList?: DescribeClusterServiceResponseBodyServiceInfoNeedRestartComponentNameList;
  serviceVersion?: string;
  serviceStatus?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      needRestartInfo: 'NeedRestartInfo',
      needRestartHostIdList: 'NeedRestartHostIdList',
      clusterServiceSummaryList: 'ClusterServiceSummaryList',
      serviceActionList: 'ServiceActionList',
      needRestartNum: 'NeedRestartNum',
      needRestartComponentNameList: 'NeedRestartComponentNameList',
      serviceVersion: 'ServiceVersion',
      serviceStatus: 'ServiceStatus',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRestartInfo: 'string',
      needRestartHostIdList: DescribeClusterServiceResponseBodyServiceInfoNeedRestartHostIdList,
      clusterServiceSummaryList: DescribeClusterServiceResponseBodyServiceInfoClusterServiceSummaryList,
      serviceActionList: DescribeClusterServiceResponseBodyServiceInfoServiceActionList,
      needRestartNum: 'number',
      needRestartComponentNameList: DescribeClusterServiceResponseBodyServiceInfoNeedRestartComponentNameList,
      serviceVersion: 'string',
      serviceStatus: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue extends $tea.Model {
  value?: string;
  description?: string;
  itemName?: string;
  isCustom?: boolean;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      description: 'Description',
      itemName: 'ItemName',
      isCustom: 'IsCustom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      description: 'string',
      itemName: 'string',
      isCustom: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueList extends $tea.Model {
  configItemValue?: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue[];
  static names(): { [key: string]: string } {
    return {
      configItemValue: 'ConfigItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemValue: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValue extends $tea.Model {
  configName?: string;
  scopeId?: number;
  configItemValueList?: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueList;
  allowCustom?: boolean;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      scopeId: 'ScopeId',
      configItemValueList: 'ConfigItemValueList',
      allowCustom: 'AllowCustom',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      scopeId: 'number',
      configItemValueList: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValueConfigItemValueList,
      allowCustom: 'boolean',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigConfigValueList extends $tea.Model {
  configValue?: DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValue[];
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigConfigValueListConfigValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyTypes extends $tea.Model {
  propertyType?: string[];
  static names(): { [key: string]: string } {
    return {
      propertyType: 'propertyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoEffectWay extends $tea.Model {
  effectType?: string;
  invokeServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      invokeServiceName: 'InvokeServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'string',
      invokeServiceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntriesValueEntryInfo extends $tea.Model {
  value?: string;
  description?: string;
  label?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      description: 'string',
      label: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntries extends $tea.Model {
  valueEntryInfo?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntriesValueEntryInfo[];
  static names(): { [key: string]: string } {
    return {
      valueEntryInfo: 'ValueEntryInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueEntryInfo: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntriesValueEntryInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributes extends $tea.Model {
  type?: string;
  maximum?: string;
  unit?: string;
  hidden?: boolean;
  incrememtStep?: string;
  readOnly?: boolean;
  entries?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntries;
  mimimum?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      maximum: 'Maximum',
      unit: 'Unit',
      hidden: 'Hidden',
      incrememtStep: 'IncrememtStep',
      readOnly: 'ReadOnly',
      entries: 'Entries',
      mimimum: 'Mimimum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      maximum: 'string',
      unit: 'string',
      hidden: 'boolean',
      incrememtStep: 'string',
      readOnly: 'boolean',
      entries: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributesEntries,
      mimimum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfo extends $tea.Model {
  displayName?: string;
  value?: string;
  propertyTypes?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyTypes;
  description?: string;
  effectWay?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoEffectWay;
  component?: string;
  propertyValueAttributes?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributes;
  fileName?: string;
  name?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      value: 'Value',
      propertyTypes: 'PropertyTypes',
      description: 'Description',
      effectWay: 'EffectWay',
      component: 'Component',
      propertyValueAttributes: 'PropertyValueAttributes',
      fileName: 'FileName',
      name: 'Name',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      value: 'string',
      propertyTypes: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyTypes,
      description: 'string',
      effectWay: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoEffectWay,
      component: 'string',
      propertyValueAttributes: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfoPropertyValueAttributes,
      fileName: 'string',
      name: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfigPropertyInfoList extends $tea.Model {
  propertyInfo?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfo[];
  static names(): { [key: string]: string } {
    return {
      propertyInfo: 'PropertyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyInfo: { 'type': 'array', 'itemType': DescribeClusterServiceConfigResponseBodyConfigPropertyInfoListPropertyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigResponseBodyConfig extends $tea.Model {
  applied?: string;
  comment?: string;
  createTime?: string;
  configVersion?: string;
  configValueList?: DescribeClusterServiceConfigResponseBodyConfigConfigValueList;
  author?: string;
  propertyInfoList?: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoList;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      applied: 'Applied',
      comment: 'Comment',
      createTime: 'CreateTime',
      configVersion: 'ConfigVersion',
      configValueList: 'ConfigValueList',
      author: 'Author',
      propertyInfoList: 'PropertyInfoList',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applied: 'string',
      comment: 'string',
      createTime: 'string',
      configVersion: 'string',
      configValueList: DescribeClusterServiceConfigResponseBodyConfigConfigValueList,
      author: 'string',
      propertyInfoList: DescribeClusterServiceConfigResponseBodyConfigPropertyInfoList,
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue extends $tea.Model {
  value?: string;
  oldValue?: string;
  itemName?: string;
  changeType?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      oldValue: 'OldValue',
      itemName: 'ItemName',
      changeType: 'ChangeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      oldValue: 'string',
      itemName: 'string',
      changeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValueConfigItemValueList extends $tea.Model {
  configItemValue?: DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue[];
  static names(): { [key: string]: string } {
    return {
      configItemValue: 'ConfigItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemValue: { 'type': 'array', 'itemType': DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValueConfigItemValueListConfigItemValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValue extends $tea.Model {
  configName?: string;
  configItemValueList?: DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValueConfigItemValueList;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      configItemValueList: 'ConfigItemValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      configItemValueList: DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValueConfigItemValueList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueList extends $tea.Model {
  configValue?: DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValue[];
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: { 'type': 'array', 'itemType': DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueListConfigValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigHistoryResponseBodyConfig extends $tea.Model {
  applied?: boolean;
  comment?: string;
  createTime?: string;
  configVersion?: string;
  configValueList?: DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueList;
  author?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      applied: 'Applied',
      comment: 'Comment',
      createTime: 'CreateTime',
      configVersion: 'ConfigVersion',
      configValueList: 'ConfigValueList',
      author: 'Author',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applied: 'boolean',
      comment: 'string',
      createTime: 'string',
      configVersion: 'string',
      configValueList: DescribeClusterServiceConfigHistoryResponseBodyConfigConfigValueList,
      author: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTagValueListValue extends $tea.Model {
  value?: string;
  valueDesc?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueDesc: 'ValueDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTagValueList extends $tea.Model {
  value?: DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTagValueListValue[];
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTagValueListValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTag extends $tea.Model {
  valueList?: DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTagValueList;
  tag?: string;
  tagDesc?: string;
  static names(): { [key: string]: string } {
    return {
      valueList: 'ValueList',
      tag: 'Tag',
      tagDesc: 'TagDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueList: DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTagValueList,
      tag: 'string',
      tagDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterServiceConfigTagResponseBodyConfigTagList extends $tea.Model {
  configTag?: DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTag[];
  static names(): { [key: string]: string } {
    return {
      configTag: 'ConfigTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTag: { 'type': 'array', 'itemType': DescribeClusterServiceConfigTagResponseBodyConfigTagListConfigTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoHostGroupListHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  sysDiskType?: string;
  multiInstanceTypes?: string;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  period?: string;
  diskCapacity?: number;
  nodeCount?: number;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      sysDiskType: 'SysDiskType',
      multiInstanceTypes: 'MultiInstanceTypes',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      sysDiskType: 'string',
      multiInstanceTypes: 'string',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      period: 'string',
      diskCapacity: 'number',
      nodeCount: 'number',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoHostGroupList extends $tea.Model {
  hostGroup?: DescribeClusterTemplateResponseBodyTemplateInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoTagsTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoTags extends $tea.Model {
  tag?: DescribeClusterTemplateResponseBodyTemplateInfoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoConfigListConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoConfigList extends $tea.Model {
  config?: DescribeClusterTemplateResponseBodyTemplateInfoConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionListBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfoSoftwareInfoList extends $tea.Model {
  softwareInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterTemplateResponseBodyTemplateInfo extends $tea.Model {
  vpcId?: string;
  keyPairName?: string;
  logEnable?: boolean;
  sshEnable?: boolean;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  masterPwd?: string;
  userId?: string;
  hostGroupList?: DescribeClusterTemplateResponseBodyTemplateInfoHostGroupList;
  tags?: DescribeClusterTemplateResponseBodyTemplateInfoTags;
  gmtModified?: number;
  templateName?: string;
  allowNotebook?: boolean;
  isOpenPublicIp?: boolean;
  depositType?: string;
  securityGroupName?: string;
  configList?: DescribeClusterTemplateResponseBodyTemplateInfoConfigList;
  bootstrapActionList?: DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionList;
  softwareInfoList?: DescribeClusterTemplateResponseBodyTemplateInfoSoftwareInfoList;
  instanceGeneration?: string;
  createSource?: string;
  easEnable?: boolean;
  useCustomHiveMetaDb?: boolean;
  userDefinedEmrEcsRole?: string;
  metaStoreType?: string;
  machineType?: string;
  useLocalMetaDb?: boolean;
  masterNodeTotal?: number;
  initCustomHiveMetaDb?: boolean;
  ioOptimized?: boolean;
  metaStoreConf?: string;
  vSwitchId?: string;
  configurations?: string;
  emrVer?: string;
  logPath?: string;
  clusterType?: string;
  netType?: string;
  zoneId?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      keyPairName: 'KeyPairName',
      logEnable: 'LogEnable',
      sshEnable: 'SshEnable',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      masterPwd: 'MasterPwd',
      userId: 'UserId',
      hostGroupList: 'HostGroupList',
      tags: 'Tags',
      gmtModified: 'GmtModified',
      templateName: 'TemplateName',
      allowNotebook: 'AllowNotebook',
      isOpenPublicIp: 'IsOpenPublicIp',
      depositType: 'DepositType',
      securityGroupName: 'SecurityGroupName',
      configList: 'ConfigList',
      bootstrapActionList: 'BootstrapActionList',
      softwareInfoList: 'SoftwareInfoList',
      instanceGeneration: 'InstanceGeneration',
      createSource: 'CreateSource',
      easEnable: 'EasEnable',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      metaStoreType: 'MetaStoreType',
      machineType: 'MachineType',
      useLocalMetaDb: 'UseLocalMetaDb',
      masterNodeTotal: 'MasterNodeTotal',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      ioOptimized: 'IoOptimized',
      metaStoreConf: 'MetaStoreConf',
      vSwitchId: 'VSwitchId',
      configurations: 'Configurations',
      emrVer: 'EmrVer',
      logPath: 'LogPath',
      clusterType: 'ClusterType',
      netType: 'NetType',
      zoneId: 'ZoneId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      keyPairName: 'string',
      logEnable: 'boolean',
      sshEnable: 'boolean',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      masterPwd: 'string',
      userId: 'string',
      hostGroupList: DescribeClusterTemplateResponseBodyTemplateInfoHostGroupList,
      tags: DescribeClusterTemplateResponseBodyTemplateInfoTags,
      gmtModified: 'number',
      templateName: 'string',
      allowNotebook: 'boolean',
      isOpenPublicIp: 'boolean',
      depositType: 'string',
      securityGroupName: 'string',
      configList: DescribeClusterTemplateResponseBodyTemplateInfoConfigList,
      bootstrapActionList: DescribeClusterTemplateResponseBodyTemplateInfoBootstrapActionList,
      softwareInfoList: DescribeClusterTemplateResponseBodyTemplateInfoSoftwareInfoList,
      instanceGeneration: 'string',
      createSource: 'string',
      easEnable: 'boolean',
      useCustomHiveMetaDb: 'boolean',
      userDefinedEmrEcsRole: 'string',
      metaStoreType: 'string',
      machineType: 'string',
      useLocalMetaDb: 'boolean',
      masterNodeTotal: 'number',
      initCustomHiveMetaDb: 'boolean',
      ioOptimized: 'boolean',
      metaStoreConf: 'string',
      vSwitchId: 'string',
      configurations: 'string',
      emrVer: 'string',
      logPath: 'string',
      clusterType: 'string',
      netType: 'string',
      zoneId: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo extends $tea.Model {
  status?: string;
  clusterName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clusterName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoFailReason extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware extends $tea.Model {
  displayName?: string;
  startTpe?: number;
  version?: string;
  onlyDisplay?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      startTpe: 'StartTpe',
      version: 'Version',
      onlyDisplay: 'OnlyDisplay',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      startTpe: 'number',
      version: 'string',
      onlyDisplay: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares extends $tea.Model {
  software?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware[];
  static names(): { [key: string]: string } {
    return {
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      software: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo extends $tea.Model {
  emrVer?: string;
  clusterType?: string;
  softwares?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares;
  static names(): { [key: string]: string } {
    return {
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrVer: 'string',
      clusterType: 'string',
      softwares: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfoSoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink extends $tea.Model {
  link?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks extends $tea.Model {
  ZKLink?: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink[];
  static names(): { [key: string]: string } {
    return {
      ZKLink: 'ZKLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLink: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinksZKLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoAccessInfo extends $tea.Model {
  ZKLinks?: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks;
  static names(): { [key: string]: string } {
    return {
      ZKLinks: 'ZKLinks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ZKLinks: DescribeClusterV2ResponseBodyClusterInfoAccessInfoZKLinks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo extends $tea.Model {
  type?: string;
  size?: number;
  device?: string;
  diskName?: string;
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      size: 'Size',
      device: 'Device',
      diskName: 'DiskName',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      size: 'number',
      device: 'string',
      diskName: 'string',
      diskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos extends $tea.Model {
  diskInfo?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo[];
  static names(): { [key: string]: string } {
    return {
      diskInfo: 'DiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfosDiskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos extends $tea.Model {
  daemonInfo?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo[];
  static names(): { [key: string]: string } {
    return {
      daemonInfo: 'DaemonInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daemonInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfosDaemonInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode extends $tea.Model {
  status?: string;
  supportIpV6?: boolean;
  innerIp?: string;
  expiredTime?: string;
  createTime?: string;
  zoneId?: string;
  instanceId?: string;
  diskInfos?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos;
  emrExpiredTime?: string;
  pubIp?: string;
  daemonInfos?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      supportIpV6: 'SupportIpV6',
      innerIp: 'InnerIp',
      expiredTime: 'ExpiredTime',
      createTime: 'CreateTime',
      zoneId: 'ZoneId',
      instanceId: 'InstanceId',
      diskInfos: 'DiskInfos',
      emrExpiredTime: 'EmrExpiredTime',
      pubIp: 'PubIp',
      daemonInfos: 'DaemonInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      supportIpV6: 'boolean',
      innerIp: 'string',
      expiredTime: 'string',
      createTime: 'string',
      zoneId: 'string',
      instanceId: 'string',
      diskInfos: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDiskInfos,
      emrExpiredTime: 'string',
      pubIp: 'string',
      daemonInfos: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNodeDaemonInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes extends $tea.Model {
  node?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodesNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup extends $tea.Model {
  nodes?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes;
  lockType?: string;
  hostGroupType?: string;
  hostGroupSubType?: string;
  hostGroupChangeStatus?: string;
  chargeType?: string;
  diskType?: string;
  lockReason?: string;
  hostGroupId?: string;
  instanceType?: string;
  bandWidth?: string;
  diskCount?: number;
  period?: string;
  diskCapacity?: number;
  cpuCore?: number;
  memoryCapacity?: number;
  nodeCount?: number;
  hostGroupChangeType?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      lockType: 'LockType',
      hostGroupType: 'HostGroupType',
      hostGroupSubType: 'HostGroupSubType',
      hostGroupChangeStatus: 'HostGroupChangeStatus',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      lockReason: 'LockReason',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      bandWidth: 'BandWidth',
      diskCount: 'DiskCount',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      cpuCore: 'CpuCore',
      memoryCapacity: 'MemoryCapacity',
      nodeCount: 'NodeCount',
      hostGroupChangeType: 'HostGroupChangeType',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroupNodes,
      lockType: 'string',
      hostGroupType: 'string',
      hostGroupSubType: 'string',
      hostGroupChangeStatus: 'string',
      chargeType: 'string',
      diskType: 'string',
      lockReason: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      bandWidth: 'string',
      diskCount: 'number',
      period: 'string',
      diskCapacity: 'number',
      cpuCore: 'number',
      memoryCapacity: 'number',
      nodeCount: 'number',
      hostGroupChangeType: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostGroupList extends $tea.Model {
  hostGroup?: DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo extends $tea.Model {
  status?: string;
  clusterName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      clusterName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList extends $tea.Model {
  gatewayClusterInfo?: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      gatewayClusterInfo: 'GatewayClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayClusterInfo: { 'type': 'array', 'itemType': DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoListGatewayClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo extends $tea.Model {
  hpBizId?: string;
  hpName?: string;
  static names(): { [key: string]: string } {
    return {
      hpBizId: 'HpBizId',
      hpName: 'HpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpBizId: 'string',
      hpName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterV2ResponseBodyClusterInfo extends $tea.Model {
  vpcId?: string;
  logEnable?: boolean;
  taskNodeInService?: number;
  autoScalingSpotWithLimitAllowed?: boolean;
  chargeType?: string;
  userId?: string;
  stopTime?: number;
  createType?: string;
  depositType?: string;
  relateClusterInfo?: DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo;
  relateClusterId?: string;
  securityGroupName?: string;
  resizeDiskEnable?: boolean;
  imageId?: string;
  failReason?: DescribeClusterV2ResponseBodyClusterInfoFailReason;
  userDefinedEmrEcsRole?: string;
  metaStoreType?: string;
  softwareInfo?: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo;
  startTime?: number;
  configurations?: string;
  logPath?: string;
  autoScalingVersion?: string;
  netType?: string;
  zoneId?: string;
  accessInfo?: DescribeClusterV2ResponseBodyClusterInfoAccessInfo;
  createResource?: string;
  status?: string;
  runningTime?: number;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  autoScalingAllowed?: boolean;
  hostGroupList?: DescribeClusterV2ResponseBodyClusterInfoHostGroupList;
  masterNodeInService?: number;
  autoScalingEnable?: boolean;
  autoScalingWithGraceAllowed?: boolean;
  showSoftwareInterface?: boolean;
  coreNodeInService?: number;
  autoScalingByLoadAllowed?: boolean;
  k8sClusterId?: string;
  localMetaDb?: boolean;
  bootstrapActionList?: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList;
  gatewayClusterInfoList?: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList;
  instanceGeneration?: string;
  name?: string;
  easEnable?: boolean;
  machineType?: string;
  hostPoolInfo?: DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo;
  masterNodeTotal?: number;
  regionId?: string;
  period?: number;
  extraInfo?: string;
  ioOptimized?: boolean;
  vSwitchId?: string;
  expiredTime?: number;
  coreNodeTotal?: number;
  gatewayClusterIds?: string;
  bootstrapFailed?: boolean;
  id?: string;
  taskNodeTotal?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      logEnable: 'LogEnable',
      taskNodeInService: 'TaskNodeInService',
      autoScalingSpotWithLimitAllowed: 'AutoScalingSpotWithLimitAllowed',
      chargeType: 'ChargeType',
      userId: 'UserId',
      stopTime: 'StopTime',
      createType: 'CreateType',
      depositType: 'DepositType',
      relateClusterInfo: 'RelateClusterInfo',
      relateClusterId: 'RelateClusterId',
      securityGroupName: 'SecurityGroupName',
      resizeDiskEnable: 'ResizeDiskEnable',
      imageId: 'ImageId',
      failReason: 'FailReason',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      metaStoreType: 'MetaStoreType',
      softwareInfo: 'SoftwareInfo',
      startTime: 'StartTime',
      configurations: 'Configurations',
      logPath: 'LogPath',
      autoScalingVersion: 'AutoScalingVersion',
      netType: 'NetType',
      zoneId: 'ZoneId',
      accessInfo: 'AccessInfo',
      createResource: 'CreateResource',
      status: 'Status',
      runningTime: 'RunningTime',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      autoScalingAllowed: 'AutoScalingAllowed',
      hostGroupList: 'HostGroupList',
      masterNodeInService: 'MasterNodeInService',
      autoScalingEnable: 'AutoScalingEnable',
      autoScalingWithGraceAllowed: 'AutoScalingWithGraceAllowed',
      showSoftwareInterface: 'ShowSoftwareInterface',
      coreNodeInService: 'CoreNodeInService',
      autoScalingByLoadAllowed: 'AutoScalingByLoadAllowed',
      k8sClusterId: 'K8sClusterId',
      localMetaDb: 'LocalMetaDb',
      bootstrapActionList: 'BootstrapActionList',
      gatewayClusterInfoList: 'GatewayClusterInfoList',
      instanceGeneration: 'InstanceGeneration',
      name: 'Name',
      easEnable: 'EasEnable',
      machineType: 'MachineType',
      hostPoolInfo: 'HostPoolInfo',
      masterNodeTotal: 'MasterNodeTotal',
      regionId: 'RegionId',
      period: 'Period',
      extraInfo: 'ExtraInfo',
      ioOptimized: 'IoOptimized',
      vSwitchId: 'VSwitchId',
      expiredTime: 'ExpiredTime',
      coreNodeTotal: 'CoreNodeTotal',
      gatewayClusterIds: 'GatewayClusterIds',
      bootstrapFailed: 'BootstrapFailed',
      id: 'Id',
      taskNodeTotal: 'TaskNodeTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      logEnable: 'boolean',
      taskNodeInService: 'number',
      autoScalingSpotWithLimitAllowed: 'boolean',
      chargeType: 'string',
      userId: 'string',
      stopTime: 'number',
      createType: 'string',
      depositType: 'string',
      relateClusterInfo: DescribeClusterV2ResponseBodyClusterInfoRelateClusterInfo,
      relateClusterId: 'string',
      securityGroupName: 'string',
      resizeDiskEnable: 'boolean',
      imageId: 'string',
      failReason: DescribeClusterV2ResponseBodyClusterInfoFailReason,
      userDefinedEmrEcsRole: 'string',
      metaStoreType: 'string',
      softwareInfo: DescribeClusterV2ResponseBodyClusterInfoSoftwareInfo,
      startTime: 'number',
      configurations: 'string',
      logPath: 'string',
      autoScalingVersion: 'string',
      netType: 'string',
      zoneId: 'string',
      accessInfo: DescribeClusterV2ResponseBodyClusterInfoAccessInfo,
      createResource: 'string',
      status: 'string',
      runningTime: 'number',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      autoScalingAllowed: 'boolean',
      hostGroupList: DescribeClusterV2ResponseBodyClusterInfoHostGroupList,
      masterNodeInService: 'number',
      autoScalingEnable: 'boolean',
      autoScalingWithGraceAllowed: 'boolean',
      showSoftwareInterface: 'boolean',
      coreNodeInService: 'number',
      autoScalingByLoadAllowed: 'boolean',
      k8sClusterId: 'string',
      localMetaDb: 'boolean',
      bootstrapActionList: DescribeClusterV2ResponseBodyClusterInfoBootstrapActionList,
      gatewayClusterInfoList: DescribeClusterV2ResponseBodyClusterInfoGatewayClusterInfoList,
      instanceGeneration: 'string',
      name: 'string',
      easEnable: 'boolean',
      machineType: 'string',
      hostPoolInfo: DescribeClusterV2ResponseBodyClusterInfoHostPoolInfo,
      masterNodeTotal: 'number',
      regionId: 'string',
      period: 'number',
      extraInfo: 'string',
      ioOptimized: 'boolean',
      vSwitchId: 'string',
      expiredTime: 'number',
      coreNodeTotal: 'number',
      gatewayClusterIds: 'string',
      bootstrapFailed: 'boolean',
      id: 'string',
      taskNodeTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyJobInfoListJobInfo extends $tea.Model {
  type?: string;
  failAct?: string;
  name?: string;
  runParameter?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      failAct: 'FailAct',
      name: 'Name',
      runParameter: 'RunParameter',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      failAct: 'string',
      name: 'string',
      runParameter: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyJobInfoList extends $tea.Model {
  jobInfo?: DescribeExecutionPlanResponseBodyJobInfoListJobInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: { 'type': 'array', 'itemType': DescribeExecutionPlanResponseBodyJobInfoListJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware extends $tea.Model {
  displayName?: string;
  startTpe?: number;
  version?: string;
  onlyDisplay?: boolean;
  optional?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      startTpe: 'StartTpe',
      version: 'Version',
      onlyDisplay: 'OnlyDisplay',
      optional: 'Optional',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      startTpe: 'number',
      version: 'string',
      onlyDisplay: 'boolean',
      optional: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfoSoftwares extends $tea.Model {
  software?: DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware[];
  static names(): { [key: string]: string } {
    return {
      software: 'Software',
    };
  }

  static types(): { [key: string]: any } {
    return {
      software: { 'type': 'array', 'itemType': DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfoSoftwaresSoftware },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfo extends $tea.Model {
  emrVer?: string;
  clusterType?: string;
  softwares?: DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfoSoftwares;
  static names(): { [key: string]: string } {
    return {
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrVer: 'string',
      clusterType: 'string',
      softwares: DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfoSoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoEcsOrdersEcsOrderInfo extends $tea.Model {
  index?: number;
  diskCapacity?: number;
  nodeType?: string;
  nodeCount?: number;
  diskType?: string;
  instanceType?: string;
  diskCount?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      diskCapacity: 'DiskCapacity',
      nodeType: 'NodeType',
      nodeCount: 'NodeCount',
      diskType: 'DiskType',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      diskCapacity: 'number',
      nodeType: 'string',
      nodeCount: 'number',
      diskType: 'string',
      instanceType: 'string',
      diskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoEcsOrders extends $tea.Model {
  ecsOrderInfo?: DescribeExecutionPlanResponseBodyClusterInfoEcsOrdersEcsOrderInfo[];
  static names(): { [key: string]: string } {
    return {
      ecsOrderInfo: 'EcsOrderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrderInfo: { 'type': 'array', 'itemType': DescribeExecutionPlanResponseBodyClusterInfoEcsOrdersEcsOrderInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoConfigListConfig extends $tea.Model {
  configValue?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoConfigList extends $tea.Model {
  config?: DescribeExecutionPlanResponseBodyClusterInfoConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': DescribeExecutionPlanResponseBodyClusterInfoConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoBootstrapActionListBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: DescribeExecutionPlanResponseBodyClusterInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': DescribeExecutionPlanResponseBodyClusterInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutionPlanResponseBodyClusterInfo extends $tea.Model {
  vpcId?: string;
  useCustomHiveMetaDB?: boolean;
  logEnable?: boolean;
  userDefinedEmrEcsRole?: string;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  useLocalMetaDb?: boolean;
  softwareInfo?: DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfo;
  ioOptimized?: boolean;
  vSwitchId?: string;
  configurations?: string;
  ecsOrders?: DescribeExecutionPlanResponseBodyClusterInfoEcsOrders;
  emrVer?: string;
  logPath?: string;
  clusterType?: string;
  initCustomHiveMetaDB?: boolean;
  netType?: string;
  zoneId?: string;
  configList?: DescribeExecutionPlanResponseBodyClusterInfoConfigList;
  bootstrapActionList?: DescribeExecutionPlanResponseBodyClusterInfoBootstrapActionList;
  instanceGeneration?: string;
  name?: string;
  easEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      useCustomHiveMetaDB: 'UseCustomHiveMetaDB',
      logEnable: 'LogEnable',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      useLocalMetaDb: 'UseLocalMetaDb',
      softwareInfo: 'SoftwareInfo',
      ioOptimized: 'IoOptimized',
      vSwitchId: 'VSwitchId',
      configurations: 'Configurations',
      ecsOrders: 'EcsOrders',
      emrVer: 'EmrVer',
      logPath: 'LogPath',
      clusterType: 'ClusterType',
      initCustomHiveMetaDB: 'InitCustomHiveMetaDB',
      netType: 'NetType',
      zoneId: 'ZoneId',
      configList: 'ConfigList',
      bootstrapActionList: 'BootstrapActionList',
      instanceGeneration: 'InstanceGeneration',
      name: 'Name',
      easEnable: 'EasEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      useCustomHiveMetaDB: 'boolean',
      logEnable: 'boolean',
      userDefinedEmrEcsRole: 'string',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      useLocalMetaDb: 'boolean',
      softwareInfo: DescribeExecutionPlanResponseBodyClusterInfoSoftwareInfo,
      ioOptimized: 'boolean',
      vSwitchId: 'string',
      configurations: 'string',
      ecsOrders: DescribeExecutionPlanResponseBodyClusterInfoEcsOrders,
      emrVer: 'string',
      logPath: 'string',
      clusterType: 'string',
      initCustomHiveMetaDB: 'boolean',
      netType: 'string',
      zoneId: 'string',
      configList: DescribeExecutionPlanResponseBodyClusterInfoConfigList,
      bootstrapActionList: DescribeExecutionPlanResponseBodyClusterInfoBootstrapActionList,
      instanceGeneration: 'string',
      name: 'string',
      easEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBodyParentFlowListParentFlow extends $tea.Model {
  projectName?: string;
  projectId?: string;
  parentFlowName?: string;
  parentFlowId?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      projectId: 'ProjectId',
      parentFlowName: 'ParentFlowName',
      parentFlowId: 'ParentFlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      projectId: 'string',
      parentFlowName: 'string',
      parentFlowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBodyParentFlowList extends $tea.Model {
  parentFlow?: DescribeFlowResponseBodyParentFlowListParentFlow[];
  static names(): { [key: string]: string } {
    return {
      parentFlow: 'ParentFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlow: { 'type': 'array', 'itemType': DescribeFlowResponseBodyParentFlowListParentFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance extends $tea.Model {
  type?: string;
  status?: string;
  failAct?: string;
  retryInterval?: string;
  projectId?: string;
  jobType?: string;
  hostName?: string;
  gmtModified?: number;
  externalInfo?: string;
  retries?: number;
  endTime?: number;
  startTime?: number;
  externalStatus?: string;
  jobName?: string;
  nodeName?: string;
  jobId?: string;
  gmtCreate?: number;
  externalId?: string;
  duration?: number;
  id?: string;
  pending?: boolean;
  clusterId?: string;
  maxRetry?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      failAct: 'FailAct',
      retryInterval: 'RetryInterval',
      projectId: 'ProjectId',
      jobType: 'JobType',
      hostName: 'HostName',
      gmtModified: 'GmtModified',
      externalInfo: 'ExternalInfo',
      retries: 'Retries',
      endTime: 'EndTime',
      startTime: 'StartTime',
      externalStatus: 'ExternalStatus',
      jobName: 'JobName',
      nodeName: 'NodeName',
      jobId: 'JobId',
      gmtCreate: 'GmtCreate',
      externalId: 'ExternalId',
      duration: 'Duration',
      id: 'Id',
      pending: 'Pending',
      clusterId: 'ClusterId',
      maxRetry: 'MaxRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      failAct: 'string',
      retryInterval: 'string',
      projectId: 'string',
      jobType: 'string',
      hostName: 'string',
      gmtModified: 'number',
      externalInfo: 'string',
      retries: 'number',
      endTime: 'number',
      startTime: 'number',
      externalStatus: 'string',
      jobName: 'string',
      nodeName: 'string',
      jobId: 'string',
      gmtCreate: 'number',
      externalId: 'string',
      duration: 'number',
      id: 'string',
      pending: 'boolean',
      clusterId: 'string',
      maxRetry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyNodeInstance extends $tea.Model {
  nodeInstance?: DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstance: { 'type': 'array', 'itemType': DescribeFlowInstanceResponseBodyNodeInstanceNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow extends $tea.Model {
  scheduleKey?: string;
  bizDate?: number;
  dependencyInstanceId?: string;
  dependencyFlowId?: string;
  meet?: boolean;
  flowInstanceId?: string;
  projectId?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleKey: 'ScheduleKey',
      bizDate: 'BizDate',
      dependencyInstanceId: 'DependencyInstanceId',
      dependencyFlowId: 'DependencyFlowId',
      meet: 'Meet',
      flowInstanceId: 'FlowInstanceId',
      projectId: 'ProjectId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleKey: 'string',
      bizDate: 'number',
      dependencyInstanceId: 'string',
      dependencyFlowId: 'string',
      meet: 'boolean',
      flowInstanceId: 'string',
      projectId: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowInstanceResponseBodyDependencyFlowList extends $tea.Model {
  parentFlow?: DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow[];
  static names(): { [key: string]: string } {
    return {
      parentFlow: 'ParentFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentFlow: { 'type': 'array', 'itemType': DescribeFlowInstanceResponseBodyDependencyFlowListParentFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBodyResourceListResource extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowJobResponseBodyResourceList extends $tea.Model {
  resource?: DescribeFlowJobResponseBodyResourceListResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeFlowJobResponseBodyResourceListResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrys extends $tea.Model {
  logEntry?: DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry[];
  static names(): { [key: string]: string } {
    return {
      logEntry: 'LogEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntry: { 'type': 'array', 'itemType': DescribeFlowNodeInstanceContainerLogResponseBodyLogEntrysLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry extends $tea.Model {
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrys extends $tea.Model {
  logEntry?: DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry[];
  static names(): { [key: string]: string } {
    return {
      logEntry: 'LogEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEntry: { 'type': 'array', 'itemType': DescribeFlowNodeInstanceLauncherLogResponseBodyLogEntrysLogEntry },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyHostList extends $tea.Model {
  host?: string[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowProjectClusterSettingResponseBodyQueueList extends $tea.Model {
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataRowsRowColumns extends $tea.Model {
  column?: string[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataRowsRow extends $tea.Model {
  columns?: DescribeMetaTablePreviewTaskResponseBodyDataRowsRowColumns;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: DescribeMetaTablePreviewTaskResponseBodyDataRowsRowColumns,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataRows extends $tea.Model {
  row?: DescribeMetaTablePreviewTaskResponseBodyDataRowsRow[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': DescribeMetaTablePreviewTaskResponseBodyDataRowsRow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyDataHeaders extends $tea.Model {
  header?: string[];
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaTablePreviewTaskResponseBodyData extends $tea.Model {
  rows?: DescribeMetaTablePreviewTaskResponseBodyDataRows;
  headers?: DescribeMetaTablePreviewTaskResponseBodyDataHeaders;
  static names(): { [key: string]: string } {
    return {
      rows: 'Rows',
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: DescribeMetaTablePreviewTaskResponseBodyDataRows,
      headers: DescribeMetaTablePreviewTaskResponseBodyDataHeaders,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingConfigInstanceTypeList extends $tea.Model {
  instanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingConfigSpotPriceLimitsSpotPriceLimit extends $tea.Model {
  priceLimit?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      priceLimit: 'PriceLimit',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceLimit: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingConfigSpotPriceLimits extends $tea.Model {
  spotPriceLimit?: DescribeScalingGroupInstanceV2ResponseBodyScalingConfigSpotPriceLimitsSpotPriceLimit[];
  static names(): { [key: string]: string } {
    return {
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceLimit: { 'type': 'array', 'itemType': DescribeScalingGroupInstanceV2ResponseBodyScalingConfigSpotPriceLimitsSpotPriceLimit },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingConfig extends $tea.Model {
  dataDiskCategory?: string;
  dataDiskCount?: number;
  instanceTypeList?: DescribeScalingGroupInstanceV2ResponseBodyScalingConfigInstanceTypeList;
  payType?: string;
  dataDiskSize?: number;
  sysDiskCategory?: string;
  spotPriceLimits?: DescribeScalingGroupInstanceV2ResponseBodyScalingConfigSpotPriceLimits;
  spotStrategy?: string;
  sysDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskCount: 'DataDiskCount',
      instanceTypeList: 'InstanceTypeList',
      payType: 'PayType',
      dataDiskSize: 'DataDiskSize',
      sysDiskCategory: 'SysDiskCategory',
      spotPriceLimits: 'SpotPriceLimits',
      spotStrategy: 'SpotStrategy',
      sysDiskSize: 'SysDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskCount: 'number',
      instanceTypeList: DescribeScalingGroupInstanceV2ResponseBodyScalingConfigInstanceTypeList,
      payType: 'string',
      dataDiskSize: 'number',
      sysDiskCategory: 'string',
      spotPriceLimits: DescribeScalingGroupInstanceV2ResponseBodyScalingConfigSpotPriceLimits,
      spotStrategy: 'string',
      sysDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRuleCloudWatchTrigger extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  evaluationCount?: string;
  unit?: string;
  metricDisplayName?: string;
  threshold?: string;
  period?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      unit: 'Unit',
      metricDisplayName: 'MetricDisplayName',
      threshold: 'Threshold',
      period: 'Period',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      evaluationCount: 'string',
      unit: 'string',
      metricDisplayName: 'string',
      threshold: 'string',
      period: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRuleSchedulerTrigger extends $tea.Model {
  launchExpirationTime?: number;
  recurrenceValue?: string;
  recurrenceType?: string;
  recurrenceEndTime?: number;
  launchTime?: number;
  static names(): { [key: string]: string } {
    return {
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceValue: 'RecurrenceValue',
      recurrenceType: 'RecurrenceType',
      recurrenceEndTime: 'RecurrenceEndTime',
      launchTime: 'LaunchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchExpirationTime: 'number',
      recurrenceValue: 'string',
      recurrenceType: 'string',
      recurrenceEndTime: 'number',
      launchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRule extends $tea.Model {
  cloudWatchTrigger?: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRuleCloudWatchTrigger;
  status?: string;
  adjustmentType?: string;
  recurrenceValue?: string;
  recurrenceType?: string;
  timeoutWithGrace?: number;
  recurrenceEndTime?: string;
  ruleName?: string;
  scalingGroupId?: number;
  ruleCategory?: string;
  launchExpirationTime?: number;
  cooldown?: number;
  adjustmentValue?: number;
  schedulerTrigger?: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRuleSchedulerTrigger;
  launchTime?: string;
  withGrace?: boolean;
  essScalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudWatchTrigger: 'CloudWatchTrigger',
      status: 'Status',
      adjustmentType: 'AdjustmentType',
      recurrenceValue: 'RecurrenceValue',
      recurrenceType: 'RecurrenceType',
      timeoutWithGrace: 'TimeoutWithGrace',
      recurrenceEndTime: 'RecurrenceEndTime',
      ruleName: 'RuleName',
      scalingGroupId: 'ScalingGroupId',
      ruleCategory: 'RuleCategory',
      launchExpirationTime: 'LaunchExpirationTime',
      cooldown: 'Cooldown',
      adjustmentValue: 'AdjustmentValue',
      schedulerTrigger: 'SchedulerTrigger',
      launchTime: 'LaunchTime',
      withGrace: 'WithGrace',
      essScalingRuleId: 'EssScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudWatchTrigger: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRuleCloudWatchTrigger,
      status: 'string',
      adjustmentType: 'string',
      recurrenceValue: 'string',
      recurrenceType: 'string',
      timeoutWithGrace: 'number',
      recurrenceEndTime: 'string',
      ruleName: 'string',
      scalingGroupId: 'number',
      ruleCategory: 'string',
      launchExpirationTime: 'number',
      cooldown: 'number',
      adjustmentValue: 'number',
      schedulerTrigger: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRuleSchedulerTrigger,
      launchTime: 'string',
      withGrace: 'boolean',
      essScalingRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingGroupInstanceV2ResponseBodyScalingRuleList extends $tea.Model {
  scalingRule?: DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRule[];
  static names(): { [key: string]: string } {
    return {
      scalingRule: 'ScalingRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingRule: { 'type': 'array', 'itemType': DescribeScalingGroupInstanceV2ResponseBodyScalingRuleListScalingRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRuleResponseBodyCloudWatchTrigger extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  evaluationCount?: string;
  unit?: string;
  metricDisplayName?: string;
  threshold?: string;
  period?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      unit: 'Unit',
      metricDisplayName: 'MetricDisplayName',
      threshold: 'Threshold',
      period: 'Period',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      evaluationCount: 'string',
      unit: 'string',
      metricDisplayName: 'string',
      threshold: 'string',
      period: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScalingRuleResponseBodySchedulerTrigger extends $tea.Model {
  launchExpirationTime?: number;
  recurrenceValue?: string;
  recurrenceType?: string;
  recurrenceEndTime?: number;
  launchTime?: number;
  static names(): { [key: string]: string } {
    return {
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceValue: 'RecurrenceValue',
      recurrenceType: 'RecurrenceType',
      recurrenceEndTime: 'RecurrenceEndTime',
      launchTime: 'LaunchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchExpirationTime: 'number',
      recurrenceValue: 'string',
      recurrenceType: 'string',
      recurrenceEndTime: 'number',
      launchTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyAvailableGroupListSecurityGroup extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  description?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  ecsCount?: number;
  availableInstanceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      ecsCount: 'EcsCount',
      availableInstanceAmount: 'AvailableInstanceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      description: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      ecsCount: 'number',
      availableInstanceAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodyAvailableGroupList extends $tea.Model {
  securityGroup?: DescribeSecurityGroupAttributeResponseBodyAvailableGroupListSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodyAvailableGroupListSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodySecurityGroupAttributeListSecurityGroupAttribute extends $tea.Model {
  bizContent?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizContent: 'BizContent',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContent: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityGroupAttributeResponseBodySecurityGroupAttributeList extends $tea.Model {
  securityGroupAttribute?: DescribeSecurityGroupAttributeResponseBodySecurityGroupAttributeListSecurityGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      securityGroupAttribute: 'SecurityGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupAttribute: { 'type': 'array', 'itemType': DescribeSecurityGroupAttributeResponseBodySecurityGroupAttributeListSecurityGroupAttribute },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHdfsCapacityStatisticInfoResponseBodyHdfsCapacityListClusterStatHdfsCapacity extends $tea.Model {
  capacityUsedNonDfs?: number;
  capacityTotal?: number;
  capacityTotalGB?: number;
  capacityRemaining?: number;
  capacityUsed?: number;
  clusterBizId?: string;
  capacityUsedGB?: number;
  dateTime?: string;
  capacityRemainingGB?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUsedNonDfs: 'CapacityUsedNonDfs',
      capacityTotal: 'CapacityTotal',
      capacityTotalGB: 'CapacityTotalGB',
      capacityRemaining: 'CapacityRemaining',
      capacityUsed: 'CapacityUsed',
      clusterBizId: 'ClusterBizId',
      capacityUsedGB: 'CapacityUsedGB',
      dateTime: 'DateTime',
      capacityRemainingGB: 'CapacityRemainingGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUsedNonDfs: 'number',
      capacityTotal: 'number',
      capacityTotalGB: 'number',
      capacityRemaining: 'number',
      capacityUsed: 'number',
      clusterBizId: 'string',
      capacityUsedGB: 'number',
      dateTime: 'string',
      capacityRemainingGB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHdfsCapacityStatisticInfoResponseBodyHdfsCapacityList extends $tea.Model {
  clusterStatHdfsCapacity?: GetHdfsCapacityStatisticInfoResponseBodyHdfsCapacityListClusterStatHdfsCapacity[];
  static names(): { [key: string]: string } {
    return {
      clusterStatHdfsCapacity: 'ClusterStatHdfsCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatHdfsCapacity: { 'type': 'array', 'itemType': GetHdfsCapacityStatisticInfoResponseBodyHdfsCapacityListClusterStatHdfsCapacity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInputStatisticInfoResponseBodyJobInputListClusterStatJobInput extends $tea.Model {
  startTime?: number;
  finishTime?: number;
  state?: string;
  bytesInput?: number;
  jobId?: string;
  user?: string;
  queue?: string;
  name?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      state: 'State',
      bytesInput: 'BytesInput',
      jobId: 'JobId',
      user: 'User',
      queue: 'Queue',
      name: 'Name',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      finishTime: 'number',
      state: 'string',
      bytesInput: 'number',
      jobId: 'string',
      user: 'string',
      queue: 'string',
      name: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInputStatisticInfoResponseBodyJobInputList extends $tea.Model {
  clusterStatJobInput?: GetJobInputStatisticInfoResponseBodyJobInputListClusterStatJobInput[];
  static names(): { [key: string]: string } {
    return {
      clusterStatJobInput: 'ClusterStatJobInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatJobInput: { 'type': 'array', 'itemType': GetJobInputStatisticInfoResponseBodyJobInputListClusterStatJobInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobOutputStatisticInfoResponseBodyJobOutputListClusterStatJobOutput extends $tea.Model {
  startTime?: number;
  finishTime?: number;
  state?: string;
  jobId?: string;
  user?: string;
  queue?: string;
  bytesOutput?: number;
  name?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      finishTime: 'FinishTime',
      state: 'State',
      jobId: 'JobId',
      user: 'User',
      queue: 'Queue',
      bytesOutput: 'BytesOutput',
      name: 'Name',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      finishTime: 'number',
      state: 'string',
      jobId: 'string',
      user: 'string',
      queue: 'string',
      bytesOutput: 'number',
      name: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobOutputStatisticInfoResponseBodyJobOutputList extends $tea.Model {
  clusterStatJobOutput?: GetJobOutputStatisticInfoResponseBodyJobOutputListClusterStatJobOutput[];
  static names(): { [key: string]: string } {
    return {
      clusterStatJobOutput: 'ClusterStatJobOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatJobOutput: { 'type': 'array', 'itemType': GetJobOutputStatisticInfoResponseBodyJobOutputListClusterStatJobOutput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunningTimeStatisticInfoResponseBodyRunningTimeListClusterStatJobRunningTime extends $tea.Model {
  startTime?: number;
  runningTime?: number;
  finishTime?: number;
  state?: string;
  jobId?: string;
  user?: string;
  queue?: string;
  name?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      runningTime: 'RunningTime',
      finishTime: 'FinishTime',
      state: 'State',
      jobId: 'JobId',
      user: 'User',
      queue: 'Queue',
      name: 'Name',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      runningTime: 'number',
      finishTime: 'number',
      state: 'string',
      jobId: 'string',
      user: 'string',
      queue: 'string',
      name: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunningTimeStatisticInfoResponseBodyRunningTimeList extends $tea.Model {
  clusterStatJobRunningTime?: GetJobRunningTimeStatisticInfoResponseBodyRunningTimeListClusterStatJobRunningTime[];
  static names(): { [key: string]: string } {
    return {
      clusterStatJobRunningTime: 'ClusterStatJobRunningTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatJobRunningTime: { 'type': 'array', 'itemType': GetJobRunningTimeStatisticInfoResponseBodyRunningTimeListClusterStatJobRunningTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInputStatisticInfoResponseBodyQueueInputListClusterStatQueueInput extends $tea.Model {
  bytesInput?: number;
  queue?: string;
  static names(): { [key: string]: string } {
    return {
      bytesInput: 'BytesInput',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesInput: 'number',
      queue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueInputStatisticInfoResponseBodyQueueInputList extends $tea.Model {
  clusterStatQueueInput?: GetQueueInputStatisticInfoResponseBodyQueueInputListClusterStatQueueInput[];
  static names(): { [key: string]: string } {
    return {
      clusterStatQueueInput: 'ClusterStatQueueInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatQueueInput: { 'type': 'array', 'itemType': GetQueueInputStatisticInfoResponseBodyQueueInputListClusterStatQueueInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueOutputStatisticInfoResponseBodyQueueOutputListClusterStatQueueOutput extends $tea.Model {
  queue?: string;
  bytesOutput?: number;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      bytesOutput: 'BytesOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: 'string',
      bytesOutput: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueOutputStatisticInfoResponseBodyQueueOutputList extends $tea.Model {
  clusterStatQueueOutput?: GetQueueOutputStatisticInfoResponseBodyQueueOutputListClusterStatQueueOutput[];
  static names(): { [key: string]: string } {
    return {
      clusterStatQueueOutput: 'ClusterStatQueueOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatQueueOutput: { 'type': 'array', 'itemType': GetQueueOutputStatisticInfoResponseBodyQueueOutputListClusterStatQueueOutput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueSubmissionStatisticInfoResponseBodyQueueSubmissionListClusterStatQueueSubmission extends $tea.Model {
  submission?: number;
  queue?: string;
  static names(): { [key: string]: string } {
    return {
      submission: 'Submission',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submission: 'number',
      queue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueSubmissionStatisticInfoResponseBodyQueueSubmissionList extends $tea.Model {
  clusterStatQueueSubmission?: GetQueueSubmissionStatisticInfoResponseBodyQueueSubmissionListClusterStatQueueSubmission[];
  static names(): { [key: string]: string } {
    return {
      clusterStatQueueSubmission: 'ClusterStatQueueSubmission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatQueueSubmission: { 'type': 'array', 'itemType': GetQueueSubmissionStatisticInfoResponseBodyQueueSubmissionListClusterStatQueueSubmission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInputStatisticInfoResponseBodyUserInputListClusterStatUserInput extends $tea.Model {
  bytesInput?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      bytesInput: 'BytesInput',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesInput: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInputStatisticInfoResponseBodyUserInputList extends $tea.Model {
  clusterStatUserInput?: GetUserInputStatisticInfoResponseBodyUserInputListClusterStatUserInput[];
  static names(): { [key: string]: string } {
    return {
      clusterStatUserInput: 'ClusterStatUserInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatUserInput: { 'type': 'array', 'itemType': GetUserInputStatisticInfoResponseBodyUserInputListClusterStatUserInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOutputStatisticInfoResponseBodyUserOutputListClusterStatUserOutput extends $tea.Model {
  user?: string;
  bytesOutput?: number;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      bytesOutput: 'BytesOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
      bytesOutput: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOutputStatisticInfoResponseBodyUserOutputList extends $tea.Model {
  clusterStatUserOutput?: GetUserOutputStatisticInfoResponseBodyUserOutputListClusterStatUserOutput[];
  static names(): { [key: string]: string } {
    return {
      clusterStatUserOutput: 'ClusterStatUserOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatUserOutput: { 'type': 'array', 'itemType': GetUserOutputStatisticInfoResponseBodyUserOutputListClusterStatUserOutput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSubmissionStatisticInfoResponseBodyUserSubmissionListClusterStatUserSubmission extends $tea.Model {
  submission?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      submission: 'Submission',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submission: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSubmissionStatisticInfoResponseBodyUserSubmissionList extends $tea.Model {
  clusterStatUserSubmission?: GetUserSubmissionStatisticInfoResponseBodyUserSubmissionListClusterStatUserSubmission[];
  static names(): { [key: string]: string } {
    return {
      clusterStatUserSubmission: 'ClusterStatUserSubmission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterStatUserSubmission: { 'type': 'array', 'itemType': GetUserSubmissionStatisticInfoResponseBodyUserSubmissionListClusterStatUserSubmission },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdviceActionResponseBodyItemsItem extends $tea.Model {
  hostgroupName?: string;
  configName?: string;
  actionType?: string;
  command?: string;
  gmtCreate?: number;
  component?: string;
  configItemKey?: string;
  gmtModified?: number;
  serviceName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      hostgroupName: 'HostgroupName',
      configName: 'ConfigName',
      actionType: 'ActionType',
      command: 'Command',
      gmtCreate: 'GmtCreate',
      component: 'Component',
      configItemKey: 'ConfigItemKey',
      gmtModified: 'GmtModified',
      serviceName: 'ServiceName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostgroupName: 'string',
      configName: 'string',
      actionType: 'string',
      command: 'string',
      gmtCreate: 'number',
      component: 'string',
      configItemKey: 'string',
      gmtModified: 'number',
      serviceName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAdviceActionResponseBodyItems extends $tea.Model {
  item?: ListAdviceActionResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListAdviceActionResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmApplicationResponseBodyApmAppInfoListApmAppInfo extends $tea.Model {
  vcoreSeconds?: number;
  diagnostics?: string;
  queue?: string;
  diagnoseCode?: string;
  finalStatus?: string;
  allocatedVcore?: number;
  queueUsagePercent?: number;
  name?: string;
  resourceRequests?: string;
  progress?: number;
  state?: string;
  clusterUsagePercent?: number;
  runningContainers?: number;
  applicationType?: string;
  user?: string;
  allocatedMemory?: number;
  runningDuration?: number;
  memorySeconds?: number;
  startTime?: number;
  diagnoseResult?: string;
  finishedTime?: number;
  duration?: number;
  clusterBizId?: string;
  applicationId?: string;
  submitTime?: number;
  static names(): { [key: string]: string } {
    return {
      vcoreSeconds: 'VcoreSeconds',
      diagnostics: 'Diagnostics',
      queue: 'Queue',
      diagnoseCode: 'DiagnoseCode',
      finalStatus: 'FinalStatus',
      allocatedVcore: 'AllocatedVcore',
      queueUsagePercent: 'QueueUsagePercent',
      name: 'Name',
      resourceRequests: 'ResourceRequests',
      progress: 'Progress',
      state: 'State',
      clusterUsagePercent: 'ClusterUsagePercent',
      runningContainers: 'RunningContainers',
      applicationType: 'ApplicationType',
      user: 'User',
      allocatedMemory: 'AllocatedMemory',
      runningDuration: 'RunningDuration',
      memorySeconds: 'MemorySeconds',
      startTime: 'StartTime',
      diagnoseResult: 'DiagnoseResult',
      finishedTime: 'FinishedTime',
      duration: 'Duration',
      clusterBizId: 'ClusterBizId',
      applicationId: 'ApplicationId',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vcoreSeconds: 'number',
      diagnostics: 'string',
      queue: 'string',
      diagnoseCode: 'string',
      finalStatus: 'string',
      allocatedVcore: 'number',
      queueUsagePercent: 'number',
      name: 'string',
      resourceRequests: 'string',
      progress: 'number',
      state: 'string',
      clusterUsagePercent: 'number',
      runningContainers: 'number',
      applicationType: 'string',
      user: 'string',
      allocatedMemory: 'number',
      runningDuration: 'number',
      memorySeconds: 'number',
      startTime: 'number',
      diagnoseResult: 'string',
      finishedTime: 'number',
      duration: 'number',
      clusterBizId: 'string',
      applicationId: 'string',
      submitTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmApplicationResponseBodyApmAppInfoList extends $tea.Model {
  apmAppInfo?: ListApmApplicationResponseBodyApmAppInfoListApmAppInfo[];
  static names(): { [key: string]: string } {
    return {
      apmAppInfo: 'ApmAppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apmAppInfo: { 'type': 'array', 'itemType': ListApmApplicationResponseBodyApmAppInfoListApmAppInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBodyItemsItemMetadataInfo extends $tea.Model {
  metadataType?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      metadataType: 'MetadataType',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataType: 'string',
      properties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBodyItemsItem extends $tea.Model {
  status?: string;
  tarFileName?: string;
  storePath?: string;
  createTime?: number;
  md5?: string;
  backupPlanId?: string;
  metadataInfo?: ListBackupsResponseBodyItemsItemMetadataInfo;
  id?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      tarFileName: 'TarFileName',
      storePath: 'StorePath',
      createTime: 'CreateTime',
      md5: 'Md5',
      backupPlanId: 'BackupPlanId',
      metadataInfo: 'MetadataInfo',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      tarFileName: 'string',
      storePath: 'string',
      createTime: 'number',
      md5: 'string',
      backupPlanId: 'string',
      metadataInfo: ListBackupsResponseBodyItemsItemMetadataInfo,
      id: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupsResponseBodyItems extends $tea.Model {
  item?: ListBackupsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListBackupsResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostListHostDiskListDisk extends $tea.Model {
  type?: string;
  diskMountPoint?: string;
  blockMountPoint?: string;
  device?: string;
  diskSize?: number;
  event?: string;
  diskType?: string;
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      diskMountPoint: 'DiskMountPoint',
      blockMountPoint: 'BlockMountPoint',
      device: 'Device',
      diskSize: 'DiskSize',
      event: 'Event',
      diskType: 'DiskType',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      diskMountPoint: 'string',
      blockMountPoint: 'string',
      device: 'string',
      diskSize: 'number',
      event: 'string',
      diskType: 'string',
      diskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostListHostDiskList extends $tea.Model {
  disk?: ListClusterHostResponseBodyHostListHostDiskListDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': ListClusterHostResponseBodyHostListHostDiskListDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostListHost extends $tea.Model {
  status?: string;
  type?: string;
  serialNumber?: string;
  privateIp?: string;
  diskList?: ListClusterHostResponseBodyHostListHostDiskList;
  createTime?: string;
  chargeType?: string;
  hostName?: string;
  hostGroupId?: string;
  instanceType?: string;
  hostInstanceId?: string;
  supportIpV6?: boolean;
  cpu?: number;
  expiredTime?: number;
  zoneId?: string;
  publicIp?: string;
  instanceStatus?: string;
  memory?: number;
  emrExpiredTime?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      serialNumber: 'SerialNumber',
      privateIp: 'PrivateIp',
      diskList: 'DiskList',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      hostName: 'HostName',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      hostInstanceId: 'HostInstanceId',
      supportIpV6: 'SupportIpV6',
      cpu: 'Cpu',
      expiredTime: 'ExpiredTime',
      zoneId: 'ZoneId',
      publicIp: 'PublicIp',
      instanceStatus: 'InstanceStatus',
      memory: 'Memory',
      emrExpiredTime: 'EmrExpiredTime',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      serialNumber: 'string',
      privateIp: 'string',
      diskList: ListClusterHostResponseBodyHostListHostDiskList,
      createTime: 'string',
      chargeType: 'string',
      hostName: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      hostInstanceId: 'string',
      supportIpV6: 'boolean',
      cpu: 'number',
      expiredTime: 'number',
      zoneId: 'string',
      publicIp: 'string',
      instanceStatus: 'string',
      memory: 'number',
      emrExpiredTime: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostResponseBodyHostList extends $tea.Model {
  host?: ListClusterHostResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListClusterHostResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponseBodyComponentListComponent extends $tea.Model {
  serviceDisplayName?: string;
  status?: string;
  serialNumber?: string;
  serverStatus?: string;
  privateIp?: string;
  componentName?: string;
  commissionStatus?: string;
  hostName?: string;
  needRestart?: boolean;
  instanceType?: string;
  hostId?: string;
  hostInstanceId?: string;
  cpu?: number;
  componentDisplayName?: string;
  publicIp?: string;
  memory?: number;
  role?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceDisplayName: 'ServiceDisplayName',
      status: 'Status',
      serialNumber: 'SerialNumber',
      serverStatus: 'ServerStatus',
      privateIp: 'PrivateIp',
      componentName: 'ComponentName',
      commissionStatus: 'CommissionStatus',
      hostName: 'HostName',
      needRestart: 'NeedRestart',
      instanceType: 'InstanceType',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      cpu: 'Cpu',
      componentDisplayName: 'ComponentDisplayName',
      publicIp: 'PublicIp',
      memory: 'Memory',
      role: 'Role',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceDisplayName: 'string',
      status: 'string',
      serialNumber: 'string',
      serverStatus: 'string',
      privateIp: 'string',
      componentName: 'string',
      commissionStatus: 'string',
      hostName: 'string',
      needRestart: 'boolean',
      instanceType: 'string',
      hostId: 'string',
      hostInstanceId: 'string',
      cpu: 'number',
      componentDisplayName: 'string',
      publicIp: 'string',
      memory: 'number',
      role: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostComponentResponseBodyComponentList extends $tea.Model {
  component?: ListClusterHostComponentResponseBodyComponentListComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': ListClusterHostComponentResponseBodyComponentListComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostGroupResponseBodyHostGroupListHostGroup extends $tea.Model {
  status?: string;
  hostGroupSubType?: string;
  hostGroupType?: string;
  comment?: string;
  scalingGroupMinNode?: number;
  vswitchId?: string;
  securityGroupId?: string;
  hostGroupChangeStatus?: string;
  chargeType?: string;
  payType?: string;
  dataDiskType?: string;
  systemDiskCount?: number;
  systemDiskSize?: number;
  scalingGroupBizId?: string;
  gmtModified?: string;
  memory?: number;
  scalingGroupMaxNode?: number;
  hostGroupChangeType?: string;
  lockType?: string;
  scalingInMode?: string;
  costSavingPercent?: number;
  dataDiskSize?: number;
  lockReason?: string;
  hostGroupId?: string;
  gmtCreate?: string;
  instanceType?: string;
  cpu?: number;
  dataDiskCount?: number;
  scalingGroupActiveStatus?: string;
  nodeCount?: number;
  systemDiskType?: string;
  scalingGroupConfigState?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hostGroupSubType: 'HostGroupSubType',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      scalingGroupMinNode: 'ScalingGroupMinNode',
      vswitchId: 'VswitchId',
      securityGroupId: 'SecurityGroupId',
      hostGroupChangeStatus: 'HostGroupChangeStatus',
      chargeType: 'ChargeType',
      payType: 'PayType',
      dataDiskType: 'DataDiskType',
      systemDiskCount: 'SystemDiskCount',
      systemDiskSize: 'SystemDiskSize',
      scalingGroupBizId: 'ScalingGroupBizId',
      gmtModified: 'gmtModified',
      memory: 'Memory',
      scalingGroupMaxNode: 'ScalingGroupMaxNode',
      hostGroupChangeType: 'HostGroupChangeType',
      lockType: 'LockType',
      scalingInMode: 'ScalingInMode',
      costSavingPercent: 'CostSavingPercent',
      dataDiskSize: 'DataDiskSize',
      lockReason: 'LockReason',
      hostGroupId: 'HostGroupId',
      gmtCreate: 'gmtCreate',
      instanceType: 'InstanceType',
      cpu: 'Cpu',
      dataDiskCount: 'DataDiskCount',
      scalingGroupActiveStatus: 'ScalingGroupActiveStatus',
      nodeCount: 'NodeCount',
      systemDiskType: 'SystemDiskType',
      scalingGroupConfigState: 'ScalingGroupConfigState',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hostGroupSubType: 'string',
      hostGroupType: 'string',
      comment: 'string',
      scalingGroupMinNode: 'number',
      vswitchId: 'string',
      securityGroupId: 'string',
      hostGroupChangeStatus: 'string',
      chargeType: 'string',
      payType: 'string',
      dataDiskType: 'string',
      systemDiskCount: 'number',
      systemDiskSize: 'number',
      scalingGroupBizId: 'string',
      gmtModified: 'string',
      memory: 'number',
      scalingGroupMaxNode: 'number',
      hostGroupChangeType: 'string',
      lockType: 'string',
      scalingInMode: 'string',
      costSavingPercent: 'number',
      dataDiskSize: 'number',
      lockReason: 'string',
      hostGroupId: 'string',
      gmtCreate: 'string',
      instanceType: 'string',
      cpu: 'number',
      dataDiskCount: 'number',
      scalingGroupActiveStatus: 'string',
      nodeCount: 'number',
      systemDiskType: 'string',
      scalingGroupConfigState: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHostGroupResponseBodyHostGroupList extends $tea.Model {
  hostGroup?: ListClusterHostGroupResponseBodyHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': ListClusterHostGroupResponseBodyHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionListServiceAction extends $tea.Model {
  displayName?: string;
  componentName?: string;
  command?: string;
  actionName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      componentName: 'ComponentName',
      command: 'Command',
      actionName: 'ActionName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      componentName: 'string',
      command: 'string',
      actionName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionList extends $tea.Model {
  serviceAction?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionListServiceAction[];
  static names(): { [key: string]: string } {
    return {
      serviceAction: 'ServiceAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAction: { 'type': 'array', 'itemType': ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionListServiceAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledService extends $tea.Model {
  serviceEcmVersion?: string;
  serviceDisplayName?: string;
  serviceActionList?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionList;
  notStartedNum?: number;
  serviceVersion?: string;
  comment?: string;
  abnormalNum?: number;
  serviceName?: string;
  onlyClient?: boolean;
  serviceStatus?: string;
  needRestartNum?: number;
  static names(): { [key: string]: string } {
    return {
      serviceEcmVersion: 'ServiceEcmVersion',
      serviceDisplayName: 'ServiceDisplayName',
      serviceActionList: 'ServiceActionList',
      notStartedNum: 'notStartedNum',
      serviceVersion: 'ServiceVersion',
      comment: 'comment',
      abnormalNum: 'abnormalNum',
      serviceName: 'ServiceName',
      onlyClient: 'onlyClient',
      serviceStatus: 'serviceStatus',
      needRestartNum: 'needRestartNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceEcmVersion: 'string',
      serviceDisplayName: 'string',
      serviceActionList: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledServiceServiceActionList,
      notStartedNum: 'number',
      serviceVersion: 'string',
      comment: 'string',
      abnormalNum: 'number',
      serviceName: 'string',
      onlyClient: 'boolean',
      serviceStatus: 'string',
      needRestartNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInstalledServiceResponseBodyClusterInstalledServiceList extends $tea.Model {
  clusterInstalledService?: ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledService[];
  static names(): { [key: string]: string } {
    return {
      clusterInstalledService: 'ClusterInstalledService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInstalledService: { 'type': 'array', 'itemType': ListClusterInstalledServiceResponseBodyClusterInstalledServiceListClusterInstalledService },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponseBodyClusterOperationListClusterOperation extends $tea.Model {
  status?: string;
  startTime?: string;
  comment?: string;
  operationName?: string;
  operationId?: string;
  duration?: string;
  percentage?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      startTime: 'StartTime',
      comment: 'Comment',
      operationName: 'OperationName',
      operationId: 'OperationId',
      duration: 'Duration',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      startTime: 'string',
      comment: 'string',
      operationName: 'string',
      operationId: 'string',
      duration: 'string',
      percentage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationResponseBodyClusterOperationList extends $tea.Model {
  clusterOperation?: ListClusterOperationResponseBodyClusterOperationListClusterOperation[];
  static names(): { [key: string]: string } {
    return {
      clusterOperation: 'ClusterOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperation: { 'type': 'array', 'itemType': ListClusterOperationResponseBodyClusterOperationListClusterOperation },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponseBodyClusterOperationHostListClusterOperationHost extends $tea.Model {
  status?: string;
  hostName?: string;
  percentage?: string;
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      hostName: 'HostName',
      percentage: 'Percentage',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      hostName: 'string',
      percentage: 'string',
      hostId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostResponseBodyClusterOperationHostList extends $tea.Model {
  clusterOperationHost?: ListClusterOperationHostResponseBodyClusterOperationHostListClusterOperationHost[];
  static names(): { [key: string]: string } {
    return {
      clusterOperationHost: 'ClusterOperationHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperationHost: { 'type': 'array', 'itemType': ListClusterOperationHostResponseBodyClusterOperationHostListClusterOperationHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskListClusterOperationHostTask extends $tea.Model {
  status?: string;
  taskName?: string;
  percentage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskName: 'TaskName',
      percentage: 'Percentage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskName: 'string',
      percentage: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskList extends $tea.Model {
  clusterOperationHostTask?: ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskListClusterOperationHostTask[];
  static names(): { [key: string]: string } {
    return {
      clusterOperationHostTask: 'ClusterOperationHostTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperationHostTask: { 'type': 'array', 'itemType': ListClusterOperationHostTaskResponseBodyClusterOperationHostTaskListClusterOperationHostTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationTaskResponseBodyClusterOperationTaskListClusterOperationTask extends $tea.Model {
  status?: string;
  taskName?: string;
  percentage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskName: 'TaskName',
      percentage: 'Percentage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskName: 'string',
      percentage: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterOperationTaskResponseBodyClusterOperationTaskList extends $tea.Model {
  clusterOperationTask?: ListClusterOperationTaskResponseBodyClusterOperationTaskListClusterOperationTask[];
  static names(): { [key: string]: string } {
    return {
      clusterOperationTask: 'ClusterOperationTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterOperationTask: { 'type': 'array', 'itemType': ListClusterOperationTaskResponseBodyClusterOperationTaskListClusterOperationTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoTagsTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoTags extends $tea.Model {
  tag?: ListClustersResponseBodyClustersClusterInfoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  currentCount?: number;
  orderIdList?: string;
  targetCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
      targetCount: 'TargetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      orderIdList: 'string',
      targetCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfo extends $tea.Model {
  type?: string;
  status?: string;
  runningTime?: number;
  machineType?: string;
  orderList?: string;
  metaStoreType?: string;
  createTime?: number;
  chargeType?: string;
  tags?: ListClustersResponseBodyClustersClusterInfoTags;
  operationId?: number;
  depositType?: string;
  period?: number;
  k8sClusterId?: string;
  expiredTime?: number;
  hasUncompletedOrder?: boolean;
  orderTaskInfo?: ListClustersResponseBodyClustersClusterInfoOrderTaskInfo;
  name?: string;
  createResource?: string;
  id?: string;
  failReason?: ListClustersResponseBodyClustersClusterInfoFailReason;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      runningTime: 'RunningTime',
      machineType: 'MachineType',
      orderList: 'OrderList',
      metaStoreType: 'MetaStoreType',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      tags: 'Tags',
      operationId: 'OperationId',
      depositType: 'DepositType',
      period: 'Period',
      k8sClusterId: 'K8sClusterId',
      expiredTime: 'ExpiredTime',
      hasUncompletedOrder: 'HasUncompletedOrder',
      orderTaskInfo: 'OrderTaskInfo',
      name: 'Name',
      createResource: 'CreateResource',
      id: 'Id',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      runningTime: 'number',
      machineType: 'string',
      orderList: 'string',
      metaStoreType: 'string',
      createTime: 'number',
      chargeType: 'string',
      tags: ListClustersResponseBodyClustersClusterInfoTags,
      operationId: 'number',
      depositType: 'string',
      period: 'number',
      k8sClusterId: 'string',
      expiredTime: 'number',
      hasUncompletedOrder: 'boolean',
      orderTaskInfo: ListClustersResponseBodyClustersClusterInfoOrderTaskInfo,
      name: 'string',
      createResource: 'string',
      id: 'string',
      failReason: ListClustersResponseBodyClustersClusterInfoFailReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListClustersResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceResponseBodyClusterServiceListClusterServiceServiceActionListServiceAction extends $tea.Model {
  displayName?: string;
  componentName?: string;
  command?: string;
  actionName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      componentName: 'ComponentName',
      command: 'Command',
      actionName: 'ActionName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      componentName: 'string',
      command: 'string',
      actionName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceResponseBodyClusterServiceListClusterServiceServiceActionList extends $tea.Model {
  serviceAction?: ListClusterServiceResponseBodyClusterServiceListClusterServiceServiceActionListServiceAction[];
  static names(): { [key: string]: string } {
    return {
      serviceAction: 'ServiceAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAction: { 'type': 'array', 'itemType': ListClusterServiceResponseBodyClusterServiceListClusterServiceServiceActionListServiceAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceResponseBodyClusterServiceListClusterService extends $tea.Model {
  serviceDisplayName?: string;
  notStartInfo?: string;
  clientType?: boolean;
  installStatus?: boolean;
  serviceActionList?: ListClusterServiceResponseBodyClusterServiceListClusterServiceServiceActionList;
  needRestartNum?: number;
  serviceStatus?: string;
  healthStatus?: string;
  needRestartInfo?: string;
  stoppedNum?: number;
  serviceVersion?: string;
  serviceName?: string;
  abnormalNum?: number;
  static names(): { [key: string]: string } {
    return {
      serviceDisplayName: 'ServiceDisplayName',
      notStartInfo: 'NotStartInfo',
      clientType: 'ClientType',
      installStatus: 'InstallStatus',
      serviceActionList: 'ServiceActionList',
      needRestartNum: 'NeedRestartNum',
      serviceStatus: 'ServiceStatus',
      healthStatus: 'HealthStatus',
      needRestartInfo: 'NeedRestartInfo',
      stoppedNum: 'StoppedNum',
      serviceVersion: 'ServiceVersion',
      serviceName: 'ServiceName',
      abnormalNum: 'AbnormalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceDisplayName: 'string',
      notStartInfo: 'string',
      clientType: 'boolean',
      installStatus: 'boolean',
      serviceActionList: ListClusterServiceResponseBodyClusterServiceListClusterServiceServiceActionList,
      needRestartNum: 'number',
      serviceStatus: 'string',
      healthStatus: 'string',
      needRestartInfo: 'string',
      stoppedNum: 'number',
      serviceVersion: 'string',
      serviceName: 'string',
      abnormalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceResponseBodyClusterServiceList extends $tea.Model {
  clusterService?: ListClusterServiceResponseBodyClusterServiceListClusterService[];
  static names(): { [key: string]: string } {
    return {
      clusterService: 'ClusterService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterService: { 'type': 'array', 'itemType': ListClusterServiceResponseBodyClusterServiceListClusterService },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentResponseBodyComponentListComponent extends $tea.Model {
  status?: string;
  serviceDisplayName?: string;
  privateIp?: string;
  serverStatus?: string;
  podName?: string;
  componentName?: string;
  commissionStatus?: string;
  namespace?: string;
  needRestart?: boolean;
  workloadType?: string;
  workloadName?: string;
  componentDisplayName?: string;
  publicIp?: string;
  serviceName?: string;
  role?: string;
  desiredCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      serviceDisplayName: 'ServiceDisplayName',
      privateIp: 'PrivateIp',
      serverStatus: 'ServerStatus',
      podName: 'PodName',
      componentName: 'ComponentName',
      commissionStatus: 'CommissionStatus',
      namespace: 'Namespace',
      needRestart: 'NeedRestart',
      workloadType: 'WorkloadType',
      workloadName: 'WorkloadName',
      componentDisplayName: 'ComponentDisplayName',
      publicIp: 'PublicIp',
      serviceName: 'ServiceName',
      role: 'Role',
      desiredCount: 'DesiredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      serviceDisplayName: 'string',
      privateIp: 'string',
      serverStatus: 'string',
      podName: 'string',
      componentName: 'string',
      commissionStatus: 'string',
      namespace: 'string',
      needRestart: 'boolean',
      workloadType: 'string',
      workloadName: 'string',
      componentDisplayName: 'string',
      publicIp: 'string',
      serviceName: 'string',
      role: 'string',
      desiredCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentResponseBodyComponentList extends $tea.Model {
  component?: ListClusterServiceComponentResponseBodyComponentListComponent[];
  static names(): { [key: string]: string } {
    return {
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: { 'type': 'array', 'itemType': ListClusterServiceComponentResponseBodyComponentListComponent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailListHealthDetailHealthRuleParam extends $tea.Model {
  service?: string;
  pass?: string;
  component?: string;
  hostNames?: string;
  ruleTitle?: string;
  ruleDescription?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      pass: 'Pass',
      component: 'Component',
      hostNames: 'HostNames',
      ruleTitle: 'RuleTitle',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      pass: 'string',
      component: 'string',
      hostNames: 'string',
      ruleTitle: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailListHealthDetail extends $tea.Model {
  code?: string;
  healthRuleParam?: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailListHealthDetailHealthRuleParam;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      healthRuleParam: 'HealthRuleParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      healthRuleParam: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailListHealthDetailHealthRuleParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailList extends $tea.Model {
  healthDetail?: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailListHealthDetail[];
  static names(): { [key: string]: string } {
    return {
      healthDetail: 'HealthDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthDetail: { 'type': 'array', 'itemType': ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailListHealthDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfo extends $tea.Model {
  healthLevel?: string;
  healthDetailList?: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailList;
  componentName?: string;
  normalNum?: number;
  manualStoppedNum?: number;
  stoppedNum?: number;
  agentHeartBeatLostNum?: number;
  totalNum?: number;
  serviceName?: string;
  createdTime?: number;
  static names(): { [key: string]: string } {
    return {
      healthLevel: 'HealthLevel',
      healthDetailList: 'HealthDetailList',
      componentName: 'ComponentName',
      normalNum: 'NormalNum',
      manualStoppedNum: 'ManualStoppedNum',
      stoppedNum: 'StoppedNum',
      agentHeartBeatLostNum: 'AgentHeartBeatLostNum',
      totalNum: 'TotalNum',
      serviceName: 'ServiceName',
      createdTime: 'CreatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthLevel: 'string',
      healthDetailList: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfoHealthDetailList,
      componentName: 'string',
      normalNum: 'number',
      manualStoppedNum: 'number',
      stoppedNum: 'number',
      agentHeartBeatLostNum: 'number',
      totalNum: 'number',
      serviceName: 'string',
      createdTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceComponentHealthInfoResponseBodyHealthInfoList extends $tea.Model {
  healthInfo?: ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfo[];
  static names(): { [key: string]: string } {
    return {
      healthInfo: 'HealthInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthInfo: { 'type': 'array', 'itemType': ListClusterServiceComponentHealthInfoResponseBodyHealthInfoListHealthInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory extends $tea.Model {
  oldValue?: string;
  comment?: string;
  createTime?: number;
  author?: string;
  hostName?: string;
  configItemName?: string;
  hostGroupId?: string;
  newValue?: string;
  hostInstanceId?: string;
  configFileName?: string;
  applied?: boolean;
  configVersion?: string;
  serviceName?: string;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      oldValue: 'OldValue',
      comment: 'Comment',
      createTime: 'CreateTime',
      author: 'Author',
      hostName: 'HostName',
      configItemName: 'ConfigItemName',
      hostGroupId: 'HostGroupId',
      newValue: 'NewValue',
      hostInstanceId: 'HostInstanceId',
      configFileName: 'ConfigFileName',
      applied: 'Applied',
      configVersion: 'ConfigVersion',
      serviceName: 'ServiceName',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oldValue: 'string',
      comment: 'string',
      createTime: 'number',
      author: 'string',
      hostName: 'string',
      configItemName: 'string',
      hostGroupId: 'string',
      newValue: 'string',
      hostInstanceId: 'string',
      configFileName: 'string',
      applied: 'boolean',
      configVersion: 'string',
      serviceName: 'string',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigHistoryResponseBodyConfigHistoryList extends $tea.Model {
  configHistory?: ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory[];
  static names(): { [key: string]: string } {
    return {
      configHistory: 'ConfigHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistory: { 'type': 'array', 'itemType': ListClusterServiceConfigHistoryResponseBodyConfigHistoryListConfigHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceQuickLinkResponseBodyQuickLinkListQuickLink extends $tea.Model {
  serviceDisplayName?: string;
  type?: string;
  protocol?: string;
  serviceName?: string;
  quickLinkAddress?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      serviceDisplayName: 'ServiceDisplayName',
      type: 'Type',
      protocol: 'Protocol',
      serviceName: 'ServiceName',
      quickLinkAddress: 'QuickLinkAddress',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceDisplayName: 'string',
      type: 'string',
      protocol: 'string',
      serviceName: 'string',
      quickLinkAddress: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceQuickLinkResponseBodyQuickLinkList extends $tea.Model {
  quickLink?: ListClusterServiceQuickLinkResponseBodyQuickLinkListQuickLink[];
  static names(): { [key: string]: string } {
    return {
      quickLink: 'QuickLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quickLink: { 'type': 'array', 'itemType': ListClusterServiceQuickLinkResponseBodyQuickLinkListQuickLink },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupListHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  sysDiskType?: string;
  multiInstanceTypes?: string;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  period?: string;
  diskCapacity?: number;
  nodeCount?: number;
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      sysDiskType: 'SysDiskType',
      multiInstanceTypes: 'MultiInstanceTypes',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      sysDiskType: 'string',
      multiInstanceTypes: 'string',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      period: 'string',
      diskCapacity: 'number',
      nodeCount: 'number',
      hostGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupList extends $tea.Model {
  hostGroup?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupListHostGroup[];
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupListHostGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigListConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigList extends $tea.Model {
  config?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigListConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionListBootstrapAction extends $tea.Model {
  arg?: string;
  path?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      path: 'Path',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      path: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionList extends $tea.Model {
  bootstrapAction?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionListBootstrapAction[];
  static names(): { [key: string]: string } {
    return {
      bootstrapAction: 'BootstrapAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapAction: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionListBootstrapAction },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoSoftwareInfoList extends $tea.Model {
  softwareInfo?: string[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfo extends $tea.Model {
  vpcId?: string;
  keyPairName?: string;
  logEnable?: boolean;
  sshEnable?: boolean;
  highAvailabilityEnable?: boolean;
  securityGroupId?: string;
  userId?: string;
  hostGroupList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupList;
  isOpenPublicIp?: boolean;
  allowNotebook?: boolean;
  gmtModified?: number;
  templateName?: string;
  depositType?: string;
  securityGroupName?: string;
  configList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigList;
  bootstrapActionList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionList;
  softwareInfoList?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoSoftwareInfoList;
  instanceGeneration?: string;
  createSource?: string;
  easEnable?: boolean;
  useCustomHiveMetaDb?: boolean;
  userDefinedEmrEcsRole?: string;
  machineType?: string;
  metaStoreType?: string;
  useLocalMetaDb?: boolean;
  masterNodeTotal?: number;
  initCustomHiveMetaDb?: boolean;
  ioOptimized?: boolean;
  metaStoreConf?: string;
  vSwitchId?: string;
  configurations?: string;
  logPath?: string;
  clusterType?: string;
  netType?: string;
  zoneId?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      keyPairName: 'KeyPairName',
      logEnable: 'LogEnable',
      sshEnable: 'SshEnable',
      highAvailabilityEnable: 'HighAvailabilityEnable',
      securityGroupId: 'SecurityGroupId',
      userId: 'UserId',
      hostGroupList: 'HostGroupList',
      isOpenPublicIp: 'IsOpenPublicIp',
      allowNotebook: 'AllowNotebook',
      gmtModified: 'GmtModified',
      templateName: 'TemplateName',
      depositType: 'DepositType',
      securityGroupName: 'SecurityGroupName',
      configList: 'ConfigList',
      bootstrapActionList: 'BootstrapActionList',
      softwareInfoList: 'SoftwareInfoList',
      instanceGeneration: 'InstanceGeneration',
      createSource: 'CreateSource',
      easEnable: 'EasEnable',
      useCustomHiveMetaDb: 'UseCustomHiveMetaDb',
      userDefinedEmrEcsRole: 'UserDefinedEmrEcsRole',
      machineType: 'MachineType',
      metaStoreType: 'MetaStoreType',
      useLocalMetaDb: 'UseLocalMetaDb',
      masterNodeTotal: 'MasterNodeTotal',
      initCustomHiveMetaDb: 'InitCustomHiveMetaDb',
      ioOptimized: 'IoOptimized',
      metaStoreConf: 'MetaStoreConf',
      vSwitchId: 'VSwitchId',
      configurations: 'Configurations',
      logPath: 'LogPath',
      clusterType: 'ClusterType',
      netType: 'NetType',
      zoneId: 'ZoneId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      keyPairName: 'string',
      logEnable: 'boolean',
      sshEnable: 'boolean',
      highAvailabilityEnable: 'boolean',
      securityGroupId: 'string',
      userId: 'string',
      hostGroupList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoHostGroupList,
      isOpenPublicIp: 'boolean',
      allowNotebook: 'boolean',
      gmtModified: 'number',
      templateName: 'string',
      depositType: 'string',
      securityGroupName: 'string',
      configList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoConfigList,
      bootstrapActionList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoBootstrapActionList,
      softwareInfoList: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfoSoftwareInfoList,
      instanceGeneration: 'string',
      createSource: 'string',
      easEnable: 'boolean',
      useCustomHiveMetaDb: 'boolean',
      userDefinedEmrEcsRole: 'string',
      machineType: 'string',
      metaStoreType: 'string',
      useLocalMetaDb: 'boolean',
      masterNodeTotal: 'number',
      initCustomHiveMetaDb: 'boolean',
      ioOptimized: 'boolean',
      metaStoreConf: 'string',
      vSwitchId: 'string',
      configurations: 'string',
      logPath: 'string',
      clusterType: 'string',
      netType: 'string',
      zoneId: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTemplatesResponseBodyTemplateInfoList extends $tea.Model {
  templateInfo?: ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfo[];
  static names(): { [key: string]: string } {
    return {
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateInfo: { 'type': 'array', 'itemType': ListClusterTemplatesResponseBodyTemplateInfoListTemplateInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyDataSourceListDataSource extends $tea.Model {
  status?: string;
  conf?: string;
  sourceType?: string;
  gmtModified?: number;
  creator?: string;
  modifier?: string;
  description?: string;
  gmtCreate?: number;
  createFrom?: string;
  name?: string;
  id?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      conf: 'Conf',
      sourceType: 'SourceType',
      gmtModified: 'GmtModified',
      creator: 'Creator',
      modifier: 'Modifier',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      createFrom: 'CreateFrom',
      name: 'Name',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      conf: 'string',
      sourceType: 'string',
      gmtModified: 'number',
      creator: 'string',
      modifier: 'string',
      description: 'string',
      gmtCreate: 'number',
      createFrom: 'string',
      name: 'string',
      id: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyDataSourceList extends $tea.Model {
  dataSource?: ListDataSourceResponseBodyDataSourceListDataSource[];
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: { 'type': 'array', 'itemType': ListDataSourceResponseBodyDataSourceListDataSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodySecurityGroupListSecurityGroup extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  description?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  ecsCount?: number;
  securityGroupType?: string;
  availableInstanceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      ecsCount: 'EcsCount',
      securityGroupType: 'SecurityGroupType',
      availableInstanceAmount: 'AvailableInstanceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      description: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      ecsCount: 'number',
      securityGroupType: 'string',
      availableInstanceAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodySecurityGroupList extends $tea.Model {
  securityGroup?: ListEmrAvailableConfigResponseBodySecurityGroupListSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': ListEmrAvailableConfigResponseBodySecurityGroupListSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyKeyPairNameList extends $tea.Model {
  keyPairName?: string[];
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfoVswitchInfoListVswitchInfo extends $tea.Model {
  creationTime?: string;
  vpcId?: string;
  cidrBlock?: string;
  description?: string;
  vswitchId?: string;
  vswitchName?: string;
  availableIpAddressCount?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      vpcId: 'VpcId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
      availableIpAddressCount: 'AvailableIpAddressCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      vpcId: 'string',
      cidrBlock: 'string',
      description: 'string',
      vswitchId: 'string',
      vswitchName: 'string',
      availableIpAddressCount: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfoVswitchInfoList extends $tea.Model {
  vswitchInfo?: ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfoVswitchInfoListVswitchInfo[];
  static names(): { [key: string]: string } {
    return {
      vswitchInfo: 'VswitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchInfo: { 'type': 'array', 'itemType': ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfoVswitchInfoListVswitchInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfo extends $tea.Model {
  vpcId?: string;
  vpcName?: string;
  creationTime?: string;
  VRouterId?: string;
  cidrBlock?: string;
  description?: string;
  vswitchInfoList?: ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfoVswitchInfoList;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      creationTime: 'CreationTime',
      VRouterId: 'VRouterId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      vswitchInfoList: 'VswitchInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
      creationTime: 'string',
      VRouterId: 'string',
      cidrBlock: 'string',
      description: 'string',
      vswitchInfoList: ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfoVswitchInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyVpcInfoList extends $tea.Model {
  vpcInfo?: ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfo[];
  static names(): { [key: string]: string } {
    return {
      vpcInfo: 'VpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInfo: { 'type': 'array', 'itemType': ListEmrAvailableConfigResponseBodyVpcInfoListVpcInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoClusterServiceInfoListClusterServiceInfo extends $tea.Model {
  serviceDisplayName?: string;
  serviceVersion?: string;
  mandatory?: boolean;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceDisplayName: 'ServiceDisplayName',
      serviceVersion: 'ServiceVersion',
      mandatory: 'Mandatory',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceDisplayName: 'string',
      serviceVersion: 'string',
      mandatory: 'boolean',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoClusterServiceInfoList extends $tea.Model {
  clusterServiceInfo?: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoClusterServiceInfoListClusterServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterServiceInfo: 'ClusterServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterServiceInfo: { 'type': 'array', 'itemType': ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoClusterServiceInfoListClusterServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfo extends $tea.Model {
  clusterType?: string;
  clusterServiceInfoList?: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoClusterServiceInfoList;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      clusterServiceInfoList: 'ClusterServiceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      clusterServiceInfoList: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoClusterServiceInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoList extends $tea.Model {
  clusterTypeInfo?: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterTypeInfo: 'ClusterTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeInfo: { 'type': 'array', 'itemType': ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersion extends $tea.Model {
  onCloudNative?: boolean;
  extraInfo?: string;
  clusterTypeInfoList?: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoList;
  publishType?: string;
  stackVersion?: string;
  stackName?: string;
  ecmVersion?: boolean;
  mainVersionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      onCloudNative: 'OnCloudNative',
      extraInfo: 'ExtraInfo',
      clusterTypeInfoList: 'ClusterTypeInfoList',
      publishType: 'PublishType',
      stackVersion: 'StackVersion',
      stackName: 'StackName',
      ecmVersion: 'EcmVersion',
      mainVersionName: 'MainVersionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onCloudNative: 'boolean',
      extraInfo: 'string',
      clusterTypeInfoList: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoList,
      publishType: 'string',
      stackVersion: 'string',
      stackName: 'string',
      ecmVersion: 'boolean',
      mainVersionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableConfigResponseBodyEmrMainVersionList extends $tea.Model {
  emrMainVersion?: ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersion[];
  static names(): { [key: string]: string } {
    return {
      emrMainVersion: 'EmrMainVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrMainVersion: { 'type': 'array', 'itemType': ListEmrAvailableConfigResponseBodyEmrMainVersionListEmrMainVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResourceEmrInstanceType extends $tea.Model {
  instanceBandwidthRx?: number;
  GPUSpec?: string;
  localStorageCategory?: string;
  instanceBandwidthTx?: number;
  GPUAmount?: number;
  instanceType?: string;
  memorySize?: number;
  initialCredit?: number;
  localStorageCapacity?: number;
  localStorageAmount?: number;
  instancePpsRx?: number;
  baselineCredit?: number;
  instancePpsTx?: number;
  cpuCoreCount?: number;
  instanceTypeFamily?: string;
  eniQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      instanceBandwidthRx: 'InstanceBandwidthRx',
      GPUSpec: 'GPUSpec',
      localStorageCategory: 'LocalStorageCategory',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      GPUAmount: 'GPUAmount',
      instanceType: 'InstanceType',
      memorySize: 'MemorySize',
      initialCredit: 'InitialCredit',
      localStorageCapacity: 'LocalStorageCapacity',
      localStorageAmount: 'LocalStorageAmount',
      instancePpsRx: 'InstancePpsRx',
      baselineCredit: 'BaselineCredit',
      instancePpsTx: 'InstancePpsTx',
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeFamily: 'InstanceTypeFamily',
      eniQuantity: 'EniQuantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceBandwidthRx: 'number',
      GPUSpec: 'string',
      localStorageCategory: 'string',
      instanceBandwidthTx: 'number',
      GPUAmount: 'number',
      instanceType: 'string',
      memorySize: 'number',
      initialCredit: 'number',
      localStorageCapacity: 'number',
      localStorageAmount: 'number',
      instancePpsRx: 'number',
      baselineCredit: 'number',
      instancePpsTx: 'number',
      cpuCoreCount: 'number',
      instanceTypeFamily: 'string',
      eniQuantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResourceSupportNodeTypeList extends $tea.Model {
  supportNodeType?: string[];
  static names(): { [key: string]: string } {
    return {
      supportNodeType: 'SupportNodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportNodeType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResource extends $tea.Model {
  value?: string;
  max?: number;
  unit?: string;
  emrInstanceType?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResourceEmrInstanceType;
  min?: number;
  supportNodeTypeList?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResourceSupportNodeTypeList;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      max: 'Max',
      unit: 'Unit',
      emrInstanceType: 'EmrInstanceType',
      min: 'Min',
      supportNodeTypeList: 'SupportNodeTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      max: 'number',
      unit: 'string',
      emrInstanceType: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResourceEmrInstanceType,
      min: 'number',
      supportNodeTypeList: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResourceSupportNodeTypeList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceList extends $tea.Model {
  supportedResource?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResource[];
  static names(): { [key: string]: string } {
    return {
      supportedResource: 'SupportedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResource: { 'type': 'array', 'itemType': ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceListSupportedResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfo extends $tea.Model {
  type?: string;
  supportedResourceList?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceList;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      supportedResourceList: 'SupportedResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      supportedResourceList: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfoSupportedResourceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoList extends $tea.Model {
  emrResourceInfo?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      emrResourceInfo: 'EmrResourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrResourceInfo: { 'type': 'array', 'itemType': ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoListEmrResourceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfo extends $tea.Model {
  zoneId?: string;
  emrResourceInfoList?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoList;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
      emrResourceInfoList: 'EmrResourceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      emrResourceInfoList: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfoEmrResourceInfoList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrAvailableResourceResponseBodyEmrZoneInfoList extends $tea.Model {
  emrZoneInfo?: ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      emrZoneInfo: 'EmrZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrZoneInfo: { 'type': 'array', 'itemType': ListEmrAvailableResourceResponseBodyEmrZoneInfoListEmrZoneInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoServiceInfoListServiceInfo extends $tea.Model {
  serviceDisplayName?: string;
  serviceVersion?: string;
  display?: boolean;
  serviceDisplayVersion?: string;
  mandatory?: boolean;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceDisplayName: 'ServiceDisplayName',
      serviceVersion: 'ServiceVersion',
      display: 'Display',
      serviceDisplayVersion: 'ServiceDisplayVersion',
      mandatory: 'Mandatory',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceDisplayName: 'string',
      serviceVersion: 'string',
      display: 'boolean',
      serviceDisplayVersion: 'string',
      mandatory: 'boolean',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoServiceInfoList extends $tea.Model {
  serviceInfo?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoServiceInfoListServiceInfo[];
  static names(): { [key: string]: string } {
    return {
      serviceInfo: 'ServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfo: { 'type': 'array', 'itemType': ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoServiceInfoListServiceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfo extends $tea.Model {
  serviceInfoList?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoServiceInfoList;
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceInfoList: 'ServiceInfoList',
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInfoList: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfoServiceInfoList,
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoList extends $tea.Model {
  clusterTypeInfo?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterTypeInfo: 'ClusterTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeInfo: { 'type': 'array', 'itemType': ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoListClusterTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionWhiteUserList extends $tea.Model {
  whiteUser?: string[];
  static names(): { [key: string]: string } {
    return {
      whiteUser: 'WhiteUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteUser: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeWhiteUserListClusterTypeWhiteUser extends $tea.Model {
  clusterType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeWhiteUserList extends $tea.Model {
  clusterTypeWhiteUser?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeWhiteUserListClusterTypeWhiteUser[];
  static names(): { [key: string]: string } {
    return {
      clusterTypeWhiteUser: 'ClusterTypeWhiteUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeWhiteUser: { 'type': 'array', 'itemType': ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeWhiteUserListClusterTypeWhiteUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersion extends $tea.Model {
  clusterTypeInfoList?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoList;
  publishType?: string;
  stackVersion?: string;
  emrVersion?: string;
  whiteUserList?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionWhiteUserList;
  display?: boolean;
  stackName?: string;
  ecmVersion?: boolean;
  imageId?: string;
  regionId?: string;
  clusterTypeWhiteUserList?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeWhiteUserList;
  static names(): { [key: string]: string } {
    return {
      clusterTypeInfoList: 'ClusterTypeInfoList',
      publishType: 'PublishType',
      stackVersion: 'StackVersion',
      emrVersion: 'EmrVersion',
      whiteUserList: 'WhiteUserList',
      display: 'Display',
      stackName: 'StackName',
      ecmVersion: 'EcmVersion',
      imageId: 'ImageId',
      regionId: 'RegionId',
      clusterTypeWhiteUserList: 'ClusterTypeWhiteUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeInfoList: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeInfoList,
      publishType: 'string',
      stackVersion: 'string',
      emrVersion: 'string',
      whiteUserList: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionWhiteUserList,
      display: 'boolean',
      stackName: 'string',
      ecmVersion: 'boolean',
      imageId: 'string',
      regionId: 'string',
      clusterTypeWhiteUserList: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersionClusterTypeWhiteUserList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEmrMainVersionResponseBodyEmrMainVersionList extends $tea.Model {
  emrMainVersion?: ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersion[];
  static names(): { [key: string]: string } {
    return {
      emrMainVersion: 'EmrMainVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrMainVersion: { 'type': 'array', 'itemType': ListEmrMainVersionResponseBodyEmrMainVersionListEmrMainVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlanInstancesResponseBodyExecutionPlanInstancesExecutionPlanInstance extends $tea.Model {
  status?: string;
  logEnable?: boolean;
  startTime?: number;
  logPath?: string;
  executionPlanId?: string;
  clusterType?: string;
  runTime?: number;
  clusterName?: string;
  workflowApp?: string;
  id?: string;
  clusterId?: string;
  executionPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      logEnable: 'LogEnable',
      startTime: 'StartTime',
      logPath: 'LogPath',
      executionPlanId: 'ExecutionPlanId',
      clusterType: 'ClusterType',
      runTime: 'RunTime',
      clusterName: 'ClusterName',
      workflowApp: 'WorkflowApp',
      id: 'Id',
      clusterId: 'ClusterId',
      executionPlanName: 'ExecutionPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      logEnable: 'boolean',
      startTime: 'number',
      logPath: 'string',
      executionPlanId: 'string',
      clusterType: 'string',
      runTime: 'number',
      clusterName: 'string',
      workflowApp: 'string',
      id: 'string',
      clusterId: 'string',
      executionPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlanInstancesResponseBodyExecutionPlanInstances extends $tea.Model {
  executionPlanInstance?: ListExecutionPlanInstancesResponseBodyExecutionPlanInstancesExecutionPlanInstance[];
  static names(): { [key: string]: string } {
    return {
      executionPlanInstance: 'ExecutionPlanInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionPlanInstance: { 'type': 'array', 'itemType': ListExecutionPlanInstancesResponseBodyExecutionPlanInstancesExecutionPlanInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlansResponseBodyExecutionPlansExecutionPlanInfo extends $tea.Model {
  status?: string;
  startTime?: number;
  timeInterval?: number;
  stragety?: string;
  createClusterOnDemand?: boolean;
  name?: string;
  timeUnit?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      startTime: 'StartTime',
      timeInterval: 'TimeInterval',
      stragety: 'Stragety',
      createClusterOnDemand: 'CreateClusterOnDemand',
      name: 'Name',
      timeUnit: 'TimeUnit',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      startTime: 'number',
      timeInterval: 'number',
      stragety: 'string',
      createClusterOnDemand: 'boolean',
      name: 'string',
      timeUnit: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionPlansResponseBodyExecutionPlans extends $tea.Model {
  executionPlanInfo?: ListExecutionPlansResponseBodyExecutionPlansExecutionPlanInfo[];
  static names(): { [key: string]: string } {
    return {
      executionPlanInfo: 'ExecutionPlanInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionPlanInfo: { 'type': 'array', 'itemType': ListExecutionPlansResponseBodyExecutionPlansExecutionPlanInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBodyFlowFlow extends $tea.Model {
  type?: string;
  status?: string;
  alertUserGroupBizId?: string;
  periodic?: boolean;
  projectId?: string;
  hostName?: string;
  gmtModified?: number;
  description?: string;
  startSchedule?: number;
  createCluster?: boolean;
  endSchedule?: number;
  graph?: string;
  alertDingDingGroupBizId?: string;
  gmtCreate?: number;
  categoryId?: string;
  cronExpr?: string;
  name?: string;
  id?: string;
  alertConf?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      alertUserGroupBizId: 'AlertUserGroupBizId',
      periodic: 'Periodic',
      projectId: 'ProjectId',
      hostName: 'HostName',
      gmtModified: 'GmtModified',
      description: 'Description',
      startSchedule: 'StartSchedule',
      createCluster: 'CreateCluster',
      endSchedule: 'EndSchedule',
      graph: 'Graph',
      alertDingDingGroupBizId: 'AlertDingDingGroupBizId',
      gmtCreate: 'GmtCreate',
      categoryId: 'CategoryId',
      cronExpr: 'CronExpr',
      name: 'Name',
      id: 'Id',
      alertConf: 'AlertConf',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      alertUserGroupBizId: 'string',
      periodic: 'boolean',
      projectId: 'string',
      hostName: 'string',
      gmtModified: 'number',
      description: 'string',
      startSchedule: 'number',
      createCluster: 'boolean',
      endSchedule: 'number',
      graph: 'string',
      alertDingDingGroupBizId: 'string',
      gmtCreate: 'number',
      categoryId: 'string',
      cronExpr: 'string',
      name: 'string',
      id: 'string',
      alertConf: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBodyFlow extends $tea.Model {
  flow?: ListFlowResponseBodyFlowFlow[];
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: { 'type': 'array', 'itemType': ListFlowResponseBodyFlowFlow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowCategoryResponseBodyCategoriesCategory extends $tea.Model {
  type?: string;
  parentId?: string;
  objectType?: string;
  projectId?: string;
  objectId?: string;
  gmtCreate?: number;
  name?: string;
  gmtModified?: number;
  categoryType?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      parentId: 'ParentId',
      objectType: 'ObjectType',
      projectId: 'ProjectId',
      objectId: 'ObjectId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      categoryType: 'CategoryType',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      parentId: 'string',
      objectType: 'string',
      projectId: 'string',
      objectId: 'string',
      gmtCreate: 'number',
      name: 'string',
      gmtModified: 'number',
      categoryType: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowCategoryResponseBodyCategories extends $tea.Model {
  category?: ListFlowCategoryResponseBodyCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': ListFlowCategoryResponseBodyCategoriesCategory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  currentCount?: number;
  orderIdList?: string;
  targetCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
      targetCount: 'TargetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      orderIdList: 'string',
      targetCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClustersClusterInfo extends $tea.Model {
  status?: string;
  type?: string;
  runningTime?: number;
  orderList?: string;
  createTime?: number;
  chargeType?: string;
  period?: number;
  k8sClusterId?: string;
  expiredTime?: number;
  hasUncompletedOrder?: boolean;
  orderTaskInfo?: ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo;
  name?: string;
  id?: string;
  createResource?: string;
  failReason?: ListFlowClusterResponseBodyClustersClusterInfoFailReason;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      runningTime: 'RunningTime',
      orderList: 'OrderList',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      period: 'Period',
      k8sClusterId: 'K8sClusterId',
      expiredTime: 'ExpiredTime',
      hasUncompletedOrder: 'HasUncompletedOrder',
      orderTaskInfo: 'OrderTaskInfo',
      name: 'Name',
      id: 'Id',
      createResource: 'CreateResource',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      runningTime: 'number',
      orderList: 'string',
      createTime: 'number',
      chargeType: 'string',
      period: 'number',
      k8sClusterId: 'string',
      expiredTime: 'number',
      hasUncompletedOrder: 'boolean',
      orderTaskInfo: ListFlowClusterResponseBodyClustersClusterInfoOrderTaskInfo,
      name: 'string',
      id: 'string',
      createResource: 'string',
      failReason: ListFlowClusterResponseBodyClustersClusterInfoFailReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListFlowClusterResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListFlowClusterResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo extends $tea.Model {
  currentCount?: number;
  orderIdList?: string;
  targetCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      orderIdList: 'OrderIdList',
      targetCount: 'TargetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      orderIdList: 'string',
      targetCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfoFailReason extends $tea.Model {
  requestId?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClustersClusterInfo extends $tea.Model {
  status?: string;
  type?: string;
  runningTime?: number;
  orderList?: string;
  createTime?: number;
  chargeType?: string;
  period?: number;
  k8sClusterId?: string;
  expiredTime?: number;
  hasUncompletedOrder?: boolean;
  orderTaskInfo?: ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo;
  name?: string;
  id?: string;
  createResource?: string;
  failReason?: ListFlowClusterAllResponseBodyClustersClusterInfoFailReason;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      runningTime: 'RunningTime',
      orderList: 'OrderList',
      createTime: 'CreateTime',
      chargeType: 'ChargeType',
      period: 'Period',
      k8sClusterId: 'K8sClusterId',
      expiredTime: 'ExpiredTime',
      hasUncompletedOrder: 'HasUncompletedOrder',
      orderTaskInfo: 'OrderTaskInfo',
      name: 'Name',
      id: 'Id',
      createResource: 'CreateResource',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      runningTime: 'number',
      orderList: 'string',
      createTime: 'number',
      chargeType: 'string',
      period: 'number',
      k8sClusterId: 'string',
      expiredTime: 'number',
      hasUncompletedOrder: 'boolean',
      orderTaskInfo: ListFlowClusterAllResponseBodyClustersClusterInfoOrderTaskInfo,
      name: 'string',
      id: 'string',
      createResource: 'string',
      failReason: ListFlowClusterAllResponseBodyClustersClusterInfoFailReason,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllResponseBodyClusters extends $tea.Model {
  clusterInfo?: ListFlowClusterAllResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': ListFlowClusterAllResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBodyHostListHost extends $tea.Model {
  serialNumber?: string;
  type?: string;
  status?: string;
  privateIp?: string;
  hostName?: string;
  instanceType?: string;
  hostId?: string;
  hostInstanceId?: string;
  cpu?: number;
  publicIp?: string;
  memory?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      type: 'Type',
      status: 'Status',
      privateIp: 'PrivateIp',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      cpu: 'Cpu',
      publicIp: 'PublicIp',
      memory: 'Memory',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      type: 'string',
      status: 'string',
      privateIp: 'string',
      hostName: 'string',
      instanceType: 'string',
      hostId: 'string',
      hostInstanceId: 'string',
      cpu: 'number',
      publicIp: 'string',
      memory: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterAllHostsResponseBodyHostList extends $tea.Model {
  host?: ListFlowClusterAllHostsResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListFlowClusterAllHostsResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBodyHostListHost extends $tea.Model {
  serialNumber?: string;
  type?: string;
  status?: string;
  privateIp?: string;
  hostName?: string;
  instanceType?: string;
  hostId?: string;
  hostInstanceId?: string;
  cpu?: number;
  publicIp?: string;
  memory?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      type: 'Type',
      status: 'Status',
      privateIp: 'PrivateIp',
      hostName: 'HostName',
      instanceType: 'InstanceType',
      hostId: 'HostId',
      hostInstanceId: 'HostInstanceId',
      cpu: 'Cpu',
      publicIp: 'PublicIp',
      memory: 'Memory',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      type: 'string',
      status: 'string',
      privateIp: 'string',
      hostName: 'string',
      instanceType: 'string',
      hostId: 'string',
      hostInstanceId: 'string',
      cpu: 'number',
      publicIp: 'string',
      memory: 'number',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowClusterHostResponseBodyHostList extends $tea.Model {
  host?: ListFlowClusterHostResponseBodyHostListHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': ListFlowClusterHostResponseBodyHostListHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBodyItemsItem extends $tea.Model {
  active?: boolean;
  data?: string;
  entityId?: string;
  entityType?: string;
  userId?: string;
  gmtCreate?: number;
  message?: string;
  entityGroupId?: string;
  committerId?: string;
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      data: 'Data',
      entityId: 'EntityId',
      entityType: 'EntityType',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      message: 'Message',
      entityGroupId: 'EntityGroupId',
      committerId: 'CommitterId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      data: 'string',
      entityId: 'string',
      entityType: 'string',
      userId: 'string',
      gmtCreate: 'number',
      message: 'string',
      entityGroupId: 'string',
      committerId: 'string',
      revision: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowEntitySnapshotResponseBodyItems extends $tea.Model {
  item?: ListFlowEntitySnapshotResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListFlowEntitySnapshotResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBodyFlowInstancesFlowInstance extends $tea.Model {
  status?: string;
  owner?: string;
  projectId?: string;
  flowName?: string;
  gmtModified?: number;
  flowId?: string;
  endTime?: number;
  startTime?: number;
  hasNodeFailed?: boolean;
  gmtCreate?: number;
  scheduleTime?: number;
  duration?: number;
  id?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      owner: 'Owner',
      projectId: 'ProjectId',
      flowName: 'FlowName',
      gmtModified: 'GmtModified',
      flowId: 'FlowId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      hasNodeFailed: 'HasNodeFailed',
      gmtCreate: 'GmtCreate',
      scheduleTime: 'ScheduleTime',
      duration: 'Duration',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      owner: 'string',
      projectId: 'string',
      flowName: 'string',
      gmtModified: 'number',
      flowId: 'string',
      endTime: 'number',
      startTime: 'number',
      hasNodeFailed: 'boolean',
      gmtCreate: 'number',
      scheduleTime: 'number',
      duration: 'number',
      id: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowInstanceResponseBodyFlowInstances extends $tea.Model {
  flowInstance?: ListFlowInstanceResponseBodyFlowInstancesFlowInstance[];
  static names(): { [key: string]: string } {
    return {
      flowInstance: 'FlowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowInstance: { 'type': 'array', 'itemType': ListFlowInstanceResponseBodyFlowInstancesFlowInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobResponseBodyJobListJobResourceListResource extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobResponseBodyJobListJobResourceList extends $tea.Model {
  resource?: ListFlowJobResponseBodyJobListJobResourceListResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListFlowJobResponseBodyJobListJobResourceListResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobResponseBodyJobListJob extends $tea.Model {
  type?: string;
  failAct?: string;
  customVariables?: string;
  resourceList?: ListFlowJobResponseBodyJobListJobResourceList;
  retryInterval?: number;
  envConf?: string;
  paramConf?: string;
  mode?: string;
  gmtModified?: number;
  monitorConf?: string;
  lastInstanceDetail?: string;
  runConf?: string;
  params?: string;
  description?: string;
  gmtCreate?: number;
  categoryId?: string;
  adhoc?: string;
  name?: string;
  id?: string;
  alertConf?: string;
  maxRetry?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      failAct: 'FailAct',
      customVariables: 'CustomVariables',
      resourceList: 'ResourceList',
      retryInterval: 'RetryInterval',
      envConf: 'EnvConf',
      paramConf: 'ParamConf',
      mode: 'mode',
      gmtModified: 'GmtModified',
      monitorConf: 'MonitorConf',
      lastInstanceDetail: 'LastInstanceDetail',
      runConf: 'RunConf',
      params: 'Params',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      categoryId: 'CategoryId',
      adhoc: 'Adhoc',
      name: 'Name',
      id: 'Id',
      alertConf: 'AlertConf',
      maxRetry: 'MaxRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      failAct: 'string',
      customVariables: 'string',
      resourceList: ListFlowJobResponseBodyJobListJobResourceList,
      retryInterval: 'number',
      envConf: 'string',
      paramConf: 'string',
      mode: 'string',
      gmtModified: 'number',
      monitorConf: 'string',
      lastInstanceDetail: 'string',
      runConf: 'string',
      params: 'string',
      description: 'string',
      gmtCreate: 'number',
      categoryId: 'string',
      adhoc: 'string',
      name: 'string',
      id: 'string',
      alertConf: 'string',
      maxRetry: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobResponseBodyJobList extends $tea.Model {
  job?: ListFlowJobResponseBodyJobListJob[];
  static names(): { [key: string]: string } {
    return {
      job: 'Job',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: { 'type': 'array', 'itemType': ListFlowJobResponseBodyJobListJob },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance extends $tea.Model {
  type?: string;
  status?: string;
  pending?: boolean;
  envConf?: string;
  retryInterval?: number;
  projectId?: string;
  jobType?: string;
  gmtModified?: number;
  externalInfo?: string;
  externalStatus?: string;
  jobName?: string;
  externalId?: string;
  clusterId?: string;
  maxRetry?: number;
  failAct?: string;
  jobParams?: string;
  paramConf?: string;
  hostName?: string;
  retries?: number;
  endTime?: number;
  startTime?: number;
  runConf?: string;
  nodeName?: string;
  jobId?: string;
  gmtCreate?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      pending: 'pending',
      envConf: 'EnvConf',
      retryInterval: 'RetryInterval',
      projectId: 'ProjectId',
      jobType: 'JobType',
      gmtModified: 'GmtModified',
      externalInfo: 'ExternalInfo',
      externalStatus: 'ExternalStatus',
      jobName: 'JobName',
      externalId: 'ExternalId',
      clusterId: 'ClusterId',
      maxRetry: 'MaxRetry',
      failAct: 'FailAct',
      jobParams: 'JobParams',
      paramConf: 'ParamConf',
      hostName: 'HostName',
      retries: 'Retries',
      endTime: 'EndTime',
      startTime: 'StartTime',
      runConf: 'RunConf',
      nodeName: 'NodeName',
      jobId: 'JobId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      pending: 'boolean',
      envConf: 'string',
      retryInterval: 'number',
      projectId: 'string',
      jobType: 'string',
      gmtModified: 'number',
      externalInfo: 'string',
      externalStatus: 'string',
      jobName: 'string',
      externalId: 'string',
      clusterId: 'string',
      maxRetry: 'number',
      failAct: 'string',
      jobParams: 'string',
      paramConf: 'string',
      hostName: 'string',
      retries: 'number',
      endTime: 'number',
      startTime: 'number',
      runConf: 'string',
      nodeName: 'string',
      jobId: 'string',
      gmtCreate: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowJobHistoryResponseBodyNodeInstances extends $tea.Model {
  nodeInstance?: ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeInstance: 'NodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInstance: { 'type': 'array', 'itemType': ListFlowJobHistoryResponseBodyNodeInstancesNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceResponseBodyFlowNodeInstancesFlowNodeInstance extends $tea.Model {
  type?: string;
  status?: string;
  retryInterval?: string;
  projectId?: string;
  jobType?: string;
  externalInfo?: string;
  gmtModified?: number;
  externalChildIds?: string;
  externalStatus?: string;
  jobName?: string;
  externalId?: string;
  pending?: boolean;
  clusterId?: string;
  maxRetry?: string;
  failAct?: string;
  jobParams?: string;
  flowInstanceId?: string;
  hostName?: string;
  flowId?: string;
  retries?: number;
  endTime?: number;
  startTime?: number;
  externalSubId?: string;
  nodeName?: string;
  jobId?: string;
  gmtCreate?: number;
  duration?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      retryInterval: 'RetryInterval',
      projectId: 'ProjectId',
      jobType: 'JobType',
      externalInfo: 'ExternalInfo',
      gmtModified: 'GmtModified',
      externalChildIds: 'ExternalChildIds',
      externalStatus: 'ExternalStatus',
      jobName: 'JobName',
      externalId: 'ExternalId',
      pending: 'Pending',
      clusterId: 'ClusterId',
      maxRetry: 'MaxRetry',
      failAct: 'FailAct',
      jobParams: 'JobParams',
      flowInstanceId: 'FlowInstanceId',
      hostName: 'HostName',
      flowId: 'FlowId',
      retries: 'Retries',
      endTime: 'EndTime',
      startTime: 'StartTime',
      externalSubId: 'ExternalSubId',
      nodeName: 'NodeName',
      jobId: 'JobId',
      gmtCreate: 'GmtCreate',
      duration: 'Duration',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      retryInterval: 'string',
      projectId: 'string',
      jobType: 'string',
      externalInfo: 'string',
      gmtModified: 'number',
      externalChildIds: 'string',
      externalStatus: 'string',
      jobName: 'string',
      externalId: 'string',
      pending: 'boolean',
      clusterId: 'string',
      maxRetry: 'string',
      failAct: 'string',
      jobParams: 'string',
      flowInstanceId: 'string',
      hostName: 'string',
      flowId: 'string',
      retries: 'number',
      endTime: 'number',
      startTime: 'number',
      externalSubId: 'string',
      nodeName: 'string',
      jobId: 'string',
      gmtCreate: 'number',
      duration: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceResponseBodyFlowNodeInstances extends $tea.Model {
  flowNodeInstance?: ListFlowNodeInstanceResponseBodyFlowNodeInstancesFlowNodeInstance[];
  static names(): { [key: string]: string } {
    return {
      flowNodeInstance: 'FlowNodeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowNodeInstance: { 'type': 'array', 'itemType': ListFlowNodeInstanceResponseBodyFlowNodeInstancesFlowNodeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus extends $tea.Model {
  status?: string;
  containerId?: string;
  hostName?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      containerId: 'ContainerId',
      hostName: 'HostName',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      containerId: 'string',
      hostName: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusList extends $tea.Model {
  containerStatus?: ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus[];
  static names(): { [key: string]: string } {
    return {
      containerStatus: 'ContainerStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerStatus: { 'type': 'array', 'itemType': ListFlowNodeInstanceContainerStatusResponseBodyContainerStatusListContainerStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowListRowRowItemList extends $tea.Model {
  rowItem?: string[];
  static names(): { [key: string]: string } {
    return {
      rowItem: 'rowItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowItem: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowListRow extends $tea.Model {
  rowIndex?: number;
  rowItemList?: ListFlowNodeSqlResultResponseBodyRowListRowRowItemList;
  static names(): { [key: string]: string } {
    return {
      rowIndex: 'RowIndex',
      rowItemList: 'RowItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowIndex: 'number',
      rowItemList: ListFlowNodeSqlResultResponseBodyRowListRowRowItemList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyRowList extends $tea.Model {
  row?: ListFlowNodeSqlResultResponseBodyRowListRow[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': ListFlowNodeSqlResultResponseBodyRowListRow },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowNodeSqlResultResponseBodyHeaderList extends $tea.Model {
  header?: string[];
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectResponseBodyProjectsProject extends $tea.Model {
  description?: string;
  userId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      userId: 'UserId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      userId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectResponseBodyProjects extends $tea.Model {
  project?: ListFlowProjectResponseBodyProjectsProject[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: { 'type': 'array', 'itemType': ListFlowProjectResponseBodyProjectsProject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList extends $tea.Model {
  queue?: string[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList extends $tea.Model {
  user?: string[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList extends $tea.Model {
  host?: string[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting extends $tea.Model {
  k8sClusterId?: string;
  defaultQueue?: string;
  projectId?: string;
  gmtCreate?: number;
  clusterName?: string;
  queueList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList;
  userList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList;
  defaultUser?: string;
  gmtModified?: number;
  hostList?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      defaultQueue: 'DefaultQueue',
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      clusterName: 'ClusterName',
      queueList: 'QueueList',
      userList: 'UserList',
      defaultUser: 'DefaultUser',
      gmtModified: 'GmtModified',
      hostList: 'HostList',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      defaultQueue: 'string',
      projectId: 'string',
      gmtCreate: 'number',
      clusterName: 'string',
      queueList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingQueueList,
      userList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingUserList,
      defaultUser: 'string',
      gmtModified: 'number',
      hostList: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSettingHostList,
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectClusterSettingResponseBodyClusterSettings extends $tea.Model {
  clusterSetting?: ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting[];
  static names(): { [key: string]: string } {
    return {
      clusterSetting: 'ClusterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterSetting: { 'type': 'array', 'itemType': ListFlowProjectClusterSettingResponseBodyClusterSettingsClusterSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBodyUsersUser extends $tea.Model {
  projectId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  userName?: string;
  accountUserId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      userName: 'UserName',
      accountUserId: 'AccountUserId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      userName: 'string',
      accountUserId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowProjectUserResponseBodyUsers extends $tea.Model {
  user?: ListFlowProjectUserResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListFlowProjectUserResponseBodyUsersUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionInstancesResponseBodyJobInstancesJobInstance extends $tea.Model {
  status?: string;
  startTime?: number;
  jobName?: string;
  retryInfo?: string;
  jobId?: string;
  runTime?: number;
  jobType?: string;
  id?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      startTime: 'StartTime',
      jobName: 'JobName',
      retryInfo: 'RetryInfo',
      jobId: 'JobId',
      runTime: 'RunTime',
      jobType: 'JobType',
      id: 'Id',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      startTime: 'number',
      jobName: 'string',
      retryInfo: 'string',
      jobId: 'string',
      runTime: 'number',
      jobType: 'string',
      id: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionInstancesResponseBodyJobInstances extends $tea.Model {
  jobInstance?: ListJobExecutionInstancesResponseBodyJobInstancesJobInstance[];
  static names(): { [key: string]: string } {
    return {
      jobInstance: 'JobInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstance: { 'type': 'array', 'itemType': ListJobExecutionInstancesResponseBodyJobInstancesJobInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInstanceWorkersResponseBodyJobInstanceWorkersJobInstanceWorkerInfo extends $tea.Model {
  containerInfo?: string;
  instanceInfo?: string;
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      containerInfo: 'ContainerInfo',
      instanceInfo: 'InstanceInfo',
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerInfo: 'string',
      instanceInfo: 'string',
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInstanceWorkersResponseBodyJobInstanceWorkers extends $tea.Model {
  jobInstanceWorkerInfo?: ListJobInstanceWorkersResponseBodyJobInstanceWorkersJobInstanceWorkerInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInstanceWorkerInfo: 'JobInstanceWorkerInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceWorkerInfo: { 'type': 'array', 'itemType': ListJobInstanceWorkersResponseBodyJobInstanceWorkersJobInstanceWorkerInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfo extends $tea.Model {
  type?: string;
  failAct?: string;
  retryInterval?: number;
  name?: string;
  id?: string;
  runParameter?: string;
  maxRetry?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      failAct: 'FailAct',
      retryInterval: 'RetryInterval',
      name: 'Name',
      id: 'Id',
      runParameter: 'RunParameter',
      maxRetry: 'MaxRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      failAct: 'string',
      retryInterval: 'number',
      name: 'string',
      id: 'string',
      runParameter: 'string',
      maxRetry: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  jobInfo?: ListJobsResponseBodyJobsJobInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponseBodyItemsItem extends $tea.Model {
  type?: string;
  createTime?: number;
  userId?: string;
  sourceType?: string;
  bizId?: string;
  scope?: string;
  libraryVersion?: string;
  name?: string;
  properties?: string;
  sourceLocation?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      createTime: 'CreateTime',
      userId: 'UserId',
      sourceType: 'SourceType',
      bizId: 'BizId',
      scope: 'Scope',
      libraryVersion: 'LibraryVersion',
      name: 'Name',
      properties: 'Properties',
      sourceLocation: 'SourceLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      createTime: 'number',
      userId: 'string',
      sourceType: 'string',
      bizId: 'string',
      scope: 'string',
      libraryVersion: 'string',
      name: 'string',
      properties: 'string',
      sourceLocation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibrariesResponseBodyItems extends $tea.Model {
  item?: ListLibrariesResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListLibrariesResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryInstallTasksResponseBodyItemsItem extends $tea.Model {
  libraryBizId?: string;
  hostname?: string;
  endTime?: number;
  taskType?: string;
  startTime?: number;
  taskStatus?: string;
  taskGroupId?: string;
  taskProcess?: number;
  clusterBizId?: string;
  executeTime?: number;
  taskId?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      libraryBizId: 'LibraryBizId',
      hostname: 'Hostname',
      endTime: 'EndTime',
      taskType: 'TaskType',
      startTime: 'StartTime',
      taskStatus: 'TaskStatus',
      taskGroupId: 'TaskGroupId',
      taskProcess: 'TaskProcess',
      clusterBizId: 'ClusterBizId',
      executeTime: 'ExecuteTime',
      taskId: 'TaskId',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryBizId: 'string',
      hostname: 'string',
      endTime: 'number',
      taskType: 'string',
      startTime: 'number',
      taskStatus: 'string',
      taskGroupId: 'string',
      taskProcess: 'number',
      clusterBizId: 'string',
      executeTime: 'number',
      taskId: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryInstallTasksResponseBodyItems extends $tea.Model {
  item?: ListLibraryInstallTasksResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListLibraryInstallTasksResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponseBodyItemsItem extends $tea.Model {
  status?: string;
  libraryBizId?: string;
  libraryName?: string;
  clusterName?: string;
  clusterBizId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      libraryBizId: 'LibraryBizId',
      libraryName: 'LibraryName',
      clusterName: 'ClusterName',
      clusterBizId: 'ClusterBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      libraryBizId: 'string',
      libraryName: 'string',
      clusterName: 'string',
      clusterBizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLibraryStatusResponseBodyItems extends $tea.Model {
  item?: ListLibraryStatusResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListLibraryStatusResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBodyItemsItemSoftwareInfo extends $tea.Model {
  emrVer?: string;
  clusterType?: string;
  static names(): { [key: string]: string } {
    return {
      emrVer: 'EmrVer',
      clusterType: 'ClusterType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrVer: 'string',
      clusterType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBodyItemsItem extends $tea.Model {
  name?: string;
  softwareInfo?: ListMetaClusterResponseBodyItemsItemSoftwareInfo;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      softwareInfo: 'SoftwareInfo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      softwareInfo: ListMetaClusterResponseBodyItemsItemSoftwareInfo,
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaClusterResponseBodyItems extends $tea.Model {
  item?: ListMetaClusterResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListMetaClusterResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataSourceClusterForOuterResponseBodyItemsItem extends $tea.Model {
  dataSourceId?: string;
  userId?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      userId: 'UserId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      userId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaDataSourceClusterForOuterResponseBodyItems extends $tea.Model {
  item?: ListMetaDataSourceClusterForOuterResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListMetaDataSourceClusterForOuterResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotesResponseBodyNotesNoteInfo extends $tea.Model {
  type?: string;
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotesResponseBodyNotes extends $tea.Model {
  noteInfo?: ListNotesResponseBodyNotesNoteInfo[];
  static names(): { [key: string]: string } {
    return {
      noteInfo: 'NoteInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noteInfo: { 'type': 'array', 'itemType': ListNotesResponseBodyNotesNoteInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePoolConfigListEcmResourcePoolConfig extends $tea.Model {
  status?: string;
  configType?: string;
  configValue?: string;
  note?: string;
  category?: string;
  configKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      note: 'Note',
      category: 'Category',
      configKey: 'ConfigKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configType: 'string',
      configValue: 'string',
      note: 'string',
      category: 'string',
      configKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePoolConfigList extends $tea.Model {
  ecmResourcePoolConfig?: ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePoolConfigListEcmResourcePoolConfig[];
  static names(): { [key: string]: string } {
    return {
      ecmResourcePoolConfig: 'EcmResourcePoolConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecmResourcePoolConfig: { 'type': 'array', 'itemType': ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePoolConfigListEcmResourcePoolConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePool extends $tea.Model {
  active?: boolean;
  poolType?: string;
  userId?: string;
  note?: string;
  yarnSiteConfig?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      poolType: 'PoolType',
      userId: 'UserId',
      note: 'Note',
      yarnSiteConfig: 'YarnSiteConfig',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      poolType: 'string',
      userId: 'string',
      note: 'string',
      yarnSiteConfig: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourcePoolConfigListEcmResourcePoolConfig extends $tea.Model {
  status?: string;
  configType?: string;
  configValue?: string;
  note?: string;
  category?: string;
  configKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      note: 'Note',
      category: 'Category',
      configKey: 'ConfigKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configType: 'string',
      configValue: 'string',
      note: 'string',
      category: 'string',
      configKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourcePoolConfigList extends $tea.Model {
  ecmResourcePoolConfig?: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourcePoolConfigListEcmResourcePoolConfig[];
  static names(): { [key: string]: string } {
    return {
      ecmResourcePoolConfig: 'EcmResourcePoolConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecmResourcePoolConfig: { 'type': 'array', 'itemType': ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourcePoolConfigListEcmResourcePoolConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourceQueue extends $tea.Model {
  status?: string;
  resourcePoolId?: number;
  leaf?: boolean;
  parentQueueId?: number;
  userId?: string;
  queueType?: string;
  name?: string;
  qualifiedName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      resourcePoolId: 'ResourcePoolId',
      leaf: 'Leaf',
      parentQueueId: 'ParentQueueId',
      userId: 'UserId',
      queueType: 'QueueType',
      name: 'Name',
      qualifiedName: 'QualifiedName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      resourcePoolId: 'number',
      leaf: 'boolean',
      parentQueueId: 'number',
      userId: 'string',
      queueType: 'string',
      name: 'string',
      qualifiedName: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueue extends $tea.Model {
  ecmResourcePoolConfigList?: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourcePoolConfigList;
  ecmResourceQueue?: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourceQueue;
  static names(): { [key: string]: string } {
    return {
      ecmResourcePoolConfigList: 'EcmResourcePoolConfigList',
      ecmResourceQueue: 'EcmResourceQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecmResourcePoolConfigList: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourcePoolConfigList,
      ecmResourceQueue: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueueEcmResourceQueue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueList extends $tea.Model {
  queue?: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueue[];
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: { 'type': 'array', 'itemType': ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueListQueue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoListPoolInfo extends $tea.Model {
  ecmResourcePoolConfigList?: ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePoolConfigList;
  ecmResourcePool?: ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePool;
  queueList?: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueList;
  static names(): { [key: string]: string } {
    return {
      ecmResourcePoolConfigList: 'EcmResourcePoolConfigList',
      ecmResourcePool: 'EcmResourcePool',
      queueList: 'QueueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecmResourcePoolConfigList: ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePoolConfigList,
      ecmResourcePool: ListResourcePoolResponseBodyPoolInfoListPoolInfoEcmResourcePool,
      queueList: ListResourcePoolResponseBodyPoolInfoListPoolInfoQueueList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcePoolResponseBodyPoolInfoList extends $tea.Model {
  poolInfo?: ListResourcePoolResponseBodyPoolInfoListPoolInfo[];
  static names(): { [key: string]: string } {
    return {
      poolInfo: 'PoolInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolInfo: { 'type': 'array', 'itemType': ListResourcePoolResponseBodyPoolInfoListPoolInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRoleDTO extends $tea.Model {
  resourceType?: string;
  description?: string;
  gmtCreate?: string;
  name?: string;
  gmtModified?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      gmtModified: 'GmtModified',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      description: 'string',
      gmtCreate: 'string',
      name: 'string',
      gmtModified: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  roleDTO?: ListRolesResponseBodyDataRoleDTO[];
  static names(): { [key: string]: string } {
    return {
      roleDTO: 'roleDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleDTO: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRoleDTO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityV2ResponseBodyItemsItem extends $tea.Model {
  status?: string;
  totalCapacity?: number;
  expectNum?: number;
  bizId?: string;
  instanceIds?: string;
  hostGroupBizId?: string;
  endTime?: number;
  startTime?: number;
  description?: string;
  scalingRuleName?: string;
  scalingRuleId?: string;
  cause?: string;
  hostGroupName?: string;
  transition?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalCapacity: 'TotalCapacity',
      expectNum: 'ExpectNum',
      bizId: 'BizId',
      instanceIds: 'InstanceIds',
      hostGroupBizId: 'HostGroupBizId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      description: 'Description',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleId: 'ScalingRuleId',
      cause: 'Cause',
      hostGroupName: 'HostGroupName',
      transition: 'Transition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalCapacity: 'number',
      expectNum: 'number',
      bizId: 'string',
      instanceIds: 'string',
      hostGroupBizId: 'string',
      endTime: 'number',
      startTime: 'number',
      description: 'string',
      scalingRuleName: 'string',
      scalingRuleId: 'string',
      cause: 'string',
      hostGroupName: 'string',
      transition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingActivityV2ResponseBodyItems extends $tea.Model {
  item?: ListScalingActivityV2ResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListScalingActivityV2ResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemV2ResponseBodyItemsItem extends $tea.Model {
  configItemType?: string;
  scalingConfigItemBizId?: string;
  scalingGroupBizId?: string;
  configItemInformation?: string;
  static names(): { [key: string]: string } {
    return {
      configItemType: 'ConfigItemType',
      scalingConfigItemBizId: 'ScalingConfigItemBizId',
      scalingGroupBizId: 'ScalingGroupBizId',
      configItemInformation: 'ConfigItemInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemType: 'string',
      scalingConfigItemBizId: 'string',
      scalingGroupBizId: 'string',
      configItemInformation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingConfigItemV2ResponseBodyItems extends $tea.Model {
  item?: ListScalingConfigItemV2ResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListScalingConfigItemV2ResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupV2ResponseBodyItemsItem extends $tea.Model {
  description?: string;
  scalingInMode?: string;
  scalingMaxSize?: number;
  name?: string;
  hostGroupBizId?: string;
  scalingMinSize?: number;
  activeStatus?: string;
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      scalingInMode: 'ScalingInMode',
      scalingMaxSize: 'ScalingMaxSize',
      name: 'Name',
      hostGroupBizId: 'HostGroupBizId',
      scalingMinSize: 'ScalingMinSize',
      activeStatus: 'ActiveStatus',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      scalingInMode: 'string',
      scalingMaxSize: 'number',
      name: 'string',
      hostGroupBizId: 'string',
      scalingMinSize: 'number',
      activeStatus: 'string',
      scalingGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScalingGroupV2ResponseBodyItems extends $tea.Model {
  item?: ListScalingGroupV2ResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListScalingGroupV2ResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponseBodySecurityGroupListSecurityGroup extends $tea.Model {
  vpcId?: string;
  creationTime?: string;
  description?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  ecsCount?: number;
  securityGroupType?: string;
  availableInstanceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      ecsCount: 'EcsCount',
      securityGroupType: 'SecurityGroupType',
      availableInstanceAmount: 'AvailableInstanceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      creationTime: 'string',
      description: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      ecsCount: 'number',
      securityGroupType: 'string',
      availableInstanceAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupResponseBodySecurityGroupList extends $tea.Model {
  securityGroup?: ListSecurityGroupResponseBodySecurityGroupListSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': ListSecurityGroupResponseBodySecurityGroupListSecurityGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResponseBodyStackListStack extends $tea.Model {
  status?: string;
  version?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      version: 'Version',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      version: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResponseBodyStackList extends $tea.Model {
  stack?: ListStackResponseBodyStackListStack[];
  static names(): { [key: string]: string } {
    return {
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stack: { 'type': 'array', 'itemType': ListStackResponseBodyStackListStack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyKeys extends $tea.Model {
  key?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBodyValues extends $tea.Model {
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserListUser extends $tea.Model {
  linuxStatus?: string;
  k8sStatus?: string;
  knoxStatus?: string;
  groupName?: string;
  userId?: string;
  kerberosStatus?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      linuxStatus: 'LinuxStatus',
      k8sStatus: 'K8sStatus',
      knoxStatus: 'KnoxStatus',
      groupName: 'GroupName',
      userId: 'UserId',
      kerberosStatus: 'KerberosStatus',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linuxStatus: 'string',
      k8sStatus: 'string',
      knoxStatus: 'string',
      groupName: 'string',
      userId: 'string',
      kerberosStatus: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUserList extends $tea.Model {
  user?: ListUsersResponseBodyUserListUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyUserListUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponseBodyVswitchListVswitch extends $tea.Model {
  creationTime?: string;
  status?: string;
  vpcId?: string;
  isDefault?: boolean;
  vSwitchId?: string;
  cidrBlock?: string;
  description?: string;
  availableIpAddressCount?: string;
  resourceGroupId?: string;
  zoneId?: string;
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      vpcId: 'VpcId',
      isDefault: 'IsDefault',
      vSwitchId: 'VSwitchId',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      availableIpAddressCount: 'AvailableIpAddressCount',
      resourceGroupId: 'ResourceGroupId',
      zoneId: 'ZoneId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      vpcId: 'string',
      isDefault: 'boolean',
      vSwitchId: 'string',
      cidrBlock: 'string',
      description: 'string',
      availableIpAddressCount: 'string',
      resourceGroupId: 'string',
      zoneId: 'string',
      vSwitchName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVswitchResponseBodyVswitchList extends $tea.Model {
  vswitch?: ListVswitchResponseBodyVswitchListVswitch[];
  static names(): { [key: string]: string } {
    return {
      vswitch: 'Vswitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitch: { 'type': 'array', 'itemType': ListVswitchResponseBodyVswitchListVswitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterBootstrapActionRequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  multiInstanceTypes?: string;
  sysDiskType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  diskCapacity?: number;
  vSwitchId?: string;
  nodeCount?: number;
  hostGroupName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      multiInstanceTypes: 'MultiInstanceTypes',
      sysDiskType: 'SysDiskType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      diskCapacity: 'DiskCapacity',
      vSwitchId: 'VSwitchId',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      multiInstanceTypes: 'string',
      sysDiskType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      diskCapacity: 'number',
      vSwitchId: 'string',
      nodeCount: 'number',
      hostGroupName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterTemplateRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExecutionPlanRequestEcsOrder extends $tea.Model {
  index?: number;
  diskCapacity?: number;
  nodeType?: string;
  nodeCount?: number;
  diskType?: string;
  instanceType?: string;
  diskCount?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      diskCapacity: 'DiskCapacity',
      nodeType: 'NodeType',
      nodeCount: 'NodeCount',
      diskType: 'DiskType',
      instanceType: 'InstanceType',
      diskCount: 'DiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      diskCapacity: 'number',
      nodeType: 'string',
      nodeCount: 'number',
      diskType: 'string',
      instanceType: 'string',
      diskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExecutionPlanRequestBootstrapAction extends $tea.Model {
  executionFailStrategy?: string;
  arg?: string;
  path?: string;
  executionTarget?: string;
  executionMoment?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      executionFailStrategy: 'ExecutionFailStrategy',
      arg: 'Arg',
      path: 'Path',
      executionTarget: 'ExecutionTarget',
      executionMoment: 'ExecutionMoment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionFailStrategy: 'string',
      arg: 'string',
      path: 'string',
      executionTarget: 'string',
      executionMoment: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyExecutionPlanRequestConfig extends $tea.Model {
  configValue?: string;
  replace?: string;
  fileName?: string;
  serviceName?: string;
  configKey?: string;
  encrypt?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      replace: 'Replace',
      fileName: 'FileName',
      serviceName: 'ServiceName',
      configKey: 'ConfigKey',
      encrypt: 'Encrypt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      replace: 'string',
      fileName: 'string',
      serviceName: 'string',
      configKey: 'string',
      encrypt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowJobRequestResourceList extends $tea.Model {
  path?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      alias: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourcePoolRequestConfig extends $tea.Model {
  configValue?: string;
  note?: string;
  category?: string;
  configKey?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      note: 'Note',
      category: 'Category',
      configKey: 'ConfigKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      note: 'string',
      category: 'string',
      configKey: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceQueueRequestConfig extends $tea.Model {
  configValue?: string;
  note?: string;
  category?: string;
  configKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      note: 'Note',
      category: 'Category',
      configKey: 'ConfigKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      note: 'string',
      category: 'string',
      configKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequestSchedulerTrigger extends $tea.Model {
  launchExpirationTime?: number;
  recurrenceValue?: string;
  recurrenceType?: string;
  recurrenceEndTime?: string;
  launchTime?: string;
  static names(): { [key: string]: string } {
    return {
      launchExpirationTime: 'LaunchExpirationTime',
      recurrenceValue: 'RecurrenceValue',
      recurrenceType: 'RecurrenceType',
      recurrenceEndTime: 'RecurrenceEndTime',
      launchTime: 'LaunchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchExpirationTime: 'number',
      recurrenceValue: 'string',
      recurrenceType: 'string',
      recurrenceEndTime: 'string',
      launchTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScalingRuleRequestCloudWatchTrigger extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  evaluationCount?: string;
  threshold?: string;
  period?: number;
  statistics?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      evaluationCount: 'EvaluationCount',
      threshold: 'Threshold',
      period: 'Period',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      evaluationCount: 'string',
      threshold: 'string',
      period: 'number',
      statistics: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmHistoryResponseBodyAlarmHistoryListEmrAlarmHistory extends $tea.Model {
  status?: number;
  lastTime?: number;
  metricName?: string;
  alarmTime?: number;
  state?: string;
  contactGroups?: string;
  instanceId?: string;
  name?: string;
  role?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastTime: 'LastTime',
      metricName: 'MetricName',
      alarmTime: 'AlarmTime',
      state: 'State',
      contactGroups: 'ContactGroups',
      instanceId: 'InstanceId',
      name: 'Name',
      role: 'Role',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      lastTime: 'number',
      metricName: 'string',
      alarmTime: 'number',
      state: 'string',
      contactGroups: 'string',
      instanceId: 'string',
      name: 'string',
      role: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAlarmHistoryResponseBodyAlarmHistoryList extends $tea.Model {
  emrAlarmHistory?: QueryAlarmHistoryResponseBodyAlarmHistoryListEmrAlarmHistory[];
  static names(): { [key: string]: string } {
    return {
      emrAlarmHistory: 'EmrAlarmHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emrAlarmHistory: { 'type': 'array', 'itemType': QueryAlarmHistoryResponseBodyAlarmHistoryListEmrAlarmHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntityResponseBodyItemsItem extends $tea.Model {
  entityId?: string;
  entityType?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEntityResponseBodyItems extends $tea.Model {
  item?: QueryEntityResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryEntityResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagResponseBodyItemsItem extends $tea.Model {
  description?: string;
  category?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      category: 'Category',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      category: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagResponseBodyItems extends $tea.Model {
  item?: QueryTagResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryTagResponseBodyItemsItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterV2RequestHostComponentInfo extends $tea.Model {
  componentNameList?: string[];
  hostName?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      componentNameList: 'ComponentNameList',
      hostName: 'HostName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentNameList: { 'type': 'array', 'itemType': 'string' },
      hostName: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterV2RequestHostGroup extends $tea.Model {
  sysDiskCapacity?: number;
  hostGroupType?: string;
  comment?: string;
  vswitchId?: number;
  sysDiskType?: string;
  autoRenew?: boolean;
  chargeType?: string;
  diskType?: string;
  hostGroupId?: string;
  instanceType?: string;
  hostKeyPairName?: string;
  diskCount?: number;
  createType?: string;
  period?: number;
  hostPassword?: string;
  diskCapacity?: number;
  nodeCount?: number;
  hostGroupName?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sysDiskCapacity: 'SysDiskCapacity',
      hostGroupType: 'HostGroupType',
      comment: 'Comment',
      vswitchId: 'VswitchId',
      sysDiskType: 'SysDiskType',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      diskType: 'DiskType',
      hostGroupId: 'HostGroupId',
      instanceType: 'InstanceType',
      hostKeyPairName: 'HostKeyPairName',
      diskCount: 'DiskCount',
      createType: 'CreateType',
      period: 'Period',
      hostPassword: 'HostPassword',
      diskCapacity: 'DiskCapacity',
      nodeCount: 'NodeCount',
      hostGroupName: 'HostGroupName',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysDiskCapacity: 'number',
      hostGroupType: 'string',
      comment: 'string',
      vswitchId: 'number',
      sysDiskType: 'string',
      autoRenew: 'boolean',
      chargeType: 'string',
      diskType: 'string',
      hostGroupId: 'string',
      instanceType: 'string',
      hostKeyPairName: 'string',
      diskCount: 'number',
      createType: 'string',
      period: 'number',
      hostPassword: 'string',
      diskCapacity: 'number',
      nodeCount: 'number',
      hostGroupName: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeClusterV2RequestPromotionInfo extends $tea.Model {
  promotionOptionNo?: string;
  promotionOptionCode?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      promotionOptionNo: 'PromotionOptionNo',
      promotionOptionCode: 'PromotionOptionCode',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionOptionNo: 'string',
      promotionOptionCode: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchLogResponseBodySlsLogItemListSlsLogItem extends $tea.Model {
  sourceIp?: string;
  packId?: string;
  path?: string;
  hostName?: string;
  timestamp?: number;
  content?: string;
  packMeta?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      packId: 'PackId',
      path: 'Path',
      hostName: 'HostName',
      timestamp: 'Timestamp',
      content: 'Content',
      packMeta: 'PackMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      packId: 'string',
      path: 'string',
      hostName: 'string',
      timestamp: 'number',
      content: 'string',
      packMeta: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchLogResponseBodySlsLogItemList extends $tea.Model {
  slsLogItem?: SearchLogResponseBodySlsLogItemListSlsLogItem[];
  static names(): { [key: string]: string } {
    return {
      slsLogItem: 'SlsLogItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsLogItem: { 'type': 'array', 'itemType': SearchLogResponseBodySlsLogItemListSlsLogItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequestTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequestUserAccountParamList extends $tea.Model {
  authType?: string;
  accountPassword?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      accountPassword: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "emr.aliyuncs.com",
      'cn-hangzhou': "emr.aliyuncs.com",
      'cn-shanghai': "emr.aliyuncs.com",
      'cn-shenzhen': "emr.aliyuncs.com",
      'ap-southeast-1': "emr.aliyuncs.com",
      'us-west-1': "emr.aliyuncs.com",
      'cn-hangzhou-finance': "emr.aliyuncs.com",
      'cn-shenzhen-finance-1': "emr.aliyuncs.com",
      'cn-shanghai-finance-1': "emr.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async addClusterServiceWithOptions(request: AddClusterServiceRequest, runtime: $Util.RuntimeOptions): Promise<AddClusterServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddClusterServiceResponse>(await this.doRPCRequest("AddClusterService", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new AddClusterServiceResponse({}));
  }

  async addClusterService(request: AddClusterServiceRequest): Promise<AddClusterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addClusterServiceWithOptions(request, runtime);
  }

  async addScalingConfigItemV2WithOptions(request: AddScalingConfigItemV2Request, runtime: $Util.RuntimeOptions): Promise<AddScalingConfigItemV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddScalingConfigItemV2Response>(await this.doRPCRequest("AddScalingConfigItemV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new AddScalingConfigItemV2Response({}));
  }

  async addScalingConfigItemV2(request: AddScalingConfigItemV2Request): Promise<AddScalingConfigItemV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addScalingConfigItemV2WithOptions(request, runtime);
  }

  async authorizeSecurityGroupWithOptions(request: AuthorizeSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AuthorizeSecurityGroupResponse>(await this.doRPCRequest("AuthorizeSecurityGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new AuthorizeSecurityGroupResponse({}));
  }

  async authorizeSecurityGroup(request: AuthorizeSecurityGroupRequest): Promise<AuthorizeSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeSecurityGroupWithOptions(request, runtime);
  }

  async cancelOrderWithOptions(request: CancelOrderRequest, runtime: $Util.RuntimeOptions): Promise<CancelOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelOrderResponse>(await this.doRPCRequest("CancelOrder", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CancelOrderResponse({}));
  }

  async cancelOrder(request: CancelOrderRequest): Promise<CancelOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelOrderWithOptions(request, runtime);
  }

  async cleanupFlowEntitySnapshotWithOptions(request: CleanupFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CleanupFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CleanupFlowEntitySnapshotResponse>(await this.doRPCRequest("CleanupFlowEntitySnapshot", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CleanupFlowEntitySnapshotResponse({}));
  }

  async cleanupFlowEntitySnapshot(request: CleanupFlowEntitySnapshotRequest): Promise<CleanupFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cleanupFlowEntitySnapshotWithOptions(request, runtime);
  }

  async cloneFlowWithOptions(request: CloneFlowRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneFlowResponse>(await this.doRPCRequest("CloneFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CloneFlowResponse({}));
  }

  async cloneFlow(request: CloneFlowRequest): Promise<CloneFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowWithOptions(request, runtime);
  }

  async cloneFlowJobWithOptions(request: CloneFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneFlowJobResponse>(await this.doRPCRequest("CloneFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CloneFlowJobResponse({}));
  }

  async cloneFlowJob(request: CloneFlowJobRequest): Promise<CloneFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowJobWithOptions(request, runtime);
  }

  async commitFlowEntitySnapshotWithOptions(request: CommitFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CommitFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CommitFlowEntitySnapshotResponse>(await this.doRPCRequest("CommitFlowEntitySnapshot", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CommitFlowEntitySnapshotResponse({}));
  }

  async commitFlowEntitySnapshot(request: CommitFlowEntitySnapshotRequest): Promise<CommitFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.commitFlowEntitySnapshotWithOptions(request, runtime);
  }

  async createBackupWithOptions(request: CreateBackupRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupResponse>(await this.doRPCRequest("CreateBackup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupResponse({}));
  }

  async createBackup(request: CreateBackupRequest): Promise<CreateBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  async createBackupPlanWithOptions(request: CreateBackupPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupPlanResponse>(await this.doRPCRequest("CreateBackupPlan", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupPlanResponse({}));
  }

  async createBackupPlan(request: CreateBackupPlanRequest): Promise<CreateBackupPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPlanWithOptions(request, runtime);
  }

  async createClusterBootstrapActionWithOptions(request: CreateClusterBootstrapActionRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterBootstrapActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterBootstrapActionResponse>(await this.doRPCRequest("CreateClusterBootstrapAction", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterBootstrapActionResponse({}));
  }

  async createClusterBootstrapAction(request: CreateClusterBootstrapActionRequest): Promise<CreateClusterBootstrapActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterBootstrapActionWithOptions(request, runtime);
  }

  async createClusterTemplateWithOptions(request: CreateClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterTemplateResponse>(await this.doRPCRequest("CreateClusterTemplate", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterTemplateResponse({}));
  }

  async createClusterTemplate(request: CreateClusterTemplateRequest): Promise<CreateClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterTemplateWithOptions(request, runtime);
  }

  async createClusterV2WithOptions(request: CreateClusterV2Request, runtime: $Util.RuntimeOptions): Promise<CreateClusterV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterV2Response>(await this.doRPCRequest("CreateClusterV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterV2Response({}));
  }

  async createClusterV2(request: CreateClusterV2Request): Promise<CreateClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterV2WithOptions(request, runtime);
  }

  async createClusterWithTemplateWithOptions(request: CreateClusterWithTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterWithTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateClusterWithTemplateResponse>(await this.doRPCRequest("CreateClusterWithTemplate", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateClusterWithTemplateResponse({}));
  }

  async createClusterWithTemplate(request: CreateClusterWithTemplateRequest): Promise<CreateClusterWithTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithTemplateWithOptions(request, runtime);
  }

  async createDataSourceWithOptions(request: CreateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDataSourceResponse>(await this.doRPCRequest("CreateDataSource", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDataSourceResponse({}));
  }

  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  async createExecutionPlanWithOptions(request: CreateExecutionPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateExecutionPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateExecutionPlanResponse>(await this.doRPCRequest("CreateExecutionPlan", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateExecutionPlanResponse({}));
  }

  async createExecutionPlan(request: CreateExecutionPlanRequest): Promise<CreateExecutionPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExecutionPlanWithOptions(request, runtime);
  }

  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowResponse>(await this.doRPCRequest("CreateFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowResponse({}));
  }

  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  async createFlowCategoryWithOptions(request: CreateFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowCategoryResponse>(await this.doRPCRequest("CreateFlowCategory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowCategoryResponse({}));
  }

  async createFlowCategory(request: CreateFlowCategoryRequest): Promise<CreateFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowCategoryWithOptions(request, runtime);
  }

  async createFlowEditLockWithOptions(request: CreateFlowEditLockRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowEditLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowEditLockResponse>(await this.doRPCRequest("CreateFlowEditLock", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowEditLockResponse({}));
  }

  async createFlowEditLock(request: CreateFlowEditLockRequest): Promise<CreateFlowEditLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowEditLockWithOptions(request, runtime);
  }

  async createFlowForWebWithOptions(request: CreateFlowForWebRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowForWebResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowForWebResponse>(await this.doRPCRequest("CreateFlowForWeb", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowForWebResponse({}));
  }

  async createFlowForWeb(request: CreateFlowForWebRequest): Promise<CreateFlowForWebResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowForWebWithOptions(request, runtime);
  }

  async createFlowJobWithOptions(request: CreateFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowJobResponse>(await this.doRPCRequest("CreateFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowJobResponse({}));
  }

  async createFlowJob(request: CreateFlowJobRequest): Promise<CreateFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowJobWithOptions(request, runtime);
  }

  async createFlowProjectWithOptions(request: CreateFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowProjectResponse>(await this.doRPCRequest("CreateFlowProject", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowProjectResponse({}));
  }

  async createFlowProject(request: CreateFlowProjectRequest): Promise<CreateFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectWithOptions(request, runtime);
  }

  async createFlowProjectClusterSettingWithOptions(request: CreateFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowProjectClusterSettingResponse>(await this.doRPCRequest("CreateFlowProjectClusterSetting", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowProjectClusterSettingResponse({}));
  }

  async createFlowProjectClusterSetting(request: CreateFlowProjectClusterSettingRequest): Promise<CreateFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async createFlowProjectUserWithOptions(request: CreateFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowProjectUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowProjectUserResponse>(await this.doRPCRequest("CreateFlowProjectUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowProjectUserResponse({}));
  }

  async createFlowProjectUser(request: CreateFlowProjectUserRequest): Promise<CreateFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowProjectUserWithOptions(request, runtime);
  }

  async createJobWithOptions(request: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateJobResponse>(await this.doRPCRequest("CreateJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateJobResponse({}));
  }

  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  async createLibraryWithOptions(request: CreateLibraryRequest, runtime: $Util.RuntimeOptions): Promise<CreateLibraryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateLibraryResponse>(await this.doRPCRequest("CreateLibrary", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateLibraryResponse({}));
  }

  async createLibrary(request: CreateLibraryRequest): Promise<CreateLibraryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLibraryWithOptions(request, runtime);
  }

  async createMetaTablePreviewTaskWithOptions(request: CreateMetaTablePreviewTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetaTablePreviewTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateMetaTablePreviewTaskResponse>(await this.doRPCRequest("CreateMetaTablePreviewTask", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateMetaTablePreviewTaskResponse({}));
  }

  async createMetaTablePreviewTask(request: CreateMetaTablePreviewTaskRequest): Promise<CreateMetaTablePreviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetaTablePreviewTaskWithOptions(request, runtime);
  }

  async createNoteWithOptions(request: CreateNoteRequest, runtime: $Util.RuntimeOptions): Promise<CreateNoteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNoteResponse>(await this.doRPCRequest("CreateNote", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNoteResponse({}));
  }

  async createNote(request: CreateNoteRequest): Promise<CreateNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNoteWithOptions(request, runtime);
  }

  async createParagraphWithOptions(request: CreateParagraphRequest, runtime: $Util.RuntimeOptions): Promise<CreateParagraphResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateParagraphResponse>(await this.doRPCRequest("CreateParagraph", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateParagraphResponse({}));
  }

  async createParagraph(request: CreateParagraphRequest): Promise<CreateParagraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParagraphWithOptions(request, runtime);
  }

  async createResourcePoolWithOptions(request: CreateResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourcePoolResponse>(await this.doRPCRequest("CreateResourcePool", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourcePoolResponse({}));
  }

  async createResourcePool(request: CreateResourcePoolRequest): Promise<CreateResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourcePoolWithOptions(request, runtime);
  }

  async createResourceQueueWithOptions(request: CreateResourceQueueRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceQueueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateResourceQueueResponse>(await this.doRPCRequest("CreateResourceQueue", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateResourceQueueResponse({}));
  }

  async createResourceQueue(request: CreateResourceQueueRequest): Promise<CreateResourceQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceQueueWithOptions(request, runtime);
  }

  async createScalingGroupV2WithOptions(request: CreateScalingGroupV2Request, runtime: $Util.RuntimeOptions): Promise<CreateScalingGroupV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScalingGroupV2Response>(await this.doRPCRequest("CreateScalingGroupV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScalingGroupV2Response({}));
  }

  async createScalingGroupV2(request: CreateScalingGroupV2Request): Promise<CreateScalingGroupV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingGroupV2WithOptions(request, runtime);
  }

  async createScalingRuleWithOptions(request: CreateScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScalingRuleResponse>(await this.doRPCRequest("CreateScalingRule", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScalingRuleResponse({}));
  }

  async createScalingRule(request: CreateScalingRuleRequest): Promise<CreateScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  async createTagWithOptions(request: CreateTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTagResponse>(await this.doRPCRequest("CreateTag", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTagResponse({}));
  }

  async createTag(request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUserResponse>(await this.doRPCRequest("CreateUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async createUsersWithOptions(request: CreateUsersRequest, runtime: $Util.RuntimeOptions): Promise<CreateUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUsersResponse>(await this.doRPCRequest("CreateUsers", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUsersResponse({}));
  }

  async createUsers(request: CreateUsersRequest): Promise<CreateUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  async decommissionHostComponentWithOptions(request: DecommissionHostComponentRequest, runtime: $Util.RuntimeOptions): Promise<DecommissionHostComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DecommissionHostComponentResponse>(await this.doRPCRequest("DecommissionHostComponent", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DecommissionHostComponentResponse({}));
  }

  async decommissionHostComponent(request: DecommissionHostComponentRequest): Promise<DecommissionHostComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decommissionHostComponentWithOptions(request, runtime);
  }

  async deleteClusterTemplateWithOptions(request: DeleteClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteClusterTemplateResponse>(await this.doRPCRequest("DeleteClusterTemplate", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteClusterTemplateResponse({}));
  }

  async deleteClusterTemplate(request: DeleteClusterTemplateRequest): Promise<DeleteClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterTemplateWithOptions(request, runtime);
  }

  async deleteExecutionPlanWithOptions(request: DeleteExecutionPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExecutionPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExecutionPlanResponse>(await this.doRPCRequest("DeleteExecutionPlan", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExecutionPlanResponse({}));
  }

  async deleteExecutionPlan(request: DeleteExecutionPlanRequest): Promise<DeleteExecutionPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExecutionPlanWithOptions(request, runtime);
  }

  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowResponse>(await this.doRPCRequest("DeleteFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowResponse({}));
  }

  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  async deleteFlowCategoryWithOptions(request: DeleteFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowCategoryResponse>(await this.doRPCRequest("DeleteFlowCategory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowCategoryResponse({}));
  }

  async deleteFlowCategory(request: DeleteFlowCategoryRequest): Promise<DeleteFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowCategoryWithOptions(request, runtime);
  }

  async deleteFlowEditLockWithOptions(request: DeleteFlowEditLockRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowEditLockResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowEditLockResponse>(await this.doRPCRequest("DeleteFlowEditLock", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowEditLockResponse({}));
  }

  async deleteFlowEditLock(request: DeleteFlowEditLockRequest): Promise<DeleteFlowEditLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowEditLockWithOptions(request, runtime);
  }

  async deleteFlowJobWithOptions(request: DeleteFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowJobResponse>(await this.doRPCRequest("DeleteFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowJobResponse({}));
  }

  async deleteFlowJob(request: DeleteFlowJobRequest): Promise<DeleteFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowJobWithOptions(request, runtime);
  }

  async deleteFlowProjectWithOptions(request: DeleteFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowProjectResponse>(await this.doRPCRequest("DeleteFlowProject", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowProjectResponse({}));
  }

  async deleteFlowProject(request: DeleteFlowProjectRequest): Promise<DeleteFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectWithOptions(request, runtime);
  }

  async deleteFlowProjectClusterSettingWithOptions(request: DeleteFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowProjectClusterSettingResponse>(await this.doRPCRequest("DeleteFlowProjectClusterSetting", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowProjectClusterSettingResponse({}));
  }

  async deleteFlowProjectClusterSetting(request: DeleteFlowProjectClusterSettingRequest): Promise<DeleteFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async deleteFlowProjectUserWithOptions(request: DeleteFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowProjectUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowProjectUserResponse>(await this.doRPCRequest("DeleteFlowProjectUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowProjectUserResponse({}));
  }

  async deleteFlowProjectUser(request: DeleteFlowProjectUserRequest): Promise<DeleteFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowProjectUserWithOptions(request, runtime);
  }

  async deleteJobWithOptions(request: DeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteJobResponse>(await this.doRPCRequest("DeleteJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteJobResponse({}));
  }

  async deleteJob(request: DeleteJobRequest): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobWithOptions(request, runtime);
  }

  async deleteLibrariesWithOptions(request: DeleteLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLibrariesResponse>(await this.doRPCRequest("DeleteLibraries", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLibrariesResponse({}));
  }

  async deleteLibraries(request: DeleteLibrariesRequest): Promise<DeleteLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLibrariesWithOptions(request, runtime);
  }

  async deleteNoteWithOptions(request: DeleteNoteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNoteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNoteResponse>(await this.doRPCRequest("DeleteNote", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNoteResponse({}));
  }

  async deleteNote(request: DeleteNoteRequest): Promise<DeleteNoteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNoteWithOptions(request, runtime);
  }

  async deleteResourcePoolWithOptions(request: DeleteResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteResourcePoolResponse>(await this.doRPCRequest("DeleteResourcePool", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteResourcePoolResponse({}));
  }

  async deleteResourcePool(request: DeleteResourcePoolRequest): Promise<DeleteResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourcePoolWithOptions(request, runtime);
  }

  async deleteResourceQueueWithOptions(request: DeleteResourceQueueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceQueueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteResourceQueueResponse>(await this.doRPCRequest("DeleteResourceQueue", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteResourceQueueResponse({}));
  }

  async deleteResourceQueue(request: DeleteResourceQueueRequest): Promise<DeleteResourceQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceQueueWithOptions(request, runtime);
  }

  async deleteScalingRuleWithOptions(request: DeleteScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScalingRuleResponse>(await this.doRPCRequest("DeleteScalingRule", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScalingRuleResponse({}));
  }

  async deleteScalingRule(request: DeleteScalingRuleRequest): Promise<DeleteScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScalingRuleWithOptions(request, runtime);
  }

  async deleteTagWithOptions(request: DeleteTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTagResponse>(await this.doRPCRequest("DeleteTag", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTagResponse({}));
  }

  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserResponse>(await this.doRPCRequest("DeleteUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async describeClusterBasicInfoWithOptions(request: DescribeClusterBasicInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterBasicInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterBasicInfoResponse>(await this.doRPCRequest("DescribeClusterBasicInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterBasicInfoResponse({}));
  }

  async describeClusterBasicInfo(request: DescribeClusterBasicInfoRequest): Promise<DescribeClusterBasicInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterBasicInfoWithOptions(request, runtime);
  }

  async describeClusterMetaCollectWithOptions(request: DescribeClusterMetaCollectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterMetaCollectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterMetaCollectResponse>(await this.doRPCRequest("DescribeClusterMetaCollect", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterMetaCollectResponse({}));
  }

  async describeClusterMetaCollect(request: DescribeClusterMetaCollectRequest): Promise<DescribeClusterMetaCollectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterMetaCollectWithOptions(request, runtime);
  }

  async describeClusterOperationHostTaskLogWithOptions(request: DescribeClusterOperationHostTaskLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterOperationHostTaskLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterOperationHostTaskLogResponse>(await this.doRPCRequest("DescribeClusterOperationHostTaskLog", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterOperationHostTaskLogResponse({}));
  }

  async describeClusterOperationHostTaskLog(request: DescribeClusterOperationHostTaskLogRequest): Promise<DescribeClusterOperationHostTaskLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterOperationHostTaskLogWithOptions(request, runtime);
  }

  async describeClusterResourcePoolSchedulerTypeWithOptions(request: DescribeClusterResourcePoolSchedulerTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResourcePoolSchedulerTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterResourcePoolSchedulerTypeResponse>(await this.doRPCRequest("DescribeClusterResourcePoolSchedulerType", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterResourcePoolSchedulerTypeResponse({}));
  }

  async describeClusterResourcePoolSchedulerType(request: DescribeClusterResourcePoolSchedulerTypeRequest): Promise<DescribeClusterResourcePoolSchedulerTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterResourcePoolSchedulerTypeWithOptions(request, runtime);
  }

  async describeClusterServiceWithOptions(request: DescribeClusterServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterServiceResponse>(await this.doRPCRequest("DescribeClusterService", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterServiceResponse({}));
  }

  async describeClusterService(request: DescribeClusterServiceRequest): Promise<DescribeClusterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterServiceWithOptions(request, runtime);
  }

  async describeClusterServiceConfigWithOptions(request: DescribeClusterServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterServiceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterServiceConfigResponse>(await this.doRPCRequest("DescribeClusterServiceConfig", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterServiceConfigResponse({}));
  }

  async describeClusterServiceConfig(request: DescribeClusterServiceConfigRequest): Promise<DescribeClusterServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterServiceConfigWithOptions(request, runtime);
  }

  async describeClusterServiceConfigHistoryWithOptions(request: DescribeClusterServiceConfigHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterServiceConfigHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterServiceConfigHistoryResponse>(await this.doRPCRequest("DescribeClusterServiceConfigHistory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterServiceConfigHistoryResponse({}));
  }

  async describeClusterServiceConfigHistory(request: DescribeClusterServiceConfigHistoryRequest): Promise<DescribeClusterServiceConfigHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterServiceConfigHistoryWithOptions(request, runtime);
  }

  async describeClusterServiceConfigTagWithOptions(request: DescribeClusterServiceConfigTagRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterServiceConfigTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterServiceConfigTagResponse>(await this.doRPCRequest("DescribeClusterServiceConfigTag", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterServiceConfigTagResponse({}));
  }

  async describeClusterServiceConfigTag(request: DescribeClusterServiceConfigTagRequest): Promise<DescribeClusterServiceConfigTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterServiceConfigTagWithOptions(request, runtime);
  }

  async describeClusterTemplateWithOptions(request: DescribeClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterTemplateResponse>(await this.doRPCRequest("DescribeClusterTemplate", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterTemplateResponse({}));
  }

  async describeClusterTemplate(request: DescribeClusterTemplateRequest): Promise<DescribeClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterTemplateWithOptions(request, runtime);
  }

  async describeClusterV2WithOptions(request: DescribeClusterV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeClusterV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClusterV2Response>(await this.doRPCRequest("DescribeClusterV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClusterV2Response({}));
  }

  async describeClusterV2(request: DescribeClusterV2Request): Promise<DescribeClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterV2WithOptions(request, runtime);
  }

  async describeDataSourceWithOptions(request: DescribeDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDataSourceResponse>(await this.doRPCRequest("DescribeDataSource", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDataSourceResponse({}));
  }

  async describeDataSource(request: DescribeDataSourceRequest): Promise<DescribeDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataSourceWithOptions(request, runtime);
  }

  async describeExecutionPlanWithOptions(request: DescribeExecutionPlanRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExecutionPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExecutionPlanResponse>(await this.doRPCRequest("DescribeExecutionPlan", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExecutionPlanResponse({}));
  }

  async describeExecutionPlan(request: DescribeExecutionPlanRequest): Promise<DescribeExecutionPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExecutionPlanWithOptions(request, runtime);
  }

  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowResponse>(await this.doRPCRequest("DescribeFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowResponse({}));
  }

  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  async describeFlowAgentTokenWithOptions(request: DescribeFlowAgentTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowAgentTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowAgentTokenResponse>(await this.doRPCRequest("DescribeFlowAgentToken", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowAgentTokenResponse({}));
  }

  async describeFlowAgentToken(request: DescribeFlowAgentTokenRequest): Promise<DescribeFlowAgentTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowAgentTokenWithOptions(request, runtime);
  }

  async describeFlowAgentUserWithOptions(request: DescribeFlowAgentUserRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowAgentUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowAgentUserResponse>(await this.doRPCRequest("DescribeFlowAgentUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowAgentUserResponse({}));
  }

  async describeFlowAgentUser(request: DescribeFlowAgentUserRequest): Promise<DescribeFlowAgentUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowAgentUserWithOptions(request, runtime);
  }

  async describeFlowCategoryWithOptions(request: DescribeFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowCategoryResponse>(await this.doRPCRequest("DescribeFlowCategory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowCategoryResponse({}));
  }

  async describeFlowCategory(request: DescribeFlowCategoryRequest): Promise<DescribeFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowCategoryWithOptions(request, runtime);
  }

  async describeFlowCategoryTreeWithOptions(request: DescribeFlowCategoryTreeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowCategoryTreeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowCategoryTreeResponse>(await this.doRPCRequest("DescribeFlowCategoryTree", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowCategoryTreeResponse({}));
  }

  async describeFlowCategoryTree(request: DescribeFlowCategoryTreeRequest): Promise<DescribeFlowCategoryTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowCategoryTreeWithOptions(request, runtime);
  }

  async describeFlowEntitySnapshotWithOptions(request: DescribeFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowEntitySnapshotResponse>(await this.doRPCRequest("DescribeFlowEntitySnapshot", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowEntitySnapshotResponse({}));
  }

  async describeFlowEntitySnapshot(request: DescribeFlowEntitySnapshotRequest): Promise<DescribeFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowEntitySnapshotWithOptions(request, runtime);
  }

  async describeFlowInstanceWithOptions(request: DescribeFlowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowInstanceResponse>(await this.doRPCRequest("DescribeFlowInstance", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowInstanceResponse({}));
  }

  async describeFlowInstance(request: DescribeFlowInstanceRequest): Promise<DescribeFlowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowInstanceWithOptions(request, runtime);
  }

  async describeFlowJobWithOptions(request: DescribeFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowJobResponse>(await this.doRPCRequest("DescribeFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowJobResponse({}));
  }

  async describeFlowJob(request: DescribeFlowJobRequest): Promise<DescribeFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowJobWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceWithOptions(request: DescribeFlowNodeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowNodeInstanceResponse>(await this.doRPCRequest("DescribeFlowNodeInstance", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowNodeInstanceResponse({}));
  }

  async describeFlowNodeInstance(request: DescribeFlowNodeInstanceRequest): Promise<DescribeFlowNodeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceContainerLogWithOptions(request: DescribeFlowNodeInstanceContainerLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceContainerLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowNodeInstanceContainerLogResponse>(await this.doRPCRequest("DescribeFlowNodeInstanceContainerLog", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowNodeInstanceContainerLogResponse({}));
  }

  async describeFlowNodeInstanceContainerLog(request: DescribeFlowNodeInstanceContainerLogRequest): Promise<DescribeFlowNodeInstanceContainerLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceContainerLogWithOptions(request, runtime);
  }

  async describeFlowNodeInstanceLauncherLogWithOptions(request: DescribeFlowNodeInstanceLauncherLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowNodeInstanceLauncherLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowNodeInstanceLauncherLogResponse>(await this.doRPCRequest("DescribeFlowNodeInstanceLauncherLog", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowNodeInstanceLauncherLogResponse({}));
  }

  async describeFlowNodeInstanceLauncherLog(request: DescribeFlowNodeInstanceLauncherLogRequest): Promise<DescribeFlowNodeInstanceLauncherLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowNodeInstanceLauncherLogWithOptions(request, runtime);
  }

  async describeFlowProjectWithOptions(request: DescribeFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowProjectResponse>(await this.doRPCRequest("DescribeFlowProject", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowProjectResponse({}));
  }

  async describeFlowProject(request: DescribeFlowProjectRequest): Promise<DescribeFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowProjectWithOptions(request, runtime);
  }

  async describeFlowProjectClusterSettingWithOptions(request: DescribeFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowProjectClusterSettingResponse>(await this.doRPCRequest("DescribeFlowProjectClusterSetting", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowProjectClusterSettingResponse({}));
  }

  async describeFlowProjectClusterSetting(request: DescribeFlowProjectClusterSettingRequest): Promise<DescribeFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async describeJobWithOptions(request: DescribeJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeJobResponse>(await this.doRPCRequest("DescribeJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeJobResponse({}));
  }

  async describeJob(request: DescribeJobRequest): Promise<DescribeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobWithOptions(request, runtime);
  }

  async describeLibraryDetailWithOptions(request: DescribeLibraryDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLibraryDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLibraryDetailResponse>(await this.doRPCRequest("DescribeLibraryDetail", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLibraryDetailResponse({}));
  }

  async describeLibraryDetail(request: DescribeLibraryDetailRequest): Promise<DescribeLibraryDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLibraryDetailWithOptions(request, runtime);
  }

  async describeLibraryInstallTaskDetailWithOptions(request: DescribeLibraryInstallTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLibraryInstallTaskDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLibraryInstallTaskDetailResponse>(await this.doRPCRequest("DescribeLibraryInstallTaskDetail", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLibraryInstallTaskDetailResponse({}));
  }

  async describeLibraryInstallTaskDetail(request: DescribeLibraryInstallTaskDetailRequest): Promise<DescribeLibraryInstallTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLibraryInstallTaskDetailWithOptions(request, runtime);
  }

  async describeMetaTablePreviewTaskWithOptions(request: DescribeMetaTablePreviewTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetaTablePreviewTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetaTablePreviewTaskResponse>(await this.doRPCRequest("DescribeMetaTablePreviewTask", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetaTablePreviewTaskResponse({}));
  }

  async describeMetaTablePreviewTask(request: DescribeMetaTablePreviewTaskRequest): Promise<DescribeMetaTablePreviewTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetaTablePreviewTaskWithOptions(request, runtime);
  }

  async describeScalingActivityWithOptions(request: DescribeScalingActivityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingActivityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingActivityResponse>(await this.doRPCRequest("DescribeScalingActivity", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingActivityResponse({}));
  }

  async describeScalingActivity(request: DescribeScalingActivityRequest): Promise<DescribeScalingActivityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingActivityWithOptions(request, runtime);
  }

  async describeScalingCommonConfigWithOptions(request: DescribeScalingCommonConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingCommonConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingCommonConfigResponse>(await this.doRPCRequest("DescribeScalingCommonConfig", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingCommonConfigResponse({}));
  }

  async describeScalingCommonConfig(request: DescribeScalingCommonConfigRequest): Promise<DescribeScalingCommonConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingCommonConfigWithOptions(request, runtime);
  }

  async describeScalingConfigItemV2WithOptions(request: DescribeScalingConfigItemV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeScalingConfigItemV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingConfigItemV2Response>(await this.doRPCRequest("DescribeScalingConfigItemV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingConfigItemV2Response({}));
  }

  async describeScalingConfigItemV2(request: DescribeScalingConfigItemV2Request): Promise<DescribeScalingConfigItemV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingConfigItemV2WithOptions(request, runtime);
  }

  async describeScalingGroupInstanceV2WithOptions(request: DescribeScalingGroupInstanceV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupInstanceV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingGroupInstanceV2Response>(await this.doRPCRequest("DescribeScalingGroupInstanceV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingGroupInstanceV2Response({}));
  }

  async describeScalingGroupInstanceV2(request: DescribeScalingGroupInstanceV2Request): Promise<DescribeScalingGroupInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupInstanceV2WithOptions(request, runtime);
  }

  async describeScalingGroupV2WithOptions(request: DescribeScalingGroupV2Request, runtime: $Util.RuntimeOptions): Promise<DescribeScalingGroupV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingGroupV2Response>(await this.doRPCRequest("DescribeScalingGroupV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingGroupV2Response({}));
  }

  async describeScalingGroupV2(request: DescribeScalingGroupV2Request): Promise<DescribeScalingGroupV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingGroupV2WithOptions(request, runtime);
  }

  async describeScalingRuleWithOptions(request: DescribeScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScalingRuleResponse>(await this.doRPCRequest("DescribeScalingRule", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScalingRuleResponse({}));
  }

  async describeScalingRule(request: DescribeScalingRuleRequest): Promise<DescribeScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScalingRuleWithOptions(request, runtime);
  }

  async describeSecurityGroupAttributeWithOptions(request: DescribeSecurityGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityGroupAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityGroupAttributeResponse>(await this.doRPCRequest("DescribeSecurityGroupAttribute", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityGroupAttributeResponse({}));
  }

  async describeSecurityGroupAttribute(request: DescribeSecurityGroupAttributeRequest): Promise<DescribeSecurityGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityGroupAttributeWithOptions(request, runtime);
  }

  async detachAndReleaseClusterEniWithOptions(request: DetachAndReleaseClusterEniRequest, runtime: $Util.RuntimeOptions): Promise<DetachAndReleaseClusterEniResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachAndReleaseClusterEniResponse>(await this.doRPCRequest("DetachAndReleaseClusterEni", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DetachAndReleaseClusterEniResponse({}));
  }

  async detachAndReleaseClusterEni(request: DetachAndReleaseClusterEniRequest): Promise<DetachAndReleaseClusterEniResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAndReleaseClusterEniWithOptions(request, runtime);
  }

  async diffFlowEntitySnapshotWithOptions(request: DiffFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DiffFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DiffFlowEntitySnapshotResponse>(await this.doRPCRequest("DiffFlowEntitySnapshot", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DiffFlowEntitySnapshotResponse({}));
  }

  async diffFlowEntitySnapshot(request: DiffFlowEntitySnapshotRequest): Promise<DiffFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.diffFlowEntitySnapshotWithOptions(request, runtime);
  }

  async dumpMetaDataSourceForOuterWithOptions(request: DumpMetaDataSourceForOuterRequest, runtime: $Util.RuntimeOptions): Promise<DumpMetaDataSourceForOuterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DumpMetaDataSourceForOuterResponse>(await this.doRPCRequest("DumpMetaDataSourceForOuter", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new DumpMetaDataSourceForOuterResponse({}));
  }

  async dumpMetaDataSourceForOuter(request: DumpMetaDataSourceForOuterRequest): Promise<DumpMetaDataSourceForOuterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dumpMetaDataSourceForOuterWithOptions(request, runtime);
  }

  async getFlowEntityRelationGraphWithOptions(request: GetFlowEntityRelationGraphRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowEntityRelationGraphResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFlowEntityRelationGraphResponse>(await this.doRPCRequest("GetFlowEntityRelationGraph", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetFlowEntityRelationGraphResponse({}));
  }

  async getFlowEntityRelationGraph(request: GetFlowEntityRelationGraphRequest): Promise<GetFlowEntityRelationGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowEntityRelationGraphWithOptions(request, runtime);
  }

  async getHdfsCapacityStatisticInfoWithOptions(request: GetHdfsCapacityStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetHdfsCapacityStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetHdfsCapacityStatisticInfoResponse>(await this.doRPCRequest("GetHdfsCapacityStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetHdfsCapacityStatisticInfoResponse({}));
  }

  async getHdfsCapacityStatisticInfo(request: GetHdfsCapacityStatisticInfoRequest): Promise<GetHdfsCapacityStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHdfsCapacityStatisticInfoWithOptions(request, runtime);
  }

  async getJobInputStatisticInfoWithOptions(request: GetJobInputStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInputStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobInputStatisticInfoResponse>(await this.doRPCRequest("GetJobInputStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobInputStatisticInfoResponse({}));
  }

  async getJobInputStatisticInfo(request: GetJobInputStatisticInfoRequest): Promise<GetJobInputStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInputStatisticInfoWithOptions(request, runtime);
  }

  async getJobOutputStatisticInfoWithOptions(request: GetJobOutputStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetJobOutputStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobOutputStatisticInfoResponse>(await this.doRPCRequest("GetJobOutputStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobOutputStatisticInfoResponse({}));
  }

  async getJobOutputStatisticInfo(request: GetJobOutputStatisticInfoRequest): Promise<GetJobOutputStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobOutputStatisticInfoWithOptions(request, runtime);
  }

  async getJobRunningTimeStatisticInfoWithOptions(request: GetJobRunningTimeStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetJobRunningTimeStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobRunningTimeStatisticInfoResponse>(await this.doRPCRequest("GetJobRunningTimeStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobRunningTimeStatisticInfoResponse({}));
  }

  async getJobRunningTimeStatisticInfo(request: GetJobRunningTimeStatisticInfoRequest): Promise<GetJobRunningTimeStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobRunningTimeStatisticInfoWithOptions(request, runtime);
  }

  async getQueueInputStatisticInfoWithOptions(request: GetQueueInputStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueInputStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQueueInputStatisticInfoResponse>(await this.doRPCRequest("GetQueueInputStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetQueueInputStatisticInfoResponse({}));
  }

  async getQueueInputStatisticInfo(request: GetQueueInputStatisticInfoRequest): Promise<GetQueueInputStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueInputStatisticInfoWithOptions(request, runtime);
  }

  async getQueueOutputStatisticInfoWithOptions(request: GetQueueOutputStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueOutputStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQueueOutputStatisticInfoResponse>(await this.doRPCRequest("GetQueueOutputStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetQueueOutputStatisticInfoResponse({}));
  }

  async getQueueOutputStatisticInfo(request: GetQueueOutputStatisticInfoRequest): Promise<GetQueueOutputStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueOutputStatisticInfoWithOptions(request, runtime);
  }

  async getQueueSubmissionStatisticInfoWithOptions(request: GetQueueSubmissionStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueSubmissionStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetQueueSubmissionStatisticInfoResponse>(await this.doRPCRequest("GetQueueSubmissionStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetQueueSubmissionStatisticInfoResponse({}));
  }

  async getQueueSubmissionStatisticInfo(request: GetQueueSubmissionStatisticInfoRequest): Promise<GetQueueSubmissionStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueSubmissionStatisticInfoWithOptions(request, runtime);
  }

  async getUserInputStatisticInfoWithOptions(request: GetUserInputStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserInputStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserInputStatisticInfoResponse>(await this.doRPCRequest("GetUserInputStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserInputStatisticInfoResponse({}));
  }

  async getUserInputStatisticInfo(request: GetUserInputStatisticInfoRequest): Promise<GetUserInputStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserInputStatisticInfoWithOptions(request, runtime);
  }

  async getUserOutputStatisticInfoWithOptions(request: GetUserOutputStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserOutputStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserOutputStatisticInfoResponse>(await this.doRPCRequest("GetUserOutputStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserOutputStatisticInfoResponse({}));
  }

  async getUserOutputStatisticInfo(request: GetUserOutputStatisticInfoRequest): Promise<GetUserOutputStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserOutputStatisticInfoWithOptions(request, runtime);
  }

  async getUserSubmissionStatisticInfoWithOptions(request: GetUserSubmissionStatisticInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserSubmissionStatisticInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetUserSubmissionStatisticInfoResponse>(await this.doRPCRequest("GetUserSubmissionStatisticInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new GetUserSubmissionStatisticInfoResponse({}));
  }

  async getUserSubmissionStatisticInfo(request: GetUserSubmissionStatisticInfoRequest): Promise<GetUserSubmissionStatisticInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserSubmissionStatisticInfoWithOptions(request, runtime);
  }

  async installLibrariesWithOptions(request: InstallLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<InstallLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallLibrariesResponse>(await this.doRPCRequest("InstallLibraries", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new InstallLibrariesResponse({}));
  }

  async installLibraries(request: InstallLibrariesRequest): Promise<InstallLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installLibrariesWithOptions(request, runtime);
  }

  async joinResourceGroupWithOptions(request: JoinResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<JoinResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<JoinResourceGroupResponse>(await this.doRPCRequest("JoinResourceGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new JoinResourceGroupResponse({}));
  }

  async joinResourceGroup(request: JoinResourceGroupRequest): Promise<JoinResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.joinResourceGroupWithOptions(request, runtime);
  }

  async killExecutionJobInstanceWithOptions(request: KillExecutionJobInstanceRequest, runtime: $Util.RuntimeOptions): Promise<KillExecutionJobInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KillExecutionJobInstanceResponse>(await this.doRPCRequest("KillExecutionJobInstance", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new KillExecutionJobInstanceResponse({}));
  }

  async killExecutionJobInstance(request: KillExecutionJobInstanceRequest): Promise<KillExecutionJobInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killExecutionJobInstanceWithOptions(request, runtime);
  }

  async killFlowJobWithOptions(request: KillFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<KillFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KillFlowJobResponse>(await this.doRPCRequest("KillFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new KillFlowJobResponse({}));
  }

  async killFlowJob(request: KillFlowJobRequest): Promise<KillFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killFlowJobWithOptions(request, runtime);
  }

  async listAdviceActionWithOptions(request: ListAdviceActionRequest, runtime: $Util.RuntimeOptions): Promise<ListAdviceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAdviceActionResponse>(await this.doRPCRequest("ListAdviceAction", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListAdviceActionResponse({}));
  }

  async listAdviceAction(request: ListAdviceActionRequest): Promise<ListAdviceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAdviceActionWithOptions(request, runtime);
  }

  async listApmApplicationWithOptions(request: ListApmApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListApmApplicationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListApmApplicationResponse>(await this.doRPCRequest("ListApmApplication", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListApmApplicationResponse({}));
  }

  async listApmApplication(request: ListApmApplicationRequest): Promise<ListApmApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApmApplicationWithOptions(request, runtime);
  }

  async listBackupsWithOptions(request: ListBackupsRequest, runtime: $Util.RuntimeOptions): Promise<ListBackupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBackupsResponse>(await this.doRPCRequest("ListBackups", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListBackupsResponse({}));
  }

  async listBackups(request: ListBackupsRequest): Promise<ListBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBackupsWithOptions(request, runtime);
  }

  async listClusterHostWithOptions(request: ListClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterHostResponse>(await this.doRPCRequest("ListClusterHost", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterHostResponse({}));
  }

  async listClusterHost(request: ListClusterHostRequest): Promise<ListClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterHostWithOptions(request, runtime);
  }

  async listClusterHostComponentWithOptions(request: ListClusterHostComponentRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterHostComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterHostComponentResponse>(await this.doRPCRequest("ListClusterHostComponent", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterHostComponentResponse({}));
  }

  async listClusterHostComponent(request: ListClusterHostComponentRequest): Promise<ListClusterHostComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterHostComponentWithOptions(request, runtime);
  }

  async listClusterHostGroupWithOptions(request: ListClusterHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterHostGroupResponse>(await this.doRPCRequest("ListClusterHostGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterHostGroupResponse({}));
  }

  async listClusterHostGroup(request: ListClusterHostGroupRequest): Promise<ListClusterHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterHostGroupWithOptions(request, runtime);
  }

  async listClusterInstalledServiceWithOptions(request: ListClusterInstalledServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterInstalledServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterInstalledServiceResponse>(await this.doRPCRequest("ListClusterInstalledService", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterInstalledServiceResponse({}));
  }

  async listClusterInstalledService(request: ListClusterInstalledServiceRequest): Promise<ListClusterInstalledServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterInstalledServiceWithOptions(request, runtime);
  }

  async listClusterOperationWithOptions(request: ListClusterOperationRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationResponse>(await this.doRPCRequest("ListClusterOperation", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationResponse({}));
  }

  async listClusterOperation(request: ListClusterOperationRequest): Promise<ListClusterOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationWithOptions(request, runtime);
  }

  async listClusterOperationHostWithOptions(request: ListClusterOperationHostRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationHostResponse>(await this.doRPCRequest("ListClusterOperationHost", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationHostResponse({}));
  }

  async listClusterOperationHost(request: ListClusterOperationHostRequest): Promise<ListClusterOperationHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationHostWithOptions(request, runtime);
  }

  async listClusterOperationHostTaskWithOptions(request: ListClusterOperationHostTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationHostTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationHostTaskResponse>(await this.doRPCRequest("ListClusterOperationHostTask", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationHostTaskResponse({}));
  }

  async listClusterOperationHostTask(request: ListClusterOperationHostTaskRequest): Promise<ListClusterOperationHostTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationHostTaskWithOptions(request, runtime);
  }

  async listClusterOperationTaskWithOptions(request: ListClusterOperationTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterOperationTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterOperationTaskResponse>(await this.doRPCRequest("ListClusterOperationTask", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterOperationTaskResponse({}));
  }

  async listClusterOperationTask(request: ListClusterOperationTaskRequest): Promise<ListClusterOperationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterOperationTaskWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClustersResponse>(await this.doRPCRequest("ListClusters", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async listClusterServiceWithOptions(request: ListClusterServiceRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterServiceResponse>(await this.doRPCRequest("ListClusterService", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterServiceResponse({}));
  }

  async listClusterService(request: ListClusterServiceRequest): Promise<ListClusterServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterServiceWithOptions(request, runtime);
  }

  async listClusterServiceComponentWithOptions(request: ListClusterServiceComponentRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterServiceComponentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterServiceComponentResponse>(await this.doRPCRequest("ListClusterServiceComponent", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterServiceComponentResponse({}));
  }

  async listClusterServiceComponent(request: ListClusterServiceComponentRequest): Promise<ListClusterServiceComponentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterServiceComponentWithOptions(request, runtime);
  }

  async listClusterServiceComponentHealthInfoWithOptions(request: ListClusterServiceComponentHealthInfoRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterServiceComponentHealthInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterServiceComponentHealthInfoResponse>(await this.doRPCRequest("ListClusterServiceComponentHealthInfo", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterServiceComponentHealthInfoResponse({}));
  }

  async listClusterServiceComponentHealthInfo(request: ListClusterServiceComponentHealthInfoRequest): Promise<ListClusterServiceComponentHealthInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterServiceComponentHealthInfoWithOptions(request, runtime);
  }

  async listClusterServiceConfigHistoryWithOptions(request: ListClusterServiceConfigHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterServiceConfigHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterServiceConfigHistoryResponse>(await this.doRPCRequest("ListClusterServiceConfigHistory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterServiceConfigHistoryResponse({}));
  }

  async listClusterServiceConfigHistory(request: ListClusterServiceConfigHistoryRequest): Promise<ListClusterServiceConfigHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterServiceConfigHistoryWithOptions(request, runtime);
  }

  async listClusterServiceQuickLinkWithOptions(request: ListClusterServiceQuickLinkRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterServiceQuickLinkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterServiceQuickLinkResponse>(await this.doRPCRequest("ListClusterServiceQuickLink", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterServiceQuickLinkResponse({}));
  }

  async listClusterServiceQuickLink(request: ListClusterServiceQuickLinkRequest): Promise<ListClusterServiceQuickLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterServiceQuickLinkWithOptions(request, runtime);
  }

  async listClusterTemplatesWithOptions(request: ListClusterTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListClusterTemplatesResponse>(await this.doRPCRequest("ListClusterTemplates", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListClusterTemplatesResponse({}));
  }

  async listClusterTemplates(request: ListClusterTemplatesRequest): Promise<ListClusterTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterTemplatesWithOptions(request, runtime);
  }

  async listDataSourceWithOptions(request: ListDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDataSourceResponse>(await this.doRPCRequest("ListDataSource", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListDataSourceResponse({}));
  }

  async listDataSource(request: ListDataSourceRequest): Promise<ListDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceWithOptions(request, runtime);
  }

  async listEmrAvailableConfigWithOptions(request: ListEmrAvailableConfigRequest, runtime: $Util.RuntimeOptions): Promise<ListEmrAvailableConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEmrAvailableConfigResponse>(await this.doRPCRequest("ListEmrAvailableConfig", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListEmrAvailableConfigResponse({}));
  }

  async listEmrAvailableConfig(request: ListEmrAvailableConfigRequest): Promise<ListEmrAvailableConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmrAvailableConfigWithOptions(request, runtime);
  }

  async listEmrAvailableResourceWithOptions(request: ListEmrAvailableResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListEmrAvailableResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEmrAvailableResourceResponse>(await this.doRPCRequest("ListEmrAvailableResource", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListEmrAvailableResourceResponse({}));
  }

  async listEmrAvailableResource(request: ListEmrAvailableResourceRequest): Promise<ListEmrAvailableResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmrAvailableResourceWithOptions(request, runtime);
  }

  async listEmrMainVersionWithOptions(request: ListEmrMainVersionRequest, runtime: $Util.RuntimeOptions): Promise<ListEmrMainVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListEmrMainVersionResponse>(await this.doRPCRequest("ListEmrMainVersion", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListEmrMainVersionResponse({}));
  }

  async listEmrMainVersion(request: ListEmrMainVersionRequest): Promise<ListEmrMainVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEmrMainVersionWithOptions(request, runtime);
  }

  async listExecutionPlanInstancesWithOptions(request: ListExecutionPlanInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionPlanInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExecutionPlanInstancesResponse>(await this.doRPCRequest("ListExecutionPlanInstances", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListExecutionPlanInstancesResponse({}));
  }

  async listExecutionPlanInstances(request: ListExecutionPlanInstancesRequest): Promise<ListExecutionPlanInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionPlanInstancesWithOptions(request, runtime);
  }

  async listExecutionPlansWithOptions(request: ListExecutionPlansRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionPlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExecutionPlansResponse>(await this.doRPCRequest("ListExecutionPlans", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListExecutionPlansResponse({}));
  }

  async listExecutionPlans(request: ListExecutionPlansRequest): Promise<ListExecutionPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionPlansWithOptions(request, runtime);
  }

  async listFlowWithOptions(request: ListFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowResponse>(await this.doRPCRequest("ListFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowResponse({}));
  }

  async listFlow(request: ListFlowRequest): Promise<ListFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  async listFlowCategoryWithOptions(request: ListFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowCategoryResponse>(await this.doRPCRequest("ListFlowCategory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowCategoryResponse({}));
  }

  async listFlowCategory(request: ListFlowCategoryRequest): Promise<ListFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowCategoryWithOptions(request, runtime);
  }

  async listFlowClusterWithOptions(request: ListFlowClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterResponse>(await this.doRPCRequest("ListFlowCluster", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterResponse({}));
  }

  async listFlowCluster(request: ListFlowClusterRequest): Promise<ListFlowClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterWithOptions(request, runtime);
  }

  async listFlowClusterAllWithOptions(request: ListFlowClusterAllRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterAllResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterAllResponse>(await this.doRPCRequest("ListFlowClusterAll", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterAllResponse({}));
  }

  async listFlowClusterAll(request: ListFlowClusterAllRequest): Promise<ListFlowClusterAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterAllWithOptions(request, runtime);
  }

  async listFlowClusterAllHostsWithOptions(request: ListFlowClusterAllHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterAllHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterAllHostsResponse>(await this.doRPCRequest("ListFlowClusterAllHosts", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterAllHostsResponse({}));
  }

  async listFlowClusterAllHosts(request: ListFlowClusterAllHostsRequest): Promise<ListFlowClusterAllHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterAllHostsWithOptions(request, runtime);
  }

  async listFlowClusterHostWithOptions(request: ListFlowClusterHostRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowClusterHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowClusterHostResponse>(await this.doRPCRequest("ListFlowClusterHost", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowClusterHostResponse({}));
  }

  async listFlowClusterHost(request: ListFlowClusterHostRequest): Promise<ListFlowClusterHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowClusterHostWithOptions(request, runtime);
  }

  async listFlowEntitySnapshotWithOptions(request: ListFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowEntitySnapshotResponse>(await this.doRPCRequest("ListFlowEntitySnapshot", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowEntitySnapshotResponse({}));
  }

  async listFlowEntitySnapshot(request: ListFlowEntitySnapshotRequest): Promise<ListFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowEntitySnapshotWithOptions(request, runtime);
  }

  async listFlowInstanceWithOptions(request: ListFlowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowInstanceResponse>(await this.doRPCRequest("ListFlowInstance", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowInstanceResponse({}));
  }

  async listFlowInstance(request: ListFlowInstanceRequest): Promise<ListFlowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowInstanceWithOptions(request, runtime);
  }

  async listFlowJobWithOptions(request: ListFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowJobResponse>(await this.doRPCRequest("ListFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowJobResponse({}));
  }

  async listFlowJob(request: ListFlowJobRequest): Promise<ListFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowJobWithOptions(request, runtime);
  }

  async listFlowJobHistoryWithOptions(request: ListFlowJobHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowJobHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowJobHistoryResponse>(await this.doRPCRequest("ListFlowJobHistory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowJobHistoryResponse({}));
  }

  async listFlowJobHistory(request: ListFlowJobHistoryRequest): Promise<ListFlowJobHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowJobHistoryWithOptions(request, runtime);
  }

  async listFlowNodeInstanceWithOptions(request: ListFlowNodeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowNodeInstanceResponse>(await this.doRPCRequest("ListFlowNodeInstance", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowNodeInstanceResponse({}));
  }

  async listFlowNodeInstance(request: ListFlowNodeInstanceRequest): Promise<ListFlowNodeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeInstanceWithOptions(request, runtime);
  }

  async listFlowNodeInstanceContainerStatusWithOptions(request: ListFlowNodeInstanceContainerStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeInstanceContainerStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowNodeInstanceContainerStatusResponse>(await this.doRPCRequest("ListFlowNodeInstanceContainerStatus", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowNodeInstanceContainerStatusResponse({}));
  }

  async listFlowNodeInstanceContainerStatus(request: ListFlowNodeInstanceContainerStatusRequest): Promise<ListFlowNodeInstanceContainerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeInstanceContainerStatusWithOptions(request, runtime);
  }

  async listFlowNodeSqlResultWithOptions(request: ListFlowNodeSqlResultRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowNodeSqlResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowNodeSqlResultResponse>(await this.doRPCRequest("ListFlowNodeSqlResult", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowNodeSqlResultResponse({}));
  }

  async listFlowNodeSqlResult(request: ListFlowNodeSqlResultRequest): Promise<ListFlowNodeSqlResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowNodeSqlResultWithOptions(request, runtime);
  }

  async listFlowProjectWithOptions(request: ListFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowProjectResponse>(await this.doRPCRequest("ListFlowProject", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowProjectResponse({}));
  }

  async listFlowProject(request: ListFlowProjectRequest): Promise<ListFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectWithOptions(request, runtime);
  }

  async listFlowProjectClusterSettingWithOptions(request: ListFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowProjectClusterSettingResponse>(await this.doRPCRequest("ListFlowProjectClusterSetting", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowProjectClusterSettingResponse({}));
  }

  async listFlowProjectClusterSetting(request: ListFlowProjectClusterSettingRequest): Promise<ListFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async listFlowProjectUserWithOptions(request: ListFlowProjectUserRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowProjectUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowProjectUserResponse>(await this.doRPCRequest("ListFlowProjectUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowProjectUserResponse({}));
  }

  async listFlowProjectUser(request: ListFlowProjectUserRequest): Promise<ListFlowProjectUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowProjectUserWithOptions(request, runtime);
  }

  async listJobExecutionInstancesWithOptions(request: ListJobExecutionInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListJobExecutionInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobExecutionInstancesResponse>(await this.doRPCRequest("ListJobExecutionInstances", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobExecutionInstancesResponse({}));
  }

  async listJobExecutionInstances(request: ListJobExecutionInstancesRequest): Promise<ListJobExecutionInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobExecutionInstancesWithOptions(request, runtime);
  }

  async listJobInstanceWorkersWithOptions(request: ListJobInstanceWorkersRequest, runtime: $Util.RuntimeOptions): Promise<ListJobInstanceWorkersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobInstanceWorkersResponse>(await this.doRPCRequest("ListJobInstanceWorkers", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobInstanceWorkersResponse({}));
  }

  async listJobInstanceWorkers(request: ListJobInstanceWorkersRequest): Promise<ListJobInstanceWorkersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobInstanceWorkersWithOptions(request, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListJobsResponse>(await this.doRPCRequest("ListJobs", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListJobsResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  async listLibrariesWithOptions(request: ListLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<ListLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLibrariesResponse>(await this.doRPCRequest("ListLibraries", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListLibrariesResponse({}));
  }

  async listLibraries(request: ListLibrariesRequest): Promise<ListLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLibrariesWithOptions(request, runtime);
  }

  async listLibraryInstallTasksWithOptions(request: ListLibraryInstallTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListLibraryInstallTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLibraryInstallTasksResponse>(await this.doRPCRequest("ListLibraryInstallTasks", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListLibraryInstallTasksResponse({}));
  }

  async listLibraryInstallTasks(request: ListLibraryInstallTasksRequest): Promise<ListLibraryInstallTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLibraryInstallTasksWithOptions(request, runtime);
  }

  async listLibraryStatusWithOptions(request: ListLibraryStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListLibraryStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListLibraryStatusResponse>(await this.doRPCRequest("ListLibraryStatus", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListLibraryStatusResponse({}));
  }

  async listLibraryStatus(request: ListLibraryStatusRequest): Promise<ListLibraryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLibraryStatusWithOptions(request, runtime);
  }

  async listMetaClusterWithOptions(request: ListMetaClusterRequest, runtime: $Util.RuntimeOptions): Promise<ListMetaClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMetaClusterResponse>(await this.doRPCRequest("ListMetaCluster", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListMetaClusterResponse({}));
  }

  async listMetaCluster(request: ListMetaClusterRequest): Promise<ListMetaClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetaClusterWithOptions(request, runtime);
  }

  async listMetaDataSourceClusterForOuterWithOptions(request: ListMetaDataSourceClusterForOuterRequest, runtime: $Util.RuntimeOptions): Promise<ListMetaDataSourceClusterForOuterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListMetaDataSourceClusterForOuterResponse>(await this.doRPCRequest("ListMetaDataSourceClusterForOuter", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListMetaDataSourceClusterForOuterResponse({}));
  }

  async listMetaDataSourceClusterForOuter(request: ListMetaDataSourceClusterForOuterRequest): Promise<ListMetaDataSourceClusterForOuterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetaDataSourceClusterForOuterWithOptions(request, runtime);
  }

  async listNotesWithOptions(request: ListNotesRequest, runtime: $Util.RuntimeOptions): Promise<ListNotesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListNotesResponse>(await this.doRPCRequest("ListNotes", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListNotesResponse({}));
  }

  async listNotes(request: ListNotesRequest): Promise<ListNotesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotesWithOptions(request, runtime);
  }

  async listResourcePoolWithOptions(request: ListResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListResourcePoolResponse>(await this.doRPCRequest("ListResourcePool", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourcePoolResponse({}));
  }

  async listResourcePool(request: ListResourcePoolRequest): Promise<ListResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcePoolWithOptions(request, runtime);
  }

  async listRolesWithOptions(request: ListRolesRequest, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRolesResponse>(await this.doRPCRequest("ListRoles", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListRolesResponse({}));
  }

  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRolesWithOptions(request, runtime);
  }

  async listScalingActivityV2WithOptions(request: ListScalingActivityV2Request, runtime: $Util.RuntimeOptions): Promise<ListScalingActivityV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScalingActivityV2Response>(await this.doRPCRequest("ListScalingActivityV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListScalingActivityV2Response({}));
  }

  async listScalingActivityV2(request: ListScalingActivityV2Request): Promise<ListScalingActivityV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScalingActivityV2WithOptions(request, runtime);
  }

  async listScalingConfigItemV2WithOptions(request: ListScalingConfigItemV2Request, runtime: $Util.RuntimeOptions): Promise<ListScalingConfigItemV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScalingConfigItemV2Response>(await this.doRPCRequest("ListScalingConfigItemV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListScalingConfigItemV2Response({}));
  }

  async listScalingConfigItemV2(request: ListScalingConfigItemV2Request): Promise<ListScalingConfigItemV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScalingConfigItemV2WithOptions(request, runtime);
  }

  async listScalingGroupV2WithOptions(request: ListScalingGroupV2Request, runtime: $Util.RuntimeOptions): Promise<ListScalingGroupV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListScalingGroupV2Response>(await this.doRPCRequest("ListScalingGroupV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListScalingGroupV2Response({}));
  }

  async listScalingGroupV2(request: ListScalingGroupV2Request): Promise<ListScalingGroupV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScalingGroupV2WithOptions(request, runtime);
  }

  async listSecurityGroupWithOptions(request: ListSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecurityGroupResponse>(await this.doRPCRequest("ListSecurityGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecurityGroupResponse({}));
  }

  async listSecurityGroup(request: ListSecurityGroupRequest): Promise<ListSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityGroupWithOptions(request, runtime);
  }

  async listStackWithOptions(request: ListStackRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackResponse>(await this.doRPCRequest("ListStack", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackResponse({}));
  }

  async listStack(request: ListStackRequest): Promise<ListStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUsersResponse>(await this.doRPCRequest("ListUsers", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listVswitchWithOptions(request: ListVswitchRequest, runtime: $Util.RuntimeOptions): Promise<ListVswitchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVswitchResponse>(await this.doRPCRequest("ListVswitch", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListVswitchResponse({}));
  }

  async listVswitch(request: ListVswitchRequest): Promise<ListVswitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVswitchWithOptions(request, runtime);
  }

  async modifyClusterBootstrapActionWithOptions(request: ModifyClusterBootstrapActionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterBootstrapActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterBootstrapActionResponse>(await this.doRPCRequest("ModifyClusterBootstrapAction", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterBootstrapActionResponse({}));
  }

  async modifyClusterBootstrapAction(request: ModifyClusterBootstrapActionRequest): Promise<ModifyClusterBootstrapActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterBootstrapActionWithOptions(request, runtime);
  }

  async modifyClusterHostGroupWithOptions(request: ModifyClusterHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterHostGroupResponse>(await this.doRPCRequest("ModifyClusterHostGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterHostGroupResponse({}));
  }

  async modifyClusterHostGroup(request: ModifyClusterHostGroupRequest): Promise<ModifyClusterHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterHostGroupWithOptions(request, runtime);
  }

  async modifyClusterMetaCollectWithOptions(request: ModifyClusterMetaCollectRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterMetaCollectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterMetaCollectResponse>(await this.doRPCRequest("ModifyClusterMetaCollect", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterMetaCollectResponse({}));
  }

  async modifyClusterMetaCollect(request: ModifyClusterMetaCollectRequest): Promise<ModifyClusterMetaCollectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterMetaCollectWithOptions(request, runtime);
  }

  async modifyClusterNameWithOptions(request: ModifyClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterNameResponse>(await this.doRPCRequest("ModifyClusterName", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterNameResponse({}));
  }

  async modifyClusterName(request: ModifyClusterNameRequest): Promise<ModifyClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterNameWithOptions(request, runtime);
  }

  async modifyClusterSecurityGroupRuleWithOptions(request: ModifyClusterSecurityGroupRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterSecurityGroupRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterSecurityGroupRuleResponse>(await this.doRPCRequest("ModifyClusterSecurityGroupRule", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterSecurityGroupRuleResponse({}));
  }

  async modifyClusterSecurityGroupRule(request: ModifyClusterSecurityGroupRuleRequest): Promise<ModifyClusterSecurityGroupRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterSecurityGroupRuleWithOptions(request, runtime);
  }

  async modifyClusterServiceConfigWithOptions(request: ModifyClusterServiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterServiceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterServiceConfigResponse>(await this.doRPCRequest("ModifyClusterServiceConfig", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterServiceConfigResponse({}));
  }

  async modifyClusterServiceConfig(request: ModifyClusterServiceConfigRequest): Promise<ModifyClusterServiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterServiceConfigWithOptions(request, runtime);
  }

  async modifyClusterTemplateWithOptions(request: ModifyClusterTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyClusterTemplateResponse>(await this.doRPCRequest("ModifyClusterTemplate", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyClusterTemplateResponse({}));
  }

  async modifyClusterTemplate(request: ModifyClusterTemplateRequest): Promise<ModifyClusterTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterTemplateWithOptions(request, runtime);
  }

  async modifyExecutionPlanWithOptions(request: ModifyExecutionPlanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyExecutionPlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyExecutionPlanResponse>(await this.doRPCRequest("ModifyExecutionPlan", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyExecutionPlanResponse({}));
  }

  async modifyExecutionPlan(request: ModifyExecutionPlanRequest): Promise<ModifyExecutionPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyExecutionPlanWithOptions(request, runtime);
  }

  async modifyFlowWithOptions(request: ModifyFlowRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowResponse>(await this.doRPCRequest("ModifyFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowResponse({}));
  }

  async modifyFlow(request: ModifyFlowRequest): Promise<ModifyFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  async modifyFlowCategoryWithOptions(request: ModifyFlowCategoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowCategoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowCategoryResponse>(await this.doRPCRequest("ModifyFlowCategory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowCategoryResponse({}));
  }

  async modifyFlowCategory(request: ModifyFlowCategoryRequest): Promise<ModifyFlowCategoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowCategoryWithOptions(request, runtime);
  }

  async modifyFlowForWebWithOptions(request: ModifyFlowForWebRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowForWebResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowForWebResponse>(await this.doRPCRequest("ModifyFlowForWeb", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowForWebResponse({}));
  }

  async modifyFlowForWeb(request: ModifyFlowForWebRequest): Promise<ModifyFlowForWebResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowForWebWithOptions(request, runtime);
  }

  async modifyFlowJobWithOptions(request: ModifyFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowJobResponse>(await this.doRPCRequest("ModifyFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowJobResponse({}));
  }

  async modifyFlowJob(request: ModifyFlowJobRequest): Promise<ModifyFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowJobWithOptions(request, runtime);
  }

  async modifyFlowProjectWithOptions(request: ModifyFlowProjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowProjectResponse>(await this.doRPCRequest("ModifyFlowProject", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowProjectResponse({}));
  }

  async modifyFlowProject(request: ModifyFlowProjectRequest): Promise<ModifyFlowProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowProjectWithOptions(request, runtime);
  }

  async modifyFlowProjectClusterSettingWithOptions(request: ModifyFlowProjectClusterSettingRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowProjectClusterSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowProjectClusterSettingResponse>(await this.doRPCRequest("ModifyFlowProjectClusterSetting", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowProjectClusterSettingResponse({}));
  }

  async modifyFlowProjectClusterSetting(request: ModifyFlowProjectClusterSettingRequest): Promise<ModifyFlowProjectClusterSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowProjectClusterSettingWithOptions(request, runtime);
  }

  async modifyJobWithOptions(request: ModifyJobRequest, runtime: $Util.RuntimeOptions): Promise<ModifyJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyJobResponse>(await this.doRPCRequest("ModifyJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyJobResponse({}));
  }

  async modifyJob(request: ModifyJobRequest): Promise<ModifyJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyJobWithOptions(request, runtime);
  }

  async modifyResourcePoolWithOptions(request: ModifyResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyResourcePoolResponse>(await this.doRPCRequest("ModifyResourcePool", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyResourcePoolResponse({}));
  }

  async modifyResourcePool(request: ModifyResourcePoolRequest): Promise<ModifyResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourcePoolWithOptions(request, runtime);
  }

  async modifyResourcePoolSchedulerTypeWithOptions(request: ModifyResourcePoolSchedulerTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourcePoolSchedulerTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyResourcePoolSchedulerTypeResponse>(await this.doRPCRequest("ModifyResourcePoolSchedulerType", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyResourcePoolSchedulerTypeResponse({}));
  }

  async modifyResourcePoolSchedulerType(request: ModifyResourcePoolSchedulerTypeRequest): Promise<ModifyResourcePoolSchedulerTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourcePoolSchedulerTypeWithOptions(request, runtime);
  }

  async modifyResourceQueueWithOptions(request: ModifyResourceQueueRequest, runtime: $Util.RuntimeOptions): Promise<ModifyResourceQueueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyResourceQueueResponse>(await this.doRPCRequest("ModifyResourceQueue", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyResourceQueueResponse({}));
  }

  async modifyResourceQueue(request: ModifyResourceQueueRequest): Promise<ModifyResourceQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyResourceQueueWithOptions(request, runtime);
  }

  async modifyScalingConfigItemV2WithOptions(request: ModifyScalingConfigItemV2Request, runtime: $Util.RuntimeOptions): Promise<ModifyScalingConfigItemV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingConfigItemV2Response>(await this.doRPCRequest("ModifyScalingConfigItemV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingConfigItemV2Response({}));
  }

  async modifyScalingConfigItemV2(request: ModifyScalingConfigItemV2Request): Promise<ModifyScalingConfigItemV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingConfigItemV2WithOptions(request, runtime);
  }

  async modifyScalingGroupV2WithOptions(request: ModifyScalingGroupV2Request, runtime: $Util.RuntimeOptions): Promise<ModifyScalingGroupV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingGroupV2Response>(await this.doRPCRequest("ModifyScalingGroupV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingGroupV2Response({}));
  }

  async modifyScalingGroupV2(request: ModifyScalingGroupV2Request): Promise<ModifyScalingGroupV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingGroupV2WithOptions(request, runtime);
  }

  async modifyScalingRuleWithOptions(request: ModifyScalingRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingRuleResponse>(await this.doRPCRequest("ModifyScalingRule", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingRuleResponse({}));
  }

  async modifyScalingRule(request: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  async modifyScalingTaskGroupWithOptions(request: ModifyScalingTaskGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScalingTaskGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScalingTaskGroupResponse>(await this.doRPCRequest("ModifyScalingTaskGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScalingTaskGroupResponse({}));
  }

  async modifyScalingTaskGroup(request: ModifyScalingTaskGroupRequest): Promise<ModifyScalingTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScalingTaskGroupWithOptions(request, runtime);
  }

  async queryAlarmHistoryWithOptions(request: QueryAlarmHistoryRequest, runtime: $Util.RuntimeOptions): Promise<QueryAlarmHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAlarmHistoryResponse>(await this.doRPCRequest("QueryAlarmHistory", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAlarmHistoryResponse({}));
  }

  async queryAlarmHistory(request: QueryAlarmHistoryRequest): Promise<QueryAlarmHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAlarmHistoryWithOptions(request, runtime);
  }

  async queryEntityWithOptions(request: QueryEntityRequest, runtime: $Util.RuntimeOptions): Promise<QueryEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEntityResponse>(await this.doRPCRequest("QueryEntity", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEntityResponse({}));
  }

  async queryEntity(request: QueryEntityRequest): Promise<QueryEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEntityWithOptions(request, runtime);
  }

  async queryTableDataWithOptions(request: QueryTableDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryTableDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTableDataResponse>(await this.doRPCRequest("QueryTableData", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTableDataResponse({}));
  }

  async queryTableData(request: QueryTableDataRequest): Promise<QueryTableDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTableDataWithOptions(request, runtime);
  }

  async queryTagWithOptions(request: QueryTagRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTagResponse>(await this.doRPCRequest("QueryTag", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTagResponse({}));
  }

  async queryTag(request: QueryTagRequest): Promise<QueryTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagWithOptions(request, runtime);
  }

  async queryTrendDataWithOptions(request: QueryTrendDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryTrendDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTrendDataResponse>(await this.doRPCRequest("QueryTrendData", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTrendDataResponse({}));
  }

  async queryTrendData(request: QueryTrendDataRequest): Promise<QueryTrendDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTrendDataWithOptions(request, runtime);
  }

  async refreshClusterResourcePoolWithOptions(request: RefreshClusterResourcePoolRequest, runtime: $Util.RuntimeOptions): Promise<RefreshClusterResourcePoolResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshClusterResourcePoolResponse>(await this.doRPCRequest("RefreshClusterResourcePool", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshClusterResourcePoolResponse({}));
  }

  async refreshClusterResourcePool(request: RefreshClusterResourcePoolRequest): Promise<RefreshClusterResourcePoolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshClusterResourcePoolWithOptions(request, runtime);
  }

  async releaseClusterWithOptions(request: ReleaseClusterRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseClusterResponse>(await this.doRPCRequest("ReleaseCluster", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseClusterResponse({}));
  }

  async releaseCluster(request: ReleaseClusterRequest): Promise<ReleaseClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterWithOptions(request, runtime);
  }

  async releaseClusterByTemplateTagForInternalWithOptions(request: ReleaseClusterByTemplateTagForInternalRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterByTemplateTagForInternalResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseClusterByTemplateTagForInternalResponse>(await this.doRPCRequest("ReleaseClusterByTemplateTagForInternal", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseClusterByTemplateTagForInternalResponse({}));
  }

  async releaseClusterByTemplateTagForInternal(request: ReleaseClusterByTemplateTagForInternalRequest): Promise<ReleaseClusterByTemplateTagForInternalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterByTemplateTagForInternalWithOptions(request, runtime);
  }

  async releaseClusterHostGroupWithOptions(request: ReleaseClusterHostGroupRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterHostGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseClusterHostGroupResponse>(await this.doRPCRequest("ReleaseClusterHostGroup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseClusterHostGroupResponse({}));
  }

  async releaseClusterHostGroup(request: ReleaseClusterHostGroupRequest): Promise<ReleaseClusterHostGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterHostGroupWithOptions(request, runtime);
  }

  async removeScalingConfigItemV2WithOptions(request: RemoveScalingConfigItemV2Request, runtime: $Util.RuntimeOptions): Promise<RemoveScalingConfigItemV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveScalingConfigItemV2Response>(await this.doRPCRequest("RemoveScalingConfigItemV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveScalingConfigItemV2Response({}));
  }

  async removeScalingConfigItemV2(request: RemoveScalingConfigItemV2Request): Promise<RemoveScalingConfigItemV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeScalingConfigItemV2WithOptions(request, runtime);
  }

  async rerunFlowWithOptions(request: RerunFlowRequest, runtime: $Util.RuntimeOptions): Promise<RerunFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RerunFlowResponse>(await this.doRPCRequest("RerunFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RerunFlowResponse({}));
  }

  async rerunFlow(request: RerunFlowRequest): Promise<RerunFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunFlowWithOptions(request, runtime);
  }

  async resizeClusterV2WithOptions(request: ResizeClusterV2Request, runtime: $Util.RuntimeOptions): Promise<ResizeClusterV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeClusterV2Response>(await this.doRPCRequest("ResizeClusterV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeClusterV2Response({}));
  }

  async resizeClusterV2(request: ResizeClusterV2Request): Promise<ResizeClusterV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeClusterV2WithOptions(request, runtime);
  }

  async restoreBackupWithOptions(request: RestoreBackupRequest, runtime: $Util.RuntimeOptions): Promise<RestoreBackupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreBackupResponse>(await this.doRPCRequest("RestoreBackup", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreBackupResponse({}));
  }

  async restoreBackup(request: RestoreBackupRequest): Promise<RestoreBackupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreBackupWithOptions(request, runtime);
  }

  async restoreFlowEntitySnapshotWithOptions(request: RestoreFlowEntitySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<RestoreFlowEntitySnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreFlowEntitySnapshotResponse>(await this.doRPCRequest("RestoreFlowEntitySnapshot", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreFlowEntitySnapshotResponse({}));
  }

  async restoreFlowEntitySnapshot(request: RestoreFlowEntitySnapshotRequest): Promise<RestoreFlowEntitySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreFlowEntitySnapshotWithOptions(request, runtime);
  }

  async resumeExecutionPlanSchedulerWithOptions(request: ResumeExecutionPlanSchedulerRequest, runtime: $Util.RuntimeOptions): Promise<ResumeExecutionPlanSchedulerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeExecutionPlanSchedulerResponse>(await this.doRPCRequest("ResumeExecutionPlanScheduler", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeExecutionPlanSchedulerResponse({}));
  }

  async resumeExecutionPlanScheduler(request: ResumeExecutionPlanSchedulerRequest): Promise<ResumeExecutionPlanSchedulerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeExecutionPlanSchedulerWithOptions(request, runtime);
  }

  async resumeFlowWithOptions(request: ResumeFlowRequest, runtime: $Util.RuntimeOptions): Promise<ResumeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeFlowResponse>(await this.doRPCRequest("ResumeFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeFlowResponse({}));
  }

  async resumeFlow(request: ResumeFlowRequest): Promise<ResumeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeFlowWithOptions(request, runtime);
  }

  async retryOperationWithOptions(request: RetryOperationRequest, runtime: $Util.RuntimeOptions): Promise<RetryOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RetryOperationResponse>(await this.doRPCRequest("RetryOperation", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RetryOperationResponse({}));
  }

  async retryOperation(request: RetryOperationRequest): Promise<RetryOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryOperationWithOptions(request, runtime);
  }

  async runClusterServiceActionWithOptions(request: RunClusterServiceActionRequest, runtime: $Util.RuntimeOptions): Promise<RunClusterServiceActionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunClusterServiceActionResponse>(await this.doRPCRequest("RunClusterServiceAction", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RunClusterServiceActionResponse({}));
  }

  async runClusterServiceAction(request: RunClusterServiceActionRequest): Promise<RunClusterServiceActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runClusterServiceActionWithOptions(request, runtime);
  }

  async runExecutionPlanWithOptions(tmpReq: RunExecutionPlanRequest, runtime: $Util.RuntimeOptions): Promise<RunExecutionPlanResponse> {
    Util.validateModel(tmpReq);
    let request = new RunExecutionPlanShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.arguments)) {
      request.argumentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.arguments, "Arguments", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunExecutionPlanResponse>(await this.doRPCRequest("RunExecutionPlan", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RunExecutionPlanResponse({}));
  }

  async runExecutionPlan(request: RunExecutionPlanRequest): Promise<RunExecutionPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runExecutionPlanWithOptions(request, runtime);
  }

  async runScalingActionV2WithOptions(request: RunScalingActionV2Request, runtime: $Util.RuntimeOptions): Promise<RunScalingActionV2Response> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunScalingActionV2Response>(await this.doRPCRequest("RunScalingActionV2", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new RunScalingActionV2Response({}));
  }

  async runScalingActionV2(request: RunScalingActionV2Request): Promise<RunScalingActionV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runScalingActionV2WithOptions(request, runtime);
  }

  async searchLogWithOptions(request: SearchLogRequest, runtime: $Util.RuntimeOptions): Promise<SearchLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchLogResponse>(await this.doRPCRequest("SearchLog", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new SearchLogResponse({}));
  }

  async searchLog(request: SearchLogRequest): Promise<SearchLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchLogWithOptions(request, runtime);
  }

  async startFlowWithOptions(request: StartFlowRequest, runtime: $Util.RuntimeOptions): Promise<StartFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartFlowResponse>(await this.doRPCRequest("StartFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new StartFlowResponse({}));
  }

  async startFlow(request: StartFlowRequest): Promise<StartFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startFlowWithOptions(request, runtime);
  }

  async submitFlowWithOptions(request: SubmitFlowRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitFlowResponse>(await this.doRPCRequest("SubmitFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitFlowResponse({}));
  }

  async submitFlow(request: SubmitFlowRequest): Promise<SubmitFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFlowWithOptions(request, runtime);
  }

  async submitFlowJobWithOptions(request: SubmitFlowJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitFlowJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitFlowJobResponse>(await this.doRPCRequest("SubmitFlowJob", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitFlowJobResponse({}));
  }

  async submitFlowJob(request: SubmitFlowJobRequest): Promise<SubmitFlowJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitFlowJobWithOptions(request, runtime);
  }

  async suspendExecutionPlanSchedulerWithOptions(request: SuspendExecutionPlanSchedulerRequest, runtime: $Util.RuntimeOptions): Promise<SuspendExecutionPlanSchedulerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendExecutionPlanSchedulerResponse>(await this.doRPCRequest("SuspendExecutionPlanScheduler", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendExecutionPlanSchedulerResponse({}));
  }

  async suspendExecutionPlanScheduler(request: SuspendExecutionPlanSchedulerRequest): Promise<SuspendExecutionPlanSchedulerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendExecutionPlanSchedulerWithOptions(request, runtime);
  }

  async suspendFlowWithOptions(request: SuspendFlowRequest, runtime: $Util.RuntimeOptions): Promise<SuspendFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SuspendFlowResponse>(await this.doRPCRequest("SuspendFlow", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new SuspendFlowResponse({}));
  }

  async suspendFlow(request: SuspendFlowRequest): Promise<SuspendFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendFlowWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async tagResourcesSystemTagsWithOptions(request: TagResourcesSystemTagsRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesSystemTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesSystemTagsResponse>(await this.doRPCRequest("TagResourcesSystemTags", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesSystemTagsResponse({}));
  }

  async tagResourcesSystemTags(request: TagResourcesSystemTagsRequest): Promise<TagResourcesSystemTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesSystemTagsWithOptions(request, runtime);
  }

  async uninstallLibrariesWithOptions(request: UninstallLibrariesRequest, runtime: $Util.RuntimeOptions): Promise<UninstallLibrariesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UninstallLibrariesResponse>(await this.doRPCRequest("UninstallLibraries", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UninstallLibrariesResponse({}));
  }

  async uninstallLibraries(request: UninstallLibrariesRequest): Promise<UninstallLibrariesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallLibrariesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async untagResourcesSystemTagsWithOptions(request: UntagResourcesSystemTagsRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesSystemTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesSystemTagsResponse>(await this.doRPCRequest("UntagResourcesSystemTags", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesSystemTagsResponse({}));
  }

  async untagResourcesSystemTags(request: UntagResourcesSystemTagsRequest): Promise<UntagResourcesSystemTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesSystemTagsWithOptions(request, runtime);
  }

  async updateDataSourceWithOptions(request: UpdateDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDataSourceResponse>(await this.doRPCRequest("UpdateDataSource", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDataSourceResponse({}));
  }

  async updateDataSource(request: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  async updateLibraryInstallTaskStatusWithOptions(request: UpdateLibraryInstallTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLibraryInstallTaskStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateLibraryInstallTaskStatusResponse>(await this.doRPCRequest("UpdateLibraryInstallTaskStatus", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateLibraryInstallTaskStatusResponse({}));
  }

  async updateLibraryInstallTaskStatus(request: UpdateLibraryInstallTaskStatusRequest): Promise<UpdateLibraryInstallTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLibraryInstallTaskStatusWithOptions(request, runtime);
  }

  async updateTagWithOptions(request: UpdateTagRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTagResponse>(await this.doRPCRequest("UpdateTag", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTagResponse({}));
  }

  async updateTag(request: UpdateTagRequest): Promise<UpdateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTagWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserResponse>(await this.doRPCRequest("UpdateUser", "2016-04-08", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
