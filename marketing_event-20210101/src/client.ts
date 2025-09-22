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
    this._endpoint = this.getEndpoint("marketing_event", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AddSumRecordFlowPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSumRecordFlowPopResponse
   */
  async addSumRecordFlowPopWithOptions(request: $_model.AddSumRecordFlowPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddSumRecordFlowPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.conferenceName)) {
      query["ConferenceName"] = request.conferenceName;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.entryName)) {
      query["EntryName"] = request.entryName;
    }

    if (!$dara.isNull(request.idcard)) {
      query["Idcard"] = request.idcard;
    }

    if (!$dara.isNull(request.signTime)) {
      query["SignTime"] = request.signTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSumRecordFlowPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSumRecordFlowPopResponse>(await this.callApi(params, req, runtime), new $_model.AddSumRecordFlowPopResponse({}));
  }

  /**
   * @param request - AddSumRecordFlowPopRequest
   * @returns AddSumRecordFlowPopResponse
   */
  async addSumRecordFlowPop(request: $_model.AddSumRecordFlowPopRequest): Promise<$_model.AddSumRecordFlowPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addSumRecordFlowPopWithOptions(request, runtime);
  }

  /**
   * @param request - BindExhibitorRfidPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindExhibitorRfidPopResponse
   */
  async bindExhibitorRfidPopWithOptions(request: $_model.BindExhibitorRfidPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindExhibitorRfidPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!$dara.isNull(request.guestTicketRecordId)) {
      query["GuestTicketRecordId"] = request.guestTicketRecordId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.rfid)) {
      query["Rfid"] = request.rfid;
    }

    if (!$dara.isNull(request.ticketCode)) {
      query["TicketCode"] = request.ticketCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindExhibitorRfidPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindExhibitorRfidPopResponse>(await this.callApi(params, req, runtime), new $_model.BindExhibitorRfidPopResponse({}));
  }

  /**
   * @param request - BindExhibitorRfidPopRequest
   * @returns BindExhibitorRfidPopResponse
   */
  async bindExhibitorRfidPop(request: $_model.BindExhibitorRfidPopRequest): Promise<$_model.BindExhibitorRfidPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindExhibitorRfidPopWithOptions(request, runtime);
  }

  /**
   * @param request - BindGuestRfidPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindGuestRfidPopResponse
   */
  async bindGuestRfidPopWithOptions(request: $_model.BindGuestRfidPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindGuestRfidPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.gmtCreate)) {
      query["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.gmtModified)) {
      query["GmtModified"] = request.gmtModified;
    }

    if (!$dara.isNull(request.guestTicketRecordId)) {
      query["GuestTicketRecordId"] = request.guestTicketRecordId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.rfid)) {
      query["Rfid"] = request.rfid;
    }

    if (!$dara.isNull(request.ticketCode)) {
      query["TicketCode"] = request.ticketCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindGuestRfidPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindGuestRfidPopResponse>(await this.callApi(params, req, runtime), new $_model.BindGuestRfidPopResponse({}));
  }

  /**
   * @param request - BindGuestRfidPopRequest
   * @returns BindGuestRfidPopResponse
   */
  async bindGuestRfidPop(request: $_model.BindGuestRfidPopRequest): Promise<$_model.BindGuestRfidPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindGuestRfidPopWithOptions(request, runtime);
  }

  /**
   * @param request - CheckNFCBindPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckNFCBindPopResponse
   */
  async checkNFCBindPopWithOptions(request: $_model.CheckNFCBindPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckNFCBindPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.nfcId)) {
      query["NfcId"] = request.nfcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckNFCBindPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckNFCBindPopResponse>(await this.callApi(params, req, runtime), new $_model.CheckNFCBindPopResponse({}));
  }

  /**
   * @param request - CheckNFCBindPopRequest
   * @returns CheckNFCBindPopResponse
   */
  async checkNFCBindPop(request: $_model.CheckNFCBindPopRequest): Promise<$_model.CheckNFCBindPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkNFCBindPopWithOptions(request, runtime);
  }

  /**
   * 拉取领证人员记录
   * 
   * @param request - FindGuestCredentialsRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindGuestCredentialsRecordResponse
   */
  async findGuestCredentialsRecordWithOptions(request: $_model.FindGuestCredentialsRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindGuestCredentialsRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.dateTimeString)) {
      query["DateTimeString"] = request.dateTimeString;
    }

    if (!$dara.isNull(request.endDateTime)) {
      query["EndDateTime"] = request.endDateTime;
    }

    if (!$dara.isNull(request.startDateTime)) {
      query["StartDateTime"] = request.startDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindGuestCredentialsRecord",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindGuestCredentialsRecordResponse>(await this.callApi(params, req, runtime), new $_model.FindGuestCredentialsRecordResponse({}));
  }

  /**
   * 拉取领证人员记录
   * 
   * @param request - FindGuestCredentialsRecordRequest
   * @returns FindGuestCredentialsRecordResponse
   */
  async findGuestCredentialsRecord(request: $_model.FindGuestCredentialsRecordRequest): Promise<$_model.FindGuestCredentialsRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findGuestCredentialsRecordWithOptions(request, runtime);
  }

  /**
   * 云栖大会获取取票人信息list接口
   * 
   * @param request - FindGuestTicketRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FindGuestTicketRecordResponse
   */
  async findGuestTicketRecordWithOptions(request: $_model.FindGuestTicketRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FindGuestTicketRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.dateTimeString)) {
      query["DateTimeString"] = request.dateTimeString;
    }

    if (!$dara.isNull(request.endDateTime)) {
      query["EndDateTime"] = request.endDateTime;
    }

    if (!$dara.isNull(request.startDateTime)) {
      query["StartDateTime"] = request.startDateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FindGuestTicketRecord",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FindGuestTicketRecordResponse>(await this.callApi(params, req, runtime), new $_model.FindGuestTicketRecordResponse({}));
  }

  /**
   * 云栖大会获取取票人信息list接口
   * 
   * @param request - FindGuestTicketRecordRequest
   * @returns FindGuestTicketRecordResponse
   */
  async findGuestTicketRecord(request: $_model.FindGuestTicketRecordRequest): Promise<$_model.FindGuestTicketRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.findGuestTicketRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAllActivityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAllActivityInfoResponse
   */
  async queryAllActivityInfoWithOptions(request: $_model.QueryAllActivityInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAllActivityInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAllActivityInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAllActivityInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryAllActivityInfoResponse({}));
  }

  /**
   * @param request - QueryAllActivityInfoRequest
   * @returns QueryAllActivityInfoResponse
   */
  async queryAllActivityInfo(request: $_model.QueryAllActivityInfoRequest): Promise<$_model.QueryAllActivityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAllActivityInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryOrderSessionListPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrderSessionListPopResponse
   */
  async queryOrderSessionListPopWithOptions(request: $_model.QueryOrderSessionListPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrderSessionListPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.nfcId)) {
      query["NfcId"] = request.nfcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrderSessionListPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrderSessionListPopResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrderSessionListPopResponse({}));
  }

  /**
   * @param request - QueryOrderSessionListPopRequest
   * @returns QueryOrderSessionListPopResponse
   */
  async queryOrderSessionListPop(request: $_model.QueryOrderSessionListPopRequest): Promise<$_model.QueryOrderSessionListPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryOrderSessionListPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySessionByActivityIdPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionByActivityIdPopResponse
   */
  async querySessionByActivityIdPopWithOptions(request: $_model.QuerySessionByActivityIdPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySessionByActivityIdPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySessionByActivityIdPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySessionByActivityIdPopResponse>(await this.callApi(params, req, runtime), new $_model.QuerySessionByActivityIdPopResponse({}));
  }

  /**
   * @param request - QuerySessionByActivityIdPopRequest
   * @returns QuerySessionByActivityIdPopResponse
   */
  async querySessionByActivityIdPop(request: $_model.QuerySessionByActivityIdPopRequest): Promise<$_model.QuerySessionByActivityIdPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySessionByActivityIdPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySessionListPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySessionListPopResponse
   */
  async querySessionListPopWithOptions(request: $_model.QuerySessionListPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySessionListPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.nfcId)) {
      query["NfcId"] = request.nfcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySessionListPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySessionListPopResponse>(await this.callApi(params, req, runtime), new $_model.QuerySessionListPopResponse({}));
  }

  /**
   * @param request - QuerySessionListPopRequest
   * @returns QuerySessionListPopResponse
   */
  async querySessionListPop(request: $_model.QuerySessionListPopRequest): Promise<$_model.QuerySessionListPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySessionListPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySignInRecordPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySignInRecordPopResponse
   */
  async querySignInRecordPopWithOptions(request: $_model.QuerySignInRecordPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySignInRecordPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySignInRecordPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySignInRecordPopResponse>(await this.callApi(params, req, runtime), new $_model.QuerySignInRecordPopResponse({}));
  }

  /**
   * @param request - QuerySignInRecordPopRequest
   * @returns QuerySignInRecordPopResponse
   */
  async querySignInRecordPop(request: $_model.QuerySignInRecordPopRequest): Promise<$_model.QuerySignInRecordPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySignInRecordPopWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySingleActivityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySingleActivityInfoResponse
   */
  async querySingleActivityInfoWithOptions(request: $_model.QuerySingleActivityInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySingleActivityInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySingleActivityInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySingleActivityInfoResponse>(await this.callApi(params, req, runtime), new $_model.QuerySingleActivityInfoResponse({}));
  }

  /**
   * @param request - QuerySingleActivityInfoRequest
   * @returns QuerySingleActivityInfoResponse
   */
  async querySingleActivityInfo(request: $_model.QuerySingleActivityInfoRequest): Promise<$_model.QuerySingleActivityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySingleActivityInfoWithOptions(request, runtime);
  }

  /**
   * @param request - SyncSignInInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncSignInInfoResponse
   */
  async syncSignInInfoWithOptions(request: $_model.SyncSignInInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncSignInInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncSignInInfo",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncSignInInfoResponse>(await this.callApi(params, req, runtime), new $_model.SyncSignInInfoResponse({}));
  }

  /**
   * @param request - SyncSignInInfoRequest
   * @returns SyncSignInInfoResponse
   */
  async syncSignInInfo(request: $_model.SyncSignInInfoRequest): Promise<$_model.SyncSignInInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncSignInInfoWithOptions(request, runtime);
  }

  /**
   * @param request - TicketOrCredentialsSignInPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketOrCredentialsSignInPopResponse
   */
  async ticketOrCredentialsSignInPopWithOptions(request: $_model.TicketOrCredentialsSignInPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TicketOrCredentialsSignInPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activityId)) {
      query["ActivityId"] = request.activityId;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.conferenceName)) {
      query["ConferenceName"] = request.conferenceName;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.entryName)) {
      query["EntryName"] = request.entryName;
    }

    if (!$dara.isNull(request.idcard)) {
      query["Idcard"] = request.idcard;
    }

    if (!$dara.isNull(request.signTime)) {
      query["SignTime"] = request.signTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketOrCredentialsSignInPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketOrCredentialsSignInPopResponse>(await this.callApi(params, req, runtime), new $_model.TicketOrCredentialsSignInPopResponse({}));
  }

  /**
   * @param request - TicketOrCredentialsSignInPopRequest
   * @returns TicketOrCredentialsSignInPopResponse
   */
  async ticketOrCredentialsSignInPop(request: $_model.TicketOrCredentialsSignInPopRequest): Promise<$_model.TicketOrCredentialsSignInPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ticketOrCredentialsSignInPopWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateCredentialsStatusPopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCredentialsStatusPopResponse
   */
  async updateCredentialsStatusPopWithOptions(request: $_model.UpdateCredentialsStatusPopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCredentialsStatusPopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.proxyRecipientName)) {
      query["ProxyRecipientName"] = request.proxyRecipientName;
    }

    if (!$dara.isNull(request.proxyRecipientPhoneNumber)) {
      query["ProxyRecipientPhoneNumber"] = request.proxyRecipientPhoneNumber;
    }

    if (!$dara.isNull(request.receiptLocation)) {
      query["ReceiptLocation"] = request.receiptLocation;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCredentialsStatusPop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCredentialsStatusPopResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCredentialsStatusPopResponse({}));
  }

  /**
   * @param request - UpdateCredentialsStatusPopRequest
   * @returns UpdateCredentialsStatusPopResponse
   */
  async updateCredentialsStatusPop(request: $_model.UpdateCredentialsStatusPopRequest): Promise<$_model.UpdateCredentialsStatusPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCredentialsStatusPopWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateTicketRecordByticketCodePopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTicketRecordByticketCodePopResponse
   */
  async updateTicketRecordByticketCodePopWithOptions(request: $_model.UpdateTicketRecordByticketCodePopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTicketRecordByticketCodePopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agendaId)) {
      query["AgendaId"] = request.agendaId;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.event)) {
      query["Event"] = request.event;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTicketRecordByticketCodePop",
      version: "2021-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTicketRecordByticketCodePopResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTicketRecordByticketCodePopResponse({}));
  }

  /**
   * @param request - UpdateTicketRecordByticketCodePopRequest
   * @returns UpdateTicketRecordByticketCodePopResponse
   */
  async updateTicketRecordByticketCodePop(request: $_model.UpdateTicketRecordByticketCodePopRequest): Promise<$_model.UpdateTicketRecordByticketCodePopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTicketRecordByticketCodePopWithOptions(request, runtime);
  }

}
