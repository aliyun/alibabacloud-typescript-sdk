// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AICreateSessionMessageRequest extends $tea.Model {
  context?: AICreateSessionMessageRequestContext;
  language?: string;
  message?: string;
  sessionId?: string;
  /**
   * @example
   * QA / K8S_DIAGNOSE
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  employeeId?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      language: 'language',
      message: 'message',
      sessionId: 'session_id',
      type: 'type',
      employeeId: 'employee_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: AICreateSessionMessageRequestContext,
      language: 'string',
      message: 'string',
      sessionId: 'string',
      type: 'string',
      employeeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AICreateSessionMessageResponseBody extends $tea.Model {
  answer?: string;
  code?: number;
  data?: string;
  msg?: string;
  reference?: AICreateSessionMessageResponseBodyReference[];
  requestId?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      code: 'code',
      data: 'data',
      msg: 'msg',
      reference: 'reference',
      requestId: 'requestId',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      code: 'number',
      data: 'string',
      msg: 'string',
      reference: { 'type': 'array', 'itemType': AICreateSessionMessageResponseBodyReference },
      requestId: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AICreateSessionMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AICreateSessionMessageResponseBody;
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
      body: AICreateSessionMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosisRequest extends $tea.Model {
  body?: string;
  clusterID?: string;
  diagnosisType?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clusterID: 'clusterID',
      diagnosisType: 'diagnosisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clusterID: 'string',
      diagnosisType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosisResponseBody extends $tea.Model {
  code?: number;
  data?: any;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'any',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiagnosisResponseBody;
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
      body: CreateDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRequest extends $tea.Model {
  clusterID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'clusterID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  data?: GetClusterResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClusterResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
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
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterWarningRequest extends $tea.Model {
  clusterID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'clusterID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterWarningResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class GetClusterWarningResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterWarningResponseBody;
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
      body: GetClusterWarningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultRequest extends $tea.Model {
  diagnosisId?: string;
  ownerUid?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisId: 'diagnosisId',
      ownerUid: 'ownerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisId: 'string',
      ownerUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBody extends $tea.Model {
  code?: string;
  data?: any;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiagnosisResultResponseBody;
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
      body: GetDiagnosisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserClusterWarningRequest extends $tea.Model {
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserClusterWarningResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class GetUserClusterWarningResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserClusterWarningResponseBody;
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
      body: GetUserClusterWarningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebshellTokenResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class GetWebshellTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWebshellTokenResponseBody;
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
      body: GetWebshellTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HelloRequest extends $tea.Model {
  /**
   * @example
   * binzhi
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HelloResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: HelloResponseBodyData;
  /**
   * @example
   * null
   */
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HelloResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HelloResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: HelloResponseBody;
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
      body: HelloResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterDeprecatedAPIRequest extends $tea.Model {
  clusterId?: string;
  pageNo?: number;
  pageSize?: number;
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      pageNo: 'page_no',
      pageSize: 'page_size',
      targetVersion: 'target_version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      targetVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterDeprecatedAPIResponseBody extends $tea.Model {
  code?: number;
  datas?: ListClusterDeprecatedAPIResponseBodyDatas;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      datas: 'datas',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      datas: ListClusterDeprecatedAPIResponseBodyDatas,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterDeprecatedAPIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterDeprecatedAPIResponseBody;
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
      body: ListClusterDeprecatedAPIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterImagesRequest extends $tea.Model {
  clusterId?: string;
  imageHash?: string;
  imageName?: string;
  pageNo?: number;
  pageSize?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      imageHash: 'image_hash',
      imageName: 'image_name',
      pageNo: 'page_no',
      pageSize: 'page_size',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      imageHash: 'string',
      imageName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterImagesResponseBody extends $tea.Model {
  code?: number;
  datas?: ListClusterImagesResponseBodyDatas;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      datas: 'datas',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      datas: ListClusterImagesResponseBodyDatas,
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterImagesResponseBody;
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
      body: ListClusterImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersRequest extends $tea.Model {
  current?: string;
  pageSize?: string;
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'string',
      pageSize: 'string',
      userID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserClustersResponseBody;
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
      body: ListUserClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByInstanceInfoRequest extends $tea.Model {
  instanceId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByInstanceInfoResponseBody extends $tea.Model {
  code?: number;
  data?: QueryByInstanceInfoResponseBodyData[];
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryByInstanceInfoResponseBodyData },
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByInstanceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryByInstanceInfoResponseBody;
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
      body: QueryByInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNodeInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNodeInfoResponseBody extends $tea.Model {
  code?: number;
  data?: QueryNodeInfoResponseBodyData[];
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QueryNodeInfoResponseBodyData },
      msg: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNodeInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryNodeInfoResponseBody;
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
      body: QueryNodeInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AICreateSessionMessageRequestContext extends $tea.Model {
  clusterId?: string;
  error?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      error: 'error',
      kind: 'kind',
      name: 'name',
      namespace: 'namespace',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      error: 'string',
      kind: 'string',
      name: 'string',
      namespace: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AICreateSessionMessageResponseBodyReference extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyData extends $tea.Model {
  clusterID?: string;
  clusterType?: string;
  currentVersion?: string;
  name?: string;
  profile?: string;
  regionID?: string;
  securityGroupId?: string;
  spec?: string;
  state?: string;
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'clusterID',
      clusterType: 'clusterType',
      currentVersion: 'currentVersion',
      name: 'name',
      profile: 'profile',
      regionID: 'regionID',
      securityGroupId: 'securityGroupId',
      spec: 'spec',
      state: 'state',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      clusterType: 'string',
      currentVersion: 'string',
      name: 'string',
      profile: 'string',
      regionID: 'string',
      securityGroupId: 'string',
      spec: 'string',
      state: 'string',
      userID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HelloResponseBodyData extends $tea.Model {
  date?: string;
  /**
   * @example
   * ack1
   */
  name?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      name: 'name',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      name: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterDeprecatedAPIResponseBodyDatasData extends $tea.Model {
  clusterId?: string;
  content?: string;
  count?: number;
  currentVersion?: string;
  deprecatedK8sVersion?: string;
  ds?: string;
  label?: string;
  lastTime?: string;
  requestUri?: string;
  sourceIps?: string;
  targetVersion?: string;
  userAgent?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      content: 'content',
      count: 'count',
      currentVersion: 'current_version',
      deprecatedK8sVersion: 'deprecated_k8s_version',
      ds: 'ds',
      label: 'label',
      lastTime: 'last_time',
      requestUri: 'request_uri',
      sourceIps: 'source_ips',
      targetVersion: 'target_version',
      userAgent: 'user_agent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      content: 'string',
      count: 'number',
      currentVersion: 'string',
      deprecatedK8sVersion: 'string',
      ds: 'string',
      label: 'string',
      lastTime: 'string',
      requestUri: 'string',
      sourceIps: 'string',
      targetVersion: 'string',
      userAgent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterDeprecatedAPIResponseBodyDatas extends $tea.Model {
  current?: number;
  data?: ListClusterDeprecatedAPIResponseBodyDatasData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      data: 'data',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      data: { 'type': 'array', 'itemType': ListClusterDeprecatedAPIResponseBodyDatasData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterImagesResponseBodyDatasData extends $tea.Model {
  clusterId?: string;
  controllerName?: string;
  controllerType?: string;
  created?: string;
  imageHash?: string;
  imageName?: string;
  namespace?: string;
  uid?: string;
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      controllerName: 'controller_name',
      controllerType: 'controller_type',
      created: 'created',
      imageHash: 'image_hash',
      imageName: 'image_name',
      namespace: 'namespace',
      uid: 'uid',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      controllerName: 'string',
      controllerType: 'string',
      created: 'string',
      imageHash: 'string',
      imageName: 'string',
      namespace: 'string',
      uid: 'string',
      updated: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterImagesResponseBodyDatas extends $tea.Model {
  current?: number;
  data?: ListClusterImagesResponseBodyDatasData[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      data: 'data',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      data: { 'type': 'array', 'itemType': ListClusterImagesResponseBodyDatasData },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByInstanceInfoResponseBodyData extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  instanceId?: string;
  regionId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterName: 'clusterName',
      instanceId: 'instanceId',
      regionId: 'regionId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      instanceId: 'string',
      regionId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNodeInfoResponseBodyData extends $tea.Model {
  cluserName?: string;
  clusterId?: string;
  instanceId?: string;
  region?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      cluserName: 'cluserName',
      clusterId: 'clusterId',
      instanceId: 'instanceId',
      region: 'region',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluserName: 'string',
      clusterId: 'string',
      instanceId: 'string',
      region: 'string',
      uid: 'string',
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
    this._endpoint = this.getEndpoint("qianzhou", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * ACK AI助手千舟InnerAPI
   * 
   * @param request - AICreateSessionMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AICreateSessionMessageResponse
   */
  async aICreateSessionMessageWithOptions(request: AICreateSessionMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AICreateSessionMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.employeeId)) {
      query["employee_id"] = request.employeeId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.context)) {
      body["context"] = request.context;
    }

    if (!Util.isUnset(request.language)) {
      body["language"] = request.language;
    }

    if (!Util.isUnset(request.message)) {
      body["message"] = request.message;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["session_id"] = request.sessionId;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AICreateSessionMessage",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/AICreateSessionMessage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AICreateSessionMessageResponse>(await this.callApi(params, req, runtime), new AICreateSessionMessageResponse({}));
  }

  /**
   * ACK AI助手千舟InnerAPI
   * 
   * @param request - AICreateSessionMessageRequest
   * @returns AICreateSessionMessageResponse
   */
  async aICreateSessionMessage(request: AICreateSessionMessageRequest): Promise<AICreateSessionMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aICreateSessionMessageWithOptions(request, headers, runtime);
  }

  /**
   * CreateDiagnosis
   * 
   * @param request - CreateDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosisResponse
   */
  async createDiagnosisWithOptions(request: CreateDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDiagnosisResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterID)) {
      query["clusterID"] = request.clusterID;
    }

    if (!Util.isUnset(request.diagnosisType)) {
      query["diagnosisType"] = request.diagnosisType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateDiagnosis",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/createDiagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDiagnosisResponse>(await this.callApi(params, req, runtime), new CreateDiagnosisResponse({}));
  }

  /**
   * CreateDiagnosis
   * 
   * @param request - CreateDiagnosisRequest
   * @returns CreateDiagnosisResponse
   */
  async createDiagnosis(request: CreateDiagnosisRequest): Promise<CreateDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群信息
   * 
   * @param request - GetClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: GetClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterID)) {
      query["clusterID"] = request.clusterID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/getCluster`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  /**
   * 获取集群信息
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(request, headers, runtime);
  }

  /**
   * 单个集群的高危风险项
   * 
   * @param request - GetClusterWarningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterWarningResponse
   */
  async getClusterWarningWithOptions(request: GetClusterWarningRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterWarningResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterID)) {
      query["clusterID"] = request.clusterID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClusterWarning",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/getKeyClusterWarningList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetClusterWarningResponse>(await this.callApi(params, req, runtime), new GetClusterWarningResponse({}));
  }

  /**
   * 单个集群的高危风险项
   * 
   * @param request - GetClusterWarningRequest
   * @returns GetClusterWarningResponse
   */
  async getClusterWarning(request: GetClusterWarningRequest): Promise<GetClusterWarningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWarningWithOptions(request, headers, runtime);
  }

  /**
   * GetDiagnosisResult
   * 
   * @param request - GetDiagnosisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResultWithOptions(request: GetDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDiagnosisResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.diagnosisId)) {
      query["diagnosisId"] = request.diagnosisId;
    }

    if (!Util.isUnset(request.ownerUid)) {
      query["ownerUid"] = request.ownerUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnosisResult",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/GetDiagnosisResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnosisResultResponse>(await this.callApi(params, req, runtime), new GetDiagnosisResultResponse({}));
  }

  /**
   * GetDiagnosisResult
   * 
   * @param request - GetDiagnosisResultRequest
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResult(request: GetDiagnosisResultRequest): Promise<GetDiagnosisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDiagnosisResultWithOptions(request, headers, runtime);
  }

  /**
   * 单个用户的高危集群
   * 
   * @param request - GetUserClusterWarningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserClusterWarningResponse
   */
  async getUserClusterWarningWithOptions(request: GetUserClusterWarningRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserClusterWarningResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userID)) {
      query["userID"] = request.userID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserClusterWarning",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/listUserKeyClusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserClusterWarningResponse>(await this.callApi(params, req, runtime), new GetUserClusterWarningResponse({}));
  }

  /**
   * 单个用户的高危集群
   * 
   * @param request - GetUserClusterWarningRequest
   * @returns GetUserClusterWarningResponse
   */
  async getUserClusterWarning(request: GetUserClusterWarningRequest): Promise<GetUserClusterWarningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserClusterWarningWithOptions(request, headers, runtime);
  }

  /**
   * @deprecated OpenAPI GetWebshellToken is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebshellTokenResponse
   */
  // Deprecated
  async getWebshellTokenWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWebshellTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetWebshellToken",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/getChorusToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWebshellTokenResponse>(await this.callApi(params, req, runtime), new GetWebshellTokenResponse({}));
  }

  /**
   * @deprecated OpenAPI GetWebshellToken is deprecated
   * @returns GetWebshellTokenResponse
   */
  // Deprecated
  async getWebshellToken(): Promise<GetWebshellTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebshellTokenWithOptions(headers, runtime);
  }

  /**
   * 测试接口
   * 
   * @param request - HelloRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HelloResponse
   */
  async helloWithOptions(request: HelloRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<HelloResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.user)) {
      query["user"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Hello",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/hello`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<HelloResponse>(await this.callApi(params, req, runtime), new HelloResponse({}));
  }

  /**
   * 测试接口
   * 
   * @param request - HelloRequest
   * @returns HelloResponse
   */
  async hello(request: HelloRequest): Promise<HelloResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.helloWithOptions(request, headers, runtime);
  }

  /**
   * 获取某集群废弃api的统计情况
   * 
   * @param request - ListClusterDeprecatedAPIRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterDeprecatedAPIResponse
   */
  async listClusterDeprecatedAPIWithOptions(request: ListClusterDeprecatedAPIRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterDeprecatedAPIResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.targetVersion)) {
      query["target_version"] = request.targetVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterDeprecatedAPI",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/listDeprecatedK8sAPI`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterDeprecatedAPIResponse>(await this.callApi(params, req, runtime), new ListClusterDeprecatedAPIResponse({}));
  }

  /**
   * 获取某集群废弃api的统计情况
   * 
   * @param request - ListClusterDeprecatedAPIRequest
   * @returns ListClusterDeprecatedAPIResponse
   */
  async listClusterDeprecatedAPI(request: ListClusterDeprecatedAPIRequest): Promise<ListClusterDeprecatedAPIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterDeprecatedAPIWithOptions(request, headers, runtime);
  }

  /**
   * 获取某集群中的Image列表
   * 
   * @param request - ListClusterImagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterImagesResponse
   */
  async listClusterImagesWithOptions(request: ListClusterImagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListClusterImagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!Util.isUnset(request.imageHash)) {
      query["image_hash"] = request.imageHash;
    }

    if (!Util.isUnset(request.imageName)) {
      query["image_name"] = request.imageName;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["page_no"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!Util.isUnset(request.uid)) {
      query["uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterImages",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/listClusterPodImages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListClusterImagesResponse>(await this.callApi(params, req, runtime), new ListClusterImagesResponse({}));
  }

  /**
   * 获取某集群中的Image列表
   * 
   * @param request - ListClusterImagesRequest
   * @returns ListClusterImagesResponse
   */
  async listClusterImages(request: ListClusterImagesRequest): Promise<ListClusterImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterImagesWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户下的集群列表
   * 
   * @param request - ListUserClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserClustersResponse
   */
  async listUserClustersWithOptions(request: ListUserClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserClustersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      query["current"] = request.current;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userID)) {
      query["userID"] = request.userID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserClusters",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/listUserClusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserClustersResponse>(await this.callApi(params, req, runtime), new ListUserClustersResponse({}));
  }

  /**
   * 获取用户下的集群列表
   * 
   * @param request - ListUserClustersRequest
   * @returns ListUserClustersResponse
   */
  async listUserClusters(request: ListUserClustersRequest): Promise<ListUserClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserClustersWithOptions(request, headers, runtime);
  }

  /**
   * 查询节点相关集群、用户信息
   * 
   * @param request - QueryByInstanceInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryByInstanceInfoResponse
   */
  async queryByInstanceInfoWithOptions(request: QueryByInstanceInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryByInstanceInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryByInstanceInfo",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/queryByInstanceInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryByInstanceInfoResponse>(await this.callApi(params, req, runtime), new QueryByInstanceInfoResponse({}));
  }

  /**
   * 查询节点相关集群、用户信息
   * 
   * @param request - QueryByInstanceInfoRequest
   * @returns QueryByInstanceInfoResponse
   */
  async queryByInstanceInfo(request: QueryByInstanceInfoRequest): Promise<QueryByInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryByInstanceInfoWithOptions(request, headers, runtime);
  }

  /**
   * 根据节点instanceId查询集群/用户信息
   * 
   * @param request - QueryNodeInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryNodeInfoResponse
   */
  async queryNodeInfoWithOptions(request: QueryNodeInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryNodeInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryNodeInfo",
      version: "2021-11-11",
      protocol: "HTTPS",
      pathname: `/popapi/queryByInstanceId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryNodeInfoResponse>(await this.callApi(params, req, runtime), new QueryNodeInfoResponse({}));
  }

  /**
   * 根据节点instanceId查询集群/用户信息
   * 
   * @param request - QueryNodeInfoRequest
   * @returns QueryNodeInfoResponse
   */
  async queryNodeInfo(request: QueryNodeInfoRequest): Promise<QueryNodeInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryNodeInfoWithOptions(request, headers, runtime);
  }

}
