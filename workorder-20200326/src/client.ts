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
   * @deprecated OpenAPI CloseTicket is deprecated, please use Workorder::2021-06-10::CloseTicket instead.
   * 
   * @param request - CloseTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseTicketResponse
   */
  async closeTicketWithOptions(request: $_model.CloseTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseTicket",
      version: "2020-03-26",
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
   * @deprecated OpenAPI CloseTicket is deprecated, please use Workorder::2021-06-10::CloseTicket instead.
   * 
   * @param request - CloseTicketRequest
   * @returns CloseTicketResponse
   */
  // Deprecated
  async closeTicket(request: $_model.CloseTicketRequest): Promise<$_model.CloseTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeTicketWithOptions(request, runtime);
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
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
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
      version: "2020-03-26",
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
   * @deprecated OpenAPI ListCategories is deprecated, please use Workorder::2021-06-10::ListCategories instead.
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

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategories",
      version: "2020-03-26",
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
   * @deprecated OpenAPI ListCategories is deprecated, please use Workorder::2021-06-10::ListCategories instead.
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  // Deprecated
  async listCategories(request: $_model.ListCategoriesRequest): Promise<$_model.ListCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCategoriesWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ListProducts is deprecated, please use Workorder::2021-06-10::ListProducts instead.
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2020-03-26",
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
   * @deprecated OpenAPI ListProducts is deprecated, please use Workorder::2021-06-10::ListProducts instead.
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  // Deprecated
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ListTicketNotes is deprecated, please use Workorder::2021-06-10::ListTicketNotes instead.
   * 
   * @param request - ListTicketNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTicketNotesResponse
   */
  async listTicketNotesWithOptions(request: $_model.ListTicketNotesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTicketNotesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.ticketId)) {
      query["TicketId"] = request.ticketId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTicketNotes",
      version: "2020-03-26",
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
   * @deprecated OpenAPI ListTicketNotes is deprecated, please use Workorder::2021-06-10::ListTicketNotes instead.
   * 
   * @param request - ListTicketNotesRequest
   * @returns ListTicketNotesResponse
   */
  // Deprecated
  async listTicketNotes(request: $_model.ListTicketNotesRequest): Promise<$_model.ListTicketNotesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTicketNotesWithOptions(request, runtime);
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

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
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

    if (!$dara.isNull(request.subUserId)) {
      query["SubUserId"] = request.subUserId;
    }

    if (!$dara.isNull(request.ticketStatus)) {
      query["TicketStatus"] = request.ticketStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTickets",
      version: "2020-03-26",
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
