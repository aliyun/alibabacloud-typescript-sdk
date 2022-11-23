// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateConnectorRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectorResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateConnectorResponseBody;
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
      body: CreateConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDeploymentResponseBody;
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
      body: CreateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFormatRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFormatResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFormatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFormatResponseBody;
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
      body: CreateFormatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMemberResponseBody;
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
      body: CreateMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSavepointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSavepointResponseBody;
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
      body: CreateSavepointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretValueRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretValueResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecretValueResponseBody;
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
      body: CreateSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUdfArtifactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUdfArtifactResponseBody;
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
      body: CreateUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseExistsRequest extends $tea.Model {
  database?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseExistsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DatabaseExistsResponseBody;
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
      body: DatabaseExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactRequest extends $tea.Model {
  filename?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'filename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteArtifactResponseBody;
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
      body: DeleteArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectorResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteConnectorResponseBody;
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
      body: DeleteConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDeploymentResponseBody;
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
      body: DeleteDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFormatResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFormatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFormatResponseBody;
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
      body: DeleteFormatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMemberResponseBody;
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
      body: DeleteMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretValueResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecretValueResponseBody;
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
      body: DeleteSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUdfArtifactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUdfArtifactResponseBody;
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
      body: DeleteUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlScriptRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlScriptResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExecuteSqlScriptResponseBody;
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
      body: ExecuteSqlScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlscriptsStatementsRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlscriptsStatementsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteSqlscriptsStatementsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExecuteSqlscriptsStatementsResponseBody;
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
      body: ExecuteSqlscriptsStatementsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForcefullyCreateLockRequest extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForcefullyCreateLockResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForcefullyCreateLockResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ForcefullyCreateLockResponseBody;
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
      body: ForcefullyCreateLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionExistsRequest extends $tea.Model {
  database?: string;
  function?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      function: 'function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      function: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionExistsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FunctionExistsResponseBody;
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
      body: FunctionExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourcePlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateResourcePlanResponseBody;
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
      body: GenerateResourcePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactMetadataRequest extends $tea.Model {
  filename?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'filename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactMetadataResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetArtifactMetadataResponseBody;
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
      body: GetArtifactMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCatalogResponseBody;
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
      body: GetCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseRequest extends $tea.Model {
  database?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDatabaseResponseBody;
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
      body: GetDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDatabaseResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDefaultDatabaseResponseBody;
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
      body: GetDefaultDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeploymentResponseBody;
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
      body: GetDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDefaultsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentDefaultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDeploymentDefaultsResponseBody;
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
      body: GetDeploymentDefaultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  database?: string;
  function?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      function: 'function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      function: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFunctionResponseBody;
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
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalDeploymentDefaultsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalDeploymentDefaultsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGlobalDeploymentDefaultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGlobalDeploymentDefaultsResponseBody;
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
      body: GetGlobalDeploymentDefaultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePlanResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourcePlanResponseBody;
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
      body: GetResourcePlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableRequest extends $tea.Model {
  database?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableResponseBody;
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
      body: GetTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactRequest extends $tea.Model {
  requireFunctionNames?: boolean;
  static names(): { [key: string]: string } {
    return {
      requireFunctionNames: 'requireFunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requireFunctionNames: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfArtifactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUdfArtifactResponseBody;
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
      body: GetUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListArtifactsResponseBody;
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
      body: ListArtifactsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCatalogsResponseBody;
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
      body: ListCatalogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListConnectorsResponseBody;
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
      body: ListConnectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDatabasesResponseBody;
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
      body: ListDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeploymentTargetsResponseBody;
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
      body: ListDeploymentTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsRequest extends $tea.Model {
  batchMode?: boolean;
  creator?: string;
  deploymentId?: string;
  modifier?: string;
  name?: string;
  pageIndex?: string;
  pageSize?: string;
  priority?: string;
  sortName?: string;
  sortOrder?: string;
  state?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      batchMode: 'batchMode',
      creator: 'creator',
      deploymentId: 'deploymentId',
      modifier: 'modifier',
      name: 'name',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      priority: 'priority',
      sortName: 'sortName',
      sortOrder: 'sortOrder',
      state: 'state',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchMode: 'boolean',
      creator: 'string',
      deploymentId: 'string',
      modifier: 'string',
      name: 'string',
      pageIndex: 'string',
      pageSize: 'string',
      priority: 'string',
      sortName: 'string',
      sortOrder: 'string',
      state: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDeploymentsResponseBody;
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
      body: ListDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlinkVersionsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlinkVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFlinkVersionsResponseBody;
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
      body: ListFlinkVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFormatsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFormatsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFormatsResponseBody;
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
      body: ListFormatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  database?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFunctionsResponseBody;
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
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  deploymentId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobsResponseBody;
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
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListNamespacesResponseBody;
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
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsRequest extends $tea.Model {
  deploymentId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      jobId: 'jobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSavepointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSavepointsResponseBody;
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
      body: ListSavepointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretValuesResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecretValuesResponseBody;
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
      body: ListSecretValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSessionClustersResponseBody;
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
      body: ListSessionClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $tea.Model {
  database?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTablesResponseBody;
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
      body: ListTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseConnectorRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseConnectorResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ParseConnectorResponseBody;
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
      body: ParseConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFormatRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFormatResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ParseFormatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ParseFormatResponseBody;
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
      body: ParseFormatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDeploymentRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDeploymentResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReplaceDeploymentResponseBody;
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
      body: ReplaceDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeploymentResourceModeRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeploymentResourceModeResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeploymentResourceModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDeploymentResourceModeResponseBody;
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
      body: SetDeploymentResourceModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExistsRequest extends $tea.Model {
  database?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExistsResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TableExistsResponseBody;
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
      body: TableExistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectorRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectorResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateConnectorResponseBody;
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
      body: UpdateConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentResponseBody extends $tea.Model {
  data?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDeploymentResponseBody;
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
      body: UpdateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDesiredStateRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDesiredStateResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeploymentDesiredStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDeploymentDesiredStateResponseBody;
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
      body: UpdateDeploymentDesiredStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFormatRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFormatResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFormatResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFormatResponseBody;
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
      body: UpdateFormatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMemberResponseBody;
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
      body: UpdateMemberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfArtifactResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUdfArtifactResponseBody;
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
      body: UpdateUdfArtifactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlScriptRequest extends $tea.Model {
  paramsJson?: string;
  static names(): { [key: string]: string } {
    return {
      paramsJson: 'paramsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlScriptResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSqlScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateSqlScriptResponseBody;
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
      body: ValidateSqlScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ververica", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createConnector(workspace: string, namespace: string, request: CreateConnectorRequest): Promise<CreateConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConnectorWithOptions(workspace, namespace, request, headers, runtime);
  }

  async createConnectorWithOptions(workspace: string, namespace: string, request: CreateConnectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConnectorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConnector",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConnectorResponse>(await this.callApi(params, req, runtime), new CreateConnectorResponse({}));
  }

  async createDeployment(namespace: string, workspace: string, request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDeploymentWithOptions(namespace, workspace, request, headers, runtime);
  }

  async createDeploymentWithOptions(namespace: string, workspace: string, request: CreateDeploymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeployment",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentResponse>(await this.callApi(params, req, runtime), new CreateDeploymentResponse({}));
  }

  async createFormat(workspace: string, namespace: string, request: CreateFormatRequest): Promise<CreateFormatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFormatWithOptions(workspace, namespace, request, headers, runtime);
  }

  async createFormatWithOptions(workspace: string, namespace: string, request: CreateFormatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFormatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFormat",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/formats`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFormatResponse>(await this.callApi(params, req, runtime), new CreateFormatResponse({}));
  }

  async createMember(workspace: string, namespace: string, request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemberWithOptions(workspace, namespace, request, headers, runtime);
  }

  async createMemberWithOptions(workspace: string, namespace: string, request: CreateMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMember",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/members/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
  }

  async createSavepoint(namespace: string, workspace: string, request: CreateSavepointRequest): Promise<CreateSavepointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateSavepointHeaders({ });
    return await this.createSavepointWithOptions(namespace, workspace, request, headers, runtime);
  }

  async createSavepointWithOptions(namespace: string, workspace: string, request: CreateSavepointRequest, headers: CreateSavepointHeaders, runtime: $Util.RuntimeOptions): Promise<CreateSavepointResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.regionId)) {
      realHeaders["RegionId"] = Util.toJSONString(headers.regionId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSavepoint",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/savepoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSavepointResponse>(await this.callApi(params, req, runtime), new CreateSavepointResponse({}));
  }

  async createSecretValue(workspace: string, namespace: string, request: CreateSecretValueRequest): Promise<CreateSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecretValueWithOptions(workspace, namespace, request, headers, runtime);
  }

  async createSecretValueWithOptions(workspace: string, namespace: string, request: CreateSecretValueRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSecretValueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecretValue",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/secret-values`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecretValueResponse>(await this.callApi(params, req, runtime), new CreateSecretValueResponse({}));
  }

  async createUdfArtifact(workspace: string, namespace: string, request: CreateUdfArtifactRequest): Promise<CreateUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUdfArtifactWithOptions(workspace, namespace, request, headers, runtime);
  }

  async createUdfArtifactWithOptions(workspace: string, namespace: string, request: CreateUdfArtifactRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateUdfArtifactResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUdfArtifact",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUdfArtifactResponse>(await this.callApi(params, req, runtime), new CreateUdfArtifactResponse({}));
  }

  async databaseExists(namespace: string, workspace: string, cat: string, request: DatabaseExistsRequest): Promise<DatabaseExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.databaseExistsWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async databaseExistsWithOptions(namespace: string, workspace: string, cat: string, request: DatabaseExistsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DatabaseExistsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DatabaseExists",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AdatabaseExists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DatabaseExistsResponse>(await this.callApi(params, req, runtime), new DatabaseExistsResponse({}));
  }

  async deleteArtifact(namespace: string, workspace: string, request: DeleteArtifactRequest): Promise<DeleteArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteArtifactWithOptions(namespace, workspace, request, headers, runtime);
  }

  async deleteArtifactWithOptions(namespace: string, workspace: string, request: DeleteArtifactRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteArtifactResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filename)) {
      query["filename"] = request.filename;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteArtifact",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/artifacts/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/artifacts%3Adelete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteArtifactResponse>(await this.callApi(params, req, runtime), new DeleteArtifactResponse({}));
  }

  async deleteConnector(workspace: string, name: string, namespace: string): Promise<DeleteConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectorWithOptions(workspace, name, namespace, headers, runtime);
  }

  async deleteConnectorWithOptions(workspace: string, name: string, namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConnectorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteConnector",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConnectorResponse>(await this.callApi(params, req, runtime), new DeleteConnectorResponse({}));
  }

  async deleteDeployment(namespace: string, deploymentId: string, workspace: string): Promise<DeleteDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeploymentWithOptions(namespace, deploymentId, workspace, headers, runtime);
  }

  async deleteDeploymentWithOptions(namespace: string, deploymentId: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDeploymentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteDeployment",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDeploymentResponse>(await this.callApi(params, req, runtime), new DeleteDeploymentResponse({}));
  }

  async deleteFormat(workspace: string, name: string, namespace: string): Promise<DeleteFormatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFormatWithOptions(workspace, name, namespace, headers, runtime);
  }

  async deleteFormatWithOptions(workspace: string, name: string, namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFormatResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFormat",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/formats/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFormatResponse>(await this.callApi(params, req, runtime), new DeleteFormatResponse({}));
  }

  async deleteMember(workspace: string, namespace: string, member: string): Promise<DeleteMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemberWithOptions(workspace, namespace, member, headers, runtime);
  }

  async deleteMemberWithOptions(workspace: string, namespace: string, member: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteMemberResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteMember",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/members/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/members/${OpenApiUtil.getEncodeParam(member)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteMemberResponse>(await this.callApi(params, req, runtime), new DeleteMemberResponse({}));
  }

  async deleteSecretValue(namespace: string, workspace: string, name: string): Promise<DeleteSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSecretValueWithOptions(namespace, workspace, name, headers, runtime);
  }

  async deleteSecretValueWithOptions(namespace: string, workspace: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSecretValueResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretValue",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/secret-values/${OpenApiUtil.getEncodeParam(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretValueResponse>(await this.callApi(params, req, runtime), new DeleteSecretValueResponse({}));
  }

  async deleteUdfArtifact(workspace: string, namespace: string, udfArtifactName: string): Promise<DeleteUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUdfArtifactWithOptions(workspace, namespace, udfArtifactName, headers, runtime);
  }

  async deleteUdfArtifactWithOptions(workspace: string, namespace: string, udfArtifactName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteUdfArtifactResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteUdfArtifact",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/${OpenApiUtil.getEncodeParam(udfArtifactName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteUdfArtifactResponse>(await this.callApi(params, req, runtime), new DeleteUdfArtifactResponse({}));
  }

  async executeSqlScript(namespace: string, workspace: string, request: ExecuteSqlScriptRequest): Promise<ExecuteSqlScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSqlScriptWithOptions(namespace, workspace, request, headers, runtime);
  }

  async executeSqlScriptWithOptions(namespace: string, workspace: string, request: ExecuteSqlScriptRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteSqlScriptResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteSqlScript",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/sqlscripts%3Aexecute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSqlScriptResponse>(await this.callApi(params, req, runtime), new ExecuteSqlScriptResponse({}));
  }

  async executeSqlscriptsStatements(workspace: string, namespace: string, request: ExecuteSqlscriptsStatementsRequest): Promise<ExecuteSqlscriptsStatementsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSqlscriptsStatementsWithOptions(workspace, namespace, request, headers, runtime);
  }

  async executeSqlscriptsStatementsWithOptions(workspace: string, namespace: string, request: ExecuteSqlscriptsStatementsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteSqlscriptsStatementsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteSqlscriptsStatements",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/sqlscripts%3Aexecute-multi`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteSqlscriptsStatementsResponse>(await this.callApi(params, req, runtime), new ExecuteSqlscriptsStatementsResponse({}));
  }

  async forcefullyCreateLock(namespace: string, workspace: string, request: ForcefullyCreateLockRequest): Promise<ForcefullyCreateLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.forcefullyCreateLockWithOptions(namespace, workspace, request, headers, runtime);
  }

  async forcefullyCreateLockWithOptions(namespace: string, workspace: string, request: ForcefullyCreateLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ForcefullyCreateLockResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ForcefullyCreateLock",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/locks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ForcefullyCreateLockResponse>(await this.callApi(params, req, runtime), new ForcefullyCreateLockResponse({}));
  }

  async functionExists(namespace: string, workspace: string, cat: string, request: FunctionExistsRequest): Promise<FunctionExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.functionExistsWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async functionExistsWithOptions(namespace: string, workspace: string, cat: string, request: FunctionExistsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FunctionExistsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    if (!Util.isUnset(request.function)) {
      query["function"] = request.function;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FunctionExists",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AfunctionExists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FunctionExistsResponse>(await this.callApi(params, req, runtime), new FunctionExistsResponse({}));
  }

  async generateResourcePlan(workspace: string, namespace: string, deploymentId: string): Promise<GenerateResourcePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateResourcePlanWithOptions(workspace, namespace, deploymentId, headers, runtime);
  }

  async generateResourcePlanWithOptions(workspace: string, namespace: string, deploymentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateResourcePlanResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GenerateResourcePlan",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/resource_plan%3Agenerate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateResourcePlanResponse>(await this.callApi(params, req, runtime), new GenerateResourcePlanResponse({}));
  }

  async getArtifactMetadata(namespace: string, workspace: string, request: GetArtifactMetadataRequest): Promise<GetArtifactMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getArtifactMetadataWithOptions(namespace, workspace, request, headers, runtime);
  }

  async getArtifactMetadataWithOptions(namespace: string, workspace: string, request: GetArtifactMetadataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetArtifactMetadataResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filename)) {
      query["filename"] = request.filename;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetArtifactMetadata",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/artifacts/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/artifacts%3AgetMetadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetArtifactMetadataResponse>(await this.callApi(params, req, runtime), new GetArtifactMetadataResponse({}));
  }

  async getCatalog(namespace: string, workspace: string, cat: string): Promise<GetCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogWithOptions(namespace, workspace, cat, headers, runtime);
  }

  async getCatalogWithOptions(namespace: string, workspace: string, cat: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCatalogResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCatalog",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AgetCatalog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCatalogResponse>(await this.callApi(params, req, runtime), new GetCatalogResponse({}));
  }

  async getDatabase(namespace: string, workspace: string, cat: string, request: GetDatabaseRequest): Promise<GetDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async getDatabaseWithOptions(namespace: string, workspace: string, cat: string, request: GetDatabaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatabaseResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDatabase",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AgetDatabase`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatabaseResponse>(await this.callApi(params, req, runtime), new GetDatabaseResponse({}));
  }

  async getDefaultDatabase(namespace: string, workspace: string, cat: string): Promise<GetDefaultDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultDatabaseWithOptions(namespace, workspace, cat, headers, runtime);
  }

  async getDefaultDatabaseWithOptions(namespace: string, workspace: string, cat: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDefaultDatabaseResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDefaultDatabase",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AgetDefaultDatabase`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDefaultDatabaseResponse>(await this.callApi(params, req, runtime), new GetDefaultDatabaseResponse({}));
  }

  async getDeployment(namespace: string, deploymentId: string, workspace: string): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeploymentWithOptions(namespace, deploymentId, workspace, headers, runtime);
  }

  async getDeploymentWithOptions(namespace: string, deploymentId: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDeployment",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
  }

  async getDeploymentDefaults(namespace: string, workspace: string): Promise<GetDeploymentDefaultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeploymentDefaultsWithOptions(namespace, workspace, headers, runtime);
  }

  async getDeploymentDefaultsWithOptions(namespace: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDeploymentDefaultsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetDeploymentDefaults",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-defaults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentDefaultsResponse>(await this.callApi(params, req, runtime), new GetDeploymentDefaultsResponse({}));
  }

  async getFunction(namespace: string, workspace: string, cat: string, request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async getFunctionWithOptions(namespace: string, workspace: string, cat: string, request: GetFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    if (!Util.isUnset(request.function)) {
      query["function"] = request.function;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AgetFunction`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  async getGlobalDeploymentDefaults(workspace: string): Promise<GetGlobalDeploymentDefaultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetGlobalDeploymentDefaultsHeaders({ });
    return await this.getGlobalDeploymentDefaultsWithOptions(workspace, headers, runtime);
  }

  async getGlobalDeploymentDefaultsWithOptions(workspace: string, headers: GetGlobalDeploymentDefaultsHeaders, runtime: $Util.RuntimeOptions): Promise<GetGlobalDeploymentDefaultsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.namespace)) {
      realHeaders["namespace"] = Util.toJSONString(headers.namespace);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetGlobalDeploymentDefaults",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/global-deployment-defaults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGlobalDeploymentDefaultsResponse>(await this.callApi(params, req, runtime), new GetGlobalDeploymentDefaultsResponse({}));
  }

  async getResourcePlan(workspace: string, namespace: string, deploymentId: string): Promise<GetResourcePlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourcePlanWithOptions(workspace, namespace, deploymentId, headers, runtime);
  }

  async getResourcePlanWithOptions(workspace: string, namespace: string, deploymentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourcePlanResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetResourcePlan",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/resource_plan`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourcePlanResponse>(await this.callApi(params, req, runtime), new GetResourcePlanResponse({}));
  }

  async getTable(namespace: string, workspace: string, cat: string, request: GetTableRequest): Promise<GetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async getTableWithOptions(namespace: string, workspace: string, cat: string, request: GetTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    if (!Util.isUnset(request.table)) {
      query["table"] = request.table;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTable",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AgetTable`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableResponse>(await this.callApi(params, req, runtime), new GetTableResponse({}));
  }

  async getUdfArtifact(workspace: string, namespace: string, udfArtifactName: string, request: GetUdfArtifactRequest): Promise<GetUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUdfArtifactWithOptions(workspace, namespace, udfArtifactName, request, headers, runtime);
  }

  async getUdfArtifactWithOptions(workspace: string, namespace: string, udfArtifactName: string, request: GetUdfArtifactRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUdfArtifactResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.requireFunctionNames)) {
      query["requireFunctionNames"] = request.requireFunctionNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUdfArtifact",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/${OpenApiUtil.getEncodeParam(udfArtifactName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUdfArtifactResponse>(await this.callApi(params, req, runtime), new GetUdfArtifactResponse({}));
  }

  async listArtifacts(namespace: string, workspace: string): Promise<ListArtifactsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listArtifactsWithOptions(namespace, workspace, headers, runtime);
  }

  async listArtifactsWithOptions(namespace: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListArtifactsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListArtifacts",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/artifacts/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/artifacts%3Alist`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListArtifactsResponse>(await this.callApi(params, req, runtime), new ListArtifactsResponse({}));
  }

  async listCatalogs(namespace: string, workspace: string): Promise<ListCatalogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCatalogsWithOptions(namespace, workspace, headers, runtime);
  }

  async listCatalogsWithOptions(namespace: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCatalogsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListCatalogs",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCatalogsResponse>(await this.callApi(params, req, runtime), new ListCatalogsResponse({}));
  }

  async listConnectors(workspace: string, namespace: string): Promise<ListConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectorsWithOptions(workspace, namespace, headers, runtime);
  }

  async listConnectorsWithOptions(workspace: string, namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConnectorsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListConnectors",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConnectorsResponse>(await this.callApi(params, req, runtime), new ListConnectorsResponse({}));
  }

  async listDatabases(namespace: string, workspace: string, cat: string): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(namespace, workspace, cat, headers, runtime);
  }

  async listDatabasesWithOptions(namespace: string, workspace: string, cat: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatabasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDatabases",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AlistDatabases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatabasesResponse>(await this.callApi(params, req, runtime), new ListDatabasesResponse({}));
  }

  async listDeploymentTargets(namespace: string, workspace: string): Promise<ListDeploymentTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeploymentTargetsWithOptions(namespace, workspace, headers, runtime);
  }

  async listDeploymentTargetsWithOptions(namespace: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeploymentTargetsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDeploymentTargets",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployment-targets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentTargetsResponse>(await this.callApi(params, req, runtime), new ListDeploymentTargetsResponse({}));
  }

  async listDeployments(namespace: string, workspace: string, request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeploymentsWithOptions(namespace, workspace, request, headers, runtime);
  }

  async listDeploymentsWithOptions(namespace: string, workspace: string, request: ListDeploymentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeploymentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.batchMode)) {
      query["batchMode"] = request.batchMode;
    }

    if (!Util.isUnset(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!Util.isUnset(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.modifier)) {
      query["modifier"] = request.modifier;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.priority)) {
      query["priority"] = request.priority;
    }

    if (!Util.isUnset(request.sortName)) {
      query["sortName"] = request.sortName;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["sortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.state)) {
      query["state"] = request.state;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployments",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
  }

  async listFlinkVersions(workspace: string): Promise<ListFlinkVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFlinkVersionsWithOptions(workspace, headers, runtime);
  }

  async listFlinkVersionsWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFlinkVersionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListFlinkVersions",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/flink-version-meta.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFlinkVersionsResponse>(await this.callApi(params, req, runtime), new ListFlinkVersionsResponse({}));
  }

  async listFormats(workspace: string, namespace: string): Promise<ListFormatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFormatsWithOptions(workspace, namespace, headers, runtime);
  }

  async listFormatsWithOptions(workspace: string, namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFormatsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListFormats",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/formats`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFormatsResponse>(await this.callApi(params, req, runtime), new ListFormatsResponse({}));
  }

  async listFunctions(namespace: string, workspace: string, cat: string, request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async listFunctionsWithOptions(namespace: string, workspace: string, cat: string, request: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AlistFunctions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  async listJobs(namespace: string, workspace: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(namespace, workspace, request, headers, runtime);
  }

  async listJobsWithOptions(namespace: string, workspace: string, request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  async listNamespaces(): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespacesWithOptions(headers, runtime);
  }

  async listNamespacesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListNamespaces",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/namespaces/v1/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNamespacesResponse>(await this.callApi(params, req, runtime), new ListNamespacesResponse({}));
  }

  async listSavepoints(namespace: string, workspace: string, request: ListSavepointsRequest): Promise<ListSavepointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSavepointsWithOptions(namespace, workspace, request, headers, runtime);
  }

  async listSavepointsWithOptions(namespace: string, workspace: string, request: ListSavepointsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSavepointsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSavepoints",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/savepoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSavepointsResponse>(await this.callApi(params, req, runtime), new ListSavepointsResponse({}));
  }

  async listSecretValues(namespace: string, workspace: string): Promise<ListSecretValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecretValuesWithOptions(namespace, workspace, headers, runtime);
  }

  async listSecretValuesWithOptions(namespace: string, workspace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSecretValuesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSecretValues",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/secret-values`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSecretValuesResponse>(await this.callApi(params, req, runtime), new ListSecretValuesResponse({}));
  }

  async listSessionClusters(workspace: string, namespace: string): Promise<ListSessionClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionClustersWithOptions(workspace, namespace, headers, runtime);
  }

  async listSessionClustersWithOptions(workspace: string, namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSessionClustersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListSessionClusters",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/sessionclusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSessionClustersResponse>(await this.callApi(params, req, runtime), new ListSessionClustersResponse({}));
  }

  async listTables(workspace: string, namespace: string, cat: string, request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(workspace, namespace, cat, request, headers, runtime);
  }

  async listTablesWithOptions(workspace: string, namespace: string, cat: string, request: ListTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTables",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AlistTables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
  }

  async parseConnector(workspace: string, namespace: string, request: ParseConnectorRequest): Promise<ParseConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.parseConnectorWithOptions(workspace, namespace, request, headers, runtime);
  }

  async parseConnectorWithOptions(workspace: string, namespace: string, request: ParseConnectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ParseConnectorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ParseConnector",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors%3Aanalyze-jars`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ParseConnectorResponse>(await this.callApi(params, req, runtime), new ParseConnectorResponse({}));
  }

  async parseFormat(workspace: string, namespace: string, request: ParseFormatRequest): Promise<ParseFormatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.parseFormatWithOptions(workspace, namespace, request, headers, runtime);
  }

  async parseFormatWithOptions(workspace: string, namespace: string, request: ParseFormatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ParseFormatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ParseFormat",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/formats%3Aanalyze-jars`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ParseFormatResponse>(await this.callApi(params, req, runtime), new ParseFormatResponse({}));
  }

  async replaceDeployment(namespace: string, deploymentId: string, workspace: string, request: ReplaceDeploymentRequest): Promise<ReplaceDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.replaceDeploymentWithOptions(namespace, deploymentId, workspace, request, headers, runtime);
  }

  async replaceDeploymentWithOptions(namespace: string, deploymentId: string, workspace: string, request: ReplaceDeploymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReplaceDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReplaceDeployment",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReplaceDeploymentResponse>(await this.callApi(params, req, runtime), new ReplaceDeploymentResponse({}));
  }

  async setDeploymentResourceMode(workspace: string, namespace: string, deploymentId: string, request: SetDeploymentResourceModeRequest): Promise<SetDeploymentResourceModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setDeploymentResourceModeWithOptions(workspace, namespace, deploymentId, request, headers, runtime);
  }

  async setDeploymentResourceModeWithOptions(workspace: string, namespace: string, deploymentId: string, request: SetDeploymentResourceModeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SetDeploymentResourceModeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDeploymentResourceMode",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/set-resource`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeploymentResourceModeResponse>(await this.callApi(params, req, runtime), new SetDeploymentResourceModeResponse({}));
  }

  async tableExists(namespace: string, workspace: string, cat: string, request: TableExistsRequest): Promise<TableExistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tableExistsWithOptions(namespace, workspace, cat, request, headers, runtime);
  }

  async tableExistsWithOptions(namespace: string, workspace: string, cat: string, request: TableExistsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TableExistsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.database)) {
      query["database"] = request.database;
    }

    if (!Util.isUnset(request.table)) {
      query["table"] = request.table;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TableExists",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/catalog/v1beta2/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/catalogs/${OpenApiUtil.getEncodeParam(cat)}%3AtableExists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TableExistsResponse>(await this.callApi(params, req, runtime), new TableExistsResponse({}));
  }

  async updateConnector(workspace: string, name: string, namespace: string, request: UpdateConnectorRequest): Promise<UpdateConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConnectorWithOptions(workspace, name, namespace, request, headers, runtime);
  }

  async updateConnectorWithOptions(workspace: string, name: string, namespace: string, request: UpdateConnectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConnectorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConnector",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/connectors/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConnectorResponse>(await this.callApi(params, req, runtime), new UpdateConnectorResponse({}));
  }

  async updateDeployment(namespace: string, deploymentId: string, workspace: string, request: UpdateDeploymentRequest): Promise<UpdateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDeploymentWithOptions(namespace, deploymentId, workspace, request, headers, runtime);
  }

  async updateDeploymentWithOptions(namespace: string, deploymentId: string, workspace: string, request: UpdateDeploymentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeployment",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/patch`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeploymentResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentResponse({}));
  }

  async updateDeploymentDesiredState(namespace: string, deploymentId: string, workspace: string, request: UpdateDeploymentDesiredStateRequest): Promise<UpdateDeploymentDesiredStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDeploymentDesiredStateWithOptions(namespace, deploymentId, workspace, request, headers, runtime);
  }

  async updateDeploymentDesiredStateWithOptions(namespace: string, deploymentId: string, workspace: string, request: UpdateDeploymentDesiredStateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDeploymentDesiredStateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeploymentDesiredState",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/api/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/deployments/${OpenApiUtil.getEncodeParam(deploymentId)}/state`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeploymentDesiredStateResponse>(await this.callApi(params, req, runtime), new UpdateDeploymentDesiredStateResponse({}));
  }

  async updateFormat(workspace: string, name: string, namespace: string, request: UpdateFormatRequest): Promise<UpdateFormatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFormatWithOptions(workspace, name, namespace, request, headers, runtime);
  }

  async updateFormatWithOptions(workspace: string, name: string, namespace: string, request: UpdateFormatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFormatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFormat",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/formats/${OpenApiUtil.getEncodeParam(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFormatResponse>(await this.callApi(params, req, runtime), new UpdateFormatResponse({}));
  }

  async updateMember(workspace: string, namespace: string, request: UpdateMemberRequest): Promise<UpdateMemberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemberWithOptions(workspace, namespace, request, headers, runtime);
  }

  async updateMemberWithOptions(workspace: string, namespace: string, request: UpdateMemberRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateMemberResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMember",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/members/v1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMemberResponse>(await this.callApi(params, req, runtime), new UpdateMemberResponse({}));
  }

  async updateUdfArtifact(workspace: string, namespace: string, udfArtifactName: string, request: UpdateUdfArtifactRequest): Promise<UpdateUdfArtifactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUdfArtifactWithOptions(workspace, namespace, udfArtifactName, request, headers, runtime);
  }

  async updateUdfArtifactWithOptions(workspace: string, namespace: string, udfArtifactName: string, request: UpdateUdfArtifactRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUdfArtifactResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUdfArtifact",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/udfartifacts/${OpenApiUtil.getEncodeParam(udfArtifactName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUdfArtifactResponse>(await this.callApi(params, req, runtime), new UpdateUdfArtifactResponse({}));
  }

  async validateSqlScript(namespace: string, workspace: string, request: ValidateSqlScriptRequest): Promise<ValidateSqlScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateSqlScriptWithOptions(namespace, workspace, request, headers, runtime);
  }

  async validateSqlScriptWithOptions(namespace: string, workspace: string, request: ValidateSqlScriptRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateSqlScriptResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.paramsJson)) {
      body["paramsJson"] = request.paramsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ValidateSqlScript",
      version: "2020-05-01",
      protocol: "HTTPS",
      pathname: `/pop/workspaces/${OpenApiUtil.getEncodeParam(workspace)}/sql/v1beta1/namespaces/${OpenApiUtil.getEncodeParam(namespace)}/sqlscripts%3Avalidate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateSqlScriptResponse>(await this.callApi(params, req, runtime), new ValidateSqlScriptResponse({}));
  }

}
