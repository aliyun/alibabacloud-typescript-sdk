// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateProjectRequest extends $tea.Model {
  projectName?: string;
  modelId?: string;
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      modelId: 'ModelId',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      modelId: 'string',
      projectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  requestId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectId: 'string',
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

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployServiceRequest extends $tea.Model {
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

export class DeployServiceResponseBody extends $tea.Model {
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

export class DeployServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectRequest extends $tea.Model {
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

export class DescribeProjectResponseBody extends $tea.Model {
  questionCount?: number;
  deployAvailable?: string;
  modelName?: string;
  requestId?: string;
  projectName?: string;
  createTime?: number;
  projectId?: string;
  onlineServiceStatus?: string;
  deployTime?: number;
  projectType?: string;
  dataStatus?: string;
  modelId?: string;
  testServiceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      questionCount: 'QuestionCount',
      deployAvailable: 'DeployAvailable',
      modelName: 'ModelName',
      requestId: 'RequestId',
      projectName: 'ProjectName',
      createTime: 'CreateTime',
      projectId: 'ProjectId',
      onlineServiceStatus: 'OnlineServiceStatus',
      deployTime: 'DeployTime',
      projectType: 'ProjectType',
      dataStatus: 'DataStatus',
      modelId: 'ModelId',
      testServiceStatus: 'TestServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      questionCount: 'number',
      deployAvailable: 'string',
      modelName: 'string',
      requestId: 'string',
      projectName: 'string',
      createTime: 'number',
      projectId: 'string',
      onlineServiceStatus: 'string',
      deployTime: 'number',
      projectType: 'string',
      dataStatus: 'string',
      modelId: 'string',
      testServiceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultRequest extends $tea.Model {
  projectId?: string;
  question?: string;
  topK?: number;
  traceTag?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      question: 'Question',
      topK: 'TopK',
      traceTag: 'TraceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      question: 'string',
      topK: 'number',
      traceTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponseBody extends $tea.Model {
  trace?: string;
  costTime?: number;
  topK?: number;
  requestId?: string;
  traceTag?: string;
  projectId?: string;
  question?: string;
  predictResults?: GetPredictResultResponseBodyPredictResults[];
  static names(): { [key: string]: string } {
    return {
      trace: 'Trace',
      costTime: 'CostTime',
      topK: 'TopK',
      requestId: 'RequestId',
      traceTag: 'TraceTag',
      projectId: 'ProjectId',
      question: 'Question',
      predictResults: 'PredictResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trace: 'string',
      costTime: 'number',
      topK: 'number',
      requestId: 'string',
      traceTag: 'string',
      projectId: 'string',
      question: 'string',
      predictResults: { 'type': 'array', 'itemType': GetPredictResultResponseBodyPredictResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPredictResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPredictResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  filterParam?: string;
  pageNumber?: number;
  pageSize?: number;
  projectType?: string;
  static names(): { [key: string]: string } {
    return {
      filterParam: 'FilterParam',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectType: 'ProjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterParam: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  projects?: ListProjectsResponseBodyProjects[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      projects: 'Projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifiyProjectRequest extends $tea.Model {
  projectId?: string;
  modelId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      modelId: 'ModelId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      modelId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifiyProjectResponseBody extends $tea.Model {
  requestId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifiyProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifiyProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifiyProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDictionaryRequest extends $tea.Model {
  projectId?: string;
  dictionaryFileUrl?: string;
  dictionaryData?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      dictionaryFileUrl: 'DictionaryFileUrl',
      dictionaryData: 'DictionaryData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      dictionaryFileUrl: 'string',
      dictionaryData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDictionaryResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  projectId?: string;
  fileDataCount?: number;
  jsonDataCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      projectId: 'ProjectId',
      fileDataCount: 'FileDataCount',
      jsonDataCount: 'JsonDataCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      projectId: 'string',
      fileDataCount: 'number',
      jsonDataCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDictionaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadDictionaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadDictionaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentRequest extends $tea.Model {
  projectId?: string;
  documentFileUrl?: string;
  documentData?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      documentFileUrl: 'DocumentFileUrl',
      documentData: 'DocumentData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      documentFileUrl: 'string',
      documentData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  projectId?: string;
  fileDataCount?: number;
  jsonDataCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      projectId: 'ProjectId',
      fileDataCount: 'FileDataCount',
      jsonDataCount: 'JsonDataCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      projectId: 'string',
      fileDataCount: 'number',
      jsonDataCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDocumentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadDocumentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPredictResultResponseBodyPredictResults extends $tea.Model {
  answer?: string;
  questionId?: string;
  rank?: number;
  score?: number;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      questionId: 'QuestionId',
      rank: 'Rank',
      score: 'Score',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      questionId: 'string',
      rank: 'number',
      score: 'number',
      question: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  deployAvailable?: string;
  createTime?: number;
  projectName?: string;
  projectId?: string;
  questionCount?: number;
  deployTime?: number;
  projectType?: string;
  onlineServiceStatus?: string;
  testServiceStatus?: string;
  modelName?: string;
  dataStatus?: string;
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      deployAvailable: 'DeployAvailable',
      createTime: 'CreateTime',
      projectName: 'ProjectName',
      projectId: 'ProjectId',
      questionCount: 'QuestionCount',
      deployTime: 'DeployTime',
      projectType: 'ProjectType',
      onlineServiceStatus: 'OnlineServiceStatus',
      testServiceStatus: 'TestServiceStatus',
      modelName: 'ModelName',
      dataStatus: 'DataStatus',
      modelId: 'ModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployAvailable: 'string',
      createTime: 'number',
      projectName: 'string',
      projectId: 'string',
      questionCount: 'number',
      deployTime: 'number',
      projectType: 'string',
      onlineServiceStatus: 'string',
      testServiceStatus: 'string',
      modelName: 'string',
      dataStatus: 'string',
      modelId: 'string',
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
    this._endpoint = this.getEndpoint("iqa", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectResponse>(await this.doRPCRequest("DeleteProject", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async deployServiceWithOptions(request: DeployServiceRequest, runtime: $Util.RuntimeOptions): Promise<DeployServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployServiceResponse>(await this.doRPCRequest("DeployService", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new DeployServiceResponse({}));
  }

  async deployService(request: DeployServiceRequest): Promise<DeployServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployServiceWithOptions(request, runtime);
  }

  async describeProjectWithOptions(request: DescribeProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProjectResponse>(await this.doRPCRequest("DescribeProject", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProjectResponse({}));
  }

  async describeProject(request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectWithOptions(request, runtime);
  }

  async getPredictResultWithOptions(request: GetPredictResultRequest, runtime: $Util.RuntimeOptions): Promise<GetPredictResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPredictResultResponse>(await this.doRPCRequest("GetPredictResult", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetPredictResultResponse({}));
  }

  async getPredictResult(request: GetPredictResultRequest): Promise<GetPredictResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPredictResultWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectsResponse>(await this.doRPCRequest("ListProjects", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async modifiyProjectWithOptions(request: ModifiyProjectRequest, runtime: $Util.RuntimeOptions): Promise<ModifiyProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifiyProjectResponse>(await this.doRPCRequest("ModifiyProject", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new ModifiyProjectResponse({}));
  }

  async modifiyProject(request: ModifiyProjectRequest): Promise<ModifiyProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifiyProjectWithOptions(request, runtime);
  }

  async uploadDictionaryWithOptions(request: UploadDictionaryRequest, runtime: $Util.RuntimeOptions): Promise<UploadDictionaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadDictionaryResponse>(await this.doRPCRequest("UploadDictionary", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new UploadDictionaryResponse({}));
  }

  async uploadDictionary(request: UploadDictionaryRequest): Promise<UploadDictionaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDictionaryWithOptions(request, runtime);
  }

  async uploadDocumentWithOptions(request: UploadDocumentRequest, runtime: $Util.RuntimeOptions): Promise<UploadDocumentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadDocumentResponse>(await this.doRPCRequest("UploadDocument", "2019-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new UploadDocumentResponse({}));
  }

  async uploadDocument(request: UploadDocumentRequest): Promise<UploadDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadDocumentWithOptions(request, runtime);
  }

}
