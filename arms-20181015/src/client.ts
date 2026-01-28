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
      'ap-northeast-2-pop': "arms.aliyuncs.com",
      'cn-beijing-finance-1': "arms.aliyuncs.com",
      'cn-beijing-finance-pop': "arms.aliyuncs.com",
      'cn-beijing-gov-1': "arms.aliyuncs.com",
      'cn-beijing-nu16-b01': "arms.aliyuncs.com",
      'cn-edge-1': "arms.aliyuncs.com",
      'cn-fujian': "arms.aliyuncs.com",
      'cn-haidian-cm12-c01': "arms.aliyuncs.com",
      'cn-hangzhou-bj-b01': "arms.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "arms.aliyuncs.com",
      'cn-hangzhou-test-306': "arms.aliyuncs.com",
      'cn-hongkong-finance-pop': "arms.aliyuncs.com",
      'cn-huhehaote-nebula-1': "arms.aliyuncs.com",
      'cn-qingdao-nebula': "arms.aliyuncs.com",
      'cn-shanghai-et15-b01': "arms.aliyuncs.com",
      'cn-shanghai-et2-b01': "arms.aliyuncs.com",
      'cn-shanghai-inner': "arms.aliyuncs.com",
      'cn-shanghai-internal-test-1': "arms.aliyuncs.com",
      'cn-shenzhen-inner': "arms.aliyuncs.com",
      'cn-shenzhen-st4-d01': "arms.aliyuncs.com",
      'cn-shenzhen-su18-b01': "arms.aliyuncs.com",
      'cn-wuhan': "arms.aliyuncs.com",
      'cn-yushanfang': "arms.aliyuncs.com",
      'cn-zhangbei': "arms.aliyuncs.com",
      'cn-zhangbei-na61-b01': "arms.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "arms.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "arms.aliyuncs.com",
      'eu-west-1-oxs': "arms.aliyuncs.com",
      'me-east-1': "arms.aliyuncs.com",
      'rus-west-1-pop': "arms.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("arms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - ARMSQueryDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ARMSQueryDataSetResponse
   */
  async aRMSQueryDataSetWithOptions(request: $_model.ARMSQueryDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ARMSQueryDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasetId)) {
      query["DatasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.dateStr)) {
      query["DateStr"] = request.dateStr;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.hackerUserId)) {
      query["HackerUserId"] = request.hackerUserId;
    }

    if (!$dara.isNull(request.hungryMode)) {
      query["HungryMode"] = request.hungryMode;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.isDrillDown)) {
      query["IsDrillDown"] = request.isDrillDown;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.optionalDims)) {
      query["OptionalDims"] = request.optionalDims;
    }

    if (!$dara.isNull(request.orderByKey)) {
      query["OrderByKey"] = request.orderByKey;
    }

    if (!$dara.isNull(request.reduceTail)) {
      query["ReduceTail"] = request.reduceTail;
    }

    if (!$dara.isNull(request.requiredDims)) {
      query["RequiredDims"] = request.requiredDims;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ARMSQueryDataSet",
      version: "2018-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ARMSQueryDataSetResponse>(await this.callApi(params, req, runtime), new $_model.ARMSQueryDataSetResponse({}));
  }

  /**
   * @param request - ARMSQueryDataSetRequest
   * @returns ARMSQueryDataSetResponse
   */
  async aRMSQueryDataSet(request: $_model.ARMSQueryDataSetRequest): Promise<$_model.ARMSQueryDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aRMSQueryDataSetWithOptions(request, runtime);
  }

  /**
   * @param request - MetricQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MetricQueryResponse
   */
  async metricQueryWithOptions(request: $_model.MetricQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MetricQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.hackerUserId)) {
      query["HackerUserId"] = request.hackerUserId;
    }

    if (!$dara.isNull(request.iintervalInSec)) {
      query["IintervalInSec"] = request.iintervalInSec;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MetricQuery",
      version: "2018-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MetricQueryResponse>(await this.callApi(params, req, runtime), new $_model.MetricQueryResponse({}));
  }

  /**
   * @param request - MetricQueryRequest
   * @returns MetricQueryResponse
   */
  async metricQuery(request: $_model.MetricQueryRequest): Promise<$_model.MetricQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.metricQueryWithOptions(request, runtime);
  }

}
