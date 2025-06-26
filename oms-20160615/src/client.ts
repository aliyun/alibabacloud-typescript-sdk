// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-southeast-1': "oms.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou': "pre-oms.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("oms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 删除domainPart
   * 
   * @param request - DeleteDomainPartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainPartResponse
   */
  async deleteDomainPartWithOptions(request: $_model.DeleteDomainPartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainPartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.part)) {
      query["Part"] = request.part;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainPart",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainPartResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainPartResponse({}));
  }

  /**
   * 删除domainPart
   * 
   * @param request - DeleteDomainPartRequest
   * @returns DeleteDomainPartResponse
   */
  async deleteDomainPart(request: $_model.DeleteDomainPartRequest): Promise<$_model.DeleteDomainPartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainPartWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDomainPartByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainPartByProxyResponse
   */
  async deleteDomainPartByProxyWithOptions(request: $_model.DeleteDomainPartByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainPartByProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.part)) {
      query["Part"] = request.part;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomainPartByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainPartByProxyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainPartByProxyResponse({}));
  }

  /**
   * @param request - DeleteDomainPartByProxyRequest
   * @returns DeleteDomainPartByProxyResponse
   */
  async deleteDomainPartByProxy(request: $_model.DeleteDomainPartByProxyRequest): Promise<$_model.DeleteDomainPartByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainPartByProxyWithOptions(request, runtime);
  }

  /**
   * 删除记录数据
   * 
   * @param request - DeleteMeasureDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMeasureDataResponse
   */
  async deleteMeasureDataWithOptions(request: $_model.DeleteMeasureDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMeasureDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMeasureData",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMeasureDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMeasureDataResponse({}));
  }

  /**
   * 删除记录数据
   * 
   * @param request - DeleteMeasureDataRequest
   * @returns DeleteMeasureDataResponse
   */
  async deleteMeasureData(request: $_model.DeleteMeasureDataRequest): Promise<$_model.DeleteMeasureDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMeasureDataWithOptions(request, runtime);
  }

  /**
   * 获取domainPart
   * 
   * @param request - GetDomainPartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainPartResponse
   */
  async getDomainPartWithOptions(request: $_model.GetDomainPartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainPartResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainPart",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainPartResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainPartResponse({}));
  }

  /**
   * 获取domainPart
   * 
   * @param request - GetDomainPartRequest
   * @returns GetDomainPartResponse
   */
  async getDomainPart(request: $_model.GetDomainPartRequest): Promise<$_model.GetDomainPartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainPartWithOptions(request, runtime);
  }

  /**
   * @param request - GetDomainPartByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainPartByProxyResponse
   */
  async getDomainPartByProxyWithOptions(request: $_model.GetDomainPartByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainPartByProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compressEnable)) {
      query["CompressEnable"] = request.compressEnable;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.part)) {
      query["Part"] = request.part;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomainPartByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainPartByProxyResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainPartByProxyResponse({}));
  }

  /**
   * @param request - GetDomainPartByProxyRequest
   * @returns GetDomainPartByProxyResponse
   */
  async getDomainPartByProxy(request: $_model.GetDomainPartByProxyRequest): Promise<$_model.GetDomainPartByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDomainPartByProxyWithOptions(request, runtime);
  }

  /**
   * 查询增量表的原始计量数据
   * 
   * @param request - GetIncrementMeasureDataByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIncrementMeasureDataByProxyResponse
   */
  async getIncrementMeasureDataByProxyWithOptions(request: $_model.GetIncrementMeasureDataByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIncrementMeasureDataByProxyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIncrementMeasureDataByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIncrementMeasureDataByProxyResponse>(await this.callApi(params, req, runtime), new $_model.GetIncrementMeasureDataByProxyResponse({}));
  }

  /**
   * 查询增量表的原始计量数据
   * 
   * @param request - GetIncrementMeasureDataByProxyRequest
   * @returns GetIncrementMeasureDataByProxyResponse
   */
  async getIncrementMeasureDataByProxy(request: $_model.GetIncrementMeasureDataByProxyRequest): Promise<$_model.GetIncrementMeasureDataByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIncrementMeasureDataByProxyWithOptions(request, runtime);
  }

  /**
   * 查询计量数据
   * 
   * @param request - GetMeasureDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMeasureDataResponse
   */
  async getMeasureDataWithOptions(request: $_model.GetMeasureDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMeasureDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressEnable)) {
      query["CompressEnable"] = request.compressEnable;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.queryField)) {
      query["QueryField"] = request.queryField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMeasureData",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMeasureDataResponse>(await this.callApi(params, req, runtime), new $_model.GetMeasureDataResponse({}));
  }

  /**
   * 查询计量数据
   * 
   * @param request - GetMeasureDataRequest
   * @returns GetMeasureDataResponse
   */
  async getMeasureData(request: $_model.GetMeasureDataRequest): Promise<$_model.GetMeasureDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMeasureDataWithOptions(request, runtime);
  }

  /**
   * 查询readyflag
   * 
   * @param request - GetReadyFlagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReadyFlagResponse
   */
  async getReadyFlagWithOptions(request: $_model.GetReadyFlagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetReadyFlagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReadyFlag",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReadyFlagResponse>(await this.callApi(params, req, runtime), new $_model.GetReadyFlagResponse({}));
  }

  /**
   * 查询readyflag
   * 
   * @param request - GetReadyFlagRequest
   * @returns GetReadyFlagResponse
   */
  async getReadyFlag(request: $_model.GetReadyFlagRequest): Promise<$_model.GetReadyFlagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReadyFlagWithOptions(request, runtime);
  }

  /**
   * @param request - GetReadyFlagByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReadyFlagByProxyResponse
   */
  async getReadyFlagByProxyWithOptions(request: $_model.GetReadyFlagByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetReadyFlagByProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressEnable)) {
      query["CompressEnable"] = request.compressEnable;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReadyFlagByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReadyFlagByProxyResponse>(await this.callApi(params, req, runtime), new $_model.GetReadyFlagByProxyResponse({}));
  }

  /**
   * @param request - GetReadyFlagByProxyRequest
   * @returns GetReadyFlagByProxyResponse
   */
  async getReadyFlagByProxy(request: $_model.GetReadyFlagByProxyRequest): Promise<$_model.GetReadyFlagByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReadyFlagByProxyWithOptions(request, runtime);
  }

  /**
   * 设置domainPart
   * 
   * @param request - PutDomainPartRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDomainPartResponse
   */
  async putDomainPartWithOptions(request: $_model.PutDomainPartRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDomainPartResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDomainPart",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDomainPartResponse>(await this.callApi(params, req, runtime), new $_model.PutDomainPartResponse({}));
  }

  /**
   * 设置domainPart
   * 
   * @param request - PutDomainPartRequest
   * @returns PutDomainPartResponse
   */
  async putDomainPart(request: $_model.PutDomainPartRequest): Promise<$_model.PutDomainPartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDomainPartWithOptions(request, runtime);
  }

  /**
   * @param request - PutDomainPartByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutDomainPartByProxyResponse
   */
  async putDomainPartByProxyWithOptions(request: $_model.PutDomainPartByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutDomainPartByProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutDomainPartByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutDomainPartByProxyResponse>(await this.callApi(params, req, runtime), new $_model.PutDomainPartByProxyResponse({}));
  }

  /**
   * @param request - PutDomainPartByProxyRequest
   * @returns PutDomainPartByProxyResponse
   */
  async putDomainPartByProxy(request: $_model.PutDomainPartByProxyRequest): Promise<$_model.PutDomainPartByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putDomainPartByProxyWithOptions(request, runtime);
  }

  /**
   * 推送计量数据
   * 
   * @param request - PutMeasureDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMeasureDataResponse
   */
  async putMeasureDataWithOptions(request: $_model.PutMeasureDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMeasureDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.sourceRequestId)) {
      query["SourceRequestId"] = request.sourceRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMeasureData",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMeasureDataResponse>(await this.callApi(params, req, runtime), new $_model.PutMeasureDataResponse({}));
  }

  /**
   * 推送计量数据
   * 
   * @param request - PutMeasureDataRequest
   * @returns PutMeasureDataResponse
   */
  async putMeasureData(request: $_model.PutMeasureDataRequest): Promise<$_model.PutMeasureDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMeasureDataWithOptions(request, runtime);
  }

  /**
   * @param request - PutMeasureDataByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMeasureDataByProxyResponse
   */
  async putMeasureDataByProxyWithOptions(request: $_model.PutMeasureDataByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMeasureDataByProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMeasureDataByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMeasureDataByProxyResponse>(await this.callApi(params, req, runtime), new $_model.PutMeasureDataByProxyResponse({}));
  }

  /**
   * @param request - PutMeasureDataByProxyRequest
   * @returns PutMeasureDataByProxyResponse
   */
  async putMeasureDataByProxy(request: $_model.PutMeasureDataByProxyRequest): Promise<$_model.PutMeasureDataByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMeasureDataByProxyWithOptions(request, runtime);
  }

  /**
   * 推送readyflag
   * 
   * @param request - PutReadyFlagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutReadyFlagResponse
   */
  async putReadyFlagWithOptions(request: $_model.PutReadyFlagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutReadyFlagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    if (!$dara.isNull(request.sourceRequestId)) {
      query["SourceRequestId"] = request.sourceRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutReadyFlag",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutReadyFlagResponse>(await this.callApi(params, req, runtime), new $_model.PutReadyFlagResponse({}));
  }

  /**
   * 推送readyflag
   * 
   * @param request - PutReadyFlagRequest
   * @returns PutReadyFlagResponse
   */
  async putReadyFlag(request: $_model.PutReadyFlagRequest): Promise<$_model.PutReadyFlagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putReadyFlagWithOptions(request, runtime);
  }

  /**
   * @param request - PutReadyFlagByProxyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutReadyFlagByProxyResponse
   */
  async putReadyFlagByProxyWithOptions(request: $_model.PutReadyFlagByProxyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutReadyFlagByProxyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiType)) {
      query["ApiType"] = request.apiType;
    }

    if (!$dara.isNull(request.compressed)) {
      query["Compressed"] = request.compressed;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutReadyFlagByProxy",
      version: "2016-06-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutReadyFlagByProxyResponse>(await this.callApi(params, req, runtime), new $_model.PutReadyFlagByProxyResponse({}));
  }

  /**
   * @param request - PutReadyFlagByProxyRequest
   * @returns PutReadyFlagByProxyResponse
   */
  async putReadyFlagByProxy(request: $_model.PutReadyFlagByProxyRequest): Promise<$_model.PutReadyFlagByProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putReadyFlagByProxyWithOptions(request, runtime);
  }

}
