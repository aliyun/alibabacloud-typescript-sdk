// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "OnsMqtt";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("onsmqtt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * ApsaraMQ for MQTT supports X.509 certificate authentication, which allows clients to authenticate by using device certificates. A CA certificate is used to issue device certificates for clients and verify the validity of the device certificates. A CA certificate must be active to be used. By default, a CA certificate is active after registration. If a CA certificate is changed to the inactive state, you can invoke this operation to reactivate it.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional instances support the ActiveCaCertificate operation.
   * - The request frequency limit for a single user is 500 requests per second. For special requirements, contact ApsaraMQ for MQTT technical support. DingTalk group ID: 35228338.
   * - The ActiveCaCertificate operation only supports CA certificates that are registered on the ApsaraMQ for MQTT server. You can invoke the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query the registered CA certificates under a specified instance.
   * 
   * @param request - ActiveCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveCaCertificateResponse
   */
  async activeCaCertificateWithOptions(request: $_model.ActiveCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ActiveCaCertificateResponse({}));
  }

  /**
   * ApsaraMQ for MQTT supports X.509 certificate authentication, which allows clients to authenticate by using device certificates. A CA certificate is used to issue device certificates for clients and verify the validity of the device certificates. A CA certificate must be active to be used. By default, a CA certificate is active after registration. If a CA certificate is changed to the inactive state, you can invoke this operation to reactivate it.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional instances support the ActiveCaCertificate operation.
   * - The request frequency limit for a single user is 500 requests per second. For special requirements, contact ApsaraMQ for MQTT technical support. DingTalk group ID: 35228338.
   * - The ActiveCaCertificate operation only supports CA certificates that are registered on the ApsaraMQ for MQTT server. You can invoke the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query the registered CA certificates under a specified instance.
   * 
   * @param request - ActiveCaCertificateRequest
   * @returns ActiveCaCertificateResponse
   */
  async activeCaCertificate(request: $_model.ActiveCaCertificateRequest): Promise<$_model.ActiveCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeCaCertificateWithOptions(request, runtime);
  }

  /**
   * Activates a device certificate. A device certificate is a digital certificate issued by a CA root certificate to a client device for security authentication when the client connects to the server. When a client device uses a device certificate for access authentication, the server verifies the device certificate based on the registered CA certificate. If the CA certificate and the device certificate match, the client authentication succeeds, and the system automatically registers the device certificate on the server. By default, a device certificate is in the activated state after it is registered on the server. If a device certificate that you want to use is deactivated, you can call this operation to reactivate it.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional edition instances support the ActiveDeviceCertificate operation.
   * - The request frequency limit for a single user is 500 calls per second. If you have special requirements, contact the technical support team of MSMQ for MQTT. DingTalk group ID: 35228338.
   * 
   * @param request - ActiveDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActiveDeviceCertificateResponse
   */
  async activeDeviceCertificateWithOptions(request: $_model.ActiveDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActiveDeviceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!$dara.isNull(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActiveDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActiveDeviceCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ActiveDeviceCertificateResponse({}));
  }

  /**
   * Activates a device certificate. A device certificate is a digital certificate issued by a CA root certificate to a client device for security authentication when the client connects to the server. When a client device uses a device certificate for access authentication, the server verifies the device certificate based on the registered CA certificate. If the CA certificate and the device certificate match, the client authentication succeeds, and the system automatically registers the device certificate on the server. By default, a device certificate is in the activated state after it is registered on the server. If a device certificate that you want to use is deactivated, you can call this operation to reactivate it.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional edition instances support the ActiveDeviceCertificate operation.
   * - The request frequency limit for a single user is 500 calls per second. If you have special requirements, contact the technical support team of MSMQ for MQTT. DingTalk group ID: 35228338.
   * 
   * @param request - ActiveDeviceCertificateRequest
   * @returns ActiveDeviceCertificateResponse
   */
  async activeDeviceCertificate(request: $_model.ActiveDeviceCertificateRequest): Promise<$_model.ActiveDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activeDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Adds a connection blacklist to disable connections from a specific device.
   * 
   * @param request - AddCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthConnectBlackResponse
   */
  async addCustomAuthConnectBlackWithOptions(request: $_model.AddCustomAuthConnectBlackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomAuthConnectBlackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomAuthConnectBlackResponse({}));
  }

  /**
   * Adds a connection blacklist to disable connections from a specific device.
   * 
   * @param request - AddCustomAuthConnectBlackRequest
   * @returns AddCustomAuthConnectBlackResponse
   */
  async addCustomAuthConnectBlack(request: $_model.AddCustomAuthConnectBlackRequest): Promise<$_model.AddCustomAuthConnectBlackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Adds account authentication information, which can be specified at the client level.
   * 
   * @param request - AddCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthIdentityResponse
   */
  async addCustomAuthIdentityWithOptions(request: $_model.AddCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomAuthIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!$dara.isNull(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomAuthIdentityResponse({}));
  }

  /**
   * Adds account authentication information, which can be specified at the client level.
   * 
   * @param request - AddCustomAuthIdentityRequest
   * @returns AddCustomAuthIdentityResponse
   */
  async addCustomAuthIdentity(request: $_model.AddCustomAuthIdentityRequest): Promise<$_model.AddCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Adds authorization information for a topic resource. A first-level topic must be created in the console in advance.
   * 
   * @param request - AddCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomAuthPermissionResponse
   */
  async addCustomAuthPermissionWithOptions(request: $_model.AddCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddCustomAuthPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effect)) {
      body["Effect"] = request.effect;
    }

    if (!$dara.isNull(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.permitAction)) {
      body["PermitAction"] = request.permitAction;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new $_model.AddCustomAuthPermissionResponse({}));
  }

  /**
   * Adds authorization information for a topic resource. A first-level topic must be created in the console in advance.
   * 
   * @param request - AddCustomAuthPermissionRequest
   * @returns AddCustomAuthPermissionResponse
   */
  async addCustomAuthPermission(request: $_model.AddCustomAuthPermissionRequest): Promise<$_model.AddCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * When token-based authentication is used, the ApsaraMQ for MQTT broker issues a token (temporary credential) to the client, and the client must include the token when accessing the ApsaraMQ for MQTT broker to authenticate permissions. This API operation is used to apply for a temporary token from ApsaraMQ for MQTT.
   * 
   * @remarks
   * - The request frequency limit for a single user is 100 calls per second. If you have special requirements, contact the technical support team of ApsaraMQ for MQTT. DingTalk group ID: 35228338.
   * - Each time you successfully call the **ApplyToken** API operation, it is counted as one message TPS, which affects your billing. For billing details, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ApplyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyTokenResponse
   */
  async applyTokenWithOptions(request: $_model.ApplyTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actions)) {
      query["Actions"] = request.actions;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyTokenResponse>(await this.callApi(params, req, runtime), new $_model.ApplyTokenResponse({}));
  }

  /**
   * When token-based authentication is used, the ApsaraMQ for MQTT broker issues a token (temporary credential) to the client, and the client must include the token when accessing the ApsaraMQ for MQTT broker to authenticate permissions. This API operation is used to apply for a temporary token from ApsaraMQ for MQTT.
   * 
   * @remarks
   * - The request frequency limit for a single user is 100 calls per second. If you have special requirements, contact the technical support team of ApsaraMQ for MQTT. DingTalk group ID: 35228338.
   * - Each time you successfully call the **ApplyToken** API operation, it is counted as one message TPS, which affects your billing. For billing details, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ApplyTokenRequest
   * @returns ApplyTokenResponse
   */
  async applyToken(request: $_model.ApplyTokenRequest): Promise<$_model.ApplyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyTokenWithOptions(request, runtime);
  }

  /**
   * Queries the online status of clients in batches by client ID.
   * 
   * @remarks
   * - The QPS limit for the **BatchQuerySessionByClientIds** operation is 100. For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * - You can query the online status of up to 10 client IDs each time you call the **BatchQuerySessionByClientIds** operation.
   * - Each successful call to the **BatchQuerySessionByClientIds** operation is counted as one message TPS, which affects your billing. For billing details, see [Billing](https://help.aliyun.com/document_detail/52819.html).
   * - Considering the performance impact, the **BatchQuerySessionByClientIds** operation uses an internal cache for queries, which may result in data inconsistency. For exact queries, use the [QuerySessionByClientId](https://help.aliyun.com/document_detail/2603924.html) operation.
   * 
   * @param request - BatchQuerySessionByClientIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIdsWithOptions(request: $_model.BatchQuerySessionByClientIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchQuerySessionByClientIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIdList)) {
      query["ClientIdList"] = request.clientIdList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchQuerySessionByClientIds",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchQuerySessionByClientIdsResponse>(await this.callApi(params, req, runtime), new $_model.BatchQuerySessionByClientIdsResponse({}));
  }

  /**
   * Queries the online status of clients in batches by client ID.
   * 
   * @remarks
   * - The QPS limit for the **BatchQuerySessionByClientIds** operation is 100. For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * - You can query the online status of up to 10 client IDs each time you call the **BatchQuerySessionByClientIds** operation.
   * - Each successful call to the **BatchQuerySessionByClientIds** operation is counted as one message TPS, which affects your billing. For billing details, see [Billing](https://help.aliyun.com/document_detail/52819.html).
   * - Considering the performance impact, the **BatchQuerySessionByClientIds** operation uses an internal cache for queries, which may result in data inconsistency. For exact queries, use the [QuerySessionByClientId](https://help.aliyun.com/document_detail/2603924.html) operation.
   * 
   * @param request - BatchQuerySessionByClientIdsRequest
   * @returns BatchQuerySessionByClientIdsResponse
   */
  async batchQuerySessionByClientIds(request: $_model.BatchQuerySessionByClientIdsRequest): Promise<$_model.BatchQuerySessionByClientIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchQuerySessionByClientIdsWithOptions(request, runtime);
  }

  /**
   * Closes an active connection. However, the device may reconnect depending on the client reconnection mechanism.
   * 
   * @param request - CloseConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseConnectionResponse
   */
  async closeConnectionWithOptions(request: $_model.CloseConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseConnection",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CloseConnectionResponse({}));
  }

  /**
   * Closes an active connection. However, the device may reconnect depending on the client reconnection mechanism.
   * 
   * @param request - CloseConnectionRequest
   * @returns CloseConnectionResponse
   */
  async closeConnection(request: $_model.CloseConnectionRequest): Promise<$_model.CloseConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeConnectionWithOptions(request, runtime);
  }

  /**
   * When message producers and consumers connect to the ApsaraMQ for MQTT server to send and receive messages, they must specify a client ID as the unique identity of a client. A client ID consists of two parts in the <GroupID>@@@<DeviceID> format. The DeviceID is defined by the client, and the GroupID must be created in advance in the ApsaraMQ for MQTT server.
   * 
   * @remarks
   * Each successful call to the **CreateGroupId** operation is counted as one message TPS, which affects your billing. For more information, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - CreateGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupIdResponse
   */
  async createGroupIdWithOptions(request: $_model.CreateGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupIdResponse({}));
  }

  /**
   * When message producers and consumers connect to the ApsaraMQ for MQTT server to send and receive messages, they must specify a client ID as the unique identity of a client. A client ID consists of two parts in the <GroupID>@@@<DeviceID> format. The DeviceID is defined by the client, and the GroupID must be created in advance in the ApsaraMQ for MQTT server.
   * 
   * @remarks
   * Each successful call to the **CreateGroupId** operation is counted as one message TPS, which affects your billing. For more information, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - CreateGroupIdRequest
   * @returns CreateGroupIdResponse
   */
  async createGroupId(request: $_model.CreateGroupIdRequest): Promise<$_model.CreateGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupIdWithOptions(request, runtime);
  }

  /**
   * ApsaraMQ for MQTT supports X.509 certificate authentication, allowing clients to use device certificates for access authentication. CA certificates are used to issue device certificates for clients and verify the validity of device certificates. Before you use a CA certificate, you must register it with the ApsaraMQ for MQTT server. If you no longer need a CA certificate, you can invoke the DeleteCaCertificate operation to delete it from the server records.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional instances support the DeleteCaCertificate operation.
   * - The request frequency limit for a single user is 500 requests per second. For special requirements, contact ApsaraMQ for MQTT technical support. DingTalk group ID: 35228338.
   * - The DeleteCaCertificate operation only supports CA certificates that are already registered with the ApsaraMQ for MQTT server. You can invoke the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query registered CA certificates under a specific instance.
   * - When you delete a specified CA certificate, all device certificates issued by this CA certificate and registered with the ApsaraMQ for MQTT server are also automatically deleted.
   * 
   * @param request - DeleteCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCaCertificateResponse
   */
  async deleteCaCertificateWithOptions(request: $_model.DeleteCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCaCertificateResponse({}));
  }

  /**
   * ApsaraMQ for MQTT supports X.509 certificate authentication, allowing clients to use device certificates for access authentication. CA certificates are used to issue device certificates for clients and verify the validity of device certificates. Before you use a CA certificate, you must register it with the ApsaraMQ for MQTT server. If you no longer need a CA certificate, you can invoke the DeleteCaCertificate operation to delete it from the server records.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional instances support the DeleteCaCertificate operation.
   * - The request frequency limit for a single user is 500 requests per second. For special requirements, contact ApsaraMQ for MQTT technical support. DingTalk group ID: 35228338.
   * - The DeleteCaCertificate operation only supports CA certificates that are already registered with the ApsaraMQ for MQTT server. You can invoke the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation to query registered CA certificates under a specific instance.
   * - When you delete a specified CA certificate, all device certificates issued by this CA certificate and registered with the ApsaraMQ for MQTT server are also automatically deleted.
   * 
   * @param request - DeleteCaCertificateRequest
   * @returns DeleteCaCertificateResponse
   */
  async deleteCaCertificate(request: $_model.DeleteCaCertificateRequest): Promise<$_model.DeleteCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCaCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a connection blacklist.
   * 
   * @param request - DeleteCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthConnectBlackResponse
   */
  async deleteCustomAuthConnectBlackWithOptions(request: $_model.DeleteCustomAuthConnectBlackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAuthConnectBlackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomAuthConnectBlackResponse({}));
  }

  /**
   * Deletes a connection blacklist.
   * 
   * @param request - DeleteCustomAuthConnectBlackRequest
   * @returns DeleteCustomAuthConnectBlackResponse
   */
  async deleteCustomAuthConnectBlack(request: $_model.DeleteCustomAuthConnectBlackRequest): Promise<$_model.DeleteCustomAuthConnectBlackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Deletes custom authentication.
   * 
   * @param request - DeleteCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthIdentityResponse
   */
  async deleteCustomAuthIdentityWithOptions(request: $_model.DeleteCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAuthIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomAuthIdentityResponse({}));
  }

  /**
   * Deletes custom authentication.
   * 
   * @param request - DeleteCustomAuthIdentityRequest
   * @returns DeleteCustomAuthIdentityResponse
   */
  async deleteCustomAuthIdentity(request: $_model.DeleteCustomAuthIdentityRequest): Promise<$_model.DeleteCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Deletes topic authorization.
   * 
   * @param request - DeleteCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAuthPermissionResponse
   */
  async deleteCustomAuthPermissionWithOptions(request: $_model.DeleteCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAuthPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomAuthPermissionResponse({}));
  }

  /**
   * Deletes topic authorization.
   * 
   * @param request - DeleteCustomAuthPermissionRequest
   * @returns DeleteCustomAuthPermissionResponse
   */
  async deleteCustomAuthPermission(request: $_model.DeleteCustomAuthPermissionRequest): Promise<$_model.DeleteCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Deletes the registration information of a specified device certificate from the server storage. A device certificate is a digital certificate issued by a certification authority (CA) root certificate to a client device. It is used for security authentication when the client connects to the server. After authentication, the server and the client can communicate securely by using the encryption key in the certificate. If the authentication fails, the server rejects the client connection.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional edition instances support the DeleteDeviceCertificate operation.
   * - The request frequency limit for a single user is 500 calls per second. If you have special requirements, contact the technical support team of ApsaraMQ for MQTT. DingTalk group ID: 35228338.
   * 
   * @param request - DeleteDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeviceCertificateResponse
   */
  async deleteDeviceCertificateWithOptions(request: $_model.DeleteDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeviceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!$dara.isNull(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeviceCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeviceCertificateResponse({}));
  }

  /**
   * Deletes the registration information of a specified device certificate from the server storage. A device certificate is a digital certificate issued by a certification authority (CA) root certificate to a client device. It is used for security authentication when the client connects to the server. After authentication, the server and the client can communicate securely by using the encryption key in the certificate. If the authentication fails, the server rejects the client connection.
   * 
   * @remarks
   * - Only Platinum<props="china"> and Professional edition instances support the DeleteDeviceCertificate operation.
   * - The request frequency limit for a single user is 500 calls per second. If you have special requirements, contact the technical support team of ApsaraMQ for MQTT. DingTalk group ID: 35228338.
   * 
   * @param request - DeleteDeviceCertificateRequest
   * @returns DeleteDeviceCertificateResponse
   */
  async deleteDeviceCertificate(request: $_model.DeleteDeviceCertificateRequest): Promise<$_model.DeleteDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a group ID.
   * 
   * @remarks
   * Each successful call to the **DeleteGroupId** operation is counted as one message TPS, which affects your billing. For more information about billing, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupIdResponse
   */
  async deleteGroupIdWithOptions(request: $_model.DeleteGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupIdResponse({}));
  }

  /**
   * Deletes a group ID.
   * 
   * @remarks
   * Each successful call to the **DeleteGroupId** operation is counted as one message TPS, which affects your billing. For more information about billing, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteGroupIdRequest
   * @returns DeleteGroupIdResponse
   */
  async deleteGroupId(request: $_model.DeleteGroupIdRequest): Promise<$_model.DeleteGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupIdWithOptions(request, runtime);
  }

  /**
   * Deletes wildcard subscriptions in batches.
   * 
   * @remarks
   * > Each successful call to the **DeleteTopic** operation counts as one message TPS, which affects your billing. For more information, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteWildcardByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWildcardByTopicResponse
   */
  async deleteWildcardByTopicWithOptions(request: $_model.DeleteWildcardByTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWildcardByTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firstTopic)) {
      query["FirstTopic"] = request.firstTopic;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.wildcards)) {
      query["Wildcards"] = request.wildcards;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWildcardByTopic",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWildcardByTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWildcardByTopicResponse({}));
  }

  /**
   * Deletes wildcard subscriptions in batches.
   * 
   * @remarks
   * > Each successful call to the **DeleteTopic** operation counts as one message TPS, which affects your billing. For more information, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - DeleteWildcardByTopicRequest
   * @returns DeleteWildcardByTopicResponse
   */
  async deleteWildcardByTopic(request: $_model.DeleteWildcardByTopicRequest): Promise<$_model.DeleteWildcardByTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWildcardByTopicWithOptions(request, runtime);
  }

  /**
   * Downgrades the public VIP access of a specific instance for multi-instance disaster recovery. This operation is supported only for Platinum instances and requires you to submit a ticket.
   * 
   * @param request - DisasterDowngradeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisasterDowngradeResponse
   */
  async disasterDowngradeWithOptions(request: $_model.DisasterDowngradeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisasterDowngradeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.downgradeInstanceId)) {
      body["DowngradeInstanceId"] = request.downgradeInstanceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisasterDowngrade",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisasterDowngradeResponse>(await this.callApi(params, req, runtime), new $_model.DisasterDowngradeResponse({}));
  }

  /**
   * Downgrades the public VIP access of a specific instance for multi-instance disaster recovery. This operation is supported only for Platinum instances and requires you to submit a ticket.
   * 
   * @param request - DisasterDowngradeRequest
   * @returns DisasterDowngradeResponse
   */
  async disasterDowngrade(request: $_model.DisasterDowngradeRequest): Promise<$_model.DisasterDowngradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disasterDowngradeWithOptions(request, runtime);
  }

  /**
   * Restores Internet access for an instance using its virtual IP address (VIP) for graceful recovery in a multi-instance disaster recovery architecture. This operation is available only for Platinum Edition instances. To use this operation, submit a ticket.
   * 
   * @param request - DisasterRecoveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisasterRecoveryResponse
   */
  async disasterRecoveryWithOptions(request: $_model.DisasterRecoveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisasterRecoveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.recoveryInstanceId)) {
      body["RecoveryInstanceId"] = request.recoveryInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisasterRecovery",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisasterRecoveryResponse>(await this.callApi(params, req, runtime), new $_model.DisasterRecoveryResponse({}));
  }

  /**
   * Restores Internet access for an instance using its virtual IP address (VIP) for graceful recovery in a multi-instance disaster recovery architecture. This operation is available only for Platinum Edition instances. To use this operation, submit a ticket.
   * 
   * @param request - DisasterRecoveryRequest
   * @returns DisasterRecoveryResponse
   */
  async disasterRecovery(request: $_model.DisasterRecoveryRequest): Promise<$_model.DisasterRecoveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disasterRecoveryWithOptions(request, runtime);
  }

  /**
   * Queries the details of a certificate authority (CA) certificate, such as the content and status of the certificate. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaCertificateResponse
   */
  async getCaCertificateWithOptions(request: $_model.GetCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetCaCertificateResponse({}));
  }

  /**
   * Queries the details of a certificate authority (CA) certificate, such as the content and status of the certificate. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetCaCertificateRequest
   * @returns GetCaCertificateResponse
   */
  async getCaCertificate(request: $_model.GetCaCertificateRequest): Promise<$_model.GetCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the details of a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceCertificateResponse
   */
  async getDeviceCertificateWithOptions(request: $_model.GetDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceCertificateResponse({}));
  }

  /**
   * Queries the details of a device certificate. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetDeviceCertificateRequest
   * @returns GetDeviceCertificateResponse
   */
  async getDeviceCertificate(request: $_model.GetDeviceCertificateRequest): Promise<$_model.GetDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the access credential of a device. If unique-certificate-per-device authentication is used as the authentication method on an ApsaraMQ for MQTT broker, an access credential that you apply for in advance is required for authentication when you connect your device to the broker. The connection can be established only after the authentication is passed.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - GetDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceCredentialResponse
   */
  async getDeviceCredentialWithOptions(request: $_model.GetDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceCredentialResponse({}));
  }

  /**
   * Queries the access credential of a device. If unique-certificate-per-device authentication is used as the authentication method on an ApsaraMQ for MQTT broker, an access credential that you apply for in advance is required for authentication when you connect your device to the broker. The connection can be established only after the authentication is passed.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **GetDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - GetDeviceCredentialRequest
   * @returns GetDeviceCredentialResponse
   */
  async getDeviceCredential(request: $_model.GetDeviceCredentialRequest): Promise<$_model.GetDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Obtains the registration code of a specific certificate authority (CA) certificate. When you register a CA certificate with an ApsaraMQ for MQTT broker, you must upload the validation certificate of the CA certificate to verify whether you have the private key of the CA certificate. The validation certificate of a CA certificate must be generated by using the registration code of the CA certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetRegisterCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegisterCodeResponse
   */
  async getRegisterCodeWithOptions(request: $_model.GetRegisterCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegisterCodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegisterCode",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegisterCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetRegisterCodeResponse({}));
  }

  /**
   * Obtains the registration code of a specific certificate authority (CA) certificate. When you register a CA certificate with an ApsaraMQ for MQTT broker, you must upload the validation certificate of the CA certificate to verify whether you have the private key of the CA certificate. The validation certificate of a CA certificate must be generated by using the registration code of the CA certificate.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - GetRegisterCodeRequest
   * @returns GetRegisterCodeResponse
   */
  async getRegisterCode(request: $_model.GetRegisterCodeRequest): Promise<$_model.GetRegisterCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegisterCodeWithOptions(request, runtime);
  }

  /**
   * ApsaraMQ for MQTT supports X.509 certificate-based device verification. Clients use device certificates for connection authentication. A Certificate Authority (CA) certificate is used to issue device certificates to clients and to verify the validity of those certificates. If you do not need to use a CA certificate for a period of time, call this operation to unregister it. This changes the status of the CA certificate to inactive. When you need to use the CA certificate again, you can call the ActiveCaCertificate operation to reactivate it.
   * 
   * @remarks
   * - Only Platinum Edition<props="china"> and Professional Edition instances support the InactivateCaCertificate operation.
   * - The request rate for a single user is limited to 500 per second. If you have special requirements, contact ApsaraMQ for MQTT technical support. The DingTalk group number is 35228338.
   * - You can call this operation only for CA certificates that are registered with ApsaraMQ for MQTT. To query the registered CA certificates for an instance, call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation.
   * 
   * @param request - InactivateCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InactivateCaCertificateResponse
   */
  async inactivateCaCertificateWithOptions(request: $_model.InactivateCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InactivateCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sn)) {
      query["Sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InactivateCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InactivateCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.InactivateCaCertificateResponse({}));
  }

  /**
   * ApsaraMQ for MQTT supports X.509 certificate-based device verification. Clients use device certificates for connection authentication. A Certificate Authority (CA) certificate is used to issue device certificates to clients and to verify the validity of those certificates. If you do not need to use a CA certificate for a period of time, call this operation to unregister it. This changes the status of the CA certificate to inactive. When you need to use the CA certificate again, you can call the ActiveCaCertificate operation to reactivate it.
   * 
   * @remarks
   * - Only Platinum Edition<props="china"> and Professional Edition instances support the InactivateCaCertificate operation.
   * - The request rate for a single user is limited to 500 per second. If you have special requirements, contact ApsaraMQ for MQTT technical support. The DingTalk group number is 35228338.
   * - You can call this operation only for CA certificates that are registered with ApsaraMQ for MQTT. To query the registered CA certificates for an instance, call the [ListCaCertificate](https://help.aliyun.com/document_detail/2604958.html) operation.
   * 
   * @param request - InactivateCaCertificateRequest
   * @returns InactivateCaCertificateResponse
   */
  async inactivateCaCertificate(request: $_model.InactivateCaCertificateRequest): Promise<$_model.InactivateCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inactivateCaCertificateWithOptions(request, runtime);
  }

  /**
   * A device certificate is a digital certificate that a root Certificate Authority (CA) issues to a client device. The service uses this certificate to authenticate the client during connection. If authentication is successful, the service and the client can communicate securely using the encryption key in the certificate. If authentication fails, the service denies the client\\"s connection. Should you need to temporarily disable a device certificate, you can call this operation to inactivate it, setting its status to inactive.
   * 
   * @remarks
   * - Only Platinum Edition<props="china">and Professional Edition instances support the InactivateDeviceCertificate operation.
   * - The request frequency for a single user is limited to 500 calls per second. For special requirements, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - InactivateDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InactivateDeviceCertificateResponse
   */
  async inactivateDeviceCertificateWithOptions(request: $_model.InactivateDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InactivateDeviceCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caSn)) {
      query["CaSn"] = request.caSn;
    }

    if (!$dara.isNull(request.deviceSn)) {
      query["DeviceSn"] = request.deviceSn;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InactivateDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InactivateDeviceCertificateResponse>(await this.callApi(params, req, runtime), new $_model.InactivateDeviceCertificateResponse({}));
  }

  /**
   * A device certificate is a digital certificate that a root Certificate Authority (CA) issues to a client device. The service uses this certificate to authenticate the client during connection. If authentication is successful, the service and the client can communicate securely using the encryption key in the certificate. If authentication fails, the service denies the client\\"s connection. Should you need to temporarily disable a device certificate, you can call this operation to inactivate it, setting its status to inactive.
   * 
   * @remarks
   * - Only Platinum Edition<props="china">and Professional Edition instances support the InactivateDeviceCertificate operation.
   * - The request frequency for a single user is limited to 500 calls per second. For special requirements, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - InactivateDeviceCertificateRequest
   * @returns InactivateDeviceCertificateResponse
   */
  async inactivateDeviceCertificate(request: $_model.InactivateDeviceCertificateRequest): Promise<$_model.InactivateDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.inactivateDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all certificate authority (CA) certificates that are registered with an ApsaraMQ for MQTT instance. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCaCertificateResponse
   */
  async listCaCertificateWithOptions(request: $_model.ListCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ListCaCertificateResponse({}));
  }

  /**
   * Queries all certificate authority (CA) certificates that are registered with an ApsaraMQ for MQTT instance. ApsaraMQ for MQTT allows you to use X.509 certificates for authentication. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, you can use the device certificate to implement authentication. CA certificates are used to issue device certificates to clients and validate the device certificates.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListCaCertificateRequest
   * @returns ListCaCertificateResponse
   */
  async listCaCertificate(request: $_model.ListCaCertificateRequest): Promise<$_model.ListCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all device certificates that are registered with an ApsaraMQ for MQTT instance. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCertificateResponse
   */
  async listDeviceCertificateWithOptions(request: $_model.ListDeviceCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceCertificateResponse({}));
  }

  /**
   * Queries all device certificates that are registered with an ApsaraMQ for MQTT instance. Device certificates are digital certificates issued to clients by certificate authority (CA) root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateRequest
   * @returns ListDeviceCertificateResponse
   */
  async listDeviceCertificate(request: $_model.ListDeviceCertificateRequest): Promise<$_model.ListDeviceCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceCertificateWithOptions(request, runtime);
  }

  /**
   * Queries all device certificates that are issued by a certificate authority (CA) certificate and registered with ApsaraMQ for MQTT brokers. Device certificates are digital certificates issued to clients by CA root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateByCaSnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCertificateByCaSnResponse
   */
  async listDeviceCertificateByCaSnWithOptions(request: $_model.ListDeviceCertificateByCaSnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceCertificateByCaSnResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceCertificateByCaSn",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceCertificateByCaSnResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceCertificateByCaSnResponse({}));
  }

  /**
   * Queries all device certificates that are issued by a certificate authority (CA) certificate and registered with ApsaraMQ for MQTT brokers. Device certificates are digital certificates issued to clients by CA root certificates. When you connect an ApsaraMQ for MQTT client to an ApsaraMQ for MQTT broker, the broker uses the device certificate to authenticate the client. If the client passes the authentication, the client and the broker can communicate with each other based on the encrypted private key in the device certificate. If the client fails the authentication, access requests from the client are denied by the client.
   * 
   * @remarks
   *   Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * *   You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - ListDeviceCertificateByCaSnRequest
   * @returns ListDeviceCertificateByCaSnResponse
   */
  async listDeviceCertificateByCaSn(request: $_model.ListDeviceCertificateByCaSnRequest): Promise<$_model.ListDeviceCertificateByCaSnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceCertificateByCaSnWithOptions(request, runtime);
  }

  /**
   * Queries clients that have applied for access credentials in unique-certificate-per-device authentication mode in an ApsaraMQ for MQTT instance.
   * 
   * @param request - ListDeviceCredentialClientIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceCredentialClientIdResponse
   */
  async listDeviceCredentialClientIdWithOptions(request: $_model.ListDeviceCredentialClientIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceCredentialClientIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceCredentialClientId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceCredentialClientIdResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceCredentialClientIdResponse({}));
  }

  /**
   * Queries clients that have applied for access credentials in unique-certificate-per-device authentication mode in an ApsaraMQ for MQTT instance.
   * 
   * @param request - ListDeviceCredentialClientIdRequest
   * @returns ListDeviceCredentialClientIdResponse
   */
  async listDeviceCredentialClientId(request: $_model.ListDeviceCredentialClientIdRequest): Promise<$_model.ListDeviceCredentialClientIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceCredentialClientIdWithOptions(request, runtime);
  }

  /**
   * You can call the ListGroupId operation to query all Group IDs in an instance.
   * 
   * @remarks
   * Each successful call to the **ListGroupId** operation is counted as one message transaction and is billed based on transactions per second (TPS). For more information, see [billing details](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ListGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupIdResponse
   */
  async listGroupIdWithOptions(request: $_model.ListGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroupId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupIdResponse({}));
  }

  /**
   * You can call the ListGroupId operation to query all Group IDs in an instance.
   * 
   * @remarks
   * Each successful call to the **ListGroupId** operation is counted as one message transaction and is billed based on transactions per second (TPS). For more information, see [billing details](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - ListGroupIdRequest
   * @returns ListGroupIdResponse
   */
  async listGroupId(request: $_model.ListGroupIdRequest): Promise<$_model.ListGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGroupIdWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * You can call this operation to query a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Lists the tags that are attached to one or more resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Lists the tags that are attached to one or more resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a client ID in a connection blacklist.
   * 
   * @param request - QueryCustomAuthConnectBlackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthConnectBlackResponse
   */
  async queryCustomAuthConnectBlackWithOptions(request: $_model.QueryCustomAuthConnectBlackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomAuthConnectBlackResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomAuthConnectBlack",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomAuthConnectBlackResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomAuthConnectBlackResponse({}));
  }

  /**
   * Queries a client ID in a connection blacklist.
   * 
   * @param request - QueryCustomAuthConnectBlackRequest
   * @returns QueryCustomAuthConnectBlackResponse
   */
  async queryCustomAuthConnectBlack(request: $_model.QueryCustomAuthConnectBlackRequest): Promise<$_model.QueryCustomAuthConnectBlackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomAuthConnectBlackWithOptions(request, runtime);
  }

  /**
   * Queries custom identity authentication.
   * 
   * @param request - QueryCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthIdentityResponse
   */
  async queryCustomAuthIdentityWithOptions(request: $_model.QueryCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomAuthIdentityResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomAuthIdentityResponse({}));
  }

  /**
   * Queries custom identity authentication.
   * 
   * @param request - QueryCustomAuthIdentityRequest
   * @returns QueryCustomAuthIdentityResponse
   */
  async queryCustomAuthIdentity(request: $_model.QueryCustomAuthIdentityRequest): Promise<$_model.QueryCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Queries the authorization information about a topic.
   * 
   * @param request - QueryCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomAuthPermissionResponse
   */
  async queryCustomAuthPermissionWithOptions(request: $_model.QueryCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomAuthPermissionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomAuthPermissionResponse({}));
  }

  /**
   * Queries the authorization information about a topic.
   * 
   * @param request - QueryCustomAuthPermissionRequest
   * @returns QueryCustomAuthPermissionResponse
   */
  async queryCustomAuthPermission(request: $_model.QueryCustomAuthPermissionRequest): Promise<$_model.QueryCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomAuthPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the device trace of an ApsaraMQ for MQTT client by paging. When a device encounters an exception, you can call this operation to query the connection history of the specified device to help you quickly identify the cause of the exception.
   * 
   * @remarks
   * - Each successful call to the **QueryMqttTraceDevice** operation counts as one message TPS, which affects your billing. For more information about billing, see [Billing](https://help.aliyun.com/document_detail/52819.html).
   * - The queries per second (QPS) limit for a single user on this operation is 500. Exceeding this limit will trigger throttling, which may affect your business. Call this operation appropriately. For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDeviceWithOptions(request: $_model.QueryMqttTraceDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMqttTraceDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
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

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceDevice",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMqttTraceDeviceResponse>(await this.callApi(params, req, runtime), new $_model.QueryMqttTraceDeviceResponse({}));
  }

  /**
   * Queries the device trace of an ApsaraMQ for MQTT client by paging. When a device encounters an exception, you can call this operation to query the connection history of the specified device to help you quickly identify the cause of the exception.
   * 
   * @remarks
   * - Each successful call to the **QueryMqttTraceDevice** operation counts as one message TPS, which affects your billing. For more information about billing, see [Billing](https://help.aliyun.com/document_detail/52819.html).
   * - The queries per second (QPS) limit for a single user on this operation is 500. Exceeding this limit will trigger throttling, which may affect your business. Call this operation appropriately. For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceDeviceRequest
   * @returns QueryMqttTraceDeviceResponse
   */
  async queryMqttTraceDevice(request: $_model.QueryMqttTraceDeviceRequest): Promise<$_model.QueryMqttTraceDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceDeviceWithOptions(request, runtime);
  }

  /**
   * Queries messages on a device within a specific period of time. If a message is not sent or received as expected, you can call this operation to query the messaging status of the message to efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageOfClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClientWithOptions(request: $_model.QueryMqttTraceMessageOfClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMqttTraceMessageOfClientResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
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

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceMessageOfClient",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMqttTraceMessageOfClientResponse>(await this.callApi(params, req, runtime), new $_model.QueryMqttTraceMessageOfClientResponse({}));
  }

  /**
   * Queries messages on a device within a specific period of time. If a message is not sent or received as expected, you can call this operation to query the messaging status of the message to efficiently troubleshoot issues.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessageOfClient** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageOfClientRequest
   * @returns QueryMqttTraceMessageOfClientResponse
   */
  async queryMqttTraceMessageOfClient(request: $_model.QueryMqttTraceMessageOfClientRequest): Promise<$_model.QueryMqttTraceMessageOfClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceMessageOfClientWithOptions(request, runtime);
  }

  /**
   * Queries the trace of a message. If a message is not sent or received as expected, you can call this operation to view the message details to troubleshoot the issue. For example, you can query the time when the message is published and the client that publishes the message.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessagePublishRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublishWithOptions(request: $_model.QueryMqttTraceMessagePublishRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMqttTraceMessagePublishResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceMessagePublish",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMqttTraceMessagePublishResponse>(await this.callApi(params, req, runtime), new $_model.QueryMqttTraceMessagePublishResponse({}));
  }

  /**
   * Queries the trace of a message. If a message is not sent or received as expected, you can call this operation to view the message details to troubleshoot the issue. For example, you can query the time when the message is published and the client that publishes the message.
   * 
   * @remarks
   *   Each successful call to the **QueryMqttTraceMessagePublish** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * *   You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessagePublishRequest
   * @returns QueryMqttTraceMessagePublishResponse
   */
  async queryMqttTraceMessagePublish(request: $_model.QueryMqttTraceMessagePublishRequest): Promise<$_model.QueryMqttTraceMessagePublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceMessagePublishWithOptions(request, runtime);
  }

  /**
   * Queries the delivery trace of a message. If a message is not sent or received as expected, you can call this operation to view the details about the message. For example, you can query the clients that subscribe to the message and the time when the message is delivered. This operation helps you locate the problem and identify the cause of the problem.
   * 
   * @remarks
   * - Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageSubscribeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribeWithOptions(request: $_model.QueryMqttTraceMessageSubscribeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMqttTraceMessageSubscribeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
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

    if (!$dara.isNull(request.mqttRegionId)) {
      query["MqttRegionId"] = request.mqttRegionId;
    }

    if (!$dara.isNull(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMqttTraceMessageSubscribe",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMqttTraceMessageSubscribeResponse>(await this.callApi(params, req, runtime), new $_model.QueryMqttTraceMessageSubscribeResponse({}));
  }

  /**
   * Queries the delivery trace of a message. If a message is not sent or received as expected, you can call this operation to view the details about the message. For example, you can query the clients that subscribe to the message and the time when the message is delivered. This operation helps you locate the problem and identify the cause of the problem.
   * 
   * @remarks
   * - Each successful call to the **QueryMqttTraceMessageSubscribe** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * 
   * @param request - QueryMqttTraceMessageSubscribeRequest
   * @returns QueryMqttTraceMessageSubscribeResponse
   */
  async queryMqttTraceMessageSubscribe(request: $_model.QueryMqttTraceMessageSubscribeRequest): Promise<$_model.QueryMqttTraceMessageSubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMqttTraceMessageSubscribeWithOptions(request, runtime);
  }

  /**
   * Queries the running status of an ApsaraMQ for MQTT client. You can troubleshoot issues based on the queried results. You can enter the ID of an ApsaraMQ for MQTT client to check the connection status and IP address of the device.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second.\\*\\*\\*\\* For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QuerySessionByClientIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionByClientIdResponse
   */
  async querySessionByClientIdWithOptions(request: $_model.QuerySessionByClientIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySessionByClientIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySessionByClientId",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySessionByClientIdResponse>(await this.callApi(params, req, runtime), new $_model.QuerySessionByClientIdResponse({}));
  }

  /**
   * Queries the running status of an ApsaraMQ for MQTT client. You can troubleshoot issues based on the queried results. You can enter the ID of an ApsaraMQ for MQTT client to check the connection status and IP address of the device.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second.\\*\\*\\*\\* For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **QuerySessionByClientId** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QuerySessionByClientIdRequest
   * @returns QuerySessionByClientIdResponse
   */
  async querySessionByClientId(request: $_model.QuerySessionByClientIdRequest): Promise<$_model.QuerySessionByClientIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySessionByClientIdWithOptions(request, runtime);
  }

  /**
   * Queries the status of a token. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker. A token is a temporary credential and is valid only within a specific period of time. You can call this operation to query whether a token expires.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTokenResponse
   */
  async queryTokenWithOptions(request: $_model.QueryTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTokenResponse>(await this.callApi(params, req, runtime), new $_model.QueryTokenResponse({}));
  }

  /**
   * Queries the status of a token. If token-based authentication is used for permission authentication on an ApsaraMQ for MQTT broker, a token that is issued by the broker is required for authentication each time a client is connected to the broker. A token is a temporary credential and is valid only within a specific period of time. You can call this operation to query whether a token expires.
   * 
   * @remarks
   *   You can call this operation up to 100 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **QueryToken** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryTokenRequest
   * @returns QueryTokenResponse
   */
  async queryToken(request: $_model.QueryTokenRequest): Promise<$_model.QueryTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTokenWithOptions(request, runtime);
  }

  /**
   * Queries all wildcards and the upper limit under a specific topic.
   * 
   * @remarks
   * > Each successful call to the **DeleteTopic** operation counts as one message TPS, which affects your billing. For more information, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryWildcardByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryWildcardByTopicResponse
   */
  async queryWildcardByTopicWithOptions(request: $_model.QueryWildcardByTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryWildcardByTopicResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryWildcardByTopic",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryWildcardByTopicResponse>(await this.callApi(params, req, runtime), new $_model.QueryWildcardByTopicResponse({}));
  }

  /**
   * Queries all wildcards and the upper limit under a specific topic.
   * 
   * @remarks
   * > Each successful call to the **DeleteTopic** operation counts as one message TPS, which affects your billing. For more information, see [Billing overview](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - QueryWildcardByTopicRequest
   * @returns QueryWildcardByTopicResponse
   */
  async queryWildcardByTopic(request: $_model.QueryWildcardByTopicRequest): Promise<$_model.QueryWildcardByTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryWildcardByTopicWithOptions(request, runtime);
  }

  /**
   * Updates the access credential of a device.
   * 
   * @remarks
   * ## [](#)Limits
   * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * > Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RefreshDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredentialWithOptions(request: $_model.RefreshDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshDeviceCredentialResponse>(await this.callApi(params, req, runtime), new $_model.RefreshDeviceCredentialResponse({}));
  }

  /**
   * Updates the access credential of a device.
   * 
   * @remarks
   * ## [](#)Limits
   * You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * > Each successful call to the **RefreshDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RefreshDeviceCredentialRequest
   * @returns RefreshDeviceCredentialResponse
   */
  async refreshDeviceCredential(request: $_model.RefreshDeviceCredentialRequest): Promise<$_model.RefreshDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * RegisterCaCertificate
   * 
   * @remarks
   * - Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * - You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - RegisterCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCaCertificateResponse
   */
  async registerCaCertificateWithOptions(request: $_model.RegisterCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caContent)) {
      query["CaContent"] = request.caContent;
    }

    if (!$dara.isNull(request.caName)) {
      query["CaName"] = request.caName;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.verificationContent)) {
      query["VerificationContent"] = request.verificationContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterCaCertificate",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.RegisterCaCertificateResponse({}));
  }

  /**
   * RegisterCaCertificate
   * 
   * @remarks
   * - Only ApsaraMQ for MQTT Enterprise Platinum Edition instances support this operation.
   * - You can call this operation up to 500 times per second per Alibaba Cloud account. If you want to increase the limit, join the DingTalk group (ID: 35228338) to contact ApsaraMQ for MQTT technical support.
   * 
   * @param request - RegisterCaCertificateRequest
   * @returns RegisterCaCertificateResponse
   */
  async registerCaCertificate(request: $_model.RegisterCaCertificateRequest): Promise<$_model.RegisterCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerCaCertificateWithOptions(request, runtime);
  }

  /**
   * Registers an access credential for a device. In unique-certificate-per-device authentication mode, an application server applies a unique access credential for each device from the corresponding ApsaraMQ for MQTT broker. The access credential of a device consists of the client ID, AccessKey ID, and AccessKey secret of the device. When you connect a device to ApsaraMQ for MQTT, you must configure Username and Password based on the access credential of the device for authentication. You can activate the device and transfer data between the device and ApsaraMQ for MQTT only after the authentication is passed.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RegisterDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceCredentialResponse
   */
  async registerDeviceCredentialWithOptions(request: $_model.RegisterDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterDeviceCredentialResponse>(await this.callApi(params, req, runtime), new $_model.RegisterDeviceCredentialResponse({}));
  }

  /**
   * Registers an access credential for a device. In unique-certificate-per-device authentication mode, an application server applies a unique access credential for each device from the corresponding ApsaraMQ for MQTT broker. The access credential of a device consists of the client ID, AccessKey ID, and AccessKey secret of the device. When you connect a device to ApsaraMQ for MQTT, you must configure Username and Password based on the access credential of the device for authentication. You can activate the device and transfer data between the device and ApsaraMQ for MQTT only after the authentication is passed.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **RegisterDeviceCredential** operation increases the messaging transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RegisterDeviceCredentialRequest
   * @returns RegisterDeviceCredentialResponse
   */
  async registerDeviceCredential(request: $_model.RegisterDeviceCredentialRequest): Promise<$_model.RegisterDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Revokes a token.
   * 
   * @remarks
   *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RevokeTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTokenResponse
   */
  async revokeTokenWithOptions(request: $_model.RevokeTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeToken",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeTokenResponse>(await this.callApi(params, req, runtime), new $_model.RevokeTokenResponse({}));
  }

  /**
   * Revokes a token.
   * 
   * @remarks
   *   You can call this operation up to 5 times per second per account. If you want to increase the limit, join the DingTalk group 35228338 to contact ApsaraMQ for MQTT technical support.
   * *   Each successful call to the **RevokeToken** operation increases the messaging transactions per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - RevokeTokenRequest
   * @returns RevokeTokenResponse
   */
  async revokeToken(request: $_model.RevokeTokenRequest): Promise<$_model.RevokeTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeTokenWithOptions(request, runtime);
  }

  /**
   * Sends a single message from an application on a cloud server to ApsaraMQ for MQTT.
   * 
   * @remarks
   *   The **SendMessage** operation is called by an application on a cloud server. This operation is complementary to the operation that is called to send a message from an ApsaraMQ for MQTT client. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](https://help.aliyun.com/document_detail/179160.html).
   * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT broker to forward messages to ApsaraMQ for RocketMQ, use [an SDK to send the messages](https://help.aliyun.com/document_detail/174527.html). The **SendMessage** operation supports up to 1,000 queries per second (QPS). For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **SendMessage** operation is calculated as a message transaction per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - SendMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendMessageResponse
   */
  async sendMessageWithOptions(request: $_model.SendMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendMessageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqttTopic)) {
      query["MqttTopic"] = request.mqttTopic;
    }

    if (!$dara.isNull(request.payload)) {
      query["Payload"] = request.payload;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendMessage",
      version: "2020-04-20",
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
   * Sends a single message from an application on a cloud server to ApsaraMQ for MQTT.
   * 
   * @remarks
   *   The **SendMessage** operation is called by an application on a cloud server. This operation is complementary to the operation that is called to send a message from an ApsaraMQ for MQTT client. For information about the differences between the scenarios of sending messages from applications on cloud servers and the scenarios of sending messages from ApsaraMQ for MQTT clients, see [Developer guide](https://help.aliyun.com/document_detail/179160.html).
   * *   Messages that are sent by calling the **SendMessage** operation cannot be forwarded to ApsaraMQ for RocketMQ. If you want to use an ApsaraMQ for MQTT broker to forward messages to ApsaraMQ for RocketMQ, use [an SDK to send the messages](https://help.aliyun.com/document_detail/174527.html). The **SendMessage** operation supports up to 1,000 queries per second (QPS). For more information, see [QPS limits](https://help.aliyun.com/document_detail/163047.html).
   * *   Each successful call to the **SendMessage** operation is calculated as a message transaction per second (TPS). This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - SendMessageRequest
   * @returns SendMessageResponse
   */
  async sendMessage(request: $_model.SendMessageRequest): Promise<$_model.SendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendMessageWithOptions(request, runtime);
  }

  /**
   * Configures a multi-domain certificate.
   * 
   * @param request - SetSniConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSniConfigResponse
   */
  async setSniConfigWithOptions(request: $_model.SetSniConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSniConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultCertificate)) {
      query["DefaultCertificate"] = request.defaultCertificate;
    }

    if (!$dara.isNull(request.mqttInstanceId)) {
      query["MqttInstanceId"] = request.mqttInstanceId;
    }

    if (!$dara.isNull(request.sniConfig)) {
      query["SniConfig"] = request.sniConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSniConfig",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSniConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetSniConfigResponse({}));
  }

  /**
   * Configures a multi-domain certificate.
   * 
   * @param request - SetSniConfigRequest
   * @returns SetSniConfigResponse
   */
  async setSniConfig(request: $_model.SetSniConfigRequest): Promise<$_model.SetSniConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSniConfigWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deregisters the access credential of a device. After the access credential of a device is deregistered, you can no longer use the access credential to authenticate the device on the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - UnRegisterDeviceCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredentialWithOptions(request: $_model.UnRegisterDeviceCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnRegisterDeviceCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnRegisterDeviceCredential",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnRegisterDeviceCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UnRegisterDeviceCredentialResponse({}));
  }

  /**
   * Deregisters the access credential of a device. After the access credential of a device is deregistered, you can no longer use the access credential to authenticate the device on the ApsaraMQ for MQTT broker.
   * 
   * @remarks
   * - You can call this operation up to 500 times per second per account. If the limit is exceeded, throttling is triggered. This may affect your business. We recommend that you take note of this limit when you call this operation. For more information, see [Limits on QPS](https://help.aliyun.com/document_detail/163047.html).
   * - Each successful call to the **UnRegisterDeviceCredential** operation increases the number of transactions per second (TPS) by one. This affects the billing of your instance. For more information, see [Billing rules](https://help.aliyun.com/document_detail/52819.html).
   * 
   * @param request - UnRegisterDeviceCredentialRequest
   * @returns UnRegisterDeviceCredentialResponse
   */
  async unRegisterDeviceCredential(request: $_model.UnRegisterDeviceCredentialRequest): Promise<$_model.UnRegisterDeviceCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unRegisterDeviceCredentialWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates custom authentication.
   * 
   * @param request - UpdateCustomAuthIdentityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAuthIdentityResponse
   */
  async updateCustomAuthIdentityWithOptions(request: $_model.UpdateCustomAuthIdentityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAuthIdentityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.secret)) {
      body["Secret"] = request.secret;
    }

    if (!$dara.isNull(request.signMode)) {
      body["SignMode"] = request.signMode;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomAuthIdentity",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomAuthIdentityResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomAuthIdentityResponse({}));
  }

  /**
   * Updates custom authentication.
   * 
   * @param request - UpdateCustomAuthIdentityRequest
   * @returns UpdateCustomAuthIdentityResponse
   */
  async updateCustomAuthIdentity(request: $_model.UpdateCustomAuthIdentityRequest): Promise<$_model.UpdateCustomAuthIdentityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomAuthIdentityWithOptions(request, runtime);
  }

  /**
   * Updates the permissions on a topic.
   * 
   * @param request - UpdateCustomAuthPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAuthPermissionResponse
   */
  async updateCustomAuthPermissionWithOptions(request: $_model.UpdateCustomAuthPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAuthPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effect)) {
      body["Effect"] = request.effect;
    }

    if (!$dara.isNull(request.identity)) {
      body["Identity"] = request.identity;
    }

    if (!$dara.isNull(request.identityType)) {
      body["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.permitAction)) {
      body["PermitAction"] = request.permitAction;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomAuthPermission",
      version: "2020-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomAuthPermissionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomAuthPermissionResponse({}));
  }

  /**
   * Updates the permissions on a topic.
   * 
   * @param request - UpdateCustomAuthPermissionRequest
   * @returns UpdateCustomAuthPermissionResponse
   */
  async updateCustomAuthPermission(request: $_model.UpdateCustomAuthPermissionRequest): Promise<$_model.UpdateCustomAuthPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomAuthPermissionWithOptions(request, runtime);
  }

}
