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
  uuid?: string;
  quaraFileIds?: string[];
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      quaraFileIds: 'QuaraFileIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      quaraFileIds: { 'type': 'array', 'itemType': 'string' },
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
  uuid?: string;
  securityEventIds?: string[];
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      securityEventIds: 'SecurityEventIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  name?: string;
  span?: number;
  failCount?: number;
  forbiddenTime?: number;
  defaultRule?: boolean;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      span: 'Span',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      defaultRule: 'DefaultRule',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      name: 'string',
      span: 'number',
      failCount: 'number',
      forbiddenTime: 'number',
      defaultRule: 'boolean',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAntiBruteForceRuleResponseBody extends $tea.Model {
  requestId?: string;
  createAntiBruteForceRule?: CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      createAntiBruteForceRule: 'CreateAntiBruteForceRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      createAntiBruteForceRule: CreateAntiBruteForceRuleResponseBodyCreateAntiBruteForceRule,
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
  status?: string;
  osName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      os: 'Os',
      status: 'Status',
      osName: 'OsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      os: 'string',
      status: 'string',
      osName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetResponseBody extends $tea.Model {
  uuid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  name?: string;
  policy?: { [key: string]: any };
  policyVersion?: string;
  policyRegionId?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
      policyRegionId: 'PolicyRegionId',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyVersion: 'string',
      policyRegionId: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyShrinkRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  name?: string;
  policyShrink?: string;
  policyVersion?: string;
  policyRegionId?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      policyShrink: 'Policy',
      policyVersion: 'PolicyVersion',
      policyRegionId: 'PolicyRegionId',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      name: 'string',
      policyShrink: 'string',
      policyVersion: 'string',
      policyRegionId: 'string',
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
  uuids?: string;
  groupName?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
      groupName: 'GroupName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
      groupName: 'string',
      groupId: 'number',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  snapshotId?: string;
  snapshotHash?: string;
  target?: string;
  sourceType?: string;
  vaultId?: string;
  snapshotVersion?: string;
  includes?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      snapshotId: 'SnapshotId',
      snapshotHash: 'SnapshotHash',
      target: 'Target',
      sourceType: 'SourceType',
      vaultId: 'VaultId',
      snapshotVersion: 'SnapshotVersion',
      includes: 'Includes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      snapshotId: 'string',
      snapshotHash: 'string',
      target: 'string',
      sourceType: 'string',
      vaultId: 'string',
      snapshotVersion: 'string',
      includes: 'string',
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
  period?: number;
  periodUnit?: string;
  autoRenewPeriod?: number;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  spec?: string;
  instanceCount?: string;
  sasSlsStorage?: string;
  sasAntiRansomware?: string;
  sasWebguardBoolean?: string;
  sasSc?: string;
  sasProductService?: string;
  sasWebguardOrderNum?: string;
  vcore?: string;
  containerImageScan?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      spec: 'Spec',
      instanceCount: 'InstanceCount',
      sasSlsStorage: 'SasSlsStorage',
      sasAntiRansomware: 'SasAntiRansomware',
      sasWebguardBoolean: 'SasWebguardBoolean',
      sasSc: 'SasSc',
      sasProductService: 'SasProductService',
      sasWebguardOrderNum: 'SasWebguardOrderNum',
      vcore: 'Vcore',
      containerImageScan: 'ContainerImageScan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      autoRenewPeriod: 'number',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      spec: 'string',
      instanceCount: 'string',
      sasSlsStorage: 'string',
      sasAntiRansomware: 'string',
      sasWebguardBoolean: 'string',
      sasSc: 'string',
      sasProductService: 'string',
      sasWebguardOrderNum: 'string',
      vcore: 'string',
      containerImageScan: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  securityEventId?: number;
  similarEventScenarioCode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
      similarEventScenarioCode: 'SimilarEventScenarioCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      securityEventId: 'number',
      similarEventScenarioCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarSecurityEventsQueryTaskResponseBody extends $tea.Model {
  requestId?: string;
  createSimilarSecurityEventsQueryTaskResponse?: CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      createSimilarSecurityEventsQueryTaskResponse: 'CreateSimilarSecurityEventsQueryTaskResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      createSimilarSecurityEventsQueryTaskResponse: CreateSimilarSecurityEventsQueryTaskResponseBodyCreateSimilarSecurityEventsQueryTaskResponse,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  policyId?: number;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      policyId: 'PolicyId',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      policyId: 'number',
      policyVersion: 'string',
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
  sourceIp?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupId: 'number',
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
  type?: string;
  config?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      config: 'Config',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      config: 'string',
      target: 'string',
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
  sourceIp?: string;
  id?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      id: 'string',
      lang: 'string',
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
  status?: string;
  query?: string;
  startTs?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      query: 'Query',
      startTs: 'StartTs',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      query: 'string',
      startTs: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccesskeyLeakListResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  gmtLast?: number;
  akLeakCount?: number;
  pageSize?: number;
  totalCount?: number;
  accessKeyLeakList?: DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      gmtLast: 'GmtLast',
      akLeakCount: 'AkLeakCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      accessKeyLeakList: 'AccessKeyLeakList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      gmtLast: 'number',
      akLeakCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
      accessKeyLeakList: { 'type': 'array', 'itemType': DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList },
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
  maliciousMd5?: string;
  currentPage?: number;
  pageSize?: string;
  lang?: string;
  repoRegionId?: string;
  repoInstanceId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  imageTag?: string;
  imageDigest?: string;
  imageLayer?: string;
  static names(): { [key: string]: string } {
    return {
      maliciousMd5: 'MaliciousMd5',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      lang: 'Lang',
      repoRegionId: 'RepoRegionId',
      repoInstanceId: 'RepoInstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      imageTag: 'ImageTag',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maliciousMd5: 'string',
      currentPage: 'number',
      pageSize: 'string',
      lang: 'string',
      repoRegionId: 'string',
      repoInstanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      imageTag: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeAffectedMaliciousFileImagesResponseBodyPageInfo;
  affectedMaliciousFileImagesResponse?: DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      affectedMaliciousFileImagesResponse: 'AffectedMaliciousFileImagesResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeAffectedMaliciousFileImagesResponseBodyPageInfo,
      affectedMaliciousFileImagesResponse: { 'type': 'array', 'itemType': DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse },
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
  sourceIp?: string;
  lang?: string;
  alarmUniqueInfo?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      alarmUniqueInfo: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeAlarmEventDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeAlarmEventDetailResponseBodyData,
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
  sourceIp?: string;
  lang?: string;
  dealed?: string;
  from?: string;
  levels?: string;
  remark?: string;
  groupId?: string;
  alarmEventName?: string;
  alarmEventType?: string;
  currentPage?: number;
  pageSize?: string;
  clusterId?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  operateErrorCodeList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      dealed: 'Dealed',
      from: 'From',
      levels: 'Levels',
      remark: 'Remark',
      groupId: 'GroupId',
      alarmEventName: 'AlarmEventName',
      alarmEventType: 'AlarmEventType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      targetType: 'TargetType',
      operateErrorCodeList: 'OperateErrorCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      dealed: 'string',
      from: 'string',
      levels: 'string',
      remark: 'string',
      groupId: 'string',
      alarmEventName: 'string',
      alarmEventType: 'string',
      currentPage: 'number',
      pageSize: 'string',
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      targetType: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeAlarmEventListResponseBodyPageInfo;
  suspEvents?: DescribeAlarmEventListResponseBodySuspEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      suspEvents: 'SuspEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeAlarmEventListResponseBodyPageInfo,
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
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  eventName?: string;
  uniqueInfo?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
      eventName: 'EventName',
      uniqueInfo: 'UniqueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
      eventName: 'string',
      uniqueInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponseBody extends $tea.Model {
  stackInfo?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      stackInfo: 'StackInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackInfo: 'string',
      requestId: 'string',
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
  requestId?: string;
  entityList?: DescribeAllEntityResponseBodyEntityList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      entityList: 'EntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      entityList: { 'type': 'array', 'itemType': DescribeAllEntityResponseBodyEntityList },
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
  requestId?: string;
  groups?: DescribeAllGroupsResponseBodyGroups[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      groups: { 'type': 'array', 'itemType': DescribeAllGroupsResponseBodyGroups },
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
  sourceIp?: string;
  from?: string;
  groupId?: number;
  remark?: string;
  type?: string;
  uuid?: string;
  status?: number;
  statusList?: string;
  startTime?: string;
  endTime?: string;
  webGroupId?: number;
  ruleType?: number;
  action1?: number;
  flow?: number;
  saleId?: string;
  dealed?: string;
  tag?: string;
  currentPage?: number;
  pageSize?: number;
  secureToken?: string;
  allRegion?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      from: 'From',
      groupId: 'GroupId',
      remark: 'Remark',
      type: 'Type',
      uuid: 'Uuid',
      status: 'Status',
      statusList: 'StatusList',
      startTime: 'StartTime',
      endTime: 'EndTime',
      webGroupId: 'WebGroupId',
      ruleType: 'RuleType',
      action1: 'Action1',
      flow: 'Flow',
      saleId: 'SaleId',
      dealed: 'Dealed',
      tag: 'Tag',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      secureToken: 'SecureToken',
      allRegion: 'AllRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      from: 'string',
      groupId: 'number',
      remark: 'string',
      type: 'string',
      uuid: 'string',
      status: 'number',
      statusList: 'string',
      startTime: 'string',
      endTime: 'string',
      webGroupId: 'number',
      ruleType: 'number',
      action1: 'number',
      flow: 'number',
      saleId: 'string',
      dealed: 'string',
      tag: 'string',
      currentPage: 'number',
      pageSize: 'number',
      secureToken: 'string',
      allRegion: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRegionsStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeAllRegionsStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeAllRegionsStatisticsResponseBodyData,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeAntiBruteForceRulesResponseBodyPageInfo;
  rules?: DescribeAntiBruteForceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeAntiBruteForceRulesResponseBodyPageInfo,
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
  sourceIp?: string;
  uuid?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      uuid: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidResponseBody extends $tea.Model {
  requestId?: string;
  assetDetail?: DescribeAssetDetailByUuidResponseBodyAssetDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      assetDetail: 'AssetDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      assetDetail: DescribeAssetDetailByUuidResponseBodyAssetDetail,
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
  requestId?: string;
  assetList?: DescribeAssetDetailByUuidsResponseBodyAssetList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      assetList: 'AssetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      assetList: { 'type': 'array', 'itemType': DescribeAssetDetailByUuidsResponseBodyAssetList },
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
  requestId?: string;
  clients?: DescribeBackupClientsResponseBodyClients[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      clients: 'Clients',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      clients: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClients },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  policyId?: number;
  uuid?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      policyId: 'PolicyId',
      uuid: 'Uuid',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      policyId: 'number',
      uuid: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeBackupDirsResponseBodyPageInfo;
  backupDirs?: DescribeBackupDirsResponseBodyBackupDirs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      backupDirs: 'BackupDirs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeBackupDirsResponseBodyPageInfo,
      backupDirs: { 'type': 'array', 'itemType': DescribeBackupDirsResponseBodyBackupDirs },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  path?: string;
  snapshotHash?: string;
  currentPage?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      path: 'Path',
      snapshotHash: 'SnapshotHash',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      path: 'string',
      snapshotHash: 'string',
      currentPage: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeBackupFilesResponseBodyPageInfo;
  backupFiles?: DescribeBackupFilesResponseBodyBackupFiles[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      backupFiles: 'BackupFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeBackupFilesResponseBodyPageInfo,
      backupFiles: { 'type': 'array', 'itemType': DescribeBackupFilesResponseBodyBackupFiles },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  policyId?: number;
  uuid?: string;
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      policyId: 'PolicyId',
      uuid: 'Uuid',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      policyId: 'number',
      uuid: 'string',
      policyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBody extends $tea.Model {
  requestId?: string;
  backupMachineStatus?: DescribeBackupMachineStatusResponseBodyBackupMachineStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupMachineStatus: 'BackupMachineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupMachineStatus: DescribeBackupMachineStatusResponseBodyBackupMachineStatus,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  name?: string;
  machineRemark?: string;
  status?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      name: 'Name',
      machineRemark: 'MachineRemark',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      name: 'string',
      machineRemark: 'string',
      status: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeBackupPoliciesResponseBodyPageInfo;
  policies?: DescribeBackupPoliciesResponseBodyPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeBackupPoliciesResponseBodyPageInfo,
      policies: { 'type': 'array', 'itemType': DescribeBackupPoliciesResponseBodyPolicies },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      policyVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  requestId?: string;
  backupPolicyDetail?: DescribeBackupPolicyResponseBodyBackupPolicyDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupPolicyDetail: 'BackupPolicyDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupPolicyDetail: DescribeBackupPolicyResponseBodyBackupPolicyDetail,
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

export class DescribeBackupRestoreCountRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRestoreCountResponseBody extends $tea.Model {
  requestId?: string;
  backupRestoreCount?: DescribeBackupRestoreCountResponseBodyBackupRestoreCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupRestoreCount: 'BackupRestoreCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupRestoreCount: DescribeBackupRestoreCountResponseBodyBackupRestoreCount,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBruteForceSummaryResponseBody extends $tea.Model {
  requestId?: string;
  bruteForceSummary?: DescribeBruteForceSummaryResponseBodyBruteForceSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bruteForceSummary: 'BruteForceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bruteForceSummary: DescribeBruteForceSummaryResponseBodyBruteForceSummary,
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
  sasVersion?: string;
  canTry?: string;
  weakPasswordCount?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sasVersion: 'SasVersion',
      canTry: 'CanTry',
      weakPasswordCount: 'WeakPasswordCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sasVersion: 'string',
      canTry: 'string',
      weakPasswordCount: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  lang?: string;
  checkWarningId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      checkWarningId: 'CheckWarningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      checkWarningId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailResponseBody extends $tea.Model {
  advice?: string;
  type?: string;
  requestId?: string;
  description?: string;
  item?: string;
  checkId?: number;
  level?: string;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      type: 'Type',
      requestId: 'RequestId',
      description: 'Description',
      item: 'Item',
      checkId: 'CheckId',
      level: 'Level',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      type: 'string',
      requestId: 'string',
      description: 'string',
      item: 'string',
      checkId: 'number',
      level: 'string',
      prompt: 'string',
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

export class DescribeCheckWarningsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  riskId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
      riskId: 'RiskId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
      riskId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningsResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  count?: number;
  checkWarnings?: DescribeCheckWarningsResponseBodyCheckWarnings[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      count: 'Count',
      checkWarnings: 'CheckWarnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      count: 'number',
      checkWarnings: { 'type': 'array', 'itemType': DescribeCheckWarningsResponseBodyCheckWarnings },
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

export class DescribeCheckWarningSummaryRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  typeName?: string;
  status?: string;
  riskStatus?: number;
  riskName?: string;
  strategyId?: number;
  uuids?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      typeName: 'TypeName',
      status: 'Status',
      riskStatus: 'RiskStatus',
      riskName: 'RiskName',
      strategyId: 'StrategyId',
      uuids: 'Uuids',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      typeName: 'string',
      status: 'string',
      riskStatus: 'number',
      riskName: 'string',
      strategyId: 'number',
      uuids: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  count?: number;
  warningSummarys?: DescribeCheckWarningSummaryResponseBodyWarningSummarys[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      count: 'Count',
      warningSummarys: 'WarningSummarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      count: 'number',
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

export class DescribeCloudCenterInstancesRequest extends $tea.Model {
  regionId?: string;
  criteria?: string;
  machineTypes?: string;
  logicalExp?: string;
  noPage?: boolean;
  pageSize?: number;
  currentPage?: number;
  importance?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      criteria: 'Criteria',
      machineTypes: 'MachineTypes',
      logicalExp: 'LogicalExp',
      noPage: 'NoPage',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      importance: 'Importance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      criteria: 'string',
      machineTypes: 'string',
      logicalExp: 'string',
      noPage: 'boolean',
      pageSize: 'number',
      currentPage: 'number',
      importance: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  pageInfo?: DescribeCloudCenterInstancesResponseBodyPageInfo;
  instances?: DescribeCloudCenterInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      pageInfo: DescribeCloudCenterInstancesResponseBodyPageInfo,
      instances: { 'type': 'array', 'itemType': DescribeCloudCenterInstancesResponseBodyInstances },
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
  requestId?: string;
  groupedFields?: DescribeCloudProductFieldStatisticsResponseBodyGroupedFields;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupedFields: 'GroupedFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupedFields: DescribeCloudProductFieldStatisticsResponseBodyGroupedFields,
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
  requestId?: string;
  concernNecessity?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      concernNecessity: 'ConcernNecessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      concernNecessity: { 'type': 'array', 'itemType': 'string' },
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
  requestId?: string;
  data?: DescribeContainerStatisticsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeContainerStatisticsResponseBodyData,
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
  value?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaResponseBody extends $tea.Model {
  requestId?: string;
  criteriaList?: DescribeCriteriaResponseBodyCriteriaList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      criteriaList: 'CriteriaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      criteriaList: { 'type': 'array', 'itemType': DescribeCriteriaResponseBodyCriteriaList },
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
  totalCount?: number;
  requestId?: string;
  dialogList?: DescribeDialogMessagesResponseBodyDialogList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      dialogList: 'DialogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      dialogList: { 'type': 'array', 'itemType': DescribeDialogMessagesResponseBodyDialogList },
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
  ruleActionName?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      ruleActionName: 'RuleActionName',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleActionName: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDingTalkResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeDingTalkResponseBodyPageInfo;
  actionList?: DescribeDingTalkResponseBodyActionList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      actionList: 'ActionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeDingTalkResponseBodyPageInfo,
      actionList: { 'type': 'array', 'itemType': DescribeDingTalkResponseBodyActionList },
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
  rootDomainsCount?: number;
  requestId?: string;
  subDomainsCount?: number;
  totalDomainsCount?: number;
  static names(): { [key: string]: string } {
    return {
      rootDomainsCount: 'RootDomainsCount',
      requestId: 'RequestId',
      subDomainsCount: 'SubDomainsCount',
      totalDomainsCount: 'TotalDomainsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootDomainsCount: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBody extends $tea.Model {
  domain?: string;
  requestId?: string;
  vulCount?: number;
  alarmCount?: number;
  rootDomain?: string;
  domainDetailItems?: DescribeDomainDetailResponseBodyDomainDetailItems[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
      vulCount: 'VulCount',
      alarmCount: 'AlarmCount',
      rootDomain: 'RootDomain',
      domainDetailItems: 'DomainDetailItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      requestId: 'string',
      vulCount: 'number',
      alarmCount: 'number',
      rootDomain: 'string',
      domainDetailItems: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyDomainDetailItems },
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
  sourceIp?: string;
  fuzzyDomain?: string;
  domainType?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      fuzzyDomain: 'FuzzyDomain',
      domainType: 'DomainType',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      fuzzyDomain: 'string',
      domainType: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeDomainListResponseBodyPageInfo;
  domainListResponseList?: DescribeDomainListResponseBodyDomainListResponseList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      domainListResponseList: 'DomainListResponseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeDomainListResponseBodyPageInfo,
      domainListResponseList: { 'type': 'array', 'itemType': DescribeDomainListResponseBodyDomainListResponseList },
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
  lang?: string;
  riskStatus?: string;
  scanType?: string;
  vulName?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      riskStatus: 'RiskStatus',
      scanType: 'ScanType',
      vulName: 'VulName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      riskStatus: 'string',
      scanType: 'string',
      vulName: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  groupedVulItems?: DescribeEmgVulItemResponseBodyGroupedVulItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      groupedVulItems: 'GroupedVulItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeEmgVulItemResponseBodyGroupedVulItems },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeExcludeSystemPathResponseBodyPageInfo;
  excludePaths?: DescribeExcludeSystemPathResponseBodyExcludePaths[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      excludePaths: 'ExcludePaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeExcludeSystemPathResponseBodyPageInfo,
      excludePaths: { 'type': 'array', 'itemType': DescribeExcludeSystemPathResponseBodyExcludePaths },
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
  link?: string;
  progress?: number;
  requestId?: string;
  currentCount?: number;
  message?: string;
  fileName?: string;
  totalCount?: number;
  exportStatus?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      progress: 'Progress',
      requestId: 'RequestId',
      currentCount: 'CurrentCount',
      message: 'Message',
      fileName: 'FileName',
      totalCount: 'TotalCount',
      exportStatus: 'ExportStatus',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      progress: 'number',
      requestId: 'string',
      currentCount: 'number',
      message: 'string',
      fileName: 'string',
      totalCount: 'number',
      exportStatus: 'string',
      id: 'number',
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
  requestId?: string;
  criteriaList?: DescribeExposedInstanceCriteriaResponseBodyCriteriaList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      criteriaList: 'CriteriaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      criteriaList: { 'type': 'array', 'itemType': DescribeExposedInstanceCriteriaResponseBodyCriteriaList },
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
  requestId?: string;
  exposedChains?: DescribeExposedInstanceDetailResponseBodyExposedChains[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exposedChains: 'ExposedChains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exposedChains: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChains },
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
  pageSize?: number;
  currentPage?: number;
  groupId?: number;
  vulStatus?: boolean;
  healthStatus?: boolean;
  exposureComponent?: string;
  exposurePort?: string;
  exposureIp?: string;
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      vulStatus: 'VulStatus',
      healthStatus: 'HealthStatus',
      exposureComponent: 'ExposureComponent',
      exposurePort: 'ExposurePort',
      exposureIp: 'ExposureIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      currentPage: 'number',
      groupId: 'number',
      vulStatus: 'boolean',
      healthStatus: 'boolean',
      exposureComponent: 'string',
      exposurePort: 'string',
      exposureIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeExposedInstanceListResponseBodyPageInfo;
  exposedInstances?: DescribeExposedInstanceListResponseBodyExposedInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      exposedInstances: 'ExposedInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeExposedInstanceListResponseBodyPageInfo,
      exposedInstances: { 'type': 'array', 'itemType': DescribeExposedInstanceListResponseBodyExposedInstances },
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

export class DescribeExposedStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  exposedLaterVulCount?: number;
  exposedComponentCount?: number;
  exposedPortCount?: number;
  exposedInstanceCount?: number;
  exposedWeekPasswordMachineCount?: number;
  exposedNntfVulCount?: number;
  gatewayAssetCount?: number;
  exposedIpCount?: number;
  exposedAsapVulCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exposedLaterVulCount: 'ExposedLaterVulCount',
      exposedComponentCount: 'ExposedComponentCount',
      exposedPortCount: 'ExposedPortCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      exposedWeekPasswordMachineCount: 'ExposedWeekPasswordMachineCount',
      exposedNntfVulCount: 'ExposedNntfVulCount',
      gatewayAssetCount: 'GatewayAssetCount',
      exposedIpCount: 'ExposedIpCount',
      exposedAsapVulCount: 'ExposedAsapVulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exposedLaterVulCount: 'number',
      exposedComponentCount: 'number',
      exposedPortCount: 'number',
      exposedInstanceCount: 'number',
      exposedWeekPasswordMachineCount: 'number',
      exposedNntfVulCount: 'number',
      gatewayAssetCount: 'number',
      exposedIpCount: 'number',
      exposedAsapVulCount: 'number',
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
  pageSize?: number;
  currentPage?: number;
  statisticsType?: string;
  statisticsTypeInstanceValue?: string;
  statisticsTypeGatewayType?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      statisticsType: 'StatisticsType',
      statisticsTypeInstanceValue: 'StatisticsTypeInstanceValue',
      statisticsTypeGatewayType: 'StatisticsTypeGatewayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      currentPage: 'number',
      statisticsType: 'string',
      statisticsTypeInstanceValue: 'string',
      statisticsTypeGatewayType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeExposedStatisticsDetailResponseBodyPageInfo;
  statisticsDetails?: DescribeExposedStatisticsDetailResponseBodyStatisticsDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      statisticsDetails: 'StatisticsDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeExposedStatisticsDetailResponseBodyPageInfo,
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
  regionId?: string;
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      machineTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  groupedFields?: DescribeFieldStatisticsResponseBodyGroupedFields;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupedFields: 'GroupedFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupedFields: DescribeFieldStatisticsResponseBodyGroupedFields,
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
  requestId?: string;
  frontPatchList?: DescribeFrontVulPatchListResponseBodyFrontPatchList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frontPatchList: 'FrontPatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frontPatchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchList },
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
  lang?: string;
  namespace?: string;
  vertexId?: string;
  anomalyUuid?: string;
  anomalyId?: string;
  pathLength?: number;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      namespace: 'Namespace',
      vertexId: 'VertexId',
      anomalyUuid: 'AnomalyUuid',
      anomalyId: 'AnomalyId',
      pathLength: 'PathLength',
      direction: 'Direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      namespace: 'string',
      vertexId: 'string',
      anomalyUuid: 'string',
      anomalyId: 'string',
      pathLength: 'number',
      direction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeGraph4InvestigationOnlineResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeGraph4InvestigationOnlineResponseBodyData,
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
  logicalExp?: string;
  groupField?: string;
  fieldValue?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      logicalExp: 'LogicalExp',
      groupField: 'GroupField',
      fieldValue: 'FieldValue',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      logicalExp: 'string',
      groupField: 'string',
      fieldValue: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeGroupedContainerInstancesResponseBodyPageInfo;
  groupedContainerInstanceList?: DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      groupedContainerInstanceList: 'GroupedContainerInstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeGroupedContainerInstancesResponseBodyPageInfo,
      groupedContainerInstanceList: { 'type': 'array', 'itemType': DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList },
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
  lang?: string;
  criteria?: string;
  machineTypes?: string;
  groupField?: string;
  fieldValue?: string;
  noPage?: boolean;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      criteria: 'Criteria',
      machineTypes: 'MachineTypes',
      groupField: 'GroupField',
      fieldValue: 'FieldValue',
      noPage: 'NoPage',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      criteria: 'string',
      machineTypes: 'string',
      groupField: 'string',
      fieldValue: 'string',
      noPage: 'boolean',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeGroupedInstancesResponseBodyPageInfo;
  instances?: DescribeGroupedInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeGroupedInstancesResponseBodyPageInfo,
      instances: { 'type': 'array', 'itemType': DescribeGroupedInstancesResponseBodyInstances },
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
  lang?: string;
  levels?: string;
  fuzzyMaliciousName?: string;
  currentPage?: number;
  pageSize?: string;
  repoRegionId?: string;
  repoInstanceId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  imageTag?: string;
  imageDigest?: string;
  imageLayer?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      levels: 'Levels',
      fuzzyMaliciousName: 'FuzzyMaliciousName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      repoRegionId: 'RepoRegionId',
      repoInstanceId: 'RepoInstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      imageTag: 'ImageTag',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      levels: 'string',
      fuzzyMaliciousName: 'string',
      currentPage: 'number',
      pageSize: 'string',
      repoRegionId: 'string',
      repoInstanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      imageTag: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeGroupedMaliciousFilesResponseBodyPageInfo;
  groupedMaliciousFileResponse?: DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      groupedMaliciousFileResponse: 'GroupedMaliciousFileResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeGroupedMaliciousFilesResponseBodyPageInfo,
      groupedMaliciousFileResponse: { 'type': 'array', 'itemType': DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse },
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
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  count?: number;
  groupedFileds?: DescribeGroupedTagsResponseBodyGroupedFileds[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      count: 'Count',
      groupedFileds: 'GroupedFileds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      count: 'number',
      groupedFileds: { 'type': 'array', 'itemType': DescribeGroupedTagsResponseBodyGroupedFileds },
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
  lang?: string;
  type?: string;
  uuids?: string;
  aliasName?: string;
  necessity?: string;
  dealed?: string;
  currentPage?: number;
  pageSize?: number;
  groupId?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  clusterId?: string;
  minScore?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      type: 'Type',
      uuids: 'Uuids',
      aliasName: 'AliasName',
      necessity: 'Necessity',
      dealed: 'Dealed',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      groupId: 'GroupId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      targetType: 'TargetType',
      clusterId: 'ClusterId',
      minScore: 'MinScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      type: 'string',
      uuids: 'string',
      aliasName: 'string',
      necessity: 'string',
      dealed: 'string',
      currentPage: 'number',
      pageSize: 'number',
      groupId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      targetType: 'string',
      clusterId: 'string',
      minScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  groupedVulItems?: DescribeGroupedVulResponseBodyGroupedVulItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      groupedVulItems: 'GroupedVulItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeGroupedVulResponseBodyGroupedVulItems },
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
  requestId?: string;
  honeyPotCount?: number;
  honeyPotAuthCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      honeyPotCount: 'HoneyPotCount',
      honeyPotAuthCount: 'HoneyPotAuthCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      honeyPotCount: 'number',
      honeyPotAuthCount: 'number',
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
  statisticsKeyType?: string;
  statisticsDays?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      statisticsKeyType: 'StatisticsKeyType',
      statisticsDays: 'StatisticsDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      statisticsKeyType: 'string',
      statisticsDays: 'number',
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

export class DescribeImageGroupedVulListRequest extends $tea.Model {
  type?: string;
  groupId?: string;
  cveId?: string;
  uuids?: string;
  name?: string;
  aliasName?: string;
  patchId?: number;
  level?: string;
  lastTsStart?: number;
  lastTsEnd?: number;
  statusList?: string;
  orderBy?: string;
  direction?: string;
  necessity?: string;
  dealed?: string;
  createTsStart?: number;
  createTsEnd?: number;
  currentPage?: number;
  pageSize?: number;
  remark?: string;
  searchTags?: string;
  repoRegionId?: string;
  repoInstanceId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  imageTag?: string;
  imageDigest?: string;
  imageLayer?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      groupId: 'GroupId',
      cveId: 'CveId',
      uuids: 'Uuids',
      name: 'Name',
      aliasName: 'AliasName',
      patchId: 'PatchId',
      level: 'Level',
      lastTsStart: 'LastTsStart',
      lastTsEnd: 'LastTsEnd',
      statusList: 'StatusList',
      orderBy: 'OrderBy',
      direction: 'Direction',
      necessity: 'Necessity',
      dealed: 'Dealed',
      createTsStart: 'CreateTsStart',
      createTsEnd: 'CreateTsEnd',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      remark: 'Remark',
      searchTags: 'SearchTags',
      repoRegionId: 'RepoRegionId',
      repoInstanceId: 'RepoInstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      imageTag: 'ImageTag',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      groupId: 'string',
      cveId: 'string',
      uuids: 'string',
      name: 'string',
      aliasName: 'string',
      patchId: 'number',
      level: 'string',
      lastTsStart: 'number',
      lastTsEnd: 'number',
      statusList: 'string',
      orderBy: 'string',
      direction: 'string',
      necessity: 'string',
      dealed: 'string',
      createTsStart: 'number',
      createTsEnd: 'number',
      currentPage: 'number',
      pageSize: 'number',
      remark: 'string',
      searchTags: 'string',
      repoRegionId: 'string',
      repoInstanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      imageTag: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  groupedVulItems?: DescribeImageGroupedVulListResponseBodyGroupedVulItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      groupedVulItems: 'GroupedVulItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeImageGroupedVulListResponseBodyGroupedVulItems },
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

export class DescribeImageScanAuthCountResponseBody extends $tea.Model {
  requestId?: string;
  imageScan?: DescribeImageScanAuthCountResponseBodyImageScan;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageScan: 'ImageScan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageScan: DescribeImageScanAuthCountResponseBodyImageScan,
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
  requestId?: string;
  instanceCount?: number;
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceCount: 'InstanceCount',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceCount: 'number',
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
  lang?: string;
  type?: string;
  uuids?: string;
  name?: string;
  aliasName?: string;
  statusList?: string;
  necessity?: string;
  dealed?: string;
  currentPage?: number;
  pageSize?: number;
  repoRegionId?: string;
  repoInstanceId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  regionId?: string;
  instanceId?: string;
  tag?: string;
  digest?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      type: 'Type',
      uuids: 'Uuids',
      name: 'Name',
      aliasName: 'AliasName',
      statusList: 'StatusList',
      necessity: 'Necessity',
      dealed: 'Dealed',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      repoRegionId: 'RepoRegionId',
      repoInstanceId: 'RepoInstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      tag: 'Tag',
      digest: 'Digest',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      type: 'string',
      uuids: 'string',
      name: 'string',
      aliasName: 'string',
      statusList: 'string',
      necessity: 'string',
      dealed: 'string',
      currentPage: 'number',
      pageSize: 'number',
      repoRegionId: 'string',
      repoInstanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      regionId: 'string',
      instanceId: 'string',
      tag: 'string',
      digest: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  vulRecords?: DescribeImageVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
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
  sourceIp?: string;
  lang?: string;
  deadline?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      deadline: 'Deadline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      deadline: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstallCaptchaResponseBody extends $tea.Model {
  deadline?: string;
  requestId?: string;
  captchaCode?: string;
  static names(): { [key: string]: string } {
    return {
      deadline: 'Deadline',
      requestId: 'RequestId',
      captchaCode: 'CaptchaCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadline: 'string',
      requestId: 'string',
      captchaCode: 'string',
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

export class DescribeInstanceAntiBruteForceRulesRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo;
  rules?: DescribeInstanceAntiBruteForceRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo,
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
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeInstanceStatisticsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeInstanceStatisticsResponseBodyData },
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
  ip?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoResponseBody extends $tea.Model {
  gmtLastC2?: string;
  natDayTrace?: string;
  isProxy1d?: string;
  gmtFirstMiningPool?: string;
  province?: string;
  isMaliciousLogin7d?: string;
  totalDayCntTor?: string;
  totalDayCntWebAttack?: string;
  gmtLastProxy?: string;
  isNat7d?: string;
  requestId?: string;
  isp?: string;
  tags?: string;
  proxyDayTrace?: string;
  dayCnt7dWebAttack?: string;
  gmtLastTor?: string;
  webAttackDayTrace?: string;
  gmtLastMaliciousLogin?: string;
  gmtLastWebAttack?: string;
  isWebAttack1d?: string;
  dayCnt7dTor?: string;
  isTor?: string;
  isProxy7d?: string;
  gmtLastMaliciousSource?: string;
  rdns?: string;
  isC21d?: string;
  isWebAttack7d?: string;
  isMaliciousSource1d?: string;
  geo?: string;
  isTor1d?: string;
  isMaliciousLogin?: string;
  gmtFirstC2?: string;
  c2DayTrace?: string;
  dayCnt30dWebAttack?: string;
  maliciousSourceDayTrace?: string;
  isMiningPool?: string;
  isMaliciousSource7d?: string;
  miningPoolDayTrace?: string;
  isIdc?: string;
  gmtLastMiningPool?: string;
  isWebAttack30d?: string;
  isTor7d?: string;
  isNat?: string;
  isNat1d?: string;
  isMaliciousSource?: string;
  torDayTrace?: string;
  ip?: string;
  isWebAttack?: string;
  city?: string;
  isC2?: string;
  isMiningPool7d?: string;
  maliciousScore?: string;
  isMaliciousSource30d?: string;
  gmtLastNat?: string;
  idcName?: string;
  isMiningPool1d?: string;
  isMaliciousLogin1d?: string;
  country?: string;
  dayCnt30dTor?: string;
  isProxy?: string;
  maliciousLoginDayTrace?: string;
  isC27d?: string;
  static names(): { [key: string]: string } {
    return {
      gmtLastC2: 'gmt_last_c2',
      natDayTrace: 'nat_day_trace',
      isProxy1d: 'is_proxy_1d',
      gmtFirstMiningPool: 'gmt_first_mining_pool',
      province: 'province',
      isMaliciousLogin7d: 'is_malicious_login_7d',
      totalDayCntTor: 'total_day_cnt_tor',
      totalDayCntWebAttack: 'total_day_cnt_web_attack',
      gmtLastProxy: 'gmt_last_proxy',
      isNat7d: 'is_nat_7d',
      requestId: 'RequestId',
      isp: 'isp',
      tags: 'tags',
      proxyDayTrace: 'proxy_day_trace',
      dayCnt7dWebAttack: 'day_cnt_7d_web_attack',
      gmtLastTor: 'gmt_last_tor',
      webAttackDayTrace: 'web_attack_day_trace',
      gmtLastMaliciousLogin: 'gmt_last_malicious_login',
      gmtLastWebAttack: 'gmt_last_web_attack',
      isWebAttack1d: 'is_web_attack_1d',
      dayCnt7dTor: 'day_cnt_7d_tor',
      isTor: 'is_tor',
      isProxy7d: 'is_proxy_7d',
      gmtLastMaliciousSource: 'gmt_last_malicious_source',
      rdns: 'rdns',
      isC21d: 'is_c2_1d',
      isWebAttack7d: 'is_web_attack_7d',
      isMaliciousSource1d: 'is_malicious_source_1d',
      geo: 'geo',
      isTor1d: 'is_tor_1d',
      isMaliciousLogin: 'is_malicious_login',
      gmtFirstC2: 'gmt_first_c2',
      c2DayTrace: 'c2_day_trace',
      dayCnt30dWebAttack: 'day_cnt_30d_web_attack',
      maliciousSourceDayTrace: 'malicious_source_day_trace',
      isMiningPool: 'is_mining_pool',
      isMaliciousSource7d: 'is_malicious_source_7d',
      miningPoolDayTrace: 'mining_pool_day_trace',
      isIdc: 'is_idc',
      gmtLastMiningPool: 'gmt_last_mining_pool',
      isWebAttack30d: 'is_web_attack_30d',
      isTor7d: 'is_tor_7d',
      isNat: 'is_nat',
      isNat1d: 'is_nat_1d',
      isMaliciousSource: 'is_malicious_source',
      torDayTrace: 'tor_day_trace',
      ip: 'ip',
      isWebAttack: 'is_web_attack',
      city: 'city',
      isC2: 'is_c2',
      isMiningPool7d: 'is_mining_pool_7d',
      maliciousScore: 'malicious_score',
      isMaliciousSource30d: 'is_malicious_source_30d',
      gmtLastNat: 'gmt_last_nat',
      idcName: 'idc_name',
      isMiningPool1d: 'is_mining_pool_1d',
      isMaliciousLogin1d: 'is_malicious_login_1d',
      country: 'country',
      dayCnt30dTor: 'day_cnt_30d_tor',
      isProxy: 'is_proxy',
      maliciousLoginDayTrace: 'malicious_login_day_trace',
      isC27d: 'is_c2_7d',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtLastC2: 'string',
      natDayTrace: 'string',
      isProxy1d: 'string',
      gmtFirstMiningPool: 'string',
      province: 'string',
      isMaliciousLogin7d: 'string',
      totalDayCntTor: 'string',
      totalDayCntWebAttack: 'string',
      gmtLastProxy: 'string',
      isNat7d: 'string',
      requestId: 'string',
      isp: 'string',
      tags: 'string',
      proxyDayTrace: 'string',
      dayCnt7dWebAttack: 'string',
      gmtLastTor: 'string',
      webAttackDayTrace: 'string',
      gmtLastMaliciousLogin: 'string',
      gmtLastWebAttack: 'string',
      isWebAttack1d: 'string',
      dayCnt7dTor: 'string',
      isTor: 'string',
      isProxy7d: 'string',
      gmtLastMaliciousSource: 'string',
      rdns: 'string',
      isC21d: 'string',
      isWebAttack7d: 'string',
      isMaliciousSource1d: 'string',
      geo: 'string',
      isTor1d: 'string',
      isMaliciousLogin: 'string',
      gmtFirstC2: 'string',
      c2DayTrace: 'string',
      dayCnt30dWebAttack: 'string',
      maliciousSourceDayTrace: 'string',
      isMiningPool: 'string',
      isMaliciousSource7d: 'string',
      miningPoolDayTrace: 'string',
      isIdc: 'string',
      gmtLastMiningPool: 'string',
      isWebAttack30d: 'string',
      isTor7d: 'string',
      isNat: 'string',
      isNat1d: 'string',
      isMaliciousSource: 'string',
      torDayTrace: 'string',
      ip: 'string',
      isWebAttack: 'string',
      city: 'string',
      isC2: 'string',
      isMiningPool7d: 'string',
      maliciousScore: 'string',
      isMaliciousSource30d: 'string',
      gmtLastNat: 'string',
      idcName: 'string',
      isMiningPool1d: 'string',
      isMaliciousLogin1d: 'string',
      country: 'string',
      dayCnt30dTor: 'string',
      isProxy: 'string',
      maliciousLoginDayTrace: 'string',
      isC27d: 'string',
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
  lang?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstoreStorageResponseBody extends $tea.Model {
  used?: number;
  ttl?: number;
  logstore?: string;
  requestId?: string;
  preserve?: number;
  static names(): { [key: string]: string } {
    return {
      used: 'Used',
      ttl: 'Ttl',
      logstore: 'Logstore',
      requestId: 'RequestId',
      preserve: 'Preserve',
    };
  }

  static types(): { [key: string]: any } {
    return {
      used: 'number',
      ttl: 'number',
      logstore: 'string',
      requestId: 'string',
      preserve: 'number',
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
  httpStatusCode?: number;
  requestId?: string;
  success?: boolean;
  count?: number;
  moduleConfigList?: DescribeModuleConfigResponseBodyModuleConfigList[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      count: 'Count',
      moduleConfigList: 'ModuleConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      count: 'number',
      moduleConfigList: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigList },
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
  requestId?: string;
  noticeConfigList?: DescribeNoticeConfigResponseBodyNoticeConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      noticeConfigList: 'NoticeConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      noticeConfigList: { 'type': 'array', 'itemType': DescribeNoticeConfigResponseBodyNoticeConfigList },
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
  process?: number;
  autoRun?: number;
  requestId?: string;
  user?: number;
  software?: number;
  cron?: number;
  port?: number;
  sca?: number;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      autoRun: 'AutoRun',
      requestId: 'RequestId',
      user: 'User',
      software: 'Software',
      cron: 'Cron',
      port: 'Port',
      sca: 'Sca',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: 'number',
      autoRun: 'number',
      requestId: 'string',
      user: 'number',
      software: 'number',
      cron: 'number',
      port: 'number',
      sca: 'number',
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
  remark?: string;
  source?: string;
  user?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      source: 'Source',
      user: 'User',
      uuid: 'Uuid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      source: 'string',
      user: 'string',
      uuid: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyCronDetailResponseBodyPageInfo;
  propertys?: DescribePropertyCronDetailResponseBodyPropertys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyCronDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyCronDetailResponseBodyPropertys },
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
  remark?: string;
  port?: string;
  procName?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      port: 'Port',
      procName: 'ProcName',
      uuid: 'Uuid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      port: 'string',
      procName: 'string',
      uuid: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyPortDetailResponseBodyPageInfo;
  propertys?: DescribePropertyPortDetailResponseBodyPropertys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyPortDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyPortDetailResponseBodyPropertys },
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
  forceFlush?: boolean;
  port?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      forceFlush: 'ForceFlush',
      port: 'Port',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceFlush: 'boolean',
      port: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyPortItemResponseBodyPageInfo;
  propertyItems?: DescribePropertyPortItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyPortItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyPortItemResponseBodyPropertyItems },
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
  remark?: string;
  name?: string;
  user?: string;
  cmdline?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      name: 'Name',
      user: 'User',
      cmdline: 'Cmdline',
      uuid: 'Uuid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      name: 'string',
      user: 'string',
      cmdline: 'string',
      uuid: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyProcDetailResponseBodyPageInfo;
  propertys?: DescribePropertyProcDetailResponseBodyPropertys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyProcDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyProcDetailResponseBodyPropertys },
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
  forceFlush?: boolean;
  name?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      forceFlush: 'ForceFlush',
      name: 'Name',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceFlush: 'boolean',
      name: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyProcItemResponseBodyPageInfo;
  propertyItems?: DescribePropertyProcItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyProcItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyProcItemResponseBodyPropertyItems },
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
  lang?: string;
  searchItem?: string;
  searchInfo?: string;
  scaName?: string;
  bizType?: string;
  searchItemSub?: string;
  searchInfoSub?: string;
  remark?: string;
  name?: number;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      searchItem: 'SearchItem',
      searchInfo: 'SearchInfo',
      scaName: 'ScaName',
      bizType: 'BizType',
      searchItemSub: 'SearchItemSub',
      searchInfoSub: 'SearchInfoSub',
      remark: 'Remark',
      name: 'Name',
      uuid: 'Uuid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      searchItem: 'string',
      searchInfo: 'string',
      scaName: 'string',
      bizType: 'string',
      searchItemSub: 'string',
      searchInfoSub: 'string',
      remark: 'string',
      name: 'number',
      uuid: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyScaDetailResponseBodyPageInfo;
  propertys?: DescribePropertyScaDetailResponseBodyPropertys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyScaDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyScaDetailResponseBodyPropertys },
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
  remark?: string;
  name?: string;
  path?: string;
  softwareVersion?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      name: 'Name',
      path: 'Path',
      softwareVersion: 'SoftwareVersion',
      uuid: 'Uuid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      name: 'string',
      path: 'string',
      softwareVersion: 'string',
      uuid: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertySoftwareDetailResponseBodyPageInfo;
  propertys?: DescribePropertySoftwareDetailResponseBodyPropertys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertySoftwareDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertySoftwareDetailResponseBodyPropertys },
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
  forceFlush?: boolean;
  name?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      forceFlush: 'ForceFlush',
      name: 'Name',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceFlush: 'boolean',
      name: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertySoftwareItemResponseBodyPageInfo;
  propertyItems?: DescribePropertySoftwareItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertySoftwareItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertySoftwareItemResponseBodyPropertyItems },
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
  type?: string;
  itemCount?: number;
  requestId?: string;
  newestStatisticItems?: DescribePropertyUsageNewestResponseBodyNewestStatisticItems[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      itemCount: 'ItemCount',
      requestId: 'RequestId',
      newestStatisticItems: 'NewestStatisticItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      itemCount: 'number',
      requestId: 'string',
      newestStatisticItems: { 'type': 'array', 'itemType': DescribePropertyUsageNewestResponseBodyNewestStatisticItems },
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
  remark?: string;
  user?: string;
  isRoot?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      user: 'User',
      isRoot: 'IsRoot',
      uuid: 'Uuid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      user: 'string',
      isRoot: 'string',
      uuid: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyUserDetailResponseBodyPageInfo;
  propertys?: DescribePropertyUserDetailResponseBodyPropertys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyUserDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyUserDetailResponseBodyPropertys },
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
  forceFlush?: boolean;
  user?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      forceFlush: 'ForceFlush',
      user: 'User',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceFlush: 'boolean',
      user: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribePropertyUserItemResponseBodyPageInfo;
  propertyItems?: DescribePropertyUserItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribePropertyUserItemResponseBodyPageInfo,
      propertyItems: { 'type': 'array', 'itemType': DescribePropertyUserItemResponseBodyPropertyItems },
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
  sourceIp?: string;
  quaraFileId?: number;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      quaraFileId: 'QuaraFileId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      quaraFileId: 'number',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQuaraFileDownloadInfoResponseBody extends $tea.Model {
  uuid?: string;
  quaraFileId?: number;
  requestId?: string;
  downloadUrl?: string;
  path?: string;
  md5?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      quaraFileId: 'QuaraFileId',
      requestId: 'RequestId',
      downloadUrl: 'DownloadUrl',
      path: 'Path',
      md5: 'Md5',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      quaraFileId: 'number',
      requestId: 'string',
      downloadUrl: 'string',
      path: 'string',
      md5: 'string',
      tag: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  status?: string;
  machineRemark?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      machineRemark: 'MachineRemark',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      machineRemark: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBody extends $tea.Model {
  requestId?: string;
  restoreJobs?: DescribeRestoreJobsResponseBodyRestoreJobs[];
  pageInfo?: DescribeRestoreJobsResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreJobs: 'RestoreJobs',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreJobs: { 'type': 'array', 'itemType': DescribeRestoreJobsResponseBodyRestoreJobs },
      pageInfo: DescribeRestoreJobsResponseBodyPageInfo,
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

export class DescribeRiskCheckItemResultRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  itemId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      itemId: 'ItemId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      itemId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultResponseBody extends $tea.Model {
  requestId?: string;
  pageContentResource?: DescribeRiskCheckItemResultResponseBodyPageContentResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageContentResource: 'PageContentResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageContentResource: DescribeRiskCheckItemResultResponseBodyPageContentResource,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  groupId?: number;
  currentPage?: number;
  riskLevel?: string;
  status?: string;
  assetType?: string;
  name?: string;
  pageSize?: number;
  queryFlag?: string;
  itemIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      groupId: 'GroupId',
      currentPage: 'CurrentPage',
      riskLevel: 'RiskLevel',
      status: 'Status',
      assetType: 'AssetType',
      name: 'Name',
      pageSize: 'PageSize',
      queryFlag: 'QueryFlag',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      groupId: 'number',
      currentPage: 'number',
      riskLevel: 'string',
      status: 'string',
      assetType: 'string',
      name: 'string',
      pageSize: 'number',
      queryFlag: 'string',
      itemIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  pageCount?: number;
  count?: number;
  list?: DescribeRiskCheckResultResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageCount: 'PageCount',
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageCount: 'number',
      count: 'number',
      list: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyList },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  resourceDirectoryAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      resourceDirectoryAccountId: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeResponseBody extends $tea.Model {
  requestId?: string;
  list?: DescribeRiskItemTypeResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      list: { 'type': 'array', 'itemType': DescribeRiskItemTypeResponseBodyList },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  currentPage?: number;
  pageSize?: number;
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      currentPage: 'number',
      pageSize: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskListCheckResultResponseBody extends $tea.Model {
  requestId?: string;
  list?: DescribeRiskListCheckResultResponseBodyList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      list: { 'type': 'array', 'itemType': DescribeRiskListCheckResultResponseBodyList },
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

export class DescribeSasAssetStatisticsColumnRequest extends $tea.Model {
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

export class DescribeSasAssetStatisticsColumnResponseBody extends $tea.Model {
  statisticsColumn?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      statisticsColumn: 'StatisticsColumn',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticsColumn: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSasAssetStatisticsColumnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSasAssetStatisticsColumnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSasAssetStatisticsColumnResponseBody,
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
  targetInfo?: string;
  requestId?: string;
  scanTaskProgress?: string;
  static names(): { [key: string]: string } {
    return {
      targetInfo: 'TargetInfo',
      requestId: 'RequestId',
      scanTaskProgress: 'ScanTaskProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetInfo: 'string',
      requestId: 'string',
      scanTaskProgress: 'string',
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
  sourceIp?: string;
  lang?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionResponseBody extends $tea.Model {
  requestId?: string;
  conditionList?: DescribeSearchConditionResponseBodyConditionList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      conditionList: 'ConditionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      conditionList: { 'type': 'array', 'itemType': DescribeSearchConditionResponseBodyConditionList },
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
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  suggestions?: DescribeSecureSuggestionResponseBodySuggestions[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      suggestions: 'Suggestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      suggestions: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestions },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
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

export class DescribeSecurityEventOperationsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      securityEventId: 'number',
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

export class DescribeSecurityEventOperationStatusRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  taskId?: number;
  securityEventIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      securityEventIds: 'SecurityEventIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeSecurityStatInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  resourceDirectoryAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBody extends $tea.Model {
  success?: boolean;
  requestId?: string;
  securityEvent?: DescribeSecurityStatInfoResponseBodySecurityEvent;
  attackEvent?: DescribeSecurityStatInfoResponseBodyAttackEvent;
  healthCheck?: DescribeSecurityStatInfoResponseBodyHealthCheck;
  vulnerability?: DescribeSecurityStatInfoResponseBodyVulnerability;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      requestId: 'RequestId',
      securityEvent: 'SecurityEvent',
      attackEvent: 'AttackEvent',
      healthCheck: 'HealthCheck',
      vulnerability: 'Vulnerability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      requestId: 'string',
      securityEvent: DescribeSecurityStatInfoResponseBodySecurityEvent,
      attackEvent: DescribeSecurityStatInfoResponseBodyAttackEvent,
      healthCheck: DescribeSecurityStatInfoResponseBodyHealthCheck,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      securityEventId: 'number',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  taskId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      taskId: 'TaskId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      taskId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeSimilarSecurityEventsResponseBodyPageInfo;
  securityEventsResponse?: DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      securityEventsResponse: 'SecurityEventsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeSimilarSecurityEventsResponseBodyPageInfo,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  machineRegion?: string;
  machineRemark?: string;
  statusList?: string;
  pageSize?: number;
  currentPage?: number;
  nextToken?: string;
  apiVersion?: string;
  isAliYunEcs?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      machineRegion: 'MachineRegion',
      machineRemark: 'MachineRemark',
      statusList: 'StatusList',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      apiVersion: 'ApiVersion',
      isAliYunEcs: 'IsAliYunEcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      machineRegion: 'string',
      machineRemark: 'string',
      statusList: 'string',
      pageSize: 'number',
      currentPage: 'number',
      nextToken: 'string',
      apiVersion: 'string',
      isAliYunEcs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeSnapshotsResponseBodyPageInfo;
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeSnapshotsResponseBodyPageInfo,
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
  sourceIp?: string;
  lang?: string;
  strategyIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
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
  sourceIp?: string;
  strategyId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      strategyId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBody extends $tea.Model {
  inProcessCount?: number;
  endTime?: string;
  startTime?: string;
  percent?: string;
  requestId?: string;
  failCount?: number;
  source?: string;
  successCount?: number;
  failedEcsList?: DescribeStrategyExecDetailResponseBodyFailedEcsList[];
  static names(): { [key: string]: string } {
    return {
      inProcessCount: 'InProcessCount',
      endTime: 'EndTime',
      startTime: 'StartTime',
      percent: 'Percent',
      requestId: 'RequestId',
      failCount: 'FailCount',
      source: 'Source',
      successCount: 'SuccessCount',
      failedEcsList: 'FailedEcsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProcessCount: 'number',
      endTime: 'string',
      startTime: 'string',
      percent: 'string',
      requestId: 'string',
      failCount: 'number',
      source: 'string',
      successCount: 'number',
      failedEcsList: { 'type': 'array', 'itemType': DescribeStrategyExecDetailResponseBodyFailedEcsList },
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
  processRate?: number;
  strategyId?: number;
  requestId?: string;
  passRate?: string;
  static names(): { [key: string]: string } {
    return {
      execStatus: 'ExecStatus',
      processRate: 'ProcessRate',
      strategyId: 'StrategyId',
      requestId: 'RequestId',
      passRate: 'PassRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execStatus: 'number',
      processRate: 'number',
      strategyId: 'number',
      requestId: 'string',
      passRate: 'string',
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
  sourceIp?: string;
  type?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
      config: 'string',
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
  sourceIp?: string;
  lang?: string;
  resourceDirectoryAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSummaryInfoResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  aegisClientOfflineCount?: number;
  aegisClientOnlineCount?: number;
  securityScore?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      aegisClientOfflineCount: 'AegisClientOfflineCount',
      aegisClientOnlineCount: 'AegisClientOnlineCount',
      securityScore: 'SecurityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      aegisClientOfflineCount: 'number',
      aegisClientOnlineCount: 'number',
      securityScore: 'number',
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

export class DescribeSupportRegionRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
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
  sourceIp?: string;
  lang?: string;
  suspiciousEventId?: number;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      suspiciousEventId: 'SuspiciousEventId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      suspiciousEventId: 'number',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailResponseBody extends $tea.Model {
  dataSource?: string;
  eventName?: string;
  internetIp?: string;
  intranetIp?: string;
  lastTime?: string;
  operateMsg?: string;
  uuid?: string;
  canBeDealOnLine?: boolean;
  requestId?: string;
  eventTypeDesc?: string;
  eventDesc?: string;
  instanceName?: string;
  eventStatus?: string;
  saleVersion?: string;
  operateErrorCode?: string;
  sasId?: string;
  level?: string;
  id?: number;
  details?: DescribeSuspEventDetailResponseBodyDetails[];
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      eventName: 'EventName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTime: 'LastTime',
      operateMsg: 'OperateMsg',
      uuid: 'Uuid',
      canBeDealOnLine: 'CanBeDealOnLine',
      requestId: 'RequestId',
      eventTypeDesc: 'EventTypeDesc',
      eventDesc: 'EventDesc',
      instanceName: 'InstanceName',
      eventStatus: 'EventStatus',
      saleVersion: 'SaleVersion',
      operateErrorCode: 'OperateErrorCode',
      sasId: 'SasId',
      level: 'Level',
      id: 'Id',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'string',
      eventName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTime: 'string',
      operateMsg: 'string',
      uuid: 'string',
      canBeDealOnLine: 'boolean',
      requestId: 'string',
      eventTypeDesc: 'string',
      eventDesc: 'string',
      instanceName: 'string',
      eventStatus: 'string',
      saleVersion: 'string',
      operateErrorCode: 'string',
      sasId: 'string',
      level: 'string',
      id: 'number',
      details: { 'type': 'array', 'itemType': DescribeSuspEventDetailResponseBodyDetails },
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
  sourceIp?: string;
  pageSize?: string;
  status?: string;
  groupId?: string;
  quaraTag?: string;
  currentPage?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      status: 'Status',
      groupId: 'GroupId',
      quaraTag: 'QuaraTag',
      currentPage: 'CurrentPage',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'string',
      status: 'string',
      groupId: 'string',
      quaraTag: 'string',
      currentPage: 'string',
      from: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  count?: number;
  quaraFiles?: DescribeSuspEventQuaraFilesResponseBodyQuaraFiles[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      count: 'Count',
      quaraFiles: 'QuaraFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      count: 'number',
      quaraFiles: { 'type': 'array', 'itemType': DescribeSuspEventQuaraFilesResponseBodyQuaraFiles },
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
  sourceIp?: string;
  dealed?: string;
  name?: string;
  levels?: string;
  parentEventTypes?: string;
  remark?: string;
  status?: string;
  pageSize?: string;
  currentPage?: string;
  lang?: string;
  alarmUniqueInfo?: string;
  uniqueInfo?: string;
  from?: string;
  source?: string;
  groupId?: number;
  uuids?: string;
  clusterId?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  operateErrorCodeList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      dealed: 'Dealed',
      name: 'Name',
      levels: 'Levels',
      parentEventTypes: 'ParentEventTypes',
      remark: 'Remark',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      uniqueInfo: 'UniqueInfo',
      from: 'From',
      source: 'Source',
      groupId: 'GroupId',
      uuids: 'Uuids',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      targetType: 'TargetType',
      operateErrorCodeList: 'OperateErrorCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      dealed: 'string',
      name: 'string',
      levels: 'string',
      parentEventTypes: 'string',
      remark: 'string',
      status: 'string',
      pageSize: 'string',
      currentPage: 'string',
      lang: 'string',
      alarmUniqueInfo: 'string',
      uniqueInfo: 'string',
      from: 'string',
      source: 'string',
      groupId: 'number',
      uuids: 'string',
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      targetType: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  count?: number;
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      count: 'Count',
      suspEvents: 'SuspEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      count: 'number',
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEvents },
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

export class DescribeUserBackupMachinesRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBackupMachinesResponseBody extends $tea.Model {
  requestId?: string;
  machines?: DescribeUserBackupMachinesResponseBodyMachines[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      machines: 'Machines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      machines: { 'type': 'array', 'itemType': DescribeUserBackupMachinesResponseBodyMachines },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
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
  lang?: string;
  type?: string;
  statusList?: string;
  tag?: string;
  level?: string;
  dealed?: string;
  groupId?: number;
  vpcInstanceIds?: string;
  remark?: string;
  searchTags?: string;
  fieldName?: string;
  fieldValue?: string;
  targetType?: string;
  necessity?: string;
  vulNames?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      type: 'Type',
      statusList: 'StatusList',
      tag: 'Tag',
      level: 'Level',
      dealed: 'Dealed',
      groupId: 'GroupId',
      vpcInstanceIds: 'VpcInstanceIds',
      remark: 'Remark',
      searchTags: 'SearchTags',
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      targetType: 'TargetType',
      necessity: 'Necessity',
      vulNames: 'VulNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      type: 'string',
      statusList: 'string',
      tag: 'string',
      level: 'string',
      dealed: 'string',
      groupId: 'number',
      vpcInstanceIds: 'string',
      remark: 'string',
      searchTags: 'string',
      fieldName: 'string',
      fieldValue: 'string',
      targetType: 'string',
      necessity: 'string',
      vulNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUuidsByVulNamesResponseBody extends $tea.Model {
  requestId?: string;
  machineInfoStatistics?: DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      machineInfoStatistics: 'MachineInfoStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      machineInfoStatistics: { 'type': 'array', 'itemType': DescribeUuidsByVulNamesResponseBodyMachineInfoStatistics },
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
  sourceIp?: string;
  resourceDirectoryAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceDirectoryAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVersionConfigResponseBody extends $tea.Model {
  MVAuthCount?: number;
  sasLog?: number;
  sasScreen?: number;
  honeypotCapacity?: number;
  MVUnusedAuthCount?: number;
  webLock?: number;
  appWhiteListAuthCount?: number;
  requestId?: string;
  lastTrailEndTime?: number;
  version?: number;
  webLockAuthCount?: number;
  releaseTime?: number;
  highestVersion?: number;
  assetLevel?: number;
  isOverBalance?: boolean;
  instanceId?: string;
  slsCapacity?: number;
  vmCores?: number;
  allowPartialBuy?: number;
  appWhiteList?: number;
  imageScanCapacity?: number;
  isTrialVersion?: number;
  userDefinedAlarms?: number;
  static names(): { [key: string]: string } {
    return {
      MVAuthCount: 'MVAuthCount',
      sasLog: 'SasLog',
      sasScreen: 'SasScreen',
      honeypotCapacity: 'HoneypotCapacity',
      MVUnusedAuthCount: 'MVUnusedAuthCount',
      webLock: 'WebLock',
      appWhiteListAuthCount: 'AppWhiteListAuthCount',
      requestId: 'RequestId',
      lastTrailEndTime: 'LastTrailEndTime',
      version: 'Version',
      webLockAuthCount: 'WebLockAuthCount',
      releaseTime: 'ReleaseTime',
      highestVersion: 'HighestVersion',
      assetLevel: 'AssetLevel',
      isOverBalance: 'IsOverBalance',
      instanceId: 'InstanceId',
      slsCapacity: 'SlsCapacity',
      vmCores: 'VmCores',
      allowPartialBuy: 'AllowPartialBuy',
      appWhiteList: 'AppWhiteList',
      imageScanCapacity: 'ImageScanCapacity',
      isTrialVersion: 'IsTrialVersion',
      userDefinedAlarms: 'UserDefinedAlarms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MVAuthCount: 'number',
      sasLog: 'number',
      sasScreen: 'number',
      honeypotCapacity: 'number',
      MVUnusedAuthCount: 'number',
      webLock: 'number',
      appWhiteListAuthCount: 'number',
      requestId: 'string',
      lastTrailEndTime: 'number',
      version: 'number',
      webLockAuthCount: 'number',
      releaseTime: 'number',
      highestVersion: 'number',
      assetLevel: 'number',
      isOverBalance: 'boolean',
      instanceId: 'string',
      slsCapacity: 'number',
      vmCores: 'number',
      allowPartialBuy: 'number',
      appWhiteList: 'number',
      imageScanCapacity: 'number',
      isTrialVersion: 'number',
      userDefinedAlarms: 'number',
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
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
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
  requestId?: string;
  criteriaList?: DescribeVpcHoneyPotCriteriaResponseBodyCriteriaList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      criteriaList: 'CriteriaList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      criteriaList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotCriteriaResponseBodyCriteriaList },
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
  vpcId?: string;
  vpcName?: string;
  vpcRegionId?: string;
  honeyPotExistence?: boolean;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      honeyPotExistence: 'HoneyPotExistence',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      honeyPotExistence: 'boolean',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBody extends $tea.Model {
  requestId?: string;
  pageInfo?: DescribeVpcHoneyPotListResponseBodyPageInfo;
  vpcHoneyPotDTOList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageInfo: 'PageInfo',
      vpcHoneyPotDTOList: 'VpcHoneyPotDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageInfo: DescribeVpcHoneyPotListResponseBodyPageInfo,
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
  lang?: string;
  type?: string;
  name?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      type: 'Type',
      name: 'Name',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      type: 'string',
      name: 'string',
      aliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBody extends $tea.Model {
  requestId?: string;
  cves?: DescribeVulDetailsResponseBodyCves[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cves: 'Cves',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cves: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCves },
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

export class DescribeVulListRequest extends $tea.Model {
  lang?: string;
  remark?: string;
  groupId?: string;
  type?: string;
  uuids?: string;
  aliasName?: string;
  necessity?: string;
  dealed?: string;
  currentPage?: number;
  pageSize?: number;
  attachTypes?: string;
  vpcInstanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      remark: 'Remark',
      groupId: 'GroupId',
      type: 'Type',
      uuids: 'Uuids',
      aliasName: 'AliasName',
      necessity: 'Necessity',
      dealed: 'Dealed',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      attachTypes: 'AttachTypes',
      vpcInstanceIds: 'VpcInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      remark: 'string',
      groupId: 'string',
      type: 'string',
      uuids: 'string',
      aliasName: 'string',
      necessity: 'string',
      dealed: 'string',
      currentPage: 'number',
      pageSize: 'number',
      attachTypes: 'string',
      vpcInstanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  vulRecords?: DescribeVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
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
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  vulWhitelists?: DescribeVulWhitelistResponseBodyVulWhitelists[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      vulWhitelists: 'VulWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
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
  sourceIp?: string;
  lang?: string;
  machineName?: string;
  uuids?: string;
  riskId?: number;
  strategyId?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      machineName: 'MachineName',
      uuids: 'Uuids',
      riskId: 'RiskId',
      strategyId: 'StrategyId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      machineName: 'string',
      uuids: 'string',
      riskId: 'number',
      strategyId: 'number',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  count?: number;
  warningMachines?: DescribeWarningMachinesResponseBodyWarningMachines[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      count: 'Count',
      warningMachines: 'WarningMachines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      count: 'number',
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
  sourceIp?: string;
  lang?: string;
  remark?: string;
  status?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      remark: 'Remark',
      status: 'Status',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      remark: 'string',
      status: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockBindListResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  bindList?: DescribeWebLockBindListResponseBodyBindList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      bindList: 'BindList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      bindList: { 'type': 'array', 'itemType': DescribeWebLockBindListResponseBodyBindList },
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
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockConfigListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  configList?: DescribeWebLockConfigListResponseBodyConfigList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      configList: 'ConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      configList: { 'type': 'array', 'itemType': DescribeWebLockConfigListResponseBodyConfigList },
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
  sourceIp?: string;
  lang?: string;
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
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
  lang?: string;
  params?: string;
  exportType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      params: 'Params',
      exportType: 'ExportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      params: 'string',
      exportType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportRecordResponseBody extends $tea.Model {
  requestId?: string;
  fileName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fileName: 'FileName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fileName: 'string',
      id: 'number',
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
  sourceIp?: string;
  lang?: string;
  riskId?: number;
  checkParams?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      riskId: 'RiskId',
      checkParams: 'CheckParams',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      riskId: 'number',
      checkParams: 'string',
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

export class GetBackupStorageCountRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStorageCountResponseBody extends $tea.Model {
  requestId?: string;
  backupStorageCount?: GetBackupStorageCountResponseBodyBackupStorageCount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      backupStorageCount: 'BackupStorageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      backupStorageCount: GetBackupStorageCountResponseBodyBackupStorageCount,
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

export class GetIncIOCsRequest extends $tea.Model {
  type?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncIOCsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
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

export class GetIOCsRequest extends $tea.Model {
  type?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIOCsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
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

export class GetLocalInstallScriptRequest extends $tea.Model {
  platformType?: string;
  uuid?: string;
  internalNetwork?: boolean;
  static names(): { [key: string]: string } {
    return {
      platformType: 'PlatformType',
      uuid: 'Uuid',
      internalNetwork: 'InternalNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformType: 'string',
      uuid: 'string',
      internalNetwork: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalInstallScriptResponseBody extends $tea.Model {
  script?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      requestId: 'string',
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
  platformType?: string;
  uuid?: string;
  internalNetwork?: boolean;
  static names(): { [key: string]: string } {
    return {
      platformType: 'PlatformType',
      uuid: 'Uuid',
      internalNetwork: 'InternalNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformType: 'string',
      uuid: 'string',
      internalNetwork: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLocalUninstallScriptResponseBody extends $tea.Model {
  script?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  groupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuspiciousStatisticsResponseBody extends $tea.Model {
  suspiciousCount?: number;
  remindCount?: number;
  requestId?: string;
  seriousCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      suspiciousCount: 'SuspiciousCount',
      remindCount: 'RemindCount',
      requestId: 'RequestId',
      seriousCount: 'SeriousCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspiciousCount: 'number',
      remindCount: 'number',
      requestId: 'string',
      seriousCount: 'number',
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
  sourceIp?: string;
  groupIdList?: string;
  typeList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupIdList: 'GroupIdList',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupIdList: 'string',
      typeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  vulLaterSum?: number;
  vulNntfSum?: number;
  vulAsapSum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulLaterSum: 'VulLaterSum',
      vulNntfSum: 'VulNntfSum',
      vulAsapSum: 'VulAsapSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulLaterSum: 'number',
      vulNntfSum: 'number',
      vulAsapSum: 'number',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  operationCode?: string;
  operationParams?: string;
  markMissParam?: string;
  markBatch?: string;
  securityEventIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      markMissParam: 'MarkMissParam',
      markBatch: 'MarkBatch',
      securityEventIds: 'SecurityEventIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      operationCode: 'string',
      operationParams: 'string',
      markMissParam: 'string',
      markBatch: 'string',
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponseBody extends $tea.Model {
  requestId?: string;
  handleSecurityEventsResponse?: HandleSecurityEventsResponseBodyHandleSecurityEventsResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      handleSecurityEventsResponse: 'HandleSecurityEventsResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      handleSecurityEventsResponse: HandleSecurityEventsResponseBodyHandleSecurityEventsResponse,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  taskId?: number;
  operationCode?: string;
  operationParams?: string;
  markMissParam?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      markMissParam: 'MarkMissParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
      operationCode: 'string',
      operationParams: 'string',
      markMissParam: 'string',
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
  sourceIp?: string;
  checkWarningIds?: string;
  checkIds?: string;
  riskId?: string;
  type?: number;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      checkWarningIds: 'CheckWarningIds',
      checkIds: 'CheckIds',
      riskId: 'RiskId',
      type: 'Type',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      checkWarningIds: 'string',
      checkIds: 'string',
      riskId: 'string',
      type: 'number',
      reason: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      policyVersion: 'string',
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

export class ModifyAntiBruteForceRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  name?: string;
  span?: number;
  failCount?: number;
  forbiddenTime?: number;
  defaultRule?: boolean;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      name: 'Name',
      span: 'Span',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      defaultRule: 'DefaultRule',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      name: 'string',
      span: 'number',
      failCount: 'number',
      forbiddenTime: 'number',
      defaultRule: 'boolean',
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
  sourceIp?: string;
  groupId?: number;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupId: 'GroupId',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupId: 'number',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  name?: string;
  policy?: { [key: string]: any };
  policyVersion?: string;
  policyRegionId?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      name: 'Name',
      policy: 'Policy',
      policyVersion: 'PolicyVersion',
      policyRegionId: 'PolicyRegionId',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policyVersion: 'string',
      policyRegionId: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyShrinkRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  name?: string;
  policyShrink?: string;
  policyVersion?: string;
  policyRegionId?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      name: 'Name',
      policyShrink: 'Policy',
      policyVersion: 'PolicyVersion',
      policyRegionId: 'PolicyRegionId',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      name: 'string',
      policyShrink: 'string',
      policyVersion: 'string',
      policyRegionId: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  status?: string;
  policyVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      status: 'Status',
      policyVersion: 'PolicyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      status: 'string',
      policyVersion: 'string',
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
  whitelist?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      whitelist: 'Whitelist',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whitelist: 'string',
      reason: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  newRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      newRuleId: 'NewRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      newRuleId: 'number',
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
  type?: string;
  config?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      config: 'Config',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      config: 'string',
      target: 'string',
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
  sourceIp?: string;
  route?: number;
  project?: string;
  timeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      route: 'Route',
      project: 'Project',
      timeLimit: 'TimeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      route: 'number',
      project: 'string',
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
  type?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      operateType: 'OperateType',
      type: 'Type',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      operateType: 'string',
      type: 'string',
      reason: 'string',
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
  uuids?: string;
  tasks?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      uuids: 'string',
      tasks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPushAllTaskResponseBody extends $tea.Model {
  requestId?: string;
  pushTaskRsp?: ModifyPushAllTaskResponseBodyPushTaskRsp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pushTaskRsp: 'PushTaskRsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pushTaskRsp: ModifyPushAllTaskResponseBodyPushTaskRsp,
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  itemId?: number;
  taskId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      itemId: 'ItemId',
      taskId: 'TaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      itemId: 'number',
      taskId: 'number',
      status: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  status?: string;
  taskId?: number;
  ids?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      status: 'Status',
      taskId: 'TaskId',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      status: 'string',
      taskId: 'number',
      ids: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  daysOfWeek?: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      daysOfWeek: 'DaysOfWeek',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      daysOfWeek: 'string',
      startTime: 'number',
      endTime: 'number',
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
  sourceIp?: string;
  cycleDays?: string;
  name?: string;
  cycleStartTime?: string;
  riskSubTypeName?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      cycleDays: 'CycleDays',
      name: 'Name',
      cycleStartTime: 'CycleStartTime',
      riskSubTypeName: 'RiskSubTypeName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      cycleDays: 'string',
      name: 'string',
      cycleStartTime: 'string',
      riskSubTypeName: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyStrategyResponseBody extends $tea.Model {
  httpStatusCode?: number;
  requestId?: string;
  totalCount?: number;
  success?: boolean;
  result?: ModifyStrategyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      requestId: 'string',
      totalCount: 'number',
      success: 'boolean',
      result: ModifyStrategyResponseBodyResult,
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
  sourceIp?: string;
  type?: string;
  config?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
      config: 'Config',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
      config: 'string',
      target: 'string',
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
  uuidList?: string;
  tagList?: string;
  tagId?: string;
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      uuidList: 'UuidList',
      tagList: 'TagList',
      tagId: 'TagId',
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuidList: 'string',
      tagList: 'string',
      tagId: 'string',
      machineTypes: 'string',
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

export class ModifyVpcHoneyPotRequest extends $tea.Model {
  vpcId?: string;
  honeyPotAction?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      honeyPotAction: 'HoneyPotAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      honeyPotAction: 'string',
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
  sourceIp?: string;
  type?: string;
  uuid?: string;
  config?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
      uuid: 'Uuid',
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
      uuid: 'string',
      config: 'string',
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
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  dir?: string;
  exclusiveDir?: string;
  exclusiveFileType?: string;
  localBackupDir?: string;
  mode?: string;
  inclusiveFileType?: string;
  exclusiveFile?: string;
  inclusiveFile?: string;
  defenceMode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFileType: 'ExclusiveFileType',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      inclusiveFileType: 'InclusiveFileType',
      exclusiveFile: 'ExclusiveFile',
      inclusiveFile: 'InclusiveFile',
      defenceMode: 'DefenceMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFileType: 'string',
      localBackupDir: 'string',
      mode: 'string',
      inclusiveFileType: 'string',
      exclusiveFile: 'string',
      inclusiveFile: 'string',
      defenceMode: 'string',
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
  sourceIp?: string;
  lang?: string;
  id?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      id: 'Id',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      id: 'number',
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
  mode?: string;
  localBackupDir?: string;
  exclusiveFile?: string;
  dir?: string;
  inclusiveFileType?: string;
  uuid?: string;
  exclusiveFileType?: string;
  exclusiveDir?: string;
  defenceMode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      localBackupDir: 'LocalBackupDir',
      exclusiveFile: 'ExclusiveFile',
      dir: 'Dir',
      inclusiveFileType: 'InclusiveFileType',
      uuid: 'Uuid',
      exclusiveFileType: 'ExclusiveFileType',
      exclusiveDir: 'ExclusiveDir',
      defenceMode: 'DefenceMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      localBackupDir: 'string',
      exclusiveFile: 'string',
      dir: 'string',
      inclusiveFileType: 'string',
      uuid: 'string',
      exclusiveFileType: 'string',
      exclusiveDir: 'string',
      defenceMode: 'string',
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
  sourceIp?: string;
  lang?: string;
  uuid?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      uuid: 'Uuid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      uuid: 'string',
      status: 'string',
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
  sourceIp?: string;
  lang?: string;
  id?: number;
  uuid?: string;
  dir?: string;
  exclusiveDir?: string;
  exclusiveFileType?: string;
  localBackupDir?: string;
  mode?: string;
  inclusiveFileType?: string;
  exclusiveFile?: string;
  inclusiveFile?: string;
  defenceMode?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      id: 'Id',
      uuid: 'Uuid',
      dir: 'Dir',
      exclusiveDir: 'ExclusiveDir',
      exclusiveFileType: 'ExclusiveFileType',
      localBackupDir: 'LocalBackupDir',
      mode: 'Mode',
      inclusiveFileType: 'InclusiveFileType',
      exclusiveFile: 'ExclusiveFile',
      inclusiveFile: 'InclusiveFile',
      defenceMode: 'DefenceMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      id: 'number',
      uuid: 'string',
      dir: 'string',
      exclusiveDir: 'string',
      exclusiveFileType: 'string',
      localBackupDir: 'string',
      mode: 'string',
      inclusiveFileType: 'string',
      exclusiveFile: 'string',
      inclusiveFile: 'string',
      defenceMode: 'string',
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

export class OperateSuspiciousTargetConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  type?: string;
  targetType?: string;
  targetOperations?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      type: 'Type',
      targetType: 'TargetType',
      targetOperations: 'TargetOperations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      type: 'string',
      targetType: 'string',
      targetOperations: 'string',
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
  type?: string;
  operateType?: string;
  reason?: string;
  precondition?: number;
  vulNames?: string[];
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      operateType: 'OperateType',
      reason: 'Reason',
      precondition: 'Precondition',
      vulNames: 'VulNames',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      operateType: 'string',
      reason: 'string',
      precondition: 'number',
      vulNames: { 'type': 'array', 'itemType': 'string' },
      uuids: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
  suspiciousEventIds?: string;
  operation?: string;
  subOperation?: string;
  from?: string;
  warnType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      suspiciousEventIds: 'SuspiciousEventIds',
      operation: 'Operation',
      subOperation: 'SubOperation',
      from: 'From',
      warnType: 'WarnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      suspiciousEventIds: 'string',
      operation: 'string',
      subOperation: 'string',
      from: 'string',
      warnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationSuspEventsResponseBody extends $tea.Model {
  requestId?: string;
  accessCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accessCode: 'AccessCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accessCode: 'string',
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
  sourceIp?: string;
  quaraFileId?: number;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      quaraFileId: 'QuaraFileId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      quaraFileId: 'number',
      from: 'string',
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
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  type?: string;
  itemIds?: number[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      type: 'Type',
      itemIds: 'ItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      type: 'string',
      itemIds: { 'type': 'array', 'itemType': 'number' },
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

export class StartImageVulScanRequest extends $tea.Model {
  lang?: string;
  repoRegionId?: string;
  repoInstanceId?: string;
  repoId?: string;
  repName?: string;
  repoNamespace?: string;
  imageTag?: string;
  imageDigest?: string;
  imageLayer?: string;
  registryTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      repoRegionId: 'RepoRegionId',
      repoInstanceId: 'RepoInstanceId',
      repoId: 'RepoId',
      repName: 'RepName',
      repoNamespace: 'RepoNamespace',
      imageTag: 'ImageTag',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      registryTypes: 'RegistryTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      repoRegionId: 'string',
      repoInstanceId: 'string',
      repoId: 'string',
      repName: 'string',
      repoNamespace: 'string',
      imageTag: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      registryTypes: { 'type': 'array', 'itemType': 'string' },
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
  scanTaskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      scanTaskId: 'ScanTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanTaskId: 'number',
      requestId: 'string',
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
  sourceIp?: string;
  resourceOwnerId?: number;
  uuid?: string;
  policyVersion?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      uuid: 'Uuid',
      policyVersion: 'PolicyVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      uuid: 'string',
      policyVersion: 'string',
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

export class ValidateHcWarningsRequest extends $tea.Model {
  sourceIp?: string;
  riskIds?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      riskIds: 'RiskIds',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      riskIds: 'string',
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
  dealTime?: string;
  status?: string;
  type?: string;
  userType?: string;
  accesskeyId?: string;
  aliUserName?: string;
  dealType?: string;
  url?: string;
  gmtModified?: number;
  asset?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      dealTime: 'DealTime',
      status: 'Status',
      type: 'Type',
      userType: 'UserType',
      accesskeyId: 'AccesskeyId',
      aliUserName: 'AliUserName',
      dealType: 'DealType',
      url: 'Url',
      gmtModified: 'GmtModified',
      asset: 'Asset',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealTime: 'string',
      status: 'string',
      type: 'string',
      userType: 'string',
      accesskeyId: 'string',
      aliUserName: 'string',
      dealType: 'string',
      url: 'string',
      gmtModified: 'number',
      asset: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse extends $tea.Model {
  status?: number;
  digest?: string;
  latestVerifyTimestamp?: number;
  repoInstanceId?: string;
  namespace?: string;
  tag?: string;
  repoRegionId?: string;
  imageUuid?: string;
  firstScanTimestamp?: number;
  maliciousMd5?: string;
  filePath?: string;
  repoId?: string;
  layer?: string;
  latestScanTimestamp?: number;
  repoName?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      digest: 'Digest',
      latestVerifyTimestamp: 'LatestVerifyTimestamp',
      repoInstanceId: 'RepoInstanceId',
      namespace: 'Namespace',
      tag: 'Tag',
      repoRegionId: 'RepoRegionId',
      imageUuid: 'ImageUuid',
      firstScanTimestamp: 'FirstScanTimestamp',
      maliciousMd5: 'MaliciousMd5',
      filePath: 'FilePath',
      repoId: 'RepoId',
      layer: 'Layer',
      latestScanTimestamp: 'LatestScanTimestamp',
      repoName: 'RepoName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      digest: 'string',
      latestVerifyTimestamp: 'number',
      repoInstanceId: 'string',
      namespace: 'string',
      tag: 'string',
      repoRegionId: 'string',
      imageUuid: 'string',
      firstScanTimestamp: 'number',
      maliciousMd5: 'string',
      filePath: 'string',
      repoId: 'string',
      layer: 'string',
      latestScanTimestamp: 'number',
      repoName: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventDetailResponseBodyDataCauseDetailsValue extends $tea.Model {
  type?: string;
  value?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      name: 'string',
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
  type?: string;
  internetIp?: string;
  k8sClusterName?: string;
  containerImageId?: string;
  alarmEventDesc?: string;
  alarmUniqueInfo?: string;
  canCancelFault?: boolean;
  appName?: string;
  canBeDealOnLine?: boolean;
  containerImageName?: string;
  k8sClusterId?: string;
  containHwMode?: boolean;
  instanceName?: string;
  k8sNodeId?: string;
  solution?: string;
  dataSource?: string;
  intranetIp?: string;
  alarmEventAliasName?: string;
  endTime?: number;
  uuid?: string;
  startTime?: number;
  containerId?: string;
  k8sPodName?: string;
  k8sNamespace?: string;
  k8sNodeName?: string;
  level?: string;
  causeDetails?: DescribeAlarmEventDetailResponseBodyDataCauseDetails[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      internetIp: 'InternetIp',
      k8sClusterName: 'K8sClusterName',
      containerImageId: 'ContainerImageId',
      alarmEventDesc: 'AlarmEventDesc',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      canCancelFault: 'CanCancelFault',
      appName: 'AppName',
      canBeDealOnLine: 'CanBeDealOnLine',
      containerImageName: 'ContainerImageName',
      k8sClusterId: 'K8sClusterId',
      containHwMode: 'ContainHwMode',
      instanceName: 'InstanceName',
      k8sNodeId: 'K8sNodeId',
      solution: 'Solution',
      dataSource: 'DataSource',
      intranetIp: 'IntranetIp',
      alarmEventAliasName: 'AlarmEventAliasName',
      endTime: 'EndTime',
      uuid: 'Uuid',
      startTime: 'StartTime',
      containerId: 'ContainerId',
      k8sPodName: 'K8sPodName',
      k8sNamespace: 'K8sNamespace',
      k8sNodeName: 'K8sNodeName',
      level: 'Level',
      causeDetails: 'CauseDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      internetIp: 'string',
      k8sClusterName: 'string',
      containerImageId: 'string',
      alarmEventDesc: 'string',
      alarmUniqueInfo: 'string',
      canCancelFault: 'boolean',
      appName: 'string',
      canBeDealOnLine: 'boolean',
      containerImageName: 'string',
      k8sClusterId: 'string',
      containHwMode: 'boolean',
      instanceName: 'string',
      k8sNodeId: 'string',
      solution: 'string',
      dataSource: 'string',
      intranetIp: 'string',
      alarmEventAliasName: 'string',
      endTime: 'number',
      uuid: 'string',
      startTime: 'number',
      containerId: 'string',
      k8sPodName: 'string',
      k8sNamespace: 'string',
      k8sNodeName: 'string',
      level: 'string',
      causeDetails: { 'type': 'array', 'itemType': DescribeAlarmEventDetailResponseBodyDataCauseDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventListResponseBodySuspEvents extends $tea.Model {
  dealed?: boolean;
  stages?: string;
  internetIp?: string;
  suspiciousEventCount?: number;
  k8sClusterName?: string;
  containerImageId?: string;
  gmtModified?: number;
  alarmEventNameOriginal?: string;
  alarmUniqueInfo?: string;
  canCancelFault?: boolean;
  appName?: string;
  securityEventIds?: string;
  k8sClusterId?: string;
  containerImageName?: string;
  canBeDealOnLine?: boolean;
  description?: string;
  containHwMode?: boolean;
  k8sNodeId?: string;
  instanceName?: string;
  saleVersion?: string;
  operateErrorCode?: string;
  solution?: string;
  hasTraceInfo?: boolean;
  dataSource?: string;
  operateTime?: number;
  instanceId?: string;
  intranetIp?: string;
  endTime?: number;
  uuid?: string;
  startTime?: number;
  k8sPodName?: string;
  containerId?: string;
  alarmEventType?: string;
  k8sNamespace?: string;
  k8sNodeName?: string;
  alarmEventName?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      dealed: 'Dealed',
      stages: 'Stages',
      internetIp: 'InternetIp',
      suspiciousEventCount: 'SuspiciousEventCount',
      k8sClusterName: 'K8sClusterName',
      containerImageId: 'ContainerImageId',
      gmtModified: 'GmtModified',
      alarmEventNameOriginal: 'AlarmEventNameOriginal',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      canCancelFault: 'CanCancelFault',
      appName: 'AppName',
      securityEventIds: 'SecurityEventIds',
      k8sClusterId: 'K8sClusterId',
      containerImageName: 'ContainerImageName',
      canBeDealOnLine: 'CanBeDealOnLine',
      description: 'Description',
      containHwMode: 'ContainHwMode',
      k8sNodeId: 'K8sNodeId',
      instanceName: 'InstanceName',
      saleVersion: 'SaleVersion',
      operateErrorCode: 'OperateErrorCode',
      solution: 'Solution',
      hasTraceInfo: 'HasTraceInfo',
      dataSource: 'DataSource',
      operateTime: 'OperateTime',
      instanceId: 'InstanceId',
      intranetIp: 'IntranetIp',
      endTime: 'EndTime',
      uuid: 'Uuid',
      startTime: 'StartTime',
      k8sPodName: 'K8sPodName',
      containerId: 'ContainerId',
      alarmEventType: 'AlarmEventType',
      k8sNamespace: 'K8sNamespace',
      k8sNodeName: 'K8sNodeName',
      alarmEventName: 'AlarmEventName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealed: 'boolean',
      stages: 'string',
      internetIp: 'string',
      suspiciousEventCount: 'number',
      k8sClusterName: 'string',
      containerImageId: 'string',
      gmtModified: 'number',
      alarmEventNameOriginal: 'string',
      alarmUniqueInfo: 'string',
      canCancelFault: 'boolean',
      appName: 'string',
      securityEventIds: 'string',
      k8sClusterId: 'string',
      containerImageName: 'string',
      canBeDealOnLine: 'boolean',
      description: 'string',
      containHwMode: 'boolean',
      k8sNodeId: 'string',
      instanceName: 'string',
      saleVersion: 'string',
      operateErrorCode: 'string',
      solution: 'string',
      hasTraceInfo: 'boolean',
      dataSource: 'string',
      operateTime: 'number',
      instanceId: 'string',
      intranetIp: 'string',
      endTime: 'number',
      uuid: 'string',
      startTime: 'number',
      k8sPodName: 'string',
      containerId: 'string',
      alarmEventType: 'string',
      k8sNamespace: 'string',
      k8sNodeName: 'string',
      alarmEventName: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEntityResponseBodyEntityList extends $tea.Model {
  uuid?: string;
  groupId?: number;
  internetIp?: string;
  instanceName?: string;
  ip?: string;
  os?: string;
  intranetIp?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      groupId: 'GroupId',
      internetIp: 'InternetIp',
      instanceName: 'InstanceName',
      ip: 'Ip',
      os: 'Os',
      intranetIp: 'IntranetIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      groupId: 'number',
      internetIp: 'string',
      instanceName: 'string',
      ip: 'string',
      os: 'string',
      intranetIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllGroupsResponseBodyGroups extends $tea.Model {
  groupName?: string;
  groupId?: number;
  groupFlag?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupId: 'GroupId',
      groupFlag: 'GroupFlag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupId: 'number',
      groupFlag: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllRegionsStatisticsResponseBodyData extends $tea.Model {
  account?: number;
  vul?: number;
  health?: number;
  trojan?: number;
  newSuspicious?: number;
  suspicious?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      vul: 'Vul',
      health: 'Health',
      trojan: 'Trojan',
      newSuspicious: 'NewSuspicious',
      suspicious: 'Suspicious',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      vul: 'number',
      health: 'number',
      trojan: 'number',
      newSuspicious: 'number',
      suspicious: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAntiBruteForceRulesResponseBodyRules extends $tea.Model {
  machineCount?: number;
  enableSmartRule?: boolean;
  failCount?: number;
  forbiddenTime?: number;
  span?: number;
  defaultRule?: boolean;
  name?: string;
  id?: number;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      machineCount: 'MachineCount',
      enableSmartRule: 'EnableSmartRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      span: 'Span',
      defaultRule: 'DefaultRule',
      name: 'Name',
      id: 'Id',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineCount: 'number',
      enableSmartRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      span: 'number',
      defaultRule: 'boolean',
      name: 'string',
      id: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidResponseBodyAssetDetail extends $tea.Model {
  cpuInfo?: string;
  internetIp?: string;
  osDetail?: string;
  createTime?: number;
  kernel?: string;
  bind?: boolean;
  osName?: string;
  tag?: string;
  clientStatus?: string;
  mem?: number;
  vpcInstanceId?: string;
  authVersion?: number;
  instanceName?: string;
  region?: string;
  groupTrace?: string;
  ip?: string;
  hostName?: string;
  os?: string;
  authModifyTime?: number;
  instanceId?: string;
  intranetIp?: string;
  assetType?: string;
  regionId?: string;
  sysInfo?: string;
  uuid?: string;
  cpu?: number;
  regionName?: string;
  ipList?: string[];
  macList?: string[];
  diskInfoList?: string[];
  static names(): { [key: string]: string } {
    return {
      cpuInfo: 'CpuInfo',
      internetIp: 'InternetIp',
      osDetail: 'OsDetail',
      createTime: 'CreateTime',
      kernel: 'Kernel',
      bind: 'Bind',
      osName: 'OsName',
      tag: 'Tag',
      clientStatus: 'ClientStatus',
      mem: 'Mem',
      vpcInstanceId: 'VpcInstanceId',
      authVersion: 'AuthVersion',
      instanceName: 'InstanceName',
      region: 'Region',
      groupTrace: 'GroupTrace',
      ip: 'Ip',
      hostName: 'HostName',
      os: 'Os',
      authModifyTime: 'AuthModifyTime',
      instanceId: 'InstanceId',
      intranetIp: 'IntranetIp',
      assetType: 'AssetType',
      regionId: 'RegionId',
      sysInfo: 'SysInfo',
      uuid: 'Uuid',
      cpu: 'Cpu',
      regionName: 'RegionName',
      ipList: 'IpList',
      macList: 'MacList',
      diskInfoList: 'DiskInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuInfo: 'string',
      internetIp: 'string',
      osDetail: 'string',
      createTime: 'number',
      kernel: 'string',
      bind: 'boolean',
      osName: 'string',
      tag: 'string',
      clientStatus: 'string',
      mem: 'number',
      vpcInstanceId: 'string',
      authVersion: 'number',
      instanceName: 'string',
      region: 'string',
      groupTrace: 'string',
      ip: 'string',
      hostName: 'string',
      os: 'string',
      authModifyTime: 'number',
      instanceId: 'string',
      intranetIp: 'string',
      assetType: 'string',
      regionId: 'string',
      sysInfo: 'string',
      uuid: 'string',
      cpu: 'number',
      regionName: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      macList: { 'type': 'array', 'itemType': 'string' },
      diskInfoList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetDetailByUuidsResponseBodyAssetList extends $tea.Model {
  internetIp?: string;
  osName?: string;
  ip?: string;
  os?: string;
  instanceId?: string;
  clientStatus?: string;
  vpcInstanceId?: string;
  intranetIp?: string;
  assetType?: string;
  regionId?: string;
  uuid?: string;
  flag?: number;
  regionName?: string;
  instanceName?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
      osName: 'OsName',
      ip: 'Ip',
      os: 'Os',
      instanceId: 'InstanceId',
      clientStatus: 'ClientStatus',
      vpcInstanceId: 'VpcInstanceId',
      intranetIp: 'IntranetIp',
      assetType: 'AssetType',
      regionId: 'RegionId',
      uuid: 'Uuid',
      flag: 'Flag',
      regionName: 'RegionName',
      instanceName: 'InstanceName',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
      osName: 'string',
      ip: 'string',
      os: 'string',
      instanceId: 'string',
      clientStatus: 'string',
      vpcInstanceId: 'string',
      intranetIp: 'string',
      assetType: 'string',
      regionId: 'string',
      uuid: 'string',
      flag: 'number',
      regionName: 'string',
      instanceName: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBodyClients extends $tea.Model {
  uuid?: string;
  instanceId?: string;
  clientStatus?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      instanceId: 'InstanceId',
      clientStatus: 'ClientStatus',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      instanceId: 'string',
      clientStatus: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDirsResponseBodyBackupDirs extends $tea.Model {
  source?: string;
  backupJobId?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      backupJobId: 'BackupJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      backupJobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyBackupFiles extends $tea.Model {
  type?: string;
  name?: string;
  subtree?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      subtree: 'Subtree',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      subtree: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList extends $tea.Model {
  key?: string;
  errorFile?: string;
  requestId?: string;
  errorFileUrl?: string;
  errorCode?: string;
  errorStatus?: string;
  path?: string;
  errorMsg?: string;
  errorType?: string;
  errorTime?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      errorFile: 'ErrorFile',
      requestId: 'RequestId',
      errorFileUrl: 'ErrorFileUrl',
      errorCode: 'ErrorCode',
      errorStatus: 'ErrorStatus',
      path: 'Path',
      errorMsg: 'ErrorMsg',
      errorType: 'ErrorType',
      errorTime: 'ErrorTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      errorFile: 'string',
      requestId: 'string',
      errorFileUrl: 'string',
      errorCode: 'string',
      errorStatus: 'string',
      path: 'string',
      errorMsg: 'string',
      errorType: 'string',
      errorTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupMachineStatusResponseBodyBackupMachineStatus extends $tea.Model {
  status?: string;
  vaultId?: string;
  jobs?: string;
  instanceId?: string;
  clientStatus?: string;
  clientId?: string;
  regionId?: string;
  uuid?: string;
  requestId?: string;
  errorCode?: string;
  savedBackupCount?: number;
  clientVersion?: string;
  errorList?: DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vaultId: 'VaultId',
      jobs: 'Jobs',
      instanceId: 'InstanceId',
      clientStatus: 'ClientStatus',
      clientId: 'ClientId',
      regionId: 'RegionId',
      uuid: 'Uuid',
      requestId: 'RequestId',
      errorCode: 'ErrorCode',
      savedBackupCount: 'SavedBackupCount',
      clientVersion: 'ClientVersion',
      errorList: 'ErrorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vaultId: 'string',
      jobs: 'string',
      instanceId: 'string',
      clientStatus: 'string',
      clientId: 'string',
      regionId: 'string',
      uuid: 'string',
      requestId: 'string',
      errorCode: 'string',
      savedBackupCount: 'number',
      clientVersion: 'string',
      errorList: { 'type': 'array', 'itemType': DescribeBackupMachineStatusResponseBodyBackupMachineStatusErrorList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPoliciesResponseBodyPolicies extends $tea.Model {
  clientErrorCount?: number;
  status?: string;
  policyVersion?: string;
  policy?: string;
  serviceErrorCount?: number;
  policyRegionId?: string;
  clientStatus?: string;
  name?: string;
  healthClientCount?: number;
  id?: number;
  clientErrorUuidList?: string[];
  remarkedUuidList?: string[];
  uuidList?: string[];
  serviceErrorUuidList?: string[];
  healthClientUuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientErrorCount: 'ClientErrorCount',
      status: 'Status',
      policyVersion: 'PolicyVersion',
      policy: 'Policy',
      serviceErrorCount: 'ServiceErrorCount',
      policyRegionId: 'PolicyRegionId',
      clientStatus: 'ClientStatus',
      name: 'Name',
      healthClientCount: 'HealthClientCount',
      id: 'Id',
      clientErrorUuidList: 'ClientErrorUuidList',
      remarkedUuidList: 'RemarkedUuidList',
      uuidList: 'UuidList',
      serviceErrorUuidList: 'ServiceErrorUuidList',
      healthClientUuidList: 'HealthClientUuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientErrorCount: 'number',
      status: 'string',
      policyVersion: 'string',
      policy: 'string',
      serviceErrorCount: 'number',
      policyRegionId: 'string',
      clientStatus: 'string',
      name: 'string',
      healthClientCount: 'number',
      id: 'number',
      clientErrorUuidList: { 'type': 'array', 'itemType': 'string' },
      remarkedUuidList: { 'type': 'array', 'itemType': 'string' },
      uuidList: { 'type': 'array', 'itemType': 'string' },
      serviceErrorUuidList: { 'type': 'array', 'itemType': 'string' },
      healthClientUuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyBackupPolicyDetail extends $tea.Model {
  status?: string;
  policyVersion?: string;
  policy?: string;
  clientStatus?: string;
  name?: string;
  id?: number;
  regionId?: string;
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      policyVersion: 'PolicyVersion',
      policy: 'Policy',
      clientStatus: 'ClientStatus',
      name: 'Name',
      id: 'Id',
      regionId: 'RegionId',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      policyVersion: 'string',
      policy: 'string',
      clientStatus: 'string',
      name: 'string',
      id: 'number',
      regionId: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRestoreCountResponseBodyBackupRestoreCount extends $tea.Model {
  total?: number;
  recovering?: number;
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      recovering: 'Recovering',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      recovering: 'number',
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

export class DescribeCheckWarningsResponseBodyCheckWarnings extends $tea.Model {
  status?: number;
  checkWarningId?: number;
  type?: string;
  uuid?: string;
  item?: string;
  checkId?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      checkWarningId: 'CheckWarningId',
      type: 'Type',
      uuid: 'Uuid',
      item: 'Item',
      checkId: 'CheckId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      checkWarningId: 'number',
      type: 'string',
      uuid: 'string',
      item: 'string',
      checkId: 'number',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryResponseBodyWarningSummarys extends $tea.Model {
  lowWarningCount?: number;
  checkCount?: number;
  mediumWarningCount?: number;
  lastFoundTime?: string;
  riskId?: number;
  subTypeAlias?: string;
  warningMachineCount?: number;
  highWarningCount?: number;
  typeAlias?: string;
  riskName?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      lowWarningCount: 'LowWarningCount',
      checkCount: 'CheckCount',
      mediumWarningCount: 'MediumWarningCount',
      lastFoundTime: 'LastFoundTime',
      riskId: 'RiskId',
      subTypeAlias: 'SubTypeAlias',
      warningMachineCount: 'WarningMachineCount',
      highWarningCount: 'HighWarningCount',
      typeAlias: 'TypeAlias',
      riskName: 'RiskName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lowWarningCount: 'number',
      checkCount: 'number',
      mediumWarningCount: 'number',
      lastFoundTime: 'string',
      riskId: 'number',
      subTypeAlias: 'string',
      warningMachineCount: 'number',
      highWarningCount: 'number',
      typeAlias: 'string',
      riskName: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudCenterInstancesResponseBodyInstances extends $tea.Model {
  status?: string;
  internetIp?: string;
  bind?: boolean;
  osName?: string;
  tag?: string;
  clientStatus?: string;
  vpcInstanceId?: string;
  flag?: number;
  authVersion?: number;
  region?: string;
  instanceName?: string;
  podCount?: number;
  vulCount?: number;
  hcStatus?: string;
  createdTime?: number;
  clusterId?: string;
  riskStatus?: string;
  cores?: number;
  vulStatus?: string;
  alarmStatus?: string;
  importance?: number;
  healthCheckCount?: number;
  ip?: string;
  os?: string;
  authModifyTime?: number;
  exposedCount?: number;
  safeEventCount?: number;
  instanceId?: string;
  assetType?: string;
  intranetIp?: string;
  vendor?: number;
  regionId?: string;
  uuid?: string;
  autoSnapshotsLevel?: number;
  groupId?: string;
  regionName?: string;
  vendorName?: string;
  clusterName?: string;
  exposedStatus?: number;
  riskCount?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      internetIp: 'InternetIp',
      bind: 'Bind',
      osName: 'OsName',
      tag: 'Tag',
      clientStatus: 'ClientStatus',
      vpcInstanceId: 'VpcInstanceId',
      flag: 'Flag',
      authVersion: 'AuthVersion',
      region: 'Region',
      instanceName: 'InstanceName',
      podCount: 'PodCount',
      vulCount: 'VulCount',
      hcStatus: 'HcStatus',
      createdTime: 'CreatedTime',
      clusterId: 'ClusterId',
      riskStatus: 'RiskStatus',
      cores: 'Cores',
      vulStatus: 'VulStatus',
      alarmStatus: 'AlarmStatus',
      importance: 'Importance',
      healthCheckCount: 'HealthCheckCount',
      ip: 'Ip',
      os: 'Os',
      authModifyTime: 'AuthModifyTime',
      exposedCount: 'ExposedCount',
      safeEventCount: 'SafeEventCount',
      instanceId: 'InstanceId',
      assetType: 'AssetType',
      intranetIp: 'IntranetIp',
      vendor: 'Vendor',
      regionId: 'RegionId',
      uuid: 'Uuid',
      autoSnapshotsLevel: 'AutoSnapshotsLevel',
      groupId: 'GroupId',
      regionName: 'RegionName',
      vendorName: 'VendorName',
      clusterName: 'ClusterName',
      exposedStatus: 'ExposedStatus',
      riskCount: 'RiskCount',
      clientVersion: 'ClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      internetIp: 'string',
      bind: 'boolean',
      osName: 'string',
      tag: 'string',
      clientStatus: 'string',
      vpcInstanceId: 'string',
      flag: 'number',
      authVersion: 'number',
      region: 'string',
      instanceName: 'string',
      podCount: 'number',
      vulCount: 'number',
      hcStatus: 'string',
      createdTime: 'number',
      clusterId: 'string',
      riskStatus: 'string',
      cores: 'number',
      vulStatus: 'string',
      alarmStatus: 'string',
      importance: 'number',
      healthCheckCount: 'number',
      ip: 'string',
      os: 'string',
      authModifyTime: 'number',
      exposedCount: 'number',
      safeEventCount: 'number',
      instanceId: 'string',
      assetType: 'string',
      intranetIp: 'string',
      vendor: 'number',
      regionId: 'string',
      uuid: 'string',
      autoSnapshotsLevel: 'number',
      groupId: 'string',
      regionName: 'string',
      vendorName: 'string',
      clusterName: 'string',
      exposedStatus: 'number',
      riskCount: 'string',
      clientVersion: 'string',
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
  totalNode?: number;
  remindAlarmCount?: number;
  totalAlarmCount?: number;
  suspiciousAlarmCount?: number;
  seriousAlarmCount?: number;
  hasRiskNode?: number;
  static names(): { [key: string]: string } {
    return {
      totalNode: 'TotalNode',
      remindAlarmCount: 'RemindAlarmCount',
      totalAlarmCount: 'TotalAlarmCount',
      suspiciousAlarmCount: 'SuspiciousAlarmCount',
      seriousAlarmCount: 'SeriousAlarmCount',
      hasRiskNode: 'hasRiskNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalNode: 'number',
      remindAlarmCount: 'number',
      totalAlarmCount: 'number',
      suspiciousAlarmCount: 'number',
      seriousAlarmCount: 'number',
      hasRiskNode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCriteriaResponseBodyCriteriaList extends $tea.Model {
  type?: string;
  name?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogMessagesResponseBodyDialogList extends $tea.Model {
  dialogKey?: string;
  params?: string;
  ID?: number;
  static names(): { [key: string]: string } {
    return {
      dialogKey: 'DialogKey',
      params: 'Params',
      ID: 'ID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogKey: 'string',
      params: 'string',
      ID: 'number',
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

export class DescribeDingTalkResponseBodyActionList extends $tea.Model {
  status?: number;
  configList?: string;
  gmtCreate?: number;
  actionName?: string;
  url?: string;
  aliUid?: number;
  dingTalkLang?: string;
  intervalTime?: number;
  gmtModified?: number;
  groupIdList?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configList: 'ConfigList',
      gmtCreate: 'GmtCreate',
      actionName: 'ActionName',
      url: 'Url',
      aliUid: 'AliUid',
      dingTalkLang: 'DingTalkLang',
      intervalTime: 'IntervalTime',
      gmtModified: 'GmtModified',
      groupIdList: 'GroupIdList',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      configList: 'string',
      gmtCreate: 'number',
      actionName: 'string',
      url: 'string',
      aliUid: 'number',
      dingTalkLang: 'string',
      intervalTime: 'number',
      gmtModified: 'number',
      groupIdList: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainDetailResponseBodyDomainDetailItems extends $tea.Model {
  uuid?: string;
  internetIp?: string;
  instanceName?: string;
  instanceId?: string;
  intranetIp?: string;
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      internetIp: 'InternetIp',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
      intranetIp: 'IntranetIp',
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      internetIp: 'string',
      instanceName: 'string',
      instanceId: 'string',
      intranetIp: 'string',
      assetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBodyDomainListResponseList extends $tea.Model {
  ipList?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulItemResponseBodyGroupedVulItems extends $tea.Model {
  status?: number;
  type?: string;
  gmtLastCheck?: number;
  progress?: number;
  gmtPublish?: number;
  pendingCount?: number;
  aliasName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      gmtLastCheck: 'GmtLastCheck',
      progress: 'Progress',
      gmtPublish: 'GmtPublish',
      pendingCount: 'PendingCount',
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'string',
      gmtLastCheck: 'number',
      progress: 'number',
      gmtPublish: 'number',
      pendingCount: 'number',
      aliasName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcludeSystemPathResponseBodyExcludePaths extends $tea.Model {
  path?: string;
  os?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      os: 'Os',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      os: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceCriteriaResponseBodyCriteriaList extends $tea.Model {
  type?: string;
  name?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList extends $tea.Model {
  type?: string;
  necessity?: string;
  uuid?: string;
  aliasName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      necessity: 'Necessity',
      uuid: 'Uuid',
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      necessity: 'string',
      uuid: 'string',
      aliasName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList extends $tea.Model {
  type?: string;
  necessity?: string;
  uuid?: string;
  aliasName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      necessity: 'Necessity',
      uuid: 'Uuid',
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      necessity: 'string',
      uuid: 'string',
      aliasName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChains extends $tea.Model {
  exposureIp?: string;
  groupNo?: string;
  internetIp?: string;
  instanceId?: string;
  exposureType?: string;
  intranetIp?: string;
  exposureTypeId?: string;
  regionId?: string;
  uuid?: string;
  exposurePort?: string;
  instanceName?: string;
  exposureComponent?: string;
  realVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList[];
  allVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList[];
  static names(): { [key: string]: string } {
    return {
      exposureIp: 'ExposureIp',
      groupNo: 'GroupNo',
      internetIp: 'InternetIp',
      instanceId: 'InstanceId',
      exposureType: 'ExposureType',
      intranetIp: 'IntranetIp',
      exposureTypeId: 'ExposureTypeId',
      regionId: 'RegionId',
      uuid: 'Uuid',
      exposurePort: 'ExposurePort',
      instanceName: 'InstanceName',
      exposureComponent: 'ExposureComponent',
      realVulList: 'RealVulList',
      allVulList: 'AllVulList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposureIp: 'string',
      groupNo: 'string',
      internetIp: 'string',
      instanceId: 'string',
      exposureType: 'string',
      intranetIp: 'string',
      exposureTypeId: 'string',
      regionId: 'string',
      uuid: 'string',
      exposurePort: 'string',
      instanceName: 'string',
      exposureComponent: 'string',
      realVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList },
      allVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceListResponseBodyExposedInstances extends $tea.Model {
  exposureIp?: string;
  totalVulCount?: number;
  internetIp?: string;
  nntfVulCount?: number;
  instanceId?: string;
  exposureType?: string;
  intranetIp?: string;
  regionId?: string;
  exposureTypeId?: string;
  asapVulCount?: number;
  exposurePort?: string;
  uuid?: string;
  groupName?: string;
  groupId?: number;
  exploitHealthCount?: number;
  instanceName?: string;
  exposureComponent?: string;
  laterVulCount?: number;
  static names(): { [key: string]: string } {
    return {
      exposureIp: 'ExposureIp',
      totalVulCount: 'TotalVulCount',
      internetIp: 'InternetIp',
      nntfVulCount: 'NntfVulCount',
      instanceId: 'InstanceId',
      exposureType: 'ExposureType',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      exposureTypeId: 'ExposureTypeId',
      asapVulCount: 'AsapVulCount',
      exposurePort: 'ExposurePort',
      uuid: 'Uuid',
      groupName: 'GroupName',
      groupId: 'GroupId',
      exploitHealthCount: 'ExploitHealthCount',
      instanceName: 'InstanceName',
      exposureComponent: 'ExposureComponent',
      laterVulCount: 'LaterVulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposureIp: 'string',
      totalVulCount: 'number',
      internetIp: 'string',
      nntfVulCount: 'number',
      instanceId: 'string',
      exposureType: 'string',
      intranetIp: 'string',
      regionId: 'string',
      exposureTypeId: 'string',
      asapVulCount: 'number',
      exposurePort: 'string',
      uuid: 'string',
      groupName: 'string',
      groupId: 'number',
      exploitHealthCount: 'number',
      instanceName: 'string',
      exposureComponent: 'string',
      laterVulCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedStatisticsDetailResponseBodyStatisticsDetails extends $tea.Model {
  exposureIp?: string;
  exposurePort?: string;
  exposureTypeInstanceName?: string;
  exposedCount?: number;
  exposureType?: string;
  regionId?: string;
  exposureComponent?: string;
  exposureTypeId?: string;
  static names(): { [key: string]: string } {
    return {
      exposureIp: 'ExposureIp',
      exposurePort: 'ExposurePort',
      exposureTypeInstanceName: 'ExposureTypeInstanceName',
      exposedCount: 'ExposedCount',
      exposureType: 'ExposureType',
      regionId: 'RegionId',
      exposureComponent: 'ExposureComponent',
      exposureTypeId: 'ExposureTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposureIp: 'string',
      exposurePort: 'string',
      exposureTypeInstanceName: 'string',
      exposedCount: 'number',
      exposureType: 'string',
      regionId: 'string',
      exposureComponent: 'string',
      exposureTypeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFieldStatisticsResponseBodyGroupedFields extends $tea.Model {
  offlineInstanceCount?: number;
  regionCount?: number;
  newInstanceCount?: number;
  exposedInstanceCount?: number;
  groupCount?: number;
  tencentInstanceCount?: number;
  generalAssetCount?: number;
  instanceSyncTaskCount?: number;
  unprotectedInstanceCount?: number;
  importantAssetCount?: number;
  testAssetCount?: number;
  vpcCount?: number;
  instanceCount?: number;
  idcInstanceCount?: number;
  notRunningStatusCount?: number;
  aliYunInstanceCount?: number;
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      offlineInstanceCount: 'OfflineInstanceCount',
      regionCount: 'RegionCount',
      newInstanceCount: 'NewInstanceCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      groupCount: 'GroupCount',
      tencentInstanceCount: 'TencentInstanceCount',
      generalAssetCount: 'GeneralAssetCount',
      instanceSyncTaskCount: 'InstanceSyncTaskCount',
      unprotectedInstanceCount: 'UnprotectedInstanceCount',
      importantAssetCount: 'ImportantAssetCount',
      testAssetCount: 'TestAssetCount',
      vpcCount: 'VpcCount',
      instanceCount: 'InstanceCount',
      idcInstanceCount: 'IdcInstanceCount',
      notRunningStatusCount: 'NotRunningStatusCount',
      aliYunInstanceCount: 'AliYunInstanceCount',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineInstanceCount: 'number',
      regionCount: 'number',
      newInstanceCount: 'number',
      exposedInstanceCount: 'number',
      groupCount: 'number',
      tencentInstanceCount: 'number',
      generalAssetCount: 'number',
      instanceSyncTaskCount: 'number',
      unprotectedInstanceCount: 'number',
      importantAssetCount: 'number',
      testAssetCount: 'number',
      vpcCount: 'number',
      instanceCount: 'number',
      idcInstanceCount: 'number',
      notRunningStatusCount: 'number',
      aliYunInstanceCount: 'number',
      riskInstanceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList extends $tea.Model {
  name?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      aliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchList extends $tea.Model {
  uuid?: string;
  patchList?: DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList[];
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      patchList: 'PatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      patchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList extends $tea.Model {
  type?: string;
  hasMore?: boolean;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      hasMore: 'HasMore',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      hasMore: 'boolean',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataVertexList extends $tea.Model {
  type?: string;
  uuid?: string;
  time?: string;
  aliuid?: string;
  position?: string;
  positionId?: string;
  name?: string;
  id?: string;
  properties?: string;
  neighborList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuid: 'Uuid',
      time: 'Time',
      aliuid: 'Aliuid',
      position: 'Position',
      positionId: 'PositionId',
      name: 'Name',
      id: 'Id',
      properties: 'Properties',
      neighborList: 'NeighborList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuid: 'string',
      time: 'string',
      aliuid: 'string',
      position: 'string',
      positionId: 'string',
      name: 'string',
      id: 'string',
      properties: 'string',
      neighborList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList extends $tea.Model {
  type?: string;
  time?: string;
  endId?: string;
  startType?: string;
  endType?: string;
  name?: string;
  startId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      time: 'Time',
      endId: 'EndId',
      startType: 'StartType',
      endType: 'EndType',
      name: 'Name',
      startId: 'StartId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      time: 'string',
      endId: 'string',
      startType: 'string',
      endType: 'string',
      name: 'string',
      startId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList extends $tea.Model {
  displayColor?: string;
  displayOrder?: string;
  name?: string;
  displayIcon?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayColor: 'DisplayColor',
      displayOrder: 'DisplayOrder',
      name: 'Name',
      displayIcon: 'DisplayIcon',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayColor: 'string',
      displayOrder: 'string',
      name: 'string',
      displayIcon: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList extends $tea.Model {
  showType?: string;
  name?: string;
  id?: string;
  directed?: number;
  static names(): { [key: string]: string } {
    return {
      showType: 'ShowType',
      name: 'Name',
      id: 'Id',
      directed: 'Directed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showType: 'string',
      name: 'string',
      id: 'string',
      directed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGraph4InvestigationOnlineResponseBodyData extends $tea.Model {
  vertexList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexList[];
  edgeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList[];
  entityTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList[];
  relationTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList[];
  static names(): { [key: string]: string } {
    return {
      vertexList: 'VertexList',
      edgeList: 'EdgeList',
      entityTypeList: 'EntityTypeList',
      relationTypeList: 'RelationTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vertexList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexList },
      edgeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList },
      entityTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList },
      relationTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList extends $tea.Model {
  riskLevel?: string;
  hostIp?: string;
  pod?: string;
  riskStatus?: string;
  createTime?: number;
  namespace?: string;
  custerState?: string;
  instanceId?: string;
  regionId?: string;
  appName?: string;
  instanceCount?: number;
  clusterType?: string;
  clusterName?: string;
  podIp?: string;
  vulCount?: number;
  alarmCount?: number;
  riskInstanceCount?: number;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      hostIp: 'HostIp',
      pod: 'Pod',
      riskStatus: 'RiskStatus',
      createTime: 'CreateTime',
      namespace: 'Namespace',
      custerState: 'CusterState',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      appName: 'AppName',
      instanceCount: 'InstanceCount',
      clusterType: 'ClusterType',
      clusterName: 'ClusterName',
      podIp: 'PodIp',
      vulCount: 'VulCount',
      alarmCount: 'AlarmCount',
      riskInstanceCount: 'RiskInstanceCount',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      hostIp: 'string',
      pod: 'string',
      riskStatus: 'string',
      createTime: 'number',
      namespace: 'string',
      custerState: 'string',
      instanceId: 'string',
      regionId: 'string',
      appName: 'string',
      instanceCount: 'number',
      clusterType: 'string',
      clusterName: 'string',
      podIp: 'string',
      vulCount: 'number',
      alarmCount: 'number',
      riskInstanceCount: 'number',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBodyInstances extends $tea.Model {
  asapVulInstanceCount?: number;
  unProtectedInstanceCount?: string;
  fieldAliasName?: string;
  instanceCount?: string;
  fieldId?: number;
  riskInstanceCount?: string;
  groupFlag?: number;
  groupPath?: string[];
  static names(): { [key: string]: string } {
    return {
      asapVulInstanceCount: 'AsapVulInstanceCount',
      unProtectedInstanceCount: 'UnProtectedInstanceCount',
      fieldAliasName: 'FieldAliasName',
      instanceCount: 'InstanceCount',
      fieldId: 'FieldId',
      riskInstanceCount: 'RiskInstanceCount',
      groupFlag: 'GroupFlag',
      groupPath: 'GroupPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapVulInstanceCount: 'number',
      unProtectedInstanceCount: 'string',
      fieldAliasName: 'string',
      instanceCount: 'string',
      fieldId: 'number',
      riskInstanceCount: 'string',
      groupFlag: 'number',
      groupPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse extends $tea.Model {
  status?: number;
  imageCount?: number;
  latestScanTimestamp?: number;
  maliciousName?: string;
  maliciousMd5?: string;
  firstScanTimestamp?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      imageCount: 'ImageCount',
      latestScanTimestamp: 'LatestScanTimestamp',
      maliciousName: 'MaliciousName',
      maliciousMd5: 'MaliciousMd5',
      firstScanTimestamp: 'FirstScanTimestamp',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      imageCount: 'number',
      latestScanTimestamp: 'number',
      maliciousName: 'string',
      maliciousMd5: 'string',
      firstScanTimestamp: 'number',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsResponseBodyGroupedFileds extends $tea.Model {
  name?: string;
  count?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      count: 'Count',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      count: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBodyGroupedVulItems extends $tea.Model {
  type?: string;
  nntfCount?: number;
  handledCount?: number;
  gmtLast?: number;
  tags?: string;
  laterCount?: number;
  aliasName?: string;
  name?: string;
  totalFixCount?: number;
  asapCount?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nntfCount: 'NntfCount',
      handledCount: 'HandledCount',
      gmtLast: 'GmtLast',
      tags: 'Tags',
      laterCount: 'LaterCount',
      aliasName: 'AliasName',
      name: 'Name',
      totalFixCount: 'TotalFixCount',
      asapCount: 'AsapCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      nntfCount: 'number',
      handledCount: 'number',
      gmtLast: 'number',
      tags: 'string',
      laterCount: 'number',
      aliasName: 'string',
      name: 'string',
      totalFixCount: 'number',
      asapCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse extends $tea.Model {
  type?: string;
  vpcId?: string;
  vpcName?: string;
  instanceName?: string;
  instanceId?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vpcName: 'string',
      instanceName: 'string',
      instanceId: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponseBodyGroupedVulItems extends $tea.Model {
  status?: number;
  type?: string;
  nntfCount?: number;
  gmtLast?: number;
  lastScanTime?: number;
  tags?: string;
  laterCount?: number;
  aliasName?: string;
  name?: string;
  asapCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      nntfCount: 'NntfCount',
      gmtLast: 'GmtLast',
      lastScanTime: 'LastScanTime',
      tags: 'Tags',
      laterCount: 'LaterCount',
      aliasName: 'AliasName',
      name: 'Name',
      asapCount: 'AsapCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'string',
      nntfCount: 'number',
      gmtLast: 'number',
      lastScanTime: 'number',
      tags: 'string',
      laterCount: 'number',
      aliasName: 'string',
      name: 'string',
      asapCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageScanAuthCountResponseBodyImageScan extends $tea.Model {
  scanCount?: number;
  imageScanCapacity?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      scanCount: 'ScanCount',
      imageScanCapacity: 'ImageScanCapacity',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanCount: 'number',
      imageScanCapacity: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  matchList?: string;
  layer?: string;
  fullVersion?: string;
  version?: string;
  matchDetail?: string;
  path?: string;
  name?: string;
  updateCmd?: string;
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
      layer: 'Layer',
      fullVersion: 'FullVersion',
      version: 'Version',
      matchDetail: 'MatchDetail',
      path: 'Path',
      name: 'Name',
      updateCmd: 'UpdateCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: 'string',
      layer: 'string',
      fullVersion: 'string',
      version: 'string',
      matchDetail: 'string',
      path: 'string',
      name: 'string',
      updateCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecordsExtendContentJson extends $tea.Model {
  osRelease?: string;
  os?: string;
  rpmEntityList?: DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  static names(): { [key: string]: string } {
    return {
      osRelease: 'OsRelease',
      os: 'Os',
      rpmEntityList: 'RpmEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osRelease: 'string',
      os: 'string',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecords extends $tea.Model {
  canUpdate?: boolean;
  type?: string;
  status?: number;
  modifyTs?: number;
  imageDigest?: string;
  primaryId?: number;
  tag?: string;
  related?: string;
  firstTs?: number;
  lastTs?: number;
  necessity?: string;
  uuid?: string;
  aliasName?: string;
  name?: string;
  layers?: string[];
  extendContentJson?: DescribeImageVulListResponseBodyVulRecordsExtendContentJson;
  static names(): { [key: string]: string } {
    return {
      canUpdate: 'CanUpdate',
      type: 'Type',
      status: 'Status',
      modifyTs: 'ModifyTs',
      imageDigest: 'ImageDigest',
      primaryId: 'PrimaryId',
      tag: 'Tag',
      related: 'Related',
      firstTs: 'FirstTs',
      lastTs: 'LastTs',
      necessity: 'Necessity',
      uuid: 'Uuid',
      aliasName: 'AliasName',
      name: 'Name',
      layers: 'Layers',
      extendContentJson: 'ExtendContentJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canUpdate: 'boolean',
      type: 'string',
      status: 'number',
      modifyTs: 'number',
      imageDigest: 'string',
      primaryId: 'number',
      tag: 'string',
      related: 'string',
      firstTs: 'number',
      lastTs: 'number',
      necessity: 'string',
      uuid: 'string',
      aliasName: 'string',
      name: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      extendContentJson: DescribeImageVulListResponseBodyVulRecordsExtendContentJson,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAntiBruteForceRulesResponseBodyRules extends $tea.Model {
  uuid?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceStatisticsResponseBodyData extends $tea.Model {
  account?: number;
  appNum?: number;
  scaNum?: number;
  trojan?: number;
  cveNum?: number;
  emgNum?: number;
  suspicious?: number;
  cmsNum?: number;
  uuid?: string;
  vul?: number;
  health?: number;
  sysNum?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appNum: 'AppNum',
      scaNum: 'ScaNum',
      trojan: 'Trojan',
      cveNum: 'CveNum',
      emgNum: 'EmgNum',
      suspicious: 'Suspicious',
      cmsNum: 'CmsNum',
      uuid: 'Uuid',
      vul: 'Vul',
      health: 'Health',
      sysNum: 'SysNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'number',
      appNum: 'number',
      scaNum: 'number',
      trojan: 'number',
      cveNum: 'number',
      emgNum: 'number',
      suspicious: 'number',
      cmsNum: 'number',
      uuid: 'string',
      vul: 'number',
      health: 'number',
      sysNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBodyModuleConfigListItems extends $tea.Model {
  uuid?: string;
  groupId?: number;
  instanceName?: string;
  region?: string;
  ip?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      region: 'Region',
      ip: 'Ip',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      groupId: 'number',
      instanceName: 'string',
      region: 'string',
      ip: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModuleConfigResponseBodyModuleConfigList extends $tea.Model {
  moduleName?: string;
  configName?: string;
  items?: DescribeModuleConfigResponseBodyModuleConfigListItems[];
  static names(): { [key: string]: string } {
    return {
      moduleName: 'ModuleName',
      configName: 'ConfigName',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleName: 'string',
      configName: 'string',
      items: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigListItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNoticeConfigResponseBodyNoticeConfigList extends $tea.Model {
  timeLimit?: number;
  aliUid?: number;
  currentPage?: number;
  project?: string;
  route?: number;
  static names(): { [key: string]: string } {
    return {
      timeLimit: 'TimeLimit',
      aliUid: 'AliUid',
      currentPage: 'CurrentPage',
      project: 'Project',
      route: 'Route',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeLimit: 'number',
      aliUid: 'number',
      currentPage: 'number',
      project: 'string',
      route: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBodyPropertys extends $tea.Model {
  create?: string;
  internetIp?: string;
  ip?: string;
  user?: string;
  instanceId?: string;
  source?: string;
  intranetIp?: string;
  cmd?: string;
  period?: string;
  uuid?: string;
  instanceName?: string;
  md5?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      internetIp: 'InternetIp',
      ip: 'Ip',
      user: 'User',
      instanceId: 'InstanceId',
      source: 'Source',
      intranetIp: 'IntranetIp',
      cmd: 'Cmd',
      period: 'Period',
      uuid: 'Uuid',
      instanceName: 'InstanceName',
      md5: 'Md5',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'string',
      internetIp: 'string',
      ip: 'string',
      user: 'string',
      instanceId: 'string',
      source: 'string',
      intranetIp: 'string',
      cmd: 'string',
      period: 'string',
      uuid: 'string',
      instanceName: 'string',
      md5: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortDetailResponseBodyPropertys extends $tea.Model {
  create?: string;
  internetIp?: string;
  bindIp?: string;
  ip?: string;
  procName?: string;
  instanceId?: string;
  port?: string;
  intranetIp?: string;
  uuid?: string;
  instanceName?: string;
  proto?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      internetIp: 'InternetIp',
      bindIp: 'BindIp',
      ip: 'Ip',
      procName: 'ProcName',
      instanceId: 'InstanceId',
      port: 'Port',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
      instanceName: 'InstanceName',
      proto: 'Proto',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'string',
      internetIp: 'string',
      bindIp: 'string',
      ip: 'string',
      procName: 'string',
      instanceId: 'string',
      port: 'string',
      intranetIp: 'string',
      uuid: 'string',
      instanceName: 'string',
      proto: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyPortItemResponseBodyPropertyItems extends $tea.Model {
  port?: string;
  count?: number;
  proto?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      count: 'Count',
      proto: 'Proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      count: 'number',
      proto: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBodyPropertys extends $tea.Model {
  create?: string;
  internetIp?: string;
  pid?: string;
  user?: string;
  instanceId?: string;
  cmdline?: string;
  intranetIp?: string;
  euidName?: string;
  uuid?: string;
  startTime?: string;
  pname?: string;
  instanceName?: string;
  path?: string;
  md5?: string;
  name?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      internetIp: 'InternetIp',
      pid: 'Pid',
      user: 'User',
      instanceId: 'InstanceId',
      cmdline: 'Cmdline',
      intranetIp: 'IntranetIp',
      euidName: 'EuidName',
      uuid: 'Uuid',
      startTime: 'StartTime',
      pname: 'Pname',
      instanceName: 'InstanceName',
      path: 'Path',
      md5: 'Md5',
      name: 'Name',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'string',
      internetIp: 'string',
      pid: 'string',
      user: 'string',
      instanceId: 'string',
      cmdline: 'string',
      intranetIp: 'string',
      euidName: 'string',
      uuid: 'string',
      startTime: 'string',
      pname: 'string',
      instanceName: 'string',
      path: 'string',
      md5: 'string',
      name: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcItemResponseBodyPropertyItems extends $tea.Model {
  name?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailResponseBodyPropertys extends $tea.Model {
  type?: string;
  bizTypeDispaly?: string;
  processStarted?: number;
  internetIp?: string;
  configPath?: string;
  pid?: string;
  port?: string;
  cmdline?: string;
  bizType?: string;
  listenIp?: string;
  version?: string;
  instanceName?: string;
  listenStatus?: string;
  name?: string;
  create?: string;
  ip?: string;
  processUser?: string;
  instanceId?: string;
  webPath?: string;
  ppid?: string;
  intranetIp?: string;
  uuid?: string;
  listenProtocol?: string;
  imageName?: string;
  path?: string;
  containerName?: string;
  proof?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      bizTypeDispaly: 'BizTypeDispaly',
      processStarted: 'ProcessStarted',
      internetIp: 'InternetIp',
      configPath: 'ConfigPath',
      pid: 'Pid',
      port: 'Port',
      cmdline: 'Cmdline',
      bizType: 'BizType',
      listenIp: 'ListenIp',
      version: 'Version',
      instanceName: 'InstanceName',
      listenStatus: 'ListenStatus',
      name: 'Name',
      create: 'Create',
      ip: 'Ip',
      processUser: 'ProcessUser',
      instanceId: 'InstanceId',
      webPath: 'WebPath',
      ppid: 'Ppid',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
      listenProtocol: 'ListenProtocol',
      imageName: 'ImageName',
      path: 'Path',
      containerName: 'ContainerName',
      proof: 'Proof',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      bizTypeDispaly: 'string',
      processStarted: 'number',
      internetIp: 'string',
      configPath: 'string',
      pid: 'string',
      port: 'string',
      cmdline: 'string',
      bizType: 'string',
      listenIp: 'string',
      version: 'string',
      instanceName: 'string',
      listenStatus: 'string',
      name: 'string',
      create: 'string',
      ip: 'string',
      processUser: 'string',
      instanceId: 'string',
      webPath: 'string',
      ppid: 'string',
      intranetIp: 'string',
      uuid: 'string',
      listenProtocol: 'string',
      imageName: 'string',
      path: 'string',
      containerName: 'string',
      proof: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBodyPropertys extends $tea.Model {
  create?: number;
  internetIp?: string;
  ip?: string;
  instanceId?: string;
  intranetIp?: string;
  installTime?: string;
  uuid?: string;
  version?: string;
  instanceName?: string;
  path?: string;
  name?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      internetIp: 'InternetIp',
      ip: 'Ip',
      instanceId: 'InstanceId',
      intranetIp: 'IntranetIp',
      installTime: 'InstallTime',
      uuid: 'Uuid',
      version: 'Version',
      instanceName: 'InstanceName',
      path: 'Path',
      name: 'Name',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'number',
      internetIp: 'string',
      ip: 'string',
      instanceId: 'string',
      intranetIp: 'string',
      installTime: 'string',
      uuid: 'string',
      version: 'string',
      instanceName: 'string',
      path: 'string',
      name: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareItemResponseBodyPropertyItems extends $tea.Model {
  name?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageNewestResponseBodyNewestStatisticItems extends $tea.Model {
  name?: string;
  create?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      create: 'Create',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      create: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserDetailResponseBodyPropertys extends $tea.Model {
  status?: string;
  create?: string;
  lastLoginIp?: string;
  internetIp?: string;
  lastLoginTime?: string;
  isRoot?: string;
  ip?: string;
  user?: string;
  instanceId?: string;
  intranetIp?: string;
  passwordExpirationDate?: string;
  uuid?: string;
  lastLoginTimestamp?: number;
  instanceName?: string;
  accountsExpirationDate?: string;
  createTimestamp?: number;
  groupNames?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      create: 'Create',
      lastLoginIp: 'LastLoginIp',
      internetIp: 'InternetIp',
      lastLoginTime: 'LastLoginTime',
      isRoot: 'IsRoot',
      ip: 'Ip',
      user: 'User',
      instanceId: 'InstanceId',
      intranetIp: 'IntranetIp',
      passwordExpirationDate: 'PasswordExpirationDate',
      uuid: 'Uuid',
      lastLoginTimestamp: 'LastLoginTimestamp',
      instanceName: 'InstanceName',
      accountsExpirationDate: 'AccountsExpirationDate',
      createTimestamp: 'CreateTimestamp',
      groupNames: 'GroupNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      create: 'string',
      lastLoginIp: 'string',
      internetIp: 'string',
      lastLoginTime: 'string',
      isRoot: 'string',
      ip: 'string',
      user: 'string',
      instanceId: 'string',
      intranetIp: 'string',
      passwordExpirationDate: 'string',
      uuid: 'string',
      lastLoginTimestamp: 'number',
      instanceName: 'string',
      accountsExpirationDate: 'string',
      createTimestamp: 'number',
      groupNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUserItemResponseBodyPropertyItems extends $tea.Model {
  user?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      user: 'User',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBodyRestoreJobs extends $tea.Model {
  id?: number;
  createdTime?: number;
  updatedTime?: number;
  uuid?: string;
  message?: string;
  restoreId?: string;
  clientId?: string;
  vaultId?: string;
  snapshotId?: string;
  snapshotHash?: string;
  source?: string;
  target?: string;
  status?: string;
  restoreType?: string;
  speed?: number;
  completeTime?: number;
  eta?: number;
  errorCount?: number;
  bytesDone?: number;
  bytesTotal?: number;
  itemsDone?: number;
  itemsTotal?: number;
  actualBytes?: number;
  percentage?: number;
  errorType?: string;
  sourceClientId?: string;
  snapshotVersion?: string;
  instanceName?: string;
  internetIp?: string;
  intranetIp?: string;
  errorFile?: string;
  errorFileUrl?: string;
  requestId?: string;
  restoreName?: string;
  instanceId?: string;
  extra?: string;
  duration?: number;
  exitCode?: string;
  gmtCreate?: string;
  gmtModified?: number;
  excludes?: string;
  includes?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      createdTime: 'CreatedTime',
      updatedTime: 'UpdatedTime',
      uuid: 'Uuid',
      message: 'Message',
      restoreId: 'RestoreId',
      clientId: 'ClientId',
      vaultId: 'VaultId',
      snapshotId: 'SnapshotId',
      snapshotHash: 'SnapshotHash',
      source: 'Source',
      target: 'Target',
      status: 'Status',
      restoreType: 'RestoreType',
      speed: 'Speed',
      completeTime: 'CompleteTime',
      eta: 'Eta',
      errorCount: 'ErrorCount',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      itemsDone: 'ItemsDone',
      itemsTotal: 'ItemsTotal',
      actualBytes: 'ActualBytes',
      percentage: 'Percentage',
      errorType: 'ErrorType',
      sourceClientId: 'SourceClientId',
      snapshotVersion: 'SnapshotVersion',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      errorFile: 'ErrorFile',
      errorFileUrl: 'ErrorFileUrl',
      requestId: 'RequestId',
      restoreName: 'RestoreName',
      instanceId: 'InstanceId',
      extra: 'Extra',
      duration: 'Duration',
      exitCode: 'ExitCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      excludes: 'Excludes',
      includes: 'Includes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      createdTime: 'number',
      updatedTime: 'number',
      uuid: 'string',
      message: 'string',
      restoreId: 'string',
      clientId: 'string',
      vaultId: 'string',
      snapshotId: 'string',
      snapshotHash: 'string',
      source: 'string',
      target: 'string',
      status: 'string',
      restoreType: 'string',
      speed: 'number',
      completeTime: 'number',
      eta: 'number',
      errorCount: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      itemsDone: 'number',
      itemsTotal: 'number',
      actualBytes: 'number',
      percentage: 'number',
      errorType: 'string',
      sourceClientId: 'string',
      snapshotVersion: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      errorFile: 'string',
      errorFileUrl: 'string',
      requestId: 'string',
      restoreName: 'string',
      instanceId: 'string',
      extra: 'string',
      duration: 'number',
      exitCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'number',
      excludes: 'string',
      includes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreJobsResponseBodyPageInfo extends $tea.Model {
  count?: number;
  pageSize?: number;
  totalCount?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageSize: 'number',
      totalCount: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckItemResultResponseBodyPageContentResource extends $tea.Model {
  currentPage?: number;
  contentResource?: string;
  pageSize?: number;
  totalCount?: number;
  pageCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      contentResource: 'ContentResource',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageCount: 'PageCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      contentResource: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBodyListRiskItemResources extends $tea.Model {
  contentResource?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentResource: 'ContentResource',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentResource: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBodyList extends $tea.Model {
  riskLevel?: string;
  status?: string;
  type?: string;
  sort?: number;
  repairStatus?: string;
  remainingTime?: number;
  itemId?: number;
  startStatus?: string;
  affectedCount?: number;
  riskAssertType?: string;
  title?: string;
  taskId?: number;
  checkTime?: number;
  riskItemResources?: DescribeRiskCheckResultResponseBodyListRiskItemResources[];
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      status: 'Status',
      type: 'Type',
      sort: 'Sort',
      repairStatus: 'RepairStatus',
      remainingTime: 'RemainingTime',
      itemId: 'ItemId',
      startStatus: 'StartStatus',
      affectedCount: 'AffectedCount',
      riskAssertType: 'RiskAssertType',
      title: 'Title',
      taskId: 'TaskId',
      checkTime: 'CheckTime',
      riskItemResources: 'RiskItemResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      status: 'string',
      type: 'string',
      sort: 'number',
      repairStatus: 'string',
      remainingTime: 'number',
      itemId: 'number',
      startStatus: 'string',
      affectedCount: 'number',
      riskAssertType: 'string',
      title: 'string',
      taskId: 'number',
      checkTime: 'number',
      riskItemResources: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyListRiskItemResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount extends $tea.Model {
  key?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus extends $tea.Model {
  status?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups extends $tea.Model {
  remainingTime?: number;
  status?: string;
  sort?: number;
  title?: string;
  id?: number;
  countByStatus?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus[];
  static names(): { [key: string]: string } {
    return {
      remainingTime: 'RemainingTime',
      status: 'Status',
      sort: 'Sort',
      title: 'Title',
      id: 'Id',
      countByStatus: 'CountByStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainingTime: 'number',
      status: 'string',
      sort: 'number',
      title: 'string',
      id: 'number',
      countByStatus: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummary extends $tea.Model {
  itemCount?: number;
  affectedAssetCount?: number;
  disabledRiskCount?: number;
  riskCount?: number;
  riskRate?: number;
  previousCount?: number;
  previousTime?: number;
  enabledRiskCount?: number;
  riskLevelCount?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount[];
  groups?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups[];
  static names(): { [key: string]: string } {
    return {
      itemCount: 'ItemCount',
      affectedAssetCount: 'AffectedAssetCount',
      disabledRiskCount: 'DisabledRiskCount',
      riskCount: 'RiskCount',
      riskRate: 'RiskRate',
      previousCount: 'PreviousCount',
      previousTime: 'PreviousTime',
      enabledRiskCount: 'EnabledRiskCount',
      riskLevelCount: 'RiskLevelCount',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCount: 'number',
      affectedAssetCount: 'number',
      disabledRiskCount: 'number',
      riskCount: 'number',
      riskRate: 'number',
      previousCount: 'number',
      previousTime: 'number',
      enabledRiskCount: 'number',
      riskLevelCount: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount },
      groups: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups },
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
  riskCount?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      riskCount: 'riskCount',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskCount: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchConditionResponseBodyConditionList extends $tea.Model {
  conditionType?: string;
  nameKey?: string;
  name?: string;
  filterConditions?: string;
  static names(): { [key: string]: string } {
    return {
      conditionType: 'ConditionType',
      nameKey: 'NameKey',
      name: 'Name',
      filterConditions: 'FilterConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionType: 'string',
      nameKey: 'string',
      name: 'string',
      filterConditions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBodySuggestionsDetail extends $tea.Model {
  title?: string;
  description?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      description: 'Description',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      description: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBodySuggestions extends $tea.Model {
  points?: number;
  suggestType?: string;
  detail?: DescribeSecureSuggestionResponseBodySuggestionsDetail[];
  static names(): { [key: string]: string } {
    return {
      points: 'Points',
      suggestType: 'SuggestType',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: 'number',
      suggestType: 'string',
      detail: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestionsDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig extends $tea.Model {
  endTime?: number;
  startTime?: number;
  daysOfWeek?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      daysOfWeek: 'DaysOfWeek',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      daysOfWeek: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField extends $tea.Model {
  markMisType?: string;
  filedName?: string;
  filedAliasName?: string;
  markMisValue?: string;
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      markMisType: 'MarkMisType',
      filedName: 'FiledName',
      filedAliasName: 'FiledAliasName',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markMisType: 'string',
      filedName: 'string',
      filedAliasName: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource extends $tea.Model {
  filedName?: string;
  filedAliasName?: string;
  markMisValue?: string;
  supportedMisType?: string[];
  static names(): { [key: string]: string } {
    return {
      filedName: 'FiledName',
      filedAliasName: 'FiledAliasName',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filedName: 'string',
      filedAliasName: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse extends $tea.Model {
  operationParams?: string;
  operationCode?: string;
  userCanOperate?: boolean;
  markField?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  markFieldsSource?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  static names(): { [key: string]: string } {
    return {
      operationParams: 'OperationParams',
      operationCode: 'OperationCode',
      userCanOperate: 'UserCanOperate',
      markField: 'MarkField',
      markFieldsSource: 'MarkFieldsSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationParams: 'string',
      operationCode: 'string',
      userCanOperate: 'boolean',
      markField: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField },
      markFieldsSource: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses extends $tea.Model {
  status?: string;
  securityEventId?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      securityEventId: 'SecurityEventId',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      securityEventId: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse extends $tea.Model {
  taskStatus?: string;
  securityEventOperationStatuses?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses[];
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      securityEventOperationStatuses: 'SecurityEventOperationStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'string',
      securityEventOperationStatuses: { 'type': 'array', 'itemType': DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponseSecurityEventOperationStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodySecurityEvent extends $tea.Model {
  suspiciousCount?: number;
  seriousCount?: number;
  remindCount?: number;
  totalCount?: number;
  valueArray?: string[];
  timeArray?: string[];
  remindList?: string[];
  levelsOn?: string[];
  dateArray?: string[];
  suspiciousList?: string[];
  seriousList?: string[];
  static names(): { [key: string]: string } {
    return {
      suspiciousCount: 'SuspiciousCount',
      seriousCount: 'SeriousCount',
      remindCount: 'RemindCount',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
      timeArray: 'TimeArray',
      remindList: 'RemindList',
      levelsOn: 'LevelsOn',
      dateArray: 'DateArray',
      suspiciousList: 'SuspiciousList',
      seriousList: 'SeriousList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspiciousCount: 'number',
      seriousCount: 'number',
      remindCount: 'number',
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      remindList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      dateArray: { 'type': 'array', 'itemType': 'string' },
      suspiciousList: { 'type': 'array', 'itemType': 'string' },
      seriousList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyAttackEvent extends $tea.Model {
  totalCount?: number;
  dateArray?: string[];
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      dateArray: 'DateArray',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      dateArray: { 'type': 'array', 'itemType': 'string' },
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyHealthCheck extends $tea.Model {
  highCount?: number;
  lowCount?: number;
  totalCount?: number;
  mediumCount?: number;
  valueArray?: string[];
  timeArray?: string[];
  levelsOn?: string[];
  lowList?: string[];
  mediumList?: string[];
  dateArray?: string[];
  highList?: string[];
  static names(): { [key: string]: string } {
    return {
      highCount: 'HighCount',
      lowCount: 'LowCount',
      totalCount: 'TotalCount',
      mediumCount: 'MediumCount',
      valueArray: 'ValueArray',
      timeArray: 'TimeArray',
      levelsOn: 'LevelsOn',
      lowList: 'LowList',
      mediumList: 'MediumList',
      dateArray: 'DateArray',
      highList: 'HighList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highCount: 'number',
      lowCount: 'number',
      totalCount: 'number',
      mediumCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      lowList: { 'type': 'array', 'itemType': 'string' },
      mediumList: { 'type': 'array', 'itemType': 'string' },
      dateArray: { 'type': 'array', 'itemType': 'string' },
      highList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyVulnerability extends $tea.Model {
  nntfCount?: number;
  laterCount?: number;
  totalCount?: number;
  asapCount?: number;
  nntfList?: string[];
  asapList?: string[];
  valueArray?: string[];
  timeArray?: string[];
  levelsOn?: string[];
  laterList?: string[];
  dateArray?: string[];
  static names(): { [key: string]: string } {
    return {
      nntfCount: 'NntfCount',
      laterCount: 'LaterCount',
      totalCount: 'TotalCount',
      asapCount: 'AsapCount',
      nntfList: 'NntfList',
      asapList: 'AsapList',
      valueArray: 'ValueArray',
      timeArray: 'TimeArray',
      levelsOn: 'LevelsOn',
      laterList: 'LaterList',
      dateArray: 'DateArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nntfCount: 'number',
      laterCount: 'number',
      totalCount: 'number',
      asapCount: 'number',
      nntfList: { 'type': 'array', 'itemType': 'string' },
      asapList: { 'type': 'array', 'itemType': 'string' },
      valueArray: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      laterList: { 'type': 'array', 'itemType': 'string' },
      dateArray: { 'type': 'array', 'itemType': 'string' },
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
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSimilarSecurityEventsResponseBodySecurityEventsResponse extends $tea.Model {
  lastTime?: number;
  uuid?: string;
  eventName?: string;
  eventType?: string;
  securityEventId?: number;
  occurrenceTime?: number;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      uuid: 'Uuid',
      eventName: 'EventName',
      eventType: 'EventType',
      securityEventId: 'SecurityEventId',
      occurrenceTime: 'OccurrenceTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      uuid: 'string',
      eventName: 'string',
      eventType: 'string',
      securityEventId: 'number',
      occurrenceTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  nextToken?: string;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  containerSnapshotId?: string;
  status?: string;
  snapshotHash?: string;
  errorMessage?: string;
  actualItems?: number;
  vaultId?: string;
  createTime?: number;
  backupType?: string;
  actualBytes?: number;
  prefix?: string;
  sourceType?: string;
  extra?: string;
  serverId?: string;
  exitCode?: string;
  clientId?: string;
  itemsDone?: number;
  bytesTotal?: number;
  completeTime?: number;
  retention?: number;
  errorType?: string;
  createdTime?: number;
  bucket?: string;
  parentSnapshotHash?: string;
  machineInfoJson?: string;
  instanceId?: string;
  planId?: string;
  source?: string;
  regionId?: string;
  fileSystemId?: string;
  parentHash?: string;
  startTime?: number;
  uuid?: string;
  errorFile?: string;
  snapshotType?: string;
  snapshotName?: string;
  snapshotOption?: string;
  updatedTime?: number;
  snapshotId?: string;
  jobId?: string;
  size?: number;
  path?: string;
  errorCount?: number;
  duration?: number;
  itemsTotal?: number;
  bytesDone?: number;
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      containerSnapshotId: 'ContainerSnapshotId',
      status: 'Status',
      snapshotHash: 'SnapshotHash',
      errorMessage: 'ErrorMessage',
      actualItems: 'ActualItems',
      vaultId: 'VaultId',
      createTime: 'CreateTime',
      backupType: 'BackupType',
      actualBytes: 'ActualBytes',
      prefix: 'Prefix',
      sourceType: 'SourceType',
      extra: 'Extra',
      serverId: 'ServerId',
      exitCode: 'ExitCode',
      clientId: 'ClientId',
      itemsDone: 'ItemsDone',
      bytesTotal: 'BytesTotal',
      completeTime: 'CompleteTime',
      retention: 'Retention',
      errorType: 'ErrorType',
      createdTime: 'CreatedTime',
      bucket: 'Bucket',
      parentSnapshotHash: 'ParentSnapshotHash',
      machineInfoJson: 'MachineInfoJson',
      instanceId: 'InstanceId',
      planId: 'PlanId',
      source: 'Source',
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      parentHash: 'ParentHash',
      startTime: 'StartTime',
      uuid: 'Uuid',
      errorFile: 'ErrorFile',
      snapshotType: 'SnapshotType',
      snapshotName: 'SnapshotName',
      snapshotOption: 'SnapshotOption',
      updatedTime: 'UpdatedTime',
      snapshotId: 'SnapshotId',
      jobId: 'JobId',
      size: 'Size',
      path: 'Path',
      errorCount: 'ErrorCount',
      duration: 'Duration',
      itemsTotal: 'ItemsTotal',
      bytesDone: 'BytesDone',
      paths: 'Paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerSnapshotId: 'string',
      status: 'string',
      snapshotHash: 'string',
      errorMessage: 'string',
      actualItems: 'number',
      vaultId: 'string',
      createTime: 'number',
      backupType: 'string',
      actualBytes: 'number',
      prefix: 'string',
      sourceType: 'string',
      extra: 'string',
      serverId: 'string',
      exitCode: 'string',
      clientId: 'string',
      itemsDone: 'number',
      bytesTotal: 'number',
      completeTime: 'number',
      retention: 'number',
      errorType: 'string',
      createdTime: 'number',
      bucket: 'string',
      parentSnapshotHash: 'string',
      machineInfoJson: 'string',
      instanceId: 'string',
      planId: 'string',
      source: 'string',
      regionId: 'string',
      fileSystemId: 'string',
      parentHash: 'string',
      startTime: 'number',
      uuid: 'string',
      errorFile: 'string',
      snapshotType: 'string',
      snapshotName: 'string',
      snapshotOption: 'string',
      updatedTime: 'number',
      snapshotId: 'string',
      jobId: 'string',
      size: 'number',
      path: 'string',
      errorCount: 'number',
      duration: 'number',
      itemsTotal: 'number',
      bytesDone: 'number',
      paths: { 'type': 'array', 'itemType': 'string' },
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
  execStatus?: number;
  type?: number;
  cycleStartTime?: number;
  ecsCount?: number;
  processRate?: number;
  cycleDays?: number;
  riskCount?: number;
  name?: string;
  passRate?: number;
  id?: number;
  configTargets?: DescribeStrategyResponseBodyStrategiesConfigTargets[];
  static names(): { [key: string]: string } {
    return {
      execStatus: 'ExecStatus',
      type: 'Type',
      cycleStartTime: 'CycleStartTime',
      ecsCount: 'EcsCount',
      processRate: 'ProcessRate',
      cycleDays: 'CycleDays',
      riskCount: 'RiskCount',
      name: 'Name',
      passRate: 'PassRate',
      id: 'Id',
      configTargets: 'ConfigTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execStatus: 'number',
      type: 'number',
      cycleStartTime: 'number',
      ecsCount: 'number',
      processRate: 'number',
      cycleDays: 'number',
      riskCount: 'number',
      name: 'string',
      passRate: 'number',
      id: 'number',
      configTargets: { 'type': 'array', 'itemType': DescribeStrategyResponseBodyStrategiesConfigTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBodyFailedEcsList extends $tea.Model {
  IP?: string;
  intranetIp?: string;
  reason?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      intranetIp: 'IntranetIp',
      reason: 'Reason',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      intranetIp: 'string',
      reason: 'string',
      instanceName: 'string',
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
  type?: string;
  value?: string;
  infoType?: string;
  nameDisplay?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      infoType: 'InfoType',
      nameDisplay: 'NameDisplay',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      infoType: 'string',
      nameDisplay: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBodyQuaraFiles extends $tea.Model {
  link?: string;
  status?: string;
  eventName?: string;
  internetIp?: string;
  ip?: string;
  tag?: string;
  instanceId?: string;
  uuid?: string;
  eventType?: string;
  instanceName?: string;
  path?: string;
  md5?: string;
  id?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'Link',
      status: 'Status',
      eventName: 'EventName',
      internetIp: 'InternetIp',
      ip: 'Ip',
      tag: 'Tag',
      instanceId: 'InstanceId',
      uuid: 'Uuid',
      eventType: 'EventType',
      instanceName: 'InstanceName',
      path: 'Path',
      md5: 'Md5',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      status: 'string',
      eventName: 'string',
      internetIp: 'string',
      ip: 'string',
      tag: 'string',
      instanceId: 'string',
      uuid: 'string',
      eventType: 'string',
      instanceName: 'string',
      path: 'string',
      md5: 'string',
      id: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEventsDetails extends $tea.Model {
  type?: string;
  value?: string;
  name?: string;
  nameDisplay?: string;
  infoType?: string;
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      name: 'Name',
      nameDisplay: 'NameDisplay',
      infoType: 'InfoType',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      name: 'string',
      nameDisplay: 'string',
      infoType: 'string',
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
  stages?: string;
  internetIp?: string;
  k8sClusterName?: string;
  containerImageId?: string;
  lastTimeStamp?: number;
  occurrenceTime?: string;
  alarmUniqueInfo?: string;
  desc?: string;
  canCancelFault?: boolean;
  alarmEventNameDisplay?: string;
  appName?: string;
  securityEventIds?: string;
  k8sClusterId?: string;
  containerImageName?: string;
  markMisRules?: string;
  canBeDealOnLine?: boolean;
  containHwMode?: boolean;
  k8sNodeId?: string;
  instanceName?: string;
  eventStatus?: number;
  saleVersion?: string;
  operateErrorCode?: string;
  name?: string;
  hasTraceInfo?: boolean;
  dataSource?: string;
  operateTime?: number;
  eventSubType?: string;
  advanced?: boolean;
  occurrenceTimeStamp?: number;
  instanceId?: string;
  alarmEventTypeDisplay?: string;
  intranetIp?: string;
  lastTime?: string;
  operateMsg?: string;
  uuid?: string;
  k8sPodName?: string;
  containerId?: string;
  alarmEventType?: string;
  k8sNamespace?: string;
  autoBreaking?: boolean;
  k8sNodeName?: string;
  alarmEventName?: string;
  uniqueInfo?: string;
  level?: string;
  id?: number;
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  eventNotes?: DescribeSuspEventsResponseBodySuspEventsEventNotes[];
  static names(): { [key: string]: string } {
    return {
      stages: 'Stages',
      internetIp: 'InternetIp',
      k8sClusterName: 'K8sClusterName',
      containerImageId: 'ContainerImageId',
      lastTimeStamp: 'LastTimeStamp',
      occurrenceTime: 'OccurrenceTime',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      desc: 'Desc',
      canCancelFault: 'CanCancelFault',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      appName: 'AppName',
      securityEventIds: 'SecurityEventIds',
      k8sClusterId: 'K8sClusterId',
      containerImageName: 'ContainerImageName',
      markMisRules: 'MarkMisRules',
      canBeDealOnLine: 'CanBeDealOnLine',
      containHwMode: 'ContainHwMode',
      k8sNodeId: 'K8sNodeId',
      instanceName: 'InstanceName',
      eventStatus: 'EventStatus',
      saleVersion: 'SaleVersion',
      operateErrorCode: 'OperateErrorCode',
      name: 'Name',
      hasTraceInfo: 'HasTraceInfo',
      dataSource: 'DataSource',
      operateTime: 'OperateTime',
      eventSubType: 'EventSubType',
      advanced: 'Advanced',
      occurrenceTimeStamp: 'OccurrenceTimeStamp',
      instanceId: 'InstanceId',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      intranetIp: 'IntranetIp',
      lastTime: 'LastTime',
      operateMsg: 'OperateMsg',
      uuid: 'Uuid',
      k8sPodName: 'K8sPodName',
      containerId: 'ContainerId',
      alarmEventType: 'AlarmEventType',
      k8sNamespace: 'K8sNamespace',
      autoBreaking: 'AutoBreaking',
      k8sNodeName: 'K8sNodeName',
      alarmEventName: 'AlarmEventName',
      uniqueInfo: 'UniqueInfo',
      level: 'Level',
      id: 'Id',
      details: 'Details',
      eventNotes: 'EventNotes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stages: 'string',
      internetIp: 'string',
      k8sClusterName: 'string',
      containerImageId: 'string',
      lastTimeStamp: 'number',
      occurrenceTime: 'string',
      alarmUniqueInfo: 'string',
      desc: 'string',
      canCancelFault: 'boolean',
      alarmEventNameDisplay: 'string',
      appName: 'string',
      securityEventIds: 'string',
      k8sClusterId: 'string',
      containerImageName: 'string',
      markMisRules: 'string',
      canBeDealOnLine: 'boolean',
      containHwMode: 'boolean',
      k8sNodeId: 'string',
      instanceName: 'string',
      eventStatus: 'number',
      saleVersion: 'string',
      operateErrorCode: 'string',
      name: 'string',
      hasTraceInfo: 'boolean',
      dataSource: 'string',
      operateTime: 'number',
      eventSubType: 'string',
      advanced: 'boolean',
      occurrenceTimeStamp: 'number',
      instanceId: 'string',
      alarmEventTypeDisplay: 'string',
      intranetIp: 'string',
      lastTime: 'string',
      operateMsg: 'string',
      uuid: 'string',
      k8sPodName: 'string',
      containerId: 'string',
      alarmEventType: 'string',
      k8sNamespace: 'string',
      autoBreaking: 'boolean',
      k8sNodeName: 'string',
      alarmEventName: 'string',
      uniqueInfo: 'string',
      level: 'string',
      id: 'number',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
      eventNotes: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsEventNotes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserBackupMachinesResponseBodyMachines extends $tea.Model {
  uuid?: string;
  policyName?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      policyName: 'PolicyName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      policyName: 'string',
      id: 'number',
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
  uuid?: string;
  machineIp?: string;
  os?: string;
  machineName?: string;
  machineInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      machineIp: 'MachineIp',
      os: 'Os',
      machineName: 'MachineName',
      machineInstanceId: 'MachineInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      machineIp: 'string',
      os: 'string',
      machineName: 'string',
      machineInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotCriteriaResponseBodyCriteriaList extends $tea.Model {
  type?: string;
  name?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyPageInfo extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList extends $tea.Model {
  vpcSwitchName?: string;
  zoneId?: string;
  vpcSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcSwitchName: 'VpcSwitchName',
      zoneId: 'ZoneId',
      vpcSwitchId: 'VpcSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcSwitchName: 'string',
      zoneId: 'string',
      vpcSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList extends $tea.Model {
  vpcName?: string;
  vpcId?: string;
  honeyPotEniInstanceId?: string;
  cidrBlock?: string;
  vpcStatus?: string;
  createTime?: number;
  honeyPotVpcSwitchId?: string;
  honeyPotExistence?: boolean;
  vpcRegionId?: string;
  honeyPotEcsInstanceStatus?: string;
  honeyPotInstanceStatus?: string;
  vpcSwitchIdList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList[];
  static names(): { [key: string]: string } {
    return {
      vpcName: 'VpcName',
      vpcId: 'VpcId',
      honeyPotEniInstanceId: 'HoneyPotEniInstanceId',
      cidrBlock: 'CidrBlock',
      vpcStatus: 'VpcStatus',
      createTime: 'CreateTime',
      honeyPotVpcSwitchId: 'HoneyPotVpcSwitchId',
      honeyPotExistence: 'HoneyPotExistence',
      vpcRegionId: 'VpcRegionId',
      honeyPotEcsInstanceStatus: 'HoneyPotEcsInstanceStatus',
      honeyPotInstanceStatus: 'HoneyPotInstanceStatus',
      vpcSwitchIdList: 'VpcSwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcName: 'string',
      vpcId: 'string',
      honeyPotEniInstanceId: 'string',
      cidrBlock: 'string',
      vpcStatus: 'string',
      createTime: 'number',
      honeyPotVpcSwitchId: 'string',
      honeyPotExistence: 'boolean',
      vpcRegionId: 'string',
      honeyPotEcsInstanceStatus: 'string',
      honeyPotInstanceStatus: 'string',
      vpcSwitchIdList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOListVpcSwitchIdList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcListResponseBodyVpcList extends $tea.Model {
  instanceDesc?: string;
  instanceName?: string;
  ecsCount?: number;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDesc: 'InstanceDesc',
      instanceName: 'InstanceName',
      ecsCount: 'EcsCount',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDesc: 'string',
      instanceName: 'string',
      ecsCount: 'number',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCvesClassifys extends $tea.Model {
  description?: string;
  classify?: string;
  demoVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      classify: 'Classify',
      demoVideoUrl: 'DemoVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      classify: 'string',
      demoVideoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCves extends $tea.Model {
  summary?: string;
  complexity?: string;
  product?: string;
  pocCreateTime?: number;
  cveId?: string;
  cnvdId?: string;
  reference?: string;
  cvssScore?: string;
  vendor?: string;
  pocDisclosureTime?: number;
  classify?: string;
  cvssVector?: string;
  vulLevel?: string;
  releaseTime?: number;
  title?: string;
  solution?: string;
  content?: string;
  poc?: string;
  classifys?: DescribeVulDetailsResponseBodyCvesClassifys[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      complexity: 'Complexity',
      product: 'Product',
      pocCreateTime: 'PocCreateTime',
      cveId: 'CveId',
      cnvdId: 'CnvdId',
      reference: 'Reference',
      cvssScore: 'CvssScore',
      vendor: 'Vendor',
      pocDisclosureTime: 'PocDisclosureTime',
      classify: 'Classify',
      cvssVector: 'CvssVector',
      vulLevel: 'VulLevel',
      releaseTime: 'ReleaseTime',
      title: 'Title',
      solution: 'Solution',
      content: 'Content',
      poc: 'Poc',
      classifys: 'Classifys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      complexity: 'string',
      product: 'string',
      pocCreateTime: 'number',
      cveId: 'string',
      cnvdId: 'string',
      reference: 'string',
      cvssScore: 'string',
      vendor: 'string',
      pocDisclosureTime: 'number',
      classify: 'string',
      cvssVector: 'string',
      vulLevel: 'string',
      releaseTime: 'number',
      title: 'string',
      solution: 'string',
      content: 'string',
      poc: 'string',
      classifys: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCvesClassifys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  fullVersion?: string;
  version?: string;
  matchDetail?: string;
  path?: string;
  name?: string;
  updateCmd?: string;
  static names(): { [key: string]: string } {
    return {
      fullVersion: 'FullVersion',
      version: 'Version',
      matchDetail: 'MatchDetail',
      path: 'Path',
      name: 'Name',
      updateCmd: 'UpdateCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullVersion: 'string',
      version: 'string',
      matchDetail: 'string',
      path: 'string',
      name: 'string',
      updateCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity extends $tea.Model {
  status?: string;
  timeFactor?: string;
  enviromentFactor?: string;
  isCalc?: string;
  totalScore?: string;
  cvssFactor?: string;
  assetsFactor?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      timeFactor: 'Time_factor',
      enviromentFactor: 'Enviroment_factor',
      isCalc: 'Is_calc',
      totalScore: 'Total_score',
      cvssFactor: 'Cvss_factor',
      assetsFactor: 'Assets_factor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      timeFactor: 'string',
      enviromentFactor: 'string',
      isCalc: 'string',
      totalScore: 'string',
      cvssFactor: 'string',
      assetsFactor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJson extends $tea.Model {
  status?: string;
  ip?: string;
  primaryId?: number;
  os?: string;
  tag?: string;
  lastTs?: number;
  osRelease?: string;
  aliasName?: string;
  absolutePath?: string;
  rpmEntityList?: DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  cveList?: string[];
  necessity?: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      ip: 'Ip',
      primaryId: 'PrimaryId',
      os: 'Os',
      tag: 'Tag',
      lastTs: 'LastTs',
      osRelease: 'OsRelease',
      aliasName: 'AliasName',
      absolutePath: 'AbsolutePath',
      rpmEntityList: 'RpmEntityList',
      cveList: 'cveList',
      necessity: 'Necessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      ip: 'string',
      primaryId: 'number',
      os: 'string',
      tag: 'string',
      lastTs: 'number',
      osRelease: 'string',
      aliasName: 'string',
      absolutePath: 'string',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
      cveList: { 'type': 'array', 'itemType': 'string' },
      necessity: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecords extends $tea.Model {
  status?: number;
  type?: string;
  modifyTs?: number;
  internetIp?: string;
  primaryId?: number;
  tag?: string;
  instanceName?: string;
  online?: boolean;
  osVersion?: string;
  name?: string;
  resultCode?: string;
  instanceId?: string;
  related?: string;
  intranetIp?: string;
  lastTs?: number;
  firstTs?: number;
  necessity?: string;
  repairTs?: number;
  uuid?: string;
  groupId?: number;
  resultMessage?: string;
  aliasName?: string;
  extendContentJson?: DescribeVulListResponseBodyVulRecordsExtendContentJson;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      modifyTs: 'ModifyTs',
      internetIp: 'InternetIp',
      primaryId: 'PrimaryId',
      tag: 'Tag',
      instanceName: 'InstanceName',
      online: 'Online',
      osVersion: 'OsVersion',
      name: 'Name',
      resultCode: 'ResultCode',
      instanceId: 'InstanceId',
      related: 'Related',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      firstTs: 'FirstTs',
      necessity: 'Necessity',
      repairTs: 'RepairTs',
      uuid: 'Uuid',
      groupId: 'GroupId',
      resultMessage: 'ResultMessage',
      aliasName: 'AliasName',
      extendContentJson: 'ExtendContentJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'string',
      modifyTs: 'number',
      internetIp: 'string',
      primaryId: 'number',
      tag: 'string',
      instanceName: 'string',
      online: 'boolean',
      osVersion: 'string',
      name: 'string',
      resultCode: 'string',
      instanceId: 'string',
      related: 'string',
      intranetIp: 'string',
      lastTs: 'number',
      firstTs: 'number',
      necessity: 'string',
      repairTs: 'number',
      uuid: 'string',
      groupId: 'number',
      resultMessage: 'string',
      aliasName: 'string',
      extendContentJson: DescribeVulListResponseBodyVulRecordsExtendContentJson,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBodyVulWhitelists extends $tea.Model {
  type?: string;
  aliasName?: string;
  name?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      aliasName: 'AliasName',
      name: 'Name',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      aliasName: 'string',
      name: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWarningMachinesResponseBodyWarningMachines extends $tea.Model {
  status?: number;
  lowWarningCount?: number;
  uuid?: string;
  mediumWarningCount?: number;
  passCount?: number;
  internetIp?: string;
  instanceName?: string;
  instanceId?: string;
  highWarningCount?: number;
  intranetIp?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lowWarningCount: 'LowWarningCount',
      uuid: 'Uuid',
      mediumWarningCount: 'MediumWarningCount',
      passCount: 'PassCount',
      internetIp: 'InternetIp',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
      highWarningCount: 'HighWarningCount',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      lowWarningCount: 'number',
      uuid: 'string',
      mediumWarningCount: 'number',
      passCount: 'number',
      internetIp: 'string',
      instanceName: 'string',
      instanceId: 'string',
      highWarningCount: 'number',
      intranetIp: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockBindListResponseBodyBindList extends $tea.Model {
  status?: string;
  percent?: number;
  internetIp?: string;
  serviceDetail?: string;
  os?: string;
  serviceStatus?: string;
  intranetIp?: string;
  auditCount?: string;
  uuid?: string;
  serviceCode?: string;
  instanceName?: string;
  dirCount?: string;
  blockCount?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      percent: 'Percent',
      internetIp: 'InternetIp',
      serviceDetail: 'ServiceDetail',
      os: 'Os',
      serviceStatus: 'ServiceStatus',
      intranetIp: 'IntranetIp',
      auditCount: 'AuditCount',
      uuid: 'Uuid',
      serviceCode: 'ServiceCode',
      instanceName: 'InstanceName',
      dirCount: 'DirCount',
      blockCount: 'BlockCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      percent: 'number',
      internetIp: 'string',
      serviceDetail: 'string',
      os: 'string',
      serviceStatus: 'string',
      intranetIp: 'string',
      auditCount: 'string',
      uuid: 'string',
      serviceCode: 'string',
      instanceName: 'string',
      dirCount: 'string',
      blockCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebLockConfigListResponseBodyConfigList extends $tea.Model {
  exclusiveDir?: string;
  uuid?: string;
  inclusiveFileType?: string;
  defenceMode?: string;
  exclusiveFileType?: string;
  inclusiveFile?: string;
  mode?: string;
  dir?: string;
  exclusiveFile?: string;
  id?: string;
  localBackupDir?: string;
  static names(): { [key: string]: string } {
    return {
      exclusiveDir: 'ExclusiveDir',
      uuid: 'Uuid',
      inclusiveFileType: 'InclusiveFileType',
      defenceMode: 'DefenceMode',
      exclusiveFileType: 'ExclusiveFileType',
      inclusiveFile: 'InclusiveFile',
      mode: 'Mode',
      dir: 'Dir',
      exclusiveFile: 'ExclusiveFile',
      id: 'Id',
      localBackupDir: 'LocalBackupDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclusiveDir: 'string',
      uuid: 'string',
      inclusiveFileType: 'string',
      defenceMode: 'string',
      exclusiveFileType: 'string',
      inclusiveFile: 'string',
      mode: 'string',
      dir: 'string',
      exclusiveFile: 'string',
      id: 'string',
      localBackupDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackupStorageCountResponseBodyBackupStorageCount extends $tea.Model {
  overflow?: number;
  buyStorageByte?: number;
  usageStorageByte?: number;
  static names(): { [key: string]: string } {
    return {
      overflow: 'Overflow',
      buyStorageByte: 'BuyStorageByte',
      usageStorageByte: 'UsageStorageByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overflow: 'number',
      buyStorageByte: 'number',
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
  uuid?: string;
  groupId?: number;
  success?: boolean;
  region?: string;
  instanceName?: string;
  online?: boolean;
  message?: string;
  ip?: string;
  osVersion?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
      groupId: 'GroupId',
      success: 'Success',
      region: 'Region',
      instanceName: 'InstanceName',
      online: 'Online',
      message: 'Message',
      ip: 'Ip',
      osVersion: 'OsVersion',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      groupId: 'number',
      success: 'boolean',
      region: 'string',
      instanceName: 'string',
      online: 'boolean',
      message: 'string',
      ip: 'string',
      osVersion: 'string',
      instanceId: 'string',
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

  async describeBackupRestoreCountWithOptions(request: DescribeBackupRestoreCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupRestoreCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBackupRestoreCountResponse>(await this.doRPCRequest("DescribeBackupRestoreCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBackupRestoreCountResponse({}));
  }

  async describeBackupRestoreCount(request: DescribeBackupRestoreCountRequest): Promise<DescribeBackupRestoreCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupRestoreCountWithOptions(request, runtime);
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

  async describeSasAssetStatisticsColumnWithOptions(request: DescribeSasAssetStatisticsColumnRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSasAssetStatisticsColumnResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSasAssetStatisticsColumnResponse>(await this.doRPCRequest("DescribeSasAssetStatisticsColumn", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSasAssetStatisticsColumnResponse({}));
  }

  async describeSasAssetStatisticsColumn(request: DescribeSasAssetStatisticsColumnRequest): Promise<DescribeSasAssetStatisticsColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSasAssetStatisticsColumnWithOptions(request, runtime);
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

  async describeSupportRegionWithOptions(request: DescribeSupportRegionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSupportRegionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSupportRegionResponse>(await this.doRPCRequest("DescribeSupportRegion", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSupportRegionResponse({}));
  }

  async describeSupportRegion(request: DescribeSupportRegionRequest): Promise<DescribeSupportRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportRegionWithOptions(request, runtime);
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

  async describeUserBackupMachinesWithOptions(request: DescribeUserBackupMachinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBackupMachinesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserBackupMachinesResponse>(await this.doRPCRequest("DescribeUserBackupMachines", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserBackupMachinesResponse({}));
  }

  async describeUserBackupMachines(request: DescribeUserBackupMachinesRequest): Promise<DescribeUserBackupMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBackupMachinesWithOptions(request, runtime);
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

  async getBackupStorageCountWithOptions(request: GetBackupStorageCountRequest, runtime: $Util.RuntimeOptions): Promise<GetBackupStorageCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBackupStorageCountResponse>(await this.doRPCRequest("GetBackupStorageCount", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new GetBackupStorageCountResponse({}));
  }

  async getBackupStorageCount(request: GetBackupStorageCountRequest): Promise<GetBackupStorageCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupStorageCountWithOptions(request, runtime);
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
