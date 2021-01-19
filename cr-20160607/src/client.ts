// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelRepoBuildResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageLayerResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageManifestRequest extends $tea.Model {
  schemaVersion?: number;
  static names(): { [key: string]: string } {
    return {
      schemaVersion: 'SchemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageManifestResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceListRequest extends $tea.Model {
  status?: string;
  authorize?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      authorize: 'Authorize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      authorize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionRequest extends $tea.Model {
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionListResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildListRequest extends $tea.Model {
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildListResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRuleListResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoListRequest extends $tea.Model {
  status?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoListByNamespaceRequest extends $tea.Model {
  status?: string;
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoListByNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagResponseBody extends $tea.Model {
  imageUpdate?: number;
  imageId?: string;
  requestId?: string;
  digest?: string;
  imageSize?: number;
  tag?: string;
  imageCreate?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      imageUpdate: 'imageUpdate',
      imageId: 'imageId',
      requestId: 'requestId',
      digest: 'digest',
      imageSize: 'imageSize',
      tag: 'tag',
      imageCreate: 'imageCreate',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUpdate: 'number',
      imageId: 'string',
      requestId: 'string',
      digest: 'string',
      imageSize: 'number',
      tag: 'string',
      imageCreate: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRepoTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagsRequest extends $tea.Model {
  page?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanListRequest extends $tea.Model {
  page?: number;
  pageSize?: number;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      severity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanListResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartImageScanResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRepoBuildByRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoWebhookResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    this._endpoint = this.getEndpoint("cr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelRepoBuild(RepoNamespace: string, RepoName: string, BuildId: string): Promise<CancelRepoBuildResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRepoBuildWithOptions(RepoNamespace, RepoName, BuildId, headers, runtime);
  }

  async cancelRepoBuildWithOptions(RepoNamespace: string, RepoName: string, BuildId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelRepoBuildResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CancelRepoBuildResponse>(await this.doROARequest("CancelRepoBuild", "2016-06-07", "HTTPS", "POST", "AK", `/repos/${RepoNamespace}/{RepoName}/build/{BuildId}/cancel`, "none", req, runtime), new CancelRepoBuildResponse({}));
  }

  async createNamespace(): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNamespaceWithOptions(headers, runtime);
  }

  async createNamespaceWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateNamespaceResponse>(await this.doROARequest("CreateNamespace", "2016-06-07", "HTTPS", "PUT", "AK", `/namespace`, "none", req, runtime), new CreateNamespaceResponse({}));
  }

  async createRepo(): Promise<CreateRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepoWithOptions(headers, runtime);
  }

  async createRepoWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateRepoResponse>(await this.doROARequest("CreateRepo", "2016-06-07", "HTTPS", "PUT", "AK", `/repos`, "none", req, runtime), new CreateRepoResponse({}));
  }

  async createRepoBuildRule(RepoNamespace: string, RepoName: string): Promise<CreateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepoBuildRuleWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async createRepoBuildRuleWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepoBuildRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateRepoBuildRuleResponse>(await this.doROARequest("CreateRepoBuildRule", "2016-06-07", "HTTPS", "PUT", "AK", `/repos/${RepoNamespace}/{RepoName}/rules`, "none", req, runtime), new CreateRepoBuildRuleResponse({}));
  }

  async createRepoWebhook(RepoNamespace: string, RepoName: string): Promise<CreateRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepoWebhookWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async createRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepoWebhookResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateRepoWebhookResponse>(await this.doROARequest("CreateRepoWebhook", "2016-06-07", "HTTPS", "PUT", "AK", `/repos/${RepoNamespace}/{RepoName}/webhooks`, "none", req, runtime), new CreateRepoWebhookResponse({}));
  }

  async createUserInfo(): Promise<CreateUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserInfoWithOptions(headers, runtime);
  }

  async createUserInfoWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUserInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<CreateUserInfoResponse>(await this.doROARequest("CreateUserInfo", "2016-06-07", "HTTPS", "PUT", "AK", `/users`, "none", req, runtime), new CreateUserInfoResponse({}));
  }

  async deleteImage(RepoNamespace: string, RepoName: string, Tag: string): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteImageWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async deleteImageWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteImageResponse>(await this.doROARequest("DeleteImage", "2016-06-07", "HTTPS", "DELETE", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}`, "none", req, runtime), new DeleteImageResponse({}));
  }

  async deleteNamespace(Namespace: string): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(Namespace, headers, runtime);
  }

  async deleteNamespaceWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.doROARequest("DeleteNamespace", "2016-06-07", "HTTPS", "DELETE", "AK", `/namespace/${Namespace}`, "none", req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteRepo(RepoNamespace: string, RepoName: string): Promise<DeleteRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepoWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async deleteRepoWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteRepoResponse>(await this.doROARequest("DeleteRepo", "2016-06-07", "HTTPS", "DELETE", "AK", `/repos/${RepoNamespace}/{RepoName}`, "none", req, runtime), new DeleteRepoResponse({}));
  }

  async deleteRepoBuildRule(RepoNamespace: string, RepoName: string, BuildRuleId: string): Promise<DeleteRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepoBuildRuleWithOptions(RepoNamespace, RepoName, BuildRuleId, headers, runtime);
  }

  async deleteRepoBuildRuleWithOptions(RepoNamespace: string, RepoName: string, BuildRuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepoBuildRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteRepoBuildRuleResponse>(await this.doROARequest("DeleteRepoBuildRule", "2016-06-07", "HTTPS", "DELETE", "AK", `/repos/${RepoNamespace}/{RepoName}/rules/{BuildRuleId}`, "none", req, runtime), new DeleteRepoBuildRuleResponse({}));
  }

  async deleteRepoWebhook(RepoNamespace: string, RepoName: string, WebhookId: string): Promise<DeleteRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepoWebhookWithOptions(RepoNamespace, RepoName, WebhookId, headers, runtime);
  }

  async deleteRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, WebhookId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepoWebhookResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteRepoWebhookResponse>(await this.doROARequest("DeleteRepoWebhook", "2016-06-07", "HTTPS", "DELETE", "AK", `/repos/${RepoNamespace}/{RepoName}/webhooks/{WebhookId}`, "none", req, runtime), new DeleteRepoWebhookResponse({}));
  }

  async getAuthorizationToken(): Promise<GetAuthorizationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAuthorizationTokenWithOptions(headers, runtime);
  }

  async getAuthorizationTokenWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetAuthorizationTokenResponse>(await this.doROARequest("GetAuthorizationToken", "2016-06-07", "HTTPS", "GET", "AK", `/tokens`, "none", req, runtime), new GetAuthorizationTokenResponse({}));
  }

  async getImageLayer(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetImageLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageLayerWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getImageLayerWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageLayerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetImageLayerResponse>(await this.doROARequest("GetImageLayer", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}/layers`, "none", req, runtime), new GetImageLayerResponse({}));
  }

  async getImageManifest(RepoNamespace: string, RepoName: string, Tag: string, request: GetImageManifestRequest): Promise<GetImageManifestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageManifestWithOptions(RepoNamespace, RepoName, Tag, request, headers, runtime);
  }

  async getImageManifestWithOptions(RepoNamespace: string, RepoName: string, Tag: string, request: GetImageManifestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageManifestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetImageManifestResponse>(await this.doROARequest("GetImageManifest", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}/manifest`, "none", req, runtime), new GetImageManifestResponse({}));
  }

  async getNamespace(Namespace: string): Promise<GetNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNamespaceWithOptions(Namespace, headers, runtime);
  }

  async getNamespaceWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNamespaceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetNamespaceResponse>(await this.doROARequest("GetNamespace", "2016-06-07", "HTTPS", "GET", "AK", `/namespace/${Namespace}`, "none", req, runtime), new GetNamespaceResponse({}));
  }

  async getNamespaceList(request: GetNamespaceListRequest): Promise<GetNamespaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNamespaceListWithOptions(request, headers, runtime);
  }

  async getNamespaceListWithOptions(request: GetNamespaceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNamespaceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetNamespaceListResponse>(await this.doROARequest("GetNamespaceList", "2016-06-07", "HTTPS", "GET", "AK", `/namespace`, "none", req, runtime), new GetNamespaceListResponse({}));
  }

  async getRegion(request: GetRegionRequest): Promise<GetRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionWithOptions(request, headers, runtime);
  }

  async getRegionWithOptions(request: GetRegionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRegionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRegionResponse>(await this.doROARequest("GetRegion", "2016-06-07", "HTTPS", "GET", "AK", `/regions`, "none", req, runtime), new GetRegionResponse({}));
  }

  async getRegionList(): Promise<GetRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionListWithOptions(headers, runtime);
  }

  async getRegionListWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRegionListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRegionListResponse>(await this.doROARequest("GetRegionList", "2016-06-07", "HTTPS", "GET", "AK", `/regions`, "none", req, runtime), new GetRegionListResponse({}));
  }

  async getRepo(RepoNamespace: string, RepoName: string): Promise<GetRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async getRepoWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoResponse>(await this.doROARequest("GetRepo", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}`, "none", req, runtime), new GetRepoResponse({}));
  }

  async getRepoBuildList(RepoNamespace: string, RepoName: string, request: GetRepoBuildListRequest): Promise<GetRepoBuildListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoBuildListWithOptions(RepoNamespace, RepoName, request, headers, runtime);
  }

  async getRepoBuildListWithOptions(RepoNamespace: string, RepoName: string, request: GetRepoBuildListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRepoBuildListResponse>(await this.doROARequest("GetRepoBuildList", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/build`, "none", req, runtime), new GetRepoBuildListResponse({}));
  }

  async getRepoBuildRuleList(RepoNamespace: string, RepoName: string): Promise<GetRepoBuildRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoBuildRuleListWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async getRepoBuildRuleListWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildRuleListResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoBuildRuleListResponse>(await this.doROARequest("GetRepoBuildRuleList", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/rules`, "none", req, runtime), new GetRepoBuildRuleListResponse({}));
  }

  async getRepoBuildStatus(RepoNamespace: string, RepoName: string, BuildId: string): Promise<GetRepoBuildStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoBuildStatusWithOptions(RepoNamespace, RepoName, BuildId, headers, runtime);
  }

  async getRepoBuildStatusWithOptions(RepoNamespace: string, RepoName: string, BuildId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoBuildStatusResponse>(await this.doROARequest("GetRepoBuildStatus", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/build/{BuildId}/status`, "none", req, runtime), new GetRepoBuildStatusResponse({}));
  }

  async getRepoList(request: GetRepoListRequest): Promise<GetRepoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoListWithOptions(request, headers, runtime);
  }

  async getRepoListWithOptions(request: GetRepoListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRepoListResponse>(await this.doROARequest("GetRepoList", "2016-06-07", "HTTPS", "GET", "AK", `/repos`, "none", req, runtime), new GetRepoListResponse({}));
  }

  async getRepoListByNamespace(RepoNamespace: string, request: GetRepoListByNamespaceRequest): Promise<GetRepoListByNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoListByNamespaceWithOptions(RepoNamespace, request, headers, runtime);
  }

  async getRepoListByNamespaceWithOptions(RepoNamespace: string, request: GetRepoListByNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoListByNamespaceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRepoListByNamespaceResponse>(await this.doROARequest("GetRepoListByNamespace", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}`, "none", req, runtime), new GetRepoListByNamespaceResponse({}));
  }

  async getRepoTag(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getRepoTagWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoTagResponse>(await this.doROARequest("GetRepoTag", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}`, "json", req, runtime), new GetRepoTagResponse({}));
  }

  async getRepoTags(RepoNamespace: string, RepoName: string, request: GetRepoTagsRequest): Promise<GetRepoTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagsWithOptions(RepoNamespace, RepoName, request, headers, runtime);
  }

  async getRepoTagsWithOptions(RepoNamespace: string, RepoName: string, request: GetRepoTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRepoTagsResponse>(await this.doROARequest("GetRepoTags", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags`, "none", req, runtime), new GetRepoTagsResponse({}));
  }

  async getRepoTagScanList(RepoNamespace: string, RepoName: string, Tag: string, request: GetRepoTagScanListRequest): Promise<GetRepoTagScanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagScanListWithOptions(RepoNamespace, RepoName, Tag, request, headers, runtime);
  }

  async getRepoTagScanListWithOptions(RepoNamespace: string, RepoName: string, Tag: string, request: GetRepoTagScanListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRepoTagScanListResponse>(await this.doROARequest("GetRepoTagScanList", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}/scanResult`, "none", req, runtime), new GetRepoTagScanListResponse({}));
  }

  async getRepoTagScanStatus(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetRepoTagScanStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagScanStatusWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getRepoTagScanStatusWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoTagScanStatusResponse>(await this.doROARequest("GetRepoTagScanStatus", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}/scanStatus`, "none", req, runtime), new GetRepoTagScanStatusResponse({}));
  }

  async getRepoTagScanSummary(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetRepoTagScanSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagScanSummaryWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getRepoTagScanSummaryWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoTagScanSummaryResponse>(await this.doROARequest("GetRepoTagScanSummary", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}/scanCount`, "none", req, runtime), new GetRepoTagScanSummaryResponse({}));
  }

  async getRepoWebhook(RepoNamespace: string, RepoName: string): Promise<GetRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoWebhookWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async getRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoWebhookResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetRepoWebhookResponse>(await this.doROARequest("GetRepoWebhook", "2016-06-07", "HTTPS", "GET", "AK", `/repos/${RepoNamespace}/{RepoName}/webhooks`, "none", req, runtime), new GetRepoWebhookResponse({}));
  }

  async startImageScan(RepoNamespace: string, RepoName: string, Tag: string): Promise<StartImageScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startImageScanWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async startImageScanWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartImageScanResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StartImageScanResponse>(await this.doROARequest("StartImageScan", "2016-06-07", "HTTPS", "PUT", "AK", `/repos/${RepoNamespace}/{RepoName}/tags/{Tag}/scan`, "none", req, runtime), new StartImageScanResponse({}));
  }

  async startRepoBuildByRule(RepoNamespace: string, RepoName: string, BuildRuleId: string): Promise<StartRepoBuildByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startRepoBuildByRuleWithOptions(RepoNamespace, RepoName, BuildRuleId, headers, runtime);
  }

  async startRepoBuildByRuleWithOptions(RepoNamespace: string, RepoName: string, BuildRuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartRepoBuildByRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StartRepoBuildByRuleResponse>(await this.doROARequest("StartRepoBuildByRule", "2016-06-07", "HTTPS", "PUT", "AK", `/repos/${RepoNamespace}/{RepoName}/rules/{BuildRuleId}/build`, "none", req, runtime), new StartRepoBuildByRuleResponse({}));
  }

  async updateNamespace(Namespace: string): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(Namespace, headers, runtime);
  }

  async updateNamespaceWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.doROARequest("UpdateNamespace", "2016-06-07", "HTTPS", "POST", "AK", `/namespace/${Namespace}`, "none", req, runtime), new UpdateNamespaceResponse({}));
  }

  async updateRepo(RepoNamespace: string, RepoName: string): Promise<UpdateRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepoWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async updateRepoWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateRepoResponse>(await this.doROARequest("UpdateRepo", "2016-06-07", "HTTPS", "POST", "AK", `/repos/${RepoNamespace}/{RepoName}`, "none", req, runtime), new UpdateRepoResponse({}));
  }

  async updateRepoBuildRule(RepoNamespace: string, RepoName: string, BuildRuleId: string): Promise<UpdateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepoBuildRuleWithOptions(RepoNamespace, RepoName, BuildRuleId, headers, runtime);
  }

  async updateRepoBuildRuleWithOptions(RepoNamespace: string, RepoName: string, BuildRuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepoBuildRuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateRepoBuildRuleResponse>(await this.doROARequest("UpdateRepoBuildRule", "2016-06-07", "HTTPS", "POST", "AK", `/repos/${RepoNamespace}/{RepoName}/rules/{BuildRuleId}`, "none", req, runtime), new UpdateRepoBuildRuleResponse({}));
  }

  async updateRepoWebhook(RepoNamespace: string, RepoName: string, WebhookId: string): Promise<UpdateRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepoWebhookWithOptions(RepoNamespace, RepoName, WebhookId, headers, runtime);
  }

  async updateRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, WebhookId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepoWebhookResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateRepoWebhookResponse>(await this.doROARequest("UpdateRepoWebhook", "2016-06-07", "HTTPS", "POST", "AK", `/repos/${RepoNamespace}/{RepoName}/webhooks/{WebhookId}`, "none", req, runtime), new UpdateRepoWebhookResponse({}));
  }

  async updateUserInfo(): Promise<UpdateUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserInfoWithOptions(headers, runtime);
  }

  async updateUserInfoWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUserInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateUserInfoResponse>(await this.doROARequest("UpdateUserInfo", "2016-06-07", "HTTPS", "POST", "AK", `/users`, "none", req, runtime), new UpdateUserInfoResponse({}));
  }

}
