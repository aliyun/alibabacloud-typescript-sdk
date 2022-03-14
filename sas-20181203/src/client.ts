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
  tacticId?: string;
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
      tacticId: 'TacticId',
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
      tacticId: 'string',
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
  noGroupTrace?: boolean;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      importance: 'Importance',
      logicalExp: 'LogicalExp',
      machineTypes: 'MachineTypes',
      noGroupTrace: 'NoGroupTrace',
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
      noGroupTrace: 'boolean',
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

export class DescribeImageBaselineCheckSummaryRequest extends $tea.Model {
  criteria?: string;
  criteriaType?: string;
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      riskLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineCheckSummaryResponseBody extends $tea.Model {
  baselineResultSummary?: DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary[];
  pageInfo?: DescribeImageBaselineCheckSummaryResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineResultSummary: 'BaselineResultSummary',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineResultSummary: { 'type': 'array', 'itemType': DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary },
      pageInfo: DescribeImageBaselineCheckSummaryResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineCheckSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageBaselineCheckSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageBaselineCheckSummaryResponseBody,
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

export class DescribeImageListWithBaselineNameRequest extends $tea.Model {
  baselineNameKey?: string;
  criteria?: string;
  criteriaType?: string;
  currentPage?: number;
  imageDigest?: string;
  lang?: string;
  pageSize?: number;
  repoInstanceId?: string;
  repoName?: string;
  repoNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      baselineNameKey: 'BaselineNameKey',
      criteria: 'Criteria',
      criteriaType: 'CriteriaType',
      currentPage: 'CurrentPage',
      imageDigest: 'ImageDigest',
      lang: 'Lang',
      pageSize: 'PageSize',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineNameKey: 'string',
      criteria: 'string',
      criteriaType: 'string',
      currentPage: 'number',
      imageDigest: 'string',
      lang: 'string',
      pageSize: 'number',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListWithBaselineNameResponseBody extends $tea.Model {
  imageInfos?: DescribeImageListWithBaselineNameResponseBodyImageInfos[];
  pageInfo?: DescribeImageListWithBaselineNameResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfos: 'ImageInfos',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfos: { 'type': 'array', 'itemType': DescribeImageListWithBaselineNameResponseBodyImageInfos },
      pageInfo: DescribeImageListWithBaselineNameResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListWithBaselineNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageListWithBaselineNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageListWithBaselineNameResponseBody,
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
  autorun?: number;
  cron?: number;
  database?: number;
  lkm?: number;
  port?: number;
  process?: number;
  requestId?: string;
  sca?: number;
  software?: number;
  user?: number;
  web?: number;
  webserver?: number;
  static names(): { [key: string]: string } {
    return {
      autorun: 'Autorun',
      cron: 'Cron',
      database: 'Database',
      lkm: 'Lkm',
      port: 'Port',
      process: 'Process',
      requestId: 'RequestId',
      sca: 'Sca',
      software: 'Software',
      user: 'User',
      web: 'Web',
      webserver: 'Webserver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autorun: 'number',
      cron: 'number',
      database: 'number',
      lkm: 'number',
      port: 'number',
      process: 'number',
      requestId: 'string',
      sca: 'number',
      software: 'number',
      user: 'number',
      web: 'number',
      webserver: 'number',
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
  bindIp?: string;
  currentPage?: number;
  pageSize?: number;
  port?: string;
  procName?: string;
  remark?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      bindIp: 'BindIp',
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
      bindIp: 'string',
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
  procTimeEnd?: number;
  procTimeStart?: number;
  remark?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cmdline: 'Cmdline',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      procTimeEnd: 'ProcTimeEnd',
      procTimeStart: 'ProcTimeStart',
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
      procTimeEnd: 'number',
      procTimeStart: 'number',
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
  biz?: string;
  bizType?: string;
  currentPage?: number;
  lang?: string;
  name?: number;
  pageSize?: number;
  pid?: string;
  port?: string;
  processStartedEnd?: number;
  processStartedStart?: number;
  remark?: string;
  scaName?: string;
  scaNamePattern?: string;
  scaVersion?: string;
  searchInfo?: string;
  searchInfoSub?: string;
  searchItem?: string;
  searchItemSub?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      pid: 'Pid',
      port: 'Port',
      processStartedEnd: 'ProcessStartedEnd',
      processStartedStart: 'ProcessStartedStart',
      remark: 'Remark',
      scaName: 'ScaName',
      scaNamePattern: 'ScaNamePattern',
      scaVersion: 'ScaVersion',
      searchInfo: 'SearchInfo',
      searchInfoSub: 'SearchInfoSub',
      searchItem: 'SearchItem',
      searchItemSub: 'SearchItemSub',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      bizType: 'string',
      currentPage: 'number',
      lang: 'string',
      name: 'number',
      pageSize: 'number',
      pid: 'string',
      port: 'string',
      processStartedEnd: 'number',
      processStartedStart: 'number',
      remark: 'string',
      scaName: 'string',
      scaNamePattern: 'string',
      scaVersion: 'string',
      searchInfo: 'string',
      searchInfoSub: 'string',
      searchItem: 'string',
      searchItemSub: 'string',
      user: 'string',
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
  installTimeEnd?: number;
  installTimeStart?: number;
  name?: string;
  pageSize?: number;
  path?: string;
  remark?: string;
  softwareVersion?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      installTimeEnd: 'InstallTimeEnd',
      installTimeStart: 'InstallTimeStart',
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
      installTimeEnd: 'number',
      installTimeStart: 'number',
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
  lastLoginTimeEnd?: number;
  lastLoginTimeStart?: number;
  pageSize?: number;
  remark?: string;
  user?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      isRoot: 'IsRoot',
      lastLoginTimeEnd: 'LastLoginTimeEnd',
      lastLoginTimeStart: 'LastLoginTimeStart',
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
      lastLoginTimeEnd: 'number',
      lastLoginTimeStart: 'number',
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
  groupingId?: number;
  pageSize?: string;
  quaraTag?: string;
  sourceIp?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      from: 'From',
      groupId: 'GroupId',
      groupingId: 'GroupingId',
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
      groupingId: 'number',
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
  tacticId?: string;
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
      tacticId: 'TacticId',
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
      tacticId: 'string',
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

export class DescribeSuspiciousUUIDConfigRequest extends $tea.Model {
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

export class DescribeSuspiciousUUIDConfigResponseBody extends $tea.Model {
  count?: number;
  requestId?: string;
  UUIDList?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      UUIDList: 'UUIDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      UUIDList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspiciousUUIDConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspiciousUUIDConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspiciousUUIDConfigResponseBody,
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

export class ExportVulRequest extends $tea.Model {
  aliasName?: string;
  attachTypes?: string;
  dealed?: string;
  groupId?: string;
  lang?: string;
  necessity?: string;
  searchTags?: string;
  type?: string;
  uuids?: string;
  vpcInstanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      attachTypes: 'AttachTypes',
      dealed: 'Dealed',
      groupId: 'GroupId',
      lang: 'Lang',
      necessity: 'Necessity',
      searchTags: 'SearchTags',
      type: 'Type',
      uuids: 'Uuids',
      vpcInstanceIds: 'VpcInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      attachTypes: 'string',
      dealed: 'string',
      groupId: 'string',
      lang: 'string',
      necessity: 'string',
      searchTags: 'string',
      type: 'string',
      uuids: 'string',
      vpcInstanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportVulResponseBody extends $tea.Model {
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

export class ExportVulResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportVulResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportVulResponseBody,
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
  securityEventIds?: string[];
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      markBatch: 'MarkBatch',
      markMissParam: 'MarkMissParam',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
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

export class ModifyPropertyScheduleConfigRequest extends $tea.Model {
  scheduleTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleTime: 'ScheduleTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPropertyScheduleConfigResponseBody extends $tea.Model {
  modifyResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyResult: 'ModifyResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPropertyScheduleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyPropertyScheduleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPropertyScheduleConfigResponseBody,
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

export class QueryGroupIdByGroupNameRequest extends $tea.Model {
  groupName?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGroupIdByGroupNameResponseBody extends $tea.Model {
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

export class QueryGroupIdByGroupNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryGroupIdByGroupNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryGroupIdByGroupNameResponseBody,
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

export class DescribeAlarmEventListResponseBodySuspEventsTacticItems extends $tea.Model {
  tacticDisplayName?: string;
  tacticId?: string;
  static names(): { [key: string]: string } {
    return {
      tacticDisplayName: 'TacticDisplayName',
      tacticId: 'TacticId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tacticDisplayName: 'string',
      tacticId: 'string',
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
  tacticItems?: DescribeAlarmEventListResponseBodySuspEventsTacticItems[];
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
      tacticItems: 'TacticItems',
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
      tacticItems: { 'type': 'array', 'itemType': DescribeAlarmEventListResponseBodySuspEventsTacticItems },
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
  clientVersion?: string;
  cpu?: number;
  cpuInfo?: string;
  createTime?: number;
  diskInfoList?: string[];
  flag?: number;
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
  memory?: number;
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
      clientVersion: 'ClientVersion',
      cpu: 'Cpu',
      cpuInfo: 'CpuInfo',
      createTime: 'CreateTime',
      diskInfoList: 'DiskInfoList',
      flag: 'Flag',
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
      memory: 'Memory',
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
      clientVersion: 'string',
      cpu: 'number',
      cpuInfo: 'string',
      createTime: 'number',
      diskInfoList: { 'type': 'array', 'itemType': 'string' },
      flag: 'number',
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
      memory: 'number',
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
  groupId?: number;
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
      groupId: 'number',
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
  huaweiInstanceCount?: number;
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
      huaweiInstanceCount: 'HuaweiInstanceCount',
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
      huaweiInstanceCount: 'number',
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

export class DescribeImageBaselineCheckSummaryResponseBodyBaselineResultSummary extends $tea.Model {
  baselineClassAlias?: string;
  baselineClassKey?: string;
  baselineNameAlias?: string;
  baselineNameKey?: string;
  baselineNameLevel?: string;
  firstScanTime?: number;
  highRiskImage?: number;
  lastScanTime?: number;
  lowRiskImage?: number;
  middleRiskImage?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      baselineClassAlias: 'BaselineClassAlias',
      baselineClassKey: 'BaselineClassKey',
      baselineNameAlias: 'BaselineNameAlias',
      baselineNameKey: 'BaselineNameKey',
      baselineNameLevel: 'BaselineNameLevel',
      firstScanTime: 'FirstScanTime',
      highRiskImage: 'HighRiskImage',
      lastScanTime: 'LastScanTime',
      lowRiskImage: 'LowRiskImage',
      middleRiskImage: 'MiddleRiskImage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassAlias: 'string',
      baselineClassKey: 'string',
      baselineNameAlias: 'string',
      baselineNameKey: 'string',
      baselineNameLevel: 'string',
      firstScanTime: 'number',
      highRiskImage: 'number',
      lastScanTime: 'number',
      lowRiskImage: 'number',
      middleRiskImage: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBaselineCheckSummaryResponseBodyPageInfo extends $tea.Model {
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

export class DescribeImageListWithBaselineNameResponseBodyImageInfos extends $tea.Model {
  digest?: string;
  highRiskImage?: number;
  imageCreate?: number;
  imageId?: string;
  imageSize?: number;
  imageUpdate?: number;
  instanceId?: string;
  lowRiskImage?: number;
  middleRiskImage?: number;
  noRiskImage?: number;
  regionId?: string;
  repoId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoType?: string;
  riskStatus?: string;
  tag?: string;
  totalItemCount?: number;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      highRiskImage: 'HighRiskImage',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      instanceId: 'InstanceId',
      lowRiskImage: 'LowRiskImage',
      middleRiskImage: 'MiddleRiskImage',
      noRiskImage: 'NoRiskImage',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoType: 'RepoType',
      riskStatus: 'RiskStatus',
      tag: 'Tag',
      totalItemCount: 'TotalItemCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      highRiskImage: 'number',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      instanceId: 'string',
      lowRiskImage: 'number',
      middleRiskImage: 'number',
      noRiskImage: 'number',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoType: 'string',
      riskStatus: 'string',
      tag: 'string',
      totalItemCount: 'number',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListWithBaselineNameResponseBodyPageInfo extends $tea.Model {
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
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      captchaCode: 'CaptchaCode',
      expiredDate: 'ExpiredDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      onlyImage: 'OnlyImage',
      os: 'Os',
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
  isPackage?: number;
  md5?: string;
  name?: string;
  path?: string;
  pid?: string;
  pname?: string;
  startTime?: string;
  startTimeDt?: number;
  state?: string;
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
      isPackage: 'IsPackage',
      md5: 'Md5',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
      pname: 'Pname',
      startTime: 'StartTime',
      startTimeDt: 'StartTimeDt',
      state: 'State',
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
      isPackage: 'number',
      md5: 'string',
      name: 'string',
      path: 'string',
      pid: 'string',
      pname: 'string',
      startTime: 'string',
      startTimeDt: 'number',
      state: 'string',
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
  installTimeDt?: number;
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
      installTimeDt: 'InstallTimeDt',
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
      installTimeDt: 'number',
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
  isCouldLogin?: number;
  isPasswdExpired?: number;
  isPasswdLocked?: number;
  isRoot?: string;
  isSudoer?: number;
  isUserExpired?: number;
  lastLoginIp?: string;
  lastLoginTime?: string;
  lastLoginTimeDt?: number;
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
      isCouldLogin: 'IsCouldLogin',
      isPasswdExpired: 'IsPasswdExpired',
      isPasswdLocked: 'IsPasswdLocked',
      isRoot: 'IsRoot',
      isSudoer: 'IsSudoer',
      isUserExpired: 'IsUserExpired',
      lastLoginIp: 'LastLoginIp',
      lastLoginTime: 'LastLoginTime',
      lastLoginTimeDt: 'LastLoginTimeDt',
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
      isCouldLogin: 'number',
      isPasswdExpired: 'number',
      isPasswdLocked: 'number',
      isRoot: 'string',
      isSudoer: 'number',
      isUserExpired: 'number',
      lastLoginIp: 'string',
      lastLoginTime: 'string',
      lastLoginTimeDt: 'number',
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

export class DescribeRiskCheckItemResultResponseBodyPageContentResource extends $tea.Model {
  contentResource?: string;
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
      contentResource: 'string',
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

export class DescribeSuspEventsResponseBodySuspEventsTacticItems extends $tea.Model {
  tacticDisplayName?: string;
  tacticId?: string;
  static names(): { [key: string]: string } {
    return {
      tacticDisplayName: 'TacticDisplayName',
      tacticId: 'TacticId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tacticDisplayName: 'string',
      tacticId: 'string',
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
  tacticItems?: DescribeSuspEventsResponseBodySuspEventsTacticItems[];
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
      tacticItems: 'TacticItems',
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
      tacticItems: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsTacticItems },
      uniqueInfo: 'string',
      uuid: 'string',
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
  matchList?: string;
  name?: string;
  path?: string;
  pid?: string;
  updateCmd?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      fullVersion: 'FullVersion',
      imageName: 'ImageName',
      matchDetail: 'MatchDetail',
      matchList: 'MatchList',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
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
      matchList: 'string',
      name: 'string',
      path: 'string',
      pid: 'string',
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
  description?: string;
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
      description: 'Description',
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
      description: 'string',
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
  regionId?: string;
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
      regionId: 'RegionId',
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
      regionId: 'string',
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
    let query = { };
    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcSwitchId)) {
      query["VpcSwitchId"] = request.vpcSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddVpcHoneyPot",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddVpcHoneyPotResponse>(await this.callApi(params, req, runtime), new AddVpcHoneyPotResponse({}));
  }

  async addVpcHoneyPot(request: AddVpcHoneyPotRequest): Promise<AddVpcHoneyPotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addVpcHoneyPotWithOptions(request, runtime);
  }

  async checkSecurityEventIdWithOptions(request: CheckSecurityEventIdRequest, runtime: $Util.RuntimeOptions): Promise<CheckSecurityEventIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.securityEventIds)) {
      query["SecurityEventIds"] = request.securityEventIds;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSecurityEventId",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSecurityEventIdResponse>(await this.callApi(params, req, runtime), new CheckSecurityEventIdResponse({}));
  }

  async checkSecurityEventId(request: CheckSecurityEventIdRequest): Promise<CheckSecurityEventIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSecurityEventIdWithOptions(request, runtime);
  }

  async createAntiBruteForceRuleWithOptions(request: CreateAntiBruteForceRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAntiBruteForceRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!Util.isUnset(request.failCount)) {
      query["FailCount"] = request.failCount;
    }

    if (!Util.isUnset(request.forbiddenTime)) {
      query["ForbiddenTime"] = request.forbiddenTime;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.span)) {
      query["Span"] = request.span;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAntiBruteForceRule",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAntiBruteForceRuleResponse>(await this.callApi(params, req, runtime), new CreateAntiBruteForceRuleResponse({}));
  }

  async createAntiBruteForceRule(request: CreateAntiBruteForceRuleRequest): Promise<CreateAntiBruteForceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAntiBruteForceRuleWithOptions(request, runtime);
  }

  async createBackupPolicyWithOptions(tmpReq: CreateBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyShrink)) {
      query["Policy"] = request.policyShrink;
    }

    if (!Util.isUnset(request.policyRegionId)) {
      query["PolicyRegionId"] = request.policyRegionId;
    }

    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackupPolicy",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupPolicyResponse>(await this.callApi(params, req, runtime), new CreateBackupPolicyResponse({}));
  }

  async createBackupPolicy(request: CreateBackupPolicyRequest): Promise<CreateBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupPolicyWithOptions(request, runtime);
  }

  async createOrUpdateAssetGroupWithOptions(request: CreateOrUpdateAssetGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrUpdateAssetGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrUpdateAssetGroup",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrUpdateAssetGroupResponse>(await this.callApi(params, req, runtime), new CreateOrUpdateAssetGroupResponse({}));
  }

  async createOrUpdateAssetGroup(request: CreateOrUpdateAssetGroupRequest): Promise<CreateOrUpdateAssetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrUpdateAssetGroupWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRole",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(runtime);
  }

  async createSimilarSecurityEventsQueryTaskWithOptions(request: CreateSimilarSecurityEventsQueryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimilarSecurityEventsQueryTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    if (!Util.isUnset(request.similarEventScenarioCode)) {
      query["SimilarEventScenarioCode"] = request.similarEventScenarioCode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSimilarSecurityEventsQueryTask",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSimilarSecurityEventsQueryTaskResponse>(await this.callApi(params, req, runtime), new CreateSimilarSecurityEventsQueryTaskResponse({}));
  }

  async createSimilarSecurityEventsQueryTask(request: CreateSimilarSecurityEventsQueryTaskRequest): Promise<CreateSimilarSecurityEventsQueryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimilarSecurityEventsQueryTaskWithOptions(request, runtime);
  }

  async deleteBackupPolicyWithOptions(request: DeleteBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackupPolicy",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupPolicyResponse>(await this.callApi(params, req, runtime), new DeleteBackupPolicyResponse({}));
  }

  async deleteBackupPolicy(request: DeleteBackupPolicyRequest): Promise<DeleteBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupPolicyWithOptions(request, runtime);
  }

  async deleteBackupPolicyMachineWithOptions(request: DeleteBackupPolicyMachineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBackupPolicyMachineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBackupPolicyMachine",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBackupPolicyMachineResponse>(await this.callApi(params, req, runtime), new DeleteBackupPolicyMachineResponse({}));
  }

  async deleteBackupPolicyMachine(request: DeleteBackupPolicyMachineRequest): Promise<DeleteBackupPolicyMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBackupPolicyMachineWithOptions(request, runtime);
  }

  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  async deleteLoginBaseConfigWithOptions(request: DeleteLoginBaseConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoginBaseConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoginBaseConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoginBaseConfigResponse>(await this.callApi(params, req, runtime), new DeleteLoginBaseConfigResponse({}));
  }

  async deleteLoginBaseConfig(request: DeleteLoginBaseConfigRequest): Promise<DeleteLoginBaseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoginBaseConfigWithOptions(request, runtime);
  }

  async deleteStrategyWithOptions(request: DeleteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStrategy",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStrategyResponse>(await this.callApi(params, req, runtime), new DeleteStrategyResponse({}));
  }

  async deleteStrategy(request: DeleteStrategyRequest): Promise<DeleteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStrategyWithOptions(request, runtime);
  }

  async deleteTagWithUuidWithOptions(request: DeleteTagWithUuidRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagWithUuidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTagWithUuid",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagWithUuidResponse>(await this.callApi(params, req, runtime), new DeleteTagWithUuidResponse({}));
  }

  async deleteTagWithUuid(request: DeleteTagWithUuidRequest): Promise<DeleteTagWithUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithUuidWithOptions(request, runtime);
  }

  async deleteVpcHoneyPotWithOptions(request: DeleteVpcHoneyPotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVpcHoneyPotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcHoneyPot",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVpcHoneyPotResponse>(await this.callApi(params, req, runtime), new DeleteVpcHoneyPotResponse({}));
  }

  async deleteVpcHoneyPot(request: DeleteVpcHoneyPotRequest): Promise<DeleteVpcHoneyPotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVpcHoneyPotWithOptions(request, runtime);
  }

  async describeAccesskeyLeakListWithOptions(request: DescribeAccesskeyLeakListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccesskeyLeakListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.startTs)) {
      query["StartTs"] = request.startTs;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccesskeyLeakList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccesskeyLeakListResponse>(await this.callApi(params, req, runtime), new DescribeAccesskeyLeakListResponse({}));
  }

  async describeAccesskeyLeakList(request: DescribeAccesskeyLeakListRequest): Promise<DescribeAccesskeyLeakListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccesskeyLeakListWithOptions(request, runtime);
  }

  async describeAffectedMaliciousFileImagesWithOptions(request: DescribeAffectedMaliciousFileImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAffectedMaliciousFileImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.imageDigest)) {
      query["ImageDigest"] = request.imageDigest;
    }

    if (!Util.isUnset(request.imageLayer)) {
      query["ImageLayer"] = request.imageLayer;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maliciousMd5)) {
      query["MaliciousMd5"] = request.maliciousMd5;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.repoInstanceId)) {
      query["RepoInstanceId"] = request.repoInstanceId;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!Util.isUnset(request.repoNamespace)) {
      query["RepoNamespace"] = request.repoNamespace;
    }

    if (!Util.isUnset(request.repoRegionId)) {
      query["RepoRegionId"] = request.repoRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAffectedMaliciousFileImages",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAffectedMaliciousFileImagesResponse>(await this.callApi(params, req, runtime), new DescribeAffectedMaliciousFileImagesResponse({}));
  }

  async describeAffectedMaliciousFileImages(request: DescribeAffectedMaliciousFileImagesRequest): Promise<DescribeAffectedMaliciousFileImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAffectedMaliciousFileImagesWithOptions(request, runtime);
  }

  async describeAlarmEventDetailWithOptions(request: DescribeAlarmEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmUniqueInfo)) {
      query["AlarmUniqueInfo"] = request.alarmUniqueInfo;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlarmEventDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlarmEventDetailResponse>(await this.callApi(params, req, runtime), new DescribeAlarmEventDetailResponse({}));
  }

  async describeAlarmEventDetail(request: DescribeAlarmEventDetailRequest): Promise<DescribeAlarmEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventDetailWithOptions(request, runtime);
  }

  async describeAlarmEventListWithOptions(request: DescribeAlarmEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmEventName)) {
      query["AlarmEventName"] = request.alarmEventName;
    }

    if (!Util.isUnset(request.alarmEventType)) {
      query["AlarmEventType"] = request.alarmEventType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!Util.isUnset(request.operateErrorCodeList)) {
      query["OperateErrorCodeList"] = request.operateErrorCodeList;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.tacticId)) {
      query["TacticId"] = request.tacticId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlarmEventList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlarmEventListResponse>(await this.callApi(params, req, runtime), new DescribeAlarmEventListResponse({}));
  }

  async describeAlarmEventList(request: DescribeAlarmEventListRequest): Promise<DescribeAlarmEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventListWithOptions(request, runtime);
  }

  async describeAllEntityWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAllEntityResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAllEntity",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllEntityResponse>(await this.callApi(params, req, runtime), new DescribeAllEntityResponse({}));
  }

  async describeAllEntity(): Promise<DescribeAllEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllEntityWithOptions(runtime);
  }

  async describeAllGroupsWithOptions(request: DescribeAllGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllGroups",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllGroupsResponse>(await this.callApi(params, req, runtime), new DescribeAllGroupsResponse({}));
  }

  async describeAllGroups(request: DescribeAllGroupsRequest): Promise<DescribeAllGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllGroupsWithOptions(request, runtime);
  }

  async describeAntiBruteForceRulesWithOptions(request: DescribeAntiBruteForceRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAntiBruteForceRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAntiBruteForceRules",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAntiBruteForceRulesResponse>(await this.callApi(params, req, runtime), new DescribeAntiBruteForceRulesResponse({}));
  }

  async describeAntiBruteForceRules(request: DescribeAntiBruteForceRulesRequest): Promise<DescribeAntiBruteForceRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAntiBruteForceRulesWithOptions(request, runtime);
  }

  async describeAssetDetailByUuidWithOptions(request: DescribeAssetDetailByUuidRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetDetailByUuidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetDetailByUuid",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetDetailByUuidResponse>(await this.callApi(params, req, runtime), new DescribeAssetDetailByUuidResponse({}));
  }

  async describeAssetDetailByUuid(request: DescribeAssetDetailByUuidRequest): Promise<DescribeAssetDetailByUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetDetailByUuidWithOptions(request, runtime);
  }

  async describeAssetDetailByUuidsWithOptions(request: DescribeAssetDetailByUuidsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetDetailByUuidsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAssetDetailByUuids",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetDetailByUuidsResponse>(await this.callApi(params, req, runtime), new DescribeAssetDetailByUuidsResponse({}));
  }

  async describeAssetDetailByUuids(request: DescribeAssetDetailByUuidsRequest): Promise<DescribeAssetDetailByUuidsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetDetailByUuidsWithOptions(request, runtime);
  }

  async describeAssetSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAssetSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAssetSummary",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAssetSummaryResponse>(await this.callApi(params, req, runtime), new DescribeAssetSummaryResponse({}));
  }

  async describeAssetSummary(): Promise<DescribeAssetSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetSummaryWithOptions(runtime);
  }

  async describeAttackAnalysisDataWithOptions(request: DescribeAttackAnalysisDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackAnalysisDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.base64)) {
      query["Base64"] = request.base64;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAttackAnalysisData",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAttackAnalysisDataResponse>(await this.callApi(params, req, runtime), new DescribeAttackAnalysisDataResponse({}));
  }

  async describeAttackAnalysisData(request: DescribeAttackAnalysisDataRequest): Promise<DescribeAttackAnalysisDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackAnalysisDataWithOptions(request, runtime);
  }

  async describeAutoDelConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAutoDelConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAutoDelConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoDelConfigResponse>(await this.callApi(params, req, runtime), new DescribeAutoDelConfigResponse({}));
  }

  async describeAutoDelConfig(): Promise<DescribeAutoDelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoDelConfigWithOptions(runtime);
  }

  async describeBackupClientsWithOptions(request: DescribeBackupClientsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupClientsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.supportRegionId)) {
      query["SupportRegionId"] = request.supportRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupClients",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupClientsResponse>(await this.callApi(params, req, runtime), new DescribeBackupClientsResponse({}));
  }

  async describeBackupClients(request: DescribeBackupClientsRequest): Promise<DescribeBackupClientsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupClientsWithOptions(request, runtime);
  }

  async describeBackupFilesWithOptions(request: DescribeBackupFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.snapshotHash)) {
      query["SnapshotHash"] = request.snapshotHash;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupFiles",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupFilesResponse>(await this.callApi(params, req, runtime), new DescribeBackupFilesResponse({}));
  }

  async describeBackupFiles(request: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupFilesWithOptions(request, runtime);
  }

  async describeBackupPoliciesWithOptions(request: DescribeBackupPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.machineRemark)) {
      query["MachineRemark"] = request.machineRemark;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupPolicies",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupPoliciesResponse>(await this.callApi(params, req, runtime), new DescribeBackupPoliciesResponse({}));
  }

  async describeBackupPolicies(request: DescribeBackupPoliciesRequest): Promise<DescribeBackupPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPoliciesWithOptions(request, runtime);
  }

  async describeBackupRestoreCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeBackupRestoreCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeBackupRestoreCount",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupRestoreCountResponse>(await this.callApi(params, req, runtime), new DescribeBackupRestoreCountResponse({}));
  }

  async describeBackupRestoreCount(): Promise<DescribeBackupRestoreCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupRestoreCountWithOptions(runtime);
  }

  async describeBruteForceSummaryWithOptions(request: DescribeBruteForceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBruteForceSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBruteForceSummary",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBruteForceSummaryResponse>(await this.callApi(params, req, runtime), new DescribeBruteForceSummaryResponse({}));
  }

  async describeBruteForceSummary(request: DescribeBruteForceSummaryRequest): Promise<DescribeBruteForceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBruteForceSummaryWithOptions(request, runtime);
  }

  async describeCheckEcsWarningsWithOptions(request: DescribeCheckEcsWarningsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckEcsWarningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCheckEcsWarnings",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCheckEcsWarningsResponse>(await this.callApi(params, req, runtime), new DescribeCheckEcsWarningsResponse({}));
  }

  async describeCheckEcsWarnings(request: DescribeCheckEcsWarningsRequest): Promise<DescribeCheckEcsWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckEcsWarningsWithOptions(request, runtime);
  }

  async describeCheckWarningDetailWithOptions(request: DescribeCheckWarningDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkWarningId)) {
      query["CheckWarningId"] = request.checkWarningId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCheckWarningDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCheckWarningDetailResponse>(await this.callApi(params, req, runtime), new DescribeCheckWarningDetailResponse({}));
  }

  async describeCheckWarningDetail(request: DescribeCheckWarningDetailRequest): Promise<DescribeCheckWarningDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningDetailWithOptions(request, runtime);
  }

  async describeCheckWarningSummaryWithOptions(request: DescribeCheckWarningSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskName)) {
      query["RiskName"] = request.riskName;
    }

    if (!Util.isUnset(request.riskStatus)) {
      query["RiskStatus"] = request.riskStatus;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!Util.isUnset(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCheckWarningSummary",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCheckWarningSummaryResponse>(await this.callApi(params, req, runtime), new DescribeCheckWarningSummaryResponse({}));
  }

  async describeCheckWarningSummary(request: DescribeCheckWarningSummaryRequest): Promise<DescribeCheckWarningSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningSummaryWithOptions(request, runtime);
  }

  async describeCheckWarningsWithOptions(request: DescribeCheckWarningsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCheckWarningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskId)) {
      query["RiskId"] = request.riskId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCheckWarnings",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCheckWarningsResponse>(await this.callApi(params, req, runtime), new DescribeCheckWarningsResponse({}));
  }

  async describeCheckWarnings(request: DescribeCheckWarningsRequest): Promise<DescribeCheckWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCheckWarningsWithOptions(request, runtime);
  }

  async describeCloudCenterInstancesWithOptions(request: DescribeCloudCenterInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudCenterInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.importance)) {
      query["Importance"] = request.importance;
    }

    if (!Util.isUnset(request.logicalExp)) {
      query["LogicalExp"] = request.logicalExp;
    }

    if (!Util.isUnset(request.machineTypes)) {
      query["MachineTypes"] = request.machineTypes;
    }

    if (!Util.isUnset(request.noGroupTrace)) {
      query["NoGroupTrace"] = request.noGroupTrace;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCloudCenterInstances",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudCenterInstancesResponse>(await this.callApi(params, req, runtime), new DescribeCloudCenterInstancesResponse({}));
  }

  async describeCloudCenterInstances(request: DescribeCloudCenterInstancesRequest): Promise<DescribeCloudCenterInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudCenterInstancesWithOptions(request, runtime);
  }

  async describeCloudProductFieldStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCloudProductFieldStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeCloudProductFieldStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCloudProductFieldStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeCloudProductFieldStatisticsResponse({}));
  }

  async describeCloudProductFieldStatistics(): Promise<DescribeCloudProductFieldStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudProductFieldStatisticsWithOptions(runtime);
  }

  async describeConcernNecessityWithOptions(request: DescribeConcernNecessityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConcernNecessityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeConcernNecessity",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeConcernNecessityResponse>(await this.callApi(params, req, runtime), new DescribeConcernNecessityResponse({}));
  }

  async describeConcernNecessity(request: DescribeConcernNecessityRequest): Promise<DescribeConcernNecessityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConcernNecessityWithOptions(request, runtime);
  }

  async describeContainerStatisticsWithOptions(request: DescribeContainerStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeContainerStatisticsResponse({}));
  }

  async describeContainerStatistics(request: DescribeContainerStatisticsRequest): Promise<DescribeContainerStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerStatisticsWithOptions(request, runtime);
  }

  async describeCriteriaWithOptions(request: DescribeCriteriaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCriteriaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.machineTypes)) {
      query["MachineTypes"] = request.machineTypes;
    }

    if (!Util.isUnset(request.supportAutoTag)) {
      query["SupportAutoTag"] = request.supportAutoTag;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCriteria",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCriteriaResponse>(await this.callApi(params, req, runtime), new DescribeCriteriaResponse({}));
  }

  async describeCriteria(request: DescribeCriteriaRequest): Promise<DescribeCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCriteriaWithOptions(request, runtime);
  }

  async describeDialogMessagesWithOptions(request: DescribeDialogMessagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDialogMessagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDialogMessages",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDialogMessagesResponse>(await this.callApi(params, req, runtime), new DescribeDialogMessagesResponse({}));
  }

  async describeDialogMessages(request: DescribeDialogMessagesRequest): Promise<DescribeDialogMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDialogMessagesWithOptions(request, runtime);
  }

  async describeDingTalkWithOptions(request: DescribeDingTalkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDingTalkResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleActionName)) {
      query["RuleActionName"] = request.ruleActionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDingTalk",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDingTalkResponse>(await this.callApi(params, req, runtime), new DescribeDingTalkResponse({}));
  }

  async describeDingTalk(request: DescribeDingTalkRequest): Promise<DescribeDingTalkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDingTalkWithOptions(request, runtime);
  }

  async describeDomainCountWithOptions(request: DescribeDomainCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainCount",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainCountResponse>(await this.callApi(params, req, runtime), new DescribeDomainCountResponse({}));
  }

  async describeDomainCount(request: DescribeDomainCountRequest): Promise<DescribeDomainCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainCountWithOptions(request, runtime);
  }

  async describeDomainDetailWithOptions(request: DescribeDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainDetailResponse>(await this.callApi(params, req, runtime), new DescribeDomainDetailResponse({}));
  }

  async describeDomainDetail(request: DescribeDomainDetailRequest): Promise<DescribeDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainDetailWithOptions(request, runtime);
  }

  async describeDomainListWithOptions(request: DescribeDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.domainType)) {
      query["DomainType"] = request.domainType;
    }

    if (!Util.isUnset(request.fuzzyDomain)) {
      query["FuzzyDomain"] = request.fuzzyDomain;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainListResponse>(await this.callApi(params, req, runtime), new DescribeDomainListResponse({}));
  }

  async describeDomainList(request: DescribeDomainListRequest): Promise<DescribeDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainListWithOptions(request, runtime);
  }

  async describeEmgVulItemWithOptions(request: DescribeEmgVulItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEmgVulItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskStatus)) {
      query["RiskStatus"] = request.riskStatus;
    }

    if (!Util.isUnset(request.scanType)) {
      query["ScanType"] = request.scanType;
    }

    if (!Util.isUnset(request.vulName)) {
      query["VulName"] = request.vulName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEmgVulItem",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEmgVulItemResponse>(await this.callApi(params, req, runtime), new DescribeEmgVulItemResponse({}));
  }

  async describeEmgVulItem(request: DescribeEmgVulItemRequest): Promise<DescribeEmgVulItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmgVulItemWithOptions(request, runtime);
  }

  async describeExportInfoWithOptions(request: DescribeExportInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExportInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExportInfo",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExportInfoResponse>(await this.callApi(params, req, runtime), new DescribeExportInfoResponse({}));
  }

  async describeExportInfo(request: DescribeExportInfoRequest): Promise<DescribeExportInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExportInfoWithOptions(request, runtime);
  }

  async describeExposedInstanceCriteriaWithOptions(request: DescribeExposedInstanceCriteriaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedInstanceCriteriaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExposedInstanceCriteria",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExposedInstanceCriteriaResponse>(await this.callApi(params, req, runtime), new DescribeExposedInstanceCriteriaResponse({}));
  }

  async describeExposedInstanceCriteria(request: DescribeExposedInstanceCriteriaRequest): Promise<DescribeExposedInstanceCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedInstanceCriteriaWithOptions(request, runtime);
  }

  async describeExposedInstanceDetailWithOptions(request: DescribeExposedInstanceDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedInstanceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExposedInstanceDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExposedInstanceDetailResponse>(await this.callApi(params, req, runtime), new DescribeExposedInstanceDetailResponse({}));
  }

  async describeExposedInstanceDetail(request: DescribeExposedInstanceDetailRequest): Promise<DescribeExposedInstanceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedInstanceDetailWithOptions(request, runtime);
  }

  async describeExposedInstanceListWithOptions(request: DescribeExposedInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedInstanceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.exposureComponent)) {
      query["ExposureComponent"] = request.exposureComponent;
    }

    if (!Util.isUnset(request.exposureIp)) {
      query["ExposureIp"] = request.exposureIp;
    }

    if (!Util.isUnset(request.exposurePort)) {
      query["ExposurePort"] = request.exposurePort;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vulStatus)) {
      query["VulStatus"] = request.vulStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExposedInstanceList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExposedInstanceListResponse>(await this.callApi(params, req, runtime), new DescribeExposedInstanceListResponse({}));
  }

  async describeExposedInstanceList(request: DescribeExposedInstanceListRequest): Promise<DescribeExposedInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedInstanceListWithOptions(request, runtime);
  }

  async describeExposedStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeExposedStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeExposedStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExposedStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeExposedStatisticsResponse({}));
  }

  async describeExposedStatistics(): Promise<DescribeExposedStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedStatisticsWithOptions(runtime);
  }

  async describeExposedStatisticsDetailWithOptions(request: DescribeExposedStatisticsDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedStatisticsDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.statisticsType)) {
      query["StatisticsType"] = request.statisticsType;
    }

    if (!Util.isUnset(request.statisticsTypeGatewayType)) {
      query["StatisticsTypeGatewayType"] = request.statisticsTypeGatewayType;
    }

    if (!Util.isUnset(request.statisticsTypeInstanceValue)) {
      query["StatisticsTypeInstanceValue"] = request.statisticsTypeInstanceValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExposedStatisticsDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExposedStatisticsDetailResponse>(await this.callApi(params, req, runtime), new DescribeExposedStatisticsDetailResponse({}));
  }

  async describeExposedStatisticsDetail(request: DescribeExposedStatisticsDetailRequest): Promise<DescribeExposedStatisticsDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedStatisticsDetailWithOptions(request, runtime);
  }

  async describeFieldStatisticsWithOptions(request: DescribeFieldStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFieldStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.machineTypes)) {
      query["MachineTypes"] = request.machineTypes;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFieldStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFieldStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeFieldStatisticsResponse({}));
  }

  async describeFieldStatistics(request: DescribeFieldStatisticsRequest): Promise<DescribeFieldStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFieldStatisticsWithOptions(request, runtime);
  }

  async describeGroupedContainerInstancesWithOptions(request: DescribeGroupedContainerInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedContainerInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!Util.isUnset(request.groupField)) {
      query["GroupField"] = request.groupField;
    }

    if (!Util.isUnset(request.logicalExp)) {
      query["LogicalExp"] = request.logicalExp;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupedContainerInstances",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupedContainerInstancesResponse>(await this.callApi(params, req, runtime), new DescribeGroupedContainerInstancesResponse({}));
  }

  async describeGroupedContainerInstances(request: DescribeGroupedContainerInstancesRequest): Promise<DescribeGroupedContainerInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedContainerInstancesWithOptions(request, runtime);
  }

  async describeGroupedInstancesWithOptions(request: DescribeGroupedInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!Util.isUnset(request.groupField)) {
      query["GroupField"] = request.groupField;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.machineTypes)) {
      query["MachineTypes"] = request.machineTypes;
    }

    if (!Util.isUnset(request.noPage)) {
      query["NoPage"] = request.noPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupedInstances",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupedInstancesResponse>(await this.callApi(params, req, runtime), new DescribeGroupedInstancesResponse({}));
  }

  async describeGroupedInstances(request: DescribeGroupedInstancesRequest): Promise<DescribeGroupedInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedInstancesWithOptions(request, runtime);
  }

  async describeGroupedMaliciousFilesWithOptions(request: DescribeGroupedMaliciousFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedMaliciousFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.fuzzyMaliciousName)) {
      query["FuzzyMaliciousName"] = request.fuzzyMaliciousName;
    }

    if (!Util.isUnset(request.imageDigest)) {
      query["ImageDigest"] = request.imageDigest;
    }

    if (!Util.isUnset(request.imageLayer)) {
      query["ImageLayer"] = request.imageLayer;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.repoInstanceId)) {
      query["RepoInstanceId"] = request.repoInstanceId;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!Util.isUnset(request.repoNamespace)) {
      query["RepoNamespace"] = request.repoNamespace;
    }

    if (!Util.isUnset(request.repoRegionId)) {
      query["RepoRegionId"] = request.repoRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupedMaliciousFiles",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupedMaliciousFilesResponse>(await this.callApi(params, req, runtime), new DescribeGroupedMaliciousFilesResponse({}));
  }

  async describeGroupedMaliciousFiles(request: DescribeGroupedMaliciousFilesRequest): Promise<DescribeGroupedMaliciousFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedMaliciousFilesWithOptions(request, runtime);
  }

  async describeGroupedTagsWithOptions(request: DescribeGroupedTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.machineTypes)) {
      query["MachineTypes"] = request.machineTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupedTags",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupedTagsResponse>(await this.callApi(params, req, runtime), new DescribeGroupedTagsResponse({}));
  }

  async describeGroupedTags(request: DescribeGroupedTagsRequest): Promise<DescribeGroupedTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedTagsWithOptions(request, runtime);
  }

  async describeGroupedVulWithOptions(request: DescribeGroupedVulRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedVulResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchTags)) {
      query["SearchTags"] = request.searchTags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupedVul",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupedVulResponse>(await this.callApi(params, req, runtime), new DescribeGroupedVulResponse({}));
  }

  async describeGroupedVul(request: DescribeGroupedVulRequest): Promise<DescribeGroupedVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedVulWithOptions(request, runtime);
  }

  async describeHoneyPotAuthWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeHoneyPotAuthResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeHoneyPotAuth",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHoneyPotAuthResponse>(await this.callApi(params, req, runtime), new DescribeHoneyPotAuthResponse({}));
  }

  async describeHoneyPotAuth(): Promise<DescribeHoneyPotAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHoneyPotAuthWithOptions(runtime);
  }

  async describeHoneyPotSuspStatisticsWithOptions(request: DescribeHoneyPotSuspStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHoneyPotSuspStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.statisticsDays)) {
      query["StatisticsDays"] = request.statisticsDays;
    }

    if (!Util.isUnset(request.statisticsKeyType)) {
      query["StatisticsKeyType"] = request.statisticsKeyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHoneyPotSuspStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHoneyPotSuspStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeHoneyPotSuspStatisticsResponse({}));
  }

  async describeHoneyPotSuspStatistics(request: DescribeHoneyPotSuspStatisticsRequest): Promise<DescribeHoneyPotSuspStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHoneyPotSuspStatisticsWithOptions(request, runtime);
  }

  async describeImageBaselineCheckSummaryWithOptions(request: DescribeImageBaselineCheckSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageBaselineCheckSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!Util.isUnset(request.criteriaType)) {
      query["CriteriaType"] = request.criteriaType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageBaselineCheckSummary",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageBaselineCheckSummaryResponse>(await this.callApi(params, req, runtime), new DescribeImageBaselineCheckSummaryResponse({}));
  }

  async describeImageBaselineCheckSummary(request: DescribeImageBaselineCheckSummaryRequest): Promise<DescribeImageBaselineCheckSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageBaselineCheckSummaryWithOptions(request, runtime);
  }

  async describeImageFixTaskWithOptions(request: DescribeImageFixTaskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageFixTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageFixTask",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageFixTaskResponse>(await this.callApi(params, req, runtime), new DescribeImageFixTaskResponse({}));
  }

  async describeImageFixTask(request: DescribeImageFixTaskRequest): Promise<DescribeImageFixTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageFixTaskWithOptions(request, runtime);
  }

  async describeImageGroupedVulListWithOptions(request: DescribeImageGroupedVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageGroupedVulListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.cveId)) {
      query["CveId"] = request.cveId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.imageDigest)) {
      query["ImageDigest"] = request.imageDigest;
    }

    if (!Util.isUnset(request.imageLayer)) {
      query["ImageLayer"] = request.imageLayer;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.isLatest)) {
      query["IsLatest"] = request.isLatest;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.patchId)) {
      query["PatchId"] = request.patchId;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.repoInstanceId)) {
      query["RepoInstanceId"] = request.repoInstanceId;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!Util.isUnset(request.repoNamespace)) {
      query["RepoNamespace"] = request.repoNamespace;
    }

    if (!Util.isUnset(request.repoRegionId)) {
      query["RepoRegionId"] = request.repoRegionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageGroupedVulList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageGroupedVulListResponse>(await this.callApi(params, req, runtime), new DescribeImageGroupedVulListResponse({}));
  }

  async describeImageGroupedVulList(request: DescribeImageGroupedVulListRequest): Promise<DescribeImageGroupedVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageGroupedVulListWithOptions(request, runtime);
  }

  async describeImageListWithBaselineNameWithOptions(request: DescribeImageListWithBaselineNameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageListWithBaselineNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baselineNameKey)) {
      query["BaselineNameKey"] = request.baselineNameKey;
    }

    if (!Util.isUnset(request.criteria)) {
      query["Criteria"] = request.criteria;
    }

    if (!Util.isUnset(request.criteriaType)) {
      query["CriteriaType"] = request.criteriaType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.imageDigest)) {
      query["ImageDigest"] = request.imageDigest;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.repoInstanceId)) {
      query["RepoInstanceId"] = request.repoInstanceId;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!Util.isUnset(request.repoNamespace)) {
      query["RepoNamespace"] = request.repoNamespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageListWithBaselineName",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageListWithBaselineNameResponse>(await this.callApi(params, req, runtime), new DescribeImageListWithBaselineNameResponse({}));
  }

  async describeImageListWithBaselineName(request: DescribeImageListWithBaselineNameRequest): Promise<DescribeImageListWithBaselineNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageListWithBaselineNameWithOptions(request, runtime);
  }

  async describeImageScanAuthCountWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeImageScanAuthCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeImageScanAuthCount",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageScanAuthCountResponse>(await this.callApi(params, req, runtime), new DescribeImageScanAuthCountResponse({}));
  }

  async describeImageScanAuthCount(): Promise<DescribeImageScanAuthCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageScanAuthCountWithOptions(runtime);
  }

  async describeImageStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeImageStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeImageStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeImageStatisticsResponse({}));
  }

  async describeImageStatistics(): Promise<DescribeImageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageStatisticsWithOptions(runtime);
  }

  async describeImageVulListWithOptions(request: DescribeImageVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageVulListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.repoInstanceId)) {
      query["RepoInstanceId"] = request.repoInstanceId;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!Util.isUnset(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!Util.isUnset(request.repoNamespace)) {
      query["RepoNamespace"] = request.repoNamespace;
    }

    if (!Util.isUnset(request.repoRegionId)) {
      query["RepoRegionId"] = request.repoRegionId;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageVulList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageVulListResponse>(await this.callApi(params, req, runtime), new DescribeImageVulListResponse({}));
  }

  async describeImageVulList(request: DescribeImageVulListRequest): Promise<DescribeImageVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageVulListWithOptions(request, runtime);
  }

  async describeInstallCaptchaWithOptions(request: DescribeInstallCaptchaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstallCaptchaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deadline)) {
      query["Deadline"] = request.deadline;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstallCaptcha",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstallCaptchaResponse>(await this.callApi(params, req, runtime), new DescribeInstallCaptchaResponse({}));
  }

  async describeInstallCaptcha(request: DescribeInstallCaptchaRequest): Promise<DescribeInstallCaptchaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstallCaptchaWithOptions(request, runtime);
  }

  async describeInstallCodesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeInstallCodesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeInstallCodes",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstallCodesResponse>(await this.callApi(params, req, runtime), new DescribeInstallCodesResponse({}));
  }

  async describeInstallCodes(): Promise<DescribeInstallCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstallCodesWithOptions(runtime);
  }

  async describeInstanceAntiBruteForceRulesWithOptions(request: DescribeInstanceAntiBruteForceRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceAntiBruteForceRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceAntiBruteForceRules",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceAntiBruteForceRulesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAntiBruteForceRulesResponse({}));
  }

  async describeInstanceAntiBruteForceRules(request: DescribeInstanceAntiBruteForceRulesRequest): Promise<DescribeInstanceAntiBruteForceRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceAntiBruteForceRulesWithOptions(request, runtime);
  }

  async describeInstanceStatisticsWithOptions(request: DescribeInstanceStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceStatisticsResponse({}));
  }

  async describeInstanceStatistics(request: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceStatisticsWithOptions(request, runtime);
  }

  async describeIpInfoWithOptions(request: DescribeIpInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIpInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.field)) {
      query["Field"] = request.field;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIpInfo",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIpInfoResponse>(await this.callApi(params, req, runtime), new DescribeIpInfoResponse({}));
  }

  async describeIpInfo(request: DescribeIpInfoRequest): Promise<DescribeIpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIpInfoWithOptions(request, runtime);
  }

  async describeLogstoreStorageWithOptions(request: DescribeLogstoreStorageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogstoreStorageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogstoreStorage",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogstoreStorageResponse>(await this.callApi(params, req, runtime), new DescribeLogstoreStorageResponse({}));
  }

  async describeLogstoreStorage(request: DescribeLogstoreStorageRequest): Promise<DescribeLogstoreStorageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogstoreStorageWithOptions(request, runtime);
  }

  async describeModuleConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeModuleConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeModuleConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeModuleConfigResponse>(await this.callApi(params, req, runtime), new DescribeModuleConfigResponse({}));
  }

  async describeModuleConfig(): Promise<DescribeModuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModuleConfigWithOptions(runtime);
  }

  async describeNoticeConfigWithOptions(request: DescribeNoticeConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNoticeConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNoticeConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNoticeConfigResponse>(await this.callApi(params, req, runtime), new DescribeNoticeConfigResponse({}));
  }

  async describeNoticeConfig(request: DescribeNoticeConfigRequest): Promise<DescribeNoticeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNoticeConfigWithOptions(request, runtime);
  }

  async describePropertyCountWithOptions(request: DescribePropertyCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyCount",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyCountResponse>(await this.callApi(params, req, runtime), new DescribePropertyCountResponse({}));
  }

  async describePropertyCount(request: DescribePropertyCountRequest): Promise<DescribePropertyCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyCountWithOptions(request, runtime);
  }

  async describePropertyCronDetailWithOptions(request: DescribePropertyCronDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyCronDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyCronDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyCronDetailResponse>(await this.callApi(params, req, runtime), new DescribePropertyCronDetailResponse({}));
  }

  async describePropertyCronDetail(request: DescribePropertyCronDetailRequest): Promise<DescribePropertyCronDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyCronDetailWithOptions(request, runtime);
  }

  async describePropertyPortDetailWithOptions(request: DescribePropertyPortDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyPortDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bindIp)) {
      query["BindIp"] = request.bindIp;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.procName)) {
      query["ProcName"] = request.procName;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyPortDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyPortDetailResponse>(await this.callApi(params, req, runtime), new DescribePropertyPortDetailResponse({}));
  }

  async describePropertyPortDetail(request: DescribePropertyPortDetailRequest): Promise<DescribePropertyPortDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyPortDetailWithOptions(request, runtime);
  }

  async describePropertyPortItemWithOptions(request: DescribePropertyPortItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyPortItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.forceFlush)) {
      query["ForceFlush"] = request.forceFlush;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyPortItem",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyPortItemResponse>(await this.callApi(params, req, runtime), new DescribePropertyPortItemResponse({}));
  }

  async describePropertyPortItem(request: DescribePropertyPortItemRequest): Promise<DescribePropertyPortItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyPortItemWithOptions(request, runtime);
  }

  async describePropertyProcDetailWithOptions(request: DescribePropertyProcDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyProcDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cmdline)) {
      query["Cmdline"] = request.cmdline;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.procTimeEnd)) {
      query["ProcTimeEnd"] = request.procTimeEnd;
    }

    if (!Util.isUnset(request.procTimeStart)) {
      query["ProcTimeStart"] = request.procTimeStart;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyProcDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyProcDetailResponse>(await this.callApi(params, req, runtime), new DescribePropertyProcDetailResponse({}));
  }

  async describePropertyProcDetail(request: DescribePropertyProcDetailRequest): Promise<DescribePropertyProcDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyProcDetailWithOptions(request, runtime);
  }

  async describePropertyProcItemWithOptions(request: DescribePropertyProcItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyProcItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.forceFlush)) {
      query["ForceFlush"] = request.forceFlush;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyProcItem",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyProcItemResponse>(await this.callApi(params, req, runtime), new DescribePropertyProcItemResponse({}));
  }

  async describePropertyProcItem(request: DescribePropertyProcItemRequest): Promise<DescribePropertyProcItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyProcItemWithOptions(request, runtime);
  }

  async describePropertyScaDetailWithOptions(request: DescribePropertyScaDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyScaDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.biz)) {
      query["Biz"] = request.biz;
    }

    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.processStartedEnd)) {
      query["ProcessStartedEnd"] = request.processStartedEnd;
    }

    if (!Util.isUnset(request.processStartedStart)) {
      query["ProcessStartedStart"] = request.processStartedStart;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.scaName)) {
      query["ScaName"] = request.scaName;
    }

    if (!Util.isUnset(request.scaNamePattern)) {
      query["ScaNamePattern"] = request.scaNamePattern;
    }

    if (!Util.isUnset(request.scaVersion)) {
      query["ScaVersion"] = request.scaVersion;
    }

    if (!Util.isUnset(request.searchInfo)) {
      query["SearchInfo"] = request.searchInfo;
    }

    if (!Util.isUnset(request.searchInfoSub)) {
      query["SearchInfoSub"] = request.searchInfoSub;
    }

    if (!Util.isUnset(request.searchItem)) {
      query["SearchItem"] = request.searchItem;
    }

    if (!Util.isUnset(request.searchItemSub)) {
      query["SearchItemSub"] = request.searchItemSub;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyScaDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyScaDetailResponse>(await this.callApi(params, req, runtime), new DescribePropertyScaDetailResponse({}));
  }

  async describePropertyScaDetail(request: DescribePropertyScaDetailRequest): Promise<DescribePropertyScaDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyScaDetailWithOptions(request, runtime);
  }

  async describePropertySoftwareDetailWithOptions(request: DescribePropertySoftwareDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertySoftwareDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.installTimeEnd)) {
      query["InstallTimeEnd"] = request.installTimeEnd;
    }

    if (!Util.isUnset(request.installTimeStart)) {
      query["InstallTimeStart"] = request.installTimeStart;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.softwareVersion)) {
      query["SoftwareVersion"] = request.softwareVersion;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertySoftwareDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertySoftwareDetailResponse>(await this.callApi(params, req, runtime), new DescribePropertySoftwareDetailResponse({}));
  }

  async describePropertySoftwareDetail(request: DescribePropertySoftwareDetailRequest): Promise<DescribePropertySoftwareDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertySoftwareDetailWithOptions(request, runtime);
  }

  async describePropertySoftwareItemWithOptions(request: DescribePropertySoftwareItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertySoftwareItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.forceFlush)) {
      query["ForceFlush"] = request.forceFlush;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertySoftwareItem",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertySoftwareItemResponse>(await this.callApi(params, req, runtime), new DescribePropertySoftwareItemResponse({}));
  }

  async describePropertySoftwareItem(request: DescribePropertySoftwareItemRequest): Promise<DescribePropertySoftwareItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertySoftwareItemWithOptions(request, runtime);
  }

  async describePropertyUsageNewestWithOptions(request: DescribePropertyUsageNewestRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyUsageNewestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyUsageNewest",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyUsageNewestResponse>(await this.callApi(params, req, runtime), new DescribePropertyUsageNewestResponse({}));
  }

  async describePropertyUsageNewest(request: DescribePropertyUsageNewestRequest): Promise<DescribePropertyUsageNewestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyUsageNewestWithOptions(request, runtime);
  }

  async describePropertyUserDetailWithOptions(request: DescribePropertyUserDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyUserDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.isRoot)) {
      query["IsRoot"] = request.isRoot;
    }

    if (!Util.isUnset(request.lastLoginTimeEnd)) {
      query["LastLoginTimeEnd"] = request.lastLoginTimeEnd;
    }

    if (!Util.isUnset(request.lastLoginTimeStart)) {
      query["LastLoginTimeStart"] = request.lastLoginTimeStart;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyUserDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyUserDetailResponse>(await this.callApi(params, req, runtime), new DescribePropertyUserDetailResponse({}));
  }

  async describePropertyUserDetail(request: DescribePropertyUserDetailRequest): Promise<DescribePropertyUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyUserDetailWithOptions(request, runtime);
  }

  async describePropertyUserItemWithOptions(request: DescribePropertyUserItemRequest, runtime: $Util.RuntimeOptions): Promise<DescribePropertyUserItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.forceFlush)) {
      query["ForceFlush"] = request.forceFlush;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePropertyUserItem",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePropertyUserItemResponse>(await this.callApi(params, req, runtime), new DescribePropertyUserItemResponse({}));
  }

  async describePropertyUserItem(request: DescribePropertyUserItemRequest): Promise<DescribePropertyUserItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePropertyUserItemWithOptions(request, runtime);
  }

  async describeRestoreJobsWithOptions(request: DescribeRestoreJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRestoreJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.machineRemark)) {
      query["MachineRemark"] = request.machineRemark;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRestoreJobs",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRestoreJobsResponse>(await this.callApi(params, req, runtime), new DescribeRestoreJobsResponse({}));
  }

  async describeRestoreJobs(request: DescribeRestoreJobsRequest): Promise<DescribeRestoreJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRestoreJobsWithOptions(request, runtime);
  }

  async describeRiskCheckItemResultWithOptions(request: DescribeRiskCheckItemResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskCheckItemResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskCheckItemResult",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskCheckItemResultResponse>(await this.callApi(params, req, runtime), new DescribeRiskCheckItemResultResponse({}));
  }

  async describeRiskCheckItemResult(request: DescribeRiskCheckItemResultRequest): Promise<DescribeRiskCheckItemResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskCheckItemResultWithOptions(request, runtime);
  }

  async describeRiskCheckResultWithOptions(request: DescribeRiskCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskCheckResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.itemIds)) {
      query["ItemIds"] = request.itemIds;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryFlag)) {
      query["QueryFlag"] = request.queryFlag;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskCheckResult",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskCheckResultResponse>(await this.callApi(params, req, runtime), new DescribeRiskCheckResultResponse({}));
  }

  async describeRiskCheckResult(request: DescribeRiskCheckResultRequest): Promise<DescribeRiskCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskCheckResultWithOptions(request, runtime);
  }

  async describeRiskCheckSummaryWithOptions(request: DescribeRiskCheckSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskCheckSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceDirectoryAccountId)) {
      query["ResourceDirectoryAccountId"] = request.resourceDirectoryAccountId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskCheckSummary",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskCheckSummaryResponse>(await this.callApi(params, req, runtime), new DescribeRiskCheckSummaryResponse({}));
  }

  async describeRiskCheckSummary(request: DescribeRiskCheckSummaryRequest): Promise<DescribeRiskCheckSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskCheckSummaryWithOptions(request, runtime);
  }

  async describeRiskItemTypeWithOptions(request: DescribeRiskItemTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskItemTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskItemType",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskItemTypeResponse>(await this.callApi(params, req, runtime), new DescribeRiskItemTypeResponse({}));
  }

  async describeRiskItemType(request: DescribeRiskItemTypeRequest): Promise<DescribeRiskItemTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskItemTypeWithOptions(request, runtime);
  }

  async describeRiskListCheckResultWithOptions(request: DescribeRiskListCheckResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskListCheckResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskListCheckResult",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskListCheckResultResponse>(await this.callApi(params, req, runtime), new DescribeRiskListCheckResultResponse({}));
  }

  async describeRiskListCheckResult(request: DescribeRiskListCheckResultRequest): Promise<DescribeRiskListCheckResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskListCheckResultWithOptions(request, runtime);
  }

  async describeScanTaskProgressWithOptions(request: DescribeScanTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScanTaskProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScanTaskProgress",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScanTaskProgressResponse>(await this.callApi(params, req, runtime), new DescribeScanTaskProgressResponse({}));
  }

  async describeScanTaskProgress(request: DescribeScanTaskProgressRequest): Promise<DescribeScanTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScanTaskProgressWithOptions(request, runtime);
  }

  async describeSearchConditionWithOptions(request: DescribeSearchConditionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSearchConditionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSearchCondition",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSearchConditionResponse>(await this.callApi(params, req, runtime), new DescribeSearchConditionResponse({}));
  }

  async describeSearchCondition(request: DescribeSearchConditionRequest): Promise<DescribeSearchConditionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSearchConditionWithOptions(request, runtime);
  }

  async describeSecureSuggestionWithOptions(request: DescribeSecureSuggestionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecureSuggestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecureSuggestion",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecureSuggestionResponse>(await this.callApi(params, req, runtime), new DescribeSecureSuggestionResponse({}));
  }

  async describeSecureSuggestion(request: DescribeSecureSuggestionRequest): Promise<DescribeSecureSuggestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecureSuggestionWithOptions(request, runtime);
  }

  async describeSecurityCheckScheduleConfigWithOptions(request: DescribeSecurityCheckScheduleConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityCheckScheduleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityCheckScheduleConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityCheckScheduleConfigResponse>(await this.callApi(params, req, runtime), new DescribeSecurityCheckScheduleConfigResponse({}));
  }

  async describeSecurityCheckScheduleConfig(request: DescribeSecurityCheckScheduleConfigRequest): Promise<DescribeSecurityCheckScheduleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityCheckScheduleConfigWithOptions(request, runtime);
  }

  async describeSecurityEventOperationStatusWithOptions(request: DescribeSecurityEventOperationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityEventIds)) {
      query["SecurityEventIds"] = request.securityEventIds;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityEventOperationStatus",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityEventOperationStatusResponse>(await this.callApi(params, req, runtime), new DescribeSecurityEventOperationStatusResponse({}));
  }

  async describeSecurityEventOperationStatus(request: DescribeSecurityEventOperationStatusRequest): Promise<DescribeSecurityEventOperationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationStatusWithOptions(request, runtime);
  }

  async describeSecurityEventOperationsWithOptions(request: DescribeSecurityEventOperationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityEventOperations",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityEventOperationsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityEventOperationsResponse({}));
  }

  async describeSecurityEventOperations(request: DescribeSecurityEventOperationsRequest): Promise<DescribeSecurityEventOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationsWithOptions(request, runtime);
  }

  async describeSecurityStatInfoWithOptions(request: DescribeSecurityStatInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityStatInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceDirectoryAccountId)) {
      query["ResourceDirectoryAccountId"] = request.resourceDirectoryAccountId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityStatInfo",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityStatInfoResponse>(await this.callApi(params, req, runtime), new DescribeSecurityStatInfoResponse({}));
  }

  async describeSecurityStatInfo(request: DescribeSecurityStatInfoRequest): Promise<DescribeSecurityStatInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityStatInfoWithOptions(request, runtime);
  }

  async describeServiceLinkedRoleStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeServiceLinkedRoleStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeServiceLinkedRoleStatus",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceLinkedRoleStatusResponse>(await this.callApi(params, req, runtime), new DescribeServiceLinkedRoleStatusResponse({}));
  }

  async describeServiceLinkedRoleStatus(): Promise<DescribeServiceLinkedRoleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleStatusWithOptions(runtime);
  }

  async describeSimilarEventScenariosWithOptions(request: DescribeSimilarEventScenariosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSimilarEventScenariosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSimilarEventScenarios",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSimilarEventScenariosResponse>(await this.callApi(params, req, runtime), new DescribeSimilarEventScenariosResponse({}));
  }

  async describeSimilarEventScenarios(request: DescribeSimilarEventScenariosRequest): Promise<DescribeSimilarEventScenariosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSimilarEventScenariosWithOptions(request, runtime);
  }

  async describeSimilarSecurityEventsWithOptions(request: DescribeSimilarSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSimilarSecurityEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSimilarSecurityEvents",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSimilarSecurityEventsResponse>(await this.callApi(params, req, runtime), new DescribeSimilarSecurityEventsResponse({}));
  }

  async describeSimilarSecurityEvents(request: DescribeSimilarSecurityEventsRequest): Promise<DescribeSimilarSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSimilarSecurityEventsWithOptions(request, runtime);
  }

  async describeStrategyWithOptions(request: DescribeStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customType)) {
      query["CustomType"] = request.customType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.strategyIds)) {
      query["StrategyIds"] = request.strategyIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStrategy",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStrategyResponse>(await this.callApi(params, req, runtime), new DescribeStrategyResponse({}));
  }

  async describeStrategy(request: DescribeStrategyRequest): Promise<DescribeStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyWithOptions(request, runtime);
  }

  async describeStrategyExecDetailWithOptions(request: DescribeStrategyExecDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyExecDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStrategyExecDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStrategyExecDetailResponse>(await this.callApi(params, req, runtime), new DescribeStrategyExecDetailResponse({}));
  }

  async describeStrategyExecDetail(request: DescribeStrategyExecDetailRequest): Promise<DescribeStrategyExecDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyExecDetailWithOptions(request, runtime);
  }

  async describeStrategyTargetWithOptions(request: DescribeStrategyTargetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStrategyTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStrategyTarget",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStrategyTargetResponse>(await this.callApi(params, req, runtime), new DescribeStrategyTargetResponse({}));
  }

  async describeStrategyTarget(request: DescribeStrategyTargetRequest): Promise<DescribeStrategyTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStrategyTargetWithOptions(request, runtime);
  }

  async describeSummaryInfoWithOptions(request: DescribeSummaryInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSummaryInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceDirectoryAccountId)) {
      query["ResourceDirectoryAccountId"] = request.resourceDirectoryAccountId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSummaryInfo",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSummaryInfoResponse>(await this.callApi(params, req, runtime), new DescribeSummaryInfoResponse({}));
  }

  async describeSummaryInfo(request: DescribeSummaryInfoRequest): Promise<DescribeSummaryInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSummaryInfoWithOptions(request, runtime);
  }

  async describeSupportRegionWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeSupportRegionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeSupportRegion",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSupportRegionResponse>(await this.callApi(params, req, runtime), new DescribeSupportRegionResponse({}));
  }

  async describeSupportRegion(): Promise<DescribeSupportRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSupportRegionWithOptions(runtime);
  }

  async describeSuspEventDetailWithOptions(request: DescribeSuspEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.suspiciousEventId)) {
      query["SuspiciousEventId"] = request.suspiciousEventId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspEventDetail",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspEventDetailResponse>(await this.callApi(params, req, runtime), new DescribeSuspEventDetailResponse({}));
  }

  async describeSuspEventDetail(request: DescribeSuspEventDetailRequest): Promise<DescribeSuspEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventDetailWithOptions(request, runtime);
  }

  async describeSuspEventQuaraFilesWithOptions(request: DescribeSuspEventQuaraFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventQuaraFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupingId)) {
      query["GroupingId"] = request.groupingId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.quaraTag)) {
      query["QuaraTag"] = request.quaraTag;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspEventQuaraFiles",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspEventQuaraFilesResponse>(await this.callApi(params, req, runtime), new DescribeSuspEventQuaraFilesResponse({}));
  }

  async describeSuspEventQuaraFiles(request: DescribeSuspEventQuaraFilesRequest): Promise<DescribeSuspEventQuaraFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventQuaraFilesWithOptions(request, runtime);
  }

  async describeSuspEventsWithOptions(request: DescribeSuspEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmUniqueInfo)) {
      query["AlarmUniqueInfo"] = request.alarmUniqueInfo;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.containerFieldName)) {
      query["ContainerFieldName"] = request.containerFieldName;
    }

    if (!Util.isUnset(request.containerFieldValue)) {
      query["ContainerFieldValue"] = request.containerFieldValue;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.eventNames)) {
      query["EventNames"] = request.eventNames;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operateErrorCodeList)) {
      query["OperateErrorCodeList"] = request.operateErrorCodeList;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentEventTypes)) {
      query["ParentEventTypes"] = request.parentEventTypes;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.uniqueInfo)) {
      query["UniqueInfo"] = request.uniqueInfo;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tacticId)) {
      body["TacticId"] = request.tacticId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspEvents",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspEventsResponse>(await this.callApi(params, req, runtime), new DescribeSuspEventsResponse({}));
  }

  async describeSuspEvents(request: DescribeSuspEventsRequest): Promise<DescribeSuspEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  async describeSuspiciousUUIDConfigWithOptions(request: DescribeSuspiciousUUIDConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspiciousUUIDConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspiciousUUIDConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspiciousUUIDConfigResponse>(await this.callApi(params, req, runtime), new DescribeSuspiciousUUIDConfigResponse({}));
  }

  async describeSuspiciousUUIDConfig(request: DescribeSuspiciousUUIDConfigRequest): Promise<DescribeSuspiciousUUIDConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspiciousUUIDConfigWithOptions(request, runtime);
  }

  async describeUserBackupMachinesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUserBackupMachinesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeUserBackupMachines",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserBackupMachinesResponse>(await this.callApi(params, req, runtime), new DescribeUserBackupMachinesResponse({}));
  }

  async describeUserBackupMachines(): Promise<DescribeUserBackupMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBackupMachinesWithOptions(runtime);
  }

  async describeUserBaselineAuthorizationWithOptions(request: DescribeUserBaselineAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserBaselineAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserBaselineAuthorization",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserBaselineAuthorizationResponse>(await this.callApi(params, req, runtime), new DescribeUserBaselineAuthorizationResponse({}));
  }

  async describeUserBaselineAuthorization(request: DescribeUserBaselineAuthorizationRequest): Promise<DescribeUserBaselineAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserBaselineAuthorizationWithOptions(request, runtime);
  }

  async describeUserLayoutAuthorizationWithOptions(request: DescribeUserLayoutAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserLayoutAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserLayoutAuthorization",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserLayoutAuthorizationResponse>(await this.callApi(params, req, runtime), new DescribeUserLayoutAuthorizationResponse({}));
  }

  async describeUserLayoutAuthorization(request: DescribeUserLayoutAuthorizationRequest): Promise<DescribeUserLayoutAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserLayoutAuthorizationWithOptions(request, runtime);
  }

  async describeVersionConfigWithOptions(request: DescribeVersionConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVersionConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceDirectoryAccountId)) {
      query["ResourceDirectoryAccountId"] = request.resourceDirectoryAccountId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVersionConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVersionConfigResponse>(await this.callApi(params, req, runtime), new DescribeVersionConfigResponse({}));
  }

  async describeVersionConfig(request: DescribeVersionConfigRequest): Promise<DescribeVersionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVersionConfigWithOptions(request, runtime);
  }

  async describeVolDingdingMessageWithOptions(request: DescribeVolDingdingMessageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVolDingdingMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVolDingdingMessage",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVolDingdingMessageResponse>(await this.callApi(params, req, runtime), new DescribeVolDingdingMessageResponse({}));
  }

  async describeVolDingdingMessage(request: DescribeVolDingdingMessageRequest): Promise<DescribeVolDingdingMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVolDingdingMessageWithOptions(request, runtime);
  }

  async describeVpcHoneyPotCriteriaWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVpcHoneyPotCriteriaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeVpcHoneyPotCriteria",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcHoneyPotCriteriaResponse>(await this.callApi(params, req, runtime), new DescribeVpcHoneyPotCriteriaResponse({}));
  }

  async describeVpcHoneyPotCriteria(): Promise<DescribeVpcHoneyPotCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcHoneyPotCriteriaWithOptions(runtime);
  }

  async describeVpcHoneyPotListWithOptions(request: DescribeVpcHoneyPotListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcHoneyPotListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.honeyPotExistence)) {
      query["HoneyPotExistence"] = request.honeyPotExistence;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcName)) {
      query["VpcName"] = request.vpcName;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVpcHoneyPotList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcHoneyPotListResponse>(await this.callApi(params, req, runtime), new DescribeVpcHoneyPotListResponse({}));
  }

  async describeVpcHoneyPotList(request: DescribeVpcHoneyPotListRequest): Promise<DescribeVpcHoneyPotListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcHoneyPotListWithOptions(request, runtime);
  }

  async describeVpcListWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVpcListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeVpcList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVpcListResponse>(await this.callApi(params, req, runtime), new DescribeVpcListResponse({}));
  }

  async describeVpcList(): Promise<DescribeVpcListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcListWithOptions(runtime);
  }

  async describeVulDetailsWithOptions(request: DescribeVulDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulDetails",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulDetailsResponse>(await this.callApi(params, req, runtime), new DescribeVulDetailsResponse({}));
  }

  async describeVulDetails(request: DescribeVulDetailsRequest): Promise<DescribeVulDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulDetailsWithOptions(request, runtime);
  }

  async describeVulExportInfoWithOptions(request: DescribeVulExportInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulExportInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulExportInfo",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulExportInfoResponse>(await this.callApi(params, req, runtime), new DescribeVulExportInfoResponse({}));
  }

  async describeVulExportInfo(request: DescribeVulExportInfoRequest): Promise<DescribeVulExportInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulExportInfoWithOptions(request, runtime);
  }

  async describeVulListWithOptions(request: DescribeVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.attachTypes)) {
      query["AttachTypes"] = request.attachTypes;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    if (!Util.isUnset(request.vpcInstanceIds)) {
      query["VpcInstanceIds"] = request.vpcInstanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulListResponse>(await this.callApi(params, req, runtime), new DescribeVulListResponse({}));
  }

  async describeVulList(request: DescribeVulListRequest): Promise<DescribeVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulListWithOptions(request, runtime);
  }

  async describeVulWhitelistWithOptions(request: DescribeVulWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulWhitelist",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulWhitelistResponse>(await this.callApi(params, req, runtime), new DescribeVulWhitelistResponse({}));
  }

  async describeVulWhitelist(request: DescribeVulWhitelistRequest): Promise<DescribeVulWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulWhitelistWithOptions(request, runtime);
  }

  async describeWarningMachinesWithOptions(request: DescribeWarningMachinesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWarningMachinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.machineName)) {
      query["MachineName"] = request.machineName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskId)) {
      query["RiskId"] = request.riskId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.strategyId)) {
      query["StrategyId"] = request.strategyId;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWarningMachines",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWarningMachinesResponse>(await this.callApi(params, req, runtime), new DescribeWarningMachinesResponse({}));
  }

  async describeWarningMachines(request: DescribeWarningMachinesRequest): Promise<DescribeWarningMachinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWarningMachinesWithOptions(request, runtime);
  }

  async describeWebLockBindListWithOptions(request: DescribeWebLockBindListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebLockBindListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebLockBindList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebLockBindListResponse>(await this.callApi(params, req, runtime), new DescribeWebLockBindListResponse({}));
  }

  async describeWebLockBindList(request: DescribeWebLockBindListRequest): Promise<DescribeWebLockBindListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebLockBindListWithOptions(request, runtime);
  }

  async describeWebLockConfigListWithOptions(request: DescribeWebLockConfigListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebLockConfigListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWebLockConfigList",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWebLockConfigListResponse>(await this.callApi(params, req, runtime), new DescribeWebLockConfigListResponse({}));
  }

  async describeWebLockConfigList(request: DescribeWebLockConfigListRequest): Promise<DescribeWebLockConfigListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebLockConfigListWithOptions(request, runtime);
  }

  async exportRecordWithOptions(request: ExportRecordRequest, runtime: $Util.RuntimeOptions): Promise<ExportRecordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportRecord",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportRecordResponse>(await this.callApi(params, req, runtime), new ExportRecordResponse({}));
  }

  async exportRecord(request: ExportRecordRequest): Promise<ExportRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportRecordWithOptions(request, runtime);
  }

  async exportVulWithOptions(request: ExportVulRequest, runtime: $Util.RuntimeOptions): Promise<ExportVulResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.attachTypes)) {
      query["AttachTypes"] = request.attachTypes;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.searchTags)) {
      query["SearchTags"] = request.searchTags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    if (!Util.isUnset(request.vpcInstanceIds)) {
      query["VpcInstanceIds"] = request.vpcInstanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportVul",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportVulResponse>(await this.callApi(params, req, runtime), new ExportVulResponse({}));
  }

  async exportVul(request: ExportVulRequest): Promise<ExportVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportVulWithOptions(request, runtime);
  }

  async fixCheckWarningsWithOptions(request: FixCheckWarningsRequest, runtime: $Util.RuntimeOptions): Promise<FixCheckWarningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkParams)) {
      query["CheckParams"] = request.checkParams;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.riskId)) {
      query["RiskId"] = request.riskId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FixCheckWarnings",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FixCheckWarningsResponse>(await this.callApi(params, req, runtime), new FixCheckWarningsResponse({}));
  }

  async fixCheckWarnings(request: FixCheckWarningsRequest): Promise<FixCheckWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fixCheckWarningsWithOptions(request, runtime);
  }

  async getBackupStorageCountWithOptions(runtime: $Util.RuntimeOptions): Promise<GetBackupStorageCountResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetBackupStorageCount",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBackupStorageCountResponse>(await this.callApi(params, req, runtime), new GetBackupStorageCountResponse({}));
  }

  async getBackupStorageCount(): Promise<GetBackupStorageCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackupStorageCountWithOptions(runtime);
  }

  async getSuspiciousStatisticsWithOptions(request: GetSuspiciousStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetSuspiciousStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSuspiciousStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSuspiciousStatisticsResponse>(await this.callApi(params, req, runtime), new GetSuspiciousStatisticsResponse({}));
  }

  async getSuspiciousStatistics(request: GetSuspiciousStatisticsRequest): Promise<GetSuspiciousStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSuspiciousStatisticsWithOptions(request, runtime);
  }

  async getVulStatisticsWithOptions(request: GetVulStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetVulStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupIdList)) {
      query["GroupIdList"] = request.groupIdList;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.typeList)) {
      query["TypeList"] = request.typeList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVulStatistics",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVulStatisticsResponse>(await this.callApi(params, req, runtime), new GetVulStatisticsResponse({}));
  }

  async getVulStatistics(request: GetVulStatisticsRequest): Promise<GetVulStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVulStatisticsWithOptions(request, runtime);
  }

  async handleSecurityEventsWithOptions(request: HandleSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<HandleSecurityEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.markBatch)) {
      query["MarkBatch"] = request.markBatch;
    }

    if (!Util.isUnset(request.markMissParam)) {
      query["MarkMissParam"] = request.markMissParam;
    }

    if (!Util.isUnset(request.operationCode)) {
      query["OperationCode"] = request.operationCode;
    }

    if (!Util.isUnset(request.operationParams)) {
      query["OperationParams"] = request.operationParams;
    }

    if (!Util.isUnset(request.securityEventIds)) {
      query["SecurityEventIds"] = request.securityEventIds;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleSecurityEvents",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleSecurityEventsResponse>(await this.callApi(params, req, runtime), new HandleSecurityEventsResponse({}));
  }

  async handleSecurityEvents(request: HandleSecurityEventsRequest): Promise<HandleSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleSecurityEventsWithOptions(request, runtime);
  }

  async handleSimilarSecurityEventsWithOptions(request: HandleSimilarSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<HandleSimilarSecurityEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.markMissParam)) {
      query["MarkMissParam"] = request.markMissParam;
    }

    if (!Util.isUnset(request.operationCode)) {
      query["OperationCode"] = request.operationCode;
    }

    if (!Util.isUnset(request.operationParams)) {
      query["OperationParams"] = request.operationParams;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleSimilarSecurityEvents",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleSimilarSecurityEventsResponse>(await this.callApi(params, req, runtime), new HandleSimilarSecurityEventsResponse({}));
  }

  async handleSimilarSecurityEvents(request: HandleSimilarSecurityEventsRequest): Promise<HandleSimilarSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleSimilarSecurityEventsWithOptions(request, runtime);
  }

  async ignoreHcCheckWarningsWithOptions(request: IgnoreHcCheckWarningsRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreHcCheckWarningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkIds)) {
      query["CheckIds"] = request.checkIds;
    }

    if (!Util.isUnset(request.checkWarningIds)) {
      query["CheckWarningIds"] = request.checkWarningIds;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.riskId)) {
      query["RiskId"] = request.riskId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IgnoreHcCheckWarnings",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IgnoreHcCheckWarningsResponse>(await this.callApi(params, req, runtime), new IgnoreHcCheckWarningsResponse({}));
  }

  async ignoreHcCheckWarnings(request: IgnoreHcCheckWarningsRequest): Promise<IgnoreHcCheckWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreHcCheckWarningsWithOptions(request, runtime);
  }

  async installBackupClientWithOptions(request: InstallBackupClientRequest, runtime: $Util.RuntimeOptions): Promise<InstallBackupClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallBackupClient",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallBackupClientResponse>(await this.callApi(params, req, runtime), new InstallBackupClientResponse({}));
  }

  async installBackupClient(request: InstallBackupClientRequest): Promise<InstallBackupClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installBackupClientWithOptions(request, runtime);
  }

  async modifyAntiBruteForceRuleWithOptions(request: ModifyAntiBruteForceRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAntiBruteForceRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!Util.isUnset(request.failCount)) {
      query["FailCount"] = request.failCount;
    }

    if (!Util.isUnset(request.forbiddenTime)) {
      query["ForbiddenTime"] = request.forbiddenTime;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.span)) {
      query["Span"] = request.span;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAntiBruteForceRule",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAntiBruteForceRuleResponse>(await this.callApi(params, req, runtime), new ModifyAntiBruteForceRuleResponse({}));
  }

  async modifyAntiBruteForceRule(request: ModifyAntiBruteForceRuleRequest): Promise<ModifyAntiBruteForceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAntiBruteForceRuleWithOptions(request, runtime);
  }

  async modifyAssetGroupWithOptions(request: ModifyAssetGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAssetGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAssetGroup",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAssetGroupResponse>(await this.callApi(params, req, runtime), new ModifyAssetGroupResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyShrink)) {
      query["Policy"] = request.policyShrink;
    }

    if (!Util.isUnset(request.policyRegionId)) {
      query["PolicyRegionId"] = request.policyRegionId;
    }

    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPolicy",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyBackupPolicyResponse({}));
  }

  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  async modifyBackupPolicyStatusWithOptions(request: ModifyBackupPolicyStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBackupPolicyStatus",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPolicyStatusResponse>(await this.callApi(params, req, runtime), new ModifyBackupPolicyStatusResponse({}));
  }

  async modifyBackupPolicyStatus(request: ModifyBackupPolicyStatusRequest): Promise<ModifyBackupPolicyStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyStatusWithOptions(request, runtime);
  }

  async modifyCreateVulWhitelistWithOptions(request: ModifyCreateVulWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<ModifyCreateVulWhitelistResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.targetInfo)) {
      query["TargetInfo"] = request.targetInfo;
    }

    if (!Util.isUnset(request.whitelist)) {
      query["Whitelist"] = request.whitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyCreateVulWhitelist",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyCreateVulWhitelistResponse>(await this.callApi(params, req, runtime), new ModifyCreateVulWhitelistResponse({}));
  }

  async modifyCreateVulWhitelist(request: ModifyCreateVulWhitelistRequest): Promise<ModifyCreateVulWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyCreateVulWhitelistWithOptions(request, runtime);
  }

  async modifyEmgVulSubmitWithOptions(request: ModifyEmgVulSubmitRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEmgVulSubmitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.userAgreement)) {
      query["UserAgreement"] = request.userAgreement;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEmgVulSubmit",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEmgVulSubmitResponse>(await this.callApi(params, req, runtime), new ModifyEmgVulSubmitResponse({}));
  }

  async modifyEmgVulSubmit(request: ModifyEmgVulSubmitRequest): Promise<ModifyEmgVulSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEmgVulSubmitWithOptions(request, runtime);
  }

  async modifyGroupPropertyWithOptions(request: ModifyGroupPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupPropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.data)) {
      query["Data"] = request.data;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGroupProperty",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGroupPropertyResponse>(await this.callApi(params, req, runtime), new ModifyGroupPropertyResponse({}));
  }

  async modifyGroupProperty(request: ModifyGroupPropertyRequest): Promise<ModifyGroupPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupPropertyWithOptions(request, runtime);
  }

  async modifyInstanceAntiBruteForceRuleWithOptions(request: ModifyInstanceAntiBruteForceRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceAntiBruteForceRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newRuleId)) {
      query["NewRuleId"] = request.newRuleId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceAntiBruteForceRule",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceAntiBruteForceRuleResponse>(await this.callApi(params, req, runtime), new ModifyInstanceAntiBruteForceRuleResponse({}));
  }

  async modifyInstanceAntiBruteForceRule(request: ModifyInstanceAntiBruteForceRuleRequest): Promise<ModifyInstanceAntiBruteForceRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceAntiBruteForceRuleWithOptions(request, runtime);
  }

  async modifyLoginBaseConfigWithOptions(request: ModifyLoginBaseConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoginBaseConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoginBaseConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoginBaseConfigResponse>(await this.callApi(params, req, runtime), new ModifyLoginBaseConfigResponse({}));
  }

  async modifyLoginBaseConfig(request: ModifyLoginBaseConfigRequest): Promise<ModifyLoginBaseConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoginBaseConfigWithOptions(request, runtime);
  }

  async modifyLoginSwitchConfigWithOptions(request: ModifyLoginSwitchConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLoginSwitchConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.item)) {
      query["Item"] = request.item;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLoginSwitchConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLoginSwitchConfigResponse>(await this.callApi(params, req, runtime), new ModifyLoginSwitchConfigResponse({}));
  }

  async modifyLoginSwitchConfig(request: ModifyLoginSwitchConfigRequest): Promise<ModifyLoginSwitchConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLoginSwitchConfigWithOptions(request, runtime);
  }

  async modifyOpenLogShipperWithOptions(request: ModifyOpenLogShipperRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOpenLogShipperResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOpenLogShipper",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOpenLogShipperResponse>(await this.callApi(params, req, runtime), new ModifyOpenLogShipperResponse({}));
  }

  async modifyOpenLogShipper(request: ModifyOpenLogShipperRequest): Promise<ModifyOpenLogShipperResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOpenLogShipperWithOptions(request, runtime);
  }

  async modifyOperateVulWithOptions(request: ModifyOperateVulRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOperateVulResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.info)) {
      query["Info"] = request.info;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOperateVul",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOperateVulResponse>(await this.callApi(params, req, runtime), new ModifyOperateVulResponse({}));
  }

  async modifyOperateVul(request: ModifyOperateVulRequest): Promise<ModifyOperateVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOperateVulWithOptions(request, runtime);
  }

  async modifyPropertyScheduleConfigWithOptions(request: ModifyPropertyScheduleConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPropertyScheduleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPropertyScheduleConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPropertyScheduleConfigResponse>(await this.callApi(params, req, runtime), new ModifyPropertyScheduleConfigResponse({}));
  }

  async modifyPropertyScheduleConfig(request: ModifyPropertyScheduleConfigRequest): Promise<ModifyPropertyScheduleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPropertyScheduleConfigWithOptions(request, runtime);
  }

  async modifyPushAllTaskWithOptions(request: ModifyPushAllTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPushAllTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.tasks)) {
      query["Tasks"] = request.tasks;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPushAllTask",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPushAllTaskResponse>(await this.callApi(params, req, runtime), new ModifyPushAllTaskResponse({}));
  }

  async modifyPushAllTask(request: ModifyPushAllTaskRequest): Promise<ModifyPushAllTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPushAllTaskWithOptions(request, runtime);
  }

  async modifyRiskCheckStatusWithOptions(request: ModifyRiskCheckStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRiskCheckStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemId)) {
      query["ItemId"] = request.itemId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRiskCheckStatus",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRiskCheckStatusResponse>(await this.callApi(params, req, runtime), new ModifyRiskCheckStatusResponse({}));
  }

  async modifyRiskCheckStatus(request: ModifyRiskCheckStatusRequest): Promise<ModifyRiskCheckStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRiskCheckStatusWithOptions(request, runtime);
  }

  async modifyRiskSingleResultStatusWithOptions(request: ModifyRiskSingleResultStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRiskSingleResultStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRiskSingleResultStatus",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRiskSingleResultStatusResponse>(await this.callApi(params, req, runtime), new ModifyRiskSingleResultStatusResponse({}));
  }

  async modifyRiskSingleResultStatus(request: ModifyRiskSingleResultStatusRequest): Promise<ModifyRiskSingleResultStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRiskSingleResultStatusWithOptions(request, runtime);
  }

  async modifySecurityCheckScheduleConfigWithOptions(request: ModifySecurityCheckScheduleConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityCheckScheduleConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.daysOfWeek)) {
      query["DaysOfWeek"] = request.daysOfWeek;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityCheckScheduleConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySecurityCheckScheduleConfigResponse>(await this.callApi(params, req, runtime), new ModifySecurityCheckScheduleConfigResponse({}));
  }

  async modifySecurityCheckScheduleConfig(request: ModifySecurityCheckScheduleConfigRequest): Promise<ModifySecurityCheckScheduleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityCheckScheduleConfigWithOptions(request, runtime);
  }

  async modifyStartVulScanWithOptions(request: ModifyStartVulScanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyStartVulScanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyStartVulScan",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyStartVulScanResponse>(await this.callApi(params, req, runtime), new ModifyStartVulScanResponse({}));
  }

  async modifyStartVulScan(request: ModifyStartVulScanRequest): Promise<ModifyStartVulScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyStartVulScanWithOptions(request, runtime);
  }

  async modifyTagWithUuidWithOptions(request: ModifyTagWithUuidRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagWithUuidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.machineTypes)) {
      query["MachineTypes"] = request.machineTypes;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!Util.isUnset(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTagWithUuid",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTagWithUuidResponse>(await this.callApi(params, req, runtime), new ModifyTagWithUuidResponse({}));
  }

  async modifyTagWithUuid(request: ModifyTagWithUuidRequest): Promise<ModifyTagWithUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagWithUuidWithOptions(request, runtime);
  }

  async modifyVpcHoneyPotWithOptions(request: ModifyVpcHoneyPotRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVpcHoneyPotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.honeyPotAction)) {
      query["HoneyPotAction"] = request.honeyPotAction;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVpcHoneyPot",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVpcHoneyPotResponse>(await this.callApi(params, req, runtime), new ModifyVpcHoneyPotResponse({}));
  }

  async modifyVpcHoneyPot(request: ModifyVpcHoneyPotRequest): Promise<ModifyVpcHoneyPotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVpcHoneyPotWithOptions(request, runtime);
  }

  async modifyVulTargetConfigWithOptions(request: ModifyVulTargetConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVulTargetConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVulTargetConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVulTargetConfigResponse>(await this.callApi(params, req, runtime), new ModifyVulTargetConfigResponse({}));
  }

  async modifyVulTargetConfig(request: ModifyVulTargetConfigRequest): Promise<ModifyVulTargetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVulTargetConfigWithOptions(request, runtime);
  }

  async modifyWebLockCreateConfigWithOptions(request: ModifyWebLockCreateConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockCreateConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenceMode)) {
      query["DefenceMode"] = request.defenceMode;
    }

    if (!Util.isUnset(request.dir)) {
      query["Dir"] = request.dir;
    }

    if (!Util.isUnset(request.exclusiveDir)) {
      query["ExclusiveDir"] = request.exclusiveDir;
    }

    if (!Util.isUnset(request.exclusiveFile)) {
      query["ExclusiveFile"] = request.exclusiveFile;
    }

    if (!Util.isUnset(request.exclusiveFileType)) {
      query["ExclusiveFileType"] = request.exclusiveFileType;
    }

    if (!Util.isUnset(request.inclusiveFile)) {
      query["InclusiveFile"] = request.inclusiveFile;
    }

    if (!Util.isUnset(request.inclusiveFileType)) {
      query["InclusiveFileType"] = request.inclusiveFileType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localBackupDir)) {
      query["LocalBackupDir"] = request.localBackupDir;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebLockCreateConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebLockCreateConfigResponse>(await this.callApi(params, req, runtime), new ModifyWebLockCreateConfigResponse({}));
  }

  async modifyWebLockCreateConfig(request: ModifyWebLockCreateConfigRequest): Promise<ModifyWebLockCreateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockCreateConfigWithOptions(request, runtime);
  }

  async modifyWebLockDeleteConfigWithOptions(request: ModifyWebLockDeleteConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockDeleteConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebLockDeleteConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebLockDeleteConfigResponse>(await this.callApi(params, req, runtime), new ModifyWebLockDeleteConfigResponse({}));
  }

  async modifyWebLockDeleteConfig(request: ModifyWebLockDeleteConfigRequest): Promise<ModifyWebLockDeleteConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockDeleteConfigWithOptions(request, runtime);
  }

  async modifyWebLockStartWithOptions(request: ModifyWebLockStartRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockStartResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenceMode)) {
      query["DefenceMode"] = request.defenceMode;
    }

    if (!Util.isUnset(request.dir)) {
      query["Dir"] = request.dir;
    }

    if (!Util.isUnset(request.exclusiveDir)) {
      query["ExclusiveDir"] = request.exclusiveDir;
    }

    if (!Util.isUnset(request.exclusiveFile)) {
      query["ExclusiveFile"] = request.exclusiveFile;
    }

    if (!Util.isUnset(request.exclusiveFileType)) {
      query["ExclusiveFileType"] = request.exclusiveFileType;
    }

    if (!Util.isUnset(request.inclusiveFileType)) {
      query["InclusiveFileType"] = request.inclusiveFileType;
    }

    if (!Util.isUnset(request.localBackupDir)) {
      query["LocalBackupDir"] = request.localBackupDir;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebLockStart",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebLockStartResponse>(await this.callApi(params, req, runtime), new ModifyWebLockStartResponse({}));
  }

  async modifyWebLockStart(request: ModifyWebLockStartRequest): Promise<ModifyWebLockStartResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockStartWithOptions(request, runtime);
  }

  async modifyWebLockStatusWithOptions(request: ModifyWebLockStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebLockStatus",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebLockStatusResponse>(await this.callApi(params, req, runtime), new ModifyWebLockStatusResponse({}));
  }

  async modifyWebLockStatus(request: ModifyWebLockStatusRequest): Promise<ModifyWebLockStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockStatusWithOptions(request, runtime);
  }

  async modifyWebLockUpdateConfigWithOptions(request: ModifyWebLockUpdateConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyWebLockUpdateConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenceMode)) {
      query["DefenceMode"] = request.defenceMode;
    }

    if (!Util.isUnset(request.dir)) {
      query["Dir"] = request.dir;
    }

    if (!Util.isUnset(request.exclusiveDir)) {
      query["ExclusiveDir"] = request.exclusiveDir;
    }

    if (!Util.isUnset(request.exclusiveFile)) {
      query["ExclusiveFile"] = request.exclusiveFile;
    }

    if (!Util.isUnset(request.exclusiveFileType)) {
      query["ExclusiveFileType"] = request.exclusiveFileType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.inclusiveFile)) {
      query["InclusiveFile"] = request.inclusiveFile;
    }

    if (!Util.isUnset(request.inclusiveFileType)) {
      query["InclusiveFileType"] = request.inclusiveFileType;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.localBackupDir)) {
      query["LocalBackupDir"] = request.localBackupDir;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyWebLockUpdateConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyWebLockUpdateConfigResponse>(await this.callApi(params, req, runtime), new ModifyWebLockUpdateConfigResponse({}));
  }

  async modifyWebLockUpdateConfig(request: ModifyWebLockUpdateConfigRequest): Promise<ModifyWebLockUpdateConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyWebLockUpdateConfigWithOptions(request, runtime);
  }

  async operateAgentClientInstallWithOptions(request: OperateAgentClientInstallRequest, runtime: $Util.RuntimeOptions): Promise<OperateAgentClientInstallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateAgentClientInstall",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateAgentClientInstallResponse>(await this.callApi(params, req, runtime), new OperateAgentClientInstallResponse({}));
  }

  async operateAgentClientInstall(request: OperateAgentClientInstallRequest): Promise<OperateAgentClientInstallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateAgentClientInstallWithOptions(request, runtime);
  }

  async operateSuspiciousTargetConfigWithOptions(request: OperateSuspiciousTargetConfigRequest, runtime: $Util.RuntimeOptions): Promise<OperateSuspiciousTargetConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.targetOperations)) {
      query["TargetOperations"] = request.targetOperations;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateSuspiciousTargetConfig",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateSuspiciousTargetConfigResponse>(await this.callApi(params, req, runtime), new OperateSuspiciousTargetConfigResponse({}));
  }

  async operateSuspiciousTargetConfig(request: OperateSuspiciousTargetConfigRequest): Promise<OperateSuspiciousTargetConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateSuspiciousTargetConfigWithOptions(request, runtime);
  }

  async operateVulsWithOptions(request: OperateVulsRequest, runtime: $Util.RuntimeOptions): Promise<OperateVulsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    if (!Util.isUnset(request.vulNames)) {
      query["VulNames"] = request.vulNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateVuls",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateVulsResponse>(await this.callApi(params, req, runtime), new OperateVulsResponse({}));
  }

  async operateVuls(request: OperateVulsRequest): Promise<OperateVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateVulsWithOptions(request, runtime);
  }

  async operationSuspEventsWithOptions(request: OperationSuspEventsRequest, runtime: $Util.RuntimeOptions): Promise<OperationSuspEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.subOperation)) {
      query["SubOperation"] = request.subOperation;
    }

    if (!Util.isUnset(request.suspiciousEventIds)) {
      query["SuspiciousEventIds"] = request.suspiciousEventIds;
    }

    if (!Util.isUnset(request.warnType)) {
      query["WarnType"] = request.warnType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperationSuspEvents",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperationSuspEventsResponse>(await this.callApi(params, req, runtime), new OperationSuspEventsResponse({}));
  }

  async operationSuspEvents(request: OperationSuspEventsRequest): Promise<OperationSuspEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operationSuspEventsWithOptions(request, runtime);
  }

  async pauseClientWithOptions(request: PauseClientRequest, runtime: $Util.RuntimeOptions): Promise<PauseClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PauseClient",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseClientResponse>(await this.callApi(params, req, runtime), new PauseClientResponse({}));
  }

  async pauseClient(request: PauseClientRequest): Promise<PauseClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseClientWithOptions(request, runtime);
  }

  async queryGroupIdByGroupNameWithOptions(request: QueryGroupIdByGroupNameRequest, runtime: $Util.RuntimeOptions): Promise<QueryGroupIdByGroupNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryGroupIdByGroupName",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryGroupIdByGroupNameResponse>(await this.callApi(params, req, runtime), new QueryGroupIdByGroupNameResponse({}));
  }

  async queryGroupIdByGroupName(request: QueryGroupIdByGroupNameRequest): Promise<QueryGroupIdByGroupNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryGroupIdByGroupNameWithOptions(request, runtime);
  }

  async refreshAssetsWithOptions(request: RefreshAssetsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshAssetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshAssets",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshAssetsResponse>(await this.callApi(params, req, runtime), new RefreshAssetsResponse({}));
  }

  async refreshAssets(request: RefreshAssetsRequest): Promise<RefreshAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshAssetsWithOptions(request, runtime);
  }

  async refreshContainerAssetsWithOptions(request: RefreshContainerAssetsRequest, runtime: $Util.RuntimeOptions): Promise<RefreshContainerAssetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshContainerAssets",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshContainerAssetsResponse>(await this.callApi(params, req, runtime), new RefreshContainerAssetsResponse({}));
  }

  async refreshContainerAssets(request: RefreshContainerAssetsRequest): Promise<RefreshContainerAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshContainerAssetsWithOptions(request, runtime);
  }

  async rollbackSuspEventQuaraFileWithOptions(request: RollbackSuspEventQuaraFileRequest, runtime: $Util.RuntimeOptions): Promise<RollbackSuspEventQuaraFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.quaraFileId)) {
      query["QuaraFileId"] = request.quaraFileId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackSuspEventQuaraFile",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackSuspEventQuaraFileResponse>(await this.callApi(params, req, runtime), new RollbackSuspEventQuaraFileResponse({}));
  }

  async rollbackSuspEventQuaraFile(request: RollbackSuspEventQuaraFileRequest): Promise<RollbackSuspEventQuaraFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackSuspEventQuaraFileWithOptions(request, runtime);
  }

  async sasInstallCodeWithOptions(request: SasInstallCodeRequest, runtime: $Util.RuntimeOptions): Promise<SasInstallCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SasInstallCode",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SasInstallCodeResponse>(await this.callApi(params, req, runtime), new SasInstallCodeResponse({}));
  }

  async sasInstallCode(request: SasInstallCodeRequest): Promise<SasInstallCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sasInstallCodeWithOptions(request, runtime);
  }

  async startBaselineSecurityCheckWithOptions(request: StartBaselineSecurityCheckRequest, runtime: $Util.RuntimeOptions): Promise<StartBaselineSecurityCheckResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.itemIds)) {
      query["ItemIds"] = request.itemIds;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartBaselineSecurityCheck",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartBaselineSecurityCheckResponse>(await this.callApi(params, req, runtime), new StartBaselineSecurityCheckResponse({}));
  }

  async startBaselineSecurityCheck(request: StartBaselineSecurityCheckRequest): Promise<StartBaselineSecurityCheckResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startBaselineSecurityCheckWithOptions(request, runtime);
  }

  async startImageVulScanWithOptions(request: StartImageVulScanRequest, runtime: $Util.RuntimeOptions): Promise<StartImageVulScanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageDigest)) {
      query["ImageDigest"] = request.imageDigest;
    }

    if (!Util.isUnset(request.imageLayer)) {
      query["ImageLayer"] = request.imageLayer;
    }

    if (!Util.isUnset(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.registryTypes)) {
      query["RegistryTypes"] = request.registryTypes;
    }

    if (!Util.isUnset(request.repName)) {
      query["RepName"] = request.repName;
    }

    if (!Util.isUnset(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!Util.isUnset(request.repoInstanceId)) {
      query["RepoInstanceId"] = request.repoInstanceId;
    }

    if (!Util.isUnset(request.repoNamespace)) {
      query["RepoNamespace"] = request.repoNamespace;
    }

    if (!Util.isUnset(request.repoRegionId)) {
      query["RepoRegionId"] = request.repoRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartImageVulScan",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartImageVulScanResponse>(await this.callApi(params, req, runtime), new StartImageVulScanResponse({}));
  }

  async startImageVulScan(request: StartImageVulScanRequest): Promise<StartImageVulScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startImageVulScanWithOptions(request, runtime);
  }

  async startVirusScanTaskWithOptions(request: StartVirusScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartVirusScanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.targetInfo)) {
      query["TargetInfo"] = request.targetInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartVirusScanTask",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartVirusScanTaskResponse>(await this.callApi(params, req, runtime), new StartVirusScanTaskResponse({}));
  }

  async startVirusScanTask(request: StartVirusScanTaskRequest): Promise<StartVirusScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startVirusScanTaskWithOptions(request, runtime);
  }

  async unbindAegisWithOptions(request: UnbindAegisRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAegisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindAegis",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindAegisResponse>(await this.callApi(params, req, runtime), new UnbindAegisResponse({}));
  }

  async unbindAegis(request: UnbindAegisRequest): Promise<UnbindAegisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAegisWithOptions(request, runtime);
  }

  async uninstallBackupClientWithOptions(request: UninstallBackupClientRequest, runtime: $Util.RuntimeOptions): Promise<UninstallBackupClientResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyVersion)) {
      query["PolicyVersion"] = request.policyVersion;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.uuidList)) {
      query["UuidList"] = request.uuidList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallBackupClient",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallBackupClientResponse>(await this.callApi(params, req, runtime), new UninstallBackupClientResponse({}));
  }

  async uninstallBackupClient(request: UninstallBackupClientRequest): Promise<UninstallBackupClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallBackupClientWithOptions(request, runtime);
  }

  async validateHcWarningsWithOptions(request: ValidateHcWarningsRequest, runtime: $Util.RuntimeOptions): Promise<ValidateHcWarningsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.riskIds)) {
      query["RiskIds"] = request.riskIds;
    }

    if (!Util.isUnset(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!Util.isUnset(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateHcWarnings",
      version: "2018-12-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateHcWarningsResponse>(await this.callApi(params, req, runtime), new ValidateHcWarningsResponse({}));
  }

  async validateHcWarnings(request: ValidateHcWarningsRequest): Promise<ValidateHcWarningsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateHcWarningsWithOptions(request, runtime);
  }

}
