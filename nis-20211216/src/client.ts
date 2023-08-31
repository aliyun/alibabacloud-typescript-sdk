// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAndAnalyzeNetworkPathRequest extends $tea.Model {
  auditParam?: string;
  protocol?: string;
  regionId?: string;
  sourceId?: string;
  sourceIpAddress?: string;
  sourcePort?: number;
  sourceType?: string;
  targetId?: string;
  targetIpAddress?: string;
  targetPort?: number;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      auditParam: 'AuditParam',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditParam: 'string',
      protocol: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'number',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndAnalyzeNetworkPathResponseBody extends $tea.Model {
  networkReachableAnalysisId?: string;
  protocol?: string;
  requestId?: string;
  sourceId?: string;
  sourceIpAddress?: string;
  sourcePort?: string;
  sourceType?: string;
  targetId?: string;
  targetIpAddress?: string;
  targetPort?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      protocol: 'Protocol',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      protocol: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'string',
      sourceType: 'string',
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndAnalyzeNetworkPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAndAnalyzeNetworkPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAndAnalyzeNetworkPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathRequest extends $tea.Model {
  networkPathDescription?: string;
  networkPathName?: string;
  protocol?: string;
  regionId?: string;
  sourceId?: string;
  sourceIpAddress?: string;
  sourcePort?: number;
  sourceType?: string;
  tag?: CreateNetworkPathRequestTag[];
  targetId?: string;
  targetIpAddress?: string;
  targetPort?: number;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathDescription: 'NetworkPathDescription',
      networkPathName: 'NetworkPathName',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      tag: 'Tag',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathDescription: 'string',
      networkPathName: 'string',
      protocol: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkPathRequestTag },
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'number',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathResponseBody extends $tea.Model {
  networkPathId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathId: 'NetworkPathId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNetworkPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisRequest extends $tea.Model {
  auditParam?: string;
  networkPathId?: string;
  regionId?: string;
  tag?: CreateNetworkReachableAnalysisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      auditParam: 'AuditParam',
      networkPathId: 'NetworkPathId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditParam: 'string',
      networkPathId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkReachableAnalysisRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisResponseBody extends $tea.Model {
  networkReachableAnalysisId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkReachableAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNetworkReachableAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkReachableAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathRequest extends $tea.Model {
  networkPathIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathIds: 'NetworkPathIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathShrinkRequest extends $tea.Model {
  networkPathIdsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPathIdsShrink: 'NetworkPathIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathIdsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPathResponseBody extends $tea.Model {
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

export class DeleteNetworkPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNetworkPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisRequest extends $tea.Model {
  networkReachableAnalysisIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisIds: 'NetworkReachableAnalysisIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisShrinkRequest extends $tea.Model {
  networkReachableAnalysisIdsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisIdsShrink: 'NetworkReachableAnalysisIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisIdsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkReachableAnalysisResponseBody extends $tea.Model {
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

export class DeleteNetworkReachableAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNetworkReachableAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkReachableAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleRequest extends $tea.Model {
  accountIds?: string[];
  beginTime?: number;
  cloudIp?: string;
  cloudIsp?: string;
  cloudPort?: string;
  direction?: string;
  endTime?: number;
  instanceId?: string;
  instanceList?: string[];
  orderBy?: string;
  otherCity?: string;
  otherCountry?: string;
  otherIp?: string;
  otherIsp?: string;
  otherPort?: string;
  protocol?: string;
  regionId?: string;
  sort?: string;
  topN?: number;
  tupleType?: number;
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      cloudIp: 'CloudIp',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceList: 'InstanceList',
      orderBy: 'OrderBy',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      tupleType: 'TupleType',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      cloudIp: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      instanceId: 'string',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      orderBy: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      tupleType: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleShrinkRequest extends $tea.Model {
  accountIds?: string[];
  beginTime?: number;
  cloudIp?: string;
  cloudIsp?: string;
  cloudPort?: string;
  direction?: string;
  endTime?: number;
  instanceId?: string;
  instanceListShrink?: string;
  orderBy?: string;
  otherCity?: string;
  otherCountry?: string;
  otherIp?: string;
  otherIsp?: string;
  otherPort?: string;
  protocol?: string;
  regionId?: string;
  sort?: string;
  topN?: number;
  tupleType?: number;
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      beginTime: 'BeginTime',
      cloudIp: 'CloudIp',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceListShrink: 'InstanceList',
      orderBy: 'OrderBy',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      tupleType: 'TupleType',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      beginTime: 'number',
      cloudIp: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      instanceId: 'string',
      instanceListShrink: 'string',
      orderBy: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      tupleType: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleResponseBody extends $tea.Model {
  data?: GetInternetTupleResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetInternetTupleResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInternetTupleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInternetTupleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInternetTupleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  ip?: string;
  natGatewayId?: string;
  orderBy?: string;
  regionId?: string;
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      ip: 'Ip',
      natGatewayId: 'NatGatewayId',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      ip: 'string',
      natGatewayId: 'string',
      orderBy: 'string',
      regionId: 'string',
      topN: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNResponseBody extends $tea.Model {
  isTopNOpen?: boolean;
  natGatewayTopN?: GetNatTopNResponseBodyNatGatewayTopN[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTopNOpen: 'IsTopNOpen',
      natGatewayTopN: 'NatGatewayTopN',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTopNOpen: 'boolean',
      natGatewayTopN: { 'type': 'array', 'itemType': GetNatTopNResponseBodyNatGatewayTopN },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNatTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNatTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkReachableAnalysisRequest extends $tea.Model {
  networkReachableAnalysisId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkReachableAnalysisResponseBody extends $tea.Model {
  aliUid?: number;
  createTime?: string;
  networkPathId?: string;
  networkPathParameter?: string;
  networkReachableAnalysisId?: string;
  networkReachableAnalysisResult?: string;
  networkReachableAnalysisStatus?: string;
  reachable?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      networkPathId: 'NetworkPathId',
      networkPathParameter: 'NetworkPathParameter',
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      networkReachableAnalysisResult: 'NetworkReachableAnalysisResult',
      networkReachableAnalysisStatus: 'NetworkReachableAnalysisStatus',
      reachable: 'Reachable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      createTime: 'string',
      networkPathId: 'string',
      networkPathParameter: 'string',
      networkReachableAnalysisId: 'string',
      networkReachableAnalysisResult: 'string',
      networkReachableAnalysisStatus: 'string',
      reachable: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkReachableAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNetworkReachableAnalysisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNetworkReachableAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNRequest extends $tea.Model {
  accountIds?: string[];
  bandwithPackageId?: string;
  beginTime?: number;
  cenId?: string;
  direction?: string;
  endTime?: number;
  groupBy?: string;
  orderBy?: string;
  otherIp?: string;
  otherPort?: string;
  otherRegion?: string;
  protocol?: string;
  sort?: string;
  thisIp?: string;
  thisPort?: string;
  thisRegion?: string;
  topN?: number;
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      bandwithPackageId: 'BandwithPackageId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      protocol: 'Protocol',
      sort: 'Sort',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      bandwithPackageId: 'string',
      beginTime: 'number',
      cenId: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      protocol: 'string',
      sort: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNShrinkRequest extends $tea.Model {
  accountIdsShrink?: string;
  bandwithPackageId?: string;
  beginTime?: number;
  cenId?: string;
  direction?: string;
  endTime?: number;
  groupBy?: string;
  orderBy?: string;
  otherIp?: string;
  otherPort?: string;
  otherRegion?: string;
  protocol?: string;
  sort?: string;
  thisIp?: string;
  thisPort?: string;
  thisRegion?: string;
  topN?: number;
  useMultiAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      bandwithPackageId: 'BandwithPackageId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      protocol: 'Protocol',
      sort: 'Sort',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      bandwithPackageId: 'string',
      beginTime: 'number',
      cenId: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      protocol: 'string',
      sort: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponseBody extends $tea.Model {
  requestId?: string;
  transitRouterFlowTopN?: GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterFlowTopN: 'TransitRouterFlowTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterFlowTopN: { 'type': 'array', 'itemType': GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTransitRouterFlowTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTransitRouterFlowTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNRequest extends $tea.Model {
  accountIds?: string[];
  attachmentId?: string;
  beginTime?: number;
  cenId?: string;
  cloudIp?: string;
  cloudPort?: string;
  direction?: string;
  endTime?: number;
  groupBy?: string;
  orderBy?: string;
  otherIp?: string;
  otherPort?: string;
  protocol?: string;
  regionId?: string;
  sort?: string;
  topN?: number;
  useMultiAccount?: boolean;
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      attachmentId: 'AttachmentId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      attachmentId: 'string',
      beginTime: 'number',
      cenId: 'string',
      cloudIp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNShrinkRequest extends $tea.Model {
  accountIdsShrink?: string;
  attachmentId?: string;
  beginTime?: number;
  cenId?: string;
  cloudIp?: string;
  cloudPort?: string;
  direction?: string;
  endTime?: number;
  groupBy?: string;
  orderBy?: string;
  otherIp?: string;
  otherPort?: string;
  protocol?: string;
  regionId?: string;
  sort?: string;
  topN?: number;
  useMultiAccount?: boolean;
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      attachmentId: 'AttachmentId',
      beginTime: 'BeginTime',
      cenId: 'CenId',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      direction: 'Direction',
      endTime: 'EndTime',
      groupBy: 'GroupBy',
      orderBy: 'OrderBy',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      protocol: 'Protocol',
      regionId: 'RegionId',
      sort: 'Sort',
      topN: 'TopN',
      useMultiAccount: 'UseMultiAccount',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      attachmentId: 'string',
      beginTime: 'number',
      cenId: 'string',
      cloudIp: 'string',
      cloudPort: 'string',
      direction: 'string',
      endTime: 'number',
      groupBy: 'string',
      orderBy: 'string',
      otherIp: 'string',
      otherPort: 'string',
      protocol: 'string',
      regionId: 'string',
      sort: 'string',
      topN: 'number',
      useMultiAccount: 'boolean',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNResponseBody extends $tea.Model {
  requestId?: string;
  virtualBorderRouterFlowlogTopN?: GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualBorderRouterFlowlogTopN: 'VirtualBorderRouterFlowlogTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualBorderRouterFlowlogTopN: { 'type': 'array', 'itemType': GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVbrFlowTopNResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVbrFlowTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPathRequestTag extends $tea.Model {
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

export class CreateNetworkReachableAnalysisRequestTag extends $tea.Model {
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

export class GetInternetTupleResponseBodyData extends $tea.Model {
  accessRegion?: string;
  beginTime?: string;
  byteCount?: number;
  cloudCity?: string;
  cloudCountry?: string;
  cloudIp?: string;
  cloudIsp?: string;
  cloudPort?: string;
  cloudProduct?: string;
  cloudProvince?: string;
  direction?: string;
  inByteCount?: number;
  inOutOrderCount?: number;
  inPacketCount?: number;
  inRetranCount?: number;
  instanceId?: string;
  otherCity?: string;
  otherCountry?: string;
  otherIp?: string;
  otherIsp?: string;
  otherPort?: string;
  otherProduct?: string;
  otherProvince?: string;
  outByteCount?: number;
  outOrderCount?: number;
  outOutOrderCount?: number;
  outPacketCount?: number;
  outRetranCount?: number;
  packetCount?: number;
  protocol?: string;
  retranCount?: number;
  rtt?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegion: 'AccessRegion',
      beginTime: 'BeginTime',
      byteCount: 'ByteCount',
      cloudCity: 'CloudCity',
      cloudCountry: 'CloudCountry',
      cloudIp: 'CloudIp',
      cloudIsp: 'CloudIsp',
      cloudPort: 'CloudPort',
      cloudProduct: 'CloudProduct',
      cloudProvince: 'CloudProvince',
      direction: 'Direction',
      inByteCount: 'InByteCount',
      inOutOrderCount: 'InOutOrderCount',
      inPacketCount: 'InPacketCount',
      inRetranCount: 'InRetranCount',
      instanceId: 'InstanceId',
      otherCity: 'OtherCity',
      otherCountry: 'OtherCountry',
      otherIp: 'OtherIp',
      otherIsp: 'OtherIsp',
      otherPort: 'OtherPort',
      otherProduct: 'OtherProduct',
      otherProvince: 'OtherProvince',
      outByteCount: 'OutByteCount',
      outOrderCount: 'OutOrderCount',
      outOutOrderCount: 'OutOutOrderCount',
      outPacketCount: 'OutPacketCount',
      outRetranCount: 'OutRetranCount',
      packetCount: 'PacketCount',
      protocol: 'Protocol',
      retranCount: 'RetranCount',
      rtt: 'Rtt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegion: 'string',
      beginTime: 'string',
      byteCount: 'number',
      cloudCity: 'string',
      cloudCountry: 'string',
      cloudIp: 'string',
      cloudIsp: 'string',
      cloudPort: 'string',
      cloudProduct: 'string',
      cloudProvince: 'string',
      direction: 'string',
      inByteCount: 'number',
      inOutOrderCount: 'number',
      inPacketCount: 'number',
      inRetranCount: 'number',
      instanceId: 'string',
      otherCity: 'string',
      otherCountry: 'string',
      otherIp: 'string',
      otherIsp: 'string',
      otherPort: 'string',
      otherProduct: 'string',
      otherProvince: 'string',
      outByteCount: 'number',
      outOrderCount: 'number',
      outOutOrderCount: 'number',
      outPacketCount: 'number',
      outRetranCount: 'number',
      packetCount: 'number',
      protocol: 'string',
      retranCount: 'number',
      rtt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNatTopNResponseBodyNatGatewayTopN extends $tea.Model {
  activeSessionCount?: number;
  inBps?: number;
  inFlowPerMinute?: number;
  inPps?: number;
  ip?: string;
  newSessionPerSecond?: number;
  outBps?: number;
  outFlowPerMinute?: number;
  outPps?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      inBps: 'InBps',
      inFlowPerMinute: 'InFlowPerMinute',
      inPps: 'InPps',
      ip: 'Ip',
      newSessionPerSecond: 'NewSessionPerSecond',
      outBps: 'OutBps',
      outFlowPerMinute: 'OutFlowPerMinute',
      outPps: 'OutPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      inBps: 'number',
      inFlowPerMinute: 'number',
      inPps: 'number',
      ip: 'string',
      newSessionPerSecond: 'number',
      outBps: 'number',
      outFlowPerMinute: 'number',
      outPps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransitRouterFlowTopNResponseBodyTransitRouterFlowTopN extends $tea.Model {
  accountId?: string;
  bandwithPackageId?: string;
  bytes?: number;
  cenId?: string;
  endTime?: string;
  otherIp?: string;
  otherPort?: string;
  otherRegion?: string;
  packets?: number;
  protocol?: string;
  startTime?: string;
  thisIp?: string;
  thisPort?: string;
  thisRegion?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bandwithPackageId: 'BandwithPackageId',
      bytes: 'Bytes',
      cenId: 'CenId',
      endTime: 'EndTime',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      otherRegion: 'OtherRegion',
      packets: 'Packets',
      protocol: 'Protocol',
      startTime: 'StartTime',
      thisIp: 'ThisIp',
      thisPort: 'ThisPort',
      thisRegion: 'ThisRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bandwithPackageId: 'string',
      bytes: 'number',
      cenId: 'string',
      endTime: 'string',
      otherIp: 'string',
      otherPort: 'string',
      otherRegion: 'string',
      packets: 'number',
      protocol: 'string',
      startTime: 'string',
      thisIp: 'string',
      thisPort: 'string',
      thisRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVbrFlowTopNResponseBodyVirtualBorderRouterFlowlogTopN extends $tea.Model {
  accountId?: string;
  attachmentId?: string;
  bytes?: number;
  cloudIp?: string;
  cloudPort?: string;
  cloudRegion?: string;
  otherIp?: string;
  otherPort?: string;
  packets?: number;
  protocol?: string;
  virtualBorderRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      attachmentId: 'AttachmentId',
      bytes: 'Bytes',
      cloudIp: 'CloudIp',
      cloudPort: 'CloudPort',
      cloudRegion: 'CloudRegion',
      otherIp: 'OtherIp',
      otherPort: 'OtherPort',
      packets: 'Packets',
      protocol: 'Protocol',
      virtualBorderRouterId: 'VirtualBorderRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      attachmentId: 'string',
      bytes: 'number',
      cloudIp: 'string',
      cloudPort: 'string',
      cloudRegion: 'string',
      otherIp: 'string',
      otherPort: 'string',
      packets: 'number',
      protocol: 'string',
      virtualBorderRouterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nis", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
    * You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.
    *
    * @param request CreateAndAnalyzeNetworkPathRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAndAnalyzeNetworkPathResponse
   */
  async createAndAnalyzeNetworkPathWithOptions(request: CreateAndAnalyzeNetworkPathRequest, runtime: $Util.RuntimeOptions): Promise<CreateAndAnalyzeNetworkPathResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAndAnalyzeNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAndAnalyzeNetworkPathResponse>(await this.callApi(params, req, runtime), new CreateAndAnalyzeNetworkPathResponse({}));
  }

  /**
    * You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.
    *
    * @param request CreateAndAnalyzeNetworkPathRequest
    * @return CreateAndAnalyzeNetworkPathResponse
   */
  async createAndAnalyzeNetworkPath(request: CreateAndAnalyzeNetworkPathRequest): Promise<CreateAndAnalyzeNetworkPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAndAnalyzeNetworkPathWithOptions(request, runtime);
  }

  /**
    * *   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
    * *   You can create up to 100 network paths within one Alibaba Cloud account.
    *
    * @param request CreateNetworkPathRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNetworkPathResponse
   */
  async createNetworkPathWithOptions(request: CreateNetworkPathRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPathDescription)) {
      query["NetworkPathDescription"] = request.networkPathDescription;
    }

    if (!Util.isUnset(request.networkPathName)) {
      query["NetworkPathName"] = request.networkPathName;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    if (!Util.isUnset(request.sourcePort)) {
      query["SourcePort"] = request.sourcePort;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetIpAddress)) {
      query["TargetIpAddress"] = request.targetIpAddress;
    }

    if (!Util.isUnset(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkPathResponse>(await this.callApi(params, req, runtime), new CreateNetworkPathResponse({}));
  }

  /**
    * *   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
    * *   You can create up to 100 network paths within one Alibaba Cloud account.
    *
    * @param request CreateNetworkPathRequest
    * @return CreateNetworkPathResponse
   */
  async createNetworkPath(request: CreateNetworkPathRequest): Promise<CreateNetworkPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkPathWithOptions(request, runtime);
  }

  /**
    * *   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
    * *   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
    * *   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
    *
    * @param request CreateNetworkReachableAnalysisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNetworkReachableAnalysisResponse
   */
  async createNetworkReachableAnalysisWithOptions(request: CreateNetworkReachableAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkReachableAnalysisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditParam)) {
      query["AuditParam"] = request.auditParam;
    }

    if (!Util.isUnset(request.networkPathId)) {
      query["NetworkPathId"] = request.networkPathId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new CreateNetworkReachableAnalysisResponse({}));
  }

  /**
    * *   The **CreateNetworkReachableAnalysis** operation is used to create a task for analyzing the reachability of the network path that is created by calling the **CreateNetworkPath** operation and record the analysis results.
    * *   The **CreateNetworkReachableAnalysis** operation can be called to repeatedly analyze the reachability of a network path.
    * *   You can create up to 1,000 reachability analysis records within one Alibaba Cloud account.
    *
    * @param request CreateNetworkReachableAnalysisRequest
    * @return CreateNetworkReachableAnalysisResponse
   */
  async createNetworkReachableAnalysis(request: CreateNetworkReachableAnalysisRequest): Promise<CreateNetworkReachableAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkReachableAnalysisWithOptions(request, runtime);
  }

  async deleteNetworkPathWithOptions(tmpReq: DeleteNetworkPathRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkPathResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteNetworkPathShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.networkPathIds)) {
      request.networkPathIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkPathIds, "NetworkPathIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.networkPathIdsShrink)) {
      query["NetworkPathIds"] = request.networkPathIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkPath",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkPathResponse>(await this.callApi(params, req, runtime), new DeleteNetworkPathResponse({}));
  }

  async deleteNetworkPath(request: DeleteNetworkPathRequest): Promise<DeleteNetworkPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkPathWithOptions(request, runtime);
  }

  async deleteNetworkReachableAnalysisWithOptions(tmpReq: DeleteNetworkReachableAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkReachableAnalysisResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteNetworkReachableAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.networkReachableAnalysisIds)) {
      request.networkReachableAnalysisIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkReachableAnalysisIds, "NetworkReachableAnalysisIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.networkReachableAnalysisIdsShrink)) {
      query["NetworkReachableAnalysisIds"] = request.networkReachableAnalysisIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new DeleteNetworkReachableAnalysisResponse({}));
  }

  async deleteNetworkReachableAnalysis(request: DeleteNetworkReachableAnalysisRequest): Promise<DeleteNetworkReachableAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkReachableAnalysisWithOptions(request, runtime);
  }

  async getInternetTupleWithOptions(tmpReq: GetInternetTupleRequest, runtime: $Util.RuntimeOptions): Promise<GetInternetTupleResponse> {
    Util.validateModel(tmpReq);
    let request = new GetInternetTupleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cloudIp)) {
      query["CloudIp"] = request.cloudIp;
    }

    if (!Util.isUnset(request.cloudIsp)) {
      query["CloudIsp"] = request.cloudIsp;
    }

    if (!Util.isUnset(request.cloudPort)) {
      query["CloudPort"] = request.cloudPort;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.otherCity)) {
      query["OtherCity"] = request.otherCity;
    }

    if (!Util.isUnset(request.otherCountry)) {
      query["OtherCountry"] = request.otherCountry;
    }

    if (!Util.isUnset(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!Util.isUnset(request.otherIsp)) {
      query["OtherIsp"] = request.otherIsp;
    }

    if (!Util.isUnset(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.tupleType)) {
      query["TupleType"] = request.tupleType;
    }

    if (!Util.isUnset(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInternetTuple",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInternetTupleResponse>(await this.callApi(params, req, runtime), new GetInternetTupleResponse({}));
  }

  async getInternetTuple(request: GetInternetTupleRequest): Promise<GetInternetTupleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInternetTupleWithOptions(request, runtime);
  }

  async getNatTopNWithOptions(request: GetNatTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetNatTopNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.natGatewayId)) {
      query["NatGatewayId"] = request.natGatewayId;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNatTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNatTopNResponse>(await this.callApi(params, req, runtime), new GetNatTopNResponse({}));
  }

  async getNatTopN(request: GetNatTopNRequest): Promise<GetNatTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNatTopNWithOptions(request, runtime);
  }

  /**
    * **GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.
    * *   The **init** state indicates that the task is in progress.
    * *   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
    *
    * @param request GetNetworkReachableAnalysisRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysisWithOptions(request: GetNetworkReachableAnalysisRequest, runtime: $Util.RuntimeOptions): Promise<GetNetworkReachableAnalysisResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkReachableAnalysisId)) {
      query["NetworkReachableAnalysisId"] = request.networkReachableAnalysisId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNetworkReachableAnalysis",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNetworkReachableAnalysisResponse>(await this.callApi(params, req, runtime), new GetNetworkReachableAnalysisResponse({}));
  }

  /**
    * **GetNetworkReachableAnalysis** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can query the state of the task for analyzing network reachability.
    * *   The **init** state indicates that the task is in progress.
    * *   The **finish** state indicates that the task is complete. In this state, you can obtain the analysis result.
    *
    * @param request GetNetworkReachableAnalysisRequest
    * @return GetNetworkReachableAnalysisResponse
   */
  async getNetworkReachableAnalysis(request: GetNetworkReachableAnalysisRequest): Promise<GetNetworkReachableAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNetworkReachableAnalysisWithOptions(request, runtime);
  }

  async getTransitRouterFlowTopNWithOptions(tmpReq: GetTransitRouterFlowTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetTransitRouterFlowTopNResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTransitRouterFlowTopNShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.bandwithPackageId)) {
      query["BandwithPackageId"] = request.bandwithPackageId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!Util.isUnset(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!Util.isUnset(request.otherRegion)) {
      query["OtherRegion"] = request.otherRegion;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.thisIp)) {
      query["ThisIp"] = request.thisIp;
    }

    if (!Util.isUnset(request.thisPort)) {
      query["ThisPort"] = request.thisPort;
    }

    if (!Util.isUnset(request.thisRegion)) {
      query["ThisRegion"] = request.thisRegion;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTransitRouterFlowTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTransitRouterFlowTopNResponse>(await this.callApi(params, req, runtime), new GetTransitRouterFlowTopNResponse({}));
  }

  async getTransitRouterFlowTopN(request: GetTransitRouterFlowTopNRequest): Promise<GetTransitRouterFlowTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTransitRouterFlowTopNWithOptions(request, runtime);
  }

  async getVbrFlowTopNWithOptions(tmpReq: GetVbrFlowTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetVbrFlowTopNResponse> {
    Util.validateModel(tmpReq);
    let request = new GetVbrFlowTopNShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.attachmentId)) {
      query["AttachmentId"] = request.attachmentId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cloudIp)) {
      query["CloudIp"] = request.cloudIp;
    }

    if (!Util.isUnset(request.cloudPort)) {
      query["CloudPort"] = request.cloudPort;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.otherIp)) {
      query["OtherIp"] = request.otherIp;
    }

    if (!Util.isUnset(request.otherPort)) {
      query["OtherPort"] = request.otherPort;
    }

    if (!Util.isUnset(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.topN)) {
      query["TopN"] = request.topN;
    }

    if (!Util.isUnset(request.useMultiAccount)) {
      query["UseMultiAccount"] = request.useMultiAccount;
    }

    if (!Util.isUnset(request.virtualBorderRouterId)) {
      query["VirtualBorderRouterId"] = request.virtualBorderRouterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVbrFlowTopN",
      version: "2021-12-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVbrFlowTopNResponse>(await this.callApi(params, req, runtime), new GetVbrFlowTopNResponse({}));
  }

  async getVbrFlowTopN(request: GetVbrFlowTopNRequest): Promise<GetVbrFlowTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVbrFlowTopNWithOptions(request, runtime);
  }

}
