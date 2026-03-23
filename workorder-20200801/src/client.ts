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
      'ap-northeast-1': "workorder.ap-northeast-1.aliyuncs.com",
      'ap-southeast-1': "workorder.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("workorder", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @deprecated OpenAPI CreateTicket is deprecated, please use Workorder::2021-06-10::CreateTicket instead.
   * 
   * @param request - CreateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: $_model.CreateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commonQuestionId)) {
      query["CommonQuestionId"] = request.commonQuestionId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.fileNameList)) {
      query["FileNameList"] = request.fileNameList;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.notifyTimeRange)) {
      query["NotifyTimeRange"] = request.notifyTimeRange;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.secretContent)) {
      query["SecretContent"] = request.secretContent;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2020-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.callApi(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * @deprecated OpenAPI CreateTicket is deprecated, please use Workorder::2021-06-10::CreateTicket instead.
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  // Deprecated
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  /**
   * @param request - GetAttachmentUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttachmentUploadUrlResponse
   */
  async getAttachmentUploadUrlWithOptions(request: $_model.GetAttachmentUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAttachmentUploadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAttachmentUploadUrl",
      version: "2020-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAttachmentUploadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAttachmentUploadUrlResponse({}));
  }

  /**
   * @param request - GetAttachmentUploadUrlRequest
   * @returns GetAttachmentUploadUrlResponse
   */
  async getAttachmentUploadUrl(request: $_model.GetAttachmentUploadUrlRequest): Promise<$_model.GetAttachmentUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttachmentUploadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetAttachmentUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttachmentUrlResponse
   */
  async getAttachmentUrlWithOptions(request: $_model.GetAttachmentUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAttachmentUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attachName)) {
      query["AttachName"] = request.attachName;
    }

    if (!$dara.isNull(request.noteId)) {
      query["NoteId"] = request.noteId;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAttachmentUrl",
      version: "2020-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAttachmentUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAttachmentUrlResponse({}));
  }

  /**
   * @param request - GetAttachmentUrlRequest
   * @returns GetAttachmentUrlResponse
   */
  async getAttachmentUrl(request: $_model.GetAttachmentUrlRequest): Promise<$_model.GetAttachmentUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttachmentUrlWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI GetTicket is deprecated, please use Workorder::2021-06-10::GetTicket instead.
   * 
   * @param request - GetTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketResponse
   */
  async getTicketWithOptions(request: $_model.GetTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicket",
      version: "2020-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetTicketResponse({}));
  }

  /**
   * @deprecated OpenAPI GetTicket is deprecated, please use Workorder::2021-06-10::GetTicket instead.
   * 
   * @param request - GetTicketRequest
   * @returns GetTicketResponse
   */
  // Deprecated
  async getTicket(request: $_model.GetTicketRequest): Promise<$_model.GetTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTicketWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ListTickets is deprecated, please use Workorder::2021-06-10::ListTickets instead.
   * 
   * @param request - ListTicketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketsResponse
   */
  async listTicketsWithOptions(request: $_model.ListTicketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createdAfterTime)) {
      query["CreatedAfterTime"] = request.createdAfterTime;
    }

    if (!$dara.isNull(request.createdBeforeTime)) {
      query["CreatedBeforeTime"] = request.createdBeforeTime;
    }

    if (!$dara.isNull(request.extraConditionList)) {
      query["ExtraConditionList"] = request.extraConditionList;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageStart)) {
      query["PageStart"] = request.pageStart;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.ticketStatus)) {
      query["TicketStatus"] = request.ticketStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTickets",
      version: "2020-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketsResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketsResponse({}));
  }

  /**
   * @deprecated OpenAPI ListTickets is deprecated, please use Workorder::2021-06-10::ListTickets instead.
   * 
   * @param request - ListTicketsRequest
   * @returns ListTicketsResponse
   */
  // Deprecated
  async listTickets(request: $_model.ListTicketsRequest): Promise<$_model.ListTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketsWithOptions(request, runtime);
  }

}
