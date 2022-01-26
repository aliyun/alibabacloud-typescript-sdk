// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateComputeTaskRequest extends $tea.Model {
  algorithmCodeList?: string;
  deviceCodeList?: string;
  projectId?: string;
  regionId?: string;
  taskName?: string;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmCodeList: 'AlgorithmCodeList',
      deviceCodeList: 'DeviceCodeList',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      taskName: 'TaskName',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmCodeList: 'string',
      deviceCodeList: 'string',
      projectId: 'string',
      regionId: 'string',
      taskName: 'string',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskResponseBody extends $tea.Model {
  code?: string;
  data?: CreateComputeTaskResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateComputeTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateComputeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateComputeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  areaCode?: string;
  projectName?: string;
  regionId?: string;
  timeZoneCode?: string;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      areaCode: 'AreaCode',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      timeZoneCode: 'TimeZoneCode',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaCode: 'string',
      projectName: 'string',
      regionId: 'string',
      timeZoneCode: 'string',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  code?: string;
  data?: CreateProjectResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeTasksRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  searchKey?: string;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      searchKey: 'string',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeTasksResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeComputeTasksResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeComputeTasksResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeComputeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeComputeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesRequest extends $tea.Model {
  filterKey?: string;
  pageNum?: number;
  pageSize?: number;
  projectId?: string;
  regionId?: string;
  searchKey?: string;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      pageNum: 'number',
      pageSize: 'number',
      projectId: 'string',
      regionId: 'string',
      searchKey: 'string',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeDevicesResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  projectName?: string;
  regionId?: string;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      projectName: 'string',
      regionId: 'string',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeProjectsResponseBodyData[];
  message?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeProjectsResponseBodyData },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchResultsRequest extends $tea.Model {
  algorithmType?: string;
  beginTime?: string;
  deviceList?: string;
  endTime?: string;
  pageNum?: number;
  pictureContents?: string;
  regionId?: string;
  topNum?: number;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmType: 'AlgorithmType',
      beginTime: 'BeginTime',
      deviceList: 'DeviceList',
      endTime: 'EndTime',
      pageNum: 'PageNum',
      pictureContents: 'PictureContents',
      regionId: 'RegionId',
      topNum: 'TopNum',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmType: 'string',
      beginTime: 'string',
      deviceList: 'string',
      endTime: 'string',
      pageNum: 'number',
      pictureContents: 'string',
      regionId: 'string',
      topNum: 'number',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchResultsResponseBody extends $tea.Model {
  code?: string;
  data?: GetPictureSearchResultsResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetPictureSearchResultsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPictureSearchResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPictureSearchResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDevicesRequest extends $tea.Model {
  deviceList?: string;
  projectId?: string;
  regionId?: string;
  vcsId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceList: 'DeviceList',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      vcsId: 'VcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceList: 'string',
      projectId: 'string',
      regionId: 'string',
      vcsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDevicesResponseBody extends $tea.Model {
  code?: string;
  data?: ImportDevicesResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportDevicesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeTaskResponseBodyData extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyData extends $tea.Model {
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

export class DescribeComputeTasksResponseBodyData extends $tea.Model {
  algorithmName?: string;
  deviceNum?: number;
  imageSize?: number;
  runtime?: string;
  structuredSize?: number;
  taskId?: string;
  taskName?: string;
  taskStatus?: string;
  vectorSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      deviceNum: 'DeviceNum',
      imageSize: 'ImageSize',
      runtime: 'Runtime',
      structuredSize: 'StructuredSize',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      vectorSize: 'VectorSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      deviceNum: 'number',
      imageSize: 'number',
      runtime: 'string',
      structuredSize: 'number',
      taskId: 'string',
      taskName: 'string',
      taskStatus: 'string',
      vectorSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyData extends $tea.Model {
  deviceCode?: string;
  deviceId?: string;
  deviceName?: string;
  deviceType?: string;
  frameRate?: string;
  imageSize?: number;
  location?: string;
  owner?: string;
  pullStreamStatus?: string;
  realTimeDataRate?: string;
  structuredSize?: number;
  vectorSize?: number;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      frameRate: 'FrameRate',
      imageSize: 'ImageSize',
      location: 'Location',
      owner: 'Owner',
      pullStreamStatus: 'PullStreamStatus',
      realTimeDataRate: 'RealTimeDataRate',
      structuredSize: 'StructuredSize',
      vectorSize: 'VectorSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      frameRate: 'string',
      imageSize: 'number',
      location: 'string',
      owner: 'string',
      pullStreamStatus: 'string',
      realTimeDataRate: 'string',
      structuredSize: 'number',
      vectorSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectsResponseBodyData extends $tea.Model {
  algorithmName?: string;
  gbId?: string;
  gbIp?: string;
  gbPort?: string;
  imageSize?: number;
  packagePattern?: string;
  projectCode?: string;
  projectId?: string;
  projectName?: string;
  protocol?: string;
  status?: string;
  structuredSize?: number;
  vectorSize?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      gbId: 'GbId',
      gbIp: 'GbIp',
      gbPort: 'GbPort',
      imageSize: 'ImageSize',
      packagePattern: 'PackagePattern',
      projectCode: 'ProjectCode',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      protocol: 'Protocol',
      status: 'Status',
      structuredSize: 'StructuredSize',
      vectorSize: 'VectorSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      gbId: 'string',
      gbIp: 'string',
      gbPort: 'string',
      imageSize: 'number',
      packagePattern: 'string',
      projectCode: 'string',
      projectId: 'string',
      projectName: 'string',
      protocol: 'string',
      status: 'string',
      structuredSize: 'number',
      vectorSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPictureSearchResultsResponseBodyData extends $tea.Model {
  deviceId?: string;
  leftUpperCornerXCoordinate?: string;
  leftUpperCornerYCoordinate?: string;
  locationMarkTime?: string;
  pictureId1?: string;
  pictureId2?: string;
  pictureUrl1?: string;
  pictureUrl2?: string;
  rightLowerCornerXCoordinate?: string;
  rightLowerCornerYCoordinate?: string;
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      leftUpperCornerXCoordinate: 'LeftUpperCornerXCoordinate',
      leftUpperCornerYCoordinate: 'LeftUpperCornerYCoordinate',
      locationMarkTime: 'LocationMarkTime',
      pictureId1: 'PictureId1',
      pictureId2: 'PictureId2',
      pictureUrl1: 'PictureUrl1',
      pictureUrl2: 'PictureUrl2',
      rightLowerCornerXCoordinate: 'RightLowerCornerXCoordinate',
      rightLowerCornerYCoordinate: 'RightLowerCornerYCoordinate',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      leftUpperCornerXCoordinate: 'string',
      leftUpperCornerYCoordinate: 'string',
      locationMarkTime: 'string',
      pictureId1: 'string',
      pictureId2: 'string',
      pictureUrl1: 'string',
      pictureUrl2: 'string',
      rightLowerCornerXCoordinate: 'string',
      rightLowerCornerYCoordinate: 'string',
      similarity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDevicesResponseBodyDataFailure extends $tea.Model {
  deviceCode?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDevicesResponseBodyDataSuccess extends $tea.Model {
  deviceCode?: string;
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCode: 'DeviceCode',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCode: 'string',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportDevicesResponseBodyData extends $tea.Model {
  failure?: ImportDevicesResponseBodyDataFailure[];
  success?: ImportDevicesResponseBodyDataSuccess[];
  static names(): { [key: string]: string } {
    return {
      failure: 'Failure',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: { 'type': 'array', 'itemType': ImportDevicesResponseBodyDataFailure },
      success: { 'type': 'array', 'itemType': ImportDevicesResponseBodyDataSuccess },
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vcs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createComputeTaskWithOptions(request: CreateComputeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateComputeTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithmCodeList)) {
      query["AlgorithmCodeList"] = request.algorithmCodeList;
    }

    if (!Util.isUnset(request.deviceCodeList)) {
      query["DeviceCodeList"] = request.deviceCodeList;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateComputeTask",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateComputeTaskResponse>(await this.callApi(params, req, runtime), new CreateComputeTaskResponse({}));
  }

  async createComputeTask(request: CreateComputeTaskRequest): Promise<CreateComputeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createComputeTaskWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeZoneCode)) {
      query["TimeZoneCode"] = request.timeZoneCode;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async describeComputeTasksWithOptions(request: DescribeComputeTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComputeTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComputeTasks",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComputeTasksResponse>(await this.callApi(params, req, runtime), new DescribeComputeTasksResponse({}));
  }

  async describeComputeTasks(request: DescribeComputeTasksRequest): Promise<DescribeComputeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComputeTasksWithOptions(request, runtime);
  }

  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDevices",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDevicesResponse>(await this.callApi(params, req, runtime), new DescribeDevicesResponse({}));
  }

  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  async describeProjectsWithOptions(request: DescribeProjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjects",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectsResponse>(await this.callApi(params, req, runtime), new DescribeProjectsResponse({}));
  }

  async describeProjects(request: DescribeProjectsRequest): Promise<DescribeProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectsWithOptions(request, runtime);
  }

  async getPictureSearchResultsWithOptions(request: GetPictureSearchResultsRequest, runtime: $Util.RuntimeOptions): Promise<GetPictureSearchResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithmType)) {
      query["AlgorithmType"] = request.algorithmType;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.deviceList)) {
      query["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pictureContents)) {
      query["PictureContents"] = request.pictureContents;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.topNum)) {
      query["TopNum"] = request.topNum;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPictureSearchResults",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPictureSearchResultsResponse>(await this.callApi(params, req, runtime), new GetPictureSearchResultsResponse({}));
  }

  async getPictureSearchResults(request: GetPictureSearchResultsRequest): Promise<GetPictureSearchResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPictureSearchResultsWithOptions(request, runtime);
  }

  async importDevicesWithOptions(request: ImportDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ImportDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deviceList)) {
      query["DeviceList"] = request.deviceList;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vcsId)) {
      query["VcsId"] = request.vcsId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportDevices",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportDevicesResponse>(await this.callApi(params, req, runtime), new ImportDevicesResponse({}));
  }

  async importDevices(request: ImportDevicesRequest): Promise<ImportDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importDevicesWithOptions(request, runtime);
  }

}
