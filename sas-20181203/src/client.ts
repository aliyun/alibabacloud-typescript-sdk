// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddVpcHoneyPotRequest extends $tea.Model {
  sourceIp?: string;
  vpcId?: string;
  vpcSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      vpcId: 'VpcId',
      vpcSwitchId: 'VpcSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class CreateAntiBruteForceRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  name?: string;
  span?: number;
  failCount?: number;
  forbiddenTime?: number;
  enableSmartRule?: boolean;
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
      enableSmartRule: 'EnableSmartRule',
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
      enableSmartRule: 'boolean',
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

export class CreateOrUpdateAssetGroupRequest extends $tea.Model {
  sourceIp?: string;
  uuids?: string;
  groupName?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
      groupName: 'GroupName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSasOrderResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
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

export class DeleteTagWithUuidRequest extends $tea.Model {
  sourceIp?: string;
  tagName?: string;
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      tagName: 'TagName',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  status?: string;
  query?: string;
  startTs?: number;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      status: 'Status',
      query: 'Query',
      startTs: 'StartTs',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  akLeakCount?: number;
  accessKeyLeakList?: DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList[];
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  gmtLast?: number;
  static names(): { [key: string]: string } {
    return {
      akLeakCount: 'AkLeakCount',
      accessKeyLeakList: 'AccessKeyLeakList',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      gmtLast: 'GmtLast',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akLeakCount: 'number',
      accessKeyLeakList: { 'type': 'array', 'itemType': DescribeAccesskeyLeakListResponseBodyAccessKeyLeakList },
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      gmtLast: 'number',
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
  sourceIp?: string;
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
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
      uuids: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeAllEntityRequest extends $tea.Model {
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

export class DescribeAllGroupsResponseBody extends $tea.Model {
  requestId?: string;
  groups?: DescribeAllGroupsResponseBodyGroups[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groups: 'Groups',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groups: { 'type': 'array', 'itemType': DescribeAllGroupsResponseBodyGroups },
      count: 'number',
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
  sourceIp?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DescribeAutoDelConfigRequest extends $tea.Model {
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

export class DescribeAutoDelConfigResponseBody extends $tea.Model {
  requestId?: string;
  days?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      days: 'Days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      days: 'number',
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
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      uuidList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckEcsWarningsResponseBody extends $tea.Model {
  sasVersion?: string;
  requestId?: string;
  canTry?: string;
  weakPasswordCount?: string;
  static names(): { [key: string]: string } {
    return {
      sasVersion: 'SasVersion',
      requestId: 'RequestId',
      canTry: 'CanTry',
      weakPasswordCount: 'WeakPasswordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sasVersion: 'string',
      requestId: 'string',
      canTry: 'string',
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
  item?: string;
  type?: string;
  description?: string;
  requestId?: string;
  checkId?: number;
  level?: string;
  prompt?: string;
  advice?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      type: 'Type',
      description: 'Description',
      requestId: 'RequestId',
      checkId: 'CheckId',
      level: 'Level',
      prompt: 'Prompt',
      advice: 'Advice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      type: 'string',
      description: 'string',
      requestId: 'string',
      checkId: 'number',
      level: 'string',
      prompt: 'string',
      advice: 'string',
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
  totalCount?: number;
  checkWarnings?: DescribeCheckWarningsResponseBodyCheckWarnings[];
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      checkWarnings: 'CheckWarnings',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      checkWarnings: { 'type': 'array', 'itemType': DescribeCheckWarningsResponseBodyCheckWarnings },
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      count: 'number',
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
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  count?: number;
  warningSummarys?: DescribeCheckWarningSummaryResponseBodyWarningSummarys[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      count: 'Count',
      warningSummarys: 'WarningSummarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
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
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribeCloudProductFieldStatisticsRequest extends $tea.Model {
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
  sourceIp?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  machineTypes?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      machineTypes: 'MachineTypes',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      machineTypes: 'string',
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
  sourceIp?: string;
  ruleActionName?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ruleActionName: 'RuleActionName',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  pageInfo?: DescribeDingTalkResponseBodyPageInfo;
  requestId?: string;
  actionList?: DescribeDingTalkResponseBodyActionList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      actionList: 'ActionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeDingTalkResponseBodyPageInfo,
      requestId: 'string',
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
  requestId?: string;
  totalDomainsCount?: number;
  rootDomainsCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalDomainsCount: 'TotalDomainsCount',
      rootDomainsCount: 'RootDomainsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalDomainsCount: 'number',
      rootDomainsCount: 'number',
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
  domainDetailItems?: DescribeDomainDetailResponseBodyDomainDetailItems[];
  requestId?: string;
  rootDomain?: string;
  domain?: string;
  vulCount?: number;
  alarmCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainDetailItems: 'DomainDetailItems',
      requestId: 'RequestId',
      rootDomain: 'RootDomain',
      domain: 'Domain',
      vulCount: 'VulCount',
      alarmCount: 'AlarmCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetailItems: { 'type': 'array', 'itemType': DescribeDomainDetailResponseBodyDomainDetailItems },
      requestId: 'string',
      rootDomain: 'string',
      domain: 'string',
      vulCount: 'number',
      alarmCount: 'number',
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
  pageInfo?: DescribeDomainListResponseBodyPageInfo;
  requestId?: string;
  domainListResponseList?: DescribeDomainListResponseBodyDomainListResponseList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      domainListResponseList: 'DomainListResponseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeDomainListResponseBodyPageInfo,
      requestId: 'string',
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

export class DescribeEmgVulGroupRequest extends $tea.Model {
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

export class DescribeEmgVulGroupResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  emgVulGroupList?: DescribeEmgVulGroupResponseBodyEmgVulGroupList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      emgVulGroupList: 'EmgVulGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      emgVulGroupList: { 'type': 'array', 'itemType': DescribeEmgVulGroupResponseBodyEmgVulGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmgVulGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEmgVulGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEmgVulGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportInfoRequest extends $tea.Model {
  sourceIp?: string;
  exportId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      exportId: 'ExportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      exportId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExportInfoResponseBody extends $tea.Model {
  progress?: number;
  totalCount?: number;
  requestId?: string;
  message?: string;
  fileName?: string;
  exportStatus?: string;
  currentCount?: number;
  id?: number;
  link?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      message: 'Message',
      fileName: 'FileName',
      exportStatus: 'ExportStatus',
      currentCount: 'CurrentCount',
      id: 'Id',
      link: 'Link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      totalCount: 'number',
      requestId: 'string',
      message: 'string',
      fileName: 'string',
      exportStatus: 'string',
      currentCount: 'number',
      id: 'number',
      link: 'string',
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
  sourceIp?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  from?: string;
  pageSize?: number;
  currentPage?: number;
  uuid?: string;
  groupId?: number;
  vulStatus?: boolean;
  exposureComponent?: string;
  exposureType?: string;
  exposurePort?: string;
  exposureIp?: string;
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      from: 'From',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      uuid: 'Uuid',
      groupId: 'GroupId',
      vulStatus: 'VulStatus',
      exposureComponent: 'ExposureComponent',
      exposureType: 'ExposureType',
      exposurePort: 'ExposurePort',
      exposureIp: 'ExposureIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      from: 'string',
      pageSize: 'number',
      currentPage: 'number',
      uuid: 'string',
      groupId: 'number',
      vulStatus: 'boolean',
      exposureComponent: 'string',
      exposureType: 'string',
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
  pageInfo?: DescribeExposedInstanceListResponseBodyPageInfo;
  requestId?: string;
  exposedInstances?: DescribeExposedInstanceListResponseBodyExposedInstances[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      exposedInstances: 'ExposedInstances',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeExposedInstanceListResponseBodyPageInfo,
      requestId: 'string',
      exposedInstances: { 'type': 'array', 'itemType': DescribeExposedInstanceListResponseBodyExposedInstances },
      success: 'boolean',
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

export class DescribeExposedStatisticsRequest extends $tea.Model {
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

export class DescribeExposedStatisticsResponseBody extends $tea.Model {
  exposedPortCount?: number;
  requestId?: string;
  exposedLaterVulCount?: number;
  exposedInstanceCount?: number;
  gatewayAssetCount?: number;
  exposedComponentCount?: number;
  exposedNntfVulCount?: number;
  exposedIpCount?: number;
  exposedAsapVulCount?: number;
  static names(): { [key: string]: string } {
    return {
      exposedPortCount: 'ExposedPortCount',
      requestId: 'RequestId',
      exposedLaterVulCount: 'ExposedLaterVulCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      gatewayAssetCount: 'GatewayAssetCount',
      exposedComponentCount: 'ExposedComponentCount',
      exposedNntfVulCount: 'ExposedNntfVulCount',
      exposedIpCount: 'ExposedIpCount',
      exposedAsapVulCount: 'ExposedAsapVulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedPortCount: 'number',
      requestId: 'string',
      exposedLaterVulCount: 'number',
      exposedInstanceCount: 'number',
      gatewayAssetCount: 'number',
      exposedComponentCount: 'number',
      exposedNntfVulCount: 'number',
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

export class DescribeFieldStatisticsRequest extends $tea.Model {
  sourceIp?: string;
  regionId?: string;
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      regionId: 'RegionId',
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DescribeGraph4InvestigationOnlineRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  namespace?: string;
  vertexId?: string;
  anomalyUuid?: string;
  anomalyId?: string;
  pathLength?: number;
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  sourceIp?: string;
  criteria?: string;
  logicalExp?: string;
  groupField?: string;
  fieldValue?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  pageInfo?: DescribeGroupedContainerInstancesResponseBodyPageInfo;
  groupedContainerInstanceList?: DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      groupedContainerInstanceList: 'GroupedContainerInstanceList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeGroupedContainerInstancesResponseBodyPageInfo,
      groupedContainerInstanceList: { 'type': 'array', 'itemType': DescribeGroupedContainerInstancesResponseBodyGroupedContainerInstanceList },
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

export class DescribeGroupedMaliciousFilesRequest extends $tea.Model {
  sourceIp?: string;
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
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedMaliciousFilesResponseBody extends $tea.Model {
  pageInfo?: DescribeGroupedMaliciousFilesResponseBodyPageInfo;
  groupedMaliciousFileResponse?: DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      groupedMaliciousFileResponse: 'GroupedMaliciousFileResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeGroupedMaliciousFilesResponseBodyPageInfo,
      groupedMaliciousFileResponse: { 'type': 'array', 'itemType': DescribeGroupedMaliciousFilesResponseBodyGroupedMaliciousFileResponse },
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
  sourceIp?: string;
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      machineTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedTagsResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  groupedFileds?: DescribeGroupedTagsResponseBodyGroupedFileds[];
  count?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      groupedFileds: 'GroupedFileds',
      count: 'Count',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      groupedFileds: { 'type': 'array', 'itemType': DescribeGroupedTagsResponseBodyGroupedFileds },
      count: 'number',
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
  sourceIp?: string;
  lang?: string;
  type?: string;
  uuids?: string;
  aliasName?: string;
  necessity?: string;
  dealed?: string;
  currentPage?: number;
  pageSize?: number;
  statusList?: string;
  groupId?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  clusterId?: string;
  minScore?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      type: 'Type',
      uuids: 'Uuids',
      aliasName: 'AliasName',
      necessity: 'Necessity',
      dealed: 'Dealed',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      statusList: 'StatusList',
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
      sourceIp: 'string',
      lang: 'string',
      type: 'string',
      uuids: 'string',
      aliasName: 'string',
      necessity: 'string',
      dealed: 'string',
      currentPage: 'number',
      pageSize: 'number',
      statusList: 'string',
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  groupedVulItems?: DescribeGroupedVulResponseBodyGroupedVulItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
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

export class DescribeHoneyPotAuthRequest extends $tea.Model {
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

export class DescribeHoneyPotAuthResponseBody extends $tea.Model {
  requestId?: string;
  honeyPotAuthCount?: number;
  honeyPotCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      honeyPotAuthCount: 'HoneyPotAuthCount',
      honeyPotCount: 'HoneyPotCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      honeyPotAuthCount: 'number',
      honeyPotCount: 'number',
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
  sourceIp?: string;
  from?: string;
  statisticsKeyType?: string;
  statisticsDays?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      from: 'From',
      statisticsKeyType: 'StatisticsKeyType',
      statisticsDays: 'StatisticsDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
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
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  groupedVulItems?: DescribeImageGroupedVulListResponseBodyGroupedVulItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
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

export class DescribeImageStatisticsRequest extends $tea.Model {
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
  sourceIp?: string;
  lang?: string;
  ids?: string;
  remark?: string;
  groupId?: string;
  type?: string;
  uuids?: string;
  name?: string;
  aliasName?: string;
  level?: string;
  statusList?: string;
  necessity?: string;
  dealed?: string;
  batchName?: string;
  resource?: string;
  createTsStart?: number;
  createTsEnd?: number;
  currentPage?: number;
  pageSize?: number;
  modifyTsStart?: number;
  modifyTsEnd?: number;
  cveId?: string;
  repoName?: string;
  regionId?: string;
  instanceId?: string;
  repoId?: string;
  tag?: string;
  digest?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ids: 'Ids',
      remark: 'Remark',
      groupId: 'GroupId',
      type: 'Type',
      uuids: 'Uuids',
      name: 'Name',
      aliasName: 'AliasName',
      level: 'Level',
      statusList: 'StatusList',
      necessity: 'Necessity',
      dealed: 'Dealed',
      batchName: 'BatchName',
      resource: 'Resource',
      createTsStart: 'CreateTsStart',
      createTsEnd: 'CreateTsEnd',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      modifyTsStart: 'ModifyTsStart',
      modifyTsEnd: 'ModifyTsEnd',
      cveId: 'CveId',
      repoName: 'RepoName',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
      digest: 'Digest',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ids: 'string',
      remark: 'string',
      groupId: 'string',
      type: 'string',
      uuids: 'string',
      name: 'string',
      aliasName: 'string',
      level: 'string',
      statusList: 'string',
      necessity: 'string',
      dealed: 'string',
      batchName: 'string',
      resource: 'string',
      createTsStart: 'number',
      createTsEnd: 'number',
      currentPage: 'number',
      pageSize: 'number',
      modifyTsStart: 'number',
      modifyTsEnd: 'number',
      cveId: 'string',
      repoName: 'string',
      regionId: 'string',
      instanceId: 'string',
      repoId: 'string',
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  vulRecords?: DescribeImageVulListResponseBodyVulRecords[];
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      vulRecords: 'VulRecords',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecords },
      currentPage: 'number',
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
  requestId?: string;
  deadline?: number;
  captchaCode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deadline: 'Deadline',
      captchaCode: 'CaptchaCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deadline: 'number',
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
  sourceIp?: string;
  ip?: string;
  field?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      ip: 'Ip',
      field: 'Field',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      ip: 'string',
      field: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpInfoResponseBody extends $tea.Model {
  country?: string;
  maliciousScore?: string;
  isProxy7d?: string;
  dayCnt30dWebAttack?: string;
  isWebAttack?: string;
  isp?: string;
  gmtLastC2?: string;
  isNat1d?: string;
  gmtLastMaliciousSource?: string;
  province?: string;
  proxyDayTrace?: string;
  gmtLastWebAttack?: string;
  isWebAttack7d?: string;
  miningPoolDayTrace?: string;
  isC2?: string;
  gmtLastMiningPool?: string;
  isMaliciousSource1d?: string;
  isMiningPool1d?: string;
  isTor1d?: string;
  isNat?: string;
  requestId?: string;
  ip?: string;
  isC27d?: string;
  isMaliciousLogin1d?: string;
  tags?: string;
  maliciousSourceDayTrace?: string;
  isMiningPool?: string;
  gmtFirstMiningPool?: string;
  isIdc?: string;
  isMaliciousLogin?: string;
  rdns?: string;
  city?: string;
  isTor7d?: string;
  gmtLastNat?: string;
  gmtLastMaliciousLogin?: string;
  isNat7d?: string;
  isProxy1d?: string;
  geo?: string;
  gmtFirstC2?: string;
  isMaliciousSource7d?: string;
  isMiningPool7d?: string;
  dayCnt7dTor?: string;
  isWebAttack30d?: string;
  gmtLastProxy?: string;
  natDayTrace?: string;
  totalDayCntWebAttack?: string;
  isWebAttack1d?: string;
  maliciousLoginDayTrace?: string;
  dayCnt30dTor?: string;
  totalDayCntTor?: string;
  isProxy?: string;
  c2DayTrace?: string;
  isC21d?: string;
  isMaliciousSource30d?: string;
  dayCnt7dWebAttack?: string;
  idcName?: string;
  torDayTrace?: string;
  isTor?: string;
  isMaliciousLogin7d?: string;
  gmtLastTor?: string;
  isMaliciousSource?: string;
  webAttackDayTrace?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'country',
      maliciousScore: 'malicious_score',
      isProxy7d: 'is_proxy_7d',
      dayCnt30dWebAttack: 'day_cnt_30d_web_attack',
      isWebAttack: 'is_web_attack',
      isp: 'isp',
      gmtLastC2: 'gmt_last_c2',
      isNat1d: 'is_nat_1d',
      gmtLastMaliciousSource: 'gmt_last_malicious_source',
      province: 'province',
      proxyDayTrace: 'proxy_day_trace',
      gmtLastWebAttack: 'gmt_last_web_attack',
      isWebAttack7d: 'is_web_attack_7d',
      miningPoolDayTrace: 'mining_pool_day_trace',
      isC2: 'is_c2',
      gmtLastMiningPool: 'gmt_last_mining_pool',
      isMaliciousSource1d: 'is_malicious_source_1d',
      isMiningPool1d: 'is_mining_pool_1d',
      isTor1d: 'is_tor_1d',
      isNat: 'is_nat',
      requestId: 'RequestId',
      ip: 'ip',
      isC27d: 'is_c2_7d',
      isMaliciousLogin1d: 'is_malicious_login_1d',
      tags: 'tags',
      maliciousSourceDayTrace: 'malicious_source_day_trace',
      isMiningPool: 'is_mining_pool',
      gmtFirstMiningPool: 'gmt_first_mining_pool',
      isIdc: 'is_idc',
      isMaliciousLogin: 'is_malicious_login',
      rdns: 'rdns',
      city: 'city',
      isTor7d: 'is_tor_7d',
      gmtLastNat: 'gmt_last_nat',
      gmtLastMaliciousLogin: 'gmt_last_malicious_login',
      isNat7d: 'is_nat_7d',
      isProxy1d: 'is_proxy_1d',
      geo: 'geo',
      gmtFirstC2: 'gmt_first_c2',
      isMaliciousSource7d: 'is_malicious_source_7d',
      isMiningPool7d: 'is_mining_pool_7d',
      dayCnt7dTor: 'day_cnt_7d_tor',
      isWebAttack30d: 'is_web_attack_30d',
      gmtLastProxy: 'gmt_last_proxy',
      natDayTrace: 'nat_day_trace',
      totalDayCntWebAttack: 'total_day_cnt_web_attack',
      isWebAttack1d: 'is_web_attack_1d',
      maliciousLoginDayTrace: 'malicious_login_day_trace',
      dayCnt30dTor: 'day_cnt_30d_tor',
      totalDayCntTor: 'total_day_cnt_tor',
      isProxy: 'is_proxy',
      c2DayTrace: 'c2_day_trace',
      isC21d: 'is_c2_1d',
      isMaliciousSource30d: 'is_malicious_source_30d',
      dayCnt7dWebAttack: 'day_cnt_7d_web_attack',
      idcName: 'idc_name',
      torDayTrace: 'tor_day_trace',
      isTor: 'is_tor',
      isMaliciousLogin7d: 'is_malicious_login_7d',
      gmtLastTor: 'gmt_last_tor',
      isMaliciousSource: 'is_malicious_source',
      webAttackDayTrace: 'web_attack_day_trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      maliciousScore: 'string',
      isProxy7d: 'string',
      dayCnt30dWebAttack: 'string',
      isWebAttack: 'string',
      isp: 'string',
      gmtLastC2: 'string',
      isNat1d: 'string',
      gmtLastMaliciousSource: 'string',
      province: 'string',
      proxyDayTrace: 'string',
      gmtLastWebAttack: 'string',
      isWebAttack7d: 'string',
      miningPoolDayTrace: 'string',
      isC2: 'string',
      gmtLastMiningPool: 'string',
      isMaliciousSource1d: 'string',
      isMiningPool1d: 'string',
      isTor1d: 'string',
      isNat: 'string',
      requestId: 'string',
      ip: 'string',
      isC27d: 'string',
      isMaliciousLogin1d: 'string',
      tags: 'string',
      maliciousSourceDayTrace: 'string',
      isMiningPool: 'string',
      gmtFirstMiningPool: 'string',
      isIdc: 'string',
      isMaliciousLogin: 'string',
      rdns: 'string',
      city: 'string',
      isTor7d: 'string',
      gmtLastNat: 'string',
      gmtLastMaliciousLogin: 'string',
      isNat7d: 'string',
      isProxy1d: 'string',
      geo: 'string',
      gmtFirstC2: 'string',
      isMaliciousSource7d: 'string',
      isMiningPool7d: 'string',
      dayCnt7dTor: 'string',
      isWebAttack30d: 'string',
      gmtLastProxy: 'string',
      natDayTrace: 'string',
      totalDayCntWebAttack: 'string',
      isWebAttack1d: 'string',
      maliciousLoginDayTrace: 'string',
      dayCnt30dTor: 'string',
      totalDayCntTor: 'string',
      isProxy: 'string',
      c2DayTrace: 'string',
      isC21d: 'string',
      isMaliciousSource30d: 'string',
      dayCnt7dWebAttack: 'string',
      idcName: 'string',
      torDayTrace: 'string',
      isTor: 'string',
      isMaliciousLogin7d: 'string',
      gmtLastTor: 'string',
      isMaliciousSource: 'string',
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

export class DescribeModuleConfigRequest extends $tea.Model {
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

export class DescribeModuleConfigResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  count?: number;
  moduleConfigList?: DescribeModuleConfigResponseBodyModuleConfigList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      count: 'Count',
      moduleConfigList: 'ModuleConfigList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      count: 'number',
      moduleConfigList: { 'type': 'array', 'itemType': DescribeModuleConfigResponseBodyModuleConfigList },
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
  sourceIp?: string;
  type?: string;
  uuidList?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
      uuidList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCountResponseBody extends $tea.Model {
  sca?: number;
  user?: number;
  requestId?: string;
  port?: number;
  process?: number;
  software?: number;
  autoRun?: number;
  cron?: number;
  static names(): { [key: string]: string } {
    return {
      sca: 'Sca',
      user: 'User',
      requestId: 'RequestId',
      port: 'Port',
      process: 'Process',
      software: 'Software',
      autoRun: 'AutoRun',
      cron: 'Cron',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sca: 'number',
      user: 'number',
      requestId: 'string',
      port: 'number',
      process: 'number',
      software: 'number',
      autoRun: 'number',
      cron: 'number',
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
  sourceIp?: string;
  remark?: string;
  source?: string;
  user?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  propertys?: DescribePropertyCronDetailResponseBodyPropertys[];
  pageInfo?: DescribePropertyCronDetailResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'Propertys',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': DescribePropertyCronDetailResponseBodyPropertys },
      pageInfo: DescribePropertyCronDetailResponseBodyPageInfo,
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
  sourceIp?: string;
  remark?: string;
  port?: string;
  procName?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  propertys?: DescribePropertyPortDetailResponseBodyPropertys[];
  pageInfo?: DescribePropertyPortDetailResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'Propertys',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': DescribePropertyPortDetailResponseBodyPropertys },
      pageInfo: DescribePropertyPortDetailResponseBodyPageInfo,
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
  sourceIp?: string;
  forceFlush?: boolean;
  port?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      forceFlush: 'ForceFlush',
      port: 'Port',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  pageInfo?: DescribePropertyPortItemResponseBodyPageInfo;
  requestId?: string;
  propertyItems?: DescribePropertyPortItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyPortItemResponseBodyPageInfo,
      requestId: 'string',
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
  sourceIp?: string;
  remark?: string;
  name?: string;
  user?: string;
  cmdline?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  propertys?: DescribePropertyProcDetailResponseBodyPropertys[];
  pageInfo?: DescribePropertyProcDetailResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'Propertys',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': DescribePropertyProcDetailResponseBodyPropertys },
      pageInfo: DescribePropertyProcDetailResponseBodyPageInfo,
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
  sourceIp?: string;
  forceFlush?: boolean;
  name?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      forceFlush: 'ForceFlush',
      name: 'Name',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  pageInfo?: DescribePropertyProcItemResponseBodyPageInfo;
  requestId?: string;
  propertyItems?: DescribePropertyProcItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyProcItemResponseBodyPageInfo,
      requestId: 'string',
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
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  propertys?: DescribePropertyScaDetailResponseBodyPropertys[];
  pageInfo?: DescribePropertyScaDetailResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'Propertys',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': DescribePropertyScaDetailResponseBodyPropertys },
      pageInfo: DescribePropertyScaDetailResponseBodyPageInfo,
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
  sourceIp?: string;
  remark?: string;
  name?: string;
  path?: string;
  softwareVersion?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  propertys?: DescribePropertySoftwareDetailResponseBodyPropertys[];
  pageInfo?: DescribePropertySoftwareDetailResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'Propertys',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': DescribePropertySoftwareDetailResponseBodyPropertys },
      pageInfo: DescribePropertySoftwareDetailResponseBodyPageInfo,
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
  sourceIp?: string;
  forceFlush?: boolean;
  name?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      forceFlush: 'ForceFlush',
      name: 'Name',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  pageInfo?: DescribePropertySoftwareItemResponseBodyPageInfo;
  requestId?: string;
  propertyItems?: DescribePropertySoftwareItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertySoftwareItemResponseBodyPageInfo,
      requestId: 'string',
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
  sourceIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyUsageNewestResponseBody extends $tea.Model {
  newestStatisticItems?: DescribePropertyUsageNewestResponseBodyNewestStatisticItems[];
  type?: string;
  requestId?: string;
  itemCount?: number;
  static names(): { [key: string]: string } {
    return {
      newestStatisticItems: 'NewestStatisticItems',
      type: 'Type',
      requestId: 'RequestId',
      itemCount: 'ItemCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newestStatisticItems: { 'type': 'array', 'itemType': DescribePropertyUsageNewestResponseBodyNewestStatisticItems },
      type: 'string',
      requestId: 'string',
      itemCount: 'number',
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
  sourceIp?: string;
  remark?: string;
  user?: string;
  isRoot?: string;
  uuid?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  propertys?: DescribePropertyUserDetailResponseBodyPropertys[];
  pageInfo?: DescribePropertyUserDetailResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'Propertys',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': DescribePropertyUserDetailResponseBodyPropertys },
      pageInfo: DescribePropertyUserDetailResponseBodyPageInfo,
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
  sourceIp?: string;
  forceFlush?: boolean;
  user?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      forceFlush: 'ForceFlush',
      user: 'User',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  pageInfo?: DescribePropertyUserItemResponseBodyPageInfo;
  requestId?: string;
  propertyItems?: DescribePropertyUserItemResponseBodyPropertyItems[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      propertyItems: 'PropertyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribePropertyUserItemResponseBodyPageInfo,
      requestId: 'string',
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

export class DescribeRiskCheckItemResultRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  itemId?: number;
  currentPage?: number;
  pageSize?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      itemId: 'ItemId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      instanceId: 'InstanceId',
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
      instanceId: 'string',
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
  instanceId?: string;
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
      instanceId: 'InstanceId',
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
      instanceId: 'string',
      queryFlag: 'string',
      itemIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  list?: DescribeRiskCheckResultResponseBodyList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      list: 'List',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyList },
      count: 'number',
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
  requestId?: string;
  statisticsColumn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statisticsColumn: 'StatisticsColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statisticsColumn: 'string',
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
  suggestions?: DescribeSecureSuggestionResponseBodySuggestions[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      suggestions: 'Suggestions',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestions: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestions },
      totalCount: 'number',
      requestId: 'string',
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
  riskCheckJobConfig?: DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      riskCheckJobConfig: 'RiskCheckJobConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskCheckJobConfig: DescribeSecurityCheckScheduleConfigResponseBodyRiskCheckJobConfig,
      requestId: 'string',
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
  securityEventOperationStatusResponse?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventOperationStatusResponse: 'SecurityEventOperationStatusResponse',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventOperationStatusResponse: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatusResponse,
      requestId: 'string',
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
  securityEvent?: DescribeSecurityStatInfoResponseBodySecurityEvent;
  requestId?: string;
  healthCheck?: DescribeSecurityStatInfoResponseBodyHealthCheck;
  vulnerability?: DescribeSecurityStatInfoResponseBodyVulnerability;
  attackEvent?: DescribeSecurityStatInfoResponseBodyAttackEvent;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      securityEvent: 'SecurityEvent',
      requestId: 'RequestId',
      healthCheck: 'HealthCheck',
      vulnerability: 'Vulnerability',
      attackEvent: 'AttackEvent',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEvent: DescribeSecurityStatInfoResponseBodySecurityEvent,
      requestId: 'string',
      healthCheck: DescribeSecurityStatInfoResponseBodyHealthCheck,
      vulnerability: DescribeSecurityStatInfoResponseBodyVulnerability,
      attackEvent: DescribeSecurityStatInfoResponseBodyAttackEvent,
      success: 'boolean',
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

export class DescribeStrategyExecDetailRequest extends $tea.Model {
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

export class DescribeStrategyExecDetailResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  percent?: string;
  failCount?: number;
  startTime?: string;
  successCount?: number;
  source?: string;
  failedEcsList?: DescribeStrategyExecDetailResponseBodyFailedEcsList[];
  inProcessCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      percent: 'Percent',
      failCount: 'FailCount',
      startTime: 'StartTime',
      successCount: 'SuccessCount',
      source: 'Source',
      failedEcsList: 'FailedEcsList',
      inProcessCount: 'InProcessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      percent: 'string',
      failCount: 'number',
      startTime: 'string',
      successCount: 'number',
      source: 'string',
      failedEcsList: { 'type': 'array', 'itemType': DescribeStrategyExecDetailResponseBodyFailedEcsList },
      inProcessCount: 'number',
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

export class DescribeStratetyRequest extends $tea.Model {
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

export class DescribeStratetyResponseBody extends $tea.Model {
  requestId?: string;
  strategies?: DescribeStratetyResponseBodyStrategies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategies: { 'type': 'array', 'itemType': DescribeStratetyResponseBodyStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeStratetyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeStratetyResponseBody,
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
  aegisClientOnlineCount?: number;
  requestId?: string;
  aegisClientOfflineCount?: number;
  securityScore?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aegisClientOnlineCount: 'AegisClientOnlineCount',
      requestId: 'RequestId',
      aegisClientOfflineCount: 'AegisClientOfflineCount',
      securityScore: 'SecurityScore',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisClientOnlineCount: 'number',
      requestId: 'string',
      aegisClientOfflineCount: 'number',
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
  eventDesc?: string;
  requestId?: string;
  eventTypeDesc?: string;
  operateErrorCode?: string;
  eventStatus?: string;
  eventName?: string;
  saleVersion?: string;
  intranetIp?: string;
  dataSource?: string;
  instanceName?: string;
  operateMsg?: string;
  canBeDealOnLine?: boolean;
  uuid?: string;
  details?: DescribeSuspEventDetailResponseBodyDetails[];
  internetIp?: string;
  level?: string;
  id?: number;
  lastTime?: string;
  sasId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDesc: 'EventDesc',
      requestId: 'RequestId',
      eventTypeDesc: 'EventTypeDesc',
      operateErrorCode: 'OperateErrorCode',
      eventStatus: 'EventStatus',
      eventName: 'EventName',
      saleVersion: 'SaleVersion',
      intranetIp: 'IntranetIp',
      dataSource: 'DataSource',
      instanceName: 'InstanceName',
      operateMsg: 'OperateMsg',
      canBeDealOnLine: 'CanBeDealOnLine',
      uuid: 'Uuid',
      details: 'Details',
      internetIp: 'InternetIp',
      level: 'Level',
      id: 'Id',
      lastTime: 'LastTime',
      sasId: 'SasId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDesc: 'string',
      requestId: 'string',
      eventTypeDesc: 'string',
      operateErrorCode: 'string',
      eventStatus: 'string',
      eventName: 'string',
      saleVersion: 'string',
      intranetIp: 'string',
      dataSource: 'string',
      instanceName: 'string',
      operateMsg: 'string',
      canBeDealOnLine: 'boolean',
      uuid: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventDetailResponseBodyDetails },
      internetIp: 'string',
      level: 'string',
      id: 'number',
      lastTime: 'string',
      sasId: 'string',
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
  quaraTag?: string;
  currentPage?: string;
  from?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      status: 'Status',
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
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  quaraFiles?: DescribeSuspEventQuaraFilesResponseBodyQuaraFiles[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      quaraFiles: 'QuaraFiles',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      quaraFiles: { 'type': 'array', 'itemType': DescribeSuspEventQuaraFilesResponseBodyQuaraFiles },
      count: 'number',
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
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  count?: number;
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      count: 'Count',
      suspEvents: 'SuspEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
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
  requestId?: string;
  authorized?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      authorized: 'Authorized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      authorized: 'boolean',
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
  imageScanCapacity?: number;
  appWhiteListAuthCount?: number;
  sasLog?: number;
  version?: number;
  lastTrailEndTime?: number;
  webLockAuthCount?: number;
  slsCapacity?: number;
  userDefinedAlarms?: number;
  webLock?: number;
  isOverBalance?: boolean;
  vmCores?: number;
  honeypotCapacity?: number;
  requestId?: string;
  assetLevel?: number;
  instanceId?: string;
  sasScreen?: number;
  releaseTime?: number;
  isTrialVersion?: number;
  appWhiteList?: number;
  static names(): { [key: string]: string } {
    return {
      imageScanCapacity: 'ImageScanCapacity',
      appWhiteListAuthCount: 'AppWhiteListAuthCount',
      sasLog: 'SasLog',
      version: 'Version',
      lastTrailEndTime: 'LastTrailEndTime',
      webLockAuthCount: 'WebLockAuthCount',
      slsCapacity: 'SlsCapacity',
      userDefinedAlarms: 'UserDefinedAlarms',
      webLock: 'WebLock',
      isOverBalance: 'IsOverBalance',
      vmCores: 'VmCores',
      honeypotCapacity: 'HoneypotCapacity',
      requestId: 'RequestId',
      assetLevel: 'AssetLevel',
      instanceId: 'InstanceId',
      sasScreen: 'SasScreen',
      releaseTime: 'ReleaseTime',
      isTrialVersion: 'IsTrialVersion',
      appWhiteList: 'AppWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanCapacity: 'number',
      appWhiteListAuthCount: 'number',
      sasLog: 'number',
      version: 'number',
      lastTrailEndTime: 'number',
      webLockAuthCount: 'number',
      slsCapacity: 'number',
      userDefinedAlarms: 'number',
      webLock: 'number',
      isOverBalance: 'boolean',
      vmCores: 'number',
      honeypotCapacity: 'number',
      requestId: 'string',
      assetLevel: 'number',
      instanceId: 'string',
      sasScreen: 'number',
      releaseTime: 'number',
      isTrialVersion: 'number',
      appWhiteList: 'number',
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
  requestId?: string;
  dingdingUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dingdingUrl: 'DingdingUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dingdingUrl: 'string',
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

export class DescribeVpcHoneyPotCriteriaRequest extends $tea.Model {
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
  sourceIp?: string;
  vpcId?: string;
  vpcName?: string;
  vpcRegionId?: string;
  honeyPotExistence?: boolean;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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
  vpcHoneyPotDTOList?: DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList[];
  pageInfo?: DescribeVpcHoneyPotListResponseBodyPageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcHoneyPotDTOList: 'VpcHoneyPotDTOList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcHoneyPotDTOList: { 'type': 'array', 'itemType': DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList },
      pageInfo: DescribeVpcHoneyPotListResponseBodyPageInfo,
      requestId: 'string',
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

export class DescribeVpcListRequest extends $tea.Model {
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

export class DescribeVpcListResponseBody extends $tea.Model {
  requestId?: string;
  vpcList?: DescribeVpcListResponseBodyVpcList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcList: 'VpcList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcList: { 'type': 'array', 'itemType': DescribeVpcListResponseBodyVpcList },
      count: 'number',
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
  sourceIp?: string;
  lang?: string;
  type?: string;
  name?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      type: 'Type',
      name: 'Name',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class DescribeVulListRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ids?: string;
  remark?: string;
  groupId?: string;
  type?: string;
  uuids?: string;
  name?: string;
  aliasName?: string;
  level?: string;
  statusList?: string;
  necessity?: string;
  dealed?: string;
  batchName?: string;
  resource?: string;
  createTsStart?: number;
  createTsEnd?: number;
  currentPage?: number;
  pageSize?: number;
  modifyTsStart?: number;
  modifyTsEnd?: number;
  attachTypes?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  targetType?: string;
  clusterId?: string;
  minScore?: number;
  vpcInstanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ids: 'Ids',
      remark: 'Remark',
      groupId: 'GroupId',
      type: 'Type',
      uuids: 'Uuids',
      name: 'Name',
      aliasName: 'AliasName',
      level: 'Level',
      statusList: 'StatusList',
      necessity: 'Necessity',
      dealed: 'Dealed',
      batchName: 'BatchName',
      resource: 'Resource',
      createTsStart: 'CreateTsStart',
      createTsEnd: 'CreateTsEnd',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      modifyTsStart: 'ModifyTsStart',
      modifyTsEnd: 'ModifyTsEnd',
      attachTypes: 'AttachTypes',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      targetType: 'TargetType',
      clusterId: 'ClusterId',
      minScore: 'MinScore',
      vpcInstanceIds: 'VpcInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ids: 'string',
      remark: 'string',
      groupId: 'string',
      type: 'string',
      uuids: 'string',
      name: 'string',
      aliasName: 'string',
      level: 'string',
      statusList: 'string',
      necessity: 'string',
      dealed: 'string',
      batchName: 'string',
      resource: 'string',
      createTsStart: 'number',
      createTsEnd: 'number',
      currentPage: 'number',
      pageSize: 'number',
      modifyTsStart: 'number',
      modifyTsEnd: 'number',
      attachTypes: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      targetType: 'string',
      clusterId: 'string',
      minScore: 'number',
      vpcInstanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  vulRecords?: DescribeVulListResponseBodyVulRecords[];
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      vulRecords: 'VulRecords',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecords },
      currentPage: 'number',
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
  sourceIp?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  vulWhitelists?: DescribeVulWhitelistResponseBodyVulWhitelists[];
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      vulWhitelists: 'VulWhitelists',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      vulWhitelists: { 'type': 'array', 'itemType': DescribeVulWhitelistResponseBodyVulWhitelists },
      currentPage: 'number',
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
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  warningMachines?: DescribeWarningMachinesResponseBodyWarningMachines[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      warningMachines: 'WarningMachines',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      warningMachines: { 'type': 'array', 'itemType': DescribeWarningMachinesResponseBodyWarningMachines },
      count: 'number',
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  bindList?: DescribeWebLockBindListResponseBodyBindList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      bindList: 'BindList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
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

export class ExportRecordRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  params?: string;
  exportType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      params: 'Params',
      exportType: 'ExportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  requestId?: string;
  batchId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      batchId: 'BatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      batchId: 'number',
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

export class GetIncIOCsRequest extends $tea.Model {
  sourceIp?: string;
  type?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  type?: string;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class HandleSecurityEventsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  operationCode?: string;
  operationParams?: string;
  markMissParam?: string;
  securityEventIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      markMissParam: 'MarkMissParam',
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
      securityEventIds: { 'type': 'array', 'itemType': 'string' },
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

export class ModifyAntiBruteForceRuleRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  name?: string;
  span?: number;
  failCount?: number;
  forbiddenTime?: number;
  enableSmartRule?: boolean;
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
      enableSmartRule: 'EnableSmartRule',
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
      enableSmartRule: 'boolean',
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

export class ModifyCreateVulWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  whitelist?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      whitelist: 'Whitelist',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  lang?: string;
  name?: string;
  userAgreement?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      name: 'Name',
      userAgreement: 'UserAgreement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  item?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      item: 'Item',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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

export class ModifyOperateVulRequest extends $tea.Model {
  sourceIp?: string;
  info?: string;
  operateType?: string;
  type?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      info: 'Info',
      operateType: 'OperateType',
      type: 'Type',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  types?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      types: 'Types',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  uuidList?: string;
  tagList?: string;
  tagId?: string;
  machineTypes?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuidList: 'UuidList',
      tagList: 'TagList',
      tagId: 'TagId',
      machineTypes: 'MachineTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  vpcId?: string;
  honeyPotAction?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      vpcId: 'VpcId',
      honeyPotAction: 'HoneyPotAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class ModifyWebLockUnbindRequest extends $tea.Model {
  sourceIp?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  sourceIp?: string;
  uuids?: string;
  value?: string;
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      uuids: 'Uuids',
      value: 'Value',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      uuids: 'string',
      value: 'string',
      appName: 'string',
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
  sourceIp?: string;
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  assets?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      type: 'Type',
      itemIds: 'ItemIds',
      assets: 'Assets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      type: 'string',
      itemIds: { 'type': 'array', 'itemType': 'number' },
      assets: { 'type': 'array', 'itemType': 'string' },
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
  sourceIp?: string;
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
      sourceIp: 'SourceIp',
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
      sourceIp: 'string',
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

export class DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse extends $tea.Model {
  status?: number;
  digest?: string;
  latestVerifyTimestamp?: number;
  repoInstanceId?: string;
  namespace?: string;
  repoRegionId?: string;
  tag?: string;
  imageUuid?: string;
  maliciousMd5?: string;
  firstScanTimestamp?: number;
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
      repoRegionId: 'RepoRegionId',
      tag: 'Tag',
      imageUuid: 'ImageUuid',
      maliciousMd5: 'MaliciousMd5',
      firstScanTimestamp: 'FirstScanTimestamp',
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
      repoRegionId: 'string',
      tag: 'string',
      imageUuid: 'string',
      maliciousMd5: 'string',
      firstScanTimestamp: 'number',
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
  causeDetails?: DescribeAlarmEventDetailResponseBodyDataCauseDetails[];
  canCancelFault?: boolean;
  appName?: string;
  canBeDealOnLine?: boolean;
  containerImageName?: string;
  k8sClusterId?: string;
  containHwMode?: boolean;
  k8sNodeId?: string;
  instanceName?: string;
  solution?: string;
  dataSource?: string;
  intranetIp?: string;
  endTime?: number;
  alarmEventAliasName?: string;
  startTime?: number;
  uuid?: string;
  k8sPodName?: string;
  containerId?: string;
  k8sNamespace?: string;
  k8sNodeName?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      internetIp: 'InternetIp',
      k8sClusterName: 'K8sClusterName',
      containerImageId: 'ContainerImageId',
      alarmEventDesc: 'AlarmEventDesc',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      causeDetails: 'CauseDetails',
      canCancelFault: 'CanCancelFault',
      appName: 'AppName',
      canBeDealOnLine: 'CanBeDealOnLine',
      containerImageName: 'ContainerImageName',
      k8sClusterId: 'K8sClusterId',
      containHwMode: 'ContainHwMode',
      k8sNodeId: 'K8sNodeId',
      instanceName: 'InstanceName',
      solution: 'Solution',
      dataSource: 'DataSource',
      intranetIp: 'IntranetIp',
      endTime: 'EndTime',
      alarmEventAliasName: 'AlarmEventAliasName',
      startTime: 'StartTime',
      uuid: 'Uuid',
      k8sPodName: 'K8sPodName',
      containerId: 'ContainerId',
      k8sNamespace: 'K8sNamespace',
      k8sNodeName: 'K8sNodeName',
      level: 'Level',
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
      causeDetails: { 'type': 'array', 'itemType': DescribeAlarmEventDetailResponseBodyDataCauseDetails },
      canCancelFault: 'boolean',
      appName: 'string',
      canBeDealOnLine: 'boolean',
      containerImageName: 'string',
      k8sClusterId: 'string',
      containHwMode: 'boolean',
      k8sNodeId: 'string',
      instanceName: 'string',
      solution: 'string',
      dataSource: 'string',
      intranetIp: 'string',
      endTime: 'number',
      alarmEventAliasName: 'string',
      startTime: 'number',
      uuid: 'string',
      k8sPodName: 'string',
      containerId: 'string',
      k8sNamespace: 'string',
      k8sNodeName: 'string',
      level: 'string',
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
  canBeDealOnLine?: boolean;
  containerImageName?: string;
  k8sClusterId?: string;
  description?: string;
  containHwMode?: boolean;
  instanceName?: string;
  k8sNodeId?: string;
  saleVersion?: string;
  operateErrorCode?: string;
  solution?: string;
  hasTraceInfo?: boolean;
  operateTime?: number;
  dataSource?: string;
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
      canBeDealOnLine: 'CanBeDealOnLine',
      containerImageName: 'ContainerImageName',
      k8sClusterId: 'K8sClusterId',
      description: 'Description',
      containHwMode: 'ContainHwMode',
      instanceName: 'InstanceName',
      k8sNodeId: 'K8sNodeId',
      saleVersion: 'SaleVersion',
      operateErrorCode: 'OperateErrorCode',
      solution: 'Solution',
      hasTraceInfo: 'HasTraceInfo',
      operateTime: 'OperateTime',
      dataSource: 'DataSource',
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
      canBeDealOnLine: 'boolean',
      containerImageName: 'string',
      k8sClusterId: 'string',
      description: 'string',
      containHwMode: 'boolean',
      instanceName: 'string',
      k8sNodeId: 'string',
      saleVersion: 'string',
      operateErrorCode: 'string',
      solution: 'string',
      hasTraceInfo: 'boolean',
      operateTime: 'number',
      dataSource: 'string',
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
  uuidList?: string[];
  machineCount?: number;
  enableSmartRule?: boolean;
  failCount?: number;
  forbiddenTime?: number;
  span?: number;
  defaultRule?: boolean;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      uuidList: 'UuidList',
      machineCount: 'MachineCount',
      enableSmartRule: 'EnableSmartRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      span: 'Span',
      defaultRule: 'DefaultRule',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuidList: { 'type': 'array', 'itemType': 'string' },
      machineCount: 'number',
      enableSmartRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      span: 'number',
      defaultRule: 'boolean',
      name: 'string',
      id: 'number',
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
  kernel?: string;
  createTime?: number;
  osName?: string;
  tag?: string;
  clientStatus?: string;
  mem?: number;
  vpcInstanceId?: string;
  instanceName?: string;
  region?: string;
  ipList?: string[];
  groupTrace?: string;
  diskInfoList?: string[];
  hostName?: string;
  ip?: string;
  macList?: string[];
  os?: string;
  instanceId?: string;
  assetType?: string;
  intranetIp?: string;
  sysInfo?: string;
  uuid?: string;
  cpu?: number;
  regionName?: string;
  instanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cpuInfo: 'CpuInfo',
      internetIp: 'InternetIp',
      osDetail: 'OsDetail',
      kernel: 'Kernel',
      createTime: 'CreateTime',
      osName: 'OsName',
      tag: 'Tag',
      clientStatus: 'ClientStatus',
      mem: 'Mem',
      vpcInstanceId: 'VpcInstanceId',
      instanceName: 'InstanceName',
      region: 'Region',
      ipList: 'IpList',
      groupTrace: 'GroupTrace',
      diskInfoList: 'DiskInfoList',
      hostName: 'HostName',
      ip: 'Ip',
      macList: 'MacList',
      os: 'Os',
      instanceId: 'InstanceId',
      assetType: 'AssetType',
      intranetIp: 'IntranetIp',
      sysInfo: 'SysInfo',
      uuid: 'Uuid',
      cpu: 'Cpu',
      regionName: 'RegionName',
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuInfo: 'string',
      internetIp: 'string',
      osDetail: 'string',
      kernel: 'string',
      createTime: 'number',
      osName: 'string',
      tag: 'string',
      clientStatus: 'string',
      mem: 'number',
      vpcInstanceId: 'string',
      instanceName: 'string',
      region: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      groupTrace: 'string',
      diskInfoList: { 'type': 'array', 'itemType': 'string' },
      hostName: 'string',
      ip: 'string',
      macList: { 'type': 'array', 'itemType': 'string' },
      os: 'string',
      instanceId: 'string',
      assetType: 'string',
      intranetIp: 'string',
      sysInfo: 'string',
      uuid: 'string',
      cpu: 'number',
      regionName: 'string',
      instanceStatus: 'string',
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
  assetType?: string;
  intranetIp?: string;
  regionId?: string;
  uuid?: string;
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
      assetType: 'AssetType',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      uuid: 'Uuid',
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
      assetType: 'string',
      intranetIp: 'string',
      regionId: 'string',
      uuid: 'string',
      regionName: 'string',
      instanceName: 'string',
      region: 'string',
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

export class DescribeCloudCenterInstancesResponseBodyInstances extends $tea.Model {
  status?: string;
  internetIp?: string;
  osName?: string;
  tag?: string;
  clientStatus?: string;
  vpcInstanceId?: string;
  flag?: number;
  region?: string;
  instanceName?: string;
  podCount?: number;
  vulCount?: number;
  hcStatus?: string;
  createdTime?: number;
  clusterId?: string;
  riskStatus?: string;
  vulStatus?: string;
  alarmStatus?: string;
  healthCheckCount?: number;
  importance?: number;
  ip?: string;
  os?: string;
  instanceId?: string;
  safeEventCount?: number;
  assetType?: string;
  intranetIp?: string;
  regionId?: string;
  uuid?: string;
  groupId?: string;
  regionName?: string;
  clusterName?: string;
  exposedStatus?: number;
  riskCount?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      internetIp: 'InternetIp',
      osName: 'OsName',
      tag: 'Tag',
      clientStatus: 'ClientStatus',
      vpcInstanceId: 'VpcInstanceId',
      flag: 'Flag',
      region: 'Region',
      instanceName: 'InstanceName',
      podCount: 'PodCount',
      vulCount: 'VulCount',
      hcStatus: 'HcStatus',
      createdTime: 'CreatedTime',
      clusterId: 'ClusterId',
      riskStatus: 'RiskStatus',
      vulStatus: 'VulStatus',
      alarmStatus: 'AlarmStatus',
      healthCheckCount: 'HealthCheckCount',
      importance: 'Importance',
      ip: 'Ip',
      os: 'Os',
      instanceId: 'InstanceId',
      safeEventCount: 'SafeEventCount',
      assetType: 'AssetType',
      intranetIp: 'IntranetIp',
      regionId: 'RegionId',
      uuid: 'Uuid',
      groupId: 'GroupId',
      regionName: 'RegionName',
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
      osName: 'string',
      tag: 'string',
      clientStatus: 'string',
      vpcInstanceId: 'string',
      flag: 'number',
      region: 'string',
      instanceName: 'string',
      podCount: 'number',
      vulCount: 'number',
      hcStatus: 'string',
      createdTime: 'number',
      clusterId: 'string',
      riskStatus: 'string',
      vulStatus: 'string',
      alarmStatus: 'string',
      healthCheckCount: 'number',
      importance: 'number',
      ip: 'string',
      os: 'string',
      instanceId: 'string',
      safeEventCount: 'number',
      assetType: 'string',
      intranetIp: 'string',
      regionId: 'string',
      uuid: 'string',
      groupId: 'string',
      regionName: 'string',
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
  values?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      values: 'string',
      name: 'string',
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

export class DescribeEmgVulGroupResponseBodyEmgVulGroupList extends $tea.Model {
  type?: string;
  description?: string;
  gmtPublish?: number;
  pendingCount?: number;
  aliasName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      gmtPublish: 'GmtPublish',
      pendingCount: 'PendingCount',
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
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

export class DescribeExposedInstanceCriteriaResponseBodyCriteriaList extends $tea.Model {
  type?: string;
  values?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      values: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList extends $tea.Model {
  type?: number;
  necessity?: string;
  uuid?: number;
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
      type: 'number',
      necessity: 'string',
      uuid: 'number',
      aliasName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList extends $tea.Model {
  type?: number;
  necessity?: string;
  uuid?: number;
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
      type: 'number',
      necessity: 'string',
      uuid: 'number',
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
  internetIp?: string;
  nntfVulCount?: number;
  allVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList[];
  instanceId?: string;
  exposureType?: string;
  intranetIp?: string;
  exposureTypeId?: string;
  regionId?: string;
  asapVulCount?: number;
  uuid?: string;
  realVulList?: DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList[];
  exposurePort?: string;
  instanceName?: string;
  laterVulCount?: number;
  exposureComponent?: string;
  static names(): { [key: string]: string } {
    return {
      exposureIp: 'ExposureIp',
      internetIp: 'InternetIp',
      nntfVulCount: 'NntfVulCount',
      allVulList: 'AllVulList',
      instanceId: 'InstanceId',
      exposureType: 'ExposureType',
      intranetIp: 'IntranetIp',
      exposureTypeId: 'ExposureTypeId',
      regionId: 'RegionId',
      asapVulCount: 'AsapVulCount',
      uuid: 'Uuid',
      realVulList: 'RealVulList',
      exposurePort: 'ExposurePort',
      instanceName: 'InstanceName',
      laterVulCount: 'LaterVulCount',
      exposureComponent: 'ExposureComponent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposureIp: 'string',
      internetIp: 'string',
      nntfVulCount: 'number',
      allVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsAllVulList },
      instanceId: 'string',
      exposureType: 'string',
      intranetIp: 'string',
      exposureTypeId: 'string',
      regionId: 'string',
      asapVulCount: 'number',
      uuid: 'string',
      realVulList: { 'type': 'array', 'itemType': DescribeExposedInstanceDetailResponseBodyExposedChainsRealVulList },
      exposurePort: 'string',
      instanceName: 'string',
      laterVulCount: 'number',
      exposureComponent: 'string',
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
  totalVulCount?: number;
  exposureIp?: string;
  internetIp?: string;
  nntfVulCount?: number;
  instanceId?: string;
  exposureType?: string;
  intranetIp?: string;
  exposureTypeId?: string;
  regionId?: string;
  asapVulCount?: number;
  uuid?: string;
  exposurePort?: string;
  groupName?: string;
  groupId?: number;
  instanceName?: string;
  exposureComponent?: string;
  laterVulCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalVulCount: 'TotalVulCount',
      exposureIp: 'ExposureIp',
      internetIp: 'InternetIp',
      nntfVulCount: 'NntfVulCount',
      instanceId: 'InstanceId',
      exposureType: 'ExposureType',
      intranetIp: 'IntranetIp',
      exposureTypeId: 'ExposureTypeId',
      regionId: 'RegionId',
      asapVulCount: 'AsapVulCount',
      uuid: 'Uuid',
      exposurePort: 'ExposurePort',
      groupName: 'GroupName',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      exposureComponent: 'ExposureComponent',
      laterVulCount: 'LaterVulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalVulCount: 'number',
      exposureIp: 'string',
      internetIp: 'string',
      nntfVulCount: 'number',
      instanceId: 'string',
      exposureType: 'string',
      intranetIp: 'string',
      exposureTypeId: 'string',
      regionId: 'string',
      asapVulCount: 'number',
      uuid: 'string',
      exposurePort: 'string',
      groupName: 'string',
      groupId: 'number',
      instanceName: 'string',
      exposureComponent: 'string',
      laterVulCount: 'number',
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
  groupCount?: number;
  exposedInstanceCount?: number;
  generalAssetCount?: number;
  unprotectedInstanceCount?: number;
  importantAssetCount?: number;
  testAssetCount?: number;
  vpcCount?: number;
  instanceCount?: number;
  notRunningStatusCount?: number;
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      offlineInstanceCount: 'OfflineInstanceCount',
      regionCount: 'RegionCount',
      newInstanceCount: 'NewInstanceCount',
      groupCount: 'GroupCount',
      exposedInstanceCount: 'ExposedInstanceCount',
      generalAssetCount: 'GeneralAssetCount',
      unprotectedInstanceCount: 'UnprotectedInstanceCount',
      importantAssetCount: 'ImportantAssetCount',
      testAssetCount: 'TestAssetCount',
      vpcCount: 'VpcCount',
      instanceCount: 'InstanceCount',
      notRunningStatusCount: 'NotRunningStatusCount',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offlineInstanceCount: 'number',
      regionCount: 'number',
      newInstanceCount: 'number',
      groupCount: 'number',
      exposedInstanceCount: 'number',
      generalAssetCount: 'number',
      unprotectedInstanceCount: 'number',
      importantAssetCount: 'number',
      testAssetCount: 'number',
      vpcCount: 'number',
      instanceCount: 'number',
      notRunningStatusCount: 'number',
      riskInstanceCount: 'number',
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
  neighborList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList[];
  position?: string;
  positionId?: string;
  name?: string;
  id?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuid: 'Uuid',
      time: 'Time',
      aliuid: 'Aliuid',
      neighborList: 'NeighborList',
      position: 'Position',
      positionId: 'PositionId',
      name: 'Name',
      id: 'Id',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuid: 'string',
      time: 'string',
      aliuid: 'string',
      neighborList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexListNeighborList },
      position: 'string',
      positionId: 'string',
      name: 'string',
      id: 'string',
      properties: 'string',
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
  name?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      displayColor: 'DisplayColor',
      displayIcon: 'DisplayIcon',
      displayOrder: 'DisplayOrder',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayColor: 'string',
      displayIcon: 'string',
      displayOrder: 'string',
      name: 'string',
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

export class DescribeGraph4InvestigationOnlineResponseBodyData extends $tea.Model {
  vertexList?: DescribeGraph4InvestigationOnlineResponseBodyDataVertexList[];
  entityTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList[];
  relationTypeList?: DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList[];
  edgeList?: DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList[];
  static names(): { [key: string]: string } {
    return {
      vertexList: 'VertexList',
      entityTypeList: 'EntityTypeList',
      relationTypeList: 'RelationTypeList',
      edgeList: 'EdgeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vertexList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataVertexList },
      entityTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEntityTypeList },
      relationTypeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataRelationTypeList },
      edgeList: { 'type': 'array', 'itemType': DescribeGraph4InvestigationOnlineResponseBodyDataEdgeList },
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
  hostIp?: string;
  riskLevel?: string;
  riskStatus?: string;
  pod?: string;
  createTime?: number;
  custerState?: string;
  namespace?: string;
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
      hostIp: 'HostIp',
      riskLevel: 'RiskLevel',
      riskStatus: 'RiskStatus',
      pod: 'Pod',
      createTime: 'CreateTime',
      custerState: 'CusterState',
      namespace: 'Namespace',
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
      hostIp: 'string',
      riskLevel: 'string',
      riskStatus: 'string',
      pod: 'string',
      createTime: 'number',
      custerState: 'string',
      namespace: 'string',
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
      asapCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHoneyPotSuspStatisticsResponseBodySuspHoneyPotStatisticsResponse extends $tea.Model {
  vpcName?: string;
  type?: string;
  vpcId?: string;
  instanceName?: string;
  instanceId?: string;
  name?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      vpcName: 'VpcName',
      type: 'Type',
      vpcId: 'VpcId',
      instanceName: 'InstanceName',
      instanceId: 'InstanceId',
      name: 'Name',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcName: 'string',
      type: 'string',
      vpcId: 'string',
      instanceName: 'string',
      instanceId: 'string',
      name: 'string',
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

export class DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  layer?: string;
  fullVersion?: string;
  version?: string;
  matchDetail?: string;
  path?: string;
  name?: string;
  updateCmd?: string;
  static names(): { [key: string]: string } {
    return {
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
  rpmEntityList?: DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  os?: string;
  static names(): { [key: string]: string } {
    return {
      osRelease: 'OsRelease',
      rpmEntityList: 'RpmEntityList',
      os: 'Os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osRelease: 'string',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
      os: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecords extends $tea.Model {
  status?: number;
  type?: string;
  modifyTs?: number;
  imageDigest?: string;
  layers?: string[];
  primaryId?: number;
  tag?: string;
  related?: string;
  lastTs?: number;
  firstTs?: number;
  necessity?: string;
  uuid?: string;
  aliasName?: string;
  name?: string;
  extendContentJson?: DescribeImageVulListResponseBodyVulRecordsExtendContentJson;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      modifyTs: 'ModifyTs',
      imageDigest: 'ImageDigest',
      layers: 'Layers',
      primaryId: 'PrimaryId',
      tag: 'Tag',
      related: 'Related',
      lastTs: 'LastTs',
      firstTs: 'FirstTs',
      necessity: 'Necessity',
      uuid: 'Uuid',
      aliasName: 'AliasName',
      name: 'Name',
      extendContentJson: 'ExtendContentJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'string',
      modifyTs: 'number',
      imageDigest: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      primaryId: 'number',
      tag: 'string',
      related: 'string',
      lastTs: 'number',
      firstTs: 'number',
      necessity: 'string',
      uuid: 'string',
      aliasName: 'string',
      name: 'string',
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
  emgNum?: number;
  cveNum?: number;
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
      emgNum: 'EmgNum',
      cveNum: 'CveNum',
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
      emgNum: 'number',
      cveNum: 'number',
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
  currentPage?: number;
  route?: number;
  timeLimit?: number;
  aliUid?: number;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      route: 'Route',
      timeLimit: 'TimeLimit',
      aliUid: 'AliUid',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      route: 'number',
      timeLimit: 'number',
      aliUid: 'number',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyCronDetailResponseBodyPropertys extends $tea.Model {
  create?: string;
  internetIp?: string;
  user?: string;
  ip?: string;
  instanceId?: string;
  source?: string;
  cmd?: string;
  intranetIp?: string;
  period?: string;
  uuid?: string;
  instanceName?: string;
  md5?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      internetIp: 'InternetIp',
      user: 'User',
      ip: 'Ip',
      instanceId: 'InstanceId',
      source: 'Source',
      cmd: 'Cmd',
      intranetIp: 'IntranetIp',
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
      user: 'string',
      ip: 'string',
      instanceId: 'string',
      source: 'string',
      cmd: 'string',
      intranetIp: 'string',
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

export class DescribePropertyPortDetailResponseBodyPropertys extends $tea.Model {
  create?: string;
  internetIp?: string;
  ip?: string;
  bindIp?: string;
  instanceId?: string;
  procName?: string;
  port?: string;
  intranetIp?: string;
  uuid?: string;
  instanceName?: string;
  createTimestamp?: number;
  proto?: string;
  static names(): { [key: string]: string } {
    return {
      create: 'Create',
      internetIp: 'InternetIp',
      ip: 'Ip',
      bindIp: 'BindIp',
      instanceId: 'InstanceId',
      procName: 'ProcName',
      port: 'Port',
      intranetIp: 'IntranetIp',
      uuid: 'Uuid',
      instanceName: 'InstanceName',
      createTimestamp: 'CreateTimestamp',
      proto: 'Proto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'string',
      internetIp: 'string',
      ip: 'string',
      bindIp: 'string',
      instanceId: 'string',
      procName: 'string',
      port: 'string',
      intranetIp: 'string',
      uuid: 'string',
      instanceName: 'string',
      createTimestamp: 'number',
      proto: 'string',
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

export class DescribePropertyProcDetailResponseBodyPropertys extends $tea.Model {
  create?: string;
  internetIp?: string;
  pid?: string;
  user?: string;
  instanceId?: string;
  cmdline?: string;
  intranetIp?: string;
  euidName?: string;
  startTime?: string;
  uuid?: string;
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
      startTime: 'StartTime',
      uuid: 'Uuid',
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
      startTime: 'string',
      uuid: 'string',
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
  processUser?: string;
  ip?: string;
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
      processUser: 'ProcessUser',
      ip: 'Ip',
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
      processUser: 'string',
      ip: 'string',
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

export class DescribePropertyUserDetailResponseBodyPropertys extends $tea.Model {
  status?: string;
  lastLoginIp?: string;
  create?: string;
  internetIp?: string;
  isRoot?: string;
  lastLoginTime?: string;
  user?: string;
  ip?: string;
  instanceId?: string;
  passwordExpirationDate?: string;
  intranetIp?: string;
  groupNames?: string[];
  uuid?: string;
  lastLoginTimestamp?: number;
  instanceName?: string;
  accountsExpirationDate?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      lastLoginIp: 'LastLoginIp',
      create: 'Create',
      internetIp: 'InternetIp',
      isRoot: 'IsRoot',
      lastLoginTime: 'LastLoginTime',
      user: 'User',
      ip: 'Ip',
      instanceId: 'InstanceId',
      passwordExpirationDate: 'PasswordExpirationDate',
      intranetIp: 'IntranetIp',
      groupNames: 'GroupNames',
      uuid: 'Uuid',
      lastLoginTimestamp: 'LastLoginTimestamp',
      instanceName: 'InstanceName',
      accountsExpirationDate: 'AccountsExpirationDate',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      lastLoginIp: 'string',
      create: 'string',
      internetIp: 'string',
      isRoot: 'string',
      lastLoginTime: 'string',
      user: 'string',
      ip: 'string',
      instanceId: 'string',
      passwordExpirationDate: 'string',
      intranetIp: 'string',
      groupNames: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
      lastLoginTimestamp: 'number',
      instanceName: 'string',
      accountsExpirationDate: 'string',
      createTimestamp: 'number',
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
  type?: string;
  status?: string;
  riskLevel?: string;
  sort?: number;
  repairStatus?: string;
  remainingTime?: number;
  itemId?: number;
  startStatus?: string;
  affectedCount?: number;
  riskAssertType?: string;
  riskItemResources?: DescribeRiskCheckResultResponseBodyListRiskItemResources[];
  title?: string;
  taskId?: number;
  checkTime?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      status: 'Status',
      riskLevel: 'RiskLevel',
      sort: 'Sort',
      repairStatus: 'RepairStatus',
      remainingTime: 'RemainingTime',
      itemId: 'ItemId',
      startStatus: 'StartStatus',
      affectedCount: 'AffectedCount',
      riskAssertType: 'RiskAssertType',
      riskItemResources: 'RiskItemResources',
      title: 'Title',
      taskId: 'TaskId',
      checkTime: 'CheckTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      status: 'string',
      riskLevel: 'string',
      sort: 'number',
      repairStatus: 'string',
      remainingTime: 'number',
      itemId: 'number',
      startStatus: 'string',
      affectedCount: 'number',
      riskAssertType: 'string',
      riskItemResources: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyListRiskItemResources },
      title: 'string',
      taskId: 'number',
      checkTime: 'number',
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
  status?: string;
  sort?: number;
  remainingTime?: number;
  countByStatus?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus[];
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      sort: 'Sort',
      remainingTime: 'RemainingTime',
      countByStatus: 'CountByStatus',
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      sort: 'number',
      remainingTime: 'number',
      countByStatus: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus },
      title: 'string',
      id: 'number',
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

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummary extends $tea.Model {
  itemCount?: number;
  groups?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups[];
  affectedAssetCount?: number;
  disabledRiskCount?: number;
  riskLevelCount?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount[];
  riskCount?: number;
  riskRate?: number;
  previousCount?: number;
  previousTime?: number;
  enabledRiskCount?: number;
  static names(): { [key: string]: string } {
    return {
      itemCount: 'ItemCount',
      groups: 'Groups',
      affectedAssetCount: 'AffectedAssetCount',
      disabledRiskCount: 'DisabledRiskCount',
      riskLevelCount: 'RiskLevelCount',
      riskCount: 'RiskCount',
      riskRate: 'RiskRate',
      previousCount: 'PreviousCount',
      previousTime: 'PreviousTime',
      enabledRiskCount: 'EnabledRiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemCount: 'number',
      groups: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups },
      affectedAssetCount: 'number',
      disabledRiskCount: 'number',
      riskLevelCount: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount },
      riskCount: 'number',
      riskRate: 'number',
      previousCount: 'number',
      previousTime: 'number',
      enabledRiskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeResponseBodyList extends $tea.Model {
  title?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      id: 'number',
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
  description?: string;
  title?: string;
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      title: 'Title',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      title: 'string',
      subType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBodySuggestions extends $tea.Model {
  suggestType?: string;
  points?: number;
  detail?: DescribeSecureSuggestionResponseBodySuggestionsDetail[];
  static names(): { [key: string]: string } {
    return {
      suggestType: 'SuggestType',
      points: 'Points',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestType: 'string',
      points: 'number',
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
  markMisValue?: string;
  supportedMisType?: string[];
  filedName?: string;
  filedAliasName?: string;
  static names(): { [key: string]: string } {
    return {
      markMisType: 'MarkMisType',
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
      filedName: 'FiledName',
      filedAliasName: 'FiledAliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markMisType: 'string',
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
      filedName: 'string',
      filedAliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource extends $tea.Model {
  markMisValue?: string;
  supportedMisType?: string[];
  filedName?: string;
  filedAliasName?: string;
  static names(): { [key: string]: string } {
    return {
      markMisValue: 'MarkMisValue',
      supportedMisType: 'SupportedMisType',
      filedName: 'FiledName',
      filedAliasName: 'FiledAliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markMisValue: 'string',
      supportedMisType: { 'type': 'array', 'itemType': 'string' },
      filedName: 'string',
      filedAliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponse extends $tea.Model {
  operationParams?: string;
  operationCode?: string;
  markField?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField[];
  userCanOperate?: boolean;
  markFieldsSource?: DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkFieldsSource[];
  static names(): { [key: string]: string } {
    return {
      operationParams: 'OperationParams',
      operationCode: 'OperationCode',
      markField: 'MarkField',
      userCanOperate: 'UserCanOperate',
      markFieldsSource: 'MarkFieldsSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationParams: 'string',
      operationCode: 'string',
      markField: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperationsResponseMarkField },
      userCanOperate: 'boolean',
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
  remindCount?: number;
  valueArray?: string[];
  timeArray?: string[];
  remindList?: string[];
  levelsOn?: string[];
  seriousCount?: number;
  totalCount?: number;
  dateArray?: string[];
  suspiciousList?: string[];
  seriousList?: string[];
  static names(): { [key: string]: string } {
    return {
      suspiciousCount: 'SuspiciousCount',
      remindCount: 'RemindCount',
      valueArray: 'ValueArray',
      timeArray: 'TimeArray',
      remindList: 'RemindList',
      levelsOn: 'LevelsOn',
      seriousCount: 'SeriousCount',
      totalCount: 'TotalCount',
      dateArray: 'DateArray',
      suspiciousList: 'SuspiciousList',
      seriousList: 'SeriousList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspiciousCount: 'number',
      remindCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      remindList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      seriousCount: 'number',
      totalCount: 'number',
      dateArray: { 'type': 'array', 'itemType': 'string' },
      suspiciousList: { 'type': 'array', 'itemType': 'string' },
      seriousList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyHealthCheck extends $tea.Model {
  highCount?: number;
  lowCount?: number;
  valueArray?: string[];
  timeArray?: string[];
  levelsOn?: string[];
  lowList?: string[];
  mediumList?: string[];
  totalCount?: number;
  mediumCount?: number;
  dateArray?: string[];
  highList?: string[];
  static names(): { [key: string]: string } {
    return {
      highCount: 'HighCount',
      lowCount: 'LowCount',
      valueArray: 'ValueArray',
      timeArray: 'TimeArray',
      levelsOn: 'LevelsOn',
      lowList: 'LowList',
      mediumList: 'MediumList',
      totalCount: 'TotalCount',
      mediumCount: 'MediumCount',
      dateArray: 'DateArray',
      highList: 'HighList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highCount: 'number',
      lowCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      lowList: { 'type': 'array', 'itemType': 'string' },
      mediumList: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      mediumCount: 'number',
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
  nntfList?: string[];
  asapList?: string[];
  valueArray?: string[];
  timeArray?: string[];
  levelsOn?: string[];
  laterList?: string[];
  laterCount?: number;
  totalCount?: number;
  dateArray?: string[];
  asapCount?: number;
  static names(): { [key: string]: string } {
    return {
      nntfCount: 'NntfCount',
      nntfList: 'NntfList',
      asapList: 'AsapList',
      valueArray: 'ValueArray',
      timeArray: 'TimeArray',
      levelsOn: 'LevelsOn',
      laterList: 'LaterList',
      laterCount: 'LaterCount',
      totalCount: 'TotalCount',
      dateArray: 'DateArray',
      asapCount: 'AsapCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nntfCount: 'number',
      nntfList: { 'type': 'array', 'itemType': 'string' },
      asapList: { 'type': 'array', 'itemType': 'string' },
      valueArray: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      laterList: { 'type': 'array', 'itemType': 'string' },
      laterCount: 'number',
      totalCount: 'number',
      dateArray: { 'type': 'array', 'itemType': 'string' },
      asapCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyAttackEvent extends $tea.Model {
  valueArray?: string[];
  totalCount?: number;
  dateArray?: string[];
  static names(): { [key: string]: string } {
    return {
      valueArray: 'ValueArray',
      totalCount: 'TotalCount',
      dateArray: 'DateArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      dateArray: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeStrategyExecDetailResponseBodyFailedEcsList extends $tea.Model {
  instanceName?: string;
  IP?: string;
  intranetIp?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      IP: 'IP',
      intranetIp: 'IntranetIp',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      IP: 'string',
      intranetIp: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStratetyResponseBodyStrategiesConfigTargets extends $tea.Model {
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

export class DescribeStratetyResponseBodyStrategies extends $tea.Model {
  execStatus?: number;
  type?: number;
  configTargets?: DescribeStratetyResponseBodyStrategiesConfigTargets[];
  cycleStartTime?: number;
  ecsCount?: number;
  processRate?: number;
  cycleDays?: number;
  riskCount?: number;
  name?: string;
  passRate?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      execStatus: 'ExecStatus',
      type: 'Type',
      configTargets: 'ConfigTargets',
      cycleStartTime: 'CycleStartTime',
      ecsCount: 'EcsCount',
      processRate: 'ProcessRate',
      cycleDays: 'CycleDays',
      riskCount: 'RiskCount',
      name: 'Name',
      passRate: 'PassRate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execStatus: 'number',
      type: 'number',
      configTargets: { 'type': 'array', 'itemType': DescribeStratetyResponseBodyStrategiesConfigTargets },
      cycleStartTime: 'number',
      ecsCount: 'number',
      processRate: 'number',
      cycleDays: 'number',
      riskCount: 'number',
      name: 'string',
      passRate: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailResponseBodyDetails extends $tea.Model {
  type?: string;
  value?: string;
  name?: string;
  infoType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      name: 'Name',
      infoType: 'InfoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      name: 'string',
      infoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBodyQuaraFiles extends $tea.Model {
  status?: string;
  eventName?: string;
  internetIp?: string;
  ip?: string;
  tag?: string;
  uuid?: string;
  eventType?: string;
  instanceName?: string;
  path?: string;
  md5?: string;
  id?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      eventName: 'EventName',
      internetIp: 'InternetIp',
      ip: 'Ip',
      tag: 'Tag',
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
      status: 'string',
      eventName: 'string',
      internetIp: 'string',
      ip: 'string',
      tag: 'string',
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

export class DescribeSuspEventsResponseBodySuspEvents extends $tea.Model {
  stages?: string;
  internetIp?: string;
  k8sClusterName?: string;
  containerImageId?: string;
  lastTimeStamp?: number;
  occurrenceTime?: string;
  alarmUniqueInfo?: string;
  desc?: string;
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  canCancelFault?: boolean;
  alarmEventNameDisplay?: string;
  appName?: string;
  securityEventIds?: string;
  canBeDealOnLine?: boolean;
  markMisRules?: string;
  containerImageName?: string;
  k8sClusterId?: string;
  containHwMode?: boolean;
  instanceName?: string;
  k8sNodeId?: string;
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
      details: 'Details',
      canCancelFault: 'CanCancelFault',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      appName: 'AppName',
      securityEventIds: 'SecurityEventIds',
      canBeDealOnLine: 'CanBeDealOnLine',
      markMisRules: 'MarkMisRules',
      containerImageName: 'ContainerImageName',
      k8sClusterId: 'K8sClusterId',
      containHwMode: 'ContainHwMode',
      instanceName: 'InstanceName',
      k8sNodeId: 'K8sNodeId',
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
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
      canCancelFault: 'boolean',
      alarmEventNameDisplay: 'string',
      appName: 'string',
      securityEventIds: 'string',
      canBeDealOnLine: 'boolean',
      markMisRules: 'string',
      containerImageName: 'string',
      k8sClusterId: 'string',
      containHwMode: 'boolean',
      instanceName: 'string',
      k8sNodeId: 'string',
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
  type?: string;
  values?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      values: 'Values',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      values: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcHoneyPotListResponseBodyVpcHoneyPotDTOList extends $tea.Model {
  vpcId?: string;
  vpcStatus?: string;
  createTime?: number;
  honeyPotExistence?: boolean;
  vpcRegionId?: string;
  honeyPotInstanceStatus?: string;
  honeyPotVSwitchId?: string;
  vpcSwitchIdList?: string[];
  vpcName?: string;
  honeyPotEniInstanceId?: string;
  cidrBlock?: string;
  honeyPotEcsInstanceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcStatus: 'VpcStatus',
      createTime: 'CreateTime',
      honeyPotExistence: 'HoneyPotExistence',
      vpcRegionId: 'VpcRegionId',
      honeyPotInstanceStatus: 'HoneyPotInstanceStatus',
      honeyPotVSwitchId: 'HoneyPotVSwitchId',
      vpcSwitchIdList: 'VpcSwitchIdList',
      vpcName: 'VpcName',
      honeyPotEniInstanceId: 'HoneyPotEniInstanceId',
      cidrBlock: 'CidrBlock',
      honeyPotEcsInstanceStatus: 'HoneyPotEcsInstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcStatus: 'string',
      createTime: 'number',
      honeyPotExistence: 'boolean',
      vpcRegionId: 'string',
      honeyPotInstanceStatus: 'string',
      honeyPotVSwitchId: 'string',
      vpcSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      vpcName: 'string',
      honeyPotEniInstanceId: 'string',
      cidrBlock: 'string',
      honeyPotEcsInstanceStatus: 'string',
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
  complexity?: string;
  summary?: string;
  product?: string;
  pocCreateTime?: number;
  cveId?: string;
  cnvdId?: string;
  reference?: string;
  cvssScore?: string;
  vendor?: string;
  pocDisclosureTime?: number;
  cvssVector?: string;
  classify?: string;
  vulLevel?: string;
  releaseTime?: number;
  title?: string;
  solution?: string;
  content?: string;
  poc?: string;
  classifys?: DescribeVulDetailsResponseBodyCvesClassifys[];
  static names(): { [key: string]: string } {
    return {
      complexity: 'Complexity',
      summary: 'Summary',
      product: 'Product',
      pocCreateTime: 'PocCreateTime',
      cveId: 'CveId',
      cnvdId: 'CnvdId',
      reference: 'Reference',
      cvssScore: 'CvssScore',
      vendor: 'Vendor',
      pocDisclosureTime: 'PocDisclosureTime',
      cvssVector: 'CvssVector',
      classify: 'Classify',
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
      complexity: 'string',
      summary: 'string',
      product: 'string',
      pocCreateTime: 'number',
      cveId: 'string',
      cnvdId: 'string',
      reference: 'string',
      cvssScore: 'string',
      vendor: 'string',
      pocDisclosureTime: 'number',
      cvssVector: 'string',
      classify: 'string',
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
  status?: number;
  cveList?: string[];
  primaryId?: number;
  tag?: string;
  osRelease?: string;
  rpmEntityList?: DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  ip?: string;
  os?: string;
  lastTs?: number;
  necessity?: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity;
  aliasName?: string;
  absolutePath?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      cveList: 'cveList',
      primaryId: 'PrimaryId',
      tag: 'Tag',
      osRelease: 'OsRelease',
      rpmEntityList: 'RpmEntityList',
      ip: 'Ip',
      os: 'Os',
      lastTs: 'LastTs',
      necessity: 'Necessity',
      aliasName: 'AliasName',
      absolutePath: 'AbsolutePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      cveList: { 'type': 'array', 'itemType': 'string' },
      primaryId: 'number',
      tag: 'string',
      osRelease: 'string',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
      ip: 'string',
      os: 'string',
      lastTs: 'number',
      necessity: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity,
      aliasName: 'string',
      absolutePath: 'string',
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
  containerImageId?: string;
  primaryId?: number;
  tag?: string;
  k8sClusterId?: string;
  containerImageName?: string;
  k8sNodeId?: string;
  instanceName?: string;
  online?: boolean;
  containerInnerPath?: string;
  osVersion?: string;
  name?: string;
  extendContentJson?: DescribeVulListResponseBodyVulRecordsExtendContentJson;
  resultCode?: string;
  instanceId?: string;
  related?: string;
  intranetIp?: string;
  lastTs?: number;
  firstTs?: number;
  necessity?: string;
  repairTs?: number;
  uuid?: string;
  k8sPodName?: string;
  containerId?: string;
  groupId?: number;
  resultMessage?: string;
  k8sNamespace?: string;
  aliasName?: string;
  k8sNodeName?: string;
  containerName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      modifyTs: 'ModifyTs',
      internetIp: 'InternetIp',
      containerImageId: 'ContainerImageId',
      primaryId: 'PrimaryId',
      tag: 'Tag',
      k8sClusterId: 'K8sClusterId',
      containerImageName: 'ContainerImageName',
      k8sNodeId: 'K8sNodeId',
      instanceName: 'InstanceName',
      online: 'Online',
      containerInnerPath: 'ContainerInnerPath',
      osVersion: 'OsVersion',
      name: 'Name',
      extendContentJson: 'ExtendContentJson',
      resultCode: 'ResultCode',
      instanceId: 'InstanceId',
      related: 'Related',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      firstTs: 'FirstTs',
      necessity: 'Necessity',
      repairTs: 'RepairTs',
      uuid: 'Uuid',
      k8sPodName: 'K8sPodName',
      containerId: 'ContainerId',
      groupId: 'GroupId',
      resultMessage: 'ResultMessage',
      k8sNamespace: 'K8sNamespace',
      aliasName: 'AliasName',
      k8sNodeName: 'K8sNodeName',
      containerName: 'ContainerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'string',
      modifyTs: 'number',
      internetIp: 'string',
      containerImageId: 'string',
      primaryId: 'number',
      tag: 'string',
      k8sClusterId: 'string',
      containerImageName: 'string',
      k8sNodeId: 'string',
      instanceName: 'string',
      online: 'boolean',
      containerInnerPath: 'string',
      osVersion: 'string',
      name: 'string',
      extendContentJson: DescribeVulListResponseBodyVulRecordsExtendContentJson,
      resultCode: 'string',
      instanceId: 'string',
      related: 'string',
      intranetIp: 'string',
      lastTs: 'number',
      firstTs: 'number',
      necessity: 'string',
      repairTs: 'number',
      uuid: 'string',
      k8sPodName: 'string',
      containerId: 'string',
      groupId: 'number',
      resultMessage: 'string',
      k8sNamespace: 'string',
      aliasName: 'string',
      k8sNodeName: 'string',
      containerName: 'string',
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
  serviceDetail?: string;
  internetIp?: string;
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
      serviceDetail: 'ServiceDetail',
      internetIp: 'InternetIp',
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
      serviceDetail: 'string',
      internetIp: 'string',
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-hangzhou': "tds.aliyuncs.com",
      'ap-southeast-3': "tds.ap-southeast-3.aliyuncs.com",
      'cn-shanghai-et2-b01': "tds.cn-shanghai-et2-b01.aliyuncs.com",
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

  async describeAllEntityWithOptions(request: DescribeAllEntityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllEntityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllEntityResponse>(await this.doRPCRequest("DescribeAllEntity", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllEntityResponse({}));
  }

  async describeAllEntity(request: DescribeAllEntityRequest): Promise<DescribeAllEntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllEntityWithOptions(request, runtime);
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

  async describeAutoDelConfigWithOptions(request: DescribeAutoDelConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoDelConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAutoDelConfigResponse>(await this.doRPCRequest("DescribeAutoDelConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAutoDelConfigResponse({}));
  }

  async describeAutoDelConfig(request: DescribeAutoDelConfigRequest): Promise<DescribeAutoDelConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoDelConfigWithOptions(request, runtime);
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

  async describeCloudProductFieldStatisticsWithOptions(request: DescribeCloudProductFieldStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCloudProductFieldStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCloudProductFieldStatisticsResponse>(await this.doRPCRequest("DescribeCloudProductFieldStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCloudProductFieldStatisticsResponse({}));
  }

  async describeCloudProductFieldStatistics(request: DescribeCloudProductFieldStatisticsRequest): Promise<DescribeCloudProductFieldStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCloudProductFieldStatisticsWithOptions(request, runtime);
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

  async describeEmgVulGroupWithOptions(request: DescribeEmgVulGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEmgVulGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeEmgVulGroupResponse>(await this.doRPCRequest("DescribeEmgVulGroup", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeEmgVulGroupResponse({}));
  }

  async describeEmgVulGroup(request: DescribeEmgVulGroupRequest): Promise<DescribeEmgVulGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEmgVulGroupWithOptions(request, runtime);
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

  async describeExposedStatisticsWithOptions(request: DescribeExposedStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExposedStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExposedStatisticsResponse>(await this.doRPCRequest("DescribeExposedStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExposedStatisticsResponse({}));
  }

  async describeExposedStatistics(request: DescribeExposedStatisticsRequest): Promise<DescribeExposedStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExposedStatisticsWithOptions(request, runtime);
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

  async describeHoneyPotAuthWithOptions(request: DescribeHoneyPotAuthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHoneyPotAuthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHoneyPotAuthResponse>(await this.doRPCRequest("DescribeHoneyPotAuth", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHoneyPotAuthResponse({}));
  }

  async describeHoneyPotAuth(request: DescribeHoneyPotAuthRequest): Promise<DescribeHoneyPotAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHoneyPotAuthWithOptions(request, runtime);
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

  async describeImageStatisticsWithOptions(request: DescribeImageStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImageStatisticsResponse>(await this.doRPCRequest("DescribeImageStatistics", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImageStatisticsResponse({}));
  }

  async describeImageStatistics(request: DescribeImageStatisticsRequest): Promise<DescribeImageStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageStatisticsWithOptions(request, runtime);
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

  async describeModuleConfigWithOptions(request: DescribeModuleConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModuleConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeModuleConfigResponse>(await this.doRPCRequest("DescribeModuleConfig", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeModuleConfigResponse({}));
  }

  async describeModuleConfig(request: DescribeModuleConfigRequest): Promise<DescribeModuleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModuleConfigWithOptions(request, runtime);
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

  async describeStratetyWithOptions(request: DescribeStratetyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStratetyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeStratetyResponse>(await this.doRPCRequest("DescribeStratety", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeStratetyResponse({}));
  }

  async describeStratety(request: DescribeStratetyRequest): Promise<DescribeStratetyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStratetyWithOptions(request, runtime);
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

  async describeVpcHoneyPotCriteriaWithOptions(request: DescribeVpcHoneyPotCriteriaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcHoneyPotCriteriaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcHoneyPotCriteriaResponse>(await this.doRPCRequest("DescribeVpcHoneyPotCriteria", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcHoneyPotCriteriaResponse({}));
  }

  async describeVpcHoneyPotCriteria(request: DescribeVpcHoneyPotCriteriaRequest): Promise<DescribeVpcHoneyPotCriteriaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcHoneyPotCriteriaWithOptions(request, runtime);
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

  async describeVpcListWithOptions(request: DescribeVpcListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVpcListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVpcListResponse>(await this.doRPCRequest("DescribeVpcList", "2018-12-03", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVpcListResponse({}));
  }

  async describeVpcList(request: DescribeVpcListRequest): Promise<DescribeVpcListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVpcListWithOptions(request, runtime);
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
