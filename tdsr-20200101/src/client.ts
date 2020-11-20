// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class SaveHotspotConfigRequest extends $tea.Model {
  paramTag?: string;
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotConfigRequest extends $tea.Model {
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: string;
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: 'string',
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainScenesRequest extends $tea.Model {
  queryName?: string;
  static names(): { [key: string]: string } {
    return {
      queryName: 'QueryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMainScenesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: string;
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: 'string',
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagRequest extends $tea.Model {
  paramTag?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveHotspotTagResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListRequest extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneListResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFileRequest extends $tea.Model {
  paramFile?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramFile: 'ParamFile',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramFile: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: string;
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: 'string',
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileRequest extends $tea.Model {
  paramFile?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramFile: 'ParamFile',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramFile: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTagRequest extends $tea.Model {
  previewToken?: string;
  subSceneUuid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
      subSceneUuid: 'SubSceneUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
      subSceneUuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTagResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: string;
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: 'string',
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyRequest extends $tea.Model {
  subSceneUuid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      subSceneUuid: 'SubSceneUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subSceneUuid: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: { [key: string]: any };
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHotspotRequest extends $tea.Model {
  paramTag?: string;
  subSceneUuid?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      subSceneUuid: 'SubSceneUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
      subSceneUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishHotspotResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWindowConfigRequest extends $tea.Model {
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWindowConfigResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: { [key: string]: any };
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneDataRequest extends $tea.Model {
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSceneDataResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: { [key: string]: any };
  objectString: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
      objectString: 'ObjectString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      objectString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPermissionRequest extends $tea.Model {
  aliyunId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPermissionResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceRequest extends $tea.Model {
  country: string;
  interrupt?: boolean;
  invoker: string;
  pk: string;
  bid: string;
  hid: number;
  taskIdentifier: string;
  taskExtraData: string;
  gmtWakeup: string;
  success?: boolean;
  message?: string;
  level?: number;
  url?: string;
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      success: 'Success',
      message: 'Message',
      level: 'Level',
      url: 'Url',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      interrupt: 'boolean',
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      success: 'boolean',
      message: 'string',
      level: 'number',
      url: 'string',
      prompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckResourceResponse extends $tea.Model {
  interrupt: boolean;
  invoker: string;
  pk: string;
  bid: string;
  hid: number;
  country: string;
  taskIdentifier: string;
  taskExtraData: string;
  gmtWakeup: string;
  success: boolean;
  message: string;
  level: number;
  url: string;
  prompt: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      country: 'Country',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      success: 'Success',
      message: 'Message',
      level: 'Level',
      url: 'Url',
      prompt: 'Prompt',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interrupt: 'boolean',
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      country: 'string',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      success: 'boolean',
      message: 'string',
      level: 'number',
      url: 'string',
      prompt: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneRequest extends $tea.Model {
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSceneResponse extends $tea.Model {
  requestId: string;
  sceneId: number;
  success: boolean;
  errMessage: string;
  previewToken: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneId: 'SceneId',
      success: 'Success',
      errMessage: 'ErrMessage',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneId: 'number',
      success: 'boolean',
      errMessage: 'string',
      previewToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  name?: string;
  businessId?: string;
  businessUserIdList?: string;
  gatherUserIdList?: string;
  builderUserIdList?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      businessId: 'BusinessId',
      businessUserIdList: 'BusinessUserIdList',
      gatherUserIdList: 'GatherUserIdList',
      builderUserIdList: 'BuilderUserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      businessId: 'string',
      businessUserIdList: 'string',
      gatherUserIdList: 'string',
      builderUserIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  requestId: string;
  id: number;
  name: string;
  success: boolean;
  errMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      id: 'Id',
      name: 'Name',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      id: 'number',
      name: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesRequest extends $tea.Model {
  projectId?: string;
  isPublishQuery?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      isPublishQuery: 'IsPublishQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      isPublishQuery: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  errMessage: string;
  data: ListScenesResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      errMessage: 'ErrMessage',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      errMessage: 'string',
      data: { 'type': 'array', 'itemType': ListScenesResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenesResponseData extends $tea.Model {
  sceneId: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "lyj.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tdsr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async saveHotspotConfigWithOptions(request: SaveHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveHotspotConfigResponse>(await this.doRequest("SaveHotspotConfig", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new SaveHotspotConfigResponse({}));
  }

  async saveHotspotConfig(request: SaveHotspotConfigRequest): Promise<SaveHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotConfigWithOptions(request, runtime);
  }

  async getHotspotConfigWithOptions(request: GetHotspotConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<GetHotspotConfigResponse>(await this.doRequest("GetHotspotConfig", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetHotspotConfigResponse({}));
  }

  async getHotspotConfig(request: GetHotspotConfigRequest): Promise<GetHotspotConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotConfigWithOptions(request, runtime);
  }

  async listMainScenesWithOptions(request: ListMainScenesRequest, runtime: $Util.RuntimeOptions): Promise<ListMainScenesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMainScenesResponse>(await this.doRequest("ListMainScenes", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new ListMainScenesResponse({}));
  }

  async listMainScenes(request: ListMainScenesRequest): Promise<ListMainScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMainScenesWithOptions(request, runtime);
  }

  async saveHotspotTagWithOptions(request: SaveHotspotTagRequest, runtime: $Util.RuntimeOptions): Promise<SaveHotspotTagResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveHotspotTagResponse>(await this.doRequest("SaveHotspotTag", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new SaveHotspotTagResponse({}));
  }

  async saveHotspotTag(request: SaveHotspotTagRequest): Promise<SaveHotspotTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveHotspotTagWithOptions(request, runtime);
  }

  async getSceneListWithOptions(request: GetSceneListRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneListResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSceneListResponse>(await this.doRequest("GetSceneList", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetSceneListResponse({}));
  }

  async getSceneList(request: GetSceneListRequest): Promise<GetSceneListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneListWithOptions(request, runtime);
  }

  async saveFileWithOptions(request: SaveFileRequest, runtime: $Util.RuntimeOptions): Promise<SaveFileResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveFileResponse>(await this.doRequest("SaveFile", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new SaveFileResponse({}));
  }

  async saveFile(request: SaveFileRequest): Promise<SaveFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveFileWithOptions(request, runtime);
  }

  async deleteFileWithOptions(request: DeleteFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteFileResponse>(await this.doRequest("DeleteFile", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new DeleteFileResponse({}));
  }

  async deleteFile(request: DeleteFileRequest): Promise<DeleteFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  async getHotspotTagWithOptions(request: GetHotspotTagRequest, runtime: $Util.RuntimeOptions): Promise<GetHotspotTagResponse> {
    Util.validateModel(request);
    return $tea.cast<GetHotspotTagResponse>(await this.doRequest("GetHotspotTag", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetHotspotTagResponse({}));
  }

  async getHotspotTag(request: GetHotspotTagRequest): Promise<GetHotspotTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHotspotTagWithOptions(request, runtime);
  }

  async getPolicyWithOptions(request: GetPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPolicyResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPolicyResponse>(await this.doRequest("GetPolicy", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetPolicyResponse({}));
  }

  async getPolicy(request: GetPolicyRequest): Promise<GetPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPolicyWithOptions(request, runtime);
  }

  async publishHotspotWithOptions(request: PublishHotspotRequest, runtime: $Util.RuntimeOptions): Promise<PublishHotspotResponse> {
    Util.validateModel(request);
    return $tea.cast<PublishHotspotResponse>(await this.doRequest("PublishHotspot", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new PublishHotspotResponse({}));
  }

  async publishHotspot(request: PublishHotspotRequest): Promise<PublishHotspotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishHotspotWithOptions(request, runtime);
  }

  async getWindowConfigWithOptions(request: GetWindowConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetWindowConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<GetWindowConfigResponse>(await this.doRequest("GetWindowConfig", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetWindowConfigResponse({}));
  }

  async getWindowConfig(request: GetWindowConfigRequest): Promise<GetWindowConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWindowConfigWithOptions(request, runtime);
  }

  async getSceneDataWithOptions(request: GetSceneDataRequest, runtime: $Util.RuntimeOptions): Promise<GetSceneDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSceneDataResponse>(await this.doRequest("GetSceneData", "HTTPS", "POST", "2020-01-01", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new GetSceneDataResponse({}));
  }

  async getSceneData(request: GetSceneDataRequest): Promise<GetSceneDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSceneDataWithOptions(request, runtime);
  }

  async checkPermissionWithOptions(request: CheckPermissionRequest, runtime: $Util.RuntimeOptions): Promise<CheckPermissionResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckPermissionResponse>(await this.doRequest("CheckPermission", "HTTPS", "POST", "2020-01-01", "AK", null, $tea.toMap(request), runtime), new CheckPermissionResponse({}));
  }

  async checkPermission(request: CheckPermissionRequest): Promise<CheckPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkPermissionWithOptions(request, runtime);
  }

  async checkResourceWithOptions(request: CheckResourceRequest, runtime: $Util.RuntimeOptions): Promise<CheckResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckResourceResponse>(await this.doRequest("CheckResource", "HTTPS", "POST", "2020-01-01", "AK", null, $tea.toMap(request), runtime), new CheckResourceResponse({}));
  }

  async checkResource(request: CheckResourceRequest): Promise<CheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkResourceWithOptions(request, runtime);
  }

  async createSceneWithOptions(request: CreateSceneRequest, runtime: $Util.RuntimeOptions): Promise<CreateSceneResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSceneResponse>(await this.doRequest("CreateScene", "HTTPS", "POST", "2020-01-01", "AK", null, $tea.toMap(request), runtime), new CreateSceneResponse({}));
  }

  async createScene(request: CreateSceneRequest): Promise<CreateSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSceneWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateProjectResponse>(await this.doRequest("CreateProject", "HTTPS", "POST", "2020-01-01", "AK", null, $tea.toMap(request), runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProjectResponse>(await this.doRequest("DeleteProject", "HTTPS", "POST", "2020-01-01", "AK", null, $tea.toMap(request), runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async listScenesWithOptions(request: ListScenesRequest, runtime: $Util.RuntimeOptions): Promise<ListScenesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListScenesResponse>(await this.doRequest("ListScenes", "HTTPS", "POST", "2020-01-01", "AK", null, $tea.toMap(request), runtime), new ListScenesResponse({}));
  }

  async listScenes(request: ListScenesRequest): Promise<ListScenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenesWithOptions(request, runtime);
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

}
