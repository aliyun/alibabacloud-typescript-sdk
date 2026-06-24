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
      'us-west-1': "amqp-open.us-west-1.aliyuncs.com",
      'us-east-1': "amqp-open.us-east-1.aliyuncs.com",
      'me-central-1': "amqp-open.me-central-1.aliyuncs.com",
      'eu-central-1': "amqp-open.eu-central-1.aliyuncs.com",
      'cn-zhengzhou-jva': "amqp-open.cn-zhengzhou-jva.aliyuncs.com",
      'cn-zhangjiakou': "amqp-open.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "amqp-open.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "amqp-open.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "amqp-open.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "amqp-open.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "amqp-open.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "amqp-open.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "amqp-open.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "amqp-open.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "amqp-open.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "amqp-open.cn-chengdu.aliyuncs.com",
      'cn-beijing-finance-1': "amqp-open.cn-beijing-finance-1.aliyuncs.com",
      'cn-beijing': "amqp-open.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "amqp-open.ap-southeast-7.aliyuncs.com",
      'ap-southeast-6': "amqp-open.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "amqp-open.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "amqp-open.ap-southeast-3.aliyuncs.com",
      'ap-southeast-1': "amqp-open.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "amqp-open.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("amqp-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds an entry to the whitelist of an instance.
   * 
   * @param tmpReq - AddInstanceWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddInstanceWhiteListResponse
   */
  async addInstanceWhiteListWithOptions(tmpReq: $_model.AddInstanceWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddInstanceWhiteListResponse> {
    tmpReq.validate();
    let request = new $_model.AddInstanceWhiteListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.whiteListItem)) {
      request.whiteListItemShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.whiteListItem, "WhiteListItem", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.whiteListItemShrink)) {
      query["WhiteListItem"] = request.whiteListItemShrink;
    }

    if (!$dara.isNull(request.whiteListType)) {
      query["WhiteListType"] = request.whiteListType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddInstanceWhiteList",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddInstanceWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.AddInstanceWhiteListResponse({}));
  }

  /**
   * Adds an entry to the whitelist of an instance.
   * 
   * @param request - AddInstanceWhiteListRequest
   * @returns AddInstanceWhiteListResponse
   */
  async addInstanceWhiteList(request: $_model.AddInstanceWhiteListRequest): Promise<$_model.AddInstanceWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addInstanceWhiteListWithOptions(request, runtime);
  }

  /**
   * When an open-source client accesses an ApsaraMQ for RabbitMQ server, it must provide a username and password for authentication. ApsaraMQ for RabbitMQ lets you generate a username and password from an AccessKey ID and AccessKey secret provided by Resource Access Management (RAM).
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.accountAccessKey)) {
      query["accountAccessKey"] = request.accountAccessKey;
    }

    if (!$dara.isNull(request.createTimestamp)) {
      query["createTimestamp"] = request.createTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secretSign)) {
      query["secretSign"] = request.secretSign;
    }

    if (!$dara.isNull(request.signature)) {
      query["signature"] = request.signature;
    }

    if (!$dara.isNull(request.userName)) {
      query["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountResponse({}));
  }

  /**
   * When an open-source client accesses an ApsaraMQ for RabbitMQ server, it must provide a username and password for authentication. ApsaraMQ for RabbitMQ lets you generate a username and password from an AccessKey ID and AccessKey secret provided by Resource Access Management (RAM).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * A producer sends a message to an exchange, which then routes the message to a specified queue or another exchange based on the binding and routing rules.
   * 
   * @param request - CreateBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBindingResponse
   */
  async createBindingWithOptions(request: $_model.CreateBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBindingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.argument)) {
      body["Argument"] = request.argument;
    }

    if (!$dara.isNull(request.bindingKey)) {
      body["BindingKey"] = request.bindingKey;
    }

    if (!$dara.isNull(request.bindingType)) {
      body["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.destinationName)) {
      body["DestinationName"] = request.destinationName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceExchange)) {
      body["SourceExchange"] = request.sourceExchange;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBinding",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBindingResponse>(await this.callApi(params, req, runtime), new $_model.CreateBindingResponse({}));
  }

  /**
   * A producer sends a message to an exchange, which then routes the message to a specified queue or another exchange based on the binding and routing rules.
   * 
   * @param request - CreateBindingRequest
   * @returns CreateBindingResponse
   */
  async createBinding(request: $_model.CreateBindingRequest): Promise<$_model.CreateBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  /**
   * A producer sends a message to an exchange. The exchange then routes the message to one or more queues based on the routing key and the binding key, or discards the message.
   * 
   * @param request - CreateExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExchangeResponse
   */
  async createExchangeWithOptions(request: $_model.CreateExchangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExchangeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alternateExchange)) {
      body["AlternateExchange"] = request.alternateExchange;
    }

    if (!$dara.isNull(request.autoDeleteState)) {
      body["AutoDeleteState"] = request.autoDeleteState;
    }

    if (!$dara.isNull(request.exchangeName)) {
      body["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.exchangeType)) {
      body["ExchangeType"] = request.exchangeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.internal)) {
      body["Internal"] = request.internal;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    if (!$dara.isNull(request.XDelayedType)) {
      body["XDelayedType"] = request.XDelayedType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExchange",
      version: "2019-12-12",
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
   * A producer sends a message to an exchange. The exchange then routes the message to one or more queues based on the routing key and the binding key, or discards the message.
   * 
   * @param request - CreateExchangeRequest
   * @returns CreateExchangeResponse
   */
  async createExchange(request: $_model.CreateExchangeRequest): Promise<$_model.CreateExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExchangeWithOptions(request, runtime);
  }

  /**
   * Creates an ApsaraMQ for RabbitMQ instance.
   * 
   * @param tmpReq - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(tmpReq: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!$dara.isNull(tmpReq.vswitchIds)) {
      request.vswitchIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vswitchIds, "VswitchIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authModel)) {
      query["AuthModel"] = request.authModel;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.encryptedInstance)) {
      query["EncryptedInstance"] = request.encryptedInstance;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.listenerMode)) {
      query["ListenerMode"] = request.listenerMode;
    }

    if (!$dara.isNull(request.maxConnections)) {
      query["MaxConnections"] = request.maxConnections;
    }

    if (!$dara.isNull(request.maxEipTps)) {
      query["MaxEipTps"] = request.maxEipTps;
    }

    if (!$dara.isNull(request.maxPrivateTps)) {
      query["MaxPrivateTps"] = request.maxPrivateTps;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodCycle)) {
      query["PeriodCycle"] = request.periodCycle;
    }

    if (!$dara.isNull(request.provisionedCapacity)) {
      query["ProvisionedCapacity"] = request.provisionedCapacity;
    }

    if (!$dara.isNull(request.queueCapacity)) {
      query["QueueCapacity"] = request.queueCapacity;
    }

    if (!$dara.isNull(request.renewStatus)) {
      query["RenewStatus"] = request.renewStatus;
    }

    if (!$dara.isNull(request.renewalDurationUnit)) {
      query["RenewalDurationUnit"] = request.renewalDurationUnit;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.serverlessChargeType)) {
      query["ServerlessChargeType"] = request.serverlessChargeType;
    }

    if (!$dara.isNull(request.serverlessSwitch)) {
      query["ServerlessSwitch"] = request.serverlessSwitch;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.supportEip)) {
      query["SupportEip"] = request.supportEip;
    }

    if (!$dara.isNull(request.supportTracing)) {
      query["SupportTracing"] = request.supportTracing;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.tracingStorageTime)) {
      query["TracingStorageTime"] = request.tracingStorageTime;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchIdsShrink)) {
      query["VswitchIds"] = request.vswitchIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates an open-source username and password.
   * 
   * @param request - CreateOpenSourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOpenSourceAccountResponse
   */
  async createOpenSourceAccountWithOptions(request: $_model.CreateOpenSourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOpenSourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOpenSourceAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOpenSourceAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateOpenSourceAccountResponse({}));
  }

  /**
   * Creates an open-source username and password.
   * 
   * @param request - CreateOpenSourceAccountRequest
   * @returns CreateOpenSourceAccountResponse
   */
  async createOpenSourceAccount(request: $_model.CreateOpenSourceAccountRequest): Promise<$_model.CreateOpenSourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOpenSourceAccountWithOptions(request, runtime);
  }

  /**
   * Creates an open source permission.
   * 
   * @param request - CreateOpenSourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOpenSourcePermissionResponse
   */
  async createOpenSourcePermissionWithOptions(request: $_model.CreateOpenSourcePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOpenSourcePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configure)) {
      query["Configure"] = request.configure;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.read)) {
      query["Read"] = request.read;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vhost)) {
      query["Vhost"] = request.vhost;
    }

    if (!$dara.isNull(request.write)) {
      query["Write"] = request.write;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOpenSourcePermission",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOpenSourcePermissionResponse>(await this.callApi(params, req, runtime), new $_model.CreateOpenSourcePermissionResponse({}));
  }

  /**
   * Creates an open source permission.
   * 
   * @param request - CreateOpenSourcePermissionRequest
   * @returns CreateOpenSourcePermissionResponse
   */
  async createOpenSourcePermission(request: $_model.CreateOpenSourcePermissionRequest): Promise<$_model.CreateOpenSourcePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOpenSourcePermissionWithOptions(request, runtime);
  }

  /**
   * A queue is a buffer that stores messages. In ApsaraMQ for RabbitMQ, messages are sent to a specified exchange and then routed to a bound queue.
   * 
   * @param request - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(request: $_model.CreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDeleteState)) {
      body["AutoDeleteState"] = request.autoDeleteState;
    }

    if (!$dara.isNull(request.autoExpireState)) {
      body["AutoExpireState"] = request.autoExpireState;
    }

    if (!$dara.isNull(request.deadLetterExchange)) {
      body["DeadLetterExchange"] = request.deadLetterExchange;
    }

    if (!$dara.isNull(request.deadLetterRoutingKey)) {
      body["DeadLetterRoutingKey"] = request.deadLetterRoutingKey;
    }

    if (!$dara.isNull(request.exclusiveState)) {
      body["ExclusiveState"] = request.exclusiveState;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxLength)) {
      body["MaxLength"] = request.maxLength;
    }

    if (!$dara.isNull(request.maximumPriority)) {
      body["MaximumPriority"] = request.maximumPriority;
    }

    if (!$dara.isNull(request.messageTTL)) {
      body["MessageTTL"] = request.messageTTL;
    }

    if (!$dara.isNull(request.queueName)) {
      body["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueue",
      version: "2019-12-12",
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
   * A queue is a buffer that stores messages. In ApsaraMQ for RabbitMQ, messages are sent to a specified exchange and then routed to a bound queue.
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: $_model.CreateQueueRequest): Promise<$_model.CreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * Creates a vhost. A vhost is used to logically isolate resources. Each vhost manages its own exchanges, queues, and bindings. Applications can run on independent vhosts in a secure manner. This way, the business of an application is not affected by other applications. Before you connect producers and consumers to an ApsaraMQ for RabbitMQ instance, you must specify vhosts for the producers and consumers.
   * 
   * @param request - CreateVirtualHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualHostResponse
   */
  async createVirtualHostWithOptions(request: $_model.CreateVirtualHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirtualHostResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualHost",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVirtualHostResponse>(await this.callApi(params, req, runtime), new $_model.CreateVirtualHostResponse({}));
  }

  /**
   * Creates a vhost. A vhost is used to logically isolate resources. Each vhost manages its own exchanges, queues, and bindings. Applications can run on independent vhosts in a secure manner. This way, the business of an application is not affected by other applications. Before you connect producers and consumers to an ApsaraMQ for RabbitMQ instance, you must specify vhosts for the producers and consumers.
   * 
   * @param request - CreateVirtualHostRequest
   * @returns CreateVirtualHostResponse
   */
  async createVirtualHost(request: $_model.CreateVirtualHostRequest): Promise<$_model.CreateVirtualHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirtualHostWithOptions(request, runtime);
  }

  /**
   * Deletes a static username and password.
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTimestamp)) {
      query["CreateTimestamp"] = request.createTimestamp;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccountResponse({}));
  }

  /**
   * Deletes a static username and password.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * The DeleteBinding operation detaches a source exchange from a target queue or another exchange.
   * 
   * @param request - DeleteBindingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBindingResponse
   */
  async deleteBindingWithOptions(request: $_model.DeleteBindingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBindingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bindingKey)) {
      body["BindingKey"] = request.bindingKey;
    }

    if (!$dara.isNull(request.bindingType)) {
      body["BindingType"] = request.bindingType;
    }

    if (!$dara.isNull(request.destinationName)) {
      body["DestinationName"] = request.destinationName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sourceExchange)) {
      body["SourceExchange"] = request.sourceExchange;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBinding",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBindingResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBindingResponse({}));
  }

  /**
   * The DeleteBinding operation detaches a source exchange from a target queue or another exchange.
   * 
   * @param request - DeleteBindingRequest
   * @returns DeleteBindingResponse
   */
  async deleteBinding(request: $_model.DeleteBindingRequest): Promise<$_model.DeleteBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBindingWithOptions(request, runtime);
  }

  /**
   * Deletes an exchange.
   * 
   * @remarks
   * ## Usage notes
   * - You cannot delete exchanges with the type **headers**.
   * - You cannot delete the three built-in exchanges in a vhost: amq.direct, amq.topic, or amq.fanout.
   * 
   * @param request - DeleteExchangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExchangeResponse
   */
  async deleteExchangeWithOptions(request: $_model.DeleteExchangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExchangeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exchangeName)) {
      body["ExchangeName"] = request.exchangeName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExchange",
      version: "2019-12-12",
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
   * Deletes an exchange.
   * 
   * @remarks
   * ## Usage notes
   * - You cannot delete exchanges with the type **headers**.
   * - You cannot delete the three built-in exchanges in a vhost: amq.direct, amq.topic, or amq.fanout.
   * 
   * @param request - DeleteExchangeRequest
   * @returns DeleteExchangeResponse
   */
  async deleteExchange(request: $_model.DeleteExchangeRequest): Promise<$_model.DeleteExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExchangeWithOptions(request, runtime);
  }

  /**
   * Deletes the username and password of an open-source user.
   * 
   * @param request - DeleteOpenSourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOpenSourceAccountResponse
   */
  async deleteOpenSourceAccountWithOptions(request: $_model.DeleteOpenSourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOpenSourceAccountResponse> {
    request.validate();
    let query = { };
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
      action: "DeleteOpenSourceAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOpenSourceAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOpenSourceAccountResponse({}));
  }

  /**
   * Deletes the username and password of an open-source user.
   * 
   * @param request - DeleteOpenSourceAccountRequest
   * @returns DeleteOpenSourceAccountResponse
   */
  async deleteOpenSourceAccount(request: $_model.DeleteOpenSourceAccountRequest): Promise<$_model.DeleteOpenSourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOpenSourceAccountWithOptions(request, runtime);
  }

  /**
   * Deletes an open source permission.
   * 
   * @param request - DeleteOpenSourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOpenSourcePermissionResponse
   */
  async deleteOpenSourcePermissionWithOptions(request: $_model.DeleteOpenSourcePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOpenSourcePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vhost)) {
      query["Vhost"] = request.vhost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOpenSourcePermission",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOpenSourcePermissionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOpenSourcePermissionResponse({}));
  }

  /**
   * Deletes an open source permission.
   * 
   * @param request - DeleteOpenSourcePermissionRequest
   * @returns DeleteOpenSourcePermissionResponse
   */
  async deleteOpenSourcePermission(request: $_model.DeleteOpenSourcePermissionRequest): Promise<$_model.DeleteOpenSourcePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOpenSourcePermissionWithOptions(request, runtime);
  }

  /**
   * Deletes a queue.
   * 
   * @param request - DeleteQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueueResponse
   */
  async deleteQueueWithOptions(request: $_model.DeleteQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQueueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.queueName)) {
      body["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueue",
      version: "2019-12-12",
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
   * Deletes a queue.
   * 
   * @param request - DeleteQueueRequest
   * @returns DeleteQueueResponse
   */
  async deleteQueue(request: $_model.DeleteQueueRequest): Promise<$_model.DeleteQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual host (vhost).
   * 
   * @remarks
   * Before you delete a vhost, you must delete all exchanges and queues in it.
   * 
   * @param request - DeleteVirtualHostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualHostResponse
   */
  async deleteVirtualHostWithOptions(request: $_model.DeleteVirtualHostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualHostResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.virtualHost)) {
      body["VirtualHost"] = request.virtualHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualHost",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVirtualHostResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVirtualHostResponse({}));
  }

  /**
   * Deletes a virtual host (vhost).
   * 
   * @remarks
   * Before you delete a vhost, you must delete all exchanges and queues in it.
   * 
   * @param request - DeleteVirtualHostRequest
   * @returns DeleteVirtualHostResponse
   */
  async deleteVirtualHost(request: $_model.DeleteVirtualHostRequest): Promise<$_model.DeleteVirtualHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualHostWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Retrieves the details of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the current and maximum numbers of vhosts, exchanges, and queues for a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetMetadataAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetadataAmountResponse
   */
  async getMetadataAmountWithOptions(request: $_model.GetMetadataAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetadataAmountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetadataAmount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetadataAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetMetadataAmountResponse({}));
  }

  /**
   * Queries the current and maximum numbers of vhosts, exchanges, and queues for a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetMetadataAmountRequest
   * @returns GetMetadataAmountResponse
   */
  async getMetadataAmount(request: $_model.GetMetadataAmountRequest): Promise<$_model.GetMetadataAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetadataAmountWithOptions(request, runtime);
  }

  /**
   * Lists the usernames and passwords for a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsResponse
   */
  async listAccountsWithOptions(request: $_model.ListAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccounts",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountsResponse({}));
  }

  /**
   * Lists the usernames and passwords for a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: $_model.ListAccountsRequest): Promise<$_model.ListAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * Queries all bindings that are created in a vhost of a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindingsResponse
   */
  async listBindingsWithOptions(request: $_model.ListBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListBindingsResponse({}));
  }

  /**
   * Queries all bindings that are created in a vhost of a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListBindingsRequest
   * @returns ListBindingsResponse
   */
  async listBindings(request: $_model.ListBindingsRequest): Promise<$_model.ListBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  /**
   * Queries the exchanges or queues that are bound to a specified exchange.
   * 
   * @param request - ListDownStreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownStreamBindingsResponse
   */
  async listDownStreamBindingsWithOptions(request: $_model.ListDownStreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownStreamBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownStreamBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownStreamBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListDownStreamBindingsResponse({}));
  }

  /**
   * Queries the exchanges or queues that are bound to a specified exchange.
   * 
   * @param request - ListDownStreamBindingsRequest
   * @returns ListDownStreamBindingsResponse
   */
  async listDownStreamBindings(request: $_model.ListDownStreamBindingsRequest): Promise<$_model.ListDownStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries the queues or other exchanges that are bound to a specified exchange.
   * 
   * @param request - ListExchangeUpStreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangeUpStreamBindingsResponse
   */
  async listExchangeUpStreamBindingsWithOptions(request: $_model.ListExchangeUpStreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExchangeUpStreamBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchangeUpStreamBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExchangeUpStreamBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListExchangeUpStreamBindingsResponse({}));
  }

  /**
   * Queries the queues or other exchanges that are bound to a specified exchange.
   * 
   * @param request - ListExchangeUpStreamBindingsRequest
   * @returns ListExchangeUpStreamBindingsResponse
   */
  async listExchangeUpStreamBindings(request: $_model.ListExchangeUpStreamBindingsRequest): Promise<$_model.ListExchangeUpStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangeUpStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Lists all exchanges in a specified vhost of an instance.
   * 
   * @param request - ListExchangesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExchangesResponse
   */
  async listExchangesWithOptions(request: $_model.ListExchangesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExchangesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExchanges",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExchangesResponse>(await this.callApi(params, req, runtime), new $_model.ListExchangesResponse({}));
  }

  /**
   * Lists all exchanges in a specified vhost of an instance.
   * 
   * @param request - ListExchangesRequest
   * @returns ListExchangesResponse
   */
  async listExchanges(request: $_model.ListExchangesRequest): Promise<$_model.ListExchangesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangesWithOptions(request, runtime);
  }

  /**
   * Queries the IP or VPC whitelist for an instance.
   * 
   * @param request - ListInstanceWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceWhiteListResponse
   */
  async listInstanceWhiteListWithOptions(request: $_model.ListInstanceWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.whiteListType)) {
      query["whiteListType"] = request.whiteListType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceWhiteList",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceWhiteListResponse({}));
  }

  /**
   * Queries the IP or VPC whitelist for an instance.
   * 
   * @param request - ListInstanceWhiteListRequest
   * @returns ListInstanceWhiteListResponse
   */
  async listInstanceWhiteList(request: $_model.ListInstanceWhiteListRequest): Promise<$_model.ListInstanceWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries a list of ApsaraMQ for RabbitMQ instances in a specified region and returns basic information about each instance, such as its endpoints and specification limits.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries a list of ApsaraMQ for RabbitMQ instances in a specified region and returns basic information about each instance, such as its endpoints and specification limits.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Enumerates open-source usernames and passwords.
   * 
   * @param request - ListOpenSourceAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOpenSourceAccountsResponse
   */
  async listOpenSourceAccountsWithOptions(request: $_model.ListOpenSourceAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOpenSourceAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOpenSourceAccounts",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOpenSourceAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListOpenSourceAccountsResponse({}));
  }

  /**
   * Enumerates open-source usernames and passwords.
   * 
   * @param request - ListOpenSourceAccountsRequest
   * @returns ListOpenSourceAccountsResponse
   */
  async listOpenSourceAccounts(request: $_model.ListOpenSourceAccountsRequest): Promise<$_model.ListOpenSourceAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOpenSourceAccountsWithOptions(request, runtime);
  }

  /**
   * Lists open source permissions.
   * 
   * @param request - ListOpenSourcePermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOpenSourcePermissionsResponse
   */
  async listOpenSourcePermissionsWithOptions(request: $_model.ListOpenSourcePermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOpenSourcePermissionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOpenSourcePermissions",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOpenSourcePermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListOpenSourcePermissionsResponse({}));
  }

  /**
   * Lists open source permissions.
   * 
   * @param request - ListOpenSourcePermissionsRequest
   * @returns ListOpenSourcePermissionsResponse
   */
  async listOpenSourcePermissions(request: $_model.ListOpenSourcePermissionsRequest): Promise<$_model.ListOpenSourcePermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOpenSourcePermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the online consumer clients of a specified queue.
   * 
   * @remarks
   * ApsaraMQ for RabbitMQ lets you query only online consumer clients. You cannot query offline consumer clients.
   * 
   * @param request - ListQueueConsumersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueConsumersResponse
   */
  async listQueueConsumersWithOptions(request: $_model.ListQueueConsumersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueueConsumersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueueConsumers",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueueConsumersResponse>(await this.callApi(params, req, runtime), new $_model.ListQueueConsumersResponse({}));
  }

  /**
   * Queries the online consumer clients of a specified queue.
   * 
   * @remarks
   * ApsaraMQ for RabbitMQ lets you query only online consumer clients. You cannot query offline consumer clients.
   * 
   * @param request - ListQueueConsumersRequest
   * @returns ListQueueConsumersResponse
   */
  async listQueueConsumers(request: $_model.ListQueueConsumersRequest): Promise<$_model.ListQueueConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueConsumersWithOptions(request, runtime);
  }

  /**
   * Queries the exchanges that are bound to a specified queue.
   * 
   * @param request - ListQueueUpStreamBindingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueueUpStreamBindingsResponse
   */
  async listQueueUpStreamBindingsWithOptions(request: $_model.ListQueueUpStreamBindingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueueUpStreamBindingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueueUpStreamBindings",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueueUpStreamBindingsResponse>(await this.callApi(params, req, runtime), new $_model.ListQueueUpStreamBindingsResponse({}));
  }

  /**
   * Queries the exchanges that are bound to a specified queue.
   * 
   * @param request - ListQueueUpStreamBindingsRequest
   * @returns ListQueueUpStreamBindingsResponse
   */
  async listQueueUpStreamBindings(request: $_model.ListQueueUpStreamBindingsRequest): Promise<$_model.ListQueueUpStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueUpStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries information about all queues in a vhost on a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueuesResponse
   */
  async listQueuesWithOptions(request: $_model.ListQueuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueuesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueues",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueuesResponse>(await this.callApi(params, req, runtime), new $_model.ListQueuesResponse({}));
  }

  /**
   * Queries information about all queues in a vhost on a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: $_model.ListQueuesRequest): Promise<$_model.ListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * Lists all vhosts in a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListVirtualHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualHostsResponse
   */
  async listVirtualHostsWithOptions(request: $_model.ListVirtualHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVirtualHostsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVirtualHosts",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVirtualHostsResponse>(await this.callApi(params, req, runtime), new $_model.ListVirtualHostsResponse({}));
  }

  /**
   * Lists all vhosts in a specified ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListVirtualHostsRequest
   * @returns ListVirtualHostsResponse
   */
  async listVirtualHosts(request: $_model.ListVirtualHostsRequest): Promise<$_model.ListVirtualHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirtualHostsWithOptions(request, runtime);
  }

  /**
   * Removes an IP address or a VPC from an instance\\"s whitelist.
   * 
   * @param request - RemoveInstanceWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInstanceWhiteListResponse
   */
  async removeInstanceWhiteListWithOptions(request: $_model.RemoveInstanceWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveInstanceWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.whiteListItemId)) {
      query["whiteListItemId"] = request.whiteListItemId;
    }

    if (!$dara.isNull(request.whiteListType)) {
      query["whiteListType"] = request.whiteListType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInstanceWhiteList",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveInstanceWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.RemoveInstanceWhiteListResponse({}));
  }

  /**
   * Removes an IP address or a VPC from an instance\\"s whitelist.
   * 
   * @param request - RemoveInstanceWhiteListRequest
   * @returns RemoveInstanceWhiteListResponse
   */
  async removeInstanceWhiteList(request: $_model.RemoveInstanceWhiteListRequest): Promise<$_model.RemoveInstanceWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeInstanceWhiteListWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades the specifications of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.encryptedInstance)) {
      query["EncryptedInstance"] = request.encryptedInstance;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maxConnections)) {
      query["MaxConnections"] = request.maxConnections;
    }

    if (!$dara.isNull(request.maxEipTps)) {
      query["MaxEipTps"] = request.maxEipTps;
    }

    if (!$dara.isNull(request.maxPrivateTps)) {
      query["MaxPrivateTps"] = request.maxPrivateTps;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.provisionedCapacity)) {
      query["ProvisionedCapacity"] = request.provisionedCapacity;
    }

    if (!$dara.isNull(request.queueCapacity)) {
      query["QueueCapacity"] = request.queueCapacity;
    }

    if (!$dara.isNull(request.serverlessChargeType)) {
      query["ServerlessChargeType"] = request.serverlessChargeType;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.supportEip)) {
      query["SupportEip"] = request.supportEip;
    }

    if (!$dara.isNull(request.supportTracing)) {
      query["SupportTracing"] = request.supportTracing;
    }

    if (!$dara.isNull(request.tracingStorageTime)) {
      query["TracingStorageTime"] = request.tracingStorageTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2019-12-12",
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
   * Upgrades or downgrades the specifications of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * An ApsaraMQ for RabbitMQ instance is named after its instance ID by default. You can change the name for easier identification.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: $_model.UpdateInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNameResponse> {
    request.validate();
    let query = { };
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
      action: "UpdateInstanceName",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNameResponse({}));
  }

  /**
   * An ApsaraMQ for RabbitMQ instance is named after its instance ID by default. You can change the name for easier identification.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: $_model.UpdateInstanceNameRequest): Promise<$_model.UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceNameWithOptions(request, runtime);
  }

  /**
   * Update serverless switch
   * 
   * @param request - UpdateInstanceServerlessSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceServerlessSwitchResponse
   */
  async updateInstanceServerlessSwitchWithOptions(request: $_model.UpdateInstanceServerlessSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceServerlessSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "UpdateInstanceServerlessSwitch",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceServerlessSwitchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceServerlessSwitchResponse({}));
  }

  /**
   * Update serverless switch
   * 
   * @param request - UpdateInstanceServerlessSwitchRequest
   * @returns UpdateInstanceServerlessSwitchResponse
   */
  async updateInstanceServerlessSwitch(request: $_model.UpdateInstanceServerlessSwitchRequest): Promise<$_model.UpdateInstanceServerlessSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceServerlessSwitchWithOptions(request, runtime);
  }

  /**
   * Updates the username and password for open-source access.
   * 
   * @param request - UpdateOpenSourceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOpenSourceAccountResponse
   */
  async updateOpenSourceAccountWithOptions(request: $_model.UpdateOpenSourceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOpenSourceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOpenSourceAccount",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOpenSourceAccountResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOpenSourceAccountResponse({}));
  }

  /**
   * Updates the username and password for open-source access.
   * 
   * @param request - UpdateOpenSourceAccountRequest
   * @returns UpdateOpenSourceAccountResponse
   */
  async updateOpenSourceAccount(request: $_model.UpdateOpenSourceAccountRequest): Promise<$_model.UpdateOpenSourceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOpenSourceAccountWithOptions(request, runtime);
  }

  /**
   * Updates open source permissions.
   * 
   * @param request - UpdateOpenSourcePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOpenSourcePermissionResponse
   */
  async updateOpenSourcePermissionWithOptions(request: $_model.UpdateOpenSourcePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOpenSourcePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configure)) {
      query["Configure"] = request.configure;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.read)) {
      query["Read"] = request.read;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vhost)) {
      query["Vhost"] = request.vhost;
    }

    if (!$dara.isNull(request.write)) {
      query["Write"] = request.write;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOpenSourcePermission",
      version: "2019-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOpenSourcePermissionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOpenSourcePermissionResponse({}));
  }

  /**
   * Updates open source permissions.
   * 
   * @param request - UpdateOpenSourcePermissionRequest
   * @returns UpdateOpenSourcePermissionResponse
   */
  async updateOpenSourcePermission(request: $_model.UpdateOpenSourcePermissionRequest): Promise<$_model.UpdateOpenSourcePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOpenSourcePermissionWithOptions(request, runtime);
  }

}
