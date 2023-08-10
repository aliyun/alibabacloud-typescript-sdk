// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateSheetHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: CreateSheetHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: CreateSheetHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetRequest extends $tea.Model {
  name?: string;
  tenantContext?: CreateSheetRequestTenantContext;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tenantContext: CreateSheetRequestTenantContext,
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetShrinkRequest extends $tea.Model {
  name?: string;
  tenantContextShrink?: string;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tenantContextShrink: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tenantContextShrink: 'string',
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetResponseBody extends $tea.Model {
  id?: string;
  name?: string;
  requestId?: string;
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      visibility: 'visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      requestId: 'string',
      visibility: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSheetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSheetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContext?: InsertRowsBeforeHeadersAccountContext;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContext: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContext: InsertRowsBeforeHeadersAccountContext,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeShrinkHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  accountContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountContextShrink: 'AccountContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeRequest extends $tea.Model {
  row?: number;
  rowCount?: number;
  sheetId?: string;
  tenantContext?: InsertRowsBeforeRequestTenantContext;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
      rowCount: 'RowCount',
      sheetId: 'SheetId',
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContext: InsertRowsBeforeRequestTenantContext,
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeShrinkRequest extends $tea.Model {
  row?: number;
  rowCount?: number;
  sheetId?: string;
  tenantContextShrink?: string;
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
      rowCount: 'RowCount',
      sheetId: 'SheetId',
      tenantContextShrink: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: 'number',
      rowCount: 'number',
      sheetId: 'string',
      tenantContextShrink: 'string',
      workbookId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InsertRowsBeforeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InsertRowsBeforeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSheetRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeHeadersAccountContext extends $tea.Model {
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertRowsBeforeRequestTenantContext extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
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
    this._endpoint = this.getEndpoint("aliding", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createSheetWithOptions(tmpReq: CreateSheetRequest, tmpHeader: CreateSheetHeaders, runtime: $Util.RuntimeOptions): Promise<CreateSheetResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSheetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new CreateSheetShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSheet",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/createSheet`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSheetResponse>(await this.callApi(params, req, runtime), new CreateSheetResponse({}));
  }

  async createSheet(request: CreateSheetRequest): Promise<CreateSheetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSheetHeaders({ });
    return await this.createSheetWithOptions(request, headers, runtime);
  }

  async insertRowsBeforeWithOptions(tmpReq: InsertRowsBeforeRequest, tmpHeader: InsertRowsBeforeHeaders, runtime: $Util.RuntimeOptions): Promise<InsertRowsBeforeResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertRowsBeforeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    let headers = new InsertRowsBeforeShrinkHeaders({ });
    OpenApiUtil.convert(tmpHeader, headers);
    if (!Util.isUnset(tmpHeader.accountContext)) {
      headers.accountContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpHeader.accountContext, "AccountContext", "json");
    }

    if (!Util.isUnset(tmpReq.tenantContext)) {
      request.tenantContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tenantContext, "TenantContext", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.row)) {
      body["Row"] = request.row;
    }

    if (!Util.isUnset(request.rowCount)) {
      body["RowCount"] = request.rowCount;
    }

    if (!Util.isUnset(request.sheetId)) {
      body["SheetId"] = request.sheetId;
    }

    if (!Util.isUnset(request.tenantContextShrink)) {
      body["TenantContext"] = request.tenantContextShrink;
    }

    if (!Util.isUnset(request.workbookId)) {
      body["WorkbookId"] = request.workbookId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.accountContextShrink)) {
      realHeaders["AccountContext"] = Util.toJSONString(headers.accountContextShrink);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertRowsBefore",
      version: "2023-04-26",
      protocol: "HTTPS",
      pathname: `/dingtalk/v1/documents/insertRowsBefore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertRowsBeforeResponse>(await this.callApi(params, req, runtime), new InsertRowsBeforeResponse({}));
  }

  async insertRowsBefore(request: InsertRowsBeforeRequest): Promise<InsertRowsBeforeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InsertRowsBeforeHeaders({ });
    return await this.insertRowsBeforeWithOptions(request, headers, runtime);
  }

}
