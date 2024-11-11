// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class RunDataAnalysisRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  generateSqlOnly?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * sessionID
   */
  sessionId?: string;
  /**
   * @example
   * STANDARD_MIX
   */
  specificationType?: string;
  static names(): { [key: string]: string } {
    return {
      generateSqlOnly: 'generateSqlOnly',
      query: 'query',
      sessionId: 'sessionId',
      specificationType: 'specificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateSqlOnly: 'boolean',
      query: 'string',
      sessionId: 'string',
      specificationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDataAnalysisResponseBody extends $tea.Model {
  data?: RunDataAnalysisResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunDataAnalysisResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDataAnalysisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunDataAnalysisResponseBody;
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
      body: RunDataAnalysisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDataAnalysisResponseBodyDataSqlData extends $tea.Model {
  column?: string[];
  data?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      column: 'column',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': 'string' },
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDataAnalysisResponseBodyDataVisualizationData extends $tea.Model {
  /**
   * @example
   * bar
   */
  plotType?: string;
  xAxis?: string[];
  yAxis?: string[];
  static names(): { [key: string]: string } {
    return {
      plotType: 'plotType',
      xAxis: 'xAxis',
      yAxis: 'yAxis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plotType: 'string',
      xAxis: { 'type': 'array', 'itemType': 'string' },
      yAxis: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDataAnalysisResponseBodyDataVisualization extends $tea.Model {
  data?: RunDataAnalysisResponseBodyDataVisualizationData;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunDataAnalysisResponseBodyDataVisualizationData,
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDataAnalysisResponseBodyData extends $tea.Model {
  /**
   * @example
   * Access was denied, message: No such namespace namespaces/tech-scp-chain7.
   */
  errorMessage?: string;
  /**
   * @example
   * rewrite
   */
  event?: string;
  evidence?: string;
  /**
   * @example
   * DA2578F7-88A5-5D6E-9305-33E724E97D60
   */
  requestId?: string;
  rewrite?: string;
  selector?: string[];
  /**
   * @example
   * sessionid1
   */
  sessionId?: string;
  /**
   * @example
   * select p.product_id, p.product_name, sum(o.quantity) as total_sales from products p join orders o on p.product_id = o.product_id where o.order_date between \\"2022-10-22\\" and \\"2024-10-22\\" group by p.product_id, p.product_name having total_sales > 5
   */
  sql?: string;
  sqlData?: RunDataAnalysisResponseBodyDataSqlData;
  /**
   * @example
   * Can not issue data manipulation statements with executeQuery()
   */
  sqlError?: string;
  visualization?: RunDataAnalysisResponseBodyDataVisualization;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      event: 'event',
      evidence: 'evidence',
      requestId: 'requestId',
      rewrite: 'rewrite',
      selector: 'selector',
      sessionId: 'sessionId',
      sql: 'sql',
      sqlData: 'sqlData',
      sqlError: 'sqlError',
      visualization: 'visualization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      event: 'string',
      evidence: 'string',
      requestId: 'string',
      rewrite: 'string',
      selector: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      sql: 'string',
      sqlData: RunDataAnalysisResponseBodyDataSqlData,
      sqlError: 'string',
      visualization: RunDataAnalysisResponseBodyDataVisualization,
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
    this._endpoint = this.getEndpoint("dataanalysisgbi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * 运行数据分析
   * 
   * @param request - RunDataAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunDataAnalysisResponse
   */
  async runDataAnalysisWithOptions(workspaceId: string, request: RunDataAnalysisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunDataAnalysisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.generateSqlOnly)) {
      body["generateSqlOnly"] = request.generateSqlOnly;
    }

    if (!Util.isUnset(request.query)) {
      body["query"] = request.query;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.specificationType)) {
      body["specificationType"] = request.specificationType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunDataAnalysis",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/${OpenApiUtil.getEncodeParam(workspaceId)}/gbi/runDataAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunDataAnalysisResponse>(await this.callApi(params, req, runtime), new RunDataAnalysisResponse({}));
  }

  /**
   * 运行数据分析
   * 
   * @param request - RunDataAnalysisRequest
   * @returns RunDataAnalysisResponse
   */
  async runDataAnalysis(workspaceId: string, request: RunDataAnalysisRequest): Promise<RunDataAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runDataAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

}
