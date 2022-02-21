// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateSignatureRequest extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBody extends $tea.Model {
  data?: CreateSignatureResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSignatureResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  content?: string;
  description?: string;
  name?: string;
  signatureId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      name: 'Name',
      signatureId: 'SignatureId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      name: 'string',
      signatureId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  data?: CreateTemplateResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTemplateResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignatureResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignatureResponseBody extends $tea.Model {
  data?: GetSignatureResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSignatureResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  data?: GetTemplateResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTemplateResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBody extends $tea.Model {
  data?: ListSignaturesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSignaturesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSignaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  content?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  data?: ListTemplatesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTemplatesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  groupId?: string;
  outIds?: string[];
  phoneNumbers?: string[];
  scheduleId?: string;
  signName?: string;
  signatureId?: string;
  smsUpExtendCodes?: string[];
  templateCode?: string;
  templateId?: string;
  templateParams?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      outIds: 'OutIds',
      phoneNumbers: 'PhoneNumbers',
      scheduleId: 'ScheduleId',
      signName: 'SignName',
      signatureId: 'SignatureId',
      smsUpExtendCodes: 'SmsUpExtendCodes',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
      templateParams: 'TemplateParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      outIds: { 'type': 'array', 'itemType': 'string' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      scheduleId: 'string',
      signName: 'string',
      signatureId: 'string',
      smsUpExtendCodes: { 'type': 'array', 'itemType': 'string' },
      templateCode: 'string',
      templateId: 'string',
      templateParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBodyData extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBodyData extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  type?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      type: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignatureResponseBodyData extends $tea.Model {
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyData extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  type?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      type: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBodyDataSignatures extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  signatures?: ListSignaturesResponseBodyDataSignatures[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      signatures: 'Signatures',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      signatures: { 'type': 'array', 'itemType': ListSignaturesResponseBodyDataSignatures },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyDataTemplates extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  type?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      type: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  templates?: ListTemplatesResponseBodyDataTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyDataTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paiplugin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSignatureWithOptions(request, headers, runtime);
  }

  async createSignatureWithOptions(request: CreateSignatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSignatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSignatureResponse>(await this.callApi(params, req, runtime), new CreateSignatureResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.signatureId)) {
      body["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  async deleteSignature(Id: string): Promise<DeleteSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSignatureWithOptions(Id, headers, runtime);
  }

  async deleteSignatureWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSignatureResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSignatureResponse>(await this.callApi(params, req, runtime), new DeleteSignatureResponse({}));
  }

  async deleteTemplate(Id: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(Id, headers, runtime);
  }

  async deleteTemplateWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async getSignature(Id: string): Promise<GetSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSignatureWithOptions(Id, headers, runtime);
  }

  async getSignatureWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSignatureResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSignatureResponse>(await this.callApi(params, req, runtime), new GetSignatureResponse({}));
  }

  async getTemplate(Id: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(Id, headers, runtime);
  }

  async getTemplateWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async listSignatures(request: ListSignaturesRequest): Promise<ListSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSignaturesWithOptions(request, headers, runtime);
  }

  async listSignaturesWithOptions(request: ListSignaturesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSignaturesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSignatures",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSignaturesResponse>(await this.callApi(params, req, runtime), new ListSignaturesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendMessageWithOptions(request, headers, runtime);
  }

  async sendMessageWithOptions(request: SendMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.outIds)) {
      body["OutIds"] = request.outIds;
    }

    if (!Util.isUnset(request.phoneNumbers)) {
      body["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!Util.isUnset(request.scheduleId)) {
      body["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.signName)) {
      body["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.signatureId)) {
      body["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.smsUpExtendCodes)) {
      body["SmsUpExtendCodes"] = request.smsUpExtendCodes;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateParams)) {
      body["TemplateParams"] = request.templateParams;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

}
