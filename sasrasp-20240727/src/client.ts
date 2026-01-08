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
    this._endpoint = this.getEndpoint("sasrasp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * DescribeAttackProtectionCount
   * 
   * @param request - DescribeAttackProtectionCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAttackProtectionCountResponse
   */
  async describeAttackProtectionCountWithOptions(request: $_model.DescribeAttackProtectionCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAttackProtectionCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAttackProtectionCount",
      version: "2024-07-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAttackProtectionCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAttackProtectionCountResponse({}));
  }

  /**
   * DescribeAttackProtectionCount
   * 
   * @param request - DescribeAttackProtectionCountRequest
   * @returns DescribeAttackProtectionCountResponse
   */
  async describeAttackProtectionCount(request: $_model.DescribeAttackProtectionCountRequest): Promise<$_model.DescribeAttackProtectionCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAttackProtectionCountWithOptions(request, runtime);
  }

  /**
   * 查询攻击项
   * 
   * @param request - DescribeAttacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAttacksResponse
   */
  async describeAttacksWithOptions(request: $_model.DescribeAttacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAttacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.attackHostId)) {
      query["AttackHostId"] = request.attackHostId;
    }

    if (!$dara.isNull(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!$dara.isNull(request.attackUrl)) {
      query["AttackUrl"] = request.attackUrl;
    }

    if (!$dara.isNull(request.endTimestamp)) {
      query["EndTimestamp"] = request.endTimestamp;
    }

    if (!$dara.isNull(request.handleStatus)) {
      query["HandleStatus"] = request.handleStatus;
    }

    if (!$dara.isNull(request.handlerType)) {
      query["HandlerType"] = request.handlerType;
    }

    if (!$dara.isNull(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.raspType)) {
      query["RaspType"] = request.raspType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.remote)) {
      query["Remote"] = request.remote;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.startTimestamp)) {
      query["StartTimestamp"] = request.startTimestamp;
    }

    if (!$dara.isNull(request.unionId)) {
      query["UnionId"] = request.unionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAttacks",
      version: "2024-07-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAttacksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAttacksResponse({}));
  }

  /**
   * 查询攻击项
   * 
   * @param request - DescribeAttacksRequest
   * @returns DescribeAttacksResponse
   */
  async describeAttacks(request: $_model.DescribeAttacksRequest): Promise<$_model.DescribeAttacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAttacksWithOptions(request, runtime);
  }

}
