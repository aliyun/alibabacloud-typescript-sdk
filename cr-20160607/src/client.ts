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
  authorize?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authorize: 'Authorize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorize: 'string',
      status: 'string',
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
  page?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      status: 'string',
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
  page?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      status: 'string',
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
  digest?: string;
  imageCreate?: number;
  imageId?: string;
  imageSize?: number;
  imageUpdate?: number;
  requestId?: string;
  status?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'digest',
      imageCreate: 'imageCreate',
      imageId: 'imageId',
      imageSize: 'imageSize',
      imageUpdate: 'imageUpdate',
      requestId: 'requestId',
      status: 'status',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      requestId: 'string',
      status: 'string',
      tag: 'string',
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

export class GetResourceQuotaResponse extends $tea.Model {
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
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    BuildId = OpenApiUtil.getEncodeParam(BuildId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CancelRepoBuild",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/build/${BuildId}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CancelRepoBuildResponse>(await this.callApi(params, req, runtime), new CancelRepoBuildResponse({}));
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
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/namespace`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
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
    let params = new $OpenApi.Params({
      action: "CreateRepo",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateRepoResponse>(await this.callApi(params, req, runtime), new CreateRepoResponse({}));
  }

  async createRepoBuildRule(RepoNamespace: string, RepoName: string): Promise<CreateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepoBuildRuleWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async createRepoBuildRuleWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepoBuildRuleResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoBuildRule",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/rules`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoBuildRuleResponse({}));
  }

  async createRepoWebhook(RepoNamespace: string, RepoName: string): Promise<CreateRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRepoWebhookWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async createRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRepoWebhookResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CreateRepoWebhook",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/webhooks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateRepoWebhookResponse>(await this.callApi(params, req, runtime), new CreateRepoWebhookResponse({}));
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
    let params = new $OpenApi.Params({
      action: "CreateUserInfo",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/users`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateUserInfoResponse>(await this.callApi(params, req, runtime), new CreateUserInfoResponse({}));
  }

  async deleteImage(RepoNamespace: string, RepoName: string, Tag: string): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteImageWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async deleteImageWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteImage",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteNamespace(Namespace: string): Promise<DeleteNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(Namespace, headers, runtime);
  }

  async deleteNamespaceWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    Namespace = OpenApiUtil.getEncodeParam(Namespace);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteNamespace",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/namespace/${Namespace}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
  }

  async deleteRepo(RepoNamespace: string, RepoName: string): Promise<DeleteRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepoWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async deleteRepoWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepoResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepo",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteRepoResponse>(await this.callApi(params, req, runtime), new DeleteRepoResponse({}));
  }

  async deleteRepoBuildRule(RepoNamespace: string, RepoName: string, BuildRuleId: string): Promise<DeleteRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepoBuildRuleWithOptions(RepoNamespace, RepoName, BuildRuleId, headers, runtime);
  }

  async deleteRepoBuildRuleWithOptions(RepoNamespace: string, RepoName: string, BuildRuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepoBuildRuleResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    BuildRuleId = OpenApiUtil.getEncodeParam(BuildRuleId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepoBuildRule",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/rules/${BuildRuleId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new DeleteRepoBuildRuleResponse({}));
  }

  async deleteRepoWebhook(RepoNamespace: string, RepoName: string, WebhookId: string): Promise<DeleteRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRepoWebhookWithOptions(RepoNamespace, RepoName, WebhookId, headers, runtime);
  }

  async deleteRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, WebhookId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRepoWebhookResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    WebhookId = OpenApiUtil.getEncodeParam(WebhookId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRepoWebhook",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/webhooks/${WebhookId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteRepoWebhookResponse>(await this.callApi(params, req, runtime), new DeleteRepoWebhookResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetAuthorizationToken",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetAuthorizationTokenResponse>(await this.callApi(params, req, runtime), new GetAuthorizationTokenResponse({}));
  }

  async getImageLayer(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetImageLayerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageLayerWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getImageLayerWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageLayerResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetImageLayer",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}/layers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetImageLayerResponse>(await this.callApi(params, req, runtime), new GetImageLayerResponse({}));
  }

  async getImageManifest(RepoNamespace: string, RepoName: string, Tag: string, request: GetImageManifestRequest): Promise<GetImageManifestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageManifestWithOptions(RepoNamespace, RepoName, Tag, request, headers, runtime);
  }

  async getImageManifestWithOptions(RepoNamespace: string, RepoName: string, Tag: string, request: GetImageManifestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageManifestResponse> {
    Util.validateModel(request);
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.schemaVersion)) {
      query["SchemaVersion"] = request.schemaVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImageManifest",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}/manifest`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetImageManifestResponse>(await this.callApi(params, req, runtime), new GetImageManifestResponse({}));
  }

  async getNamespace(Namespace: string): Promise<GetNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNamespaceWithOptions(Namespace, headers, runtime);
  }

  async getNamespaceWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNamespaceResponse> {
    Namespace = OpenApiUtil.getEncodeParam(Namespace);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetNamespace",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/namespace/${Namespace}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetNamespaceResponse>(await this.callApi(params, req, runtime), new GetNamespaceResponse({}));
  }

  async getNamespaceList(request: GetNamespaceListRequest): Promise<GetNamespaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNamespaceListWithOptions(request, headers, runtime);
  }

  async getNamespaceListWithOptions(request: GetNamespaceListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNamespaceListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorize)) {
      query["Authorize"] = request.authorize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNamespaceList",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetNamespaceListResponse>(await this.callApi(params, req, runtime), new GetNamespaceListResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetRegion",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRegionResponse>(await this.callApi(params, req, runtime), new GetRegionResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetRegionList",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRegionListResponse>(await this.callApi(params, req, runtime), new GetRegionListResponse({}));
  }

  async getRepo(RepoNamespace: string, RepoName: string): Promise<GetRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async getRepoWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepo",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoResponse>(await this.callApi(params, req, runtime), new GetRepoResponse({}));
  }

  async getRepoBuildList(RepoNamespace: string, RepoName: string, request: GetRepoBuildListRequest): Promise<GetRepoBuildListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoBuildListWithOptions(RepoNamespace, RepoName, request, headers, runtime);
  }

  async getRepoBuildListWithOptions(RepoNamespace: string, RepoName: string, request: GetRepoBuildListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildListResponse> {
    Util.validateModel(request);
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
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
    let params = new $OpenApi.Params({
      action: "GetRepoBuildList",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/build`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoBuildListResponse>(await this.callApi(params, req, runtime), new GetRepoBuildListResponse({}));
  }

  async getRepoBuildRuleList(RepoNamespace: string, RepoName: string): Promise<GetRepoBuildRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoBuildRuleListWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async getRepoBuildRuleListWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildRuleListResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepoBuildRuleList",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoBuildRuleListResponse>(await this.callApi(params, req, runtime), new GetRepoBuildRuleListResponse({}));
  }

  async getRepoBuildStatus(RepoNamespace: string, RepoName: string, BuildId: string): Promise<GetRepoBuildStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoBuildStatusWithOptions(RepoNamespace, RepoName, BuildId, headers, runtime);
  }

  async getRepoBuildStatusWithOptions(RepoNamespace: string, RepoName: string, BuildId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoBuildStatusResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    BuildId = OpenApiUtil.getEncodeParam(BuildId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepoBuildStatus",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/build/${BuildId}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoBuildStatusResponse>(await this.callApi(params, req, runtime), new GetRepoBuildStatusResponse({}));
  }

  async getRepoList(request: GetRepoListRequest): Promise<GetRepoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoListWithOptions(request, headers, runtime);
  }

  async getRepoListWithOptions(request: GetRepoListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoListResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoList",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoListResponse>(await this.callApi(params, req, runtime), new GetRepoListResponse({}));
  }

  async getRepoListByNamespace(RepoNamespace: string, request: GetRepoListByNamespaceRequest): Promise<GetRepoListByNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoListByNamespaceWithOptions(RepoNamespace, request, headers, runtime);
  }

  async getRepoListByNamespaceWithOptions(RepoNamespace: string, request: GetRepoListByNamespaceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoListByNamespaceResponse> {
    Util.validateModel(request);
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRepoListByNamespace",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoListByNamespaceResponse>(await this.callApi(params, req, runtime), new GetRepoListByNamespaceResponse({}));
  }

  async getRepoTag(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetRepoTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getRepoTagWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTag",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRepoTagResponse>(await this.callApi(params, req, runtime), new GetRepoTagResponse({}));
  }

  async getRepoTagScanList(RepoNamespace: string, RepoName: string, Tag: string, request: GetRepoTagScanListRequest): Promise<GetRepoTagScanListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagScanListWithOptions(RepoNamespace, RepoName, Tag, request, headers, runtime);
  }

  async getRepoTagScanListWithOptions(RepoNamespace: string, RepoName: string, Tag: string, request: GetRepoTagScanListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanListResponse> {
    Util.validateModel(request);
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
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
    let params = new $OpenApi.Params({
      action: "GetRepoTagScanList",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}/scanResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoTagScanListResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanListResponse({}));
  }

  async getRepoTagScanStatus(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetRepoTagScanStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagScanStatusWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getRepoTagScanStatusWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanStatusResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTagScanStatus",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}/scanStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoTagScanStatusResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanStatusResponse({}));
  }

  async getRepoTagScanSummary(RepoNamespace: string, RepoName: string, Tag: string): Promise<GetRepoTagScanSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagScanSummaryWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async getRepoTagScanSummaryWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagScanSummaryResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepoTagScanSummary",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}/scanCount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoTagScanSummaryResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanSummaryResponse({}));
  }

  async getRepoTags(RepoNamespace: string, RepoName: string, request: GetRepoTagsRequest): Promise<GetRepoTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoTagsWithOptions(RepoNamespace, RepoName, request, headers, runtime);
  }

  async getRepoTagsWithOptions(RepoNamespace: string, RepoName: string, request: GetRepoTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoTagsResponse> {
    Util.validateModel(request);
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
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
    let params = new $OpenApi.Params({
      action: "GetRepoTags",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoTagsResponse>(await this.callApi(params, req, runtime), new GetRepoTagsResponse({}));
  }

  async getRepoWebhook(RepoNamespace: string, RepoName: string): Promise<GetRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepoWebhookWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async getRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRepoWebhookResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRepoWebhook",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/webhooks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetRepoWebhookResponse>(await this.callApi(params, req, runtime), new GetRepoWebhookResponse({}));
  }

  async getResourceQuota(ResourceName: string): Promise<GetResourceQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceQuotaWithOptions(ResourceName, headers, runtime);
  }

  async getResourceQuotaWithOptions(ResourceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceQuotaResponse> {
    ResourceName = OpenApiUtil.getEncodeParam(ResourceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetResourceQuota",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/resource/${ResourceName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<GetResourceQuotaResponse>(await this.callApi(params, req, runtime), new GetResourceQuotaResponse({}));
  }

  async startImageScan(RepoNamespace: string, RepoName: string, Tag: string): Promise<StartImageScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startImageScanWithOptions(RepoNamespace, RepoName, Tag, headers, runtime);
  }

  async startImageScanWithOptions(RepoNamespace: string, RepoName: string, Tag: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartImageScanResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    Tag = OpenApiUtil.getEncodeParam(Tag);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartImageScan",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/tags/${Tag}/scan`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StartImageScanResponse>(await this.callApi(params, req, runtime), new StartImageScanResponse({}));
  }

  async startRepoBuildByRule(RepoNamespace: string, RepoName: string, BuildRuleId: string): Promise<StartRepoBuildByRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startRepoBuildByRuleWithOptions(RepoNamespace, RepoName, BuildRuleId, headers, runtime);
  }

  async startRepoBuildByRuleWithOptions(RepoNamespace: string, RepoName: string, BuildRuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartRepoBuildByRuleResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    BuildRuleId = OpenApiUtil.getEncodeParam(BuildRuleId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartRepoBuildByRule",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/rules/${BuildRuleId}/build`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StartRepoBuildByRuleResponse>(await this.callApi(params, req, runtime), new StartRepoBuildByRuleResponse({}));
  }

  async updateNamespace(Namespace: string): Promise<UpdateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(Namespace, headers, runtime);
  }

  async updateNamespaceWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    Namespace = OpenApiUtil.getEncodeParam(Namespace);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateNamespace",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/namespace/${Namespace}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceResponse({}));
  }

  async updateRepo(RepoNamespace: string, RepoName: string): Promise<UpdateRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepoWithOptions(RepoNamespace, RepoName, headers, runtime);
  }

  async updateRepoWithOptions(RepoNamespace: string, RepoName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepoResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepo",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateRepoResponse>(await this.callApi(params, req, runtime), new UpdateRepoResponse({}));
  }

  async updateRepoBuildRule(RepoNamespace: string, RepoName: string, BuildRuleId: string): Promise<UpdateRepoBuildRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepoBuildRuleWithOptions(RepoNamespace, RepoName, BuildRuleId, headers, runtime);
  }

  async updateRepoBuildRuleWithOptions(RepoNamespace: string, RepoName: string, BuildRuleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepoBuildRuleResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    BuildRuleId = OpenApiUtil.getEncodeParam(BuildRuleId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepoBuildRule",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/rules/${BuildRuleId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new UpdateRepoBuildRuleResponse({}));
  }

  async updateRepoWebhook(RepoNamespace: string, RepoName: string, WebhookId: string): Promise<UpdateRepoWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRepoWebhookWithOptions(RepoNamespace, RepoName, WebhookId, headers, runtime);
  }

  async updateRepoWebhookWithOptions(RepoNamespace: string, RepoName: string, WebhookId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRepoWebhookResponse> {
    RepoNamespace = OpenApiUtil.getEncodeParam(RepoNamespace);
    RepoName = OpenApiUtil.getEncodeParam(RepoName);
    WebhookId = OpenApiUtil.getEncodeParam(WebhookId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "UpdateRepoWebhook",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/repos/${RepoNamespace}/${RepoName}/webhooks/${WebhookId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateRepoWebhookResponse>(await this.callApi(params, req, runtime), new UpdateRepoWebhookResponse({}));
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
    let params = new $OpenApi.Params({
      action: "UpdateUserInfo",
      version: "2016-06-07",
      protocol: "HTTPS",
      pathname: `/users`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UpdateUserInfoResponse>(await this.callApi(params, req, runtime), new UpdateUserInfoResponse({}));
  }

}
