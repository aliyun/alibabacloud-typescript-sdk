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
    this._endpoint = this.getEndpoint("amqp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 路由绑定
   * 
   * @param request - BindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindResponse
   */
  async bindWithOptions(request: $_model.BindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.argument)) {
      query["Argument"] = request.argument;
    }

    if (!$dara.isNull(request.bindingKey)) {
      query["BindingKey"] = request.bindingKey;
    }

    if (!$dara.isNull(request.bindingType)) {
      query["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.dstName)) {
      query["DstName"] = request.dstName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.srcName)) {
      query["SrcName"] = request.srcName;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Bind",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindResponse>(await this.callApi(params, req, runtime), new $_model.BindResponse({}));
  }

  /**
   * 路由绑定
   * 
   * @param request - BindRequest
   * @returns BindResponse
   */
  async bind(request: $_model.BindRequest): Promise<$_model.BindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindWithOptions(request, runtime);
  }

  /**
   * 删除用户配置
   * 
   * @param request - CancelUserSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelUserSettingResponse
   */
  async cancelUserSettingWithOptions(request: $_model.CancelUserSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelUserSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelUserSetting",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelUserSettingResponse>(await this.callApi(params, req, runtime), new $_model.CancelUserSettingResponse({}));
  }

  /**
   * 删除用户配置
   * 
   * @param request - CancelUserSettingRequest
   * @returns CancelUserSettingResponse
   */
  async cancelUserSetting(request: $_model.CancelUserSettingRequest): Promise<$_model.CancelUserSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelUserSettingWithOptions(request, runtime);
  }

  /**
   * 新增用户配置
   * 
   * @param request - ConfigureUserSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigureUserSettingResponse
   */
  async configureUserSettingWithOptions(request: $_model.ConfigureUserSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigureUserSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.logstore)) {
      query["Logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.putType)) {
      query["PutType"] = request.putType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigureUserSetting",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigureUserSettingResponse>(await this.callApi(params, req, runtime), new $_model.ConfigureUserSettingResponse({}));
  }

  /**
   * 新增用户配置
   * 
   * @param request - ConfigureUserSettingRequest
   * @returns ConfigureUserSettingResponse
   */
  async configureUserSetting(request: $_model.ConfigureUserSettingRequest): Promise<$_model.ConfigureUserSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configureUserSettingWithOptions(request, runtime);
  }

  /**
   * 清除售后视角状态
   * 
   * @param request - ConsoleClearPretendStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsoleClearPretendStatusResponse
   */
  async consoleClearPretendStatusWithOptions(request: $_model.ConsoleClearPretendStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConsoleClearPretendStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConsoleClearPretendStatus",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConsoleClearPretendStatusResponse>(await this.callApi(params, req, runtime), new $_model.ConsoleClearPretendStatusResponse({}));
  }

  /**
   * 清除售后视角状态
   * 
   * @param request - ConsoleClearPretendStatusRequest
   * @returns ConsoleClearPretendStatusResponse
   */
  async consoleClearPretendStatus(request: $_model.ConsoleClearPretendStatusRequest): Promise<$_model.ConsoleClearPretendStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.consoleClearPretendStatusWithOptions(request, runtime);
  }

  /**
   * 保存售后视角状态
   * 
   * @param request - ConsoleSavePretendStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsoleSavePretendStatusResponse
   */
  async consoleSavePretendStatusWithOptions(request: $_model.ConsoleSavePretendStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConsoleSavePretendStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConsoleSavePretendStatus",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConsoleSavePretendStatusResponse>(await this.callApi(params, req, runtime), new $_model.ConsoleSavePretendStatusResponse({}));
  }

  /**
   * 保存售后视角状态
   * 
   * @param request - ConsoleSavePretendStatusRequest
   * @returns ConsoleSavePretendStatusResponse
   */
  async consoleSavePretendStatus(request: $_model.ConsoleSavePretendStatusRequest): Promise<$_model.ConsoleSavePretendStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.consoleSavePretendStatusWithOptions(request, runtime);
  }

  /**
   * 创建云监控相关角色
   * 
   * @param request - CreateCloudMonitorSLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloudMonitorSLRResponse
   */
  async createCloudMonitorSLRWithOptions(request: $_model.CreateCloudMonitorSLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloudMonitorSLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloudMonitorSLR",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloudMonitorSLRResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloudMonitorSLRResponse({}));
  }

  /**
   * 创建云监控相关角色
   * 
   * @param request - CreateCloudMonitorSLRRequest
   * @returns CreateCloudMonitorSLRResponse
   */
  async createCloudMonitorSLR(request: $_model.CreateCloudMonitorSLRRequest): Promise<$_model.CreateCloudMonitorSLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloudMonitorSLRWithOptions(request, runtime);
  }

  /**
   * 创建Exchange
   * 
   * @param request - CreateExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExchangeResponse
   */
  async createExchangeWithOptions(request: $_model.CreateExchangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExchangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alternateExchange)) {
      query["AlternateExchange"] = request.alternateExchange;
    }

    if (!$dara.isNull(request.autoDelete)) {
      query["AutoDelete"] = request.autoDelete;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.exchangeName)) {
      query["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.exchangeType)) {
      query["ExchangeType"] = request.exchangeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.internal)) {
      query["Internal"] = request.internal;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    if (!$dara.isNull(request.XDelayedType)) {
      query["XDelayedType"] = request.XDelayedType;
    }

    if (!$dara.isNull(request.XHashHeader)) {
      query["XHashHeader"] = request.XHashHeader;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExchange",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExchangeResponse>(await this.callApi(params, req, runtime), new $_model.CreateExchangeResponse({}));
  }

  /**
   * 创建Exchange
   * 
   * @param request - CreateExchangeRequest
   * @returns CreateExchangeResponse
   */
  async createExchange(request: $_model.CreateExchangeRequest): Promise<$_model.CreateExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExchangeWithOptions(request, runtime);
  }

  /**
   * 创建日志相关角色
   * 
   * @param request - CreateLogDeliverySLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogDeliverySLRResponse
   */
  async createLogDeliverySLRWithOptions(request: $_model.CreateLogDeliverySLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogDeliverySLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogDeliverySLR",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogDeliverySLRResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogDeliverySLRResponse({}));
  }

  /**
   * 创建日志相关角色
   * 
   * @param request - CreateLogDeliverySLRRequest
   * @returns CreateLogDeliverySLRResponse
   */
  async createLogDeliverySLR(request: $_model.CreateLogDeliverySLRRequest): Promise<$_model.CreateLogDeliverySLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLogDeliverySLRWithOptions(request, runtime);
  }

  /**
   * 创建队列
   * 
   * @param request - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(request: $_model.CreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoDelete)) {
      query["AutoDelete"] = request.autoDelete;
    }

    if (!$dara.isNull(request.autoExpire)) {
      query["AutoExpire"] = request.autoExpire;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.deadLetterExchange)) {
      query["DeadLetterExchange"] = request.deadLetterExchange;
    }

    if (!$dara.isNull(request.deadLetterRoutingKey)) {
      query["DeadLetterRoutingKey"] = request.deadLetterRoutingKey;
    }

    if (!$dara.isNull(request.exclusive)) {
      query["Exclusive"] = request.exclusive;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxLength)) {
      query["MaxLength"] = request.maxLength;
    }

    if (!$dara.isNull(request.maximunPrioty)) {
      query["MaximunPrioty"] = request.maximunPrioty;
    }

    if (!$dara.isNull(request.messageTTL)) {
      query["MessageTTL"] = request.messageTTL;
    }

    if (!$dara.isNull(request.ordered)) {
      query["Ordered"] = request.ordered;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.retryInherit)) {
      query["RetryInherit"] = request.retryInherit;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.retryTimes)) {
      query["RetryTimes"] = request.retryTimes;
    }

    if (!$dara.isNull(request.singleActiveConsumer)) {
      query["SingleActiveConsumer"] = request.singleActiveConsumer;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQueueResponse>(await this.callApi(params, req, runtime), new $_model.CreateQueueResponse({}));
  }

  /**
   * 创建队列
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: $_model.CreateQueueRequest): Promise<$_model.CreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * 创建Vhost
   * 
   * @param request - CreateVhostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVhostResponse
   */
  async createVhostWithOptions(request: $_model.CreateVhostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVhostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVhost",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVhostResponse>(await this.callApi(params, req, runtime), new $_model.CreateVhostResponse({}));
  }

  /**
   * 创建Vhost
   * 
   * @param request - CreateVhostRequest
   * @returns CreateVhostResponse
   */
  async createVhost(request: $_model.CreateVhostRequest): Promise<$_model.CreateVhostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVhostWithOptions(request, runtime);
  }

  /**
   * prometheus Dashboard 检查相关服务开通状态
   * 
   * @param request - DashboardCheckServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DashboardCheckServiceStatusResponse
   */
  async dashboardCheckServiceStatusWithOptions(request: $_model.DashboardCheckServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DashboardCheckServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DashboardCheckServiceStatus",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DashboardCheckServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DashboardCheckServiceStatusResponse({}));
  }

  /**
   * prometheus Dashboard 检查相关服务开通状态
   * 
   * @param request - DashboardCheckServiceStatusRequest
   * @returns DashboardCheckServiceStatusResponse
   */
  async dashboardCheckServiceStatus(request: $_model.DashboardCheckServiceStatusRequest): Promise<$_model.DashboardCheckServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dashboardCheckServiceStatusWithOptions(request, runtime);
  }

  /**
   * 获取 arms grafana 大盘 http url
   * 
   * @param request - DashboardListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DashboardListResponse
   */
  async dashboardListWithOptions(request: $_model.DashboardListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DashboardListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.dashboardName)) {
      query["DashboardName"] = request.dashboardName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DashboardList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DashboardListResponse>(await this.callApi(params, req, runtime), new $_model.DashboardListResponse({}));
  }

  /**
   * 获取 arms grafana 大盘 http url
   * 
   * @param request - DashboardListRequest
   * @returns DashboardListResponse
   */
  async dashboardList(request: $_model.DashboardListRequest): Promise<$_model.DashboardListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dashboardListWithOptions(request, runtime);
  }

  /**
   * 删除Exchange
   * 
   * @param tmpReq - DeleteExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExchangeResponse
   */
  async deleteExchangeWithOptions(tmpReq: $_model.DeleteExchangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExchangeResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteExchangeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.exchangeNames)) {
      request.exchangeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.exchangeNames, "ExchangeNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collina)) {
      query["Collina"] = request.collina;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.exchangeName)) {
      query["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.exchangeNamesShrink)) {
      query["ExchangeNames"] = request.exchangeNamesShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.umidToken)) {
      query["UmidToken"] = request.umidToken;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExchange",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExchangeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExchangeResponse({}));
  }

  /**
   * 删除Exchange
   * 
   * @param request - DeleteExchangeRequest
   * @returns DeleteExchangeResponse
   */
  async deleteExchange(request: $_model.DeleteExchangeRequest): Promise<$_model.DeleteExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExchangeWithOptions(request, runtime);
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 删除队列
   * 
   * @param tmpReq - DeleteQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueueResponse
   */
  async deleteQueueWithOptions(tmpReq: $_model.DeleteQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQueueResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collina)) {
      query["Collina"] = request.collina;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    if (!$dara.isNull(request.umidToken)) {
      query["UmidToken"] = request.umidToken;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQueueResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQueueResponse({}));
  }

  /**
   * 删除队列
   * 
   * @param request - DeleteQueueRequest
   * @returns DeleteQueueResponse
   */
  async deleteQueue(request: $_model.DeleteQueueRequest): Promise<$_model.DeleteQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  /**
   * 删除静态账户
   * 
   * @param request - DeleteStaticAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStaticAccountResponse
   */
  async deleteStaticAccountWithOptions(request: $_model.DeleteStaticAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStaticAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.createTimeStamp)) {
      query["CreateTimeStamp"] = request.createTimeStamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStaticAccount",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStaticAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStaticAccountResponse({}));
  }

  /**
   * 删除静态账户
   * 
   * @param request - DeleteStaticAccountRequest
   * @returns DeleteStaticAccountResponse
   */
  async deleteStaticAccount(request: $_model.DeleteStaticAccountRequest): Promise<$_model.DeleteStaticAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStaticAccountWithOptions(request, runtime);
  }

  /**
   * 删除Vhost
   * 
   * @param tmpReq - DeleteVhostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVhostResponse
   */
  async deleteVhostWithOptions(tmpReq: $_model.DeleteVhostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVhostResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteVhostShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vhostNames)) {
      request.vhostNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vhostNames, "VhostNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    if (!$dara.isNull(request.vhostNamesShrink)) {
      query["VhostNames"] = request.vhostNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVhost",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVhostResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVhostResponse({}));
  }

  /**
   * 删除Vhost
   * 
   * @param request - DeleteVhostRequest
   * @returns DeleteVhostResponse
   */
  async deleteVhost(request: $_model.DeleteVhostRequest): Promise<$_model.DeleteVhostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVhostWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 导出元数据
   * 
   * @param request - ExportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportResponse
   */
  async exportWithOptions(request: $_model.ExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Export",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportResponse>(await this.callApi(params, req, runtime), new $_model.ExportResponse({}));
  }

  /**
   * 导出元数据
   * 
   * @param request - ExportRequest
   * @returns ExportResponse
   */
  async export(request: $_model.ExportRequest): Promise<$_model.ExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportWithOptions(request, runtime);
  }

  /**
   * 更新静态账户
   * 
   * @param request - FetchStaticAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchStaticAccountResponse
   */
  async fetchStaticAccountWithOptions(request: $_model.FetchStaticAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FetchStaticAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountAccessKey)) {
      query["AccountAccessKey"] = request.accountAccessKey;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.createTimeStamp)) {
      query["CreateTimeStamp"] = request.createTimeStamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.SKey)) {
      query["SKey"] = request.SKey;
    }

    if (!$dara.isNull(request.secretSign)) {
      query["SecretSign"] = request.secretSign;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchStaticAccount",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchStaticAccountResponse>(await this.callApi(params, req, runtime), new $_model.FetchStaticAccountResponse({}));
  }

  /**
   * 更新静态账户
   * 
   * @param request - FetchStaticAccountRequest
   * @returns FetchStaticAccountResponse
   */
  async fetchStaticAccount(request: $_model.FetchStaticAccountRequest): Promise<$_model.FetchStaticAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fetchStaticAccountWithOptions(request, runtime);
  }

  /**
   * 根据耗时查询ack信息
   * 
   * @param request - GetAckInfoByIntervalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAckInfoByIntervalResponse
   */
  async getAckInfoByIntervalWithOptions(request: $_model.GetAckInfoByIntervalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAckInfoByIntervalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.intervalSec)) {
      query["IntervalSec"] = request.intervalSec;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAckInfoByInterval",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAckInfoByIntervalResponse>(await this.callApi(params, req, runtime), new $_model.GetAckInfoByIntervalResponse({}));
  }

  /**
   * 根据耗时查询ack信息
   * 
   * @param request - GetAckInfoByIntervalRequest
   * @returns GetAckInfoByIntervalResponse
   */
  async getAckInfoByInterval(request: $_model.GetAckInfoByIntervalRequest): Promise<$_model.GetAckInfoByIntervalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAckInfoByIntervalWithOptions(request, runtime);
  }

  /**
   * 获取一个PushMessage（PullMessage）对应的Ack行为
   * 
   * @param request - GetAckInfoOfMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAckInfoOfMessageResponse
   */
  async getAckInfoOfMessageWithOptions(request: $_model.GetAckInfoOfMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAckInfoOfMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.consumeStatus)) {
      query["ConsumeStatus"] = request.consumeStatus;
    }

    if (!$dara.isNull(request.deliveryTag)) {
      query["DeliveryTag"] = request.deliveryTag;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStamp)) {
      query["TimeStamp"] = request.timeStamp;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAckInfoOfMessage",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAckInfoOfMessageResponse>(await this.callApi(params, req, runtime), new $_model.GetAckInfoOfMessageResponse({}));
  }

  /**
   * 获取一个PushMessage（PullMessage）对应的Ack行为
   * 
   * @param request - GetAckInfoOfMessageRequest
   * @returns GetAckInfoOfMessageResponse
   */
  async getAckInfoOfMessage(request: $_model.GetAckInfoOfMessageRequest): Promise<$_model.GetAckInfoOfMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAckInfoOfMessageWithOptions(request, runtime);
  }

  /**
   * 获取绑定数量
   * 
   * @param request - GetBindingCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBindingCountResponse
   */
  async getBindingCountWithOptions(request: $_model.GetBindingCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBindingCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindingType)) {
      query["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.upstream)) {
      query["Upstream"] = request.upstream;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBindingCount",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBindingCountResponse>(await this.callApi(params, req, runtime), new $_model.GetBindingCountResponse({}));
  }

  /**
   * 获取绑定数量
   * 
   * @param request - GetBindingCountRequest
   * @returns GetBindingCountResponse
   */
  async getBindingCount(request: $_model.GetBindingCountRequest): Promise<$_model.GetBindingCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBindingCountWithOptions(request, runtime);
  }

  /**
   * 获取绑定错误
   * 
   * @param request - GetBindingErrorByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBindingErrorByTaskIdResponse
   */
  async getBindingErrorByTaskIdWithOptions(request: $_model.GetBindingErrorByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBindingErrorByTaskIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBindingErrorByTaskId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBindingErrorByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetBindingErrorByTaskIdResponse({}));
  }

  /**
   * 获取绑定错误
   * 
   * @param request - GetBindingErrorByTaskIdRequest
   * @returns GetBindingErrorByTaskIdResponse
   */
  async getBindingErrorByTaskId(request: $_model.GetBindingErrorByTaskIdRequest): Promise<$_model.GetBindingErrorByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBindingErrorByTaskIdWithOptions(request, runtime);
  }

  /**
   * @param request - GetCommonBuyUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommonBuyUrlResponse
   */
  async getCommonBuyUrlWithOptions(request: $_model.GetCommonBuyUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCommonBuyUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommonBuyUrl",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCommonBuyUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetCommonBuyUrlResponse({}));
  }

  /**
   * @param request - GetCommonBuyUrlRequest
   * @returns GetCommonBuyUrlResponse
   */
  async getCommonBuyUrl(request: $_model.GetCommonBuyUrlRequest): Promise<$_model.GetCommonBuyUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommonBuyUrlWithOptions(request, runtime);
  }

  /**
   * 通过rocketMqMsgId查询消息消费轨迹
   * 
   * @param request - GetConsumeTraceByQueueAndRocketMqMsgIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumeTraceByQueueAndRocketMqMsgIdResponse
   */
  async getConsumeTraceByQueueAndRocketMqMsgIdWithOptions(request: $_model.GetConsumeTraceByQueueAndRocketMqMsgIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumeTraceByQueueAndRocketMqMsgIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumeTraceByQueueAndRocketMqMsgId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumeTraceByQueueAndRocketMqMsgIdResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumeTraceByQueueAndRocketMqMsgIdResponse({}));
  }

  /**
   * 通过rocketMqMsgId查询消息消费轨迹
   * 
   * @param request - GetConsumeTraceByQueueAndRocketMqMsgIdRequest
   * @returns GetConsumeTraceByQueueAndRocketMqMsgIdResponse
   */
  async getConsumeTraceByQueueAndRocketMqMsgId(request: $_model.GetConsumeTraceByQueueAndRocketMqMsgIdRequest): Promise<$_model.GetConsumeTraceByQueueAndRocketMqMsgIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsumeTraceByQueueAndRocketMqMsgIdWithOptions(request, runtime);
  }

  /**
   * 获取Exchange错误
   * 
   * @param request - GetExchangeErrorByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExchangeErrorByTaskIdResponse
   */
  async getExchangeErrorByTaskIdWithOptions(request: $_model.GetExchangeErrorByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExchangeErrorByTaskIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExchangeErrorByTaskId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExchangeErrorByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetExchangeErrorByTaskIdResponse({}));
  }

  /**
   * 获取Exchange错误
   * 
   * @param request - GetExchangeErrorByTaskIdRequest
   * @returns GetExchangeErrorByTaskIdResponse
   */
  async getExchangeErrorByTaskId(request: $_model.GetExchangeErrorByTaskIdRequest): Promise<$_model.GetExchangeErrorByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExchangeErrorByTaskIdWithOptions(request, runtime);
  }

  /**
   * 获取Exchange Rate
   * 
   * @param tmpReq - GetExchangeRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExchangeRateResponse
   */
  async getExchangeRateWithOptions(tmpReq: $_model.GetExchangeRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExchangeRateResponse> {
    tmpReq.validate();
    let request = new $_model.GetExchangeRateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.exchangeNames)) {
      request.exchangeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.exchangeNames, "ExchangeNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.exchangeNamesShrink)) {
      query["ExchangeNames"] = request.exchangeNamesShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExchangeRate",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExchangeRateResponse>(await this.callApi(params, req, runtime), new $_model.GetExchangeRateResponse({}));
  }

  /**
   * 获取Exchange Rate
   * 
   * @param request - GetExchangeRateRequest
   * @returns GetExchangeRateResponse
   */
  async getExchangeRate(request: $_model.GetExchangeRateRequest): Promise<$_model.GetExchangeRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExchangeRateWithOptions(request, runtime);
  }

  /**
   * 通过queueName查询一段时间内的消息id列表
   * 
   * @param request - GetMsgIdListByQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMsgIdListByQueueResponse
   */
  async getMsgIdListByQueueWithOptions(request: $_model.GetMsgIdListByQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMsgIdListByQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMsgIdListByQueue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMsgIdListByQueueResponse>(await this.callApi(params, req, runtime), new $_model.GetMsgIdListByQueueResponse({}));
  }

  /**
   * 通过queueName查询一段时间内的消息id列表
   * 
   * @param request - GetMsgIdListByQueueRequest
   * @returns GetMsgIdListByQueueResponse
   */
  async getMsgIdListByQueue(request: $_model.GetMsgIdListByQueueRequest): Promise<$_model.GetMsgIdListByQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMsgIdListByQueueWithOptions(request, runtime);
  }

  /**
   * GetQueueConsumers
   * 
   * @param request - GetQueueConsumersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueConsumersResponse
   */
  async getQueueConsumersWithOptions(request: $_model.GetQueueConsumersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueConsumersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueConsumers",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueConsumersResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueConsumersResponse({}));
  }

  /**
   * GetQueueConsumers
   * 
   * @param request - GetQueueConsumersRequest
   * @returns GetQueueConsumersResponse
   */
  async getQueueConsumers(request: $_model.GetQueueConsumersRequest): Promise<$_model.GetQueueConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueConsumersWithOptions(request, runtime);
  }

  /**
   * 获取队列错误
   * 
   * @param request - GetQueueErrorByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueErrorByTaskIdResponse
   */
  async getQueueErrorByTaskIdWithOptions(request: $_model.GetQueueErrorByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueErrorByTaskIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueErrorByTaskId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueErrorByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueErrorByTaskIdResponse({}));
  }

  /**
   * 获取队列错误
   * 
   * @param request - GetQueueErrorByTaskIdRequest
   * @returns GetQueueErrorByTaskIdResponse
   */
  async getQueueErrorByTaskId(request: $_model.GetQueueErrorByTaskIdRequest): Promise<$_model.GetQueueErrorByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueErrorByTaskIdWithOptions(request, runtime);
  }

  /**
   * 获取Queue Rate
   * 
   * @param tmpReq - GetQueueRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueRateResponse
   */
  async getQueueRateWithOptions(tmpReq: $_model.GetQueueRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueRateResponse> {
    tmpReq.validate();
    let request = new $_model.GetQueueRateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueueRate",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueRateResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueRateResponse({}));
  }

  /**
   * 获取Queue Rate
   * 
   * @param request - GetQueueRateRequest
   * @returns GetQueueRateResponse
   */
  async getQueueRate(request: $_model.GetQueueRateRequest): Promise<$_model.GetQueueRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueRateWithOptions(request, runtime);
  }

  /**
   * 根据connectionId,channelId,deliveryTag查询SendMessage
   * 
   * @param request - GetSendTraceByConnectionAndChannelAndDeliveryTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSendTraceByConnectionAndChannelAndDeliveryTagResponse
   */
  async getSendTraceByConnectionAndChannelAndDeliveryTagWithOptions(request: $_model.GetSendTraceByConnectionAndChannelAndDeliveryTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSendTraceByConnectionAndChannelAndDeliveryTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.deliveryTag)) {
      query["DeliveryTag"] = request.deliveryTag;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSendTraceByConnectionAndChannelAndDeliveryTag",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSendTraceByConnectionAndChannelAndDeliveryTagResponse>(await this.callApi(params, req, runtime), new $_model.GetSendTraceByConnectionAndChannelAndDeliveryTagResponse({}));
  }

  /**
   * 根据connectionId,channelId,deliveryTag查询SendMessage
   * 
   * @param request - GetSendTraceByConnectionAndChannelAndDeliveryTagRequest
   * @returns GetSendTraceByConnectionAndChannelAndDeliveryTagResponse
   */
  async getSendTraceByConnectionAndChannelAndDeliveryTag(request: $_model.GetSendTraceByConnectionAndChannelAndDeliveryTagRequest): Promise<$_model.GetSendTraceByConnectionAndChannelAndDeliveryTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSendTraceByConnectionAndChannelAndDeliveryTagWithOptions(request, runtime);
  }

  /**
   * 通过用户msgId查询消息发送轨迹
   * 
   * @param request - GetSendTraceByMsgIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSendTraceByMsgIdResponse
   */
  async getSendTraceByMsgIdWithOptions(request: $_model.GetSendTraceByMsgIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSendTraceByMsgIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSendTraceByMsgId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSendTraceByMsgIdResponse>(await this.callApi(params, req, runtime), new $_model.GetSendTraceByMsgIdResponse({}));
  }

  /**
   * 通过用户msgId查询消息发送轨迹
   * 
   * @param request - GetSendTraceByMsgIdRequest
   * @returns GetSendTraceByMsgIdResponse
   */
  async getSendTraceByMsgId(request: $_model.GetSendTraceByMsgIdRequest): Promise<$_model.GetSendTraceByMsgIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSendTraceByMsgIdWithOptions(request, runtime);
  }

  /**
   * 根据queue 查询SendMessage
   * 
   * @param request - GetSendTraceByQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSendTraceByQueueResponse
   */
  async getSendTraceByQueueWithOptions(request: $_model.GetSendTraceByQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSendTraceByQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSendTraceByQueue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSendTraceByQueueResponse>(await this.callApi(params, req, runtime), new $_model.GetSendTraceByQueueResponse({}));
  }

  /**
   * 根据queue 查询SendMessage
   * 
   * @param request - GetSendTraceByQueueRequest
   * @returns GetSendTraceByQueueResponse
   */
  async getSendTraceByQueue(request: $_model.GetSendTraceByQueueRequest): Promise<$_model.GetSendTraceByQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSendTraceByQueueWithOptions(request, runtime);
  }

  /**
   * GetStatisticsByVhost
   * 
   * @param request - GetStatisticsByVhostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStatisticsByVhostResponse
   */
  async getStatisticsByVhostWithOptions(request: $_model.GetStatisticsByVhostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStatisticsByVhostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStatisticsByVhost",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStatisticsByVhostResponse>(await this.callApi(params, req, runtime), new $_model.GetStatisticsByVhostResponse({}));
  }

  /**
   * GetStatisticsByVhost
   * 
   * @param request - GetStatisticsByVhostRequest
   * @returns GetStatisticsByVhostResponse
   */
  async getStatisticsByVhost(request: $_model.GetStatisticsByVhostRequest): Promise<$_model.GetStatisticsByVhostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStatisticsByVhostWithOptions(request, runtime);
  }

  /**
   * 获取任务
   * 
   * @param request - GetTaskByUidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskByUidResponse
   */
  async getTaskByUidWithOptions(request: $_model.GetTaskByUidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskByUidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskByUid",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskByUidResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskByUidResponse({}));
  }

  /**
   * 获取任务
   * 
   * @param request - GetTaskByUidRequest
   * @returns GetTaskByUidResponse
   */
  async getTaskByUid(request: $_model.GetTaskByUidRequest): Promise<$_model.GetTaskByUidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskByUidWithOptions(request, runtime);
  }

  /**
   * 查询一段时间内某个实例或是vhost或是queue的tps
   * 
   * @param request - GetTpsByTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTpsByTimeResponse
   */
  async getTpsByTimeWithOptions(request: $_model.GetTpsByTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTpsByTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.api)) {
      query["Api"] = request.api;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTpsByTime",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTpsByTimeResponse>(await this.callApi(params, req, runtime), new $_model.GetTpsByTimeResponse({}));
  }

  /**
   * 查询一段时间内某个实例或是vhost或是queue的tps
   * 
   * @param request - GetTpsByTimeRequest
   * @returns GetTpsByTimeResponse
   */
  async getTpsByTime(request: $_model.GetTpsByTimeRequest): Promise<$_model.GetTpsByTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTpsByTimeWithOptions(request, runtime);
  }

  /**
   * 获取用户配置
   * 
   * @param request - GetUserSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserSettingResponse
   */
  async getUserSettingWithOptions(request: $_model.GetUserSettingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserSetting",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetUserSettingResponse({}));
  }

  /**
   * 获取用户配置
   * 
   * @param request - GetUserSettingRequest
   * @returns GetUserSettingResponse
   */
  async getUserSetting(request: $_model.GetUserSettingRequest): Promise<$_model.GetUserSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserSettingWithOptions(request, runtime);
  }

  /**
   * 获取Vhost错误
   * 
   * @param request - GetVhostErrorByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVhostErrorByTaskIdResponse
   */
  async getVhostErrorByTaskIdWithOptions(request: $_model.GetVhostErrorByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVhostErrorByTaskIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVhostErrorByTaskId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVhostErrorByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetVhostErrorByTaskIdResponse({}));
  }

  /**
   * 获取Vhost错误
   * 
   * @param request - GetVhostErrorByTaskIdRequest
   * @returns GetVhostErrorByTaskIdResponse
   */
  async getVhostErrorByTaskId(request: $_model.GetVhostErrorByTaskIdRequest): Promise<$_model.GetVhostErrorByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVhostErrorByTaskIdWithOptions(request, runtime);
  }

  /**
   * 获取Vhost Rate
   * 
   * @param tmpReq - GetVhostRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVhostRateResponse
   */
  async getVhostRateWithOptions(tmpReq: $_model.GetVhostRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVhostRateResponse> {
    tmpReq.validate();
    let request = new $_model.GetVhostRateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vhostNames)) {
      request.vhostNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vhostNames, "VhostNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostNamesShrink)) {
      query["VhostNames"] = request.vhostNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVhostRate",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVhostRateResponse>(await this.callApi(params, req, runtime), new $_model.GetVhostRateResponse({}));
  }

  /**
   * 获取Vhost Rate
   * 
   * @param request - GetVhostRateRequest
   * @returns GetVhostRateResponse
   */
  async getVhostRate(request: $_model.GetVhostRateRequest): Promise<$_model.GetVhostRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVhostRateWithOptions(request, runtime);
  }

  /**
   * 异步导入元数据
   * 
   * @param request - ImportDefinitionAsynchronousRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportDefinitionAsynchronousResponse
   */
  async importDefinitionAsynchronousWithOptions(request: $_model.ImportDefinitionAsynchronousRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportDefinitionAsynchronousResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.importType)) {
      query["ImportType"] = request.importType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ossUrl)) {
      query["OssUrl"] = request.ossUrl;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportDefinitionAsynchronous",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportDefinitionAsynchronousResponse>(await this.callApi(params, req, runtime), new $_model.ImportDefinitionAsynchronousResponse({}));
  }

  /**
   * 异步导入元数据
   * 
   * @param request - ImportDefinitionAsynchronousRequest
   * @returns ImportDefinitionAsynchronousResponse
   */
  async importDefinitionAsynchronous(request: $_model.ImportDefinitionAsynchronousRequest): Promise<$_model.ImportDefinitionAsynchronousResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importDefinitionAsynchronousWithOptions(request, runtime);
  }

  /**
   * 获取实例列表
   * 
   * @param request - InstancePreivewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstancePreivewResponse
   */
  async instancePreivewWithOptions(request: $_model.InstancePreivewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstancePreivewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstancePreivew",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstancePreivewResponse>(await this.callApi(params, req, runtime), new $_model.InstancePreivewResponse({}));
  }

  /**
   * 获取实例列表
   * 
   * @param request - InstancePreivewRequest
   * @returns InstancePreivewResponse
   */
  async instancePreivew(request: $_model.InstancePreivewRequest): Promise<$_model.InstancePreivewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.instancePreivewWithOptions(request, runtime);
  }

  /**
   * 获取Exchange列表
   * 
   * @param request - ListExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangeResponse
   */
  async listExchangeWithOptions(request: $_model.ListExchangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExchangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.exchangeNamePrefix)) {
      query["ExchangeNamePrefix"] = request.exchangeNamePrefix;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchange",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExchangeResponse>(await this.callApi(params, req, runtime), new $_model.ListExchangeResponse({}));
  }

  /**
   * 获取Exchange列表
   * 
   * @param request - ListExchangeRequest
   * @returns ListExchangeResponse
   */
  async listExchange(request: $_model.ListExchangeRequest): Promise<$_model.ListExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangeWithOptions(request, runtime);
  }

  /**
   * 获取Exchange下游列表
   * 
   * @param request - ListExchangeDownstreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangeDownstreamBindingsResponse
   */
  async listExchangeDownstreamBindingsWithOptions(request: $_model.ListExchangeDownstreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExchangeDownstreamBindingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.exchangeName)) {
      query["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchangeDownstreamBindings",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExchangeDownstreamBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListExchangeDownstreamBindingsResponse({}));
  }

  /**
   * 获取Exchange下游列表
   * 
   * @param request - ListExchangeDownstreamBindingsRequest
   * @returns ListExchangeDownstreamBindingsResponse
   */
  async listExchangeDownstreamBindings(request: $_model.ListExchangeDownstreamBindingsRequest): Promise<$_model.ListExchangeDownstreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangeDownstreamBindingsWithOptions(request, runtime);
  }

  /**
   * 获取Exchange上游绑定列表
   * 
   * @param request - ListExchangeUpstreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangeUpstreamBindingsResponse
   */
  async listExchangeUpstreamBindingsWithOptions(request: $_model.ListExchangeUpstreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExchangeUpstreamBindingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.exchangeName)) {
      query["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchangeUpstreamBindings",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExchangeUpstreamBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListExchangeUpstreamBindingsResponse({}));
  }

  /**
   * 获取Exchange上游绑定列表
   * 
   * @param request - ListExchangeUpstreamBindingsRequest
   * @returns ListExchangeUpstreamBindingsResponse
   */
  async listExchangeUpstreamBindings(request: $_model.ListExchangeUpstreamBindingsRequest): Promise<$_model.ListExchangeUpstreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangeUpstreamBindingsWithOptions(request, runtime);
  }

  /**
   * 获取实例列表
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: $_model.ListInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResponse({}));
  }

  /**
   * 获取实例列表
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: $_model.ListInstanceRequest): Promise<$_model.ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * 获取实例告警
   * 
   * @param request - ListInstanceAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAlarmResponse
   */
  async listInstanceAlarmWithOptions(request: $_model.ListInstanceAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceAlarm",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceAlarmResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceAlarmResponse({}));
  }

  /**
   * 获取实例告警
   * 
   * @param request - ListInstanceAlarmRequest
   * @returns ListInstanceAlarmResponse
   */
  async listInstanceAlarm(request: $_model.ListInstanceAlarmRequest): Promise<$_model.ListInstanceAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceAlarmWithOptions(request, runtime);
  }

  /**
   * 获取日志Logstore
   * 
   * @param request - ListLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogstoreResponse
   */
  async listLogstoreWithOptions(request: $_model.ListLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogstoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogstore",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogstoreResponse>(await this.callApi(params, req, runtime), new $_model.ListLogstoreResponse({}));
  }

  /**
   * 获取日志Logstore
   * 
   * @param request - ListLogstoreRequest
   * @returns ListLogstoreResponse
   */
  async listLogstore(request: $_model.ListLogstoreRequest): Promise<$_model.ListLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLogstoreWithOptions(request, runtime);
  }

  /**
   * 获取日志Project
   * 
   * @param request - ListProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(request: $_model.ListProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectResponse({}));
  }

  /**
   * 获取日志Project
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: $_model.ListProjectRequest): Promise<$_model.ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectWithOptions(request, runtime);
  }

  /**
   * 获取队列列表
   * 
   * @param request - ListQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueResponse
   */
  async listQueueWithOptions(request: $_model.ListQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueNamePrefix)) {
      query["QueueNamePrefix"] = request.queueNamePrefix;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueueResponse>(await this.callApi(params, req, runtime), new $_model.ListQueueResponse({}));
  }

  /**
   * 获取队列列表
   * 
   * @param request - ListQueueRequest
   * @returns ListQueueResponse
   */
  async listQueue(request: $_model.ListQueueRequest): Promise<$_model.ListQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueWithOptions(request, runtime);
  }

  /**
   * 获取队列上游绑定列表
   * 
   * @param request - ListQueueUpstreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueUpstreamBindingsResponse
   */
  async listQueueUpstreamBindingsWithOptions(request: $_model.ListQueueUpstreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueueUpstreamBindingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueueUpstreamBindings",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueueUpstreamBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListQueueUpstreamBindingsResponse({}));
  }

  /**
   * 获取队列上游绑定列表
   * 
   * @param request - ListQueueUpstreamBindingsRequest
   * @returns ListQueueUpstreamBindingsResponse
   */
  async listQueueUpstreamBindings(request: $_model.ListQueueUpstreamBindingsRequest): Promise<$_model.ListQueueUpstreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueUpstreamBindingsWithOptions(request, runtime);
  }

  /**
   * 获取静态账户列表
   * 
   * @param request - ListStaticAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStaticAccountsResponse
   */
  async listStaticAccountsWithOptions(request: $_model.ListStaticAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStaticAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStaticAccounts",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStaticAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListStaticAccountsResponse({}));
  }

  /**
   * 获取静态账户列表
   * 
   * @param request - ListStaticAccountsRequest
   * @returns ListStaticAccountsResponse
   */
  async listStaticAccounts(request: $_model.ListStaticAccountsRequest): Promise<$_model.ListStaticAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStaticAccountsWithOptions(request, runtime);
  }

  /**
   * 获取Vhost列表
   * 
   * @param request - ListVhostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVhostResponse
   */
  async listVhostWithOptions(request: $_model.ListVhostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVhostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vhostNamePrefix)) {
      query["VhostNamePrefix"] = request.vhostNamePrefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVhost",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVhostResponse>(await this.callApi(params, req, runtime), new $_model.ListVhostResponse({}));
  }

  /**
   * 获取Vhost列表
   * 
   * @param request - ListVhostRequest
   * @returns ListVhostResponse
   */
  async listVhost(request: $_model.ListVhostRequest): Promise<$_model.ListVhostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVhostWithOptions(request, runtime);
  }

  /**
   * 获取元数据
   * 
   * @param request - MetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MetadataResponse
   */
  async metadataWithOptions(request: $_model.MetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MetadataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Metadata",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MetadataResponse>(await this.callApi(params, req, runtime), new $_model.MetadataResponse({}));
  }

  /**
   * 获取元数据
   * 
   * @param request - MetadataRequest
   * @returns MetadataResponse
   */
  async metadata(request: $_model.MetadataRequest): Promise<$_model.MetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.metadataWithOptions(request, runtime);
  }

  /**
   * 清空队列
   * 
   * @param tmpReq - PurgeQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurgeQueueResponse
   */
  async purgeQueueWithOptions(tmpReq: $_model.PurgeQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurgeQueueResponse> {
    tmpReq.validate();
    let request = new $_model.PurgeQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.collina)) {
      query["Collina"] = request.collina;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    if (!$dara.isNull(request.umidToken)) {
      query["UmidToken"] = request.umidToken;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PurgeQueue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurgeQueueResponse>(await this.callApi(params, req, runtime), new $_model.PurgeQueueResponse({}));
  }

  /**
   * 清空队列
   * 
   * @param request - PurgeQueueRequest
   * @returns PurgeQueueResponse
   */
  async purgeQueue(request: $_model.PurgeQueueRequest): Promise<$_model.PurgeQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purgeQueueWithOptions(request, runtime);
  }

  /**
   * 根据Message Id查询消息
   * 
   * @param request - QueryMessageByMessageIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageByMessageIdResponse
   */
  async queryMessageByMessageIdWithOptions(request: $_model.QueryMessageByMessageIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMessageByMessageIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMessageByMessageId",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMessageByMessageIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryMessageByMessageIdResponse({}));
  }

  /**
   * 根据Message Id查询消息
   * 
   * @param request - QueryMessageByMessageIdRequest
   * @returns QueryMessageByMessageIdResponse
   */
  async queryMessageByMessageId(request: $_model.QueryMessageByMessageIdRequest): Promise<$_model.QueryMessageByMessageIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageByMessageIdWithOptions(request, runtime);
  }

  /**
   * 根据队列查询消息
   * 
   * @param request - QueryMessageByQueueNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageByQueueNameResponse
   */
  async queryMessageByQueueNameWithOptions(request: $_model.QueryMessageByQueueNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMessageByQueueNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMessageByQueueName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMessageByQueueNameResponse>(await this.callApi(params, req, runtime), new $_model.QueryMessageByQueueNameResponse({}));
  }

  /**
   * 根据队列查询消息
   * 
   * @param request - QueryMessageByQueueNameRequest
   * @returns QueryMessageByQueueNameResponse
   */
  async queryMessageByQueueName(request: $_model.QueryMessageByQueueNameRequest): Promise<$_model.QueryMessageByQueueNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageByQueueNameWithOptions(request, runtime);
  }

  /**
   * 实例释放
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * 实例释放
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * 发送消息
   * 
   * @param request - SendMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(request: $_model.SendMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.exchangeName)) {
      query["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.props)) {
      query["Props"] = request.props;
    }

    if (!$dara.isNull(request.routingKey)) {
      query["RoutingKey"] = request.routingKey;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageResponse({}));
  }

  /**
   * 发送消息
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(request: $_model.SendMessageRequest): Promise<$_model.SendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  /**
   * 发送消息
   * 
   * @param request - SendMessageCopyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageCopyResponse
   */
  async sendMessageCopyWithOptions(request: $_model.SendMessageCopyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageCopyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.processToken)) {
      query["ProcessToken"] = request.processToken;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessageCopy",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendMessageCopyResponse>(await this.callApi(params, req, runtime), new $_model.SendMessageCopyResponse({}));
  }

  /**
   * 发送消息
   * 
   * @param request - SendMessageCopyRequest
   * @returns SendMessageCopyResponse
   */
  async sendMessageCopy(request: $_model.SendMessageCopyRequest): Promise<$_model.SendMessageCopyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageCopyWithOptions(request, runtime);
  }

  /**
   * 取消绑定
   * 
   * @param request - UnbindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindResponse
   */
  async unbindWithOptions(request: $_model.UnbindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindingKey)) {
      query["BindingKey"] = request.bindingKey;
    }

    if (!$dara.isNull(request.bindingType)) {
      query["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.dstName)) {
      query["DstName"] = request.dstName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.srcName)) {
      query["SrcName"] = request.srcName;
    }

    if (!$dara.isNull(request.vhostName)) {
      query["VhostName"] = request.vhostName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Unbind",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindResponse>(await this.callApi(params, req, runtime), new $_model.UnbindResponse({}));
  }

  /**
   * 取消绑定
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: $_model.UnbindRequest): Promise<$_model.UnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * 修改实例的重试策略
   * 
   * @param request - UpdateInstanceRetryStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceRetryStrategyResponse
   */
  async updateInstanceRetryStrategyWithOptions(request: $_model.UpdateInstanceRetryStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceRetryStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.retryTimes)) {
      query["RetryTimes"] = request.retryTimes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceRetryStrategy",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceRetryStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceRetryStrategyResponse({}));
  }

  /**
   * 修改实例的重试策略
   * 
   * @param request - UpdateInstanceRetryStrategyRequest
   * @returns UpdateInstanceRetryStrategyResponse
   */
  async updateInstanceRetryStrategy(request: $_model.UpdateInstanceRetryStrategyRequest): Promise<$_model.UpdateInstanceRetryStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceRetryStrategyWithOptions(request, runtime);
  }

  /**
   * 更新serverless开关
   * 
   * @param request - UpdateServerlessSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerlessSwitchResponse
   */
  async updateServerlessSwitchWithOptions(request: $_model.UpdateServerlessSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServerlessSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.serverlessSwitch)) {
      query["ServerlessSwitch"] = request.serverlessSwitch;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServerlessSwitch",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServerlessSwitchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServerlessSwitchResponse({}));
  }

  /**
   * 更新serverless开关
   * 
   * @param request - UpdateServerlessSwitchRequest
   * @returns UpdateServerlessSwitchResponse
   */
  async updateServerlessSwitch(request: $_model.UpdateServerlessSwitchRequest): Promise<$_model.UpdateServerlessSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServerlessSwitchWithOptions(request, runtime);
  }

  /**
   * 升级实例配额
   * 
   * @param request - UpgradeLimitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeLimitsResponse
   */
  async upgradeLimitsWithOptions(request: $_model.UpgradeLimitsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeLimitsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consoleSessionId)) {
      query["ConsoleSessionId"] = request.consoleSessionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeLimits",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeLimitsResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeLimitsResponse({}));
  }

  /**
   * 升级实例配额
   * 
   * @param request - UpgradeLimitsRequest
   * @returns UpgradeLimitsResponse
   */
  async upgradeLimits(request: $_model.UpgradeLimitsRequest): Promise<$_model.UpgradeLimitsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeLimitsWithOptions(request, runtime);
  }

}
