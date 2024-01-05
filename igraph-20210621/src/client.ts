// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ErrorResponse extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGraphRequest extends $tea.Model {
  body?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGraphResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGraphResponseBody;
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
      body: CreateGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGraphSchemaRequest extends $tea.Model {
  body?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGraphSchemaResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGraphSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGraphSchemaResponseBody;
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
      body: CreateGraphSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGraphRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGraphResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGraphResponseBody;
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
      body: DeleteGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGraphResponseBody;
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
      body: GetGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphSchemaRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphSchemaResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGraphSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGraphSchemaResponseBody;
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
      body: GetGraphSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphLabelBackFlowResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphLabelBackFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIgraphLabelBackFlowResponseBody;
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
      body: GetIgraphLabelBackFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphLabelLastBackflowResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphLabelLastBackflowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIgraphLabelLastBackflowResponseBody;
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
      body: GetIgraphLabelLastBackflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphTableDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphTableDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIgraphTableDetailResponseBody;
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
      body: GetIgraphTableDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphTablesBackFlowRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphTablesBackFlowResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIgraphTablesBackFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetIgraphTablesBackFlowResponseBody;
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
      body: GetIgraphTablesBackFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResponseBody;
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
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDigestRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDigestResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceDigestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceDigestResponseBody;
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
      body: GetInstanceDigestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDetailResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableDetailResponseBody;
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
      body: GetTableDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableLastBackflowRequest extends $tea.Model {
  partition?: string;
  static names(): { [key: string]: string } {
    return {
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableLastBackflowResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableLastBackflowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableLastBackflowResponseBody;
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
      body: GetTableLastBackflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDemoGraphSchemasResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  returnTimeMs?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      returnTimeMs: 'returnTimeMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      returnTimeMs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDemoGraphSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDemoGraphSchemasResponseBody;
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
      body: ListDemoGraphSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphSchemasRequest extends $tea.Model {
  namespace?: string;
  pageLimit?: string;
  pageStart?: string;
  returnSpec?: string;
  schemaStatus?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      pageLimit: 'pageLimit',
      pageStart: 'pageStart',
      returnSpec: 'returnSpec',
      schemaStatus: 'schemaStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pageLimit: 'string',
      pageStart: 'string',
      returnSpec: 'string',
      schemaStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphSchemasResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGraphSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGraphSchemasResponseBody;
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
      body: ListGraphSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIgraphInstancesRequest extends $tea.Model {
  pageContinue?: string;
  pageLimit?: string;
  resourceGroupId?: string;
  tags?: ListIgraphInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      pageContinue: 'pageContinue',
      pageLimit: 'pageLimit',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageContinue: 'string',
      pageLimit: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListIgraphInstancesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIgraphInstancesShrinkRequest extends $tea.Model {
  pageContinue?: string;
  pageLimit?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageContinue: 'pageContinue',
      pageLimit: 'pageLimit',
      resourceGroupId: 'resourceGroupId',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageContinue: 'string',
      pageLimit: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIgraphInstancesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: ListIgraphInstancesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIgraphInstancesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIgraphInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIgraphInstancesResponseBody;
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
      body: ListIgraphInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceGraphRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceGraphResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceGraphResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstanceGraphResponseBody;
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
      body: ListInstanceGraphResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishGraphSchemaRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishGraphSchemaResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishGraphSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishGraphSchemaResponseBody;
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
      body: PublishGraphSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchIgraphDemoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  returnTimeMs?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
      returnTimeMs: 'returnTimeMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      returnTimeMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchIgraphDemoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchIgraphDemoResponseBody;
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
      body: SearchIgraphDemoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerLabelBackflowRequest extends $tea.Model {
  odpsPartition?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      odpsPartition: 'odpsPartition',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      odpsPartition: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerLabelBackflowResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerLabelBackflowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TriggerLabelBackflowResponseBody;
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
      body: TriggerLabelBackflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGraphDescriptionRequest extends $tea.Model {
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGraphDescriptionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGraphDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGraphDescriptionResponseBody;
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
      body: UpdateGraphDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyResult extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIgraphInstancesRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIgraphInstancesResponseBodyResult extends $tea.Model {
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
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
    this._endpoint = this.getEndpoint("igraph", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createGraphWithOptions(instanceId: string, graphName: string, request: CreateGraphRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGraphResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateGraph",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGraphResponse>(await this.callApi(params, req, runtime), new CreateGraphResponse({}));
  }

  async createGraph(instanceId: string, graphName: string, request: CreateGraphRequest): Promise<CreateGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGraphWithOptions(instanceId, graphName, request, headers, runtime);
  }

  async createGraphSchemaWithOptions(instanceId: string, graphName: string, request: CreateGraphSchemaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGraphSchemaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateGraphSchema",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/schemas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGraphSchemaResponse>(await this.callApi(params, req, runtime), new CreateGraphSchemaResponse({}));
  }

  async createGraphSchema(instanceId: string, graphName: string, request: CreateGraphSchemaRequest): Promise<CreateGraphSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGraphSchemaWithOptions(instanceId, graphName, request, headers, runtime);
  }

  async deleteGraphWithOptions(instanceId: string, graphName: string, request: DeleteGraphRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGraphResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGraph",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGraphResponse>(await this.callApi(params, req, runtime), new DeleteGraphResponse({}));
  }

  async deleteGraph(instanceId: string, graphName: string, request: DeleteGraphRequest): Promise<DeleteGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGraphWithOptions(instanceId, graphName, request, headers, runtime);
  }

  async getGraphWithOptions(instanceId: string, graphName: string, request: GetGraphRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGraphResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGraph",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGraphResponse>(await this.callApi(params, req, runtime), new GetGraphResponse({}));
  }

  async getGraph(instanceId: string, graphName: string, request: GetGraphRequest): Promise<GetGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGraphWithOptions(instanceId, graphName, request, headers, runtime);
  }

  async getGraphSchemaWithOptions(instanceId: string, graphName: string, graphSchemaName: string, request: GetGraphSchemaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGraphSchemaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGraphSchema",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/schemas/${OpenApiUtil.getEncodeParam(graphSchemaName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGraphSchemaResponse>(await this.callApi(params, req, runtime), new GetGraphSchemaResponse({}));
  }

  async getGraphSchema(instanceId: string, graphName: string, graphSchemaName: string, request: GetGraphSchemaRequest): Promise<GetGraphSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGraphSchemaWithOptions(instanceId, graphName, graphSchemaName, request, headers, runtime);
  }

  async getIgraphLabelBackFlowWithOptions(graphName: string, instanceId: string, labelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIgraphLabelBackFlowResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIgraphLabelBackFlow",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/label/${OpenApiUtil.getEncodeParam(labelName)}/backflow`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIgraphLabelBackFlowResponse>(await this.callApi(params, req, runtime), new GetIgraphLabelBackFlowResponse({}));
  }

  async getIgraphLabelBackFlow(graphName: string, instanceId: string, labelName: string): Promise<GetIgraphLabelBackFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIgraphLabelBackFlowWithOptions(graphName, instanceId, labelName, headers, runtime);
  }

  async getIgraphLabelLastBackflowWithOptions(instanceId: string, graphName: string, labelName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIgraphLabelLastBackflowResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIgraphLabelLastBackflow",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/label/${OpenApiUtil.getEncodeParam(labelName)}/backflow/last`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIgraphLabelLastBackflowResponse>(await this.callApi(params, req, runtime), new GetIgraphLabelLastBackflowResponse({}));
  }

  async getIgraphLabelLastBackflow(instanceId: string, graphName: string, labelName: string): Promise<GetIgraphLabelLastBackflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIgraphLabelLastBackflowWithOptions(instanceId, graphName, labelName, headers, runtime);
  }

  async getIgraphTableDetailWithOptions(instanceId: string, graphName: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIgraphTableDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetIgraphTableDetail",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIgraphTableDetailResponse>(await this.callApi(params, req, runtime), new GetIgraphTableDetailResponse({}));
  }

  async getIgraphTableDetail(instanceId: string, graphName: string, tableName: string): Promise<GetIgraphTableDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIgraphTableDetailWithOptions(instanceId, graphName, tableName, headers, runtime);
  }

  async getIgraphTablesBackFlowWithOptions(instanceId: string, graphName: string, request: GetIgraphTablesBackFlowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetIgraphTablesBackFlowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIgraphTablesBackFlow",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/backflows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetIgraphTablesBackFlowResponse>(await this.callApi(params, req, runtime), new GetIgraphTablesBackFlowResponse({}));
  }

  async getIgraphTablesBackFlow(instanceId: string, graphName: string, request: GetIgraphTablesBackFlowRequest): Promise<GetIgraphTablesBackFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIgraphTablesBackFlowWithOptions(instanceId, graphName, request, headers, runtime);
  }

  async getInstanceWithOptions(instanceId: string, request: GetInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getInstance(instanceId: string, request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, request, headers, runtime);
  }

  async getInstanceDigestWithOptions(instanceId: string, request: GetInstanceDigestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceDigestResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceDigest",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/digest`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceDigestResponse>(await this.callApi(params, req, runtime), new GetInstanceDigestResponse({}));
  }

  async getInstanceDigest(instanceId: string, request: GetInstanceDigestRequest): Promise<GetInstanceDigestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceDigestWithOptions(instanceId, request, headers, runtime);
  }

  async getTableDetailWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTableDetail",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/tables/${OpenApiUtil.getEncodeParam(tableName)}/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableDetailResponse>(await this.callApi(params, req, runtime), new GetTableDetailResponse({}));
  }

  async getTableDetail(instanceId: string, tableName: string): Promise<GetTableDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableDetailWithOptions(instanceId, tableName, headers, runtime);
  }

  async getTableLastBackflowWithOptions(instanceId: string, tableName: string, request: GetTableLastBackflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableLastBackflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.partition)) {
      query["partition"] = request.partition;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableLastBackflow",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/table/${OpenApiUtil.getEncodeParam(tableName)}/backflow/last`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableLastBackflowResponse>(await this.callApi(params, req, runtime), new GetTableLastBackflowResponse({}));
  }

  async getTableLastBackflow(instanceId: string, tableName: string, request: GetTableLastBackflowRequest): Promise<GetTableLastBackflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableLastBackflowWithOptions(instanceId, tableName, request, headers, runtime);
  }

  async listDemoGraphSchemasWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDemoGraphSchemasResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListDemoGraphSchemas",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/demo/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDemoGraphSchemasResponse>(await this.callApi(params, req, runtime), new ListDemoGraphSchemasResponse({}));
  }

  async listDemoGraphSchemas(): Promise<ListDemoGraphSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDemoGraphSchemasWithOptions(headers, runtime);
  }

  async listGraphSchemasWithOptions(instanceId: string, graphName: string, request: ListGraphSchemasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGraphSchemasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageLimit)) {
      query["pageLimit"] = request.pageLimit;
    }

    if (!Util.isUnset(request.pageStart)) {
      query["pageStart"] = request.pageStart;
    }

    if (!Util.isUnset(request.returnSpec)) {
      query["returnSpec"] = request.returnSpec;
    }

    if (!Util.isUnset(request.schemaStatus)) {
      query["schemaStatus"] = request.schemaStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGraphSchemas",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGraphSchemasResponse>(await this.callApi(params, req, runtime), new ListGraphSchemasResponse({}));
  }

  async listGraphSchemas(instanceId: string, graphName: string, request: ListGraphSchemasRequest): Promise<ListGraphSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGraphSchemasWithOptions(instanceId, graphName, request, headers, runtime);
  }

  async listIgraphInstancesWithOptions(tmpReq: ListIgraphInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIgraphInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListIgraphInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageContinue)) {
      query["pageContinue"] = request.pageContinue;
    }

    if (!Util.isUnset(request.pageLimit)) {
      query["pageLimit"] = request.pageLimit;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIgraphInstances",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListIgraphInstancesResponse>(await this.callApi(params, req, runtime), new ListIgraphInstancesResponse({}));
  }

  async listIgraphInstances(request: ListIgraphInstancesRequest): Promise<ListIgraphInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIgraphInstancesWithOptions(request, headers, runtime);
  }

  async listInstanceGraphWithOptions(instanceId: string, request: ListInstanceGraphRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceGraphResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceGraph",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceGraphResponse>(await this.callApi(params, req, runtime), new ListInstanceGraphResponse({}));
  }

  async listInstanceGraph(instanceId: string, request: ListInstanceGraphRequest): Promise<ListInstanceGraphResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceGraphWithOptions(instanceId, request, headers, runtime);
  }

  async publishGraphSchemaWithOptions(instanceId: string, graphName: string, graphSchemaName: string, request: PublishGraphSchemaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishGraphSchemaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishGraphSchema",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/schemas/${OpenApiUtil.getEncodeParam(graphSchemaName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishGraphSchemaResponse>(await this.callApi(params, req, runtime), new PublishGraphSchemaResponse({}));
  }

  async publishGraphSchema(instanceId: string, graphName: string, graphSchemaName: string, request: PublishGraphSchemaRequest): Promise<PublishGraphSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishGraphSchemaWithOptions(instanceId, graphName, graphSchemaName, request, headers, runtime);
  }

  async searchIgraphDemoWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchIgraphDemoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "SearchIgraphDemo",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/tool/actions/search_demo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchIgraphDemoResponse>(await this.callApi(params, req, runtime), new SearchIgraphDemoResponse({}));
  }

  async searchIgraphDemo(): Promise<SearchIgraphDemoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchIgraphDemoWithOptions(headers, runtime);
  }

  async triggerLabelBackflowWithOptions(instanceId: string, graphName: string, labelName: string, request: TriggerLabelBackflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TriggerLabelBackflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.odpsPartition)) {
      query["odpsPartition"] = request.odpsPartition;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["timestamp"] = request.timestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerLabelBackflow",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/label/${OpenApiUtil.getEncodeParam(labelName)}/backflow`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TriggerLabelBackflowResponse>(await this.callApi(params, req, runtime), new TriggerLabelBackflowResponse({}));
  }

  async triggerLabelBackflow(instanceId: string, graphName: string, labelName: string, request: TriggerLabelBackflowRequest): Promise<TriggerLabelBackflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerLabelBackflowWithOptions(instanceId, graphName, labelName, request, headers, runtime);
  }

  async updateGraphDescriptionWithOptions(instanceId: string, graphName: string, request: UpdateGraphDescriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGraphDescriptionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGraphDescription",
      version: "2021-06-21",
      protocol: "HTTPS",
      pathname: `/openapi/igraph/instances/${OpenApiUtil.getEncodeParam(instanceId)}/graphs/${OpenApiUtil.getEncodeParam(graphName)}/description`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGraphDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateGraphDescriptionResponse({}));
  }

  async updateGraphDescription(instanceId: string, graphName: string, request: UpdateGraphDescriptionRequest): Promise<UpdateGraphDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGraphDescriptionWithOptions(instanceId, graphName, request, headers, runtime);
  }

}
