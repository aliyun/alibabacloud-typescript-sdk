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
    this._endpoint = this.getEndpoint("eduaiservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 查询指定学生实验记录
   * 
   * @param request - QueryOrgLabRecordListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrgLabRecordListResponse
   */
  async queryOrgLabRecordListWithOptions(request: $_model.QueryOrgLabRecordListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrgLabRecordListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunUid)) {
      query["AliyunUid"] = request.aliyunUid;
    }

    if (!$dara.isNull(request.labId)) {
      query["LabId"] = request.labId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["OrderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrgLabRecordList",
      version: "2023-12-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrgLabRecordListResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrgLabRecordListResponse({}));
  }

  /**
   * 查询指定学生实验记录
   * 
   * @param request - QueryOrgLabRecordListRequest
   * @returns QueryOrgLabRecordListResponse
   */
  async queryOrgLabRecordList(request: $_model.QueryOrgLabRecordListRequest): Promise<$_model.QueryOrgLabRecordListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrgLabRecordListWithOptions(request, runtime);
  }

}
