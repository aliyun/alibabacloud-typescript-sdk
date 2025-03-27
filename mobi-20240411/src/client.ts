// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateAppFromTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 172050620*****
   */
  appId?: string;
  description?: string;
  /**
   * @example
   * 2024-03-26T10:22Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-03-26T10:22Z
   */
  gmtModified?: string;
  /**
   * @example
   * -1
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 1731664463*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      icon: 'string',
      name: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppFromTemplateRequest extends $dara.Model {
  /**
   * @example
   * [{"type":"bailianapp","name":"rag","actualParameter":"11"}]
   */
  actualParameters?: string;
  connectionsContent?: string;
  databasesContent?: string;
  description?: string;
  from?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4c892729-9950-4353-8146-33542b869e01
   */
  templateId?: string;
  /**
   * @example
   * Web
   */
  type?: string;
  variablesContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1731664463*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      actualParameters: 'ActualParameters',
      connectionsContent: 'ConnectionsContent',
      databasesContent: 'DatabasesContent',
      description: 'Description',
      from: 'From',
      icon: 'Icon',
      name: 'Name',
      templateId: 'TemplateId',
      type: 'Type',
      variablesContent: 'VariablesContent',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualParameters: 'string',
      connectionsContent: 'string',
      databasesContent: 'string',
      description: 'string',
      from: 'string',
      icon: 'string',
      name: 'string',
      templateId: 'string',
      type: 'string',
      variablesContent: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppFromTemplateResponseBody extends $dara.Model {
  data?: CreateAppFromTemplateResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 36F552F7-E61E-556A-9957-8284318D1B9C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAppFromTemplateResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppFromTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppFromTemplateResponseBody;
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
      body: CreateAppFromTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mobi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 通过模板创建应用
   * 
   * @param request - CreateAppFromTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppFromTemplateResponse
   */
  async createAppFromTemplateWithOptions(request: CreateAppFromTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateAppFromTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actualParameters)) {
      query["ActualParameters"] = request.actualParameters;
    }

    if (!$dara.isNull(request.connectionsContent)) {
      query["ConnectionsContent"] = request.connectionsContent;
    }

    if (!$dara.isNull(request.databasesContent)) {
      query["DatabasesContent"] = request.databasesContent;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.icon)) {
      query["Icon"] = request.icon;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.variablesContent)) {
      query["VariablesContent"] = request.variablesContent;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppFromTemplate",
      version: "2024-04-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppFromTemplateResponse>(await this.callApi(params, req, runtime), new CreateAppFromTemplateResponse({}));
    } else {
      return $dara.cast<CreateAppFromTemplateResponse>(await this.execute(params, req, runtime), new CreateAppFromTemplateResponse({}));
    }

  }

  /**
   * 通过模板创建应用
   * 
   * @param request - CreateAppFromTemplateRequest
   * @returns CreateAppFromTemplateResponse
   */
  async createAppFromTemplate(request: CreateAppFromTemplateRequest): Promise<CreateAppFromTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppFromTemplateWithOptions(request, runtime);
  }

}
