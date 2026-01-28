// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
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
   * Create Component Asset.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (i.e., Threat Analysis and Response Log Ingress Traffic) before using this interface.
   * 
   * @param request - CreateComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComponentAssetResponse
   */
  async createComponentAssetWithOptions(request: $_model.CreateComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComponentAssetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentAssetName)) {
      body["ComponentAssetName"] = request.componentAssetName;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentAssetValues)) {
      bodyFlat["ComponentAssetValues"] = request.componentAssetValues;
    }

    if (!$dara.isNull(request.componentName)) {
      body["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComponentAsset",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComponentAssetResponse>(await this.callApi(params, req, runtime), new $_model.CreateComponentAssetResponse({}));
  }

  /**
   * Create Component Asset.
   * 
   * @remarks
   * Please ensure that you fully understand the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (i.e., Threat Analysis and Response Log Ingress Traffic) before using this interface.
   * 
   * @param request - CreateComponentAssetRequest
   * @returns CreateComponentAssetResponse
   */
  async createComponentAsset(request: $_model.CreateComponentAssetRequest): Promise<$_model.CreateComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createComponentAssetWithOptions(request, runtime);
  }

  /**
   * Create Playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePlaybookResponse
   */
  async createPlaybookWithOptions(request: $_model.CreatePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookDescription)) {
      body["PlaybookDescription"] = request.playbookDescription;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.playbookInputConfigs)) {
      bodyFlat["PlaybookInputConfigs"] = request.playbookInputConfigs;
    }

    if (!$dara.isNull(request.playbookName)) {
      body["PlaybookName"] = request.playbookName;
    }

    if (!$dara.isNull(request.playbookOutputConfigs)) {
      bodyFlat["PlaybookOutputConfigs"] = request.playbookOutputConfigs;
    }

    if (!$dara.isNull(request.playbookParamType)) {
      body["PlaybookParamType"] = request.playbookParamType;
    }

    if (!$dara.isNull(request.playbookTaskFlow)) {
      body["PlaybookTaskFlow"] = request.playbookTaskFlow;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.srcPlaybookUuid)) {
      body["SrcPlaybookUuid"] = request.srcPlaybookUuid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePlaybook",
      version: "2025-09-03",
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
   * Create Playbook.
   * 
   * @param request - CreatePlaybookRequest
   * @returns CreatePlaybookResponse
   */
  async createPlaybook(request: $_model.CreatePlaybookRequest): Promise<$_model.CreatePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPlaybookWithOptions(request, runtime);
  }

  /**
   * Delete Component Asset.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (i.e., Threat Analysis and Response Log Access Traffic).
   * 
   * @param request - DeleteComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAssetWithOptions(request: $_model.DeleteComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComponentAssetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentAssetUuid)) {
      body["ComponentAssetUuid"] = request.componentAssetUuid;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComponentAsset",
      version: "2025-09-03",
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
   * Delete Component Asset.
   * 
   * @remarks
   * Please ensure that before using this interface, you have fully understood the billing method and [pricing](https://www.aliyun.com/price/product#/sas/detail/sas) of the response orchestration product (i.e., Threat Analysis and Response Log Access Traffic).
   * 
   * @param request - DeleteComponentAssetRequest
   * @returns DeleteComponentAssetResponse
   */
  async deleteComponentAsset(request: $_model.DeleteComponentAssetRequest): Promise<$_model.DeleteComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteComponentAssetWithOptions(request, runtime);
  }

  /**
   * Delete Playbook.
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

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePlaybook",
      version: "2025-09-03",
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
   * Delete Playbook.
   * 
   * @param request - DeletePlaybookRequest
   * @returns DeletePlaybookResponse
   */
  async deletePlaybook(request: $_model.DeletePlaybookRequest): Promise<$_model.DeletePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePlaybookWithOptions(request, runtime);
  }

  /**
   * 执行组件动作
   * 
   * @param request - ExecuteComponentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteComponentResponse
   */
  async executeComponentWithOptions(request: $_model.ExecuteComponentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteComponentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentActionName)) {
      body["ComponentActionName"] = request.componentActionName;
    }

    if (!$dara.isNull(request.componentAssetUuid)) {
      body["ComponentAssetUuid"] = request.componentAssetUuid;
    }

    if (!$dara.isNull(request.componentInput)) {
      body["ComponentInput"] = request.componentInput;
    }

    if (!$dara.isNull(request.componentName)) {
      body["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playBookNodeName)) {
      body["PlayBookNodeName"] = request.playBookNodeName;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteComponent",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteComponentResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteComponentResponse({}));
  }

  /**
   * 执行组件动作
   * 
   * @param request - ExecuteComponentRequest
   * @returns ExecuteComponentResponse
   */
  async executeComponent(request: $_model.ExecuteComponentRequest): Promise<$_model.ExecuteComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeComponentWithOptions(request, runtime);
  }

  /**
   * Get playbook details.
   * 
   * @param request - GetPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPlaybookResponse
   */
  async getPlaybookWithOptions(request: $_model.GetPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.playbookVersion)) {
      body["PlaybookVersion"] = request.playbookVersion;
    }

    if (!$dara.isNull(request.playbookVersionType)) {
      body["PlaybookVersionType"] = request.playbookVersionType;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPlaybook",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.GetPlaybookResponse({}));
  }

  /**
   * Get playbook details.
   * 
   * @param request - GetPlaybookRequest
   * @returns GetPlaybookResponse
   */
  async getPlaybook(request: $_model.GetPlaybookRequest): Promise<$_model.GetPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPlaybookWithOptions(request, runtime);
  }

  /**
   * Get the list of assets configured for a component.
   * 
   * @param request - ListComponentAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentAssetsResponse
   */
  async listComponentAssetsWithOptions(request: $_model.ListComponentAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentAssetsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentAssetUuid)) {
      body["ComponentAssetUuid"] = request.componentAssetUuid;
    }

    if (!$dara.isNull(request.componentName)) {
      body["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponentAssets",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentAssetsResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentAssetsResponse({}));
  }

  /**
   * Get the list of assets configured for a component.
   * 
   * @param request - ListComponentAssetsRequest
   * @returns ListComponentAssetsResponse
   */
  async listComponentAssets(request: $_model.ListComponentAssetsRequest): Promise<$_model.ListComponentAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComponentAssetsWithOptions(request, runtime);
  }

  /**
   * Get Component List.
   * 
   * @param request - ListComponentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentsResponse
   */
  async listComponentsWithOptions(request: $_model.ListComponentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentName)) {
      body["ComponentName"] = request.componentName;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponents",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentsResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentsResponse({}));
  }

  /**
   * Get Component List.
   * 
   * @param request - ListComponentsRequest
   * @returns ListComponentsResponse
   */
  async listComponents(request: $_model.ListComponentsRequest): Promise<$_model.ListComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComponentsWithOptions(request, runtime);
  }

  /**
   * Get Playbook List.
   * 
   * @param tmpReq - ListPlaybooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPlaybooksResponse
   */
  async listPlaybooksWithOptions(tmpReq: $_model.ListPlaybooksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPlaybooksResponse> {
    tmpReq.validate();
    let request = new $_model.ListPlaybooksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.playbookParamTypes)) {
      request.playbookParamTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.playbookParamTypes, "PlaybookParamTypes", "simple");
    }

    if (!$dara.isNull(tmpReq.playbookUuids)) {
      request.playbookUuidsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.playbookUuids, "PlaybookUuids", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playbookExecutionEndTime)) {
      body["PlaybookExecutionEndTime"] = request.playbookExecutionEndTime;
    }

    if (!$dara.isNull(request.playbookExecutionStartTime)) {
      body["PlaybookExecutionStartTime"] = request.playbookExecutionStartTime;
    }

    if (!$dara.isNull(request.playbookName)) {
      body["PlaybookName"] = request.playbookName;
    }

    if (!$dara.isNull(request.playbookParamTypesShrink)) {
      body["PlaybookParamTypes"] = request.playbookParamTypesShrink;
    }

    if (!$dara.isNull(request.playbookStatus)) {
      body["PlaybookStatus"] = request.playbookStatus;
    }

    if (!$dara.isNull(request.playbookType)) {
      body["PlaybookType"] = request.playbookType;
    }

    if (!$dara.isNull(request.playbookUuidsShrink)) {
      body["PlaybookUuids"] = request.playbookUuidsShrink;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlaybooks",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPlaybooksResponse>(await this.callApi(params, req, runtime), new $_model.ListPlaybooksResponse({}));
  }

  /**
   * Get Playbook List.
   * 
   * @param request - ListPlaybooksRequest
   * @returns ListPlaybooksResponse
   */
  async listPlaybooks(request: $_model.ListPlaybooksRequest): Promise<$_model.ListPlaybooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPlaybooksWithOptions(request, runtime);
  }

  /**
   * Update Component Asset.
   * 
   * @param request - UpdateComponentAssetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComponentAssetResponse
   */
  async updateComponentAssetWithOptions(request: $_model.UpdateComponentAssetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComponentAssetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentAssetName)) {
      body["ComponentAssetName"] = request.componentAssetName;
    }

    if (!$dara.isNull(request.componentAssetUuid)) {
      body["ComponentAssetUuid"] = request.componentAssetUuid;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentAssetValues)) {
      bodyFlat["ComponentAssetValues"] = request.componentAssetValues;
    }

    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComponentAsset",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComponentAssetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComponentAssetResponse({}));
  }

  /**
   * Update Component Asset.
   * 
   * @param request - UpdateComponentAssetRequest
   * @returns UpdateComponentAssetResponse
   */
  async updateComponentAsset(request: $_model.UpdateComponentAssetRequest): Promise<$_model.UpdateComponentAssetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateComponentAssetWithOptions(request, runtime);
  }

  /**
   * Update Playbook.
   * 
   * @param tmpReq - UpdatePlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePlaybookResponse
   */
  async updatePlaybookWithOptions(tmpReq: $_model.UpdatePlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePlaybookResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePlaybookShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.playbookInputConfigs)) {
      request.playbookInputConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.playbookInputConfigs, "PlaybookInputConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.playbookOutputConfigs)) {
      request.playbookOutputConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.playbookOutputConfigs, "PlaybookOutputConfigs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.playbookDescription)) {
      body["PlaybookDescription"] = request.playbookDescription;
    }

    if (!$dara.isNull(request.playbookInputConfigsShrink)) {
      body["PlaybookInputConfigs"] = request.playbookInputConfigsShrink;
    }

    if (!$dara.isNull(request.playbookName)) {
      body["PlaybookName"] = request.playbookName;
    }

    if (!$dara.isNull(request.playbookOutputConfigsShrink)) {
      body["PlaybookOutputConfigs"] = request.playbookOutputConfigsShrink;
    }

    if (!$dara.isNull(request.playbookParamType)) {
      body["PlaybookParamType"] = request.playbookParamType;
    }

    if (!$dara.isNull(request.playbookTaskFlow)) {
      body["PlaybookTaskFlow"] = request.playbookTaskFlow;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePlaybook",
      version: "2025-09-03",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePlaybookResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePlaybookResponse({}));
  }

  /**
   * Update Playbook.
   * 
   * @param request - UpdatePlaybookRequest
   * @returns UpdatePlaybookResponse
   */
  async updatePlaybook(request: $_model.UpdatePlaybookRequest): Promise<$_model.UpdatePlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePlaybookWithOptions(request, runtime);
  }

}
