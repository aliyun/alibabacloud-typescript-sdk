// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CloseTicketRequest extends $tea.Model {
  language?: string;
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTicketResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequest extends $tea.Model {
  language?: string;
  title?: string;
  content?: string;
  secretContent?: string;
  productCode?: string;
  category?: string;
  phone?: string;
  email?: string;
  notifyTimeRange?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      title: 'Title',
      content: 'Content',
      secretContent: 'SecretContent',
      productCode: 'ProductCode',
      category: 'Category',
      phone: 'Phone',
      email: 'Email',
      notifyTimeRange: 'NotifyTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      title: 'string',
      content: 'string',
      secretContent: 'string',
      productCode: 'string',
      category: 'string',
      phone: 'string',
      email: 'string',
      notifyTimeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesRequest extends $tea.Model {
  language?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListCategoriesResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListCategoriesResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCategoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $tea.Model {
  language?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListProductsResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListProductsResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesRequest extends $tea.Model {
  language?: string;
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      ticketId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListTicketNotesResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListTicketNotesResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTicketNotesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTicketNotesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsRequest extends $tea.Model {
  ids?: string;
  createdAfterTime?: number;
  createdBeforeTime?: number;
  productCode?: string;
  pageSize?: number;
  ticketStatus?: string;
  pageStart?: number;
  subUserId?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      createdAfterTime: 'CreatedAfterTime',
      createdBeforeTime: 'CreatedBeforeTime',
      productCode: 'ProductCode',
      pageSize: 'PageSize',
      ticketStatus: 'TicketStatus',
      pageStart: 'PageStart',
      subUserId: 'SubUserId',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      createdAfterTime: 'number',
      createdBeforeTime: 'number',
      productCode: 'string',
      pageSize: 'number',
      ticketStatus: 'string',
      pageStart: 'number',
      subUserId: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListTicketsResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListTicketsResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTicketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTicketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketRequest extends $tea.Model {
  language?: string;
  ticketId?: string;
  content?: string;
  secretContent?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      ticketId: 'TicketId',
      content: 'Content',
      secretContent: 'SecretContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      ticketId: 'string',
      content: 'string',
      secretContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplyTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReplyTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReplyTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponseBodyDataList extends $tea.Model {
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCategoriesResponseBodyData extends $tea.Model {
  list?: ListCategoriesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCategoriesResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataHotConsultation extends $tea.Model {
  description?: string;
  name?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataConsultationMore extends $tea.Model {
  description?: string;
  name?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataHotTech extends $tea.Model {
  description?: string;
  name?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataTechMoreProductList extends $tea.Model {
  description?: string;
  name?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataTechMore extends $tea.Model {
  groupName?: string;
  productList?: ListProductsResponseBodyDataTechMoreProductList[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      productList: { 'type': 'array', 'itemType': ListProductsResponseBodyDataTechMoreProductList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyData extends $tea.Model {
  hotConsultation?: ListProductsResponseBodyDataHotConsultation[];
  consultationMore?: ListProductsResponseBodyDataConsultationMore[];
  hotTech?: ListProductsResponseBodyDataHotTech[];
  techMore?: ListProductsResponseBodyDataTechMore[];
  static names(): { [key: string]: string } {
    return {
      hotConsultation: 'HotConsultation',
      consultationMore: 'ConsultationMore',
      hotTech: 'HotTech',
      techMore: 'TechMore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotConsultation: { 'type': 'array', 'itemType': ListProductsResponseBodyDataHotConsultation },
      consultationMore: { 'type': 'array', 'itemType': ListProductsResponseBodyDataConsultationMore },
      hotTech: { 'type': 'array', 'itemType': ListProductsResponseBodyDataHotTech },
      techMore: { 'type': 'array', 'itemType': ListProductsResponseBodyDataTechMore },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyDataList extends $tea.Model {
  gmtCreated?: number;
  noteId?: string;
  fromOfficial?: boolean;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      noteId: 'NoteId',
      fromOfficial: 'FromOfficial',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'number',
      noteId: 'string',
      fromOfficial: 'boolean',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketNotesResponseBodyData extends $tea.Model {
  list?: ListTicketNotesResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTicketNotesResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyDataList extends $tea.Model {
  ticketStatus?: string;
  title?: string;
  creatorId?: string;
  addTime?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      ticketStatus: 'TicketStatus',
      title: 'Title',
      creatorId: 'CreatorId',
      addTime: 'AddTime',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketStatus: 'string',
      title: 'string',
      creatorId: 'string',
      addTime: 'number',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTicketsResponseBodyData extends $tea.Model {
  currentPage?: number;
  list?: ListTicketsResponseBodyDataList[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': ListTicketsResponseBodyDataList },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
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
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async closeTicketWithOptions(request: CloseTicketRequest, runtime: $Util.RuntimeOptions): Promise<CloseTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloseTicketResponse>(await this.doRPCRequest("CloseTicket", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new CloseTicketResponse({}));
  }

  async closeTicket(request: CloseTicketRequest): Promise<CloseTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.closeTicketWithOptions(request, runtime);
  }

  async createTicketWithOptions(request: CreateTicketRequest, runtime: $Util.RuntimeOptions): Promise<CreateTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTicketResponse>(await this.doRPCRequest("CreateTicket", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTicketResponse({}));
  }

  async createTicket(request: CreateTicketRequest): Promise<CreateTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTicketWithOptions(request, runtime);
  }

  async listCategoriesWithOptions(request: ListCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListCategoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCategoriesResponse>(await this.doRPCRequest("ListCategories", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListCategoriesResponse({}));
  }

  async listCategories(request: ListCategoriesRequest): Promise<ListCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCategoriesWithOptions(request, runtime);
  }

  async listProductsWithOptions(request: ListProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProductsResponse>(await this.doRPCRequest("ListProducts", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListProductsResponse({}));
  }

  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsWithOptions(request, runtime);
  }

  async listTicketNotesWithOptions(request: ListTicketNotesRequest, runtime: $Util.RuntimeOptions): Promise<ListTicketNotesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTicketNotesResponse>(await this.doRPCRequest("ListTicketNotes", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListTicketNotesResponse({}));
  }

  async listTicketNotes(request: ListTicketNotesRequest): Promise<ListTicketNotesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTicketNotesWithOptions(request, runtime);
  }

  async listTicketsWithOptions(request: ListTicketsRequest, runtime: $Util.RuntimeOptions): Promise<ListTicketsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTicketsResponse>(await this.doRPCRequest("ListTickets", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new ListTicketsResponse({}));
  }

  async listTickets(request: ListTicketsRequest): Promise<ListTicketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTicketsWithOptions(request, runtime);
  }

  async replyTicketWithOptions(request: ReplyTicketRequest, runtime: $Util.RuntimeOptions): Promise<ReplyTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReplyTicketResponse>(await this.doRPCRequest("ReplyTicket", "2020-03-26", "HTTPS", "POST", "AK", "json", req, runtime), new ReplyTicketResponse({}));
  }

  async replyTicket(request: ReplyTicketRequest): Promise<ReplyTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.replyTicketWithOptions(request, runtime);
  }

}
