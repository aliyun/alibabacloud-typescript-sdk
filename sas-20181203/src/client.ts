// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddVpcHoneyPotRequest extends $tea.Model {
  vpcId?: string;
  vpcSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcSwitchId: 'VpcSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVpcHoneyPotResponseBody extends $tea.Model {
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

export class AddVpcHoneyPotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddVpcHoneyPotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddVpcHoneyPotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckQuaraFileIdRequest extends $tea.Model {
  quaraFileIds?: string[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      quaraFileIds: 'QuaraFileIds',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quaraFileIds: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckQuaraFileIdResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckQuaraFileIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckQuaraFileIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckQuaraFileIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSecurityEventIdRequest extends $tea.Model {
  securityEventIds?: string[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventIds: 'SecurityEventIds',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSecurityEventIdResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSecurityEventIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckSecurityEventIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckSecurityEventIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntiBruteForceRuleRequest extends $tea.Model {
  defaultRule?: boolean;
  failCount?: number;
  forbiddenTime?: number;
  name?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  span?: number;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'DefaultRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      name: 'Name',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      span: 'Span',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      name: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      span: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntiBruteForceRuleResponseBody extends $tea.Model {
  createAntiBruteForceRule?: CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createAntiBruteForceRule: 'CreateAntiBruteForceRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAntiBruteForceRule: CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntiBruteForceRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAntiBruteForceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAntiBruteForceRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetRequest extends $tea.Model {
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  os?: string;
  osName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      os: 'Os',
      osName: 'OsName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      os: 'string',
      osName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetResponseBody extends $tea.Model {
  requestId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAssetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAssetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyRequest extends $tea.Model {
  name?: string;
  policy?: { [key: string]: any };
  policyRegionId?: string;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policy: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyRegionId: 'string',
      policyVersion: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyShrinkRequest extends $tea.Model {
  name?: string;
  policyShrink?: string;
  policyRegionId?: string;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyShrink: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyShrink: 'string',
      policyRegionId: 'string',
      policyVersion: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyResponseBody extends $tea.Model {
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

export class CreateBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAssetGroupRequest extends $tea.Model {
  groupId?: number;
  groupName?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAssetGroupResponseBody extends $tea.Model {
  groupId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateAssetGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrUpdateAssetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrUpdateAssetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobRequest extends $tea.Model {
  includes?: string;
  snapshotHash?: string;
  snapshotId?: string;
  snapshotVersion?: string;
  sourceType?: string;
  target?: string;
  uuid?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      includes: 'Includes',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      snapshotVersion: 'SnapshotVersion',
      sourceType: 'SourceType',
      target: 'Target',
      uuid: 'Uuid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includes: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      snapshotVersion: 'string',
      sourceType: 'string',
      target: 'string',
      uuid: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRestoreJobResponseBody extends $tea.Model {
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

export class CreateRestoreJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRestoreJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRestoreJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSasOrderRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  containerImageScan?: string;
  instanceCount?: string;
  period?: number;
  periodUnit?: string;
  sasAntiRansomware?: string;
  sasProductService?: string;
  sasSc?: string;
  sasSlsStorage?: string;
  sasWebguardBoolean?: string;
  sasWebguardOrderNum?: string;
  spec?: string;
  vcore?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      containerImageScan: 'ContainerImageScan',
      instanceCount: 'InstanceCount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      sasAntiRansomware: 'SasAntiRansomware',
      sasProductService: 'SasProductService',
      sasSc: 'SasSc',
      sasSlsStorage: 'SasSlsStorage',
      sasWebguardBoolean: 'SasWebguardBoolean',
      sasWebguardOrderNum: 'SasWebguardOrderNum',
      spec: 'Spec',
      vcore: 'Vcore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      containerImageScan: 'string',
      instanceCount: 'string',
      period: 'number',
      periodUnit: 'string',
      sasAntiRansomware: 'string',
      sasProductService: 'string',
      sasSc: 'string',
      sasSlsStorage: 'string',
      sasWebguardBoolean: 'string',
      sasWebguardOrderNum: 'string',
      spec: 'string',
      vcore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSasOrderResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSasOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSasOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSasOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
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

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarSecurityEventsQueryTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  securityEventId?: number;
  similarEventScenarioCode?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      similarEventScenarioCode: 'SimilarEventScenarioCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      securityEventId: 'number',
      similarEventScenarioCode: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarSecurityEventsQueryTaskResponseBody extends $tea.Model {
  createSimilarSecurityEventsQueryTaskResponse?: CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createSimilarSecurityEventsQueryTaskResponse: 'CreateSimilarSecurityEventsQueryTaskResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSimilarSecurityEventsQueryTaskResponse: CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarSecurityEventsQueryTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSimilarSecurityEventsQueryTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSimilarSecurityEventsQueryTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUniBackupPolicyRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  databaseAddByUser?: string;
  databaseType?: string;
  fullPlan?: { [key: string]: any };
  incPlan?: { [key: string]: any };
  instanceId?: string;
  policyName?: string;
  resourceOwnerId?: number;
  retention?: number;
  sourceIp?: string;
  speedLimiter?: number;
  uniRegionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      databaseAddByUser: 'DatabaseAddByUser',
      databaseType: 'DatabaseType',
      fullPlan: 'FullPlan',
      incPlan: 'IncPlan',
      instanceId: 'InstanceId',
      policyName: 'PolicyName',
      resourceOwnerId: 'ResourceOwnerId',
      retention: 'Retention',
      sourceIp: 'SourceIp',
      speedLimiter: 'SpeedLimiter',
      uniRegionId: 'UniRegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      databaseAddByUser: 'string',
      databaseType: 'string',
      fullPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      incPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      policyName: 'string',
      resourceOwnerId: 'number',
      retention: 'number',
      sourceIp: 'string',
      speedLimiter: 'number',
      uniRegionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUniBackupPolicyShrinkRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  databaseAddByUser?: string;
  databaseType?: string;
  fullPlanShrink?: string;
  incPlanShrink?: string;
  instanceId?: string;
  policyName?: string;
  resourceOwnerId?: number;
  retention?: number;
  sourceIp?: string;
  speedLimiter?: number;
  uniRegionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      databaseAddByUser: 'DatabaseAddByUser',
      databaseType: 'DatabaseType',
      fullPlanShrink: 'FullPlan',
      incPlanShrink: 'IncPlan',
      instanceId: 'InstanceId',
      policyName: 'PolicyName',
      resourceOwnerId: 'ResourceOwnerId',
      retention: 'Retention',
      sourceIp: 'SourceIp',
      speedLimiter: 'SpeedLimiter',
      uniRegionId: 'UniRegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      databaseAddByUser: 'string',
      databaseType: 'string',
      fullPlanShrink: 'string',
      incPlanShrink: 'string',
      instanceId: 'string',
      policyName: 'string',
      resourceOwnerId: 'number',
      retention: 'number',
      sourceIp: 'string',
      speedLimiter: 'number',
      uniRegionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUniBackupPolicyResponseBody extends $tea.Model {
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

export class CreateUniBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUniBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUniBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUniRestorePlanRequest extends $tea.Model {
  database?: string;
  instanceUuid?: string;
  policyId?: number;
  resetScn?: string;
  resetTime?: string;
  resourceOwnerId?: number;
  restoreInfo?: string;
  sourceIp?: string;
  timePoint?: number;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      instanceUuid: 'InstanceUuid',
      policyId: 'PolicyId',
      resetScn: 'ResetScn',
      resetTime: 'ResetTime',
      resourceOwnerId: 'ResourceOwnerId',
      restoreInfo: 'RestoreInfo',
      sourceIp: 'SourceIp',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      instanceUuid: 'string',
      policyId: 'number',
      resetScn: 'string',
      resetTime: 'string',
      resourceOwnerId: 'number',
      restoreInfo: 'string',
      sourceIp: 'string',
      timePoint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUniRestorePlanResponseBody extends $tea.Model {
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

export class CreateUniRestorePlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateUniRestorePlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateUniRestorePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssetRequest extends $tea.Model {
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssetResponseBody extends $tea.Model {
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

export class DeleteAssetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAssetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAssetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPolicyRequest extends $tea.Model {
  id?: number;
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      policyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPolicyResponseBody extends $tea.Model {
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

export class DeleteBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPolicyMachineRequest extends $tea.Model {
  policyId?: number;
  policyVersion?: string;
  uuid?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyVersion: 'string',
      uuid: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBackupPolicyMachineResponseBody extends $tea.Model {
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

export class DeleteBackupPolicyMachineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBackupPolicyMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBackupPolicyMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  groupId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $tea.Model {
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

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoginBaseConfigRequest extends $tea.Model {
  config?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoginBaseConfigResponseBody extends $tea.Model {
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

export class DeleteLoginBaseConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLoginBaseConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLoginBaseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStrategyRequest extends $tea.Model {
  id?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStrategyResponseBody extends $tea.Model {
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

export class DeleteStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagWithUuidRequest extends $tea.Model {
  tagName?: string;
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      uuidList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagWithUuidResponseBody extends $tea.Model {
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

export class DeleteTagWithUuidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTagWithUuidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTagWithUuidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUniBackupPolicyRequest extends $tea.Model {
  policyId?: number;
  policyIds?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyIds: 'PolicyIds',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyIds: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUniBackupPolicyResponseBody extends $tea.Model {
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

export class DeleteUniBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUniBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUniBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcHoneyPotRequest extends $tea.Model {
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcHoneyPotResponseBody extends $tea.Model {
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

export class DeleteVpcHoneyPotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpcHoneyPotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcHoneyPotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccesskeyLeakListRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  query?: string;
  startTs?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      query: 'Query',
      startTs: 'StartTs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      query: 'string',
      startTs: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccesskeyLeakListResponseBody extends $tea.Model {
  accessKeyLeakList?: DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList[];
  akLeakCount?: number;
  currentPage?: number;
  gmtLast?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyLeakList: 'AccessKeyLeakList',
      akLeakCount: 'AkLeakCount',
      currentPage: 'CurrentPage',
      gmtLast: 'GmtLast',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyLeakList: { 'type': 'array', 'itemType': DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList },
      akLeakCount: 'number',
      currentPage: 'number',
      gmtLast: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccesskeyLeakListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccesskeyLeakListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccesskeyLeakListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesRequest extends $tea.Model {
  currentPage?: number;
  imageDigest?: string;
  imageLayer?: string;
  imageTag?: string;
  lang?: string;
  maliciousMd5?: string;
  pageSize?: string;
  repoId?: string;
  repoInstanceId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      lang: 'Lang',
      maliciousMd5: 'MaliciousMd5',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      lang: 'string',
      maliciousMd5: 'string',
      pageSize: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponseBody extends $tea.Model {
  affectedMaliciousFileImagesResponse?: DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse[];
  pageInfo?: DescribeAffectedMaliciousFileImagesResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      affectedMaliciousFileImagesResponse: 'AffectedMaliciousFileImagesResponse',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedMaliciousFileImagesResponse: { 'type': 'array', 'itemType': DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse },
      pageInfo: DescribeAffectedMaliciousFileImagesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAffectedMaliciousFileImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAffectedMaliciousFileImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailRequest extends $tea.Model {
  alarmUniqueInfo?: string;
  from?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      from: 'From',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      from: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBody extends $tea.Model {
  data?: DescribeAlarmEventDetailResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAlarmEventDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlarmEventDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlarmEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListRequest extends $tea.Model {
  alarmEventName?: string;
  alarmEventType?: string;
  currentPage?: number;
  dealed?: string;
  from?: string;
  groupId?: string;
  lang?: string;
  levels?: string;
  operateErrorCodeList?: string[];
  pageSize?: string;
  remark?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmEventType: 'AlarmEventType',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      from: 'From',
      groupId: 'GroupId',
      lang: 'Lang',
      levels: 'Levels',
      operateErrorCodeList: 'OperateErrorCodeList',
      pageSize: 'PageSize',
      remark: 'Remark',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmEventType: 'string',
      currentPage: 'number',
      dealed: 'string',
      from: 'string',
      groupId: 'string',
      lang: 'string',
      levels: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'string',
      remark: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponseBody extends $tea.Model {
  pageInfo?: DescribeAlarmEventListResponseBodyPageInfo;
  requestId?: string;
  suspEvents?: DescribeAlarmEventListResponseBodySuspEvents[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      suspEvents: 'SuspEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAlarmEventListResponseBodyPageInfo,
      requestId: 'string',
      suspEvents: { 'type': 'array', 'itemType': DescribeAlarmEventListResponseBodySuspEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlarmEventListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlarmEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoRequest extends $tea.Model {
  eventName?: string;
  lang?: string;
  sourceIp?: string;
  uniqueInfo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      lang: 'string',
      sourceIp: 'string',
      uniqueInfo: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponseBody extends $tea.Model {
  requestId?: string;
  stackInfo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInfo: 'StackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlarmEventStackInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlarmEventStackInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEntityResponseBody extends $tea.Model {
  entityList?: DescribeAllEntityResponseBodyEntityList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: { 'type': 'array', 'itemType': DescribeAllEntityResponseBodyEntityList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllEntityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllEntityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllGroupsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllGroupsResponseBody extends $tea.Model {
  count?: number;
  groups?: DescribeAllGroupsResponseBodyGroups[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groups: { 'type': 'array', 'itemType': DescribeAllGroupsResponseBodyGroups },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRegionsStatisticsRequest extends $tea.Model {
  action1?: number;
  allRegion?: boolean;
  currentPage?: number;
  dealed?: string;
  endTime?: string;
  flow?: number;
  from?: string;
  groupId?: number;
  pageSize?: number;
  remark?: string;
  ruleType?: number;
  saleId?: string;
  secureToken?: string;
  sourceIp?: string;
  startTime?: string;
  status?: number;
  statusList?: string;
  tag?: string;
  type?: string;
  uuid?: string;
  webGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      action1: 'Action1',
      allRegion: 'AllRegion',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      endTime: 'EndTime',
      flow: 'Flow',
      from: 'From',
      groupId: 'GroupId',
      pageSize: 'PageSize',
      remark: 'Remark',
      ruleType: 'RuleType',
      saleId: 'SaleId',
      secureToken: 'SecureToken',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
      status: 'Status',
      statusList: 'StatusList',
      tag: 'Tag',
      type: 'Type',
      uuid: 'Uuid',
      webGroupId: 'WebGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action1: 'number',
      allRegion: 'boolean',
      currentPage: 'number',
      dealed: 'string',
      endTime: 'string',
      flow: 'number',
      from: 'string',
      groupId: 'number',
      pageSize: 'number',
      remark: 'string',
      ruleType: 'number',
      saleId: 'string',
      secureToken: 'string',
      sourceIp: 'string',
      startTime: 'string',
      status: 'number',
      statusList: 'string',
      tag: 'string',
      type: 'string',
      uuid: 'string',
      webGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRegionsStatisticsResponseBody extends $tea.Model {
  data?: DescribeAllRegionsStatisticsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAllRegionsStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRegionsStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllRegionsStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllRegionsStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesRequest extends $tea.Model {
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBody extends $tea.Model {
  pageInfo?: DescribeAntiBruteForceRulesResponseBodyPageInfo;
  requestId?: string;
  rules?: DescribeAntiBruteForceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAntiBruteForceRulesResponseBodyPageInfo,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeAntiBruteForceRulesResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAntiBruteForceRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAntiBruteForceRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidResponseBody extends $tea.Model {
  assetDetail?: DescribeAssetDetailByUuidResponseBodyAssetDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetDetail: 'AssetDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDetail: DescribeAssetDetailByUuidResponseBodyAssetDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssetDetailByUuidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssetDetailByUuidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidsRequest extends $tea.Model {
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidsResponseBody extends $tea.Model {
  assetList?: DescribeAssetDetailByUuidsResponseBodyAssetList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeAssetDetailByUuidsResponseBodyAssetList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssetDetailByUuidsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssetDetailByUuidsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetSummaryResponseBody extends $tea.Model {
  assetsSummary?: DescribeAssetSummaryResponseBodyAssetsSummary;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetsSummary: 'AssetsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsSummary: DescribeAssetSummaryResponseBodyAssetsSummary,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssetSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssetSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAnalysisDataRequest extends $tea.Model {
  base64?: string;
  currentPage?: number;
  data?: string;
  endTime?: number;
  lang?: string;
  pageSize?: number;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      currentPage: 'CurrentPage',
      data: 'Data',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'string',
      currentPage: 'number',
      data: 'string',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAnalysisDataResponseBody extends $tea.Model {
  data?: string;
  page?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackAnalysisDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAttackAnalysisDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAttackAnalysisDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoDelConfigResponseBody extends $tea.Model {
  days?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoDelConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoDelConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoDelConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsRequest extends $tea.Model {
  supportRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      supportRegionId: 'SupportRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBody extends $tea.Model {
  clients?: DescribeBackupClientsResponseBodyClients[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClients },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupClientsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupClientsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  policyId?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyId: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponseBody extends $tea.Model {
  backupDirs?: DescribeBackupDirsResponseBodyBackupDirs[];
  pageInfo?: DescribeBackupDirsResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDirs: 'BackupDirs',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDirs: { 'type': 'array', 'itemType': DescribeBackupDirsResponseBodyBackupDirs },
      pageInfo: DescribeBackupDirsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupDirsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupDirsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesRequest extends $tea.Model {
  currentPage?: string;
  pageSize?: string;
  path?: string;
  snapshotHash?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      path: 'Path',
      snapshotHash: 'SnapshotHash',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      pageSize: 'string',
      path: 'string',
      snapshotHash: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBody extends $tea.Model {
  backupFiles?: DescribeBackupFilesResponseBodyBackupFiles[];
  pageInfo?: DescribeBackupFilesResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupFiles: 'BackupFiles',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFiles: { 'type': 'array', 'itemType': DescribeBackupFilesResponseBodyBackupFiles },
      pageInfo: DescribeBackupFilesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusRequest extends $tea.Model {
  policyId?: number;
  policyVersion?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyVersion: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBody extends $tea.Model {
  backupMachineStatus?: DescribeBackupMachineStatusResponseBodyBackupMachineStatus;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupMachineStatus: 'BackupMachineStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMachineStatus: DescribeBackupMachineStatusResponseBodyBackupMachineStatus,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupMachineStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupMachineStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesRequest extends $tea.Model {
  currentPage?: number;
  machineRemark?: string;
  name?: string;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      machineRemark: 'MachineRemark',
      name: 'Name',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      machineRemark: 'string',
      name: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBody extends $tea.Model {
  pageInfo?: DescribeBackupPoliciesResponseBodyPageInfo;
  policies?: DescribeBackupPoliciesResponseBodyPolicies[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeBackupPoliciesResponseBodyPageInfo,
      policies: { 'type': 'array', 'itemType': DescribeBackupPoliciesResponseBodyPolicies },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  backupPolicyDetail?: DescribeBackupPolicyResponseBodyBackupPolicyDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDetail: 'BackupPolicyDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDetail: DescribeBackupPolicyResponseBodyBackupPolicyDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRestoreCountResponseBody extends $tea.Model {
  backupRestoreCount?: DescribeBackupRestoreCountResponseBodyBackupRestoreCount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRestoreCount: 'BackupRestoreCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRestoreCount: DescribeBackupRestoreCountResponseBodyBackupRestoreCount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRestoreCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBackupRestoreCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBackupRestoreCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBruteForceSummaryRequest extends $tea.Model {
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBruteForceSummaryResponseBody extends $tea.Model {
  bruteForceSummary?: DescribeBruteForceSummaryResponseBodyBruteForceSummary;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bruteForceSummary: 'BruteForceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bruteForceSummary: DescribeBruteForceSummaryResponseBodyBruteForceSummary,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBruteForceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBruteForceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBruteForceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckEcsWarningsRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckEcsWarningsResponseBody extends $tea.Model {
  canTry?: string;
  requestId?: string;
  sasVersion?: string;
  weakPasswordCount?: string;
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      requestId: 'RequestId',
      sasVersion: 'SasVersion',
      weakPasswordCount: 'WeakPasswordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'string',
      requestId: 'string',
      sasVersion: 'string',
      weakPasswordCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckEcsWarningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCheckEcsWarningsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCheckEcsWarningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailRequest extends $tea.Model {
  checkWarningId?: number;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      checkWarningId: 'CheckWarningId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkWarningId: 'number',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailResponseBody extends $tea.Model {
  advice?: string;
  checkId?: number;
  description?: string;
  item?: string;
  level?: string;
  prompt?: string;
  requestId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      checkId: 'CheckId',
      description: 'Description',
      item: 'Item',
      level: 'Level',
      prompt: 'Prompt',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      checkId: 'number',
      description: 'string',
      item: 'string',
      level: 'string',
      prompt: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCheckWarningDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCheckWarningDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  riskName?: string;
  riskStatus?: number;
  sourceIp?: string;
  status?: string;
  strategyId?: number;
  typeName?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskName: 'RiskName',
      riskStatus: 'RiskStatus',
      sourceIp: 'SourceIp',
      status: 'Status',
      strategyId: 'StrategyId',
      typeName: 'TypeName',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskName: 'string',
      riskStatus: 'number',
      sourceIp: 'string',
      status: 'string',
      strategyId: 'number',
      typeName: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryResponseBody extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  warningSummarys?: DescribeCheckWarningSummaryResponseBodyWarningSummarys[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      warningSummarys: 'WarningSummarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      warningSummarys: { 'type': 'array', 'itemType': DescribeCheckWarningSummaryResponseBodyWarningSummarys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCheckWarningSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCheckWarningSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningsRequest extends $tea.Model {
  checkId?: number;
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  riskId?: number;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskId: 'RiskId',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskId: 'number',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningsResponseBody extends $tea.Model {
  checkWarnings?: DescribeCheckWarningsResponseBodyCheckWarnings[];
  count?: number;
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkWarnings: 'CheckWarnings',
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkWarnings: { 'type': 'array', 'itemType': DescribeCheckWarningsResponseBodyCheckWarnings },
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCheckWarningsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCheckWarningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesRequest extends $tea.Model {
  criteria?: string;
  currentPage?: number;
  importance?: number;
  logicalExp?: string;
  machineTypes?: string;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      importance: 'Importance',
      logicalExp: 'LogicalExp',
      machineTypes: 'MachineTypes',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      importance: 'number',
      logicalExp: 'string',
      machineTypes: 'string',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBody extends $tea.Model {
  instances?: DescribeCloudCenterInstancesResponseBodyInstances[];
  pageInfo?: DescribeCloudCenterInstancesResponseBodyPageInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeCloudCenterInstancesResponseBodyInstances },
      pageInfo: DescribeCloudCenterInstancesResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCloudCenterInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCloudCenterInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudProductFieldStatisticsResponseBody extends $tea.Model {
  groupedFields?: DescribeCloudProductFieldStatisticsResponseBodyGroupedFields;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedFields: 'GroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedFields: DescribeCloudProductFieldStatisticsResponseBodyGroupedFields,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudProductFieldStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCloudProductFieldStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCloudProductFieldStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConcernNecessityRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConcernNecessityResponseBody extends $tea.Model {
  concernNecessity?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      concernNecessity: 'ConcernNecessity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concernNecessity: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConcernNecessityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConcernNecessityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConcernNecessityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerStatisticsRequest extends $tea.Model {
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerStatisticsResponseBody extends $tea.Model {
  data?: DescribeContainerStatisticsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeContainerStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaRequest extends $tea.Model {
  machineTypes?: string;
  supportAutoTag?: boolean;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      supportAutoTag: 'SupportAutoTag',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      supportAutoTag: 'boolean',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaResponseBody extends $tea.Model {
  criteriaList?: DescribeCriteriaResponseBodyCriteriaList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      criteriaList: 'CriteriaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaList: { 'type': 'array', 'itemType': DescribeCriteriaResponseBodyCriteriaList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCriteriaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCriteriaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogMessagesRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogMessagesResponseBody extends $tea.Model {
  dialogList?: DescribeDialogMessagesResponseBodyDialogList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dialogList: 'DialogList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogList: { 'type': 'array', 'itemType': DescribeDialogMessagesResponseBodyDialogList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDialogMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDialogMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  ruleActionName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      ruleActionName: 'RuleActionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      ruleActionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponseBody extends $tea.Model {
  actionList?: DescribeDingTalkResponseBodyActionList[];
  pageInfo?: DescribeDingTalkResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': DescribeDingTalkResponseBodyActionList },
      pageInfo: DescribeDingTalkResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDingTalkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDingTalkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCountRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCountResponseBody extends $tea.Model {
  requestId?: string;
  rootDomainsCount?: number;
  subDomainsCount?: number;
  totalDomainsCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rootDomainsCount: 'RootDomainsCount',
      subDomainsCount: 'SubDomainsCount',
      totalDomainsCount: 'TotalDomainsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rootDomainsCount: 'number',
      subDomainsCount: 'number',
      totalDomainsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailRequest extends $tea.Model {
  domainName?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBody extends $tea.Model {
  alarmCount?: number;
  domain?: string;
  domainDetailItems?: DescribeDomainDetailResponseBodyDomainDetailItems[];
  requestId?: string;
  rootDomain?: string;
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      domain: 'Domain',
      domainDetailItems: 'DomainDetailItems',
      requestId: 'RequestId',
      rootDomain: 'RootDomain',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      domain: 'string',
      domainDetailItems: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyDomainDetailItems },
      requestId: 'string',
      rootDomain: 'string',
      vulCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListRequest extends $tea.Model {
  currentPage?: number;
  domainType?: string;
  fuzzyDomain?: string;
  pageSize?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainType: 'DomainType',
      fuzzyDomain: 'FuzzyDomain',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domainType: 'string',
      fuzzyDomain: 'string',
      pageSize: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBody extends $tea.Model {
  domainListResponseList?: DescribeDomainListResponseBodyDomainListResponseList[];
  pageInfo?: DescribeDomainListResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainListResponseList: 'DomainListResponseList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainListResponseList: { 'type': 'array', 'itemType': DescribeDomainListResponseBodyDomainListResponseList },
      pageInfo: DescribeDomainListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  riskStatus?: string;
  scanType?: string;
  vulName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskStatus: 'RiskStatus',
      scanType: 'ScanType',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskStatus: 'string',
      scanType: 'string',
      vulName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemResponseBody extends $tea.Model {
  currentPage?: number;
  groupedVulItems?: DescribeEmgVulItemResponseBodyGroupedVulItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeEmgVulItemResponseBodyGroupedVulItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEmgVulItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEmgVulItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBody extends $tea.Model {
  excludePaths?: DescribeExcludeSystemPathResponseBodyExcludePaths[];
  pageInfo?: DescribeExcludeSystemPathResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      excludePaths: 'ExcludePaths',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludePaths: { 'type': 'array', 'itemType': DescribeExcludeSystemPathResponseBodyExcludePaths },
      pageInfo: DescribeExcludeSystemPathResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExcludeSystemPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExcludeSystemPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportInfoRequest extends $tea.Model {
  exportId?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportInfoResponseBody extends $tea.Model {
  currentCount?: number;
  exportStatus?: string;
  fileName?: string;
  id?: number;
  link?: string;
  message?: string;
  progress?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      id: 'Id',
      link: 'Link',
      message: 'Message',
      progress: 'Progress',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      exportStatus: 'string',
      fileName: 'string',
      id: 'number',
      link: 'string',
      message: 'string',
      progress: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExportInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExportInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceCriteriaRequest extends $tea.Model {
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceCriteriaResponseBody extends $tea.Model {
  criteriaList?: DescribeExposedInstanceCriteriaResponseBodyCriteriaList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      criteriaList: 'CriteriaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaList: { 'type': 'array', 'itemType': DescribeExposedInstanceCriteriaResponseBodyCriteriaList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceCriteriaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposedInstanceCriteriaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposedInstanceCriteriaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailRequest extends $tea.Model {
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBody extends $tea.Model {
  exposedChains?: DescribeExposedInstanceDetailResponseBodyExposedChains[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedChains: 'ExposedChains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedChains: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChains },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposedInstanceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposedInstanceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListRequest extends $tea.Model {
  currentPage?: number;
  exposureComponent?: string;
  exposureIp?: string;
  exposurePort?: string;
  groupId?: number;
  healthStatus?: boolean;
  instanceId?: string;
  instanceName?: string;
  pageSize?: number;
  vulStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      exposureComponent: 'ExposureComponent',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      groupId: 'GroupId',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageSize: 'PageSize',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      exposureComponent: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      groupId: 'number',
      healthStatus: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      pageSize: 'number',
      vulStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBody extends $tea.Model {
  exposedInstances?: DescribeExposedInstanceListResponseBodyExposedInstances[];
  pageInfo?: DescribeExposedInstanceListResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedInstances: 'ExposedInstances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedInstances: { 'type': 'array', 'itemType': DescribeExposedInstanceListResponseBodyExposedInstances },
      pageInfo: DescribeExposedInstanceListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposedInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposedInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedRiskNumResponseBody extends $tea.Model {
  exposedInstanceCount?: number;
  requestId?: string;
  riskExposedInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      exposedInstanceCount: 'ExposedInstanceCount',
      requestId: 'RequestId',
      riskExposedInstanceCount: 'RiskExposedInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedInstanceCount: 'number',
      requestId: 'string',
      riskExposedInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedRiskNumResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposedRiskNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposedRiskNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsResponseBody extends $tea.Model {
  exposedAsapVulCount?: number;
  exposedComponentCount?: number;
  exposedInstanceCount?: number;
  exposedIpCount?: number;
  exposedLaterVulCount?: number;
  exposedNntfVulCount?: number;
  exposedPortCount?: number;
  exposedWeekPasswordMachineCount?: number;
  gatewayAssetCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedAsapVulCount: 'ExposedAsapVulCount',
      exposedComponentCount: 'ExposedComponentCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      exposedIpCount: 'ExposedIpCount',
      exposedLaterVulCount: 'ExposedLaterVulCount',
      exposedNntfVulCount: 'ExposedNntfVulCount',
      exposedPortCount: 'ExposedPortCount',
      exposedWeekPasswordMachineCount: 'ExposedWeekPasswordMachineCount',
      gatewayAssetCount: 'GatewayAssetCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedAsapVulCount: 'number',
      exposedComponentCount: 'number',
      exposedInstanceCount: 'number',
      exposedIpCount: 'number',
      exposedLaterVulCount: 'number',
      exposedNntfVulCount: 'number',
      exposedPortCount: 'number',
      exposedWeekPasswordMachineCount: 'number',
      gatewayAssetCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposedStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposedStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  statisticsType?: string;
  statisticsTypeGatewayType?: string;
  statisticsTypeInstanceValue?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      statisticsType: 'StatisticsType',
      statisticsTypeGatewayType: 'StatisticsTypeGatewayType',
      statisticsTypeInstanceValue: 'StatisticsTypeInstanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      statisticsType: 'string',
      statisticsTypeGatewayType: 'string',
      statisticsTypeInstanceValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBody extends $tea.Model {
  pageInfo?: DescribeExposedStatisticsDetailResponseBodyPageInfo;
  requestId?: string;
  statisticsDetails?: DescribeExposedStatisticsDetailResponseBodyStatisticsDetails[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      statisticsDetails: 'StatisticsDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeExposedStatisticsDetailResponseBodyPageInfo,
      requestId: 'string',
      statisticsDetails: { 'type': 'array', 'itemType': DescribeExposedStatisticsDetailResponseBodyStatisticsDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExposedStatisticsDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExposedStatisticsDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsRequest extends $tea.Model {
  machineTypes?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsResponseBody extends $tea.Model {
  groupedFields?: DescribeFieldStatisticsResponseBodyGroupedFields;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedFields: 'GroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedFields: DescribeFieldStatisticsResponseBodyGroupedFields,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFieldStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFieldStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListRequest extends $tea.Model {
  info?: string;
  operateType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      operateType: 'OperateType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      operateType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBody extends $tea.Model {
  frontPatchList?: DescribeFrontVulPatchListResponseBodyFrontPatchList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      frontPatchList: 'FrontPatchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontPatchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFrontVulPatchListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFrontVulPatchListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineRequest extends $tea.Model {
  anomalyId?: string;
  anomalyUuid?: string;
  direction?: string;
  lang?: string;
  namespace?: string;
  pathLength?: number;
  vertexId?: string;
  static names(): { [key: string]: string } {
    return {
      anomalyId: 'AnomalyId',
      anomalyUuid: 'AnomalyUuid',
      direction: 'Direction',
      lang: 'Lang',
      namespace: 'Namespace',
      pathLength: 'PathLength',
      vertexId: 'VertexId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anomalyId: 'string',
      anomalyUuid: 'string',
      direction: 'string',
      lang: 'string',
      namespace: 'string',
      pathLength: 'number',
      vertexId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBody extends $tea.Model {
  data?: DescribeGraph4InvestigationOnlineResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeGraph4InvestigationOnlineResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGraph4InvestigationOnlineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGraph4InvestigationOnlineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesRequest extends $tea.Model {
  criteria?: string;
  currentPage?: number;
  fieldValue?: string;
  groupField?: string;
  logicalExp?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      fieldValue: 'FieldValue',
      groupField: 'GroupField',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      fieldValue: 'string',
      groupField: 'string',
      logicalExp: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBody extends $tea.Model {
  groupedContainerInstanceList?: DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList[];
  pageInfo?: DescribeGroupedContainerInstancesResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedContainerInstanceList: 'GroupedContainerInstanceList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedContainerInstanceList: { 'type': 'array', 'itemType': DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList },
      pageInfo: DescribeGroupedContainerInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupedContainerInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupedContainerInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesRequest extends $tea.Model {
  currentPage?: number;
  fieldValue?: string;
  groupField?: string;
  lang?: string;
  machineTypes?: string;
  noPage?: boolean;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fieldValue: 'FieldValue',
      groupField: 'GroupField',
      lang: 'Lang',
      machineTypes: 'MachineTypes',
      noPage: 'NoPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fieldValue: 'string',
      groupField: 'string',
      lang: 'string',
      machineTypes: 'string',
      noPage: 'boolean',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBody extends $tea.Model {
  instances?: DescribeGroupedInstancesResponseBodyInstances[];
  pageInfo?: DescribeGroupedInstancesResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeGroupedInstancesResponseBodyInstances },
      pageInfo: DescribeGroupedInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupedInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupedInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesRequest extends $tea.Model {
  currentPage?: number;
  fuzzyMaliciousName?: string;
  imageDigest?: string;
  imageLayer?: string;
  imageTag?: string;
  lang?: string;
  levels?: string;
  pageSize?: string;
  repoId?: string;
  repoInstanceId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fuzzyMaliciousName: 'FuzzyMaliciousName',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      lang: 'Lang',
      levels: 'Levels',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fuzzyMaliciousName: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      lang: 'string',
      levels: 'string',
      pageSize: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBody extends $tea.Model {
  groupedMaliciousFileResponse?: DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse[];
  pageInfo?: DescribeGroupedMaliciousFilesResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedMaliciousFileResponse: 'GroupedMaliciousFileResponse',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedMaliciousFileResponse: { 'type': 'array', 'itemType': DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse },
      pageInfo: DescribeGroupedMaliciousFilesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupedMaliciousFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupedMaliciousFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsRequest extends $tea.Model {
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsResponseBody extends $tea.Model {
  count?: number;
  groupedFileds?: DescribeGroupedTagsResponseBodyGroupedFileds[];
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groupedFileds: 'GroupedFileds',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groupedFileds: { 'type': 'array', 'itemType': DescribeGroupedTagsResponseBodyGroupedFileds },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupedTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupedTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulRequest extends $tea.Model {
  aliasName?: string;
  currentPage?: number;
  dealed?: string;
  groupId?: string;
  lang?: string;
  necessity?: string;
  pageSize?: number;
  searchTags?: string;
  type?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      groupId: 'GroupId',
      lang: 'Lang',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      searchTags: 'SearchTags',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      dealed: 'string',
      groupId: 'string',
      lang: 'string',
      necessity: 'string',
      pageSize: 'number',
      searchTags: 'string',
      type: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBody extends $tea.Model {
  currentPage?: number;
  groupedVulItems?: DescribeGroupedVulResponseBodyGroupedVulItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeGroupedVulResponseBodyGroupedVulItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupedVulResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupedVulResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotAuthResponseBody extends $tea.Model {
  honeyPotAuthCount?: number;
  honeyPotCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      honeyPotAuthCount: 'HoneyPotAuthCount',
      honeyPotCount: 'HoneyPotCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeyPotAuthCount: 'number',
      honeyPotCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotAuthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHoneyPotAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHoneyPotAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsRequest extends $tea.Model {
  from?: string;
  statisticsDays?: number;
  statisticsKeyType?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      statisticsDays: 'StatisticsDays',
      statisticsKeyType: 'StatisticsKeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      statisticsDays: 'number',
      statisticsKeyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  suspHoneyPotStatisticsResponse?: DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suspHoneyPotStatisticsResponse: 'SuspHoneyPotStatisticsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suspHoneyPotStatisticsResponse: { 'type': 'array', 'itemType': DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHoneyPotSuspStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHoneyPotSuspStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  pageSize?: number;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskResponseBody extends $tea.Model {
  buildTasks?: DescribeImageFixTaskResponseBodyBuildTasks[];
  pageInfo?: DescribeImageFixTaskResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTasks: 'BuildTasks',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTasks: { 'type': 'array', 'itemType': DescribeImageFixTaskResponseBodyBuildTasks },
      pageInfo: DescribeImageFixTaskResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageFixTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageFixTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListRequest extends $tea.Model {
  aliasName?: string;
  currentPage?: number;
  cveId?: string;
  groupId?: string;
  imageDigest?: string;
  imageLayer?: string;
  imageTag?: string;
  isLatest?: number;
  lang?: string;
  name?: string;
  necessity?: string;
  pageSize?: number;
  patchId?: number;
  repoId?: string;
  repoInstanceId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoRegionId?: string;
  type?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      cveId: 'CveId',
      groupId: 'GroupId',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      isLatest: 'IsLatest',
      lang: 'Lang',
      name: 'Name',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      cveId: 'string',
      groupId: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      isLatest: 'number',
      lang: 'string',
      name: 'string',
      necessity: 'string',
      pageSize: 'number',
      patchId: 'number',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
      type: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponseBody extends $tea.Model {
  currentPage?: number;
  groupedVulItems?: DescribeImageGroupedVulListResponseBodyGroupedVulItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeImageGroupedVulListResponseBodyGroupedVulItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageGroupedVulListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageGroupedVulListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstancesRequest extends $tea.Model {
  criteria?: string;
  currentPage?: number;
  logicalExp?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstancesResponseBody extends $tea.Model {
  imageInstanceList?: DescribeImageInstancesResponseBodyImageInstanceList[];
  pageInfo?: DescribeImageInstancesResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInstanceList: 'ImageInstanceList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInstanceList: { 'type': 'array', 'itemType': DescribeImageInstancesResponseBodyImageInstanceList },
      pageInfo: DescribeImageInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageScanAuthCountResponseBody extends $tea.Model {
  imageScan?: DescribeImageScanAuthCountResponseBodyImageScan;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageScan: 'ImageScan',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScan: DescribeImageScanAuthCountResponseBodyImageScan,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageScanAuthCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageScanAuthCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageScanAuthCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageStatisticsResponseBody extends $tea.Model {
  instanceCount?: number;
  requestId?: string;
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      requestId: 'RequestId',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      requestId: 'string',
      riskInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListRequest extends $tea.Model {
  aliasName?: string;
  currentPage?: number;
  dealed?: string;
  digest?: string;
  instanceId?: string;
  lang?: string;
  name?: string;
  necessity?: string;
  pageSize?: number;
  regionId?: string;
  repoId?: string;
  repoInstanceId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoRegionId?: string;
  statusList?: string;
  tag?: string;
  type?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      digest: 'Digest',
      instanceId: 'InstanceId',
      lang: 'Lang',
      name: 'Name',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      statusList: 'StatusList',
      tag: 'Tag',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      dealed: 'string',
      digest: 'string',
      instanceId: 'string',
      lang: 'string',
      name: 'string',
      necessity: 'string',
      pageSize: 'number',
      regionId: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
      statusList: 'string',
      tag: 'string',
      type: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vulRecords?: DescribeImageVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageVulListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageVulListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCaptchaRequest extends $tea.Model {
  deadline?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      deadline: 'Deadline',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadline: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCaptchaResponseBody extends $tea.Model {
  captchaCode?: string;
  deadline?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      captchaCode: 'CaptchaCode',
      deadline: 'Deadline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaCode: 'string',
      deadline: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCaptchaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstallCaptchaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstallCaptchaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCodesRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  status?: number;
  subAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
      subAccountName: 'SubAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      status: 'number',
      subAccountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCodesResponseBody extends $tea.Model {
  installCodes?: DescribeInstallCodesResponseBodyInstallCodes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      installCodes: 'InstallCodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installCodes: { 'type': 'array', 'itemType': DescribeInstallCodesResponseBodyInstallCodes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstallCodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstallCodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesRequest extends $tea.Model {
  resourceOwnerId?: number;
  sourceIp?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      sourceIp: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBody extends $tea.Model {
  pageInfo?: DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo;
  requestId?: string;
  rules?: DescribeInstanceAntiBruteForceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo,
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeInstanceAntiBruteForceRulesResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceAntiBruteForceRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceAntiBruteForceRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsRequest extends $tea.Model {
  from?: string;
  lang?: string;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBody extends $tea.Model {
  data?: DescribeInstanceStatisticsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoRequest extends $tea.Model {
  field?: string;
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      ip: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoResponseBody extends $tea.Model {
  requestId?: string;
  c2DayTrace?: string;
  city?: string;
  country?: string;
  dayCnt30dTor?: string;
  dayCnt30dWebAttack?: string;
  dayCnt7dTor?: string;
  dayCnt7dWebAttack?: string;
  geo?: string;
  gmtFirstC2?: string;
  gmtFirstMiningPool?: string;
  gmtLastC2?: string;
  gmtLastMaliciousLogin?: string;
  gmtLastMaliciousSource?: string;
  gmtLastMiningPool?: string;
  gmtLastNat?: string;
  gmtLastProxy?: string;
  gmtLastTor?: string;
  gmtLastWebAttack?: string;
  idcName?: string;
  ip?: string;
  isC2?: string;
  isC21d?: string;
  isC27d?: string;
  isIdc?: string;
  isMaliciousLogin?: string;
  isMaliciousLogin1d?: string;
  isMaliciousLogin7d?: string;
  isMaliciousSource?: string;
  isMaliciousSource1d?: string;
  isMaliciousSource30d?: string;
  isMaliciousSource7d?: string;
  isMiningPool?: string;
  isMiningPool1d?: string;
  isMiningPool7d?: string;
  isNat?: string;
  isNat1d?: string;
  isNat7d?: string;
  isProxy?: string;
  isProxy1d?: string;
  isProxy7d?: string;
  isTor?: string;
  isTor1d?: string;
  isTor7d?: string;
  isWebAttack?: string;
  isWebAttack1d?: string;
  isWebAttack30d?: string;
  isWebAttack7d?: string;
  isp?: string;
  maliciousLoginDayTrace?: string;
  maliciousScore?: string;
  maliciousSourceDayTrace?: string;
  miningPoolDayTrace?: string;
  natDayTrace?: string;
  province?: string;
  proxyDayTrace?: string;
  rdns?: string;
  tags?: string;
  torDayTrace?: string;
  totalDayCntTor?: string;
  totalDayCntWebAttack?: string;
  webAttackDayTrace?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      c2DayTrace: 'c2_day_trace',
      city: 'city',
      country: 'country',
      dayCnt30dTor: 'day_cnt_30d_tor',
      dayCnt30dWebAttack: 'day_cnt_30d_web_attack',
      dayCnt7dTor: 'day_cnt_7d_tor',
      dayCnt7dWebAttack: 'day_cnt_7d_web_attack',
      geo: 'geo',
      gmtFirstC2: 'gmt_first_c2',
      gmtFirstMiningPool: 'gmt_first_mining_pool',
      gmtLastC2: 'gmt_last_c2',
      gmtLastMaliciousLogin: 'gmt_last_malicious_login',
      gmtLastMaliciousSource: 'gmt_last_malicious_source',
      gmtLastMiningPool: 'gmt_last_mining_pool',
      gmtLastNat: 'gmt_last_nat',
      gmtLastProxy: 'gmt_last_proxy',
      gmtLastTor: 'gmt_last_tor',
      gmtLastWebAttack: 'gmt_last_web_attack',
      idcName: 'idc_name',
      ip: 'ip',
      isC2: 'is_c2',
      isC21d: 'is_c2_1d',
      isC27d: 'is_c2_7d',
      isIdc: 'is_idc',
      isMaliciousLogin: 'is_malicious_login',
      isMaliciousLogin1d: 'is_malicious_login_1d',
      isMaliciousLogin7d: 'is_malicious_login_7d',
      isMaliciousSource: 'is_malicious_source',
      isMaliciousSource1d: 'is_malicious_source_1d',
      isMaliciousSource30d: 'is_malicious_source_30d',
      isMaliciousSource7d: 'is_malicious_source_7d',
      isMiningPool: 'is_mining_pool',
      isMiningPool1d: 'is_mining_pool_1d',
      isMiningPool7d: 'is_mining_pool_7d',
      isNat: 'is_nat',
      isNat1d: 'is_nat_1d',
      isNat7d: 'is_nat_7d',
      isProxy: 'is_proxy',
      isProxy1d: 'is_proxy_1d',
      isProxy7d: 'is_proxy_7d',
      isTor: 'is_tor',
      isTor1d: 'is_tor_1d',
      isTor7d: 'is_tor_7d',
      isWebAttack: 'is_web_attack',
      isWebAttack1d: 'is_web_attack_1d',
      isWebAttack30d: 'is_web_attack_30d',
      isWebAttack7d: 'is_web_attack_7d',
      isp: 'isp',
      maliciousLoginDayTrace: 'malicious_login_day_trace',
      maliciousScore: 'malicious_score',
      maliciousSourceDayTrace: 'malicious_source_day_trace',
      miningPoolDayTrace: 'mining_pool_day_trace',
      natDayTrace: 'nat_day_trace',
      province: 'province',
      proxyDayTrace: 'proxy_day_trace',
      rdns: 'rdns',
      tags: 'tags',
      torDayTrace: 'tor_day_trace',
      totalDayCntTor: 'total_day_cnt_tor',
      totalDayCntWebAttack: 'total_day_cnt_web_attack',
      webAttackDayTrace: 'web_attack_day_trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      c2DayTrace: 'string',
      city: 'string',
      country: 'string',
      dayCnt30dTor: 'string',
      dayCnt30dWebAttack: 'string',
      dayCnt7dTor: 'string',
      dayCnt7dWebAttack: 'string',
      geo: 'string',
      gmtFirstC2: 'string',
      gmtFirstMiningPool: 'string',
      gmtLastC2: 'string',
      gmtLastMaliciousLogin: 'string',
      gmtLastMaliciousSource: 'string',
      gmtLastMiningPool: 'string',
      gmtLastNat: 'string',
      gmtLastProxy: 'string',
      gmtLastTor: 'string',
      gmtLastWebAttack: 'string',
      idcName: 'string',
      ip: 'string',
      isC2: 'string',
      isC21d: 'string',
      isC27d: 'string',
      isIdc: 'string',
      isMaliciousLogin: 'string',
      isMaliciousLogin1d: 'string',
      isMaliciousLogin7d: 'string',
      isMaliciousSource: 'string',
      isMaliciousSource1d: 'string',
      isMaliciousSource30d: 'string',
      isMaliciousSource7d: 'string',
      isMiningPool: 'string',
      isMiningPool1d: 'string',
      isMiningPool7d: 'string',
      isNat: 'string',
      isNat1d: 'string',
      isNat7d: 'string',
      isProxy: 'string',
      isProxy1d: 'string',
      isProxy7d: 'string',
      isTor: 'string',
      isTor1d: 'string',
      isTor7d: 'string',
      isWebAttack: 'string',
      isWebAttack1d: 'string',
      isWebAttack30d: 'string',
      isWebAttack7d: 'string',
      isp: 'string',
      maliciousLoginDayTrace: 'string',
      maliciousScore: 'string',
      maliciousSourceDayTrace: 'string',
      miningPoolDayTrace: 'string',
      natDayTrace: 'string',
      province: 'string',
      proxyDayTrace: 'string',
      rdns: 'string',
      tags: 'string',
      torDayTrace: 'string',
      totalDayCntTor: 'string',
      totalDayCntWebAttack: 'string',
      webAttackDayTrace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIpInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstoreStorageRequest extends $tea.Model {
  from?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstoreStorageResponseBody extends $tea.Model {
  logstore?: string;
  preserve?: number;
  requestId?: string;
  ttl?: number;
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      preserve: 'Preserve',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      preserve: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstoreStorageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogstoreStorageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogstoreStorageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBody extends $tea.Model {
  count?: number;
  httpStatusCode?: number;
  moduleConfigList?: DescribeModuleConfigResponseBodyModuleConfigList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      httpStatusCode: 'HttpStatusCode',
      moduleConfigList: 'ModuleConfigList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      httpStatusCode: 'number',
      moduleConfigList: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeModuleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeModuleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNoticeConfigRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNoticeConfigResponseBody extends $tea.Model {
  noticeConfigList?: DescribeNoticeConfigResponseBodyNoticeConfigList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      noticeConfigList: 'NoticeConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeConfigList: { 'type': 'array', 'itemType': DescribeNoticeConfigResponseBodyNoticeConfigList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNoticeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNoticeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNoticeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCountRequest extends $tea.Model {
  type?: string;
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuidList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCountResponseBody extends $tea.Model {
  autoRun?: number;
  cron?: number;
  port?: number;
  process?: number;
  requestId?: string;
  sca?: number;
  software?: number;
  user?: number;
  static names(): { [key: string]: string } {
    return {
      autoRun: 'AutoRun',
      cron: 'Cron',
      port: 'Port',
      process: 'Process',
      requestId: 'RequestId',
      sca: 'Sca',
      software: 'Software',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRun: 'number',
      cron: 'number',
      port: 'number',
      process: 'number',
      requestId: 'string',
      sca: 'number',
      software: 'number',
      user: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  remark?: string;
  source?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      remark: 'Remark',
      source: 'Source',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      remark: 'string',
      source: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyCronDetailResponseBodyPageInfo;
  propertys?: DescribePropertyCronDetailResponseBodyPropertys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyCronDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyCronDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyCronDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyCronDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  port?: string;
  procName?: string;
  remark?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      port: 'Port',
      procName: 'ProcName',
      remark: 'Remark',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      port: 'string',
      procName: 'string',
      remark: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyPortDetailResponseBodyPageInfo;
  propertys?: DescribePropertyPortDetailResponseBodyPropertys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyPortDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyPortDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyPortDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyPortDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemRequest extends $tea.Model {
  currentPage?: number;
  forceFlush?: boolean;
  pageSize?: number;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      pageSize: 'PageSize',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      forceFlush: 'boolean',
      pageSize: 'number',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyPortItemResponseBodyPageInfo;
  propertyItems?: DescribePropertyPortItemResponseBodyPropertyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyPortItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyPortItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyPortItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyPortItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailRequest extends $tea.Model {
  cmdline?: string;
  currentPage?: number;
  name?: string;
  pageSize?: number;
  remark?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cmdline: 'Cmdline',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      remark: 'Remark',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdline: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      remark: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyProcDetailResponseBodyPageInfo;
  propertys?: DescribePropertyProcDetailResponseBodyPropertys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyProcDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyProcDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyProcDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyProcDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemRequest extends $tea.Model {
  currentPage?: number;
  forceFlush?: boolean;
  name?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      forceFlush: 'boolean',
      name: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyProcItemResponseBodyPageInfo;
  propertyItems?: DescribePropertyProcItemResponseBodyPropertyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyProcItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyProcItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyProcItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyProcItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailRequest extends $tea.Model {
  bizType?: string;
  currentPage?: number;
  lang?: string;
  name?: number;
  pageSize?: number;
  remark?: string;
  scaName?: string;
  searchInfo?: string;
  searchInfoSub?: string;
  searchItem?: string;
  searchItemSub?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      remark: 'Remark',
      scaName: 'ScaName',
      searchInfo: 'SearchInfo',
      searchInfoSub: 'SearchInfoSub',
      searchItem: 'SearchItem',
      searchItemSub: 'SearchItemSub',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      currentPage: 'number',
      lang: 'string',
      name: 'number',
      pageSize: 'number',
      remark: 'string',
      scaName: 'string',
      searchInfo: 'string',
      searchInfoSub: 'string',
      searchItem: 'string',
      searchItemSub: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyScaDetailResponseBodyPageInfo;
  propertys?: DescribePropertyScaDetailResponseBodyPropertys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyScaDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyScaDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyScaDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyScaDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailRequest extends $tea.Model {
  currentPage?: number;
  name?: string;
  pageSize?: number;
  path?: string;
  remark?: string;
  softwareVersion?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      path: 'Path',
      remark: 'Remark',
      softwareVersion: 'SoftwareVersion',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      path: 'string',
      remark: 'string',
      softwareVersion: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBody extends $tea.Model {
  pageInfo?: DescribePropertySoftwareDetailResponseBodyPageInfo;
  propertys?: DescribePropertySoftwareDetailResponseBodyPropertys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertySoftwareDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertySoftwareDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertySoftwareDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertySoftwareDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemRequest extends $tea.Model {
  currentPage?: number;
  forceFlush?: boolean;
  name?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      forceFlush: 'boolean',
      name: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponseBody extends $tea.Model {
  pageInfo?: DescribePropertySoftwareItemResponseBodyPageInfo;
  propertyItems?: DescribePropertySoftwareItemResponseBodyPropertyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertySoftwareItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertySoftwareItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertySoftwareItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertySoftwareItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageNewestRequest extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageNewestResponseBody extends $tea.Model {
  itemCount?: number;
  newestStatisticItems?: DescribePropertyUsageNewestResponseBodyNewestStatisticItems[];
  requestId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemCount: 'ItemCount',
      newestStatisticItems: 'NewestStatisticItems',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCount: 'number',
      newestStatisticItems: { 'type': 'array', 'itemType': DescribePropertyUsageNewestResponseBodyNewestStatisticItems },
      requestId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageNewestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyUsageNewestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyUsageNewestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailRequest extends $tea.Model {
  currentPage?: number;
  isRoot?: string;
  pageSize?: number;
  remark?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      isRoot: 'IsRoot',
      pageSize: 'PageSize',
      remark: 'Remark',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      isRoot: 'string',
      pageSize: 'number',
      remark: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyUserDetailResponseBodyPageInfo;
  propertys?: DescribePropertyUserDetailResponseBodyPropertys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyUserDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyUserDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyUserDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyUserDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemRequest extends $tea.Model {
  currentPage?: number;
  forceFlush?: boolean;
  pageSize?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      pageSize: 'PageSize',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      forceFlush: 'boolean',
      pageSize: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBody extends $tea.Model {
  pageInfo?: DescribePropertyUserItemResponseBodyPageInfo;
  propertyItems?: DescribePropertyUserItemResponseBodyPropertyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyUserItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyUserItemResponseBodyPropertyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePropertyUserItemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePropertyUserItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuaraFileDownloadInfoRequest extends $tea.Model {
  from?: string;
  quaraFileId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      quaraFileId: 'QuaraFileId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      quaraFileId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuaraFileDownloadInfoResponseBody extends $tea.Model {
  downloadUrl?: string;
  md5?: string;
  path?: string;
  quaraFileId?: number;
  requestId?: string;
  tag?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      md5: 'Md5',
      path: 'Path',
      quaraFileId: 'QuaraFileId',
      requestId: 'RequestId',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      md5: 'string',
      path: 'string',
      quaraFileId: 'number',
      requestId: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuaraFileDownloadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeQuaraFileDownloadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeQuaraFileDownloadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsRequest extends $tea.Model {
  currentPage?: number;
  machineRemark?: string;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      machineRemark: 'MachineRemark',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      machineRemark: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBody extends $tea.Model {
  pageInfo?: DescribeRestoreJobsResponseBodyPageInfo;
  requestId?: string;
  restoreJobs?: DescribeRestoreJobsResponseBodyRestoreJobs[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      restoreJobs: 'RestoreJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeRestoreJobsResponseBodyPageInfo,
      requestId: 'string',
      restoreJobs: { 'type': 'array', 'itemType': DescribeRestoreJobsResponseBodyRestoreJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestoreJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestoreJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestorePlansRequest extends $tea.Model {
  currentPage?: number;
  instanceName?: string;
  pageSize?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceName: 'InstanceName',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceName: 'string',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestorePlansResponseBody extends $tea.Model {
  pageInfo?: DescribeRestorePlansResponseBodyPageInfo;
  requestId?: string;
  restorePlans?: DescribeRestorePlansResponseBodyRestorePlans[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      restorePlans: 'RestorePlans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeRestorePlansResponseBodyPageInfo,
      requestId: 'string',
      restorePlans: { 'type': 'array', 'itemType': DescribeRestorePlansResponseBodyRestorePlans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestorePlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRestorePlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRestorePlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultRequest extends $tea.Model {
  currentPage?: number;
  itemId?: number;
  lang?: string;
  pageSize?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      itemId: 'ItemId',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      itemId: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultResponseBody extends $tea.Model {
  pageContentResource?: DescribeRiskCheckItemResultResponseBodyPageContentResource;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageContentResource: 'PageContentResource',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageContentResource: DescribeRiskCheckItemResultResponseBodyPageContentResource,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskCheckItemResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskCheckItemResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultRequest extends $tea.Model {
  assetType?: string;
  currentPage?: number;
  groupId?: number;
  itemIds?: string[];
  lang?: string;
  name?: string;
  pageSize?: number;
  queryFlag?: string;
  resourceOwnerId?: number;
  riskLevel?: string;
  sourceIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      itemIds: 'ItemIds',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      queryFlag: 'QueryFlag',
      resourceOwnerId: 'ResourceOwnerId',
      riskLevel: 'RiskLevel',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      currentPage: 'number',
      groupId: 'number',
      itemIds: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      queryFlag: 'string',
      resourceOwnerId: 'number',
      riskLevel: 'string',
      sourceIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBody extends $tea.Model {
  count?: number;
  currentPage?: number;
  list?: DescribeRiskCheckResultResponseBodyList[];
  pageCount?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      list: 'List',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyList },
      pageCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryRequest extends $tea.Model {
  lang?: string;
  resourceDirectoryAccountId?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceDirectoryAccountId: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBody extends $tea.Model {
  requestId?: string;
  riskCheckSummary?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskCheckSummary: 'RiskCheckSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskCheckSummary: DescribeRiskCheckSummaryResponseBodyRiskCheckSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskCheckSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskCheckSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeRequest extends $tea.Model {
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeResponseBody extends $tea.Model {
  list?: DescribeRiskItemTypeResponseBodyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeRiskItemTypeResponseBodyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskItemTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskItemTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskListCheckResultRequest extends $tea.Model {
  currentPage?: number;
  instanceIds?: string[];
  lang?: string;
  pageSize?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceIds: 'InstanceIds',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskListCheckResultResponseBody extends $tea.Model {
  list?: DescribeRiskListCheckResultResponseBodyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeRiskListCheckResultResponseBodyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskListCheckResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRiskListCheckResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRiskListCheckResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanTaskProgressRequest extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanTaskProgressResponseBody extends $tea.Model {
  requestId?: string;
  scanTaskProgress?: string;
  targetInfo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scanTaskProgress: 'ScanTaskProgress',
      targetInfo: 'TargetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanTaskProgress: 'string',
      targetInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScanTaskProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScanTaskProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionResponseBody extends $tea.Model {
  conditionList?: DescribeSearchConditionResponseBodyConditionList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      conditionList: 'ConditionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionList: { 'type': 'array', 'itemType': DescribeSearchConditionResponseBodyConditionList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSearchConditionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSearchConditionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBody extends $tea.Model {
  requestId?: string;
  suggestions?: DescribeSecureSuggestionResponseBodySuggestions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suggestions: 'Suggestions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suggestions: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestions },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecureSuggestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecureSuggestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityCheckScheduleConfigRequest extends $tea.Model {
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityCheckScheduleConfigResponseBody extends $tea.Model {
  requestId?: string;
  riskCheckJobConfig?: DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskCheckJobConfig: 'RiskCheckJobConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskCheckJobConfig: DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityCheckScheduleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityCheckScheduleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityCheckScheduleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusRequest extends $tea.Model {
  resourceOwnerId?: number;
  securityEventIds?: string[];
  sourceIp?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      securityEventIds: 'SecurityEventIds',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBody extends $tea.Model {
  requestId?: string;
  securityEventOperationStatusResponse?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperationStatusResponse: 'SecurityEventOperationStatusResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperationStatusResponse: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityEventOperationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityEventOperationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsRequest extends $tea.Model {
  lang?: string;
  resourceOwnerId?: number;
  securityEventId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceOwnerId: 'number',
      securityEventId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBody extends $tea.Model {
  requestId?: string;
  securityEventOperationsResponse?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperationsResponse: 'SecurityEventOperationsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperationsResponse: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityEventOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityEventOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoRequest extends $tea.Model {
  lang?: string;
  resourceDirectoryAccountId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceDirectoryAccountId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBody extends $tea.Model {
  attackEvent?: DescribeSecurityStatInfoResponseBodyAttackEvent;
  healthCheck?: DescribeSecurityStatInfoResponseBodyHealthCheck;
  requestId?: string;
  securityEvent?: DescribeSecurityStatInfoResponseBodySecurityEvent;
  success?: boolean;
  vulnerability?: DescribeSecurityStatInfoResponseBodyVulnerability;
  static names(): { [key: string]: string } {
    return {
      attackEvent: 'AttackEvent',
      healthCheck: 'HealthCheck',
      requestId: 'RequestId',
      securityEvent: 'SecurityEvent',
      success: 'Success',
      vulnerability: 'Vulnerability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackEvent: DescribeSecurityStatInfoResponseBodyAttackEvent,
      healthCheck: DescribeSecurityStatInfoResponseBodyHealthCheck,
      requestId: 'string',
      securityEvent: DescribeSecurityStatInfoResponseBodySecurityEvent,
      success: 'boolean',
      vulnerability: DescribeSecurityStatInfoResponseBodyVulnerability,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityStatInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityStatInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleStatusResponseBody extends $tea.Model {
  requestId?: string;
  roleStatus?: DescribeServiceLinkedRoleStatusResponseBodyRoleStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleStatus: 'RoleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleStatus: DescribeServiceLinkedRoleStatusResponseBodyRoleStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServiceLinkedRoleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceLinkedRoleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarEventScenariosRequest extends $tea.Model {
  resourceOwnerId?: number;
  securityEventId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      securityEventId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarEventScenariosResponseBody extends $tea.Model {
  requestId?: string;
  scenarios?: DescribeSimilarEventScenariosResponseBodyScenarios[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scenarios: { 'type': 'array', 'itemType': DescribeSimilarEventScenariosResponseBodyScenarios },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarEventScenariosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSimilarEventScenariosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSimilarEventScenariosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponseBody extends $tea.Model {
  pageInfo?: DescribeSimilarSecurityEventsResponseBodyPageInfo;
  requestId?: string;
  securityEventsResponse?: DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      securityEventsResponse: 'SecurityEventsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeSimilarSecurityEventsResponseBodyPageInfo,
      requestId: 'string',
      securityEventsResponse: { 'type': 'array', 'itemType': DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSimilarSecurityEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSimilarSecurityEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  apiVersion?: string;
  currentPage?: number;
  isAliYunEcs?: string;
  machineRegion?: string;
  machineRemark?: string;
  nextToken?: string;
  pageSize?: number;
  statusList?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      currentPage: 'CurrentPage',
      isAliYunEcs: 'IsAliYunEcs',
      machineRegion: 'MachineRegion',
      machineRemark: 'MachineRemark',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      currentPage: 'number',
      isAliYunEcs: 'string',
      machineRegion: 'string',
      machineRemark: 'string',
      nextToken: 'string',
      pageSize: 'number',
      statusList: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $tea.Model {
  pageInfo?: DescribeSnapshotsResponseBodyPageInfo;
  requestId?: string;
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeSnapshotsResponseBodyPageInfo,
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyRequest extends $tea.Model {
  customType?: string;
  lang?: string;
  sourceIp?: string;
  strategyIds?: string;
  static names(): { [key: string]: string } {
    return {
      customType: 'CustomType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customType: 'string',
      lang: 'string',
      sourceIp: 'string',
      strategyIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyResponseBody extends $tea.Model {
  requestId?: string;
  strategies?: DescribeStrategyResponseBodyStrategies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategies: { 'type': 'array', 'itemType': DescribeStrategyResponseBodyStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  sourceIp?: string;
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBody extends $tea.Model {
  endTime?: string;
  failCount?: number;
  failedEcsList?: DescribeStrategyExecDetailResponseBodyFailedEcsList[];
  inProcessCount?: number;
  percent?: string;
  requestId?: string;
  source?: string;
  startTime?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      failCount: 'FailCount',
      failedEcsList: 'FailedEcsList',
      inProcessCount: 'InProcessCount',
      percent: 'Percent',
      requestId: 'RequestId',
      source: 'Source',
      startTime: 'StartTime',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failCount: 'number',
      failedEcsList: { 'type': 'array', 'itemType': DescribeStrategyExecDetailResponseBodyFailedEcsList },
      inProcessCount: 'number',
      percent: 'string',
      requestId: 'string',
      source: 'string',
      startTime: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStrategyExecDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStrategyExecDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyProcessRequest extends $tea.Model {
  sourceIp?: string;
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyProcessResponseBody extends $tea.Model {
  execStatus?: number;
  passRate?: string;
  processRate?: number;
  requestId?: string;
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      execStatus: 'ExecStatus',
      passRate: 'PassRate',
      processRate: 'ProcessRate',
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execStatus: 'number',
      passRate: 'string',
      processRate: 'number',
      requestId: 'string',
      strategyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStrategyProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStrategyProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyTargetRequest extends $tea.Model {
  config?: string;
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sourceIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyTargetResponseBody extends $tea.Model {
  requestId?: string;
  strategyTargets?: DescribeStrategyTargetResponseBodyStrategyTargets[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyTargets: 'StrategyTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyTargets: { 'type': 'array', 'itemType': DescribeStrategyTargetResponseBodyStrategyTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStrategyTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStrategyTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryInfoRequest extends $tea.Model {
  lang?: string;
  resourceDirectoryAccountId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceDirectoryAccountId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryInfoResponseBody extends $tea.Model {
  aegisClientOfflineCount?: number;
  aegisClientOnlineCount?: number;
  requestId?: string;
  securityScore?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aegisClientOfflineCount: 'AegisClientOfflineCount',
      aegisClientOnlineCount: 'AegisClientOnlineCount',
      requestId: 'RequestId',
      securityScore: 'SecurityScore',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisClientOfflineCount: 'number',
      aegisClientOnlineCount: 'number',
      requestId: 'string',
      securityScore: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSummaryInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSummaryInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportRegionResponseBody extends $tea.Model {
  requestId?: string;
  supportRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportRegion: 'SupportRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSupportRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSupportRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSupportRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailRequest extends $tea.Model {
  from?: string;
  lang?: string;
  sourceIp?: string;
  suspiciousEventId?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      suspiciousEventId: 'SuspiciousEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      lang: 'string',
      sourceIp: 'string',
      suspiciousEventId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailResponseBody extends $tea.Model {
  canBeDealOnLine?: boolean;
  dataSource?: string;
  details?: DescribeSuspEventDetailResponseBodyDetails[];
  eventDesc?: string;
  eventName?: string;
  eventStatus?: string;
  eventTypeDesc?: string;
  id?: number;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  lastTime?: string;
  level?: string;
  operateErrorCode?: string;
  operateMsg?: string;
  requestId?: string;
  saleVersion?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      canBeDealOnLine: 'CanBeDealOnLine',
      dataSource: 'DataSource',
      details: 'Details',
      eventDesc: 'EventDesc',
      eventName: 'EventName',
      eventStatus: 'EventStatus',
      eventTypeDesc: 'EventTypeDesc',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTime: 'LastTime',
      level: 'Level',
      operateErrorCode: 'OperateErrorCode',
      operateMsg: 'OperateMsg',
      requestId: 'RequestId',
      saleVersion: 'SaleVersion',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBeDealOnLine: 'boolean',
      dataSource: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventDetailResponseBodyDetails },
      eventDesc: 'string',
      eventName: 'string',
      eventStatus: 'string',
      eventTypeDesc: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTime: 'string',
      level: 'string',
      operateErrorCode: 'string',
      operateMsg: 'string',
      requestId: 'string',
      saleVersion: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspEventDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesRequest extends $tea.Model {
  currentPage?: string;
  from?: string;
  groupId?: string;
  pageSize?: string;
  quaraTag?: string;
  sourceIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      from: 'From',
      groupId: 'GroupId',
      pageSize: 'PageSize',
      quaraTag: 'QuaraTag',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      from: 'string',
      groupId: 'string',
      pageSize: 'string',
      quaraTag: 'string',
      sourceIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBody extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  quaraFiles?: DescribeSuspEventQuaraFilesResponseBodyQuaraFiles[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      quaraFiles: 'QuaraFiles',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      quaraFiles: { 'type': 'array', 'itemType': DescribeSuspEventQuaraFilesResponseBodyQuaraFiles },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspEventQuaraFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspEventQuaraFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsRequest extends $tea.Model {
  alarmUniqueInfo?: string;
  clusterId?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  currentPage?: string;
  dealed?: string;
  eventNames?: string;
  from?: string;
  groupId?: number;
  lang?: string;
  levels?: string;
  name?: string;
  operateErrorCodeList?: string[];
  pageSize?: string;
  parentEventTypes?: string;
  remark?: string;
  source?: string;
  sourceIp?: string;
  status?: string;
  targetType?: string;
  uniqueInfo?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      eventNames: 'EventNames',
      from: 'From',
      groupId: 'GroupId',
      lang: 'Lang',
      levels: 'Levels',
      name: 'Name',
      operateErrorCodeList: 'OperateErrorCodeList',
      pageSize: 'PageSize',
      parentEventTypes: 'ParentEventTypes',
      remark: 'Remark',
      source: 'Source',
      sourceIp: 'SourceIp',
      status: 'Status',
      targetType: 'TargetType',
      uniqueInfo: 'UniqueInfo',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'string',
      dealed: 'string',
      eventNames: 'string',
      from: 'string',
      groupId: 'number',
      lang: 'string',
      levels: 'string',
      name: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'string',
      parentEventTypes: 'string',
      remark: 'string',
      source: 'string',
      sourceIp: 'string',
      status: 'string',
      targetType: 'string',
      uniqueInfo: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suspEvents: 'SuspEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEvents },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskErrorLogRequest extends $tea.Model {
  buildTaskId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskErrorLogResponseBody extends $tea.Model {
  logs?: DescribeTaskErrorLogResponseBodyLogs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': DescribeTaskErrorLogResponseBodyLogs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskErrorLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTaskErrorLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTaskErrorLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseRequest extends $tea.Model {
  currentPage?: number;
  databaseType?: string;
  instanceName?: string;
  pageSize?: number;
  queryType?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      databaseType: 'DatabaseType',
      instanceName: 'InstanceName',
      pageSize: 'PageSize',
      queryType: 'QueryType',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      databaseType: 'string',
      instanceName: 'string',
      pageSize: 'number',
      queryType: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      uniRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseResponseBody extends $tea.Model {
  databaseList?: DescribeUniBackupDatabaseResponseBodyDatabaseList[];
  pageInfo?: DescribeUniBackupDatabaseResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: { 'type': 'array', 'itemType': DescribeUniBackupDatabaseResponseBodyDatabaseList },
      pageInfo: DescribeUniBackupDatabaseResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUniBackupDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUniBackupDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  policyName?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyName: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesResponseBody extends $tea.Model {
  pageInfo?: DescribeUniBackupPoliciesResponseBodyPageInfo;
  requestId?: string;
  uniBackupPolicies?: DescribeUniBackupPoliciesResponseBodyUniBackupPolicies[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      uniBackupPolicies: 'UniBackupPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeUniBackupPoliciesResponseBodyPageInfo,
      requestId: 'string',
      uniBackupPolicies: { 'type': 'array', 'itemType': DescribeUniBackupPoliciesResponseBodyUniBackupPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUniBackupPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUniBackupPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  policyId?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyId: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBody extends $tea.Model {
  requestId?: string;
  uniBackupPolicyDTO?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTO;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uniBackupPolicyDTO: 'UniBackupPolicyDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uniBackupPolicyDTO: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUniBackupPolicyDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUniBackupPolicyDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupStatisticsResponseBody extends $tea.Model {
  protectedDatabaseCount?: number;
  requestId?: string;
  restoringTaskCount?: number;
  totalRecoverableCount?: number;
  totalRestoreTaskCount?: number;
  unprotectedDatabaseCount?: number;
  static names(): { [key: string]: string } {
    return {
      protectedDatabaseCount: 'ProtectedDatabaseCount',
      requestId: 'RequestId',
      restoringTaskCount: 'RestoringTaskCount',
      totalRecoverableCount: 'TotalRecoverableCount',
      totalRestoreTaskCount: 'TotalRestoreTaskCount',
      unprotectedDatabaseCount: 'UnprotectedDatabaseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectedDatabaseCount: 'number',
      requestId: 'string',
      restoringTaskCount: 'number',
      totalRecoverableCount: 'number',
      totalRestoreTaskCount: 'number',
      unprotectedDatabaseCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUniBackupStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUniBackupStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniRecoverableListRequest extends $tea.Model {
  currentPage?: number;
  database?: string;
  pageSize?: number;
  policyId?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      database: 'Database',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      database: 'string',
      pageSize: 'number',
      policyId: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniRecoverableListResponseBody extends $tea.Model {
  count?: number;
  currentPage?: number;
  database?: string;
  pageSize?: number;
  recoverableInfoList?: DescribeUniRecoverableListResponseBodyRecoverableInfoList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      database: 'Database',
      pageSize: 'PageSize',
      recoverableInfoList: 'RecoverableInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      database: 'string',
      pageSize: 'number',
      recoverableInfoList: { 'type': 'array', 'itemType': DescribeUniRecoverableListResponseBodyRecoverableInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniRecoverableListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUniRecoverableListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUniRecoverableListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniSupportRegionResponseBody extends $tea.Model {
  requestId?: string;
  uniSupportRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uniSupportRegion: 'UniSupportRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uniSupportRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniSupportRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUniSupportRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUniSupportRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBackupMachinesResponseBody extends $tea.Model {
  machines?: DescribeUserBackupMachinesResponseBodyMachines[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machines: 'Machines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machines: { 'type': 'array', 'itemType': DescribeUserBackupMachinesResponseBodyMachines },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBackupMachinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserBackupMachinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserBackupMachinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBaselineAuthorizationRequest extends $tea.Model {
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBaselineAuthorizationResponseBody extends $tea.Model {
  requestId?: string;
  userBaselineAuthorization?: DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userBaselineAuthorization: 'UserBaselineAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userBaselineAuthorization: DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBaselineAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserBaselineAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserBaselineAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLayoutAuthorizationRequest extends $tea.Model {
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLayoutAuthorizationResponseBody extends $tea.Model {
  authorized?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserLayoutAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserLayoutAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserLayoutAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUuidsByVulNamesRequest extends $tea.Model {
  dealed?: string;
  fieldName?: string;
  fieldValue?: string;
  groupId?: number;
  lang?: string;
  level?: string;
  necessity?: string;
  remark?: string;
  searchTags?: string;
  statusList?: string;
  tag?: string;
  targetType?: string;
  type?: string;
  vpcInstanceIds?: string;
  vulNames?: string[];
  static names(): { [key: string]: string } {
    return {
      dealed: 'Dealed',
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      groupId: 'GroupId',
      lang: 'Lang',
      level: 'Level',
      necessity: 'Necessity',
      remark: 'Remark',
      searchTags: 'SearchTags',
      statusList: 'StatusList',
      tag: 'Tag',
      targetType: 'TargetType',
      type: 'Type',
      vpcInstanceIds: 'VpcInstanceIds',
      vulNames: 'VulNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealed: 'string',
      fieldName: 'string',
      fieldValue: 'string',
      groupId: 'number',
      lang: 'string',
      level: 'string',
      necessity: 'string',
      remark: 'string',
      searchTags: 'string',
      statusList: 'string',
      tag: 'string',
      targetType: 'string',
      type: 'string',
      vpcInstanceIds: 'string',
      vulNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUuidsByVulNamesResponseBody extends $tea.Model {
  machineInfoStatistics?: DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineInfoStatistics: 'MachineInfoStatistics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineInfoStatistics: { 'type': 'array', 'itemType': DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUuidsByVulNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUuidsByVulNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUuidsByVulNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigRequest extends $tea.Model {
  resourceDirectoryAccountId?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDirectoryAccountId: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigResponseBody extends $tea.Model {
  allowPartialBuy?: number;
  appWhiteList?: number;
  appWhiteListAuthCount?: number;
  assetLevel?: number;
  highestVersion?: number;
  honeypotCapacity?: number;
  imageScanCapacity?: number;
  instanceId?: string;
  isOverBalance?: boolean;
  isTrialVersion?: number;
  lastTrailEndTime?: number;
  MVAuthCount?: number;
  MVUnusedAuthCount?: number;
  releaseTime?: number;
  requestId?: string;
  sasLog?: number;
  sasScreen?: number;
  slsCapacity?: number;
  userDefinedAlarms?: number;
  version?: number;
  vmCores?: number;
  webLock?: number;
  webLockAuthCount?: number;
  static names(): { [key: string]: string } {
    return {
      allowPartialBuy: 'AllowPartialBuy',
      appWhiteList: 'AppWhiteList',
      appWhiteListAuthCount: 'AppWhiteListAuthCount',
      assetLevel: 'AssetLevel',
      highestVersion: 'HighestVersion',
      honeypotCapacity: 'HoneypotCapacity',
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
      isOverBalance: 'IsOverBalance',
      isTrialVersion: 'IsTrialVersion',
      lastTrailEndTime: 'LastTrailEndTime',
      MVAuthCount: 'MVAuthCount',
      MVUnusedAuthCount: 'MVUnusedAuthCount',
      releaseTime: 'ReleaseTime',
      requestId: 'RequestId',
      sasLog: 'SasLog',
      sasScreen: 'SasScreen',
      slsCapacity: 'SlsCapacity',
      userDefinedAlarms: 'UserDefinedAlarms',
      version: 'Version',
      vmCores: 'VmCores',
      webLock: 'WebLock',
      webLockAuthCount: 'WebLockAuthCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPartialBuy: 'number',
      appWhiteList: 'number',
      appWhiteListAuthCount: 'number',
      assetLevel: 'number',
      highestVersion: 'number',
      honeypotCapacity: 'number',
      imageScanCapacity: 'number',
      instanceId: 'string',
      isOverBalance: 'boolean',
      isTrialVersion: 'number',
      lastTrailEndTime: 'number',
      MVAuthCount: 'number',
      MVUnusedAuthCount: 'number',
      releaseTime: 'number',
      requestId: 'string',
      sasLog: 'number',
      sasScreen: 'number',
      slsCapacity: 'number',
      userDefinedAlarms: 'number',
      version: 'number',
      vmCores: 'number',
      webLock: 'number',
      webLockAuthCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVersionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVersionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVolDingdingMessageRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVolDingdingMessageResponseBody extends $tea.Model {
  dingdingUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dingdingUrl: 'DingdingUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingdingUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVolDingdingMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVolDingdingMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVolDingdingMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotCriteriaResponseBody extends $tea.Model {
  criteriaList?: DescribeVpcHoneyPotCriteriaResponseBodyCriteriaList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      criteriaList: 'CriteriaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteriaList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotCriteriaResponseBodyCriteriaList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotCriteriaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcHoneyPotCriteriaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcHoneyPotCriteriaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListRequest extends $tea.Model {
  currentPage?: number;
  honeyPotExistence?: boolean;
  pageSize?: number;
  vpcId?: string;
  vpcName?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      honeyPotExistence: 'HoneyPotExistence',
      pageSize: 'PageSize',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      honeyPotExistence: 'boolean',
      pageSize: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBody extends $tea.Model {
  pageInfo?: DescribeVpcHoneyPotListResponseBodyPageInfo;
  requestId?: string;
  vpcHoneyPotDTOList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      vpcHoneyPotDTOList: 'VpcHoneyPotDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeVpcHoneyPotListResponseBodyPageInfo,
      requestId: 'string',
      vpcHoneyPotDTOList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcHoneyPotListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcHoneyPotListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListResponseBody extends $tea.Model {
  count?: number;
  requestId?: string;
  vpcList?: DescribeVpcListResponseBodyVpcList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      vpcList: { 'type': 'array', 'itemType': DescribeVpcListResponseBodyVpcList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVpcListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVpcListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsRequest extends $tea.Model {
  aliasName?: string;
  lang?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      lang: 'Lang',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      lang: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBody extends $tea.Model {
  cves?: DescribeVulDetailsResponseBodyCves[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cves: 'Cves',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cves: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCves },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulExportInfoRequest extends $tea.Model {
  exportId?: number;
  static names(): { [key: string]: string } {
    return {
      exportId: 'ExportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulExportInfoResponseBody extends $tea.Model {
  currentCount?: number;
  exportStatus?: string;
  fileName?: string;
  id?: number;
  link?: string;
  message?: string;
  progress?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      id: 'Id',
      link: 'Link',
      message: 'Message',
      progress: 'Progress',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      exportStatus: 'string',
      fileName: 'string',
      id: 'number',
      link: 'string',
      message: 'string',
      progress: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulExportInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulExportInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulExportInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListRequest extends $tea.Model {
  aliasName?: string;
  attachTypes?: string;
  currentPage?: number;
  dealed?: string;
  groupId?: string;
  lang?: string;
  necessity?: string;
  pageSize?: number;
  remark?: string;
  type?: string;
  uuids?: string;
  vpcInstanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      attachTypes: 'AttachTypes',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      groupId: 'GroupId',
      lang: 'Lang',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      remark: 'Remark',
      type: 'Type',
      uuids: 'Uuids',
      vpcInstanceIds: 'VpcInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      attachTypes: 'string',
      currentPage: 'number',
      dealed: 'string',
      groupId: 'string',
      lang: 'string',
      necessity: 'string',
      pageSize: 'number',
      remark: 'string',
      type: 'string',
      uuids: 'string',
      vpcInstanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vulRecords?: DescribeVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vulWhitelists?: DescribeVulWhitelistResponseBodyVulWhitelists[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulWhitelists: 'VulWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulWhitelists: { 'type': 'array', 'itemType': DescribeVulWhitelistResponseBodyVulWhitelists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  machineName?: string;
  pageSize?: number;
  riskId?: number;
  sourceIp?: string;
  strategyId?: number;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      machineName: 'MachineName',
      pageSize: 'PageSize',
      riskId: 'RiskId',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      machineName: 'string',
      pageSize: 'number',
      riskId: 'number',
      sourceIp: 'string',
      strategyId: 'number',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesResponseBody extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  warningMachines?: DescribeWarningMachinesResponseBodyWarningMachines[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      warningMachines: 'WarningMachines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      warningMachines: { 'type': 'array', 'itemType': DescribeWarningMachinesResponseBodyWarningMachines },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWarningMachinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWarningMachinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockBindListRequest extends $tea.Model {
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  remark?: string;
  sourceIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      remark: 'Remark',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      remark: 'string',
      sourceIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockBindListResponseBody extends $tea.Model {
  bindList?: DescribeWebLockBindListResponseBodyBindList[];
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindList: 'BindList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindList: { 'type': 'array', 'itemType': DescribeWebLockBindListResponseBodyBindList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockBindListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebLockBindListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebLockBindListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockConfigListRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockConfigListResponseBody extends $tea.Model {
  configList?: DescribeWebLockConfigListResponseBodyConfigList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeWebLockConfigListResponseBodyConfigList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockConfigListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebLockConfigListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebLockConfigListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecStrategyRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecStrategyResponseBody extends $tea.Model {
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

export class ExecStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordRequest extends $tea.Model {
  exportType?: string;
  lang?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      lang: 'Lang',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      lang: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordResponseBody extends $tea.Model {
  fileName?: string;
  id?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      id: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixCheckWarningsRequest extends $tea.Model {
  checkParams?: string;
  lang?: string;
  riskId?: number;
  sourceIp?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      checkParams: 'CheckParams',
      lang: 'Lang',
      riskId: 'RiskId',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkParams: 'string',
      lang: 'string',
      riskId: 'number',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixCheckWarningsResponseBody extends $tea.Model {
  batchId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FixCheckWarningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FixCheckWarningsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FixCheckWarningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStorageCountResponseBody extends $tea.Model {
  backupStorageCount?: GetBackupStorageCountResponseBodyBackupStorageCount;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupStorageCount: 'BackupStorageCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupStorageCount: GetBackupStorageCountResponseBodyBackupStorageCount,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStorageCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBackupStorageCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBackupStorageCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIOCsRequest extends $tea.Model {
  date?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIOCsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
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

export class GetIOCsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIOCsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIOCsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncIOCsRequest extends $tea.Model {
  date?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncIOCsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
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

export class GetIncIOCsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIncIOCsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIncIOCsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalInstallScriptRequest extends $tea.Model {
  internalNetwork?: boolean;
  platformType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      internalNetwork: 'InternalNetwork',
      platformType: 'PlatformType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalNetwork: 'boolean',
      platformType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalInstallScriptResponseBody extends $tea.Model {
  requestId?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalInstallScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLocalInstallScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLocalInstallScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalUninstallScriptRequest extends $tea.Model {
  internalNetwork?: boolean;
  platformType?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      internalNetwork: 'InternalNetwork',
      platformType: 'PlatformType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internalNetwork: 'boolean',
      platformType: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalUninstallScriptResponseBody extends $tea.Model {
  requestId?: string;
  script?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalUninstallScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLocalUninstallScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLocalUninstallScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspiciousStatisticsRequest extends $tea.Model {
  groupIdList?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdList: 'GroupIdList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdList: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspiciousStatisticsResponseBody extends $tea.Model {
  remindCount?: number;
  requestId?: string;
  seriousCount?: number;
  suspiciousCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      remindCount: 'RemindCount',
      requestId: 'RequestId',
      seriousCount: 'SeriousCount',
      suspiciousCount: 'SuspiciousCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindCount: 'number',
      requestId: 'string',
      seriousCount: 'number',
      suspiciousCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspiciousStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSuspiciousStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSuspiciousStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulStatisticsRequest extends $tea.Model {
  groupIdList?: string;
  sourceIp?: string;
  typeList?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdList: 'GroupIdList',
      sourceIp: 'SourceIp',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdList: 'string',
      sourceIp: 'string',
      typeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  vulAsapSum?: number;
  vulLaterSum?: number;
  vulNntfSum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulAsapSum: 'VulAsapSum',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulAsapSum: 'number',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVulStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVulStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsRequest extends $tea.Model {
  markBatch?: string;
  markMissParam?: string;
  operationCode?: string;
  operationParams?: string;
  resourceOwnerId?: number;
  securityEventIds?: string[];
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      markBatch: 'MarkBatch',
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      resourceOwnerId: 'ResourceOwnerId',
      securityEventIds: 'SecurityEventIds',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markBatch: 'string',
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      resourceOwnerId: 'number',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponseBody extends $tea.Model {
  handleSecurityEventsResponse?: HandleSecurityEventsResponseBodyHandleSecurityEventsResponse;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      handleSecurityEventsResponse: 'HandleSecurityEventsResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handleSecurityEventsResponse: HandleSecurityEventsResponseBodyHandleSecurityEventsResponse,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HandleSecurityEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HandleSecurityEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSimilarSecurityEventsRequest extends $tea.Model {
  markMissParam?: string;
  operationCode?: string;
  operationParams?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markMissParam: 'string',
      operationCode: 'string',
      operationParams: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSimilarSecurityEventsResponseBody extends $tea.Model {
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

export class HandleSimilarSecurityEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HandleSimilarSecurityEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HandleSimilarSecurityEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreHcCheckWarningsRequest extends $tea.Model {
  checkIds?: string;
  checkWarningIds?: string;
  reason?: string;
  riskId?: string;
  sourceIp?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      checkWarningIds: 'CheckWarningIds',
      reason: 'Reason',
      riskId: 'RiskId',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: 'string',
      checkWarningIds: 'string',
      reason: 'string',
      riskId: 'string',
      sourceIp: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreHcCheckWarningsResponseBody extends $tea.Model {
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

export class IgnoreHcCheckWarningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IgnoreHcCheckWarningsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IgnoreHcCheckWarningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientRequest extends $tea.Model {
  policyVersion?: string;
  uuid?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: 'string',
      uuid: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallBackupClientResponseBody extends $tea.Model {
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

export class InstallBackupClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallBackupClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallBackupClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallUniBackupAgentRequest extends $tea.Model {
  policyId?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallUniBackupAgentResponseBody extends $tea.Model {
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

export class InstallUniBackupAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallUniBackupAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallUniBackupAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAntiBruteForceRuleRequest extends $tea.Model {
  defaultRule?: boolean;
  failCount?: number;
  forbiddenTime?: number;
  id?: number;
  name?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  span?: number;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'DefaultRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      id: 'Id',
      name: 'Name',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      span: 'Span',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      id: 'number',
      name: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      span: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAntiBruteForceRuleResponseBody extends $tea.Model {
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

export class ModifyAntiBruteForceRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAntiBruteForceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAntiBruteForceRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAssetGroupRequest extends $tea.Model {
  groupId?: number;
  sourceIp?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAssetGroupResponseBody extends $tea.Model {
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

export class ModifyAssetGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyAssetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyAssetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyRequest extends $tea.Model {
  id?: number;
  name?: string;
  policy?: { [key: string]: any };
  policyRegionId?: string;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      policy: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyRegionId: 'string',
      policyVersion: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyShrinkRequest extends $tea.Model {
  id?: number;
  name?: string;
  policyShrink?: string;
  policyRegionId?: string;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      policyShrink: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      policyShrink: 'string',
      policyRegionId: 'string',
      policyVersion: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyStatusRequest extends $tea.Model {
  id?: number;
  policyVersion?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      policyVersion: 'PolicyVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      policyVersion: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyStatusResponseBody extends $tea.Model {
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

export class ModifyBackupPolicyStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyBackupPolicyStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBackupPolicyStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCreateVulWhitelistRequest extends $tea.Model {
  reason?: string;
  targetInfo?: string;
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      targetInfo: 'TargetInfo',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      targetInfo: 'string',
      whitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCreateVulWhitelistResponseBody extends $tea.Model {
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

export class ModifyCreateVulWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyCreateVulWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyCreateVulWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmgVulSubmitRequest extends $tea.Model {
  lang?: string;
  name?: string;
  userAgreement?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'Name',
      userAgreement: 'UserAgreement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      userAgreement: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmgVulSubmitResponseBody extends $tea.Model {
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

export class ModifyEmgVulSubmitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyEmgVulSubmitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEmgVulSubmitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupPropertyRequest extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupPropertyResponseBody extends $tea.Model {
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

export class ModifyGroupPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyGroupPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyGroupPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAntiBruteForceRuleRequest extends $tea.Model {
  newRuleId?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      newRuleId: 'NewRuleId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newRuleId: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceAntiBruteForceRuleResponseBody extends $tea.Model {
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

export class ModifyInstanceAntiBruteForceRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceAntiBruteForceRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceAntiBruteForceRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoginBaseConfigRequest extends $tea.Model {
  config?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoginBaseConfigResponseBody extends $tea.Model {
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

export class ModifyLoginBaseConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLoginBaseConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLoginBaseConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoginSwitchConfigRequest extends $tea.Model {
  item?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLoginSwitchConfigResponseBody extends $tea.Model {
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

export class ModifyLoginSwitchConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLoginSwitchConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLoginSwitchConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNoticeConfigRequest extends $tea.Model {
  project?: string;
  route?: number;
  sourceIp?: string;
  timeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      route: 'Route',
      sourceIp: 'SourceIp',
      timeLimit: 'TimeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      route: 'number',
      sourceIp: 'string',
      timeLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNoticeConfigResponseBody extends $tea.Model {
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

export class ModifyNoticeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNoticeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNoticeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOpenLogShipperRequest extends $tea.Model {
  from?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOpenLogShipperResponseBody extends $tea.Model {
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

export class ModifyOpenLogShipperResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyOpenLogShipperResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOpenLogShipperResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulRequest extends $tea.Model {
  info?: string;
  operateType?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      operateType: 'OperateType',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      operateType: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulResponseBody extends $tea.Model {
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

export class ModifyOperateVulResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyOperateVulResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOperateVulResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskRequest extends $tea.Model {
  sourceIp?: string;
  tasks?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      tasks: 'Tasks',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      tasks: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponseBody extends $tea.Model {
  pushTaskRsp?: ModifyPushAllTaskResponseBodyPushTaskRsp;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushTaskRsp: 'PushTaskRsp',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskRsp: ModifyPushAllTaskResponseBodyPushTaskRsp,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPushAllTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPushAllTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRiskCheckStatusRequest extends $tea.Model {
  itemId?: number;
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'number',
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRiskCheckStatusResponseBody extends $tea.Model {
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

export class ModifyRiskCheckStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRiskCheckStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRiskCheckStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRiskSingleResultStatusRequest extends $tea.Model {
  ids?: string[];
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRiskSingleResultStatusResponseBody extends $tea.Model {
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

export class ModifyRiskSingleResultStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyRiskSingleResultStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyRiskSingleResultStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityCheckScheduleConfigRequest extends $tea.Model {
  daysOfWeek?: string;
  endTime?: number;
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      endTime: 'EndTime',
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: 'string',
      endTime: 'number',
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityCheckScheduleConfigResponseBody extends $tea.Model {
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

export class ModifySecurityCheckScheduleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifySecurityCheckScheduleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifySecurityCheckScheduleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStartVulScanRequest extends $tea.Model {
  types?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStartVulScanResponseBody extends $tea.Model {
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

export class ModifyStartVulScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyStartVulScanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyStartVulScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyRequest extends $tea.Model {
  customType?: string;
  cycleDays?: string;
  cycleStartTime?: string;
  id?: string;
  name?: string;
  riskCustomParams?: string;
  riskSubTypeName?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      customType: 'CustomType',
      cycleDays: 'CycleDays',
      cycleStartTime: 'CycleStartTime',
      id: 'Id',
      name: 'Name',
      riskCustomParams: 'RiskCustomParams',
      riskSubTypeName: 'RiskSubTypeName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customType: 'string',
      cycleDays: 'string',
      cycleStartTime: 'string',
      id: 'string',
      name: 'string',
      riskCustomParams: 'string',
      riskSubTypeName: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  result?: ModifyStrategyResponseBodyResult;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      result: ModifyStrategyResponseBodyResult,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyTargetRequest extends $tea.Model {
  config?: string;
  sourceIp?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      sourceIp: 'SourceIp',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sourceIp: 'string',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyTargetResponseBody extends $tea.Model {
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

export class ModifyStrategyTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyStrategyTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyStrategyTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagWithUuidRequest extends $tea.Model {
  machineTypes?: string;
  tagId?: string;
  tagList?: string;
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      tagId: 'TagId',
      tagList: 'TagList',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      tagId: 'string',
      tagList: 'string',
      uuidList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagWithUuidResponseBody extends $tea.Model {
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

export class ModifyTagWithUuidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyTagWithUuidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyTagWithUuidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUniBackupPolicyRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  fullPlan?: { [key: string]: any };
  incPlan?: { [key: string]: any };
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  resourceOwnerId?: number;
  retention?: number;
  sourceIp?: string;
  speedLimiter?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      fullPlan: 'FullPlan',
      incPlan: 'IncPlan',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      resourceOwnerId: 'ResourceOwnerId',
      retention: 'Retention',
      sourceIp: 'SourceIp',
      speedLimiter: 'SpeedLimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      fullPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      incPlan: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      resourceOwnerId: 'number',
      retention: 'number',
      sourceIp: 'string',
      speedLimiter: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUniBackupPolicyShrinkRequest extends $tea.Model {
  accountName?: string;
  accountPassword?: string;
  fullPlanShrink?: string;
  incPlanShrink?: string;
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  resourceOwnerId?: number;
  retention?: number;
  sourceIp?: string;
  speedLimiter?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      fullPlanShrink: 'FullPlan',
      incPlanShrink: 'IncPlan',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      resourceOwnerId: 'ResourceOwnerId',
      retention: 'Retention',
      sourceIp: 'SourceIp',
      speedLimiter: 'SpeedLimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      fullPlanShrink: 'string',
      incPlanShrink: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      resourceOwnerId: 'number',
      retention: 'number',
      sourceIp: 'string',
      speedLimiter: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUniBackupPolicyResponseBody extends $tea.Model {
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

export class ModifyUniBackupPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUniBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUniBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcHoneyPotRequest extends $tea.Model {
  honeyPotAction?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      honeyPotAction: 'HoneyPotAction',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeyPotAction: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpcHoneyPotResponseBody extends $tea.Model {
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

export class ModifyVpcHoneyPotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVpcHoneyPotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVpcHoneyPotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVulTargetConfigRequest extends $tea.Model {
  config?: string;
  sourceIp?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      sourceIp: 'SourceIp',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      sourceIp: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVulTargetConfigResponseBody extends $tea.Model {
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

export class ModifyVulTargetConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVulTargetConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVulTargetConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockCreateConfigRequest extends $tea.Model {
  defenceMode?: string;
  dir?: string;
  exclusiveDir?: string;
  exclusiveFile?: string;
  exclusiveFileType?: string;
  inclusiveFile?: string;
  inclusiveFileType?: string;
  lang?: string;
  localBackupDir?: string;
  mode?: string;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      inclusiveFile: 'InclusiveFile',
      inclusiveFileType: 'InclusiveFileType',
      lang: 'Lang',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenceMode: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFile: 'string',
      exclusiveFileType: 'string',
      inclusiveFile: 'string',
      inclusiveFileType: 'string',
      lang: 'string',
      localBackupDir: 'string',
      mode: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockCreateConfigResponseBody extends $tea.Model {
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

export class ModifyWebLockCreateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebLockCreateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebLockCreateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockDeleteConfigRequest extends $tea.Model {
  id?: number;
  lang?: string;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockDeleteConfigResponseBody extends $tea.Model {
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

export class ModifyWebLockDeleteConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebLockDeleteConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebLockDeleteConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockStartRequest extends $tea.Model {
  defenceMode?: string;
  dir?: string;
  exclusiveDir?: string;
  exclusiveFile?: string;
  exclusiveFileType?: string;
  inclusiveFileType?: string;
  localBackupDir?: string;
  mode?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      inclusiveFileType: 'InclusiveFileType',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenceMode: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFile: 'string',
      exclusiveFileType: 'string',
      inclusiveFileType: 'string',
      localBackupDir: 'string',
      mode: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockStartResponseBody extends $tea.Model {
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

export class ModifyWebLockStartResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebLockStartResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebLockStartResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockStatusRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  status?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockStatusResponseBody extends $tea.Model {
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

export class ModifyWebLockStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebLockStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebLockStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockUnbindRequest extends $tea.Model {
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockUnbindResponseBody extends $tea.Model {
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

export class ModifyWebLockUnbindResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebLockUnbindResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebLockUnbindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockUpdateConfigRequest extends $tea.Model {
  defenceMode?: string;
  dir?: string;
  exclusiveDir?: string;
  exclusiveFile?: string;
  exclusiveFileType?: string;
  id?: number;
  inclusiveFile?: string;
  inclusiveFileType?: string;
  lang?: string;
  localBackupDir?: string;
  mode?: string;
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      id: 'Id',
      inclusiveFile: 'InclusiveFile',
      inclusiveFileType: 'InclusiveFileType',
      lang: 'Lang',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenceMode: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFile: 'string',
      exclusiveFileType: 'string',
      id: 'number',
      inclusiveFile: 'string',
      inclusiveFileType: 'string',
      lang: 'string',
      localBackupDir: 'string',
      mode: 'string',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWebLockUpdateConfigResponseBody extends $tea.Model {
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

export class ModifyWebLockUpdateConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWebLockUpdateConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWebLockUpdateConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAgentClientInstallRequest extends $tea.Model {
  instanceIds?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAgentClientInstallResponseBody extends $tea.Model {
  aegisCelintInstallResposeList?: OperateAgentClientInstallResponseBodyAegisCelintInstallResposeList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aegisCelintInstallResposeList: 'AegisCelintInstallResposeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisCelintInstallResposeList: { 'type': 'array', 'itemType': OperateAgentClientInstallResponseBodyAegisCelintInstallResposeList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAgentClientInstallResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateAgentClientInstallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateAgentClientInstallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateSuspiciousTargetConfigRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  targetOperations?: string;
  targetType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      targetOperations: 'TargetOperations',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      targetOperations: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateSuspiciousTargetConfigResponseBody extends $tea.Model {
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

export class OperateSuspiciousTargetConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateSuspiciousTargetConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateSuspiciousTargetConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateVulsRequest extends $tea.Model {
  operateType?: string;
  type?: string;
  uuids?: string[];
  vulNames?: string[];
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      type: 'Type',
      uuids: 'Uuids',
      vulNames: 'VulNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      type: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      vulNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateVulsResponseBody extends $tea.Model {
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

export class OperateVulsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperateVulsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationSuspEventsRequest extends $tea.Model {
  from?: string;
  operation?: string;
  sourceIp?: string;
  subOperation?: string;
  suspiciousEventIds?: string;
  warnType?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      operation: 'Operation',
      sourceIp: 'SourceIp',
      subOperation: 'SubOperation',
      suspiciousEventIds: 'SuspiciousEventIds',
      warnType: 'WarnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      operation: 'string',
      sourceIp: 'string',
      subOperation: 'string',
      suspiciousEventIds: 'string',
      warnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationSuspEventsResponseBody extends $tea.Model {
  accessCode?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessCode: 'AccessCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationSuspEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OperationSuspEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperationSuspEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseClientRequest extends $tea.Model {
  uuids?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseClientResponseBody extends $tea.Model {
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

export class PauseClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PauseClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PauseClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDiscoverDatabaseRequest extends $tea.Model {
  createMark?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      createMark: 'CreateMark',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMark: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDiscoverDatabaseResponseBody extends $tea.Model {
  requestId?: string;
  taskProgress?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskProgress: 'TaskProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDiscoverDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDiscoverDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDiscoverDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPreCheckDatabaseRequest extends $tea.Model {
  instanceUuid?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  taskId?: string;
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceUuid: 'InstanceUuid',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUuid: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      taskId: 'string',
      uniRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPreCheckDatabaseResponseBody extends $tea.Model {
  completedTime?: number;
  createdTime?: number;
  description?: string;
  progress?: number;
  requestId?: string;
  result?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      completedTime: 'CompletedTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      progress: 'Progress',
      requestId: 'RequestId',
      result: 'Result',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedTime: 'number',
      createdTime: 'number',
      description: 'string',
      progress: 'number',
      requestId: 'string',
      result: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPreCheckDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPreCheckDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPreCheckDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAssetsRequest extends $tea.Model {
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAssetsResponseBody extends $tea.Model {
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

export class RefreshAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshContainerAssetsRequest extends $tea.Model {
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshContainerAssetsResponseBody extends $tea.Model {
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

export class RefreshContainerAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshContainerAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshContainerAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSuspEventQuaraFileRequest extends $tea.Model {
  from?: string;
  quaraFileId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      quaraFileId: 'QuaraFileId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      quaraFileId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSuspEventQuaraFileResponseBody extends $tea.Model {
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

export class RollbackSuspEventQuaraFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackSuspEventQuaraFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackSuspEventQuaraFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SasInstallCodeRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SasInstallCodeResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
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

export class SasInstallCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SasInstallCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SasInstallCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBaselineSecurityCheckRequest extends $tea.Model {
  itemIds?: number[];
  lang?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      itemIds: 'ItemIds',
      lang: 'Lang',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIds: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBaselineSecurityCheckResponseBody extends $tea.Model {
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

export class StartBaselineSecurityCheckResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartBaselineSecurityCheckResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartBaselineSecurityCheckResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiscoverDatabaseTaskRequest extends $tea.Model {
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiscoverDatabaseTaskResponseBody extends $tea.Model {
  createMark?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createMark: 'CreateMark',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMark: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiscoverDatabaseTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDiscoverDatabaseTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDiscoverDatabaseTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartImageVulScanRequest extends $tea.Model {
  imageDigest?: string;
  imageLayer?: string;
  imageTag?: string;
  lang?: string;
  registryTypes?: string[];
  repName?: string;
  repoId?: string;
  repoInstanceId?: string;
  repoNamespace?: string;
  repoRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      lang: 'Lang',
      registryTypes: 'RegistryTypes',
      repName: 'RepName',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      lang: 'string',
      registryTypes: { 'type': 'array', 'itemType': 'string' },
      repName: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartImageVulScanResponseBody extends $tea.Model {
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

export class StartImageVulScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartImageVulScanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartImageVulScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPreCheckDatabaseRequest extends $tea.Model {
  databaseType?: string;
  instanceUuid?: string;
  resourceOwnerId?: number;
  sourceIp?: string;
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseType: 'DatabaseType',
      instanceUuid: 'InstanceUuid',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseType: 'string',
      instanceUuid: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      uniRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPreCheckDatabaseResponseBody extends $tea.Model {
  createMark?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createMark: 'CreateMark',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMark: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPreCheckDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartPreCheckDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartPreCheckDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskRequest extends $tea.Model {
  targetInfo?: string;
  static names(): { [key: string]: string } {
    return {
      targetInfo: 'TargetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskResponseBody extends $tea.Model {
  requestId?: string;
  scanTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scanTaskId: 'ScanTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartVirusScanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartVirusScanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAegisRequest extends $tea.Model {
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAegisResponseBody extends $tea.Model {
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

export class UnbindAegisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindAegisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindAegisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientRequest extends $tea.Model {
  policyVersion?: string;
  uuid?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: 'string',
      uuid: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallBackupClientResponseBody extends $tea.Model {
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

export class UninstallBackupClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallBackupClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallBackupClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallUniBackupAgentRequest extends $tea.Model {
  policyId?: number;
  resourceOwnerId?: number;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallUniBackupAgentResponseBody extends $tea.Model {
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

export class UninstallUniBackupAgentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallUniBackupAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallUniBackupAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPolicyVersionRequest extends $tea.Model {
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeBackupPolicyVersionResponseBody extends $tea.Model {
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

export class UpgradeBackupPolicyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeBackupPolicyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeBackupPolicyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateHcWarningsRequest extends $tea.Model {
  riskIds?: string;
  sourceIp?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      riskIds: 'RiskIds',
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskIds: 'string',
      sourceIp: 'string',
      uuids: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateHcWarningsResponseBody extends $tea.Model {
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

export class ValidateHcWarningsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateHcWarningsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateHcWarningsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse extends $tea.Model {
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList extends $tea.Model {
  accesskeyId?: string;
  aliUserName?: string;
  asset?: string;
  dealTime?: string;
  dealType?: string;
  gmtModified?: number;
  id?: number;
  status?: string;
  type?: string;
  url?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      accesskeyId: 'AccesskeyId',
      aliUserName: 'AliUserName',
      asset: 'Asset',
      dealTime: 'DealTime',
      dealType: 'DealType',
      gmtModified: 'GmtModified',
      id: 'Id',
      status: 'Status',
      type: 'Type',
      url: 'Url',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesskeyId: 'string',
      aliUserName: 'string',
      asset: 'string',
      dealTime: 'string',
      dealType: 'string',
      gmtModified: 'number',
      id: 'number',
      status: 'string',
      type: 'string',
      url: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse extends $tea.Model {
  digest?: string;
  filePath?: string;
  firstScanTimestamp?: number;
  imageUuid?: string;
  latestScanTimestamp?: number;
  latestVerifyTimestamp?: number;
  layer?: string;
  level?: string;
  maliciousMd5?: string;
  namespace?: string;
  repoId?: string;
  repoInstanceId?: string;
  repoName?: string;
  repoRegionId?: string;
  status?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      filePath: 'FilePath',
      firstScanTimestamp: 'FirstScanTimestamp',
      imageUuid: 'ImageUuid',
      latestScanTimestamp: 'LatestScanTimestamp',
      latestVerifyTimestamp: 'LatestVerifyTimestamp',
      layer: 'Layer',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      namespace: 'Namespace',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoRegionId: 'RepoRegionId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      filePath: 'string',
      firstScanTimestamp: 'number',
      imageUuid: 'string',
      latestScanTimestamp: 'number',
      latestVerifyTimestamp: 'number',
      layer: 'string',
      level: 'string',
      maliciousMd5: 'string',
      namespace: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoRegionId: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue extends $tea.Model {
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBodyDataCauseDetails extends $tea.Model {
  key?: string;
  value?: DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBodyData extends $tea.Model {
  alarmEventAliasName?: string;
  alarmEventDesc?: string;
  alarmUniqueInfo?: string;
  appName?: string;
  canBeDealOnLine?: boolean;
  canCancelFault?: boolean;
  causeDetails?: DescribeAlarmEventDetailResponseBodyDataCauseDetails[];
  containHwMode?: boolean;
  containerId?: string;
  containerImageId?: string;
  containerImageName?: string;
  dataSource?: string;
  endTime?: number;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  k8sClusterId?: string;
  k8sClusterName?: string;
  k8sNamespace?: string;
  k8sNodeId?: string;
  k8sNodeName?: string;
  k8sPodName?: string;
  level?: string;
  solution?: string;
  startTime?: number;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventAliasName: 'AlarmEventAliasName',
      alarmEventDesc: 'AlarmEventDesc',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      appName: 'AppName',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      causeDetails: 'CauseDetails',
      containHwMode: 'ContainHwMode',
      containerId: 'ContainerId',
      containerImageId: 'ContainerImageId',
      containerImageName: 'ContainerImageName',
      dataSource: 'DataSource',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      k8sClusterId: 'K8sClusterId',
      k8sClusterName: 'K8sClusterName',
      k8sNamespace: 'K8sNamespace',
      k8sNodeId: 'K8sNodeId',
      k8sNodeName: 'K8sNodeName',
      k8sPodName: 'K8sPodName',
      level: 'Level',
      solution: 'Solution',
      startTime: 'StartTime',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventAliasName: 'string',
      alarmEventDesc: 'string',
      alarmUniqueInfo: 'string',
      appName: 'string',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      causeDetails: { 'type': 'array', 'itemType': DescribeAlarmEventDetailResponseBodyDataCauseDetails },
      containHwMode: 'boolean',
      containerId: 'string',
      containerImageId: 'string',
      containerImageName: 'string',
      dataSource: 'string',
      endTime: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      k8sClusterId: 'string',
      k8sClusterName: 'string',
      k8sNamespace: 'string',
      k8sNodeId: 'string',
      k8sNodeName: 'string',
      k8sPodName: 'string',
      level: 'string',
      solution: 'string',
      startTime: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponseBodySuspEvents extends $tea.Model {
  alarmEventName?: string;
  alarmEventNameOriginal?: string;
  alarmEventType?: string;
  alarmUniqueInfo?: string;
  canBeDealOnLine?: boolean;
  canCancelFault?: boolean;
  dataSource?: string;
  dealed?: boolean;
  description?: string;
  endTime?: number;
  gmtModified?: number;
  hasTraceInfo?: boolean;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  level?: string;
  operateErrorCode?: string;
  operateTime?: number;
  saleVersion?: string;
  securityEventIds?: string;
  solution?: string;
  stages?: string;
  startTime?: number;
  suspiciousEventCount?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmEventNameOriginal: 'AlarmEventNameOriginal',
      alarmEventType: 'AlarmEventType',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      dataSource: 'DataSource',
      dealed: 'Dealed',
      description: 'Description',
      endTime: 'EndTime',
      gmtModified: 'GmtModified',
      hasTraceInfo: 'HasTraceInfo',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      level: 'Level',
      operateErrorCode: 'OperateErrorCode',
      operateTime: 'OperateTime',
      saleVersion: 'SaleVersion',
      securityEventIds: 'SecurityEventIds',
      solution: 'Solution',
      stages: 'Stages',
      startTime: 'StartTime',
      suspiciousEventCount: 'SuspiciousEventCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmEventNameOriginal: 'string',
      alarmEventType: 'string',
      alarmUniqueInfo: 'string',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      dataSource: 'string',
      dealed: 'boolean',
      description: 'string',
      endTime: 'number',
      gmtModified: 'number',
      hasTraceInfo: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      level: 'string',
      operateErrorCode: 'string',
      operateTime: 'number',
      saleVersion: 'string',
      securityEventIds: 'string',
      solution: 'string',
      stages: 'string',
      startTime: 'number',
      suspiciousEventCount: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEntityResponseBodyEntityList extends $tea.Model {
  groupId?: number;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  os?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      os: 'Os',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      os: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllGroupsResponseBodyGroups extends $tea.Model {
  groupFlag?: number;
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupFlag: 'GroupFlag',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupFlag: 'number',
      groupId: 'number',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRegionsStatisticsResponseBodyData extends $tea.Model {
  account?: number;
  health?: number;
  newSuspicious?: number;
  suspicious?: number;
  trojan?: number;
  vul?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      health: 'Health',
      newSuspicious: 'NewSuspicious',
      suspicious: 'Suspicious',
      trojan: 'Trojan',
      vul: 'Vul',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      health: 'number',
      newSuspicious: 'number',
      suspicious: 'number',
      trojan: 'number',
      vul: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBodyRules extends $tea.Model {
  defaultRule?: boolean;
  enableSmartRule?: boolean;
  failCount?: number;
  forbiddenTime?: number;
  id?: number;
  machineCount?: number;
  name?: string;
  span?: number;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'DefaultRule',
      enableSmartRule: 'EnableSmartRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      id: 'Id',
      machineCount: 'MachineCount',
      name: 'Name',
      span: 'Span',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'boolean',
      enableSmartRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      id: 'number',
      machineCount: 'number',
      name: 'string',
      span: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidResponseBodyAssetDetail extends $tea.Model {
  assetType?: string;
  authModifyTime?: number;
  authVersion?: number;
  bind?: boolean;
  clientStatus?: string;
  cpu?: number;
  cpuInfo?: string;
  createTime?: number;
  diskInfoList?: string[];
  groupTrace?: string;
  hostName?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  ipList?: string[];
  kernel?: string;
  macList?: string[];
  mem?: number;
  os?: string;
  osDetail?: string;
  osName?: string;
  region?: string;
  regionId?: string;
  regionName?: string;
  sysInfo?: string;
  tag?: string;
  uuid?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      authModifyTime: 'AuthModifyTime',
      authVersion: 'AuthVersion',
      bind: 'Bind',
      clientStatus: 'ClientStatus',
      cpu: 'Cpu',
      cpuInfo: 'CpuInfo',
      createTime: 'CreateTime',
      diskInfoList: 'DiskInfoList',
      groupTrace: 'GroupTrace',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      ipList: 'IpList',
      kernel: 'Kernel',
      macList: 'MacList',
      mem: 'Mem',
      os: 'Os',
      osDetail: 'OsDetail',
      osName: 'OsName',
      region: 'Region',
      regionId: 'RegionId',
      regionName: 'RegionName',
      sysInfo: 'SysInfo',
      tag: 'Tag',
      uuid: 'Uuid',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      authModifyTime: 'number',
      authVersion: 'number',
      bind: 'boolean',
      clientStatus: 'string',
      cpu: 'number',
      cpuInfo: 'string',
      createTime: 'number',
      diskInfoList: { 'type': 'array', 'itemType': 'string' },
      groupTrace: 'string',
      hostName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      kernel: 'string',
      macList: { 'type': 'array', 'itemType': 'string' },
      mem: 'number',
      os: 'string',
      osDetail: 'string',
      osName: 'string',
      region: 'string',
      regionId: 'string',
      regionName: 'string',
      sysInfo: 'string',
      tag: 'string',
      uuid: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidsResponseBodyAssetList extends $tea.Model {
  assetType?: string;
  clientStatus?: string;
  flag?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  os?: string;
  osName?: string;
  region?: string;
  regionId?: string;
  regionName?: string;
  uuid?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      clientStatus: 'ClientStatus',
      flag: 'Flag',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      os: 'Os',
      osName: 'OsName',
      region: 'Region',
      regionId: 'RegionId',
      regionName: 'RegionName',
      uuid: 'Uuid',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      clientStatus: 'string',
      flag: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      os: 'string',
      osName: 'string',
      region: 'string',
      regionId: 'string',
      regionName: 'string',
      uuid: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetSummaryResponseBodyAssetsSummary extends $tea.Model {
  totalCoreNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalCoreNum: 'TotalCoreNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCoreNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBodyClients extends $tea.Model {
  clientId?: string;
  clientStatus?: string;
  instanceId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientStatus: 'ClientStatus',
      instanceId: 'InstanceId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientStatus: 'string',
      instanceId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponseBodyBackupDirs extends $tea.Model {
  backupJobId?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobId: 'BackupJobId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobId: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyBackupFiles extends $tea.Model {
  name?: string;
  size?: number;
  subtree?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
      subtree: 'Subtree',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
      subtree: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList extends $tea.Model {
  errorCode?: string;
  errorFile?: string;
  errorFileUrl?: string;
  errorMsg?: string;
  errorStatus?: string;
  errorTime?: number;
  errorType?: string;
  key?: string;
  path?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorFile: 'ErrorFile',
      errorFileUrl: 'ErrorFileUrl',
      errorMsg: 'ErrorMsg',
      errorStatus: 'ErrorStatus',
      errorTime: 'ErrorTime',
      errorType: 'ErrorType',
      key: 'Key',
      path: 'Path',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorFile: 'string',
      errorFileUrl: 'string',
      errorMsg: 'string',
      errorStatus: 'string',
      errorTime: 'number',
      errorType: 'string',
      key: 'string',
      path: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBodyBackupMachineStatus extends $tea.Model {
  clientId?: string;
  clientStatus?: string;
  clientVersion?: string;
  errorCode?: string;
  errorList?: DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList[];
  instanceId?: string;
  regionId?: string;
  requestId?: string;
  savedBackupCount?: number;
  status?: string;
  uuid?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientStatus: 'ClientStatus',
      clientVersion: 'ClientVersion',
      errorCode: 'ErrorCode',
      errorList: 'ErrorList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      savedBackupCount: 'SavedBackupCount',
      status: 'Status',
      uuid: 'Uuid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientStatus: 'string',
      clientVersion: 'string',
      errorCode: 'string',
      errorList: { 'type': 'array', 'itemType': DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList },
      instanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      savedBackupCount: 'number',
      status: 'string',
      uuid: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBodyPolicies extends $tea.Model {
  clientErrorCount?: number;
  clientErrorUuidList?: string[];
  clientStatus?: string;
  healthClientCount?: number;
  healthClientUuidList?: string[];
  id?: number;
  name?: string;
  policy?: string;
  policyRegionId?: string;
  policyVersion?: string;
  remarkedUuidList?: string[];
  serviceErrorCount?: number;
  serviceErrorUuidList?: string[];
  status?: string;
  upgradeStatus?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientErrorCount: 'ClientErrorCount',
      clientErrorUuidList: 'ClientErrorUuidList',
      clientStatus: 'ClientStatus',
      healthClientCount: 'HealthClientCount',
      healthClientUuidList: 'HealthClientUuidList',
      id: 'Id',
      name: 'Name',
      policy: 'Policy',
      policyRegionId: 'PolicyRegionId',
      policyVersion: 'PolicyVersion',
      remarkedUuidList: 'RemarkedUuidList',
      serviceErrorCount: 'ServiceErrorCount',
      serviceErrorUuidList: 'ServiceErrorUuidList',
      status: 'Status',
      upgradeStatus: 'UpgradeStatus',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientErrorCount: 'number',
      clientErrorUuidList: { 'type': 'array', 'itemType': 'string' },
      clientStatus: 'string',
      healthClientCount: 'number',
      healthClientUuidList: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      policy: 'string',
      policyRegionId: 'string',
      policyVersion: 'string',
      remarkedUuidList: { 'type': 'array', 'itemType': 'string' },
      serviceErrorCount: 'number',
      serviceErrorUuidList: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      upgradeStatus: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyBackupPolicyDetail extends $tea.Model {
  clientStatus?: string;
  id?: number;
  name?: string;
  policy?: string;
  policyVersion?: string;
  regionId?: string;
  status?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      id: 'Id',
      name: 'Name',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
      regionId: 'RegionId',
      status: 'Status',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: 'string',
      id: 'number',
      name: 'string',
      policy: 'string',
      policyVersion: 'string',
      regionId: 'string',
      status: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRestoreCountResponseBodyBackupRestoreCount extends $tea.Model {
  recovering?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      recovering: 'Recovering',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recovering: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBruteForceSummaryResponseBodyBruteForceSummary extends $tea.Model {
  allStrategyCount?: number;
  effectiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      allStrategyCount: 'AllStrategyCount',
      effectiveCount: 'EffectiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allStrategyCount: 'number',
      effectiveCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryResponseBodyWarningSummarys extends $tea.Model {
  checkCount?: number;
  highWarningCount?: number;
  lastFoundTime?: string;
  level?: string;
  lowWarningCount?: number;
  mediumWarningCount?: number;
  riskId?: number;
  riskName?: string;
  subTypeAlias?: string;
  typeAlias?: string;
  warningMachineCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkCount: 'CheckCount',
      highWarningCount: 'HighWarningCount',
      lastFoundTime: 'LastFoundTime',
      level: 'Level',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
      riskId: 'RiskId',
      riskName: 'RiskName',
      subTypeAlias: 'SubTypeAlias',
      typeAlias: 'TypeAlias',
      warningMachineCount: 'WarningMachineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCount: 'number',
      highWarningCount: 'number',
      lastFoundTime: 'string',
      level: 'string',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
      riskId: 'number',
      riskName: 'string',
      subTypeAlias: 'string',
      typeAlias: 'string',
      warningMachineCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningsResponseBodyCheckWarnings extends $tea.Model {
  checkId?: number;
  checkWarningId?: number;
  item?: string;
  level?: string;
  status?: number;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkWarningId: 'CheckWarningId',
      item: 'Item',
      level: 'Level',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkWarningId: 'number',
      item: 'string',
      level: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBodyInstances extends $tea.Model {
  alarmStatus?: string;
  assetType?: string;
  authModifyTime?: number;
  authVersion?: number;
  authVersionName?: string;
  bind?: boolean;
  clientStatus?: string;
  clusterId?: string;
  clusterName?: string;
  cores?: number;
  cpuInfo?: string;
  createdTime?: number;
  exposedStatus?: number;
  flag?: number;
  groupId?: string;
  groupTrace?: string;
  hcStatus?: string;
  healthCheckCount?: number;
  importance?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  ipListString?: string;
  kernel?: string;
  lastLoginTimestamp?: number;
  macListString?: string;
  mem?: number;
  os?: string;
  osName?: string;
  podCount?: number;
  region?: string;
  regionId?: string;
  regionName?: string;
  riskCount?: string;
  riskStatus?: string;
  safeEventCount?: number;
  status?: string;
  tag?: string;
  tagId?: string;
  uuid?: string;
  vendor?: number;
  vendorName?: string;
  vpcInstanceId?: string;
  vulCount?: number;
  vulStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alarmStatus: 'AlarmStatus',
      assetType: 'AssetType',
      authModifyTime: 'AuthModifyTime',
      authVersion: 'AuthVersion',
      authVersionName: 'AuthVersionName',
      bind: 'Bind',
      clientStatus: 'ClientStatus',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      cores: 'Cores',
      cpuInfo: 'CpuInfo',
      createdTime: 'CreatedTime',
      exposedStatus: 'ExposedStatus',
      flag: 'Flag',
      groupId: 'GroupId',
      groupTrace: 'GroupTrace',
      hcStatus: 'HcStatus',
      healthCheckCount: 'HealthCheckCount',
      importance: 'Importance',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      ipListString: 'IpListString',
      kernel: 'Kernel',
      lastLoginTimestamp: 'LastLoginTimestamp',
      macListString: 'MacListString',
      mem: 'Mem',
      os: 'Os',
      osName: 'OsName',
      podCount: 'PodCount',
      region: 'Region',
      regionId: 'RegionId',
      regionName: 'RegionName',
      riskCount: 'RiskCount',
      riskStatus: 'RiskStatus',
      safeEventCount: 'SafeEventCount',
      status: 'Status',
      tag: 'Tag',
      tagId: 'TagId',
      uuid: 'Uuid',
      vendor: 'Vendor',
      vendorName: 'VendorName',
      vpcInstanceId: 'VpcInstanceId',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStatus: 'string',
      assetType: 'string',
      authModifyTime: 'number',
      authVersion: 'number',
      authVersionName: 'string',
      bind: 'boolean',
      clientStatus: 'string',
      clusterId: 'string',
      clusterName: 'string',
      cores: 'number',
      cpuInfo: 'string',
      createdTime: 'number',
      exposedStatus: 'number',
      flag: 'number',
      groupId: 'string',
      groupTrace: 'string',
      hcStatus: 'string',
      healthCheckCount: 'number',
      importance: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      ipListString: 'string',
      kernel: 'string',
      lastLoginTimestamp: 'number',
      macListString: 'string',
      mem: 'number',
      os: 'string',
      osName: 'string',
      podCount: 'number',
      region: 'string',
      regionId: 'string',
      regionName: 'string',
      riskCount: 'string',
      riskStatus: 'string',
      safeEventCount: 'number',
      status: 'string',
      tag: 'string',
      tagId: 'string',
      uuid: 'string',
      vendor: 'number',
      vendorName: 'string',
      vpcInstanceId: 'string',
      vulCount: 'number',
      vulStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudProductFieldStatisticsResponseBodyGroupedFields extends $tea.Model {
  categoryCount?: string;
  instanceCount?: number;
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCount: 'CategoryCount',
      instanceCount: 'InstanceCount',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCount: 'string',
      instanceCount: 'number',
      riskInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerStatisticsResponseBodyData extends $tea.Model {
  remindAlarmCount?: number;
  seriousAlarmCount?: number;
  suspiciousAlarmCount?: number;
  totalAlarmCount?: number;
  totalNode?: number;
  hasRiskNode?: number;
  static names(): { [key: string]: string } {
    return {
      remindAlarmCount: 'RemindAlarmCount',
      seriousAlarmCount: 'SeriousAlarmCount',
      suspiciousAlarmCount: 'SuspiciousAlarmCount',
      totalAlarmCount: 'TotalAlarmCount',
      totalNode: 'TotalNode',
      hasRiskNode: 'hasRiskNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindAlarmCount: 'number',
      seriousAlarmCount: 'number',
      suspiciousAlarmCount: 'number',
      totalAlarmCount: 'number',
      totalNode: 'number',
      hasRiskNode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaResponseBodyCriteriaList extends $tea.Model {
  name?: string;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogMessagesResponseBodyDialogList extends $tea.Model {
  dialogKey?: string;
  ID?: number;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      dialogKey: 'DialogKey',
      ID: 'ID',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogKey: 'string',
      ID: 'number',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponseBodyActionList extends $tea.Model {
  actionName?: string;
  aliUid?: number;
  configList?: string;
  dingTalkLang?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupIdList?: string;
  id?: number;
  intervalTime?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      aliUid: 'AliUid',
      configList: 'ConfigList',
      dingTalkLang: 'DingTalkLang',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupIdList: 'GroupIdList',
      id: 'Id',
      intervalTime: 'IntervalTime',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      aliUid: 'number',
      configList: 'string',
      dingTalkLang: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupIdList: 'string',
      id: 'number',
      intervalTime: 'number',
      status: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyDomainDetailItems extends $tea.Model {
  assetType?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBodyDomainListResponseList extends $tea.Model {
  domain?: string;
  ipList?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemResponseBodyGroupedVulItems extends $tea.Model {
  aliasName?: string;
  gmtLastCheck?: number;
  gmtPublish?: number;
  name?: string;
  pendingCount?: number;
  progress?: number;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      gmtLastCheck: 'GmtLastCheck',
      gmtPublish: 'GmtPublish',
      name: 'Name',
      pendingCount: 'PendingCount',
      progress: 'Progress',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      gmtLastCheck: 'number',
      gmtPublish: 'number',
      name: 'string',
      pendingCount: 'number',
      progress: 'number',
      status: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBodyExcludePaths extends $tea.Model {
  os?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      os: 'Os',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      os: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceCriteriaResponseBodyCriteriaList extends $tea.Model {
  name?: string;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList extends $tea.Model {
  aliasName?: string;
  name?: string;
  necessity?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
      necessity: 'Necessity',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
      necessity: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList extends $tea.Model {
  aliasName?: string;
  name?: string;
  necessity?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
      necessity: 'Necessity',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
      necessity: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChains extends $tea.Model {
  allVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList[];
  exposureComponent?: string;
  exposureIp?: string;
  exposurePort?: string;
  exposureType?: string;
  exposureTypeId?: string;
  groupNo?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  realVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList[];
  regionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      allVulList: 'AllVulList',
      exposureComponent: 'ExposureComponent',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureType: 'ExposureType',
      exposureTypeId: 'ExposureTypeId',
      groupNo: 'GroupNo',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      realVulList: 'RealVulList',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList },
      exposureComponent: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      exposureType: 'string',
      exposureTypeId: 'string',
      groupNo: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      realVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList },
      regionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBodyExposedInstances extends $tea.Model {
  asapVulCount?: number;
  exploitHealthCount?: number;
  exposureComponent?: string;
  exposureIp?: string;
  exposurePort?: string;
  exposureType?: string;
  exposureTypeId?: string;
  groupId?: number;
  groupName?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  laterVulCount?: number;
  nntfVulCount?: number;
  regionId?: string;
  totalVulCount?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      asapVulCount: 'AsapVulCount',
      exploitHealthCount: 'ExploitHealthCount',
      exposureComponent: 'ExposureComponent',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureType: 'ExposureType',
      exposureTypeId: 'ExposureTypeId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      laterVulCount: 'LaterVulCount',
      nntfVulCount: 'NntfVulCount',
      regionId: 'RegionId',
      totalVulCount: 'TotalVulCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapVulCount: 'number',
      exploitHealthCount: 'number',
      exposureComponent: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      exposureType: 'string',
      exposureTypeId: 'string',
      groupId: 'number',
      groupName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      laterVulCount: 'number',
      nntfVulCount: 'number',
      regionId: 'string',
      totalVulCount: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBodyStatisticsDetails extends $tea.Model {
  exposedCount?: number;
  exposureComponent?: string;
  exposureIp?: string;
  exposurePort?: string;
  exposureType?: string;
  exposureTypeId?: string;
  exposureTypeInstanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      exposedCount: 'ExposedCount',
      exposureComponent: 'ExposureComponent',
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureType: 'ExposureType',
      exposureTypeId: 'ExposureTypeId',
      exposureTypeInstanceName: 'ExposureTypeInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedCount: 'number',
      exposureComponent: 'string',
      exposureIp: 'string',
      exposurePort: 'string',
      exposureType: 'string',
      exposureTypeId: 'string',
      exposureTypeInstanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsResponseBodyGroupedFields extends $tea.Model {
  aliYunInstanceCount?: number;
  exposedInstanceCount?: number;
  generalAssetCount?: number;
  groupCount?: number;
  idcInstanceCount?: number;
  importantAssetCount?: number;
  instanceCount?: number;
  instanceSyncTaskCount?: number;
  newInstanceCount?: number;
  notRunningStatusCount?: number;
  offlineInstanceCount?: number;
  pauseInstanceCount?: number;
  regionCount?: number;
  riskInstanceCount?: number;
  tencentInstanceCount?: number;
  testAssetCount?: number;
  unprotectedInstanceCount?: number;
  vpcCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliYunInstanceCount: 'AliYunInstanceCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      generalAssetCount: 'GeneralAssetCount',
      groupCount: 'GroupCount',
      idcInstanceCount: 'IdcInstanceCount',
      importantAssetCount: 'ImportantAssetCount',
      instanceCount: 'InstanceCount',
      instanceSyncTaskCount: 'InstanceSyncTaskCount',
      newInstanceCount: 'NewInstanceCount',
      notRunningStatusCount: 'NotRunningStatusCount',
      offlineInstanceCount: 'OfflineInstanceCount',
      pauseInstanceCount: 'PauseInstanceCount',
      regionCount: 'RegionCount',
      riskInstanceCount: 'RiskInstanceCount',
      tencentInstanceCount: 'TencentInstanceCount',
      testAssetCount: 'TestAssetCount',
      unprotectedInstanceCount: 'UnprotectedInstanceCount',
      vpcCount: 'VpcCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliYunInstanceCount: 'number',
      exposedInstanceCount: 'number',
      generalAssetCount: 'number',
      groupCount: 'number',
      idcInstanceCount: 'number',
      importantAssetCount: 'number',
      instanceCount: 'number',
      instanceSyncTaskCount: 'number',
      newInstanceCount: 'number',
      notRunningStatusCount: 'number',
      offlineInstanceCount: 'number',
      pauseInstanceCount: 'number',
      regionCount: 'number',
      riskInstanceCount: 'number',
      tencentInstanceCount: 'number',
      testAssetCount: 'number',
      unprotectedInstanceCount: 'number',
      vpcCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList extends $tea.Model {
  aliasName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchList extends $tea.Model {
  patchList?: DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      patchList: 'PatchList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList },
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList extends $tea.Model {
  endId?: string;
  endType?: string;
  id?: number;
  name?: string;
  startId?: string;
  startType?: string;
  time?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endId: 'EndId',
      endType: 'EndType',
      id: 'Id',
      name: 'Name',
      startId: 'StartId',
      startType: 'StartType',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endId: 'string',
      endType: 'string',
      id: 'number',
      name: 'string',
      startId: 'string',
      startType: 'string',
      time: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList extends $tea.Model {
  displayColor?: string;
  displayIcon?: string;
  displayOrder?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayColor: 'DisplayColor',
      displayIcon: 'DisplayIcon',
      displayOrder: 'DisplayOrder',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayColor: 'string',
      displayIcon: 'string',
      displayOrder: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList extends $tea.Model {
  directed?: number;
  id?: string;
  name?: string;
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      directed: 'Directed',
      id: 'Id',
      name: 'Name',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directed: 'number',
      id: 'string',
      name: 'string',
      showType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList extends $tea.Model {
  count?: number;
  hasMore?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      hasMore: 'HasMore',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      hasMore: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataVertexList extends $tea.Model {
  aliuid?: string;
  id?: string;
  name?: string;
  neighborList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList[];
  position?: string;
  positionId?: string;
  properties?: string;
  time?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      id: 'Id',
      name: 'Name',
      neighborList: 'NeighborList',
      position: 'Position',
      positionId: 'PositionId',
      properties: 'Properties',
      time: 'Time',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      id: 'string',
      name: 'string',
      neighborList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList },
      position: 'string',
      positionId: 'string',
      properties: 'string',
      time: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyData extends $tea.Model {
  edgeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList[];
  entityTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList[];
  relationTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList[];
  vertexList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexList[];
  static names(): { [key: string]: string } {
    return {
      edgeList: 'EdgeList',
      entityTypeList: 'EntityTypeList',
      relationTypeList: 'RelationTypeList',
      vertexList: 'VertexList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList },
      entityTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList },
      relationTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList },
      vertexList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList extends $tea.Model {
  alarmCount?: number;
  appName?: string;
  clusterId?: string;
  clusterName?: string;
  clusterType?: string;
  createTime?: number;
  custerState?: string;
  hostIp?: string;
  instanceCount?: number;
  instanceId?: string;
  namespace?: string;
  pod?: string;
  podIp?: string;
  regionId?: string;
  riskInstanceCount?: number;
  riskLevel?: string;
  riskStatus?: string;
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      createTime: 'CreateTime',
      custerState: 'CusterState',
      hostIp: 'HostIp',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      pod: 'Pod',
      podIp: 'PodIp',
      regionId: 'RegionId',
      riskInstanceCount: 'RiskInstanceCount',
      riskLevel: 'RiskLevel',
      riskStatus: 'RiskStatus',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'string',
      createTime: 'number',
      custerState: 'string',
      hostIp: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      namespace: 'string',
      pod: 'string',
      podIp: 'string',
      regionId: 'string',
      riskInstanceCount: 'number',
      riskLevel: 'string',
      riskStatus: 'string',
      vulCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBodyInstances extends $tea.Model {
  asapVulInstanceCount?: number;
  fieldAliasName?: string;
  groupFlag?: number;
  instanceCount?: string;
  riskInstanceCount?: string;
  unProtectedInstanceCount?: string;
  static names(): { [key: string]: string } {
    return {
      asapVulInstanceCount: 'AsapVulInstanceCount',
      fieldAliasName: 'FieldAliasName',
      groupFlag: 'GroupFlag',
      instanceCount: 'InstanceCount',
      riskInstanceCount: 'RiskInstanceCount',
      unProtectedInstanceCount: 'UnProtectedInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapVulInstanceCount: 'number',
      fieldAliasName: 'string',
      groupFlag: 'number',
      instanceCount: 'string',
      riskInstanceCount: 'string',
      unProtectedInstanceCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse extends $tea.Model {
  firstScanTimestamp?: number;
  imageCount?: number;
  latestScanTimestamp?: number;
  level?: string;
  maliciousMd5?: string;
  maliciousName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      firstScanTimestamp: 'FirstScanTimestamp',
      imageCount: 'ImageCount',
      latestScanTimestamp: 'LatestScanTimestamp',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      maliciousName: 'MaliciousName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstScanTimestamp: 'number',
      imageCount: 'number',
      latestScanTimestamp: 'number',
      level: 'string',
      maliciousMd5: 'string',
      maliciousName: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsResponseBodyGroupedFileds extends $tea.Model {
  count?: string;
  name?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      name: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBodyGroupedVulItems extends $tea.Model {
  aliasName?: string;
  asapCount?: number;
  gmtLast?: number;
  handledCount?: number;
  laterCount?: number;
  name?: string;
  nntfCount?: number;
  tags?: string;
  totalFixCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      gmtLast: 'GmtLast',
      handledCount: 'HandledCount',
      laterCount: 'LaterCount',
      name: 'Name',
      nntfCount: 'NntfCount',
      tags: 'Tags',
      totalFixCount: 'TotalFixCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      gmtLast: 'number',
      handledCount: 'number',
      laterCount: 'number',
      name: 'string',
      nntfCount: 'number',
      tags: 'string',
      totalFixCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse extends $tea.Model {
  count?: number;
  instanceId?: string;
  instanceName?: string;
  type?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      type: 'Type',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceId: 'string',
      instanceName: 'string',
      type: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskResponseBodyBuildTasks extends $tea.Model {
  buildTaskId?: string;
  finishTime?: string;
  fixTime?: string;
  newTag?: string;
  newUuid?: string;
  oldTag?: string;
  oldUuid?: string;
  regionId?: string;
  repoName?: string;
  repoNamespace?: string;
  status?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      finishTime: 'FinishTime',
      fixTime: 'FixTime',
      newTag: 'NewTag',
      newUuid: 'NewUuid',
      oldTag: 'OldTag',
      oldUuid: 'OldUuid',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      finishTime: 'string',
      fixTime: 'string',
      newTag: 'string',
      newUuid: 'string',
      oldTag: 'string',
      oldUuid: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      status: 'number',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponseBodyGroupedVulItems extends $tea.Model {
  aliasName?: string;
  asapCount?: number;
  gmtLast?: number;
  lastScanTime?: number;
  laterCount?: number;
  name?: string;
  nntfCount?: number;
  status?: number;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      gmtLast: 'GmtLast',
      lastScanTime: 'LastScanTime',
      laterCount: 'LaterCount',
      name: 'Name',
      nntfCount: 'NntfCount',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      gmtLast: 'number',
      lastScanTime: 'number',
      laterCount: 'number',
      name: 'string',
      nntfCount: 'number',
      status: 'number',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstancesResponseBodyImageInstanceList extends $tea.Model {
  alarmCount?: number;
  alarmStatus?: string;
  digest?: string;
  endpoints?: string;
  hcCount?: number;
  hcStatus?: string;
  imageCreate?: string;
  imageId?: string;
  imageSize?: string;
  imageUpdate?: string;
  instanceId?: string;
  regionId?: string;
  registryType?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoType?: string;
  riskStatus?: string;
  scaProgress?: number;
  scaResult?: string;
  scaStatus?: string;
  status?: string;
  tag?: string;
  uuid?: string;
  vulCount?: number;
  vulStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      alarmStatus: 'AlarmStatus',
      digest: 'Digest',
      endpoints: 'Endpoints',
      hcCount: 'HcCount',
      hcStatus: 'HcStatus',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      registryType: 'RegistryType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoType: 'RepoType',
      riskStatus: 'RiskStatus',
      scaProgress: 'ScaProgress',
      scaResult: 'ScaResult',
      scaStatus: 'ScaStatus',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      alarmStatus: 'string',
      digest: 'string',
      endpoints: 'string',
      hcCount: 'number',
      hcStatus: 'string',
      imageCreate: 'string',
      imageId: 'string',
      imageSize: 'string',
      imageUpdate: 'string',
      instanceId: 'string',
      regionId: 'string',
      registryType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoType: 'string',
      riskStatus: 'string',
      scaProgress: 'number',
      scaResult: 'string',
      scaStatus: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
      vulCount: 'number',
      vulStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstancesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageScanAuthCountResponseBodyImageScan extends $tea.Model {
  imageScanCapacity?: number;
  instanceId?: string;
  scanCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
      scanCount: 'ScanCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanCapacity: 'number',
      instanceId: 'string',
      scanCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  fullVersion?: string;
  layer?: string;
  matchDetail?: string;
  matchList?: string;
  name?: string;
  path?: string;
  updateCmd?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      fullVersion: 'FullVersion',
      layer: 'Layer',
      matchDetail: 'MatchDetail',
      matchList: 'MatchList',
      name: 'Name',
      path: 'Path',
      updateCmd: 'UpdateCmd',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullVersion: 'string',
      layer: 'string',
      matchDetail: 'string',
      matchList: 'string',
      name: 'string',
      path: 'string',
      updateCmd: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecordsExtendContentJson extends $tea.Model {
  os?: string;
  osRelease?: string;
  rpmEntityList?: DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  static names(): { [key: string]: string } {
    return {
      os: 'Os',
      osRelease: 'OsRelease',
      rpmEntityList: 'RpmEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      os: 'string',
      osRelease: 'string',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecords extends $tea.Model {
  aliasName?: string;
  canUpdate?: boolean;
  extendContentJson?: DescribeImageVulListResponseBodyVulRecordsExtendContentJson;
  firstTs?: number;
  imageDigest?: string;
  lastTs?: number;
  layers?: string[];
  modifyTs?: number;
  name?: string;
  necessity?: string;
  primaryId?: number;
  related?: string;
  repoName?: string;
  repoNamespace?: string;
  status?: number;
  tag?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      canUpdate: 'CanUpdate',
      extendContentJson: 'ExtendContentJson',
      firstTs: 'FirstTs',
      imageDigest: 'ImageDigest',
      lastTs: 'LastTs',
      layers: 'Layers',
      modifyTs: 'ModifyTs',
      name: 'Name',
      necessity: 'Necessity',
      primaryId: 'PrimaryId',
      related: 'Related',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      status: 'Status',
      tag: 'Tag',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      canUpdate: 'boolean',
      extendContentJson: DescribeImageVulListResponseBodyVulRecordsExtendContentJson,
      firstTs: 'number',
      imageDigest: 'string',
      lastTs: 'number',
      layers: { 'type': 'array', 'itemType': 'string' },
      modifyTs: 'number',
      name: 'string',
      necessity: 'string',
      primaryId: 'number',
      related: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      status: 'number',
      tag: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCodesResponseBodyInstallCodes extends $tea.Model {
  captchaCode?: string;
  expiredDate?: number;
  groupId?: number;
  groupName?: string;
  onlyImage?: boolean;
  os?: string;
  tag?: string;
  vendor?: number;
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      captchaCode: 'CaptchaCode',
      expiredDate: 'ExpiredDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      onlyImage: 'OnlyImage',
      os: 'Os',
      tag: 'Tag',
      vendor: 'Vendor',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaCode: 'string',
      expiredDate: 'number',
      groupId: 'number',
      groupName: 'string',
      onlyImage: 'boolean',
      os: 'string',
      tag: 'string',
      vendor: 'number',
      vendorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBodyRules extends $tea.Model {
  id?: number;
  name?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBodyData extends $tea.Model {
  account?: number;
  appNum?: number;
  cmsNum?: number;
  cveNum?: number;
  emgNum?: number;
  health?: number;
  scaNum?: number;
  suspicious?: number;
  sysNum?: number;
  trojan?: number;
  uuid?: string;
  vul?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appNum: 'AppNum',
      cmsNum: 'CmsNum',
      cveNum: 'CveNum',
      emgNum: 'EmgNum',
      health: 'Health',
      scaNum: 'ScaNum',
      suspicious: 'Suspicious',
      sysNum: 'SysNum',
      trojan: 'Trojan',
      uuid: 'Uuid',
      vul: 'Vul',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      appNum: 'number',
      cmsNum: 'number',
      cveNum: 'number',
      emgNum: 'number',
      health: 'number',
      scaNum: 'number',
      suspicious: 'number',
      sysNum: 'number',
      trojan: 'number',
      uuid: 'string',
      vul: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBodyModuleConfigListItems extends $tea.Model {
  groupId?: number;
  instanceId?: string;
  instanceName?: string;
  ip?: string;
  region?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ip: 'Ip',
      region: 'Region',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceId: 'string',
      instanceName: 'string',
      ip: 'string',
      region: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBodyModuleConfigList extends $tea.Model {
  configName?: string;
  items?: DescribeModuleConfigResponseBodyModuleConfigListItems[];
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      items: 'Items',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      items: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigListItems },
      moduleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNoticeConfigResponseBodyNoticeConfigList extends $tea.Model {
  aliUid?: number;
  currentPage?: number;
  project?: string;
  route?: number;
  timeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      currentPage: 'CurrentPage',
      project: 'Project',
      route: 'Route',
      timeLimit: 'TimeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      currentPage: 'number',
      project: 'string',
      route: 'number',
      timeLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBodyPropertys extends $tea.Model {
  cmd?: string;
  create?: string;
  createTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  md5?: string;
  period?: string;
  source?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      create: 'Create',
      createTimestamp: 'CreateTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      md5: 'Md5',
      period: 'Period',
      source: 'Source',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      create: 'string',
      createTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      md5: 'string',
      period: 'string',
      source: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponseBodyPropertys extends $tea.Model {
  bindIp?: string;
  create?: string;
  createTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  pid?: string;
  port?: string;
  procName?: string;
  proto?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bindIp: 'BindIp',
      create: 'Create',
      createTimestamp: 'CreateTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      pid: 'Pid',
      port: 'Port',
      procName: 'ProcName',
      proto: 'Proto',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindIp: 'string',
      create: 'string',
      createTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      pid: 'string',
      port: 'string',
      procName: 'string',
      proto: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBodyPropertyItems extends $tea.Model {
  count?: number;
  port?: string;
  proto?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      port: 'Port',
      proto: 'Proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      port: 'string',
      proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBodyPropertys extends $tea.Model {
  cmdline?: string;
  create?: string;
  createTimestamp?: number;
  euidName?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  md5?: string;
  name?: string;
  path?: string;
  pid?: string;
  pname?: string;
  startTime?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cmdline: 'Cmdline',
      create: 'Create',
      createTimestamp: 'CreateTimestamp',
      euidName: 'EuidName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      md5: 'Md5',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
      pname: 'Pname',
      startTime: 'StartTime',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdline: 'string',
      create: 'string',
      createTimestamp: 'number',
      euidName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      md5: 'string',
      name: 'string',
      path: 'string',
      pid: 'string',
      pname: 'string',
      startTime: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponseBodyPropertyItems extends $tea.Model {
  count?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponseBodyPropertys extends $tea.Model {
  bizType?: string;
  bizTypeDispaly?: string;
  cmdline?: string;
  configPath?: string;
  containerName?: string;
  create?: string;
  createTimestamp?: number;
  imageName?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  listenIp?: string;
  listenProtocol?: string;
  listenStatus?: string;
  name?: string;
  path?: string;
  pid?: string;
  port?: string;
  ppid?: string;
  processStarted?: number;
  processUser?: string;
  proof?: string;
  type?: string;
  uuid?: string;
  version?: string;
  webPath?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizTypeDispaly: 'BizTypeDispaly',
      cmdline: 'Cmdline',
      configPath: 'ConfigPath',
      containerName: 'ContainerName',
      create: 'Create',
      createTimestamp: 'CreateTimestamp',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      listenIp: 'ListenIp',
      listenProtocol: 'ListenProtocol',
      listenStatus: 'ListenStatus',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
      port: 'Port',
      ppid: 'Ppid',
      processStarted: 'ProcessStarted',
      processUser: 'ProcessUser',
      proof: 'Proof',
      type: 'Type',
      uuid: 'Uuid',
      version: 'Version',
      webPath: 'WebPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizTypeDispaly: 'string',
      cmdline: 'string',
      configPath: 'string',
      containerName: 'string',
      create: 'string',
      createTimestamp: 'number',
      imageName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      listenIp: 'string',
      listenProtocol: 'string',
      listenStatus: 'string',
      name: 'string',
      path: 'string',
      pid: 'string',
      port: 'string',
      ppid: 'string',
      processStarted: 'number',
      processUser: 'string',
      proof: 'string',
      type: 'string',
      uuid: 'string',
      version: 'string',
      webPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBodyPropertys extends $tea.Model {
  create?: number;
  createTimestamp?: number;
  installTime?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  name?: string;
  path?: string;
  uuid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      createTimestamp: 'CreateTimestamp',
      installTime: 'InstallTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      name: 'Name',
      path: 'Path',
      uuid: 'Uuid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'number',
      createTimestamp: 'number',
      installTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      name: 'string',
      path: 'string',
      uuid: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponseBodyPropertyItems extends $tea.Model {
  count?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageNewestResponseBodyNewestStatisticItems extends $tea.Model {
  create?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBodyPropertys extends $tea.Model {
  accountsExpirationDate?: string;
  create?: string;
  createTimestamp?: number;
  groupNames?: string[];
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  ip?: string;
  isRoot?: string;
  lastLoginIp?: string;
  lastLoginTime?: string;
  lastLoginTimestamp?: number;
  passwordExpirationDate?: string;
  status?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountsExpirationDate: 'AccountsExpirationDate',
      create: 'Create',
      createTimestamp: 'CreateTimestamp',
      groupNames: 'GroupNames',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      isRoot: 'IsRoot',
      lastLoginIp: 'LastLoginIp',
      lastLoginTime: 'LastLoginTime',
      lastLoginTimestamp: 'LastLoginTimestamp',
      passwordExpirationDate: 'PasswordExpirationDate',
      status: 'Status',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountsExpirationDate: 'string',
      create: 'string',
      createTimestamp: 'number',
      groupNames: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      isRoot: 'string',
      lastLoginIp: 'string',
      lastLoginTime: 'string',
      lastLoginTimestamp: 'number',
      passwordExpirationDate: 'string',
      status: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBodyPropertyItems extends $tea.Model {
  count?: number;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBodyRestoreJobs extends $tea.Model {
  actualBytes?: number;
  bytesDone?: number;
  bytesTotal?: number;
  clientId?: string;
  completeTime?: number;
  createdTime?: number;
  duration?: number;
  errorCount?: number;
  errorFile?: string;
  errorFileUrl?: string;
  errorType?: string;
  eta?: number;
  excludes?: string;
  exitCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  includes?: string;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  itemsDone?: number;
  itemsTotal?: number;
  message?: string;
  percentage?: number;
  requestId?: string;
  restoreId?: string;
  restoreName?: string;
  restoreType?: string;
  snapshotHash?: string;
  snapshotId?: string;
  snapshotVersion?: string;
  source?: string;
  sourceClientId?: string;
  speed?: number;
  status?: string;
  target?: string;
  updatedTime?: number;
  uuid?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      completeTime: 'CompleteTime',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      errorCount: 'ErrorCount',
      errorFile: 'ErrorFile',
      errorFileUrl: 'ErrorFileUrl',
      errorType: 'ErrorType',
      eta: 'Eta',
      excludes: 'Excludes',
      exitCode: 'ExitCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      includes: 'Includes',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      message: 'Message',
      percentage: 'Percentage',
      requestId: 'RequestId',
      restoreId: 'RestoreId',
      restoreName: 'RestoreName',
      restoreType: 'RestoreType',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      snapshotVersion: 'SnapshotVersion',
      source: 'Source',
      sourceClientId: 'SourceClientId',
      speed: 'Speed',
      status: 'Status',
      target: 'Target',
      updatedTime: 'UpdatedTime',
      uuid: 'Uuid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      completeTime: 'number',
      createdTime: 'number',
      duration: 'number',
      errorCount: 'number',
      errorFile: 'string',
      errorFileUrl: 'string',
      errorType: 'string',
      eta: 'number',
      excludes: 'string',
      exitCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      includes: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      message: 'string',
      percentage: 'number',
      requestId: 'string',
      restoreId: 'string',
      restoreName: 'string',
      restoreType: 'string',
      snapshotHash: 'string',
      snapshotId: 'string',
      snapshotVersion: 'string',
      source: 'string',
      sourceClientId: 'string',
      speed: 'number',
      status: 'string',
      target: 'string',
      updatedTime: 'number',
      uuid: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestorePlansResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestorePlansResponseBodyRestorePlans extends $tea.Model {
  createdTime?: number;
  databaseName?: string;
  instanceName?: string;
  policyId?: number;
  policyName?: string;
  restorePoint?: number;
  status?: string;
  targetDatabaseName?: string;
  targetInstanceId?: string;
  targetInstanceName?: string;
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      databaseName: 'DatabaseName',
      instanceName: 'InstanceName',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      restorePoint: 'RestorePoint',
      status: 'Status',
      targetDatabaseName: 'TargetDatabaseName',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      databaseName: 'string',
      instanceName: 'string',
      policyId: 'number',
      policyName: 'string',
      restorePoint: 'number',
      status: 'string',
      targetDatabaseName: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      updatedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultResponseBodyPageContentResource extends $tea.Model {
  contentResource?: { [key: string]: any };
  count?: number;
  currentPage?: number;
  pageCount?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contentResource: 'ContentResource',
      count: 'Count',
      currentPage: 'CurrentPage',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentResource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      count: 'number',
      currentPage: 'number',
      pageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBodyListRiskItemResources extends $tea.Model {
  contentResource?: { [key: string]: any };
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentResource: 'ContentResource',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentResource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBodyList extends $tea.Model {
  affectedCount?: number;
  checkTime?: number;
  itemId?: number;
  remainingTime?: number;
  repairStatus?: string;
  riskAssertType?: string;
  riskItemResources?: DescribeRiskCheckResultResponseBodyListRiskItemResources[];
  riskLevel?: string;
  sort?: number;
  startStatus?: string;
  status?: string;
  taskId?: number;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      affectedCount: 'AffectedCount',
      checkTime: 'CheckTime',
      itemId: 'ItemId',
      remainingTime: 'RemainingTime',
      repairStatus: 'RepairStatus',
      riskAssertType: 'RiskAssertType',
      riskItemResources: 'RiskItemResources',
      riskLevel: 'RiskLevel',
      sort: 'Sort',
      startStatus: 'StartStatus',
      status: 'Status',
      taskId: 'TaskId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedCount: 'number',
      checkTime: 'number',
      itemId: 'number',
      remainingTime: 'number',
      repairStatus: 'string',
      riskAssertType: 'string',
      riskItemResources: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyListRiskItemResources },
      riskLevel: 'string',
      sort: 'number',
      startStatus: 'string',
      status: 'string',
      taskId: 'number',
      title: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus extends $tea.Model {
  count?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups extends $tea.Model {
  countByStatus?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus[];
  id?: number;
  remainingTime?: number;
  sort?: number;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      countByStatus: 'CountByStatus',
      id: 'Id',
      remainingTime: 'RemainingTime',
      sort: 'Sort',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countByStatus: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus },
      id: 'number',
      remainingTime: 'number',
      sort: 'number',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount extends $tea.Model {
  count?: number;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummary extends $tea.Model {
  affectedAssetCount?: number;
  disabledRiskCount?: number;
  enabledRiskCount?: number;
  groups?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups[];
  itemCount?: number;
  previousCount?: number;
  previousTime?: number;
  riskCount?: number;
  riskLevelCount?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount[];
  riskRate?: number;
  static names(): { [key: string]: string } {
    return {
      affectedAssetCount: 'AffectedAssetCount',
      disabledRiskCount: 'DisabledRiskCount',
      enabledRiskCount: 'EnabledRiskCount',
      groups: 'Groups',
      itemCount: 'ItemCount',
      previousCount: 'PreviousCount',
      previousTime: 'PreviousTime',
      riskCount: 'RiskCount',
      riskLevelCount: 'RiskLevelCount',
      riskRate: 'RiskRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedAssetCount: 'number',
      disabledRiskCount: 'number',
      enabledRiskCount: 'number',
      groups: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups },
      itemCount: 'number',
      previousCount: 'number',
      previousTime: 'number',
      riskCount: 'number',
      riskLevelCount: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount },
      riskRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeResponseBodyList extends $tea.Model {
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskListCheckResultResponseBodyList extends $tea.Model {
  instanceId?: string;
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      riskCount: 'riskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      riskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionResponseBodyConditionList extends $tea.Model {
  conditionType?: string;
  filterConditions?: string;
  name?: string;
  nameKey?: string;
  static names(): { [key: string]: string } {
    return {
      conditionType: 'ConditionType',
      filterConditions: 'FilterConditions',
      name: 'Name',
      nameKey: 'NameKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionType: 'string',
      filterConditions: 'string',
      name: 'string',
      nameKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBodySuggestionsDetail extends $tea.Model {
  description?: string;
  subType?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      subType: 'SubType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      subType: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBodySuggestions extends $tea.Model {
  detail?: DescribeSecureSuggestionResponseBodySuggestionsDetail[];
  points?: number;
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      points: 'Points',
      suggestType: 'SuggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestionsDetail },
      points: 'number',
      suggestType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig extends $tea.Model {
  daysOfWeek?: string;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: 'string',
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses extends $tea.Model {
  errorCode?: string;
  securityEventId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      securityEventId: 'SecurityEventId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      securityEventId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse extends $tea.Model {
  securityEventOperationStatuses?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses[];
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventOperationStatuses: 'SecurityEventOperationStatuses',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventOperationStatuses: { 'type': 'array', 'itemType': DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses },
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField extends $tea.Model {
  filedAliasName?: string;
  filedName?: string;
  markMisType?: string;
  markMisValue?: string;
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      filedAliasName: 'FiledAliasName',
      filedName: 'FiledName',
      markMisType: 'MarkMisType',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filedAliasName: 'string',
      filedName: 'string',
      markMisType: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource extends $tea.Model {
  filedAliasName?: string;
  filedName?: string;
  markMisValue?: string;
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      filedAliasName: 'FiledAliasName',
      filedName: 'FiledName',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filedAliasName: 'string',
      filedName: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse extends $tea.Model {
  markField?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  markFieldsSource?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  operationCode?: string;
  operationParams?: string;
  userCanOperate?: boolean;
  static names(): { [key: string]: string } {
    return {
      markField: 'MarkField',
      markFieldsSource: 'MarkFieldsSource',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      userCanOperate: 'UserCanOperate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markField: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField },
      markFieldsSource: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource },
      operationCode: 'string',
      operationParams: 'string',
      userCanOperate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyAttackEvent extends $tea.Model {
  dateArray?: string[];
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyHealthCheck extends $tea.Model {
  dateArray?: string[];
  highCount?: number;
  highList?: string[];
  levelsOn?: string[];
  lowCount?: number;
  lowList?: string[];
  mediumCount?: number;
  mediumList?: string[];
  timeArray?: string[];
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      highCount: 'HighCount',
      highList: 'HighList',
      levelsOn: 'LevelsOn',
      lowCount: 'LowCount',
      lowList: 'LowList',
      mediumCount: 'MediumCount',
      mediumList: 'MediumList',
      timeArray: 'TimeArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      highCount: 'number',
      highList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      lowCount: 'number',
      lowList: { 'type': 'array', 'itemType': 'string' },
      mediumCount: 'number',
      mediumList: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodySecurityEvent extends $tea.Model {
  dateArray?: string[];
  levelsOn?: string[];
  remindCount?: number;
  remindList?: string[];
  seriousCount?: number;
  seriousList?: string[];
  suspiciousCount?: number;
  suspiciousList?: string[];
  timeArray?: string[];
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      levelsOn: 'LevelsOn',
      remindCount: 'RemindCount',
      remindList: 'RemindList',
      seriousCount: 'SeriousCount',
      seriousList: 'SeriousList',
      suspiciousCount: 'SuspiciousCount',
      suspiciousList: 'SuspiciousList',
      timeArray: 'TimeArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      remindCount: 'number',
      remindList: { 'type': 'array', 'itemType': 'string' },
      seriousCount: 'number',
      seriousList: { 'type': 'array', 'itemType': 'string' },
      suspiciousCount: 'number',
      suspiciousList: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyVulnerability extends $tea.Model {
  asapCount?: number;
  asapList?: string[];
  dateArray?: string[];
  laterCount?: number;
  laterList?: string[];
  levelsOn?: string[];
  nntfCount?: number;
  nntfList?: string[];
  timeArray?: string[];
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      asapCount: 'AsapCount',
      asapList: 'AsapList',
      dateArray: 'DateArray',
      laterCount: 'LaterCount',
      laterList: 'LaterList',
      levelsOn: 'LevelsOn',
      nntfCount: 'NntfCount',
      nntfList: 'NntfList',
      timeArray: 'TimeArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapCount: 'number',
      asapList: { 'type': 'array', 'itemType': 'string' },
      dateArray: { 'type': 'array', 'itemType': 'string' },
      laterCount: 'number',
      laterList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      nntfCount: 'number',
      nntfList: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLinkedRoleStatusResponseBodyRoleStatus extends $tea.Model {
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarEventScenariosResponseBodyScenarios extends $tea.Model {
  code?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse extends $tea.Model {
  eventName?: string;
  eventType?: string;
  lastTime?: number;
  occurrenceTime?: number;
  securityEventId?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      lastTime: 'LastTime',
      occurrenceTime: 'OccurrenceTime',
      securityEventId: 'SecurityEventId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      lastTime: 'number',
      occurrenceTime: 'number',
      securityEventId: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  nextToken?: string;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  actualBytes?: number;
  actualItems?: number;
  bytesDone?: number;
  bytesTotal?: number;
  clientId?: string;
  containerSnapshotId?: string;
  createdTime?: number;
  duration?: number;
  errorCount?: number;
  errorFile?: string;
  errorMessage?: string;
  errorType?: string;
  exitCode?: string;
  instanceId?: string;
  itemsDone?: number;
  itemsTotal?: number;
  jobId?: string;
  parentHash?: string;
  parentSnapshotHash?: string;
  path?: string;
  paths?: string[];
  planId?: string;
  regionId?: string;
  retention?: number;
  size?: number;
  snapshotHash?: string;
  snapshotId?: string;
  snapshotName?: string;
  snapshotOption?: string;
  snapshotType?: string;
  source?: string;
  sourceType?: string;
  status?: string;
  uuid?: string;
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualItems: 'ActualItems',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      clientId: 'ClientId',
      containerSnapshotId: 'ContainerSnapshotId',
      createdTime: 'CreatedTime',
      duration: 'Duration',
      errorCount: 'ErrorCount',
      errorFile: 'ErrorFile',
      errorMessage: 'ErrorMessage',
      errorType: 'ErrorType',
      exitCode: 'ExitCode',
      instanceId: 'InstanceId',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      jobId: 'JobId',
      parentHash: 'ParentHash',
      parentSnapshotHash: 'ParentSnapshotHash',
      path: 'Path',
      paths: 'Paths',
      planId: 'PlanId',
      regionId: 'RegionId',
      retention: 'Retention',
      size: 'Size',
      snapshotHash: 'SnapshotHash',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotOption: 'SnapshotOption',
      snapshotType: 'SnapshotType',
      source: 'Source',
      sourceType: 'SourceType',
      status: 'Status',
      uuid: 'Uuid',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualItems: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      clientId: 'string',
      containerSnapshotId: 'string',
      createdTime: 'number',
      duration: 'number',
      errorCount: 'number',
      errorFile: 'string',
      errorMessage: 'string',
      errorType: 'string',
      exitCode: 'string',
      instanceId: 'string',
      itemsDone: 'number',
      itemsTotal: 'number',
      jobId: 'string',
      parentHash: 'string',
      parentSnapshotHash: 'string',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      regionId: 'string',
      retention: 'number',
      size: 'number',
      snapshotHash: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotOption: 'string',
      snapshotType: 'string',
      source: 'string',
      sourceType: 'string',
      status: 'string',
      uuid: 'string',
      vaultId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyResponseBodyStrategiesConfigTargets extends $tea.Model {
  flag?: string;
  target?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyResponseBodyStrategies extends $tea.Model {
  configTargets?: DescribeStrategyResponseBodyStrategiesConfigTargets[];
  customType?: string;
  cycleDays?: number;
  cycleStartTime?: number;
  ecsCount?: number;
  execStatus?: number;
  id?: number;
  name?: string;
  passRate?: number;
  processRate?: number;
  riskCount?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configTargets: 'ConfigTargets',
      customType: 'CustomType',
      cycleDays: 'CycleDays',
      cycleStartTime: 'CycleStartTime',
      ecsCount: 'EcsCount',
      execStatus: 'ExecStatus',
      id: 'Id',
      name: 'Name',
      passRate: 'PassRate',
      processRate: 'ProcessRate',
      riskCount: 'RiskCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTargets: { 'type': 'array', 'itemType': DescribeStrategyResponseBodyStrategiesConfigTargets },
      customType: 'string',
      cycleDays: 'number',
      cycleStartTime: 'number',
      ecsCount: 'number',
      execStatus: 'number',
      id: 'number',
      name: 'string',
      passRate: 'number',
      processRate: 'number',
      riskCount: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBodyFailedEcsList extends $tea.Model {
  IP?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyTargetResponseBodyStrategyTargets extends $tea.Model {
  bindUuidCount?: number;
  flag?: string;
  target?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      bindUuidCount: 'BindUuidCount',
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUuidCount: 'number',
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailResponseBodyDetails extends $tea.Model {
  nameDisplay?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBodyQuaraFiles extends $tea.Model {
  eventName?: string;
  eventType?: string;
  id?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  ip?: string;
  link?: string;
  md5?: string;
  modifyTime?: string;
  path?: string;
  status?: string;
  tag?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      ip: 'Ip',
      link: 'Link',
      md5: 'Md5',
      modifyTime: 'ModifyTime',
      path: 'Path',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      ip: 'string',
      link: 'string',
      md5: 'string',
      modifyTime: 'string',
      path: 'string',
      status: 'string',
      tag: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEventsDetails extends $tea.Model {
  nameDisplay?: string;
  type?: string;
  value?: string;
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEventsEventNotes extends $tea.Model {
  note?: string;
  noteId?: number;
  noteTime?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'Note',
      noteId: 'NoteId',
      noteTime: 'NoteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      noteId: 'number',
      noteTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEvents extends $tea.Model {
  advanced?: boolean;
  alarmEventName?: string;
  alarmEventNameDisplay?: string;
  alarmEventType?: string;
  alarmEventTypeDisplay?: string;
  alarmUniqueInfo?: string;
  appName?: string;
  autoBreaking?: boolean;
  canBeDealOnLine?: boolean;
  canCancelFault?: boolean;
  containHwMode?: boolean;
  containerId?: string;
  containerImageId?: string;
  containerImageName?: string;
  dataSource?: string;
  desc?: string;
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  eventNotes?: DescribeSuspEventsResponseBodySuspEventsEventNotes[];
  eventStatus?: number;
  eventSubType?: string;
  hasTraceInfo?: boolean;
  id?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  k8sClusterId?: string;
  k8sClusterName?: string;
  k8sNamespace?: string;
  k8sNodeId?: string;
  k8sNodeName?: string;
  k8sPodName?: string;
  lastTime?: string;
  lastTimeStamp?: number;
  level?: string;
  markMisRules?: string;
  name?: string;
  occurrenceTime?: string;
  occurrenceTimeStamp?: number;
  operateErrorCode?: string;
  operateMsg?: string;
  operateTime?: number;
  saleVersion?: string;
  securityEventIds?: string;
  stages?: string;
  uniqueInfo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      advanced: 'Advanced',
      alarmEventName: 'AlarmEventName',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      appName: 'AppName',
      autoBreaking: 'AutoBreaking',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      containHwMode: 'ContainHwMode',
      containerId: 'ContainerId',
      containerImageId: 'ContainerImageId',
      containerImageName: 'ContainerImageName',
      dataSource: 'DataSource',
      desc: 'Desc',
      details: 'Details',
      eventNotes: 'EventNotes',
      eventStatus: 'EventStatus',
      eventSubType: 'EventSubType',
      hasTraceInfo: 'HasTraceInfo',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      k8sClusterId: 'K8sClusterId',
      k8sClusterName: 'K8sClusterName',
      k8sNamespace: 'K8sNamespace',
      k8sNodeId: 'K8sNodeId',
      k8sNodeName: 'K8sNodeName',
      k8sPodName: 'K8sPodName',
      lastTime: 'LastTime',
      lastTimeStamp: 'LastTimeStamp',
      level: 'Level',
      markMisRules: 'MarkMisRules',
      name: 'Name',
      occurrenceTime: 'OccurrenceTime',
      occurrenceTimeStamp: 'OccurrenceTimeStamp',
      operateErrorCode: 'OperateErrorCode',
      operateMsg: 'OperateMsg',
      operateTime: 'OperateTime',
      saleVersion: 'SaleVersion',
      securityEventIds: 'SecurityEventIds',
      stages: 'Stages',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanced: 'boolean',
      alarmEventName: 'string',
      alarmEventNameDisplay: 'string',
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmUniqueInfo: 'string',
      appName: 'string',
      autoBreaking: 'boolean',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      containHwMode: 'boolean',
      containerId: 'string',
      containerImageId: 'string',
      containerImageName: 'string',
      dataSource: 'string',
      desc: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
      eventNotes: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsEventNotes },
      eventStatus: 'number',
      eventSubType: 'string',
      hasTraceInfo: 'boolean',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      k8sClusterId: 'string',
      k8sClusterName: 'string',
      k8sNamespace: 'string',
      k8sNodeId: 'string',
      k8sNodeName: 'string',
      k8sPodName: 'string',
      lastTime: 'string',
      lastTimeStamp: 'number',
      level: 'string',
      markMisRules: 'string',
      name: 'string',
      occurrenceTime: 'string',
      occurrenceTimeStamp: 'number',
      operateErrorCode: 'string',
      operateMsg: 'string',
      operateTime: 'number',
      saleVersion: 'string',
      securityEventIds: 'string',
      stages: 'string',
      uniqueInfo: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskErrorLogResponseBodyLogs extends $tea.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseResponseBodyDatabaseList extends $tea.Model {
  agentStatus?: string;
  createdByProduct?: string;
  databaseName?: string;
  databaseType?: string;
  databaseVersion?: string;
  instanceId?: string;
  instanceName?: string;
  instanceUuid?: string;
  policyId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      createdByProduct: 'CreatedByProduct',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      databaseVersion: 'DatabaseVersion',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceUuid: 'InstanceUuid',
      policyId: 'PolicyId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      createdByProduct: 'string',
      databaseName: 'string',
      databaseType: 'string',
      databaseVersion: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceUuid: 'string',
      policyId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPoliciesResponseBodyUniBackupPolicies extends $tea.Model {
  agentErrorMessage?: string;
  agentStatus?: string;
  databaseName?: string;
  databaseType?: string;
  errorCode?: string;
  errorMessage?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceUuid?: string;
  latestBackResult?: string;
  latestBackupTime?: string;
  planStatus?: string;
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  uniBackUpCount?: number;
  uniRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentErrorMessage: 'AgentErrorMessage',
      agentStatus: 'AgentStatus',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceUuid: 'InstanceUuid',
      latestBackResult: 'LatestBackResult',
      latestBackupTime: 'LatestBackupTime',
      planStatus: 'PlanStatus',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      uniBackUpCount: 'UniBackUpCount',
      uniRegionId: 'UniRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentErrorMessage: 'string',
      agentStatus: 'string',
      databaseName: 'string',
      databaseType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceUuid: 'string',
      latestBackResult: 'string',
      latestBackupTime: 'string',
      planStatus: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      uniBackUpCount: 'number',
      uniRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan extends $tea.Model {
  days?: string[];
  interval?: number;
  planType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      interval: 'Interval',
      planType: 'PlanType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      planType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan extends $tea.Model {
  days?: string[];
  interval?: number;
  planType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'Days',
      interval: 'Interval',
      planType: 'PlanType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'string' },
      interval: 'number',
      planType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTO extends $tea.Model {
  accountName?: string;
  agentStatus?: string;
  databaseType?: string;
  fullPlan?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan;
  incPlan?: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan;
  instanceId?: string;
  instanceName?: string;
  policyId?: number;
  policyName?: string;
  policyStatus?: string;
  retention?: number;
  speedLimiter?: number;
  uniBackUpCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      agentStatus: 'AgentStatus',
      databaseType: 'DatabaseType',
      fullPlan: 'FullPlan',
      incPlan: 'IncPlan',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyStatus: 'PolicyStatus',
      retention: 'Retention',
      speedLimiter: 'SpeedLimiter',
      uniBackUpCount: 'UniBackUpCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      agentStatus: 'string',
      databaseType: 'string',
      fullPlan: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOFullPlan,
      incPlan: DescribeUniBackupPolicyDetailResponseBodyUniBackupPolicyDTOIncPlan,
      instanceId: 'string',
      instanceName: 'string',
      policyId: 'number',
      policyName: 'string',
      policyStatus: 'string',
      retention: 'number',
      speedLimiter: 'number',
      uniBackUpCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniRecoverableListResponseBodyRecoverableInfoList extends $tea.Model {
  firstTime?: number;
  lastTime?: number;
  name?: string;
  resetScn?: string;
  resetTime?: number;
  restoreInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      firstTime: 'FirstTime',
      lastTime: 'LastTime',
      name: 'Name',
      resetScn: 'ResetScn',
      resetTime: 'ResetTime',
      restoreInfo: 'RestoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTime: 'number',
      lastTime: 'number',
      name: 'string',
      resetScn: 'string',
      resetTime: 'number',
      restoreInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBackupMachinesResponseBodyMachines extends $tea.Model {
  id?: number;
  policyName?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      policyName: 'PolicyName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      policyName: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBaselineAuthorizationResponseBodyUserBaselineAuthorization extends $tea.Model {
  status?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics extends $tea.Model {
  machineInstanceId?: string;
  machineIp?: string;
  machineName?: string;
  os?: string;
  regionId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      machineInstanceId: 'MachineInstanceId',
      machineIp: 'MachineIp',
      machineName: 'MachineName',
      os: 'Os',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineInstanceId: 'string',
      machineIp: 'string',
      machineName: 'string',
      os: 'string',
      regionId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotCriteriaResponseBodyCriteriaList extends $tea.Model {
  name?: string;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyPageInfo extends $tea.Model {
  count?: number;
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList extends $tea.Model {
  vpcSwitchId?: string;
  vpcSwitchName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcSwitchId: 'VpcSwitchId',
      vpcSwitchName: 'VpcSwitchName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcSwitchId: 'string',
      vpcSwitchName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList extends $tea.Model {
  cidrBlock?: string;
  createTime?: number;
  honeyPotEcsInstanceStatus?: string;
  honeyPotEniInstanceId?: string;
  honeyPotExistence?: boolean;
  honeyPotInstanceStatus?: string;
  honeyPotVpcSwitchId?: string;
  vpcId?: string;
  vpcName?: string;
  vpcRegionId?: string;
  vpcStatus?: string;
  vpcSwitchIdList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList[];
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      honeyPotEcsInstanceStatus: 'HoneyPotEcsInstanceStatus',
      honeyPotEniInstanceId: 'HoneyPotEniInstanceId',
      honeyPotExistence: 'HoneyPotExistence',
      honeyPotInstanceStatus: 'HoneyPotInstanceStatus',
      honeyPotVpcSwitchId: 'HoneyPotVpcSwitchId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcStatus: 'VpcStatus',
      vpcSwitchIdList: 'VpcSwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createTime: 'number',
      honeyPotEcsInstanceStatus: 'string',
      honeyPotEniInstanceId: 'string',
      honeyPotExistence: 'boolean',
      honeyPotInstanceStatus: 'string',
      honeyPotVpcSwitchId: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcStatus: 'string',
      vpcSwitchIdList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListResponseBodyVpcList extends $tea.Model {
  ecsCount?: number;
  instanceDesc?: string;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      instanceDesc: 'InstanceDesc',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      instanceDesc: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCvesClassifys extends $tea.Model {
  classify?: string;
  demoVideoUrl?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      demoVideoUrl: 'DemoVideoUrl',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      demoVideoUrl: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCves extends $tea.Model {
  classify?: string;
  classifys?: DescribeVulDetailsResponseBodyCvesClassifys[];
  cnvdId?: string;
  complexity?: string;
  content?: string;
  cveId?: string;
  cvssScore?: string;
  cvssVector?: string;
  poc?: string;
  pocCreateTime?: number;
  pocDisclosureTime?: number;
  product?: string;
  reference?: string;
  releaseTime?: number;
  solution?: string;
  summary?: string;
  title?: string;
  vendor?: string;
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      classifys: 'Classifys',
      cnvdId: 'CnvdId',
      complexity: 'Complexity',
      content: 'Content',
      cveId: 'CveId',
      cvssScore: 'CvssScore',
      cvssVector: 'CvssVector',
      poc: 'Poc',
      pocCreateTime: 'PocCreateTime',
      pocDisclosureTime: 'PocDisclosureTime',
      product: 'Product',
      reference: 'Reference',
      releaseTime: 'ReleaseTime',
      solution: 'Solution',
      summary: 'Summary',
      title: 'Title',
      vendor: 'Vendor',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      classifys: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCvesClassifys },
      cnvdId: 'string',
      complexity: 'string',
      content: 'string',
      cveId: 'string',
      cvssScore: 'string',
      cvssVector: 'string',
      poc: 'string',
      pocCreateTime: 'number',
      pocDisclosureTime: 'number',
      product: 'string',
      reference: 'string',
      releaseTime: 'number',
      solution: 'string',
      summary: 'string',
      title: 'string',
      vendor: 'string',
      vulLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity extends $tea.Model {
  assetsFactor?: string;
  cvssFactor?: string;
  enviromentFactor?: string;
  isCalc?: string;
  status?: string;
  timeFactor?: string;
  totalScore?: string;
  static names(): { [key: string]: string } {
    return {
      assetsFactor: 'Assets_factor',
      cvssFactor: 'Cvss_factor',
      enviromentFactor: 'Enviroment_factor',
      isCalc: 'Is_calc',
      status: 'Status',
      timeFactor: 'Time_factor',
      totalScore: 'Total_score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsFactor: 'string',
      cvssFactor: 'string',
      enviromentFactor: 'string',
      isCalc: 'string',
      status: 'string',
      timeFactor: 'string',
      totalScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  containerName?: string;
  fullVersion?: string;
  imageName?: string;
  matchDetail?: string;
  name?: string;
  path?: string;
  updateCmd?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      fullVersion: 'FullVersion',
      imageName: 'ImageName',
      matchDetail: 'MatchDetail',
      name: 'Name',
      path: 'Path',
      updateCmd: 'UpdateCmd',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      fullVersion: 'string',
      imageName: 'string',
      matchDetail: 'string',
      name: 'string',
      path: 'string',
      updateCmd: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJson extends $tea.Model {
  absolutePath?: string;
  aliasName?: string;
  ip?: string;
  lastTs?: number;
  necessity?: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity;
  os?: string;
  osRelease?: string;
  primaryId?: number;
  rpmEntityList?: DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  status?: string;
  tag?: string;
  cveList?: string[];
  static names(): { [key: string]: string } {
    return {
      absolutePath: 'AbsolutePath',
      aliasName: 'AliasName',
      ip: 'Ip',
      lastTs: 'LastTs',
      necessity: 'Necessity',
      os: 'Os',
      osRelease: 'OsRelease',
      primaryId: 'PrimaryId',
      rpmEntityList: 'RpmEntityList',
      status: 'Status',
      tag: 'Tag',
      cveList: 'cveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolutePath: 'string',
      aliasName: 'string',
      ip: 'string',
      lastTs: 'number',
      necessity: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity,
      os: 'string',
      osRelease: 'string',
      primaryId: 'number',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
      status: 'string',
      tag: 'string',
      cveList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecords extends $tea.Model {
  aliasName?: string;
  extendContentJson?: DescribeVulListResponseBodyVulRecordsExtendContentJson;
  firstTs?: number;
  groupId?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  lastTs?: number;
  modifyTs?: number;
  name?: string;
  necessity?: string;
  online?: boolean;
  osVersion?: string;
  primaryId?: number;
  related?: string;
  repairTs?: number;
  resultCode?: string;
  resultMessage?: string;
  status?: number;
  tag?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      extendContentJson: 'ExtendContentJson',
      firstTs: 'FirstTs',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      modifyTs: 'ModifyTs',
      name: 'Name',
      necessity: 'Necessity',
      online: 'Online',
      osVersion: 'OsVersion',
      primaryId: 'PrimaryId',
      related: 'Related',
      repairTs: 'RepairTs',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      status: 'Status',
      tag: 'Tag',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      extendContentJson: DescribeVulListResponseBodyVulRecordsExtendContentJson,
      firstTs: 'number',
      groupId: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTs: 'number',
      modifyTs: 'number',
      name: 'string',
      necessity: 'string',
      online: 'boolean',
      osVersion: 'string',
      primaryId: 'number',
      related: 'string',
      repairTs: 'number',
      resultCode: 'string',
      resultMessage: 'string',
      status: 'number',
      tag: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBodyVulWhitelists extends $tea.Model {
  aliasName?: string;
  id?: string;
  name?: string;
  reason?: string;
  targetInfo?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      targetInfo: 'TargetInfo',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      targetInfo: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesResponseBodyWarningMachines extends $tea.Model {
  highWarningCount?: number;
  instanceId?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  lowWarningCount?: number;
  mediumWarningCount?: number;
  passCount?: number;
  portOpen?: boolean;
  regionId?: string;
  status?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      highWarningCount: 'HighWarningCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
      passCount: 'PassCount',
      portOpen: 'PortOpen',
      regionId: 'RegionId',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highWarningCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
      passCount: 'number',
      portOpen: 'boolean',
      regionId: 'string',
      status: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockBindListResponseBodyBindList extends $tea.Model {
  auditCount?: string;
  blockCount?: string;
  dirCount?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  os?: string;
  percent?: number;
  serviceCode?: string;
  serviceDetail?: string;
  serviceStatus?: string;
  status?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      auditCount: 'AuditCount',
      blockCount: 'BlockCount',
      dirCount: 'DirCount',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      os: 'Os',
      percent: 'Percent',
      serviceCode: 'ServiceCode',
      serviceDetail: 'ServiceDetail',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditCount: 'string',
      blockCount: 'string',
      dirCount: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      os: 'string',
      percent: 'number',
      serviceCode: 'string',
      serviceDetail: 'string',
      serviceStatus: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockConfigListResponseBodyConfigList extends $tea.Model {
  defenceMode?: string;
  dir?: string;
  exclusiveDir?: string;
  exclusiveFile?: string;
  exclusiveFileType?: string;
  id?: string;
  inclusiveFile?: string;
  inclusiveFileType?: string;
  localBackupDir?: string;
  mode?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      defenceMode: 'DefenceMode',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFile: 'ExclusiveFile',
      exclusiveFileType: 'ExclusiveFileType',
      id: 'Id',
      inclusiveFile: 'InclusiveFile',
      inclusiveFileType: 'InclusiveFileType',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenceMode: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFile: 'string',
      exclusiveFileType: 'string',
      id: 'string',
      inclusiveFile: 'string',
      inclusiveFileType: 'string',
      localBackupDir: 'string',
      mode: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStorageCountResponseBodyBackupStorageCount extends $tea.Model {
  buyStorageByte?: number;
  ecsUsageStorageByte?: number;
  overflow?: number;
  uniUsageStorageByte?: number;
  usageStorageByte?: number;
  static names(): { [key: string]: string } {
    return {
      buyStorageByte: 'BuyStorageByte',
      ecsUsageStorageByte: 'EcsUsageStorageByte',
      overflow: 'Overflow',
      uniUsageStorageByte: 'UniUsageStorageByte',
      usageStorageByte: 'UsageStorageByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyStorageByte: 'number',
      ecsUsageStorageByte: 'number',
      overflow: 'number',
      uniUsageStorageByte: 'number',
      usageStorageByte: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponseBodyHandleSecurityEventsResponse extends $tea.Model {
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponseBodyPushTaskRspPushTaskResultList extends $tea.Model {
  groupId?: number;
  instanceId?: string;
  instanceName?: string;
  ip?: string;
  message?: string;
  online?: boolean;
  osVersion?: string;
  region?: string;
  success?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ip: 'Ip',
      message: 'Message',
      online: 'Online',
      osVersion: 'OsVersion',
      region: 'Region',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceId: 'string',
      instanceName: 'string',
      ip: 'string',
      message: 'string',
      online: 'boolean',
      osVersion: 'string',
      region: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponseBodyPushTaskRsp extends $tea.Model {
  pushTaskResultList?: ModifyPushAllTaskResponseBodyPushTaskRspPushTaskResultList[];
  static names(): { [key: string]: string } {
    return {
      pushTaskResultList: 'PushTaskResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushTaskResultList: { 'type': 'array', 'itemType': ModifyPushAllTaskResponseBodyPushTaskRspPushTaskResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyResponseBodyResult extends $tea.Model {
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateAgentClientInstallResponseBodyAegisCelintInstallResposeList extends $tea.Model {
  instanceId?: string;
  recordId?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recordId: 'RecordId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recordId: 'number',
      uuid: 'string',
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
      'cn-hangzhou': "tds.aliyuncs.com",
      'ap-southeast-3': "tds.ap-southeast-3.aliyuncs.com",
      'ap-northeast-1': "tds.aliyuncs.com",
      'ap-northeast-2-pop': "tds.aliyuncs.com",
      'ap-south-1': "tds.aliyuncs.com",
      'ap-southeast-1': "tds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "tds.aliyuncs.com",
      'ap-southeast-5': "tds.aliyuncs.com",
      'cn-beijing': "tds.aliyuncs.com",
      'cn-beijing-finance-1': "tds.aliyuncs.com",
      'cn-beijing-finance-pop': "tds.aliyuncs.com",
      'cn-beijing-gov-1': "tds.aliyuncs.com",
      'cn-beijing-nu16-b01': "tds.aliyuncs.com",
      'cn-chengdu': "tds.aliyuncs.com",
      'cn-edge-1': "tds.aliyuncs.com",
      'cn-fujian': "tds.aliyuncs.com",
      'cn-haidian-cm12-c01': "tds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "tds.aliyuncs.com",
      'cn-hangzhou-finance': "tds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "tds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "tds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "tds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "tds.aliyuncs.com",
      'cn-hangzhou-test-306': "tds.aliyuncs.com",
      'cn-hongkong': "tds.aliyuncs.com",
      'cn-hongkong-finance-pop': "tds.aliyuncs.com",
      'cn-huhehaote': "tds.aliyuncs.com",
      'cn-huhehaote-nebula-1': "tds.aliyuncs.com",
      'cn-north-2-gov-1': "tds.aliyuncs.com",
      'cn-qingdao': "tds.aliyuncs.com",
      'cn-qingdao-nebula': "tds.aliyuncs.com",
      'cn-shanghai': "tds.aliyuncs.com",
      'cn-shanghai-et15-b01': "tds.aliyuncs.com",
      'cn-shanghai-et2-b01': "tds.aliyuncs.com",
      'cn-shanghai-finance-1': "tds.aliyuncs.com",
      'cn-shanghai-inner': "tds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "tds.aliyuncs.com",
      'cn-shenzhen': "tds.aliyuncs.com",
      'cn-shenzhen-finance-1': "tds.aliyuncs.com",
      'cn-shenzhen-inner': "tds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "tds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "tds.aliyuncs.com",
      'cn-wuhan': "tds.aliyuncs.com",
      'cn-wulanchabu': "tds.aliyuncs.com",
      'cn-yushanfang': "tds.aliyuncs.com",
      'cn-zhangbei': "tds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "tds.aliyuncs.com",
      'cn-zhangjiakou': "tds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "tds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "tds.aliyuncs.com",
      'eu-central-1': "tds.aliyuncs.com",
      'eu-west-1': "tds.aliyuncs.com",
      'eu-west-1-oxs': "tds.aliyuncs.com",
      'me-east-1': "tds.aliyuncs.com",
      'rus-west-1-pop': "tds.aliyuncs.com",
      'us-east-1': "tds.aliyuncs.com",
      'us-west-1': "tds.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addVpcHoneyPotWithOptions(request: AddVpcHoneyPotRequest, runtime: $Util.RuntimeOptions): Promise<AddVpcHoneyPotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddVpcHoneyPotResponse>(await this.doRPCRequest("AddVpcHoneyPot", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new AddVpcHoneyPotResponse({}));
  }

  async addVpcHoneyPot(request: AddVpcHoneyPotRequest): Promise<AddVpcHoneyPotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVpcHoneyPotWithOptions(request, runtime);
  }

  async checkQuaraFileIdWithOptions(request: CheckQuaraFileIdRequest, runtime: $Util.RuntimeOptions): Promise<CheckQuaraFileIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckQuaraFileIdResponse>(await this.doRPCRequest("CheckQuaraFileId", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CheckQuaraFileIdResponse({}));
  }

  async checkQuaraFileId(request: CheckQuaraFileIdRequest): Promise<CheckQuaraFileIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkQuaraFileIdWithOptions(request, runtime);
  }

  async checkSecurityEventIdWithOptions(request: CheckSecurityEventIdRequest, runtime: $Util.RuntimeOptions): Promise<CheckSecurityEventIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckSecurityEventIdResponse>(await this.doRPCRequest("CheckSecurityEventId", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CheckSecurityEventIdResponse({}));
  }

  async checkSecurityEventId(request: CheckSecurityEventIdRequest): Promise<CheckSecurityEventIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSecurityEventIdWithOptions(request, runtime);
  }

  async createAntiBruteForceRuleWithOptions(request: CreateAntiBruteForceRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntiBruteForceRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAntiBruteForceRuleResponse>(await this.doRPCRequest("CreateAntiBruteForceRule", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAntiBruteForceRuleResponse({}));
  }

  async createAntiBruteForceRule(request: CreateAntiBruteForceRuleRequest): Promise<CreateAntiBruteForceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntiBruteForceRuleWithOptions(request, runtime);
  }

  async createAssetWithOptions(request: CreateAssetRequest, runtime: $Util.RuntimeOptions): Promise<CreateAssetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAssetResponse>(await this.doRPCRequest("CreateAsset", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAssetResponse({}));
  }

  async createAsset(request: CreateAssetRequest): Promise<CreateAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAssetWithOptions(request, runtime);
  }

  async createBackupPolicyWithOptions(tmpReq: CreateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBackupPolicyResponse>(await this.doRPCRequest("CreateBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBackupPolicyResponse({}));
  }

  async createBackupPolicy(request: CreateBackupPolicyRequest): Promise<CreateBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPolicyWithOptions(request, runtime);
  }

  async createOrUpdateAssetGroupWithOptions(request: CreateOrUpdateAssetGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateAssetGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOrUpdateAssetGroupResponse>(await this.doRPCRequest("CreateOrUpdateAssetGroup", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOrUpdateAssetGroupResponse({}));
  }

  async createOrUpdateAssetGroup(request: CreateOrUpdateAssetGroupRequest): Promise<CreateOrUpdateAssetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateAssetGroupWithOptions(request, runtime);
  }

  async createRestoreJobWithOptions(request: CreateRestoreJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateRestoreJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRestoreJobResponse>(await this.doRPCRequest("CreateRestoreJob", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRestoreJobResponse({}));
  }

  async createRestoreJob(request: CreateRestoreJobRequest): Promise<CreateRestoreJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRestoreJobWithOptions(request, runtime);
  }

  async createSasOrderWithOptions(request: CreateSasOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateSasOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSasOrderResponse>(await this.doRPCRequest("CreateSasOrder", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSasOrderResponse({}));
  }

  async createSasOrder(request: CreateSasOrderRequest): Promise<CreateSasOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSasOrderWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRPCRequest("CreateServiceLinkedRole", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(runtime);
  }

  async createSimilarSecurityEventsQueryTaskWithOptions(request: CreateSimilarSecurityEventsQueryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimilarSecurityEventsQueryTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSimilarSecurityEventsQueryTaskResponse>(await this.doRPCRequest("CreateSimilarSecurityEventsQueryTask", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSimilarSecurityEventsQueryTaskResponse({}));
  }

  async createSimilarSecurityEventsQueryTask(request: CreateSimilarSecurityEventsQueryTaskRequest): Promise<CreateSimilarSecurityEventsQueryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimilarSecurityEventsQueryTaskWithOptions(request, runtime);
  }

  async createUniBackupPolicyWithOptions(tmpReq: CreateUniBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateUniBackupPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUniBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fullPlan)) {
      request.fullPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fullPlan, "FullPlan", "json");
    }

    if (!Util.isUnset(tmpReq.incPlan)) {
      request.incPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incPlan, "IncPlan", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUniBackupPolicyResponse>(await this.doRPCRequest("CreateUniBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUniBackupPolicyResponse({}));
  }

  async createUniBackupPolicy(request: CreateUniBackupPolicyRequest): Promise<CreateUniBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUniBackupPolicyWithOptions(request, runtime);
  }

  async createUniRestorePlanWithOptions(request: CreateUniRestorePlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateUniRestorePlanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateUniRestorePlanResponse>(await this.doRPCRequest("CreateUniRestorePlan", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new CreateUniRestorePlanResponse({}));
  }

  async createUniRestorePlan(request: CreateUniRestorePlanRequest): Promise<CreateUniRestorePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUniRestorePlanWithOptions(request, runtime);
  }

  async deleteAssetWithOptions(request: DeleteAssetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAssetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAssetResponse>(await this.doRPCRequest("DeleteAsset", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAssetResponse({}));
  }

  async deleteAsset(request: DeleteAssetRequest): Promise<DeleteAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAssetWithOptions(request, runtime);
  }

  async deleteBackupPolicyWithOptions(request: DeleteBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBackupPolicyResponse>(await this.doRPCRequest("DeleteBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBackupPolicyResponse({}));
  }

  async deleteBackupPolicy(request: DeleteBackupPolicyRequest): Promise<DeleteBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupPolicyWithOptions(request, runtime);
  }

  async deleteBackupPolicyMachineWithOptions(request: DeleteBackupPolicyMachineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupPolicyMachineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBackupPolicyMachineResponse>(await this.doRPCRequest("DeleteBackupPolicyMachine", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBackupPolicyMachineResponse({}));
  }

  async deleteBackupPolicyMachine(request: DeleteBackupPolicyMachineRequest): Promise<DeleteBackupPolicyMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupPolicyMachineWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteGroupResponse>(await this.doRPCRequest("DeleteGroup", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteLoginBaseConfigWithOptions(request: DeleteLoginBaseConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoginBaseConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteLoginBaseConfigResponse>(await this.doRPCRequest("DeleteLoginBaseConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteLoginBaseConfigResponse({}));
  }

  async deleteLoginBaseConfig(request: DeleteLoginBaseConfigRequest): Promise<DeleteLoginBaseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginBaseConfigWithOptions(request, runtime);
  }

  async deleteStrategyWithOptions(request: DeleteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteStrategyResponse>(await this.doRPCRequest("DeleteStrategy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteStrategyResponse({}));
  }

  async deleteStrategy(request: DeleteStrategyRequest): Promise<DeleteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStrategyWithOptions(request, runtime);
  }

  async deleteTagWithUuidWithOptions(request: DeleteTagWithUuidRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagWithUuidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTagWithUuidResponse>(await this.doRPCRequest("DeleteTagWithUuid", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTagWithUuidResponse({}));
  }

  async deleteTagWithUuid(request: DeleteTagWithUuidRequest): Promise<DeleteTagWithUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithUuidWithOptions(request, runtime);
  }

  async deleteUniBackupPolicyWithOptions(request: DeleteUniBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUniBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUniBackupPolicyResponse>(await this.doRPCRequest("DeleteUniBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUniBackupPolicyResponse({}));
  }

  async deleteUniBackupPolicy(request: DeleteUniBackupPolicyRequest): Promise<DeleteUniBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUniBackupPolicyWithOptions(request, runtime);
  }

  async deleteVpcHoneyPotWithOptions(request: DeleteVpcHoneyPotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcHoneyPotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVpcHoneyPotResponse>(await this.doRPCRequest("DeleteVpcHoneyPot", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVpcHoneyPotResponse({}));
  }

  async deleteVpcHoneyPot(request: DeleteVpcHoneyPotRequest): Promise<DeleteVpcHoneyPotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcHoneyPotWithOptions(request, runtime);
  }

  async describeAccesskeyLeakListWithOptions(request: DescribeAccesskeyLeakListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccesskeyLeakListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAccesskeyLeakListResponse>(await this.doRPCRequest("DescribeAccesskeyLeakList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccesskeyLeakListResponse({}));
  }

  async describeAccesskeyLeakList(request: DescribeAccesskeyLeakListRequest): Promise<DescribeAccesskeyLeakListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccesskeyLeakListWithOptions(request, runtime);
  }

  async describeAffectedMaliciousFileImagesWithOptions(request: DescribeAffectedMaliciousFileImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAffectedMaliciousFileImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAffectedMaliciousFileImagesResponse>(await this.doRPCRequest("DescribeAffectedMaliciousFileImages", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAffectedMaliciousFileImagesResponse({}));
  }

  async describeAffectedMaliciousFileImages(request: DescribeAffectedMaliciousFileImagesRequest): Promise<DescribeAffectedMaliciousFileImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAffectedMaliciousFileImagesWithOptions(request, runtime);
  }

  async describeAlarmEventDetailWithOptions(request: DescribeAlarmEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlarmEventDetailResponse>(await this.doRPCRequest("DescribeAlarmEventDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlarmEventDetailResponse({}));
  }

  async describeAlarmEventDetail(request: DescribeAlarmEventDetailRequest): Promise<DescribeAlarmEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventDetailWithOptions(request, runtime);
  }

  async describeAlarmEventListWithOptions(request: DescribeAlarmEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlarmEventListResponse>(await this.doRPCRequest("DescribeAlarmEventList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlarmEventListResponse({}));
  }

  async describeAlarmEventList(request: DescribeAlarmEventListRequest): Promise<DescribeAlarmEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventListWithOptions(request, runtime);
  }

  async describeAlarmEventStackInfoWithOptions(request: DescribeAlarmEventStackInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventStackInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlarmEventStackInfoResponse>(await this.doRPCRequest("DescribeAlarmEventStackInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlarmEventStackInfoResponse({}));
  }

  async describeAlarmEventStackInfo(request: DescribeAlarmEventStackInfoRequest): Promise<DescribeAlarmEventStackInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventStackInfoWithOptions(request, runtime);
  }

  async describeAllEntityWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAllEntityResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeAllEntityResponse>(await this.doRPCRequest("DescribeAllEntity", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllEntityResponse({}));
  }

  async describeAllEntity(): Promise<DescribeAllEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllEntityWithOptions(runtime);
  }

  async describeAllGroupsWithOptions(request: DescribeAllGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllGroupsResponse>(await this.doRPCRequest("DescribeAllGroups", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllGroupsResponse({}));
  }

  async describeAllGroups(request: DescribeAllGroupsRequest): Promise<DescribeAllGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllGroupsWithOptions(request, runtime);
  }

  async describeAllRegionsStatisticsWithOptions(request: DescribeAllRegionsStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllRegionsStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllRegionsStatisticsResponse>(await this.doRPCRequest("DescribeAllRegionsStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllRegionsStatisticsResponse({}));
  }

  async describeAllRegionsStatistics(request: DescribeAllRegionsStatisticsRequest): Promise<DescribeAllRegionsStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllRegionsStatisticsWithOptions(request, runtime);
  }

  async describeAntiBruteForceRulesWithOptions(request: DescribeAntiBruteForceRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntiBruteForceRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAntiBruteForceRulesResponse>(await this.doRPCRequest("DescribeAntiBruteForceRules", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAntiBruteForceRulesResponse({}));
  }

  async describeAntiBruteForceRules(request: DescribeAntiBruteForceRulesRequest): Promise<DescribeAntiBruteForceRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntiBruteForceRulesWithOptions(request, runtime);
  }

  async describeAssetDetailByUuidWithOptions(request: DescribeAssetDetailByUuidRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetDetailByUuidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAssetDetailByUuidResponse>(await this.doRPCRequest("DescribeAssetDetailByUuid", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAssetDetailByUuidResponse({}));
  }

  async describeAssetDetailByUuid(request: DescribeAssetDetailByUuidRequest): Promise<DescribeAssetDetailByUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetDetailByUuidWithOptions(request, runtime);
  }

  async describeAssetDetailByUuidsWithOptions(request: DescribeAssetDetailByUuidsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetDetailByUuidsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAssetDetailByUuidsResponse>(await this.doRPCRequest("DescribeAssetDetailByUuids", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAssetDetailByUuidsResponse({}));
  }

  async describeAssetDetailByUuids(request: DescribeAssetDetailByUuidsRequest): Promise<DescribeAssetDetailByUuidsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetDetailByUuidsWithOptions(request, runtime);
  }

  async describeAssetSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAssetSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeAssetSummaryResponse>(await this.doRPCRequest("DescribeAssetSummary", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAssetSummaryResponse({}));
  }

  async describeAssetSummary(): Promise<DescribeAssetSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetSummaryWithOptions(runtime);
  }

  async describeAttackAnalysisDataWithOptions(request: DescribeAttackAnalysisDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackAnalysisDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAttackAnalysisDataResponse>(await this.doRPCRequest("DescribeAttackAnalysisData", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAttackAnalysisDataResponse({}));
  }

  async describeAttackAnalysisData(request: DescribeAttackAnalysisDataRequest): Promise<DescribeAttackAnalysisDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackAnalysisDataWithOptions(request, runtime);
  }

  async describeAutoDelConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAutoDelConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeAutoDelConfigResponse>(await this.doRPCRequest("DescribeAutoDelConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoDelConfigResponse({}));
  }

  async describeAutoDelConfig(): Promise<DescribeAutoDelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoDelConfigWithOptions(runtime);
  }

  async describeBackupClientsWithOptions(request: DescribeBackupClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupClientsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupClientsResponse>(await this.doRPCRequest("DescribeBackupClients", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupClientsResponse({}));
  }

  async describeBackupClients(request: DescribeBackupClientsRequest): Promise<DescribeBackupClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupClientsWithOptions(request, runtime);
  }

  async describeBackupDirsWithOptions(request: DescribeBackupDirsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupDirsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupDirsResponse>(await this.doRPCRequest("DescribeBackupDirs", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupDirsResponse({}));
  }

  async describeBackupDirs(request: DescribeBackupDirsRequest): Promise<DescribeBackupDirsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupDirsWithOptions(request, runtime);
  }

  async describeBackupFilesWithOptions(request: DescribeBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupFilesResponse>(await this.doRPCRequest("DescribeBackupFiles", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupFilesResponse({}));
  }

  async describeBackupFiles(request: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  async describeBackupMachineStatusWithOptions(request: DescribeBackupMachineStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupMachineStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupMachineStatusResponse>(await this.doRPCRequest("DescribeBackupMachineStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupMachineStatusResponse({}));
  }

  async describeBackupMachineStatus(request: DescribeBackupMachineStatusRequest): Promise<DescribeBackupMachineStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupMachineStatusWithOptions(request, runtime);
  }

  async describeBackupPoliciesWithOptions(request: DescribeBackupPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPoliciesResponse>(await this.doRPCRequest("DescribeBackupPolicies", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPoliciesResponse({}));
  }

  async describeBackupPolicies(request: DescribeBackupPoliciesRequest): Promise<DescribeBackupPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPoliciesWithOptions(request, runtime);
  }

  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupPolicyResponse>(await this.doRPCRequest("DescribeBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupPolicyResponse({}));
  }

  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  async describeBackupRestoreCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeBackupRestoreCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeBackupRestoreCountResponse>(await this.doRPCRequest("DescribeBackupRestoreCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupRestoreCountResponse({}));
  }

  async describeBackupRestoreCount(): Promise<DescribeBackupRestoreCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupRestoreCountWithOptions(runtime);
  }

  async describeBruteForceSummaryWithOptions(request: DescribeBruteForceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBruteForceSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBruteForceSummaryResponse>(await this.doRPCRequest("DescribeBruteForceSummary", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBruteForceSummaryResponse({}));
  }

  async describeBruteForceSummary(request: DescribeBruteForceSummaryRequest): Promise<DescribeBruteForceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBruteForceSummaryWithOptions(request, runtime);
  }

  async describeCheckEcsWarningsWithOptions(request: DescribeCheckEcsWarningsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckEcsWarningsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCheckEcsWarningsResponse>(await this.doRPCRequest("DescribeCheckEcsWarnings", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCheckEcsWarningsResponse({}));
  }

  async describeCheckEcsWarnings(request: DescribeCheckEcsWarningsRequest): Promise<DescribeCheckEcsWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckEcsWarningsWithOptions(request, runtime);
  }

  async describeCheckWarningDetailWithOptions(request: DescribeCheckWarningDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCheckWarningDetailResponse>(await this.doRPCRequest("DescribeCheckWarningDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCheckWarningDetailResponse({}));
  }

  async describeCheckWarningDetail(request: DescribeCheckWarningDetailRequest): Promise<DescribeCheckWarningDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningDetailWithOptions(request, runtime);
  }

  async describeCheckWarningSummaryWithOptions(request: DescribeCheckWarningSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCheckWarningSummaryResponse>(await this.doRPCRequest("DescribeCheckWarningSummary", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCheckWarningSummaryResponse({}));
  }

  async describeCheckWarningSummary(request: DescribeCheckWarningSummaryRequest): Promise<DescribeCheckWarningSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningSummaryWithOptions(request, runtime);
  }

  async describeCheckWarningsWithOptions(request: DescribeCheckWarningsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCheckWarningsResponse>(await this.doRPCRequest("DescribeCheckWarnings", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCheckWarningsResponse({}));
  }

  async describeCheckWarnings(request: DescribeCheckWarningsRequest): Promise<DescribeCheckWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningsWithOptions(request, runtime);
  }

  async describeCloudCenterInstancesWithOptions(request: DescribeCloudCenterInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudCenterInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCloudCenterInstancesResponse>(await this.doRPCRequest("DescribeCloudCenterInstances", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCloudCenterInstancesResponse({}));
  }

  async describeCloudCenterInstances(request: DescribeCloudCenterInstancesRequest): Promise<DescribeCloudCenterInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudCenterInstancesWithOptions(request, runtime);
  }

  async describeCloudProductFieldStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCloudProductFieldStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeCloudProductFieldStatisticsResponse>(await this.doRPCRequest("DescribeCloudProductFieldStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCloudProductFieldStatisticsResponse({}));
  }

  async describeCloudProductFieldStatistics(): Promise<DescribeCloudProductFieldStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudProductFieldStatisticsWithOptions(runtime);
  }

  async describeConcernNecessityWithOptions(request: DescribeConcernNecessityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConcernNecessityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConcernNecessityResponse>(await this.doRPCRequest("DescribeConcernNecessity", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConcernNecessityResponse({}));
  }

  async describeConcernNecessity(request: DescribeConcernNecessityRequest): Promise<DescribeConcernNecessityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConcernNecessityWithOptions(request, runtime);
  }

  async describeContainerStatisticsWithOptions(request: DescribeContainerStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeContainerStatisticsResponse>(await this.doRPCRequest("DescribeContainerStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeContainerStatisticsResponse({}));
  }

  async describeContainerStatistics(request: DescribeContainerStatisticsRequest): Promise<DescribeContainerStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerStatisticsWithOptions(request, runtime);
  }

  async describeCriteriaWithOptions(request: DescribeCriteriaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCriteriaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCriteriaResponse>(await this.doRPCRequest("DescribeCriteria", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCriteriaResponse({}));
  }

  async describeCriteria(request: DescribeCriteriaRequest): Promise<DescribeCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCriteriaWithOptions(request, runtime);
  }

  async describeDialogMessagesWithOptions(request: DescribeDialogMessagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDialogMessagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDialogMessagesResponse>(await this.doRPCRequest("DescribeDialogMessages", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDialogMessagesResponse({}));
  }

  async describeDialogMessages(request: DescribeDialogMessagesRequest): Promise<DescribeDialogMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDialogMessagesWithOptions(request, runtime);
  }

  async describeDingTalkWithOptions(request: DescribeDingTalkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDingTalkResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDingTalkResponse>(await this.doRPCRequest("DescribeDingTalk", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDingTalkResponse({}));
  }

  async describeDingTalk(request: DescribeDingTalkRequest): Promise<DescribeDingTalkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDingTalkWithOptions(request, runtime);
  }

  async describeDomainCountWithOptions(request: DescribeDomainCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainCountResponse>(await this.doRPCRequest("DescribeDomainCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainCountResponse({}));
  }

  async describeDomainCount(request: DescribeDomainCountRequest): Promise<DescribeDomainCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCountWithOptions(request, runtime);
  }

  async describeDomainDetailWithOptions(request: DescribeDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainDetailResponse>(await this.doRPCRequest("DescribeDomainDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainDetailResponse({}));
  }

  async describeDomainDetail(request: DescribeDomainDetailRequest): Promise<DescribeDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDetailWithOptions(request, runtime);
  }

  async describeDomainListWithOptions(request: DescribeDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainListResponse>(await this.doRPCRequest("DescribeDomainList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainListResponse({}));
  }

  async describeDomainList(request: DescribeDomainListRequest): Promise<DescribeDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainListWithOptions(request, runtime);
  }

  async describeEmgVulItemWithOptions(request: DescribeEmgVulItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEmgVulItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEmgVulItemResponse>(await this.doRPCRequest("DescribeEmgVulItem", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEmgVulItemResponse({}));
  }

  async describeEmgVulItem(request: DescribeEmgVulItemRequest): Promise<DescribeEmgVulItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmgVulItemWithOptions(request, runtime);
  }

  async describeExcludeSystemPathWithOptions(request: DescribeExcludeSystemPathRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcludeSystemPathResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExcludeSystemPathResponse>(await this.doRPCRequest("DescribeExcludeSystemPath", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExcludeSystemPathResponse({}));
  }

  async describeExcludeSystemPath(request: DescribeExcludeSystemPathRequest): Promise<DescribeExcludeSystemPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcludeSystemPathWithOptions(request, runtime);
  }

  async describeExportInfoWithOptions(request: DescribeExportInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExportInfoResponse>(await this.doRPCRequest("DescribeExportInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExportInfoResponse({}));
  }

  async describeExportInfo(request: DescribeExportInfoRequest): Promise<DescribeExportInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportInfoWithOptions(request, runtime);
  }

  async describeExposedInstanceCriteriaWithOptions(request: DescribeExposedInstanceCriteriaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedInstanceCriteriaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExposedInstanceCriteriaResponse>(await this.doRPCRequest("DescribeExposedInstanceCriteria", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedInstanceCriteriaResponse({}));
  }

  async describeExposedInstanceCriteria(request: DescribeExposedInstanceCriteriaRequest): Promise<DescribeExposedInstanceCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedInstanceCriteriaWithOptions(request, runtime);
  }

  async describeExposedInstanceDetailWithOptions(request: DescribeExposedInstanceDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedInstanceDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExposedInstanceDetailResponse>(await this.doRPCRequest("DescribeExposedInstanceDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedInstanceDetailResponse({}));
  }

  async describeExposedInstanceDetail(request: DescribeExposedInstanceDetailRequest): Promise<DescribeExposedInstanceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedInstanceDetailWithOptions(request, runtime);
  }

  async describeExposedInstanceListWithOptions(request: DescribeExposedInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedInstanceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExposedInstanceListResponse>(await this.doRPCRequest("DescribeExposedInstanceList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedInstanceListResponse({}));
  }

  async describeExposedInstanceList(request: DescribeExposedInstanceListRequest): Promise<DescribeExposedInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedInstanceListWithOptions(request, runtime);
  }

  async describeExposedRiskNumWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeExposedRiskNumResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeExposedRiskNumResponse>(await this.doRPCRequest("DescribeExposedRiskNum", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedRiskNumResponse({}));
  }

  async describeExposedRiskNum(): Promise<DescribeExposedRiskNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedRiskNumWithOptions(runtime);
  }

  async describeExposedStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeExposedStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeExposedStatisticsResponse>(await this.doRPCRequest("DescribeExposedStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedStatisticsResponse({}));
  }

  async describeExposedStatistics(): Promise<DescribeExposedStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedStatisticsWithOptions(runtime);
  }

  async describeExposedStatisticsDetailWithOptions(request: DescribeExposedStatisticsDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedStatisticsDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExposedStatisticsDetailResponse>(await this.doRPCRequest("DescribeExposedStatisticsDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedStatisticsDetailResponse({}));
  }

  async describeExposedStatisticsDetail(request: DescribeExposedStatisticsDetailRequest): Promise<DescribeExposedStatisticsDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedStatisticsDetailWithOptions(request, runtime);
  }

  async describeFieldStatisticsWithOptions(request: DescribeFieldStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFieldStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFieldStatisticsResponse>(await this.doRPCRequest("DescribeFieldStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFieldStatisticsResponse({}));
  }

  async describeFieldStatistics(request: DescribeFieldStatisticsRequest): Promise<DescribeFieldStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFieldStatisticsWithOptions(request, runtime);
  }

  async describeFrontVulPatchListWithOptions(request: DescribeFrontVulPatchListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFrontVulPatchListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFrontVulPatchListResponse>(await this.doRPCRequest("DescribeFrontVulPatchList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFrontVulPatchListResponse({}));
  }

  async describeFrontVulPatchList(request: DescribeFrontVulPatchListRequest): Promise<DescribeFrontVulPatchListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFrontVulPatchListWithOptions(request, runtime);
  }

  async describeGraph4InvestigationOnlineWithOptions(request: DescribeGraph4InvestigationOnlineRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGraph4InvestigationOnlineResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGraph4InvestigationOnlineResponse>(await this.doRPCRequest("DescribeGraph4InvestigationOnline", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGraph4InvestigationOnlineResponse({}));
  }

  async describeGraph4InvestigationOnline(request: DescribeGraph4InvestigationOnlineRequest): Promise<DescribeGraph4InvestigationOnlineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGraph4InvestigationOnlineWithOptions(request, runtime);
  }

  async describeGroupedContainerInstancesWithOptions(request: DescribeGroupedContainerInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedContainerInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupedContainerInstancesResponse>(await this.doRPCRequest("DescribeGroupedContainerInstances", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupedContainerInstancesResponse({}));
  }

  async describeGroupedContainerInstances(request: DescribeGroupedContainerInstancesRequest): Promise<DescribeGroupedContainerInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedContainerInstancesWithOptions(request, runtime);
  }

  async describeGroupedInstancesWithOptions(request: DescribeGroupedInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupedInstancesResponse>(await this.doRPCRequest("DescribeGroupedInstances", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupedInstancesResponse({}));
  }

  async describeGroupedInstances(request: DescribeGroupedInstancesRequest): Promise<DescribeGroupedInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedInstancesWithOptions(request, runtime);
  }

  async describeGroupedMaliciousFilesWithOptions(request: DescribeGroupedMaliciousFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedMaliciousFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupedMaliciousFilesResponse>(await this.doRPCRequest("DescribeGroupedMaliciousFiles", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupedMaliciousFilesResponse({}));
  }

  async describeGroupedMaliciousFiles(request: DescribeGroupedMaliciousFilesRequest): Promise<DescribeGroupedMaliciousFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedMaliciousFilesWithOptions(request, runtime);
  }

  async describeGroupedTagsWithOptions(request: DescribeGroupedTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupedTagsResponse>(await this.doRPCRequest("DescribeGroupedTags", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupedTagsResponse({}));
  }

  async describeGroupedTags(request: DescribeGroupedTagsRequest): Promise<DescribeGroupedTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedTagsWithOptions(request, runtime);
  }

  async describeGroupedVulWithOptions(request: DescribeGroupedVulRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedVulResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupedVulResponse>(await this.doRPCRequest("DescribeGroupedVul", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupedVulResponse({}));
  }

  async describeGroupedVul(request: DescribeGroupedVulRequest): Promise<DescribeGroupedVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedVulWithOptions(request, runtime);
  }

  async describeHoneyPotAuthWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeHoneyPotAuthResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeHoneyPotAuthResponse>(await this.doRPCRequest("DescribeHoneyPotAuth", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHoneyPotAuthResponse({}));
  }

  async describeHoneyPotAuth(): Promise<DescribeHoneyPotAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHoneyPotAuthWithOptions(runtime);
  }

  async describeHoneyPotSuspStatisticsWithOptions(request: DescribeHoneyPotSuspStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHoneyPotSuspStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHoneyPotSuspStatisticsResponse>(await this.doRPCRequest("DescribeHoneyPotSuspStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHoneyPotSuspStatisticsResponse({}));
  }

  async describeHoneyPotSuspStatistics(request: DescribeHoneyPotSuspStatisticsRequest): Promise<DescribeHoneyPotSuspStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHoneyPotSuspStatisticsWithOptions(request, runtime);
  }

  async describeImageFixTaskWithOptions(request: DescribeImageFixTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageFixTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageFixTaskResponse>(await this.doRPCRequest("DescribeImageFixTask", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageFixTaskResponse({}));
  }

  async describeImageFixTask(request: DescribeImageFixTaskRequest): Promise<DescribeImageFixTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageFixTaskWithOptions(request, runtime);
  }

  async describeImageGroupedVulListWithOptions(request: DescribeImageGroupedVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageGroupedVulListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageGroupedVulListResponse>(await this.doRPCRequest("DescribeImageGroupedVulList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageGroupedVulListResponse({}));
  }

  async describeImageGroupedVulList(request: DescribeImageGroupedVulListRequest): Promise<DescribeImageGroupedVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageGroupedVulListWithOptions(request, runtime);
  }

  async describeImageInstancesWithOptions(request: DescribeImageInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageInstancesResponse>(await this.doRPCRequest("DescribeImageInstances", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageInstancesResponse({}));
  }

  async describeImageInstances(request: DescribeImageInstancesRequest): Promise<DescribeImageInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageInstancesWithOptions(request, runtime);
  }

  async describeImageScanAuthCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeImageScanAuthCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeImageScanAuthCountResponse>(await this.doRPCRequest("DescribeImageScanAuthCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageScanAuthCountResponse({}));
  }

  async describeImageScanAuthCount(): Promise<DescribeImageScanAuthCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageScanAuthCountWithOptions(runtime);
  }

  async describeImageStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeImageStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeImageStatisticsResponse>(await this.doRPCRequest("DescribeImageStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageStatisticsResponse({}));
  }

  async describeImageStatistics(): Promise<DescribeImageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageStatisticsWithOptions(runtime);
  }

  async describeImageVulListWithOptions(request: DescribeImageVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageVulListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageVulListResponse>(await this.doRPCRequest("DescribeImageVulList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageVulListResponse({}));
  }

  async describeImageVulList(request: DescribeImageVulListRequest): Promise<DescribeImageVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageVulListWithOptions(request, runtime);
  }

  async describeInstallCaptchaWithOptions(request: DescribeInstallCaptchaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstallCaptchaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstallCaptchaResponse>(await this.doRPCRequest("DescribeInstallCaptcha", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstallCaptchaResponse({}));
  }

  async describeInstallCaptcha(request: DescribeInstallCaptchaRequest): Promise<DescribeInstallCaptchaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstallCaptchaWithOptions(request, runtime);
  }

  async describeInstallCodesWithOptions(request: DescribeInstallCodesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstallCodesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstallCodesResponse>(await this.doRPCRequest("DescribeInstallCodes", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstallCodesResponse({}));
  }

  async describeInstallCodes(request: DescribeInstallCodesRequest): Promise<DescribeInstallCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstallCodesWithOptions(request, runtime);
  }

  async describeInstanceAntiBruteForceRulesWithOptions(request: DescribeInstanceAntiBruteForceRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAntiBruteForceRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceAntiBruteForceRulesResponse>(await this.doRPCRequest("DescribeInstanceAntiBruteForceRules", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceAntiBruteForceRulesResponse({}));
  }

  async describeInstanceAntiBruteForceRules(request: DescribeInstanceAntiBruteForceRulesRequest): Promise<DescribeInstanceAntiBruteForceRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAntiBruteForceRulesWithOptions(request, runtime);
  }

  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.doRPCRequest("DescribeInstanceStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeIpInfoWithOptions(request: DescribeIpInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIpInfoResponse>(await this.doRPCRequest("DescribeIpInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIpInfoResponse({}));
  }

  async describeIpInfo(request: DescribeIpInfoRequest): Promise<DescribeIpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpInfoWithOptions(request, runtime);
  }

  async describeLogstoreStorageWithOptions(request: DescribeLogstoreStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogstoreStorageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogstoreStorageResponse>(await this.doRPCRequest("DescribeLogstoreStorage", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogstoreStorageResponse({}));
  }

  async describeLogstoreStorage(request: DescribeLogstoreStorageRequest): Promise<DescribeLogstoreStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogstoreStorageWithOptions(request, runtime);
  }

  async describeModuleConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeModuleConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeModuleConfigResponse>(await this.doRPCRequest("DescribeModuleConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeModuleConfigResponse({}));
  }

  async describeModuleConfig(): Promise<DescribeModuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModuleConfigWithOptions(runtime);
  }

  async describeNoticeConfigWithOptions(request: DescribeNoticeConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNoticeConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNoticeConfigResponse>(await this.doRPCRequest("DescribeNoticeConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNoticeConfigResponse({}));
  }

  async describeNoticeConfig(request: DescribeNoticeConfigRequest): Promise<DescribeNoticeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNoticeConfigWithOptions(request, runtime);
  }

  async describePropertyCountWithOptions(request: DescribePropertyCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyCountResponse>(await this.doRPCRequest("DescribePropertyCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyCountResponse({}));
  }

  async describePropertyCount(request: DescribePropertyCountRequest): Promise<DescribePropertyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyCountWithOptions(request, runtime);
  }

  async describePropertyCronDetailWithOptions(request: DescribePropertyCronDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyCronDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyCronDetailResponse>(await this.doRPCRequest("DescribePropertyCronDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyCronDetailResponse({}));
  }

  async describePropertyCronDetail(request: DescribePropertyCronDetailRequest): Promise<DescribePropertyCronDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyCronDetailWithOptions(request, runtime);
  }

  async describePropertyPortDetailWithOptions(request: DescribePropertyPortDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyPortDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyPortDetailResponse>(await this.doRPCRequest("DescribePropertyPortDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyPortDetailResponse({}));
  }

  async describePropertyPortDetail(request: DescribePropertyPortDetailRequest): Promise<DescribePropertyPortDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyPortDetailWithOptions(request, runtime);
  }

  async describePropertyPortItemWithOptions(request: DescribePropertyPortItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyPortItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyPortItemResponse>(await this.doRPCRequest("DescribePropertyPortItem", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyPortItemResponse({}));
  }

  async describePropertyPortItem(request: DescribePropertyPortItemRequest): Promise<DescribePropertyPortItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyPortItemWithOptions(request, runtime);
  }

  async describePropertyProcDetailWithOptions(request: DescribePropertyProcDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyProcDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyProcDetailResponse>(await this.doRPCRequest("DescribePropertyProcDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyProcDetailResponse({}));
  }

  async describePropertyProcDetail(request: DescribePropertyProcDetailRequest): Promise<DescribePropertyProcDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyProcDetailWithOptions(request, runtime);
  }

  async describePropertyProcItemWithOptions(request: DescribePropertyProcItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyProcItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyProcItemResponse>(await this.doRPCRequest("DescribePropertyProcItem", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyProcItemResponse({}));
  }

  async describePropertyProcItem(request: DescribePropertyProcItemRequest): Promise<DescribePropertyProcItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyProcItemWithOptions(request, runtime);
  }

  async describePropertyScaDetailWithOptions(request: DescribePropertyScaDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyScaDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyScaDetailResponse>(await this.doRPCRequest("DescribePropertyScaDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyScaDetailResponse({}));
  }

  async describePropertyScaDetail(request: DescribePropertyScaDetailRequest): Promise<DescribePropertyScaDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyScaDetailWithOptions(request, runtime);
  }

  async describePropertySoftwareDetailWithOptions(request: DescribePropertySoftwareDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertySoftwareDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertySoftwareDetailResponse>(await this.doRPCRequest("DescribePropertySoftwareDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertySoftwareDetailResponse({}));
  }

  async describePropertySoftwareDetail(request: DescribePropertySoftwareDetailRequest): Promise<DescribePropertySoftwareDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertySoftwareDetailWithOptions(request, runtime);
  }

  async describePropertySoftwareItemWithOptions(request: DescribePropertySoftwareItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertySoftwareItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertySoftwareItemResponse>(await this.doRPCRequest("DescribePropertySoftwareItem", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertySoftwareItemResponse({}));
  }

  async describePropertySoftwareItem(request: DescribePropertySoftwareItemRequest): Promise<DescribePropertySoftwareItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertySoftwareItemWithOptions(request, runtime);
  }

  async describePropertyUsageNewestWithOptions(request: DescribePropertyUsageNewestRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyUsageNewestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyUsageNewestResponse>(await this.doRPCRequest("DescribePropertyUsageNewest", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyUsageNewestResponse({}));
  }

  async describePropertyUsageNewest(request: DescribePropertyUsageNewestRequest): Promise<DescribePropertyUsageNewestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyUsageNewestWithOptions(request, runtime);
  }

  async describePropertyUserDetailWithOptions(request: DescribePropertyUserDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyUserDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyUserDetailResponse>(await this.doRPCRequest("DescribePropertyUserDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyUserDetailResponse({}));
  }

  async describePropertyUserDetail(request: DescribePropertyUserDetailRequest): Promise<DescribePropertyUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyUserDetailWithOptions(request, runtime);
  }

  async describePropertyUserItemWithOptions(request: DescribePropertyUserItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyUserItemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePropertyUserItemResponse>(await this.doRPCRequest("DescribePropertyUserItem", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePropertyUserItemResponse({}));
  }

  async describePropertyUserItem(request: DescribePropertyUserItemRequest): Promise<DescribePropertyUserItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyUserItemWithOptions(request, runtime);
  }

  async describeQuaraFileDownloadInfoWithOptions(request: DescribeQuaraFileDownloadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeQuaraFileDownloadInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeQuaraFileDownloadInfoResponse>(await this.doRPCRequest("DescribeQuaraFileDownloadInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeQuaraFileDownloadInfoResponse({}));
  }

  async describeQuaraFileDownloadInfo(request: DescribeQuaraFileDownloadInfoRequest): Promise<DescribeQuaraFileDownloadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeQuaraFileDownloadInfoWithOptions(request, runtime);
  }

  async describeRestoreJobsWithOptions(request: DescribeRestoreJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreJobsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestoreJobsResponse>(await this.doRPCRequest("DescribeRestoreJobs", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestoreJobsResponse({}));
  }

  async describeRestoreJobs(request: DescribeRestoreJobsRequest): Promise<DescribeRestoreJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreJobsWithOptions(request, runtime);
  }

  async describeRestorePlansWithOptions(request: DescribeRestorePlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestorePlansResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRestorePlansResponse>(await this.doRPCRequest("DescribeRestorePlans", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRestorePlansResponse({}));
  }

  async describeRestorePlans(request: DescribeRestorePlansRequest): Promise<DescribeRestorePlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestorePlansWithOptions(request, runtime);
  }

  async describeRiskCheckItemResultWithOptions(request: DescribeRiskCheckItemResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskCheckItemResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskCheckItemResultResponse>(await this.doRPCRequest("DescribeRiskCheckItemResult", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskCheckItemResultResponse({}));
  }

  async describeRiskCheckItemResult(request: DescribeRiskCheckItemResultRequest): Promise<DescribeRiskCheckItemResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskCheckItemResultWithOptions(request, runtime);
  }

  async describeRiskCheckResultWithOptions(request: DescribeRiskCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskCheckResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskCheckResultResponse>(await this.doRPCRequest("DescribeRiskCheckResult", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskCheckResultResponse({}));
  }

  async describeRiskCheckResult(request: DescribeRiskCheckResultRequest): Promise<DescribeRiskCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskCheckResultWithOptions(request, runtime);
  }

  async describeRiskCheckSummaryWithOptions(request: DescribeRiskCheckSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskCheckSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskCheckSummaryResponse>(await this.doRPCRequest("DescribeRiskCheckSummary", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskCheckSummaryResponse({}));
  }

  async describeRiskCheckSummary(request: DescribeRiskCheckSummaryRequest): Promise<DescribeRiskCheckSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskCheckSummaryWithOptions(request, runtime);
  }

  async describeRiskItemTypeWithOptions(request: DescribeRiskItemTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskItemTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskItemTypeResponse>(await this.doRPCRequest("DescribeRiskItemType", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskItemTypeResponse({}));
  }

  async describeRiskItemType(request: DescribeRiskItemTypeRequest): Promise<DescribeRiskItemTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskItemTypeWithOptions(request, runtime);
  }

  async describeRiskListCheckResultWithOptions(request: DescribeRiskListCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskListCheckResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRiskListCheckResultResponse>(await this.doRPCRequest("DescribeRiskListCheckResult", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRiskListCheckResultResponse({}));
  }

  async describeRiskListCheckResult(request: DescribeRiskListCheckResultRequest): Promise<DescribeRiskListCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskListCheckResultWithOptions(request, runtime);
  }

  async describeScanTaskProgressWithOptions(request: DescribeScanTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScanTaskProgressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScanTaskProgressResponse>(await this.doRPCRequest("DescribeScanTaskProgress", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScanTaskProgressResponse({}));
  }

  async describeScanTaskProgress(request: DescribeScanTaskProgressRequest): Promise<DescribeScanTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScanTaskProgressWithOptions(request, runtime);
  }

  async describeSearchConditionWithOptions(request: DescribeSearchConditionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSearchConditionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSearchConditionResponse>(await this.doRPCRequest("DescribeSearchCondition", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSearchConditionResponse({}));
  }

  async describeSearchCondition(request: DescribeSearchConditionRequest): Promise<DescribeSearchConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSearchConditionWithOptions(request, runtime);
  }

  async describeSecureSuggestionWithOptions(request: DescribeSecureSuggestionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecureSuggestionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecureSuggestionResponse>(await this.doRPCRequest("DescribeSecureSuggestion", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecureSuggestionResponse({}));
  }

  async describeSecureSuggestion(request: DescribeSecureSuggestionRequest): Promise<DescribeSecureSuggestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecureSuggestionWithOptions(request, runtime);
  }

  async describeSecurityCheckScheduleConfigWithOptions(request: DescribeSecurityCheckScheduleConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityCheckScheduleConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityCheckScheduleConfigResponse>(await this.doRPCRequest("DescribeSecurityCheckScheduleConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityCheckScheduleConfigResponse({}));
  }

  async describeSecurityCheckScheduleConfig(request: DescribeSecurityCheckScheduleConfigRequest): Promise<DescribeSecurityCheckScheduleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityCheckScheduleConfigWithOptions(request, runtime);
  }

  async describeSecurityEventOperationStatusWithOptions(request: DescribeSecurityEventOperationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityEventOperationStatusResponse>(await this.doRPCRequest("DescribeSecurityEventOperationStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityEventOperationStatusResponse({}));
  }

  async describeSecurityEventOperationStatus(request: DescribeSecurityEventOperationStatusRequest): Promise<DescribeSecurityEventOperationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationStatusWithOptions(request, runtime);
  }

  async describeSecurityEventOperationsWithOptions(request: DescribeSecurityEventOperationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityEventOperationsResponse>(await this.doRPCRequest("DescribeSecurityEventOperations", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityEventOperationsResponse({}));
  }

  async describeSecurityEventOperations(request: DescribeSecurityEventOperationsRequest): Promise<DescribeSecurityEventOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationsWithOptions(request, runtime);
  }

  async describeSecurityStatInfoWithOptions(request: DescribeSecurityStatInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityStatInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityStatInfoResponse>(await this.doRPCRequest("DescribeSecurityStatInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityStatInfoResponse({}));
  }

  async describeSecurityStatInfo(request: DescribeSecurityStatInfoRequest): Promise<DescribeSecurityStatInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityStatInfoWithOptions(request, runtime);
  }

  async describeServiceLinkedRoleStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeServiceLinkedRoleStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeServiceLinkedRoleStatusResponse>(await this.doRPCRequest("DescribeServiceLinkedRoleStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServiceLinkedRoleStatusResponse({}));
  }

  async describeServiceLinkedRoleStatus(): Promise<DescribeServiceLinkedRoleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleStatusWithOptions(runtime);
  }

  async describeSimilarEventScenariosWithOptions(request: DescribeSimilarEventScenariosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSimilarEventScenariosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSimilarEventScenariosResponse>(await this.doRPCRequest("DescribeSimilarEventScenarios", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSimilarEventScenariosResponse({}));
  }

  async describeSimilarEventScenarios(request: DescribeSimilarEventScenariosRequest): Promise<DescribeSimilarEventScenariosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSimilarEventScenariosWithOptions(request, runtime);
  }

  async describeSimilarSecurityEventsWithOptions(request: DescribeSimilarSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSimilarSecurityEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSimilarSecurityEventsResponse>(await this.doRPCRequest("DescribeSimilarSecurityEvents", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSimilarSecurityEventsResponse({}));
  }

  async describeSimilarSecurityEvents(request: DescribeSimilarSecurityEventsRequest): Promise<DescribeSimilarSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSimilarSecurityEventsWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSnapshotsResponse>(await this.doRPCRequest("DescribeSnapshots", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async describeStrategyWithOptions(request: DescribeStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStrategyResponse>(await this.doRPCRequest("DescribeStrategy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStrategyResponse({}));
  }

  async describeStrategy(request: DescribeStrategyRequest): Promise<DescribeStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyWithOptions(request, runtime);
  }

  async describeStrategyExecDetailWithOptions(request: DescribeStrategyExecDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyExecDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStrategyExecDetailResponse>(await this.doRPCRequest("DescribeStrategyExecDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStrategyExecDetailResponse({}));
  }

  async describeStrategyExecDetail(request: DescribeStrategyExecDetailRequest): Promise<DescribeStrategyExecDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyExecDetailWithOptions(request, runtime);
  }

  async describeStrategyProcessWithOptions(request: DescribeStrategyProcessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyProcessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStrategyProcessResponse>(await this.doRPCRequest("DescribeStrategyProcess", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStrategyProcessResponse({}));
  }

  async describeStrategyProcess(request: DescribeStrategyProcessRequest): Promise<DescribeStrategyProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyProcessWithOptions(request, runtime);
  }

  async describeStrategyTargetWithOptions(request: DescribeStrategyTargetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStrategyTargetResponse>(await this.doRPCRequest("DescribeStrategyTarget", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStrategyTargetResponse({}));
  }

  async describeStrategyTarget(request: DescribeStrategyTargetRequest): Promise<DescribeStrategyTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyTargetWithOptions(request, runtime);
  }

  async describeSummaryInfoWithOptions(request: DescribeSummaryInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSummaryInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSummaryInfoResponse>(await this.doRPCRequest("DescribeSummaryInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSummaryInfoResponse({}));
  }

  async describeSummaryInfo(request: DescribeSummaryInfoRequest): Promise<DescribeSummaryInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSummaryInfoWithOptions(request, runtime);
  }

  async describeSupportRegionWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeSupportRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeSupportRegionResponse>(await this.doRPCRequest("DescribeSupportRegion", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSupportRegionResponse({}));
  }

  async describeSupportRegion(): Promise<DescribeSupportRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportRegionWithOptions(runtime);
  }

  async describeSuspEventDetailWithOptions(request: DescribeSuspEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSuspEventDetailResponse>(await this.doRPCRequest("DescribeSuspEventDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSuspEventDetailResponse({}));
  }

  async describeSuspEventDetail(request: DescribeSuspEventDetailRequest): Promise<DescribeSuspEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventDetailWithOptions(request, runtime);
  }

  async describeSuspEventQuaraFilesWithOptions(request: DescribeSuspEventQuaraFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventQuaraFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSuspEventQuaraFilesResponse>(await this.doRPCRequest("DescribeSuspEventQuaraFiles", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSuspEventQuaraFilesResponse({}));
  }

  async describeSuspEventQuaraFiles(request: DescribeSuspEventQuaraFilesRequest): Promise<DescribeSuspEventQuaraFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventQuaraFilesWithOptions(request, runtime);
  }

  async describeSuspEventsWithOptions(request: DescribeSuspEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSuspEventsResponse>(await this.doRPCRequest("DescribeSuspEvents", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSuspEventsResponse({}));
  }

  async describeSuspEvents(request: DescribeSuspEventsRequest): Promise<DescribeSuspEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  async describeTaskErrorLogWithOptions(request: DescribeTaskErrorLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskErrorLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTaskErrorLogResponse>(await this.doRPCRequest("DescribeTaskErrorLog", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTaskErrorLogResponse({}));
  }

  async describeTaskErrorLog(request: DescribeTaskErrorLogRequest): Promise<DescribeTaskErrorLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskErrorLogWithOptions(request, runtime);
  }

  async describeUniBackupDatabaseWithOptions(request: DescribeUniBackupDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUniBackupDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUniBackupDatabaseResponse>(await this.doRPCRequest("DescribeUniBackupDatabase", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUniBackupDatabaseResponse({}));
  }

  async describeUniBackupDatabase(request: DescribeUniBackupDatabaseRequest): Promise<DescribeUniBackupDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUniBackupDatabaseWithOptions(request, runtime);
  }

  async describeUniBackupPoliciesWithOptions(request: DescribeUniBackupPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUniBackupPoliciesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUniBackupPoliciesResponse>(await this.doRPCRequest("DescribeUniBackupPolicies", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUniBackupPoliciesResponse({}));
  }

  async describeUniBackupPolicies(request: DescribeUniBackupPoliciesRequest): Promise<DescribeUniBackupPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUniBackupPoliciesWithOptions(request, runtime);
  }

  async describeUniBackupPolicyDetailWithOptions(request: DescribeUniBackupPolicyDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUniBackupPolicyDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUniBackupPolicyDetailResponse>(await this.doRPCRequest("DescribeUniBackupPolicyDetail", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUniBackupPolicyDetailResponse({}));
  }

  async describeUniBackupPolicyDetail(request: DescribeUniBackupPolicyDetailRequest): Promise<DescribeUniBackupPolicyDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUniBackupPolicyDetailWithOptions(request, runtime);
  }

  async describeUniBackupStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUniBackupStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeUniBackupStatisticsResponse>(await this.doRPCRequest("DescribeUniBackupStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUniBackupStatisticsResponse({}));
  }

  async describeUniBackupStatistics(): Promise<DescribeUniBackupStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUniBackupStatisticsWithOptions(runtime);
  }

  async describeUniRecoverableListWithOptions(request: DescribeUniRecoverableListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUniRecoverableListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUniRecoverableListResponse>(await this.doRPCRequest("DescribeUniRecoverableList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUniRecoverableListResponse({}));
  }

  async describeUniRecoverableList(request: DescribeUniRecoverableListRequest): Promise<DescribeUniRecoverableListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUniRecoverableListWithOptions(request, runtime);
  }

  async describeUniSupportRegionWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUniSupportRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeUniSupportRegionResponse>(await this.doRPCRequest("DescribeUniSupportRegion", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUniSupportRegionResponse({}));
  }

  async describeUniSupportRegion(): Promise<DescribeUniSupportRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUniSupportRegionWithOptions(runtime);
  }

  async describeUserBackupMachinesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUserBackupMachinesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeUserBackupMachinesResponse>(await this.doRPCRequest("DescribeUserBackupMachines", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserBackupMachinesResponse({}));
  }

  async describeUserBackupMachines(): Promise<DescribeUserBackupMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBackupMachinesWithOptions(runtime);
  }

  async describeUserBaselineAuthorizationWithOptions(request: DescribeUserBaselineAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBaselineAuthorizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserBaselineAuthorizationResponse>(await this.doRPCRequest("DescribeUserBaselineAuthorization", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserBaselineAuthorizationResponse({}));
  }

  async describeUserBaselineAuthorization(request: DescribeUserBaselineAuthorizationRequest): Promise<DescribeUserBaselineAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBaselineAuthorizationWithOptions(request, runtime);
  }

  async describeUserLayoutAuthorizationWithOptions(request: DescribeUserLayoutAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserLayoutAuthorizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserLayoutAuthorizationResponse>(await this.doRPCRequest("DescribeUserLayoutAuthorization", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserLayoutAuthorizationResponse({}));
  }

  async describeUserLayoutAuthorization(request: DescribeUserLayoutAuthorizationRequest): Promise<DescribeUserLayoutAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserLayoutAuthorizationWithOptions(request, runtime);
  }

  async describeUuidsByVulNamesWithOptions(request: DescribeUuidsByVulNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUuidsByVulNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUuidsByVulNamesResponse>(await this.doRPCRequest("DescribeUuidsByVulNames", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUuidsByVulNamesResponse({}));
  }

  async describeUuidsByVulNames(request: DescribeUuidsByVulNamesRequest): Promise<DescribeUuidsByVulNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUuidsByVulNamesWithOptions(request, runtime);
  }

  async describeVersionConfigWithOptions(request: DescribeVersionConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVersionConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVersionConfigResponse>(await this.doRPCRequest("DescribeVersionConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVersionConfigResponse({}));
  }

  async describeVersionConfig(request: DescribeVersionConfigRequest): Promise<DescribeVersionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVersionConfigWithOptions(request, runtime);
  }

  async describeVolDingdingMessageWithOptions(request: DescribeVolDingdingMessageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVolDingdingMessageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVolDingdingMessageResponse>(await this.doRPCRequest("DescribeVolDingdingMessage", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVolDingdingMessageResponse({}));
  }

  async describeVolDingdingMessage(request: DescribeVolDingdingMessageRequest): Promise<DescribeVolDingdingMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVolDingdingMessageWithOptions(request, runtime);
  }

  async describeVpcHoneyPotCriteriaWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVpcHoneyPotCriteriaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeVpcHoneyPotCriteriaResponse>(await this.doRPCRequest("DescribeVpcHoneyPotCriteria", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcHoneyPotCriteriaResponse({}));
  }

  async describeVpcHoneyPotCriteria(): Promise<DescribeVpcHoneyPotCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcHoneyPotCriteriaWithOptions(runtime);
  }

  async describeVpcHoneyPotListWithOptions(request: DescribeVpcHoneyPotListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcHoneyPotListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcHoneyPotListResponse>(await this.doRPCRequest("DescribeVpcHoneyPotList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcHoneyPotListResponse({}));
  }

  async describeVpcHoneyPotList(request: DescribeVpcHoneyPotListRequest): Promise<DescribeVpcHoneyPotListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcHoneyPotListWithOptions(request, runtime);
  }

  async describeVpcListWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVpcListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeVpcListResponse>(await this.doRPCRequest("DescribeVpcList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcListResponse({}));
  }

  async describeVpcList(): Promise<DescribeVpcListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcListWithOptions(runtime);
  }

  async describeVulDetailsWithOptions(request: DescribeVulDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulDetailsResponse>(await this.doRPCRequest("DescribeVulDetails", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulDetailsResponse({}));
  }

  async describeVulDetails(request: DescribeVulDetailsRequest): Promise<DescribeVulDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulDetailsWithOptions(request, runtime);
  }

  async describeVulExportInfoWithOptions(request: DescribeVulExportInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulExportInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulExportInfoResponse>(await this.doRPCRequest("DescribeVulExportInfo", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulExportInfoResponse({}));
  }

  async describeVulExportInfo(request: DescribeVulExportInfoRequest): Promise<DescribeVulExportInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulExportInfoWithOptions(request, runtime);
  }

  async describeVulListWithOptions(request: DescribeVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulListResponse>(await this.doRPCRequest("DescribeVulList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulListResponse({}));
  }

  async describeVulList(request: DescribeVulListRequest): Promise<DescribeVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulListWithOptions(request, runtime);
  }

  async describeVulWhitelistWithOptions(request: DescribeVulWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulWhitelistResponse>(await this.doRPCRequest("DescribeVulWhitelist", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulWhitelistResponse({}));
  }

  async describeVulWhitelist(request: DescribeVulWhitelistRequest): Promise<DescribeVulWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulWhitelistWithOptions(request, runtime);
  }

  async describeWarningMachinesWithOptions(request: DescribeWarningMachinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWarningMachinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWarningMachinesResponse>(await this.doRPCRequest("DescribeWarningMachines", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWarningMachinesResponse({}));
  }

  async describeWarningMachines(request: DescribeWarningMachinesRequest): Promise<DescribeWarningMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWarningMachinesWithOptions(request, runtime);
  }

  async describeWebLockBindListWithOptions(request: DescribeWebLockBindListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebLockBindListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebLockBindListResponse>(await this.doRPCRequest("DescribeWebLockBindList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebLockBindListResponse({}));
  }

  async describeWebLockBindList(request: DescribeWebLockBindListRequest): Promise<DescribeWebLockBindListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebLockBindListWithOptions(request, runtime);
  }

  async describeWebLockConfigListWithOptions(request: DescribeWebLockConfigListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebLockConfigListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebLockConfigListResponse>(await this.doRPCRequest("DescribeWebLockConfigList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebLockConfigListResponse({}));
  }

  async describeWebLockConfigList(request: DescribeWebLockConfigListRequest): Promise<DescribeWebLockConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebLockConfigListWithOptions(request, runtime);
  }

  async execStrategyWithOptions(request: ExecStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ExecStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecStrategyResponse>(await this.doRPCRequest("ExecStrategy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ExecStrategyResponse({}));
  }

  async execStrategy(request: ExecStrategyRequest): Promise<ExecStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execStrategyWithOptions(request, runtime);
  }

  async exportRecordWithOptions(request: ExportRecordRequest, runtime: $Util.RuntimeOptions): Promise<ExportRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportRecordResponse>(await this.doRPCRequest("ExportRecord", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ExportRecordResponse({}));
  }

  async exportRecord(request: ExportRecordRequest): Promise<ExportRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportRecordWithOptions(request, runtime);
  }

  async fixCheckWarningsWithOptions(request: FixCheckWarningsRequest, runtime: $Util.RuntimeOptions): Promise<FixCheckWarningsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FixCheckWarningsResponse>(await this.doRPCRequest("FixCheckWarnings", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new FixCheckWarningsResponse({}));
  }

  async fixCheckWarnings(request: FixCheckWarningsRequest): Promise<FixCheckWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fixCheckWarningsWithOptions(request, runtime);
  }

  async getBackupStorageCountWithOptions(runtime: $Util.RuntimeOptions): Promise<GetBackupStorageCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetBackupStorageCountResponse>(await this.doRPCRequest("GetBackupStorageCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetBackupStorageCountResponse({}));
  }

  async getBackupStorageCount(): Promise<GetBackupStorageCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupStorageCountWithOptions(runtime);
  }

  async getIOCsWithOptions(request: GetIOCsRequest, runtime: $Util.RuntimeOptions): Promise<GetIOCsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIOCsResponse>(await this.doRPCRequest("GetIOCs", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetIOCsResponse({}));
  }

  async getIOCs(request: GetIOCsRequest): Promise<GetIOCsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIOCsWithOptions(request, runtime);
  }

  async getIncIOCsWithOptions(request: GetIncIOCsRequest, runtime: $Util.RuntimeOptions): Promise<GetIncIOCsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetIncIOCsResponse>(await this.doRPCRequest("GetIncIOCs", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetIncIOCsResponse({}));
  }

  async getIncIOCs(request: GetIncIOCsRequest): Promise<GetIncIOCsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIncIOCsWithOptions(request, runtime);
  }

  async getLocalInstallScriptWithOptions(request: GetLocalInstallScriptRequest, runtime: $Util.RuntimeOptions): Promise<GetLocalInstallScriptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLocalInstallScriptResponse>(await this.doRPCRequest("GetLocalInstallScript", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetLocalInstallScriptResponse({}));
  }

  async getLocalInstallScript(request: GetLocalInstallScriptRequest): Promise<GetLocalInstallScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLocalInstallScriptWithOptions(request, runtime);
  }

  async getLocalUninstallScriptWithOptions(request: GetLocalUninstallScriptRequest, runtime: $Util.RuntimeOptions): Promise<GetLocalUninstallScriptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetLocalUninstallScriptResponse>(await this.doRPCRequest("GetLocalUninstallScript", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetLocalUninstallScriptResponse({}));
  }

  async getLocalUninstallScript(request: GetLocalUninstallScriptRequest): Promise<GetLocalUninstallScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLocalUninstallScriptWithOptions(request, runtime);
  }

  async getSuspiciousStatisticsWithOptions(request: GetSuspiciousStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetSuspiciousStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSuspiciousStatisticsResponse>(await this.doRPCRequest("GetSuspiciousStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetSuspiciousStatisticsResponse({}));
  }

  async getSuspiciousStatistics(request: GetSuspiciousStatisticsRequest): Promise<GetSuspiciousStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspiciousStatisticsWithOptions(request, runtime);
  }

  async getVulStatisticsWithOptions(request: GetVulStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetVulStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVulStatisticsResponse>(await this.doRPCRequest("GetVulStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetVulStatisticsResponse({}));
  }

  async getVulStatistics(request: GetVulStatisticsRequest): Promise<GetVulStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulStatisticsWithOptions(request, runtime);
  }

  async handleSecurityEventsWithOptions(request: HandleSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<HandleSecurityEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HandleSecurityEventsResponse>(await this.doRPCRequest("HandleSecurityEvents", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new HandleSecurityEventsResponse({}));
  }

  async handleSecurityEvents(request: HandleSecurityEventsRequest): Promise<HandleSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleSecurityEventsWithOptions(request, runtime);
  }

  async handleSimilarSecurityEventsWithOptions(request: HandleSimilarSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<HandleSimilarSecurityEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HandleSimilarSecurityEventsResponse>(await this.doRPCRequest("HandleSimilarSecurityEvents", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new HandleSimilarSecurityEventsResponse({}));
  }

  async handleSimilarSecurityEvents(request: HandleSimilarSecurityEventsRequest): Promise<HandleSimilarSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleSimilarSecurityEventsWithOptions(request, runtime);
  }

  async ignoreHcCheckWarningsWithOptions(request: IgnoreHcCheckWarningsRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreHcCheckWarningsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IgnoreHcCheckWarningsResponse>(await this.doRPCRequest("IgnoreHcCheckWarnings", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new IgnoreHcCheckWarningsResponse({}));
  }

  async ignoreHcCheckWarnings(request: IgnoreHcCheckWarningsRequest): Promise<IgnoreHcCheckWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreHcCheckWarningsWithOptions(request, runtime);
  }

  async installBackupClientWithOptions(request: InstallBackupClientRequest, runtime: $Util.RuntimeOptions): Promise<InstallBackupClientResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallBackupClientResponse>(await this.doRPCRequest("InstallBackupClient", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new InstallBackupClientResponse({}));
  }

  async installBackupClient(request: InstallBackupClientRequest): Promise<InstallBackupClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installBackupClientWithOptions(request, runtime);
  }

  async installUniBackupAgentWithOptions(request: InstallUniBackupAgentRequest, runtime: $Util.RuntimeOptions): Promise<InstallUniBackupAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InstallUniBackupAgentResponse>(await this.doRPCRequest("InstallUniBackupAgent", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new InstallUniBackupAgentResponse({}));
  }

  async installUniBackupAgent(request: InstallUniBackupAgentRequest): Promise<InstallUniBackupAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installUniBackupAgentWithOptions(request, runtime);
  }

  async modifyAntiBruteForceRuleWithOptions(request: ModifyAntiBruteForceRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAntiBruteForceRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAntiBruteForceRuleResponse>(await this.doRPCRequest("ModifyAntiBruteForceRule", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAntiBruteForceRuleResponse({}));
  }

  async modifyAntiBruteForceRule(request: ModifyAntiBruteForceRuleRequest): Promise<ModifyAntiBruteForceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAntiBruteForceRuleWithOptions(request, runtime);
  }

  async modifyAssetGroupWithOptions(request: ModifyAssetGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAssetGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyAssetGroupResponse>(await this.doRPCRequest("ModifyAssetGroup", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyAssetGroupResponse({}));
  }

  async modifyAssetGroup(request: ModifyAssetGroupRequest): Promise<ModifyAssetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAssetGroupWithOptions(request, runtime);
  }

  async modifyBackupPolicyWithOptions(tmpReq: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.doRPCRequest("ModifyBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyBackupPolicyStatusWithOptions(request: ModifyBackupPolicyStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBackupPolicyStatusResponse>(await this.doRPCRequest("ModifyBackupPolicyStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBackupPolicyStatusResponse({}));
  }

  async modifyBackupPolicyStatus(request: ModifyBackupPolicyStatusRequest): Promise<ModifyBackupPolicyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyStatusWithOptions(request, runtime);
  }

  async modifyCreateVulWhitelistWithOptions(request: ModifyCreateVulWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCreateVulWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyCreateVulWhitelistResponse>(await this.doRPCRequest("ModifyCreateVulWhitelist", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyCreateVulWhitelistResponse({}));
  }

  async modifyCreateVulWhitelist(request: ModifyCreateVulWhitelistRequest): Promise<ModifyCreateVulWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCreateVulWhitelistWithOptions(request, runtime);
  }

  async modifyEmgVulSubmitWithOptions(request: ModifyEmgVulSubmitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEmgVulSubmitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEmgVulSubmitResponse>(await this.doRPCRequest("ModifyEmgVulSubmit", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEmgVulSubmitResponse({}));
  }

  async modifyEmgVulSubmit(request: ModifyEmgVulSubmitRequest): Promise<ModifyEmgVulSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEmgVulSubmitWithOptions(request, runtime);
  }

  async modifyGroupPropertyWithOptions(request: ModifyGroupPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyGroupPropertyResponse>(await this.doRPCRequest("ModifyGroupProperty", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyGroupPropertyResponse({}));
  }

  async modifyGroupProperty(request: ModifyGroupPropertyRequest): Promise<ModifyGroupPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupPropertyWithOptions(request, runtime);
  }

  async modifyInstanceAntiBruteForceRuleWithOptions(request: ModifyInstanceAntiBruteForceRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAntiBruteForceRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyInstanceAntiBruteForceRuleResponse>(await this.doRPCRequest("ModifyInstanceAntiBruteForceRule", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyInstanceAntiBruteForceRuleResponse({}));
  }

  async modifyInstanceAntiBruteForceRule(request: ModifyInstanceAntiBruteForceRuleRequest): Promise<ModifyInstanceAntiBruteForceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAntiBruteForceRuleWithOptions(request, runtime);
  }

  async modifyLoginBaseConfigWithOptions(request: ModifyLoginBaseConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoginBaseConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLoginBaseConfigResponse>(await this.doRPCRequest("ModifyLoginBaseConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLoginBaseConfigResponse({}));
  }

  async modifyLoginBaseConfig(request: ModifyLoginBaseConfigRequest): Promise<ModifyLoginBaseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoginBaseConfigWithOptions(request, runtime);
  }

  async modifyLoginSwitchConfigWithOptions(request: ModifyLoginSwitchConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoginSwitchConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLoginSwitchConfigResponse>(await this.doRPCRequest("ModifyLoginSwitchConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLoginSwitchConfigResponse({}));
  }

  async modifyLoginSwitchConfig(request: ModifyLoginSwitchConfigRequest): Promise<ModifyLoginSwitchConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoginSwitchConfigWithOptions(request, runtime);
  }

  async modifyNoticeConfigWithOptions(request: ModifyNoticeConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNoticeConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNoticeConfigResponse>(await this.doRPCRequest("ModifyNoticeConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNoticeConfigResponse({}));
  }

  async modifyNoticeConfig(request: ModifyNoticeConfigRequest): Promise<ModifyNoticeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNoticeConfigWithOptions(request, runtime);
  }

  async modifyOpenLogShipperWithOptions(request: ModifyOpenLogShipperRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOpenLogShipperResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOpenLogShipperResponse>(await this.doRPCRequest("ModifyOpenLogShipper", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOpenLogShipperResponse({}));
  }

  async modifyOpenLogShipper(request: ModifyOpenLogShipperRequest): Promise<ModifyOpenLogShipperResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOpenLogShipperWithOptions(request, runtime);
  }

  async modifyOperateVulWithOptions(request: ModifyOperateVulRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOperateVulResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOperateVulResponse>(await this.doRPCRequest("ModifyOperateVul", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOperateVulResponse({}));
  }

  async modifyOperateVul(request: ModifyOperateVulRequest): Promise<ModifyOperateVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOperateVulWithOptions(request, runtime);
  }

  async modifyPushAllTaskWithOptions(request: ModifyPushAllTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPushAllTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPushAllTaskResponse>(await this.doRPCRequest("ModifyPushAllTask", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPushAllTaskResponse({}));
  }

  async modifyPushAllTask(request: ModifyPushAllTaskRequest): Promise<ModifyPushAllTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPushAllTaskWithOptions(request, runtime);
  }

  async modifyRiskCheckStatusWithOptions(request: ModifyRiskCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRiskCheckStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRiskCheckStatusResponse>(await this.doRPCRequest("ModifyRiskCheckStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRiskCheckStatusResponse({}));
  }

  async modifyRiskCheckStatus(request: ModifyRiskCheckStatusRequest): Promise<ModifyRiskCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRiskCheckStatusWithOptions(request, runtime);
  }

  async modifyRiskSingleResultStatusWithOptions(request: ModifyRiskSingleResultStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRiskSingleResultStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyRiskSingleResultStatusResponse>(await this.doRPCRequest("ModifyRiskSingleResultStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyRiskSingleResultStatusResponse({}));
  }

  async modifyRiskSingleResultStatus(request: ModifyRiskSingleResultStatusRequest): Promise<ModifyRiskSingleResultStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRiskSingleResultStatusWithOptions(request, runtime);
  }

  async modifySecurityCheckScheduleConfigWithOptions(request: ModifySecurityCheckScheduleConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityCheckScheduleConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifySecurityCheckScheduleConfigResponse>(await this.doRPCRequest("ModifySecurityCheckScheduleConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifySecurityCheckScheduleConfigResponse({}));
  }

  async modifySecurityCheckScheduleConfig(request: ModifySecurityCheckScheduleConfigRequest): Promise<ModifySecurityCheckScheduleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityCheckScheduleConfigWithOptions(request, runtime);
  }

  async modifyStartVulScanWithOptions(request: ModifyStartVulScanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStartVulScanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyStartVulScanResponse>(await this.doRPCRequest("ModifyStartVulScan", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyStartVulScanResponse({}));
  }

  async modifyStartVulScan(request: ModifyStartVulScanRequest): Promise<ModifyStartVulScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStartVulScanWithOptions(request, runtime);
  }

  async modifyStrategyWithOptions(request: ModifyStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyStrategyResponse>(await this.doRPCRequest("ModifyStrategy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyStrategyResponse({}));
  }

  async modifyStrategy(request: ModifyStrategyRequest): Promise<ModifyStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStrategyWithOptions(request, runtime);
  }

  async modifyStrategyTargetWithOptions(request: ModifyStrategyTargetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStrategyTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyStrategyTargetResponse>(await this.doRPCRequest("ModifyStrategyTarget", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyStrategyTargetResponse({}));
  }

  async modifyStrategyTarget(request: ModifyStrategyTargetRequest): Promise<ModifyStrategyTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStrategyTargetWithOptions(request, runtime);
  }

  async modifyTagWithUuidWithOptions(request: ModifyTagWithUuidRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagWithUuidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyTagWithUuidResponse>(await this.doRPCRequest("ModifyTagWithUuid", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyTagWithUuidResponse({}));
  }

  async modifyTagWithUuid(request: ModifyTagWithUuidRequest): Promise<ModifyTagWithUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagWithUuidWithOptions(request, runtime);
  }

  async modifyUniBackupPolicyWithOptions(tmpReq: ModifyUniBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUniBackupPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyUniBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.fullPlan)) {
      request.fullPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fullPlan, "FullPlan", "json");
    }

    if (!Util.isUnset(tmpReq.incPlan)) {
      request.incPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incPlan, "IncPlan", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUniBackupPolicyResponse>(await this.doRPCRequest("ModifyUniBackupPolicy", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUniBackupPolicyResponse({}));
  }

  async modifyUniBackupPolicy(request: ModifyUniBackupPolicyRequest): Promise<ModifyUniBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUniBackupPolicyWithOptions(request, runtime);
  }

  async modifyVpcHoneyPotWithOptions(request: ModifyVpcHoneyPotRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcHoneyPotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVpcHoneyPotResponse>(await this.doRPCRequest("ModifyVpcHoneyPot", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVpcHoneyPotResponse({}));
  }

  async modifyVpcHoneyPot(request: ModifyVpcHoneyPotRequest): Promise<ModifyVpcHoneyPotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcHoneyPotWithOptions(request, runtime);
  }

  async modifyVulTargetConfigWithOptions(request: ModifyVulTargetConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVulTargetConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyVulTargetConfigResponse>(await this.doRPCRequest("ModifyVulTargetConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyVulTargetConfigResponse({}));
  }

  async modifyVulTargetConfig(request: ModifyVulTargetConfigRequest): Promise<ModifyVulTargetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVulTargetConfigWithOptions(request, runtime);
  }

  async modifyWebLockCreateConfigWithOptions(request: ModifyWebLockCreateConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockCreateConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebLockCreateConfigResponse>(await this.doRPCRequest("ModifyWebLockCreateConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebLockCreateConfigResponse({}));
  }

  async modifyWebLockCreateConfig(request: ModifyWebLockCreateConfigRequest): Promise<ModifyWebLockCreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockCreateConfigWithOptions(request, runtime);
  }

  async modifyWebLockDeleteConfigWithOptions(request: ModifyWebLockDeleteConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockDeleteConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebLockDeleteConfigResponse>(await this.doRPCRequest("ModifyWebLockDeleteConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebLockDeleteConfigResponse({}));
  }

  async modifyWebLockDeleteConfig(request: ModifyWebLockDeleteConfigRequest): Promise<ModifyWebLockDeleteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockDeleteConfigWithOptions(request, runtime);
  }

  async modifyWebLockStartWithOptions(request: ModifyWebLockStartRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockStartResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebLockStartResponse>(await this.doRPCRequest("ModifyWebLockStart", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebLockStartResponse({}));
  }

  async modifyWebLockStart(request: ModifyWebLockStartRequest): Promise<ModifyWebLockStartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockStartWithOptions(request, runtime);
  }

  async modifyWebLockStatusWithOptions(request: ModifyWebLockStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebLockStatusResponse>(await this.doRPCRequest("ModifyWebLockStatus", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebLockStatusResponse({}));
  }

  async modifyWebLockStatus(request: ModifyWebLockStatusRequest): Promise<ModifyWebLockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockStatusWithOptions(request, runtime);
  }

  async modifyWebLockUnbindWithOptions(request: ModifyWebLockUnbindRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockUnbindResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebLockUnbindResponse>(await this.doRPCRequest("ModifyWebLockUnbind", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebLockUnbindResponse({}));
  }

  async modifyWebLockUnbind(request: ModifyWebLockUnbindRequest): Promise<ModifyWebLockUnbindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockUnbindWithOptions(request, runtime);
  }

  async modifyWebLockUpdateConfigWithOptions(request: ModifyWebLockUpdateConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockUpdateConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyWebLockUpdateConfigResponse>(await this.doRPCRequest("ModifyWebLockUpdateConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyWebLockUpdateConfigResponse({}));
  }

  async modifyWebLockUpdateConfig(request: ModifyWebLockUpdateConfigRequest): Promise<ModifyWebLockUpdateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockUpdateConfigWithOptions(request, runtime);
  }

  async operateAgentClientInstallWithOptions(request: OperateAgentClientInstallRequest, runtime: $Util.RuntimeOptions): Promise<OperateAgentClientInstallResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateAgentClientInstallResponse>(await this.doRPCRequest("OperateAgentClientInstall", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new OperateAgentClientInstallResponse({}));
  }

  async operateAgentClientInstall(request: OperateAgentClientInstallRequest): Promise<OperateAgentClientInstallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateAgentClientInstallWithOptions(request, runtime);
  }

  async operateSuspiciousTargetConfigWithOptions(request: OperateSuspiciousTargetConfigRequest, runtime: $Util.RuntimeOptions): Promise<OperateSuspiciousTargetConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateSuspiciousTargetConfigResponse>(await this.doRPCRequest("OperateSuspiciousTargetConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new OperateSuspiciousTargetConfigResponse({}));
  }

  async operateSuspiciousTargetConfig(request: OperateSuspiciousTargetConfigRequest): Promise<OperateSuspiciousTargetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateSuspiciousTargetConfigWithOptions(request, runtime);
  }

  async operateVulsWithOptions(request: OperateVulsRequest, runtime: $Util.RuntimeOptions): Promise<OperateVulsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateVulsResponse>(await this.doRPCRequest("OperateVuls", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new OperateVulsResponse({}));
  }

  async operateVuls(request: OperateVulsRequest): Promise<OperateVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateVulsWithOptions(request, runtime);
  }

  async operationSuspEventsWithOptions(request: OperationSuspEventsRequest, runtime: $Util.RuntimeOptions): Promise<OperationSuspEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperationSuspEventsResponse>(await this.doRPCRequest("OperationSuspEvents", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new OperationSuspEventsResponse({}));
  }

  async operationSuspEvents(request: OperationSuspEventsRequest): Promise<OperationSuspEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operationSuspEventsWithOptions(request, runtime);
  }

  async pauseClientWithOptions(request: PauseClientRequest, runtime: $Util.RuntimeOptions): Promise<PauseClientResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PauseClientResponse>(await this.doRPCRequest("PauseClient", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new PauseClientResponse({}));
  }

  async pauseClient(request: PauseClientRequest): Promise<PauseClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseClientWithOptions(request, runtime);
  }

  async queryDiscoverDatabaseWithOptions(request: QueryDiscoverDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<QueryDiscoverDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDiscoverDatabaseResponse>(await this.doRPCRequest("QueryDiscoverDatabase", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDiscoverDatabaseResponse({}));
  }

  async queryDiscoverDatabase(request: QueryDiscoverDatabaseRequest): Promise<QueryDiscoverDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDiscoverDatabaseWithOptions(request, runtime);
  }

  async queryPreCheckDatabaseWithOptions(request: QueryPreCheckDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<QueryPreCheckDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPreCheckDatabaseResponse>(await this.doRPCRequest("QueryPreCheckDatabase", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPreCheckDatabaseResponse({}));
  }

  async queryPreCheckDatabase(request: QueryPreCheckDatabaseRequest): Promise<QueryPreCheckDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPreCheckDatabaseWithOptions(request, runtime);
  }

  async refreshAssetsWithOptions(request: RefreshAssetsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshAssetsResponse>(await this.doRPCRequest("RefreshAssets", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshAssetsResponse({}));
  }

  async refreshAssets(request: RefreshAssetsRequest): Promise<RefreshAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshAssetsWithOptions(request, runtime);
  }

  async refreshContainerAssetsWithOptions(request: RefreshContainerAssetsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshContainerAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshContainerAssetsResponse>(await this.doRPCRequest("RefreshContainerAssets", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshContainerAssetsResponse({}));
  }

  async refreshContainerAssets(request: RefreshContainerAssetsRequest): Promise<RefreshContainerAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshContainerAssetsWithOptions(request, runtime);
  }

  async rollbackSuspEventQuaraFileWithOptions(request: RollbackSuspEventQuaraFileRequest, runtime: $Util.RuntimeOptions): Promise<RollbackSuspEventQuaraFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackSuspEventQuaraFileResponse>(await this.doRPCRequest("RollbackSuspEventQuaraFile", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackSuspEventQuaraFileResponse({}));
  }

  async rollbackSuspEventQuaraFile(request: RollbackSuspEventQuaraFileRequest): Promise<RollbackSuspEventQuaraFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackSuspEventQuaraFileWithOptions(request, runtime);
  }

  async sasInstallCodeWithOptions(request: SasInstallCodeRequest, runtime: $Util.RuntimeOptions): Promise<SasInstallCodeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SasInstallCodeResponse>(await this.doRPCRequest("SasInstallCode", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new SasInstallCodeResponse({}));
  }

  async sasInstallCode(request: SasInstallCodeRequest): Promise<SasInstallCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sasInstallCodeWithOptions(request, runtime);
  }

  async startBaselineSecurityCheckWithOptions(request: StartBaselineSecurityCheckRequest, runtime: $Util.RuntimeOptions): Promise<StartBaselineSecurityCheckResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartBaselineSecurityCheckResponse>(await this.doRPCRequest("StartBaselineSecurityCheck", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new StartBaselineSecurityCheckResponse({}));
  }

  async startBaselineSecurityCheck(request: StartBaselineSecurityCheckRequest): Promise<StartBaselineSecurityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBaselineSecurityCheckWithOptions(request, runtime);
  }

  async startDiscoverDatabaseTaskWithOptions(request: StartDiscoverDatabaseTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartDiscoverDatabaseTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDiscoverDatabaseTaskResponse>(await this.doRPCRequest("StartDiscoverDatabaseTask", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new StartDiscoverDatabaseTaskResponse({}));
  }

  async startDiscoverDatabaseTask(request: StartDiscoverDatabaseTaskRequest): Promise<StartDiscoverDatabaseTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiscoverDatabaseTaskWithOptions(request, runtime);
  }

  async startImageVulScanWithOptions(request: StartImageVulScanRequest, runtime: $Util.RuntimeOptions): Promise<StartImageVulScanResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartImageVulScanResponse>(await this.doRPCRequest("StartImageVulScan", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new StartImageVulScanResponse({}));
  }

  async startImageVulScan(request: StartImageVulScanRequest): Promise<StartImageVulScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startImageVulScanWithOptions(request, runtime);
  }

  async startPreCheckDatabaseWithOptions(request: StartPreCheckDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<StartPreCheckDatabaseResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartPreCheckDatabaseResponse>(await this.doRPCRequest("StartPreCheckDatabase", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new StartPreCheckDatabaseResponse({}));
  }

  async startPreCheckDatabase(request: StartPreCheckDatabaseRequest): Promise<StartPreCheckDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPreCheckDatabaseWithOptions(request, runtime);
  }

  async startVirusScanTaskWithOptions(request: StartVirusScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartVirusScanTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartVirusScanTaskResponse>(await this.doRPCRequest("StartVirusScanTask", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new StartVirusScanTaskResponse({}));
  }

  async startVirusScanTask(request: StartVirusScanTaskRequest): Promise<StartVirusScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startVirusScanTaskWithOptions(request, runtime);
  }

  async unbindAegisWithOptions(request: UnbindAegisRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAegisResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindAegisResponse>(await this.doRPCRequest("UnbindAegis", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindAegisResponse({}));
  }

  async unbindAegis(request: UnbindAegisRequest): Promise<UnbindAegisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAegisWithOptions(request, runtime);
  }

  async uninstallBackupClientWithOptions(request: UninstallBackupClientRequest, runtime: $Util.RuntimeOptions): Promise<UninstallBackupClientResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UninstallBackupClientResponse>(await this.doRPCRequest("UninstallBackupClient", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new UninstallBackupClientResponse({}));
  }

  async uninstallBackupClient(request: UninstallBackupClientRequest): Promise<UninstallBackupClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallBackupClientWithOptions(request, runtime);
  }

  async uninstallUniBackupAgentWithOptions(request: UninstallUniBackupAgentRequest, runtime: $Util.RuntimeOptions): Promise<UninstallUniBackupAgentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UninstallUniBackupAgentResponse>(await this.doRPCRequest("UninstallUniBackupAgent", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new UninstallUniBackupAgentResponse({}));
  }

  async uninstallUniBackupAgent(request: UninstallUniBackupAgentRequest): Promise<UninstallUniBackupAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallUniBackupAgentWithOptions(request, runtime);
  }

  async upgradeBackupPolicyVersionWithOptions(request: UpgradeBackupPolicyVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeBackupPolicyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeBackupPolicyVersionResponse>(await this.doRPCRequest("UpgradeBackupPolicyVersion", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeBackupPolicyVersionResponse({}));
  }

  async upgradeBackupPolicyVersion(request: UpgradeBackupPolicyVersionRequest): Promise<UpgradeBackupPolicyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeBackupPolicyVersionWithOptions(request, runtime);
  }

  async validateHcWarningsWithOptions(request: ValidateHcWarningsRequest, runtime: $Util.RuntimeOptions): Promise<ValidateHcWarningsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateHcWarningsResponse>(await this.doRPCRequest("ValidateHcWarnings", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateHcWarningsResponse({}));
  }

  async validateHcWarnings(request: ValidateHcWarningsRequest): Promise<ValidateHcWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateHcWarningsWithOptions(request, runtime);
  }

}
