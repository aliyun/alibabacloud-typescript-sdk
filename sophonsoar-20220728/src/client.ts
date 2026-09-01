// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-southeast-1': "sophonsoar.ap-southeast-1.aliyuncs.com",
      public: "sophonsoar.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sophonsoar", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Compares the configurations of two published playbook versions.
   * 
   * @param request - ComparePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ComparePlaybooksResponse
   */
  async comparePlaybooksWithOptions(request: $_model.ComparePlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ComparePlaybooksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.newPlaybookReleaseId)) {
      query["NewPlaybookReleaseId"] = request.newPlaybookReleaseId;
    }

    if (!$dara.isNull(request.oldPlaybookReleaseId)) {
      query["OldPlaybookReleaseId"] = request.oldPlaybookReleaseId;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ComparePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ComparePlaybooksResponse>(await this.callApi(params, req, runtime), new $_model.ComparePlaybooksResponse({}));
  }

  /**
   * Compares the configurations of two published playbook versions.
   * 
   * @param request - ComparePlaybooksRequest
   * @returns ComparePlaybooksResponse
   */
  async comparePlaybooks(request: $_model.ComparePlaybooksRequest): Promise<$_model.ComparePlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.comparePlaybooksWithOptions(request, runtime);
  }

  /**
   * Convert XML configuration.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the orchestration product before using this interface.
   * 
   * @param request - ConvertPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertPlaybookResponse
   */
  async convertPlaybookWithOptions(request: $_model.ConvertPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.ConvertPlaybookResponse({}));
  }

  /**
   * Convert XML configuration.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the orchestration product before using this interface.
   * 
   * @param request - ConvertPlaybookRequest
   * @returns ConvertPlaybookResponse
   */
  async convertPlaybook(request: $_model.ConvertPlaybookRequest): Promise<$_model.ConvertPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertPlaybookWithOptions(request, runtime);
  }

  /**
   * Copies a playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR) or pricing for the log data added to the Cloud Threat Detection and Response (CTDR) feature. For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - CopyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyPlaybookResponse
   */
  async copyPlaybookWithOptions(request: $_model.CopyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["ReleaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.sourcePlaybookUuid)) {
      body["SourcePlaybookUuid"] = request.sourcePlaybookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.CopyPlaybookResponse({}));
  }

  /**
   * Copies a playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR) or pricing for the log data added to the Cloud Threat Detection and Response (CTDR) feature. For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - CopyPlaybookRequest
   * @returns CopyPlaybookResponse
   */
  async copyPlaybook(request: $_model.CopyPlaybookRequest): Promise<$_model.CopyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyPlaybookWithOptions(request, runtime);
  }

  /**
   * Creates a new playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlaybookResponse
   */
  async createPlaybookWithOptions(request: $_model.CreatePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.inputParams)) {
      body["InputParams"] = request.inputParams;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.outputParams)) {
      body["OutputParams"] = request.outputParams;
    }

    if (!$dara.isNull(request.taskflowType)) {
      body["TaskflowType"] = request.taskflowType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePlaybookResponse>(await this.callApi(params, req, runtime), new $_model.CreatePlaybookResponse({}));
  }

  /**
   * Creates a new playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @returns CreatePlaybookResponse
   */
  async createPlaybook(request: $_model.CreatePlaybookRequest): Promise<$_model.CreatePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPlaybookWithOptions(request, runtime);
  }

  /**
   * Debugs a playbook.
   * 
   * @param request - DebugPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugPlaybookResponse
   */
  async debugPlaybookWithOptions(request: $_model.DebugPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DebugPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.record)) {
      body["Record"] = request.record;
    }

    if (!$dara.isNull(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DebugPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.DebugPlaybookResponse({}));
  }

  /**
   * Debugs a playbook.
   * 
   * @param request - DebugPlaybookRequest
   * @returns DebugPlaybookResponse
   */
  async debugPlaybook(request: $_model.DebugPlaybookRequest): Promise<$_model.DebugPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.debugPlaybookWithOptions(request, runtime);
  }

  /**
   * Deletes a component asset.
   * 
   * @param request - DeleteComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAssetWithOptions(request: $_model.DeleteComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComponentAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComponentAsset",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteComponentAssetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComponentAssetResponse({}));
  }

  /**
   * Deletes a component asset.
   * 
   * @param request - DeleteComponentAssetRequest
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAsset(request: $_model.DeleteComponentAssetRequest): Promise<$_model.DeleteComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComponentAssetWithOptions(request, runtime);
  }

  /**
   * Deletes a specified custom playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePlaybookResponse
   */
  async deletePlaybookWithOptions(request: $_model.DeletePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePlaybookResponse>(await this.callApi(params, req, runtime), new $_model.DeletePlaybookResponse({}));
  }

  /**
   * Deletes a specified custom playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @returns DeletePlaybookResponse
   */
  async deletePlaybook(request: $_model.DeletePlaybookRequest): Promise<$_model.DeletePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePlaybookWithOptions(request, runtime);
  }

  /**
   * Obtains the metadata for a component asset, which defines the fields that constitute the asset.
   * 
   * @param request - DescribeComponentAssetFormRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentAssetFormResponse
   */
  async describeComponentAssetFormWithOptions(request: $_model.DescribeComponentAssetFormRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentAssetFormResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentAssetForm",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentAssetFormResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentAssetFormResponse({}));
  }

  /**
   * Obtains the metadata for a component asset, which defines the fields that constitute the asset.
   * 
   * @param request - DescribeComponentAssetFormRequest
   * @returns DescribeComponentAssetFormResponse
   */
  async describeComponentAssetForm(request: $_model.DescribeComponentAssetFormRequest): Promise<$_model.DescribeComponentAssetFormResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentAssetFormWithOptions(request, runtime);
  }

  /**
   * Retrieves the asset list for a component.
   * 
   * @param request - DescribeComponentAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentAssetsResponse
   */
  async describeComponentAssetsWithOptions(request: $_model.DescribeComponentAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentAssetsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentAssets",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentAssetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentAssetsResponse({}));
  }

  /**
   * Retrieves the asset list for a component.
   * 
   * @param request - DescribeComponentAssetsRequest
   * @returns DescribeComponentAssetsResponse
   */
  async describeComponentAssets(request: $_model.DescribeComponentAssetsRequest): Promise<$_model.DescribeComponentAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentAssetsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of standard components that you can use.
   * 
   * @param request - DescribeComponentListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentListResponse
   */
  async describeComponentListWithOptions(request: $_model.DescribeComponentListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentListResponse({}));
  }

  /**
   * Retrieves a list of standard components that you can use.
   * 
   * @param request - DescribeComponentListRequest
   * @returns DescribeComponentListResponse
   */
  async describeComponentList(request: $_model.DescribeComponentListRequest): Promise<$_model.DescribeComponentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentListWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of predefined components.
   * 
   * @param request - DescribeComponentPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentPlaybookResponse
   */
  async describeComponentPlaybookWithOptions(request: $_model.DescribeComponentPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentPlaybookResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentPlaybookResponse({}));
  }

  /**
   * Retrieves a list of predefined components.
   * 
   * @param request - DescribeComponentPlaybookRequest
   * @returns DescribeComponentPlaybookResponse
   */
  async describeComponentPlaybook(request: $_model.DescribeComponentPlaybookRequest): Promise<$_model.DescribeComponentPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentPlaybookWithOptions(request, runtime);
  }

  /**
   * Obtains the JavaScript (JS) file that a component uses to render the page.
   * 
   * @param request - DescribeComponentsJsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentsJsResponse
   */
  async describeComponentsJsWithOptions(request: $_model.DescribeComponentsJsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentsJsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentsJs",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentsJsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentsJsResponse({}));
  }

  /**
   * Obtains the JavaScript (JS) file that a component uses to render the page.
   * 
   * @param request - DescribeComponentsJsRequest
   * @returns DescribeComponentsJsResponse
   */
  async describeComponentsJs(request: $_model.DescribeComponentsJsRequest): Promise<$_model.DescribeComponentsJsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComponentsJsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of distinct playbook releases.
   * 
   * @param request - DescribeDistinctReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistinctReleasesResponse
   */
  async describeDistinctReleasesWithOptions(request: $_model.DescribeDistinctReleasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDistinctReleasesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistinctReleases",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDistinctReleasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDistinctReleasesResponse({}));
  }

  /**
   * Retrieves a list of distinct playbook releases.
   * 
   * @param request - DescribeDistinctReleasesRequest
   * @returns DescribeDistinctReleasesResponse
   */
  async describeDistinctReleases(request: $_model.DescribeDistinctReleasesRequest): Promise<$_model.DescribeDistinctReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistinctReleasesWithOptions(request, runtime);
  }

  /**
   * Queries the enumeration information for a product.
   * 
   * @param request - DescribeEnumItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnumItemsResponse
   */
  async describeEnumItemsWithOptions(request: $_model.DescribeEnumItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnumItemsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnumItems",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnumItemsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnumItemsResponse({}));
  }

  /**
   * Queries the enumeration information for a product.
   * 
   * @param request - DescribeEnumItemsRequest
   * @returns DescribeEnumItemsResponse
   */
  async describeEnumItems(request: $_model.DescribeEnumItemsRequest): Promise<$_model.DescribeEnumItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnumItemsWithOptions(request, runtime);
  }

  /**
   * Queries a list of executable playbooks that are used to configure automated response plans.
   * 
   * @param request - DescribeExecutePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutePlaybooksResponse
   */
  async describeExecutePlaybooksWithOptions(request: $_model.DescribeExecutePlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExecutePlaybooksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExecutePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExecutePlaybooksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExecutePlaybooksResponse({}));
  }

  /**
   * Queries a list of executable playbooks that are used to configure automated response plans.
   * 
   * @param request - DescribeExecutePlaybooksRequest
   * @returns DescribeExecutePlaybooksResponse
   */
  async describeExecutePlaybooks(request: $_model.DescribeExecutePlaybooksRequest): Promise<$_model.DescribeExecutePlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExecutePlaybooksWithOptions(request, runtime);
  }

  /**
   * Retrieves global configuration information for the product.
   * 
   * @param request - DescribeFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFieldResponse
   */
  async describeFieldWithOptions(request: $_model.DescribeFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFieldResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeField",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFieldResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFieldResponse({}));
  }

  /**
   * Retrieves global configuration information for the product.
   * 
   * @param request - DescribeFieldRequest
   * @returns DescribeFieldResponse
   */
  async describeField(request: $_model.DescribeFieldRequest): Promise<$_model.DescribeFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFieldWithOptions(request, runtime);
  }

  /**
   * Queries groups of Alibaba Cloud services.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - DescribeGroupProductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupProductionsResponse
   */
  async describeGroupProductionsWithOptions(request: $_model.DescribeGroupProductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupProductionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupProductions",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupProductionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupProductionsResponse({}));
  }

  /**
   * Queries groups of Alibaba Cloud services.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - DescribeGroupProductionsRequest
   * @returns DescribeGroupProductionsResponse
   */
  async describeGroupProductions(request: $_model.DescribeGroupProductionsRequest): Promise<$_model.DescribeGroupProductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupProductionsWithOptions(request, runtime);
  }

  /**
   * Describes the output structure of each node in a playbook based on the latest execution record.
   * 
   * @param request - DescribeLatestRecordSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLatestRecordSchemaResponse
   */
  async describeLatestRecordSchemaWithOptions(request: $_model.DescribeLatestRecordSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLatestRecordSchemaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLatestRecordSchema",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLatestRecordSchemaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLatestRecordSchemaResponse({}));
  }

  /**
   * Describes the output structure of each node in a playbook based on the latest execution record.
   * 
   * @param request - DescribeLatestRecordSchemaRequest
   * @returns DescribeLatestRecordSchemaResponse
   */
  async describeLatestRecordSchema(request: $_model.DescribeLatestRecordSchemaRequest): Promise<$_model.DescribeLatestRecordSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLatestRecordSchemaWithOptions(request, runtime);
  }

  /**
   * Returns the reference paths for component inputs in a playbook orchestration.
   * 
   * @param request - DescribeNodeParamTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeParamTagsResponse
   */
  async describeNodeParamTagsWithOptions(request: $_model.DescribeNodeParamTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeParamTagsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeParamTags",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeParamTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeParamTagsResponse({}));
  }

  /**
   * Returns the reference paths for component inputs in a playbook orchestration.
   * 
   * @param request - DescribeNodeParamTagsRequest
   * @returns DescribeNodeParamTagsResponse
   */
  async describeNodeParamTags(request: $_model.DescribeNodeParamTagsRequest): Promise<$_model.DescribeNodeParamTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeParamTagsWithOptions(request, runtime);
  }

  /**
   * Queries notification templates.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - DescribeNotifyTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNotifyTemplateListResponse
   */
  async describeNotifyTemplateListWithOptions(request: $_model.DescribeNotifyTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNotifyTemplateListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNotifyTemplateList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNotifyTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNotifyTemplateListResponse({}));
  }

  /**
   * Queries notification templates.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR). For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - DescribeNotifyTemplateListRequest
   * @returns DescribeNotifyTemplateListResponse
   */
  async describeNotifyTemplateList(request: $_model.DescribeNotifyTemplateListRequest): Promise<$_model.DescribeNotifyTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNotifyTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries the details of an API operation.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR) or pricing for the log data added to the Cloud Threat Detection and Response (CTDR) feature. For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - DescribeOpenApiInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpenApiInfoResponse
   */
  async describeOpenApiInfoWithOptions(request: $_model.DescribeOpenApiInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOpenApiInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpenApiInfo",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOpenApiInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOpenApiInfoResponse({}));
  }

  /**
   * Queries the details of an API operation.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of Security Orchestration Automation Response (SOAR) or pricing for the log data added to the Cloud Threat Detection and Response (CTDR) feature. For more information, see [Pricing](https://www.aliyun.com/price/product#/sas/detail/sas).
   * 
   * @param request - DescribeOpenApiInfoRequest
   * @returns DescribeOpenApiInfoResponse
   */
  async describeOpenApiInfo(request: $_model.DescribeOpenApiInfoRequest): Promise<$_model.DescribeOpenApiInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpenApiInfoWithOptions(request, runtime);
  }

  /**
   * Retrieve the API list for a product.
   * 
   * @remarks
   * Before you use this API, review the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) for the orchestration product, which supports threat analysis, response, log access, and traffic monitoring.
   * 
   * @param request - DescribeOpenApiListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpenApiListResponse
   */
  async describeOpenApiListWithOptions(request: $_model.DescribeOpenApiListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOpenApiListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpenApiList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOpenApiListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOpenApiListResponse({}));
  }

  /**
   * Retrieve the API list for a product.
   * 
   * @remarks
   * Before you use this API, review the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) for the orchestration product, which supports threat analysis, response, log access, and traffic monitoring.
   * 
   * @param request - DescribeOpenApiListRequest
   * @returns DescribeOpenApiListResponse
   */
  async describeOpenApiList(request: $_model.DescribeOpenApiListRequest): Promise<$_model.DescribeOpenApiListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpenApiListWithOptions(request, runtime);
  }

  /**
   * Retrieves the XML configuration of a playbook.
   * 
   * @param request - DescribePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookResponse
   */
  async describePlaybookWithOptions(request: $_model.DescribePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybookResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybookResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybookResponse({}));
  }

  /**
   * Retrieves the XML configuration of a playbook.
   * 
   * @param request - DescribePlaybookRequest
   * @returns DescribePlaybookResponse
   */
  async describePlaybook(request: $_model.DescribePlaybookRequest): Promise<$_model.DescribePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookWithOptions(request, runtime);
  }

  /**
   * Retrieves the input and output parameter configurations for a playbook.
   * 
   * @param request - DescribePlaybookInputOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookInputOutputResponse
   */
  async describePlaybookInputOutputWithOptions(request: $_model.DescribePlaybookInputOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybookInputOutputResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookInputOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybookInputOutputResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybookInputOutputResponse({}));
  }

  /**
   * Retrieves the input and output parameter configurations for a playbook.
   * 
   * @param request - DescribePlaybookInputOutputRequest
   * @returns DescribePlaybookInputOutputResponse
   */
  async describePlaybookInputOutput(request: $_model.DescribePlaybookInputOutputRequest): Promise<$_model.DescribePlaybookInputOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookInputOutputWithOptions(request, runtime);
  }

  /**
   * Queries playbook metadata, including its name, description, number of runs, and failure rate.
   * 
   * @param request - DescribePlaybookMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookMetricsResponse
   */
  async describePlaybookMetricsWithOptions(request: $_model.DescribePlaybookMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybookMetricsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookMetrics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybookMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybookMetricsResponse({}));
  }

  /**
   * Queries playbook metadata, including its name, description, number of runs, and failure rate.
   * 
   * @param request - DescribePlaybookMetricsRequest
   * @returns DescribePlaybookMetricsResponse
   */
  async describePlaybookMetrics(request: $_model.DescribePlaybookMetricsRequest): Promise<$_model.DescribePlaybookMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookMetricsWithOptions(request, runtime);
  }

  /**
   * Retrieves the historical output data of a component.
   * 
   * @param request - DescribePlaybookNodesOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookNodesOutputResponse
   */
  async describePlaybookNodesOutputWithOptions(request: $_model.DescribePlaybookNodesOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybookNodesOutputResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookNodesOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybookNodesOutputResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybookNodesOutputResponse({}));
  }

  /**
   * Retrieves the historical output data of a component.
   * 
   * @param request - DescribePlaybookNodesOutputRequest
   * @returns DescribePlaybookNodesOutputResponse
   */
  async describePlaybookNodesOutput(request: $_model.DescribePlaybookNodesOutputRequest): Promise<$_model.DescribePlaybookNodesOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookNodesOutputWithOptions(request, runtime);
  }

  /**
   * Retrieves metrics for the response orchestration product, including the total number of playbooks and the number of enabled playbooks.
   * 
   * @param request - DescribePlaybookNumberMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookNumberMetricsResponse
   */
  async describePlaybookNumberMetricsWithOptions(request: $_model.DescribePlaybookNumberMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybookNumberMetricsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookNumberMetrics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybookNumberMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybookNumberMetricsResponse({}));
  }

  /**
   * Retrieves metrics for the response orchestration product, including the total number of playbooks and the number of enabled playbooks.
   * 
   * @param request - DescribePlaybookNumberMetricsRequest
   * @returns DescribePlaybookNumberMetricsResponse
   */
  async describePlaybookNumberMetrics(request: $_model.DescribePlaybookNumberMetricsRequest): Promise<$_model.DescribePlaybookNumberMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookNumberMetricsWithOptions(request, runtime);
  }

  /**
   * Queries a list of published versions of a playbook.
   * 
   * @param request - DescribePlaybookReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybookReleasesResponse
   */
  async describePlaybookReleasesWithOptions(request: $_model.DescribePlaybookReleasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybookReleasesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybookReleases",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybookReleasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybookReleasesResponse({}));
  }

  /**
   * Queries a list of published versions of a playbook.
   * 
   * @param request - DescribePlaybookReleasesRequest
   * @returns DescribePlaybookReleasesResponse
   */
  async describePlaybookReleases(request: $_model.DescribePlaybookReleasesRequest): Promise<$_model.DescribePlaybookReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybookReleasesWithOptions(request, runtime);
  }

  /**
   * Queries a list of playbooks.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) for Security Orchestration, Automation, and Response (SOAR).
   * 
   * @param request - DescribePlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePlaybooksResponse
   */
  async describePlaybooksWithOptions(request: $_model.DescribePlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePlaybooksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePlaybooks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePlaybooksResponse>(await this.callApi(params, req, runtime), new $_model.DescribePlaybooksResponse({}));
  }

  /**
   * Queries a list of playbooks.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) for Security Orchestration, Automation, and Response (SOAR).
   * 
   * @param request - DescribePlaybooksRequest
   * @returns DescribePlaybooksResponse
   */
  async describePlaybooks(request: $_model.DescribePlaybooksRequest): Promise<$_model.DescribePlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePlaybooksWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an OpenAPI.
   * 
   * @param request - DescribePopApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePopApiResponse
   */
  async describePopApiWithOptions(request: $_model.DescribePopApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePopApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.apiVersion)) {
      query["ApiVersion"] = request.apiVersion;
    }

    if (!$dara.isNull(request.popCode)) {
      query["PopCode"] = request.popCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePopApi",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePopApiResponse>(await this.callApi(params, req, runtime), new $_model.DescribePopApiResponse({}));
  }

  /**
   * Retrieves the details of an OpenAPI.
   * 
   * @param request - DescribePopApiRequest
   * @returns DescribePopApiResponse
   */
  async describePopApi(request: $_model.DescribePopApiRequest): Promise<$_model.DescribePopApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePopApiWithOptions(request, runtime);
  }

  /**
   * Retrieves statistics information.
   * 
   * @remarks
   * Make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (Cloud Threat Detection and Response (CTDR) log traffic) before you call this operation.
   * 
   * @param request - DescribeProcessStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessStatisticsResponse
   */
  async describeProcessStatisticsWithOptions(request: $_model.DescribeProcessStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProcessStatisticsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessStatistics",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProcessStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProcessStatisticsResponse({}));
  }

  /**
   * Retrieves statistics information.
   * 
   * @remarks
   * Make sure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (Cloud Threat Detection and Response (CTDR) log traffic) before you call this operation.
   * 
   * @param request - DescribeProcessStatisticsRequest
   * @returns DescribeProcessStatisticsResponse
   */
  async describeProcessStatistics(request: $_model.DescribeProcessStatisticsRequest): Promise<$_model.DescribeProcessStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the count of response tasks associated with an entity UUID.
   * 
   * @param request - DescribeProcessTaskCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessTaskCountResponse
   */
  async describeProcessTaskCountWithOptions(request: $_model.DescribeProcessTaskCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProcessTaskCountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessTaskCount",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProcessTaskCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProcessTaskCountResponse({}));
  }

  /**
   * Queries the count of response tasks associated with an entity UUID.
   * 
   * @param request - DescribeProcessTaskCountRequest
   * @returns DescribeProcessTaskCountResponse
   */
  async describeProcessTaskCount(request: $_model.DescribeProcessTaskCountRequest): Promise<$_model.DescribeProcessTaskCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessTaskCountWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of disposal tasks.
   * 
   * @remarks
   * Make sure that you are familiar with the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration feature (the log traffic of Cloud Threat Detection and Response (CTDR)) before you call this operation.
   * 
   * @param request - DescribeProcessTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessTasksResponse
   */
  async describeProcessTasksWithOptions(request: $_model.DescribeProcessTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProcessTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.entityName)) {
      query["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.entityUuid)) {
      query["EntityUuid"] = request.entityUuid;
    }

    if (!$dara.isNull(request.eventUuid)) {
      query["EventUuid"] = request.eventUuid;
    }

    if (!$dara.isNull(request.executeUuid)) {
      query["ExecuteUuid"] = request.executeUuid;
    }

    if (!$dara.isNull(request.orderField)) {
      query["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paramContent)) {
      query["ParamContent"] = request.paramContent;
    }

    if (!$dara.isNull(request.processActionEnd)) {
      query["ProcessActionEnd"] = request.processActionEnd;
    }

    if (!$dara.isNull(request.processActionStart)) {
      query["ProcessActionStart"] = request.processActionStart;
    }

    if (!$dara.isNull(request.processRemoveEnd)) {
      query["ProcessRemoveEnd"] = request.processRemoveEnd;
    }

    if (!$dara.isNull(request.processRemoveStart)) {
      query["ProcessRemoveStart"] = request.processRemoveStart;
    }

    if (!$dara.isNull(request.processStrategyUuid)) {
      query["ProcessStrategyUuid"] = request.processStrategyUuid;
    }

    if (!$dara.isNull(request.reqUuid)) {
      query["ReqUuid"] = request.reqUuid;
    }

    if (!$dara.isNull(request.responseRuleId)) {
      query["ResponseRuleId"] = request.responseRuleId;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.triggerSource)) {
      query["TriggerSource"] = request.triggerSource;
    }

    if (!$dara.isNull(request.yunCode)) {
      query["YunCode"] = request.yunCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessTasks",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProcessTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProcessTasksResponse({}));
  }

  /**
   * Retrieves a list of disposal tasks.
   * 
   * @remarks
   * Make sure that you are familiar with the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration feature (the log traffic of Cloud Threat Detection and Response (CTDR)) before you call this operation.
   * 
   * @param request - DescribeProcessTasksRequest
   * @returns DescribeProcessTasksResponse
   */
  async describeProcessTasks(request: $_model.DescribeProcessTasksRequest): Promise<$_model.DescribeProcessTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessTasksWithOptions(request, runtime);
  }

  /**
   * Retrieves the output data generated by a component for an action in a playbook task.
   * 
   * @param request - DescribeSoarRecordActionOutputListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordActionOutputListResponse
   */
  async describeSoarRecordActionOutputListWithOptions(request: $_model.DescribeSoarRecordActionOutputListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSoarRecordActionOutputListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarRecordActionOutputList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSoarRecordActionOutputListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSoarRecordActionOutputListResponse({}));
  }

  /**
   * Retrieves the output data generated by a component for an action in a playbook task.
   * 
   * @param request - DescribeSoarRecordActionOutputListRequest
   * @returns DescribeSoarRecordActionOutputListResponse
   */
  async describeSoarRecordActionOutputList(request: $_model.DescribeSoarRecordActionOutputListRequest): Promise<$_model.DescribeSoarRecordActionOutputListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarRecordActionOutputListWithOptions(request, runtime);
  }

  /**
   * Retrieves the input and output data of a component action after a playbook task is executed.
   * 
   * @param request - DescribeSoarRecordInOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordInOutputResponse
   */
  async describeSoarRecordInOutputWithOptions(request: $_model.DescribeSoarRecordInOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSoarRecordInOutputResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarRecordInOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSoarRecordInOutputResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSoarRecordInOutputResponse({}));
  }

  /**
   * Retrieves the input and output data of a component action after a playbook task is executed.
   * 
   * @param request - DescribeSoarRecordInOutputRequest
   * @returns DescribeSoarRecordInOutputResponse
   */
  async describeSoarRecordInOutput(request: $_model.DescribeSoarRecordInOutputRequest): Promise<$_model.DescribeSoarRecordInOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarRecordInOutputWithOptions(request, runtime);
  }

  /**
   * Queries the execution records for a playbook.
   * 
   * @param request - DescribeSoarRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarRecordsResponse
   */
  async describeSoarRecordsWithOptions(request: $_model.DescribeSoarRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSoarRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarRecords",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSoarRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSoarRecordsResponse({}));
  }

  /**
   * Queries the execution records for a playbook.
   * 
   * @param request - DescribeSoarRecordsRequest
   * @returns DescribeSoarRecordsResponse
   */
  async describeSoarRecords(request: $_model.DescribeSoarRecordsRequest): Promise<$_model.DescribeSoarRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarRecordsWithOptions(request, runtime);
  }

  /**
   * Retrieves the component execution records for a single playbook run.
   * 
   * @param request - DescribeSoarTaskAndActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSoarTaskAndActionsResponse
   */
  async describeSoarTaskAndActionsWithOptions(request: $_model.DescribeSoarTaskAndActionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSoarTaskAndActionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSoarTaskAndActions",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSoarTaskAndActionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSoarTaskAndActionsResponse({}));
  }

  /**
   * Retrieves the component execution records for a single playbook run.
   * 
   * @param request - DescribeSoarTaskAndActionsRequest
   * @returns DescribeSoarTaskAndActionsResponse
   */
  async describeSoarTaskAndActions(request: $_model.DescribeSoarTaskAndActionsRequest): Promise<$_model.DescribeSoarTaskAndActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSoarTaskAndActionsWithOptions(request, runtime);
  }

  /**
   * Queries the commands that are used to manage entities.
   * 
   * @param request - DescribeSophonCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSophonCommandsResponse
   */
  async describeSophonCommandsWithOptions(request: $_model.DescribeSophonCommandsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSophonCommandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSophonCommands",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSophonCommandsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSophonCommandsResponse({}));
  }

  /**
   * Queries the commands that are used to manage entities.
   * 
   * @param request - DescribeSophonCommandsRequest
   * @returns DescribeSophonCommandsResponse
   */
  async describeSophonCommands(request: $_model.DescribeSophonCommandsRequest): Promise<$_model.DescribeSophonCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSophonCommandsWithOptions(request, runtime);
  }

  /**
   * Queries the API operations of a cloud service provider.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (i.e., threat analysis and response log access traffic) before using this interface.
   * 
   * @param request - DescribeVendorApiListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVendorApiListResponse
   */
  async describeVendorApiListWithOptions(request: $_model.DescribeVendorApiListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVendorApiListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.vendorCode)) {
      query["VendorCode"] = request.vendorCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVendorApiList",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVendorApiListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVendorApiListResponse({}));
  }

  /**
   * Queries the API operations of a cloud service provider.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (i.e., threat analysis and response log access traffic) before using this interface.
   * 
   * @param request - DescribeVendorApiListRequest
   * @returns DescribeVendorApiListResponse
   */
  async describeVendorApiList(request: $_model.DescribeVendorApiListRequest): Promise<$_model.DescribeVendorApiListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVendorApiListWithOptions(request, runtime);
  }

  /**
   * After you submit a task for a Python 3 script, use the returned requestUuid to retrieve the operational logs.
   * 
   * @param request - DescriberPython3ScriptLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescriberPython3ScriptLogsResponse
   */
  async describerPython3ScriptLogsWithOptions(request: $_model.DescriberPython3ScriptLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescriberPython3ScriptLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescriberPython3ScriptLogs",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescriberPython3ScriptLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescriberPython3ScriptLogsResponse({}));
  }

  /**
   * After you submit a task for a Python 3 script, use the returned requestUuid to retrieve the operational logs.
   * 
   * @param request - DescriberPython3ScriptLogsRequest
   * @returns DescriberPython3ScriptLogsResponse
   */
  async describerPython3ScriptLogs(request: $_model.DescriberPython3ScriptLogsRequest): Promise<$_model.DescriberPython3ScriptLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describerPython3ScriptLogsWithOptions(request, runtime);
  }

  /**
   * You can call this operation to modify the asset information for a component.
   * 
   * @param request - ModifyComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyComponentAssetResponse
   */
  async modifyComponentAssetWithOptions(request: $_model.ModifyComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyComponentAssetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assetConfig)) {
      query["AssetConfig"] = request.assetConfig;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyComponentAsset",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyComponentAssetResponse>(await this.callApi(params, req, runtime), new $_model.ModifyComponentAssetResponse({}));
  }

  /**
   * You can call this operation to modify the asset information for a component.
   * 
   * @param request - ModifyComponentAssetRequest
   * @returns ModifyComponentAssetResponse
   */
  async modifyComponentAsset(request: $_model.ModifyComponentAssetRequest): Promise<$_model.ModifyComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyComponentAssetWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of a playbook.
   * 
   * @param request - ModifyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookResponse
   */
  async modifyPlaybookWithOptions(request: $_model.ModifyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.taskflow)) {
      body["Taskflow"] = request.taskflow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPlaybookResponse({}));
  }

  /**
   * Modifies the configuration of a playbook.
   * 
   * @param request - ModifyPlaybookRequest
   * @returns ModifyPlaybookResponse
   */
  async modifyPlaybook(request: $_model.ModifyPlaybookRequest): Promise<$_model.ModifyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPlaybookWithOptions(request, runtime);
  }

  /**
   * Modifies the input and output parameters of a playbook.
   * 
   * @param request - ModifyPlaybookInputOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPlaybookInputOutputResponse
   */
  async modifyPlaybookInputOutputWithOptions(request: $_model.ModifyPlaybookInputOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPlaybookInputOutputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exeConfig)) {
      body["ExeConfig"] = request.exeConfig;
    }

    if (!$dara.isNull(request.inputParams)) {
      body["InputParams"] = request.inputParams;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.outputParams)) {
      body["OutputParams"] = request.outputParams;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPlaybookInputOutput",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPlaybookInputOutputResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPlaybookInputOutputResponse({}));
  }

  /**
   * Modifies the input and output parameters of a playbook.
   * 
   * @param request - ModifyPlaybookInputOutputRequest
   * @returns ModifyPlaybookInputOutputResponse
   */
  async modifyPlaybookInputOutput(request: $_model.ModifyPlaybookInputOutputRequest): Promise<$_model.ModifyPlaybookInputOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPlaybookInputOutputWithOptions(request, runtime);
  }

  /**
   * Publishes a playbook. Once published, the playbook runs with the new logic.
   * 
   * @param request - PublishPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishPlaybookResponse
   */
  async publishPlaybookWithOptions(request: $_model.PublishPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.PublishPlaybookResponse({}));
  }

  /**
   * Publishes a playbook. Once published, the playbook runs with the new logic.
   * 
   * @param request - PublishPlaybookRequest
   * @returns PublishPlaybookResponse
   */
  async publishPlaybook(request: $_model.PublishPlaybookRequest): Promise<$_model.PublishPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishPlaybookWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of all playbooks.
   * 
   * @param request - QueryTreeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTreeDataResponse
   */
  async queryTreeDataWithOptions(request: $_model.QueryTreeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTreeDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTreeData",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTreeDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryTreeDataResponse({}));
  }

  /**
   * Retrieves a list of all playbooks.
   * 
   * @param request - QueryTreeDataRequest
   * @returns QueryTreeDataResponse
   */
  async queryTreeData(request: $_model.QueryTreeDataRequest): Promise<$_model.QueryTreeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTreeDataWithOptions(request, runtime);
  }

  /**
   * Rolls back a playbook to a specified version. You can also specify whether to publish that version after the rollback.
   * 
   * @param request - RevertPlaybookReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevertPlaybookReleaseResponse
   */
  async revertPlaybookReleaseWithOptions(request: $_model.RevertPlaybookReleaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevertPlaybookReleaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isPublish)) {
      body["IsPublish"] = request.isPublish;
    }

    if (!$dara.isNull(request.playReleaseId)) {
      body["PlayReleaseId"] = request.playReleaseId;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevertPlaybookRelease",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevertPlaybookReleaseResponse>(await this.callApi(params, req, runtime), new $_model.RevertPlaybookReleaseResponse({}));
  }

  /**
   * Rolls back a playbook to a specified version. You can also specify whether to publish that version after the rollback.
   * 
   * @param request - RevertPlaybookReleaseRequest
   * @returns RevertPlaybookReleaseResponse
   */
  async revertPlaybookRelease(request: $_model.RevertPlaybookReleaseRequest): Promise<$_model.RevertPlaybookReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revertPlaybookReleaseWithOptions(request, runtime);
  }

  /**
   * Runs the notification component to send an email message.
   * 
   * @remarks
   * Before calling this operation, understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) for Security Orchestration Application Response (SOAR). SOAR is billed based on the log traffic added to the service.
   * 
   * @param request - RunNotifyComponentWithEmailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNotifyComponentWithEmailResponse
   */
  async runNotifyComponentWithEmailWithOptions(request: $_model.RunNotifyComponentWithEmailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunNotifyComponentWithEmailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.receivers)) {
      query["Receivers"] = request.receivers;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.subject)) {
      query["Subject"] = request.subject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNotifyComponentWithEmail",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunNotifyComponentWithEmailResponse>(await this.callApi(params, req, runtime), new $_model.RunNotifyComponentWithEmailResponse({}));
  }

  /**
   * Runs the notification component to send an email message.
   * 
   * @remarks
   * Before calling this operation, understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) for Security Orchestration Application Response (SOAR). SOAR is billed based on the log traffic added to the service.
   * 
   * @param request - RunNotifyComponentWithEmailRequest
   * @returns RunNotifyComponentWithEmailResponse
   */
  async runNotifyComponentWithEmail(request: $_model.RunNotifyComponentWithEmailRequest): Promise<$_model.RunNotifyComponentWithEmailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runNotifyComponentWithEmailWithOptions(request, runtime);
  }

  /**
   * Sends a message using the notification component in Message Center.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of Security Orchestration Automation Response (SOAR). The service is billed based on the log traffic for threat analysis and response.
   * 
   * @param request - RunNotifyComponentWithMessageCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNotifyComponentWithMessageCenterResponse
   */
  async runNotifyComponentWithMessageCenterWithOptions(request: $_model.RunNotifyComponentWithMessageCenterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunNotifyComponentWithMessageCenterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.aliuid)) {
      query["Aliuid"] = request.aliuid;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.channelTypeList)) {
      query["ChannelTypeList"] = request.channelTypeList;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNotifyComponentWithMessageCenter",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunNotifyComponentWithMessageCenterResponse>(await this.callApi(params, req, runtime), new $_model.RunNotifyComponentWithMessageCenterResponse({}));
  }

  /**
   * Sends a message using the notification component in Message Center.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of Security Orchestration Automation Response (SOAR). The service is billed based on the log traffic for threat analysis and response.
   * 
   * @param request - RunNotifyComponentWithMessageCenterRequest
   * @returns RunNotifyComponentWithMessageCenterResponse
   */
  async runNotifyComponentWithMessageCenter(request: $_model.RunNotifyComponentWithMessageCenterRequest): Promise<$_model.RunNotifyComponentWithMessageCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runNotifyComponentWithMessageCenterWithOptions(request, runtime);
  }

  /**
   * Sends a message from a notification component using a webhook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of response orchestration. This feature is billed based on the log traffic for threat analysis and response.
   * 
   * @param request - RunNotifyComponentWithWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNotifyComponentWithWebhookResponse
   */
  async runNotifyComponentWithWebhookWithOptions(request: $_model.RunNotifyComponentWithWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunNotifyComponentWithWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.assetId)) {
      query["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.componentName)) {
      query["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.msgType)) {
      query["MsgType"] = request.msgType;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      query["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.roleFor)) {
      query["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.secret)) {
      query["Secret"] = request.secret;
    }

    if (!$dara.isNull(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNotifyComponentWithWebhook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunNotifyComponentWithWebhookResponse>(await this.callApi(params, req, runtime), new $_model.RunNotifyComponentWithWebhookResponse({}));
  }

  /**
   * Sends a message from a notification component using a webhook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of response orchestration. This feature is billed based on the log traffic for threat analysis and response.
   * 
   * @param request - RunNotifyComponentWithWebhookRequest
   * @returns RunNotifyComponentWithWebhookResponse
   */
  async runNotifyComponentWithWebhook(request: $_model.RunNotifyComponentWithWebhookRequest): Promise<$_model.RunNotifyComponentWithWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runNotifyComponentWithWebhookWithOptions(request, runtime);
  }

  /**
   * Executes a Python 3 code snippet for data processing.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product.
   * 
   * @param request - RunPython3ScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunPython3ScriptResponse
   */
  async runPython3ScriptWithOptions(request: $_model.RunPython3ScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunPython3ScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pythonVersion)) {
      query["PythonVersion"] = request.pythonVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.pythonScript)) {
      body["PythonScript"] = request.pythonScript;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunPython3Script",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunPython3ScriptResponse>(await this.callApi(params, req, runtime), new $_model.RunPython3ScriptResponse({}));
  }

  /**
   * Executes a Python 3 code snippet for data processing.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product.
   * 
   * @param request - RunPython3ScriptRequest
   * @returns RunPython3ScriptResponse
   */
  async runPython3Script(request: $_model.RunPython3ScriptRequest): Promise<$_model.RunPython3ScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runPython3ScriptWithOptions(request, runtime);
  }

  /**
   * Triggers an enabled custom or predefined playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of Response Orchestration.
   * 
   * @param request - TriggerPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerPlaybookResponse
   */
  async triggerPlaybookWithOptions(request: $_model.TriggerPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inputParam)) {
      body["InputParam"] = request.inputParam;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.TriggerPlaybookResponse({}));
  }

  /**
   * Triggers an enabled custom or predefined playbook.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of Response Orchestration.
   * 
   * @param request - TriggerPlaybookRequest
   * @returns TriggerPlaybookResponse
   */
  async triggerPlaybook(request: $_model.TriggerPlaybookRequest): Promise<$_model.TriggerPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerPlaybookWithOptions(request, runtime);
  }

  /**
   * When an event is handled using response orchestration, the response center creates a task. Perform follow-up actions on the task, such as unblocking, retrying a block, and removing from isolation.
   * 
   * @param request - TriggerProcessTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerProcessTaskResponse
   */
  async triggerProcessTaskWithOptions(request: $_model.TriggerProcessTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerProcessTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerProcessTask",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerProcessTaskResponse>(await this.callApi(params, req, runtime), new $_model.TriggerProcessTaskResponse({}));
  }

  /**
   * When an event is handled using response orchestration, the response center creates a task. Perform follow-up actions on the task, such as unblocking, retrying a block, and removing from isolation.
   * 
   * @param request - TriggerProcessTaskRequest
   * @returns TriggerProcessTaskResponse
   */
  async triggerProcessTask(request: $_model.TriggerProcessTaskRequest): Promise<$_model.TriggerProcessTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerProcessTaskWithOptions(request, runtime);
  }

  /**
   * Triggers a playbook or a response command.
   * 
   * @remarks
   * Make sure that you are familiar with the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of Security Orchestration Automation Response (SOAR) before you call this operation.
   * 
   * @param request - TriggerSophonPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerSophonPlaybookResponse
   */
  async triggerSophonPlaybookWithOptions(request: $_model.TriggerSophonPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerSophonPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commandName)) {
      query["CommandName"] = request.commandName;
    }

    if (!$dara.isNull(request.inputParams)) {
      query["InputParams"] = request.inputParams;
    }

    if (!$dara.isNull(request.sophonTaskId)) {
      query["SophonTaskId"] = request.sophonTaskId;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerSophonPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerSophonPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.TriggerSophonPlaybookResponse({}));
  }

  /**
   * Triggers a playbook or a response command.
   * 
   * @remarks
   * Make sure that you are familiar with the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of Security Orchestration Automation Response (SOAR) before you call this operation.
   * 
   * @param request - TriggerSophonPlaybookRequest
   * @returns TriggerSophonPlaybookResponse
   */
  async triggerSophonPlaybook(request: $_model.TriggerSophonPlaybookRequest): Promise<$_model.TriggerSophonPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerSophonPlaybookWithOptions(request, runtime);
  }

  /**
   * Verifies that a playbook configuration is correct and its orchestration logic is valid.
   * 
   * @param request - VerifyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPlaybookResponse
   */
  async verifyPlaybookWithOptions(request: $_model.VerifyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.taskFlow)) {
      body["TaskFlow"] = request.taskFlow;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyPlaybook",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.VerifyPlaybookResponse({}));
  }

  /**
   * Verifies that a playbook configuration is correct and its orchestration logic is valid.
   * 
   * @param request - VerifyPlaybookRequest
   * @returns VerifyPlaybookResponse
   */
  async verifyPlaybook(request: $_model.VerifyPlaybookRequest): Promise<$_model.VerifyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyPlaybookWithOptions(request, runtime);
  }

  /**
   * Verifies the syntax of a Python code snippet.
   * 
   * @param request - VerifyPythonFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyPythonFileResponse
   */
  async verifyPythonFileWithOptions(request: $_model.VerifyPythonFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyPythonFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyPythonFile",
      version: "2022-07-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyPythonFileResponse>(await this.callApi(params, req, runtime), new $_model.VerifyPythonFileResponse({}));
  }

  /**
   * Verifies the syntax of a Python code snippet.
   * 
   * @param request - VerifyPythonFileRequest
   * @returns VerifyPythonFileResponse
   */
  async verifyPythonFile(request: $_model.VerifyPythonFileRequest): Promise<$_model.VerifyPythonFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyPythonFileWithOptions(request, runtime);
  }

}
