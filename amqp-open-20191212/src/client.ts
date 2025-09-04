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
   * Creates a pair of static username and password. If you access an ApsaraMQ for RabbitMQ broker from an open source RabbitMQ client, you must use a pair of username and password for authentication. You can access the ApsaraMQ for RabbitMQ broker only after the authentication is passed. ApsaraMQ for RabbitMQ allows you to generate usernames and passwords by using AccessKey pairs provided by Alibaba Cloud Resource Access Management (RAM).
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
   * Creates a pair of static username and password. If you access an ApsaraMQ for RabbitMQ broker from an open source RabbitMQ client, you must use a pair of username and password for authentication. You can access the ApsaraMQ for RabbitMQ broker only after the authentication is passed. ApsaraMQ for RabbitMQ allows you to generate usernames and passwords by using AccessKey pairs provided by Alibaba Cloud Resource Access Management (RAM).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates a binding. In ApsaraMQ for RabbitMQ, after a producer sends a message to an exchange, the exchange routes the message to a queue or another exchange based on the binding relationship and the routing rule.
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
   * Creates a binding. In ApsaraMQ for RabbitMQ, after a producer sends a message to an exchange, the exchange routes the message to a queue or another exchange based on the binding relationship and the routing rule.
   * 
   * @param request - CreateBindingRequest
   * @returns CreateBindingResponse
   */
  async createBinding(request: $_model.CreateBindingRequest): Promise<$_model.CreateBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  /**
   * Creates an exchange. In ApsaraMQ for RabbitMQ, an exchange is used to route a message that is received from a producer to one or more queues or to discard the message. An exchange routes a message to queues by using the routing key and binding keys.
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
   * Creates an exchange. In ApsaraMQ for RabbitMQ, an exchange is used to route a message that is received from a producer to one or more queues or to discard the message. An exchange routes a message to queues by using the routing key and binding keys.
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
   * @remarks
   * *Before you call this operation, make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/606747.html) of ApsaraMQ for RabbitMQ.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query = { };
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
   * @remarks
   * *Before you call this operation, make sure that you fully understand the [billing methods and pricing](https://help.aliyun.com/document_detail/606747.html) of ApsaraMQ for RabbitMQ.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a queue. In ApsaraMQ for RabbitMQ, a queue is a message queue. All messages in ApsaraMQ for RabbitMQ are sent to a specific exchange and then routed to a bound queue by the exchange.
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
   * Creates a queue. In ApsaraMQ for RabbitMQ, a queue is a message queue. All messages in ApsaraMQ for RabbitMQ are sent to a specific exchange and then routed to a bound queue by the exchange.
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
   * Deletes a pair of username and password.
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
   * Deletes a pair of username and password.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a binding to unbind a queue or an exchange from a source exchange.
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
   * Deletes a binding to unbind a queue or an exchange from a source exchange.
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
   * ## [](#)Usage notes
   * *   You cannot delete exchanges of the **headers** and **x-jms-topic** types.
   * *   You cannot delete built-in exchanges in a vhost. These exchanges are amq.direct, amq.topic, and amq.fanout.
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
   * ## [](#)Usage notes
   * *   You cannot delete exchanges of the **headers** and **x-jms-topic** types.
   * *   You cannot delete built-in exchanges in a vhost. These exchanges are amq.direct, amq.topic, and amq.fanout.
   * 
   * @param request - DeleteExchangeRequest
   * @returns DeleteExchangeResponse
   */
  async deleteExchange(request: $_model.DeleteExchangeRequest): Promise<$_model.DeleteExchangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExchangeWithOptions(request, runtime);
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
   * Before you delete a vhost, make sure that all exchanges and queues in the vhost are deleted.
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
   * Before you delete a vhost, make sure that all exchanges and queues in the vhost are deleted.
   * 
   * @param request - DeleteVirtualHostRequest
   * @returns DeleteVirtualHostResponse
   */
  async deleteVirtualHost(request: $_model.DeleteVirtualHostRequest): Promise<$_model.DeleteVirtualHostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualHostWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
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
   * 获取实例详情
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the maximum number of vhosts, exchanges, and queues that you can create and the number of created vhosts, exchanges, and queues on an ApsaraMQ for RabbitMQ instance.
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
   * Queries the maximum number of vhosts, exchanges, and queues that you can create and the number of created vhosts, exchanges, and queues on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - GetMetadataAmountRequest
   * @returns GetMetadataAmountResponse
   */
  async getMetadataAmount(request: $_model.GetMetadataAmountRequest): Promise<$_model.GetMetadataAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetadataAmountWithOptions(request, runtime);
  }

  /**
   * Queries the static username and password of an ApsaraMQ for RabbitMQ.
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
   * Queries the static username and password of an ApsaraMQ for RabbitMQ.
   * 
   * @param request - ListAccountsRequest
   * @returns ListAccountsResponse
   */
  async listAccounts(request: $_model.ListAccountsRequest): Promise<$_model.ListAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsWithOptions(request, runtime);
  }

  /**
   * Queries all bindings of a virtual host (vhost) on an ApsaraMQ for RabbitMQ instance.
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
   * Queries all bindings of a virtual host (vhost) on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListBindingsRequest
   * @returns ListBindingsResponse
   */
  async listBindings(request: $_model.ListBindingsRequest): Promise<$_model.ListBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all exchanges or queues to which an exchange is bound.
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
   * Queries all exchanges or queues to which an exchange is bound.
   * 
   * @param request - ListDownStreamBindingsRequest
   * @returns ListDownStreamBindingsResponse
   */
  async listDownStreamBindings(request: $_model.ListDownStreamBindingsRequest): Promise<$_model.ListDownStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all queues or exchanges that are bound to an exchange.
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
   * Queries all queues or exchanges that are bound to an exchange.
   * 
   * @param request - ListExchangeUpStreamBindingsRequest
   * @returns ListExchangeUpStreamBindingsResponse
   */
  async listExchangeUpStreamBindings(request: $_model.ListExchangeUpStreamBindingsRequest): Promise<$_model.ListExchangeUpStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangeUpStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all exchanges that are created in a virtual host (vhost).
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
   * Queries all exchanges that are created in a virtual host (vhost).
   * 
   * @param request - ListExchangesRequest
   * @returns ListExchangesResponse
   */
  async listExchanges(request: $_model.ListExchangesRequest): Promise<$_model.ListExchangesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExchangesWithOptions(request, runtime);
  }

  /**
   * Queries all AparaMQ for RabbitMQ instances in a region. The returned data includes the basic information, endpoint, and specification limits of each instance.
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
   * Queries all AparaMQ for RabbitMQ instances in a region. The returned data includes the basic information, endpoint, and specification limits of each instance.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the online consumers of a queue.
   * 
   * @remarks
   * ApsaraMQ for RabbitMQ allows you to query only online consumers.
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
   * Queries the online consumers of a queue.
   * 
   * @remarks
   * ApsaraMQ for RabbitMQ allows you to query only online consumers.
   * 
   * @param request - ListQueueConsumersRequest
   * @returns ListQueueConsumersResponse
   */
  async listQueueConsumers(request: $_model.ListQueueConsumersRequest): Promise<$_model.ListQueueConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueConsumersWithOptions(request, runtime);
  }

  /**
   * Queries the exchanges that are bound to a queue.
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
   * Queries the exchanges that are bound to a queue.
   * 
   * @param request - ListQueueUpStreamBindingsRequest
   * @returns ListQueueUpStreamBindingsResponse
   */
  async listQueueUpStreamBindings(request: $_model.ListQueueUpStreamBindingsRequest): Promise<$_model.ListQueueUpStreamBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueueUpStreamBindingsWithOptions(request, runtime);
  }

  /**
   * Queries all queues in a vhost of an ApsaraMQ for RabbitMQ instance.
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
   * Queries all queues in a vhost of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: $_model.ListQueuesRequest): Promise<$_model.ListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * Queries all virtual hosts (vhosts) on an ApsaraMQ for RabbitMQ instance.
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
   * Queries all virtual hosts (vhosts) on an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - ListVirtualHostsRequest
   * @returns ListVirtualHostsResponse
   */
  async listVirtualHosts(request: $_model.ListVirtualHostsRequest): Promise<$_model.ListVirtualHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirtualHostsWithOptions(request, runtime);
  }

  /**
   * Upgrades or downgrades the configurations of an ApsaraMQ for RabbitMQ instance.
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
   * Upgrades or downgrades the configurations of an ApsaraMQ for RabbitMQ instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
  }

  /**
   * Updates the name of an ApsaraMQ for RabbitMQ instance. After an ApsaraMQ for RabbitMQ instance is created, the ID of the instance is used as its name by default. You can specify a custom name for an instance to facilitate instance identification.
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
   * Updates the name of an ApsaraMQ for RabbitMQ instance. After an ApsaraMQ for RabbitMQ instance is created, the ID of the instance is used as its name by default. You can specify a custom name for an instance to facilitate instance identification.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: $_model.UpdateInstanceNameRequest): Promise<$_model.UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceNameWithOptions(request, runtime);
  }

}
