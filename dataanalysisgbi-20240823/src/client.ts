// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchDeleteSynonymsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  synonymIdKeys?: string[];
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
      synonymIdKeys: 'synonymIdKeys',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      synonymIdKeys: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteSynonymsResponseBody extends $tea.Model {
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

export class BatchDeleteSynonymsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteSynonymsResponseBody;
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
      body: BatchDeleteSynonymsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateBusinessLogicRequest extends $tea.Model {
  description?: string;
  /**
   * @example
   * 1
   */
  type?: number;
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
      type: 'type',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      type: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBusinessLogicResponseBody extends $tea.Model {
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

export class CreateBusinessLogicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBusinessLogicResponseBody;
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
      body: CreateBusinessLogicResponseBody,
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

export class CreateSynonymsRequest extends $tea.Model {
  columns?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  word?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordSynonyms?: string[];
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
      columns: 'columns',
      word: 'word',
      wordSynonyms: 'wordSynonyms',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      word: 'string',
      wordSynonyms: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSynonymsResponseBody extends $tea.Model {
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

export class CreateSynonymsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSynonymsResponseBody;
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
      body: CreateSynonymsResponseBody,
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
  type?: number;
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
      type: 'type',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'number',
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

export class DeleteBusinessLogicRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  businessLogicIdKeys?: string[];
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
      businessLogicIdKeys: 'businessLogicIdKeys',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessLogicIdKeys: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBusinessLogicResponseBody extends $tea.Model {
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

export class DeleteBusinessLogicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBusinessLogicResponseBody;
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
      body: DeleteBusinessLogicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteColumnRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * column-AAAAAAAAh6Q9ERazKYFvkA
   */
  columnIdKey?: string;
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
      columnIdKey: 'columnIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteColumnResponseBody extends $tea.Model {
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

export class DeleteColumnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteColumnResponseBody;
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
      body: DeleteColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSelectedTableRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSelectedTableResponseBody extends $tea.Model {
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

export class DeleteSelectedTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSelectedTableResponseBody;
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
      body: DeleteSelectedTableResponseBody,
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

export class ListBusinessLogicRequest extends $tea.Model {
  /**
   * @example
   * 10
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

export class ListBusinessLogicResponseBody extends $tea.Model {
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

export class ListBusinessLogicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBusinessLogicResponseBody;
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
      body: ListBusinessLogicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnRequest extends $tea.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * e8Z0nRyY51ZQmYljqGNK
   */
  nextToken?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  tableIdKey?: string;
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
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'number',
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListColumnResponseBody extends $tea.Model {
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

export class ListColumnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListColumnResponseBody;
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
      body: ListColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnumMappingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * column-AAAAAAAAh6cWOUPagYstkg
   */
  columnIdKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      columnIdKey: 'columnIdKey',
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnIdKey: 'string',
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnumMappingResponseBody extends $tea.Model {
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

export class ListEnumMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnumMappingResponseBody;
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
      body: ListEnumMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSelectedTablesRequest extends $tea.Model {
  /**
   * @example
   * 10
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

export class ListSelectedTablesResponseBody extends $tea.Model {
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

export class ListSelectedTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSelectedTablesResponseBody;
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
      body: ListSelectedTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynonymsRequest extends $tea.Model {
  /**
   * @example
   * 10
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

export class ListSynonymsResponseBody extends $tea.Model {
  /**
   * @example
   * NoAuth
   */
  code?: string;
  /**
   * @example
   * {
   *   "data": {
   *     "data": [
   *       {
   *         "gmtModified": 1734401404000,
   *         "columns": [
   *           "test.id",
   *           "user_info.createdt"
   *         ],
   *         "synonymIdKey": "synonyms-AAAAAAAAAVLaD8z63NnFhA",
   *         "wordSynonyms": [
   *           "1"
   *         ],
   *         "workSpaceId": "10024809",
   *         "gmtCreate": 1734401404000,
   *         "word": "1",
   *         "status": 1
   *       }
   *     ],
   *     "nextToken": "k1BLjEN114wyfrhDHoJlbg==",
   *     "totalCount": 0
   *   }
   * }
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

export class ListSynonymsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSynonymsResponseBody;
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
      body: ListSynonymsResponseBody,
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

export class RecoverColumnRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * column-AAAAAAAAh6cWOUPagYstkg
   */
  columnIdKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      columnIdKey: 'columnIdKey',
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnIdKey: 'string',
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverColumnResponseBody extends $tea.Model {
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

export class RecoverColumnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RecoverColumnResponseBody;
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
      body: RecoverColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResyncTableRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResyncTableResponseBody extends $tea.Model {
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

export class ResyncTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResyncTableResponseBody;
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
      body: ResyncTableResponseBody,
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

export class UpdateBusinessLogicRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * businessLogic-AAAAAAAAAGAIyJoP7LbKuA
   */
  businessLogicIdKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
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
      businessLogicIdKey: 'businessLogicIdKey',
      description: 'description',
      type: 'type',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessLogicIdKey: 'string',
      description: 'string',
      type: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBusinessLogicResponseBody extends $tea.Model {
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

export class UpdateBusinessLogicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBusinessLogicResponseBody;
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
      body: UpdateBusinessLogicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateColumnRequest extends $tea.Model {
  chineseName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * column-AAAAAAAAh6cWOUPagYstkg
   */
  columnIdKey?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  enumType?: number;
  enumValues?: string[];
  /**
   * @example
   * 2000
   */
  rangeMax?: number;
  /**
   * @example
   * 0
   */
  rangeMin?: number;
  samples?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      chineseName: 'chineseName',
      columnIdKey: 'columnIdKey',
      description: 'description',
      enumType: 'enumType',
      enumValues: 'enumValues',
      rangeMax: 'rangeMax',
      rangeMin: 'rangeMin',
      samples: 'samples',
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseName: 'string',
      columnIdKey: 'string',
      description: 'string',
      enumType: 'number',
      enumValues: { 'type': 'array', 'itemType': 'string' },
      rangeMax: 'number',
      rangeMin: 'number',
      samples: { 'type': 'array', 'itemType': 'string' },
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateColumnResponseBody extends $tea.Model {
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

export class UpdateColumnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateColumnResponseBody;
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
      body: UpdateColumnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnumMappingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * column-AAAAAAAAh6cWOUPagYstkg
   */
  columnIdKey?: string;
  enumMapping?: { [key: string]: string[] };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      columnIdKey: 'columnIdKey',
      enumMapping: 'enumMapping',
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnIdKey: 'string',
      enumMapping: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnumMappingResponseBody extends $tea.Model {
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

export class UpdateEnumMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEnumMappingResponseBody;
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
      body: UpdateEnumMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsRequest extends $tea.Model {
  columns?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * synonyms-AAAAAAAAAUpwTTVrwTFJwQ
   */
  synonymIdKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  word?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordSynonyms?: string[];
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
      columns: 'columns',
      synonymIdKey: 'synonymIdKey',
      word: 'word',
      wordSynonyms: 'wordSynonyms',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      synonymIdKey: 'string',
      word: 'string',
      wordSynonyms: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsResponseBody extends $tea.Model {
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

export class UpdateSynonymsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSynonymsResponseBody;
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
      body: UpdateSynonymsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableInfoRequest extends $tea.Model {
  description?: string;
  foreignKeys?: string[];
  /**
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table-AAAAAAAAFQBwSLJkUj4CYg
   */
  tableIdKey?: string;
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
      foreignKeys: 'foreignKeys',
      primaryKey: 'primaryKey',
      tableIdKey: 'tableIdKey',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      foreignKeys: { 'type': 'array', 'itemType': 'string' },
      primaryKey: 'string',
      tableIdKey: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableInfoResponseBody extends $tea.Model {
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

export class UpdateTableInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTableInfoResponseBody;
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
      body: UpdateTableInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualDatasourceInstanceRequest extends $tea.Model {
  description?: string;
  name?: string;
  type?: number;
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
      type: 'type',
      vdbId: 'vdbId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'number',
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
   * 批量删除当前指定业务空间下的同义词
   * 
   * @param request - BatchDeleteSynonymsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteSynonymsResponse
   */
  async batchDeleteSynonymsWithOptions(request: BatchDeleteSynonymsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchDeleteSynonymsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.synonymIdKeys)) {
      body["synonymIdKeys"] = request.synonymIdKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteSynonyms",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/batchDelete/synonyms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteSynonymsResponse>(await this.callApi(params, req, runtime), new BatchDeleteSynonymsResponse({}));
  }

  /**
   * 批量删除当前指定业务空间下的同义词
   * 
   * @param request - BatchDeleteSynonymsRequest
   * @returns BatchDeleteSynonymsResponse
   */
  async batchDeleteSynonyms(request: BatchDeleteSynonymsRequest): Promise<BatchDeleteSynonymsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteSynonymsWithOptions(request, headers, runtime);
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
   * 在指定的业务空间下创建新的业务逻辑解释
   * 
   * @param request - CreateBusinessLogicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBusinessLogicResponse
   */
  async createBusinessLogicWithOptions(request: CreateBusinessLogicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateBusinessLogicResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBusinessLogic",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/create/logic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateBusinessLogicResponse>(await this.callApi(params, req, runtime), new CreateBusinessLogicResponse({}));
  }

  /**
   * 在指定的业务空间下创建新的业务逻辑解释
   * 
   * @param request - CreateBusinessLogicRequest
   * @returns CreateBusinessLogicResponse
   */
  async createBusinessLogic(request: CreateBusinessLogicRequest): Promise<CreateBusinessLogicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBusinessLogicWithOptions(request, headers, runtime);
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
   * 在当前指定的业务空间下面，新建同义词
   * 
   * @param request - CreateSynonymsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSynonymsResponse
   */
  async createSynonymsWithOptions(request: CreateSynonymsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSynonymsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columns)) {
      body["columns"] = request.columns;
    }

    if (!Util.isUnset(request.word)) {
      body["word"] = request.word;
    }

    if (!Util.isUnset(request.wordSynonyms)) {
      body["wordSynonyms"] = request.wordSynonyms;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSynonyms",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/create/synonyms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSynonymsResponse>(await this.callApi(params, req, runtime), new CreateSynonymsResponse({}));
  }

  /**
   * 在当前指定的业务空间下面，新建同义词
   * 
   * @param request - CreateSynonymsRequest
   * @returns CreateSynonymsResponse
   */
  async createSynonyms(request: CreateSynonymsRequest): Promise<CreateSynonymsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSynonymsWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
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
   * 删除指定业务空间下所指定的业务逻辑解释
   * 
   * @param request - DeleteBusinessLogicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBusinessLogicResponse
   */
  async deleteBusinessLogicWithOptions(request: DeleteBusinessLogicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBusinessLogicResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessLogicIdKeys)) {
      body["businessLogicIdKeys"] = request.businessLogicIdKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBusinessLogic",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/delete/logic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteBusinessLogicResponse>(await this.callApi(params, req, runtime), new DeleteBusinessLogicResponse({}));
  }

  /**
   * 删除指定业务空间下所指定的业务逻辑解释
   * 
   * @param request - DeleteBusinessLogicRequest
   * @returns DeleteBusinessLogicResponse
   */
  async deleteBusinessLogic(request: DeleteBusinessLogicRequest): Promise<DeleteBusinessLogicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBusinessLogicWithOptions(request, headers, runtime);
  }

  /**
   * 从当前所指定的业务空间中，删除所指定的列
   * 
   * @param request - DeleteColumnRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteColumnResponse
   */
  async deleteColumnWithOptions(request: DeleteColumnRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteColumnResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columnIdKey)) {
      body["columnIdKey"] = request.columnIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteColumn",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/delete/column`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteColumnResponse>(await this.callApi(params, req, runtime), new DeleteColumnResponse({}));
  }

  /**
   * 从当前所指定的业务空间中，删除所指定的列
   * 
   * @param request - DeleteColumnRequest
   * @returns DeleteColumnResponse
   */
  async deleteColumn(request: DeleteColumnRequest): Promise<DeleteColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteColumnWithOptions(request, headers, runtime);
  }

  /**
   * 将当前指定数据表从指定业务空间管控中删除
   * 
   * @param request - DeleteSelectedTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSelectedTableResponse
   */
  async deleteSelectedTableWithOptions(request: DeleteSelectedTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSelectedTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSelectedTable",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/delete/table`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSelectedTableResponse>(await this.callApi(params, req, runtime), new DeleteSelectedTableResponse({}));
  }

  /**
   * 将当前指定数据表从指定业务空间管控中删除
   * 
   * @param request - DeleteSelectedTableRequest
   * @returns DeleteSelectedTableResponse
   */
  async deleteSelectedTable(request: DeleteSelectedTableRequest): Promise<DeleteSelectedTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSelectedTableWithOptions(request, headers, runtime);
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
   * 获取当前指定业务空间下的企业知识名词解释列表
   * 
   * @param request - ListBusinessLogicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBusinessLogicResponse
   */
  async listBusinessLogicWithOptions(request: ListBusinessLogicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListBusinessLogicResponse> {
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
      action: "ListBusinessLogic",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/list/logic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBusinessLogicResponse>(await this.callApi(params, req, runtime), new ListBusinessLogicResponse({}));
  }

  /**
   * 获取当前指定业务空间下的企业知识名词解释列表
   * 
   * @param request - ListBusinessLogicRequest
   * @returns ListBusinessLogicResponse
   */
  async listBusinessLogic(request: ListBusinessLogicRequest): Promise<ListBusinessLogicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBusinessLogicWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前指定业务空间，指定表下面的列信息
   * 
   * @param request - ListColumnRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListColumnResponse
   */
  async listColumnWithOptions(request: ListColumnRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListColumnResponse> {
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

    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListColumn",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/list/column`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListColumnResponse>(await this.callApi(params, req, runtime), new ListColumnResponse({}));
  }

  /**
   * 获取当前指定业务空间，指定表下面的列信息
   * 
   * @param request - ListColumnRequest
   * @returns ListColumnResponse
   */
  async listColumn(request: ListColumnRequest): Promise<ListColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listColumnWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前业务空间，指定表、列下的枚举值
   * 
   * @param request - ListEnumMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnumMappingResponse
   */
  async listEnumMappingWithOptions(request: ListEnumMappingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEnumMappingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columnIdKey)) {
      body["columnIdKey"] = request.columnIdKey;
    }

    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListEnumMapping",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/list/mapping`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEnumMappingResponse>(await this.callApi(params, req, runtime), new ListEnumMappingResponse({}));
  }

  /**
   * 获取当前业务空间，指定表、列下的枚举值
   * 
   * @param request - ListEnumMappingRequest
   * @returns ListEnumMappingResponse
   */
  async listEnumMapping(request: ListEnumMappingRequest): Promise<ListEnumMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnumMappingWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前业务空间处于以关联状态的数据表
   * 
   * @param request - ListSelectedTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectedTablesResponse
   */
  async listSelectedTablesWithOptions(request: ListSelectedTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSelectedTablesResponse> {
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
      action: "ListSelectedTables",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/list/datasource/table`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSelectedTablesResponse>(await this.callApi(params, req, runtime), new ListSelectedTablesResponse({}));
  }

  /**
   * 获取当前业务空间处于以关联状态的数据表
   * 
   * @param request - ListSelectedTablesRequest
   * @returns ListSelectedTablesResponse
   */
  async listSelectedTables(request: ListSelectedTablesRequest): Promise<ListSelectedTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectedTablesWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前指定业务空间下的同义词列表
   * 
   * @param request - ListSynonymsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSynonymsResponse
   */
  async listSynonymsWithOptions(request: ListSynonymsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSynonymsResponse> {
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
      action: "ListSynonyms",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/list/synonyms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSynonymsResponse>(await this.callApi(params, req, runtime), new ListSynonymsResponse({}));
  }

  /**
   * 获取当前指定业务空间下的同义词列表
   * 
   * @param request - ListSynonymsRequest
   * @returns ListSynonymsResponse
   */
  async listSynonyms(request: ListSynonymsRequest): Promise<ListSynonymsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSynonymsWithOptions(request, headers, runtime);
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
   * 将指定数据表的数据列恢复到初始话状态
   * 
   * @param request - RecoverColumnRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverColumnResponse
   */
  async recoverColumnWithOptions(request: RecoverColumnRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecoverColumnResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columnIdKey)) {
      body["columnIdKey"] = request.columnIdKey;
    }

    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RecoverColumn",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/recover/column`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RecoverColumnResponse>(await this.callApi(params, req, runtime), new RecoverColumnResponse({}));
  }

  /**
   * 将指定数据表的数据列恢复到初始话状态
   * 
   * @param request - RecoverColumnRequest
   * @returns RecoverColumnResponse
   */
  async recoverColumn(request: RecoverColumnRequest): Promise<RecoverColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverColumnWithOptions(request, headers, runtime);
  }

  /**
   * 从远程数据库刷新当前所关联的数据表信息
   * 
   * @param request - ResyncTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResyncTableResponse
   */
  async resyncTableWithOptions(request: ResyncTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResyncTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResyncTable",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/refresh/table`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResyncTableResponse>(await this.callApi(params, req, runtime), new ResyncTableResponse({}));
  }

  /**
   * 从远程数据库刷新当前所关联的数据表信息
   * 
   * @param request - ResyncTableRequest
   * @returns ResyncTableResponse
   */
  async resyncTable(request: ResyncTableRequest): Promise<ResyncTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resyncTableWithOptions(request, headers, runtime);
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
   * 修改当前指定业务空间下所指定的业务逻辑解释
   * 
   * @param request - UpdateBusinessLogicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBusinessLogicResponse
   */
  async updateBusinessLogicWithOptions(request: UpdateBusinessLogicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateBusinessLogicResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessLogicIdKey)) {
      body["businessLogicIdKey"] = request.businessLogicIdKey;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBusinessLogic",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/update/logic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateBusinessLogicResponse>(await this.callApi(params, req, runtime), new UpdateBusinessLogicResponse({}));
  }

  /**
   * 修改当前指定业务空间下所指定的业务逻辑解释
   * 
   * @param request - UpdateBusinessLogicRequest
   * @returns UpdateBusinessLogicResponse
   */
  async updateBusinessLogic(request: UpdateBusinessLogicRequest): Promise<UpdateBusinessLogicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBusinessLogicWithOptions(request, headers, runtime);
  }

  /**
   * 修改当前指定业务空间中，指定列的信息
   * 
   * @param request - UpdateColumnRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateColumnResponse
   */
  async updateColumnWithOptions(request: UpdateColumnRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateColumnResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chineseName)) {
      body["chineseName"] = request.chineseName;
    }

    if (!Util.isUnset(request.columnIdKey)) {
      body["columnIdKey"] = request.columnIdKey;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.enumType)) {
      body["enumType"] = request.enumType;
    }

    if (!Util.isUnset(request.enumValues)) {
      body["enumValues"] = request.enumValues;
    }

    if (!Util.isUnset(request.rangeMax)) {
      body["rangeMax"] = request.rangeMax;
    }

    if (!Util.isUnset(request.rangeMin)) {
      body["rangeMin"] = request.rangeMin;
    }

    if (!Util.isUnset(request.samples)) {
      body["samples"] = request.samples;
    }

    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateColumn",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/update/column`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateColumnResponse>(await this.callApi(params, req, runtime), new UpdateColumnResponse({}));
  }

  /**
   * 修改当前指定业务空间中，指定列的信息
   * 
   * @param request - UpdateColumnRequest
   * @returns UpdateColumnResponse
   */
  async updateColumn(request: UpdateColumnRequest): Promise<UpdateColumnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateColumnWithOptions(request, headers, runtime);
  }

  /**
   * 修改当前指定业务空间指定列下的枚举值信息
   * 
   * @param request - UpdateEnumMappingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnumMappingResponse
   */
  async updateEnumMappingWithOptions(request: UpdateEnumMappingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateEnumMappingResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columnIdKey)) {
      body["columnIdKey"] = request.columnIdKey;
    }

    if (!Util.isUnset(request.enumMapping)) {
      body["enumMapping"] = request.enumMapping;
    }

    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnumMapping",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/update/mapping`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnumMappingResponse>(await this.callApi(params, req, runtime), new UpdateEnumMappingResponse({}));
  }

  /**
   * 修改当前指定业务空间指定列下的枚举值信息
   * 
   * @param request - UpdateEnumMappingRequest
   * @returns UpdateEnumMappingResponse
   */
  async updateEnumMapping(request: UpdateEnumMappingRequest): Promise<UpdateEnumMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnumMappingWithOptions(request, headers, runtime);
  }

  /**
   * 修改当前业务空间指定的同义词信息
   * 
   * @param request - UpdateSynonymsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSynonymsResponse
   */
  async updateSynonymsWithOptions(request: UpdateSynonymsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSynonymsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.columns)) {
      body["columns"] = request.columns;
    }

    if (!Util.isUnset(request.synonymIdKey)) {
      body["synonymIdKey"] = request.synonymIdKey;
    }

    if (!Util.isUnset(request.word)) {
      body["word"] = request.word;
    }

    if (!Util.isUnset(request.wordSynonyms)) {
      body["wordSynonyms"] = request.wordSynonyms;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSynonyms",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/update/synonyms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateSynonymsResponse>(await this.callApi(params, req, runtime), new UpdateSynonymsResponse({}));
  }

  /**
   * 修改当前业务空间指定的同义词信息
   * 
   * @param request - UpdateSynonymsRequest
   * @returns UpdateSynonymsResponse
   */
  async updateSynonyms(request: UpdateSynonymsRequest): Promise<UpdateSynonymsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSynonymsWithOptions(request, headers, runtime);
  }

  /**
   * 修改当前所指定的数据表的信息
   * 
   * @param request - UpdateTableInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableInfoResponse
   */
  async updateTableInfoWithOptions(request: UpdateTableInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTableInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.foreignKeys)) {
      body["foreignKeys"] = request.foreignKeys;
    }

    if (!Util.isUnset(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!Util.isUnset(request.tableIdKey)) {
      body["tableIdKey"] = request.tableIdKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableInfo",
      version: "2024-08-23",
      protocol: "HTTPS",
      pathname: `/gbi/update/table`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableInfoResponse>(await this.callApi(params, req, runtime), new UpdateTableInfoResponse({}));
  }

  /**
   * 修改当前所指定的数据表的信息
   * 
   * @param request - UpdateTableInfoRequest
   * @returns UpdateTableInfoResponse
   */
  async updateTableInfo(request: UpdateTableInfoRequest): Promise<UpdateTableInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableInfoWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
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
