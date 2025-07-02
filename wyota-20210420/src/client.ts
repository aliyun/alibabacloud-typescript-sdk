// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("wyota", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 设备激活
   * 
   * @param request - ActivateDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateDeviceResponse
   */
  async activateDeviceWithOptions(request: $_model.ActivateDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateDeviceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateDevice",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateDeviceResponse>(await this.callApi(params, req, runtime), new $_model.ActivateDeviceResponse({}));
  }

  /**
   * 设备激活
   * 
   * @param request - ActivateDeviceRequest
   * @returns ActivateDeviceResponse
   */
  async activateDevice(request: $_model.ActivateDeviceRequest): Promise<$_model.ActivateDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateDeviceWithOptions(request, runtime);
  }

  /**
   * 通过序列号添加设备
   * 
   * @param request - AddDeviceFromSNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDeviceFromSNResponse
   */
  async addDeviceFromSNWithOptions(request: $_model.AddDeviceFromSNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDeviceFromSNResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.customProperty)) {
      body["CustomProperty"] = request.customProperty;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.labelContents)) {
      body["LabelContents"] = request.labelContents;
    }

    if (!$dara.isNull(request.secureNetworkType)) {
      body["SecureNetworkType"] = request.secureNetworkType;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDeviceFromSN",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDeviceFromSNResponse>(await this.callApi(params, req, runtime), new $_model.AddDeviceFromSNResponse({}));
  }

  /**
   * 通过序列号添加设备
   * 
   * @param request - AddDeviceFromSNRequest
   * @returns AddDeviceFromSNResponse
   */
  async addDeviceFromSN(request: $_model.AddDeviceFromSNRequest): Promise<$_model.AddDeviceFromSNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDeviceFromSNWithOptions(request, runtime);
  }

  /**
   * 新增设备座位和标签
   * 
   * @param request - AddDeviceSeatsAndLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDeviceSeatsAndLabelsResponse
   */
  async addDeviceSeatsAndLabelsWithOptions(request: $_model.AddDeviceSeatsAndLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDeviceSeatsAndLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isUnique)) {
      body["IsUnique"] = request.isUnique;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.labelList)) {
      body["LabelList"] = request.labelList;
    }

    if (!$dara.isNull(request.seatName)) {
      body["SeatName"] = request.seatName;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDeviceSeatsAndLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDeviceSeatsAndLabelsResponse>(await this.callApi(params, req, runtime), new $_model.AddDeviceSeatsAndLabelsResponse({}));
  }

  /**
   * 新增设备座位和标签
   * 
   * @param request - AddDeviceSeatsAndLabelsRequest
   * @returns AddDeviceSeatsAndLabelsResponse
   */
  async addDeviceSeatsAndLabels(request: $_model.AddDeviceSeatsAndLabelsRequest): Promise<$_model.AddDeviceSeatsAndLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDeviceSeatsAndLabelsWithOptions(request, runtime);
  }

  /**
   * 通过CSV文件添加设备
   * 
   * @param request - AddDevicesFromCSVRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDevicesFromCSVResponse
   */
  async addDevicesFromCSVWithOptions(request: $_model.AddDevicesFromCSVRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDevicesFromCSVResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.seatCol)) {
      body["SeatCol"] = request.seatCol;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteName)) {
      body["SiteName"] = request.siteName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDevicesFromCSV",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDevicesFromCSVResponse>(await this.callApi(params, req, runtime), new $_model.AddDevicesFromCSVResponse({}));
  }

  /**
   * 通过CSV文件添加设备
   * 
   * @param request - AddDevicesFromCSVRequest
   * @returns AddDevicesFromCSVResponse
   */
  async addDevicesFromCSV(request: $_model.AddDevicesFromCSVRequest): Promise<$_model.AddDevicesFromCSVResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDevicesFromCSVWithOptions(request, runtime);
  }

  /**
   * 添加标签
   * 
   * @param request - AddLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLabelsResponse
   */
  async addLabelsWithOptions(request: $_model.AddLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelContents)) {
      body["LabelContents"] = request.labelContents;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLabelsResponse>(await this.callApi(params, req, runtime), new $_model.AddLabelsResponse({}));
  }

  /**
   * 添加标签
   * 
   * @param request - AddLabelsRequest
   * @returns AddLabelsResponse
   */
  async addLabels(request: $_model.AddLabelsRequest): Promise<$_model.AddLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addLabelsWithOptions(request, runtime);
  }

  /**
   * 新增或更新设备工位
   * 
   * @param request - AddOrUpdateDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddOrUpdateDeviceSeatsResponse
   */
  async addOrUpdateDeviceSeatsWithOptions(request: $_model.AddOrUpdateDeviceSeatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddOrUpdateDeviceSeatsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.userCustomId)) {
      body["UserCustomId"] = request.userCustomId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddOrUpdateDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddOrUpdateDeviceSeatsResponse>(await this.callApi(params, req, runtime), new $_model.AddOrUpdateDeviceSeatsResponse({}));
  }

  /**
   * 新增或更新设备工位
   * 
   * @param request - AddOrUpdateDeviceSeatsRequest
   * @returns AddOrUpdateDeviceSeatsResponse
   */
  async addOrUpdateDeviceSeats(request: $_model.AddOrUpdateDeviceSeatsRequest): Promise<$_model.AddOrUpdateDeviceSeatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addOrUpdateDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTerminalResponse
   */
  async addTerminalWithOptions(request: $_model.AddTerminalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTerminalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTerminal",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTerminalResponse>(await this.callApi(params, req, runtime), new $_model.AddTerminalResponse({}));
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalRequest
   * @returns AddTerminalResponse
   */
  async addTerminal(request: $_model.AddTerminalRequest): Promise<$_model.AddTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTerminalWithOptions(request, runtime);
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTerminalsResponse
   */
  async addTerminalsWithOptions(request: $_model.AddTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTerminalsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addTerminalParams)) {
      bodyFlat["AddTerminalParams"] = request.addTerminalParams;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTerminalsResponse>(await this.callApi(params, req, runtime), new $_model.AddTerminalsResponse({}));
  }

  /**
   * 添加终端
   * 
   * @param request - AddTerminalsRequest
   * @returns AddTerminalsResponse
   */
  async addTerminals(request: $_model.AddTerminalsRequest): Promise<$_model.AddTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTerminalsWithOptions(request, runtime);
  }

  /**
   * 设备绑定终端用户
   * 
   * @param request - AttachEndUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachEndUsersResponse
   */
  async attachEndUsersWithOptions(request: $_model.AttachEndUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachEndUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachEndUsers",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachEndUsersResponse>(await this.callApi(params, req, runtime), new $_model.AttachEndUsersResponse({}));
  }

  /**
   * 设备绑定终端用户
   * 
   * @param request - AttachEndUsersRequest
   * @returns AttachEndUsersResponse
   */
  async attachEndUsers(request: $_model.AttachEndUsersRequest): Promise<$_model.AttachEndUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachEndUsersWithOptions(request, runtime);
  }

  /**
   * 设备绑定标签
   * 
   * @param request - AttachLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachLabelResponse
   */
  async attachLabelWithOptions(request: $_model.AttachLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachLabelResponse>(await this.callApi(params, req, runtime), new $_model.AttachLabelResponse({}));
  }

  /**
   * 设备绑定标签
   * 
   * @param request - AttachLabelRequest
   * @returns AttachLabelResponse
   */
  async attachLabel(request: $_model.AttachLabelRequest): Promise<$_model.AttachLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachLabelWithOptions(request, runtime);
  }

  /**
   * 批量绑定标签
   * 
   * @param request - AttachLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachLabelsResponse
   */
  async attachLabelsWithOptions(request: $_model.AttachLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelIds)) {
      body["LabelIds"] = request.labelIds;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachLabelsResponse>(await this.callApi(params, req, runtime), new $_model.AttachLabelsResponse({}));
  }

  /**
   * 批量绑定标签
   * 
   * @param request - AttachLabelsRequest
   * @returns AttachLabelsResponse
   */
  async attachLabels(request: $_model.AttachLabelsRequest): Promise<$_model.AttachLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachLabelsWithOptions(request, runtime);
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindAccountLessLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountLessLoginUserResponse
   */
  async bindAccountLessLoginUserWithOptions(request: $_model.BindAccountLessLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAccountLessLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAccountLessLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAccountLessLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.BindAccountLessLoginUserResponse({}));
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindAccountLessLoginUserRequest
   * @returns BindAccountLessLoginUserResponse
   */
  async bindAccountLessLoginUser(request: $_model.BindAccountLessLoginUserRequest): Promise<$_model.BindAccountLessLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAccountLessLoginUserWithOptions(request, runtime);
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindPasswordFreeLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPasswordFreeLoginUserResponse
   */
  async bindPasswordFreeLoginUserWithOptions(request: $_model.BindPasswordFreeLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPasswordFreeLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPasswordFreeLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindPasswordFreeLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.BindPasswordFreeLoginUserResponse({}));
  }

  /**
   * 绑定免账号登录用户
   * 
   * @param request - BindPasswordFreeLoginUserRequest
   * @returns BindPasswordFreeLoginUserResponse
   */
  async bindPasswordFreeLoginUser(request: $_model.BindPasswordFreeLoginUserRequest): Promise<$_model.BindPasswordFreeLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPasswordFreeLoginUserWithOptions(request, runtime);
  }

  /**
   * 检查uuid有效性
   * 
   * @param request - CheckUuidValidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUuidValidResponse
   */
  async checkUuidValidWithOptions(request: $_model.CheckUuidValidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUuidValidResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bluetooth)) {
      body["Bluetooth"] = request.bluetooth;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.chipId)) {
      body["ChipId"] = request.chipId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!$dara.isNull(request.etherMac)) {
      body["EtherMac"] = request.etherMac;
    }

    if (!$dara.isNull(request.loginRegionId)) {
      body["LoginRegionId"] = request.loginRegionId;
    }

    if (!$dara.isNull(request.loginToken)) {
      body["LoginToken"] = request.loginToken;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.wlan)) {
      body["Wlan"] = request.wlan;
    }

    if (!$dara.isNull(request.wosAppVersion)) {
      body["WosAppVersion"] = request.wosAppVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUuidValid",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUuidValidResponse>(await this.callApi(params, req, runtime), new $_model.CheckUuidValidResponse({}));
  }

  /**
   * 检查uuid有效性
   * 
   * @param request - CheckUuidValidRequest
   * @returns CheckUuidValidResponse
   */
  async checkUuidValid(request: $_model.CheckUuidValidRequest): Promise<$_model.CheckUuidValidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUuidValidWithOptions(request, runtime);
  }

  /**
   * 创建任务
   * 
   * @param request - CreateAppOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppOtaTaskResponse
   */
  async createAppOtaTaskWithOptions(request: $_model.CreateAppOtaTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppOtaTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersionUid)) {
      query["AppVersionUid"] = request.appVersionUid;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.clientIdList)) {
      query["ClientIdList"] = request.clientIdList;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.forceUpgrade)) {
      query["ForceUpgrade"] = request.forceUpgrade;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.tenantIdList)) {
      query["TenantIdList"] = request.tenantIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppOtaTask",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppOtaTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppOtaTaskResponse({}));
  }

  /**
   * 创建任务
   * 
   * @param request - CreateAppOtaTaskRequest
   * @returns CreateAppOtaTaskResponse
   */
  async createAppOtaTask(request: $_model.CreateAppOtaTaskRequest): Promise<$_model.CreateAppOtaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppOtaTaskWithOptions(request, runtime);
  }

  /**
   * 创建版本
   * 
   * @param request - CreateAppOtaVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppOtaVersionResponse
   */
  async createAppOtaVersionWithOptions(request: $_model.CreateAppOtaVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppOtaVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.arch)) {
      query["Arch"] = request.arch;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.downloadUrl)) {
      query["DownloadUrl"] = request.downloadUrl;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.os)) {
      query["Os"] = request.os;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.otaType)) {
      query["OtaType"] = request.otaType;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.relationVersionUids)) {
      query["RelationVersionUids"] = request.relationVersionUids;
    }

    if (!$dara.isNull(request.releaseNote)) {
      query["ReleaseNote"] = request.releaseNote;
    }

    if (!$dara.isNull(request.releaseNoteEn)) {
      query["ReleaseNoteEn"] = request.releaseNoteEn;
    }

    if (!$dara.isNull(request.releaseNoteJp)) {
      query["ReleaseNoteJp"] = request.releaseNoteJp;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.snapshotRegionId)) {
      query["SnapshotRegionId"] = request.snapshotRegionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.versionType)) {
      query["VersionType"] = request.versionType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppOtaVersion",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppOtaVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppOtaVersionResponse({}));
  }

  /**
   * 创建版本
   * 
   * @param request - CreateAppOtaVersionRequest
   * @returns CreateAppOtaVersionResponse
   */
  async createAppOtaVersion(request: $_model.CreateAppOtaVersionRequest): Promise<$_model.CreateAppOtaVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppOtaVersionWithOptions(request, runtime);
  }

  /**
   * 删除版本
   * 
   * @param request - DeleteAppOtaVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppOtaVersionsResponse
   */
  async deleteAppOtaVersionsWithOptions(request: $_model.DeleteAppOtaVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppOtaVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.versionUidList)) {
      query["VersionUidList"] = request.versionUidList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppOtaVersions",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppOtaVersionsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppOtaVersionsResponse({}));
  }

  /**
   * 删除版本
   * 
   * @param request - DeleteAppOtaVersionsRequest
   * @returns DeleteAppOtaVersionsResponse
   */
  async deleteAppOtaVersions(request: $_model.DeleteAppOtaVersionsRequest): Promise<$_model.DeleteAppOtaVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppOtaVersionsWithOptions(request, runtime);
  }

  /**
   * 删除设备
   * 
   * @param request - DeleteDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDevicesResponse
   */
  async deleteDevicesWithOptions(request: $_model.DeleteDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.serialNos)) {
      body["SerialNos"] = request.serialNos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDevicesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDevicesResponse({}));
  }

  /**
   * 删除设备
   * 
   * @param request - DeleteDevicesRequest
   * @returns DeleteDevicesResponse
   */
  async deleteDevices(request: $_model.DeleteDevicesRequest): Promise<$_model.DeleteDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDevicesWithOptions(request, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLabelResponse
   */
  async deleteLabelWithOptions(request: $_model.DeleteLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLabelResponse({}));
  }

  /**
   * 删除标签
   * 
   * @param request - DeleteLabelRequest
   * @returns DeleteLabelResponse
   */
  async deleteLabel(request: $_model.DeleteLabelRequest): Promise<$_model.DeleteLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLabelWithOptions(request, runtime);
  }

  /**
   * 查询版本
   * 
   * @param request - DescribeAppOtaVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppOtaVersionResponse
   */
  async describeAppOtaVersionWithOptions(request: $_model.DescribeAppOtaVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppOtaVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.nullChannel)) {
      query["NullChannel"] = request.nullChannel;
    }

    if (!$dara.isNull(request.otaType)) {
      query["OtaType"] = request.otaType;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.versionUid)) {
      query["VersionUid"] = request.versionUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppOtaVersion",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppOtaVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppOtaVersionResponse({}));
  }

  /**
   * 查询版本
   * 
   * @param request - DescribeAppOtaVersionRequest
   * @returns DescribeAppOtaVersionResponse
   */
  async describeAppOtaVersion(request: $_model.DescribeAppOtaVersionRequest): Promise<$_model.DescribeAppOtaVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppOtaVersionWithOptions(request, runtime);
  }

  /**
   * 查询设备座位
   * 
   * @param request - DescribeDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceSeatsResponse
   */
  async describeDeviceSeatsWithOptions(request: $_model.DescribeDeviceSeatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceSeatsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceSeatsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceSeatsResponse({}));
  }

  /**
   * 查询设备座位
   * 
   * @param request - DescribeDeviceSeatsRequest
   * @returns DescribeDeviceSeatsResponse
   */
  async describeDeviceSeats(request: $_model.DescribeDeviceSeatsRequest): Promise<$_model.DescribeDeviceSeatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 查询版本信息
   * 
   * @param request - DescribeDeviceVersionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceVersionDetailResponse
   */
  async describeDeviceVersionDetailWithOptions(request: $_model.DescribeDeviceVersionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeviceVersionDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeviceVersionDetail",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeviceVersionDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeviceVersionDetailResponse({}));
  }

  /**
   * 查询版本信息
   * 
   * @param request - DescribeDeviceVersionDetailRequest
   * @returns DescribeDeviceVersionDetailResponse
   */
  async describeDeviceVersionDetail(request: $_model.DescribeDeviceVersionDetailRequest): Promise<$_model.DescribeDeviceVersionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceVersionDetailWithOptions(request, runtime);
  }

  /**
   * 查询设备标签数量
   * 
   * @param request - DescribeSnLabelCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnLabelCountsResponse
   */
  async describeSnLabelCountsWithOptions(request: $_model.DescribeSnLabelCountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnLabelCountsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelList)) {
      body["LabelList"] = request.labelList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneName)) {
      body["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnLabelCounts",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnLabelCountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnLabelCountsResponse({}));
  }

  /**
   * 查询设备标签数量
   * 
   * @param request - DescribeSnLabelCountsRequest
   * @returns DescribeSnLabelCountsResponse
   */
  async describeSnLabelCounts(request: $_model.DescribeSnLabelCountsRequest): Promise<$_model.DescribeSnLabelCountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSnLabelCountsWithOptions(request, runtime);
  }

  /**
   * 查询工作区域
   * 
   * @param request - DescribeWorkZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkZonesResponse
   */
  async describeWorkZonesWithOptions(request: $_model.DescribeWorkZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWorkZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.zoneIdList)) {
      body["ZoneIdList"] = request.zoneIdList;
    }

    if (!$dara.isNull(request.zoneNameList)) {
      body["ZoneNameList"] = request.zoneNameList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkZones",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWorkZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWorkZonesResponse({}));
  }

  /**
   * 查询工作区域
   * 
   * @param request - DescribeWorkZonesRequest
   * @returns DescribeWorkZonesResponse
   */
  async describeWorkZones(request: $_model.DescribeWorkZonesRequest): Promise<$_model.DescribeWorkZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWorkZonesWithOptions(request, runtime);
  }

  /**
   * 设备解绑终端用户
   * 
   * @param request - DetachEndUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachEndUsersResponse
   */
  async detachEndUsersWithOptions(request: $_model.DetachEndUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachEndUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachEndUsers",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachEndUsersResponse>(await this.callApi(params, req, runtime), new $_model.DetachEndUsersResponse({}));
  }

  /**
   * 设备解绑终端用户
   * 
   * @param request - DetachEndUsersRequest
   * @returns DetachEndUsersResponse
   */
  async detachEndUsers(request: $_model.DetachEndUsersRequest): Promise<$_model.DetachEndUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachEndUsersWithOptions(request, runtime);
  }

  /**
   * 设备绑定标签
   * 
   * @param request - DetachLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachLabelResponse
   */
  async detachLabelWithOptions(request: $_model.DetachLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachLabelResponse>(await this.callApi(params, req, runtime), new $_model.DetachLabelResponse({}));
  }

  /**
   * 设备绑定标签
   * 
   * @param request - DetachLabelRequest
   * @returns DetachLabelResponse
   */
  async detachLabel(request: $_model.DetachLabelRequest): Promise<$_model.DetachLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachLabelWithOptions(request, runtime);
  }

  /**
   * 批量解绑标签
   * 
   * @param request - DetachLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachLabelsResponse
   */
  async detachLabelsWithOptions(request: $_model.DetachLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelIds)) {
      body["LabelIds"] = request.labelIds;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DetachLabelsResponse({}));
  }

  /**
   * 批量解绑标签
   * 
   * @param request - DetachLabelsRequest
   * @returns DetachLabelsResponse
   */
  async detachLabels(request: $_model.DetachLabelsRequest): Promise<$_model.DetachLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachLabelsWithOptions(request, runtime);
  }

  /**
   * 查询用户上传的文件
   * 
   * @param request - GenerateOssUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateOssUrlResponse
   */
  async generateOssUrlWithOptions(request: $_model.GenerateOssUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateOssUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.objectNameList)) {
      body["ObjectNameList"] = request.objectNameList;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateOssUrl",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateOssUrlResponse>(await this.callApi(params, req, runtime), new $_model.GenerateOssUrlResponse({}));
  }

  /**
   * 查询用户上传的文件
   * 
   * @param request - GenerateOssUrlRequest
   * @returns GenerateOssUrlResponse
   */
  async generateOssUrl(request: $_model.GenerateOssUrlRequest): Promise<$_model.GenerateOssUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateOssUrlWithOptions(request, runtime);
  }

  /**
   * 获取应用最新版本
   * 
   * @param request - GetAppOtaLatestVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppOtaLatestVersionResponse
   */
  async getAppOtaLatestVersionWithOptions(request: $_model.GetAppOtaLatestVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppOtaLatestVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseVersion)) {
      query["BaseVersion"] = request.baseVersion;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppOtaLatestVersion",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppOtaLatestVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetAppOtaLatestVersionResponse({}));
  }

  /**
   * 获取应用最新版本
   * 
   * @param request - GetAppOtaLatestVersionRequest
   * @returns GetAppOtaLatestVersionResponse
   */
  async getAppOtaLatestVersion(request: $_model.GetAppOtaLatestVersionRequest): Promise<$_model.GetAppOtaLatestVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppOtaLatestVersionWithOptions(request, runtime);
  }

  /**
   * 获取设备配置
   * 
   * @param request - GetDeviceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceConfigsResponse
   */
  async getDeviceConfigsWithOptions(request: $_model.GetDeviceConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.urclVersion)) {
      body["UrclVersion"] = request.urclVersion;
    }

    if (!$dara.isNull(request.userCustomId)) {
      body["UserCustomId"] = request.userCustomId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceConfigs",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceConfigsResponse({}));
  }

  /**
   * 获取设备配置
   * 
   * @param request - GetDeviceConfigsRequest
   * @returns GetDeviceConfigsResponse
   */
  async getDeviceConfigs(request: $_model.GetDeviceConfigsRequest): Promise<$_model.GetDeviceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceConfigsWithOptions(request, runtime);
  }

  /**
   * 获取是否开启自动升级状态
   * 
   * @param request - GetDeviceOtaAutoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaAutoStatusResponse
   */
  async getDeviceOtaAutoStatusWithOptions(request: $_model.GetDeviceOtaAutoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceOtaAutoStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceOtaAutoStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceOtaAutoStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceOtaAutoStatusResponse({}));
  }

  /**
   * 获取是否开启自动升级状态
   * 
   * @param request - GetDeviceOtaAutoStatusRequest
   * @returns GetDeviceOtaAutoStatusResponse
   */
  async getDeviceOtaAutoStatus(request: $_model.GetDeviceOtaAutoStatusRequest): Promise<$_model.GetDeviceOtaAutoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceOtaAutoStatusWithOptions(request, runtime);
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaInfoResponse
   */
  async getDeviceOtaInfoWithOptions(request: $_model.GetDeviceOtaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceOtaInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseVersion)) {
      body["BaseVersion"] = request.baseVersion;
    }

    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetVersionType)) {
      body["TargetVersionType"] = request.targetVersionType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceOtaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceOtaInfoResponse({}));
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoRequest
   * @returns GetDeviceOtaInfoResponse
   */
  async getDeviceOtaInfo(request: $_model.GetDeviceOtaInfoRequest): Promise<$_model.GetDeviceOtaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceOtaInfoWithOptions(request, runtime);
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaInfoTestResponse
   */
  async getDeviceOtaInfoTestWithOptions(request: $_model.GetDeviceOtaInfoTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceOtaInfoTestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseVersion)) {
      body["BaseVersion"] = request.baseVersion;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceOtaInfoTest",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceOtaInfoTestResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceOtaInfoTestResponse({}));
  }

  /**
   * 获取设备升级信息
   * 
   * @param request - GetDeviceOtaInfoTestRequest
   * @returns GetDeviceOtaInfoTestResponse
   */
  async getDeviceOtaInfoTest(request: $_model.GetDeviceOtaInfoTestRequest): Promise<$_model.GetDeviceOtaInfoTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceOtaInfoTestWithOptions(request, runtime);
  }

  /**
   * 获取租户任务版本信息
   * 
   * @param request - GetDeviceOtaTaskVersionInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceOtaTaskVersionInfoResponse
   */
  async getDeviceOtaTaskVersionInfoWithOptions(request: $_model.GetDeviceOtaTaskVersionInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceOtaTaskVersionInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceOtaTaskVersionInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceOtaTaskVersionInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceOtaTaskVersionInfoResponse({}));
  }

  /**
   * 获取租户任务版本信息
   * 
   * @param request - GetDeviceOtaTaskVersionInfoRequest
   * @returns GetDeviceOtaTaskVersionInfoResponse
   */
  async getDeviceOtaTaskVersionInfo(request: $_model.GetDeviceOtaTaskVersionInfoRequest): Promise<$_model.GetDeviceOtaTaskVersionInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceOtaTaskVersionInfoWithOptions(request, runtime);
  }

  /**
   * 获得设备升级详情
   * 
   * @param request - GetDeviceUpgradeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceUpgradeStatusResponse
   */
  async getDeviceUpgradeStatusWithOptions(request: $_model.GetDeviceUpgradeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceUpgradeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceUpgradeStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceUpgradeStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceUpgradeStatusResponse({}));
  }

  /**
   * 获得设备升级详情
   * 
   * @param request - GetDeviceUpgradeStatusRequest
   * @returns GetDeviceUpgradeStatusResponse
   */
  async getDeviceUpgradeStatus(request: $_model.GetDeviceUpgradeStatusRequest): Promise<$_model.GetDeviceUpgradeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeviceUpgradeStatusWithOptions(request, runtime);
  }

  /**
   * 导出设备工位列表
   * 
   * @param request - GetExportDeviceInfoOssUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExportDeviceInfoOssUrlResponse
   */
  async getExportDeviceInfoOssUrlWithOptions(request: $_model.GetExportDeviceInfoOssUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExportDeviceInfoOssUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneName)) {
      body["ZoneName"] = request.zoneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExportDeviceInfoOssUrl",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExportDeviceInfoOssUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetExportDeviceInfoOssUrlResponse({}));
  }

  /**
   * 导出设备工位列表
   * 
   * @param request - GetExportDeviceInfoOssUrlRequest
   * @returns GetExportDeviceInfoOssUrlResponse
   */
  async getExportDeviceInfoOssUrl(request: $_model.GetExportDeviceInfoOssUrlRequest): Promise<$_model.GetExportDeviceInfoOssUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExportDeviceInfoOssUrlWithOptions(request, runtime);
  }

  /**
   * 查询OSS配置信息
   * 
   * @param request - GetFbOssConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFbOssConfigResponse
   */
  async getFbOssConfigWithOptions(request: $_model.GetFbOssConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFbOssConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirPrefix)) {
      body["DirPrefix"] = request.dirPrefix;
    }

    if (!$dara.isNull(request.isDedicatedLine)) {
      body["IsDedicatedLine"] = request.isDedicatedLine;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFbOssConfig",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFbOssConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetFbOssConfigResponse({}));
  }

  /**
   * 查询OSS配置信息
   * 
   * @param request - GetFbOssConfigRequest
   * @returns GetFbOssConfigResponse
   */
  async getFbOssConfig(request: $_model.GetFbOssConfigRequest): Promise<$_model.GetFbOssConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFbOssConfigWithOptions(request, runtime);
  }

  /**
   * 获取OSS配置
   * 
   * @param request - GetOssConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssConfigResponse
   */
  async getOssConfigWithOptions(request: $_model.GetOssConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssConfig",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetOssConfigResponse({}));
  }

  /**
   * 获取OSS配置
   * 
   * @param request - GetOssConfigRequest
   * @returns GetOssConfigResponse
   */
  async getOssConfig(request: $_model.GetOssConfigRequest): Promise<$_model.GetOssConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssConfigWithOptions(request, runtime);
  }

  /**
   * 获取版本下载地址
   * 
   * @param request - GetVersionDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVersionDownloadUrlResponse
   */
  async getVersionDownloadUrlWithOptions(request: $_model.GetVersionDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVersionDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVersionDownloadUrl",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVersionDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetVersionDownloadUrlResponse({}));
  }

  /**
   * 获取版本下载地址
   * 
   * @param request - GetVersionDownloadUrlRequest
   * @returns GetVersionDownloadUrlResponse
   */
  async getVersionDownloadUrl(request: $_model.GetVersionDownloadUrlRequest): Promise<$_model.GetVersionDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVersionDownloadUrlWithOptions(request, runtime);
  }

  /**
   * 获取用户已绑定的可信设备列表
   * 
   * @param request - ListBoundDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBoundDevicesResponse
   */
  async listBoundDevicesWithOptions(request: $_model.ListBoundDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBoundDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adDomain)) {
      body["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!$dara.isNull(request.lastLoginUser)) {
      body["LastLoginUser"] = request.lastLoginUser;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBoundDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBoundDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListBoundDevicesResponse({}));
  }

  /**
   * 获取用户已绑定的可信设备列表
   * 
   * @param request - ListBoundDevicesRequest
   * @returns ListBoundDevicesResponse
   */
  async listBoundDevices(request: $_model.ListBoundDevicesRequest): Promise<$_model.ListBoundDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBoundDevicesWithOptions(request, runtime);
  }

  /**
   * 获取租户ota任务
   * 
   * @param request - ListDeviceOtaTaskByTenantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceOtaTaskByTenantResponse
   */
  async listDeviceOtaTaskByTenantWithOptions(request: $_model.ListDeviceOtaTaskByTenantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceOtaTaskByTenantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceOtaTaskByTenant",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceOtaTaskByTenantResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceOtaTaskByTenantResponse({}));
  }

  /**
   * 获取租户ota任务
   * 
   * @param request - ListDeviceOtaTaskByTenantRequest
   * @returns ListDeviceOtaTaskByTenantResponse
   */
  async listDeviceOtaTaskByTenant(request: $_model.ListDeviceOtaTaskByTenantRequest): Promise<$_model.ListDeviceOtaTaskByTenantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceOtaTaskByTenantWithOptions(request, runtime);
  }

  /**
   * 查询设备座位列表
   * 
   * @param request - ListDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeviceSeatsResponse
   */
  async listDeviceSeatsWithOptions(request: $_model.ListDeviceSeatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeviceSeatsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.seatNo)) {
      body["SeatNo"] = request.seatNo;
    }

    if (!$dara.isNull(request.serialNoList)) {
      body["SerialNoList"] = request.serialNoList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeviceSeatsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeviceSeatsResponse({}));
  }

  /**
   * 查询设备座位列表
   * 
   * @param request - ListDeviceSeatsRequest
   * @returns ListDeviceSeatsResponse
   */
  async listDeviceSeats(request: $_model.ListDeviceSeatsRequest): Promise<$_model.ListDeviceSeatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 获取设备列表
   * 
   * @param request - ListDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDevicesResponse
   */
  async listDevicesWithOptions(request: $_model.ListDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.deviceIpV4)) {
      query["DeviceIpV4"] = request.deviceIpV4;
    }

    if (!$dara.isNull(request.deviceName)) {
      query["DeviceName"] = request.deviceName;
    }

    if (!$dara.isNull(request.deviceOS)) {
      query["DeviceOS"] = request.deviceOS;
    }

    if (!$dara.isNull(request.devicePlatform)) {
      query["DevicePlatform"] = request.devicePlatform;
    }

    if (!$dara.isNull(request.lastLoginUser)) {
      query["LastLoginUser"] = request.lastLoginUser;
    }

    if (!$dara.isNull(request.locationInfo)) {
      query["LocationInfo"] = request.locationInfo;
    }

    if (!$dara.isNull(request.userType)) {
      query["UserType"] = request.userType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.deviceGroupId)) {
      body["DeviceGroupId"] = request.deviceGroupId;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListDevicesResponse({}));
  }

  /**
   * 获取设备列表
   * 
   * @param request - ListDevicesRequest
   * @returns ListDevicesResponse
   */
  async listDevices(request: $_model.ListDevicesRequest): Promise<$_model.ListDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  /**
   * 查询用户问题标签
   * 
   * @param request - ListFbIssueLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFbIssueLabelsResponse
   */
  async listFbIssueLabelsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListFbIssueLabelsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListFbIssueLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFbIssueLabelsResponse>(await this.callApi(params, req, runtime), new $_model.ListFbIssueLabelsResponse({}));
  }

  /**
   * 查询用户问题标签
   * @returns ListFbIssueLabelsResponse
   */
  async listFbIssueLabels(): Promise<$_model.ListFbIssueLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFbIssueLabelsWithOptions(runtime);
  }

  /**
   * 根据语言类型和调用方查询标签列表
   * 
   * @param request - ListFbIssueLabelsByLCRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFbIssueLabelsByLCResponse
   */
  async listFbIssueLabelsByLCWithOptions(request: $_model.ListFbIssueLabelsByLCRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFbIssueLabelsByLCResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.languageType)) {
      body["LanguageType"] = request.languageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFbIssueLabelsByLC",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFbIssueLabelsByLCResponse>(await this.callApi(params, req, runtime), new $_model.ListFbIssueLabelsByLCResponse({}));
  }

  /**
   * 根据语言类型和调用方查询标签列表
   * 
   * @param request - ListFbIssueLabelsByLCRequest
   * @returns ListFbIssueLabelsByLCResponse
   */
  async listFbIssueLabelsByLC(request: $_model.ListFbIssueLabelsByLCRequest): Promise<$_model.ListFbIssueLabelsByLCResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFbIssueLabelsByLCWithOptions(request, runtime);
  }

  /**
   * 获取标签列表
   * 
   * @param request - ListLabelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLabelsResponse
   */
  async listLabelsWithOptions(request: $_model.ListLabelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLabels",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLabelsResponse>(await this.callApi(params, req, runtime), new $_model.ListLabelsResponse({}));
  }

  /**
   * 获取标签列表
   * 
   * @param request - ListLabelsRequest
   * @returns ListLabelsResponse
   */
  async listLabels(request: $_model.ListLabelsRequest): Promise<$_model.ListLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLabelsWithOptions(request, runtime);
  }

  /**
   * 获取租户升级设备信息
   * 
   * @param request - ListTenantDeviceOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantDeviceOtaInfoResponse
   */
  async listTenantDeviceOtaInfoWithOptions(request: $_model.ListTenantDeviceOtaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantDeviceOtaInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantDeviceOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantDeviceOtaInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantDeviceOtaInfoResponse({}));
  }

  /**
   * 获取租户升级设备信息
   * 
   * @param request - ListTenantDeviceOtaInfoRequest
   * @returns ListTenantDeviceOtaInfoResponse
   */
  async listTenantDeviceOtaInfo(request: $_model.ListTenantDeviceOtaInfoRequest): Promise<$_model.ListTenantDeviceOtaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTenantDeviceOtaInfoWithOptions(request, runtime);
  }

  /**
   * 查询终端列表
   * 
   * @param request - ListTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerminalResponse
   */
  async listTerminalWithOptions(request: $_model.ListTerminalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTerminalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!$dara.isNull(request.ipv4)) {
      body["Ipv4"] = request.ipv4;
    }

    if (!$dara.isNull(request.locationInfo)) {
      body["LocationInfo"] = request.locationInfo;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerminal",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTerminalResponse>(await this.callApi(params, req, runtime), new $_model.ListTerminalResponse({}));
  }

  /**
   * 查询终端列表
   * 
   * @param request - ListTerminalRequest
   * @returns ListTerminalResponse
   */
  async listTerminal(request: $_model.ListTerminalRequest): Promise<$_model.ListTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTerminalWithOptions(request, runtime);
  }

  /**
   * 批量查询终端基本信息
   * 
   * @param request - ListTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerminalsResponse
   */
  async listTerminalsWithOptions(request: $_model.ListTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTerminalsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.passwordFreeLoginUser)) {
      body["PasswordFreeLoginUser"] = request.passwordFreeLoginUser;
    }

    if (!$dara.isNull(request.searchKeyword)) {
      body["SearchKeyword"] = request.searchKeyword;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serialNumbers)) {
      bodyFlat["SerialNumbers"] = request.serialNumbers;
    }

    if (!$dara.isNull(request.terminalGroupId)) {
      body["TerminalGroupId"] = request.terminalGroupId;
    }

    if (!$dara.isNull(request.uuids)) {
      bodyFlat["Uuids"] = request.uuids;
    }

    if (!$dara.isNull(request.withBindUser)) {
      body["WithBindUser"] = request.withBindUser;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTerminalsResponse>(await this.callApi(params, req, runtime), new $_model.ListTerminalsResponse({}));
  }

  /**
   * 批量查询终端基本信息
   * 
   * @param request - ListTerminalsRequest
   * @returns ListTerminalsResponse
   */
  async listTerminals(request: $_model.ListTerminalsRequest): Promise<$_model.ListTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTerminalsWithOptions(request, runtime);
  }

  /**
   * 查询可信设备列表
   * 
   * @param request - ListTrustDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrustDevicesResponse
   */
  async listTrustDevicesWithOptions(request: $_model.ListTrustDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTrustDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.userCustomId)) {
      body["UserCustomId"] = request.userCustomId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrustDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTrustDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListTrustDevicesResponse({}));
  }

  /**
   * 查询可信设备列表
   * 
   * @param request - ListTrustDevicesRequest
   * @returns ListTrustDevicesResponse
   */
  async listTrustDevices(request: $_model.ListTrustDevicesRequest): Promise<$_model.ListTrustDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTrustDevicesWithOptions(request, runtime);
  }

  /**
   * 获取用户未绑定的可信设备列表
   * 
   * @param request - ListUnbindDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUnbindDevicesResponse
   */
  async listUnbindDevicesWithOptions(request: $_model.ListUnbindDevicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUnbindDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adDomain)) {
      body["AdDomain"] = request.adDomain;
    }

    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.directoryId)) {
      body["DirectoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.inManage)) {
      body["InManage"] = request.inManage;
    }

    if (!$dara.isNull(request.lastLoginUser)) {
      body["LastLoginUser"] = request.lastLoginUser;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUnbindDevices",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUnbindDevicesResponse>(await this.callApi(params, req, runtime), new $_model.ListUnbindDevicesResponse({}));
  }

  /**
   * 获取用户未绑定的可信设备列表
   * 
   * @param request - ListUnbindDevicesRequest
   * @returns ListUnbindDevicesResponse
   */
  async listUnbindDevices(request: $_model.ListUnbindDevicesRequest): Promise<$_model.ListUnbindDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUnbindDevicesWithOptions(request, runtime);
  }

  /**
   * 查询问题反馈列表
   * 
   * @param request - ListUserFbAcIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserFbAcIssuesResponse
   */
  async listUserFbAcIssuesWithOptions(request: $_model.ListUserFbAcIssuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserFbAcIssuesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.account)) {
      body["Account"] = request.account;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.errorMessage)) {
      body["ErrorMessage"] = request.errorMessage;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.issueId)) {
      body["IssueId"] = request.issueId;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.reservedA)) {
      body["ReservedA"] = request.reservedA;
    }

    if (!$dara.isNull(request.reservedB)) {
      body["ReservedB"] = request.reservedB;
    }

    if (!$dara.isNull(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserFbAcIssues",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserFbAcIssuesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserFbAcIssuesResponse({}));
  }

  /**
   * 查询问题反馈列表
   * 
   * @param request - ListUserFbAcIssuesRequest
   * @returns ListUserFbAcIssuesResponse
   */
  async listUserFbAcIssues(request: $_model.ListUserFbAcIssuesRequest): Promise<$_model.ListUserFbAcIssuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserFbAcIssuesWithOptions(request, runtime);
  }

  /**
   * 查询用户反馈问题列表
   * 
   * @param request - ListUserFbIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserFbIssuesResponse
   */
  async listUserFbIssuesWithOptions(request: $_model.ListUserFbIssuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserFbIssuesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientModel)) {
      body["ClientModel"] = request.clientModel;
    }

    if (!$dara.isNull(request.clientSn)) {
      body["ClientSn"] = request.clientSn;
    }

    if (!$dara.isNull(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopId)) {
      body["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.errorCode)) {
      body["ErrorCode"] = request.errorCode;
    }

    if (!$dara.isNull(request.errorMsg)) {
      body["ErrorMsg"] = request.errorMsg;
    }

    if (!$dara.isNull(request.fbType)) {
      body["FbType"] = request.fbType;
    }

    if (!$dara.isNull(request.issueId)) {
      body["IssueId"] = request.issueId;
    }

    if (!$dara.isNull(request.issueLabel)) {
      body["IssueLabel"] = request.issueLabel;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.wasRead)) {
      body["WasRead"] = request.wasRead;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserFbIssues",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserFbIssuesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserFbIssuesResponse({}));
  }

  /**
   * 查询用户反馈问题列表
   * 
   * @param request - ListUserFbIssuesRequest
   * @returns ListUserFbIssuesResponse
   */
  async listUserFbIssues(request: $_model.ListUserFbIssuesRequest): Promise<$_model.ListUserFbIssuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserFbIssuesWithOptions(request, runtime);
  }

  /**
   * 修改设备安全入网类型
   * 
   * @param request - ModifyDevicesSecureNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDevicesSecureNetworkTypeResponse
   */
  async modifyDevicesSecureNetworkTypeWithOptions(request: $_model.ModifyDevicesSecureNetworkTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDevicesSecureNetworkTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allDevices)) {
      body["AllDevices"] = request.allDevices;
    }

    if (!$dara.isNull(request.secureNetworkType)) {
      body["SecureNetworkType"] = request.secureNetworkType;
    }

    if (!$dara.isNull(request.serialNos)) {
      body["SerialNos"] = request.serialNos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDevicesSecureNetworkType",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDevicesSecureNetworkTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDevicesSecureNetworkTypeResponse({}));
  }

  /**
   * 修改设备安全入网类型
   * 
   * @param request - ModifyDevicesSecureNetworkTypeRequest
   * @returns ModifyDevicesSecureNetworkTypeResponse
   */
  async modifyDevicesSecureNetworkType(request: $_model.ModifyDevicesSecureNetworkTypeRequest): Promise<$_model.ModifyDevicesSecureNetworkTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDevicesSecureNetworkTypeWithOptions(request, runtime);
  }

  /**
   * 匿名api修改安全入网配置
   * 
   * @param request - ModifySecureNetworkTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySecureNetworkTypeResponse
   */
  async modifySecureNetworkTypeWithOptions(request: $_model.ModifySecureNetworkTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySecureNetworkTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.secureNetworkType)) {
      body["SecureNetworkType"] = request.secureNetworkType;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySecureNetworkType",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySecureNetworkTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifySecureNetworkTypeResponse({}));
  }

  /**
   * 匿名api修改安全入网配置
   * 
   * @param request - ModifySecureNetworkTypeRequest
   * @returns ModifySecureNetworkTypeResponse
   */
  async modifySecureNetworkType(request: $_model.ModifySecureNetworkTypeRequest): Promise<$_model.ModifySecureNetworkTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySecureNetworkTypeWithOptions(request, runtime);
  }

  /**
   * 设备注册
   * 
   * @param request - RegisterDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDeviceResponse
   */
  async registerDeviceWithOptions(request: $_model.RegisterDeviceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterDeviceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bluetooth)) {
      body["Bluetooth"] = request.bluetooth;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.chipId)) {
      body["ChipId"] = request.chipId;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!$dara.isNull(request.etherMac)) {
      body["EtherMac"] = request.etherMac;
    }

    if (!$dara.isNull(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.storage)) {
      body["Storage"] = request.storage;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.wlan)) {
      body["Wlan"] = request.wlan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDevice",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterDeviceResponse>(await this.callApi(params, req, runtime), new $_model.RegisterDeviceResponse({}));
  }

  /**
   * 设备注册
   * 
   * @param request - RegisterDeviceRequest
   * @returns RegisterDeviceResponse
   */
  async registerDevice(request: $_model.RegisterDeviceRequest): Promise<$_model.RegisterDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  /**
   * 上报升级信息
   * 
   * @param request - ReportAppOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportAppOtaInfoResponse
   */
  async reportAppOtaInfoWithOptions(request: $_model.ReportAppOtaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportAppOtaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.baseVersion)) {
      query["BaseVersion"] = request.baseVersion;
    }

    if (!$dara.isNull(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.clientUid)) {
      query["ClientUid"] = request.clientUid;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    if (!$dara.isNull(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportAppOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportAppOtaInfoResponse>(await this.callApi(params, req, runtime), new $_model.ReportAppOtaInfoResponse({}));
  }

  /**
   * 上报升级信息
   * 
   * @param request - ReportAppOtaInfoRequest
   * @returns ReportAppOtaInfoResponse
   */
  async reportAppOtaInfo(request: $_model.ReportAppOtaInfoRequest): Promise<$_model.ReportAppOtaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportAppOtaInfoWithOptions(request, runtime);
  }

  /**
   * 升级信息上报
   * 
   * @param request - ReportDeviceOtaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportDeviceOtaInfoResponse
   */
  async reportDeviceOtaInfoWithOptions(request: $_model.ReportDeviceOtaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportDeviceOtaInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baseVersion)) {
      body["BaseVersion"] = request.baseVersion;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.note)) {
      body["Note"] = request.note;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetVersion)) {
      body["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportDeviceOtaInfo",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportDeviceOtaInfoResponse>(await this.callApi(params, req, runtime), new $_model.ReportDeviceOtaInfoResponse({}));
  }

  /**
   * 升级信息上报
   * 
   * @param request - ReportDeviceOtaInfoRequest
   * @returns ReportDeviceOtaInfoResponse
   */
  async reportDeviceOtaInfo(request: $_model.ReportDeviceOtaInfoRequest): Promise<$_model.ReportDeviceOtaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportDeviceOtaInfoWithOptions(request, runtime);
  }

  /**
   * 应用中心用户问题反馈
   * 
   * @param tmpReq - ReportUserFbAcIssueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportUserFbAcIssueResponse
   */
  async reportUserFbAcIssueWithOptions(tmpReq: $_model.ReportUserFbAcIssueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportUserFbAcIssueResponse> {
    tmpReq.validate();
    let request = new $_model.ReportUserFbAcIssueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileList)) {
      request.fileListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileList, "FileList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.account)) {
      body["Account"] = request.account;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.errorMsg)) {
      body["ErrorMsg"] = request.errorMsg;
    }

    if (!$dara.isNull(request.fileListShrink)) {
      body["FileList"] = request.fileListShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.reservedA)) {
      body["ReservedA"] = request.reservedA;
    }

    if (!$dara.isNull(request.reservedB)) {
      body["ReservedB"] = request.reservedB;
    }

    if (!$dara.isNull(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportUserFbAcIssue",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportUserFbAcIssueResponse>(await this.callApi(params, req, runtime), new $_model.ReportUserFbAcIssueResponse({}));
  }

  /**
   * 应用中心用户问题反馈
   * 
   * @param request - ReportUserFbAcIssueRequest
   * @returns ReportUserFbAcIssueResponse
   */
  async reportUserFbAcIssue(request: $_model.ReportUserFbAcIssueRequest): Promise<$_model.ReportUserFbAcIssueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportUserFbAcIssueWithOptions(request, runtime);
  }

  /**
   * 上报用户反馈问题
   * 
   * @param tmpReq - ReportUserFbIssueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportUserFbIssueResponse
   */
  async reportUserFbIssueWithOptions(tmpReq: $_model.ReportUserFbIssueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportUserFbIssueResponse> {
    tmpReq.validate();
    let request = new $_model.ReportUserFbIssueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileList)) {
      request.fileListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileList, "FileList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clientAppVersion)) {
      body["ClientAppVersion"] = request.clientAppVersion;
    }

    if (!$dara.isNull(request.clientId)) {
      body["ClientId"] = request.clientId;
    }

    if (!$dara.isNull(request.clientModel)) {
      body["ClientModel"] = request.clientModel;
    }

    if (!$dara.isNull(request.clientOsName)) {
      body["ClientOsName"] = request.clientOsName;
    }

    if (!$dara.isNull(request.clientSn)) {
      body["ClientSn"] = request.clientSn;
    }

    if (!$dara.isNull(request.clientVersion)) {
      body["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.desktopId)) {
      body["DesktopId"] = request.desktopId;
    }

    if (!$dara.isNull(request.desktopType)) {
      body["DesktopType"] = request.desktopType;
    }

    if (!$dara.isNull(request.errorCode)) {
      body["ErrorCode"] = request.errorCode;
    }

    if (!$dara.isNull(request.errorMsg)) {
      body["ErrorMsg"] = request.errorMsg;
    }

    if (!$dara.isNull(request.fbType)) {
      body["FbType"] = request.fbType;
    }

    if (!$dara.isNull(request.fileListShrink)) {
      body["FileList"] = request.fileListShrink;
    }

    if (!$dara.isNull(request.issueLabel)) {
      body["IssueLabel"] = request.issueLabel;
    }

    if (!$dara.isNull(request.occurTime)) {
      body["OccurTime"] = request.occurTime;
    }

    if (!$dara.isNull(request.reservedA)) {
      body["ReservedA"] = request.reservedA;
    }

    if (!$dara.isNull(request.reservedB)) {
      body["ReservedB"] = request.reservedB;
    }

    if (!$dara.isNull(request.telNo)) {
      body["TelNo"] = request.telNo;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.userEmail)) {
      body["UserEmail"] = request.userEmail;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.wyId)) {
      body["WyId"] = request.wyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportUserFbIssue",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "Anonymous",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportUserFbIssueResponse>(await this.callApi(params, req, runtime), new $_model.ReportUserFbIssueResponse({}));
  }

  /**
   * 上报用户反馈问题
   * 
   * @param request - ReportUserFbIssueRequest
   * @returns ReportUserFbIssueResponse
   */
  async reportUserFbIssue(request: $_model.ReportUserFbIssueRequest): Promise<$_model.ReportUserFbIssueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportUserFbIssueWithOptions(request, runtime);
  }

  /**
   * 向终端发送运维命令
   * 
   * @param request - SendOpsMessageToTerminalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendOpsMessageToTerminalsResponse
   */
  async sendOpsMessageToTerminalsWithOptions(request: $_model.SendOpsMessageToTerminalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendOpsMessageToTerminalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.delay)) {
      query["Delay"] = request.delay;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.msg)) {
      body["Msg"] = request.msg;
    }

    if (!$dara.isNull(request.opsAction)) {
      body["OpsAction"] = request.opsAction;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuids)) {
      bodyFlat["Uuids"] = request.uuids;
    }

    if (!$dara.isNull(request.waitForAck)) {
      body["WaitForAck"] = request.waitForAck;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendOpsMessageToTerminals",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendOpsMessageToTerminalsResponse>(await this.callApi(params, req, runtime), new $_model.SendOpsMessageToTerminalsResponse({}));
  }

  /**
   * 向终端发送运维命令
   * 
   * @param request - SendOpsMessageToTerminalsRequest
   * @returns SendOpsMessageToTerminalsResponse
   */
  async sendOpsMessageToTerminals(request: $_model.SendOpsMessageToTerminalsRequest): Promise<$_model.SendOpsMessageToTerminalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendOpsMessageToTerminalsWithOptions(request, runtime);
  }

  /**
   * 设置租户ota自动开启/关闭
   * 
   * @param request - SetDeviceOtaAutoStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeviceOtaAutoStatusResponse
   */
  async setDeviceOtaAutoStatusWithOptions(request: $_model.SetDeviceOtaAutoStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDeviceOtaAutoStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoUpdate)) {
      body["AutoUpdate"] = request.autoUpdate;
    }

    if (!$dara.isNull(request.autoUpdateTimeSchedule)) {
      body["AutoUpdateTimeSchedule"] = request.autoUpdateTimeSchedule;
    }

    if (!$dara.isNull(request.clientType)) {
      body["ClientType"] = request.clientType;
    }

    if (!$dara.isNull(request.forceUpgrade)) {
      body["ForceUpgrade"] = request.forceUpgrade;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDeviceOtaAutoStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDeviceOtaAutoStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDeviceOtaAutoStatusResponse({}));
  }

  /**
   * 设置租户ota自动开启/关闭
   * 
   * @param request - SetDeviceOtaAutoStatusRequest
   * @returns SetDeviceOtaAutoStatusResponse
   */
  async setDeviceOtaAutoStatus(request: $_model.SetDeviceOtaAutoStatusRequest): Promise<$_model.SetDeviceOtaAutoStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDeviceOtaAutoStatusWithOptions(request, runtime);
  }

  /**
   * 租户设置设备ota任务的状态
   * 
   * @param request - SetDeviceOtaTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeviceOtaTaskStatusResponse
   */
  async setDeviceOtaTaskStatusWithOptions(request: $_model.SetDeviceOtaTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDeviceOtaTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operationStatus)) {
      body["OperationStatus"] = request.operationStatus;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDeviceOtaTaskStatus",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDeviceOtaTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetDeviceOtaTaskStatusResponse({}));
  }

  /**
   * 租户设置设备ota任务的状态
   * 
   * @param request - SetDeviceOtaTaskStatusRequest
   * @returns SetDeviceOtaTaskStatusResponse
   */
  async setDeviceOtaTaskStatus(request: $_model.SetDeviceOtaTaskStatusRequest): Promise<$_model.SetDeviceOtaTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDeviceOtaTaskStatusWithOptions(request, runtime);
  }

  /**
   * 解绑免账号登录用户
   * 
   * @param request - UnbindAccountLessLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAccountLessLoginUserResponse
   */
  async unbindAccountLessLoginUserWithOptions(request: $_model.UnbindAccountLessLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAccountLessLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindAccountLessLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAccountLessLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAccountLessLoginUserResponse({}));
  }

  /**
   * 解绑免账号登录用户
   * 
   * @param request - UnbindAccountLessLoginUserRequest
   * @returns UnbindAccountLessLoginUserResponse
   */
  async unbindAccountLessLoginUser(request: $_model.UnbindAccountLessLoginUserRequest): Promise<$_model.UnbindAccountLessLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAccountLessLoginUserWithOptions(request, runtime);
  }

  /**
   * 解绑设备座位
   * 
   * @param tmpReq - UnbindDeviceSeatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDeviceSeatsResponse
   */
  async unbindDeviceSeatsWithOptions(tmpReq: $_model.UnbindDeviceSeatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDeviceSeatsResponse> {
    tmpReq.validate();
    let request = new $_model.UnbindDeviceSeatsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serialNoList)) {
      request.serialNoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serialNoList, "SerialNoList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serialNoListShrink)) {
      body["SerialNoList"] = request.serialNoListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDeviceSeats",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDeviceSeatsResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDeviceSeatsResponse({}));
  }

  /**
   * 解绑设备座位
   * 
   * @param request - UnbindDeviceSeatsRequest
   * @returns UnbindDeviceSeatsResponse
   */
  async unbindDeviceSeats(request: $_model.UnbindDeviceSeatsRequest): Promise<$_model.UnbindDeviceSeatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDeviceSeatsWithOptions(request, runtime);
  }

  /**
   * 解绑免密登录用户
   * 
   * @param request - UnbindPasswordFreeLoginUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPasswordFreeLoginUserResponse
   */
  async unbindPasswordFreeLoginUserWithOptions(request: $_model.UnbindPasswordFreeLoginUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindPasswordFreeLoginUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.serialNumber)) {
      body["SerialNumber"] = request.serialNumber;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindPasswordFreeLoginUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindPasswordFreeLoginUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindPasswordFreeLoginUserResponse({}));
  }

  /**
   * 解绑免密登录用户
   * 
   * @param request - UnbindPasswordFreeLoginUserRequest
   * @returns UnbindPasswordFreeLoginUserResponse
   */
  async unbindPasswordFreeLoginUser(request: $_model.UnbindPasswordFreeLoginUserRequest): Promise<$_model.UnbindPasswordFreeLoginUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPasswordFreeLoginUserWithOptions(request, runtime);
  }

  /**
   * 更新设备别名
   * 
   * @param request - UpdateAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliasResponse
   */
  async updateAliasWithOptions(request: $_model.UpdateAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAliasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlias",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAliasResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAliasResponse({}));
  }

  /**
   * 更新设备别名
   * 
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(request: $_model.UpdateAliasRequest): Promise<$_model.UpdateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

  /**
   * 批量更新设备绑定的终端用户
   * 
   * @param request - UpdateDeviceBindedEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeviceBindedEndUserResponse
   */
  async updateDeviceBindedEndUserWithOptions(request: $_model.UpdateDeviceBindedEndUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeviceBindedEndUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serialNo)) {
      body["SerialNo"] = request.serialNo;
    }

    if (!$dara.isNull(request.sourceAdEndUsers)) {
      body["SourceAdEndUsers"] = request.sourceAdEndUsers;
    }

    if (!$dara.isNull(request.sourceEndUserIds)) {
      body["SourceEndUserIds"] = request.sourceEndUserIds;
    }

    if (!$dara.isNull(request.targetAdEndUsers)) {
      body["TargetAdEndUsers"] = request.targetAdEndUsers;
    }

    if (!$dara.isNull(request.targetEndUserIds)) {
      body["TargetEndUserIds"] = request.targetEndUserIds;
    }

    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeviceBindedEndUser",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeviceBindedEndUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeviceBindedEndUserResponse({}));
  }

  /**
   * 批量更新设备绑定的终端用户
   * 
   * @param request - UpdateDeviceBindedEndUserRequest
   * @returns UpdateDeviceBindedEndUserResponse
   */
  async updateDeviceBindedEndUser(request: $_model.UpdateDeviceBindedEndUserRequest): Promise<$_model.UpdateDeviceBindedEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeviceBindedEndUserWithOptions(request, runtime);
  }

  /**
   * 修改标签
   * 
   * @param request - UpdateLabelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLabelResponse
   */
  async updateLabelWithOptions(request: $_model.UpdateLabelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelContent)) {
      body["LabelContent"] = request.labelContent;
    }

    if (!$dara.isNull(request.labelId)) {
      body["LabelId"] = request.labelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLabel",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLabelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLabelResponse({}));
  }

  /**
   * 修改标签
   * 
   * @param request - UpdateLabelRequest
   * @returns UpdateLabelResponse
   */
  async updateLabel(request: $_model.UpdateLabelRequest): Promise<$_model.UpdateLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLabelWithOptions(request, runtime);
  }

  /**
   * 修改终端策略
   * 
   * @param request - UpdateTerminalPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTerminalPolicyResponse
   */
  async updateTerminalPolicyWithOptions(request: $_model.UpdateTerminalPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTerminalPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowManualLockScreen)) {
      body["AllowManualLockScreen"] = request.allowManualLockScreen;
    }

    if (!$dara.isNull(request.backgroundModeTitle)) {
      body["BackgroundModeTitle"] = request.backgroundModeTitle;
    }

    if (!$dara.isNull(request.customScreenCastRes)) {
      body["CustomScreenCastRes"] = request.customScreenCastRes;
    }

    if (!$dara.isNull(request.displayLayout)) {
      body["DisplayLayout"] = request.displayLayout;
    }

    if (!$dara.isNull(request.displayResolution)) {
      body["DisplayResolution"] = request.displayResolution;
    }

    if (!$dara.isNull(request.displayScaleRatio)) {
      body["DisplayScaleRatio"] = request.displayScaleRatio;
    }

    if (!$dara.isNull(request.enableAutoLockScreen)) {
      body["EnableAutoLockScreen"] = request.enableAutoLockScreen;
    }

    if (!$dara.isNull(request.enableAutoLogin)) {
      body["EnableAutoLogin"] = request.enableAutoLogin;
    }

    if (!$dara.isNull(request.enableBackgroundMode)) {
      body["EnableBackgroundMode"] = request.enableBackgroundMode;
    }

    if (!$dara.isNull(request.enableBluetooth)) {
      body["EnableBluetooth"] = request.enableBluetooth;
    }

    if (!$dara.isNull(request.enableControlPanel)) {
      body["EnableControlPanel"] = request.enableControlPanel;
    }

    if (!$dara.isNull(request.enableImmersiveMode)) {
      body["EnableImmersiveMode"] = request.enableImmersiveMode;
    }

    if (!$dara.isNull(request.enableLockScreenHotKey)) {
      body["EnableLockScreenHotKey"] = request.enableLockScreenHotKey;
    }

    if (!$dara.isNull(request.enableModifyPassword)) {
      body["EnableModifyPassword"] = request.enableModifyPassword;
    }

    if (!$dara.isNull(request.enableScanLogin)) {
      body["EnableScanLogin"] = request.enableScanLogin;
    }

    if (!$dara.isNull(request.enableScheduledReboot)) {
      body["EnableScheduledReboot"] = request.enableScheduledReboot;
    }

    if (!$dara.isNull(request.enableScheduledShutdown)) {
      body["EnableScheduledShutdown"] = request.enableScheduledShutdown;
    }

    if (!$dara.isNull(request.enableSmsLogin)) {
      body["EnableSmsLogin"] = request.enableSmsLogin;
    }

    if (!$dara.isNull(request.enableSwitchPersonal)) {
      body["EnableSwitchPersonal"] = request.enableSwitchPersonal;
    }

    if (!$dara.isNull(request.enableWlan)) {
      body["EnableWlan"] = request.enableWlan;
    }

    if (!$dara.isNull(request.followCloudReboot)) {
      body["FollowCloudReboot"] = request.followCloudReboot;
    }

    if (!$dara.isNull(request.followCloudShutdown)) {
      body["FollowCloudShutdown"] = request.followCloudShutdown;
    }

    if (!$dara.isNull(request.followTerminalReboot)) {
      body["FollowTerminalReboot"] = request.followTerminalReboot;
    }

    if (!$dara.isNull(request.followTerminalShutdown)) {
      body["FollowTerminalShutdown"] = request.followTerminalShutdown;
    }

    if (!$dara.isNull(request.forceSetPinCode)) {
      body["ForceSetPinCode"] = request.forceSetPinCode;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.idleTimeoutAction)) {
      body["IdleTimeoutAction"] = request.idleTimeoutAction;
    }

    if (!$dara.isNull(request.lockScreenPasswordRequired)) {
      body["LockScreenPasswordRequired"] = request.lockScreenPasswordRequired;
    }

    if (!$dara.isNull(request.lockScreenTimeout)) {
      body["LockScreenTimeout"] = request.lockScreenTimeout;
    }

    if (!$dara.isNull(request.mainBizType)) {
      body["MainBizType"] = request.mainBizType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.powerButtonDefine)) {
      body["PowerButtonDefine"] = request.powerButtonDefine;
    }

    if (!$dara.isNull(request.powerButtonDefineForAs)) {
      body["PowerButtonDefineForAs"] = request.powerButtonDefineForAs;
    }

    if (!$dara.isNull(request.powerButtonDefineForNs)) {
      body["PowerButtonDefineForNs"] = request.powerButtonDefineForNs;
    }

    if (!$dara.isNull(request.powerOnBehavior)) {
      body["PowerOnBehavior"] = request.powerOnBehavior;
    }

    if (!$dara.isNull(request.runningMode)) {
      body["RunningMode"] = request.runningMode;
    }

    if (!$dara.isNull(request.scheduledReboot)) {
      body["ScheduledReboot"] = request.scheduledReboot;
    }

    if (!$dara.isNull(request.scheduledShutdown)) {
      body["ScheduledShutdown"] = request.scheduledShutdown;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.screenCastResPaths)) {
      bodyFlat["ScreenCastResPaths"] = request.screenCastResPaths;
    }

    if (!$dara.isNull(request.settingLock)) {
      body["SettingLock"] = request.settingLock;
    }

    if (!$dara.isNull(request.terminalPolicyId)) {
      body["TerminalPolicyId"] = request.terminalPolicyId;
    }

    if (!$dara.isNull(request.unlockMethod)) {
      body["UnlockMethod"] = request.unlockMethod;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTerminalPolicy",
      version: "2021-04-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTerminalPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTerminalPolicyResponse({}));
  }

  /**
   * 修改终端策略
   * 
   * @param request - UpdateTerminalPolicyRequest
   * @returns UpdateTerminalPolicyResponse
   */
  async updateTerminalPolicy(request: $_model.UpdateTerminalPolicyRequest): Promise<$_model.UpdateTerminalPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTerminalPolicyWithOptions(request, runtime);
  }

}
