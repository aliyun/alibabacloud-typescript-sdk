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
   * Closes a ticket.
   * 
   * @param request - CloseTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseTicketResponse
   */
  async closeTicketWithOptions(request: $_model.CloseTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseTicketResponse>(await this.callApi(params, req, runtime), new $_model.CloseTicketResponse({}));
  }

  /**
   * Closes a ticket.
   * 
   * @param request - CloseTicketRequest
   * @returns CloseTicketResponse
   */
  async closeTicket(request: $_model.CloseTicketRequest): Promise<$_model.CloseTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeTicketWithOptions(request, runtime);
  }

  /**
   * Creates a ticket.
   * 
   * @param tmpReq - CreateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(tmpReq: $_model.CreateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileNameList)) {
      request.fileNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileNameList, "FileNameList", "simple");
    }

    if (!$dara.isNull(tmpReq.secretInfo)) {
      request.secretInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.secretInfo, "SecretInfo", "json");
    }

    let query = { };
    if (!$dara.isNull(request.secretInfoShrink)) {
      query["SecretInfo"] = request.secretInfoShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      body["Email"] = request.email;
    }

    if (!$dara.isNull(request.fileNameListShrink)) {
      body["FileNameList"] = request.fileNameListShrink;
    }

    if (!$dara.isNull(request.severity)) {
      body["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2021-06-10",
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
   * Creates a ticket.
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  /**
   * Evaluates a ticket.
   * 
   * @param request - EvaluateTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateTicketResponse
   */
  async evaluateTicketWithOptions(request: $_model.EvaluateTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.score)) {
      body["Score"] = request.score;
    }

    if (!$dara.isNull(request.solved)) {
      body["Solved"] = request.solved;
    }

    if (!$dara.isNull(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluateTicketResponse>(await this.callApi(params, req, runtime), new $_model.EvaluateTicketResponse({}));
  }

  /**
   * Evaluates a ticket.
   * 
   * @param request - EvaluateTicketRequest
   * @returns EvaluateTicketResponse
   */
  async evaluateTicket(request: $_model.EvaluateTicketRequest): Promise<$_model.EvaluateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluateTicketWithOptions(request, runtime);
  }

  /**
   * Queries the Object Storage Service (OSS) URL that is used to upload attachments.
   * 
   * @param request - GetAttachmentUploadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttachmentUploadUrlResponse
   */
  async getAttachmentUploadUrlWithOptions(request: $_model.GetAttachmentUploadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAttachmentUploadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAttachmentUploadUrl",
      version: "2021-06-10",
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
   * Queries the Object Storage Service (OSS) URL that is used to upload attachments.
   * 
   * @param request - GetAttachmentUploadUrlRequest
   * @returns GetAttachmentUploadUrlResponse
   */
  async getAttachmentUploadUrl(request: $_model.GetAttachmentUploadUrlRequest): Promise<$_model.GetAttachmentUploadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttachmentUploadUrlWithOptions(request, runtime);
  }

  /**
   * @param request - GetMqConsumerTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMqConsumerTagResponse
   */
  async getMqConsumerTagWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetMqConsumerTagResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetMqConsumerTag",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMqConsumerTagResponse>(await this.callApi(params, req, runtime), new $_model.GetMqConsumerTagResponse({}));
  }

  /**
   * @returns GetMqConsumerTagResponse
   */
  async getMqConsumerTag(): Promise<$_model.GetMqConsumerTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMqConsumerTagWithOptions(runtime);
  }

  /**
   * Query tickets.
   * 
   * @param request - GetTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTicketResponse
   */
  async getTicketWithOptions(request: $_model.GetTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTicket",
      version: "2021-06-10",
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
   * Query tickets.
   * 
   * @param request - GetTicketRequest
   * @returns GetTicketResponse
   */
  async getTicket(request: $_model.GetTicketRequest): Promise<$_model.GetTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTicketWithOptions(request, runtime);
  }

  /**
   * Obtains the list data of ticket problem categories.
   * 
   * @param request - ListCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoriesResponse
   */
  async listCategoriesWithOptions(request: $_model.ListCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategories",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoriesResponse({}));
  }

  /**
   * Obtains the list data of ticket problem categories.
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  async listCategories(request: $_model.ListCategoriesRequest): Promise<$_model.ListCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCategoriesWithOptions(request, runtime);
  }

  /**
   * Obtains the data of the Alibaba Cloud product list.
   * 
   * @param request - ListProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * Obtains the data of the Alibaba Cloud product list.
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * Obtains the ticket communication records.
   * 
   * @param request - ListTicketNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketNotesResponse
   */
  async listTicketNotesWithOptions(request: $_model.ListTicketNotesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketNotesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTicketNotes",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTicketNotesResponse>(await this.callApi(params, req, runtime), new $_model.ListTicketNotesResponse({}));
  }

  /**
   * Obtains the ticket communication records.
   * 
   * @param request - ListTicketNotesRequest
   * @returns ListTicketNotesResponse
   */
  async listTicketNotes(request: $_model.ListTicketNotesRequest): Promise<$_model.ListTicketNotesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketNotesWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain the list of my tickets.
   * 
   * @param tmpReq - ListTicketsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketsResponse
   */
  async listTicketsWithOptions(tmpReq: $_model.ListTicketsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTicketsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ticketIdList)) {
      request.ticketIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ticketIdList, "TicketIdList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.statusList)) {
      body["StatusList"] = request.statusList;
    }

    if (!$dara.isNull(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.ticketIdListShrink)) {
      body["TicketIdList"] = request.ticketIdListShrink;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTickets",
      version: "2021-06-10",
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
   * You can call this operation to obtain the list of my tickets.
   * 
   * @param request - ListTicketsRequest
   * @returns ListTicketsResponse
   */
  async listTickets(request: $_model.ListTicketsRequest): Promise<$_model.ListTicketsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketsWithOptions(request, runtime);
  }

  /**
   * Reopens a ticket
   * 
   * @param request - ReopenTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReopenTicketResponse
   */
  async reopenTicketWithOptions(request: $_model.ReopenTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReopenTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReopenTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReopenTicketResponse>(await this.callApi(params, req, runtime), new $_model.ReopenTicketResponse({}));
  }

  /**
   * Reopens a ticket
   * 
   * @param request - ReopenTicketRequest
   * @returns ReopenTicketResponse
   */
  async reopenTicket(request: $_model.ReopenTicketRequest): Promise<$_model.ReopenTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reopenTicketWithOptions(request, runtime);
  }

  /**
   * Reply to the ticket. You can call the ListTicketNotes operation to obtain the content of the reply.
   * 
   * @param tmpReq - ReplyTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReplyTicketResponse
   */
  async replyTicketWithOptions(tmpReq: $_model.ReplyTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReplyTicketResponse> {
    tmpReq.validate();
    let request = new $_model.ReplyTicketShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileNameList)) {
      request.fileNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileNameList, "FileNameList", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.fileNameListShrink)) {
      query["FileNameList"] = request.fileNameListShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.encrypt)) {
      body["Encrypt"] = request.encrypt;
    }

    if (!$dara.isNull(request.ticketId)) {
      body["TicketId"] = request.ticketId;
    }

    if (!$dara.isNull(request.uid)) {
      body["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReplyTicket",
      version: "2021-06-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReplyTicketResponse>(await this.callApi(params, req, runtime), new $_model.ReplyTicketResponse({}));
  }

  /**
   * Reply to the ticket. You can call the ListTicketNotes operation to obtain the content of the reply.
   * 
   * @param request - ReplyTicketRequest
   * @returns ReplyTicketResponse
   */
  async replyTicket(request: $_model.ReplyTicketRequest): Promise<$_model.ReplyTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.replyTicketWithOptions(request, runtime);
  }

}
