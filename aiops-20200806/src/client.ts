// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAlgorithmRequest extends $tea.Model {
  algorithmId?: string;
  algorithmType?: number;
  businessGroupId?: string;
  endTime?: number;
  expandInformation?: string;
  indexId?: string;
  instanceId?: string;
  operaUid?: string;
  productType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmType: 'AlgorithmType',
      businessGroupId: 'BusinessGroupId',
      endTime: 'EndTime',
      expandInformation: 'ExpandInformation',
      indexId: 'IndexId',
      instanceId: 'InstanceId',
      operaUid: 'OperaUid',
      productType: 'ProductType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmType: 'number',
      businessGroupId: 'string',
      endTime: 'number',
      expandInformation: 'string',
      indexId: 'string',
      instanceId: 'string',
      operaUid: 'string',
      productType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAlgorithmResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddAlgorithmResponseBody;
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
      body: AddAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupRequest extends $tea.Model {
  aliUid?: string;
  businessGroupDesc?: string;
  businessGroupName?: string;
  createUser?: string;
  instanceList?: string[];
  operaUid?: string;
  resourceType?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupName: 'BusinessGroupName',
      createUser: 'CreateUser',
      instanceList: 'InstanceList',
      operaUid: 'OperaUid',
      resourceType: 'ResourceType',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      businessGroupDesc: 'string',
      businessGroupName: 'string',
      createUser: 'string',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      operaUid: 'string',
      resourceType: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupShrinkRequest extends $tea.Model {
  aliUid?: string;
  businessGroupDesc?: string;
  businessGroupName?: string;
  createUser?: string;
  instanceListShrink?: string;
  operaUid?: string;
  resourceType?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupName: 'BusinessGroupName',
      createUser: 'CreateUser',
      instanceListShrink: 'InstanceList',
      operaUid: 'OperaUid',
      resourceType: 'ResourceType',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      businessGroupDesc: 'string',
      businessGroupName: 'string',
      createUser: 'string',
      instanceListShrink: 'string',
      operaUid: 'string',
      resourceType: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddBusinessGroupResponseBody;
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
      body: AddBusinessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupOneRequest extends $tea.Model {
  businessGroupDesc?: string;
  businessGroupName?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupName: 'BusinessGroupName',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupDesc: 'string',
      businessGroupName: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupOneResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBusinessGroupOneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddBusinessGroupOneResponseBody;
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
      body: AddBusinessGroupOneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScenarioRequest extends $tea.Model {
  alertSettingId?: number;
  level?: number;
  name?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
      level: 'Level',
      name: 'Name',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
      level: 'number',
      name: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScenarioResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScenarioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddScenarioResponseBody;
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
      body: AddScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneListRequest extends $tea.Model {
  operaUid?: string;
  sceneDescribe?: string;
  sceneName?: string;
  scenePersonLiable?: string;
  sceneType?: string;
  sceneVoJson?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      sceneDescribe: 'SceneDescribe',
      sceneName: 'SceneName',
      scenePersonLiable: 'ScenePersonLiable',
      sceneType: 'SceneType',
      sceneVoJson: 'SceneVoJson',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      sceneDescribe: 'string',
      sceneName: 'string',
      scenePersonLiable: 'string',
      sceneType: 'string',
      sceneVoJson: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSceneListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddSceneListResponseBody;
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
      body: AddSceneListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScriptRequest extends $tea.Model {
  handleSuggestDesc?: string;
  metricName?: string;
  operaUid?: string;
  productCode?: string;
  rootCauseDesc?: string;
  rootCausesLog?: string;
  sceneId?: string;
  script?: string;
  scriptDesc?: string;
  scriptLanguage?: string;
  scriptName?: string;
  scriptVersion?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      handleSuggestDesc: 'HandleSuggestDesc',
      metricName: 'MetricName',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
      rootCauseDesc: 'RootCauseDesc',
      rootCausesLog: 'RootCausesLog',
      sceneId: 'SceneId',
      script: 'Script',
      scriptDesc: 'ScriptDesc',
      scriptLanguage: 'ScriptLanguage',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handleSuggestDesc: 'string',
      metricName: 'string',
      operaUid: 'string',
      productCode: 'string',
      rootCauseDesc: 'string',
      rootCausesLog: 'string',
      sceneId: 'string',
      script: 'string',
      scriptDesc: 'string',
      scriptLanguage: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScriptResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddScriptResponseBody;
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
      body: AddScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagInfoRequest extends $tea.Model {
  operaUid?: string;
  productId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productId: 'ProductId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTagInfoResponseBody;
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
      body: AddTagInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgainSubmitApplyPermissionRequest extends $tea.Model {
  switchFrontOperaUid?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchFrontOperaUid: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgainSubmitApplyPermissionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgainSubmitApplyPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgainSubmitApplyPermissionResponseBody;
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
      body: AgainSubmitApplyPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAuthorizationRequest extends $tea.Model {
  switchFrontOperaUid?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchFrontOperaUid: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAuthorizationResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyAuthorizationResponseBody;
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
      body: ApplyAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceLinkConnectionRequest extends $tea.Model {
  dataSourceParams?: string;
  dataSourceType?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceParams: 'DataSourceParams',
      dataSourceType: 'DataSourceType',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceParams: 'string',
      dataSourceType: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceLinkConnectionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceLinkConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDataSourceLinkConnectionResponseBody;
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
      body: CheckDataSourceLinkConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLogRequest extends $tea.Model {
  dataSourceId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLogResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckLogResponseBody;
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
      body: CheckLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEventRequest extends $tea.Model {
  closeDesc?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      closeDesc: 'CloseDesc',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeDesc: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEventResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloseEventResponseBody;
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
      body: CloseEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAuthorizationRequest extends $tea.Model {
  permissionType?: number;
  switchFrontOperaUid?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      permissionType: 'PermissionType',
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionType: 'number',
      switchFrontOperaUid: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAuthorizationResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfirmAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfirmAuthorizationResponseBody;
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
      body: ConfirmAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountLatestReportsRequest extends $tea.Model {
  logStore?: string;
  productCode?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      productCode: 'ProductCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      productCode: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountLatestReportsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CountLatestReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CountLatestReportsResponseBody;
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
      body: CountLatestReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactRequest extends $tea.Model {
  email?: string;
  name?: string;
  operaUid?: string;
  phone?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      operaUid: 'OperaUid',
      phone: 'Phone',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      operaUid: 'string',
      phone: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAlertContactResponseBody;
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
      body: CreateAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupRequest extends $tea.Model {
  alertContactGroupJson?: string;
  contactIdsJson?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertContactGroupJson: 'AlertContactGroupJson',
      contactIdsJson: 'ContactIdsJson',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContactGroupJson: 'string',
      contactIdsJson: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAlertContactGroupResponseBody;
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
      body: CreateAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandRequest extends $tea.Model {
  commandContent?: string;
  description?: string;
  name?: string;
  regionId?: string;
  type?: string;
  workingDir?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
      workingDir: 'WorkingDir',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
      workingDir: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandResponseBody extends $tea.Model {
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

export class CreateCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCommandResponseBody;
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
      body: CreateCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDumpRequest extends $tea.Model {
  eventId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDumpResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDumpResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDumpResponseBody;
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
      body: CreateDumpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInspectionRecordRequest extends $tea.Model {
  operaUid?: string;
  productCode?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productCode: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInspectionRecordResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInspectionRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInspectionRecordResponseBody;
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
      body: CreateInspectionRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageRequest extends $tea.Model {
  eventId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMessageResponseBody;
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
      body: CreateMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $tea.Model {
  flowName?: string;
  metricListJson?: string;
  nodeListJson?: string;
  operaUid?: string;
  sceneDesc?: string;
  sceneName?: string;
  sceneOwner?: string;
  sceneWebhook?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      metricListJson: 'MetricListJson',
      nodeListJson: 'NodeListJson',
      operaUid: 'OperaUid',
      sceneDesc: 'SceneDesc',
      sceneName: 'SceneName',
      sceneOwner: 'SceneOwner',
      sceneWebhook: 'SceneWebhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      metricListJson: 'string',
      nodeListJson: 'string',
      operaUid: 'string',
      sceneDesc: 'string',
      sceneName: 'string',
      sceneOwner: 'string',
      sceneWebhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSceneResponseBody;
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
      body: CreateSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneModelRequest extends $tea.Model {
  fcFunctionName?: string;
  fcHandler?: string;
  fcInitializer?: string;
  fcRegionNo?: string;
  fcServiceName?: string;
  modelDesc?: string;
  modelLanguage?: number;
  modelMemo?: string;
  modelName?: string;
  modelType?: number;
  operaUid?: string;
  rootCauseDesc?: string;
  rootCauseSolution?: string;
  static names(): { [key: string]: string } {
    return {
      fcFunctionName: 'FcFunctionName',
      fcHandler: 'FcHandler',
      fcInitializer: 'FcInitializer',
      fcRegionNo: 'FcRegionNo',
      fcServiceName: 'FcServiceName',
      modelDesc: 'ModelDesc',
      modelLanguage: 'ModelLanguage',
      modelMemo: 'ModelMemo',
      modelName: 'ModelName',
      modelType: 'ModelType',
      operaUid: 'OperaUid',
      rootCauseDesc: 'RootCauseDesc',
      rootCauseSolution: 'RootCauseSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcFunctionName: 'string',
      fcHandler: 'string',
      fcInitializer: 'string',
      fcRegionNo: 'string',
      fcServiceName: 'string',
      modelDesc: 'string',
      modelLanguage: 'number',
      modelMemo: 'string',
      modelName: 'string',
      modelType: 'number',
      operaUid: 'string',
      rootCauseDesc: 'string',
      rootCauseSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneModelResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSceneModelResponseBody;
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
      body: CreateSceneModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneModelApplyRequest extends $tea.Model {
  modelId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneModelApplyResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneModelApplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSceneModelApplyResponseBody;
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
      body: CreateSceneModelApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelBusinessGroupRequest extends $tea.Model {
  businessGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelBusinessGroupResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelBusinessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DelBusinessGroupResponseBody;
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
      body: DelBusinessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactRequest extends $tea.Model {
  contactIdListJson?: string;
  groupId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdListJson: 'ContactIdListJson',
      groupId: 'GroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdListJson: 'string',
      groupId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertContactResponseBody;
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
      body: DeleteAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactFromGroupRequest extends $tea.Model {
  contactIdListJson?: string;
  groupId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdListJson: 'ContactIdListJson',
      groupId: 'GroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdListJson: 'string',
      groupId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactFromGroupResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactFromGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertContactFromGroupResponseBody;
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
      body: DeleteAlertContactFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupRequest extends $tea.Model {
  groupId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertContactGroupResponseBody;
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
      body: DeleteAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertSettingRequest extends $tea.Model {
  alertSettingId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertSettingResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertSettingResponseBody;
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
      body: DeleteAlertSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertSettingListRequest extends $tea.Model {
  customerIdsJson?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      customerIdsJson: 'CustomerIdsJson',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerIdsJson: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertSettingListResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertSettingListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlertSettingListResponseBody;
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
      body: DeleteAlertSettingListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmInfoRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlgorithmInfoResponseBody;
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
      body: DeleteAlgorithmInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessGroupRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessGroupResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBusinessGroupResponseBody;
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
      body: DeleteBusinessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResourceTagRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  productId?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
      productId: 'ProductId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
      productId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResourceTagResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessResourceTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBusinessResourceTagResponseBody;
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
      body: DeleteBusinessResourceTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceConfigRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceConfigResponseBody;
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
      body: DeleteDataSourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupTopologyTagLogRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupTopologyTagLogResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupTopologyTagLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupTopologyTagLogResponseBody;
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
      body: DeleteGroupTopologyTagLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealSceneInfoRequest extends $tea.Model {
  id?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealSceneInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRealSceneInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRealSceneInfoResponseBody;
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
      body: DeleteRealSceneInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReportEmailConfigRequest extends $tea.Model {
  mailConfigId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      mailConfigId: 'MailConfigId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailConfigId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReportEmailConfigResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteReportEmailConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteReportEmailConfigResponseBody;
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
      body: DeleteReportEmailConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceWhitelistRequest extends $tea.Model {
  inspectionWhitelistId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionWhitelistId: 'InspectionWhitelistId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionWhitelistId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceWhitelistResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceWhitelistResponseBody;
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
      body: DeleteResourceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioRequest extends $tea.Model {
  id?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScenarioResponseBody;
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
      body: DeleteScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneRequest extends $tea.Model {
  operaUid?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneResponseBody;
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
      body: DeleteSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneListRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneListResponseBody;
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
      body: DeleteSceneListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneModelRequest extends $tea.Model {
  modelId?: number;
  operaUid?: string;
  sureDelete?: boolean;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      operaUid: 'OperaUid',
      sureDelete: 'SureDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      operaUid: 'string',
      sureDelete: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneModelResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSceneModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSceneModelResponseBody;
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
      body: DeleteSceneModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagInfoRequest extends $tea.Model {
  operaUid?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagInfoResponseBody;
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
      body: DeleteTagInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAlertEventRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAlertEventResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAlertEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountAlertEventResponseBody;
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
      body: DescribeAccountAlertEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorInspectionProductsRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorInspectionProductsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorInspectionProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdvisorInspectionProductsResponseBody;
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
      body: DescribeAdvisorInspectionProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertBusinessGroupWithAlertSettingIdRequest extends $tea.Model {
  alertSettingId?: number;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertBusinessGroupWithAlertSettingIdResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertBusinessGroupWithAlertSettingIdResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertBusinessGroupWithAlertSettingIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertBusinessGroupWithAlertSettingIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertBusinessGroupWithAlertSettingIdResponseBody;
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
      body: DescribeAlertBusinessGroupWithAlertSettingIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactRequest extends $tea.Model {
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  searchBy?: string;
  searchLike?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      searchBy: 'SearchBy',
      searchLike: 'SearchLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      searchBy: 'string',
      searchLike: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertContactResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertContactResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertContactResponseBody;
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
      body: DescribeAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactGroupRequest extends $tea.Model {
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  searchLike?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      searchLike: 'SearchLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      searchLike: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactGroupResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertContactGroupResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertContactGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertContactGroupResponseBody;
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
      body: DescribeAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithAlertSettingIdRequest extends $tea.Model {
  alertSettingId?: number;
  contactType?: number;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
      contactType: 'ContactType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
      contactType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithAlertSettingIdResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertContactWithAlertSettingIdResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertContactWithAlertSettingIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithAlertSettingIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertContactWithAlertSettingIdResponseBody;
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
      body: DescribeAlertContactWithAlertSettingIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithGroupIdRequest extends $tea.Model {
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithGroupIdResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertContactWithGroupIdResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertContactWithGroupIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertContactWithGroupIdResponseBody;
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
      body: DescribeAlertContactWithGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailDataRequest extends $tea.Model {
  alertId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailDataResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertDetailDataResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAlertDetailDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertDetailDataResponseBody;
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
      body: DescribeAlertDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailTrendDataRequest extends $tea.Model {
  alertId?: number;
  beginTime?: number;
  endTime?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      beginTime: 'number',
      endTime: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailTrendDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailTrendDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertDetailTrendDataResponseBody;
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
      body: DescribeAlertDetailTrendDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertEventRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertEventResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertEventResponseBody;
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
      body: DescribeAlertEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertFinalDataListRequest extends $tea.Model {
  currentPage?: number;
  endTime?: number;
  instanceId?: string;
  metricName?: string;
  pageSize?: number;
  productCode?: string;
  startTime?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metricName: 'MetricName',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      startTime: 'StartTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      metricName: 'string',
      pageSize: 'number',
      productCode: 'string',
      startTime: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertFinalDataListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertFinalDataListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertFinalDataListResponseBody;
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
      body: DescribeAlertFinalDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertResourceRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertResourceResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertResourceResponseBody;
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
      body: DescribeAlertResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingRequest extends $tea.Model {
  currentPage?: number;
  customerName?: string;
  operaUid?: string;
  pageSize?: number;
  searchKeyword?: string;
  settingStatus?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      customerName: 'CustomerName',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      searchKeyword: 'SearchKeyword',
      settingStatus: 'SettingStatus',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      customerName: 'string',
      operaUid: 'string',
      pageSize: 'number',
      searchKeyword: 'string',
      settingStatus: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertSettingResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAlertSettingResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertSettingResponseBody;
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
      body: DescribeAlertSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingByIdRequest extends $tea.Model {
  alertSettingId?: number;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingByIdResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAlertSettingByIdResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeAlertSettingByIdResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertSettingByIdResponseBody;
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
      body: DescribeAlertSettingByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAllAlertContactResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAllAlertContactResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllAlertContactResponseBody;
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
      body: DescribeAllAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactGroupRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactGroupResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAllAlertContactGroupResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAllAlertContactGroupResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllAlertContactGroupResponseBody;
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
      body: DescribeAllAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllBusinessGroupInfoRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllBusinessGroupInfoResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeAllBusinessGroupInfoResponseBodyData[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeAllBusinessGroupInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllBusinessGroupInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllBusinessGroupInfoResponseBody;
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
      body: DescribeAllBusinessGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllSceneModelRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllSceneModelResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllSceneModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllSceneModelResponseBody;
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
      body: DescribeAllSceneModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnalysisDataListRequest extends $tea.Model {
  endTime?: number;
  instanceId?: string;
  metricExtend?: string;
  metricName?: string;
  productCode?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metricExtend: 'MetricExtend',
      metricName: 'MetricName',
      productCode: 'ProductCode',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      metricExtend: 'string',
      metricName: 'string',
      productCode: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnalysisDataListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnalysisDataListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnalysisDataListResponseBody;
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
      body: DescribeAnalysisDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBusinessAnalysisDataListRequest extends $tea.Model {
  apiPath?: string;
  endTime?: number;
  resource?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiPath: 'ApiPath',
      endTime: 'EndTime',
      resource: 'Resource',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPath: 'string',
      endTime: 'number',
      resource: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBusinessAnalysisDataListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBusinessAnalysisDataListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBusinessAnalysisDataListResponseBody;
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
      body: DescribeBusinessAnalysisDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseRequest extends $tea.Model {
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseResponseBody extends $tea.Model {
  code?: number;
  diagnoseResult?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      diagnoseResult: 'DiagnoseResult',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      diagnoseResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnoseResponseBody;
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
      body: DescribeDiagnoseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseResultRequest extends $tea.Model {
  checkId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseResultResponseBody extends $tea.Model {
  code?: number;
  diagnoseResult?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      diagnoseResult: 'DiagnoseResult',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      diagnoseResult: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnoseResultResponseBody;
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
      body: DescribeDiagnoseResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopologyRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopologyResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopologyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventTopologyResponseBody;
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
      body: DescribeEventTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopologyDetailRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopologyDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventTopologyDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventTopologyDetailResponseBody;
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
      body: DescribeEventTopologyDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcFunctionRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  operaUid?: string;
  prefix?: string;
  regionCode?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      operaUid: 'OperaUid',
      prefix: 'Prefix',
      regionCode: 'RegionCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      operaUid: 'string',
      prefix: 'string',
      regionCode: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcFunctionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  nextToken?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFcFunctionResponseBody;
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
      body: DescribeFcFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcRegionRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcRegionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFcRegionResponseBody;
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
      body: DescribeFcRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcServiceRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  operaUid?: string;
  prefix?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      operaUid: 'OperaUid',
      prefix: 'Prefix',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      operaUid: 'string',
      prefix: 'string',
      regionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcServiceResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  nextToken?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFcServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFcServiceResponseBody;
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
      body: DescribeFcServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryRiskRequest extends $tea.Model {
  currentPage?: number;
  lastFindTimeEnd?: string;
  lastFindTimeStart?: string;
  operaUid?: string;
  pageSize?: number;
  productCode?: string;
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lastFindTimeEnd: 'LastFindTimeEnd',
      lastFindTimeStart: 'LastFindTimeStart',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lastFindTimeEnd: 'string',
      lastFindTimeStart: 'string',
      operaUid: 'string',
      pageSize: 'number',
      productCode: 'string',
      severity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryRiskResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryRiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHistoryRiskResponseBody;
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
      body: DescribeHistoryRiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionProgressRequest extends $tea.Model {
  inspectionRecordId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionRecordId: 'InspectionRecordId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionRecordId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionProgressResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInspectionProgressResponseBody;
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
      body: DescribeInspectionProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionResourcesRequest extends $tea.Model {
  keyword?: string;
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionResourcesResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInspectionResourcesResponseBody;
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
      body: DescribeInspectionResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionResultRequest extends $tea.Model {
  continuousDays?: number;
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  riskCode?: string;
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      continuousDays: 'ContinuousDays',
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      riskCode: 'RiskCode',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuousDays: 'number',
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      riskCode: 'string',
      severity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionResultResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInspectionResultResponseBody;
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
      body: DescribeInspectionResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionSettingsRequest extends $tea.Model {
  operaUid?: string;
  productCode?: string;
  productType?: number;
  riskDesc?: string;
  riskEnableStatus?: number;
  riskName?: string;
  riskType?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
      productType: 'ProductType',
      riskDesc: 'RiskDesc',
      riskEnableStatus: 'RiskEnableStatus',
      riskName: 'RiskName',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productCode: 'string',
      productType: 'number',
      riskDesc: 'string',
      riskEnableStatus: 'number',
      riskName: 'string',
      riskType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionSettingsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInspectionSettingsResponseBody;
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
      body: DescribeInspectionSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionThresholdRequest extends $tea.Model {
  operaUid?: string;
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      riskCode: 'RiskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      riskCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionThresholdResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionThresholdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInspectionThresholdResponseBody;
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
      body: DescribeInspectionThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionWhitelistsRequest extends $tea.Model {
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionWhitelistsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionWhitelistsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInspectionWhitelistsResponseBody;
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
      body: DescribeInspectionWhitelistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsRequest extends $tea.Model {
  commandId?: string;
  instanceId?: string;
  invokeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceId: 'string',
      invokeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationResultsResponseBody;
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
      body: DescribeInvocationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLastInspectionSummaryRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLastInspectionSummaryResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLastInspectionSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLastInspectionSummaryResponseBody;
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
      body: DescribeLastInspectionSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelRelationScenesRequest extends $tea.Model {
  modelId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelRelationScenesResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelRelationScenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeModelRelationScenesResponseBody;
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
      body: DescribeModelRelationScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductRiskPieRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductRiskPieResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductRiskPieResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductRiskPieResponseBody;
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
      body: DescribeProductRiskPieResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportDataResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeReportDataResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeReportDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReportDataResponseBody;
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
      body: DescribeReportDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportEmailConfigsRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportEmailConfigsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportEmailConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReportEmailConfigsResponseBody;
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
      body: DescribeReportEmailConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportSubscriptionsRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportSubscriptionsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportSubscriptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReportSubscriptionsResponseBody;
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
      body: DescribeReportSubscriptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceMetricRequest extends $tea.Model {
  eventId?: string;
  firstLoad?: number;
  instanceId?: string;
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      firstLoad: 'FirstLoad',
      instanceId: 'InstanceId',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      firstLoad: 'number',
      instanceId: 'string',
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceMetricResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceMetricResponseBody;
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
      body: DescribeResourceMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskRequest extends $tea.Model {
  endTime?: number;
  startTime?: number;
  types?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      types: 'Types',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      types: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  riskAssessment?: { [key: string]: any };
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      riskAssessment: 'RiskAssessment',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      riskAssessment: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskResponseBody;
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
      body: DescribeRiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskConfigRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskConfigResponseBody;
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
      body: DescribeRiskConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventDetailsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventDetailsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskEventDetailsResponseBody;
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
      body: DescribeRiskEventDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskEventListResponseBody;
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
      body: DescribeRiskEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventTopologyRequest extends $tea.Model {
  eventId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventTopologyResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventTopologyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskEventTopologyResponseBody;
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
      body: DescribeRiskEventTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResultSeveritySummaryRequest extends $tea.Model {
  continuousDays?: number;
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      continuousDays: 'ContinuousDays',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuousDays: 'number',
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResultSeveritySummaryResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResultSeveritySummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskResultSeveritySummaryResponseBody;
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
      body: DescribeRiskResultSeveritySummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResultStatisticalRequest extends $tea.Model {
  continuousDays?: number;
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      continuousDays: 'ContinuousDays',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuousDays: 'number',
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResultStatisticalResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskResultStatisticalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRiskResultStatisticalResponseBody;
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
      body: DescribeRiskResultStatisticalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDetailRequest extends $tea.Model {
  operaUid?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneDetailResponseBody;
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
      body: DescribeSceneDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelByTypeRequest extends $tea.Model {
  modelType?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'ModelType',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelByTypeResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelByTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneModelByTypeResponseBody;
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
      body: DescribeSceneModelByTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelDetailRequest extends $tea.Model {
  modelId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneModelDetailResponseBody;
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
      body: DescribeSceneModelDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelVersionHistoryRequest extends $tea.Model {
  modelId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelVersionHistoryResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelVersionHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneModelVersionHistoryResponseBody;
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
      body: DescribeSceneModelVersionHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelsRequest extends $tea.Model {
  applyStatus?: number;
  currentPage?: number;
  modelName?: string;
  modelType?: number;
  operaUid?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applyStatus: 'ApplyStatus',
      currentPage: 'CurrentPage',
      modelName: 'ModelName',
      modelType: 'ModelType',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyStatus: 'number',
      currentPage: 'number',
      modelName: 'string',
      modelType: 'number',
      operaUid: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneModelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneModelsResponseBody;
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
      body: DescribeSceneModelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneSystemModelRequest extends $tea.Model {
  currentPage?: number;
  modelName?: string;
  modelStatus?: number;
  modelType?: number;
  operaUid?: string;
  pageSize?: number;
  typeId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      modelName: 'ModelName',
      modelStatus: 'ModelStatus',
      modelType: 'ModelType',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      typeId: 'TypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      modelName: 'string',
      modelStatus: 'number',
      modelType: 'number',
      operaUid: 'string',
      pageSize: 'number',
      typeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneSystemModelResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSceneSystemModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSceneSystemModelResponseBody;
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
      body: DescribeSceneSystemModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScenesRequest extends $tea.Model {
  currentPage?: number;
  flowName?: string;
  modelId?: number;
  operaUid?: string;
  pageSize?: number;
  sceneName?: string;
  sceneStatus?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      flowName: 'FlowName',
      modelId: 'ModelId',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      sceneName: 'SceneName',
      sceneStatus: 'SceneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      flowName: 'string',
      modelId: 'number',
      operaUid: 'string',
      pageSize: 'number',
      sceneName: 'string',
      sceneStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScenesResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScenesResponseBody;
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
      body: DescribeScenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataByProductRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataByProductResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataByProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStatisticalDataByProductResponseBody;
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
      body: DescribeStatisticalDataByProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataByRiskCodeRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataByRiskCodeResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStatisticalDataByRiskCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStatisticalDataByRiskCodeResponseBody;
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
      body: DescribeStatisticalDataByRiskCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResourcesRequest extends $tea.Model {
  keyword?: string;
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResourcesResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeWhitelistResourcesResponseBody;
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
      body: DescribeWhitelistResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndScriptListRequest extends $tea.Model {
  id?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndScriptListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndScriptListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EndScriptListResponseBody;
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
      body: EndScriptListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackAlertAlgorithmRequest extends $tea.Model {
  alertId?: number;
  algorithmAccurateDescribe?: string;
  algorithmAccurateState?: number;
  feedbackType?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      algorithmAccurateDescribe: 'AlgorithmAccurateDescribe',
      algorithmAccurateState: 'AlgorithmAccurateState',
      feedbackType: 'FeedbackType',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      algorithmAccurateDescribe: 'string',
      algorithmAccurateState: 'number',
      feedbackType: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackAlertAlgorithmResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackAlertAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FeedbackAlertAlgorithmResponseBody;
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
      body: FeedbackAlertAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiopsEventListRequest extends $tea.Model {
  businessGroupId?: string;
  businessGroupName?: string;
  currentPage?: number;
  eventType?: number;
  eventUniqueId?: string;
  feedbackStatus?: number;
  name?: string;
  operaUid?: string;
  pageSize?: number;
  predictionState?: number;
  severity?: number;
  status?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
      currentPage: 'CurrentPage',
      eventType: 'EventType',
      eventUniqueId: 'EventUniqueId',
      feedbackStatus: 'FeedbackStatus',
      name: 'Name',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      predictionState: 'PredictionState',
      severity: 'Severity',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      businessGroupName: 'string',
      currentPage: 'number',
      eventType: 'number',
      eventUniqueId: 'string',
      feedbackStatus: 'number',
      name: 'string',
      operaUid: 'string',
      pageSize: 'number',
      predictionState: 'number',
      severity: 'number',
      status: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiopsEventListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiopsEventListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiopsEventListResponseBody;
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
      body: GetAiopsEventListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiopsEventNewListRequest extends $tea.Model {
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiopsEventNewListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiopsEventNewListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAiopsEventNewListResponseBody;
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
      body: GetAiopsEventNewListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertDetailTrendDataRequest extends $tea.Model {
  abnormalId?: number;
  alertId?: number;
  beginTime?: number;
  endTime?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalId: 'AbnormalId',
      alertId: 'AlertId',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalId: 'number',
      alertId: 'number',
      beginTime: 'number',
      endTime: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertDetailTrendDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertDetailTrendDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlertDetailTrendDataResponseBody;
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
      body: GetAlertDetailTrendDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertListRequest extends $tea.Model {
  aliUid?: string;
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlertListResponseBody;
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
      body: GetAlertListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertTrentRequest extends $tea.Model {
  aliUid?: string;
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertTrentResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertTrentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlertTrentResponseBody;
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
      body: GetAlertTrentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmRequest extends $tea.Model {
  expandInformation?: string;
  instanceId?: string;
  metricName?: string;
  operaUid?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      expandInformation: 'ExpandInformation',
      instanceId: 'InstanceId',
      metricName: 'MetricName',
      operaUid: 'OperaUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expandInformation: 'string',
      instanceId: 'string',
      metricName: 'string',
      operaUid: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmResponseBody;
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
      body: GetAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmConfigRequest extends $tea.Model {
  algorithmTypeCode?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmTypeCode: 'AlgorithmTypeCode',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmTypeCode: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmConfigResponseBody;
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
      body: GetAlgorithmConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDataRequest extends $tea.Model {
  endTime?: number;
  id?: number;
  operaUid?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      operaUid: 'OperaUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      id: 'number',
      operaUid: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmDataResponseBody;
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
      body: GetAlgorithmDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailsRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmDetailsResponseBody;
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
      body: GetAlgorithmDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmForecastDataRequest extends $tea.Model {
  aliUid?: string;
  endTime?: number;
  id?: number;
  operaUid?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endTime: 'EndTime',
      id: 'Id',
      operaUid: 'OperaUid',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endTime: 'number',
      id: 'number',
      operaUid: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmForecastDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmForecastDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmForecastDataResponseBody;
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
      body: GetAlgorithmForecastDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmForecastDetailsRequest extends $tea.Model {
  aliUid?: string;
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmForecastDetailsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmForecastDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmForecastDetailsResponseBody;
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
      body: GetAlgorithmForecastDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmListRequest extends $tea.Model {
  algorithmType?: number;
  expandInformation?: string;
  instanceId?: string;
  metricName?: string;
  operaUid?: string;
  pageNum?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmType: 'AlgorithmType',
      expandInformation: 'ExpandInformation',
      instanceId: 'InstanceId',
      metricName: 'MetricName',
      operaUid: 'OperaUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmType: 'number',
      expandInformation: 'string',
      instanceId: 'string',
      metricName: 'string',
      operaUid: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmListResponseBody;
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
      body: GetAlgorithmListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAlgorithmConfigRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAlgorithmConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAlgorithmConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllAlgorithmConfigResponseBody;
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
      body: GetAllAlgorithmConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllTagResourceNumListRequest extends $tea.Model {
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  productId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      productId: 'ProductId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      productId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllTagResourceNumListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllTagResourceNumListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAllTagResourceNumListResponseBody;
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
      body: GetAllTagResourceNumListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisProcessRequest extends $tea.Model {
  eventId?: string;
  lang?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      lang: 'Lang',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      lang: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisProcessResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAnalysisProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAnalysisProcessResponseBody;
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
      body: GetAnalysisProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuthorizationResponseBody;
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
      body: GetAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvgRepairTimeRequest extends $tea.Model {
  operaUid?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvgRepairTimeResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAvgRepairTimeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAvgRepairTimeResponseBody;
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
      body: GetAvgRepairTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackScriptListRequest extends $tea.Model {
  operaUid?: string;
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      sceneId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackScriptListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBackScriptListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBackScriptListResponseBody;
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
      body: GetBackScriptListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessGroupResponseBody;
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
      body: GetBusinessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupAllRequest extends $tea.Model {
  businessGroupName?: string;
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupName: 'BusinessGroupName',
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupName: 'string',
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupAllResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupAllResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessGroupAllResponseBody;
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
      body: GetBusinessGroupAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupIndexRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupIndexResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessGroupIndexResponseBody;
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
      body: GetBusinessGroupIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupInfoRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessGroupInfoResponseBody;
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
      body: GetBusinessGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupOverviewListRequest extends $tea.Model {
  aliUid?: string;
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupOverviewListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessGroupOverviewListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessGroupOverviewListResponseBody;
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
      body: GetBusinessGroupOverviewListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertDetailRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessLogAlertDetailResponseBody;
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
      body: GetBusinessLogAlertDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertListRequest extends $tea.Model {
  eventId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessLogAlertListResponseBody;
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
      body: GetBusinessLogAlertListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertTopNRequest extends $tea.Model {
  alertType?: string;
  eventId?: string;
  operaUid?: string;
  topNum?: number;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      eventId: 'EventId',
      operaUid: 'OperaUid',
      topNum: 'TopNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      eventId: 'string',
      operaUid: 'string',
      topNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertTopNResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessLogAlertTopNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessLogAlertTopNResponseBody;
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
      body: GetBusinessLogAlertTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertDetailListRequest extends $tea.Model {
  eventId?: string;
  id?: number;
  metricName?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      id: 'Id',
      metricName: 'MetricName',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      id: 'number',
      metricName: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertDetailListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertDetailListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricAlertDetailListResponseBody;
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
      body: GetBusinessMetricAlertDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertListRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricAlertListResponseBody;
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
      body: GetBusinessMetricAlertListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertTopNRequest extends $tea.Model {
  alertType?: string;
  eventId?: string;
  operaUid?: string;
  topNum?: number;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      eventId: 'EventId',
      operaUid: 'OperaUid',
      topNum: 'TopNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      eventId: 'string',
      operaUid: 'string',
      topNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertTopNResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAlertTopNResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricAlertTopNResponseBody;
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
      body: GetBusinessMetricAlertTopNResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAllListRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAllListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricAllListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricAllListResponseBody;
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
      body: GetBusinessMetricAllListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricForecastListRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricForecastListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricForecastListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricForecastListResponseBody;
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
      body: GetBusinessMetricForecastListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricResourceByMetricIdRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricResourceByMetricIdResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricResourceByMetricIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricResourceByMetricIdResponseBody;
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
      body: GetBusinessMetricResourceByMetricIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricSceneListRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricSceneListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusinessMetricSceneListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetBusinessMetricSceneListResponseBody;
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
      body: GetBusinessMetricSceneListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCidInfoRequest extends $tea.Model {
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCidInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCidInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCidInfoResponseBody;
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
      body: GetCidInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAllResourceListRequest extends $tea.Model {
  operaUid?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAllResourceListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAllResourceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudAllResourceListResponseBody;
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
      body: GetCloudAllResourceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceRequest extends $tea.Model {
  cloudTypeName?: string;
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      cloudTypeName: 'CloudTypeName',
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudTypeName: 'string',
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudResourceResponseBody;
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
      body: GetCloudResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceListRequest extends $tea.Model {
  businessGroupId?: string;
  cloudRegionId?: string;
  currentPage?: number;
  id?: string;
  instanceId?: string;
  instanceName?: string;
  isOptional?: number;
  operaUid?: string;
  pageSize?: number;
  privateIp?: string;
  releaseStatus?: number;
  tagName?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      cloudRegionId: 'CloudRegionId',
      currentPage: 'CurrentPage',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isOptional: 'IsOptional',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      privateIp: 'PrivateIp',
      releaseStatus: 'ReleaseStatus',
      tagName: 'TagName',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      cloudRegionId: 'string',
      currentPage: 'number',
      id: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isOptional: 'number',
      operaUid: 'string',
      pageSize: 'number',
      privateIp: 'string',
      releaseStatus: 'number',
      tagName: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudResourceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCloudResourceListResponseBody;
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
      body: GetCloudResourceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectInstancesRequest extends $tea.Model {
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectInstancesResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectInstancesResponseBody;
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
      body: GetConnectInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDetailRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceDetailResponseBody;
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
      body: GetDataSourceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceListRequest extends $tea.Model {
  currentPage?: number;
  dataSourceName?: string;
  dataSourceType?: number;
  operaUid?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dataSourceName: 'string',
      dataSourceType: 'number',
      operaUid: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceListResponseBody;
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
      body: GetDataSourceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceTargetParamListRequest extends $tea.Model {
  dataSourceType?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceTargetParamListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceTargetParamListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceTargetParamListResponseBody;
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
      body: GetDataSourceTargetParamListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataVolumeRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataVolumeResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataVolumeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataVolumeResponseBody;
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
      body: GetDataVolumeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagInfoRequest extends $tea.Model {
  currentPage?: number;
  diagnosticId?: string;
  endTime?: number;
  pageSize?: number;
  startTime?: number;
  status?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      diagnosticId: 'DiagnosticId',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      diagnosticId: 'string',
      endTime: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiagInfoResponseBody;
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
      body: GetDiagInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainConfigRequest extends $tea.Model {
  businessGroupId?: string;
  eventId?: string;
  operaUid?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      eventId: 'EventId',
      operaUid: 'OperaUid',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      eventId: 'string',
      operaUid: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainConfigResponseBody;
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
      body: GetDomainConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalDetailRequest extends $tea.Model {
  id?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventAbNormalDetailResponseBody;
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
      body: GetEventAbNormalDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalDetailTrendDataRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  id?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      id: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalDetailTrendDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalDetailTrendDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventAbNormalDetailTrendDataResponseBody;
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
      body: GetEventAbNormalDetailTrendDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalListRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventAbNormalListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventAbNormalListResponseBody;
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
      body: GetEventAbNormalListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusinessMetricListRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusinessMetricListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusinessMetricListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventBusinessMetricListResponseBody;
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
      body: GetEventBusinessMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventDetailRequest extends $tea.Model {
  eventId?: string;
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventDetailResponseBody;
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
      body: GetEventDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRootCauseRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRootCauseResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRootCauseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventRootCauseResponseBody;
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
      body: GetEventRootCauseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSequentialTrentRequest extends $tea.Model {
  aliUid?: string;
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSequentialTrentResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventSequentialTrentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventSequentialTrentResponseBody;
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
      body: GetEventSequentialTrentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStatisticsRequest extends $tea.Model {
  endTime?: string;
  operaUid?: string;
  startTime?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      operaUid: 'OperaUid',
      startTime: 'StartTime',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      operaUid: 'string',
      startTime: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStatisticsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventStatisticsResponseBody;
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
      body: GetEventStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventTrentRequest extends $tea.Model {
  endTime?: string;
  granularityType?: string;
  operaUid?: string;
  startTime?: string;
  timeType?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularityType: 'GranularityType',
      operaUid: 'OperaUid',
      startTime: 'StartTime',
      timeType: 'TimeType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      granularityType: 'string',
      operaUid: 'string',
      startTime: 'string',
      timeType: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventTrentResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventTrentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventTrentResponseBody;
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
      body: GetEventTrentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventTypeRequest extends $tea.Model {
  businessGroupId?: string;
  id?: number;
  operaUid?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      id: 'Id',
      operaUid: 'OperaUid',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      id: 'number',
      operaUid: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventTypeResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventTypeResponseBody;
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
      body: GetEventTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExceptionsRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExceptionsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExceptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetExceptionsResponseBody;
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
      body: GetExceptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtendRequest extends $tea.Model {
  instanceId?: string;
  metricId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metricId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExtendResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForecastBusinessMetricRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForecastBusinessMetricResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForecastBusinessMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetForecastBusinessMetricResponseBody;
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
      body: GetForecastBusinessMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionValidInfoRequest extends $tea.Model {
  functionName?: string;
  operaUid?: string;
  regionCode?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      operaUid: 'OperaUid',
      regionCode: 'RegionCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      operaUid: 'string',
      regionCode: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionValidInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionValidInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionValidInfoResponseBody;
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
      body: GetFunctionValidInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByDimensionDataRequest extends $tea.Model {
  end?: number;
  flag?: string;
  groupBy?: string;
  metricId?: string;
  operaUid?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      flag: 'Flag',
      groupBy: 'GroupBy',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      flag: 'string',
      groupBy: 'string',
      metricId: 'string',
      operaUid: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByDimensionDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupByDimensionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupByDimensionDataResponseBody;
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
      body: GetGroupByDimensionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResourceNumRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResourceNumResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResourceNumResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupResourceNumResponseBody;
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
      body: GetGroupResourceNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupTopologyTagRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupTopologyTagResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupTopologyTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupTopologyTagResponseBody;
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
      body: GetGroupTopologyTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentAllRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentAllResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentAllResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIncidentAllResponseBody;
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
      body: GetIncidentAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisArrayRequest extends $tea.Model {
  businessGroupId?: string;
  cloudResourceId?: string;
  cloudTypeName?: string;
  currentPage?: number;
  indexCode?: string;
  operaUid?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      cloudResourceId: 'CloudResourceId',
      cloudTypeName: 'CloudTypeName',
      currentPage: 'CurrentPage',
      indexCode: 'IndexCode',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      cloudResourceId: 'string',
      cloudTypeName: 'string',
      currentPage: 'number',
      indexCode: 'string',
      operaUid: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisArrayResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisArrayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexDialysisArrayResponseBody;
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
      body: GetIndexDialysisArrayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisListRequest extends $tea.Model {
  businessGroupId?: string;
  cloudResourceId?: string;
  cloudTypeName?: string;
  currentPage?: number;
  indexCode?: string;
  operaUid?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      cloudResourceId: 'CloudResourceId',
      cloudTypeName: 'CloudTypeName',
      currentPage: 'CurrentPage',
      indexCode: 'IndexCode',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      cloudResourceId: 'string',
      cloudTypeName: 'string',
      currentPage: 'number',
      indexCode: 'string',
      operaUid: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexDialysisListResponseBody;
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
      body: GetIndexDialysisListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisListLineRequest extends $tea.Model {
  beginTime?: number;
  cloudResourceId?: string;
  cloudTypeName?: string;
  endTime?: number;
  indexCode?: string;
  metricExtend?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      cloudResourceId: 'CloudResourceId',
      cloudTypeName: 'CloudTypeName',
      endTime: 'EndTime',
      indexCode: 'IndexCode',
      metricExtend: 'MetricExtend',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      cloudResourceId: 'string',
      cloudTypeName: 'string',
      endTime: 'number',
      indexCode: 'string',
      metricExtend: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisListLineResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIndexDialysisListLineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIndexDialysisListLineResponseBody;
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
      body: GetIndexDialysisListLineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportDownloadUrlRequest extends $tea.Model {
  downloadReportListJson?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      downloadReportListJson: 'DownloadReportListJson',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadReportListJson: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportDownloadUrlResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInspectionReportDownloadUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInspectionReportDownloadUrlResponseBody;
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
      body: GetInspectionReportDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesNumRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesNumResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesNumResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstancesNumResponseBody;
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
      body: GetInstancesNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSampleRequest extends $tea.Model {
  appField?: string;
  appValue?: string;
  dataSourceId?: number;
  logField?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      appField: 'AppField',
      appValue: 'AppValue',
      dataSourceId: 'DataSourceId',
      logField: 'LogField',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appField: 'string',
      appValue: 'string',
      dataSourceId: 'number',
      logField: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSampleResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSampleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogSampleResponseBody;
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
      body: GetLogSampleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSampleColumnRequest extends $tea.Model {
  dataSourceId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSampleColumnResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSampleColumnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogSampleColumnResponseBody;
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
      body: GetLogSampleColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricEventSequentialTrentRequest extends $tea.Model {
  aliUid?: string;
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricEventSequentialTrentResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetricEventSequentialTrentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMetricEventSequentialTrentResponseBody;
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
      body: GetMetricEventSequentialTrentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewOptimizationItemDataRequest extends $tea.Model {
  lang?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewOptimizationItemDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNewOptimizationItemDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNewOptimizationItemDataResponseBody;
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
      body: GetNewOptimizationItemDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionDetailListRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: string;
  instanceName?: string;
  operaUid?: string;
  pageSize?: number;
  patrolId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      patrolId: 'PatrolId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      instanceName: 'string',
      operaUid: 'string',
      pageSize: 'number',
      patrolId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionDetailListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionDetailListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPatrolInspectionDetailListResponseBody;
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
      body: GetPatrolInspectionDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionDetailThrendDataRequest extends $tea.Model {
  endTime?: number;
  operaUid?: string;
  requestContent?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      operaUid: 'OperaUid',
      requestContent: 'RequestContent',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      operaUid: 'string',
      requestContent: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionDetailThrendDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionDetailThrendDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPatrolInspectionDetailThrendDataResponseBody;
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
      body: GetPatrolInspectionDetailThrendDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionItemsListRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionItemsListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionItemsListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPatrolInspectionItemsListResponseBody;
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
      body: GetPatrolInspectionItemsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionListRequest extends $tea.Model {
  businessGroupId?: string;
  currentPage?: number;
  lang?: string;
  operaUid?: string;
  pageSize?: number;
  patrolId?: number;
  productCode?: string;
  riskLevel?: number;
  riskName?: string;
  riskPatrolItem?: string;
  riskType?: number;
  severityLevel?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      patrolId: 'PatrolId',
      productCode: 'ProductCode',
      riskLevel: 'RiskLevel',
      riskName: 'RiskName',
      riskPatrolItem: 'RiskPatrolItem',
      riskType: 'RiskType',
      severityLevel: 'SeverityLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      currentPage: 'number',
      lang: 'string',
      operaUid: 'string',
      pageSize: 'number',
      patrolId: 'number',
      productCode: 'string',
      riskLevel: 'number',
      riskName: 'string',
      riskPatrolItem: 'string',
      riskType: 'number',
      severityLevel: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPatrolInspectionListResponseBody;
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
      body: GetPatrolInspectionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionStatusRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionStatusResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolInspectionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPatrolInspectionStatusResponseBody;
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
      body: GetPatrolInspectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInstanceRequest extends $tea.Model {
  instanceId?: string;
  operaUid?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operaUid: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInstanceResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductInstanceResponseBody;
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
      body: GetProductInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductMetricListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductMetricListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductMetricListResponseBody;
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
      body: GetProductMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealDataRequest extends $tea.Model {
  endTimestamp?: string;
  flowName?: string;
  instanceId?: string;
  startTimestamp?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      flowName: 'FlowName',
      instanceId: 'InstanceId',
      startTimestamp: 'StartTimestamp',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'string',
      flowName: 'string',
      instanceId: 'string',
      startTimestamp: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRealDataResponseBody;
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
      body: GetRealDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegionListResponseBody;
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
      body: GetRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepairScriptRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepairScriptResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepairScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepairScriptResponseBody;
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
      body: GetRepairScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceListRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceListResponseBody;
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
      body: GetResourceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagDropListRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagDropListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagDropListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceTagDropListResponseBody;
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
      body: GetResourceTagDropListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceTypeListResponseBody;
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
      body: GetResourceTypeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInAllRequest extends $tea.Model {
  operaUid?: string;
  screen?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      screen: 'Screen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      screen: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInAllResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInAllResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskInAllResponseBody;
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
      body: GetRiskInAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInspectStatisticsRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInspectStatisticsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInspectStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskInspectStatisticsResponseBody;
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
      body: GetRiskInspectStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInspectionTypeListRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInspectionTypeListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskInspectionTypeListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskInspectionTypeListResponseBody;
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
      body: GetRiskInspectionTypeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolDetailListRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: string;
  instanceName?: string;
  operaUid?: string;
  pageSize?: number;
  patrolId?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      patrolId: 'PatrolId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      instanceName: 'string',
      operaUid: 'string',
      pageSize: 'number',
      patrolId: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolDetailListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolDetailListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskPatrolDetailListResponseBody;
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
      body: GetRiskPatrolDetailListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolListRequest extends $tea.Model {
  businessGroupId?: string;
  businessGroupName?: string;
  currentPage?: number;
  operaUid?: string;
  pageSize?: number;
  patrolId?: number;
  riskPatrolItem?: string;
  severityLevel?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
      currentPage: 'CurrentPage',
      operaUid: 'OperaUid',
      pageSize: 'PageSize',
      patrolId: 'PatrolId',
      riskPatrolItem: 'RiskPatrolItem',
      severityLevel: 'SeverityLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      businessGroupName: 'string',
      currentPage: 'number',
      operaUid: 'string',
      pageSize: 'number',
      patrolId: 'number',
      riskPatrolItem: 'string',
      severityLevel: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskPatrolListResponseBody;
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
      body: GetRiskPatrolListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatisticalTrendsRequest extends $tea.Model {
  eventId?: string;
  lang?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      lang: 'Lang',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      lang: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatisticalTrendsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatisticalTrendsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskPatrolStatisticalTrendsResponseBody;
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
      body: GetRiskPatrolStatisticalTrendsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatisticsRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatisticsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskPatrolStatisticsResponseBody;
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
      body: GetRiskPatrolStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatusRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatusResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskPatrolStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRiskPatrolStatusResponseBody;
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
      body: GetRiskPatrolStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  staus?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      staus: 'Staus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      staus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleResponseBody;
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
      body: GetRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootCauseRequest extends $tea.Model {
  eventId?: string;
  instanceId?: string;
  rootCauseId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      rootCauseId: 'RootCauseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      rootCauseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootCauseResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootCauseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRootCauseResponseBody;
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
      body: GetRootCauseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioDetailRequest extends $tea.Model {
  id?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioDetailResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScenarioDetailResponseBody;
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
      body: GetScenarioDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioListRequest extends $tea.Model {
  operaUid?: string;
  pageNo?: number;
  pageSize?: number;
  scenarioName?: string;
  sceneSelectLabel?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      scenarioName: 'ScenarioName',
      sceneSelectLabel: 'SceneSelectLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      pageNo: 'number',
      pageSize: 'number',
      scenarioName: 'string',
      sceneSelectLabel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScenarioListResponseBody;
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
      body: GetScenarioListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioStatisticsListRequest extends $tea.Model {
  endTime?: number;
  operaUid?: string;
  scenarioIds?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      operaUid: 'OperaUid',
      scenarioIds: 'ScenarioIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      operaUid: 'string',
      scenarioIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioStatisticsListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenarioStatisticsListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScenarioStatisticsListResponseBody;
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
      body: GetScenarioStatisticsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneByIdRequest extends $tea.Model {
  id?: number;
  metricId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      metricId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneByIdResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: number };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSceneByIdResponseBody;
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
      body: GetSceneByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneDetailsListRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneDetailsListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: number };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneDetailsListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSceneDetailsListResponseBody;
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
      body: GetSceneDetailsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListRequest extends $tea.Model {
  operaUid?: string;
  pageNum?: number;
  pageSize?: number;
  pageTotal?: number;
  sceneType?: string;
  searchName?: string;
  searchValue?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      sceneType: 'SceneType',
      searchName: 'SearchName',
      searchValue: 'SearchValue',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      pageNum: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      sceneType: 'string',
      searchName: 'string',
      searchValue: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: number };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSceneListResponseBody;
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
      body: GetSceneListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneMetricTableRequest extends $tea.Model {
  end?: number;
  metricId?: string;
  operaUid?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      metricId: 'string',
      operaUid: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneMetricTableResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneMetricTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSceneMetricTableResponseBody;
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
      body: GetSceneMetricTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptEventRootCauseRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptEventRootCauseResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptEventRootCauseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetScriptEventRootCauseResponseBody;
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
      body: GetScriptEventRootCauseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsLogDataRequest extends $tea.Model {
  code?: string;
  domain?: string;
  endTime?: number;
  operaUid?: string;
  startTime?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domain: 'Domain',
      endTime: 'EndTime',
      operaUid: 'OperaUid',
      startTime: 'StartTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domain: 'string',
      endTime: 'number',
      operaUid: 'string',
      startTime: 'number',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsLogDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsLogDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSlsLogDataResponseBody;
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
      body: GetSlsLogDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynCloudResourceListRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynCloudResourceListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynCloudResourceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSynCloudResourceListResponseBody;
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
      body: GetSynCloudResourceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagBusinessGroupListRequest extends $tea.Model {
  operaUid?: string;
  tagId?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      tagId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagBusinessGroupListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagBusinessGroupListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTagBusinessGroupListResponseBody;
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
      body: GetTagBusinessGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagDropListRequest extends $tea.Model {
  operaUid?: string;
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagDropListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagDropListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTagDropListResponseBody;
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
      body: GetTagDropListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTargetDimensionDataRequest extends $tea.Model {
  end?: number;
  flag?: string;
  label?: string;
  labelValue?: string;
  metricId?: string;
  operaUid?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      flag: 'Flag',
      label: 'Label',
      labelValue: 'LabelValue',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      flag: 'string',
      label: 'string',
      labelValue: 'string',
      metricId: 'string',
      operaUid: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTargetDimensionDataResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTargetDimensionDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTargetDimensionDataResponseBody;
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
      body: GetTargetDimensionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThresholdListRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThresholdListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThresholdListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetThresholdListResponseBody;
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
      body: GetThresholdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThroughPutRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThroughPutResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThroughPutResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetThroughPutResponseBody;
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
      body: GetThroughPutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSlsReportsRequest extends $tea.Model {
  instanceId?: string;
  productCode?: string;
  severity?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      severity: 'Severity',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      productCode: 'string',
      severity: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSlsReportsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrendSlsReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrendSlsReportsResponseBody;
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
      body: GetTrendSlsReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserInfoResponseBody;
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
      body: GetUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLoginInfoRequest extends $tea.Model {
  accountName?: string;
  accountPrincipalName?: string;
  accountType?: string;
  currentPk?: string;
  mainAccountPk?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrincipalName: 'AccountPrincipalName',
      accountType: 'AccountType',
      currentPk: 'CurrentPk',
      mainAccountPk: 'MainAccountPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrincipalName: 'string',
      accountType: 'string',
      currentPk: 'string',
      mainAccountPk: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLoginInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserLoginInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserLoginInfoResponseBody;
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
      body: GetUserLoginInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOrderConfigRequest extends $tea.Model {
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOrderConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserOrderConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserOrderConfigResponseBody;
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
      body: GetUserOrderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAlarmsRequest extends $tea.Model {
  alarmId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAlarmsResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAlarmsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IgnoreAlarmsResponseBody;
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
      body: IgnoreAlarmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyAuthorizationRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  permissionType?: number;
  switchFrontOperaUid?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      permissionType: 'PermissionType',
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      permissionType: 'number',
      switchFrontOperaUid: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyAuthorizationResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplyAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplyAuthorizationResponseBody;
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
      body: ListApplyAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthRequest extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthResponseBody extends $tea.Model {
  list?: string[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthResponseBody;
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
      body: ListAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUidResponseBody extends $tea.Model {
  code?: number;
  list?: number[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      list: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthorizedUidResponseBody;
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
      body: ListAuthorizedUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCausePlanRequest extends $tea.Model {
  eventId?: string;
  instanceId?: string;
  rootCauseId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      rootCauseId: 'RootCauseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      rootCauseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCausePlanResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCausePlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCausePlanResponseBody;
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
      body: ListCausePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfirmAuthorizationRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  permissionType?: number;
  switchFrontOperaUid?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      permissionType: 'PermissionType',
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      permissionType: 'number',
      switchFrontOperaUid: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfirmAuthorizationResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfirmAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfirmAuthorizationResponseBody;
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
      body: ListConfirmAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventResponseBody extends $tea.Model {
  code?: number;
  list?: { [key: string]: any }[];
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      list: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEventResponseBody;
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
      body: ListEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotAuthorizedUidResponseBody extends $tea.Model {
  code?: number;
  list?: number[];
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      list: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotAuthorizedUidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNotAuthorizedUidResponseBody;
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
      body: ListNotAuthorizedUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsResponseBody extends $tea.Model {
  code?: number;
  data?: ListReportsResponseBodyData[];
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListReportsResponseBodyData },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListReportsResponseBody;
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
      body: ListReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootCauseRequest extends $tea.Model {
  eventId?: string;
  instanceId?: string;
  rootCauseId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      rootCauseId: 'RootCauseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      rootCauseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootCauseResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRootCauseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRootCauseResponseBody;
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
      body: ListRootCauseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlsReportsRequest extends $tea.Model {
  currentPage?: number;
  instanceId?: string;
  logStore?: string;
  pageSize?: number;
  productCode?: string;
  severity?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      logStore: 'LogStore',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      severity: 'Severity',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      instanceId: 'string',
      logStore: 'string',
      pageSize: 'number',
      productCode: 'string',
      severity: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlsReportsResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any }[];
  message?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSlsReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSlsReportsResponseBody;
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
      body: ListSlsReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactRequest extends $tea.Model {
  email?: string;
  id?: number;
  name?: string;
  operaUid?: string;
  phone?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      name: 'Name',
      operaUid: 'OperaUid',
      phone: 'Phone',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'number',
      name: 'string',
      operaUid: 'string',
      phone: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertContactResponseBody;
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
      body: PutAlertContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactGroupRequest extends $tea.Model {
  alertContactGroupJson?: string;
  contactIdsJson?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertContactGroupJson: 'AlertContactGroupJson',
      contactIdsJson: 'ContactIdsJson',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContactGroupJson: 'string',
      contactIdsJson: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactGroupResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertContactGroupResponseBody;
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
      body: PutAlertContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactToGroupRequest extends $tea.Model {
  contactIdListJson?: string;
  groupId?: number;
  groupIdListJson?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdListJson: 'ContactIdListJson',
      groupId: 'GroupId',
      groupIdListJson: 'GroupIdListJson',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdListJson: 'string',
      groupId: 'number',
      groupIdListJson: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactToGroupResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertContactToGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertContactToGroupResponseBody;
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
      body: PutAlertContactToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertIgnoreRequest extends $tea.Model {
  alertId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertIgnoreResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertIgnoreResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertIgnoreResponseBody;
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
      body: PutAlertIgnoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingRequest extends $tea.Model {
  alarmLevel?: string;
  alertName?: string;
  alertSettingId?: number;
  alertSilenceConfig?: string;
  businessGroupIdsJson?: string;
  contactGroupIdsJson?: string;
  contactIdsJson?: string;
  customerUid?: number;
  operaUid?: string;
  sendDingtalkNotice?: boolean;
  sendEmailNotice?: boolean;
  sendSmsNotice?: boolean;
  stopDuration?: number;
  static names(): { [key: string]: string } {
    return {
      alarmLevel: 'AlarmLevel',
      alertName: 'AlertName',
      alertSettingId: 'AlertSettingId',
      alertSilenceConfig: 'AlertSilenceConfig',
      businessGroupIdsJson: 'BusinessGroupIdsJson',
      contactGroupIdsJson: 'ContactGroupIdsJson',
      contactIdsJson: 'ContactIdsJson',
      customerUid: 'CustomerUid',
      operaUid: 'OperaUid',
      sendDingtalkNotice: 'SendDingtalkNotice',
      sendEmailNotice: 'SendEmailNotice',
      sendSmsNotice: 'SendSmsNotice',
      stopDuration: 'StopDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmLevel: 'string',
      alertName: 'string',
      alertSettingId: 'number',
      alertSilenceConfig: 'string',
      businessGroupIdsJson: 'string',
      contactGroupIdsJson: 'string',
      contactIdsJson: 'string',
      customerUid: 'number',
      operaUid: 'string',
      sendDingtalkNotice: 'boolean',
      sendEmailNotice: 'boolean',
      sendSmsNotice: 'boolean',
      stopDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertSettingResponseBody;
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
      body: PutAlertSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingListRequest extends $tea.Model {
  alertSettingEditRequestListJson?: string;
  contactGroupIdsJson?: string;
  contactIdsJson?: string;
  static names(): { [key: string]: string } {
    return {
      alertSettingEditRequestListJson: 'AlertSettingEditRequestListJson',
      contactGroupIdsJson: 'ContactGroupIdsJson',
      contactIdsJson: 'ContactIdsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingEditRequestListJson: 'string',
      contactGroupIdsJson: 'string',
      contactIdsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingListResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertSettingListResponseBody;
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
      body: PutAlertSettingListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingStatusRequest extends $tea.Model {
  alertSettingId?: number;
  operaUid?: string;
  settingStatus?: number;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
      operaUid: 'OperaUid',
      settingStatus: 'SettingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
      operaUid: 'string',
      settingStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingStatusResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAlertSettingStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutAlertSettingStatusResponseBody;
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
      body: PutAlertSettingStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDataSourceConfigRequest extends $tea.Model {
  dataSourceDescribe?: string;
  dataSourceName?: string;
  dataSourceParams?: string;
  dataSourceParamsMapping?: string;
  dataSourceType?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceDescribe: 'DataSourceDescribe',
      dataSourceName: 'DataSourceName',
      dataSourceParams: 'DataSourceParams',
      dataSourceParamsMapping: 'DataSourceParamsMapping',
      dataSourceType: 'DataSourceType',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceDescribe: 'string',
      dataSourceName: 'string',
      dataSourceParams: 'string',
      dataSourceParamsMapping: 'string',
      dataSourceType: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDataSourceConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDataSourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutDataSourceConfigResponseBody;
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
      body: PutDataSourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupResourceTagRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  productId?: string;
  resources?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
      productId: 'ProductId',
      resources: 'Resources',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
      productId: 'string',
      resources: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupResourceTagResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupResourceTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutGroupResourceTagResponseBody;
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
      body: PutGroupResourceTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupTopologyTagLogRequest extends $tea.Model {
  businessGroupId?: string;
  operaUid?: string;
  topologyTag?: string;
  topologyTagShow?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      operaUid: 'OperaUid',
      topologyTag: 'TopologyTag',
      topologyTagShow: 'TopologyTagShow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      operaUid: 'string',
      topologyTag: 'string',
      topologyTagShow: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupTopologyTagLogResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupTopologyTagLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutGroupTopologyTagLogResponseBody;
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
      body: PutGroupTopologyTagLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutReportEmailConfigRequest extends $tea.Model {
  email?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutReportEmailConfigResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutReportEmailConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutReportEmailConfigResponseBody;
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
      body: PutReportEmailConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceWhitelistRequest extends $tea.Model {
  operaUid?: string;
  productCode?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productCode: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceWhitelistResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutResourceWhitelistResponseBody;
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
      body: PutResourceWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceScriptListRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  sceneId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
      sceneId: 'SceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
      sceneId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceScriptListResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceScriptListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReplaceScriptListResponseBody;
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
      body: ReplaceScriptListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSubmitApplyPermissionRequest extends $tea.Model {
  switchFrontOperaUid?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchFrontOperaUid: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSubmitApplyPermissionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeSubmitApplyPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeSubmitApplyPermissionResponseBody;
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
      body: RevokeSubmitApplyPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAnalysisProcessRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAnalysisProcessResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAnalysisProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunAnalysisProcessResponseBody;
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
      body: RunAnalysisProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  commandContent?: string;
  instanceIds?: string;
  name?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      instanceIds: 'InstanceIds',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      instanceIds: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCommandResponseBody;
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
      body: RunCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunForecastAnalyzeRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunForecastAnalyzeResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunForecastAnalyzeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunForecastAnalyzeResponseBody;
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
      body: RunForecastAnalyzeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPatrolInspectionRequest extends $tea.Model {
  operaUid?: string;
  productCodes?: string;
  riskCodeList?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      productCodes: 'ProductCodes',
      riskCodeList: 'RiskCodeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      productCodes: 'string',
      riskCodeList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPatrolInspectionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPatrolInspectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunPatrolInspectionResponseBody;
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
      body: RunPatrolInspectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRepairScriptRequest extends $tea.Model {
  eventId?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRepairScriptResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRepairScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunRepairScriptResponseBody;
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
      body: RunRepairScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRiskPatrolRequest extends $tea.Model {
  operaUid?: string;
  riskPatrolTypes?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      riskPatrolTypes: 'RiskPatrolTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      riskPatrolTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRiskPatrolResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunRiskPatrolResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunRiskPatrolResponseBody;
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
      body: RunRiskPatrolResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchUserTopRequest extends $tea.Model {
  switchFrontOperaUid?: string;
  type?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchFrontOperaUid: 'string',
      type: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchUserTopResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchUserTopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchUserTopResponseBody;
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
      body: SwitchUserTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdBusinessGroupRequest extends $tea.Model {
  aliUid?: string;
  businessGroupDesc?: string;
  businessGroupId?: string;
  businessGroupName?: string;
  instanceList?: string[];
  resourceType?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
      instanceList: 'InstanceList',
      resourceType: 'ResourceType',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      businessGroupDesc: 'string',
      businessGroupId: 'string',
      businessGroupName: 'string',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdBusinessGroupShrinkRequest extends $tea.Model {
  aliUid?: string;
  businessGroupDesc?: string;
  businessGroupId?: string;
  businessGroupName?: string;
  instanceListShrink?: string;
  resourceType?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
      instanceListShrink: 'InstanceList',
      resourceType: 'ResourceType',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      businessGroupDesc: 'string',
      businessGroupId: 'string',
      businessGroupName: 'string',
      instanceListShrink: 'string',
      resourceType: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdBusinessGroupResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdBusinessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdBusinessGroupResponseBody;
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
      body: UpdBusinessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationRequest extends $tea.Model {
  type?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuthorizationResponseBody;
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
      body: UpdateAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBindMetricRequest extends $tea.Model {
  id?: string;
  metricId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metricId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBindMetricResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBindMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBindMetricResponseBody;
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
      body: UpdateBindMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessGroupRequest extends $tea.Model {
  aliUid?: string;
  businessGroupDesc?: string;
  businessGroupId?: string;
  businessGroupName?: string;
  cloudResourceTypeId?: string;
  dealType?: number;
  instanceList?: string[];
  operaUid?: string;
  resourceType?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
      cloudResourceTypeId: 'CloudResourceTypeId',
      dealType: 'DealType',
      instanceList: 'InstanceList',
      operaUid: 'OperaUid',
      resourceType: 'ResourceType',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      businessGroupDesc: 'string',
      businessGroupId: 'string',
      businessGroupName: 'string',
      cloudResourceTypeId: 'string',
      dealType: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      operaUid: 'string',
      resourceType: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessGroupShrinkRequest extends $tea.Model {
  aliUid?: string;
  businessGroupDesc?: string;
  businessGroupId?: string;
  businessGroupName?: string;
  cloudResourceTypeId?: string;
  dealType?: number;
  instanceListShrink?: string;
  operaUid?: string;
  resourceType?: number;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      businessGroupDesc: 'BusinessGroupDesc',
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
      cloudResourceTypeId: 'CloudResourceTypeId',
      dealType: 'DealType',
      instanceListShrink: 'InstanceList',
      operaUid: 'OperaUid',
      resourceType: 'ResourceType',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      businessGroupDesc: 'string',
      businessGroupId: 'string',
      businessGroupName: 'string',
      cloudResourceTypeId: 'string',
      dealType: 'number',
      instanceListShrink: 'string',
      operaUid: 'string',
      resourceType: 'number',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessGroupResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBusinessGroupResponseBody;
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
      body: UpdateBusinessGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessMetricAlertConfigRequest extends $tea.Model {
  alertConfigId?: number;
  configs?: string;
  metricId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfigId: 'AlertConfigId',
      configs: 'Configs',
      metricId: 'MetricId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfigId: 'number',
      configs: 'string',
      metricId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessMetricAlertConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessMetricAlertConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBusinessMetricAlertConfigResponseBody;
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
      body: UpdateBusinessMetricAlertConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessMetricResourceRequest extends $tea.Model {
  businessMetricId?: number;
  operaUid?: string;
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      businessMetricId: 'BusinessMetricId',
      operaUid: 'OperaUid',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMetricId: 'number',
      operaUid: 'string',
      resourceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessMetricResourceResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessMetricResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBusinessMetricResourceResponseBody;
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
      body: UpdateBusinessMetricResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigRequest extends $tea.Model {
  dataSourceDescribe?: string;
  dataSourceName?: string;
  dataSourceParams?: string;
  dataSourceParamsMapping?: string;
  dataSourceType?: number;
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceDescribe: 'DataSourceDescribe',
      dataSourceName: 'DataSourceName',
      dataSourceParams: 'DataSourceParams',
      dataSourceParamsMapping: 'DataSourceParamsMapping',
      dataSourceType: 'DataSourceType',
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceDescribe: 'string',
      dataSourceName: 'string',
      dataSourceParams: 'string',
      dataSourceParamsMapping: 'string',
      dataSourceType: 'number',
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataSourceConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDataSourceConfigResponseBody;
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
      body: UpdateDataSourceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHandleRiskRequest extends $tea.Model {
  patrolDetailIds?: string;
  patrolId?: number;
  switchFrontOperaUid?: string;
  static names(): { [key: string]: string } {
    return {
      patrolDetailIds: 'PatrolDetailIds',
      patrolId: 'PatrolId',
      switchFrontOperaUid: 'SwitchFrontOperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patrolDetailIds: 'string',
      patrolId: 'number',
      switchFrontOperaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHandleRiskResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHandleRiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHandleRiskResponseBody;
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
      body: UpdateHandleRiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHandleRiskBaseRequest extends $tea.Model {
  handleDescribe?: string;
  operaUid?: string;
  patrolDetailIds?: string;
  patrolId?: number;
  static names(): { [key: string]: string } {
    return {
      handleDescribe: 'HandleDescribe',
      operaUid: 'OperaUid',
      patrolDetailIds: 'PatrolDetailIds',
      patrolId: 'PatrolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handleDescribe: 'string',
      operaUid: 'string',
      patrolDetailIds: 'string',
      patrolId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHandleRiskBaseResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHandleRiskBaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateHandleRiskBaseResponseBody;
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
      body: UpdateHandleRiskBaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIgnoreRiskRequest extends $tea.Model {
  patrolDetailIds?: string;
  patrolId?: number;
  switchFrontOperaUid?: string;
  static names(): { [key: string]: string } {
    return {
      patrolDetailIds: 'PatrolDetailIds',
      patrolId: 'PatrolId',
      switchFrontOperaUid: 'SwitchFrontOperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patrolDetailIds: 'string',
      patrolId: 'number',
      switchFrontOperaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIgnoreRiskResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIgnoreRiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIgnoreRiskResponseBody;
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
      body: UpdateIgnoreRiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIgnoreRiskBaseRequest extends $tea.Model {
  handleDescribe?: string;
  operaUid?: string;
  patrolDetailIds?: string;
  patrolId?: number;
  static names(): { [key: string]: string } {
    return {
      handleDescribe: 'HandleDescribe',
      operaUid: 'OperaUid',
      patrolDetailIds: 'PatrolDetailIds',
      patrolId: 'PatrolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handleDescribe: 'string',
      operaUid: 'string',
      patrolDetailIds: 'string',
      patrolId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIgnoreRiskBaseResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIgnoreRiskBaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIgnoreRiskBaseResponseBody;
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
      body: UpdateIgnoreRiskBaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInspectionSettingStatusRequest extends $tea.Model {
  operaUid?: string;
  riskCode?: string;
  riskEnableStatus?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      riskCode: 'RiskCode',
      riskEnableStatus: 'RiskEnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      riskCode: 'string',
      riskEnableStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInspectionSettingStatusResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInspectionSettingStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInspectionSettingStatusResponseBody;
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
      body: UpdateInspectionSettingStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInspectionThresholdRequest extends $tea.Model {
  operaUid?: string;
  riskCode?: string;
  thresholdItemListJson?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      riskCode: 'RiskCode',
      thresholdItemListJson: 'ThresholdItemListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      riskCode: 'string',
      thresholdItemListJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInspectionThresholdResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInspectionThresholdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInspectionThresholdResponseBody;
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
      body: UpdateInspectionThresholdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOperationPermissionRequest extends $tea.Model {
  permissionType?: number;
  switchFrontOperaUid?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      permissionType: 'PermissionType',
      switchFrontOperaUid: 'SwitchFrontOperaUid',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionType: 'number',
      switchFrontOperaUid: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOperationPermissionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOperationPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOperationPermissionResponseBody;
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
      body: UpdateOperationPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportEmailConfigStatusRequest extends $tea.Model {
  configStatus?: number;
  mailConfigId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      configStatus: 'ConfigStatus',
      mailConfigId: 'MailConfigId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatus: 'number',
      mailConfigId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportEmailConfigStatusResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportEmailConfigStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateReportEmailConfigStatusResponseBody;
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
      body: UpdateReportEmailConfigStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportSubscriptionRequest extends $tea.Model {
  dayOfWeek?: number;
  hourOfDay?: number;
  operaUid?: string;
  reportName?: string;
  subscribe?: number;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'DayOfWeek',
      hourOfDay: 'HourOfDay',
      operaUid: 'OperaUid',
      reportName: 'ReportName',
      subscribe: 'Subscribe',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: 'number',
      hourOfDay: 'number',
      operaUid: 'string',
      reportName: 'string',
      subscribe: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportSubscriptionResponseBody extends $tea.Model {
  code?: number;
  data?: boolean;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateReportSubscriptionResponseBody;
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
      body: UpdateReportSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScenarioRequest extends $tea.Model {
  alertSettingId?: number;
  id?: string;
  level?: number;
  name?: string;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      alertSettingId: 'AlertSettingId',
      id: 'Id',
      level: 'Level',
      name: 'Name',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSettingId: 'number',
      id: 'string',
      level: 'number',
      name: 'string',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScenarioResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  pageTotal?: number;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      pageTotal: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScenarioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScenarioResponseBody;
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
      body: UpdateScenarioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneRequest extends $tea.Model {
  flowName?: string;
  metricListJson?: string;
  nodeListJson?: string;
  operaUid?: string;
  sceneDesc?: string;
  sceneId?: number;
  sceneName?: string;
  sceneOwner?: string;
  sceneWebhook?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      metricListJson: 'MetricListJson',
      nodeListJson: 'NodeListJson',
      operaUid: 'OperaUid',
      sceneDesc: 'SceneDesc',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      sceneOwner: 'SceneOwner',
      sceneWebhook: 'SceneWebhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      metricListJson: 'string',
      nodeListJson: 'string',
      operaUid: 'string',
      sceneDesc: 'string',
      sceneId: 'number',
      sceneName: 'string',
      sceneOwner: 'string',
      sceneWebhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSceneResponseBody;
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
      body: UpdateSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelRequest extends $tea.Model {
  fcFunctionName?: string;
  fcHandler?: string;
  fcInitializer?: string;
  fcRegionNo?: string;
  fcServiceName?: string;
  modelDesc?: string;
  modelId?: number;
  modelLanguage?: number;
  modelMemo?: string;
  modelName?: string;
  modelType?: number;
  operaUid?: string;
  rootCauseDesc?: string;
  rootCauseSolution?: string;
  static names(): { [key: string]: string } {
    return {
      fcFunctionName: 'FcFunctionName',
      fcHandler: 'FcHandler',
      fcInitializer: 'FcInitializer',
      fcRegionNo: 'FcRegionNo',
      fcServiceName: 'FcServiceName',
      modelDesc: 'ModelDesc',
      modelId: 'ModelId',
      modelLanguage: 'ModelLanguage',
      modelMemo: 'ModelMemo',
      modelName: 'ModelName',
      modelType: 'ModelType',
      operaUid: 'OperaUid',
      rootCauseDesc: 'RootCauseDesc',
      rootCauseSolution: 'RootCauseSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcFunctionName: 'string',
      fcHandler: 'string',
      fcInitializer: 'string',
      fcRegionNo: 'string',
      fcServiceName: 'string',
      modelDesc: 'string',
      modelId: 'number',
      modelLanguage: 'number',
      modelMemo: 'string',
      modelName: 'string',
      modelType: 'number',
      operaUid: 'string',
      rootCauseDesc: 'string',
      rootCauseSolution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSceneModelResponseBody;
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
      body: UpdateSceneModelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelApplyRequest extends $tea.Model {
  applyContent?: string;
  applyId?: number;
  applyStatus?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      applyContent: 'ApplyContent',
      applyId: 'ApplyId',
      applyStatus: 'ApplyStatus',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyContent: 'string',
      applyId: 'number',
      applyStatus: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelApplyResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelApplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSceneModelApplyResponseBody;
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
      body: UpdateSceneModelApplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelCurVersionRequest extends $tea.Model {
  extId?: number;
  modelId?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      extId: 'ExtId',
      modelId: 'ModelId',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extId: 'number',
      modelId: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelCurVersionResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneModelCurVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSceneModelCurVersionResponseBody;
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
      body: UpdateSceneModelCurVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneSystemModelStatusRequest extends $tea.Model {
  modelId?: number;
  modelStatus?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      modelStatus: 'ModelStatus',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      modelStatus: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneSystemModelStatusResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSceneSystemModelStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSceneSystemModelStatusResponseBody;
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
      body: UpdateSceneSystemModelStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScenestatusRequest extends $tea.Model {
  id?: number;
  operaUid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operaUid: 'OperaUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      operaUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScenestatusResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScenestatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScenestatusResponseBody;
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
      body: UpdateScenestatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScriptRequest extends $tea.Model {
  handleSuggestDesc?: string;
  id?: number;
  metricName?: string;
  operaUid?: string;
  productCode?: string;
  rootCauseDesc?: string;
  rootCausesLog?: string;
  sceneId?: string;
  script?: string;
  scriptLanguage?: string;
  scriptName?: string;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      handleSuggestDesc: 'HandleSuggestDesc',
      id: 'Id',
      metricName: 'MetricName',
      operaUid: 'OperaUid',
      productCode: 'ProductCode',
      rootCauseDesc: 'RootCauseDesc',
      rootCausesLog: 'RootCausesLog',
      sceneId: 'SceneId',
      script: 'Script',
      scriptLanguage: 'ScriptLanguage',
      scriptName: 'ScriptName',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handleSuggestDesc: 'string',
      id: 'number',
      metricName: 'string',
      operaUid: 'string',
      productCode: 'string',
      rootCauseDesc: 'string',
      rootCausesLog: 'string',
      sceneId: 'string',
      script: 'string',
      scriptLanguage: 'string',
      scriptName: 'string',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScriptResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScriptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateScriptResponseBody;
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
      body: UpdateScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStatusOfSceneRequest extends $tea.Model {
  operaUid?: string;
  sceneId?: number;
  sceneStatus?: number;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      sceneId: 'SceneId',
      sceneStatus: 'SceneStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      sceneId: 'number',
      sceneStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStatusOfSceneResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStatusOfSceneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateStatusOfSceneResponseBody;
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
      body: UpdateStatusOfSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagInfoRequest extends $tea.Model {
  operaUid?: string;
  tagId?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      operaUid: 'OperaUid',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operaUid: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagInfoResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  msg?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTagInfoResponseBody;
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
      body: UpdateTagInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertBusinessGroupWithAlertSettingIdResponseBodyData extends $tea.Model {
  businessGroupId?: string;
  businessGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      businessGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactResponseBodyData extends $tea.Model {
  email?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupNames?: string;
  id?: number;
  name?: string;
  phone?: string;
  uid?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupNames: 'groupNames',
      id: 'id',
      name: 'name',
      phone: 'phone',
      uid: 'uid',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupNames: 'string',
      id: 'number',
      name: 'string',
      phone: 'string',
      uid: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactGroupResponseBodyData extends $tea.Model {
  createTime?: string;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  id?: number;
  uid?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupName: 'groupName',
      id: 'id',
      uid: 'uid',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      id: 'number',
      uid: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithAlertSettingIdResponseBodyData extends $tea.Model {
  contactId?: number;
  contactName?: string;
  contactType?: number;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      contactName: 'contactName',
      contactType: 'contactType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      contactType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertContactWithGroupIdResponseBodyData extends $tea.Model {
  email?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  name?: string;
  phone?: string;
  uid?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      name: 'name',
      phone: 'phone',
      uid: 'uid',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      name: 'string',
      phone: 'string',
      uid: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertDetailDataResponseBodyData extends $tea.Model {
  alertName?: string;
  algorithm?: string;
  beginTime?: string;
  category?: string;
  countConvergence?: number;
  endTime?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRegionName?: string;
  metricExtend?: string;
  mttr?: string;
  serviceType?: string;
  metricName?: string;
  metricUnit?: string;
  productCodeKey?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      algorithm: 'Algorithm',
      beginTime: 'BeginTime',
      category: 'Category',
      countConvergence: 'CountConvergence',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRegionName: 'InstanceRegionName',
      metricExtend: 'MetricExtend',
      mttr: 'Mttr',
      serviceType: 'ServiceType',
      metricName: 'metricName',
      metricUnit: 'metricUnit',
      productCodeKey: 'productCodeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      algorithm: 'string',
      beginTime: 'string',
      category: 'string',
      countConvergence: 'number',
      endTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRegionName: 'string',
      metricExtend: 'string',
      mttr: 'string',
      serviceType: 'string',
      metricName: 'string',
      metricUnit: 'string',
      productCodeKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingResponseBodyData extends $tea.Model {
  alarmLevel?: string;
  alertName?: string;
  alertSettingId?: number;
  businessGroupIds?: string;
  businessGroupNames?: string;
  contactIds?: string;
  contactNames?: string;
  sendDingtalkNotice?: boolean;
  sendEmailNotice?: boolean;
  sendSmsNotice?: boolean;
  settingStatus?: number;
  stopDuration?: number;
  totalBusinessResourceNumber?: number;
  static names(): { [key: string]: string } {
    return {
      alarmLevel: 'AlarmLevel',
      alertName: 'AlertName',
      alertSettingId: 'AlertSettingId',
      businessGroupIds: 'BusinessGroupIds',
      businessGroupNames: 'BusinessGroupNames',
      contactIds: 'ContactIds',
      contactNames: 'ContactNames',
      sendDingtalkNotice: 'SendDingtalkNotice',
      sendEmailNotice: 'SendEmailNotice',
      sendSmsNotice: 'SendSmsNotice',
      settingStatus: 'SettingStatus',
      stopDuration: 'StopDuration',
      totalBusinessResourceNumber: 'TotalBusinessResourceNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmLevel: 'string',
      alertName: 'string',
      alertSettingId: 'number',
      businessGroupIds: 'string',
      businessGroupNames: 'string',
      contactIds: 'string',
      contactNames: 'string',
      sendDingtalkNotice: 'boolean',
      sendEmailNotice: 'boolean',
      sendSmsNotice: 'boolean',
      settingStatus: 'number',
      stopDuration: 'number',
      totalBusinessResourceNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertSettingByIdResponseBodyData extends $tea.Model {
  alarmLevel?: string;
  alertBusinessSettingId?: number;
  alertName?: string;
  dataCreateTime?: string;
  dataCreateUser?: string;
  dataModifyTime?: string;
  dataModifyUser?: string;
  sendDingtalkNotice?: boolean;
  sendEmailNotice?: boolean;
  sendSmsNotice?: boolean;
  settingStatus?: number;
  stopDuration?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      alarmLevel: 'AlarmLevel',
      alertBusinessSettingId: 'AlertBusinessSettingId',
      alertName: 'AlertName',
      dataCreateTime: 'DataCreateTime',
      dataCreateUser: 'DataCreateUser',
      dataModifyTime: 'DataModifyTime',
      dataModifyUser: 'DataModifyUser',
      sendDingtalkNotice: 'SendDingtalkNotice',
      sendEmailNotice: 'SendEmailNotice',
      sendSmsNotice: 'SendSmsNotice',
      settingStatus: 'SettingStatus',
      stopDuration: 'StopDuration',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmLevel: 'string',
      alertBusinessSettingId: 'number',
      alertName: 'string',
      dataCreateTime: 'string',
      dataCreateUser: 'string',
      dataModifyTime: 'string',
      dataModifyUser: 'string',
      sendDingtalkNotice: 'boolean',
      sendEmailNotice: 'boolean',
      sendSmsNotice: 'boolean',
      settingStatus: 'number',
      stopDuration: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactResponseBodyData extends $tea.Model {
  email?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupNames?: string;
  id?: number;
  name?: string;
  phone?: string;
  uid?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupNames: 'groupNames',
      id: 'id',
      name: 'name',
      phone: 'phone',
      uid: 'uid',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupNames: 'string',
      id: 'number',
      name: 'string',
      phone: 'string',
      uid: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllAlertContactGroupResponseBodyData extends $tea.Model {
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupName?: string;
  id?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupName: 'groupName',
      id: 'id',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      id: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllBusinessGroupInfoResponseBodyData extends $tea.Model {
  businessGroupId?: string;
  businessGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      businessGroupId: 'BusinessGroupId',
      businessGroupName: 'BusinessGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessGroupId: 'string',
      businessGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReportDataResponseBodyData extends $tea.Model {
  heathScore?: number;
  heathScoreTrendList?: number[];
  preUpdateTime?: string;
  riskCount?: number;
  riskCountTrendList?: number[];
  static names(): { [key: string]: string } {
    return {
      heathScore: 'HeathScore',
      heathScoreTrendList: 'HeathScoreTrendList',
      preUpdateTime: 'PreUpdateTime',
      riskCount: 'RiskCount',
      riskCountTrendList: 'RiskCountTrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heathScore: 'number',
      heathScoreTrendList: { 'type': 'array', 'itemType': 'number' },
      preUpdateTime: 'string',
      riskCount: 'number',
      riskCountTrendList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportsResponseBodyData extends $tea.Model {
  bid?: string;
  cid?: number;
  costCount?: number;
  costCountTrendJson?: string;
  criticalCount?: number;
  criticalCountTrendJson?: string;
  customerName?: string;
  gcLevel?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  normalCount?: number;
  normalCountTrendJson?: string;
  score?: number;
  scoreTrendJson?: string;
  trendJson?: string;
  uid?: number;
  warningCount?: number;
  warningCountTrendJson?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'bid',
      cid: 'cid',
      costCount: 'costCount',
      costCountTrendJson: 'costCountTrendJson',
      criticalCount: 'criticalCount',
      criticalCountTrendJson: 'criticalCountTrendJson',
      customerName: 'customerName',
      gcLevel: 'gcLevel',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      normalCount: 'normalCount',
      normalCountTrendJson: 'normalCountTrendJson',
      score: 'score',
      scoreTrendJson: 'scoreTrendJson',
      trendJson: 'trendJson',
      uid: 'uid',
      warningCount: 'warningCount',
      warningCountTrendJson: 'warningCountTrendJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      cid: 'number',
      costCount: 'number',
      costCountTrendJson: 'string',
      criticalCount: 'number',
      criticalCountTrendJson: 'string',
      customerName: 'string',
      gcLevel: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      normalCount: 'number',
      normalCountTrendJson: 'string',
      score: 'number',
      scoreTrendJson: 'string',
      trendJson: 'string',
      uid: 'number',
      warningCount: 'number',
      warningCountTrendJson: 'string',
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
    this._endpoint = this.getEndpoint("aiops", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAlgorithmWithOptions(request: AddAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<AddAlgorithmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithmId)) {
      query["AlgorithmId"] = request.algorithmId;
    }

    if (!Util.isUnset(request.algorithmType)) {
      query["AlgorithmType"] = request.algorithmType;
    }

    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.expandInformation)) {
      query["ExpandInformation"] = request.expandInformation;
    }

    if (!Util.isUnset(request.indexId)) {
      query["IndexId"] = request.indexId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddAlgorithm",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddAlgorithmResponse>(await this.callApi(params, req, runtime), new AddAlgorithmResponse({}));
  }

  async addAlgorithm(request: AddAlgorithmRequest): Promise<AddAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAlgorithmWithOptions(request, runtime);
  }

  async addBusinessGroupWithOptions(tmpReq: AddBusinessGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddBusinessGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new AddBusinessGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.businessGroupDesc)) {
      query["BusinessGroupDesc"] = request.businessGroupDesc;
    }

    if (!Util.isUnset(request.businessGroupName)) {
      query["BusinessGroupName"] = request.businessGroupName;
    }

    if (!Util.isUnset(request.createUser)) {
      query["CreateUser"] = request.createUser;
    }

    if (!Util.isUnset(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.updateUser)) {
      query["UpdateUser"] = request.updateUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBusinessGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBusinessGroupResponse>(await this.callApi(params, req, runtime), new AddBusinessGroupResponse({}));
  }

  async addBusinessGroup(request: AddBusinessGroupRequest): Promise<AddBusinessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBusinessGroupWithOptions(request, runtime);
  }

  async addBusinessGroupOneWithOptions(request: AddBusinessGroupOneRequest, runtime: $Util.RuntimeOptions): Promise<AddBusinessGroupOneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessGroupDesc)) {
      body["BusinessGroupDesc"] = request.businessGroupDesc;
    }

    if (!Util.isUnset(request.businessGroupName)) {
      body["BusinessGroupName"] = request.businessGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddBusinessGroupOne",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBusinessGroupOneResponse>(await this.callApi(params, req, runtime), new AddBusinessGroupOneResponse({}));
  }

  async addBusinessGroupOne(request: AddBusinessGroupOneRequest): Promise<AddBusinessGroupOneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBusinessGroupOneWithOptions(request, runtime);
  }

  async addScenarioWithOptions(request: AddScenarioRequest, runtime: $Util.RuntimeOptions): Promise<AddScenarioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertSettingId)) {
      query["AlertSettingId"] = request.alertSettingId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddScenario",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddScenarioResponse>(await this.callApi(params, req, runtime), new AddScenarioResponse({}));
  }

  async addScenario(request: AddScenarioRequest): Promise<AddScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addScenarioWithOptions(request, runtime);
  }

  async addSceneListWithOptions(request: AddSceneListRequest, runtime: $Util.RuntimeOptions): Promise<AddSceneListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSceneList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSceneListResponse>(await this.callApi(params, req, runtime), new AddSceneListResponse({}));
  }

  async addSceneList(request: AddSceneListRequest): Promise<AddSceneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSceneListWithOptions(request, runtime);
  }

  async addScriptWithOptions(request: AddScriptRequest, runtime: $Util.RuntimeOptions): Promise<AddScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.handleSuggestDesc)) {
      query["HandleSuggestDesc"] = request.handleSuggestDesc;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.rootCauseDesc)) {
      query["RootCauseDesc"] = request.rootCauseDesc;
    }

    if (!Util.isUnset(request.rootCausesLog)) {
      query["RootCausesLog"] = request.rootCausesLog;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.script)) {
      query["Script"] = request.script;
    }

    if (!Util.isUnset(request.scriptDesc)) {
      query["ScriptDesc"] = request.scriptDesc;
    }

    if (!Util.isUnset(request.scriptLanguage)) {
      query["ScriptLanguage"] = request.scriptLanguage;
    }

    if (!Util.isUnset(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!Util.isUnset(request.scriptVersion)) {
      query["ScriptVersion"] = request.scriptVersion;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddScript",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddScriptResponse>(await this.callApi(params, req, runtime), new AddScriptResponse({}));
  }

  async addScript(request: AddScriptRequest): Promise<AddScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addScriptWithOptions(request, runtime);
  }

  async addTagInfoWithOptions(request: AddTagInfoRequest, runtime: $Util.RuntimeOptions): Promise<AddTagInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTagInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagInfoResponse>(await this.callApi(params, req, runtime), new AddTagInfoResponse({}));
  }

  async addTagInfo(request: AddTagInfoRequest): Promise<AddTagInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagInfoWithOptions(request, runtime);
  }

  async againSubmitApplyPermissionWithOptions(request: AgainSubmitApplyPermissionRequest, runtime: $Util.RuntimeOptions): Promise<AgainSubmitApplyPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AgainSubmitApplyPermission",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AgainSubmitApplyPermissionResponse>(await this.callApi(params, req, runtime), new AgainSubmitApplyPermissionResponse({}));
  }

  async againSubmitApplyPermission(request: AgainSubmitApplyPermissionRequest): Promise<AgainSubmitApplyPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.againSubmitApplyPermissionWithOptions(request, runtime);
  }

  async applyAuthorizationWithOptions(request: ApplyAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyAuthorization",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyAuthorizationResponse>(await this.callApi(params, req, runtime), new ApplyAuthorizationResponse({}));
  }

  async applyAuthorization(request: ApplyAuthorizationRequest): Promise<ApplyAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAuthorizationWithOptions(request, runtime);
  }

  async checkDataSourceLinkConnectionWithOptions(request: CheckDataSourceLinkConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CheckDataSourceLinkConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceParams)) {
      query["DataSourceParams"] = request.dataSourceParams;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDataSourceLinkConnection",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDataSourceLinkConnectionResponse>(await this.callApi(params, req, runtime), new CheckDataSourceLinkConnectionResponse({}));
  }

  async checkDataSourceLinkConnection(request: CheckDataSourceLinkConnectionRequest): Promise<CheckDataSourceLinkConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDataSourceLinkConnectionWithOptions(request, runtime);
  }

  async checkLogWithOptions(request: CheckLogRequest, runtime: $Util.RuntimeOptions): Promise<CheckLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckLog",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckLogResponse>(await this.callApi(params, req, runtime), new CheckLogResponse({}));
  }

  async checkLog(request: CheckLogRequest): Promise<CheckLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkLogWithOptions(request, runtime);
  }

  async closeEventWithOptions(request: CloseEventRequest, runtime: $Util.RuntimeOptions): Promise<CloseEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.closeDesc)) {
      query["CloseDesc"] = request.closeDesc;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CloseEvent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CloseEventResponse>(await this.callApi(params, req, runtime), new CloseEventResponse({}));
  }

  async closeEvent(request: CloseEventRequest): Promise<CloseEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeEventWithOptions(request, runtime);
  }

  async confirmAuthorizationWithOptions(request: ConfirmAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ConfirmAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfirmAuthorization",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfirmAuthorizationResponse>(await this.callApi(params, req, runtime), new ConfirmAuthorizationResponse({}));
  }

  async confirmAuthorization(request: ConfirmAuthorizationRequest): Promise<ConfirmAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.confirmAuthorizationWithOptions(request, runtime);
  }

  async countLatestReportsWithOptions(request: CountLatestReportsRequest, runtime: $Util.RuntimeOptions): Promise<CountLatestReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CountLatestReports",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CountLatestReportsResponse>(await this.callApi(params, req, runtime), new CountLatestReportsResponse({}));
  }

  async countLatestReports(request: CountLatestReportsRequest): Promise<CountLatestReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.countLatestReportsWithOptions(request, runtime);
  }

  async createAlertContactWithOptions(request: CreateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.webhook)) {
      body["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlertContact",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlertContactResponse>(await this.callApi(params, req, runtime), new CreateAlertContactResponse({}));
  }

  async createAlertContact(request: CreateAlertContactRequest): Promise<CreateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  async createAlertContactGroupWithOptions(request: CreateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertContactGroupJson)) {
      body["AlertContactGroupJson"] = request.alertContactGroupJson;
    }

    if (!Util.isUnset(request.contactIdsJson)) {
      body["ContactIdsJson"] = request.contactIdsJson;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlertContactGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new CreateAlertContactGroupResponse({}));
  }

  async createAlertContactGroup(request: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  async createCommandWithOptions(request: CreateCommandRequest, runtime: $Util.RuntimeOptions): Promise<CreateCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    if (!Util.isUnset(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCommand",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCommandResponse>(await this.callApi(params, req, runtime), new CreateCommandResponse({}));
  }

  async createCommand(request: CreateCommandRequest): Promise<CreateCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCommandWithOptions(request, runtime);
  }

  async createDumpWithOptions(request: CreateDumpRequest, runtime: $Util.RuntimeOptions): Promise<CreateDumpResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDump",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDumpResponse>(await this.callApi(params, req, runtime), new CreateDumpResponse({}));
  }

  async createDump(request: CreateDumpRequest): Promise<CreateDumpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDumpWithOptions(request, runtime);
  }

  async createInspectionRecordWithOptions(request: CreateInspectionRecordRequest, runtime: $Util.RuntimeOptions): Promise<CreateInspectionRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInspectionRecord",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInspectionRecordResponse>(await this.callApi(params, req, runtime), new CreateInspectionRecordResponse({}));
  }

  async createInspectionRecord(request: CreateInspectionRecordRequest): Promise<CreateInspectionRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInspectionRecordWithOptions(request, runtime);
  }

  async createMessageWithOptions(request: CreateMessageRequest, runtime: $Util.RuntimeOptions): Promise<CreateMessageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMessage",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMessageResponse>(await this.callApi(params, req, runtime), new CreateMessageResponse({}));
  }

  async createMessage(request: CreateMessageRequest): Promise<CreateMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMessageWithOptions(request, runtime);
  }

  async createSceneWithOptions(request: CreateSceneRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.metricListJson)) {
      body["MetricListJson"] = request.metricListJson;
    }

    if (!Util.isUnset(request.nodeListJson)) {
      body["NodeListJson"] = request.nodeListJson;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sceneDesc)) {
      body["SceneDesc"] = request.sceneDesc;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.sceneOwner)) {
      body["SceneOwner"] = request.sceneOwner;
    }

    if (!Util.isUnset(request.sceneWebhook)) {
      body["SceneWebhook"] = request.sceneWebhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateScene",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSceneResponse>(await this.callApi(params, req, runtime), new CreateSceneResponse({}));
  }

  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneWithOptions(request, runtime);
  }

  async createSceneModelWithOptions(request: CreateSceneModelRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fcFunctionName)) {
      body["FcFunctionName"] = request.fcFunctionName;
    }

    if (!Util.isUnset(request.fcHandler)) {
      body["FcHandler"] = request.fcHandler;
    }

    if (!Util.isUnset(request.fcInitializer)) {
      body["FcInitializer"] = request.fcInitializer;
    }

    if (!Util.isUnset(request.fcRegionNo)) {
      body["FcRegionNo"] = request.fcRegionNo;
    }

    if (!Util.isUnset(request.fcServiceName)) {
      body["FcServiceName"] = request.fcServiceName;
    }

    if (!Util.isUnset(request.modelDesc)) {
      body["ModelDesc"] = request.modelDesc;
    }

    if (!Util.isUnset(request.modelLanguage)) {
      body["ModelLanguage"] = request.modelLanguage;
    }

    if (!Util.isUnset(request.modelMemo)) {
      body["ModelMemo"] = request.modelMemo;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.rootCauseDesc)) {
      body["RootCauseDesc"] = request.rootCauseDesc;
    }

    if (!Util.isUnset(request.rootCauseSolution)) {
      body["RootCauseSolution"] = request.rootCauseSolution;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSceneModel",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSceneModelResponse>(await this.callApi(params, req, runtime), new CreateSceneModelResponse({}));
  }

  async createSceneModel(request: CreateSceneModelRequest): Promise<CreateSceneModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneModelWithOptions(request, runtime);
  }

  async createSceneModelApplyWithOptions(request: CreateSceneModelApplyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneModelApplyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSceneModelApply",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSceneModelApplyResponse>(await this.callApi(params, req, runtime), new CreateSceneModelApplyResponse({}));
  }

  async createSceneModelApply(request: CreateSceneModelApplyRequest): Promise<CreateSceneModelApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneModelApplyWithOptions(request, runtime);
  }

  async delBusinessGroupWithOptions(request: DelBusinessGroupRequest, runtime: $Util.RuntimeOptions): Promise<DelBusinessGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DelBusinessGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DelBusinessGroupResponse>(await this.callApi(params, req, runtime), new DelBusinessGroupResponse({}));
  }

  async delBusinessGroup(request: DelBusinessGroupRequest): Promise<DelBusinessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.delBusinessGroupWithOptions(request, runtime);
  }

  async deleteAlertContactWithOptions(request: DeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactIdListJson)) {
      body["ContactIdListJson"] = request.contactIdListJson;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContact",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactResponse({}));
  }

  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  async deleteAlertContactFromGroupWithOptions(request: DeleteAlertContactFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactIdListJson)) {
      body["ContactIdListJson"] = request.contactIdListJson;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContactFromGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertContactFromGroupResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactFromGroupResponse({}));
  }

  async deleteAlertContactFromGroup(request: DeleteAlertContactFromGroupRequest): Promise<DeleteAlertContactFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactFromGroupWithOptions(request, runtime);
  }

  async deleteAlertContactGroupWithOptions(request: DeleteAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertContactGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new DeleteAlertContactGroupResponse({}));
  }

  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  async deleteAlertSettingWithOptions(request: DeleteAlertSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertSettingId)) {
      body["AlertSettingId"] = request.alertSettingId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertSetting",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertSettingResponse>(await this.callApi(params, req, runtime), new DeleteAlertSettingResponse({}));
  }

  async deleteAlertSetting(request: DeleteAlertSettingRequest): Promise<DeleteAlertSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertSettingWithOptions(request, runtime);
  }

  async deleteAlertSettingListWithOptions(request: DeleteAlertSettingListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertSettingListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customerIdsJson)) {
      body["CustomerIdsJson"] = request.customerIdsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlertSettingList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlertSettingListResponse>(await this.callApi(params, req, runtime), new DeleteAlertSettingListResponse({}));
  }

  async deleteAlertSettingList(request: DeleteAlertSettingListRequest): Promise<DeleteAlertSettingListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertSettingListWithOptions(request, runtime);
  }

  async deleteAlgorithmInfoWithOptions(request: DeleteAlgorithmInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlgorithmInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlgorithmInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAlgorithmInfoResponse>(await this.callApi(params, req, runtime), new DeleteAlgorithmInfoResponse({}));
  }

  async deleteAlgorithmInfo(request: DeleteAlgorithmInfoRequest): Promise<DeleteAlgorithmInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlgorithmInfoWithOptions(request, runtime);
  }

  async deleteBusinessGroupWithOptions(request: DeleteBusinessGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBusinessGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBusinessGroupResponse>(await this.callApi(params, req, runtime), new DeleteBusinessGroupResponse({}));
  }

  async deleteBusinessGroup(request: DeleteBusinessGroupRequest): Promise<DeleteBusinessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessGroupWithOptions(request, runtime);
  }

  async deleteBusinessResourceTagWithOptions(request: DeleteBusinessResourceTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessResourceTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBusinessResourceTag",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBusinessResourceTagResponse>(await this.callApi(params, req, runtime), new DeleteBusinessResourceTagResponse({}));
  }

  async deleteBusinessResourceTag(request: DeleteBusinessResourceTagRequest): Promise<DeleteBusinessResourceTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBusinessResourceTagWithOptions(request, runtime);
  }

  async deleteDataSourceConfigWithOptions(request: DeleteDataSourceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSourceConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceConfigResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceConfigResponse({}));
  }

  async deleteDataSourceConfig(request: DeleteDataSourceConfigRequest): Promise<DeleteDataSourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceConfigWithOptions(request, runtime);
  }

  async deleteGroupTopologyTagLogWithOptions(request: DeleteGroupTopologyTagLogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupTopologyTagLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupTopologyTagLog",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupTopologyTagLogResponse>(await this.callApi(params, req, runtime), new DeleteGroupTopologyTagLogResponse({}));
  }

  async deleteGroupTopologyTagLog(request: DeleteGroupTopologyTagLogRequest): Promise<DeleteGroupTopologyTagLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupTopologyTagLogWithOptions(request, runtime);
  }

  async deleteRealSceneInfoWithOptions(request: DeleteRealSceneInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRealSceneInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRealSceneInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRealSceneInfoResponse>(await this.callApi(params, req, runtime), new DeleteRealSceneInfoResponse({}));
  }

  async deleteRealSceneInfo(request: DeleteRealSceneInfoRequest): Promise<DeleteRealSceneInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRealSceneInfoWithOptions(request, runtime);
  }

  async deleteReportEmailConfigWithOptions(request: DeleteReportEmailConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteReportEmailConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.mailConfigId)) {
      body["MailConfigId"] = request.mailConfigId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteReportEmailConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteReportEmailConfigResponse>(await this.callApi(params, req, runtime), new DeleteReportEmailConfigResponse({}));
  }

  async deleteReportEmailConfig(request: DeleteReportEmailConfigRequest): Promise<DeleteReportEmailConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteReportEmailConfigWithOptions(request, runtime);
  }

  async deleteResourceWhitelistWithOptions(request: DeleteResourceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inspectionWhitelistId)) {
      body["InspectionWhitelistId"] = request.inspectionWhitelistId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceWhitelist",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceWhitelistResponse>(await this.callApi(params, req, runtime), new DeleteResourceWhitelistResponse({}));
  }

  async deleteResourceWhitelist(request: DeleteResourceWhitelistRequest): Promise<DeleteResourceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceWhitelistWithOptions(request, runtime);
  }

  async deleteScenarioWithOptions(request: DeleteScenarioRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScenarioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScenario",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScenarioResponse>(await this.callApi(params, req, runtime), new DeleteScenarioResponse({}));
  }

  async deleteScenario(request: DeleteScenarioRequest): Promise<DeleteScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  async deleteSceneWithOptions(request: DeleteSceneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScene",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSceneResponse>(await this.callApi(params, req, runtime), new DeleteSceneResponse({}));
  }

  async deleteScene(request: DeleteSceneRequest): Promise<DeleteSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneWithOptions(request, runtime);
  }

  async deleteSceneListWithOptions(request: DeleteSceneListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSceneList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSceneListResponse>(await this.callApi(params, req, runtime), new DeleteSceneListResponse({}));
  }

  async deleteSceneList(request: DeleteSceneListRequest): Promise<DeleteSceneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneListWithOptions(request, runtime);
  }

  async deleteSceneModelWithOptions(request: DeleteSceneModelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSceneModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sureDelete)) {
      body["SureDelete"] = request.sureDelete;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSceneModel",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSceneModelResponse>(await this.callApi(params, req, runtime), new DeleteSceneModelResponse({}));
  }

  async deleteSceneModel(request: DeleteSceneModelRequest): Promise<DeleteSceneModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSceneModelWithOptions(request, runtime);
  }

  async deleteTagInfoWithOptions(request: DeleteTagInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTagInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagInfoResponse>(await this.callApi(params, req, runtime), new DeleteTagInfoResponse({}));
  }

  async deleteTagInfo(request: DeleteTagInfoRequest): Promise<DeleteTagInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagInfoWithOptions(request, runtime);
  }

  async describeAccountAlertEventWithOptions(request: DescribeAccountAlertEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAlertEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountAlertEvent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountAlertEventResponse>(await this.callApi(params, req, runtime), new DescribeAccountAlertEventResponse({}));
  }

  async describeAccountAlertEvent(request: DescribeAccountAlertEventRequest): Promise<DescribeAccountAlertEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAlertEventWithOptions(request, runtime);
  }

  async describeAdvisorInspectionProductsWithOptions(request: DescribeAdvisorInspectionProductsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdvisorInspectionProductsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdvisorInspectionProducts",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdvisorInspectionProductsResponse>(await this.callApi(params, req, runtime), new DescribeAdvisorInspectionProductsResponse({}));
  }

  async describeAdvisorInspectionProducts(request: DescribeAdvisorInspectionProductsRequest): Promise<DescribeAdvisorInspectionProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdvisorInspectionProductsWithOptions(request, runtime);
  }

  async describeAlertBusinessGroupWithAlertSettingIdWithOptions(request: DescribeAlertBusinessGroupWithAlertSettingIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertBusinessGroupWithAlertSettingIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertSettingId)) {
      body["AlertSettingId"] = request.alertSettingId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertBusinessGroupWithAlertSettingId",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertBusinessGroupWithAlertSettingIdResponse>(await this.callApi(params, req, runtime), new DescribeAlertBusinessGroupWithAlertSettingIdResponse({}));
  }

  async describeAlertBusinessGroupWithAlertSettingId(request: DescribeAlertBusinessGroupWithAlertSettingIdRequest): Promise<DescribeAlertBusinessGroupWithAlertSettingIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertBusinessGroupWithAlertSettingIdWithOptions(request, runtime);
  }

  async describeAlertContactWithOptions(request: DescribeAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertContactResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchBy)) {
      body["SearchBy"] = request.searchBy;
    }

    if (!Util.isUnset(request.searchLike)) {
      body["SearchLike"] = request.searchLike;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertContact",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertContactResponse>(await this.callApi(params, req, runtime), new DescribeAlertContactResponse({}));
  }

  async describeAlertContact(request: DescribeAlertContactRequest): Promise<DescribeAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertContactWithOptions(request, runtime);
  }

  async describeAlertContactGroupWithOptions(request: DescribeAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertContactGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchLike)) {
      body["SearchLike"] = request.searchLike;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertContactGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertContactGroupResponse>(await this.callApi(params, req, runtime), new DescribeAlertContactGroupResponse({}));
  }

  async describeAlertContactGroup(request: DescribeAlertContactGroupRequest): Promise<DescribeAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertContactGroupWithOptions(request, runtime);
  }

  async describeAlertContactWithAlertSettingIdWithOptions(request: DescribeAlertContactWithAlertSettingIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertContactWithAlertSettingIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertSettingId)) {
      body["AlertSettingId"] = request.alertSettingId;
    }

    if (!Util.isUnset(request.contactType)) {
      body["ContactType"] = request.contactType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertContactWithAlertSettingId",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertContactWithAlertSettingIdResponse>(await this.callApi(params, req, runtime), new DescribeAlertContactWithAlertSettingIdResponse({}));
  }

  async describeAlertContactWithAlertSettingId(request: DescribeAlertContactWithAlertSettingIdRequest): Promise<DescribeAlertContactWithAlertSettingIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertContactWithAlertSettingIdWithOptions(request, runtime);
  }

  async describeAlertContactWithGroupIdWithOptions(request: DescribeAlertContactWithGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertContactWithGroupIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertContactWithGroupId",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertContactWithGroupIdResponse>(await this.callApi(params, req, runtime), new DescribeAlertContactWithGroupIdResponse({}));
  }

  async describeAlertContactWithGroupId(request: DescribeAlertContactWithGroupIdRequest): Promise<DescribeAlertContactWithGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertContactWithGroupIdWithOptions(request, runtime);
  }

  async describeAlertDetailDataWithOptions(request: DescribeAlertDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertDetailDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertDetailData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertDetailDataResponse>(await this.callApi(params, req, runtime), new DescribeAlertDetailDataResponse({}));
  }

  async describeAlertDetailData(request: DescribeAlertDetailDataRequest): Promise<DescribeAlertDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertDetailDataWithOptions(request, runtime);
  }

  async describeAlertDetailTrendDataWithOptions(request: DescribeAlertDetailTrendDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertDetailTrendDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertDetailTrendData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertDetailTrendDataResponse>(await this.callApi(params, req, runtime), new DescribeAlertDetailTrendDataResponse({}));
  }

  async describeAlertDetailTrendData(request: DescribeAlertDetailTrendDataRequest): Promise<DescribeAlertDetailTrendDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertDetailTrendDataWithOptions(request, runtime);
  }

  async describeAlertEventWithOptions(request: DescribeAlertEventRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertEvent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertEventResponse>(await this.callApi(params, req, runtime), new DescribeAlertEventResponse({}));
  }

  async describeAlertEvent(request: DescribeAlertEventRequest): Promise<DescribeAlertEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertEventWithOptions(request, runtime);
  }

  async describeAlertFinalDataListWithOptions(request: DescribeAlertFinalDataListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertFinalDataListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertFinalDataList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertFinalDataListResponse>(await this.callApi(params, req, runtime), new DescribeAlertFinalDataListResponse({}));
  }

  async describeAlertFinalDataList(request: DescribeAlertFinalDataListRequest): Promise<DescribeAlertFinalDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertFinalDataListWithOptions(request, runtime);
  }

  async describeAlertResourceWithOptions(request: DescribeAlertResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertResource",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertResourceResponse>(await this.callApi(params, req, runtime), new DescribeAlertResourceResponse({}));
  }

  async describeAlertResource(request: DescribeAlertResourceRequest): Promise<DescribeAlertResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertResourceWithOptions(request, runtime);
  }

  async describeAlertSettingWithOptions(request: DescribeAlertSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertSettingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.customerName)) {
      body["CustomerName"] = request.customerName;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    if (!Util.isUnset(request.settingStatus)) {
      body["SettingStatus"] = request.settingStatus;
    }

    if (!Util.isUnset(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertSetting",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertSettingResponse>(await this.callApi(params, req, runtime), new DescribeAlertSettingResponse({}));
  }

  async describeAlertSetting(request: DescribeAlertSettingRequest): Promise<DescribeAlertSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSettingWithOptions(request, runtime);
  }

  async describeAlertSettingByIdWithOptions(request: DescribeAlertSettingByIdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertSettingByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertSettingId)) {
      body["AlertSettingId"] = request.alertSettingId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertSettingById",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertSettingByIdResponse>(await this.callApi(params, req, runtime), new DescribeAlertSettingByIdResponse({}));
  }

  async describeAlertSettingById(request: DescribeAlertSettingByIdRequest): Promise<DescribeAlertSettingByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertSettingByIdWithOptions(request, runtime);
  }

  async describeAllAlertContactWithOptions(request: DescribeAllAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllAlertContact",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllAlertContactResponse>(await this.callApi(params, req, runtime), new DescribeAllAlertContactResponse({}));
  }

  async describeAllAlertContact(request: DescribeAllAlertContactRequest): Promise<DescribeAllAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllAlertContactWithOptions(request, runtime);
  }

  async describeAllAlertContactGroupWithOptions(request: DescribeAllAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllAlertContactGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllAlertContactGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllAlertContactGroupResponse>(await this.callApi(params, req, runtime), new DescribeAllAlertContactGroupResponse({}));
  }

  async describeAllAlertContactGroup(request: DescribeAllAlertContactGroupRequest): Promise<DescribeAllAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllAlertContactGroupWithOptions(request, runtime);
  }

  async describeAllBusinessGroupInfoWithOptions(request: DescribeAllBusinessGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllBusinessGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllBusinessGroupInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllBusinessGroupInfoResponse>(await this.callApi(params, req, runtime), new DescribeAllBusinessGroupInfoResponse({}));
  }

  async describeAllBusinessGroupInfo(request: DescribeAllBusinessGroupInfoRequest): Promise<DescribeAllBusinessGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllBusinessGroupInfoWithOptions(request, runtime);
  }

  async describeAllSceneModelWithOptions(request: DescribeAllSceneModelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllSceneModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAllSceneModel",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAllSceneModelResponse>(await this.callApi(params, req, runtime), new DescribeAllSceneModelResponse({}));
  }

  async describeAllSceneModel(request: DescribeAllSceneModelRequest): Promise<DescribeAllSceneModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllSceneModelWithOptions(request, runtime);
  }

  async describeAnalysisDataListWithOptions(request: DescribeAnalysisDataListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnalysisDataListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricExtend)) {
      query["MetricExtend"] = request.metricExtend;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnalysisDataList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnalysisDataListResponse>(await this.callApi(params, req, runtime), new DescribeAnalysisDataListResponse({}));
  }

  async describeAnalysisDataList(request: DescribeAnalysisDataListRequest): Promise<DescribeAnalysisDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnalysisDataListWithOptions(request, runtime);
  }

  async describeBusinessAnalysisDataListWithOptions(request: DescribeBusinessAnalysisDataListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBusinessAnalysisDataListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiPath)) {
      query["ApiPath"] = request.apiPath;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBusinessAnalysisDataList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBusinessAnalysisDataListResponse>(await this.callApi(params, req, runtime), new DescribeBusinessAnalysisDataListResponse({}));
  }

  async describeBusinessAnalysisDataList(request: DescribeBusinessAnalysisDataListRequest): Promise<DescribeBusinessAnalysisDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBusinessAnalysisDataListWithOptions(request, runtime);
  }

  async describeDiagnoseWithOptions(request: DescribeDiagnoseRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnoseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnose",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnoseResponse>(await this.callApi(params, req, runtime), new DescribeDiagnoseResponse({}));
  }

  async describeDiagnose(request: DescribeDiagnoseRequest): Promise<DescribeDiagnoseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnoseWithOptions(request, runtime);
  }

  async describeDiagnoseResultWithOptions(request: DescribeDiagnoseResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnoseResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnoseResult",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnoseResultResponse>(await this.callApi(params, req, runtime), new DescribeDiagnoseResultResponse({}));
  }

  async describeDiagnoseResult(request: DescribeDiagnoseResultRequest): Promise<DescribeDiagnoseResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnoseResultWithOptions(request, runtime);
  }

  async describeEventTopologyWithOptions(request: DescribeEventTopologyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTopologyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventTopology",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventTopologyResponse>(await this.callApi(params, req, runtime), new DescribeEventTopologyResponse({}));
  }

  async describeEventTopology(request: DescribeEventTopologyRequest): Promise<DescribeEventTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTopologyWithOptions(request, runtime);
  }

  async describeEventTopologyDetailWithOptions(request: DescribeEventTopologyDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventTopologyDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventTopologyDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventTopologyDetailResponse>(await this.callApi(params, req, runtime), new DescribeEventTopologyDetailResponse({}));
  }

  async describeEventTopologyDetail(request: DescribeEventTopologyDetailRequest): Promise<DescribeEventTopologyDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventTopologyDetailWithOptions(request, runtime);
  }

  async describeFcFunctionWithOptions(request: DescribeFcFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFcFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.prefix)) {
      body["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.regionCode)) {
      body["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFcFunction",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFcFunctionResponse>(await this.callApi(params, req, runtime), new DescribeFcFunctionResponse({}));
  }

  async describeFcFunction(request: DescribeFcFunctionRequest): Promise<DescribeFcFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFcFunctionWithOptions(request, runtime);
  }

  async describeFcRegionWithOptions(request: DescribeFcRegionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFcRegionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFcRegion",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFcRegionResponse>(await this.callApi(params, req, runtime), new DescribeFcRegionResponse({}));
  }

  async describeFcRegion(request: DescribeFcRegionRequest): Promise<DescribeFcRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFcRegionWithOptions(request, runtime);
  }

  async describeFcServiceWithOptions(request: DescribeFcServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFcServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.prefix)) {
      body["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.regionCode)) {
      body["RegionCode"] = request.regionCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFcService",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFcServiceResponse>(await this.callApi(params, req, runtime), new DescribeFcServiceResponse({}));
  }

  async describeFcService(request: DescribeFcServiceRequest): Promise<DescribeFcServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFcServiceWithOptions(request, runtime);
  }

  async describeHistoryRiskWithOptions(request: DescribeHistoryRiskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHistoryRiskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.lastFindTimeEnd)) {
      body["LastFindTimeEnd"] = request.lastFindTimeEnd;
    }

    if (!Util.isUnset(request.lastFindTimeStart)) {
      body["LastFindTimeStart"] = request.lastFindTimeStart;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.severity)) {
      body["Severity"] = request.severity;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHistoryRisk",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHistoryRiskResponse>(await this.callApi(params, req, runtime), new DescribeHistoryRiskResponse({}));
  }

  async describeHistoryRisk(request: DescribeHistoryRiskRequest): Promise<DescribeHistoryRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHistoryRiskWithOptions(request, runtime);
  }

  async describeInspectionProgressWithOptions(request: DescribeInspectionProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInspectionProgressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inspectionRecordId)) {
      body["InspectionRecordId"] = request.inspectionRecordId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInspectionProgress",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInspectionProgressResponse>(await this.callApi(params, req, runtime), new DescribeInspectionProgressResponse({}));
  }

  async describeInspectionProgress(request: DescribeInspectionProgressRequest): Promise<DescribeInspectionProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInspectionProgressWithOptions(request, runtime);
  }

  async describeInspectionResourcesWithOptions(request: DescribeInspectionResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInspectionResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInspectionResources",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInspectionResourcesResponse>(await this.callApi(params, req, runtime), new DescribeInspectionResourcesResponse({}));
  }

  async describeInspectionResources(request: DescribeInspectionResourcesRequest): Promise<DescribeInspectionResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInspectionResourcesWithOptions(request, runtime);
  }

  async describeInspectionResultWithOptions(request: DescribeInspectionResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInspectionResultResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continuousDays)) {
      body["ContinuousDays"] = request.continuousDays;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.riskCode)) {
      body["RiskCode"] = request.riskCode;
    }

    if (!Util.isUnset(request.severity)) {
      body["Severity"] = request.severity;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInspectionResult",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInspectionResultResponse>(await this.callApi(params, req, runtime), new DescribeInspectionResultResponse({}));
  }

  async describeInspectionResult(request: DescribeInspectionResultRequest): Promise<DescribeInspectionResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInspectionResultWithOptions(request, runtime);
  }

  async describeInspectionSettingsWithOptions(request: DescribeInspectionSettingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInspectionSettingsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.riskDesc)) {
      body["RiskDesc"] = request.riskDesc;
    }

    if (!Util.isUnset(request.riskEnableStatus)) {
      body["RiskEnableStatus"] = request.riskEnableStatus;
    }

    if (!Util.isUnset(request.riskName)) {
      body["RiskName"] = request.riskName;
    }

    if (!Util.isUnset(request.riskType)) {
      body["RiskType"] = request.riskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInspectionSettings",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInspectionSettingsResponse>(await this.callApi(params, req, runtime), new DescribeInspectionSettingsResponse({}));
  }

  async describeInspectionSettings(request: DescribeInspectionSettingsRequest): Promise<DescribeInspectionSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInspectionSettingsWithOptions(request, runtime);
  }

  async describeInspectionThresholdWithOptions(request: DescribeInspectionThresholdRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInspectionThresholdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.riskCode)) {
      body["RiskCode"] = request.riskCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInspectionThreshold",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInspectionThresholdResponse>(await this.callApi(params, req, runtime), new DescribeInspectionThresholdResponse({}));
  }

  async describeInspectionThreshold(request: DescribeInspectionThresholdRequest): Promise<DescribeInspectionThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInspectionThresholdWithOptions(request, runtime);
  }

  async describeInspectionWhitelistsWithOptions(request: DescribeInspectionWhitelistsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInspectionWhitelistsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInspectionWhitelists",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInspectionWhitelistsResponse>(await this.callApi(params, req, runtime), new DescribeInspectionWhitelistsResponse({}));
  }

  async describeInspectionWhitelists(request: DescribeInspectionWhitelistsRequest): Promise<DescribeInspectionWhitelistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInspectionWhitelistsWithOptions(request, runtime);
  }

  async describeInvocationResultsWithOptions(request: DescribeInvocationResultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvocationResults",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvocationResultsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationResultsResponse({}));
  }

  async describeInvocationResults(request: DescribeInvocationResultsRequest): Promise<DescribeInvocationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationResultsWithOptions(request, runtime);
  }

  async describeLastInspectionSummaryWithOptions(request: DescribeLastInspectionSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLastInspectionSummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLastInspectionSummary",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLastInspectionSummaryResponse>(await this.callApi(params, req, runtime), new DescribeLastInspectionSummaryResponse({}));
  }

  async describeLastInspectionSummary(request: DescribeLastInspectionSummaryRequest): Promise<DescribeLastInspectionSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLastInspectionSummaryWithOptions(request, runtime);
  }

  async describeModelRelationScenesWithOptions(request: DescribeModelRelationScenesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModelRelationScenesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeModelRelationScenes",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeModelRelationScenesResponse>(await this.callApi(params, req, runtime), new DescribeModelRelationScenesResponse({}));
  }

  async describeModelRelationScenes(request: DescribeModelRelationScenesRequest): Promise<DescribeModelRelationScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModelRelationScenesWithOptions(request, runtime);
  }

  async describeProductRiskPieWithOptions(request: DescribeProductRiskPieRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductRiskPieResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductRiskPie",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductRiskPieResponse>(await this.callApi(params, req, runtime), new DescribeProductRiskPieResponse({}));
  }

  async describeProductRiskPie(request: DescribeProductRiskPieRequest): Promise<DescribeProductRiskPieResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductRiskPieWithOptions(request, runtime);
  }

  async describeReportDataWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeReportDataResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeReportData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReportDataResponse>(await this.callApi(params, req, runtime), new DescribeReportDataResponse({}));
  }

  async describeReportData(): Promise<DescribeReportDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReportDataWithOptions(runtime);
  }

  async describeReportEmailConfigsWithOptions(request: DescribeReportEmailConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReportEmailConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReportEmailConfigs",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReportEmailConfigsResponse>(await this.callApi(params, req, runtime), new DescribeReportEmailConfigsResponse({}));
  }

  async describeReportEmailConfigs(request: DescribeReportEmailConfigsRequest): Promise<DescribeReportEmailConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReportEmailConfigsWithOptions(request, runtime);
  }

  async describeReportSubscriptionsWithOptions(request: DescribeReportSubscriptionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReportSubscriptionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReportSubscriptions",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReportSubscriptionsResponse>(await this.callApi(params, req, runtime), new DescribeReportSubscriptionsResponse({}));
  }

  async describeReportSubscriptions(request: DescribeReportSubscriptionsRequest): Promise<DescribeReportSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReportSubscriptionsWithOptions(request, runtime);
  }

  async describeResourceMetricWithOptions(request: DescribeResourceMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeResourceMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.firstLoad)) {
      query["FirstLoad"] = request.firstLoad;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceMetric",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceMetricResponse>(await this.callApi(params, req, runtime), new DescribeResourceMetricResponse({}));
  }

  async describeResourceMetric(request: DescribeResourceMetricRequest): Promise<DescribeResourceMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeResourceMetricWithOptions(request, runtime);
  }

  async describeRiskWithOptions(request: DescribeRiskRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRisk",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskResponse>(await this.callApi(params, req, runtime), new DescribeRiskResponse({}));
  }

  async describeRisk(request: DescribeRiskRequest): Promise<DescribeRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskWithOptions(request, runtime);
  }

  async describeRiskConfigWithOptions(request: DescribeRiskConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskConfigResponse>(await this.callApi(params, req, runtime), new DescribeRiskConfigResponse({}));
  }

  async describeRiskConfig(request: DescribeRiskConfigRequest): Promise<DescribeRiskConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskConfigWithOptions(request, runtime);
  }

  async describeRiskEventDetailsWithOptions(request: DescribeRiskEventDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskEventDetails",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskEventDetailsResponse>(await this.callApi(params, req, runtime), new DescribeRiskEventDetailsResponse({}));
  }

  async describeRiskEventDetails(request: DescribeRiskEventDetailsRequest): Promise<DescribeRiskEventDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventDetailsWithOptions(request, runtime);
  }

  async describeRiskEventListWithOptions(request: DescribeRiskEventListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskEventList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskEventListResponse>(await this.callApi(params, req, runtime), new DescribeRiskEventListResponse({}));
  }

  async describeRiskEventList(request: DescribeRiskEventListRequest): Promise<DescribeRiskEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventListWithOptions(request, runtime);
  }

  async describeRiskEventTopologyWithOptions(request: DescribeRiskEventTopologyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskEventTopologyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskEventTopology",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskEventTopologyResponse>(await this.callApi(params, req, runtime), new DescribeRiskEventTopologyResponse({}));
  }

  async describeRiskEventTopology(request: DescribeRiskEventTopologyRequest): Promise<DescribeRiskEventTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskEventTopologyWithOptions(request, runtime);
  }

  async describeRiskResultSeveritySummaryWithOptions(request: DescribeRiskResultSeveritySummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskResultSeveritySummaryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continuousDays)) {
      body["ContinuousDays"] = request.continuousDays;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskResultSeveritySummary",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskResultSeveritySummaryResponse>(await this.callApi(params, req, runtime), new DescribeRiskResultSeveritySummaryResponse({}));
  }

  async describeRiskResultSeveritySummary(request: DescribeRiskResultSeveritySummaryRequest): Promise<DescribeRiskResultSeveritySummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskResultSeveritySummaryWithOptions(request, runtime);
  }

  async describeRiskResultStatisticalWithOptions(request: DescribeRiskResultStatisticalRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRiskResultStatisticalResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.continuousDays)) {
      body["ContinuousDays"] = request.continuousDays;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRiskResultStatistical",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRiskResultStatisticalResponse>(await this.callApi(params, req, runtime), new DescribeRiskResultStatisticalResponse({}));
  }

  async describeRiskResultStatistical(request: DescribeRiskResultStatisticalRequest): Promise<DescribeRiskResultStatisticalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRiskResultStatisticalWithOptions(request, runtime);
  }

  async describeSceneDetailWithOptions(request: DescribeSceneDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneDetailResponse>(await this.callApi(params, req, runtime), new DescribeSceneDetailResponse({}));
  }

  async describeSceneDetail(request: DescribeSceneDetailRequest): Promise<DescribeSceneDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneDetailWithOptions(request, runtime);
  }

  async describeSceneModelByTypeWithOptions(request: DescribeSceneModelByTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneModelByTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneModelByType",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneModelByTypeResponse>(await this.callApi(params, req, runtime), new DescribeSceneModelByTypeResponse({}));
  }

  async describeSceneModelByType(request: DescribeSceneModelByTypeRequest): Promise<DescribeSceneModelByTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneModelByTypeWithOptions(request, runtime);
  }

  async describeSceneModelDetailWithOptions(request: DescribeSceneModelDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneModelDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneModelDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneModelDetailResponse>(await this.callApi(params, req, runtime), new DescribeSceneModelDetailResponse({}));
  }

  async describeSceneModelDetail(request: DescribeSceneModelDetailRequest): Promise<DescribeSceneModelDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneModelDetailWithOptions(request, runtime);
  }

  async describeSceneModelVersionHistoryWithOptions(request: DescribeSceneModelVersionHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneModelVersionHistoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneModelVersionHistory",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneModelVersionHistoryResponse>(await this.callApi(params, req, runtime), new DescribeSceneModelVersionHistoryResponse({}));
  }

  async describeSceneModelVersionHistory(request: DescribeSceneModelVersionHistoryRequest): Promise<DescribeSceneModelVersionHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneModelVersionHistoryWithOptions(request, runtime);
  }

  async describeSceneModelsWithOptions(request: DescribeSceneModelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneModelsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyStatus)) {
      body["ApplyStatus"] = request.applyStatus;
    }

    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneModels",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneModelsResponse>(await this.callApi(params, req, runtime), new DescribeSceneModelsResponse({}));
  }

  async describeSceneModels(request: DescribeSceneModelsRequest): Promise<DescribeSceneModelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneModelsWithOptions(request, runtime);
  }

  async describeSceneSystemModelWithOptions(request: DescribeSceneSystemModelRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSceneSystemModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelStatus)) {
      body["ModelStatus"] = request.modelStatus;
    }

    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.typeId)) {
      body["TypeId"] = request.typeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSceneSystemModel",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSceneSystemModelResponse>(await this.callApi(params, req, runtime), new DescribeSceneSystemModelResponse({}));
  }

  async describeSceneSystemModel(request: DescribeSceneSystemModelRequest): Promise<DescribeSceneSystemModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSceneSystemModelWithOptions(request, runtime);
  }

  async describeScenesWithOptions(request: DescribeScenesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScenesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.sceneStatus)) {
      body["SceneStatus"] = request.sceneStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScenes",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScenesResponse>(await this.callApi(params, req, runtime), new DescribeScenesResponse({}));
  }

  async describeScenes(request: DescribeScenesRequest): Promise<DescribeScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScenesWithOptions(request, runtime);
  }

  async describeStatisticalDataByProductWithOptions(request: DescribeStatisticalDataByProductRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticalDataByProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStatisticalDataByProduct",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStatisticalDataByProductResponse>(await this.callApi(params, req, runtime), new DescribeStatisticalDataByProductResponse({}));
  }

  async describeStatisticalDataByProduct(request: DescribeStatisticalDataByProductRequest): Promise<DescribeStatisticalDataByProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticalDataByProductWithOptions(request, runtime);
  }

  async describeStatisticalDataByRiskCodeWithOptions(request: DescribeStatisticalDataByRiskCodeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStatisticalDataByRiskCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeStatisticalDataByRiskCode",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStatisticalDataByRiskCodeResponse>(await this.callApi(params, req, runtime), new DescribeStatisticalDataByRiskCodeResponse({}));
  }

  async describeStatisticalDataByRiskCode(request: DescribeStatisticalDataByRiskCodeRequest): Promise<DescribeStatisticalDataByRiskCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStatisticalDataByRiskCodeWithOptions(request, runtime);
  }

  async describeWhitelistResourcesWithOptions(request: DescribeWhitelistResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWhitelistResources",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWhitelistResourcesResponse>(await this.callApi(params, req, runtime), new DescribeWhitelistResourcesResponse({}));
  }

  async describeWhitelistResources(request: DescribeWhitelistResourcesRequest): Promise<DescribeWhitelistResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelistResourcesWithOptions(request, runtime);
  }

  async endScriptListWithOptions(request: EndScriptListRequest, runtime: $Util.RuntimeOptions): Promise<EndScriptListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EndScriptList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EndScriptListResponse>(await this.callApi(params, req, runtime), new EndScriptListResponse({}));
  }

  async endScriptList(request: EndScriptListRequest): Promise<EndScriptListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.endScriptListWithOptions(request, runtime);
  }

  async feedbackAlertAlgorithmWithOptions(request: FeedbackAlertAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<FeedbackAlertAlgorithmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.algorithmAccurateDescribe)) {
      query["AlgorithmAccurateDescribe"] = request.algorithmAccurateDescribe;
    }

    if (!Util.isUnset(request.algorithmAccurateState)) {
      query["AlgorithmAccurateState"] = request.algorithmAccurateState;
    }

    if (!Util.isUnset(request.feedbackType)) {
      query["FeedbackType"] = request.feedbackType;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FeedbackAlertAlgorithm",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FeedbackAlertAlgorithmResponse>(await this.callApi(params, req, runtime), new FeedbackAlertAlgorithmResponse({}));
  }

  async feedbackAlertAlgorithm(request: FeedbackAlertAlgorithmRequest): Promise<FeedbackAlertAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.feedbackAlertAlgorithmWithOptions(request, runtime);
  }

  async getAiopsEventListWithOptions(request: GetAiopsEventListRequest, runtime: $Util.RuntimeOptions): Promise<GetAiopsEventListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.businessGroupName)) {
      query["BusinessGroupName"] = request.businessGroupName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.eventUniqueId)) {
      query["EventUniqueId"] = request.eventUniqueId;
    }

    if (!Util.isUnset(request.feedbackStatus)) {
      query["FeedbackStatus"] = request.feedbackStatus;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.predictionState)) {
      query["PredictionState"] = request.predictionState;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiopsEventList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiopsEventListResponse>(await this.callApi(params, req, runtime), new GetAiopsEventListResponse({}));
  }

  async getAiopsEventList(request: GetAiopsEventListRequest): Promise<GetAiopsEventListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiopsEventListWithOptions(request, runtime);
  }

  async getAiopsEventNewListWithOptions(request: GetAiopsEventNewListRequest, runtime: $Util.RuntimeOptions): Promise<GetAiopsEventNewListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAiopsEventNewList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAiopsEventNewListResponse>(await this.callApi(params, req, runtime), new GetAiopsEventNewListResponse({}));
  }

  async getAiopsEventNewList(request: GetAiopsEventNewListRequest): Promise<GetAiopsEventNewListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAiopsEventNewListWithOptions(request, runtime);
  }

  async getAlertDetailTrendDataWithOptions(request: GetAlertDetailTrendDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAlertDetailTrendDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.abnormalId)) {
      query["AbnormalId"] = request.abnormalId;
    }

    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlertDetailTrendData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlertDetailTrendDataResponse>(await this.callApi(params, req, runtime), new GetAlertDetailTrendDataResponse({}));
  }

  async getAlertDetailTrendData(request: GetAlertDetailTrendDataRequest): Promise<GetAlertDetailTrendDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlertDetailTrendDataWithOptions(request, runtime);
  }

  async getAlertListWithOptions(request: GetAlertListRequest, runtime: $Util.RuntimeOptions): Promise<GetAlertListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlertList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlertListResponse>(await this.callApi(params, req, runtime), new GetAlertListResponse({}));
  }

  async getAlertList(request: GetAlertListRequest): Promise<GetAlertListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlertListWithOptions(request, runtime);
  }

  async getAlertTrentWithOptions(request: GetAlertTrentRequest, runtime: $Util.RuntimeOptions): Promise<GetAlertTrentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlertTrent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlertTrentResponse>(await this.callApi(params, req, runtime), new GetAlertTrentResponse({}));
  }

  async getAlertTrent(request: GetAlertTrentRequest): Promise<GetAlertTrentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlertTrentWithOptions(request, runtime);
  }

  async getAlgorithmWithOptions(request: GetAlgorithmRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.expandInformation)) {
      query["ExpandInformation"] = request.expandInformation;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithm",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmResponse>(await this.callApi(params, req, runtime), new GetAlgorithmResponse({}));
  }

  async getAlgorithm(request: GetAlgorithmRequest): Promise<GetAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmWithOptions(request, runtime);
  }

  async getAlgorithmConfigWithOptions(request: GetAlgorithmConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithmTypeCode)) {
      query["AlgorithmTypeCode"] = request.algorithmTypeCode;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmConfigResponse>(await this.callApi(params, req, runtime), new GetAlgorithmConfigResponse({}));
  }

  async getAlgorithmConfig(request: GetAlgorithmConfigRequest): Promise<GetAlgorithmConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmConfigWithOptions(request, runtime);
  }

  async getAlgorithmDataWithOptions(request: GetAlgorithmDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmDataResponse>(await this.callApi(params, req, runtime), new GetAlgorithmDataResponse({}));
  }

  async getAlgorithmData(request: GetAlgorithmDataRequest): Promise<GetAlgorithmDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmDataWithOptions(request, runtime);
  }

  async getAlgorithmDetailsWithOptions(request: GetAlgorithmDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmDetails",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmDetailsResponse>(await this.callApi(params, req, runtime), new GetAlgorithmDetailsResponse({}));
  }

  async getAlgorithmDetails(request: GetAlgorithmDetailsRequest): Promise<GetAlgorithmDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmDetailsWithOptions(request, runtime);
  }

  async getAlgorithmForecastDataWithOptions(request: GetAlgorithmForecastDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmForecastDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmForecastData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmForecastDataResponse>(await this.callApi(params, req, runtime), new GetAlgorithmForecastDataResponse({}));
  }

  async getAlgorithmForecastData(request: GetAlgorithmForecastDataRequest): Promise<GetAlgorithmForecastDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmForecastDataWithOptions(request, runtime);
  }

  async getAlgorithmForecastDetailsWithOptions(request: GetAlgorithmForecastDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmForecastDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmForecastDetails",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmForecastDetailsResponse>(await this.callApi(params, req, runtime), new GetAlgorithmForecastDetailsResponse({}));
  }

  async getAlgorithmForecastDetails(request: GetAlgorithmForecastDetailsRequest): Promise<GetAlgorithmForecastDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmForecastDetailsWithOptions(request, runtime);
  }

  async getAlgorithmListWithOptions(request: GetAlgorithmListRequest, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmListResponse>(await this.callApi(params, req, runtime), new GetAlgorithmListResponse({}));
  }

  async getAlgorithmList(request: GetAlgorithmListRequest): Promise<GetAlgorithmListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAlgorithmListWithOptions(request, runtime);
  }

  async getAllAlgorithmConfigWithOptions(request: GetAllAlgorithmConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAllAlgorithmConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAllAlgorithmConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAllAlgorithmConfigResponse>(await this.callApi(params, req, runtime), new GetAllAlgorithmConfigResponse({}));
  }

  async getAllAlgorithmConfig(request: GetAllAlgorithmConfigRequest): Promise<GetAllAlgorithmConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllAlgorithmConfigWithOptions(request, runtime);
  }

  async getAllTagResourceNumListWithOptions(request: GetAllTagResourceNumListRequest, runtime: $Util.RuntimeOptions): Promise<GetAllTagResourceNumListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAllTagResourceNumList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAllTagResourceNumListResponse>(await this.callApi(params, req, runtime), new GetAllTagResourceNumListResponse({}));
  }

  async getAllTagResourceNumList(request: GetAllTagResourceNumListRequest): Promise<GetAllTagResourceNumListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllTagResourceNumListWithOptions(request, runtime);
  }

  async getAnalysisProcessWithOptions(request: GetAnalysisProcessRequest, runtime: $Util.RuntimeOptions): Promise<GetAnalysisProcessResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAnalysisProcess",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAnalysisProcessResponse>(await this.callApi(params, req, runtime), new GetAnalysisProcessResponse({}));
  }

  async getAnalysisProcess(request: GetAnalysisProcessRequest): Promise<GetAnalysisProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAnalysisProcessWithOptions(request, runtime);
  }

  async getAuthorizationWithOptions(request: GetAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthorization",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthorizationResponse>(await this.callApi(params, req, runtime), new GetAuthorizationResponse({}));
  }

  async getAuthorization(request: GetAuthorizationRequest): Promise<GetAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthorizationWithOptions(request, runtime);
  }

  async getAvgRepairTimeWithOptions(request: GetAvgRepairTimeRequest, runtime: $Util.RuntimeOptions): Promise<GetAvgRepairTimeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAvgRepairTime",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAvgRepairTimeResponse>(await this.callApi(params, req, runtime), new GetAvgRepairTimeResponse({}));
  }

  async getAvgRepairTime(request: GetAvgRepairTimeRequest): Promise<GetAvgRepairTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAvgRepairTimeWithOptions(request, runtime);
  }

  async getBackScriptListWithOptions(request: GetBackScriptListRequest, runtime: $Util.RuntimeOptions): Promise<GetBackScriptListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBackScriptList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBackScriptListResponse>(await this.callApi(params, req, runtime), new GetBackScriptListResponse({}));
  }

  async getBackScriptList(request: GetBackScriptListRequest): Promise<GetBackScriptListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBackScriptListWithOptions(request, runtime);
  }

  async getBusinessGroupWithOptions(request: GetBusinessGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessGroupResponse>(await this.callApi(params, req, runtime), new GetBusinessGroupResponse({}));
  }

  async getBusinessGroup(request: GetBusinessGroupRequest): Promise<GetBusinessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessGroupWithOptions(request, runtime);
  }

  async getBusinessGroupAllWithOptions(request: GetBusinessGroupAllRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessGroupAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupName)) {
      query["BusinessGroupName"] = request.businessGroupName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
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
      action: "GetBusinessGroupAll",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessGroupAllResponse>(await this.callApi(params, req, runtime), new GetBusinessGroupAllResponse({}));
  }

  async getBusinessGroupAll(request: GetBusinessGroupAllRequest): Promise<GetBusinessGroupAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessGroupAllWithOptions(request, runtime);
  }

  async getBusinessGroupIndexWithOptions(request: GetBusinessGroupIndexRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessGroupIndexResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessGroupIndex",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessGroupIndexResponse>(await this.callApi(params, req, runtime), new GetBusinessGroupIndexResponse({}));
  }

  async getBusinessGroupIndex(request: GetBusinessGroupIndexRequest): Promise<GetBusinessGroupIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessGroupIndexWithOptions(request, runtime);
  }

  async getBusinessGroupInfoWithOptions(request: GetBusinessGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessGroupInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessGroupInfoResponse>(await this.callApi(params, req, runtime), new GetBusinessGroupInfoResponse({}));
  }

  async getBusinessGroupInfo(request: GetBusinessGroupInfoRequest): Promise<GetBusinessGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessGroupInfoWithOptions(request, runtime);
  }

  async getBusinessGroupOverviewListWithOptions(request: GetBusinessGroupOverviewListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessGroupOverviewListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessGroupOverviewList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessGroupOverviewListResponse>(await this.callApi(params, req, runtime), new GetBusinessGroupOverviewListResponse({}));
  }

  async getBusinessGroupOverviewList(request: GetBusinessGroupOverviewListRequest): Promise<GetBusinessGroupOverviewListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessGroupOverviewListWithOptions(request, runtime);
  }

  async getBusinessLogAlertDetailWithOptions(request: GetBusinessLogAlertDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessLogAlertDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessLogAlertDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessLogAlertDetailResponse>(await this.callApi(params, req, runtime), new GetBusinessLogAlertDetailResponse({}));
  }

  async getBusinessLogAlertDetail(request: GetBusinessLogAlertDetailRequest): Promise<GetBusinessLogAlertDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessLogAlertDetailWithOptions(request, runtime);
  }

  async getBusinessLogAlertListWithOptions(request: GetBusinessLogAlertListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessLogAlertListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessLogAlertList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessLogAlertListResponse>(await this.callApi(params, req, runtime), new GetBusinessLogAlertListResponse({}));
  }

  async getBusinessLogAlertList(request: GetBusinessLogAlertListRequest): Promise<GetBusinessLogAlertListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessLogAlertListWithOptions(request, runtime);
  }

  async getBusinessLogAlertTopNWithOptions(request: GetBusinessLogAlertTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessLogAlertTopNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.topNum)) {
      query["TopNum"] = request.topNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessLogAlertTopN",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessLogAlertTopNResponse>(await this.callApi(params, req, runtime), new GetBusinessLogAlertTopNResponse({}));
  }

  async getBusinessLogAlertTopN(request: GetBusinessLogAlertTopNRequest): Promise<GetBusinessLogAlertTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessLogAlertTopNWithOptions(request, runtime);
  }

  async getBusinessMetricAlertDetailListWithOptions(request: GetBusinessMetricAlertDetailListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricAlertDetailListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricAlertDetailList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricAlertDetailListResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricAlertDetailListResponse({}));
  }

  async getBusinessMetricAlertDetailList(request: GetBusinessMetricAlertDetailListRequest): Promise<GetBusinessMetricAlertDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricAlertDetailListWithOptions(request, runtime);
  }

  async getBusinessMetricAlertListWithOptions(request: GetBusinessMetricAlertListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricAlertListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricAlertList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricAlertListResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricAlertListResponse({}));
  }

  async getBusinessMetricAlertList(request: GetBusinessMetricAlertListRequest): Promise<GetBusinessMetricAlertListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricAlertListWithOptions(request, runtime);
  }

  async getBusinessMetricAlertTopNWithOptions(request: GetBusinessMetricAlertTopNRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricAlertTopNResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.topNum)) {
      query["TopNum"] = request.topNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricAlertTopN",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricAlertTopNResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricAlertTopNResponse({}));
  }

  async getBusinessMetricAlertTopN(request: GetBusinessMetricAlertTopNRequest): Promise<GetBusinessMetricAlertTopNResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricAlertTopNWithOptions(request, runtime);
  }

  async getBusinessMetricAllListWithOptions(request: GetBusinessMetricAllListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricAllListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricAllList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricAllListResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricAllListResponse({}));
  }

  async getBusinessMetricAllList(request: GetBusinessMetricAllListRequest): Promise<GetBusinessMetricAllListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricAllListWithOptions(request, runtime);
  }

  async getBusinessMetricForecastListWithOptions(request: GetBusinessMetricForecastListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricForecastListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricForecastList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricForecastListResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricForecastListResponse({}));
  }

  async getBusinessMetricForecastList(request: GetBusinessMetricForecastListRequest): Promise<GetBusinessMetricForecastListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricForecastListWithOptions(request, runtime);
  }

  async getBusinessMetricResourceByMetricIdWithOptions(request: GetBusinessMetricResourceByMetricIdRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricResourceByMetricIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricResourceByMetricId",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricResourceByMetricIdResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricResourceByMetricIdResponse({}));
  }

  async getBusinessMetricResourceByMetricId(request: GetBusinessMetricResourceByMetricIdRequest): Promise<GetBusinessMetricResourceByMetricIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricResourceByMetricIdWithOptions(request, runtime);
  }

  async getBusinessMetricSceneListWithOptions(request: GetBusinessMetricSceneListRequest, runtime: $Util.RuntimeOptions): Promise<GetBusinessMetricSceneListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBusinessMetricSceneList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBusinessMetricSceneListResponse>(await this.callApi(params, req, runtime), new GetBusinessMetricSceneListResponse({}));
  }

  async getBusinessMetricSceneList(request: GetBusinessMetricSceneListRequest): Promise<GetBusinessMetricSceneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBusinessMetricSceneListWithOptions(request, runtime);
  }

  async getCidInfoWithOptions(request: GetCidInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetCidInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCidInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCidInfoResponse>(await this.callApi(params, req, runtime), new GetCidInfoResponse({}));
  }

  async getCidInfo(request: GetCidInfoRequest): Promise<GetCidInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCidInfoWithOptions(request, runtime);
  }

  async getCloudAllResourceListWithOptions(request: GetCloudAllResourceListRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudAllResourceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCloudAllResourceList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudAllResourceListResponse>(await this.callApi(params, req, runtime), new GetCloudAllResourceListResponse({}));
  }

  async getCloudAllResourceList(request: GetCloudAllResourceListRequest): Promise<GetCloudAllResourceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudAllResourceListWithOptions(request, runtime);
  }

  async getCloudResourceWithOptions(request: GetCloudResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cloudTypeName)) {
      query["CloudTypeName"] = request.cloudTypeName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
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
      action: "GetCloudResource",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudResourceResponse>(await this.callApi(params, req, runtime), new GetCloudResourceResponse({}));
  }

  async getCloudResource(request: GetCloudResourceRequest): Promise<GetCloudResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudResourceWithOptions(request, runtime);
  }

  async getCloudResourceListWithOptions(request: GetCloudResourceListRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudResourceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.cloudRegionId)) {
      query["CloudRegionId"] = request.cloudRegionId;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.isOptional)) {
      query["IsOptional"] = request.isOptional;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privateIp)) {
      query["PrivateIp"] = request.privateIp;
    }

    if (!Util.isUnset(request.releaseStatus)) {
      query["ReleaseStatus"] = request.releaseStatus;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCloudResourceList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudResourceListResponse>(await this.callApi(params, req, runtime), new GetCloudResourceListResponse({}));
  }

  async getCloudResourceList(request: GetCloudResourceListRequest): Promise<GetCloudResourceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudResourceListWithOptions(request, runtime);
  }

  async getConnectInstancesWithOptions(request: GetConnectInstancesRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConnectInstances",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectInstancesResponse>(await this.callApi(params, req, runtime), new GetConnectInstancesResponse({}));
  }

  async getConnectInstances(request: GetConnectInstancesRequest): Promise<GetConnectInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectInstancesWithOptions(request, runtime);
  }

  async getDataSourceDetailWithOptions(request: GetDataSourceDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceDetailResponse>(await this.callApi(params, req, runtime), new GetDataSourceDetailResponse({}));
  }

  async getDataSourceDetail(request: GetDataSourceDetailRequest): Promise<GetDataSourceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceDetailWithOptions(request, runtime);
  }

  async getDataSourceListWithOptions(request: GetDataSourceListRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceListResponse>(await this.callApi(params, req, runtime), new GetDataSourceListResponse({}));
  }

  async getDataSourceList(request: GetDataSourceListRequest): Promise<GetDataSourceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceListWithOptions(request, runtime);
  }

  async getDataSourceTargetParamListWithOptions(request: GetDataSourceTargetParamListRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceTargetParamListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceTargetParamList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceTargetParamListResponse>(await this.callApi(params, req, runtime), new GetDataSourceTargetParamListResponse({}));
  }

  async getDataSourceTargetParamList(request: GetDataSourceTargetParamListRequest): Promise<GetDataSourceTargetParamListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceTargetParamListWithOptions(request, runtime);
  }

  async getDataVolumeWithOptions(request: GetDataVolumeRequest, runtime: $Util.RuntimeOptions): Promise<GetDataVolumeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataVolume",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataVolumeResponse>(await this.callApi(params, req, runtime), new GetDataVolumeResponse({}));
  }

  async getDataVolume(request: GetDataVolumeRequest): Promise<GetDataVolumeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataVolumeWithOptions(request, runtime);
  }

  async getDiagInfoWithOptions(request: GetDiagInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetDiagInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.diagnosticId)) {
      query["DiagnosticId"] = request.diagnosticId;
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

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiagInfoResponse>(await this.callApi(params, req, runtime), new GetDiagInfoResponse({}));
  }

  async getDiagInfo(request: GetDiagInfoRequest): Promise<GetDiagInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiagInfoWithOptions(request, runtime);
  }

  async getDomainConfigWithOptions(request: GetDomainConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomainConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDomainConfigResponse>(await this.callApi(params, req, runtime), new GetDomainConfigResponse({}));
  }

  async getDomainConfig(request: GetDomainConfigRequest): Promise<GetDomainConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainConfigWithOptions(request, runtime);
  }

  async getEventAbNormalDetailWithOptions(request: GetEventAbNormalDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetEventAbNormalDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventAbNormalDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventAbNormalDetailResponse>(await this.callApi(params, req, runtime), new GetEventAbNormalDetailResponse({}));
  }

  async getEventAbNormalDetail(request: GetEventAbNormalDetailRequest): Promise<GetEventAbNormalDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventAbNormalDetailWithOptions(request, runtime);
  }

  async getEventAbNormalDetailTrendDataWithOptions(request: GetEventAbNormalDetailTrendDataRequest, runtime: $Util.RuntimeOptions): Promise<GetEventAbNormalDetailTrendDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventAbNormalDetailTrendData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventAbNormalDetailTrendDataResponse>(await this.callApi(params, req, runtime), new GetEventAbNormalDetailTrendDataResponse({}));
  }

  async getEventAbNormalDetailTrendData(request: GetEventAbNormalDetailTrendDataRequest): Promise<GetEventAbNormalDetailTrendDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventAbNormalDetailTrendDataWithOptions(request, runtime);
  }

  async getEventAbNormalListWithOptions(request: GetEventAbNormalListRequest, runtime: $Util.RuntimeOptions): Promise<GetEventAbNormalListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventAbNormalList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventAbNormalListResponse>(await this.callApi(params, req, runtime), new GetEventAbNormalListResponse({}));
  }

  async getEventAbNormalList(request: GetEventAbNormalListRequest): Promise<GetEventAbNormalListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventAbNormalListWithOptions(request, runtime);
  }

  async getEventBusinessMetricListWithOptions(request: GetEventBusinessMetricListRequest, runtime: $Util.RuntimeOptions): Promise<GetEventBusinessMetricListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventBusinessMetricList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventBusinessMetricListResponse>(await this.callApi(params, req, runtime), new GetEventBusinessMetricListResponse({}));
  }

  async getEventBusinessMetricList(request: GetEventBusinessMetricListRequest): Promise<GetEventBusinessMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventBusinessMetricListWithOptions(request, runtime);
  }

  async getEventDetailWithOptions(request: GetEventDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetEventDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventDetailResponse>(await this.callApi(params, req, runtime), new GetEventDetailResponse({}));
  }

  async getEventDetail(request: GetEventDetailRequest): Promise<GetEventDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventDetailWithOptions(request, runtime);
  }

  async getEventRootCauseWithOptions(request: GetEventRootCauseRequest, runtime: $Util.RuntimeOptions): Promise<GetEventRootCauseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventRootCause",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventRootCauseResponse>(await this.callApi(params, req, runtime), new GetEventRootCauseResponse({}));
  }

  async getEventRootCause(request: GetEventRootCauseRequest): Promise<GetEventRootCauseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventRootCauseWithOptions(request, runtime);
  }

  async getEventSequentialTrentWithOptions(request: GetEventSequentialTrentRequest, runtime: $Util.RuntimeOptions): Promise<GetEventSequentialTrentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventSequentialTrent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventSequentialTrentResponse>(await this.callApi(params, req, runtime), new GetEventSequentialTrentResponse({}));
  }

  async getEventSequentialTrent(request: GetEventSequentialTrentRequest): Promise<GetEventSequentialTrentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventSequentialTrentWithOptions(request, runtime);
  }

  async getEventStatisticsWithOptions(request: GetEventStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetEventStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventStatistics",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventStatisticsResponse>(await this.callApi(params, req, runtime), new GetEventStatisticsResponse({}));
  }

  async getEventStatistics(request: GetEventStatisticsRequest): Promise<GetEventStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventStatisticsWithOptions(request, runtime);
  }

  async getEventTrentWithOptions(request: GetEventTrentRequest, runtime: $Util.RuntimeOptions): Promise<GetEventTrentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.granularityType)) {
      query["GranularityType"] = request.granularityType;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeType)) {
      query["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventTrent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventTrentResponse>(await this.callApi(params, req, runtime), new GetEventTrentResponse({}));
  }

  async getEventTrent(request: GetEventTrentRequest): Promise<GetEventTrentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventTrentWithOptions(request, runtime);
  }

  async getEventTypeWithOptions(request: GetEventTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetEventTypeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventType",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventTypeResponse>(await this.callApi(params, req, runtime), new GetEventTypeResponse({}));
  }

  async getEventType(request: GetEventTypeRequest): Promise<GetEventTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventTypeWithOptions(request, runtime);
  }

  async getExceptionsWithOptions(request: GetExceptionsRequest, runtime: $Util.RuntimeOptions): Promise<GetExceptionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExceptions",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExceptionsResponse>(await this.callApi(params, req, runtime), new GetExceptionsResponse({}));
  }

  async getExceptions(request: GetExceptionsRequest): Promise<GetExceptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExceptionsWithOptions(request, runtime);
  }

  async getExtendWithOptions(request: GetExtendRequest, runtime: $Util.RuntimeOptions): Promise<GetExtendResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExtend",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "none",
    });
    return $tea.cast<GetExtendResponse>(await this.callApi(params, req, runtime), new GetExtendResponse({}));
  }

  async getExtend(request: GetExtendRequest): Promise<GetExtendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExtendWithOptions(request, runtime);
  }

  async getForecastBusinessMetricWithOptions(request: GetForecastBusinessMetricRequest, runtime: $Util.RuntimeOptions): Promise<GetForecastBusinessMetricResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetForecastBusinessMetric",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetForecastBusinessMetricResponse>(await this.callApi(params, req, runtime), new GetForecastBusinessMetricResponse({}));
  }

  async getForecastBusinessMetric(request: GetForecastBusinessMetricRequest): Promise<GetForecastBusinessMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getForecastBusinessMetricWithOptions(request, runtime);
  }

  async getFunctionValidInfoWithOptions(request: GetFunctionValidInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetFunctionValidInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.functionName)) {
      body["FunctionName"] = request.functionName;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.regionCode)) {
      body["RegionCode"] = request.regionCode;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionValidInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionValidInfoResponse>(await this.callApi(params, req, runtime), new GetFunctionValidInfoResponse({}));
  }

  async getFunctionValidInfo(request: GetFunctionValidInfoRequest): Promise<GetFunctionValidInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFunctionValidInfoWithOptions(request, runtime);
  }

  async getGroupByDimensionDataWithOptions(request: GetGroupByDimensionDataRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupByDimensionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.flag)) {
      query["Flag"] = request.flag;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.metricId)) {
      query["MetricId"] = request.metricId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroupByDimensionData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupByDimensionDataResponse>(await this.callApi(params, req, runtime), new GetGroupByDimensionDataResponse({}));
  }

  async getGroupByDimensionData(request: GetGroupByDimensionDataRequest): Promise<GetGroupByDimensionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupByDimensionDataWithOptions(request, runtime);
  }

  async getGroupResourceNumWithOptions(request: GetGroupResourceNumRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResourceNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroupResourceNum",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResourceNumResponse>(await this.callApi(params, req, runtime), new GetGroupResourceNumResponse({}));
  }

  async getGroupResourceNum(request: GetGroupResourceNumRequest): Promise<GetGroupResourceNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupResourceNumWithOptions(request, runtime);
  }

  async getGroupTopologyTagWithOptions(request: GetGroupTopologyTagRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupTopologyTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGroupTopologyTag",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupTopologyTagResponse>(await this.callApi(params, req, runtime), new GetGroupTopologyTagResponse({}));
  }

  async getGroupTopologyTag(request: GetGroupTopologyTagRequest): Promise<GetGroupTopologyTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupTopologyTagWithOptions(request, runtime);
  }

  async getIncidentAllWithOptions(request: GetIncidentAllRequest, runtime: $Util.RuntimeOptions): Promise<GetIncidentAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIncidentAll",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIncidentAllResponse>(await this.callApi(params, req, runtime), new GetIncidentAllResponse({}));
  }

  async getIncidentAll(request: GetIncidentAllRequest): Promise<GetIncidentAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIncidentAllWithOptions(request, runtime);
  }

  async getIndexDialysisArrayWithOptions(request: GetIndexDialysisArrayRequest, runtime: $Util.RuntimeOptions): Promise<GetIndexDialysisArrayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!Util.isUnset(request.cloudTypeName)) {
      query["CloudTypeName"] = request.cloudTypeName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.indexCode)) {
      query["IndexCode"] = request.indexCode;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIndexDialysisArray",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIndexDialysisArrayResponse>(await this.callApi(params, req, runtime), new GetIndexDialysisArrayResponse({}));
  }

  async getIndexDialysisArray(request: GetIndexDialysisArrayRequest): Promise<GetIndexDialysisArrayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIndexDialysisArrayWithOptions(request, runtime);
  }

  async getIndexDialysisListWithOptions(request: GetIndexDialysisListRequest, runtime: $Util.RuntimeOptions): Promise<GetIndexDialysisListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!Util.isUnset(request.cloudTypeName)) {
      query["CloudTypeName"] = request.cloudTypeName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.indexCode)) {
      query["IndexCode"] = request.indexCode;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIndexDialysisList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIndexDialysisListResponse>(await this.callApi(params, req, runtime), new GetIndexDialysisListResponse({}));
  }

  async getIndexDialysisList(request: GetIndexDialysisListRequest): Promise<GetIndexDialysisListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIndexDialysisListWithOptions(request, runtime);
  }

  async getIndexDialysisListLineWithOptions(request: GetIndexDialysisListLineRequest, runtime: $Util.RuntimeOptions): Promise<GetIndexDialysisListLineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.cloudResourceId)) {
      query["CloudResourceId"] = request.cloudResourceId;
    }

    if (!Util.isUnset(request.cloudTypeName)) {
      query["CloudTypeName"] = request.cloudTypeName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.indexCode)) {
      query["IndexCode"] = request.indexCode;
    }

    if (!Util.isUnset(request.metricExtend)) {
      query["MetricExtend"] = request.metricExtend;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIndexDialysisListLine",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIndexDialysisListLineResponse>(await this.callApi(params, req, runtime), new GetIndexDialysisListLineResponse({}));
  }

  async getIndexDialysisListLine(request: GetIndexDialysisListLineRequest): Promise<GetIndexDialysisListLineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIndexDialysisListLineWithOptions(request, runtime);
  }

  async getInspectionReportDownloadUrlWithOptions(request: GetInspectionReportDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetInspectionReportDownloadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.downloadReportListJson)) {
      body["DownloadReportListJson"] = request.downloadReportListJson;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInspectionReportDownloadUrl",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInspectionReportDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetInspectionReportDownloadUrlResponse({}));
  }

  async getInspectionReportDownloadUrl(request: GetInspectionReportDownloadUrlRequest): Promise<GetInspectionReportDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInspectionReportDownloadUrlWithOptions(request, runtime);
  }

  async getInstancesNumWithOptions(request: GetInstancesNumRequest, runtime: $Util.RuntimeOptions): Promise<GetInstancesNumResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstancesNum",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstancesNumResponse>(await this.callApi(params, req, runtime), new GetInstancesNumResponse({}));
  }

  async getInstancesNum(request: GetInstancesNumRequest): Promise<GetInstancesNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstancesNumWithOptions(request, runtime);
  }

  async getLogSampleWithOptions(request: GetLogSampleRequest, runtime: $Util.RuntimeOptions): Promise<GetLogSampleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appField)) {
      query["AppField"] = request.appField;
    }

    if (!Util.isUnset(request.appValue)) {
      query["AppValue"] = request.appValue;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.logField)) {
      query["LogField"] = request.logField;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLogSample",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogSampleResponse>(await this.callApi(params, req, runtime), new GetLogSampleResponse({}));
  }

  async getLogSample(request: GetLogSampleRequest): Promise<GetLogSampleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogSampleWithOptions(request, runtime);
  }

  async getLogSampleColumnWithOptions(request: GetLogSampleColumnRequest, runtime: $Util.RuntimeOptions): Promise<GetLogSampleColumnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLogSampleColumn",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogSampleColumnResponse>(await this.callApi(params, req, runtime), new GetLogSampleColumnResponse({}));
  }

  async getLogSampleColumn(request: GetLogSampleColumnRequest): Promise<GetLogSampleColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogSampleColumnWithOptions(request, runtime);
  }

  async getMetricEventSequentialTrentWithOptions(request: GetMetricEventSequentialTrentRequest, runtime: $Util.RuntimeOptions): Promise<GetMetricEventSequentialTrentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMetricEventSequentialTrent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMetricEventSequentialTrentResponse>(await this.callApi(params, req, runtime), new GetMetricEventSequentialTrentResponse({}));
  }

  async getMetricEventSequentialTrent(request: GetMetricEventSequentialTrentRequest): Promise<GetMetricEventSequentialTrentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetricEventSequentialTrentWithOptions(request, runtime);
  }

  async getNewOptimizationItemDataWithOptions(request: GetNewOptimizationItemDataRequest, runtime: $Util.RuntimeOptions): Promise<GetNewOptimizationItemDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNewOptimizationItemData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNewOptimizationItemDataResponse>(await this.callApi(params, req, runtime), new GetNewOptimizationItemDataResponse({}));
  }

  async getNewOptimizationItemData(request: GetNewOptimizationItemDataRequest): Promise<GetNewOptimizationItemDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNewOptimizationItemDataWithOptions(request, runtime);
  }

  async getPatrolInspectionDetailListWithOptions(request: GetPatrolInspectionDetailListRequest, runtime: $Util.RuntimeOptions): Promise<GetPatrolInspectionDetailListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatrolInspectionDetailList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatrolInspectionDetailListResponse>(await this.callApi(params, req, runtime), new GetPatrolInspectionDetailListResponse({}));
  }

  async getPatrolInspectionDetailList(request: GetPatrolInspectionDetailListRequest): Promise<GetPatrolInspectionDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatrolInspectionDetailListWithOptions(request, runtime);
  }

  async getPatrolInspectionDetailThrendDataWithOptions(request: GetPatrolInspectionDetailThrendDataRequest, runtime: $Util.RuntimeOptions): Promise<GetPatrolInspectionDetailThrendDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.requestContent)) {
      query["RequestContent"] = request.requestContent;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatrolInspectionDetailThrendData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatrolInspectionDetailThrendDataResponse>(await this.callApi(params, req, runtime), new GetPatrolInspectionDetailThrendDataResponse({}));
  }

  async getPatrolInspectionDetailThrendData(request: GetPatrolInspectionDetailThrendDataRequest): Promise<GetPatrolInspectionDetailThrendDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatrolInspectionDetailThrendDataWithOptions(request, runtime);
  }

  async getPatrolInspectionItemsListWithOptions(request: GetPatrolInspectionItemsListRequest, runtime: $Util.RuntimeOptions): Promise<GetPatrolInspectionItemsListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatrolInspectionItemsList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatrolInspectionItemsListResponse>(await this.callApi(params, req, runtime), new GetPatrolInspectionItemsListResponse({}));
  }

  async getPatrolInspectionItemsList(request: GetPatrolInspectionItemsListRequest): Promise<GetPatrolInspectionItemsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatrolInspectionItemsListWithOptions(request, runtime);
  }

  async getPatrolInspectionListWithOptions(request: GetPatrolInspectionListRequest, runtime: $Util.RuntimeOptions): Promise<GetPatrolInspectionListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatrolInspectionList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatrolInspectionListResponse>(await this.callApi(params, req, runtime), new GetPatrolInspectionListResponse({}));
  }

  async getPatrolInspectionList(request: GetPatrolInspectionListRequest): Promise<GetPatrolInspectionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatrolInspectionListWithOptions(request, runtime);
  }

  async getPatrolInspectionStatusWithOptions(request: GetPatrolInspectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetPatrolInspectionStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatrolInspectionStatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatrolInspectionStatusResponse>(await this.callApi(params, req, runtime), new GetPatrolInspectionStatusResponse({}));
  }

  async getPatrolInspectionStatus(request: GetPatrolInspectionStatusRequest): Promise<GetPatrolInspectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatrolInspectionStatusWithOptions(request, runtime);
  }

  async getProductInstanceWithOptions(request: GetProductInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetProductInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProductInstance",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProductInstanceResponse>(await this.callApi(params, req, runtime), new GetProductInstanceResponse({}));
  }

  async getProductInstance(request: GetProductInstanceRequest): Promise<GetProductInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductInstanceWithOptions(request, runtime);
  }

  async getProductMetricListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetProductMetricListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetProductMetricList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProductMetricListResponse>(await this.callApi(params, req, runtime), new GetProductMetricListResponse({}));
  }

  async getProductMetricList(): Promise<GetProductMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductMetricListWithOptions(runtime);
  }

  async getRealDataWithOptions(request: GetRealDataRequest, runtime: $Util.RuntimeOptions): Promise<GetRealDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.flowName)) {
      query["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRealData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRealDataResponse>(await this.callApi(params, req, runtime), new GetRealDataResponse({}));
  }

  async getRealData(request: GetRealDataRequest): Promise<GetRealDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRealDataWithOptions(request, runtime);
  }

  async getRegionListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetRegionListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetRegionList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRegionListResponse>(await this.callApi(params, req, runtime), new GetRegionListResponse({}));
  }

  async getRegionList(): Promise<GetRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegionListWithOptions(runtime);
  }

  async getRepairScriptWithOptions(request: GetRepairScriptRequest, runtime: $Util.RuntimeOptions): Promise<GetRepairScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepairScript",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRepairScriptResponse>(await this.callApi(params, req, runtime), new GetRepairScriptResponse({}));
  }

  async getRepairScript(request: GetRepairScriptRequest): Promise<GetRepairScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRepairScriptWithOptions(request, runtime);
  }

  async getResourceListWithOptions(request: GetResourceListRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceListResponse>(await this.callApi(params, req, runtime), new GetResourceListResponse({}));
  }

  async getResourceList(request: GetResourceListRequest): Promise<GetResourceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceListWithOptions(request, runtime);
  }

  async getResourceTagDropListWithOptions(request: GetResourceTagDropListRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTagDropListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceTagDropList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTagDropListResponse>(await this.callApi(params, req, runtime), new GetResourceTagDropListResponse({}));
  }

  async getResourceTagDropList(request: GetResourceTagDropListRequest): Promise<GetResourceTagDropListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTagDropListWithOptions(request, runtime);
  }

  async getResourceTypeListWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceTypeListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetResourceTypeList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTypeListResponse>(await this.callApi(params, req, runtime), new GetResourceTypeListResponse({}));
  }

  async getResourceTypeList(): Promise<GetResourceTypeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeListWithOptions(runtime);
  }

  async getRiskInAllWithOptions(request: GetRiskInAllRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskInAllResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.screen)) {
      query["Screen"] = request.screen;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskInAll",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskInAllResponse>(await this.callApi(params, req, runtime), new GetRiskInAllResponse({}));
  }

  async getRiskInAll(request: GetRiskInAllRequest): Promise<GetRiskInAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskInAllWithOptions(request, runtime);
  }

  async getRiskInspectStatisticsWithOptions(request: GetRiskInspectStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskInspectStatisticsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskInspectStatistics",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskInspectStatisticsResponse>(await this.callApi(params, req, runtime), new GetRiskInspectStatisticsResponse({}));
  }

  async getRiskInspectStatistics(request: GetRiskInspectStatisticsRequest): Promise<GetRiskInspectStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskInspectStatisticsWithOptions(request, runtime);
  }

  async getRiskInspectionTypeListWithOptions(request: GetRiskInspectionTypeListRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskInspectionTypeListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskInspectionTypeList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskInspectionTypeListResponse>(await this.callApi(params, req, runtime), new GetRiskInspectionTypeListResponse({}));
  }

  async getRiskInspectionTypeList(request: GetRiskInspectionTypeListRequest): Promise<GetRiskInspectionTypeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskInspectionTypeListWithOptions(request, runtime);
  }

  async getRiskPatrolDetailListWithOptions(request: GetRiskPatrolDetailListRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskPatrolDetailListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskPatrolDetailList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskPatrolDetailListResponse>(await this.callApi(params, req, runtime), new GetRiskPatrolDetailListResponse({}));
  }

  async getRiskPatrolDetailList(request: GetRiskPatrolDetailListRequest): Promise<GetRiskPatrolDetailListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskPatrolDetailListWithOptions(request, runtime);
  }

  async getRiskPatrolListWithOptions(request: GetRiskPatrolListRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskPatrolListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.businessGroupName)) {
      query["BusinessGroupName"] = request.businessGroupName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.patrolId)) {
      query["PatrolId"] = request.patrolId;
    }

    if (!Util.isUnset(request.riskPatrolItem)) {
      query["RiskPatrolItem"] = request.riskPatrolItem;
    }

    if (!Util.isUnset(request.severityLevel)) {
      query["SeverityLevel"] = request.severityLevel;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskPatrolList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskPatrolListResponse>(await this.callApi(params, req, runtime), new GetRiskPatrolListResponse({}));
  }

  async getRiskPatrolList(request: GetRiskPatrolListRequest): Promise<GetRiskPatrolListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskPatrolListWithOptions(request, runtime);
  }

  async getRiskPatrolStatisticalTrendsWithOptions(request: GetRiskPatrolStatisticalTrendsRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskPatrolStatisticalTrendsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskPatrolStatisticalTrends",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskPatrolStatisticalTrendsResponse>(await this.callApi(params, req, runtime), new GetRiskPatrolStatisticalTrendsResponse({}));
  }

  async getRiskPatrolStatisticalTrends(request: GetRiskPatrolStatisticalTrendsRequest): Promise<GetRiskPatrolStatisticalTrendsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskPatrolStatisticalTrendsWithOptions(request, runtime);
  }

  async getRiskPatrolStatisticsWithOptions(request: GetRiskPatrolStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskPatrolStatisticsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskPatrolStatistics",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskPatrolStatisticsResponse>(await this.callApi(params, req, runtime), new GetRiskPatrolStatisticsResponse({}));
  }

  async getRiskPatrolStatistics(request: GetRiskPatrolStatisticsRequest): Promise<GetRiskPatrolStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskPatrolStatisticsWithOptions(request, runtime);
  }

  async getRiskPatrolStatusWithOptions(request: GetRiskPatrolStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetRiskPatrolStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRiskPatrolStatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRiskPatrolStatusResponse>(await this.callApi(params, req, runtime), new GetRiskPatrolStatusResponse({}));
  }

  async getRiskPatrolStatus(request: GetRiskPatrolStatusRequest): Promise<GetRiskPatrolStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRiskPatrolStatusWithOptions(request, runtime);
  }

  async getRoleWithOptions(runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetRole",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRoleResponse>(await this.callApi(params, req, runtime), new GetRoleResponse({}));
  }

  async getRole(): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRoleWithOptions(runtime);
  }

  async getRootCauseWithOptions(request: GetRootCauseRequest, runtime: $Util.RuntimeOptions): Promise<GetRootCauseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.rootCauseId)) {
      query["RootCauseId"] = request.rootCauseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRootCause",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRootCauseResponse>(await this.callApi(params, req, runtime), new GetRootCauseResponse({}));
  }

  async getRootCause(request: GetRootCauseRequest): Promise<GetRootCauseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRootCauseWithOptions(request, runtime);
  }

  async getScenarioDetailWithOptions(request: GetScenarioDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetScenarioDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenarioDetail",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenarioDetailResponse>(await this.callApi(params, req, runtime), new GetScenarioDetailResponse({}));
  }

  async getScenarioDetail(request: GetScenarioDetailRequest): Promise<GetScenarioDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenarioDetailWithOptions(request, runtime);
  }

  async getScenarioListWithOptions(request: GetScenarioListRequest, runtime: $Util.RuntimeOptions): Promise<GetScenarioListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scenarioName)) {
      query["ScenarioName"] = request.scenarioName;
    }

    if (!Util.isUnset(request.sceneSelectLabel)) {
      query["SceneSelectLabel"] = request.sceneSelectLabel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenarioList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenarioListResponse>(await this.callApi(params, req, runtime), new GetScenarioListResponse({}));
  }

  async getScenarioList(request: GetScenarioListRequest): Promise<GetScenarioListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenarioListWithOptions(request, runtime);
  }

  async getScenarioStatisticsListWithOptions(request: GetScenarioStatisticsListRequest, runtime: $Util.RuntimeOptions): Promise<GetScenarioStatisticsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.scenarioIds)) {
      query["ScenarioIds"] = request.scenarioIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScenarioStatisticsList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScenarioStatisticsListResponse>(await this.callApi(params, req, runtime), new GetScenarioStatisticsListResponse({}));
  }

  async getScenarioStatisticsList(request: GetScenarioStatisticsListRequest): Promise<GetScenarioStatisticsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScenarioStatisticsListWithOptions(request, runtime);
  }

  async getSceneByIdWithOptions(request: GetSceneByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneByIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSceneById",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSceneByIdResponse>(await this.callApi(params, req, runtime), new GetSceneByIdResponse({}));
  }

  async getSceneById(request: GetSceneByIdRequest): Promise<GetSceneByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneByIdWithOptions(request, runtime);
  }

  async getSceneDetailsListWithOptions(request: GetSceneDetailsListRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneDetailsListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSceneDetailsList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSceneDetailsListResponse>(await this.callApi(params, req, runtime), new GetSceneDetailsListResponse({}));
  }

  async getSceneDetailsList(request: GetSceneDetailsListRequest): Promise<GetSceneDetailsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneDetailsListWithOptions(request, runtime);
  }

  async getSceneListWithOptions(request: GetSceneListRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pageTotal)) {
      query["PageTotal"] = request.pageTotal;
    }

    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!Util.isUnset(request.searchName)) {
      query["SearchName"] = request.searchName;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSceneList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSceneListResponse>(await this.callApi(params, req, runtime), new GetSceneListResponse({}));
  }

  async getSceneList(request: GetSceneListRequest): Promise<GetSceneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneListWithOptions(request, runtime);
  }

  async getSceneMetricTableWithOptions(request: GetSceneMetricTableRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneMetricTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.metricId)) {
      query["MetricId"] = request.metricId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSceneMetricTable",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSceneMetricTableResponse>(await this.callApi(params, req, runtime), new GetSceneMetricTableResponse({}));
  }

  async getSceneMetricTable(request: GetSceneMetricTableRequest): Promise<GetSceneMetricTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneMetricTableWithOptions(request, runtime);
  }

  async getScriptEventRootCauseWithOptions(request: GetScriptEventRootCauseRequest, runtime: $Util.RuntimeOptions): Promise<GetScriptEventRootCauseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetScriptEventRootCause",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetScriptEventRootCauseResponse>(await this.callApi(params, req, runtime), new GetScriptEventRootCauseResponse({}));
  }

  async getScriptEventRootCause(request: GetScriptEventRootCauseRequest): Promise<GetScriptEventRootCauseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getScriptEventRootCauseWithOptions(request, runtime);
  }

  async getSlsLogDataWithOptions(request: GetSlsLogDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSlsLogDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.code)) {
      query["Code"] = request.code;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSlsLogData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSlsLogDataResponse>(await this.callApi(params, req, runtime), new GetSlsLogDataResponse({}));
  }

  async getSlsLogData(request: GetSlsLogDataRequest): Promise<GetSlsLogDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSlsLogDataWithOptions(request, runtime);
  }

  async getSynCloudResourceListWithOptions(request: GetSynCloudResourceListRequest, runtime: $Util.RuntimeOptions): Promise<GetSynCloudResourceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSynCloudResourceList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSynCloudResourceListResponse>(await this.callApi(params, req, runtime), new GetSynCloudResourceListResponse({}));
  }

  async getSynCloudResourceList(request: GetSynCloudResourceListRequest): Promise<GetSynCloudResourceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSynCloudResourceListWithOptions(request, runtime);
  }

  async getTagBusinessGroupListWithOptions(request: GetTagBusinessGroupListRequest, runtime: $Util.RuntimeOptions): Promise<GetTagBusinessGroupListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTagBusinessGroupList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTagBusinessGroupListResponse>(await this.callApi(params, req, runtime), new GetTagBusinessGroupListResponse({}));
  }

  async getTagBusinessGroupList(request: GetTagBusinessGroupListRequest): Promise<GetTagBusinessGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagBusinessGroupListWithOptions(request, runtime);
  }

  async getTagDropListWithOptions(request: GetTagDropListRequest, runtime: $Util.RuntimeOptions): Promise<GetTagDropListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTagDropList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTagDropListResponse>(await this.callApi(params, req, runtime), new GetTagDropListResponse({}));
  }

  async getTagDropList(request: GetTagDropListRequest): Promise<GetTagDropListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagDropListWithOptions(request, runtime);
  }

  async getTargetDimensionDataWithOptions(request: GetTargetDimensionDataRequest, runtime: $Util.RuntimeOptions): Promise<GetTargetDimensionDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.flag)) {
      query["Flag"] = request.flag;
    }

    if (!Util.isUnset(request.label)) {
      query["Label"] = request.label;
    }

    if (!Util.isUnset(request.labelValue)) {
      query["LabelValue"] = request.labelValue;
    }

    if (!Util.isUnset(request.metricId)) {
      query["MetricId"] = request.metricId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTargetDimensionData",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTargetDimensionDataResponse>(await this.callApi(params, req, runtime), new GetTargetDimensionDataResponse({}));
  }

  async getTargetDimensionData(request: GetTargetDimensionDataRequest): Promise<GetTargetDimensionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTargetDimensionDataWithOptions(request, runtime);
  }

  async getThresholdListWithOptions(request: GetThresholdListRequest, runtime: $Util.RuntimeOptions): Promise<GetThresholdListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetThresholdList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetThresholdListResponse>(await this.callApi(params, req, runtime), new GetThresholdListResponse({}));
  }

  async getThresholdList(request: GetThresholdListRequest): Promise<GetThresholdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThresholdListWithOptions(request, runtime);
  }

  async getThroughPutWithOptions(request: GetThroughPutRequest, runtime: $Util.RuntimeOptions): Promise<GetThroughPutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetThroughPut",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetThroughPutResponse>(await this.callApi(params, req, runtime), new GetThroughPutResponse({}));
  }

  async getThroughPut(request: GetThroughPutRequest): Promise<GetThroughPutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getThroughPutWithOptions(request, runtime);
  }

  async getTrendSlsReportsWithOptions(request: GetTrendSlsReportsRequest, runtime: $Util.RuntimeOptions): Promise<GetTrendSlsReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrendSlsReports",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTrendSlsReportsResponse>(await this.callApi(params, req, runtime), new GetTrendSlsReportsResponse({}));
  }

  async getTrendSlsReports(request: GetTrendSlsReportsRequest): Promise<GetTrendSlsReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrendSlsReportsWithOptions(request, runtime);
  }

  async getUserInfoWithOptions(request: GetUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserInfoResponse>(await this.callApi(params, req, runtime), new GetUserInfoResponse({}));
  }

  async getUserInfo(request: GetUserInfoRequest): Promise<GetUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserInfoWithOptions(request, runtime);
  }

  async getUserLoginInfoWithOptions(request: GetUserLoginInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetUserLoginInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrincipalName)) {
      query["AccountPrincipalName"] = request.accountPrincipalName;
    }

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.currentPk)) {
      query["CurrentPk"] = request.currentPk;
    }

    if (!Util.isUnset(request.mainAccountPk)) {
      query["MainAccountPk"] = request.mainAccountPk;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserLoginInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserLoginInfoResponse>(await this.callApi(params, req, runtime), new GetUserLoginInfoResponse({}));
  }

  async getUserLoginInfo(request: GetUserLoginInfoRequest): Promise<GetUserLoginInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserLoginInfoWithOptions(request, runtime);
  }

  async getUserOrderConfigWithOptions(request: GetUserOrderConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetUserOrderConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserOrderConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserOrderConfigResponse>(await this.callApi(params, req, runtime), new GetUserOrderConfigResponse({}));
  }

  async getUserOrderConfig(request: GetUserOrderConfigRequest): Promise<GetUserOrderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserOrderConfigWithOptions(request, runtime);
  }

  async ignoreAlarmsWithOptions(request: IgnoreAlarmsRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreAlarmsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IgnoreAlarms",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IgnoreAlarmsResponse>(await this.callApi(params, req, runtime), new IgnoreAlarmsResponse({}));
  }

  async ignoreAlarms(request: IgnoreAlarmsRequest): Promise<IgnoreAlarmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreAlarmsWithOptions(request, runtime);
  }

  async listApplyAuthorizationWithOptions(request: ListApplyAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ListApplyAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplyAuthorization",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplyAuthorizationResponse>(await this.callApi(params, req, runtime), new ListApplyAuthorizationResponse({}));
  }

  async listApplyAuthorization(request: ListApplyAuthorizationRequest): Promise<ListApplyAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplyAuthorizationWithOptions(request, runtime);
  }

  async listAuthWithOptions(request: ListAuthRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuth",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthResponse>(await this.callApi(params, req, runtime), new ListAuthResponse({}));
  }

  async listAuth(request: ListAuthRequest): Promise<ListAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthWithOptions(request, runtime);
  }

  async listAuthorizedUidWithOptions(runtime: $Util.RuntimeOptions): Promise<ListAuthorizedUidResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListAuthorizedUid",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizedUidResponse>(await this.callApi(params, req, runtime), new ListAuthorizedUidResponse({}));
  }

  async listAuthorizedUid(): Promise<ListAuthorizedUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthorizedUidWithOptions(runtime);
  }

  async listCausePlanWithOptions(request: ListCausePlanRequest, runtime: $Util.RuntimeOptions): Promise<ListCausePlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.rootCauseId)) {
      query["RootCauseId"] = request.rootCauseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCausePlan",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCausePlanResponse>(await this.callApi(params, req, runtime), new ListCausePlanResponse({}));
  }

  async listCausePlan(request: ListCausePlanRequest): Promise<ListCausePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCausePlanWithOptions(request, runtime);
  }

  async listConfirmAuthorizationWithOptions(request: ListConfirmAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<ListConfirmAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfirmAuthorization",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfirmAuthorizationResponse>(await this.callApi(params, req, runtime), new ListConfirmAuthorizationResponse({}));
  }

  async listConfirmAuthorization(request: ListConfirmAuthorizationRequest): Promise<ListConfirmAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfirmAuthorizationWithOptions(request, runtime);
  }

  async listEventWithOptions(request: ListEventRequest, runtime: $Util.RuntimeOptions): Promise<ListEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEvent",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventResponse>(await this.callApi(params, req, runtime), new ListEventResponse({}));
  }

  async listEvent(request: ListEventRequest): Promise<ListEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventWithOptions(request, runtime);
  }

  async listNotAuthorizedUidWithOptions(runtime: $Util.RuntimeOptions): Promise<ListNotAuthorizedUidResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListNotAuthorizedUid",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNotAuthorizedUidResponse>(await this.callApi(params, req, runtime), new ListNotAuthorizedUidResponse({}));
  }

  async listNotAuthorizedUid(): Promise<ListNotAuthorizedUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNotAuthorizedUidWithOptions(runtime);
  }

  async listReportsWithOptions(request: ListReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListReports",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListReportsResponse>(await this.callApi(params, req, runtime), new ListReportsResponse({}));
  }

  async listReports(request: ListReportsRequest): Promise<ListReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listReportsWithOptions(request, runtime);
  }

  async listRootCauseWithOptions(request: ListRootCauseRequest, runtime: $Util.RuntimeOptions): Promise<ListRootCauseResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.rootCauseId)) {
      query["RootCauseId"] = request.rootCauseId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRootCause",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRootCauseResponse>(await this.callApi(params, req, runtime), new ListRootCauseResponse({}));
  }

  async listRootCause(request: ListRootCauseRequest): Promise<ListRootCauseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRootCauseWithOptions(request, runtime);
  }

  async listSlsReportsWithOptions(request: ListSlsReportsRequest, runtime: $Util.RuntimeOptions): Promise<ListSlsReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logStore)) {
      query["LogStore"] = request.logStore;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSlsReports",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSlsReportsResponse>(await this.callApi(params, req, runtime), new ListSlsReportsResponse({}));
  }

  async listSlsReports(request: ListSlsReportsRequest): Promise<ListSlsReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSlsReportsWithOptions(request, runtime);
  }

  async putAlertContactWithOptions(request: PutAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!Util.isUnset(request.webhook)) {
      body["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertContact",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertContactResponse>(await this.callApi(params, req, runtime), new PutAlertContactResponse({}));
  }

  async putAlertContact(request: PutAlertContactRequest): Promise<PutAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertContactWithOptions(request, runtime);
  }

  async putAlertContactGroupWithOptions(request: PutAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertContactGroupJson)) {
      body["AlertContactGroupJson"] = request.alertContactGroupJson;
    }

    if (!Util.isUnset(request.contactIdsJson)) {
      body["ContactIdsJson"] = request.contactIdsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertContactGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertContactGroupResponse>(await this.callApi(params, req, runtime), new PutAlertContactGroupResponse({}));
  }

  async putAlertContactGroup(request: PutAlertContactGroupRequest): Promise<PutAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertContactGroupWithOptions(request, runtime);
  }

  async putAlertContactToGroupWithOptions(request: PutAlertContactToGroupRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertContactToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contactIdListJson)) {
      body["ContactIdListJson"] = request.contactIdListJson;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupIdListJson)) {
      body["GroupIdListJson"] = request.groupIdListJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertContactToGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertContactToGroupResponse>(await this.callApi(params, req, runtime), new PutAlertContactToGroupResponse({}));
  }

  async putAlertContactToGroup(request: PutAlertContactToGroupRequest): Promise<PutAlertContactToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertContactToGroupWithOptions(request, runtime);
  }

  async putAlertIgnoreWithOptions(request: PutAlertIgnoreRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertIgnoreResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertIgnore",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertIgnoreResponse>(await this.callApi(params, req, runtime), new PutAlertIgnoreResponse({}));
  }

  async putAlertIgnore(request: PutAlertIgnoreRequest): Promise<PutAlertIgnoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertIgnoreWithOptions(request, runtime);
  }

  async putAlertSettingWithOptions(request: PutAlertSettingRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertSettingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertSilenceConfig)) {
      query["AlertSilenceConfig"] = request.alertSilenceConfig;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alarmLevel)) {
      body["AlarmLevel"] = request.alarmLevel;
    }

    if (!Util.isUnset(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!Util.isUnset(request.alertSettingId)) {
      body["AlertSettingId"] = request.alertSettingId;
    }

    if (!Util.isUnset(request.businessGroupIdsJson)) {
      body["BusinessGroupIdsJson"] = request.businessGroupIdsJson;
    }

    if (!Util.isUnset(request.contactGroupIdsJson)) {
      body["ContactGroupIdsJson"] = request.contactGroupIdsJson;
    }

    if (!Util.isUnset(request.contactIdsJson)) {
      body["ContactIdsJson"] = request.contactIdsJson;
    }

    if (!Util.isUnset(request.customerUid)) {
      body["CustomerUid"] = request.customerUid;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sendDingtalkNotice)) {
      body["SendDingtalkNotice"] = request.sendDingtalkNotice;
    }

    if (!Util.isUnset(request.sendEmailNotice)) {
      body["SendEmailNotice"] = request.sendEmailNotice;
    }

    if (!Util.isUnset(request.sendSmsNotice)) {
      body["SendSmsNotice"] = request.sendSmsNotice;
    }

    if (!Util.isUnset(request.stopDuration)) {
      body["StopDuration"] = request.stopDuration;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertSetting",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertSettingResponse>(await this.callApi(params, req, runtime), new PutAlertSettingResponse({}));
  }

  async putAlertSetting(request: PutAlertSettingRequest): Promise<PutAlertSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertSettingWithOptions(request, runtime);
  }

  async putAlertSettingListWithOptions(request: PutAlertSettingListRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertSettingListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertSettingEditRequestListJson)) {
      body["AlertSettingEditRequestListJson"] = request.alertSettingEditRequestListJson;
    }

    if (!Util.isUnset(request.contactGroupIdsJson)) {
      body["ContactGroupIdsJson"] = request.contactGroupIdsJson;
    }

    if (!Util.isUnset(request.contactIdsJson)) {
      body["ContactIdsJson"] = request.contactIdsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertSettingList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertSettingListResponse>(await this.callApi(params, req, runtime), new PutAlertSettingListResponse({}));
  }

  async putAlertSettingList(request: PutAlertSettingListRequest): Promise<PutAlertSettingListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertSettingListWithOptions(request, runtime);
  }

  async putAlertSettingStatusWithOptions(request: PutAlertSettingStatusRequest, runtime: $Util.RuntimeOptions): Promise<PutAlertSettingStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertSettingId)) {
      body["AlertSettingId"] = request.alertSettingId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.settingStatus)) {
      body["SettingStatus"] = request.settingStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutAlertSettingStatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutAlertSettingStatusResponse>(await this.callApi(params, req, runtime), new PutAlertSettingStatusResponse({}));
  }

  async putAlertSettingStatus(request: PutAlertSettingStatusRequest): Promise<PutAlertSettingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putAlertSettingStatusWithOptions(request, runtime);
  }

  async putDataSourceConfigWithOptions(request: PutDataSourceConfigRequest, runtime: $Util.RuntimeOptions): Promise<PutDataSourceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceDescribe)) {
      query["DataSourceDescribe"] = request.dataSourceDescribe;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.dataSourceParams)) {
      query["DataSourceParams"] = request.dataSourceParams;
    }

    if (!Util.isUnset(request.dataSourceParamsMapping)) {
      query["DataSourceParamsMapping"] = request.dataSourceParamsMapping;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutDataSourceConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutDataSourceConfigResponse>(await this.callApi(params, req, runtime), new PutDataSourceConfigResponse({}));
  }

  async putDataSourceConfig(request: PutDataSourceConfigRequest): Promise<PutDataSourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDataSourceConfigWithOptions(request, runtime);
  }

  async putGroupResourceTagWithOptions(request: PutGroupResourceTagRequest, runtime: $Util.RuntimeOptions): Promise<PutGroupResourceTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutGroupResourceTag",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutGroupResourceTagResponse>(await this.callApi(params, req, runtime), new PutGroupResourceTagResponse({}));
  }

  async putGroupResourceTag(request: PutGroupResourceTagRequest): Promise<PutGroupResourceTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putGroupResourceTagWithOptions(request, runtime);
  }

  async putGroupTopologyTagLogWithOptions(request: PutGroupTopologyTagLogRequest, runtime: $Util.RuntimeOptions): Promise<PutGroupTopologyTagLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutGroupTopologyTagLog",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutGroupTopologyTagLogResponse>(await this.callApi(params, req, runtime), new PutGroupTopologyTagLogResponse({}));
  }

  async putGroupTopologyTagLog(request: PutGroupTopologyTagLogRequest): Promise<PutGroupTopologyTagLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putGroupTopologyTagLogWithOptions(request, runtime);
  }

  async putReportEmailConfigWithOptions(request: PutReportEmailConfigRequest, runtime: $Util.RuntimeOptions): Promise<PutReportEmailConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.email)) {
      body["Email"] = request.email;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutReportEmailConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutReportEmailConfigResponse>(await this.callApi(params, req, runtime), new PutReportEmailConfigResponse({}));
  }

  async putReportEmailConfig(request: PutReportEmailConfigRequest): Promise<PutReportEmailConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putReportEmailConfigWithOptions(request, runtime);
  }

  async putResourceWhitelistWithOptions(request: PutResourceWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutResourceWhitelist",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutResourceWhitelistResponse>(await this.callApi(params, req, runtime), new PutResourceWhitelistResponse({}));
  }

  async putResourceWhitelist(request: PutResourceWhitelistRequest): Promise<PutResourceWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceWhitelistWithOptions(request, runtime);
  }

  async replaceScriptListWithOptions(request: ReplaceScriptListRequest, runtime: $Util.RuntimeOptions): Promise<ReplaceScriptListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceScriptList",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceScriptListResponse>(await this.callApi(params, req, runtime), new ReplaceScriptListResponse({}));
  }

  async replaceScriptList(request: ReplaceScriptListRequest): Promise<ReplaceScriptListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replaceScriptListWithOptions(request, runtime);
  }

  async revokeSubmitApplyPermissionWithOptions(request: RevokeSubmitApplyPermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeSubmitApplyPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeSubmitApplyPermission",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeSubmitApplyPermissionResponse>(await this.callApi(params, req, runtime), new RevokeSubmitApplyPermissionResponse({}));
  }

  async revokeSubmitApplyPermission(request: RevokeSubmitApplyPermissionRequest): Promise<RevokeSubmitApplyPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeSubmitApplyPermissionWithOptions(request, runtime);
  }

  async runAnalysisProcessWithOptions(request: RunAnalysisProcessRequest, runtime: $Util.RuntimeOptions): Promise<RunAnalysisProcessResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunAnalysisProcess",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunAnalysisProcessResponse>(await this.callApi(params, req, runtime), new RunAnalysisProcessResponse({}));
  }

  async runAnalysisProcess(request: RunAnalysisProcessRequest): Promise<RunAnalysisProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runAnalysisProcessWithOptions(request, runtime);
  }

  async runCommandWithOptions(request: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunCommand",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
  }

  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  async runForecastAnalyzeWithOptions(request: RunForecastAnalyzeRequest, runtime: $Util.RuntimeOptions): Promise<RunForecastAnalyzeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunForecastAnalyze",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunForecastAnalyzeResponse>(await this.callApi(params, req, runtime), new RunForecastAnalyzeResponse({}));
  }

  async runForecastAnalyze(request: RunForecastAnalyzeRequest): Promise<RunForecastAnalyzeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runForecastAnalyzeWithOptions(request, runtime);
  }

  async runPatrolInspectionWithOptions(request: RunPatrolInspectionRequest, runtime: $Util.RuntimeOptions): Promise<RunPatrolInspectionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunPatrolInspection",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunPatrolInspectionResponse>(await this.callApi(params, req, runtime), new RunPatrolInspectionResponse({}));
  }

  async runPatrolInspection(request: RunPatrolInspectionRequest): Promise<RunPatrolInspectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runPatrolInspectionWithOptions(request, runtime);
  }

  async runRepairScriptWithOptions(request: RunRepairScriptRequest, runtime: $Util.RuntimeOptions): Promise<RunRepairScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunRepairScript",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunRepairScriptResponse>(await this.callApi(params, req, runtime), new RunRepairScriptResponse({}));
  }

  async runRepairScript(request: RunRepairScriptRequest): Promise<RunRepairScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runRepairScriptWithOptions(request, runtime);
  }

  async runRiskPatrolWithOptions(request: RunRiskPatrolRequest, runtime: $Util.RuntimeOptions): Promise<RunRiskPatrolResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunRiskPatrol",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunRiskPatrolResponse>(await this.callApi(params, req, runtime), new RunRiskPatrolResponse({}));
  }

  async runRiskPatrol(request: RunRiskPatrolRequest): Promise<RunRiskPatrolResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runRiskPatrolWithOptions(request, runtime);
  }

  async switchUserTopWithOptions(request: SwitchUserTopRequest, runtime: $Util.RuntimeOptions): Promise<SwitchUserTopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SwitchUserTop",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchUserTopResponse>(await this.callApi(params, req, runtime), new SwitchUserTopResponse({}));
  }

  async switchUserTop(request: SwitchUserTopRequest): Promise<SwitchUserTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchUserTopWithOptions(request, runtime);
  }

  async updBusinessGroupWithOptions(tmpReq: UpdBusinessGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdBusinessGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdBusinessGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.businessGroupDesc)) {
      query["BusinessGroupDesc"] = request.businessGroupDesc;
    }

    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.businessGroupName)) {
      query["BusinessGroupName"] = request.businessGroupName;
    }

    if (!Util.isUnset(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.updateUser)) {
      query["UpdateUser"] = request.updateUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdBusinessGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdBusinessGroupResponse>(await this.callApi(params, req, runtime), new UpdBusinessGroupResponse({}));
  }

  async updBusinessGroup(request: UpdBusinessGroupRequest): Promise<UpdBusinessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updBusinessGroupWithOptions(request, runtime);
  }

  async updateAuthorizationWithOptions(request: UpdateAuthorizationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuthorizationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuthorization",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuthorizationResponse>(await this.callApi(params, req, runtime), new UpdateAuthorizationResponse({}));
  }

  async updateAuthorization(request: UpdateAuthorizationRequest): Promise<UpdateAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuthorizationWithOptions(request, runtime);
  }

  async updateBindMetricWithOptions(request: UpdateBindMetricRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBindMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.metricId)) {
      query["MetricId"] = request.metricId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBindMetric",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBindMetricResponse>(await this.callApi(params, req, runtime), new UpdateBindMetricResponse({}));
  }

  async updateBindMetric(request: UpdateBindMetricRequest): Promise<UpdateBindMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBindMetricWithOptions(request, runtime);
  }

  async updateBusinessGroupWithOptions(tmpReq: UpdateBusinessGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBusinessGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceList)) {
      request.instanceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceList, "InstanceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.businessGroupDesc)) {
      query["BusinessGroupDesc"] = request.businessGroupDesc;
    }

    if (!Util.isUnset(request.businessGroupId)) {
      query["BusinessGroupId"] = request.businessGroupId;
    }

    if (!Util.isUnset(request.businessGroupName)) {
      query["BusinessGroupName"] = request.businessGroupName;
    }

    if (!Util.isUnset(request.cloudResourceTypeId)) {
      query["CloudResourceTypeId"] = request.cloudResourceTypeId;
    }

    if (!Util.isUnset(request.dealType)) {
      query["DealType"] = request.dealType;
    }

    if (!Util.isUnset(request.instanceListShrink)) {
      query["InstanceList"] = request.instanceListShrink;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.updateUser)) {
      query["UpdateUser"] = request.updateUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBusinessGroup",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBusinessGroupResponse>(await this.callApi(params, req, runtime), new UpdateBusinessGroupResponse({}));
  }

  async updateBusinessGroup(request: UpdateBusinessGroupRequest): Promise<UpdateBusinessGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBusinessGroupWithOptions(request, runtime);
  }

  async updateBusinessMetricAlertConfigWithOptions(request: UpdateBusinessMetricAlertConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessMetricAlertConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBusinessMetricAlertConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBusinessMetricAlertConfigResponse>(await this.callApi(params, req, runtime), new UpdateBusinessMetricAlertConfigResponse({}));
  }

  async updateBusinessMetricAlertConfig(request: UpdateBusinessMetricAlertConfigRequest): Promise<UpdateBusinessMetricAlertConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBusinessMetricAlertConfigWithOptions(request, runtime);
  }

  async updateBusinessMetricResourceWithOptions(request: UpdateBusinessMetricResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessMetricResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.businessMetricId)) {
      query["BusinessMetricId"] = request.businessMetricId;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.resourceList)) {
      query["ResourceList"] = request.resourceList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBusinessMetricResource",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBusinessMetricResourceResponse>(await this.callApi(params, req, runtime), new UpdateBusinessMetricResourceResponse({}));
  }

  async updateBusinessMetricResource(request: UpdateBusinessMetricResourceRequest): Promise<UpdateBusinessMetricResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBusinessMetricResourceWithOptions(request, runtime);
  }

  async updateDataSourceConfigWithOptions(request: UpdateDataSourceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDataSourceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataSourceDescribe)) {
      query["DataSourceDescribe"] = request.dataSourceDescribe;
    }

    if (!Util.isUnset(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!Util.isUnset(request.dataSourceParams)) {
      query["DataSourceParams"] = request.dataSourceParams;
    }

    if (!Util.isUnset(request.dataSourceParamsMapping)) {
      query["DataSourceParamsMapping"] = request.dataSourceParamsMapping;
    }

    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataSourceConfig",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDataSourceConfigResponse>(await this.callApi(params, req, runtime), new UpdateDataSourceConfigResponse({}));
  }

  async updateDataSourceConfig(request: UpdateDataSourceConfigRequest): Promise<UpdateDataSourceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDataSourceConfigWithOptions(request, runtime);
  }

  async updateHandleRiskWithOptions(request: UpdateHandleRiskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHandleRiskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHandleRisk",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHandleRiskResponse>(await this.callApi(params, req, runtime), new UpdateHandleRiskResponse({}));
  }

  async updateHandleRisk(request: UpdateHandleRiskRequest): Promise<UpdateHandleRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHandleRiskWithOptions(request, runtime);
  }

  async updateHandleRiskBaseWithOptions(request: UpdateHandleRiskBaseRequest, runtime: $Util.RuntimeOptions): Promise<UpdateHandleRiskBaseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateHandleRiskBase",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateHandleRiskBaseResponse>(await this.callApi(params, req, runtime), new UpdateHandleRiskBaseResponse({}));
  }

  async updateHandleRiskBase(request: UpdateHandleRiskBaseRequest): Promise<UpdateHandleRiskBaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateHandleRiskBaseWithOptions(request, runtime);
  }

  async updateIgnoreRiskWithOptions(request: UpdateIgnoreRiskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIgnoreRiskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIgnoreRisk",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIgnoreRiskResponse>(await this.callApi(params, req, runtime), new UpdateIgnoreRiskResponse({}));
  }

  async updateIgnoreRisk(request: UpdateIgnoreRiskRequest): Promise<UpdateIgnoreRiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIgnoreRiskWithOptions(request, runtime);
  }

  async updateIgnoreRiskBaseWithOptions(request: UpdateIgnoreRiskBaseRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIgnoreRiskBaseResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIgnoreRiskBase",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIgnoreRiskBaseResponse>(await this.callApi(params, req, runtime), new UpdateIgnoreRiskBaseResponse({}));
  }

  async updateIgnoreRiskBase(request: UpdateIgnoreRiskBaseRequest): Promise<UpdateIgnoreRiskBaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIgnoreRiskBaseWithOptions(request, runtime);
  }

  async updateInspectionSettingStatusWithOptions(request: UpdateInspectionSettingStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInspectionSettingStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.riskCode)) {
      body["RiskCode"] = request.riskCode;
    }

    if (!Util.isUnset(request.riskEnableStatus)) {
      body["RiskEnableStatus"] = request.riskEnableStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInspectionSettingStatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInspectionSettingStatusResponse>(await this.callApi(params, req, runtime), new UpdateInspectionSettingStatusResponse({}));
  }

  async updateInspectionSettingStatus(request: UpdateInspectionSettingStatusRequest): Promise<UpdateInspectionSettingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInspectionSettingStatusWithOptions(request, runtime);
  }

  async updateInspectionThresholdWithOptions(request: UpdateInspectionThresholdRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInspectionThresholdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.riskCode)) {
      body["RiskCode"] = request.riskCode;
    }

    if (!Util.isUnset(request.thresholdItemListJson)) {
      body["ThresholdItemListJson"] = request.thresholdItemListJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInspectionThreshold",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInspectionThresholdResponse>(await this.callApi(params, req, runtime), new UpdateInspectionThresholdResponse({}));
  }

  async updateInspectionThreshold(request: UpdateInspectionThresholdRequest): Promise<UpdateInspectionThresholdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInspectionThresholdWithOptions(request, runtime);
  }

  async updateOperationPermissionWithOptions(request: UpdateOperationPermissionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOperationPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.permissionType)) {
      query["PermissionType"] = request.permissionType;
    }

    if (!Util.isUnset(request.switchFrontOperaUid)) {
      query["SwitchFrontOperaUid"] = request.switchFrontOperaUid;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOperationPermission",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOperationPermissionResponse>(await this.callApi(params, req, runtime), new UpdateOperationPermissionResponse({}));
  }

  async updateOperationPermission(request: UpdateOperationPermissionRequest): Promise<UpdateOperationPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOperationPermissionWithOptions(request, runtime);
  }

  async updateReportEmailConfigStatusWithOptions(request: UpdateReportEmailConfigStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateReportEmailConfigStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configStatus)) {
      body["ConfigStatus"] = request.configStatus;
    }

    if (!Util.isUnset(request.mailConfigId)) {
      body["MailConfigId"] = request.mailConfigId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateReportEmailConfigStatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateReportEmailConfigStatusResponse>(await this.callApi(params, req, runtime), new UpdateReportEmailConfigStatusResponse({}));
  }

  async updateReportEmailConfigStatus(request: UpdateReportEmailConfigStatusRequest): Promise<UpdateReportEmailConfigStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateReportEmailConfigStatusWithOptions(request, runtime);
  }

  async updateReportSubscriptionWithOptions(request: UpdateReportSubscriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateReportSubscriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dayOfWeek)) {
      body["DayOfWeek"] = request.dayOfWeek;
    }

    if (!Util.isUnset(request.hourOfDay)) {
      body["HourOfDay"] = request.hourOfDay;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.reportName)) {
      body["ReportName"] = request.reportName;
    }

    if (!Util.isUnset(request.subscribe)) {
      body["Subscribe"] = request.subscribe;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateReportSubscription",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateReportSubscriptionResponse>(await this.callApi(params, req, runtime), new UpdateReportSubscriptionResponse({}));
  }

  async updateReportSubscription(request: UpdateReportSubscriptionRequest): Promise<UpdateReportSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateReportSubscriptionWithOptions(request, runtime);
  }

  async updateScenarioWithOptions(request: UpdateScenarioRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScenarioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertSettingId)) {
      query["AlertSettingId"] = request.alertSettingId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScenario",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScenarioResponse>(await this.callApi(params, req, runtime), new UpdateScenarioResponse({}));
  }

  async updateScenario(request: UpdateScenarioRequest): Promise<UpdateScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScenarioWithOptions(request, runtime);
  }

  async updateSceneWithOptions(request: UpdateSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!Util.isUnset(request.metricListJson)) {
      body["MetricListJson"] = request.metricListJson;
    }

    if (!Util.isUnset(request.nodeListJson)) {
      body["NodeListJson"] = request.nodeListJson;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sceneDesc)) {
      body["SceneDesc"] = request.sceneDesc;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sceneName)) {
      body["SceneName"] = request.sceneName;
    }

    if (!Util.isUnset(request.sceneOwner)) {
      body["SceneOwner"] = request.sceneOwner;
    }

    if (!Util.isUnset(request.sceneWebhook)) {
      body["SceneWebhook"] = request.sceneWebhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScene",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneResponse>(await this.callApi(params, req, runtime), new UpdateSceneResponse({}));
  }

  async updateScene(request: UpdateSceneRequest): Promise<UpdateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneWithOptions(request, runtime);
  }

  async updateSceneModelWithOptions(request: UpdateSceneModelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneModelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fcFunctionName)) {
      body["FcFunctionName"] = request.fcFunctionName;
    }

    if (!Util.isUnset(request.fcHandler)) {
      body["FcHandler"] = request.fcHandler;
    }

    if (!Util.isUnset(request.fcInitializer)) {
      body["FcInitializer"] = request.fcInitializer;
    }

    if (!Util.isUnset(request.fcRegionNo)) {
      body["FcRegionNo"] = request.fcRegionNo;
    }

    if (!Util.isUnset(request.fcServiceName)) {
      body["FcServiceName"] = request.fcServiceName;
    }

    if (!Util.isUnset(request.modelDesc)) {
      body["ModelDesc"] = request.modelDesc;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelLanguage)) {
      body["ModelLanguage"] = request.modelLanguage;
    }

    if (!Util.isUnset(request.modelMemo)) {
      body["ModelMemo"] = request.modelMemo;
    }

    if (!Util.isUnset(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!Util.isUnset(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.rootCauseDesc)) {
      body["RootCauseDesc"] = request.rootCauseDesc;
    }

    if (!Util.isUnset(request.rootCauseSolution)) {
      body["RootCauseSolution"] = request.rootCauseSolution;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSceneModel",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneModelResponse>(await this.callApi(params, req, runtime), new UpdateSceneModelResponse({}));
  }

  async updateSceneModel(request: UpdateSceneModelRequest): Promise<UpdateSceneModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneModelWithOptions(request, runtime);
  }

  async updateSceneModelApplyWithOptions(request: UpdateSceneModelApplyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneModelApplyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applyContent)) {
      body["ApplyContent"] = request.applyContent;
    }

    if (!Util.isUnset(request.applyId)) {
      body["ApplyId"] = request.applyId;
    }

    if (!Util.isUnset(request.applyStatus)) {
      body["ApplyStatus"] = request.applyStatus;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSceneModelApply",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneModelApplyResponse>(await this.callApi(params, req, runtime), new UpdateSceneModelApplyResponse({}));
  }

  async updateSceneModelApply(request: UpdateSceneModelApplyRequest): Promise<UpdateSceneModelApplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneModelApplyWithOptions(request, runtime);
  }

  async updateSceneModelCurVersionWithOptions(request: UpdateSceneModelCurVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneModelCurVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extId)) {
      body["ExtId"] = request.extId;
    }

    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSceneModelCurVersion",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneModelCurVersionResponse>(await this.callApi(params, req, runtime), new UpdateSceneModelCurVersionResponse({}));
  }

  async updateSceneModelCurVersion(request: UpdateSceneModelCurVersionRequest): Promise<UpdateSceneModelCurVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneModelCurVersionWithOptions(request, runtime);
  }

  async updateSceneSystemModelStatusWithOptions(request: UpdateSceneSystemModelStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSceneSystemModelStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modelId)) {
      body["ModelId"] = request.modelId;
    }

    if (!Util.isUnset(request.modelStatus)) {
      body["ModelStatus"] = request.modelStatus;
    }

    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSceneSystemModelStatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSceneSystemModelStatusResponse>(await this.callApi(params, req, runtime), new UpdateSceneSystemModelStatusResponse({}));
  }

  async updateSceneSystemModelStatus(request: UpdateSceneSystemModelStatusRequest): Promise<UpdateSceneSystemModelStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSceneSystemModelStatusWithOptions(request, runtime);
  }

  async updateScenestatusWithOptions(request: UpdateScenestatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScenestatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScenestatus",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScenestatusResponse>(await this.callApi(params, req, runtime), new UpdateScenestatusResponse({}));
  }

  async updateScenestatus(request: UpdateScenestatusRequest): Promise<UpdateScenestatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScenestatusWithOptions(request, runtime);
  }

  async updateScriptWithOptions(request: UpdateScriptRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.handleSuggestDesc)) {
      query["HandleSuggestDesc"] = request.handleSuggestDesc;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.operaUid)) {
      query["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.rootCauseDesc)) {
      query["RootCauseDesc"] = request.rootCauseDesc;
    }

    if (!Util.isUnset(request.rootCausesLog)) {
      query["RootCausesLog"] = request.rootCausesLog;
    }

    if (!Util.isUnset(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.script)) {
      query["Script"] = request.script;
    }

    if (!Util.isUnset(request.scriptLanguage)) {
      query["ScriptLanguage"] = request.scriptLanguage;
    }

    if (!Util.isUnset(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateScript",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateScriptResponse>(await this.callApi(params, req, runtime), new UpdateScriptResponse({}));
  }

  async updateScript(request: UpdateScriptRequest): Promise<UpdateScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScriptWithOptions(request, runtime);
  }

  async updateStatusOfSceneWithOptions(request: UpdateStatusOfSceneRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStatusOfSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.operaUid)) {
      body["OperaUid"] = request.operaUid;
    }

    if (!Util.isUnset(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!Util.isUnset(request.sceneStatus)) {
      body["SceneStatus"] = request.sceneStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStatusOfScene",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStatusOfSceneResponse>(await this.callApi(params, req, runtime), new UpdateStatusOfSceneResponse({}));
  }

  async updateStatusOfScene(request: UpdateStatusOfSceneRequest): Promise<UpdateStatusOfSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStatusOfSceneWithOptions(request, runtime);
  }

  async updateTagInfoWithOptions(request: UpdateTagInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTagInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTagInfo",
      version: "2020-08-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTagInfoResponse>(await this.callApi(params, req, runtime), new UpdateTagInfoResponse({}));
  }

  async updateTagInfo(request: UpdateTagInfoRequest): Promise<UpdateTagInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTagInfoWithOptions(request, runtime);
  }

}
