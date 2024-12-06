// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelDatasourceAuthorizationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDatasourceAuthorizationResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * FB11F719-9AC8-5C99-AB0A-4709D437FCFC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDatasourceAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelDatasourceAuthorizationResponseBody;
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
      body: CancelDatasourceAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasourceAuthorizationRequest extends $tea.Model {
  /**
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * jdbc:mysql://rm-2zedvv990c8d8rj8ejo.mysql.rds.aliyuncs.com:3306/gbi_good_case
   */
  url?: string;
  /**
   * @example
   * root
   */
  userName?: string;
  /**
   * @example
   * vdb-E0F693C8-9F72-5830-B81A-696C9D8EBBD1
   */
  vdbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      type: 'type',
      url: 'url',
      userName: 'userName',
      vdbId: 'vdbId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      type: 'number',
      url: 'string',
      userName: 'string',
      vdbId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasourceAuthorizationResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * E0F693C8-9F72-5830-B81A-696C9D8EBBD1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasourceAuthorizationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasourceAuthorizationResponseBody;
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
      body: CreateDatasourceAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualDatasourceInstanceRequest extends $tea.Model {
  description?: string;
  /**
   * @example
   * virtual-instance-1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualDatasourceInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * D02D895A-5E58-5A9F-963D-D8B027AB7AE2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualDatasourceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVirtualDatasourceInstanceResponseBody;
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
      body: CreateVirtualDatasourceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualDatasourceInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdb-7D63529B-5D42-5BF0-84E4-F742FFE02E7F
   */
  vdbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      vdbId: 'vdbId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vdbId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualDatasourceInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * 7D63529B-5D42-5BF0-84E4-F742FFE02E7F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualDatasourceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualDatasourceInstanceResponseBody;
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
      body: DeleteVirtualDatasourceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualDatasourceInstanceRequest extends $tea.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * e8Z0nRyY51ZQmYljqGNK
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualDatasourceInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * 45390C6D-016D-5030-BF65-031ED1F65003
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualDatasourceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVirtualDatasourceInstanceResponseBody;
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
      body: ListVirtualDatasourceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  code?: string;
  data?: RunDataAnalysisResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RunDataAnalysisResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

export class SaveVirtualDatasourceDdlRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ddl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdb-E0F693C8-9F72-5830-B81A-696C9D8EBBD1
   */
  vdbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ddl: 'ddl',
      vdbId: 'vdbId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddl: 'string',
      vdbId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVirtualDatasourceDdlResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * 72ABCA5B-1E93-55D3-8A61-6D8A03CC5C8B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVirtualDatasourceDdlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveVirtualDatasourceDdlResponseBody;
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
      body: SaveVirtualDatasourceDdlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncRemoteTablesRequest extends $tea.Model {
  keepTableNames?: string[];
  /**
   * @example
   * true
   */
  pullSamples?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  tableNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keepTableNames: 'keepTableNames',
      pullSamples: 'pullSamples',
      tableNames: 'tableNames',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepTableNames: { 'type': 'array', 'itemType': 'string' },
      pullSamples: 'boolean',
      tableNames: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncRemoteTablesResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * E9563C85-5810-5835-B68C-78580BC3169E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncRemoteTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SyncRemoteTablesResponseBody;
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
      body: SyncRemoteTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualDatasourceInstanceRequest extends $tea.Model {
  description?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vdb-E0F693C8-9F72-5830-B81A-696C9D8EBBD1
   */
  vdbId?: string;
  /**
   * @example
   * llm-2v3934xtp49esw64
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      vdbId: 'vdbId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      vdbId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualDatasourceInstanceResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: any;
  /**
   * @example
   * NoAuth
   */
  errorMsg?: string;
  /**
   * @example
   * E9563C85-5810-5835-B68C-78580BC3169E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualDatasourceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVirtualDatasourceInstanceResponseBody;
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
      body: UpdateVirtualDatasourceInstanceResponseBody,
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
  httpStatusCode?: number;
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
      httpStatusCode: 'httpStatusCode',
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
      httpStatusCode: 'number',
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
   * 取消关联的数据源授权
   * 
   * @param request - CancelDatasourceAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDatasourceAuthorizationResponse
   */
  async cancelDatasourceAuthorizationWithOptions(request: CancelDatasourceAuthorizationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelDatasourceAuthorizationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelDatasourceAuthorization",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/cancel/datasource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelDatasourceAuthorizationResponse>(await this.callApi(params, req, runtime), new CancelDatasourceAuthorizationResponse({}));
  }

  /**
   * 取消关联的数据源授权
   * 
   * @param request - CancelDatasourceAuthorizationRequest
   * @returns CancelDatasourceAuthorizationResponse
   */
  async cancelDatasourceAuthorization(request: CancelDatasourceAuthorizationRequest): Promise<CancelDatasourceAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelDatasourceAuthorizationWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据库关联授权
   * 
   * @param request - CreateDatasourceAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasourceAuthorizationResponse
   */
  async createDatasourceAuthorizationWithOptions(request: CreateDatasourceAuthorizationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDatasourceAuthorizationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.url)) {
      body["url"] = request.url;
    }

    if (!Util.isUnset(request.userName)) {
      body["userName"] = request.userName;
    }

    if (!Util.isUnset(request.vdbId)) {
      body["vdbId"] = request.vdbId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatasourceAuthorization",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/create/datasource`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasourceAuthorizationResponse>(await this.callApi(params, req, runtime), new CreateDatasourceAuthorizationResponse({}));
  }

  /**
   * 创建数据库关联授权
   * 
   * @param request - CreateDatasourceAuthorizationRequest
   * @returns CreateDatasourceAuthorizationResponse
   */
  async createDatasourceAuthorization(request: CreateDatasourceAuthorizationRequest): Promise<CreateDatasourceAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasourceAuthorizationWithOptions(request, headers, runtime);
  }

  /**
   * 在指定的业务空间创建虚拟数据源
   * 
   * @param request - CreateVirtualDatasourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualDatasourceInstanceResponse
   */
  async createVirtualDatasourceInstanceWithOptions(request: CreateVirtualDatasourceInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateVirtualDatasourceInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVirtualDatasourceInstance",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/virtualDatasource/createVirtualDatasourceInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateVirtualDatasourceInstanceResponse>(await this.callApi(params, req, runtime), new CreateVirtualDatasourceInstanceResponse({}));
  }

  /**
   * 在指定的业务空间创建虚拟数据源
   * 
   * @param request - CreateVirtualDatasourceInstanceRequest
   * @returns CreateVirtualDatasourceInstanceResponse
   */
  async createVirtualDatasourceInstance(request: CreateVirtualDatasourceInstanceRequest): Promise<CreateVirtualDatasourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVirtualDatasourceInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 删除指定业务空间下面的虚拟数据源实例
   * 
   * @param request - DeleteVirtualDatasourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualDatasourceInstanceResponse
   */
  async deleteVirtualDatasourceInstanceWithOptions(request: DeleteVirtualDatasourceInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualDatasourceInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vdbId)) {
      body["vdbId"] = request.vdbId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVirtualDatasourceInstance",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/virtualDatasource/deleteVirtualDatasourceInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteVirtualDatasourceInstanceResponse>(await this.callApi(params, req, runtime), new DeleteVirtualDatasourceInstanceResponse({}));
  }

  /**
   * 删除指定业务空间下面的虚拟数据源实例
   * 
   * @param request - DeleteVirtualDatasourceInstanceRequest
   * @returns DeleteVirtualDatasourceInstanceResponse
   */
  async deleteVirtualDatasourceInstance(request: DeleteVirtualDatasourceInstanceRequest): Promise<DeleteVirtualDatasourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVirtualDatasourceInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前业务空间下的数据源实例列表
   * 
   * @param request - ListVirtualDatasourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualDatasourceInstanceResponse
   */
  async listVirtualDatasourceInstanceWithOptions(request: ListVirtualDatasourceInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVirtualDatasourceInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListVirtualDatasourceInstance",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/virtualDatasource/listVirtualDatasourceInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVirtualDatasourceInstanceResponse>(await this.callApi(params, req, runtime), new ListVirtualDatasourceInstanceResponse({}));
  }

  /**
   * 获取当前业务空间下的数据源实例列表
   * 
   * @param request - ListVirtualDatasourceInstanceRequest
   * @returns ListVirtualDatasourceInstanceResponse
   */
  async listVirtualDatasourceInstance(request: ListVirtualDatasourceInstanceRequest): Promise<ListVirtualDatasourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVirtualDatasourceInstanceWithOptions(request, headers, runtime);
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

  /**
   * 向当前指定的业务空间下的指定虚拟数据源实例添加ddl语句
   * 
   * @param request - SaveVirtualDatasourceDdlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveVirtualDatasourceDdlResponse
   */
  async saveVirtualDatasourceDdlWithOptions(request: SaveVirtualDatasourceDdlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SaveVirtualDatasourceDdlResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ddl)) {
      body["ddl"] = request.ddl;
    }

    if (!Util.isUnset(request.vdbId)) {
      body["vdbId"] = request.vdbId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveVirtualDatasourceDdl",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/virtualDatasource/addDdl2VirtualInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SaveVirtualDatasourceDdlResponse>(await this.callApi(params, req, runtime), new SaveVirtualDatasourceDdlResponse({}));
  }

  /**
   * 向当前指定的业务空间下的指定虚拟数据源实例添加ddl语句
   * 
   * @param request - SaveVirtualDatasourceDdlRequest
   * @returns SaveVirtualDatasourceDdlResponse
   */
  async saveVirtualDatasourceDdl(request: SaveVirtualDatasourceDdlRequest): Promise<SaveVirtualDatasourceDdlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.saveVirtualDatasourceDdlWithOptions(request, headers, runtime);
  }

  /**
   * 更新当前业务空间所关联的数据表
   * 
   * @param request - SyncRemoteTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncRemoteTablesResponse
   */
  async syncRemoteTablesWithOptions(request: SyncRemoteTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SyncRemoteTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keepTableNames)) {
      body["keepTableNames"] = request.keepTableNames;
    }

    if (!Util.isUnset(request.pullSamples)) {
      body["pullSamples"] = request.pullSamples;
    }

    if (!Util.isUnset(request.tableNames)) {
      body["tableNames"] = request.tableNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SyncRemoteTables",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/update/datasource/tables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SyncRemoteTablesResponse>(await this.callApi(params, req, runtime), new SyncRemoteTablesResponse({}));
  }

  /**
   * 更新当前业务空间所关联的数据表
   * 
   * @param request - SyncRemoteTablesRequest
   * @returns SyncRemoteTablesResponse
   */
  async syncRemoteTables(request: SyncRemoteTablesRequest): Promise<SyncRemoteTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncRemoteTablesWithOptions(request, headers, runtime);
  }

  /**
   * 修改指定业务空间下所指定的虚拟数据源的信息
   * 
   * @param request - UpdateVirtualDatasourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVirtualDatasourceInstanceResponse
   */
  async updateVirtualDatasourceInstanceWithOptions(request: UpdateVirtualDatasourceInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateVirtualDatasourceInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.vdbId)) {
      body["vdbId"] = request.vdbId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateVirtualDatasourceInstance",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/virtualDatasource/updateVirtualDatasourceInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateVirtualDatasourceInstanceResponse>(await this.callApi(params, req, runtime), new UpdateVirtualDatasourceInstanceResponse({}));
  }

  /**
   * 修改指定业务空间下所指定的虚拟数据源的信息
   * 
   * @param request - UpdateVirtualDatasourceInstanceRequest
   * @returns UpdateVirtualDatasourceInstanceResponse
   */
  async updateVirtualDatasourceInstance(request: UpdateVirtualDatasourceInstanceRequest): Promise<UpdateVirtualDatasourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVirtualDatasourceInstanceWithOptions(request, headers, runtime);
  }

}
